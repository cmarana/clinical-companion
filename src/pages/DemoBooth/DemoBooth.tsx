import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { SCENES, useDemoDriver } from "./useDemoDriver";
import SceneIntro from "./scenes/SceneIntro";
import SceneSearch from "./scenes/SceneSearch";
import SceneProtocol from "./scenes/SceneProtocol";
import SceneCalculator from "./scenes/SceneCalculator";
import SceneClara from "./scenes/SceneClara";
import SceneEpidemic from "./scenes/SceneEpidemic";
import SceneClosing from "./scenes/SceneClosing";

const sceneComponents = [
  SceneIntro,
  SceneSearch,
  SceneProtocol,
  SceneCalculator,
  SceneClara,
  SceneEpidemic,
  SceneClosing,
];

export default function DemoBooth() {
  const [searchParams] = useSearchParams();
  const manual = useMemo(
    () => searchParams.get("manual") === "1" || searchParams.get("mode") === "manual",
    [searchParams],
  );
  const [started, setStarted] = useState(manual); // modo manual entra direto
  const driver = useDemoDriver(started, { manual });

  useEffect(() => {
    document.title = "PULSO · Demonstração ao vivo";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !manual) setStarted(false);
      if (e.key === " " && started) {
        e.preventDefault();
        driver.setPaused((p) => !p);
      }
      if (manual && e.key === "ArrowRight") driver.next();
      if (manual && e.key === "ArrowLeft") driver.prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, driver]);

  const goFullscreen = async () => {
    try {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    } catch {
      /* noop */
    }
  };

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-white relative overflow-hidden" style={{ background: "#050B1A" }}>
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(10,109,217,0.35), transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold"
              style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui" }}
            >
              P
            </div>
            <div className="text-5xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui" }}>
              PULSO
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "Sora, system-ui" }}>
            Veja o PULSO em ação
          </h1>
          <p className="text-white/70 mb-10 text-lg">
            Tour automático de 75 segundos pelos principais recursos da plataforma.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setStarted(true);
                goFullscreen();
              }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_40px_-10px_rgba(10,109,217,0.6)]"
              style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui" }}
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Ver o PULSO em ação
            </button>
            <button
              onClick={goFullscreen}
              className="inline-flex items-center gap-2 px-4 py-4 rounded-2xl border border-white/15 text-white/80 hover:bg-white/5"
              title="Tela cheia"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-white/40 mt-6">Modo kiosk · Roda em loop · ESC para sair</p>
        </div>

        <footer className="absolute bottom-0 inset-x-0 text-center text-[11px] text-white/45 py-3 border-t border-white/5">
          Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
        </footer>
      </div>
    );
  }

  const SceneComponent = sceneComponents[driver.index];

  return (
    <div className="fixed inset-0 overflow-hidden text-white" style={{ background: "#050B1A" }}>
      {/* progress bar */}
      <div className="absolute top-0 inset-x-0 z-50 px-4 pt-3">
        <div className="flex gap-1.5">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => driver.goTo(i)}
              className="flex-1 h-1 rounded-full overflow-hidden relative"
              style={{ background: "rgba(255,255,255,0.12)" }}
              title={s.label}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ background: "#0A6DD9" }}
                animate={{
                  width: i < driver.index ? "100%" : i === driver.index ? `${driver.progress * 100}%` : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => driver.setPaused((p) => !p)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/15 backdrop-blur"
        >
          {driver.paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setStarted(false)}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/15 backdrop-blur"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={driver.scene.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <SceneComponent />
        </motion.div>
      </AnimatePresence>

      <footer className="absolute bottom-0 inset-x-0 z-40 text-center text-[10px] text-white/40 py-2 bg-[#050B1A]/70 backdrop-blur">
        Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
      </footer>
    </div>
  );
}
