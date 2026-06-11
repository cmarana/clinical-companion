import { motion } from "framer-motion";
import { Check } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import { BRAND, qsofaItems } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneCalc() {
  const [checked, setChecked] = useState(0);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const ts = [
      setTimeout(() => setChecked(1), 350),
      setTimeout(() => setChecked(2), 800),
      setTimeout(() => setChecked(3), 1250),
      setTimeout(() => setShowResult(true), 1700),
    ];
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <LightShell title="Calculadora · qSOFA">
      <div className="p-6 h-full flex items-center justify-center" style={{ background: BRAND.bgLight }}>
        <div className="w-full max-w-2xl rounded-2xl bg-white border p-6" style={{ borderColor: BRAND.border, boxShadow: "0 20px 40px -20px rgba(15,23,42,0.18)" }}>
          <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primary }}>Triagem de sepse</div>
          <div className="text-2xl font-bold mt-1" style={{ fontFamily: "Sora, system-ui" }}>qSOFA — Beira-leito</div>

          <div className="mt-5 space-y-2">
            {qsofaItems.map((it, i) => (
              <motion.label
                key={i}
                initial={false}
                animate={{ background: checked > i ? "#EFF6FF" : "white" }}
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{ borderColor: checked > i ? BRAND.primary : BRAND.border }}
              >
                <motion.div
                  initial={false}
                  animate={{ scale: checked > i ? 1 : 0.85, background: checked > i ? BRAND.primary : "white" }}
                  className="w-5 h-5 rounded border flex items-center justify-center"
                  style={{ borderColor: checked > i ? BRAND.primary : BRAND.border }}
                >
                  {checked > i && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </motion.div>
                <span className="text-sm">{it.k}</span>
              </motion.label>
            ))}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 1], scale: [0.9, 1.05, 1, 1.02] }}
              transition={{ duration: 1.2, times: [0, 0.3, 0.6, 1] }}
              className="mt-5 rounded-2xl p-5 text-center"
              style={{ background: BRAND.danger, color: "white" }}
            >
              <div className="text-xs uppercase tracking-widest font-bold opacity-90">Resultado</div>
              <div className="text-3xl font-bold mt-1" style={{ fontFamily: "Sora, system-ui" }}>Alto risco · Score 3</div>
              <div className="text-sm mt-1 opacity-90">Iniciar bundle de sepse imediatamente</div>
            </motion.div>
          )}
        </div>
      </div>
      <div className="absolute bottom-6 right-6">
        <MetricChip accent big>53 calculadoras integradas</MetricChip>
      </div>
    </LightShell>
  );
}
