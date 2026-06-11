import { motion } from "framer-motion";
import { AlertCircle, Droplets } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import { useTypewriter } from "../Typewriter";
import { BRAND, noradrenalineDilution } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneMeds() {
  const [phase, setPhase] = useState(0);
  const typed = useTypewriter("noradrenalina", phase === 0, 45);
  useEffect(() => {
    const ts = [setTimeout(() => setPhase(1), 1500), setTimeout(() => setPhase(2), 3800)];
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <LightShell title="Bulário PULSO">
      <div className="p-6 h-full" style={{ background: BRAND.bgLight }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl bg-white border px-4 py-3 flex items-center gap-3" style={{ borderColor: BRAND.border }}>
            <Droplets className="w-5 h-5" style={{ color: BRAND.primary }} />
            <span className="text-base" style={{ fontFamily: "Sora, system-ui" }}>
              {typed}
              {phase === 0 && <span className="inline-block w-[2px] h-4 align-middle ml-0.5 animate-pulse" style={{ background: BRAND.primary }} />}
            </span>
          </div>

          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-2xl bg-white border p-5"
              style={{ borderColor: BRAND.border, boxShadow: "0 20px 40px -20px rgba(15,23,42,0.18)" }}
            >
              <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primary }}>
                Diluição IV pronta
              </div>
              <div className="text-2xl font-bold mt-1" style={{ fontFamily: "Sora, system-ui" }}>{noradrenalineDilution.drug}</div>
              <div className="text-sm mt-1" style={{ color: BRAND.textMuted }}>{noradrenalineDilution.presentation}</div>

              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                {[
                  { l: "Diluição", v: noradrenalineDilution.dilution },
                  { l: "Dose", v: noradrenalineDilution.dose },
                  { l: "Bomba", v: noradrenalineDilution.startRate },
                ].map((b) => (
                  <div key={b.l} className="rounded-xl p-3" style={{ background: "#EFF6FF" }}>
                    <div className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: BRAND.primary }}>{b.l}</div>
                    <div className="text-sm font-semibold mt-1" style={{ color: BRAND.text }}>{b.v}</div>
                  </div>
                ))}
              </div>

              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 rounded-xl p-3 flex items-start gap-2.5"
                  style={{ background: "#FEE2E2", color: BRAND.danger }}
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-medium">{noradrenalineDilution.alert}</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2 flex-wrap justify-end max-w-[60%]">
        <MetricChip accent>2.000 medicamentos</MetricChip>
        <MetricChip>1.000+ interações</MetricChip>
        <MetricChip>50+ diluições IV</MetricChip>
      </div>
    </LightShell>
  );
}
