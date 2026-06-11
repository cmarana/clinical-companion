import { motion } from "framer-motion";
import { Users, Clock, Activity, AlertTriangle } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import { BRAND, epidemicRegions } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneDutyEpidemic() {
  const [view, setView] = useState<"duty" | "epi">("duty");
  useEffect(() => {
    const t = setTimeout(() => setView("epi"), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <LightShell title={view === "duty" ? "Modo Plantão" : "Vigilância Epidemiológica"}>
      <div className="h-full p-6" style={{ background: BRAND.bgLight }}>
        {view === "duty" ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-2xl px-4 py-3 text-white" style={{ background: BRAND.primary, fontFamily: "Sora, system-ui" }}>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Plantão</div>
                <div className="text-xl font-bold flex items-center gap-2"><Clock className="w-5 h-5" /> 04:32:18</div>
              </div>
              <div className="rounded-2xl border bg-white px-4 py-3" style={{ borderColor: BRAND.border }}>
                <div className="text-[10px] uppercase tracking-widest" style={{ color: BRAND.textMuted }}>Pacientes</div>
                <div className="text-xl font-bold flex items-center gap-2"><Users className="w-5 h-5" style={{ color: BRAND.primary }} /> 12 ativos</div>
              </div>
              <div className="rounded-2xl border bg-white px-4 py-3" style={{ borderColor: BRAND.border }}>
                <div className="text-[10px] uppercase tracking-widest" style={{ color: BRAND.textMuted }}>Críticos</div>
                <div className="text-xl font-bold flex items-center gap-2"><Activity className="w-5 h-5" style={{ color: BRAND.danger }} /> 3</div>
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-4 space-y-2" style={{ borderColor: BRAND.border }}>
              {[
                { l: "Leito 7 · Pneumonia grave", t: "Reavaliar antibiótico em 30 min", c: BRAND.warning },
                { l: "Leito 12 · IAM SST", t: "Aguardando hemodinâmica", c: BRAND.danger },
                { l: "Leito 3 · Cetoacidose", t: "Insulina em BIC · controle glicêmico 1/1h", c: BRAND.primary },
              ].map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "#F8FAFC" }}>
                  <div className="w-1.5 h-10 rounded-full" style={{ background: r.c }} />
                  <div className="flex-1">
                    <div className="font-semibold text-sm" style={{ fontFamily: "Sora, system-ui" }}>{r.l}</div>
                    <div className="text-xs" style={{ color: BRAND.textMuted }}>{r.t}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="grid md:grid-cols-[1fr_320px] gap-4 max-w-4xl mx-auto h-full">
            <div className="rounded-2xl border bg-white p-4 flex items-center justify-center" style={{ borderColor: BRAND.border }}>
              <svg viewBox="80 50 380 450" className="w-full max-h-[360px]">
                {epidemicRegions.map((r, i) => (
                  <motion.path
                    key={r.id}
                    d={r.d}
                    initial={{ opacity: 0.15, fill: "#CBD5E1" }}
                    animate={{ opacity: 1, fill: r.color }}
                    transition={{ delay: 0.15 * i, duration: 0.5 }}
                    stroke="white"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest font-bold" style={{ color: BRAND.textMuted }}>Alertas ativos</div>
              {epidemicRegions.map((r, i) => (
                <motion.div key={r.id} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 * i + 0.4 }}
                  className="rounded-xl border bg-white p-3 flex items-start gap-2.5" style={{ borderColor: BRAND.border }}>
                  <AlertTriangle className="w-4 h-4 mt-0.5" style={{ color: r.color }} />
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: r.color }}>{r.name}</div>
                    <div className="text-sm font-semibold" style={{ fontFamily: "Sora, system-ui" }}>{r.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <div className="absolute bottom-6 right-6 flex gap-2">
        <MetricChip accent>Gestão de plantão</MetricChip>
        <MetricChip>Vigilância em tempo real</MetricChip>
      </div>
    </LightShell>
  );
}
