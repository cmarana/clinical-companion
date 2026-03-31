import { safeLocalStorage } from "@/lib/safeStorage";

// SM-2 Spaced Repetition Algorithm
export interface CardProgress {
  cardId: string;
  ease: number; // easiness factor (≥ 1.3)
  interval: number; // days until next review
  repetitions: number;
  nextReview: number; // timestamp
  lastReview: number;
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
// 0 = blackout, 1 = wrong, 2 = hard, 3 = ok, 4 = good, 5 = easy

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
    // Failed — reset
    repetitions = 0;
    interval = 1;
  } else {
    // Success
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }
    repetitions += 1;
  }

  // Update ease factor
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
