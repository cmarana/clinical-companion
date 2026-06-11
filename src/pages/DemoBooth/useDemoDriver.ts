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
      pushLog({
        t: new Date().toISOString(),
        level: "info",
        msg: `→ next: ${SCENES[i].id} → ${SCENES[ni].id}`,
        data: { loop: loopCountRef.current },
      });
      return ni;
    });
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => {
      const ni = (i - 1 + SCENES.length) % SCENES.length;
      pushLog({
        t: new Date().toISOString(),
        level: "info",
        msg: `← prev: ${SCENES[i].id} → ${SCENES[ni].id}`,
      });
      return ni;
    });
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(() => {
      const ni = i % SCENES.length;
      pushLog({
        t: new Date().toISOString(),
        level: "info",
        msg: `→ goTo: ${SCENES[ni].id}`,
        data: { index: ni },
      });
      return ni;
    });
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!running || paused) return;
    let raf = 0;
    let lastTick = performance.now();
    let stuckTicks = 0;
    const tick = (t: number) => {
      try {
        const dur = SCENES[index].durationMs;
        const dt = t - lastTick;
        lastTick = t;
        const elapsed = t - startRef.current;
        setProgress(Math.min(1, elapsed / dur));
        // Detect frame-rate stalls (raf gap > 1.5s)
        if (dt > 1500) {
          stuckTicks += 1;
          pushLog({
            t: new Date().toISOString(),
            level: "warn",
            msg: `frame stall on scene ${SCENES[index].id}`,
            data: { dt: Math.round(dt), stuckTicks },
          });
        }
        if (elapsed >= dur) {
          next();
        } else {
          raf = requestAnimationFrame(tick);
        }
      } catch (err) {
        pushLog({
          t: new Date().toISOString(),
          level: "error",
          msg: `driver tick error on scene ${SCENES[index]?.id ?? "?"}`,
          data: err instanceof Error ? err.message : String(err),
        });
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [index, running, paused, next]);

  // log scene change
  useEffect(() => {
    startRef.current = performance.now();
    pushLog({
      t: new Date().toISOString(),
      level: "info",
      msg: `▶ scene ${SCENES[index].id} (${SCENES[index].durationMs}ms)`,
      data: { index, loop: loopCountRef.current, manual, paused },
    });
  }, [index, manual, paused]);

  return {
    index,
    scene: SCENES[index],
    progress,
    paused,
    setPaused,
    next,
    prev,
    goTo,
    manual,
    loopCount: loopCountRef.current,
  };
}
