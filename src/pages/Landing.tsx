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
  ScrollText, Layers, ListChecks, GraduationCap, FlaskConical, LogIn,
  MessageSquare, ScanLine, X, ArrowRightLeft, ShieldCheck, GitBranch, Building2, BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { hapticLight } from "@/lib/haptics";
import { PulsoLogo } from "@/components/PulsoLogo";
import { useState, useEffect } from "react";
import { DATASET_COUNTS, QUIZ_TOTAL, fmt } from "@/data/datasetCounts";
import { LANDING_MODULES, APP_MODULES_COUNT } from "@/config/appModules";

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
  { icon: Zap, title: "Modo Emergência", desc: "Algoritmos de PCR, Sepse, IAM e AVC com fluxogramas interativos. Decisões em segundos.", accent: "bg-destructive/10 text-destructive" },
  { icon: Bot, title: "IA Clínica multimodal", desc: "5 modos: Chat, Caso estruturado, Análise de Exames (imagem), Plantão e Texto narrativo — com Gemini 2.5.", accent: "bg-primary/10 text-primary" },
  { icon: Pill, title: "2.000+ Medicamentos", desc: "Doses, diluições, interações, ajustes renais e hepáticos. Bulário completo no bolso.", accent: "bg-primary/10 text-primary" },
  { icon: BookOpen, title: "1.600+ Protocolos", desc: "Protocolos clínicos baseados em evidência com níveis de recomendação e referências.", accent: "bg-primary/10 text-primary" },
  { icon: Calculator, title: "53 Calculadoras", desc: "Glasgow, SOFA, Wells, HEART, MELD, NEWS e dezenas de scores integrados aos protocolos.", accent: "bg-primary/10 text-primary" },
  { icon: FileText, title: "Prescrições Prontas", desc: "Modelos por diagnóstico, prontos para copiar e adaptar. Checagem de interações por IA.", accent: "bg-destructive/10 text-destructive" },
];

/**
 * 5 modalidades da IA Clínica multimodal — espelham as abas reais
 * de /clinical-ai. Cada CTA abre direto no modo correspondente
 * via deep-link `?tab=`.
 */
const aiModes = [
  {
    id: "chat",
    icon: MessageSquare,
    title: "Chat",
    tagline: "Conversa livre com a IA",
    desc: "Tire dúvidas clínicas, peça diagnósticos diferenciais e raciocínio passo-a-passo. Suporta voz.",
    cta: "Abrir Chat",
    accent: "from-primary/15 to-primary/5 text-primary ring-primary/20",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    id: "structured",
    icon: ClipboardList,
    title: "Caso estruturado",
    tagline: "Anamnese guiada",
    desc: "Preencha queixa, antecedentes, exame físico e exames. A IA devolve hipóteses, conduta e prescrição.",
    cta: "Montar caso",
    accent: "from-primary/15 to-primary/5 text-primary ring-primary/20",
    iconBg: "bg-primary/15 text-primary",
  },
  {
    id: "image",
    icon: ScanLine,
    title: "Exames (imagem)",
    tagline: "Análise multimodal",
    desc: "Envie RX, TC, RM, US ou ECG. A IA descreve achados, sugere hipóteses e gera resumo + alertas críticos.",
    cta: "Analisar exame",
    accent: "from-primary/15 to-primary/5 text-primary ring-primary/25",
    iconBg: "bg-primary/15 text-primary",
    badge: "Novo",
  },
  {
    id: "plantao",
    icon: Zap,
    title: "Plantão",
    tagline: "Resposta ultrarrápida",
    desc: "Pergunta direta, resposta direta. Otimizado para o ritmo do pronto-socorro — sem rodeios, beira do leito.",
    cta: "Modo Plantão",
    accent: "from-destructive/15 to-destructive/5 text-destructive ring-destructive/20",
    iconBg: "bg-destructive/15 text-destructive",
  },
  {
    id: "narrative",
    icon: FileText,
    title: "Texto narrativo",
    tagline: "Cole evolução / discussão",
    desc: "Cole prontuário, evolução ou texto livre. A IA extrai dados, organiza e propõe próximos passos.",
    cta: "Analisar texto",
    accent: "from-destructive/15 to-destructive/5 text-destructive ring-destructive/20",
    iconBg: "bg-destructive/15 text-destructive",
  },
] as const;

const howItWorks = [
  { step: "01", icon: Download, title: "Crie sua conta", desc: "Cadastro rápido em 30 segundos. Comece a usar imediatamente." },
  { step: "02", icon: Search, title: "Busque o que precisa", desc: "Pesquise qualquer protocolo, medicamento ou calculadora instantaneamente." },
  { step: "03", icon: Smartphone, title: "Use no plantão", desc: "Acesse offline, salve favoritos e tome decisões com confiança." },
];

/**
 * Landing modules vêm da config compartilhada (src/config/appModules.ts)
 * para garantir paridade automática com a Home.
 */
const allModules = LANDING_MODULES.map((m) => ({
  icon: m.landingIcon,
  title: m.landingTitle,
  desc: m.landingDesc,
  color: m.landingColor,
  path: m.path,
}));

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
  { value: "1.600+", label: "Protocolos", icon: BookOpen },
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

/* ── Floating orbs ───────────────────────────────────────────────
 * NOTA DE PERFORMANCE: removido blur-[140px] em 3 elementos × 5 instâncias.
 * No iOS WebView (Capacitor), filter:blur em camadas grandes força
 * recomposição GPU a cada frame de scroll, causando jank severo.
 * Substituído por gradientes radiais estáticos (composição única).
 */
function FloatingOrbs() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(600px 400px at 10% 10%, hsl(var(--primary) / 0.05), transparent 60%), radial-gradient(500px 350px at 90% 40%, hsl(262 83% 58% / 0.04), transparent 60%), radial-gradient(400px 300px at 30% 90%, hsl(190 90% 50% / 0.04), transparent 60%)",
      }}
    />
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
  // Parallax (useScroll/useTransform) removido: causava recálculo a cada
  // frame de scroll no iOS WebView, gerando jank perceptível na Landing.


  // CTA flutuante removido a pedido do usuário (ficava cortado na lateral em iPhone).

  // Hide the inline HTML splash as soon as the Landing actually paints.
  useEffect(() => {
    const hide = (window as unknown as { __pulsoHideSplash?: () => void }).__pulsoHideSplash;
    if (typeof hide === "function") {
      // wait one frame so the first content has painted
      requestAnimationFrame(() => requestAnimationFrame(hide));
    }
  }, []);

  
  const themeIcon = theme === "oled" ? <Eclipse size={16} /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />;

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 96px)" }}
    >

      {/* ═══ NAVBAR ═══════════════════════════════════════════ */}
      <nav className="sticky top-safe-fb z-nav bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-xl border-b border-border/60 pt-safe-0-fb shadow-sm shadow-foreground/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <PulsoLogo size={30} priority />
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
      <section className="relative pt-16 sm:pt-24 pb-20 px-4 overflow-hidden">
        <FloatingOrbs />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary ring-1 ring-primary/20 mb-6">
              <Sparkles size={12} className="animate-pulse" />
              7 dias grátis para assinantes Pro
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
            Protocolos, IA clínica multimodal, calculadoras e 2.000+ fármacos —{" "}
            <span className="text-foreground font-medium">tudo offline, no seu bolso.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Button
              size="lg"
              onClick={() => navigate("/auth", { state: { mode: "signup" } })}
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
              onClick={() => navigate("/auth", { state: { mode: "login" } })}
              className="w-full sm:w-auto h-14 px-8 text-base font-heading font-semibold gap-2"
            >
              <LogIn size={16} />
              Entrar
            </Button>
          </motion.div>

          {/* Link secundário "Ver recursos" */}
          <motion.div
            className="mt-4 flex justify-center"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            <button
              onClick={() => scrollTo("features")}
              className="text-sm text-muted-foreground hover:text-foreground font-heading inline-flex items-center gap-1 transition-colors"
            >
              Ver recursos <ArrowRight size={14} />
            </button>
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
          {/* Glow estático: gradiente radial em vez de blur GPU pesado */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(60% 40% at 50% 50%, hsl(var(--primary) / 0.10), transparent 70%)" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 relative">
            {[
              { icon: Siren, label: "Modo Emergência", detail: "PCR, Sepse, IAM, AVC", accent: "from-destructive/20 to-destructive/5 text-destructive", ring: "ring-destructive/20" },
              { icon: Bot, label: "IA Clínica multimodal", detail: "Chat · Caso · Exames · Plantão · Texto", accent: "from-primary/20 to-primary/5 text-primary", ring: "ring-primary/20" },
              { icon: Pill, label: "2.000+ Fármacos", detail: "Doses, diluições, interações", accent: "from-primary/20 to-primary/5 text-primary", ring: "ring-primary/20" },
              { icon: BookOpen, label: "1.600+ Protocolos", detail: "26 categorias, baseados em evidência", accent: "from-primary/20 to-primary/5 text-primary", ring: "ring-primary/20" },
              { icon: Calculator, label: "53 Calculadoras", detail: "Glasgow, SOFA, Wells, HEART…", accent: "from-primary/20 to-primary/5 text-primary", ring: "ring-primary/20" },
              { icon: FileText, label: "Prescrições Prontas", detail: "Modelos por diagnóstico + IA", accent: "from-destructive/20 to-destructive/5 text-destructive", ring: "ring-destructive/20" },
              { icon: WifiOff, label: "100% Offline", detail: "Funciona sem internet", accent: "from-primary/20 to-primary/5 text-primary", ring: "ring-primary/20" },
              { icon: Mic, label: "Voz & Evolução", detail: "Dite evoluções por voz", accent: "from-destructive/20 to-destructive/5 text-destructive", ring: "ring-destructive/20" },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.5 }}
                className={`relative group rounded-2xl bg-gradient-to-br ${f.accent} ring-1 ${f.ring} p-4 flex flex-col items-center text-center gap-2 hover:scale-[1.04] transition-transform cursor-default`}
              >
                <div className="w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center shadow-sm">
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

      {/* ═══ IA CLÍNICA · 5 MODALIDADES ═══════════════════════ */}
      <section id="ai-modes" className="py-20 px-4 relative bg-gradient-to-b from-background via-primary/[0.03] to-background">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">
              <Bot size={12} /> IA Clínica multimodal
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              5 modos de raciocínio em uma só IA
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Escolha o modo certo para o momento — do chat livre à análise de imagem de exames.
              Tudo com Gemini 2.5 e contexto clínico do paciente.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {aiModes.map((m) => (
              <motion.div
                key={m.id}
                variants={fadeUp}
                custom={0}
                className={`group relative p-5 rounded-2xl bg-card ring-1 ${m.accent.split(" ").pop()} hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col`}
              >
                {"badge" in m && m.badge && (
                  <span className="absolute top-3 right-3 text-[9px] font-heading font-bold uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    {m.badge}
                  </span>
                )}
                <div className={`w-11 h-11 rounded-xl ${m.iconBg} flex items-center justify-center mb-4`}>
                  <m.icon size={20} />
                </div>
                <div className="mb-1">
                  <h3 className="font-heading font-bold text-base">{m.title}</h3>
                  <p className="text-[11px] font-heading font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                    {m.tagline}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {m.desc}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => { hapticLight(); navigate(`/clinical-ai?tab=${m.id}`); }}
                  className="w-full h-9 rounded-xl text-xs font-heading font-semibold group-hover:border-primary/40 group-hover:text-primary transition-colors"
                >
                  {m.cta}
                  <ArrowRight size={13} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-[11px] text-muted-foreground mt-8 max-w-md mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles size={11} className="inline mr-1 text-primary" />
            Todos os modos respeitam o disclaimer médico — a IA é assistente, nunca substitui julgamento clínico.
          </motion.p>
        </div>
      </section>

      {/* ═══ ALL MODULES ═════════════════════════════════════ */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em]">Completo</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              {APP_MODULES_COUNT} ferramentas em um só app
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              Tudo que um médico precisa no plantão, na enfermaria e no estudo — sem precisar de vários apps.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            {allModules.map((m) => {
              const [textColor, bgColor] = m.color.split(" ");
              return (
                <motion.button
                  key={m.title}
                  type="button"
                  onClick={() => { hapticLight(); navigate(m.path); }}
                  variants={fadeUp}
                  custom={0}
                  className="group p-4 rounded-2xl bg-card ring-1 ring-border/30 hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 text-center cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center mx-auto mb-3`}>
                    <m.icon size={18} className={textColor} />
                  </div>
                  <h3 className="font-heading font-bold text-xs mb-1">{m.title}</h3>
                  <p className="text-[10px] text-muted-foreground leading-snug">{m.desc}</p>
                </motion.button>
              );
            })}
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
                {["IA Clínica multimodal", "Modo offline", "Prescrições prontas", "Flashcards e quiz"].map((item) => (
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
                  "1.600+ protocolos completos",
                  "2.000+ medicamentos",
                  "53 calculadoras médicas",
                  "IA Clínica multimodal (Chat, Caso, Exames, Plantão, Texto)",
                  `${fmt(DATASET_COUNTS.flashcards)} flashcards · ${fmt(QUIZ_TOTAL)} questões`,
                  "Modo offline completo",
                  "Prescrições prontas",
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
              Teste o acesso completo por 7 dias grátis.
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
      <footer className="border-t border-border/30 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 pb-20 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <PulsoLogo size={28} />
                <span className="font-heading font-bold text-lg text-foreground">PULSO</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Apoio à decisão clínica para profissionais de saúde. Protocolos, medicamentos e calculadoras baseados em evidência.
              </p>
            </div>

            {/* Produto */}
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-4">Produto</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><button onClick={() => { navigate("/auth"); hapticLight(); }} className="hover:text-foreground transition-colors">Criar conta</button></li>
                <li><button onClick={() => { navigate("/pricing"); hapticLight(); }} className="hover:text-foreground transition-colors">Planos e preços</button></li>
                <li><button onClick={() => document.getElementById("ferramentas")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Funcionalidades</button></li>
                <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Perguntas frequentes</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-4">Institucional</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/about")} className="hover:text-foreground transition-colors">Sobre o PULSO</button></li>
                <li><button onClick={() => navigate("/terms")} className="hover:text-foreground transition-colors">Termos de Uso</button></li>
                <li><button onClick={() => navigate("/privacy")} className="hover:text-foreground transition-colors">Política de Privacidade</button></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-4">Contato</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contato@pulsoemergencia.com.br" className="hover:text-foreground transition-colors">
                    contato@pulsoemergencia.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/ZTQKMSJFBHPWG1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://pulsoemergencia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    pulsoemergencia.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} PULSO. Todos os direitos reservados.</span>
            <span className="text-[11px]">As informações não substituem o julgamento médico profissional.</span>
          </div>
        </div>
      </footer>

      {/* CTA flutuante removido a pedido do usuário (ficava cortado na lateral em iPhone). */}
    </div>
  );
}
