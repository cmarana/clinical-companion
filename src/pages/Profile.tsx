import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import TopBar from "@/components/TopBar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  User, Camera, Save, LogOut, Shield, Mail, Clock, Sun, Moon, Eclipse, Check,
  GraduationCap, MapPin, Heart, Stethoscope, Building2, Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { hapticLight } from "@/lib/haptics";

const SPECIALTIES = [
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
  "Residente", "Estudante de Medicina", "Enfermagem", "Farmácia", "Outra"
];

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
  { value: "CRM", label: "CRM" },
  { value: "COREN", label: "COREN" },
  { value: "CRF", label: "CRF" },
  { value: "CRN", label: "CRN" },
  { value: "CREFITO", label: "CREFITO" },
  { value: "outro", label: "Outro" },
];

interface ProfileData {
  full_name: string;
  first_name: string;
  last_name: string;
  cpf: string;
  birth_date: string;
  gender: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  zip_code: string;
  academic_status: string;
  university: string;
  course: string;
  graduation_year: string;
  registration_type: string;
  registration_number: string;
  registration_state: string;
  specialty: string;
  crm: string;
  crm_state: string;
  avatar_url: string;
}

const defaultProfile: ProfileData = {
  full_name: "", first_name: "", last_name: "", cpf: "", birth_date: "",
  gender: "", phone: "", email: "", city: "", state: "", zip_code: "",
  academic_status: "", university: "", course: "", graduation_year: "",
  registration_type: "", registration_number: "", registration_state: "",
  specialty: "", crm: "", crm_state: "", avatar_url: "",
};

const themeOptions = [
  {
    id: "light" as const, label: "Claro", icon: Sun,
    bg: "bg-[#F8FAFC]", card: "bg-white", text: "text-[#1E293B]",
    subtext: "text-[#64748B]", accent: "bg-[#3B82F6]",
    desc: "Ideal para ambientes bem iluminados",
  },
  {
    id: "dark" as const, label: "Escuro", icon: Moon,
    bg: "bg-[#0F172A]", card: "bg-[#1E293B]", text: "text-[#F1F5F9]",
    subtext: "text-[#94A3B8]", accent: "bg-[#3B82F6]",
    desc: "Conforto visual em baixa luminosidade",
  },
  {
    id: "oled" as const, label: "OLED Noturno", icon: Eclipse,
    bg: "bg-black", card: "bg-[#0A0A0A]", text: "text-[#E2E8F0]",
    subtext: "text-[#64748B]", accent: "bg-[#3B82F6]",
    desc: "True-black para plantões noturnos",
  },
];

/* ── CPF mask ── */
function maskCPF(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
}

/* ── CEP mask ── */
function maskCEP(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 5) return d;
  return `${d.slice(0, 5)}-${d.slice(5)}`;
}

/* ── Phone mask ── */
function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/* ── Section wrapper ── */
function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-4 space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon size={14} className="text-primary" />
        </div>
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{title}</h3>
      </div>
      {children}
    </div>
  );
}

/* ── Select wrapper ── */
function Select({ label, value, onChange, options, placeholder = "Selecione..." }: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[] | string[]; placeholder?: string;
}) {
  const opts = typeof options[0] === "string"
    ? (options as string[]).map(o => ({ value: o, label: o }))
    : options as { value: string; label: string }[];
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="">{placeholder}</option>
        {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

/* ── Field wrapper ── */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}

export default function Profile() {
  const { user, signOut, subscription } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fetchingCep, setFetchingCep] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);

  const set = (field: keyof ProfileData) => (v: string) =>
    setProfile(p => ({ ...p, [field]: v }));

  useEffect(() => {
    if (!user) return;
    loadProfile();
  }, [user]);

  // ViaCEP auto-fill
  useEffect(() => {
    const cepDigits = profile.zip_code.replace(/\D/g, "");
    if (cepDigits.length !== 8) return;

    const controller = new AbortController();
    setFetchingCep(true);

    fetch(`https://viacep.com.br/ws/${cepDigits}/json/`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        if (!data.erro) {
          setProfile(p => ({
            ...p,
            city: data.localidade || p.city,
            state: data.uf || p.state,
          }));
        }
      })
      .catch(() => {})
      .finally(() => setFetchingCep(false));

    return () => controller.abort();
  }, [profile.zip_code]);

  const loadProfile = async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (data) {
      setProfile({
        full_name: data.full_name || "",
        first_name: (data as any).first_name || "",
        last_name: (data as any).last_name || "",
        cpf: (data as any).cpf || "",
        birth_date: (data as any).birth_date || "",
        gender: (data as any).gender || "",
        phone: (data as any).phone || "",
        email: (data as any).email || user.email || "",
        city: (data as any).city || "",
        state: (data as any).state || "",
        zip_code: (data as any).zip_code || "",
        academic_status: (data as any).academic_status || "",
        university: (data as any).university || "",
        course: (data as any).course || "",
        graduation_year: (data as any).graduation_year?.toString() || "",
        registration_type: (data as any).registration_type || "",
        registration_number: (data as any).registration_number || data.crm || "",
        registration_state: (data as any).registration_state || data.crm_state || "",
        specialty: data.specialty || "",
        crm: data.crm || "",
        crm_state: data.crm_state || "",
        avatar_url: data.avatar_url || "",
      });
    } else if (!error || error.code === "PGRST116") {
      await supabase.from("profiles").insert({
        user_id: user.id,
        full_name: user.user_metadata?.full_name || "",
      });
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);

    const fullName = [profile.first_name, profile.last_name].filter(Boolean).join(" ") || profile.full_name;

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        first_name: profile.first_name,
        last_name: profile.last_name,
        cpf: profile.cpf.replace(/\D/g, ""),
        birth_date: profile.birth_date || null,
        gender: profile.gender,
        phone: profile.phone.replace(/\D/g, ""),
        city: profile.city,
        state: profile.state,
        zip_code: profile.zip_code.replace(/\D/g, ""),
        academic_status: profile.academic_status,
        university: profile.university,
        course: profile.course,
        graduation_year: profile.graduation_year ? parseInt(profile.graduation_year) : null,
        registration_type: profile.registration_type,
        registration_number: profile.registration_number,
        registration_state: profile.registration_state,
        specialty: profile.specialty,
        crm: profile.registration_number,
        crm_state: profile.registration_state,
      } as any)
      .eq("user_id", user.id);

    if (error) {
      toast.error("Erro ao salvar perfil");
    } else {
      toast.success("Perfil atualizado com sucesso!");
    }
    setSaving(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Imagem deve ter no máximo 2MB");
      return;
    }
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${user.id}/avatar.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(path, file, { upsert: true });
    if (uploadError) {
      toast.error("Erro no upload da foto");
      setUploading(false);
      return;
    }
    const { data: { publicUrl } } = supabase.storage.from("avatars").getPublicUrl(path);
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_url: publicUrl })
      .eq("user_id", user.id);
    if (!updateError) {
      setProfile(p => ({ ...p, avatar_url: publicUrl + "?t=" + Date.now() }));
      toast.success("Foto atualizada!");
    }
    setUploading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const initials = (profile.first_name || profile.full_name || "")
    .split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase() || user?.email?.[0]?.toUpperCase() || "U";

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar title="Perfil" />
        <div className="p-6 text-center space-y-4">
          <User size={48} className="mx-auto text-muted-foreground" />
          <p className="text-muted-foreground text-sm">Faça login para acessar seu perfil</p>
          <Button onClick={() => navigate("/auth")} className="rounded-2xl">Entrar</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar title="Meu Perfil" />

      {/* Avatar section */}
      <div className="flex flex-col items-center pt-6 pb-4">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-primary/20">
            {profile.avatar_url ? <AvatarImage src={profile.avatar_url} alt="Avatar" /> : null}
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">{initials}</AvatarFallback>
          </Avatar>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          >
            <Camera size={14} />
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
        </div>
        {uploading && <span className="text-xs text-muted-foreground mt-2">Enviando foto...</span>}
        <p className="text-xs text-muted-foreground mt-2">{user.email}</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="px-4 space-y-4 max-w-lg mx-auto">

          {/* ── 1. Dados Pessoais ── */}
          <Section icon={User} title="Dados Pessoais">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nome">
                <Input value={profile.first_name} onChange={e => set("first_name")(e.target.value)} placeholder="João" className="rounded-xl" />
              </Field>
              <Field label="Sobrenome">
                <Input value={profile.last_name} onChange={e => set("last_name")(e.target.value)} placeholder="Silva" className="rounded-xl" />
              </Field>
            </div>

            <Field label="CPF">
              <Input
                value={maskCPF(profile.cpf)}
                onChange={e => set("cpf")(e.target.value)}
                placeholder="000.000.000-00"
                className="rounded-xl"
                inputMode="numeric"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Data de Nascimento">
                <Input
                  type="date"
                  value={profile.birth_date}
                  onChange={e => set("birth_date")(e.target.value)}
                  className="rounded-xl"
                />
              </Field>
              <Select label="Gênero" value={profile.gender} onChange={set("gender")} options={GENDERS} />
            </div>

            <Field label="Telefone / WhatsApp">
              <Input
                value={maskPhone(profile.phone)}
                onChange={e => set("phone")(e.target.value)}
                placeholder="(11) 99999-9999"
                className="rounded-xl"
                inputMode="tel"
              />
            </Field>
          </Section>

          {/* ── 2. Endereço ── */}
          <Section icon={MapPin} title="Endereço">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <Field label="Cidade">
                  <Input value={profile.city} onChange={e => set("city")(e.target.value)} placeholder="São Paulo" className="rounded-xl" />
                </Field>
              </div>
              <Select label="UF" value={profile.state} onChange={set("state")} options={UF_LIST.map(u => ({ value: u, label: u }))} placeholder="UF" />
            </div>
            <Field label="CEP">
              <div className="relative">
                <Input
                  value={maskCEP(profile.zip_code)}
                  onChange={e => set("zip_code")(e.target.value)}
                  placeholder="00000-000"
                  className="rounded-xl"
                  inputMode="numeric"
                />
                {fetchingCep && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </Field>
          </Section>

          {/* ── 3. Formação Acadêmica ── */}
          <Section icon={GraduationCap} title="Formação Acadêmica">
            <Select label="Status" value={profile.academic_status} onChange={set("academic_status")} options={ACADEMIC_STATUSES} />

            {profile.academic_status && (
              <>
                <Field label="Faculdade / Universidade">
                  <Input value={profile.university} onChange={e => set("university")(e.target.value)} placeholder="Universidade de São Paulo" className="rounded-xl" />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Curso">
                    <Input value={profile.course} onChange={e => set("course")(e.target.value)} placeholder="Medicina" className="rounded-xl" />
                  </Field>
                  {profile.academic_status === "formado" && (
                    <Field label="Ano de Formatura">
                      <Input
                        type="number"
                        value={profile.graduation_year}
                        onChange={e => set("graduation_year")(e.target.value)}
                        placeholder="2020"
                        min="1950"
                        max={new Date().getFullYear()}
                        className="rounded-xl"
                      />
                    </Field>
                  )}
                </div>
              </>
            )}
          </Section>

          {/* ── 4. Registro Profissional ── */}
          <Section icon={Stethoscope} title="Registro Profissional">
            <Select label="Tipo de Registro" value={profile.registration_type} onChange={set("registration_type")} options={REGISTRATION_TYPES} />

            {profile.registration_type && (
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <Field label={`Número do ${profile.registration_type}`}>
                    <Input value={profile.registration_number} onChange={e => set("registration_number")(e.target.value)} placeholder="123456" className="rounded-xl" />
                  </Field>
                </div>
                <Select label="UF" value={profile.registration_state} onChange={set("registration_state")} options={UF_LIST.map(u => ({ value: u, label: u }))} placeholder="UF" />
              </div>
            )}

            <Select label="Especialidade" value={profile.specialty} onChange={set("specialty")} options={SPECIALTIES.map(s => ({ value: s, label: s }))} />
          </Section>

          {/* ── Save button ── */}
          <Button onClick={handleSave} disabled={saving} className="w-full rounded-2xl gap-2 h-12 text-sm font-bold">
            <Save size={16} />
            {saving ? "Salvando..." : "Salvar Perfil"}
          </Button>

          {/* ── Theme selector ── */}
          <div className="bg-card rounded-2xl border border-border p-4 space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Aparência</h3>
            <div className="grid grid-cols-3 gap-2.5">
              {themeOptions.map((opt) => {
                const isActive = theme === opt.id;
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={() => { hapticLight(); setTheme(opt.id); }}
                    className={`relative flex flex-col items-center gap-2 rounded-xl p-2.5 transition-all border-2 ${
                      isActive ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-border"
                    }`}
                  >
                    <div className={`w-full aspect-[3/4] rounded-lg ${opt.bg} overflow-hidden p-1.5 flex flex-col gap-1 shadow-inner`}>
                      <div className={`h-1.5 w-8 rounded-full ${opt.accent}`} />
                      <div className={`flex-1 rounded-md ${opt.card} p-1 flex flex-col gap-0.5`}>
                        <div className={`h-1 w-6 rounded-full ${opt.text} opacity-60`} />
                        <div className={`h-1 w-4 rounded-full ${opt.subtext} opacity-40`} />
                      </div>
                      <div className={`h-3 rounded-md ${opt.card} flex items-center justify-center gap-0.5 px-1`}>
                        <div className={`h-1 w-1 rounded-full ${opt.accent}`} />
                        <div className={`h-1 w-1 rounded-full ${opt.subtext} opacity-30`} />
                        <div className={`h-1 w-1 rounded-full ${opt.subtext} opacity-30`} />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon size={12} className="text-muted-foreground" />
                      <span className="text-[11px] font-medium">{opt.label}</span>
                    </div>
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Check size={12} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-muted-foreground text-center">
              {themeOptions.find(o => o.id === theme)?.desc}
            </p>
          </div>

          {/* ── Account info ── */}
          <Section icon={Shield} title="Conta">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-muted-foreground shrink-0" />
                <span className="truncate">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield size={16} className="text-muted-foreground shrink-0" />
                <span>
                  {subscription.subscribed
                    ? subscription.isTrial
                      ? `Trial (${subscription.trialDaysLeft} dias restantes)`
                      : "Premium ativo"
                    : "Plano gratuito"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-muted-foreground shrink-0" />
                <span>Membro desde {new Date(user.created_at).toLocaleDateString("pt-BR")}</span>
              </div>
            </div>
          </Section>

          {/* ── Sign out ── */}
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="w-full rounded-2xl gap-2 text-destructive border-destructive/30 hover:bg-destructive/10"
          >
            <LogOut size={16} />
            Sair da conta
          </Button>
        </div>
      )}
    </div>
  );
}
