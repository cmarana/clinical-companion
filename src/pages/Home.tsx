import { useNavigate } from "react-router-dom";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle,
  AlertTriangle, Zap, Moon, Sun, ChevronRight, Bot, FlaskConical,
  Timer, CheckSquare, Hash, GitBranch, FileEdit, TestTubes, ScanLine, Brain, GraduationCap,
  Droplets, BarChart3, Bell, Syringe, WifiOff, Wrench, Library, Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import RecentHistory from "@/components/RecentHistory";
import { useNotifications } from "@/contexts/NotificationsContext";

// ── PRIMARY MODULES (always visible) ──────────────────────────
const primaryModules = [
  { label: "IA Clínica", sub: "Análise de conduta em tempo real", icon: Bot, path: "/clinical-ai", variant: "ai" as const },
  { label: "Modo Plantão", sub: "Guia completo para o plantão", icon: AlertTriangle, path: "/duty", variant: "emergency" as const },
  { label: "Emergência", sub: "Algoritmos de urgência / UTI", icon: Zap, path: "/emergency", variant: "emergency" as const },
  { label: "Bulário", sub: "Mais de 2.000 fármacos", icon: Pill, path: "/bulario", variant: "default" as const },
  { label: "Prescrições", sub: "Modelos prontos para uso", icon: ClipboardList, path: "/prescriptions", variant: "default" as const },
  { label: "Protocolos", sub: "Diretrizes atualizadas", icon: BookOpen, path: "/full-protocols", variant: "default" as const },
];

// ── GROUPED SECONDARY MODULES ─────────────────────────────────
const toolsModules = [
  { label: "Calculadoras", sub: "Scores e doses", icon: Calculator, path: "/calculators" },
  { label: "Interações", sub: "Checagem medicamentosa", icon: FlaskConical, path: "/drug-interactions" },
  { label: "Compat. Drogas", sub: "Compatibilidade EV", icon: GitBranch, path: "/drug-compatibility" },
  { label: "Diluições IV", sub: "Reconstituição e infusão", icon: Droplets, path: "/iv-dilutions" },
  { label: "Timer PCR", sub: "Cronômetro ACLS", icon: Timer, path: "/cpr-timer" },
  { label: "CID-10", sub: "Busca de códigos", icon: Hash, path: "/cid" },
  { label: "Valores de Ref.", sub: "Exames laboratoriais", icon: TestTubes, path: "/lab-reference" },
  { label: "Checklists", sub: "Verificações de segurança", icon: CheckSquare, path: "/checklists" },
];

const specialtyModules = [
  { label: "Pediatria", sub: "Protocolos pediátricos", icon: Baby, path: "/pediatrics" },
  { label: "Doses Pediátricas", sub: "Calculadora por peso", icon: Calculator, path: "/pediatric-doses" },
  { label: "Obstetrícia", sub: "Emergências obstétricas", icon: Heart, path: "/obstetrics" },
  { label: "Antimicrobianos", sub: "ATB por foco infeccioso", icon: FileText, path: "/antimicrobials" },
  { label: "Clínica", sub: "Diagnóstico por sintoma", icon: Stethoscope, path: "/diagnosis" },
  { label: "Atlas Clínico", sub: "ECG, Dermato, Radiologia", icon: ScanLine, path: "/clinical-atlas" },
  { label: "Procedimentos", sub: "IOT, CVC, drenagem, sutura", icon: Syringe, path: "/procedure-guides" },
];

const studyModules = [
  { label: "Questões", sub: "Estudo por questões", icon: HelpCircle, path: "/quiz" },
  { label: "Flashcards", sub: "Revisão espaçada (Anki)", icon: Brain, path: "/flashcards" },
  { label: "Residência", sub: "Questões por banca", icon: GraduationCap, path: "/residency-quiz" },
  { label: "Dashboard", sub: "Streak e progresso", icon: BarChart3, path: "/study-dashboard" },
  { label: "Evoluções", sub: "Templates de evolução", icon: FileEdit, path: "/evolution-templates" },
  { label: "Documentos", sub: "Receitas e atestados", icon: FileText, path: "/documents" },
  { label: "Modo Offline", sub: "Plantão sem internet", icon: WifiOff, path: "/offline" },
];

const tabs = [
  { id: "tools", label: "Ferramentas", icon: Wrench, modules: toolsModules },
  { id: "specialties", label: "Especialidades", icon: Sparkles, modules: specialtyModules },
  { id: "study", label: "Estudo & Mais", icon: Library, modules: studyModules },
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
  const { unreadCount } = useNotifications();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initials, setInitials] = useState("U");
  const [activeTab, setActiveTab] = useState("tools");

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

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div className="px-4 pt-3 pb-24 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between h-12 mb-3">
        <span className="font-heading font-bold text-base tracking-tight">PS Guide</span>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => navigate("/notifications")} className="relative p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground">
            <Bell size={16} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[9px] font-bold flex items-center justify-center">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>
          <button onClick={() => navigate(user ? "/profile" : "/auth")} className="rounded-full hover:ring-2 hover:ring-primary/30 transition-all">
            <Avatar className="w-8 h-8">
              {avatarUrl ? <AvatarImage src={avatarUrl} alt="Avatar" /> : null}
              <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">{initials}</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>

      {/* Search — hero element */}
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="relative mb-5">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Buscar medicamento, protocolo, CID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 h-[52px] text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
        />
      </form>

      {/* ── PRIMARY GRID (6 modules) ─────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
        {primaryModules.map((m) => (
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
              <span className={`text-[11px] leading-tight mt-0.5 truncate ${m.variant === "ai" ? "text-white/70" : "text-muted-foreground"}`}>
                {m.sub}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ── EMERGENCY SHORTCUTS ──────────────────────────────── */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2.5">
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

      {/* Recent History */}
      <RecentHistory />

      {/* ── SECONDARY MODULES (tabbed) ───────────────────────── */}
      <div className="mt-6">
        {/* Tab selector */}
        <div className="flex gap-1.5 mb-4 bg-muted/50 dark:bg-muted/30 p-1 rounded-2xl">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-heading font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon size={14} />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content grid */}
        {activeTabData && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {activeTabData.modules.map((m) => (
              <button
                key={m.path}
                onClick={() => navigate(m.path)}
                className="flex items-center gap-2.5 px-3.5 py-3.5 rounded-2xl bg-card text-card-foreground shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 text-left border-0"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0 bg-primary/10 text-primary dark:bg-primary/20">
                  <m.icon size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-semibold text-[12px] leading-tight truncate">{m.label}</span>
                  <span className="text-[10px] leading-tight mt-0.5 truncate text-muted-foreground">{m.sub}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
