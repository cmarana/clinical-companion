import { useCallback, useEffect, useRef, useState } from "react";

export type SceneKind =
  | "cold-open"
  | "impact"
  | "red-room"
  | "search-protocol"
  | "meds"
  | "calc"
  | "offline"
  | "clara"
  | "duty-epidemic"
  | "numbers"
  | "closing";

export interface Scene {
  id: string;
  kind: SceneKind;
  label: string;
  /** Texto para cenas "impact" (story beat em tela cheia). */
  impact?: { kicker?: string; text: string };
  durationMs: number;
}

// Narrativa para investidor — ~65s, ritmo de trailer, com beats de "porquê" entre as telas reais.
export const SCENES: Scene[] = [
  { id: "cold",       kind: "cold-open",       label: "PULSO",            durationMs: 4500 },
  { id: "beat-1",     kind: "impact",          label: "O problema",       impact: { kicker: "3 da manhã · plantão lotado", text: "A internet do hospital cai. A decisão clínica não pode." }, durationMs: 4500 },
  { id: "beat-2",     kind: "impact",          label: "A origem",         impact: { kicker: "Feito por médicos, para médicos", text: "Nasceu na beira do leito — onde planilha, PDF e WhatsApp custam vidas." }, durationMs: 4500 },
  { id: "red-room",   kind: "red-room",        label: "Sala Vermelha",    durationMs: 6500 },
  { id: "search",     kind: "search-protocol", label: "Busca · Sepse",    durationMs: 6500 },
  { id: "meds",       kind: "meds",            label: "Bulário · IV",     durationMs: 6500 },
  { id: "calc",       kind: "calc",            label: "Calculadora",      durationMs: 5500 },
  { id: "beat-3",     kind: "impact",          label: "Diferencial",      impact: { kicker: "O que ninguém mais entrega", text: "100% offline-first. Funciona onde o sinal não chega." }, durationMs: 4000 },
  { id: "offline",    kind: "offline",         label: "Offline real",     durationMs: 6500 },
  { id: "clara",      kind: "clara",           label: "Dra. Clara · IA",  durationMs: 7000 },
  { id: "duty-epi",   kind: "duty-epidemic",   label: "Plantão & Surto",  durationMs: 6500 },
  { id: "numbers",    kind: "numbers",         label: "Os números",       durationMs: 6000 },
  { id: "closing",    kind: "closing",         label: "Web Summit",       durationMs: 9000 },
];

// Ring buffer de logs — inspecionável via window.__demoBoothLog
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
  } catch { /* noop */ }
}

export interface DriverOptions { manual?: boolean }

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
