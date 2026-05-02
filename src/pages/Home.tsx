import { useNavigate } from "react-router-dom";
import {
  Sun, Moon, ChevronRight, Bell, Wrench, Library,
  Eclipse, Newspaper, Stethoscope, Zap, Shield,
} from "lucide-react";
import pulsoLogoLight from "@/assets/pulso-logo-light.png";
import pulsoLogoDark from "@/assets/pulso-logo-dark.png";
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
import DailyBriefingWidget from "@/components/DailyBriefingWidget";
import { PrimaryCard, SecondaryCard, EmergencyShortcut } from "@/components/home/HomeCards";
import {
  HOME_PRIMARY_MODULES,
  getHomeSection,
  type AppModule,
  type HomeVariant,
} from "@/config/appModules";

import WelcomeScreen from "@/components/WelcomeScreen";

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

// ── PRIMARY MODULES (vindos da config compartilhada) ─────────
interface PrimaryModule {
  label: string;
  sub: string;
  icon: React.ElementType;
  path: string;
  variant: HomeVariant;
  tags: string[];
}

const allPrimaryModules: PrimaryModule[] = HOME_PRIMARY_MODULES.map((m) => ({
  label: m.homeLabel,
  sub: m.homeSub,
  icon: m.homeIcon,
  path: m.path,
  variant: m.homePrimary!.variant,
  tags: m.homePrimary!.tags,
}));

// ── SECONDARY SECTIONS (também da config) ────────────────────
const mapSection = (m: AppModule) => ({
  label: m.homeLabel,
  sub: m.homeSub,
  icon: m.homeIcon,
  path: m.path,
});

const toolsModules = getHomeSection("tools").map(mapSection);
const specialtyModules = getHomeSection("specialties").map(mapSection);
const studyModules = getHomeSection("study").map(mapSection);

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
  const [fullName, setFullName] = useState("");
  const [specialty] = useState<string | null>("todas");
  const [isAdmin, setIsAdmin] = useState(false);
  
  const pulsoLogo = theme === "light" ? pulsoLogoLight : pulsoLogoDark;

  useEffect(() => {
    if (!user) { setIsAdmin(false); return; }
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" })
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  // Stable callback so memoized cards skip re-renders when parent updates
  // (theme toggle, unreadCount, avatar load, etc.).
  const navigateWithTracking = useCallback((path: string, label: string) => {
    hapticLight();
    trackModule(path, label);
    navigate(path);
  }, [navigate, trackModule]);

  useEffect(() => {
    if (!user) return;

    supabase.from("profiles").select("full_name, avatar_url").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.avatar_url) setAvatarUrl(data.avatar_url);
        if (data?.full_name) {
          setFullName(data.full_name);
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
    <div className="px-4 pb-24 max-w-lg md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto pt-safe-fb">
      {/* Top bar */}
      <div className="sticky z-app-chrome top-safe-fb flex items-center justify-between h-12 mb-3 bg-background -mx-4 px-4 border-b border-border/40">
        <div className="flex items-center gap-2.5">
          <img src={pulsoLogo} alt="PULSO" width={32} height={32} fetchPriority="high" decoding="async" className="rounded-lg" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight">PULSO</span>
            <span className="text-[9px] text-muted-foreground tracking-wide -mt-0.5">Decida em segundos. Sem margem para erro.</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <button onClick={() => navigate("/admin")} className="p-2 rounded-xl hover:bg-accent transition-colors text-destructive" title="Painel Admin">
              <Shield size={16} />
            </button>
          )}
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
      <div data-tour="search">
        <SmartSearch specialty={specialty} />
      </div>

      {/* Daily Briefing — resumo do dia, streak, flashcards pendentes */}
      <div className="mt-4">
        <DailyBriefingWidget />
      </div>

      {/* ── PRIMARY GRID ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 mb-6">
        {primaryModules.map((m) => (
          <PrimaryCard
            key={m.path}
            path={m.path}
            label={m.label}
            sub={m.sub}
            icon={m.icon}
            variant={m.variant}
            onNavigate={navigateWithTracking}
          />
        ))}
      </div>

      {/* ── EMERGENCY SHORTCUTS ──────────────────────────────── */}
      <div className="mb-6">
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
          {emergencyShortcuts.map((s) => (
            <EmergencyShortcut
              key={s.path}
              path={s.path}
              label={s.label}
              onNavigate={navigateWithTracking}
            />
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
        <div key={tab.id} className="mt-7">
          <div className="flex items-center gap-2.5 mb-3.5 px-1">
            <div className={`flex items-center justify-center w-7 h-7 rounded-lg ${tab.iconBg}`}>
              <tab.icon size={14} />
            </div>
            <h2 className="font-heading font-bold text-sm tracking-tight">{tab.label}</h2>
            <div className={`h-px flex-1 bg-gradient-to-r ${tab.gradient} rounded-full`} />
            <span className="text-[10px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">{tab.modules.length}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 lg:gap-3">
            {tab.modules.map((m) => (
              <SecondaryCard
                key={m.path}
                path={m.path}
                label={m.label}
                sub={m.sub}
                icon={m.icon}
                iconBg={tab.iconBg}
                ringColor={tab.ringColor}
                onNavigate={navigateWithTracking}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Voice Features Banner */}
      <VoiceFeaturesBanner />

      {/* Weekly Summary Widget — lower priority, below modules */}
      <div className="mt-8 pt-6 border-t border-border/40" data-tour="tools">
        <WeeklySummaryWidget />
      </div>

      <WelcomeScreen userName={fullName} onComplete={() => {}} />
    </div>
  );
}
