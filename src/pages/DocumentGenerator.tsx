import { useState, useRef } from "react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Printer, Plus, Trash2, Clock, Pill, Stethoscope, Calendar, User, Hash, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

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
  { id: "simple", label: "Receituário Simples", color: "bg-blue-500" },
  { id: "special", label: "Receituário Especial", color: "bg-amber-500" },
];

export default function DocumentGenerator() {
  const { user } = useAuth();
  const printRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState("prescription");

  // Doctor info (from profile)
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

  const today = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
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
          .footer { position: fixed; bottom: 0; left: 0; right: 0; text-align: center; font-size: 8pt; color: #9ca3af; padding: 8px; border-top: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        ${printContent.innerHTML}
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
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
            Receituários e atestados médicos formatados para impressão
          </p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="prescription" className="text-xs gap-1.5">
              <Pill size={14} /> Receituário
            </TabsTrigger>
            <TabsTrigger value="certificate" className="text-xs gap-1.5">
              <Stethoscope size={14} /> Atestado
            </TabsTrigger>
          </TabsList>

          {/* Doctor Info (shared) */}
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
                <Label className="text-xs">Nome da Clínica / Hospital</Label>
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

          {/* Patient Info (shared) */}
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

          {/* PRESCRIPTION TAB */}
          <TabsContent value="prescription" className="mt-3 space-y-3">
            {/* Prescription Type */}
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

            {/* Medications */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Pill size={12} /> Medicamentos
              </h3>
              {medications.map((med, idx) => (
                <div key={med.id} className="bg-card rounded-2xl p-4 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[10px]">{idx + 1}º Medicamento</Badge>
                    {medications.length > 1 && (
                      <button onClick={() => removeMedication(med.id)} className="text-destructive">
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  <Input
                    value={med.name}
                    onChange={e => updateMedication(med.id, "name", e.target.value)}
                    placeholder="Nome do medicamento"
                    className="h-9 text-sm font-medium"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={med.dose}
                      onChange={e => updateMedication(med.id, "dose", e.target.value)}
                      placeholder="Dose (ex: 500mg)"
                      className="h-9 text-sm"
                    />
                    <Select value={med.route} onValueChange={v => updateMedication(med.id, "route", v)}>
                      <SelectTrigger className="h-9 text-sm"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {routes.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={med.frequency}
                      onChange={e => updateMedication(med.id, "frequency", e.target.value)}
                      placeholder="Frequência (ex: 8/8h)"
                      className="h-9 text-sm"
                    />
                    <Input
                      value={med.duration}
                      onChange={e => updateMedication(med.id, "duration", e.target.value)}
                      placeholder="Duração (ex: 7 dias)"
                      className="h-9 text-sm"
                    />
                  </div>
                  <Input
                    value={med.instructions}
                    onChange={e => updateMedication(med.id, "instructions", e.target.value)}
                    placeholder="Instruções (ex: Tomar após as refeições)"
                    className="h-9 text-sm"
                  />
                </div>
              ))}
              <Button onClick={addMedication} variant="outline" size="sm" className="w-full gap-1.5">
                <Plus size={14} /> Adicionar Medicamento
              </Button>
            </div>

            <div>
              <Label className="text-xs">Observações</Label>
              <Textarea
                value={prescriptionNotes}
                onChange={e => setPrescriptionNotes(e.target.value)}
                placeholder="Orientações adicionais ao paciente..."
                className="text-sm min-h-[60px]"
              />
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
                <Label className="text-xs">Motivo / Justificativa</Label>
                <Textarea
                  value={certificateReason}
                  onChange={e => setCertificateReason(e.target.value)}
                  placeholder="Paciente necessita de repouso para tratamento..."
                  className="text-sm min-h-[60px]"
                />
              </div>
              <div>
                <Label className="text-xs">Observações Adicionais</Label>
                <Textarea
                  value={certificateNotes}
                  onChange={e => setCertificateNotes(e.target.value)}
                  placeholder="Retorno em X dias, orientações..."
                  className="text-sm min-h-[60px]"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Print Button */}
        <Button onClick={handlePrint} className="w-full gap-2 h-12 text-sm font-semibold rounded-2xl" size="lg">
          <Printer size={18} />
          Imprimir {tab === "prescription" ? "Receituário" : "Atestado"}
        </Button>

        {/* HIDDEN PRINT CONTENT */}
        <div className="hidden">
          <div ref={printRef}>
            {tab === "prescription" ? (
              <div>
                {/* Header */}
                <div className="header">
                  <h1>{doctorName || "Nome do Médico"}</h1>
                  <div className="crm">
                    CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || "Especialidade"}
                  </div>
                  {clinicName && <div className="clinic">{clinicName}</div>}
                  {clinicAddress && <div className="clinic">{clinicAddress} {clinicPhone ? `| Tel: ${clinicPhone}` : ""}</div>}
                </div>

                {/* Type badge */}
                <div className={`doc-type ${isSpecial ? "special" : ""}`}>
                  {isSpecial ? "Receituário de Controle Especial" : "Receituário Simples"}
                </div>

                {/* Patient */}
                <div className="patient-info">
                  <p><strong>Paciente:</strong> {patientName || "________________________"}</p>
                  <p><strong>Idade:</strong> {patientAge || "____"} {patientCPF ? ` | CPF: ${patientCPF}` : ""}</p>
                  {patientAddress && <p><strong>Endereço:</strong> {patientAddress}</p>}
                  <p><strong>Data:</strong> {today}</p>
                </div>

                {/* Medications */}
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

                {prescriptionNotes && (
                  <div className="notes">
                    <strong>Observações:</strong> {prescriptionNotes}
                  </div>
                )}

                {/* Signature */}
                <div className="signature">
                  <div className="line"></div>
                  <div className="name">{doctorName || "Nome do Médico"}</div>
                  <div className="crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"}</div>
                </div>

                <div className="date">{today}</div>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="header">
                  <h1>{doctorName || "Nome do Médico"}</h1>
                  <div className="crm">
                    CRM {doctorCRM || "______"}/{doctorCRMState || "__"} — {doctorSpecialty || "Especialidade"}
                  </div>
                  {clinicName && <div className="clinic">{clinicName}</div>}
                  {clinicAddress && <div className="clinic">{clinicAddress} {clinicPhone ? `| Tel: ${clinicPhone}` : ""}</div>}
                </div>

                <div className="doc-type">Atestado Médico</div>

                {/* Body */}
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

                {certificateNotes && (
                  <div className="notes">
                    <strong>Observações:</strong> {certificateNotes}
                  </div>
                )}

                {/* Signature */}
                <div className="signature">
                  <div className="line"></div>
                  <div className="name">{doctorName || "Nome do Médico"}</div>
                  <div className="crm">CRM {doctorCRM || "______"}/{doctorCRMState || "__"}</div>
                </div>

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
