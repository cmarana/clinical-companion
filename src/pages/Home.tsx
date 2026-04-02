import { useNavigate } from "react-router-dom";
import {
  Search, Pill, ClipboardList, FileText, Calculator,
  Baby, Heart, Stethoscope, BookOpen, HelpCircle,
  AlertTriangle, Zap, Moon, Sun, ChevronRight, Bot, FlaskConical,
  Timer, CheckSquare, Hash, GitBranch, FileEdit, TestTubes, ScanLine, Brain, GraduationCap,
  Droplets, BarChart3, Bell, Syringe, WifiOff, Wrench, Library, Sparkles, Eclipse
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import RecentHistory from "@/components/RecentHistory";
import { useNotifications } from "@/contexts/NotificationsContext";
import OnboardingModal from "@/components/OnboardingModal";
import { hapticLight, hapticMedium } from "@/lib/haptics";
import { useModuleAnalytics, setAnalyticsSpecialty } from "@/hooks/useModuleAnalytics";

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
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme, themeLabel } = useTheme();
  const { user } = useAuth();
  const { unreadCount } = useNotifications();
  const { trackModule } = useModuleAnalytics();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initials, setInitials] = useState("U");
  const [activeTab, setActiveTab] = useState("tools");
  const [specialty, setSpecialty] = useState<string | null>(null);

  const navigateWithTracking = (path: string, label: string) => {
    hapticLight();
    trackModule(path, label);
    navigate(path);
  };
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    if (!user) {
      // Check localStorage for non-logged-in users
      const saved = localStorage.getItem("ps-guide-specialty");
      const dismissed = localStorage.getItem("ps-guide-onboarding-dismissed");
      if (saved) {
        setSpecialty(saved);
      } else if (!dismissed) {
        setShowOnboarding(true);
      }
      setProfileLoaded(true);
      return;
    }

    supabase.from("profiles").select("full_name, avatar_url, specialty").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.avatar_url) setAvatarUrl(data.avatar_url);
        if (data?.full_name) {
          setInitials(data.full_name.split(" ").map((n: string) => n[0]).slice(0, 2).join("").toUpperCase());
        } else {
          setInitials(user.email?.[0]?.toUpperCase() || "U");
        }
        if (data?.specialty) {
          setSpecialty(data.specialty);
          localStorage.setItem("ps-guide-specialty", data.specialty);
        } else {
          const dismissed = localStorage.getItem("ps-guide-onboarding-dismissed");
          if (!dismissed) setShowOnboarding(true);
        }
        setProfileLoaded(true);
      });
  }, [user]);

  const handleOnboardingComplete = async (specialtyId: string) => {
    setSpecialty(specialtyId);
    setShowOnboarding(false);
    localStorage.setItem("ps-guide-specialty", specialtyId);
    localStorage.removeItem("ps-guide-onboarding-dismissed");
    setAnalyticsSpecialty(specialtyId);

    if (user) {
      await supabase.from("profiles").update({ specialty: specialtyId }).eq("user_id", user.id);
    }
  };

  const handleOnboardingSkip = () => {
    setShowOnboarding(false);
    localStorage.setItem("ps-guide-onboarding-dismissed", "true");
  };

  const primaryModules = useMemo(() => getPrimaryModules(specialty), [specialty]);

  const handleSearch = () => {
    if (searchQuery.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div className="px-4 pt-3 pb-24 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
      {/* Onboarding Modal */}
      <AnimatePresence>
        {showOnboarding && (
          <OnboardingModal
            onComplete={handleOnboardingComplete}
            onSkip={handleOnboardingSkip}
          />
        )}
      </AnimatePresence>

      {/* Top bar */}
      <div className="flex items-center justify-between h-12 mb-3">
        <span className="font-heading font-bold text-base tracking-tight">PS Guide</span>
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

      {/* Specialty badge */}
      {profileLoaded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-3"
        >
          <button
            onClick={() => setShowOnboarding(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-heading font-medium hover:bg-primary/15 transition-colors"
          >
            <Sparkles size={12} />
            {specialty === "todas"
              ? "Todas as áreas"
              : specialty
                ? specialty.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
                : "Personalizar"}
            <span className="text-primary/50 ml-0.5">· Alterar</span>
          </button>
        </motion.div>
      )}

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
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-[20px] border-0 transition-all duration-200 active:scale-[0.98] hover:shadow-md text-left ${cardStyles[m.variant]}`}
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
              onClick={() => { hapticMedium(); navigateWithTracking(s.path, s.label); }}
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
        {/* Section header */}
        <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3 px-1">
          Mais Ferramentas
        </h2>

        {/* Tab selector — prominent pills */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1 -mx-1 px-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = tab.modules.length;
            return (
              <button
                key={tab.id}
                onClick={() => { hapticLight(); setActiveTab(tab.id); }}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-heading font-semibold transition-all duration-200 shrink-0 border-2 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card text-foreground border-border hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <tab.icon size={16} className={isActive ? "text-primary-foreground" : "text-primary"} />
                <span>{tab.label}</span>
                <span className={`ml-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive
                    ? "bg-white/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab content grid */}
        <AnimatePresence mode="wait">
          {activeTabData && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5"
            >
              {activeTabData.modules.map((m, i) => (
                <motion.div
                  key={m.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                >
                  <button
                    onClick={() => navigateWithTracking(m.path, m.label)}
                    className="w-full flex items-center gap-2.5 px-3.5 py-3.5 rounded-2xl bg-card text-card-foreground shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 text-left border-0"
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0 bg-primary/10 text-primary dark:bg-primary/20">
                      <m.icon size={18} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-heading font-semibold text-[12px] leading-tight truncate">{m.label}</span>
                      <span className="text-[10px] leading-tight mt-0.5 truncate text-muted-foreground">{m.sub}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
