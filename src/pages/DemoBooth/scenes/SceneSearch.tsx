import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import BoothLayout from "../BoothLayout";
import GhostCursor from "../GhostCursor";
import { useTypewriter } from "../Typewriter";
import { searchResults } from "../mock-data";

export default function SceneSearch() {
  const typed = useTypewriter("sepse", true, 110);
  const showResults = typed.length >= 3;
  const [highlight, setHighlight] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHighlight(true), 4200);
    const t2 = setTimeout(() => setClick(true), 5400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <BoothLayout title="Busca inteligente">
      {/* Cmd+K modal */}
      <div className="absolute inset-0 flex items-start justify-center pt-16 px-6 backdrop-blur-sm bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden"
          style={{ background: "#0A1224", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 border-b"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <Search className="w-4 h-4 text-white/50" />
            <span className="text-white text-lg flex-1" style={{ fontFamily: "Inter, system-ui" }}>
              {typed}
              <span className="inline-block w-[2px] h-5 bg-white/70 align-middle ml-0.5 animate-pulse" />
            </span>
            <kbd className="text-[11px] text-white/40 px-1.5 py-0.5 rounded border border-white/15">ESC</kbd>
          </div>

          {showResults && (
            <div className="py-2 max-h-[55vh] overflow-hidden">
              {searchResults.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="relative px-4 py-3 flex items-center gap-3"
                  style={
                    i === 0 && highlight
                      ? {
                          background: "rgba(10,109,217,0.18)",
                          boxShadow: "inset 2px 0 0 #0A6DD9",
                        }
                      : undefined
                  }
                >
                  <div
                    className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold"
                    style={{ background: "rgba(10,109,217,0.2)", color: "#7CB7F2" }}
                  >
                    {r.badge}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-medium truncate" style={{ fontFamily: "Sora, system-ui" }}>
                      {r.title}
                    </div>
                    <div className="text-white/55 text-xs truncate">{r.subtitle}</div>
                  </div>
                  {i === 0 && highlight && (
                    <motion.div
                      className="absolute inset-0 rounded pointer-events-none"
                      animate={{ boxShadow: ["0 0 0 0 rgba(10,109,217,0.5)", "0 0 0 8px rgba(10,109,217,0)"] }}
                      transition={{ repeat: Infinity, duration: 1.4 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <GhostCursor x={highlight ? 540 : 460} y={highlight ? 220 : 120} clicking={click} />
    </BoothLayout>
  );
}
