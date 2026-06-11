import { motion } from "framer-motion";
import { Search, ScrollText } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import { useTypewriter } from "../Typewriter";
import { BRAND, sepseProtocolBundle } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneSearchProtocol() {
  const [phase, setPhase] = useState(0); // 0 cmdK, 1 protocol
  const typed = useTypewriter("sepse", phase === 0, 60);
  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <LightShell title="Busca rápida">
      {phase === 0 && (
        <div className="absolute inset-0 flex items-start justify-center pt-24" style={{ background: "rgba(5,11,26,0.35)" }}>
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-[640px] max-w-[92%] rounded-2xl bg-white p-3 shadow-2xl"
            style={{ border: `1px solid ${BRAND.border}` }}
          >
            <div className="flex items-center gap-3 px-3 py-3 border-b" style={{ borderColor: BRAND.border }}>
              <Search className="w-5 h-5" style={{ color: BRAND.primary }} />
              <div className="text-lg font-medium flex-1" style={{ fontFamily: "Sora, system-ui" }}>
                {typed}
                <span className="inline-block w-[2px] h-5 align-middle ml-0.5 animate-pulse" style={{ background: BRAND.primary }} />
              </div>
              <span className="text-[10px] px-2 py-1 rounded border font-mono" style={{ borderColor: BRAND.border, color: BRAND.textMuted }}>⌘K</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {["Protocolo Sepse — SSC 2026", "Sepse pediátrica — SBP 2025", "Calculadora qSOFA", "Noradrenalina — diluição IV"].map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="px-3 py-2 rounded-xl text-sm flex items-center gap-2"
                  style={{ background: i === 0 ? "#EFF6FF" : "transparent", color: BRAND.text }}
                >
                  <ScrollText className="w-4 h-4" style={{ color: BRAND.primary }} />
                  {r}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {phase === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 p-6 overflow-hidden"
          style={{ background: BRAND.bgLight }}
        >
          <div className="max-w-3xl mx-auto rounded-2xl bg-white p-6 border shadow-sm" style={{ borderColor: BRAND.border }}>
            <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primary }}>Protocolo · SSC 2026</div>
            <div className="text-2xl font-bold mt-1 leading-tight" style={{ fontFamily: "Sora, system-ui" }}>
              Sepse e Choque Séptico — Bundle da 1ª hora
            </div>
            <motion.div
              animate={{ y: [0, -80, -160] }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              className="mt-5 space-y-2"
            >
              {sepseProtocolBundle.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ background: "#F1F5F9" }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: BRAND.primary }}>{i + 1}</span>
                  <span>{b}</span>
                </div>
              ))}
              {sepseProtocolBundle.map((b, i) => (
                <div key={"r" + i} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ background: "#F1F5F9" }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: BRAND.primary }}>{i + 6}</span>
                  <span>{b}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="absolute bottom-6 left-6 flex gap-2">
            <MetricChip accent>1.004 protocolos</MetricChip>
            <MetricChip>Contexto SUS</MetricChip>
          </div>
        </motion.div>
      )}
    </LightShell>
  );
}
