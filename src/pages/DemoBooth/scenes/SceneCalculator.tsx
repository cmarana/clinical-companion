import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calculator, Check } from "lucide-react";
import BoothLayout from "../BoothLayout";

const items = [
  { label: "Frequência respiratória ≥ 22 ipm", delay: 800 },
  { label: "Pressão arterial sistólica ≤ 100 mmHg", delay: 2000 },
  { label: "Glasgow < 15", delay: 3200 },
];

export default function SceneCalculator() {
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timers = items.map((it, i) =>
      setTimeout(() => {
        setChecked((prev) => prev.map((v, idx) => (idx === i ? true : v)));
      }, it.delay),
    );
    const r = setTimeout(() => setShowResult(true), 4400);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(r);
    };
  }, []);

  return (
    <BoothLayout title="qSOFA · Triagem de sepse">
      <div className="absolute inset-0 overflow-y-auto px-6 py-6">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(10,109,217,0.15)" }}
            >
              <Calculator className="w-5 h-5" style={{ color: "#0A6DD9" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ fontFamily: "Sora, system-ui" }}>
                qSOFA
              </h1>
              <p className="text-white/55 text-xs">Quick Sequential Organ Failure Assessment</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {items.map((it, i) => (
              <motion.label
                key={i}
                animate={{
                  background: checked[i] ? "rgba(10,109,217,0.15)" : "rgba(255,255,255,0.03)",
                  borderColor: checked[i] ? "rgba(10,109,217,0.6)" : "rgba(255,255,255,0.08)",
                }}
                className="flex items-center gap-3 p-4 rounded-xl border cursor-default"
              >
                <motion.div
                  animate={{
                    background: checked[i] ? "#0A6DD9" : "transparent",
                    borderColor: checked[i] ? "#0A6DD9" : "rgba(255,255,255,0.25)",
                  }}
                  className="w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0"
                >
                  {checked[i] && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                </motion.div>
                <span className="text-white/90 text-[15px]">{it.label}</span>
              </motion.label>
            ))}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="mt-8 p-5 rounded-2xl border-2"
              style={{ background: "rgba(220, 38, 38, 0.12)", borderColor: "rgba(220, 38, 38, 0.6)" }}
            >
              <div className="text-[11px] uppercase tracking-wider text-red-300 font-semibold">Resultado</div>
              <div className="text-3xl font-bold mt-1" style={{ fontFamily: "Sora, system-ui" }}>
                qSOFA 3 — Alto risco
              </div>
              <div className="text-white/80 text-sm mt-2">
                Iniciar bundle da 1ª hora · Considerar UTI · Reavaliar lactato em 2h
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl text-sm font-medium border shadow-2xl"
        style={{ background: "rgba(10,109,217,0.95)", borderColor: "rgba(255,255,255,0.15)", fontFamily: "Sora, system-ui" }}
      >
        53 calculadoras integradas aos protocolos
      </motion.div>
    </BoothLayout>
  );
}
