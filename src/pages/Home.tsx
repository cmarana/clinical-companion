import { useNavigate } from "react-router-dom";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle,
  AlertTriangle, Zap, Moon, Sun, ChevronRight, Bot, FlaskConical,
  Timer, CheckSquare, Hash, GitBranch, FileEdit, TestTubes, ScanLine, Brain, GraduationCap,
  Droplets, BarChart3, Bell, Syringe, WifiOff, Wrench, Library, Eclipse, Newspaper
} from "lucide-react";
import pulsoLogo from "@/assets/pulso-logo.png";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import RecentHistory from "@/components/RecentHistory";
import { useNotifications } from "@/contexts/NotificationsContext";
import { hapticLight } from "@/lib/haptics";
import { useModuleAnalytics } from "@/hooks/useModuleAnalytics";
import SmartSearch from "@/components/SmartSearch";
import WeeklySummaryWidget from "@/components/WeeklySummaryWidget";
import VoiceFeaturesBanner from "@/components/VoiceFeaturesBanner";

// ── PREFETCH critical chunks after Home mounts ──
const prefetchRoutes = () => {
  const idleCallback = (window as any).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 200));
  idleCallback(() => {
    // Most-used routes: prefetch their chunks
    import("@/pages/FullProtocols");
    import("@/pages/EmergencyMode");
    import("@/pages/Prescriptions");
    import("@/pages/Calculators");
    import("@/pages/Bulario");
    import("@/pages/ClinicalAI");
  });
};

// ── ALL MODULES WITH TAGS ─────────────────────────────────────
interface Module {
  label: string;
  sub: string;
  icon: React.ElementType;
  path: string;
  variant: "ai" | "emergency" | "cyan" | "default";
  tags?: string[];
}

const allPrimaryModules: Module[] = [
  { label: "IA Clínica", sub: "Análise de conduta em tempo real", icon: Bot, path: "/clinical-ai", variant: "ai", tags: ["all"] },
  { label: "Modo Plantão", sub: "Guia completo para o plantão", icon: AlertTriangle, path: "/duty", variant: "emergency", tags: ["emergencia", "clinica-medica", "cirurgia", "generalista"] },
  { label: "Emergência", sub: "Algoritmos de urgência / UTI", icon: Zap, path: "/emergency", variant: "emergency", tags: ["emergencia", "cirurgia", "generalista"] },
  { label: "Bulário", sub: "Mais de 2.000 fármacos", icon: Pill, path: "/bulario", variant: "default", tags: ["all"] },
  { label: "Prescrições", sub: "Modelos prontos para uso", icon: ClipboardList, path: "/prescriptions", variant: "default", tags: ["all"] },
  { label: "Protocolos", sub: "Diretrizes atualizadas", icon: BookOpen, path: "/full-protocols", variant: "default", tags: ["all"] },
  { label: "Pediatria", sub: "Protocolos pediátricos", icon: Baby, path: "/pediatrics", variant: "cyan", tags: ["pediatria"] },
  { label: "Doses Pediátricas", sub: "Calculadora por peso", icon: Calculator, path: "/pediatric-doses", variant: "cyan", tags: ["pediatria"] },
  { label: "Obstetrícia", sub: "Emergências obstétricas", icon: Heart, path: "/obstetrics", variant: "default", tags: ["ginecologia-obstetricia"] },
  { label: "Antimicrobianos", sub: "ATB por foco infeccioso", icon: FileText, path: "/antimicrobials", variant: "default", tags: ["infectologia", "emergencia"] },
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
  { id: "tools", label: "Ferramentas", icon: Wrench, modules: toolsModules, accent: "primary", gradient: "from-primary/8 to-primary/3 dark:from-primary/15 dark:to-primary/5", iconBg: "bg-primary/12 text-primary dark:bg-primary/20", ringColor: "ring-primary/20" },
  { id: "specialties", label: "Especialidades", icon: Stethoscope, modules: specialtyModules, accent: "emerald", gradient: "from-emerald-500/8 to-emerald-500/3 dark:from-emerald-500/15 dark:to-emerald-500/5", iconBg: "bg-emerald-500/12 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400", ringColor: "ring-emerald-500/20" },
  { id: "study", label: "Estudo & Mais", icon: Library, modules: studyModules, accent: "amber", gradient: "from-amber-500/8 to-amber-500/3 dark:from-amber-500/15 dark:to-amber-500/5", iconBg: "bg-amber-500/12 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400", ringColor: "ring-amber-500/20" },
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
  ai: "col-span-2 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/40 ring-1 ring-white/10",
  emergency: "bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] shadow-md shadow-destructive/5 dark:shadow-destructive/10 ring-1 ring-destructive/15 dark:ring-destructive/25",
  cyan: "bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] shadow-md shadow-cyan-500/5 dark:shadow-cyan-500/10 ring-1 ring-cyan-500/15 dark:ring-cyan-500/25",
  default: "bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] shadow-md shadow-primary/5 dark:shadow-primary/10 ring-1 ring-border/50 dark:ring-border/30",
};

const iconStyles = {
  ai: "bg-white/20 text-white backdrop-blur-sm",
  emergency: "bg-gradient-to-br from-destructive/10 to-destructive/20 text-destructive dark:from-destructive/15 dark:to-destructive/30",
  cyan: "bg-gradient-to-br from-cyan-500/10 to-cyan-500/20 text-cyan-600 dark:from-cyan-500/15 dark:to-cyan-500/30 dark:text-cyan-400",
  default: "bg-gradient-to-br from-primary/10 to-primary/20 text-primary dark:from-primary/15 dark:to-primary/30",
};

// Default 6 for users without specialty
const defaultPrimaryPaths = ["/clinical-ai", "/duty", "/emergency", "/bulario", "/prescriptions", "/full-protocols"];

function getPrimaryModules(specialty: string | null): Module[] {
  // "todas" = show all primary modules (no filtering)
  if (specialty === "todas") {
    return allPrimaryModules;
  }

  if (!specialty || specialty === "generalista") {
    return allPrimaryModules.filter(m => defaultPrimaryPaths.includes(m.path));
  }

  const alwaysShow = allPrimaryModules.filter(m => m.tags?.includes("all"));
  const specialtySpecific = allPrimaryModules.filter(
    m => !m.tags?.includes("all") && m.tags?.includes(specialty)
  );
  const combined = [...alwaysShow, ...specialtySpecific];
  const paths = new Set(combined.map(m => m.path));

  if (combined.length < 6) {
    for (const m of allPrimaryModules) {
      if (!paths.has(m.path)) {
        combined.push(m);
        paths.add(m.path);
      }
      if (combined.length >= 6) break;
    }
  }

  return combined.slice(0, 10);
}

export default function Home() {
  const navigate = useNavigate();
  const { theme, toggleTheme, themeLabel } = useTheme();
  const { user } = useAuth();
  const { unreadCount } = useNotifications();
  const { trackModule } = useModuleAnalytics();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initials, setInitials] = useState("U");
  const [specialty] = useState<string | null>("todas");

  const navigateWithTracking = (path: string, label: string) => {
    hapticLight();
    trackModule(path, label);
    navigate(path);
  };

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

  // Prefetch critical route chunks when idle
  useEffect(() => { prefetchRoutes(); }, []);

  const primaryModules = useMemo(() => getPrimaryModules(specialty), [specialty]);

  return (
    <div className="px-4 pt-3 pb-24 max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between h-12 mb-3">
        <div className="flex items-center gap-2.5">
          <img src={pulsoLogo} alt="PULSO" width={32} height={32} className="rounded-lg" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight">PULSO</span>
            <span className="text-[9px] text-muted-foreground tracking-wide -mt-0.5">Decida em segundos. Sem margem para erro.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => { hapticLight(); toggleTheme(); }} className="p-2 rounded-xl hover:bg-accent transition-colors text-muted-foreground" title={themeLabel}>
            {theme === "oled" ? <Eclipse size={16} /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
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

      {/* Smart Search */}
      <SmartSearch specialty={specialty} />

      {/* ── PRIMARY GRID ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 mb-6">
        {primaryModules.map((m, i) => (
          <motion.div
            key={m.path}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className={m.variant === "ai" ? "col-span-2" : ""}
          >
            <button
              onClick={() => navigateWithTracking(m.path, m.label)}
              className={`group w-full flex items-center gap-3 px-4 py-4 lg:py-5 rounded-[20px] border-0 transition-all duration-300 active:scale-[0.97] hover:shadow-xl hover:-translate-y-0.5 text-left ${cardStyles[m.variant]}`}
            >
              <div className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${iconStyles[m.variant]}`}>
                <m.icon size={20} className="lg:hidden" />
                <m.icon size={24} className="hidden lg:block" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-semibold text-[13px] lg:text-sm leading-tight truncate">{m.label}</span>
                <span className={`text-[11px] lg:text-xs leading-tight mt-0.5 truncate ${m.variant === "ai" ? "text-white/70" : "text-muted-foreground"}`}>
                  {m.sub}
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* ── EMERGENCY SHORTCUTS ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-destructive/12 text-destructive">
              <Zap size={12} />
            </div>
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-destructive">
              Acesso Rápido
            </h2>
          </div>
          <button onClick={() => navigate("/emergency")} className="text-[10px] text-muted-foreground flex items-center gap-0.5 hover:text-foreground transition-colors">
            Ver todos <ChevronRight size={10} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {emergencyShortcuts.map((s, i) => (
            <motion.button
              key={s.path}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2 + i * 0.03 }}
              onClick={() => { hapticLight(); navigateWithTracking(s.path, s.label); }}
              className="px-4 py-2 rounded-xl bg-destructive/8 dark:bg-destructive/15 hover:bg-destructive/15 dark:hover:bg-destructive/25 active:scale-[0.96] transition-all duration-200 font-heading font-semibold text-xs text-destructive ring-1 ring-destructive/10 hover:ring-destructive/25"
            >
              {s.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Recent History */}
      <RecentHistory />

      {/* Updates Banner */}
      <button
        onClick={() => navigate("/updates")}
        className="w-full mt-4 mb-2 flex items-center gap-3 px-4 py-3 rounded-2xl bg-primary/5 dark:bg-primary/10 ring-1 ring-primary/15 hover:bg-primary/10 active:scale-[0.98] transition-all text-left"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/15 text-primary">
          <Newspaper size={16} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-heading font-semibold text-xs">Atualizações de Protocolos</span>
          <span className="text-[10px] text-muted-foreground">Veja as últimas revisões e novidades</span>
        </div>
        <ChevronRight size={14} className="text-muted-foreground ml-auto shrink-0" />
      </button>

      {/* ── ALL SECONDARY MODULES (stacked sections) ────────── */}
      {tabs.map((tab, tabIdx) => (
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 + tabIdx * 0.1 }}
          className="mt-7"
        >
          {/* Section header with colored accent bar */}
          <div className={`flex items-center gap-2.5 mb-3.5 px-1`}>
            <div className={`flex items-center justify-center w-7 h-7 rounded-lg ${tab.iconBg}`}>
              <tab.icon size={14} />
            </div>
            <h2 className="font-heading font-bold text-sm tracking-tight">{tab.label}</h2>
            <div className={`h-px flex-1 bg-gradient-to-r ${tab.gradient} rounded-full`} />
            <span className="text-[10px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{tab.modules.length}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {tab.modules.map((m, i) => (
              <motion.button
                key={m.path}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: 0.2 + tabIdx * 0.1 + i * 0.03 }}
                onClick={() => navigateWithTracking(m.path, m.label)}
                className={`group w-full flex items-center gap-2.5 px-3.5 py-3.5 rounded-2xl bg-card text-card-foreground ring-1 ${tab.ringColor} hover:ring-2 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 text-left border-0`}
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-xl shrink-0 ${tab.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <m.icon size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-semibold text-[12px] leading-tight truncate">{m.label}</span>
                  <span className="text-[10px] leading-tight mt-0.5 truncate text-muted-foreground">{m.sub}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Voice Features Banner */}
      <VoiceFeaturesBanner />

      {/* Weekly Summary Widget — lower priority, below modules */}
      <div className="mt-8 pt-6 border-t border-border/40">
        <WeeklySummaryWidget />
      </div>
    </div>
  );
}
