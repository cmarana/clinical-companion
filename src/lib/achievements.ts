import { safeLocalStorage } from "@/lib/safeStorage";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
  category: "flashcard" | "quiz" | "streak" | "general";
  condition: (ctx: AchievementContext) => boolean;
}

export interface AchievementContext {
  flashcardsMastered: number;
  flashcardsReviewed: number;
  flashcardsTotal: number;
  quizTotal: number;
  quizCorrect: number;
  streakCurrent: number;
  streakBest: number;
  categoriesStarted: number;
  perfectQuizSessions: number;
}

export interface UnlockedAchievement {
  id: string;
  unlockedAt: number;
}

const STORAGE_KEY = "pulso-achievements";

export const achievements: Achievement[] = [
  // Flashcard achievements
  { id: "first-card", title: "Primeira Revisão", description: "Revisou seu primeiro flashcard", icon: "🎯", category: "flashcard", condition: (c) => c.flashcardsReviewed >= 1 },
  { id: "10-cards", title: "Aquecendo", description: "Revisou 10 flashcards", icon: "📚", category: "flashcard", condition: (c) => c.flashcardsReviewed >= 10 },
  { id: "50-cards", title: "Estudante Dedicado", description: "Revisou 50 flashcards", icon: "💪", category: "flashcard", condition: (c) => c.flashcardsReviewed >= 50 },
  { id: "100-cards", title: "Centurião", description: "Revisou 100 flashcards", icon: "🏅", category: "flashcard", condition: (c) => c.flashcardsReviewed >= 100 },
  { id: "5-mastered", title: "Primeiros Domínios", description: "Dominou 5 flashcards", icon: "⭐", category: "flashcard", condition: (c) => c.flashcardsMastered >= 5 },
  { id: "25-mastered", title: "Especialista Iniciante", description: "Dominou 25 flashcards", icon: "🌟", category: "flashcard", condition: (c) => c.flashcardsMastered >= 25 },
  { id: "50-mastered", title: "Mestre do Conhecimento", description: "Dominou 50 flashcards", icon: "👑", category: "flashcard", condition: (c) => c.flashcardsMastered >= 50 },

  // Quiz achievements
  { id: "first-quiz", title: "Primeira Questão", description: "Respondeu sua primeira questão de residência", icon: "📝", category: "quiz", condition: (c) => c.quizTotal >= 1 },
  { id: "10-quiz", title: "Treinando para Prova", description: "Respondeu 10 questões", icon: "📋", category: "quiz", condition: (c) => c.quizTotal >= 10 },
  { id: "50-quiz", title: "Veterano de Simulados", description: "Respondeu 50 questões", icon: "🎓", category: "quiz", condition: (c) => c.quizTotal >= 50 },
  { id: "quiz-80pct", title: "Alta Performance", description: "Acertou 80%+ com 10+ questões", icon: "🏆", category: "quiz", condition: (c) => c.quizTotal >= 10 && (c.quizCorrect / c.quizTotal) >= 0.8 },
  { id: "perfect-quiz", title: "Gabaritou!", description: "Sessão com 100% de acerto", icon: "💎", category: "quiz", condition: (c) => c.perfectQuizSessions >= 1 },

  // Streak achievements
  { id: "streak-3", title: "Consistente", description: "3 dias seguidos de estudo", icon: "🔥", category: "streak", condition: (c) => c.streakCurrent >= 3 },
  { id: "streak-7", title: "Semana Completa", description: "7 dias seguidos de estudo", icon: "🔥🔥", category: "streak", condition: (c) => c.streakBest >= 7 },
  { id: "streak-14", title: "Duas Semanas Firmes", description: "14 dias seguidos de estudo", icon: "🔥🔥🔥", category: "streak", condition: (c) => c.streakBest >= 14 },
  { id: "streak-30", title: "Mês Inabalável", description: "30 dias seguidos de estudo", icon: "💫", category: "streak", condition: (c) => c.streakBest >= 30 },

  // General
  { id: "3-cats", title: "Multidisciplinar", description: "Estudou 3 especialidades diferentes", icon: "🌈", category: "general", condition: (c) => c.categoriesStarted >= 3 },
  { id: "5-cats", title: "Clínico Completo", description: "Estudou 5 especialidades diferentes", icon: "🏥", category: "general", condition: (c) => c.categoriesStarted >= 5 },
  { id: "10-cats", title: "Generalista de Ouro", description: "Estudou 10+ especialidades", icon: "🥇", category: "general", condition: (c) => c.categoriesStarted >= 10 },
];

export function getUnlockedAchievements(): UnlockedAchievement[] {
  try {
    return JSON.parse(safeLocalStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function checkAndUnlock(ctx: AchievementContext): Achievement[] {
  const unlocked = getUnlockedAchievements();
  const unlockedIds = new Set(unlocked.map((u) => u.id));
  const newlyUnlocked: Achievement[] = [];

  for (const a of achievements) {
    if (!unlockedIds.has(a.id) && a.condition(ctx)) {
      unlocked.push({ id: a.id, unlockedAt: Date.now() });
      newlyUnlocked.push(a);
    }
  }

  if (newlyUnlocked.length > 0) {
    safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
  }

  return newlyUnlocked;
}

export function getAchievementProgress(ctx: AchievementContext) {
  const unlocked = getUnlockedAchievements();
  return {
    total: achievements.length,
    unlocked: unlocked.length,
    percentage: Math.round((unlocked.length / achievements.length) * 100),
  };
}
