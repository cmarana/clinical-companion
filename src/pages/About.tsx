import { ArrowLeft, Heart, Shield, Zap, BookOpen, Users, Target, Sparkles, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PulsoLogo } from "@/components/PulsoLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const values = [
  { icon: Shield, title: "Evidência Científica", desc: "Todo conteúdo é baseado em diretrizes clínicas atualizadas e literatura médica revisada por pares." },
  { icon: Zap, title: "Agilidade no Plantão", desc: "Desenhado para decisões rápidas em cenários de alta pressão, com acesso offline completo." },
  { icon: Heart, title: "Cuidado com o Paciente", desc: "Cada funcionalidade existe para que o profissional tenha mais segurança na conduta clínica." },
  { icon: Users, title: "Comunidade Médica", desc: "Construído com feedback contínuo de médicos, residentes e estudantes de medicina." },
  { icon: BookOpen, title: "Educação Contínua", desc: "Flashcards, quizzes e simulações para aprendizado constante na prática clínica." },
  { icon: Globe, title: "Acessibilidade", desc: "Disponível em qualquer dispositivo, a qualquer momento, mesmo sem conexão com a internet." },
];

const numbers = [
  { value: "1.000+", label: "Protocolos clínicos" },
  { value: "2.000+", label: "Medicamentos" },
  { value: "53", label: "Calculadoras médicas" },
  { value: "28+", label: "Ferramentas integradas" },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-safe z-40 bg-background/80 backdrop-blur-xl border-b border-border/30 pt-safe-0">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-muted/60 transition-colors">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-heading font-bold text-lg">Sobre o PULSO</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          <motion.div variants={fadeUp} custom={0} className="flex justify-center">
            <PulsoLogo size={72} className="rounded-2xl shadow-lg" priority />
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl sm:text-4xl font-black tracking-tight">
            Decisão clínica com{" "}
            <span className="text-primary">confiança</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            O PULSO é uma plataforma de apoio à decisão clínica que reúne protocolos médicos, 
            calculadoras, medicamentos e inteligência artificial em um único lugar — projetado para 
            profissionais de saúde que precisam de respostas rápidas e confiáveis durante a prática clínica.
          </motion.p>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl" />
          <div className="relative p-8 sm:p-10 rounded-2xl border border-primary/10">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <Target size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl">Nossa Missão</h3>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed text-base">
              Democratizar o acesso a informações médicas de qualidade, fornecendo ferramentas 
              baseadas em evidência que auxiliam profissionais de saúde na tomada de decisão clínica. 
              Acreditamos que tecnologia bem aplicada salva vidas — e que todo médico, residente ou 
              estudante merece ter acesso instantâneo ao melhor conhecimento disponível.
            </motion.p>
          </div>
        </motion.section>

        {/* Numbers */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {numbers.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i}
              className="text-center p-5 rounded-2xl bg-muted/40 border border-border/30"
            >
              <div className="font-heading text-2xl sm:text-3xl font-black text-primary">{item.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{item.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Sparkles size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl">Nossos Valores</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className="p-5 rounded-2xl bg-muted/30 border border-border/20 hover:border-primary/20 transition-colors"
              >
                <v.icon size={22} className="text-primary mb-3" />
                <h4 className="font-heading font-semibold text-foreground mb-1.5">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Disclaimer */}
        <section className="p-6 rounded-2xl bg-destructive/5 border border-destructive/10 text-sm text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground mb-2">⚠️ Aviso Importante</p>
          <p>
            O PULSO é uma ferramenta de apoio e não substitui o julgamento clínico profissional. 
            Todas as condutas devem ser individualizadas conforme avaliação do paciente. 
            O uso das informações é de inteira responsabilidade do profissional de saúde.
          </p>
        </section>

        {/* Contact */}
        <section className="text-center space-y-3 pb-8">
          <h3 className="font-heading font-bold text-lg">Fale Conosco</h3>
          <p className="text-sm text-muted-foreground">
            Dúvidas, sugestões ou parcerias? Entre em contato:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contato@pulsoemergencia.com.br"
              className="inline-block text-primary font-medium hover:underline text-sm"
            >
              contato@pulsoemergencia.com.br
            </a>
            <a
              href="https://wa.me/message/ZTQKMSJFBHPWG1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.8 1 .99-3.71-.23-.38a9.66 9.66 0 0 1-1.48-5.12c0-5.34 4.34-9.68 9.69-9.68 2.59 0 5.02 1.01 6.85 2.84a9.62 9.62 0 0 1 2.84 6.85c0 5.34-4.35 9.76-9.58 9.76Zm5.31-7.27c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15s-.76.95-.93 1.14c-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.24.47 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
