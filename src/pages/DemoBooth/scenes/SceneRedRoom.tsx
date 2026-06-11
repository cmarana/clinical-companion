import { motion } from "framer-motion";
import { AlertTriangle, Activity, Timer, Pill } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import GhostCursor from "../GhostCursor";
import { BRAND, pcrConduct, redRoomScenarios } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneRedRoom() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const ts = [setTimeout(() => setPhase(1), 1100), setTimeout(() => setPhase(2), 2200)];
    return () => ts.forEach(clearTimeout);
  }, []);
  return (
    <LightShell title="Sala Vermelha · Modo Emergência">
      <div className="p-6 grid grid-cols-2 gap-4 h-full" style={{ background: BRAND.bgLight }}>
        <div className="flex flex-col gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: BRAND.textMuted }}>
            Cenário crítico
          </div>
          {redRoomScenarios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl border p-4 flex items-center gap-3"
              style={{
                background: phase >= 1 && s.id === "pcr" ? BRAND.primary : "white",
                color: phase >= 1 && s.id === "pcr" ? "white" : BRAND.text,
                borderColor: phase >= 1 && s.id === "pcr" ? BRAND.primary : BRAND.border,
                boxShadow: phase >= 1 && s.id === "pcr" ? "0 12px 30px -12px rgba(10,109,217,0.45)" : "none",
              }}
            >
              <AlertTriangle className="w-5 h-5" style={{ color: s.color }} />
              <div className="flex-1 font-semibold" style={{ fontFamily: "Sora, system-ui" }}>{s.label}</div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: s.color, color: "white" }}>{s.tag}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 12 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border bg-white p-5 flex flex-col"
          style={{ borderColor: BRAND.border, boxShadow: "0 20px 40px -20px rgba(15,23,42,0.18)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5" style={{ color: BRAND.danger }} />
            <div className="font-bold text-lg leading-tight" style={{ fontFamily: "Sora, system-ui" }}>{pcrConduct.title}</div>
          </div>
          <div className="flex flex-col gap-2">
            {pcrConduct.steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * i + 0.1 }}
                className="flex items-start gap-3 p-2.5 rounded-xl"
                style={{ background: i === 0 ? "#FEE2E2" : "#F1F5F9" }}
              >
                <div className="flex items-center gap-1 text-xs font-bold tabular-nums" style={{ color: BRAND.danger, minWidth: 56 }}>
                  <Timer className="w-3.5 h-3.5" /> {s.t}
                </div>
                <div className="text-sm flex-1 flex items-center gap-2">
                  <Pill className="w-3.5 h-3.5" style={{ color: BRAND.primary }} />
                  {s.a}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 z-50">
        <MetricChip accent big>Modo Emergência · resposta em segundos</MetricChip>
      </div>
      <GhostCursor x={phase === 0 ? 200 : 380} y={phase === 0 ? 280 : 200} clicking={phase === 1} />
    </LightShell>
  );
}
