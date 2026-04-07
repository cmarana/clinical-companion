import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Shield, Zap, Brain, Clock, BookOpen,
  ChevronRight, Star, ArrowRight, Sparkles, Heart,
  Activity, Pill, Calculator, FileText, Siren,
  Sun, Moon, Eclipse, Check, WifiOff, Mic, Bot,
  Users, Lock, RefreshCw, Download, Search, Smartphone,
  ChevronDown, HelpCircle, ClipboardList, Baby, Beaker,
  Scissors, Eye, HeartPulse, Timer, Bookmark, Globe,
  ScrollText, Layers, ListChecks, GraduationCap, FlaskConical
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { hapticLight } from "@/lib/haptics";
import pulsoLogoLight from "@/assets/pulso-logo-light.png";

import pulsoLogoDark from "@/assets/pulso-logo-dark.png";
import { useRef, useState, useEffect } from "react";

/* ── Animation variants ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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

const howItWorks = [
  { step: "01", icon: Download, title: "Crie sua conta", desc: "Cadastro em 30 segundos. Sem cartão de crédito para começar." },
  { step: "02", icon: Search, title: "Busque o que precisa", desc: "Pesquise qualquer protocolo, medicamento ou calculadora instantaneamente." },
  { step: "03", icon: Smartphone, title: "Use no plantão", desc: "Acesse offline, salve favoritos e tome decisões com confiança." },
];

const allModules = [
  { icon: Siren, title: "Modo Emergência", desc: "Algoritmos de PCR, Sepse, IAM, AVC com fluxogramas interativos", color: "text-red-500 bg-red-500/10" },
  { icon: Bot, title: "IA Clínica", desc: "Diagnóstico diferencial, conduta e raciocínio clínico por IA", color: "text-blue-500 bg-blue-500/10" },
  { icon: Pill, title: "2.000+ Medicamentos", desc: "Doses, diluições, interações, ajuste renal/hepático", color: "text-emerald-500 bg-emerald-500/10" },
  { icon: BookOpen, title: "1.004 Protocolos", desc: "26 categorias, baseados em evidência com referências", color: "text-cyan-500 bg-cyan-500/10" },
  { icon: Calculator, title: "53 Calculadoras", desc: "Glasgow, SOFA, Wells, HEART, MELD, NEWS, APACHE II", color: "text-indigo-500 bg-indigo-500/10" },
  { icon: FileText, title: "Prescrições Prontas", desc: "Modelos por diagnóstico + checagem de interações por IA", color: "text-amber-500 bg-amber-500/10" },
  { icon: FlaskConical, title: "Diluições IV", desc: "Matriz de compatibilidade e diluições em Y", color: "text-violet-500 bg-violet-500/10" },
  { icon: Baby, title: "Doses Pediátricas", desc: "Cálculo automático por peso e idade", color: "text-pink-500 bg-pink-500/10" },
  { icon: Timer, title: "Timer de PCR (ACLS)", desc: "Ciclos de 2 min com alertas sonoros integrados", color: "text-red-400 bg-red-400/10" },
  { icon: ListChecks, title: "Checklists Médicos", desc: "IOT, ATLS, Sepse — procedimentos passo a passo", color: "text-teal-500 bg-teal-500/10" },
  { icon: ScrollText, title: "Evoluções Médicas", desc: "Templates SOAP, I-PASS, UTI, Pediatria, Psiquiatria", color: "text-orange-500 bg-orange-500/10" },
  { icon: Mic, title: "Evolução por Voz", desc: "Dite evoluções por voz e gere documentos clínicos", color: "text-fuchsia-500 bg-fuchsia-500/10" },
  { icon: Beaker, title: "Valores Laboratoriais", desc: "Referências para exames com alertas de valores críticos", color: "text-lime-500 bg-lime-500/10" },
  { icon: Stethoscope, title: "Diagnóstico por Sintoma", desc: "Guias de diagnóstico diferencial por queixa", color: "text-sky-500 bg-sky-500/10" },
  { icon: Search, title: "Busca CID-10", desc: "Pesquise códigos CID por nome ou número", color: "text-slate-500 bg-slate-500/10" },
  { icon: Layers, title: "Guia Antimicrobiano", desc: "Antibióticos por foco infeccioso e patógeno", color: "text-green-500 bg-green-500/10" },
  { icon: GraduationCap, title: "Flashcards & Quiz", desc: "Revisão espaçada e simulados para residência", color: "text-yellow-500 bg-yellow-500/10" },
  { icon: HeartPulse, title: "Sala Vermelha", desc: "Modo de atendimento de emergência imediata", color: "text-rose-500 bg-rose-500/10" },
  { icon: WifiOff, title: "100% Offline", desc: "Todo o conteúdo disponível sem internet", color: "text-purple-500 bg-purple-500/10" },
  { icon: Bookmark, title: "Favoritos & Notas", desc: "Salve protocolos e adicione anotações pessoais", color: "text-amber-400 bg-amber-400/10" },
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

const faqs = [
  {
    q: "O teste grátis é realmente sem compromisso?",
    a: "Sim. Você tem 7 dias de acesso completo sem precisar cadastrar cartão de crédito. Após o período, você decide se quer assinar.",
  },
  {
    q: "Funciona sem internet?",
    a: "Sim. Todo o conteúdo pode ser baixado para uso offline — ideal para plantões em locais sem sinal ou Wi-Fi instável.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim. Sem multa, sem burocracia. Cancele direto no app e seu acesso continua até o fim do período pago.",
  },
  {
    q: "O conteúdo é baseado em evidência?",
    a: "Sim. Todos os protocolos incluem referências bibliográficas e níveis de evidência. O conteúdo é revisado continuamente por especialistas.",
  },
  {
    q: "Funciona no computador também?",
    a: "Sim. O PULSO funciona em qualquer dispositivo com navegador — celular, tablet ou computador. Também pode ser instalado como app (PWA).",
  },
];

/* ── Floating orbs ───────────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
    </div>
  );
}

/* ── FAQ Accordion Item ──────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/30 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-heading font-semibold text-sm pr-4">{q}</span>
        <ChevronDown
          size={16}
          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-xs text-muted-foreground leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Smooth scroll helper ────────────────────────────────────── */
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Landing() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Show sticky CTA after scrolling past hero
  const [showStickyCta, setShowStickyCta] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-heading font-medium text-muted-foreground">
            <button onClick={() => scrollTo("features")} className="hover:text-foreground transition-colors">Recursos</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Planos</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">FAQ</button>
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
              onClick={() => scrollTo("features")}
              className="w-full sm:w-auto h-14 px-8 text-base font-heading"
            >
              Ver recursos <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-2"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            <div className="flex items-center gap-3">
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
              <div className="text-left">
                <p className="text-xs font-semibold text-foreground">Usado por médicos e residentes</p>
                <p className="text-[10px] text-muted-foreground">em plantões por todo o Brasil</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-primary text-primary" />
              ))}
              <span className="text-[10px] text-muted-foreground ml-1">5.0 — avaliação dos usuários</span>
            </div>
          </motion.div>
        </motion.div>

        {/* App Feature Showcase — replaces iPhone mockup */}
        <motion.div
          className="max-w-5xl mx-auto mt-16 relative z-10 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full scale-50 pointer-events-none" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 relative">
            {[
              { icon: Siren, label: "Modo Emergência", detail: "PCR, Sepse, IAM, AVC", accent: "from-red-500/20 to-red-500/5 text-red-500", ring: "ring-red-500/20" },
              { icon: Bot, label: "IA Clínica", detail: "Diagnóstico diferencial por IA", accent: "from-blue-500/20 to-blue-500/5 text-blue-500", ring: "ring-blue-500/20" },
              { icon: Pill, label: "2.000+ Fármacos", detail: "Doses, diluições, interações", accent: "from-emerald-500/20 to-emerald-500/5 text-emerald-500", ring: "ring-emerald-500/20" },
              { icon: BookOpen, label: "1.004 Protocolos", detail: "26 categorias, baseados em evidência", accent: "from-cyan-500/20 to-cyan-500/5 text-cyan-500", ring: "ring-cyan-500/20" },
              { icon: Calculator, label: "53 Calculadoras", detail: "Glasgow, SOFA, Wells, HEART…", accent: "from-indigo-500/20 to-indigo-500/5 text-indigo-500", ring: "ring-indigo-500/20" },
              { icon: FileText, label: "Prescrições Prontas", detail: "Modelos por diagnóstico + IA", accent: "from-amber-500/20 to-amber-500/5 text-amber-500", ring: "ring-amber-500/20" },
              { icon: WifiOff, label: "100% Offline", detail: "Funciona sem internet", accent: "from-violet-500/20 to-violet-500/5 text-violet-500", ring: "ring-violet-500/20" },
              { icon: Mic, label: "Voz & Evolução", detail: "Dite evoluções por voz", accent: "from-pink-500/20 to-pink-500/5 text-pink-500", ring: "ring-pink-500/20" },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.5 }}
                className={`relative group rounded-2xl bg-gradient-to-br ${f.accent} ring-1 ${f.ring} p-4 flex flex-col items-center text-center gap-2 hover:scale-[1.04] transition-transform cursor-default`}
              >
                <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur flex items-center justify-center shadow-sm">
                  <f.icon size={20} />
                </div>
                <span className="font-heading font-bold text-xs text-foreground leading-tight">{f.label}</span>
                <span className="text-[10px] text-muted-foreground leading-snug">{f.detail}</span>
              </motion.div>
            ))}
          </div>

          {/* Differentials banner */}
          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[
              { icon: Zap, text: "Decisões em <5s" },
              { icon: Shield, text: "Dados criptografados" },
              { icon: RefreshCw, text: "Atualizado 2024-25" },
              { icon: Users, text: "Feito por médicos" },
            ].map((d) => (
              <div key={d.text} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-muted/40 ring-1 ring-border/30">
                <d.icon size={14} className="text-primary shrink-0" />
                <span className="text-[10px] font-heading font-semibold text-foreground">{d.text}</span>
              </div>
            ))}
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

      {/* ═══ HOW IT WORKS ═════════════════════════════════════ */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Simples</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Comece em 3 passos
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={0}
                className="text-center relative"
              >
                {/* Connector line (desktop) */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-px bg-border/50" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-4 relative">
                  <item.icon size={24} className="text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-heading font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURES ═════════════════════════════════════════ */}
      <section id="features" className="py-20 px-4 relative bg-gradient-to-b from-muted/20 via-background to-background">
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
      <section className="py-20 px-4 relative">
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
      <section className="py-20 px-4 relative bg-gradient-to-b from-muted/20 via-background to-background">
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

      {/* ═══ PRICING ══════════════════════════════════════════ */}
      <section id="pricing" className="py-20 px-4 relative">
        <FloatingOrbs />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Planos</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Simples e transparente
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm leading-relaxed">
              Comece grátis. Faça upgrade quando quiser acesso completo.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {/* Free Plan */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="p-6 rounded-2xl bg-card ring-1 ring-border/40 flex flex-col"
            >
              <div className="mb-5">
                <h3 className="font-heading font-bold text-lg">Grátis</h3>
                <p className="text-muted-foreground text-xs mt-1">Para experimentar o essencial</p>
              </div>
              <div className="mb-6">
                <span className="font-heading font-extrabold text-4xl">R$0</span>
                <span className="text-muted-foreground text-xs ml-1">/sempre</span>
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {["15 protocolos", "15 medicamentos", "Calculadoras básicas", "Modo emergência limitado"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check size={14} className="text-muted-foreground/50 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
                {["IA Clínica", "Modo offline", "Prescrições prontas", "Flashcards e quiz"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground/40 line-through">
                    <span className="w-3.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                onClick={() => navigate("/auth")}
                className="w-full h-11 rounded-xl font-heading font-semibold"
              >
                Criar conta grátis
              </Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="p-6 rounded-2xl bg-card ring-2 ring-primary/40 shadow-xl shadow-primary/10 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-primary-foreground text-[9px] font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                  Mais popular
                </div>
              </div>
              <div className="mb-5">
                <h3 className="font-heading font-bold text-lg">Pro</h3>
                <p className="text-muted-foreground text-xs mt-1">Acesso completo para o plantão</p>
              </div>
              <div className="mb-1">
                <span className="font-heading font-extrabold text-4xl text-primary">R$9,90</span>
                <span className="text-muted-foreground text-xs ml-1">/mês</span>
              </div>
              <p className="text-[10px] text-muted-foreground mb-6">
                ou <span className="font-semibold text-foreground">R$89,90/ano</span>{" "}
                <span className="text-primary font-semibold">(24% off)</span>
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "1.000+ protocolos completos",
                  "2.000+ medicamentos",
                  "53 calculadoras médicas",
                  "IA Clínica ilimitada",
                  "Modo offline completo",
                  "Prescrições prontas",
                  "Flashcards e quiz",
                  "Timer PCR (ACLS)",
                  "Atualizações prioritárias",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => navigate("/auth")}
                className="w-full h-12 rounded-xl font-heading font-bold shadow-lg shadow-primary/20 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all" />
                <span className="relative flex items-center gap-2">
                  <Sparkles size={14} />
                  Começar 7 dias grátis
                </span>
              </Button>
              <p className="text-[9px] text-muted-foreground text-center mt-2">
                Teste grátis por 7 dias. Cancele quando quiser.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════ */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-muted/20 via-background to-background">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Dúvidas</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              Perguntas frequentes
            </h2>
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl ring-1 ring-border/30 px-5 sm:px-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
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

      {/* ═══ STICKY MOBILE CTA ════════════════════════════════ */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 px-4 py-3 safe-area-bottom"
          >
            <Button
              onClick={() => navigate("/auth")}
              className="w-full h-12 rounded-xl font-heading font-bold shadow-lg shadow-primary/20 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
              <span className="relative flex items-center gap-2 text-sm">
                <Sparkles size={14} />
                Começar 7 dias grátis
                <ChevronRight size={14} />
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
