import { motion } from "framer-motion";
import { Search, ScrollText } from "lucide-react";
import LightShell, { MetricChip, DarkPanel } from "../LightShell";
import { useTypewriter } from "../Typewriter";
import { BRAND, sepseProtocolBundle } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneSearchProtocol() {
  const [phase, setPhase] = useState(0);
  const typed = useTypewriter("sepse", phase === 0, 60);
  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <LightShell title="Busca rápida">
      {phase === 0 && (
        <div className="absolute inset-0 flex items-start justify-center pt-24" style={{ background: "rgba(2,6,17,0.7)", backdropFilter: "blur(6px)" }}>
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-[640px] max-w-[92%] rounded-2xl p-3"
            style={{
              background: BRAND.surfaceElev,
              border: `1px solid ${BRAND.borderStrong}`,
              boxShadow: `0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px ${BRAND.primary}30, 0 0 60px ${BRAND.primary}25`,
            }}
          >
            <div className="flex items-center gap-3 px-3 py-3 border-b" style={{ borderColor: BRAND.border }}>
              <Search className="w-5 h-5" style={{ color: BRAND.primaryGlow }} />
              <div className="text-lg font-medium flex-1" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>
                {typed}
                <span className="inline-block w-[2px] h-5 align-middle ml-0.5 animate-pulse" style={{ background: BRAND.primaryGlow }} />
              </div>
              <span className="text-[10px] px-2 py-1 rounded font-mono" style={{ border: `1px solid ${BRAND.border}`, color: BRAND.textMuted }}>⌘K</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {["Protocolo Sepse — SSC 2026", "Sepse pediátrica — SBP 2025", "Calculadora qSOFA", "Noradrenalina — diluição IV"].map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="px-3 py-2 rounded-xl text-sm flex items-center gap-2"
                  style={{
                    background: i === 0 ? "rgba(10,109,217,0.15)" : "transparent",
                    color: BRAND.text,
                    border: i === 0 ? `1px solid ${BRAND.primary}` : "1px solid transparent",
                  }}
                >
                  <ScrollText className="w-4 h-4" style={{ color: BRAND.primaryGlow }} />
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
        >
          <div className="max-w-3xl mx-auto">
            <DarkPanel className="p-6" glow>
              <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primaryGlow }}>Protocolo · SSC 2026</div>
              <div className="text-2xl font-bold mt-1 leading-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>
                Sepse e Choque Séptico — Bundle da 1ª hora
              </div>
              <motion.div
                animate={{ y: [0, -80, -160] }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="mt-5 space-y-2"
              >
                {sepseProtocolBundle.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ background: "rgba(91,168,255,0.06)", border: `1px solid ${BRAND.border}`, color: BRAND.text }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: BRAND.primary, boxShadow: `0 0 12px ${BRAND.primary}` }}>{i + 1}</span>
                    <span>{b}</span>
                  </div>
                ))}
                {sepseProtocolBundle.map((b, i) => (
                  <div key={"r" + i} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ background: "rgba(91,168,255,0.06)", border: `1px solid ${BRAND.border}`, color: BRAND.text }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: BRAND.primary, boxShadow: `0 0 12px ${BRAND.primary}` }}>{i + 6}</span>
                    <span>{b}</span>
                  </div>
                ))}
              </motion.div>
            </DarkPanel>
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
