import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Baby,
  Heart,
  Brain,
  Syringe,
  Pill,
  ShieldCheck,
  Activity,
  X,
  ChevronRight,
  Sparkles,
  LayoutGrid,
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

interface OnboardingModalProps {
  onComplete: (specialtyId: string) => void;
  onSkip: () => void;
}

export default function OnboardingModal({ onComplete, onSkip }: OnboardingModalProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  const handleContinue = () => {
    if (step === 0) {
      setStep(1);
      return;
    }

    if (selected) {
      onComplete(selected);
    }
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
        <div className="relative px-5 pt-5 pb-3 shrink-0">
          <button
            onClick={onSkip}
            className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"
          >
            <X size={18} />
          </button>

          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={20} className="text-primary" />
                  <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wider">Bem-vindo</span>
                </div>
                <h2 className="font-heading font-bold text-xl text-foreground pr-10">
                  Vamos personalizar sua experiência
                </h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Escolha sua área de atuação para que os módulos mais relevantes apareçam primeiro na sua tela inicial.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="specialty"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <span className="text-xs font-heading font-semibold text-primary uppercase tracking-wider">
                  Passo 1 de 1
                </span>
                <h2 className="font-heading font-bold text-xl text-foreground mt-1 pr-10">
                  Qual sua especialidade?
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Você pode alterar isso a qualquer momento no perfil.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pb-3">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-3 gap-2 py-2"
              >
                {[
                  { icon: Activity, label: "Emergência", desc: "Protocolos rápidos" },
                  { icon: Pill, label: "Bulário", desc: "2000+ fármacos" },
                  { icon: Brain, label: "IA Clínica", desc: "Análise em tempo real" },
                ].map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl bg-muted/50 p-3 text-center"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <f.icon size={20} />
                    </div>
                    <span className="font-heading text-[11px] font-semibold leading-tight">{f.label}</span>
                    <span className="mt-1 text-[10px] leading-snug text-muted-foreground">{f.desc}</span>
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

        <div className="shrink-0 border-t border-border/60 bg-card/95 px-5 pt-2 backdrop-blur-sm">
          <button
            onClick={handleContinue}
            disabled={step === 1 && !selected}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary text-primary-foreground font-heading font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {step === 0 ? "Começar" : "Personalizar minha Home"}
            <ChevronRight size={16} />
          </button>
          {step === 1 && (
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
