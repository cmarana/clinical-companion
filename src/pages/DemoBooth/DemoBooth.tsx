import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { SCENES, useDemoDriver } from "./useDemoDriver";
import { BRAND } from "./mock-data";
import PulsoLogo from "@/components/PulsoLogo";
import { enterDemoMode, exitDemoMode } from "@/lib/demoMode";
import SceneClosing from "./scenes/SceneClosing";

export default function DemoBooth() {
  const [searchParams] = useSearchParams();
  const manual = useMemo(
    () => searchParams.get("manual") === "1" || searchParams.get("mode") === "manual",
    [searchParams],
  );
  const [started, setStarted] = useState(manual);
  const driver = useDemoDriver(started, { manual });
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Ativa demo mode no sessionStorage da aba — o app real renderiza sem login.
  useEffect(() => {
    if (!started) return;
    enterDemoMode();
    return () => { exitDemoMode(); };
  }, [started]);

  useEffect(() => {
    document.title = "PULSO · Demonstração ao vivo";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !manual) setStarted(false);
      if (e.key === " " && started) { e.preventDefault(); driver.setPaused((p) => !p); }
      if (manual && e.key === "ArrowRight") driver.next();
      if (manual && e.key === "ArrowLeft") driver.prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, driver, manual]);

  // Quando a cena muda, navega o iframe para a rota real.
  useEffect(() => {
    if (!started) return;
    const scene = driver.scene;
    if (scene.closing) return;
    const url = `${scene.route}?demo=1`;
    try {
      const ifr = iframeRef.current;
      if (ifr) {
        // Substitui sem empilhar histórico
        ifr.src = url;
      }
    } catch { /* noop */ }
  }, [driver.scene, started]);

  const goFullscreen = async () => {
    try { if (!document.fullscreenElement) await document.documentElement.requestFullscreen(); } catch { /* noop */ }
  };

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden" style={{ background: BRAND.bgLight, color: BRAND.text }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 25%, rgba(10,109,217,0.18), transparent 60%)" }} />
        <div className="relative z-10 text-center max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <PulsoLogo size={60} forceVariant="light" priority />
            <div className="text-5xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui" }}>PULSO</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "Sora, system-ui" }}>
            O app de verdade, ao vivo.
          </h1>
          <p className="mb-10 text-lg" style={{ color: BRAND.textMuted }}>
            Tour automático pelas telas reais do PULSO · ~95s em loop · ESC para sair.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => { setStarted(true); goFullscreen(); }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] text-white"
              style={{ background: BRAND.primary, fontFamily: "Sora, system-ui", boxShadow: "0 14px 40px -10px rgba(10,109,217,0.55)" }}
            >
              <Play className="w-5 h-5" fill="currentColor" />
              Iniciar tour
            </button>
            <button onClick={goFullscreen} className="inline-flex items-center gap-2 px-4 py-4 rounded-2xl border" style={{ borderColor: BRAND.border, color: BRAND.textMuted }} title="Tela cheia">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <footer className="absolute bottom-0 inset-x-0 text-center text-[11px] py-3 border-t" style={{ color: BRAND.textMuted, borderColor: BRAND.border, background: "white" }}>
          Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
        </footer>
      </div>
    );
  }

  const s = driver.scene;

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ background: BRAND.bgLight, color: BRAND.text }}>
      {/* progress bar */}
      <div className="absolute top-0 inset-x-0 z-50 px-4 pt-3 pointer-events-none">
        <div className="flex gap-1.5 pointer-events-auto">
          {SCENES.map((sc, i) => (
            <button
              key={sc.id}
              onClick={() => driver.goTo(i)}
              className="flex-1 h-1 rounded-full overflow-hidden relative"
              style={{ background: "rgba(15,23,42,0.18)" }}
              title={sc.label}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ background: BRAND.primary }}
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

      {/* Iframe do app real (oculto na cena de fechamento) */}
      {!s.closing && (
        <iframe
          ref={iframeRef}
          title="PULSO app real"
          className="absolute inset-0 w-full h-full border-0"
          style={{ background: "white" }}
          // Bloqueia clique de visitante — é tour assistido
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      )}

      {/* Camada-fantasma — visualmente sutil, impede clique no iframe durante o tour */}
      {!s.closing && (
        <div aria-hidden className="absolute inset-0 z-30" style={{ background: "transparent" }} />
      )}

      {/* Legenda chamativa sobreposta */}
      <AnimatePresence mode="wait">
        {!s.closing && (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 bottom-10 z-40 flex justify-center px-4 pointer-events-none"
          >
            <div
              className="max-w-3xl w-full rounded-2xl px-6 py-5 backdrop-blur-md"
              style={{
                background: "rgba(5, 11, 26, 0.88)",
                boxShadow: "0 30px 80px -20px rgba(5,11,26,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <PulsoLogo size={20} forceVariant="dark" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold" style={{ color: "#5BA8FF" }}>
                  {s.label}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white" style={{ fontFamily: "Sora, system-ui" }}>
                {s.headline}
              </h2>
              <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, system-ui" }}>
                {s.sub}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cena de fechamento (QR + acesso 7 dias) */}
      <AnimatePresence>
        {s.closing && (
          <motion.div
            key="closing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20"
          >
            <SceneClosing />
          </motion.div>
        )}
      </AnimatePresence>

      <footer
        className="absolute bottom-0 inset-x-0 z-40 text-center text-[10px] py-2 backdrop-blur"
        style={{ color: "rgba(255,255,255,0.7)", background: "rgba(5,11,26,0.55)" }}
      >
        Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
      </footer>
    </div>
  );
}
