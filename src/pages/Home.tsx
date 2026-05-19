import { useNavigate } from "react-router-dom";
import {
  Sun, Moon, Bell, Eclipse, Shield, Search, Mic, Activity,
  Zap, Bot, Stethoscope, Wrench, GraduationCap, FileText,
  ArrowRight, ChevronRight, ScanLine, MessageSquareText, FlaskConical,
} from "lucide-react";
import { PulsoLogo } from "@/components/PulsoLogo";
import { PulsoLogoECG } from "@/components/PulsoLogoECG";
import { GRADIENT_DEEP_BLUE } from "@/lib/design-tokens";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import ContinueWhereLeftOff from "@/components/ContinueWhereLeftOff";
import VoiceSearchButton from "@/components/VoiceSearchButton";
import { useNotifications } from "@/contexts/NotificationsContext";
import { hapticLight } from "@/lib/haptics";
import { useModuleAnalytics } from "@/hooks/useModuleAnalytics";
import WelcomeScreen from "@/components/WelcomeScreen";

// Prefetch routes idle
const prefetchRoutes = () => {
  const idle = (window as any).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 200));
  idle(() => {
    import("@/pages/SearchPage");
    import("@/pages/DutyMode");
    import("@/pages/EmergencyMode");
    import("@/pages/Calculators");
  });
};

const emergencyShortcuts = [
  { label: "PCR", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "IAM", path: "/protocols/iam" },
  { label: "AVC", path: "/protocols/avc" },
  { label: "Choque", path: "/protocols/choque-hipovolemico" },
  { label: "Anafilaxia", path: "/protocols/anafilaxia" },
  { label: "IOT", path: "/protocols/iot" },
  { label: "Convulsão", path: "/protocols/convulsao" },
];

const modes = [
  { label: "Plantão", sub: "Atendimento em tempo real", icon: Activity, path: "/duty", tone: "deep" },
  { label: "Emergência", sub: "Protocolos críticos", icon: Zap, path: "/emergency", tone: "danger" },
  { label: "Ferramentas", sub: "Calculadoras, bulário, diagnóstico", icon: Wrench, path: "/tools", tone: "deep" },
  { label: "Especialidades", sub: "Protocolos por área clínica", icon: Stethoscope, path: "/specialties", tone: "deep" },
  { label: "Estudo", sub: "Flashcards, questões e residência", icon: GraduationCap, path: "/study-dashboard", tone: "deep" },
  { label: "Prescrições", sub: "Modelos, evoluções e alta", icon: FileText, path: "/prescriptions", tone: "deep" },
];

// Paleta única: azul Plantão dominante. Vermelho APENAS em Emergência (semântico).
// Tokens centralizados em src/lib/design-tokens.ts
import { toneStyles, GRADIENT_BRIGHT_BLUE, GRADIENT_DEEP_BLUE_SOFT } from "@/lib/design-tokens";

export default function Home() {
  const navigate = useNavigate();
  const { theme, toggleTheme, themeLabel } = useTheme();
  const { user } = useAuth();
  const { unreadCount } = useNotifications();
  const { trackModule } = useModuleAnalytics();
  const [avatarUrl, setAvatarUrl] = useState("");
  const [initials, setInitials] = useState("U");
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [leavingMode, setLeavingMode] = useState<string | null>(null);

  useEffect(() => {
    if (!user) { setIsAdmin(false); return; }
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" })
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  const go = useCallback((path: string, label: string) => {
    hapticLight();
    trackModule(path, label);
    setLeavingMode(path);
    setTimeout(() => {
      navigate(path);
      setLeavingMode(null);
    }, 280);
  }, [navigate, trackModule]);

  useEffect(() => {
    if (!user) return;
    supabase.from("profiles").select("full_name, avatar_url").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => {
        if (data?.avatar_url) setAvatarUrl(data.avatar_url);
        if (data?.full_name) {
          setFullName(data.full_name);
          setFirstName(data.full_name.split(" ")[0]);
          setInitials(data.full_name.split(" ").map((n: string) => n[0]).slice(0, 2).join("").toUpperCase());
        } else {
          setInitials(user.email?.[0]?.toUpperCase() || "U");
        }
      });
  }, [user]);

  useEffect(() => { prefetchRoutes(); }, []);

  return (
    <div className="pb-28 max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto pt-safe-fb">
      {/* ── HEADER ──────────────────────────────────────── */}
      <div
        className="sticky z-app-chrome top-safe-fb flex items-center justify-between h-14 px-4 border-b border-white/10 text-white"
        style={{ background: "linear-gradient(135deg, hsl(210 85% 28%) 0%, hsl(210 90% 42%) 100%)" }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 select-none"
        >
          <PulsoLogo size={30} priority forceVariant="dark" animate />
          <span className="font-heading font-bold text-base tracking-tight text-white">PULSO</span>
        </button>
        <div className="flex items-center gap-1">
          {isAdmin && (
            <button onClick={() => navigate("/admin")} className="p-2 rounded-full hover:bg-white/15 text-white" title="Painel Admin">
              <Shield size={16} />
            </button>
          )}
          <button onClick={() => { hapticLight(); toggleTheme(); }} className="p-2 rounded-full hover:bg-white/15 text-white/90" title={themeLabel}>
            {theme === "oled" ? <Eclipse size={16} /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => navigate("/notifications")} className="relative p-2 rounded-full hover:bg-white/15 text-white/90">
            <Bell size={16} />
            {unreadCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[9px] font-bold flex items-center justify-center">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>
          <button onClick={() => navigate(user ? "/profile" : "/auth")} className="ml-1 rounded-full hover:ring-2 hover:ring-white/40 transition-all">
            <Avatar className="w-8 h-8 ring-2 ring-white/30">
              {avatarUrl ? <AvatarImage src={avatarUrl} alt="Avatar" /> : null}
              <AvatarFallback className="text-xs font-bold bg-white/15 text-white">{initials}</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>

      {/* ── GREETING ───────────────────────────────────── */}
      <div className="px-4 pt-5 pb-3">
        <h1 className="font-heading font-bold text-[22px] leading-tight tracking-tight text-foreground">
          {firstName ? `Olá, ${firstName}` : "Olá, doutor(a)"}
        </h1>
        <p className="text-[13px] text-muted-foreground mt-0.5">
          Apoio clínico rápido para decisões mais seguras.
        </p>
      </div>

      {/* ── SEARCH ─────────────────────────────────────── */}
      <div className="px-4">
        <div
          className="group w-full flex items-center gap-3 h-14 px-4 rounded-2xl bg-card border border-border/70 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
          data-tour="search"
        >
          <button
            onClick={() => navigate("/search")}
            className="flex items-center gap-3 flex-1 min-w-0 text-left active:scale-[0.99] transition-transform"
          >
            <Search size={18} className="text-muted-foreground shrink-0" />
            <span className="flex-1 text-[13px] text-muted-foreground truncate">
              Buscar conduta, medicamento, CID ou cálculo
            </span>
          </button>
          <VoiceSearchButton className="w-9 h-9 shrink-0" size={16} />
        </div>
      </div>


      {/* ── HERO: MODO PLANTÃO ─────────────────────────── */}
      <div className="px-4 mt-5">
        <motion.button
          whileTap={{ scale: 0.985 }}
          onClick={() => go("/duty", "Modo Plantão")}
          className="relative w-full overflow-hidden rounded-3xl text-left text-white shadow-xl shadow-primary/20 ring-1 ring-white/10"
          style={{ background: GRADIENT_BRIGHT_BLUE }}
        >
          {/* decorative ECG line */}
          <svg
            className="absolute inset-x-0 bottom-0 w-full h-24 opacity-25"
            viewBox="0 0 400 100"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M0 60 L80 60 L95 60 L105 30 L115 85 L130 60 L200 60 L215 60 L225 20 L235 90 L250 60 L400 60" />
          </svg>
          {/* glow */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/15 blur-3xl" />

          <div className="relative p-5 lg:p-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Modo principal
              </span>
            </div>
            <h2 className="font-heading font-bold text-[22px] lg:text-2xl leading-tight">
              Modo Plantão
            </h2>
            <p className="text-[13px] lg:text-sm text-white/80 mt-1.5 max-w-sm leading-snug">
              Emergências, condutas, doses, prescrições e ferramentas em um fluxo rápido.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 text-white ring-1 ring-white/25 font-heading font-semibold text-[13px] shadow-md">
              Iniciar plantão
              <ArrowRight size={15} />
            </div>
          </div>
        </motion.button>
      </div>

      {/* ── EMERGÊNCIA EM 1 TOQUE ──────────────────────── */}
      <section className="mt-7 px-4">
        <div className="flex items-end justify-between mb-2.5">
          <div>
            <h3 className="font-heading font-bold text-[15px] tracking-tight text-foreground">
              Emergência em 1 toque
            </h3>
            <p className="text-[11.5px] text-muted-foreground mt-0.5">
              Protocolos críticos para acesso imediato.
            </p>
          </div>
          <button
            onClick={() => navigate("/emergency")}
            className="text-[11px] font-medium text-primary flex items-center gap-0.5 hover:underline shrink-0"
          >
            Ver todos <ChevronRight size={12} />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1 scrollbar-none">
          {emergencyShortcuts.map((s) => (
            <button
              key={s.path}
              onClick={() => go(s.path, s.label)}
              className="shrink-0 px-3.5 h-9 rounded-full bg-card border border-destructive/20 hover:border-destructive/50 hover:bg-destructive/5 active:scale-95 transition-all font-heading font-semibold text-[12px] text-destructive"
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── DRA. CLARA — IA CLÍNICA ────────────────────── */}
      <section className="mt-6 px-4">
        <motion.button
          whileTap={{ scale: 0.99 }}
          onClick={() => go("/clinical-ai", "Dra. Clara")}
          className="relative w-full overflow-hidden rounded-2xl text-left text-white shadow-md ring-1 ring-white/10"
          style={{ background: GRADIENT_DEEP_BLUE_SOFT }}
        >
          <div className="absolute -bottom-10 -right-6 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="relative px-4 py-3 flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 ring-1 ring-white/25 shrink-0">
              <Bot size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-[14px] leading-tight">
                Dra. Clara — IA Clínica
              </h3>
              <p className="text-[11.5px] text-white/75 mt-0.5 leading-snug">
                Pergunte, analise casos e interprete exames.
              </p>
            </div>
            <div className="flex gap-1.5 shrink-0">
              {[
                { label: "Chat", icon: MessageSquareText, path: "/clinical-ai" },
                { label: "Caso", icon: FlaskConical, path: "/case-simulator" },
                { label: "Exames", icon: ScanLine, path: "/clinical-ai?tab=image" },
              ].map((c) => (
                <span
                  key={c.label}
                  onClick={(e) => { e.stopPropagation(); go(c.path, `IA · ${c.label}`); }}
                  title={c.label}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <c.icon size={13} />
                </span>
              ))}
            </div>
          </div>
        </motion.button>
      </section>


      {/* ── ESCOLHA SEU MODO ───────────────────────────── */}
      <section className="mt-8 px-4">
        <div className="mb-3">
          <h3 className="font-heading font-bold text-[15px] tracking-tight text-foreground">
            Escolha seu modo
          </h3>
          <p className="text-[11.5px] text-muted-foreground mt-0.5">
            Organize sua rotina conforme o momento clínico.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {modes.map((m) => {
            const t = toneStyles[m.tone];
            const isDuty = m.path === "/duty";
            const isLeaving = leavingMode === m.path;
            return (
              <motion.button
                key={m.path}
                whileTap={{ scale: 0.97 }}
                animate={isLeaving ? {
                  scale: [1, 1.06, 1.03],
                  filter: ["brightness(1)", "brightness(1.15)", "brightness(1.05)"],
                } : {
                  scale: 1,
                  filter: "brightness(1)",
                }}
                transition={isLeaving ? { duration: 0.28, ease: "easeOut" } : { duration: 0.2 }}
                onClick={() => go(m.path, m.label)}
                className={`group relative overflow-hidden p-4 min-h-[110px] rounded-2xl text-left shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all ${t.ring} ${isLeaving ? "z-10" : ""}`}
                style={{ background: t.background }}
              >
                {/* ECG pulsante de fundo — padronizado em todas as caixas */}
                <svg
                  className={`absolute inset-x-0 bottom-0 w-full h-14 opacity-[0.18] pointer-events-none ${t.ecgColor}`}
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M0 35 L40 35 L48 35 L56 18 L64 52 L72 35 L110 35 L118 35 L126 12 L134 58 L142 35 L200 35"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: 1, opacity: [0.2, 1, 0.4] }}
                    transition={{
                      duration: 2.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </svg>
                {/* glow sutil */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                <div className="relative">
                  <motion.div
                    animate={isLeaving ? { scale: [1, 1.2, 1.1], rotate: [0, -5, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.28 }}
                    className={`flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${t.iconBg}`}
                  >
                    <m.icon size={20} strokeWidth={2.3} className={t.iconColor} />
                  </motion.div>
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      animate={isLeaving ? { y: [0, -2, 0] } : { y: 0 }}
                      transition={{ duration: 0.28 }}
                      className={`font-heading font-bold text-[14.5px] leading-tight tracking-tight ${t.titleColor}`}
                    >
                      {m.label}
                    </motion.span>
                    {isDuty && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                      </span>
                    )}
                  </div>
                  <div className={`text-[12px] mt-1 leading-snug font-medium ${t.subColor}`}>
                    {m.sub}
                  </div>
                </div>

                {/* Ripple de confirmação */}
                {isLeaving && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.4 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 rounded-2xl bg-white/30 pointer-events-none"
                    style={{ originX: 0.5, originY: 0.5 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

      </section>

      {/* ── CONTINUE DE ONDE PAROU ─────────────────────── */}
      <section className="mt-8 px-4">
        <div className="mb-2">
          <h3 className="font-heading font-bold text-[15px] tracking-tight text-foreground">
            Continue de onde parou
          </h3>
        </div>
        <ContinueWhereLeftOff />
      </section>

      {/* Disclaimer global é renderizado pelo AppLayout */}

      <WelcomeScreen userName={fullName} onComplete={() => {}} />
    </div>
  );
}
