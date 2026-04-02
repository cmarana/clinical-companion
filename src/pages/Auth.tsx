import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye, EyeOff, Zap, Pill, ClipboardList, Calculator, Shield, Clock,
  Bot, ChevronRight, ChevronDown, ArrowLeft, Activity, Mic, WifiOff,
  Share2, Trophy, GitBranch, Brain, Newspaper, Stethoscope
} from "lucide-react";
import pulsoLogo from "@/assets/pulso-logo.png";
import { Separator } from "@/components/ui/separator";

const showcaseFeatures = [
  { icon: Zap, label: "Emergência", desc: "PCR, Sepse, IAM, AVC", color: "from-red-500/20 to-red-600/10 text-red-500" },
  { icon: Bot, label: "IA Clínica", desc: "Diagnóstico e conduta por IA", color: "from-blue-500/20 to-indigo-600/10 text-blue-500" },
  { icon: Mic, label: "Comando por Voz", desc: "Busca e IA mãos-livres", color: "from-violet-500/20 to-purple-600/10 text-violet-500" },
  { icon: Pill, label: "2.000+ Fármacos", desc: "Doses, diluição e ajustes", color: "from-emerald-500/20 to-emerald-600/10 text-emerald-500" },
  { icon: ClipboardList, label: "Prescrições", desc: "Modelos prontos para uso", color: "from-amber-500/20 to-amber-600/10 text-amber-500" },
  { icon: Shield, label: "282 Protocolos", desc: "Fluxogramas interativos", color: "from-cyan-500/20 to-cyan-600/10 text-cyan-500" },
  { icon: Calculator, label: "53 Calculadoras", desc: "Embutidas nos protocolos", color: "from-indigo-500/20 to-indigo-600/10 text-indigo-500" },
  { icon: Clock, label: "Modo Plantão", desc: "Timer, leitos e passagem", color: "from-orange-500/20 to-orange-600/10 text-orange-500" },
  { icon: Activity, label: "Timer PCR", desc: "Cronômetro ACLS integrado", color: "from-pink-500/20 to-pink-600/10 text-pink-500" },
  { icon: GitBranch, label: "Árvores de Decisão", desc: "Fluxogramas clicáveis", color: "from-teal-500/20 to-teal-600/10 text-teal-500" },
  { icon: Share2, label: "Compartilhamento", desc: "QR Code e link direto", color: "from-sky-500/20 to-sky-600/10 text-sky-500" },
  { icon: WifiOff, label: "Modo Offline", desc: "Conteúdo salvo sem internet", color: "from-slate-500/20 to-slate-600/10 text-slate-500" },
  { icon: Brain, label: "Flashcards", desc: "Revisão espaçada e quiz", color: "from-fuchsia-500/20 to-fuchsia-600/10 text-fuchsia-500" },
  { icon: Trophy, label: "Conquistas", desc: "Badges, streaks e progresso", color: "from-yellow-500/20 to-yellow-600/10 text-yellow-500" },
  { icon: Newspaper, label: "Atualizações", desc: "Changelog e revisões", color: "from-lime-500/20 to-lime-600/10 text-lime-500" },
  { icon: Stethoscope, label: "Diagnóstico", desc: "Por sintoma e especialidade", color: "from-rose-500/20 to-rose-600/10 text-rose-500" },
];

const stats = [
  { target: 2000, suffix: "+", label: "Medicamentos" },
  { target: 282, suffix: "", label: "Protocolos" },
  { target: 53, suffix: "", label: "Calculadoras" },
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

/* ── Intro phase timings (seconds) ───────────────────────────── */
const PHASE = {
  logo: 0,          // logo appears immediately
  name: 0.6,        // PULSO + Emergência Médica
  tagline: 1.4,     // Decida em segundos...
  stats: 2.2,       // numbers
  features: 3.0,    // grid
  cta: 3.8,         // buttons
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
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
          options: { emailRedirectTo: window.location.origin },
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

  /* ── Shared animation helper ───────────────────────────────── */
  const fadeUp = (delay: number, y = 20) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });

  return (
    <div className="min-h-screen bg-background overflow-y-auto lg:flex">
      {/* ── Desktop Hero Panel ─────────────────────────────── */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-lg px-12 py-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={pulsoLogo} alt="PULSO" width={72} height={72} className="rounded-2xl shadow-xl shadow-primary/20 mb-8" />
            <h2 className="font-display text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              A referência clínica<br />
              <span className="text-primary">do seu plantão</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              Protocolos baseados em evidência, calculadoras e IA clínica — tudo no seu bolso, a um toque de distância.
            </p>
          </motion.div>

          {/* Animated ECG line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-8"
          >
            <svg viewBox="0 0 400 60" className="w-full h-12 text-primary/30" fill="none" strokeWidth="2" stroke="currentColor">
              <motion.path
                d="M0,30 L60,30 L80,30 L90,10 L100,50 L110,5 L120,55 L130,25 L140,35 L150,30 L200,30 L220,30 L230,10 L240,50 L250,5 L260,55 L270,25 L280,35 L290,30 L400,30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, delay: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
              />
            </svg>
          </motion.div>

          {/* Desktop stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 ring-1 ring-border/50 text-center">
                <div className="font-heading font-bold text-2xl text-primary">
                  <AnimatedCounter target={s.target} suffix={s.suffix} delay={1800 + i * 200} />
                </div>
                <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Right side / Mobile full-screen ─────────────────── */}
      <div className="lg:w-1/2 xl:w-[45%] lg:overflow-y-auto lg:h-screen">
      {/* ── Background ─────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute top-20 right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute bottom-40 left-5 w-40 h-40 bg-cyan-500/8 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10">
        {/* ── PHASE 1: Logo ─────────────────────────────────── */}
        <div className="pt-20 pb-2 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: PHASE.logo, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <motion.img
              src={pulsoLogo}
              alt="PULSO"
              width={96}
              height={96}
              className="mx-auto rounded-3xl shadow-2xl shadow-primary/30"
              animate={{
                boxShadow: [
                  "0 0 0px hsl(var(--primary) / 0.2)",
                  "0 0 40px hsl(var(--primary) / 0.35)",
                  "0 0 0px hsl(var(--primary) / 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          {/* ── PHASE 2: Name + Subtitle ──────────────────── */}
          <motion.div {...fadeUp(PHASE.name)} className="mt-5">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight">
              PULSO
            </h1>
            <motion.p
              {...fadeUp(PHASE.name + 0.3)}
              className="text-sm text-muted-foreground mt-1.5 font-medium tracking-wide"
            >
              Emergência Médica
            </motion.p>
          </motion.div>

          {/* ── PHASE 3: Tagline ──────────────────────────── */}
          <motion.div {...fadeUp(PHASE.tagline)} className="mt-6 px-6">
            <p className="text-xl font-heading font-semibold text-foreground leading-snug">
              Decida em segundos no plantão
            </p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: PHASE.tagline + 0.3, duration: 0.5 }}
              className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs mx-auto"
            >
              Protocolos médicos rápidos para emergência.{" "}
              <span className="text-primary font-semibold">Direto ao ponto. Sem margem para erro.</span>
            </motion.p>
          </motion.div>

          {/* ── PHASE 4: Stats ────────────────────────────── */}
          <motion.div
            {...fadeUp(PHASE.stats)}
            className="flex justify-center gap-8 mt-8 px-6"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-bold text-2xl text-primary">
                  <AnimatedCounter target={s.target} suffix={s.suffix} delay={(PHASE.stats + 0.2) * 1000 + i * 200} />
                </div>
                <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── PHASE 5: Features ───────────────────────────── */}
        <motion.div
          {...fadeUp(PHASE.features, 30)}
          className="px-4 pt-6 pb-2 max-w-md mx-auto"
        >
          <motion.h2
            {...fadeUp(PHASE.features)}
            className="text-[10px] font-heading font-bold text-muted-foreground uppercase tracking-[0.2em] text-center mb-4"
          >
            Tudo que você precisa no plantão
          </motion.h2>

          <div className="grid grid-cols-2 gap-2">
            {showcaseFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: PHASE.features + 0.1 + i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className={`flex items-center gap-2.5 p-3 rounded-2xl bg-gradient-to-br ${f.color.split(" ")[0]} ${f.color.split(" ")[1]} ring-1 ring-border/30 hover:ring-primary/20 hover:shadow-md active:scale-[0.97] transition-all duration-200`}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${f.color.split(" ")[0]} ${f.color.split(" ")[1]} flex items-center justify-center shrink-0`}>
                  <f.icon size={18} className={f.color.split(" ")[2]} />
                </div>
                <div className="min-w-0">
                  <span className="font-heading font-semibold text-[11px] leading-tight block truncate">{f.label}</span>
                  <span className="text-[9px] text-muted-foreground leading-tight block truncate">{f.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── PHASE 6: CTA ────────────────────────────────── */}
        <div className="px-4 py-6 max-w-md mx-auto space-y-3">
          <AnimatePresence mode="wait">
            {!showAuthForm ? (
              <motion.div
                key="cta"
                {...fadeUp(PHASE.cta)}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <Button
                  onClick={() => { setIsLogin(false); setShowAuthForm(true); }}
                  className="w-full h-13 rounded-2xl text-sm font-heading font-semibold gap-2 shadow-lg shadow-primary/25"
                >
                  Começar 7 dias grátis
                  <ChevronRight size={16} />
                </Button>

                <Button
                  onClick={() => { setIsLogin(true); setShowAuthForm(true); }}
                  variant="outline"
                  className="w-full h-11 rounded-2xl text-sm font-heading font-medium gap-2"
                >
                  Já tenho conta — Entrar
                </Button>

                <Separator className="my-1" />

                <button
                  onClick={() => navigate("/")}
                  className="w-full flex flex-col items-center gap-0.5 py-2.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-xs font-heading font-medium flex items-center gap-1">
                    Continuar grátis sem conta
                    <ChevronDown size={14} />
                  </span>
                  <span className="text-[10px] text-muted-foreground/70">
                    10 protocolos · 10 medicamentos · calculadoras básicas
                  </span>
                </button>
              </motion.div>
            ) : (
              /* ── AUTH FORM ──────────────────────────────── */
              <motion.div
                key="form"
                ref={formRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-card rounded-3xl ring-1 ring-border/50 shadow-2xl p-5 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowAuthForm(false)}
                    className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground transition-colors"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <h3 className="font-heading font-bold text-sm">
                    {resetMode ? "Recuperar senha" : isLogin ? "Entrar" : "Criar conta"}
                  </h3>
                  <div className="w-8" />
                </div>

                {/* Social login */}
                {!resetMode && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 gap-2 rounded-xl"
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
                        className="h-11 gap-2 rounded-xl"
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
                      <span className="text-[10px] text-muted-foreground">ou com e-mail</span>
                      <Separator className="flex-1" />
                    </div>
                  </>
                )}

                {/* Email form */}
                <form onSubmit={handleAuth} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 rounded-xl"
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
                        className="h-11 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  )}
                  <Button type="submit" className="w-full h-11 rounded-xl font-heading font-semibold" disabled={loading}>
                    {loading ? "Aguarde..." : resetMode ? "Enviar link" : isLogin ? "Entrar" : "Cadastrar"}
                  </Button>
                </form>

                <div className="text-center space-y-1.5">
                  {!resetMode && isLogin && (
                    <button onClick={() => setResetMode(true)} className="text-[10px] text-muted-foreground hover:text-primary transition-colors">
                      Esqueceu a senha?
                    </button>
                  )}
                  <p className="text-[10px] text-muted-foreground">
                    {resetMode ? (
                      <button onClick={() => setResetMode(false)} className="text-primary hover:underline">Voltar ao login</button>
                    ) : isLogin ? (
                      <>Não tem conta?{" "}<button onClick={() => setIsLogin(false)} className="text-primary hover:underline font-semibold">Cadastre-se grátis</button></>
                    ) : (
                      <>Já tem conta?{" "}<button onClick={() => setIsLogin(true)} className="text-primary hover:underline font-semibold">Entrar</button></>
                    )}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.div
          {...fadeUp(PHASE.cta + 0.3)}
          className="text-center pb-10 px-4 space-y-3"
        >
          <p className="text-[9px] text-muted-foreground/60">
            PULSO · Emergência Médica · Feito para quem salva vidas
          </p>
          <p className="text-[9px] text-muted-foreground/50 max-w-xs mx-auto leading-relaxed">
            Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico profissional.
          </p>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
