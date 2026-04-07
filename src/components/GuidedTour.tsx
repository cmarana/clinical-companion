import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Search, Zap, Bot, Star, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOUR_KEY = "pulso_tour_completed";

interface TourStep {
  title: string;
  description: string;
  icon: React.ElementType;
  targetSelector: string;
  position: "bottom" | "top";
}

const steps: TourStep[] = [
  {
    title: "Busca Inteligente",
    description: "Encontre qualquer protocolo, medicamento ou calculadora em segundos digitando aqui.",
    icon: Search,
    targetSelector: "[data-tour='search']",
    position: "bottom",
  },
  {
    title: "Modo Emergência",
    description: "Acesse algoritmos de urgência e UTI com um toque para decisões rápidas no plantão.",
    icon: Zap,
    targetSelector: "[data-tour='emergency']",
    position: "bottom",
  },
  {
    title: "IA Clínica",
    description: "Tire dúvidas clínicas em tempo real com inteligência artificial especializada.",
    icon: Bot,
    targetSelector: "[data-tour='ai']",
    position: "bottom",
  },
  {
    title: "Favoritos",
    description: "Toque no ícone de estrela em qualquer protocolo para salvá-lo no seu acesso rápido.",
    icon: Star,
    targetSelector: "[data-tour='favorites']",
    position: "top",
  },
  {
    title: "Modo Offline",
    description: "Baixe conteúdo para usar sem internet — ideal para plantões sem sinal.",
    icon: WifiOff,
    targetSelector: "[data-tour='tools']",
    position: "top",
  },
];

export default function GuidedTour() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const done = localStorage.getItem(TOUR_KEY);
    if (!done) {
      const timer = setTimeout(() => setActive(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const findVisibleStep = useCallback((startIdx: number, direction: 1 | -1 = 1): number => {
    let idx = startIdx;
    while (idx >= 0 && idx < steps.length) {
      const sel = steps[idx]?.targetSelector;
      if (sel) {
        const el = document.querySelector(sel);
        if (el && el.getClientRects().length > 0) return idx;
      }
      idx += direction;
    }
    return -1;
  }, []);

  const close = useCallback(() => {
    setActive(false);
    localStorage.setItem(TOUR_KEY, "true");
  }, []);

  const updateTarget = useCallback((idx: number) => {
    const sel = steps[idx]?.targetSelector;
    if (!sel) return;
    const el = document.querySelector(sel);
    if (el && el.getClientRects().length > 0) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => setTargetRect(el.getBoundingClientRect()), 300);
    } else {
      const nextVisible = findVisibleStep(idx + 1, 1);
      if (nextVisible >= 0) {
        setStep(nextVisible);
      } else {
        close();
      }
    }
  }, [findVisibleStep, close]);

  useEffect(() => {
    if (active) updateTarget(step);
  }, [active, step, updateTarget]);

  const next = useCallback(() => {
    const nextVisible = findVisibleStep(step + 1, 1);
    if (nextVisible >= 0) {
      setStep(nextVisible);
    } else {
      close();
    }
  }, [step, close, findVisibleStep]);

  const prev = useCallback(() => {
    const prevVisible = findVisibleStep(step - 1, -1);
    if (prevVisible >= 0) setStep(prevVisible);
  }, [step, findVisibleStep]);

  if (!active) return null;

  const current = steps[step];
  const Icon = current.icon;
  const isLast = step === steps.length - 1;

  // Tooltip position
  const tooltipStyle: React.CSSProperties = {};
  if (targetRect) {
    if (current.position === "bottom") {
      tooltipStyle.top = targetRect.bottom + 12;
      tooltipStyle.left = Math.max(16, Math.min(targetRect.left, window.innerWidth - 320));
    } else {
      tooltipStyle.bottom = window.innerHeight - targetRect.top + 12;
      tooltipStyle.left = Math.max(16, Math.min(targetRect.left, window.innerWidth - 320));
    }
  } else {
    tooltipStyle.top = "50%";
    tooltipStyle.left = "50%";
    tooltipStyle.transform = "translate(-50%, -50%)";
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100]"
        onClick={(e) => {
          if (e.target === overlayRef.current) next();
        }}
      >
        {/* Overlay with cutout */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
          <defs>
            <mask id="tour-mask">
              <rect width="100%" height="100%" fill="white" />
              {targetRect && (
                <rect
                  x={targetRect.left - 8}
                  y={targetRect.top - 6}
                  width={targetRect.width + 16}
                  height={targetRect.height + 12}
                  rx={16}
                  fill="black"
                />
              )}
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="rgba(0,0,0,0.6)"
            mask="url(#tour-mask)"
            style={{ pointerEvents: "auto" }}
          />
        </svg>

        {/* Pulsing ring around target */}
        {targetRect && (
          <div
            className="absolute border-2 border-primary rounded-2xl animate-pulse pointer-events-none"
            style={{
              top: targetRect.top - 6,
              left: targetRect.left - 8,
              width: targetRect.width + 16,
              height: targetRect.height + 12,
              boxShadow: "0 0 0 4px hsl(var(--primary) / 0.2)",
            }}
          />
        )}

        {/* Tooltip card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: current.position === "bottom" ? -8 : 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="absolute z-[101] w-[calc(100%-32px)] max-w-[320px] bg-card border border-border rounded-2xl shadow-2xl p-4"
          style={tooltipStyle}
        >
          {/* Skip button */}
          <button
            onClick={close}
            className="absolute top-3 right-3 p-1 rounded-lg hover:bg-muted text-muted-foreground"
          >
            <X size={14} />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-sm">{current.title}</h3>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            {current.description}
          </p>

          {/* Progress + nav */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step ? "w-5 bg-primary" : i < step ? "w-1.5 bg-primary/40" : "w-1.5 bg-muted"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              {step > 0 && (
                <Button variant="ghost" size="sm" onClick={prev} className="h-7 px-2 text-xs">
                  <ChevronLeft size={14} />
                </Button>
              )}
              <Button size="sm" onClick={next} className="h-7 px-3 text-xs gap-1">
                {isLast ? "Concluir" : "Próximo"}
                {!isLast && <ChevronRight size={13} />}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/** Call this to reset the tour (e.g., from Settings) */
export function resetTour() {
  localStorage.removeItem(TOUR_KEY);
}
