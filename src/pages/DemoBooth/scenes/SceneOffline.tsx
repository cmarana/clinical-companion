import { motion } from "framer-motion";
import { WifiOff, Wifi, ScrollText, Droplets, Check } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import { BRAND } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneOffline() {
  const [phase, setPhase] = useState(0); // 0 online, 1 cut, 2 ainda funciona, 3 conduta aberta
  useEffect(() => {
    const ts = [
      setTimeout(() => setPhase(1), 1100),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => setPhase(3), 4200),
    ];
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <LightShell title="PULSO" offline={phase >= 1}>
      {/* Banner offline grande */}
      {phase >= 1 && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="absolute top-0 inset-x-0 z-40 flex items-center justify-center gap-3 py-2.5 text-sm font-semibold"
          style={{ background: BRAND.danger, color: "white", fontFamily: "Sora, system-ui" }}
        >
          <WifiOff className="w-5 h-5" />
          Sem conexão · Você está offline
        </motion.div>
      )}

      <div className="p-6 h-full" style={{ background: BRAND.bgLight, paddingTop: phase >= 1 ? 56 : 24 }}>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: phase >= 2 ? 1 : 0.4, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white border p-5"
            style={{ borderColor: BRAND.border }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ScrollText className="w-5 h-5" style={{ color: BRAND.primary }} />
              <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primary }}>Protocolo</div>
            </div>
            <div className="text-lg font-bold leading-tight" style={{ fontFamily: "Sora, system-ui" }}>IAM com supradesnivelamento de ST</div>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" style={{ color: BRAND.ok }} /> AAS 200–300 mg VO mastigar</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" style={{ color: BRAND.ok }} /> Clopidogrel 300 mg VO ataque</li>
              <li className="flex gap-2"><Check className="w-4 h-4 mt-0.5" style={{ color: BRAND.ok }} /> Trombólise se ICP {">"} 120 min</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: phase >= 3 ? 1 : 0, x: phase >= 3 ? 0 : 10 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-white border p-5"
            style={{ borderColor: BRAND.border }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-5 h-5" style={{ color: BRAND.primary }} />
              <div className="text-[11px] font-bold uppercase tracking-widest" style={{ color: BRAND.primary }}>Diluição IV</div>
            </div>
            <div className="text-lg font-bold leading-tight" style={{ fontFamily: "Sora, system-ui" }}>Tenecteplase (TNK)</div>
            <div className="text-sm mt-3 space-y-1.5">
              <div><b>Reconstituir:</b> 10 mL AD</div>
              <div><b>Dose:</b> ajustada por peso (30–50 mg)</div>
              <div><b>Via:</b> bolus EV em 5–10 s</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: phase >= 2 ? 1 : 0, scale: phase >= 2 ? 1 : 0.9, y: phase >= 2 ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-6 inset-x-6 flex justify-center"
      >
        <div
          className="px-5 py-3 rounded-2xl flex items-center gap-3 text-white font-bold max-w-2xl text-center"
          style={{
            background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
            boxShadow: "0 20px 40px -10px rgba(10,109,217,0.55)",
            fontFamily: "Sora, system-ui",
          }}
        >
          {phase < 2 ? <Wifi className="w-5 h-5" /> : <WifiOff className="w-5 h-5" />}
          <span className="text-base md:text-lg">Cache offline inteligente — o PULSO funciona onde a rede não chega.</span>
        </div>
      </motion.div>

      {phase === 0 && (
        <div className="absolute top-20 right-6">
          <MetricChip>Conectado</MetricChip>
        </div>
      )}
    </LightShell>
  );
}
