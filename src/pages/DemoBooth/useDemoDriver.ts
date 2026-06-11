import { useCallback, useEffect, useRef, useState } from "react";

export interface Scene {
  id: string;
  label: string;
  durationMs: number;
  /** Cartão de impacto (fundo navy). */
  impact?: boolean;
}

// Trailer ~64.5s, 12 cenas.
export const SCENES: Scene[] = [
  { id: "cold-open",      label: "Abertura",        durationMs: 4000 },
  { id: "card-wifi",      label: "Cartão",          durationMs: 2000, impact: true },
  { id: "red-room",       label: "Sala Vermelha",   durationMs: 7000 },
  { id: "card-plantao",   label: "Cartão",          durationMs: 1500, impact: true },
  { id: "search",         label: "Busca + Protocolo", durationMs: 6000 },
  { id: "meds",           label: "Medicamentos",    durationMs: 6000 },
  { id: "calc",           label: "Calculadora",     durationMs: 4000 },
  { id: "offline",        label: "Offline ★",       durationMs: 8000 },
  { id: "clara",          label: "Dra. Clara",      durationMs: 7000 },
  { id: "duty-epidemic",  label: "Plantão · Vigilância", durationMs: 7000 },
  { id: "numbers",        label: "Números",         durationMs: 4000, impact: true },
  { id: "closing",        label: "Fechamento",      durationMs: 8000 },
];

// Ring buffer de logs locais — inspecionável via window.__demoBoothLog
type LogEntry = { t: string; level: "info" | "warn" | "error"; msg: string; data?: unknown };
const MAX_LOGS = 200;
function pushLog(entry: LogEntry) {
  try {
    const w = window as unknown as { __demoBoothLog?: LogEntry[] };
    if (!w.__demoBoothLog) w.__demoBoothLog = [];
    w.__demoBoothLog.push(entry);
    if (w.__demoBoothLog.length > MAX_LOGS) w.__demoBoothLog.shift();
    const tag = "[demo-booth]";
    if (entry.level === "error") console.error(tag, entry.msg, entry.data ?? "");
    else if (entry.level === "warn") console.warn(tag, entry.msg, entry.data ?? "");
    else console.info(tag, entry.msg, entry.data ?? "");
  } catch {
    /* noop */
  }
}

export interface DriverOptions {
  manual?: boolean;
}

export function useDemoDriver(running: boolean, options: DriverOptions = {}) {
  const { manual = false } = options;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(manual);
  const startRef = useRef(performance.now());
  const [progress, setProgress] = useState(0);
  const loopCountRef = useRef(0);

  const next = useCallback(() => {
    setIndex((i) => {
      const ni = (i + 1) % SCENES.length;
      if (ni === 0) loopCountRef.current += 1;
      pushLog({ t: new Date().toISOString(), level: "info", msg: `→ ${SCENES[i].id} → ${SCENES[ni].id}`, data: { loop: loopCountRef.current } });
      return ni;
    });
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => {
      const ni = (i - 1 + SCENES.length) % SCENES.length;
      pushLog({ t: new Date().toISOString(), level: "info", msg: `← ${SCENES[i].id} → ${SCENES[ni].id}` });
      return ni;
    });
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(() => {
      const ni = ((i % SCENES.length) + SCENES.length) % SCENES.length;
      pushLog({ t: new Date().toISOString(), level: "info", msg: `→ goTo: ${SCENES[ni].id}`, data: { index: ni } });
      return ni;
    });
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!running || paused) return;
    let raf = 0;
    let lastTick = performance.now();
    const tick = (t: number) => {
      try {
        const dur = SCENES[index].durationMs;
        const dt = t - lastTick;
        lastTick = t;
        const elapsed = t - startRef.current;
        setProgress(Math.min(1, elapsed / dur));
        if (dt > 1500) {
          pushLog({ t: new Date().toISOString(), level: "warn", msg: `frame stall on ${SCENES[index].id}`, data: { dt: Math.round(dt) } });
        }
        if (elapsed >= dur) next();
        else raf = requestAnimationFrame(tick);
      } catch (err) {
        pushLog({ t: new Date().toISOString(), level: "error", msg: `tick error on ${SCENES[index]?.id ?? "?"}`, data: err instanceof Error ? err.message : String(err) });
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, running, paused, next]);

  useEffect(() => {
    startRef.current = performance.now();
    pushLog({ t: new Date().toISOString(), level: "info", msg: `▶ ${SCENES[index].id} (${SCENES[index].durationMs}ms)`, data: { index, loop: loopCountRef.current, manual, paused } });
  }, [index, manual, paused]);

  return { index, scene: SCENES[index], progress, paused, setPaused, next, prev, goTo, manual, loopCount: loopCountRef.current };
}
