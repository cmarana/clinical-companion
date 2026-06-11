import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { BookOpen, AlertTriangle, ListChecks, Pill } from "lucide-react";
import BoothLayout from "../BoothLayout";
import { sepseProtocol } from "../mock-data";

const icons = [BookOpen, AlertTriangle, ListChecks, Pill];

export default function SceneProtocol() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    const start = performance.now();
    const duration = 12000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      el.scrollTop = max * p;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    controls.start({ opacity: 1, y: 0 });
    return () => cancelAnimationFrame(raf);
  }, [controls]);

  return (
    <BoothLayout title="Protocolo">
      <div ref={scrollRef} className="absolute inset-0 overflow-y-auto px-6 py-6 scroll-smooth">
        <div className="max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-wider text-white/50 mb-2">Protocolo clínico</div>
          <h1 className="text-2xl md:text-3xl font-bold leading-tight" style={{ fontFamily: "Sora, system-ui" }}>
            {sepseProtocol.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {sepseProtocol.meta.map((m) => (
              <span
                key={m}
                className="text-[11px] px-2.5 py-1 rounded-full"
                style={{ background: "rgba(10,109,217,0.15)", color: "#9CC5F0" }}
              >
                {m}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            {sepseProtocol.sections.map((s, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.15 }}
                  className="rounded-2xl p-5 border"
                  style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4" style={{ color: "#0A6DD9" }} />
                    <h2 className="font-semibold text-white" style={{ fontFamily: "Sora, system-ui" }}>
                      {s.heading}
                    </h2>
                  </div>
                  {s.body && <p className="text-white/75 text-[15px] leading-relaxed">{s.body}</p>}
                  {s.bullets && (
                    <ul className="space-y-2 mt-1">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-white/80 text-[15px]">
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "#0A6DD9" }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
            <div className="h-32" />
          </div>
        </div>
      </div>

      {/* Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl text-sm font-medium border shadow-2xl"
        style={{
          background: "rgba(10,109,217,0.95)",
          borderColor: "rgba(255,255,255,0.15)",
          fontFamily: "Sora, system-ui",
        }}
      >
        1.004+ protocolos brasileiros, contexto SUS
      </motion.div>
    </BoothLayout>
  );
}
