import { safeLocalStorage } from "@/lib/safeStorage";
import { supabase } from "@/integrations/supabase/client";

/**
 * SM-2 enhanced (PULSO):
 *  - Learning steps (graduação em minutos antes de virar review)
 *  - Lapses + leech detection (cards sempre errados sobem flag)
 *  - Easy bonus (rating 5 multiplica intervalo extra)
 *  - Fuzz no agendamento (±5% para evitar pilhas no mesmo dia)
 *  - Prioridade dinâmica (overdue ratio × dificuldade)
 *  - Backwards compatible com progresso salvo (campos novos opcionais)
 */
export interface CardProgress {
  cardId: string;
  ease: number;          // fator de facilidade (≥1.3)
  interval: number;      // intervalo em dias (após graduação)
  repetitions: number;   // acertos consecutivos
  nextReview: number;    // timestamp ms
  lastReview: number;    // timestamp ms
  lapses?: number;       // total de "errei" históricos
  leech?: boolean;       // true quando lapses ≥ LEECH_THRESHOLD
  step?: number;         // posição em LEARNING_STEPS (undefined = graduado)
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

const STORAGE_KEY = "flashcard-progress";

// Configuração SM-2 PULSO
const LEARNING_STEPS_MIN = [1, 10];   // minutos para sair da fase de aprendizado
const RELEARN_STEPS_MIN = [10];        // após lapso, rebaixa e re-aprende
const GRADUATING_INTERVAL = 1;         // dias após terminar steps (acerto normal)
const EASY_INTERVAL = 4;               // dias quando "Fácil" no card novo
const EASY_BONUS = 1.3;                // multiplicador extra em rating 5
const HARD_INTERVAL_MULT = 1.2;        // rating 3 não cresce tanto
const MIN_EASE = 1.3;
const MAX_EASE = 3.0;
const LEECH_THRESHOLD = 4;             // ≥4 lapsos = leech
const FUZZ_RATIO = 0.05;               // ±5% no intervalo final
const DAY_MS = 24 * 60 * 60 * 1000;
const MIN_MS = 60 * 1000;

export function getProgress(): Record<string, CardProgress> {
  try {
    return JSON.parse(safeLocalStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, CardProgress>) {
  safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

// Sync progress from cloud (call on login)
export async function syncProgressFromCloud(userId: string): Promise<Record<string, CardProgress>> {
  const local = getProgress();
  try {
    const { data } = await supabase
      .from("user_study_progress")
      .select("card_id, ease, interval, repetitions, next_review, last_review");
    if (!data || data.length === 0) {
      const entries = Object.values(local);
      if (entries.length > 0) {
        const rows = entries.map((p) => ({
          user_id: userId,
          card_id: p.cardId,
          ease: p.ease,
          interval: p.interval,
          repetitions: p.repetitions,
          next_review: p.nextReview,
          last_review: p.lastReview,
        }));
        await supabase.from("user_study_progress").upsert(rows, { onConflict: "user_id,card_id" });
      }
      return local;
    }
    const merged = { ...local };
    for (const r of data as any[]) {
      const existing = merged[r.card_id];
      if (!existing || r.last_review > existing.lastReview) {
        merged[r.card_id] = {
          cardId: r.card_id,
          ease: r.ease,
          interval: r.interval,
          repetitions: r.repetitions,
          nextReview: r.next_review,
          lastReview: r.last_review,
          lapses: existing?.lapses ?? 0,
          leech: existing?.leech ?? false,
          step: existing?.step,
        };
      }
    }
    const cloudIds = new Set((data as any[]).map((r: any) => r.card_id));
    const localOnly = Object.values(local).filter((p) => !cloudIds.has(p.cardId));
    if (localOnly.length > 0) {
      const rows = localOnly.map((p) => ({
        user_id: userId,
        card_id: p.cardId,
        ease: p.ease,
        interval: p.interval,
        repetitions: p.repetitions,
        next_review: p.nextReview,
        last_review: p.lastReview,
      }));
      await supabase.from("user_study_progress").upsert(rows, { onConflict: "user_id,card_id" });
    }
    saveProgress(merged);
    return merged;
  } catch {
    return local;
  }
}

function pushToCloud(cardId: string, progress: CardProgress) {
  supabase.auth.getUser().then(({ data }) => {
    if (!data.user) return;
    supabase.from("user_study_progress").upsert({
      user_id: data.user.id,
      card_id: cardId,
      ease: progress.ease,
      interval: progress.interval,
      repetitions: progress.repetitions,
      next_review: progress.nextReview,
      last_review: progress.lastReview,
    }, { onConflict: "user_id,card_id" }).then();
  });
}

function applyFuzz(intervalDays: number): number {
  if (intervalDays < 2) return intervalDays;
  const delta = intervalDays * FUZZ_RATIO;
  return intervalDays + (Math.random() * 2 - 1) * delta;
}

function clampEase(e: number): number {
  if (e < MIN_EASE) return MIN_EASE;
  if (e > MAX_EASE) return MAX_EASE;
  return e;
}

export function reviewCard(cardId: string, rating: Rating): CardProgress {
  const all = getProgress();
  const prev: CardProgress = all[cardId] || {
    cardId,
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: 0,
    lastReview: 0,
    lapses: 0,
    leech: false,
    step: 0, // novo card começa em aprendizado
  };

  let ease = prev.ease;
  let interval = prev.interval;
  let repetitions = prev.repetitions;
  let lapses = prev.lapses ?? 0;
  let step = prev.step;
  const inLearning = step !== undefined;

  const now = Date.now();
  let nextDelayMs = 0;

  if (rating < 3) {
    // ====== FALHA ======
    repetitions = 0;
    if (!inLearning) {
      // card já graduado virou lapso
      lapses += 1;
      ease = clampEase(ease - 0.2);
      step = 0; // entra em re-learning
      const steps = RELEARN_STEPS_MIN;
      nextDelayMs = steps[0] * MIN_MS;
      interval = Math.max(1, Math.round(interval * 0.5)); // novo intervalo base reduzido
    } else {
      // ainda aprendendo, reinicia steps
      step = 0;
      nextDelayMs = LEARNING_STEPS_MIN[0] * MIN_MS;
      interval = 0;
    }
  } else {
    // ====== ACERTO ======
    if (inLearning) {
      const steps = repetitions === 0 && (prev.lapses ?? 0) > 0 ? RELEARN_STEPS_MIN : LEARNING_STEPS_MIN;
      const nextStep = (step ?? 0) + 1;
      if (rating === 5) {
        // graduação imediata por "Fácil"
        step = undefined;
        repetitions = Math.max(repetitions, 1);
        interval = EASY_INTERVAL;
        nextDelayMs = applyFuzz(interval) * DAY_MS;
        ease = clampEase(ease + 0.15);
      } else if (nextStep >= steps.length) {
        // graduou
        step = undefined;
        repetitions = Math.max(repetitions, 1);
        interval = GRADUATING_INTERVAL;
        nextDelayMs = applyFuzz(interval) * DAY_MS;
      } else {
        // próximo passo da graduação (ainda em minutos)
        step = nextStep;
        nextDelayMs = steps[nextStep] * MIN_MS;
        interval = 0;
      }
    } else {
      // card já graduado em revisão normal
      repetitions += 1;
      let multiplier = ease;
      if (rating === 3) multiplier = HARD_INTERVAL_MULT;
      if (rating === 5) multiplier = ease * EASY_BONUS;
      const base = repetitions === 1 ? GRADUATING_INTERVAL : repetitions === 2 ? 6 : interval * multiplier;
      interval = Math.max(1, Math.round(base));
      nextDelayMs = applyFuzz(interval) * DAY_MS;

      // ajuste de ease (SM-2 clássico)
      ease = clampEase(ease + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02)));
    }
  }

  const leech = lapses >= LEECH_THRESHOLD;

  const updated: CardProgress = {
    cardId,
    ease,
    interval,
    repetitions,
    nextReview: now + nextDelayMs,
    lastReview: now,
    lapses,
    leech,
    step,
  };

  all[cardId] = updated;
  saveProgress(all);
  pushToCloud(cardId, updated);
  return updated;
}

export function getDueCards(cardIds: string[]): string[] {
  const progress = getProgress();
  const now = Date.now();
  return cardIds.filter((id) => {
    const p = progress[id];
    return !p || p.nextReview <= now;
  });
}

export function getNewCards(cardIds: string[]): string[] {
  const progress = getProgress();
  return cardIds.filter((id) => !progress[id]);
}

/**
 * Score de prioridade do card. Quanto maior, mais urgente.
 * Combina: atraso relativo (overdue ratio), dificuldade (1/ease) e flag leech.
 */
export function priorityScore(p: CardProgress | undefined, now = Date.now()): number {
  if (!p) return 0.5; // novos: prioridade média
  const intervalMs = Math.max(1, (p.interval || 1) * DAY_MS);
  const overdueMs = Math.max(0, now - p.nextReview);
  const overdueRatio = overdueMs / intervalMs; // 0 = no prazo, >1 = muito atrasado
  const difficulty = 1 / Math.max(MIN_EASE, p.ease);
  const lapsesBoost = Math.min(0.5, (p.lapses ?? 0) * 0.1);
  const leechBoost = p.leech ? 0.5 : 0;
  // Cards em learning step (minutos) entram com prioridade alta para fechar a sessão
  const learningBoost = p.step !== undefined ? 1.0 : 0;
  return overdueRatio + difficulty + lapsesBoost + leechBoost + learningBoost;
}

/**
 * Ordena IDs por prioridade decrescente (mais urgentes primeiro).
 * Mistura novos cards intercalados (1 novo a cada 4 revisões) para não cansar.
 */
export function getPrioritizedSession(cardIds: string[], limit = 20): string[] {
  const progress = getProgress();
  const now = Date.now();
  const due: { id: string; score: number }[] = [];
  const newC: string[] = [];

  for (const id of cardIds) {
    const p = progress[id];
    if (!p) {
      newC.push(id);
    } else if (p.nextReview <= now) {
      due.push({ id, score: priorityScore(p, now) });
    }
  }
  due.sort((a, b) => b.score - a.score);
  const sorted = due.map((d) => d.id);

  // Intercala 1 novo a cada 4 due
  const result: string[] = [];
  let dueIdx = 0;
  let newIdx = 0;
  while (result.length < limit && (dueIdx < sorted.length || newIdx < newC.length)) {
    if (dueIdx < sorted.length) {
      result.push(sorted[dueIdx++]);
    }
    if (result.length < limit && newIdx < newC.length && (result.length % 4 === 3 || dueIdx >= sorted.length)) {
      result.push(newC[newIdx++]);
    }
  }
  return result;
}

export function getStats(cardIds: string[]) {
  const progress = getProgress();
  const now = Date.now();
  let newCount = 0;
  let learning = 0;
  let review = 0;
  let mastered = 0;
  let leech = 0;
  let lapsesTotal = 0;

  for (const id of cardIds) {
    const p = progress[id];
    if (!p) {
      newCount++;
    } else {
      lapsesTotal += p.lapses ?? 0;
      if (p.leech) leech++;
      if (p.step !== undefined) {
        learning++;
      } else if (p.interval >= 21) {
        mastered++;
      } else if (p.nextReview <= now) {
        review++;
      } else {
        learning++;
      }
    }
  }

  return { new: newCount, learning, review, mastered, total: cardIds.length, leech, lapses: lapsesTotal };
}

/**
 * Cards com flag leech — alta prioridade para revisão extra.
 */
export function getLeechCards(cardIds: string[]): string[] {
  const progress = getProgress();
  return cardIds.filter((id) => progress[id]?.leech);
}

/**
 * Previsão de retenção aproximada (curva de esquecimento simplificada).
 * Útil para o dashboard e widgets.
 */
export function estimateRetention(cardIds: string[], now = Date.now()): number {
  const progress = getProgress();
  const reviewed = cardIds.map((id) => progress[id]).filter(Boolean) as CardProgress[];
  if (reviewed.length === 0) return 0;
  let sum = 0;
  for (const p of reviewed) {
    const elapsedDays = Math.max(0, (now - p.lastReview) / DAY_MS);
    const stability = Math.max(1, p.interval || 1);
    // R = exp(-elapsed / stability) — curva de esquecimento de Ebbinghaus simplificada
    sum += Math.exp(-elapsedDays / stability);
  }
  return sum / reviewed.length;
}
