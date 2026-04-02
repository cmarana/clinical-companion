import { useState, useRef, useMemo, useCallback } from "react";
import PrescriptionInteractionAlert from "@/components/PrescriptionInteractionAlert";
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
  const [showSignDialog, setShowSignDialog] = useState(false);
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

  const handlePrintRequest = () => {
    setShowSignDialog(true);
  };

  const executePrint = () => {
    setShowSignDialog(false);
    setTimeout(() => {
      const printContent = printRef.current;
      if (!printContent) return;
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;
      const isSpecialDoc = prescriptionType === "special";
      const accentColor = isSpecialDoc ? "#b45309" : "#1e3a5f";
      const accentLight = isSpecialDoc ? "#fef3c7" : "#e8f0fe";
      const docTitle = tab === "prescription"
        ? (isSpecialDoc ? "RECEITUÁRIO DE CONTROLE ESPECIAL" : "RECEITUÁRIO SIMPLES")
        : "ATESTADO MÉDICO";

      printWindow.document.write(`<!DOCTYPE html><html><head>
        <title>${docTitle}</title>
        <style>
          @page { size: A4; margin: 18mm 20mm 22mm 20mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Times New Roman', 'Georgia', serif; font-size: 12pt; color: #111; line-height: 1.5; }
          
          .page { position: relative; min-height: 257mm; }
          
          /* Header - Brazilian medical standard */
          .header { 
            border-bottom: 3px double ${accentColor}; 
            padding-bottom: 14px; 
            margin-bottom: 20px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
          }
          .header-logo {
            width: 60px; height: 60px; border-radius: 8px;
            background: ${accentLight}; border: 1px solid ${accentColor}30;
            display: flex; align-items: center; justify-content: center;
            font-size: 24pt; color: ${accentColor}; font-weight: bold;
            flex-shrink: 0;
          }
          .header-text { flex: 1; }
          .header-text h1 { 
            font-size: 15pt; font-weight: bold; color: ${accentColor}; 
            margin-bottom: 2px; letter-spacing: 0.5px;
          }
          .header-text .subtitle { font-size: 10pt; color: #555; margin-bottom: 1px; }
          .header-text .contact { font-size: 9pt; color: #777; }
          
          /* Document type badge */
          .doc-badge {
            text-align: center; margin: 16px 0 20px;
            padding: 10px 0;
            font-size: 13pt; font-weight: bold; letter-spacing: 3px;
            text-transform: uppercase; color: ${accentColor};
            border-top: 1.5px solid ${accentColor};
            border-bottom: 1.5px solid ${accentColor};
            background: ${accentLight};
          }
          
          /* Patient box */
          .patient-box {
            border: 1px solid #ccc; border-radius: 6px;
            padding: 12px 14px; margin-bottom: 18px;
            background: #fafafa;
          }
          .patient-box .label { 
            font-size: 8pt; text-transform: uppercase; letter-spacing: 1px; 
            color: #888; font-weight: bold; margin-bottom: 6px;
          }
          .patient-box p { font-size: 11pt; margin-bottom: 3px; }
          .patient-box p strong { color: #333; }
          
          /* Prescription use section */
          .use-header {
            font-size: 10pt; font-weight: bold; color: ${accentColor};
            text-transform: uppercase; letter-spacing: 1px;
            border-bottom: 1px solid ${accentColor}40;
            padding-bottom: 4px; margin: 18px 0 12px;
          }
          
          /* Medication items */
          .med-item { 
            margin-bottom: 14px; padding: 10px 12px;
            border-left: 4px solid ${accentColor};
            background: ${accentLight}40;
            border-radius: 0 4px 4px 0;
            page-break-inside: avoid;
          }
          .med-number { 
            display: inline-block; width: 22px; height: 22px; 
            background: ${accentColor}; color: white; border-radius: 50%;
            text-align: center; line-height: 22px; font-size: 10pt;
            font-weight: bold; margin-right: 8px; vertical-align: middle;
          }
          .med-name { font-weight: bold; font-size: 12pt; vertical-align: middle; }
          .med-detail { font-size: 11pt; color: #333; margin-top: 4px; padding-left: 30px; }
          .med-instructions { font-size: 10pt; color: #555; font-style: italic; margin-top: 3px; padding-left: 30px; }
          
          /* Notes section */
          .notes-box {
            margin-top: 16px; padding: 10px 14px;
            border: 1px dashed #aaa; border-radius: 4px;
            font-size: 10pt; color: #444;
            page-break-inside: avoid;
          }
          .notes-box strong { color: #333; }
          
          /* Certificate body text */
          .cert-body { 
            font-size: 12pt; line-height: 2; text-align: justify; 
            margin: 20px 0; text-indent: 50px;
          }
          
          /* Signature area */
          .signature-area {
            margin-top: 50px; text-align: center;
            page-break-inside: avoid;
          }
          .sig-line { 
            width: 280px; border-top: 1.5px solid #333; 
            margin: 0 auto 6px; 
          }
          .sig-name { font-weight: bold; font-size: 11pt; color: #111; }
          .sig-crm { font-size: 10pt; color: #555; }
          
          /* Digital signature placeholder */
          .digital-sig {
            margin-top: 30px; padding: 14px;
            border: 2px dashed ${accentColor}60;
            border-radius: 6px; text-align: center;
            background: ${accentLight}40;
            page-break-inside: avoid;
          }
          .digital-sig .icon { font-size: 18pt; margin-bottom: 4px; }
          .digital-sig .title { font-size: 10pt; font-weight: bold; color: ${accentColor}; }
          .digital-sig .desc { font-size: 8pt; color: #777; margin-top: 2px; }
          
          /* Footer */
          .footer {
            position: absolute; bottom: 0; left: 0; right: 0;
            border-top: 1px solid #ddd; padding-top: 8px;
            display: flex; justify-content: space-between;
            font-size: 8pt; color: #999;
          }
          
          /* Special control: two-part layout */
          .two-part { display: flex; gap: 0; }
          .two-part .part { flex: 1; }
          .two-part .divider { 
            width: 0; border-left: 2px dashed #b45309; 
            margin: 0 16px; position: relative;
          }
          .two-part .divider::after {
            content: "✂"; position: absolute; top: 50%; left: -8px;
            transform: translateY(-50%); font-size: 14pt; color: #b45309;
          }
          .via-label {
            font-size: 9pt; font-weight: bold; text-transform: uppercase;
            letter-spacing: 1px; color: ${accentColor};
            margin-bottom: 10px; text-align: center;
            padding: 4px; background: ${accentLight}; border-radius: 3px;
          }
        </style></head><body>${printContent.innerHTML}</body></html>`);
      printWindow.document.close();
      setTimeout(() => printWindow.print(), 400);
    }, 300);
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
          <Button onClick={handlePrintRequest} className="w-full gap-2 h-12 text-sm font-semibold rounded-2xl" size="lg">
            <Printer size={18} />
            Gerar {tab === "prescription" ? "Receituário" : "Atestado"}
          </Button>
        )}

        {/* Digital Signature Dialog - shown before printing */}
        <Dialog open={showSignDialog} onOpenChange={setShowSignDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-primary" />
                Assinatura Digital
              </DialogTitle>
              <DialogDescription>
                Para validade jurídica (CFM nº 2.299/2021), assine o documento com certificado ICP-Brasil após gerar o PDF.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-2 my-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Obter certificado digital:</p>
              {digitalCertProviders.slice(0, 3).map(prov => (
                <a
                  key={prov.name}
                  href={prov.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <ShieldCheck size={16} className="text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{prov.name}</p>
                    <p className="text-[10px] text-muted-foreground">{prov.desc}</p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground shrink-0" />
                </a>
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-3 text-[11px] text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">📋 Fluxo recomendado:</p>
              <p>1. Clique em "Gerar PDF" abaixo</p>
              <p>2. Salve como PDF (Ctrl+P → Salvar como PDF)</p>
              <p>3. Assine o PDF com seu certificado digital</p>
              <p>4. Envie ao paciente por e-mail ou WhatsApp</p>
            </div>

            <div className="flex gap-2 mt-2">
              <Button variant="outline" onClick={() => setShowSignDialog(false)} className="flex-1">
                Cancelar
              </Button>
              <Button onClick={executePrint} className="flex-1 gap-2">
                <Printer size={16} />
                Gerar PDF
                <ArrowRight size={14} />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* HIDDEN PRINT CONTENT */}
        <div className="hidden">
          <div ref={printRef}>
            {tab === "prescription" ? (
              isSpecial ? (
                /* TWO-PART LAYOUT: 1ª via Farmácia + 2ª via Paciente - ANVISA */
                <div className="page">
                  <div className="two-part">
                    {/* 1ª VIA - FARMÁCIA */}
                    <div className="part">
                      <div className="via-label">1ª Via — Retenção da Farmácia</div>
                      <div className="header">
                        <div className="header-logo">⚕</div>
                        <div className="header-text">
                          <h1>{doctorName || "Nome do Médico"}</h1>
                          <div className="subtitle">CRM {doctorCRM || "______"}/{doctorCRMState || "__"}</div>
                          {clinicName && <div className="contact">{clinicName}</div>}
                        </div>
                      </div>
                      <div className="doc-badge">Receituário de Controle Especial</div>
                      <div className="patient-box">
                        <div className="label">Paciente</div>
                        <p><strong>Nome:</strong> {patientName || "____________________"}</p>
                        <p><strong>Endereço:</strong> {patientAddress || "____________________"}</p>
                        <p><strong>CPF:</strong> {patientCPF || "___.___.___-__"}</p>
                      </div>
                      <div className="use-header">Uso Interno / Externo</div>
                      {medications.filter(m => m.name).map((med, idx) => (
                        <div key={med.id} className="med-item" style={{padding: "6px 8px", marginBottom: "8px"}}>
                          <span className="med-number" style={{width: "18px", height: "18px", lineHeight: "18px", fontSize: "9pt"}}>{idx + 1}</span>
                          <span className="med-name" style={{fontSize: "10pt"}}>{med.name} {med.dose}</span>
                          <div className="med-detail" style={{fontSize: "9pt", paddingLeft: "26px"}}>
                            {med.route} — {med.frequency || "Conf. orientação"} {med.duration ? `— ${med.duration}` : ""}
                          </div>
                        </div>
                      ))}
                      <div className="signature-area" style={{marginTop: "24px"}}>
                        <div className="sig-line" style={{width: "200px"}}></div>
                        <div className="sig-name" style={{fontSize: "9pt"}}>{doctorName || "Médico"}</div>
                        <div className="sig-crm" style={{fontSize: "8pt"}}>CRM {doctorCRM || "___"}/{doctorCRMState || "__"}</div>
                      </div>
                      <div style={{marginTop: "12px", borderTop: "1px solid #ccc", paddingTop: "8px"}}>
                        <p style={{fontSize: "8pt", color: "#888", textAlign: "center"}}>
                          <strong>Identificação do Comprador</strong>
                        </p>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", fontSize: "8pt", color: "#999", marginTop: "6px"}}>
                          <p>Nome: ___________________</p>
                          <p>RG: ___________________</p>
                          <p>Endereço: ___________________</p>
                          <p>Telefone: ___________________</p>
                        </div>
                      </div>
                      <p style={{fontSize: "7pt", color: "#aaa", textAlign: "center", marginTop: "8px"}}>{today}</p>
                    </div>

                    {/* DIVIDER */}
                    <div className="divider"></div>

                    {/* 2ª VIA - PACIENTE */}
                    <div className="part">
                      <div className="via-label">2ª Via — Paciente</div>
                      <div className="header">
                        <div className="header-logo">⚕</div>
                        <div className="header-text">
                          <h1>{doctorName || "Nome do Médico"}</h1>
                          <div className="subtitle">CRM {doctorCRM || "______"}/{doctorCRMState || "__"}</div>
                          {clinicName && <div className="contact">{clinicName}</div>}
                        </div>
                      </div>
                      <div className="doc-badge">Receituário de Controle Especial</div>
                      <div className="patient-box">
                        <div className="label">Paciente</div>
                        <p><strong>Nome:</strong> {patientName || "____________________"}</p>
                        <p><strong>Endereço:</strong> {patientAddress || "____________________"}</p>
                        <p><strong>CPF:</strong> {patientCPF || "___.___.___-__"}</p>
                      </div>
                      <div className="use-header">Uso Interno / Externo</div>
                      {medications.filter(m => m.name).map((med, idx) => (
                        <div key={med.id} className="med-item" style={{padding: "6px 8px", marginBottom: "8px"}}>
                          <span className="med-number" style={{width: "18px", height: "18px", lineHeight: "18px", fontSize: "9pt"}}>{idx + 1}</span>
                          <span className="med-name" style={{fontSize: "10pt"}}>{med.name} {med.dose}</span>
                          <div className="med-detail" style={{fontSize: "9pt", paddingLeft: "26px"}}>
                            {med.route} — {med.frequency || "Conf. orientação"} {med.duration ? `— ${med.duration}` : ""}
                          </div>
                        </div>
                      ))}
                      <div className="signature-area" style={{marginTop: "24px"}}>
                        <div className="sig-line" style={{width: "200px"}}></div>
                        <div className="sig-name" style={{fontSize: "9pt"}}>{doctorName || "Médico"}</div>
                        <div className="sig-crm" style={{fontSize: "8pt"}}>CRM {doctorCRM || "___"}/{doctorCRMState || "__"}</div>
                      </div>
                      <div className="digital-sig" style={{marginTop: "16px", padding: "8px"}}>
                        <div className="title" style={{fontSize: "8pt"}}>Assinatura Digital ICP-Brasil</div>
                        <div className="desc">CFM nº 2.299/2021</div>
                      </div>
                      <p style={{fontSize: "7pt", color: "#aaa", textAlign: "center", marginTop: "8px"}}>{today}</p>
                    </div>
                  </div>
                  <div className="footer">
                    <span>Receituário Especial — Portaria SVS/MS nº 344/1998</span>
                    <span>{today}</span>
                  </div>
                </div>
              ) : (
                /* SIMPLE PRESCRIPTION - single layout */
                <div className="page">
                  <div className="header">
                    <div className="header-logo">⚕</div>
                    <div className="header-text">
                      <h1>{doctorName || "Nome do Médico"}</h1>
                      <div className="subtitle">CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || "Especialidade"}</div>
                      {clinicName && <div className="contact">{clinicName}</div>}
                      {clinicAddress && <div className="contact">{clinicAddress}{clinicPhone ? ` | Tel: ${clinicPhone}` : ""}</div>}
                    </div>
                  </div>
                  <div className="doc-badge">Receituário</div>
                  <div className="patient-box">
                    <div className="label">Identificação do Paciente</div>
                    <p><strong>Nome:</strong> {patientName || "________________________________________"}</p>
                    <p><strong>Idade:</strong> {patientAge || "____"} &nbsp;&nbsp; <strong>CPF:</strong> {patientCPF || "___.___.___-__"}</p>
                    {patientAddress && <p><strong>Endereço:</strong> {patientAddress}</p>}
                    <p><strong>Data:</strong> {today}</p>
                  </div>
                  <div className="use-header">Uso Oral / Tópico / Outros</div>
                  {medications.filter(m => m.name).map((med, idx) => (
                    <div key={med.id} className="med-item">
                      <span className="med-number">{idx + 1}</span>
                      <span className="med-name">{med.name} {med.dose}</span>
                      <div className="med-detail">
                        Via: {med.route} &nbsp;|&nbsp; Posologia: {med.frequency || "Conforme orientação médica"} 
                        {med.duration ? ` | Duração: ${med.duration}` : ""}
                      </div>
                      {med.instructions && <div className="med-instructions">→ {med.instructions}</div>}
                    </div>
                  ))}
                  {prescriptionNotes && (
                    <div className="notes-box">
                      <strong>Observações:</strong> {prescriptionNotes}
                    </div>
                  )}
                  <div className="signature-area">
                    <div className="sig-line"></div>
                    <div className="sig-name">{doctorName || "Nome do Médico"}</div>
                    <div className="sig-crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || ""}</div>
                  </div>
                  <div className="digital-sig">
                    <div className="icon">🔐</div>
                    <div className="title">Documento apto para assinatura digital ICP-Brasil</div>
                    <div className="desc">Conforme Resolução CFM nº 2.299/2021 — Válido em todo território nacional</div>
                  </div>
                  <div className="footer">
                    <span>Documento gerado eletronicamente</span>
                    <span>{today}</span>
                  </div>
                </div>
              )
            ) : (
              <div className="page">
                <div className="header">
                  <div className="header-logo">⚕</div>
                  <div className="header-text">
                    <h1>{doctorName || "Nome do Médico"}</h1>
                    <div className="subtitle">CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || "Especialidade"}</div>
                    {clinicName && <div className="contact">{clinicName}</div>}
                    {clinicAddress && <div className="contact">{clinicAddress}{clinicPhone ? ` | Tel: ${clinicPhone}` : ""}</div>}
                  </div>
                </div>
                
                <div className="doc-badge">Atestado Médico</div>
                
                <div className="cert-body">
                  Atesto, para os devidos fins, que o(a) paciente <strong>{patientName || "________________________"}</strong>
                  {patientAge ? `, ${patientAge}` : ""}
                  {patientCPF ? `, portador(a) do CPF nº ${patientCPF}` : ""}
                  , foi atendido(a) nesta data e necessita de afastamento de suas atividades habituais
                  {daysOff ? ` por um período de ${daysOff} (${numberToWords(parseInt(daysOff) || 0)}) dia(s)` : ""}
                  , a contar de {today}
                  {cidCode ? `. CID-10: ${cidCode}${cidDescription ? ` — ${cidDescription}` : ""}` : ""}.
                </div>
                
                {certificateReason && (
                  <div className="cert-body" style={{ marginTop: 0, textIndent: "50px" }}>
                    <strong>Justificativa clínica:</strong> {certificateReason}
                  </div>
                )}
                
                {certificateNotes && (
                  <div className="notes-box">
                    <strong>Observações:</strong> {certificateNotes}
                  </div>
                )}
                
                <div className="signature-area">
                  <div className="sig-line"></div>
                  <div className="sig-name">{doctorName || "Nome do Médico"}</div>
                  <div className="sig-crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || ""}</div>
                </div>

                <div className="digital-sig">
                  <div className="icon">🔐</div>
                  <div className="title">Documento apto para assinatura digital ICP-Brasil</div>
                  <div className="desc">Conforme Resolução CFM nº 2.299/2021 — Válido em todo território nacional</div>
                </div>

                <div className="footer">
                  <span>Documento gerado eletronicamente</span>
                  <span>{today}</span>
                </div>
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
