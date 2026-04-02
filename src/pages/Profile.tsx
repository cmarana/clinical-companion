import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import TopBar from "@/components/TopBar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { User, Camera, Save, LogOut, Shield, Mail, Clock, Sun, Moon, Eclipse, Check } from "lucide-react";
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

interface ProfileData {
  full_name: string;
  crm: string;
  crm_state: string;
  specialty: string;
  avatar_url: string;
}

const themeOptions = [
  {
    id: "light" as const,
    label: "Claro",
    icon: Sun,
    bg: "bg-[#F8FAFC]",
    card: "bg-white",
    text: "text-[#1E293B]",
    subtext: "text-[#64748B]",
    accent: "bg-[#3B82F6]",
    desc: "Ideal para ambientes bem iluminados",
  },
  {
    id: "dark" as const,
    label: "Escuro",
    icon: Moon,
    bg: "bg-[#0F172A]",
    card: "bg-[#1E293B]",
    text: "text-[#F1F5F9]",
    subtext: "text-[#94A3B8]",
    accent: "bg-[#3B82F6]",
    desc: "Conforto visual em baixa luminosidade",
  },
  {
    id: "oled" as const,
    label: "OLED Noturno",
    icon: Eclipse,
    bg: "bg-black",
    card: "bg-[#0A0A0A]",
    text: "text-[#E2E8F0]",
    subtext: "text-[#64748B]",
    accent: "bg-[#3B82F6]",
    desc: "True-black para plantões noturnos",
  },
];

export default function Profile() {
  const { user, signOut, subscription } = useAuth();
  const { theme, setTheme } = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    full_name: "", crm: "", crm_state: "", specialty: "", avatar_url: ""
  });

  useEffect(() => {
    if (!user) return;
    loadProfile();
  }, [user]);

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
        crm: data.crm || "",
        crm_state: data.crm_state || "",
        specialty: data.specialty || "",
        avatar_url: data.avatar_url || "",
      });
    } else if (!error || error.code === "PGRST116") {
      // No profile yet, create one
      await supabase.from("profiles").insert({ user_id: user.id, full_name: user.user_metadata?.full_name || "" });
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: profile.full_name,
        crm: profile.crm,
        crm_state: profile.crm_state,
        specialty: profile.specialty,
      })
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

  const initials = profile.full_name
    ? profile.full_name.split(" ").map(n => n[0]).slice(0, 2).join("").toUpperCase()
    : user?.email?.[0]?.toUpperCase() || "U";

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
            {profile.avatar_url ? (
              <AvatarImage src={profile.avatar_url} alt="Avatar" />
            ) : null}
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          >
            <Camera size={14} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarUpload}
          />
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
          {/* Form fields */}
          <div className="bg-card rounded-2xl border border-border p-4 space-y-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Nome completo</label>
              <Input
                value={profile.full_name}
                onChange={e => setProfile(p => ({ ...p, full_name: e.target.value }))}
                placeholder="Dr. João da Silva"
                className="rounded-xl"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">CRM</label>
                <Input
                  value={profile.crm}
                  onChange={e => setProfile(p => ({ ...p, crm: e.target.value }))}
                  placeholder="123456"
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">UF</label>
                <select
                  value={profile.crm_state}
                  onChange={e => setProfile(p => ({ ...p, crm_state: e.target.value }))}
                  className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">UF</option>
                  {UF_LIST.map(uf => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">Especialidade</label>
              <select
                value={profile.specialty}
                onChange={e => setProfile(p => ({ ...p, specialty: e.target.value }))}
                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Selecione...</option>
                {SPECIALTIES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleSave}
              disabled={saving}
              className="w-full rounded-2xl gap-2"
            >
              <Save size={16} />
              {saving ? "Salvando..." : "Salvar Perfil"}
            </Button>
          </div>

          {/* Account info */}
          <div className="bg-card rounded-2xl border border-border p-4 space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Conta</h3>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-muted-foreground" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield size={16} className="text-muted-foreground" />
              <span>
                {subscription.subscribed
                  ? subscription.isTrial
                    ? `Trial (${subscription.trialDaysLeft} dias restantes)`
                    : "Premium ativo"
                  : "Plano gratuito"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock size={16} className="text-muted-foreground" />
              <span>Membro desde {new Date(user.created_at).toLocaleDateString("pt-BR")}</span>
            </div>
          </div>

          {/* Sign out */}
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
