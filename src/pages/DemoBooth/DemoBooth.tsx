import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { SCENES, useDemoDriver, Scene } from "./useDemoDriver";
import { BRAND } from "./mock-data";
import PulsoLogo from "@/components/PulsoLogo";

import SceneColdOpen from "./scenes/SceneColdOpen";
import SceneRedRoom from "./scenes/SceneRedRoom";
import SceneSearchProtocol from "./scenes/SceneSearchProtocol";
import SceneMeds from "./scenes/SceneMeds";
import SceneCalc from "./scenes/SceneCalc";
import SceneOffline from "./scenes/SceneOffline";
import SceneClara from "./scenes/SceneClara";
import SceneDutyEpidemic from "./scenes/SceneDutyEpidemic";
import SceneNumbers from "./scenes/SceneNumbers";
import SceneClosing from "./scenes/SceneClosing";
import ImpactCard from "./scenes/ImpactCard";

function renderScene(scene: Scene) {
  switch (scene.kind) {
    case "cold-open":       return <SceneColdOpen />;
    case "impact":          return <ImpactCard kicker={scene.impact?.kicker}>{scene.impact?.text}</ImpactCard>;
    case "red-room":        return <SceneRedRoom />;
    case "search-protocol": return <SceneSearchProtocol />;
    case "meds":            return <SceneMeds />;
    case "calc":            return <SceneCalc />;
    case "offline":         return <SceneOffline />;
    case "clara":           return <SceneClara />;
    case "duty-epidemic":   return <SceneDutyEpidemic />;
    case "numbers":         return <SceneNumbers />;
    case "closing":         return <SceneClosing />;
    default: return null;
  }
}

export default function DemoBooth() {
  const [searchParams] = useSearchParams();
  const manual = useMemo(
    () => searchParams.get("manual") === "1" || searchParams.get("mode") === "manual",
    [searchParams],
  );
  const [started, setStarted] = useState(manual);
  const driver = useDemoDriver(started, { manual });

  useEffect(() => {
    document.title = "PULSO · Demonstração";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !manual) setStarted(false);
      if (e.key === " " && started) { e.preventDefault(); driver.setPaused((p) => !p); }
      if (manual && e.key === "ArrowRight") driver.next();
      if (manual && e.key === "ArrowLeft") driver.prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, driver, manual]);

  const goFullscreen = async () => {
    try { if (!document.fullscreenElement) await document.documentElement.requestFullscreen(); } catch { /* noop */ }
  };

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{ background: BRAND.navyDeep, color: BRAND.text }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(10,109,217,0.28), transparent 60%)" }} />
        <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "linear-gradient(rgba(91,168,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,168,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="relative z-10 text-center max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <PulsoLogo size={60} forceVariant="dark" priority />
            <div className="text-5xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui", textShadow: `0 0 30px ${BRAND.primary}80` }}>PULSO</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "Sora, system-ui" }}>
            A plataforma clínica que não para.
          </h1>
          <p className="mb-10 text-lg" style={{ color: BRAND.textMuted }}>
            Demonstração ~65s · loop infinito · ESC para sair · espaço pausa.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => { setStarted(true); goFullscreen(); }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] text-white"
              style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`, fontFamily: "Sora, system-ui", boxShadow: `0 20px 50px -10px ${BRAND.primary}90, 0 0 0 1px ${BRAND.primaryGlow}50` }}
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Iniciar
            </button>
            <button onClick={goFullscreen} className="inline-flex items-center gap-2 px-4 py-4 rounded-2xl border" style={{ borderColor: BRAND.borderStrong, color: BRAND.textMuted, background: "rgba(15,27,48,0.5)" }} title="Tela cheia">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <footer className="absolute bottom-0 inset-x-0 text-center text-[11px] py-3 border-t" style={{ color: BRAND.textMuted, borderColor: BRAND.border, background: "rgba(5,11,26,0.8)" }}>
          Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
        </footer>
      </div>
    );
  }

  const s = driver.scene;
  // Toda a demo agora é dark; mantemos a flag por compat com a barra de progresso/rodapé.
  const isDarkScene = true;

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: BRAND.bgDark, color: BRAND.text }}>
      {/* progress bar */}
      <div className="absolute top-0 inset-x-0 z-50 px-4 pt-3 pointer-events-none">
        <div className="flex gap-1.5 pointer-events-auto">
          {SCENES.map((sc, i) => (
            <button
              key={sc.id}
              onClick={() => driver.goTo(i)}
              className="flex-1 h-1 rounded-full overflow-hidden relative"
              style={{ background: isDarkScene ? "rgba(255,255,255,0.18)" : "rgba(15,23,42,0.18)" }}
              title={sc.label}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ background: isDarkScene ? "#5BA8FF" : BRAND.primary }}
                animate={{ width: i < driver.index ? "100%" : i === driver.index ? `${driver.progress * 100}%` : "0%" }}
                transition={{ duration: 0.2 }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        {manual && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase border backdrop-blur" style={{ borderColor: BRAND.border, background: "rgba(255,255,255,0.85)", color: BRAND.text }}>
            Manual · {driver.index + 1}/{SCENES.length}
          </span>
        )}
        {manual && (
          <button onClick={() => driver.prev()} className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur" style={{ background: "rgba(255,255,255,0.9)", border: `1px solid ${BRAND.border}` }} title="Anterior (←)">
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        <button onClick={() => driver.setPaused((p) => !p)} className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur" style={{ background: "rgba(255,255,255,0.9)", border: `1px solid ${BRAND.border}` }} title={driver.paused ? "Reproduzir (espaço)" : "Pausar (espaço)"}>
          {driver.paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
        {manual && (
          <button onClick={() => driver.next()} className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur" style={{ background: "rgba(255,255,255,0.9)", border: `1px solid ${BRAND.border}` }} title="Próxima (→)">
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
        {!manual && (
          <button onClick={() => setStarted(false)} className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur" style={{ background: "rgba(255,255,255,0.9)", border: `1px solid ${BRAND.border}` }} title="Sair (ESC)">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {renderScene(s)}
        </motion.div>
      </AnimatePresence>

      <footer
        className="absolute bottom-0 inset-x-0 z-40 text-center text-[10px] py-1.5 backdrop-blur"
        style={{
          color: isDarkScene ? "rgba(255,255,255,0.65)" : BRAND.textMuted,
          background: isDarkScene ? "rgba(5,11,26,0.35)" : "rgba(255,255,255,0.7)",
        }}
      >
        Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
      </footer>
    </div>
  );
}
