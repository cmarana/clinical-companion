import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertTriangle, MapPin } from "lucide-react";
import BoothLayout from "../BoothLayout";
import { epidemicAlerts } from "../mock-data";

const regions: Record<string, { d: string; cx: number; cy: number }> = {
  Norte: { d: "M120,80 L260,80 L280,160 L150,180 Z", cx: 200, cy: 130 },
  Nordeste: { d: "M260,80 L350,90 L340,200 L280,200 Z", cx: 305, cy: 145 },
  "Centro-Oeste": { d: "M150,180 L280,200 L260,280 L150,270 Z", cx: 205, cy: 230 },
  Sudeste: { d: "M260,200 L340,200 L320,290 L260,280 Z", cx: 295, cy: 245 },
  Sul: { d: "M180,270 L260,280 L240,360 L170,340 Z", cx: 215, cy: 315 },
};

const levelColor: Record<string, string> = {
  vermelho: "#DC2626",
  amarelo: "#F59E0B",
  verde: "#10B981",
};

export default function SceneEpidemic() {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveIdx((i) => Math.min(i + 1, epidemicAlerts.length)), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <BoothLayout title="Vigilância epidemiológica">
      <div className="absolute inset-0 flex">
        {/* mapa */}
        <div className="flex-1 flex items-center justify-center p-6">
          <svg viewBox="0 0 460 420" className="w-full max-w-md h-auto">
            {Object.entries(regions).map(([name, r]) => {
              const alert = epidemicAlerts.find((a) => a.region === name);
              const idx = epidemicAlerts.findIndex((a) => a.region === name);
              const active = idx < activeIdx && alert;
              const color = active ? levelColor[alert.level] : "rgba(255,255,255,0.06)";
              return (
                <motion.g key={name}>
                  <motion.path
                    d={r.d}
                    animate={{ fill: color, opacity: active ? 0.85 : 0.5 }}
                    transition={{ duration: 0.6 }}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                  />
                  {active && (
                    <motion.circle
                      cx={r.cx}
                      cy={r.cy}
                      r="6"
                      fill="white"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.4, 1] }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                  <text x={r.cx} y={r.cy + 22} textAnchor="middle" fontSize="10" fill="white" opacity="0.7">
                    {name}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        </div>

        {/* alertas */}
        <div className="w-80 border-l overflow-y-auto p-4 space-y-2.5" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="text-[11px] uppercase tracking-wider text-white/50 mb-2 font-semibold">Alertas regionais</div>
          {epidemicAlerts.slice(0, activeIdx).map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-3 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: `${levelColor[a.level]}55`,
                borderLeftWidth: 3,
                borderLeftColor: levelColor[a.level],
              }}
            >
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5" style={{ color: levelColor[a.level] }} />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-white" style={{ fontFamily: "Sora, system-ui" }}>
                    {a.title} · {a.region}
                  </div>
                  <div className="text-xs text-white/65 mt-0.5">{a.detail}</div>
                  <div className="flex items-center gap-1 mt-1.5 text-[10px] text-white/45">
                    <MapPin className="w-3 h-3" />
                    Alerta {a.level}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl text-sm font-medium border shadow-2xl"
        style={{ background: "rgba(10,109,217,0.95)", borderColor: "rgba(255,255,255,0.15)", fontFamily: "Sora, system-ui" }}
      >
        Vigilância epidemiológica + REMUME/RENAME
      </motion.div>
    </BoothLayout>
  );
}
