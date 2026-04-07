import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Pill, Bot, Calculator, BookOpen, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pulsoLogoDark from "@/assets/pulso-logo-dark.png";
import pulsoLogoLight from "@/assets/pulso-logo-light.png";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { theme } = useTheme();

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
  const logo = theme === "dark" ? pulsoLogoDark : pulsoLogoLight;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="w-full max-w-md mx-4 flex flex-col items-center text-center px-6 py-8"
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="PULSO"
              className="w-16 h-16 mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            />

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
