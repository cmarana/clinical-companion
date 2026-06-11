import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, Wifi, ScrollText, Droplets, Check, ZapOff } from "lucide-react";
import LightShell, { MetricChip, DarkPanel } from "../LightShell";
import { BRAND } from "../mock-data";
import { useEffect, useState } from "react";

/**
 * Simulação cinematográfica de QUEDA DE WI-FI:
 * fase 0 → app online (Wi-Fi verde)
 * fase 1 → flash + glitch + tela preta "SINAL PERDIDO"
 * fase 2 → app reaparece em modo offline, ainda funcionando
 * fase 3 → segundo card (diluição) aparece offline
 */
export default function SceneOffline() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), 1100),
      setTimeout(() => setPhase(2), 2600),
      setTimeout(() => setPhase(3), 4400),
    ];
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <LightShell title="PULSO" offline={phase >= 2}>
      {/* BLACKOUT — corte de Wi-Fi cinematográfico */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="blackout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 z-[60] flex flex-col items-center justify-center"
            style={{ background: "#000" }}
          >
            {/* Glitch lines */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.3, 1, 0] }}
              transition={{ duration: 1.3, times: [0, 0.1, 0.3, 0.5, 1] }}
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,77,94,0.06) 0px, rgba(255,77,94,0.06) 2px, transparent 2px, transparent 5px)",
                mixBlendMode: "screen",
              }}
            />
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
              style={{ color: BRAND.danger, fontFamily: "Sora, system-ui" }}
            >
              <ZapOff className="w-12 h-12" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.4em] opacity-80">Hospital · 03:14</div>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">SINAL PERDIDO</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-sm tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Sora, system-ui" }}
            >
              Wi-Fi do hospital caiu
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Banner offline persistente após o blackout */}
      {phase >= 2 && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute top-0 inset-x-0 z-40 flex items-center justify-center gap-3 py-2.5 text-sm font-semibold"
          style={{ background: BRAND.danger, color: "white", fontFamily: "Sora, system-ui" }}
        >
          <WifiOff className="w-5 h-5" />
          Sem conexão · O PULSO continua funcionando
        </motion.div>
      )}

      <div className="p-6 h-full" style={{ paddingTop: phase >= 2 ? 56 : 24 }}>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: phase >= 2 ? 1 : phase === 0 ? 0.9 : 0.2, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DarkPanel className="p-5" glow={phase >= 2}>
              <div className="flex items-center gap-2 mb-2">
                <ScrollText className="w-5 h-5" style={{ color: BRAND.primaryGlow }} />
                <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primaryGlow }}>Protocolo</div>
              </div>
              <div className="text-lg font-bold leading-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>IAM com supradesnivelamento de ST</div>
              <ul className="mt-3 space-y-1.5 text-sm" style={{ color: BRAND.text }}>
                <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND.ok }} /> AAS 200–300 mg VO mastigar</li>
                <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND.ok }} /> Clopidogrel 300 mg VO ataque</li>
                <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BRAND.ok }} /> Trombólise se ICP {">"} 120 min</li>
              </ul>
            </DarkPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, x: phase >= 3 ? 0 : 10 }}
            transition={{ duration: 0.4 }}
          >
            <DarkPanel className="p-5" glow>
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-5 h-5" style={{ color: BRAND.primaryGlow }} />
                <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primaryGlow }}>Diluição IV</div>
              </div>
              <div className="text-lg font-bold leading-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>Tenecteplase (TNK)</div>
              <div className="text-sm mt-3 space-y-1.5" style={{ color: BRAND.text }}>
                <div><b style={{ color: BRAND.primaryGlow }}>Reconstituir:</b> 10 mL AD</div>
                <div><b style={{ color: BRAND.primaryGlow }}>Dose:</b> ajustada por peso (30–50 mg)</div>
                <div><b style={{ color: BRAND.primaryGlow }}>Via:</b> bolus EV em 5–10 s</div>
              </div>
            </DarkPanel>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: phase >= 2 ? 1 : 0, scale: phase >= 2 ? 1 : 0.9, y: phase >= 2 ? 0 : 20 }}
        transition={{ duration: 0.5, delay: phase >= 2 ? 0.2 : 0 }}
        className="absolute bottom-6 inset-x-6 flex justify-center"
      >
        <div
          className="px-5 py-3 rounded-2xl flex items-center gap-3 text-white font-bold max-w-2xl text-center"
          style={{
            background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
            boxShadow: `0 24px 50px -12px ${BRAND.primary}80, 0 0 0 1px ${BRAND.primaryGlow}40`,
            fontFamily: "Sora, system-ui",
          }}
        >
          <WifiOff className="w-5 h-5" />
          <span className="text-base md:text-lg">Cache offline inteligente — funciona onde a rede não chega.</span>
        </div>
      </motion.div>

      {phase === 0 && (
        <div className="absolute top-20 right-6">
          <MetricChip>
            <Wifi className="w-3.5 h-3.5" style={{ color: BRAND.ok }} /> Conectado
          </MetricChip>
        </div>
      )}
    </LightShell>
  );
}
