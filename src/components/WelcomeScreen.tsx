import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Pill, Bot, Calculator, BookOpen, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PulsoLogo } from "@/components/PulsoLogo";

const WELCOME_KEY = "pulso_welcome_seen";

const highlights = [
  { icon: Bot, label: "IA Clínica", desc: "Tire dúvidas em tempo real" },
  { icon: Zap, label: "Emergência", desc: "Algoritmos de urgência e UTI" },
  { icon: Pill, label: "2.000+ Fármacos", desc: "Doses, diluição e interações" },
  { icon: BookOpen, label: "1.000+ Protocolos", desc: "Todas as especialidades" },
  { icon: Calculator, label: "53 Calculadoras", desc: "Glasgow, SOFA, Wells e mais" },
  { icon: Shield, label: "Modo Offline", desc: "Funciona sem internet no plantão" },
];

interface WelcomeScreenProps {
  userName?: string;
  onComplete: () => void;
}

export default function WelcomeScreen({ userName, onComplete }: WelcomeScreenProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(WELCOME_KEY);
    if (!seen) {
      setVisible(true);
    } else {
      onComplete();
    }
  }, [onComplete]);

  const handleContinue = () => {
    localStorage.setItem(WELCOME_KEY, "true");
    setVisible(false);
    setTimeout(onComplete, 400);
  };

  if (!visible) return null;

  const firstName = userName?.split(" ")[0] || "Doutor(a)";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-tour flex items-center justify-center bg-background/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="w-full max-w-md mx-4 flex flex-col items-center text-center px-6 py-8"
          >
            {/* Logo com animação de pulso (heartbeat) */}
            <motion.div
              className="mb-4 relative"
              initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 180, damping: 14 }}
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1, 1.05, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  ease: "easeInOut",
                  times: [0, 0.18, 0.36, 0.54, 1],
                  delay: 0.8,
                }}
              >
                <PulsoLogo size={88} priority />
              </motion.div>
              {/* Halo pulsante */}
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full ring-2 ring-primary/40"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.6, 1.9] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.4, delay: 0.9, ease: "easeOut" }}
              />
            </motion.div>

            {/* Wordmark animado */}
            <motion.div
              className="font-heading font-bold text-primary tracking-[0.2em] text-sm mb-1"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              PULSO EMERGÊNCIA
            </motion.div>

            {/* Greeting */}
            <motion.h1
              className="text-2xl font-bold text-foreground mb-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Bem-vindo(a), {firstName}! 👋
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-sm mb-8 max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Tudo pronto para o seu plantão. Veja o que o PULSO tem para você:
            </motion.p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  className="flex items-start gap-3 rounded-xl bg-muted/50 p-3 text-left ring-1 ring-border/50"
                >
                  <div className="shrink-0 rounded-lg bg-primary/10 p-2">
                    <h.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">{h.label}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="w-full"
            >
              <Button
                onClick={handleContinue}
                className="w-full h-12 rounded-xl text-base font-semibold gap-2"
                size="lg"
              >
                Começar a usar
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-[10px] text-muted-foreground mt-3">
                Vamos fazer um tour rápido pelo app em seguida
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { WELCOME_KEY };
