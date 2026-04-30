import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, MapPin, GraduationCap, Stethoscope, ChevronRight, ChevronLeft, Check, Loader2,
  Target, Brain, BookOpen, Flame,
} from "lucide-react";
import pulsoLogo from "@/assets/pulso-logo.png";
import { safeLocalStorage } from "@/lib/safeStorage";

/* ── Constants ── */
const UF_LIST = [
  "AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT",
  "PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"
];

const GENDERS = [
  { value: "masculino", label: "Masculino" },
  { value: "feminino", label: "Feminino" },
  { value: "nao_binario", label: "Não-binário" },
  { value: "prefiro_nao_informar", label: "Prefiro não informar" },
];

const ACADEMIC_STATUSES = [
  { value: "estudante", label: "Estudante" },
  { value: "residente", label: "Residente" },
  { value: "formado", label: "Formado(a)" },
];

const REGISTRATION_TYPES = [
  { value: "CRM", label: "CRM (Medicina)" },
  { value: "COREN", label: "COREN (Enfermagem)" },
  { value: "CRF", label: "CRF (Farmácia)" },
  { value: "CRN", label: "CRN (Nutrição)" },
  { value: "CREFITO", label: "CREFITO (Fisio/TO/Fono)" },
  { value: "CRP", label: "CRP (Psicologia)" },
  { value: "CRO", label: "CRO (Odontologia)" },
  { value: "CRBM", label: "CRBM (Biomedicina)" },
  { value: "CRESS", label: "CRESS (Serviço Social)" },
  { value: "CREF", label: "CREF (Educação Física)" },
  { value: "outro", label: "Outro" },
];

const SPECIALTIES_BY_AREA: Record<string, string[]> = {
  "Medicina": [
    "Clínica Médica", "Cirurgia Geral", "Pediatria", "Ginecologia e Obstetrícia",
    "Ortopedia e Traumatologia", "Cardiologia", "Dermatologia", "Neurologia",
    "Psiquiatria", "Oftalmologia", "Otorrinolaringologia", "Urologia",
    "Nefrologia", "Pneumologia", "Gastroenterologia", "Endocrinologia",
    "Reumatologia", "Hematologia", "Infectologia", "Oncologia",
    "Anestesiologia", "Medicina de Emergência", "Medicina de Família e Comunidade",
    "Medicina Intensiva", "Geriatria", "Radiologia", "Patologia",
    "Medicina do Trabalho", "Medicina Legal", "Nutrologia",
    "Cirurgia Cardiovascular", "Cirurgia Plástica", "Neurocirurgia",
    "Cirurgia Pediátrica", "Cirurgia Vascular", "Coloproctologia",
  ],
  "Enfermagem": [
    "Enfermagem Geral", "Enfermagem em UTI", "Enfermagem Obstétrica",
    "Enfermagem Pediátrica", "Enfermagem de Emergência", "Enfermagem do Trabalho",
    "Enfermagem Oncológica", "Enfermagem em Saúde Mental", "Estomaterapia",
  ],
  "Farmácia": [
    "Farmácia Clínica", "Farmácia Hospitalar", "Farmacologia",
    "Atenção Farmacêutica", "Análises Clínicas", "Farmácia Industrial",
  ],
  "Fisioterapia": [
    "Fisioterapia Respiratória", "Fisioterapia Neurofuncional",
    "Fisioterapia Ortopédica", "Fisioterapia em UTI",
    "Fisioterapia Esportiva", "Fisioterapia Pediátrica",
  ],
  "Nutrição": [
    "Nutrição Clínica", "Nutrição Esportiva", "Nutrição Hospitalar",
    "Nutrição Materno-Infantil", "Nutrição em Saúde Pública",
  ],
  "Psicologia": [
    "Psicologia Clínica", "Psicologia Hospitalar", "Neuropsicologia",
    "Psicologia da Saúde", "Psicologia Organizacional",
  ],
  "Odontologia": [
    "Odontologia Geral", "Cirurgia Bucomaxilofacial", "Ortodontia",
    "Endodontia", "Periodontia", "Odontopediatria", "Implantodontia",
  ],
  "Biomedicina": [
    "Análises Clínicas", "Diagnóstico por Imagem", "Biomedicina Estética",
    "Biologia Molecular", "Imunologia",
  ],
  "Fonoaudiologia": [
    "Audiologia", "Linguagem", "Motricidade Orofacial", "Disfagia", "Voz",
  ],
  "Terapia Ocupacional": [
    "Saúde Mental", "Reabilitação Física", "Gerontologia", "Neuropediatria",
  ],
  "Outras": [
    "Serviço Social", "Educação Física em Saúde", "Radiologia Técnica",
    "Técnico de Enfermagem", "Outra",
  ],
};

const HEALTH_AREAS = Object.keys(SPECIALTIES_BY_AREA);

/* ── Masks ── */
function maskCPF(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}
function maskCEP(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
}
function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/* ── UI Helpers ── */
function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] font-semibold text-muted-foreground mb-1.5 block tracking-wide">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ label, value, onChange, options, placeholder = "Selecione...", required }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; placeholder?: string; required?: boolean;
}) {
  return (
    <Field label={label} required={required}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 appearance-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </Field>
  );
}

/* ── Steps ── */
const STEPS = [
  { icon: User, title: "Dados Pessoais", desc: "Precisamos saber quem você é" },
  { icon: MapPin, title: "Endereço", desc: "Onde você está localizado(a)" },
  { icon: GraduationCap, title: "Formação", desc: "Sua trajetória acadêmica" },
  { icon: Stethoscope, title: "Profissional", desc: "Área e especialidade" },
];

interface FormData {
  first_name: string; last_name: string; cpf: string; birth_date: string;
  gender: string; phone: string;
  zip_code: string; street: string; neighborhood: string; city: string; state: string;
  academic_status: string; university: string; course: string; graduation_year: string;
  registration_type: string; registration_number: string; registration_state: string;
  selectedArea: string; specialty: string;
}

const defaultForm: FormData = {
  first_name: "", last_name: "", cpf: "", birth_date: "", gender: "", phone: "",
  zip_code: "", street: "", neighborhood: "", city: "", state: "",
  academic_status: "", university: "", course: "", graduation_year: "",
  registration_type: "", registration_number: "", registration_state: "",
  selectedArea: "", specialty: "",
};

export default function Onboarding() {
  const { user, recheckProfile } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [saving, setSaving] = useState(false);
  const [fetchingCep, setFetchingCep] = useState(false);

  const set = (field: keyof FormData) => (v: string) => setForm(p => ({ ...p, [field]: v }));

  // Pre-fill from user metadata
  useEffect(() => {
    if (!user) return;
    const meta = user.user_metadata || {};
    const fullName = meta.full_name || meta.name || "";
    const parts = fullName.split(" ");
    setForm(p => ({
      ...p,
      first_name: p.first_name || parts[0] || "",
      last_name: p.last_name || parts.slice(1).join(" ") || "",
    }));
  }, [user]);

  // ViaCEP
  useEffect(() => {
    const cepDigits = form.zip_code.replace(/\D/g, "");
    if (cepDigits.length !== 8) return;
    const controller = new AbortController();
    setFetchingCep(true);
    fetch(`https://viacep.com.br/ws/${cepDigits}/json/`, { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        if (!data.erro) {
          setForm(p => ({
            ...p,
            city: data.localidade || p.city,
            state: data.uf || p.state,
            neighborhood: data.bairro || p.neighborhood,
            street: data.logradouro || p.street,
          }));
        }
      })
      .catch(() => {})
      .finally(() => setFetchingCep(false));
    return () => controller.abort();
  }, [form.zip_code]);

  const validateStep = () => {
    switch (step) {
      case 0:
        if (!form.first_name.trim() || !form.last_name.trim()) { toast.error("Preencha nome e sobrenome"); return false; }
        if (!form.birth_date) { toast.error("Informe sua data de nascimento"); return false; }
        if (!form.gender) { toast.error("Selecione seu gênero"); return false; }
        if (form.phone.replace(/\D/g, "").length < 10) { toast.error("Informe um telefone válido"); return false; }
        return true;
      case 1:
        if (form.zip_code.replace(/\D/g, "").length !== 8) { toast.error("Informe um CEP válido"); return false; }
        if (!form.city.trim() || !form.state) { toast.error("Preencha cidade e estado"); return false; }
        return true;
      case 2:
        if (!form.academic_status) { toast.error("Selecione seu status acadêmico"); return false; }
        return true;
      case 3:
        return true;
      default: return true;
    }
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else handleSave();
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const fullName = [form.first_name, form.last_name].filter(Boolean).join(" ");
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        cpf: form.cpf.replace(/\D/g, ""),
        birth_date: form.birth_date || null,
        gender: form.gender,
        phone: form.phone.replace(/\D/g, ""),
        city: form.city,
        state: form.state,
        zip_code: form.zip_code.replace(/\D/g, ""),
        neighborhood: form.neighborhood,
        street: form.street,
        academic_status: form.academic_status,
        university: form.university,
        course: form.course,
        graduation_year: form.graduation_year ? parseInt(form.graduation_year) : null,
        registration_type: form.registration_type,
        registration_number: form.registration_number,
        registration_state: form.registration_state,
        specialty: form.specialty,
        crm: form.registration_number,
        crm_state: form.registration_state,
      } as any)
      .eq("user_id", user.id);

    if (error) {
      toast.error("Erro ao salvar. Tente novamente.");
      setSaving(false);
      return;
    }

    toast.success("Perfil completo!");
    // Mark that user just finished onboarding so ProtectedRoute won't redirect away from /pricing
    sessionStorage.setItem("pulso_just_onboarded", "1");
    navigate("/pricing", { replace: true });
    // Update profile state after navigation completes
    setTimeout(() => recheckProfile(), 500);
  };

  const progress = ((step + 1) / STEPS.length) * 100;
  const StepIcon = STEPS[step].icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="pt-8 pb-4 px-4 text-center">
        <motion.img
          src={pulsoLogo}
          alt="PULSO"
          width={56}
          height={56}
          className="mx-auto rounded-2xl shadow-lg shadow-primary/20 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-muted-foreground font-medium"
        >
          Complete seu perfil para continuar
        </motion.p>
      </div>

      {/* Progress bar */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isDone = i < step;
            const isCurrent = i === step;
            return (
              <div key={i} className="flex items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDone ? "bg-primary text-primary-foreground" :
                  isCurrent ? "bg-primary/20 text-primary ring-2 ring-primary/30" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {isDone ? <Check size={16} /> : <Icon size={16} />}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-8 sm:w-12 h-0.5 mx-1 transition-colors duration-300 ${
                    i < step ? "bg-primary" : "bg-muted"
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 px-4 pb-6 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Step header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <StepIcon size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-base">{STEPS[step].title}</h2>
                <p className="text-[11px] text-muted-foreground">{STEPS[step].desc}</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border/60 p-5 space-y-4 shadow-sm">
              {/* Step 0: Personal */}
              {step === 0 && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Nome" required>
                      <Input value={form.first_name} onChange={e => set("first_name")(e.target.value)} placeholder="João" className="rounded-xl h-11" />
                    </Field>
                    <Field label="Sobrenome" required>
                      <Input value={form.last_name} onChange={e => set("last_name")(e.target.value)} placeholder="Silva" className="rounded-xl h-11" />
                    </Field>
                  </div>
                  <Field label="CPF">
                    <Input value={maskCPF(form.cpf)} onChange={e => set("cpf")(e.target.value)} placeholder="000.000.000-00" className="rounded-xl h-11" inputMode="numeric" />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Data de Nascimento" required>
                      <Input type="date" value={form.birth_date} onChange={e => set("birth_date")(e.target.value)} className="rounded-xl h-11" />
                    </Field>
                    <Select label="Gênero" value={form.gender} onChange={set("gender")} options={GENDERS} required />
                  </div>
                  <Field label="Telefone / WhatsApp" required>
                    <Input value={maskPhone(form.phone)} onChange={e => set("phone")(e.target.value)} placeholder="(11) 99999-9999" className="rounded-xl h-11" inputMode="tel" />
                  </Field>
                </>
              )}

              {/* Step 1: Address */}
              {step === 1 && (
                <>
                  <Field label="CEP" required>
                    <div className="relative">
                      <Input value={maskCEP(form.zip_code)} onChange={e => set("zip_code")(e.target.value)} placeholder="00000-000" className="rounded-xl h-11" inputMode="numeric" />
                      {fetchingCep && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Loader2 size={16} className="animate-spin text-primary" />
                        </div>
                      )}
                    </div>
                  </Field>
                  <Field label="Logradouro">
                    <Input value={form.street} onChange={e => set("street")(e.target.value)} placeholder="Rua, Avenida..." className="rounded-xl h-11" />
                  </Field>
                  <Field label="Bairro">
                    <Input value={form.neighborhood} onChange={e => set("neighborhood")(e.target.value)} placeholder="Centro" className="rounded-xl h-11" />
                  </Field>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <Field label="Cidade" required>
                        <Input value={form.city} onChange={e => set("city")(e.target.value)} placeholder="São Paulo" className="rounded-xl h-11" />
                      </Field>
                    </div>
                    <Select label="UF" value={form.state} onChange={set("state")} options={UF_LIST.map(u => ({ value: u, label: u }))} placeholder="UF" required />
                  </div>
                </>
              )}

              {/* Step 2: Academic */}
              {step === 2 && (
                <>
                  <Select label="Status" value={form.academic_status} onChange={set("academic_status")} options={ACADEMIC_STATUSES} required />
                  {form.academic_status && (
                    <>
                      <Field label="Faculdade / Universidade">
                        <Input value={form.university} onChange={e => set("university")(e.target.value)} placeholder="Universidade de São Paulo" className="rounded-xl h-11" />
                      </Field>
                      <div className="grid grid-cols-2 gap-3">
                        <Field label="Curso">
                          <Input value={form.course} onChange={e => set("course")(e.target.value)} placeholder="Medicina" className="rounded-xl h-11" />
                        </Field>
                        {form.academic_status === "formado" && (
                          <Field label="Ano de Formatura">
                            <Input type="number" value={form.graduation_year} onChange={e => set("graduation_year")(e.target.value)} placeholder="2020" min="1950" max={new Date().getFullYear()} className="rounded-xl h-11" />
                          </Field>
                        )}
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Step 3: Professional */}
              {step === 3 && (
                <>
                  <Select label="Tipo de Registro" value={form.registration_type} onChange={set("registration_type")} options={REGISTRATION_TYPES} />
                  {form.registration_type && (
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2">
                        <Field label={`Número do ${form.registration_type}`}>
                          <Input value={form.registration_number} onChange={e => set("registration_number")(e.target.value)} placeholder="123456" className="rounded-xl h-11" />
                        </Field>
                      </div>
                      <Select label="UF" value={form.registration_state} onChange={set("registration_state")} options={UF_LIST.map(u => ({ value: u, label: u }))} placeholder="UF" />
                    </div>
                  )}
                  <Select
                    label="Área da Saúde"
                    value={form.selectedArea}
                    onChange={(area) => { set("selectedArea")(area); set("specialty")(""); }}
                    options={HEALTH_AREAS.map(a => ({ value: a, label: a }))}
                    placeholder="Selecione sua área..."
                  />
                  {form.selectedArea && (
                    <Select
                      label="Especialidade / Atuação"
                      value={form.specialty}
                      onChange={set("specialty")}
                      options={(SPECIALTIES_BY_AREA[form.selectedArea] || []).map(s => ({ value: s, label: s }))}
                    />
                  )}
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-xl border-t border-border/50 px-4 py-4">
        <div className="max-w-lg mx-auto flex gap-3">
          {step > 0 && (
            <Button
              variant="outline"
              onClick={() => setStep(s => s - 1)}
              className="rounded-xl h-12 px-5 gap-1"
            >
              <ChevronLeft size={16} />
              Voltar
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={saving}
            className="flex-1 rounded-xl h-12 gap-2 font-heading font-semibold shadow-lg shadow-primary/20"
          >
            {saving ? (
              <><Loader2 size={16} className="animate-spin" /> Salvando...</>
            ) : step === STEPS.length - 1 ? (
              <><Check size={16} /> Finalizar e continuar</>
            ) : (
              <>Continuar <ChevronRight size={16} /></>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
