import { useNavigate } from "react-router-dom";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle,
  AlertTriangle, Zap, Moon, Sun, ChevronRight, Bot, FlaskConical,
  Timer, CheckSquare, Hash, GitBranch, FileEdit, TestTubes, ScanLine, Brain, GraduationCap,
  Droplets, BarChart3, Bell
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import RecentHistory from "@/components/RecentHistory";
import { useNotifications } from "@/contexts/NotificationsContext";

const modules = [
  { label: "IA Clínica", sub: "Análise de conduta em tempo real", icon: Bot, path: "/clinical-ai", variant: "ai" as const },
  { label: "Modo Plantão", sub: "Guia completo para o plantão", icon: AlertTriangle, path: "/duty", variant: "emergency" as const },
  { label: "Emergência / UTI / SAMU", sub: "Algoritmos de urgência", icon: Zap, path: "/emergency", variant: "emergency" as const },
  { label: "Bulário", sub: "Mais de 2.000 fármacos", icon: Pill, path: "/bulario", variant: "default" as const },
  { label: "Prescrições", sub: "Modelos prontos para uso", icon: ClipboardList, path: "/prescriptions", variant: "default" as const },
  { label: "Protocolos Completos", sub: "Diretrizes atualizadas", icon: BookOpen, path: "/full-protocols", variant: "default" as const },
  { label: "Calculadoras", sub: "Scores e doses rápidas", icon: Calculator, path: "/calculators", variant: "default" as const },
  { label: "Interações", sub: "Checagem medicamentosa", icon: FlaskConical, path: "/drug-interactions", variant: "default" as const },
  { label: "Pediatria", sub: "Doses e protocolos pediátricos", icon: Baby, path: "/pediatrics", variant: "cyan" as const },
  { label: "Obstetrícia", sub: "Emergências obstétricas", icon: Heart, path: "/obstetrics", variant: "default" as const },
  { label: "Clínica", sub: "Diagnóstico por sintoma", icon: Stethoscope, path: "/diagnosis", variant: "default" as const },
  { label: "Timer PCR", sub: "Cronômetro de reanimação", icon: Timer, path: "/cpr-timer", variant: "emergency" as const },
  { label: "Checklists", sub: "Verificações de segurança", icon: CheckSquare, path: "/checklists", variant: "default" as const },
  { label: "CID-10", sub: "Busca de códigos CID", icon: Hash, path: "/cid", variant: "default" as const },
  { label: "Compat. Drogas", sub: "Compatibilidade EV", icon: GitBranch, path: "/drug-compatibility", variant: "default" as const },
  { label: "Diluições IV", sub: "Reconstituição e infusão", icon: Droplets, path: "/iv-dilutions", variant: "default" as const },
  { label: "Valores de Ref.", sub: "Exames laboratoriais", icon: TestTubes, path: "/lab-reference", variant: "default" as const },
  { label: "Atlas Clínico", sub: "ECG, Dermato, Radiologia", icon: ScanLine, path: "/clinical-atlas", variant: "default" as const },
  { label: "Evoluções", sub: "Templates de evolução", icon: FileEdit, path: "/evolution-templates", variant: "default" as const },
  { label: "Questões", sub: "Estudo por questões", icon: HelpCircle, path: "/quiz", variant: "default" as const },
  { label: "Flashcards", sub: "Revisão espaçada (Anki)", icon: Brain, path: "/flashcards", variant: "default" as const },
  { label: "Residência", sub: "Questões comentadas por banca", icon: GraduationCap, path: "/residency-quiz", variant: "default" as const },
  { label: "Dashboard Estudo", sub: "Streak, metas e progresso", icon: BarChart3, path: "/study-dashboard", variant: "cyan" as const },
];

const emergencyShortcuts = [
  { label: "PCR", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "Choque", path: "/protocols/choque-hipovolemico" },
  { label: "IOT", path: "/protocols/iot" },
  { label: "Convulsão", path: "/protocols/convulsao" },
];

const cardStyles = {
  ai: "col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30",
  emergency: "bg-card text-card-foreground shadow-sm dark:shadow-none border-l-[3px] border-l-destructive",
  cyan: "bg-card text-card-foreground shadow-sm dark:shadow-none border-l-[3px] border-l-cyan-500",
  default: "bg-card text-card-foreground shadow-sm dark:shadow-none",
};

const iconStyles = {
  ai: "bg-white/20 text-white",
  emergency: "bg-destructive/10 text-destructive dark:bg-destructive/20",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
  default: "bg-primary/10 text-primary dark:bg-primary/20",
};

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initials, setInitials] = useState("U");

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("full_name, avatar_url").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.avatar_url) setAvatarUrl(data.avatar_url);
        if (data?.full_name) {
          setInitials(data.full_name.split(" ").map((n: string) => n[0]).slice(0, 2).join("").toUpperCase());
        } else {
          setInitials(user.email?.[0]?.toUpperCase() || "U");
        }
      });
  }, [user]);

  const handleSearch = () => {
    if (searchQuery.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="px-4 pt-3 pb-24 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between h-12 mb-3">
        <span className="font-heading font-bold text-base tracking-tight">PS Guide</span>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => navigate(user ? "/profile" : "/auth")} className="rounded-full hover:ring-2 hover:ring-primary/30 transition-all">
            <Avatar className="w-8 h-8">
              {avatarUrl ? <AvatarImage src={avatarUrl} alt="Avatar" /> : null}
              <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{initials}</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>

      {/* Search */}
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="relative mb-5">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="O que vamos salvar hoje?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 h-[52px] text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
        />
      </form>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {modules.map((m) => (
          <button
            key={m.path}
            onClick={() => navigate(m.path)}
            className={`flex items-center gap-3 px-4 py-4 rounded-[20px] border-0 transition-all duration-200 active:scale-[0.98] hover:shadow-md text-left ${cardStyles[m.variant]}`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-2xl shrink-0 ${iconStyles[m.variant]}`}>
              <m.icon size={20} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-semibold text-[13px] leading-tight truncate">{m.label}</span>
              {m.sub && (
                <span className={`text-[11px] leading-tight mt-0.5 truncate ${m.variant === "ai" ? "text-white/70" : "text-muted-foreground"}`}>
                  {m.sub}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Recent History */}
      <RecentHistory />

      {/* Emergency shortcuts */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-semibold text-xs flex items-center gap-1.5 text-destructive uppercase tracking-wider">
            <Zap size={12} /> Acesso Rápido
          </h2>
          <button onClick={() => navigate("/emergency")} className="text-[10px] text-muted-foreground flex items-center gap-0.5 hover:text-foreground">
            Ver todos <ChevronRight size={10} />
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {emergencyShortcuts.map((s) => (
            <button
              key={s.path}
              onClick={() => navigate(s.path)}
              className="px-4 py-2 rounded-2xl border-0 bg-destructive/8 dark:bg-destructive/15 hover:bg-destructive/15 dark:hover:bg-destructive/25 active:scale-[0.98] transition-all duration-200 font-heading font-medium text-xs text-destructive shadow-sm"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
