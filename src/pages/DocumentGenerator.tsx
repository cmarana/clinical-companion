import { useState, useRef, useMemo, useCallback } from "react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText, Printer, Plus, Trash2, Pill, Stethoscope, User, Hash, Building2, ShieldCheck, ExternalLink, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { prescriptionCategories } from "@/data/prescriptions/index";

// ── Parse medication lines from prescription text ──
interface MedSuggestion {
  name: string;
  dose: string;
  route: string;
  frequency: string;
  duration: string;
  instructions: string;
  source: string; // which prescription it came from
}

function parsePrescriptionLines(): MedSuggestion[] {
  const suggestions: MedSuggestion[] = [];
  const seen = new Set<string>();

  for (const cat of prescriptionCategories) {
    for (const item of cat.items) {
      const lines = item.prescription.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.length < 5) continue;

        // Match patterns like "1. Medicamento 500mg EV 8/8h" or "- Medicamento ..."
        const match = trimmed.match(
          /^(?:\d+[\.\)]\s*|-\s*)?([A-ZÀ-Ú][a-záà-ú]+(?:\s+[a-záà-ú]+)*(?:\s*\+\s*[A-ZÀ-Ú][a-záà-ú]+(?:\s+[a-záà-ú]+)*)*)\s+([\d,\.]+\s*(?:mg|g|mcg|UI|mL|%|mg\/kg|mcg\/kg|mEq|mmol)[^\s]*)\s+(?:(VO|EV|IV|IM|SC|SL|VR|Tópico|Inalatório|Nasal|Oftálmico|SNG|SNE)\s+)?(?:(?:de\s+)?(\d+\/\d+h|\d+x\/dia|[A-Z]+|dose única|contínuo|conforme[^,\n]*))?/i
        );

        if (match) {
          const name = match[1].trim();
          const key = name.toLowerCase();
          if (seen.has(key)) continue;
          seen.add(key);

          suggestions.push({
            name,
            dose: match[2]?.trim() || "",
            route: (match[3] || "VO").replace("EV", "IV"),
            frequency: match[4]?.trim() || "",
            duration: "",
            instructions: "",
            source: item.title,
          });
        } else {
          // Simpler pattern: just drug name + dose
          const simpleMatch = trimmed.match(
            /^(?:\d+[\.\)]\s*|-\s*)?([A-ZÀ-Ú][a-záà-ú]+(?:\s+[a-záà-ú]+){0,3})\s+([\d,\.]+\s*(?:mg|g|mcg|UI|mL|%)[^\s]*)/i
          );
          if (simpleMatch) {
            const name = simpleMatch[1].trim();
            const key = name.toLowerCase();
            if (seen.has(key)) continue;
            seen.add(key);

            // Try to extract route and frequency from the rest of the line
            const rest = trimmed.slice(trimmed.indexOf(simpleMatch[2]) + simpleMatch[2].length);
            const routeMatch = rest.match(/\b(VO|EV|IV|IM|SC|SL|VR|Tópico|Inalatório)\b/i);
            const freqMatch = rest.match(/(\d+\/\d+h|\d+x\/dia|dose única)/i);

            suggestions.push({
              name,
              dose: simpleMatch[2]?.trim() || "",
              route: (routeMatch?.[1] || "VO").replace("EV", "IV"),
              frequency: freqMatch?.[1]?.trim() || "",
              duration: "",
              instructions: "",
              source: item.title,
            });
          }
        }
      }
    }
  }
  return suggestions;
}

interface Medication {
  id: string;
  name: string;
  dose: string;
  route: string;
  frequency: string;
  duration: string;
  instructions: string;
}

const emptyMed = (): Medication => ({
  id: crypto.randomUUID(),
  name: "",
  dose: "",
  route: "VO",
  frequency: "",
  duration: "",
  instructions: "",
});

const routes = ["VO", "IV", "IM", "SC", "Tópico", "Retal", "Inalatório", "SL", "Nasal", "Oftálmico"];

const prescriptionTypes = [
  { id: "simple", label: "Receituário Simples" },
  { id: "special", label: "Receituário Especial" },
];

const digitalCertProviders = [
  { name: "BirdID (Soluti)", url: "https://bfranceschi.bfranceschi.birdid.com.br/", desc: "Certificado digital em nuvem, aceito pelo CFM. Emissão 100% online em minutos." },
  { name: "Certisign", url: "https://www.certisign.com.br/certificado-digital/e-cpf", desc: "Certificado e-CPF A1 ou A3, reconhecido nacionalmente." },
  { name: "Serasa Experian", url: "https://serasa.certificadodigital.com.br/", desc: "Certificado digital ICP-Brasil para assinatura eletrônica." },
  { name: "Safeweb", url: "https://www.safeweb.com.br/certificado-digital", desc: "Certificado digital para profissionais de saúde." },
  { name: "Valid Certificadora", url: "https://www.validcertificadora.com.br/", desc: "e-CPF e certificados para médicos." },
];

export default function DocumentGenerator() {
  const { user } = useAuth();
  const printRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState("prescription");

  // Doctor info
  const [doctorName, setDoctorName] = useState("");
  const [doctorCRM, setDoctorCRM] = useState("");
  const [doctorCRMState, setDoctorCRMState] = useState("");
  const [doctorSpecialty, setDoctorSpecialty] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicPhone, setClinicPhone] = useState("");

  // Patient info
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientCPF, setPatientCPF] = useState("");
  const [patientAddress, setPatientAddress] = useState("");

  // Prescription
  const [prescriptionType, setPrescriptionType] = useState("simple");
  const [medications, setMedications] = useState<Medication[]>([emptyMed()]);
  const [prescriptionNotes, setPrescriptionNotes] = useState("");

  // Certificate
  const [cidCode, setCidCode] = useState("");
  const [cidDescription, setCidDescription] = useState("");
  const [daysOff, setDaysOff] = useState("");
  const [certificateReason, setCertificateReason] = useState("");
  const [certificateNotes, setCertificateNotes] = useState("");

  // Autocomplete
  const [activeMedId, setActiveMedId] = useState<string | null>(null);
  const medSuggestions = useMemo(() => parsePrescriptionLines(), []);

  // Load profile
  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, crm, crm_state, specialty")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setDoctorName(data.full_name || "");
          setDoctorCRM(data.crm || "");
          setDoctorCRMState(data.crm_state || "");
          setDoctorSpecialty(data.specialty || "");
        }
      });
  }, [user]);

  const addMedication = () => setMedications(prev => [...prev, emptyMed()]);
  const removeMedication = (id: string) => setMedications(prev => prev.filter(m => m.id !== id));
  const updateMedication = (id: string, field: keyof Medication, value: string) => {
    setMedications(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const applySuggestion = useCallback((medId: string, suggestion: MedSuggestion) => {
    setMedications(prev => prev.map(m => m.id === medId ? {
      ...m,
      name: suggestion.name,
      dose: suggestion.dose,
      route: routes.includes(suggestion.route) ? suggestion.route : "VO",
      frequency: suggestion.frequency,
      duration: suggestion.duration,
      instructions: suggestion.instructions,
    } : m));
    setActiveMedId(null);
  }, []);

  const getFilteredSuggestions = useCallback((query: string) => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return medSuggestions.filter(s => {
      const name = s.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return name.includes(q);
    }).slice(0, 8);
  }, [medSuggestions]);

  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`<!DOCTYPE html><html><head>
      <title>${tab === "prescription" ? "Receituário" : "Atestado Médico"}</title>
      <style>
        @page { size: A4; margin: 20mm; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Times New Roman', serif; font-size: 12pt; color: #1a1a1a; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px; }
        .header h1 { font-size: 16pt; font-weight: bold; color: #1e40af; margin-bottom: 4px; }
        .header .crm { font-size: 11pt; color: #4b5563; }
        .header .clinic { font-size: 10pt; color: #6b7280; margin-top: 4px; }
        .doc-type { text-align: center; font-size: 14pt; font-weight: bold; text-transform: uppercase; margin: 20px 0; letter-spacing: 2px; color: #1e40af; border: 1px solid #1e40af; padding: 8px; }
        .doc-type.special { color: #d97706; border-color: #d97706; }
        .patient-info { margin-bottom: 20px; font-size: 11pt; }
        .patient-info p { margin-bottom: 4px; }
        .patient-info strong { font-weight: bold; }
        .med-list { margin: 16px 0; }
        .med-item { margin-bottom: 16px; padding-left: 8px; border-left: 3px solid #2563eb; }
        .med-item.special { border-left-color: #d97706; }
        .med-name { font-weight: bold; font-size: 12pt; }
        .med-detail { font-size: 11pt; color: #374151; margin-top: 2px; }
        .med-instructions { font-size: 10pt; color: #6b7280; font-style: italic; margin-top: 2px; }
        .notes { margin-top: 20px; padding: 12px; background: #f9fafb; border: 1px solid #e5e7eb; font-size: 10pt; }
        .signature { margin-top: 60px; text-align: center; }
        .signature .line { width: 300px; border-top: 1px solid #1a1a1a; margin: 0 auto 8px; }
        .signature .name { font-weight: bold; font-size: 11pt; }
        .signature .crm { font-size: 10pt; color: #4b5563; }
        .date { text-align: right; margin-top: 24px; font-size: 10pt; color: #6b7280; }
        .certificate-body { font-size: 12pt; line-height: 2; text-align: justify; margin: 24px 0; }
        .digital-sig { margin-top: 40px; border: 1px dashed #9ca3af; padding: 16px; text-align: center; font-size: 10pt; color: #6b7280; }
      </style></head><body>${printContent.innerHTML}</body></html>`);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 300);
  };

  const isSpecial = prescriptionType === "special";

  return (
    <>
      <TopBar title="Documentos Médicos" />
      <div className="px-4 py-4 max-w-lg md:max-w-2xl mx-auto pb-24">
        <div className="mb-4">
          <h1 className="text-xl font-bold font-heading flex items-center gap-2">
            <FileText size={20} className="text-primary" />
            Gerador de Documentos
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Receituários e atestados com sugestões automáticas e assinatura digital
          </p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prescription" className="text-xs gap-1">
              <Pill size={13} /> Receita
            </TabsTrigger>
            <TabsTrigger value="certificate" className="text-xs gap-1">
              <Stethoscope size={13} /> Atestado
            </TabsTrigger>
            <TabsTrigger value="digital-cert" className="text-xs gap-1">
              <ShieldCheck size={13} /> Cert. Digital
            </TabsTrigger>
          </TabsList>

          {/* Doctor Info */}
          {tab !== "digital-cert" && (
            <div className="mt-4 bg-card rounded-2xl p-4 shadow-sm space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Building2 size={12} /> Dados do Médico / Clínica
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <Label className="text-xs">Nome do Médico</Label>
                  <Input value={doctorName} onChange={e => setDoctorName(e.target.value)} placeholder="Dr(a). Nome Completo" className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">CRM</Label>
                  <Input value={doctorCRM} onChange={e => setDoctorCRM(e.target.value)} placeholder="123456" className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">UF</Label>
                  <Input value={doctorCRMState} onChange={e => setDoctorCRMState(e.target.value)} placeholder="SP" className="h-9 text-sm" maxLength={2} />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs">Especialidade</Label>
                  <Input value={doctorSpecialty} onChange={e => setDoctorSpecialty(e.target.value)} placeholder="Clínica Médica" className="h-9 text-sm" />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs">Clínica / Hospital</Label>
                  <Input value={clinicName} onChange={e => setClinicName(e.target.value)} placeholder="Hospital São Paulo" className="h-9 text-sm" />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs">Endereço</Label>
                  <Input value={clinicAddress} onChange={e => setClinicAddress(e.target.value)} placeholder="Rua, nº - Cidade/UF" className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">Telefone</Label>
                  <Input value={clinicPhone} onChange={e => setClinicPhone(e.target.value)} placeholder="(11) 99999-0000" className="h-9 text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* Patient Info */}
          {tab !== "digital-cert" && (
            <div className="mt-3 bg-card rounded-2xl p-4 shadow-sm space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <User size={12} /> Dados do Paciente
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <Label className="text-xs">Nome Completo</Label>
                  <Input value={patientName} onChange={e => setPatientName(e.target.value)} placeholder="Nome do paciente" className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">Idade</Label>
                  <Input value={patientAge} onChange={e => setPatientAge(e.target.value)} placeholder="35 anos" className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">CPF</Label>
                  <Input value={patientCPF} onChange={e => setPatientCPF(e.target.value)} placeholder="000.000.000-00" className="h-9 text-sm" />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs">Endereço</Label>
                  <Input value={patientAddress} onChange={e => setPatientAddress(e.target.value)} placeholder="Endereço completo" className="h-9 text-sm" />
                </div>
              </div>
            </div>
          )}

          {/* PRESCRIPTION TAB */}
          <TabsContent value="prescription" className="mt-3 space-y-3">
            <div className="flex gap-2">
              {prescriptionTypes.map(pt => (
                <button
                  key={pt.id}
                  onClick={() => setPrescriptionType(pt.id)}
                  className={cn(
                    "flex-1 px-3 py-2 rounded-xl text-xs font-medium transition-all border",
                    prescriptionType === pt.id
                      ? pt.id === "special"
                        ? "bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400"
                        : "bg-primary/10 border-primary text-primary"
                      : "bg-card border-border text-muted-foreground"
                  )}
                >
                  {pt.label}
                </button>
              ))}
            </div>

            {/* Medications with autocomplete */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Pill size={12} /> Medicamentos
                <span className="text-[10px] font-normal text-muted-foreground ml-auto">
                  💡 Digite o nome para sugestões do guia
                </span>
              </h3>
              {medications.map((med, idx) => {
                const suggestions = activeMedId === med.id ? getFilteredSuggestions(med.name) : [];
                return (
                  <div key={med.id} className="bg-card rounded-2xl p-4 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[10px]">{idx + 1}º Medicamento</Badge>
                      {medications.length > 1 && (
                        <button onClick={() => removeMedication(med.id)} className="text-destructive">
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>

                    {/* Name with autocomplete */}
                    <div className="relative">
                      <div className="relative">
                        <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          value={med.name}
                          onChange={e => {
                            updateMedication(med.id, "name", e.target.value);
                            setActiveMedId(med.id);
                          }}
                          onFocus={() => setActiveMedId(med.id)}
                          onBlur={() => setTimeout(() => setActiveMedId(null), 200)}
                          placeholder="Buscar medicamento..."
                          className="h-9 text-sm font-medium pl-8"
                        />
                      </div>
                      {suggestions.length > 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-xl shadow-lg max-h-52 overflow-y-auto">
                          {suggestions.map((s, i) => (
                            <button
                              key={i}
                              className="w-full text-left px-3 py-2 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                applySuggestion(med.id, s);
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <Pill size={12} className="text-primary shrink-0" />
                                <div className="min-w-0">
                                  <p className="text-sm font-medium truncate">{s.name} <span className="text-muted-foreground font-normal">{s.dose}</span></p>
                                  <p className="text-[10px] text-muted-foreground truncate">
                                    {s.route} {s.frequency && `• ${s.frequency}`} — <span className="italic">{s.source}</span>
                                  </p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Input value={med.dose} onChange={e => updateMedication(med.id, "dose", e.target.value)} placeholder="Dose (ex: 500mg)" className="h-9 text-sm" />
                      <Select value={med.route} onValueChange={v => updateMedication(med.id, "route", v)}>
                        <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {routes.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input value={med.frequency} onChange={e => updateMedication(med.id, "frequency", e.target.value)} placeholder="Frequência (8/8h)" className="h-9 text-sm" />
                      <Input value={med.duration} onChange={e => updateMedication(med.id, "duration", e.target.value)} placeholder="Duração (7 dias)" className="h-9 text-sm" />
                    </div>
                    <Input value={med.instructions} onChange={e => updateMedication(med.id, "instructions", e.target.value)} placeholder="Instruções (Tomar após refeições)" className="h-9 text-sm" />
                  </div>
                );
              })}
              <Button onClick={addMedication} variant="outline" size="sm" className="w-full gap-1.5">
                <Plus size={14} /> Adicionar Medicamento
              </Button>
            </div>

            <div>
              <Label className="text-xs">Observações</Label>
              <Textarea value={prescriptionNotes} onChange={e => setPrescriptionNotes(e.target.value)} placeholder="Orientações adicionais..." className="text-sm min-h-[60px]" />
            </div>
          </TabsContent>

          {/* CERTIFICATE TAB */}
          <TabsContent value="certificate" className="mt-3 space-y-3">
            <div className="bg-card rounded-2xl p-4 shadow-sm space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Hash size={12} /> CID-10 e Período
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">Código CID-10</Label>
                  <Input value={cidCode} onChange={e => setCidCode(e.target.value.toUpperCase())} placeholder="J18.9" className="h-9 text-sm" />
                </div>
                <div>
                  <Label className="text-xs">Dias de Afastamento</Label>
                  <Input value={daysOff} onChange={e => setDaysOff(e.target.value)} placeholder="3" type="number" className="h-9 text-sm" />
                </div>
              </div>
              <div>
                <Label className="text-xs">Descrição do CID</Label>
                <Input value={cidDescription} onChange={e => setCidDescription(e.target.value)} placeholder="Pneumonia não especificada" className="h-9 text-sm" />
              </div>
              <div>
                <Label className="text-xs">Justificativa</Label>
                <Textarea value={certificateReason} onChange={e => setCertificateReason(e.target.value)} placeholder="Paciente necessita de repouso..." className="text-sm min-h-[60px]" />
              </div>
              <div>
                <Label className="text-xs">Observações</Label>
                <Textarea value={certificateNotes} onChange={e => setCertificateNotes(e.target.value)} placeholder="Retorno em X dias..." className="text-sm min-h-[60px]" />
              </div>
            </div>
          </TabsContent>

          {/* DIGITAL CERTIFICATE TAB */}
          <TabsContent value="digital-cert" className="mt-3 space-y-3">
            <div className="bg-card rounded-2xl p-4 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Assinatura Digital CFM</h3>
                  <p className="text-xs text-muted-foreground">Certificado ICP-Brasil para validade jurídica</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-3">
                <p className="text-xs leading-relaxed">
                  Para assinar digitalmente receituários e atestados com validade legal, o médico precisa de um 
                  <strong> Certificado Digital ICP-Brasil</strong> (e-CPF A1 ou A3), conforme resolução CFM nº 2.299/2021. 
                  Abaixo estão as principais certificadoras autorizadas:
                </p>
              </div>

              <div className="space-y-2">
                {digitalCertProviders.map(prov => (
                  <a
                    key={prov.name}
                    href={prov.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold">{prov.name}</p>
                      <p className="text-[10px] text-muted-foreground leading-snug">{prov.desc}</p>
                    </div>
                    <ExternalLink size={14} className="text-muted-foreground shrink-0" />
                  </a>
                ))}
              </div>

              <div className="bg-amber-500/10 dark:bg-amber-500/5 rounded-xl p-3 space-y-2">
                <h4 className="text-xs font-semibold text-amber-600 dark:text-amber-400">⚕️ Resolução CFM nº 2.299/2021</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>• Prescrições digitais devem usar certificado ICP-Brasil</li>
                  <li>• Validade para receitas simples, especiais e antimicrobianos</li>
                  <li>• Atestados digitais devem conter CRM + CID (com autorização)</li>
                  <li>• Documentos devem ser gerados em PDF/A com carimbo temporal</li>
                  <li>• Aceito em todo território nacional e farmácias</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-3">
                <h4 className="text-xs font-semibold mb-1.5">📋 Como funciona:</h4>
                <ol className="text-[11px] text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Adquira seu certificado digital (e-CPF) em uma certificadora</li>
                  <li>Instale o certificado no seu computador ou use certificado em nuvem</li>
                  <li>Gere a receita/atestado neste app e imprima em PDF</li>
                  <li>Assine o PDF com seu certificado digital (Adobe Acrobat, AssineBem, etc.)</li>
                  <li>Envie ao paciente por e-mail ou WhatsApp</li>
                </ol>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Print Button */}
        {tab !== "digital-cert" && (
          <Button onClick={handlePrint} className="w-full gap-2 h-12 text-sm font-semibold rounded-2xl" size="lg">
            <Printer size={18} />
            Imprimir {tab === "prescription" ? "Receituário" : "Atestado"}
          </Button>
        )}

        {/* HIDDEN PRINT CONTENT */}
        <div className="hidden">
          <div ref={printRef}>
            {tab === "prescription" ? (
              <div>
                <div className="header">
                  <h1>{doctorName || "Nome do Médico"}</h1>
                  <div className="crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || "Especialidade"}</div>
                  {clinicName && <div className="clinic">{clinicName}</div>}
                  {clinicAddress && <div className="clinic">{clinicAddress} {clinicPhone ? `| Tel: ${clinicPhone}` : ""}</div>}
                </div>
                <div className={`doc-type ${isSpecial ? "special" : ""}`}>
                  {isSpecial ? "Receituário de Controle Especial" : "Receituário Simples"}
                </div>
                <div className="patient-info">
                  <p><strong>Paciente:</strong> {patientName || "________________________"}</p>
                  <p><strong>Idade:</strong> {patientAge || "____"} {patientCPF ? ` | CPF: ${patientCPF}` : ""}</p>
                  {patientAddress && <p><strong>Endereço:</strong> {patientAddress}</p>}
                  <p><strong>Data:</strong> {today}</p>
                </div>
                <div className="med-list">
                  {medications.filter(m => m.name).map((med, idx) => (
                    <div key={med.id} className={`med-item ${isSpecial ? "special" : ""}`}>
                      <div className="med-name">{idx + 1}. {med.name} {med.dose}</div>
                      <div className="med-detail">
                        Via: {med.route} | Posologia: {med.frequency || "Conforme orientação"} {med.duration ? `| Duração: ${med.duration}` : ""}
                      </div>
                      {med.instructions && <div className="med-instructions">{med.instructions}</div>}
                    </div>
                  ))}
                </div>
                {prescriptionNotes && <div className="notes"><strong>Observações:</strong> {prescriptionNotes}</div>}
                <div className="signature">
                  <div className="line"></div>
                  <div className="name">{doctorName || "Nome do Médico"}</div>
                  <div className="crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"}</div>
                </div>
                <div className="digital-sig">Espaço reservado para assinatura digital ICP-Brasil</div>
                <div className="date">{today}</div>
              </div>
            ) : (
              <div>
                <div className="header">
                  <h1>{doctorName || "Nome do Médico"}</h1>
                  <div className="crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || "Especialidade"}</div>
                  {clinicName && <div className="clinic">{clinicName}</div>}
                  {clinicAddress && <div className="clinic">{clinicAddress} {clinicPhone ? `| Tel: ${clinicPhone}` : ""}</div>}
                </div>
                <div className="doc-type">Atestado Médico</div>
                <div className="certificate-body">
                  Atesto, para os devidos fins, que o(a) paciente <strong>{patientName || "________________________"}</strong>
                  {patientAge ? `, ${patientAge}` : ""}
                  {patientCPF ? `, CPF: ${patientCPF}` : ""}
                  , foi atendido(a) nesta data e necessita de afastamento de suas atividades
                  {daysOff ? ` por ${daysOff} (${numberToWords(parseInt(daysOff) || 0)}) dia(s)` : ""}
                  , a partir de {today}
                  {cidCode ? `. CID-10: ${cidCode}${cidDescription ? ` — ${cidDescription}` : ""}` : ""}.
                </div>
                {certificateReason && (
                  <div className="certificate-body" style={{ marginTop: 0 }}>
                    <strong>Justificativa:</strong> {certificateReason}
                  </div>
                )}
                {certificateNotes && <div className="notes"><strong>Observações:</strong> {certificateNotes}</div>}
                <div className="signature">
                  <div className="line"></div>
                  <div className="name">{doctorName || "Nome do Médico"}</div>
                  <div className="crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"}</div>
                </div>
                <div className="digital-sig">Espaço reservado para assinatura digital ICP-Brasil</div>
                <div className="date">{today}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function numberToWords(n: number): string {
  if (n === 0) return "zero";
  const units = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
    "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
  const tens = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  const hundreds = ["", "cento", "duzentos", "trezentos"];
  if (n < 20) return units[n];
  if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ` e ${units[n % 10]}` : "");
  if (n === 100) return "cem";
  if (n < 400) return hundreds[Math.floor(n / 100)] + (n % 100 ? ` e ${numberToWords(n % 100)}` : "");
  return String(n);
}
