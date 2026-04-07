import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Shield, Zap, Brain, Clock, BookOpen,
  ChevronRight, Star, ArrowRight, Sparkles, Heart,
  Activity, Pill, Calculator, FileText, Siren,
  Sun, Moon, Eclipse, Check, WifiOff, Mic, Bot,
  Users, Lock, RefreshCw
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { hapticLight } from "@/lib/haptics";
import pulsoLogoLight from "@/assets/pulso-logo-light.png";
import pulsoLogoDark from "@/assets/pulso-logo-dark.png";
import { useRef } from "react";

/* ── Animation variants ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Data ────────────────────────────────────────────────────── */
const features = [
  { icon: Zap, title: "Modo Emergência", desc: "Algoritmos de PCR, Sepse, IAM e AVC com fluxogramas interativos. Decisões em segundos.", accent: "bg-red-500/10 text-red-500" },
  { icon: Bot, title: "IA Clínica", desc: "Diagnóstico diferencial, conduta e raciocínio clínico assistido por inteligência artificial.", accent: "bg-blue-500/10 text-blue-500" },
  { icon: Pill, title: "2.000+ Medicamentos", desc: "Doses, diluições, interações, ajustes renais e hepáticos. Bulário completo no bolso.", accent: "bg-emerald-500/10 text-emerald-500" },
  { icon: BookOpen, title: "1.000+ Protocolos", desc: "Protocolos clínicos baseados em evidência com níveis de recomendação e referências.", accent: "bg-cyan-500/10 text-cyan-500" },
  { icon: Calculator, title: "53 Calculadoras", desc: "Glasgow, SOFA, Wells, HEART, MELD, NEWS e dezenas de scores integrados aos protocolos.", accent: "bg-indigo-500/10 text-indigo-500" },
  { icon: FileText, title: "Prescrições Prontas", desc: "Modelos por diagnóstico, prontos para copiar e adaptar. Checagem de interações por IA.", accent: "bg-amber-500/10 text-amber-500" },
];

const scenarios = [
  {
    time: "03:12",
    title: "Dor torácica na emergência",
    desc: "Paciente 58a, dor precordial, sudorese. Abra o protocolo de IAM, calcule TIMI, verifique interações e gere a prescrição — tudo em 30 segundos.",
    tags: ["Protocolo IAM", "TIMI Score", "Prescrição"],
  },
  {
    time: "14:45",
    title: "Criança com febre alta",
    desc: "Pediatria, 3 anos, 39.2°C. Consulte dose por kg, verifique diluição de dipirona IV e acesse o fluxograma de febre sem foco.",
    tags: ["Dose pediátrica", "Diluição IV", "Fluxograma"],
  },
  {
    time: "22:30",
    title: "Intubação orotraqueal",
    desc: "Sequência rápida com checklist interativo, doses de indução por peso e timer de apneia integrado.",
    tags: ["IOT", "Checklist", "Timer"],
  },
];

const testimonials = [
  { name: "Dra. Camila R.", role: "Plantonista — UPA, SP", text: "Me salvou várias vezes no noturno. Ter tudo na palma da mão faz toda diferença quando cada segundo conta.", stars: 5 },
  { name: "Dr. Felipe M.", role: "R2 Clínica Médica, RJ", text: "Uso diariamente para doses e interações. A IA Clínica é absurdamente útil para raciocínio diagnóstico.", stars: 5 },
  { name: "Dra. Juliana S.", role: "Emergencista, MG", text: "Interface limpa, rápida e funciona offline. É o app que faltava para quem vive de plantão.", stars: 5 },
];

const trustPoints = [
  { icon: Shield, text: "Pagamento seguro via Stripe" },
  { icon: Clock, text: "Cancele quando quiser" },
  { icon: Stethoscope, text: "Feito por médicos" },
  { icon: Lock, text: "Dados criptografados" },
  { icon: WifiOff, text: "Funciona 100% offline" },
  { icon: RefreshCw, text: "Atualizado continuamente" },
];

const stats = [
  { value: "2.000+", label: "Medicamentos", icon: Pill },
  { value: "1.000+", label: "Protocolos", icon: BookOpen },
  { value: "53", label: "Calculadoras", icon: Calculator },
  { value: "24/7", label: "Offline", icon: WifiOff },
];

/* ── Floating orbs ───────────────────────────────────────────── */
function FloatingOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const pulsoLogo = theme === "light" ? pulsoLogoLight : pulsoLogoDark;
  const themeIcon = theme === "oled" ? <Eclipse size={16} /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ═══ NAVBAR ═══════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={pulsoLogo} alt="PULSO" width={30} height={30} className="rounded-lg" />
            <span className="font-heading font-bold text-base">PULSO</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => { hapticLight(); toggleTheme(); }}
              className="h-8 w-8"
              aria-label="Alternar tema"
            >
              {themeIcon}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/auth")} className="text-xs font-heading hidden sm:flex">
              Entrar
            </Button>
            <Button size="sm" onClick={() => navigate("/auth")} className="font-heading font-bold gap-1 text-xs h-8 px-3 shadow-md shadow-primary/15">
              <Sparkles size={12} /> Começar grátis
            </Button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative pt-16 sm:pt-24 pb-20 px-4 overflow-hidden">
        <FloatingOrbs />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
              <Sparkles size={12} className="animate-pulse" />
              7 dias grátis — sem cartão de crédito
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mt-4"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Tome decisões clínicas{" "}
            <span className="text-primary relative inline-block">
              seguras
              <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-primary/25" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 7 Q50 0 100 5 Q150 0 200 7" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
            </span>{" "}
            em segundos
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            A plataforma mais completa para médicos plantonistas.{" "}
            Protocolos, IA clínica, calculadoras e 2.000+ fármacos —{" "}
            <span className="text-foreground font-medium">tudo offline, no seu bolso.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="w-full sm:w-auto h-14 px-10 text-base font-heading font-bold gap-2 shadow-xl shadow-primary/25 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all" />
              <span className="relative flex items-center gap-2">
                <Heart size={18} />
                Começar teste grátis
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto h-14 px-8 text-base font-heading"
            >
              Ver recursos <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            <div className="flex -space-x-2.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/10 ring-2 ring-background flex items-center justify-center"
                >
                  <Stethoscope size={12} className="text-primary" />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Médicos e residentes</span> já usam no plantão
            </p>
          </motion.div>
        </motion.div>

        {/* Animated ECG divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <svg viewBox="0 0 600 40" className="w-full h-8 text-primary/15" fill="none" strokeWidth="1.5" stroke="currentColor">
            <motion.path
              d="M0,20 L80,20 L120,20 L135,6 L150,34 L165,2 L180,38 L195,16 L210,24 L225,20 L300,20 L340,20 L355,6 L370,34 L385,2 L400,38 L415,16 L430,24 L445,20 L600,20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
            />
          </svg>
        </motion.div>
      </section>

      {/* ═══ STATS ════════════════════════════════════════════ */}
      <section className="py-12 px-4 border-y border-border/30 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={0}
                className="text-center py-4 rounded-2xl bg-card/50 ring-1 ring-border/30"
              >
                <s.icon size={18} className="text-primary mx-auto mb-2 opacity-60" />
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURES ═════════════════════════════════════════ */}
      <section id="features" className="py-20 px-4 relative">
        <FloatingOrbs />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Recursos</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Tudo que você precisa no plantão
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              Ferramentas práticas, baseadas em evidência, atualizadas continuamente por especialistas.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {features.map((f) => {
              const [bg, text] = f.accent.split(" ");
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  custom={0}
                  className="group relative p-5 rounded-2xl bg-card ring-1 ring-border/30 hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                    <f.icon size={20} className={text} />
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ SCENARIOS ════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 via-background to-background relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Na prática</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Cenários reais de plantão
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm leading-relaxed">
              Veja como o PULSO funciona quando cada segundo importa.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {scenarios.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={0}
                className="group flex gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-card ring-1 ring-border/30 hover:ring-primary/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Time badge */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-primary">{s.time}</span>
                  </div>
                  <div className="w-px h-full bg-border/50 mt-2 hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-heading font-semibold px-2.5 py-1 rounded-full bg-primary/8 text-primary ring-1 ring-primary/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═════════════════════════════════════ */}
      <section className="py-20 px-4 relative">
        <FloatingOrbs />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Depoimentos</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              O que dizem os médicos
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Usado por plantonistas em todo o Brasil
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={0}
                className="p-5 rounded-2xl bg-card ring-1 ring-border/30 hover:ring-primary/20 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-4 pt-3 border-t border-border/40">
                  <p className="font-heading font-bold text-xs">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TRUST BAR ════════════════════════════════════════ */}
      <section className="py-10 px-4 border-y border-border/30 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((t) => (
              <div key={t.text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <t.icon size={14} className="text-primary/60 shrink-0" />
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ════════════════════════════════════════ */}
      <section className="py-24 px-4 relative overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-lg mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 ring-1 ring-primary/20">
              <Activity size={28} className="text-primary" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Comece agora.{" "}
              <span className="text-primary">Grátis.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto leading-relaxed">
              Acesso completo por 7 dias. Sem cartão de crédito. Sem compromisso.
              Decida depois se o PULSO faz diferença no seu plantão.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="mt-8 h-14 px-12 text-base font-heading font-bold gap-2 shadow-xl shadow-primary/25 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all" />
              <span className="relative flex items-center gap-2">
                <Sparkles size={18} />
                Criar conta grátis
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Já tem conta?{" "}
              <button onClick={() => navigate("/auth")} className="text-primary hover:underline font-semibold">
                Entrar
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOOTER ═══════════════════════════════════════════ */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <img src={pulsoLogo} alt="PULSO" width={20} height={20} className="rounded-md" />
            <span className="font-heading font-semibold text-foreground">PULSO</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <button onClick={() => navigate("/terms")} className="hover:text-foreground transition-colors">Termos de Uso</button>
            <button onClick={() => navigate("/privacy")} className="hover:text-foreground transition-colors">Privacidade</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
