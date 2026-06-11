import { motion } from "framer-motion";
import { Check } from "lucide-react";
import LightShell, { MetricChip, DarkPanel } from "../LightShell";
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
      <div className="p-6 h-full flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <DarkPanel className="p-6" glow>
            <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primaryGlow }}>Triagem de sepse</div>
            <div className="text-2xl font-bold mt-1" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>qSOFA — Beira-leito</div>

            <div className="mt-5 space-y-2">
              {qsofaItems.map((it, i) => (
                <motion.label
                  key={i}
                  initial={false}
                  animate={{
                    background: checked > i ? "rgba(10,109,217,0.14)" : "rgba(15,27,48,0.6)",
                    borderColor: checked > i ? BRAND.primary : BRAND.border,
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl border"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      scale: checked > i ? 1 : 0.85,
                      background: checked > i ? BRAND.primary : "transparent",
                      borderColor: checked > i ? BRAND.primaryGlow : BRAND.border,
                      boxShadow: checked > i ? `0 0 14px ${BRAND.primary}` : "none",
                    }}
                    className="w-5 h-5 rounded border flex items-center justify-center"
                  >
                    {checked > i && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </motion.div>
                  <span className="text-sm" style={{ color: BRAND.text }}>{it.k}</span>
                </motion.label>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 1, 1, 1], scale: [0.9, 1.05, 1, 1.02] }}
                transition={{ duration: 1.2, times: [0, 0.3, 0.6, 1] }}
                className="mt-5 rounded-2xl p-5 text-center"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.danger}, #B91C1C)`,
                  color: "white",
                  boxShadow: `0 24px 50px -15px ${BRAND.danger}80`,
                }}
              >
                <div className="text-xs uppercase tracking-widest font-bold opacity-90">Resultado</div>
                <div className="text-3xl font-bold mt-1" style={{ fontFamily: "Sora, system-ui" }}>Alto risco · Score 3</div>
                <div className="text-sm mt-1 opacity-90">Iniciar bundle de sepse imediatamente</div>
              </motion.div>
            )}
          </DarkPanel>
        </div>
      </div>
      <div className="absolute bottom-6 right-6">
        <MetricChip accent big>53 calculadoras integradas</MetricChip>
      </div>
    </LightShell>
  );
}
