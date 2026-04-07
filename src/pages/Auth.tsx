import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye, EyeOff, Zap, Pill, Bot, Calculator, Shield, Clock,
  ChevronRight, ArrowLeft, Activity, Heart,
  Moon, Sun, Eclipse, Sparkles, Star, Check,
  Stethoscope, Users
} from "lucide-react";
import pulsoLogoLight from "@/assets/pulso-logo-light.png";
import pulsoLogoDark from "@/assets/pulso-logo-dark.png";
import { useTheme } from "@/contexts/ThemeContext";
import { Separator } from "@/components/ui/separator";
import { hapticLight } from "@/lib/haptics";

/* ── Top features for the showcase ─────────────────────────── */
const topFeatures = [
  { icon: Zap, label: "Emergência", desc: "PCR, Sepse, IAM, AVC — algoritmos em segundos", accent: "text-red-500 bg-red-500/10" },
  { icon: Bot, label: "IA Clínica", desc: "Diagnóstico diferencial e conduta com IA", accent: "text-blue-500 bg-blue-500/10" },
  { icon: Pill, label: "2.000+ Fármacos", desc: "Doses, diluição, interações e ajustes", accent: "text-emerald-500 bg-emerald-500/10" },
  { icon: Shield, label: "1.000+ Protocolos", desc: "Fluxogramas interativos baseados em evidência", accent: "text-cyan-500 bg-cyan-500/10" },
  { icon: Calculator, label: "53 Calculadoras", desc: "Glasgow, SOFA, Wells, HEART e mais", accent: "text-indigo-500 bg-indigo-500/10" },
  { icon: Clock, label: "Modo Plantão", desc: "Timer PCR, passagem de leito, modo offline", accent: "text-amber-500 bg-amber-500/10" },
];

const trustPoints = [
  "Baseado em evidência clínica",
  "Atualizado por especialistas",
  "Funciona 100% offline",
  "Dados protegidos e criptografados",
];

/* ── Animated number counter ─────────────────────────────────── */
function AnimatedCounter({ target, suffix, delay = 0 }: { target: number; suffix: string; delay?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);
  const formatted = target >= 1000 ? count.toLocaleString("pt-BR") : count.toString();
  return <>{formatted}{suffix}</>;
}

/* ── Floating orbs background ────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" style={{ animationDelay: "1s", animationDuration: "4s" }} />
      <div className="absolute -bottom-32 left-1/3 w-[350px] h-[350px] bg-cyan-500/4 rounded-full blur-[100px]" style={{ animationDelay: "2s", animationDuration: "5s" }} />
    </div>
  );
}

/* ── Entry animation helpers ─────────────────────────────────── */
const fadeUp = (delay: number, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [resetMode, setResetMode] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const pulsoLogo = theme === "light" ? pulsoLogoLight : pulsoLogoDark;
  const themeIcon = theme === "oled" ? <Eclipse size={18} /> : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) navigate("/", { replace: true });
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/", { replace: true });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (showAuthForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showAuthForm]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (resetMode) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        toast({ title: "E-mail enviado", description: "Verifique sua caixa de entrada para redefinir a senha." });
        setResetMode(false);
      } else if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: fullName.trim() },
          },
        });
        if (error) throw error;
        toast({ title: "Conta criada!", description: "Verifique seu e-mail para confirmar o cadastro." });
      }
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "apple") => {
    setSocialLoading(provider);
    try {
      const result = await lovable.auth.signInWithOAuth(provider, {
        redirect_uri: window.location.origin,
      });
      if (result.error) throw result.error;
    } catch (err: any) {
      toast({ title: "Erro", description: err.message || "Falha ao conectar", variant: "destructive" });
    } finally {
      setSocialLoading(null);
    }
  };

  /* ── Auth form component ───────────────────────────────────── */
  const AuthForm = () => (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="bg-card/80 backdrop-blur-xl rounded-3xl ring-1 ring-border/40 shadow-2xl shadow-primary/5 p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowAuthForm(false)}
          className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <h3 className="font-heading font-bold text-base">
          {resetMode ? "Recuperar senha" : isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
        </h3>
        <div className="w-8" />
      </div>

      {!resetMode && (
        <p className="text-xs text-muted-foreground text-center -mt-1">
          {isLogin ? "Entre para acessar seus protocolos" : "7 dias grátis — sem cartão de crédito"}
        </p>
      )}

      {/* Social login */}
      {!resetMode && (
        <>
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-12 gap-2 rounded-xl font-medium"
              onClick={() => handleSocialLogin("google")}
              disabled={socialLoading !== null}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              {socialLoading === "google" ? "..." : "Google"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 gap-2 rounded-xl font-medium"
              onClick={() => handleSocialLogin("apple")}
              disabled={socialLoading !== null}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              {socialLoading === "apple" ? "..." : "Apple"}
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">ou</span>
            <Separator className="flex-1" />
          </div>
        </>
      )}

      {/* Email form */}
      <form onSubmit={handleAuth} className="space-y-3">
        {!resetMode && !isLogin && (
          <Input
            type="text"
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="h-12 rounded-xl bg-muted/50 border-border/50 focus:bg-background transition-colors"
          />
        )}
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 rounded-xl bg-muted/50 border-border/50 focus:bg-background transition-colors"
        />
        {!resetMode && (
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="h-12 rounded-xl bg-muted/50 border-border/50 focus:bg-background transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        )}
        <Button
          type="submit"
          className="w-full h-12 rounded-xl font-heading font-semibold text-sm shadow-lg shadow-primary/20"
          disabled={loading}
        >
          {loading ? "Aguarde..." : resetMode ? "Enviar link de recuperação" : isLogin ? "Entrar" : "Criar conta grátis"}
        </Button>
      </form>

      <div className="text-center space-y-2">
        {!resetMode && isLogin && (
          <button onClick={() => setResetMode(true)} className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Esqueceu a senha?
          </button>
        )}
        <p className="text-xs text-muted-foreground">
          {resetMode ? (
            <button onClick={() => setResetMode(false)} className="text-primary hover:underline font-medium">← Voltar ao login</button>
          ) : isLogin ? (
            <>Não tem conta?{" "}<button onClick={() => setIsLogin(false)} className="text-primary hover:underline font-semibold">Cadastre-se grátis</button></>
          ) : (
            <>Já tem conta?{" "}<button onClick={() => setIsLogin(true)} className="text-primary hover:underline font-semibold">Entrar</button></>
          )}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background overflow-y-auto lg:flex">
      {/* Theme toggle */}
      <button
        onClick={() => { hapticLight(); toggleTheme(); }}
        aria-label="Alternar tema"
        title={theme === "light" ? "Modo Escuro" : theme === "dark" ? "Plantão Noturno" : "Modo Claro"}
        className="fixed top-3 right-3 z-[95] rounded-2xl border border-border bg-card/95 p-2.5 text-muted-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-accent hover:text-foreground"
      >
        {themeIcon}
      </button>

      {/* ══════════════════════════════════════════════════════════
          DESKTOP — Left immersive panel
         ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[58%] relative overflow-hidden items-center justify-center bg-gradient-to-br from-primary/[0.04] via-background to-primary/[0.02]">
        <FloatingOrbs />

        <div className="relative z-10 max-w-xl px-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary ring-1 ring-primary/20">
                <Sparkles size={12} />
                7 dias grátis — comece agora
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-[2.75rem] xl:text-5xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
              Tome decisões{" "}
              <span className="text-primary relative">
                clínicas seguras
                <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 5 Q150 0 200 7" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>{" "}
              em segundos
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              A plataforma mais completa para médicos plantonistas. Protocolos, IA clínica, calculadoras e fármacos — tudo offline, direto no seu bolso.
            </p>

            {/* Animated ECG */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mb-10"
            >
              <svg viewBox="0 0 400 50" className="w-full h-10 text-primary/20" fill="none" strokeWidth="2" stroke="currentColor">
                <motion.path
                  d="M0,25 L60,25 L80,25 L90,8 L100,42 L110,3 L120,47 L130,20 L140,30 L150,25 L200,25 L220,25 L230,8 L240,42 L250,3 L260,47 L270,20 L280,30 L290,25 L400,25"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 1.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                />
              </svg>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.8)}
              className="grid grid-cols-3 gap-3 mb-10"
            >
              {[
                { target: 2000, suffix: "+", label: "Medicamentos" },
                { target: 1000, suffix: "+", label: "Protocolos" },
                { target: 53, suffix: "", label: "Calculadoras" },
              ].map((s, i) => (
                <div key={s.label} className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 ring-1 ring-border/30 text-center">
                  <div className="font-heading font-bold text-2xl xl:text-3xl text-primary">
                    <AnimatedCounter target={s.target} suffix={s.suffix} delay={1200 + i * 200} />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Trust points */}
            <motion.div {...fadeUp(1.2)} className="flex flex-wrap gap-x-5 gap-y-2">
              {trustPoints.map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Check size={13} className="text-emerald-500 shrink-0" />
                  {t}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          RIGHT SIDE / MOBILE
         ══════════════════════════════════════════════════════════ */}
      <div className="lg:w-[45%] xl:w-[42%] lg:overflow-y-auto lg:h-screen">
        <FloatingOrbs />

        <div className="relative z-10">
          {/* ── Mobile hero ────────────────────────────────────── */}
          <div className="pt-16 pb-4 text-center lg:pt-20">
            <motion.div {...fadeUp(0)}>
              <img
                src={pulsoLogo}
                alt="PULSO"
                width={80}
                height={80}
                className="mx-auto rounded-[22px] shadow-2xl shadow-primary/25 ring-1 ring-border/20"
              />
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="mt-5">
              <h1 className="font-heading text-3xl font-extrabold tracking-tight lg:text-2xl">
                PULSO
              </h1>
              <p className="text-sm text-muted-foreground mt-1 font-medium tracking-wide">
                Emergência Médica
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="mt-5 px-6 lg:mt-4">
              <p className="text-lg font-heading font-bold text-foreground leading-snug lg:text-base">
                Decida em segundos no plantão
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs mx-auto lg:text-xs">
                Protocolos, IA clínica e calculadoras.{" "}
                <span className="text-primary font-semibold">Direto ao ponto.</span>
              </p>
            </motion.div>

            {/* Mobile stats */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex justify-center gap-6 mt-6 px-6 lg:hidden"
            >
              {[
                { target: 2000, suffix: "+", label: "Medicamentos" },
                { target: 1000, suffix: "+", label: "Protocolos" },
                { target: 53, suffix: "", label: "Calculadoras" },
              ].map((s, i) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading font-bold text-xl text-primary">
                    <AnimatedCounter target={s.target} suffix={s.suffix} delay={800 + i * 200} />
                  </div>
                  <div className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Features — mobile only ─────────────────────────── */}
          <motion.div
            {...fadeUp(0.6, 30)}
            className="px-4 pt-4 pb-2 max-w-md mx-auto lg:hidden"
          >
            <h2 className="text-[10px] font-heading font-bold text-muted-foreground uppercase tracking-[0.2em] text-center mb-3">
              Tudo para o seu plantão
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {topFeatures.map((f) => {
                const accentParts = f.accent.split(" ");
                return (
                  <div
                    key={f.label}
                    className="flex items-start gap-2.5 p-3 rounded-2xl bg-card ring-1 ring-border/30 hover:ring-border/60 transition-all"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${accentParts[1]}`}>
                      <f.icon size={16} className={accentParts[0]} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading font-semibold text-[11px] leading-tight block">{f.label}</span>
                      <span className="text-[9px] text-muted-foreground leading-tight block mt-0.5">{f.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── CTA / Auth Form ────────────────────────────────── */}
          <div className="px-4 py-6 max-w-md mx-auto space-y-3 lg:py-8 lg:px-8">
            <AnimatePresence mode="wait">
              {!showAuthForm ? (
                <motion.div
                  key="cta"
                  {...fadeUp(0.8)}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  <Button
                    onClick={() => { setIsLogin(false); setShowAuthForm(true); }}
                    className="w-full h-14 rounded-2xl text-sm font-heading font-bold gap-2 shadow-xl shadow-primary/25 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all" />
                    <span className="relative flex items-center gap-2">
                      <Sparkles size={16} />
                      Começar 7 dias grátis
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>

                  <Button
                    onClick={() => { setIsLogin(true); setShowAuthForm(true); }}
                    variant="outline"
                    className="w-full h-12 rounded-2xl text-sm font-heading font-medium"
                  >
                    Já tenho conta — Entrar
                  </Button>

                  {/* Social proof */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-primary/10 ring-2 ring-background flex items-center justify-center"
                        >
                          <Stethoscope size={11} className="text-primary" />
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      <span className="font-semibold text-foreground">Médicos e residentes</span> já usam diariamente
                    </p>
                  </div>
                </motion.div>
              ) : (
                <AuthForm key="form" />
              )}
            </AnimatePresence>
          </div>

          {/* ── Desktop features (below form) ──────────────────── */}
          <motion.div
            {...fadeUp(1, 30)}
            className="hidden lg:block px-8 pb-8 max-w-md mx-auto"
          >
            <div className="grid grid-cols-2 gap-2">
              {topFeatures.slice(0, 4).map((f) => {
                const accentParts = f.accent.split(" ");
                return (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-muted/40 ring-1 ring-border/20"
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${accentParts[1]}`}>
                      <f.icon size={14} className={accentParts[0]} />
                    </div>
                    <span className="font-heading font-semibold text-[10px] text-muted-foreground">{f.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Footer */}
          <div className="text-center pb-8 px-4 space-y-2">
            <p className="text-[9px] text-muted-foreground/60">
              PULSO · Emergência Médica · Feito para quem salva vidas
            </p>
            <p className="text-[9px] text-muted-foreground/50 max-w-xs mx-auto leading-relaxed">
              Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
