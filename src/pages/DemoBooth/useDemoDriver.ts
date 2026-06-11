import { useCallback, useEffect, useRef, useState } from "react";

export interface Scene {
  id: string;
  label: string;
  durationMs: number;
}

export const SCENES: Scene[] = [
  { id: "intro", label: "Abertura", durationMs: 5000 },
  { id: "search", label: "Busca", durationMs: 12000 },
  { id: "protocol", label: "Protocolo", durationMs: 15000 },
  { id: "calculator", label: "Calculadora", durationMs: 10000 },
  { id: "clara", label: "Dra. Clara", durationMs: 15000 },
  { id: "epidemic", label: "Vigilância", durationMs: 12000 },
  { id: "closing", label: "Fechamento", durationMs: 8000 },
];

export function useDemoDriver(running: boolean) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startRef = useRef(performance.now());
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SCENES.length);
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(i % SCENES.length);
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!running || paused) return;
    let raf = 0;
    let lastTick = performance.now();
    const tick = (t: number) => {
      const dur = SCENES[index].durationMs;
      const dt = t - lastTick;
      lastTick = t;
      startRef.current += 0; // keep
      const elapsed = t - startRef.current;
      setProgress(Math.min(1, elapsed / dur));
      if (elapsed >= dur) {
        next();
      } else {
        raf = requestAnimationFrame(tick);
      }
      void dt;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, running, paused, next]);

  // when scene changes manually, reset start
  useEffect(() => {
    startRef.current = performance.now();
  }, [index]);

  return {
    index,
    scene: SCENES[index],
    progress,
    paused,
    setPaused,
    next,
    goTo,
  };
}
