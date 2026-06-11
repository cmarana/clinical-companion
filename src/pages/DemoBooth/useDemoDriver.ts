import { useCallback, useEffect, useRef, useState } from "react";

export interface Scene {
  /** Rota real do app a carregar no iframe (ou "closing" para a tela final com QR). */
  route: string;
  /** Identificador estável da cena. */
  id: string;
  /** Rótulo curto exibido no progress dots. */
  label: string;
  /** "Manchete" curta — chama atenção (1 linha). */
  headline: string;
  /** Subtítulo de 1 frase contextualizando. */
  sub: string;
  /** Duração em ms. */
  durationMs: number;
  /** Cena final com QR — sem iframe. */
  closing?: boolean;
}

// Tour real do app — usa as rotas que existem no App.tsx.
// Frases curtas, problema → solução, foco em investidor + clínico.
export const SCENES: Scene[] = [
  {
    id: "home", route: "/home", label: "Home",
    headline: "Plantão é segundo, não clique.",
    sub: "Hospitais ainda rodam em planilha, PDF e grupo de WhatsApp. O PULSO entrega a conduta em 2 toques.",
    durationMs: 10000,
  },
  {
    id: "emergency", route: "/emergency", label: "Emergência",
    headline: "Modo Emergência — beira do leito.",
    sub: "Protocolos por sintoma. Dose, diluição e tempo, prontos antes do paciente entrar na sala.",
    durationMs: 10000,
  },
  {
    id: "specialties", route: "/specialties", label: "Especialidades",
    headline: "20 especialidades, um único app.",
    sub: "Toda a medicina hospitalar — clínica, cirurgia, pediatria, obstetrícia, terapia intensiva.",
    durationMs: 9000,
  },
  {
    id: "tools", route: "/tools", label: "Ferramentas",
    headline: "53 calculadoras e scores validados.",
    sub: "qSOFA, NIHSS, CHA₂DS₂-VASc, Wells, APACHE — tudo em PT-BR, calibrado para o SUS.",
    durationMs: 9000,
  },
  {
    id: "ped-doses", route: "/pediatric-doses", label: "Doses Ped.",
    headline: "Dose pediátrica sem planilha, sem erro.",
    sub: "Calculada pelo peso, trava no máximo do adulto. Zero conta de cabeça em criança grave.",
    durationMs: 9000,
  },
  {
    id: "bulario", route: "/bulario", label: "Bulário",
    headline: "2.000 medicamentos · diluição · alerta.",
    sub: "Compatibilidade Y-site, interações graves e ajuste renal, em um só toque.",
    durationMs: 9000,
  },
  {
    id: "epidemic", route: "/epidemic-map", label: "Vigilância",
    headline: "Surto detectado antes do boletim.",
    sub: "Mapa epidemiológico em tempo real — IA cruza alertas sanitários por município.",
    durationMs: 9000,
  },
  {
    id: "atlas", route: "/clinical-atlas", label: "IA · Atlas",
    headline: "IA clínica com visão.",
    sub: "Envie ECG, raio-X, TC ou USG. Receba descrição estruturada e diferenciais — em segundos.",
    durationMs: 10000,
  },
  {
    id: "flashcards", route: "/flashcards", label: "Flashcards",
    headline: "Fixa o que salva vida.",
    sub: "Repetição espaçada (SM-2) sobre 1.004 protocolos. Estudo que acompanha o plantão.",
    durationMs: 9000,
  },
  {
    id: "closing", route: "closing", label: "Web Summit",
    headline: "Experimente agora.",
    sub: "Acesso de 7 dias · cortesia Web Summit Rio 2026.",
    durationMs: 12000, closing: true,
  },
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
