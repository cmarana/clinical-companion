import { safeLocalStorage } from "@/lib/safeStorage";
import { supabase } from "@/integrations/supabase/client";

// SM-2 Spaced Repetition Algorithm
export interface CardProgress {
  cardId: string;
  ease: number;
  interval: number;
  repetitions: number;
  nextReview: number;
  lastReview: number;
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

const STORAGE_KEY = "flashcard-progress";

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
      // Push local to cloud
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
    // Merge: cloud wins if lastReview is newer
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
        };
      }
    }
    // Push local-only to cloud
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

export function reviewCard(cardId: string, rating: Rating): CardProgress {
  const all = getProgress();
  const prev = all[cardId] || {
    cardId,
    ease: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: 0,
    lastReview: 0,
  };

  let { ease, interval, repetitions } = prev;

  if (rating < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }
    repetitions += 1;
  }

  ease = ease + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  if (ease < 1.3) ease = 1.3;

  const now = Date.now();
  const updated: CardProgress = {
    cardId,
    ease,
    interval,
    repetitions,
    nextReview: now + interval * 24 * 60 * 60 * 1000,
    lastReview: now,
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

export function getStats(cardIds: string[]) {
  const progress = getProgress();
  const now = Date.now();
  let newCount = 0;
  let learning = 0;
  let review = 0;
  let mastered = 0;

  for (const id of cardIds) {
    const p = progress[id];
    if (!p) {
      newCount++;
    } else if (p.interval >= 21) {
      mastered++;
    } else if (p.nextReview <= now) {
      review++;
    } else {
      learning++;
    }
  }

  return { new: newCount, learning, review, mastered, total: cardIds.length };
}
