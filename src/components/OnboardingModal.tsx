import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope, Baby, Heart, Brain, Syringe, Pill, ShieldCheck, Activity, X,
  ChevronRight, ChevronLeft, Sparkles, LayoutGrid, Bot, AlertTriangle, BookOpen,
} from "lucide-react";

export interface SpecialtyChoice {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

export const specialties: SpecialtyChoice[] = [
  { id: "todas", label: "Ver Tudo", icon: LayoutGrid, color: "bg-slate-500/15 text-slate-600 dark:text-slate-400" },
  { id: "clinica-medica", label: "Clínica Médica", icon: Stethoscope, color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { id: "emergencia", label: "Emergência / UTI", icon: Activity, color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { id: "pediatria", label: "Pediatria", icon: Baby, color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
  { id: "ginecologia-obstetricia", label: "GO / Obstetrícia", icon: Heart, color: "bg-pink-500/15 text-pink-600 dark:text-pink-400" },
  { id: "cirurgia", label: "Cirurgia Geral", icon: Syringe, color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
  { id: "psiquiatria-neuro", label: "Psiquiatria / Neuro", icon: Brain, color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { id: "infectologia", label: "Infectologia", icon: ShieldCheck, color: "bg-green-500/15 text-green-600 dark:text-green-400" },
  { id: "generalista", label: "Generalista / Residente", icon: Pill, color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
];

const tourSteps = [
  {
    icon: Sparkles,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Bem-vindo ao PULSO",
    description: "Sua central de decisão clínica. Protocolos, IA, prescrições e muito mais — tudo pensado para o plantão real.",
    features: [
      { icon: Bot, label: "IA Clínica", desc: "Análise de conduta em tempo real com sugestão de protocolos" },
      { icon: AlertTriangle, label: "Modo Plantão", desc: "Timer, checklist de passagem e notas por leito" },
      { icon: BookOpen, label: "1.000+ Protocolos", desc: "Diretrizes atualizadas com fluxogramas interativos" },
    ],
  },
  {
    icon: Bot,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    title: "IA Clínica Contextual",
    description: "Digite um caso clínico e receba análise de conduta, protocolos relacionados e prescrições pré-preenchidas — tudo baseado em evidências.",
    features: [
      { icon: Brain, label: "Análise em tempo real", desc: "Sugestões de diagnóstico e conduta" },
      { icon: Pill, label: "Prescrições prontas", desc: "Copiáveis com um toque" },
      { icon: BookOpen, label: "Protocolos linkados", desc: "Navegação direta para o protocolo citado" },
    ],
  },
  {
    icon: AlertTriangle,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
    title: "Modo Plantão Completo",
    description: "Projetado para o beira-leito: acesso one-tap a emergências, cronômetro de turno, checklist de passagem e anotações por leito.",
    features: [
      { icon: Activity, label: "Emergências rápidas", desc: "PCR, sepse, AVC em 1 toque" },
      { icon: Stethoscope, label: "Passagem de plantão", desc: "Checklist completo e compartilhável" },
      { icon: Syringe, label: "Notas por leito", desc: "Organização clínica prática" },
    ],
  },
];

const TOTAL_STEPS = tourSteps.length + 1; // tour + specialty selection

interface OnboardingModalProps {
  onComplete: (specialtyId: string) => void;
  onSkip: () => void;
}

export default function OnboardingModal({ onComplete, onSkip }: OnboardingModalProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const prev = [document.body.style.overflow, document.documentElement.style.overflow];
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev[0];
      document.documentElement.style.overflow = prev[1];
    };
  }, []);

  const isTour = step < tourSteps.length;
  const isSpecialty = step === tourSteps.length;

  const handleContinue = () => {
    if (isTour) {
      setStep(step + 1);
      return;
    }
    if (selected) onComplete(selected);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm overscroll-none"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-full max-w-md bg-card rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-0"
        style={{
          maxHeight: "min(760px, calc(100dvh - env(safe-area-inset-top, 0px) - 12px))",
          paddingBottom: "max(env(safe-area-inset-bottom, 0px), 12px)",
        }}
      >
        {/* Header */}
        <div className="relative px-5 pt-5 pb-3 shrink-0">
          <button
            onClick={onSkip}
            className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"
          >
            <X size={18} />
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5 mb-3">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === step ? "w-6 bg-primary" : i < step ? "w-3 bg-primary/40" : "w-3 bg-muted"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {isTour ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${tourSteps[step].iconBg}`}>
                      {(() => { const Icon = tourSteps[step].icon; return <Icon size={18} className={tourSteps[step].iconColor} />; })()}
                    </div>
                    <span className="text-[10px] font-heading font-semibold text-muted-foreground uppercase tracking-wider">
                      {step + 1} de {TOTAL_STEPS}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-xl text-foreground pr-10">{tourSteps[step].title}</h2>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{tourSteps[step].description}</p>
                </>
              ) : (
                <>
                  <span className="text-[10px] font-heading font-semibold text-primary uppercase tracking-wider">
                    Último passo
                  </span>
                  <h2 className="font-heading font-bold text-xl text-foreground mt-1 pr-10">
                    Qual sua especialidade?
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Personalizamos a Home para você. Altere a qualquer momento no perfil.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pb-3">
          <AnimatePresence mode="wait">
            {isTour ? (
              <motion.div
                key={`tour-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-2.5 py-2"
              >
                {tourSteps[step].features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl bg-muted/50 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <f.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading text-sm font-semibold">{f.label}</span>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="specialties"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 gap-2 py-2"
              >
                {specialties.map((s, i) => {
                  const isSelected = selected === s.id;
                  return (
                    <motion.button
                      key={s.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => setSelected(s.id)}
                      className={`flex items-center gap-2.5 rounded-2xl border-2 p-3.5 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-transparent bg-muted/40 hover:bg-muted/70"
                      }`}
                    >
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${s.color}`}>
                        <s.icon size={18} />
                      </div>
                      <span className="font-heading text-[12px] font-semibold leading-tight">{s.label}</span>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-border/60 bg-card/95 px-5 pt-2 backdrop-blur-sm">
          <div className="flex gap-2">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center justify-center gap-1 py-3.5 px-4 rounded-2xl bg-muted text-muted-foreground font-heading font-semibold text-sm transition-all hover:bg-muted/80 active:scale-[0.98]"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            <button
              onClick={handleContinue}
              disabled={isSpecialty && !selected}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-primary-foreground font-heading font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isTour ? "Próximo" : "Personalizar minha Home"}
              <ChevronRight size={16} />
            </button>
          </div>
          {isSpecialty && (
            <button
              onClick={onSkip}
              className="w-full mt-2 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors font-heading"
            >
              Pular por enquanto
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
