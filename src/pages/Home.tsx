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
    <div className="px-4 pt-3 pb-24 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
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

      {/* Weekly Summary Widget */}
      <WeeklySummaryWidget />

      {/* ── PRIMARY GRID ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {primaryModules.map((m, i) => (
          <motion.div
            key={m.path}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <button
              onClick={() => navigateWithTracking(m.path, m.label)}
              className={`group w-full flex items-center gap-3 px-4 py-4 rounded-[20px] border-0 transition-all duration-300 active:scale-[0.97] hover:shadow-xl hover:-translate-y-0.5 text-left ${cardStyles[m.variant]}`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-110 ${iconStyles[m.variant]}`}>
                <m.icon size={20} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-semibold text-[13px] leading-tight truncate">{m.label}</span>
                <span className={`text-[11px] leading-tight mt-0.5 truncate ${m.variant === "ai" ? "text-white/70" : "text-muted-foreground"}`}>
                  {m.sub}
                </span>
              </div>
            </button>
          </motion.div>
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
              onClick={() => { hapticLight(); navigateWithTracking(s.path, s.label); }}
              className="px-4 py-2 rounded-2xl border-0 bg-destructive/8 dark:bg-destructive/15 hover:bg-destructive/15 dark:hover:bg-destructive/25 active:scale-[0.98] transition-all duration-200 font-heading font-medium text-xs text-destructive shadow-sm"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

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
      {tabs.map((tab) => (
        <div key={tab.id} className="mt-6">
          <h2 className="font-heading font-semibold text-sm flex items-center gap-2 mb-3 px-1">
            <tab.icon size={16} className="text-primary" />
            {tab.label}
            <span className="text-[10px] font-normal text-muted-foreground ml-1">({tab.modules.length})</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {tab.modules.map((m) => (
              <button
                key={m.path}
                onClick={() => navigateWithTracking(m.path, m.label)}
                className="group w-full flex items-center gap-2.5 px-3.5 py-3.5 rounded-2xl bg-gradient-to-br from-card to-card dark:from-card dark:to-[hsl(var(--card)/0.8)] text-card-foreground shadow-md shadow-primary/5 dark:shadow-primary/10 ring-1 ring-border/50 dark:ring-border/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 text-left border-0"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0 bg-gradient-to-br from-primary/10 to-primary/20 text-primary dark:from-primary/15 dark:to-primary/30 transition-transform duration-300 group-hover:scale-110">
                  <m.icon size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-semibold text-[12px] leading-tight truncate">{m.label}</span>
                  <span className="text-[10px] leading-tight mt-0.5 truncate text-muted-foreground">{m.sub}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
