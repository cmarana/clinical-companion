import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope, Shield, Zap, Brain, Clock, BookOpen,
  ChevronRight, Star, ArrowRight, Sparkles, Heart,
  Activity, Pill, Calculator, FileText, Siren,
  Sun, Moon, EyeOff
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const features = [
  { icon: BookOpen, title: "1.000+ Protocolos", desc: "Protocolos clínicos completos com fluxogramas interativos e níveis de evidência." },
  { icon: Pill, title: "2.000+ Medicamentos", desc: "Bulário completo com doses, interações, diluições e ajustes renais/hepáticos." },
  { icon: Brain, title: "IA Clínica", desc: "Assistente com inteligência artificial para suporte à decisão clínica em tempo real." },
  { icon: Calculator, title: "53+ Calculadoras", desc: "Scores, clearance, doses pediátricas, superfície corporal e muito mais." },
  { icon: Siren, title: "Modo Emergência", desc: "Acesso rápido a protocolos de PCR, choque, AVC e outras emergências." },
  { icon: FileText, title: "Prescrições Prontas", desc: "Modelos de prescrição por diagnóstico, prontos para copiar e adaptar." },
];

const testimonials = [
  { name: "Dra. Camila R.", role: "Plantonista — UPA, SP", text: "O PULSO me salvou várias vezes no plantão noturno. Ter os protocolos na palma da mão faz toda diferença.", stars: 5 },
  { name: "Dr. Felipe M.", role: "R2 Clínica Médica, RJ", text: "Uso diariamente para consultar doses e interações. A IA Clínica é absurdamente útil para raciocínio diagnóstico.", stars: 5 },
  { name: "Dra. Juliana S.", role: "Emergencista, MG", text: "Interface limpa, rápida e funciona offline. É o app que faltava para quem vive de plantão.", stars: 5 },
];

const stats = [
  { value: "1.000+", label: "Protocolos" },
  { value: "2.000+", label: "Medicamentos" },
  { value: "53+", label: "Calculadoras" },
  { value: "24/7", label: "Acesso offline" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Activity size={18} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-lg">PULSO</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/auth")} className="text-sm font-heading">
              Entrar
            </Button>
            <Button size="sm" onClick={() => navigate("/auth")} className="font-heading font-bold gap-1">
              Começar grátis <ChevronRight size={14} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary mb-6">
              <Sparkles size={12} /> 7 dias grátis — sem compromisso
            </span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Decisões clínicas{" "}
            <span className="text-primary">rápidas e seguras</span>{" "}
            no plantão
          </motion.h1>
          <motion.p
            className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            Protocolos, medicamentos, calculadoras e IA clínica — tudo offline, na palma da mão.
            Feito por médicos, para médicos plantonistas.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="w-full sm:w-auto h-12 px-8 text-base font-heading font-bold gap-2 shadow-lg shadow-primary/25"
            >
              <Heart size={18} /> Começar teste grátis
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto h-12 px-8 text-base font-heading"
            >
              Ver recursos <ArrowRight size={16} />
            </Button>
          </motion.div>
          <motion.p
            className="mt-4 text-xs text-muted-foreground"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            Cartão cadastrado, cobrado só após 7 dias. Cancele quando quiser.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 border-y border-border/50 bg-muted/30">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
            >
              <p className="font-heading font-bold text-2xl sm:text-3xl text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Tudo que você precisa no plantão
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
              Ferramentas práticas, baseadas em evidências, atualizadas continuamente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors hover:shadow-md">
                  <CardContent className="p-5 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <f.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-sm">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use case */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/30">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-primary" />
                  <h3 className="font-heading font-bold text-lg">Na prática</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plantão às 3h da manhã. Paciente chega com dor torácica, sudorese e dispneia.
                  Com o <strong className="text-foreground">PULSO</strong>, você abre o protocolo de IAM com 
                  fluxograma interativo, calcula o TIMI Score ali mesmo, verifica interações da prescrição 
                  e gera o documento completo — tudo em segundos, mesmo sem internet.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Protocolo IAM", "TIMI Score", "Prescrição pronta", "Funciona offline"].map(tag => (
                    <span key={tag} className="text-[10px] font-heading font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              O que dizem os médicos
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Usado por plantonistas em todo o Brasil
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <Card className="h-full">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} size={14} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                    <div>
                      <p className="font-heading font-bold text-xs">{t.name}</p>
                      <p className="text-[10px] text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 px-4 border-y border-border/50 bg-muted/30">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Shield size={16} className="text-primary" />
            <span>Pagamento seguro via Stripe</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-primary" />
            <span>Cancele a qualquer momento</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Stethoscope size={16} className="text-primary" />
            <span>Feito por médicos</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Comece agora com 7 dias grátis
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Acesso completo a todos os recursos. Sem compromisso.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="mt-6 h-12 px-10 text-base font-heading font-bold gap-2 shadow-lg shadow-primary/25"
            >
              <Sparkles size={18} /> Criar conta grátis
            </Button>
            <p className="text-[10px] text-muted-foreground mt-3">
              Já tem conta?{" "}
              <button onClick={() => navigate("/auth")} className="text-primary hover:underline font-medium">
                Entrar
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center">
              <Activity size={12} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-semibold text-foreground">PULSO</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-4">
            <button onClick={() => navigate("/terms")} className="hover:text-foreground transition-colors">Termos de Uso</button>
            <button onClick={() => navigate("/privacy")} className="hover:text-foreground transition-colors">Privacidade</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
