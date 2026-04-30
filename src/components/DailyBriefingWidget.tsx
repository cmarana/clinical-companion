import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain, Flame, Target, ChevronRight, Sparkles, BookOpen,
  Clock, Calendar, Crown, TrendingUp, Lock,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRecentHistory } from "@/hooks/useRecentHistory";
import { flashcards } from "@/data/flashcardsData";
import { getStats, getDueCards } from "@/lib/spacedRepetition";
import { hapticLight } from "@/lib/haptics";
import { safeLocalStorage } from "@/lib/safeStorage";

const STREAK_KEY = "psguide_study_streak";
const LAST_STUDY_KEY = "psguide_last_study_date";
const DAILY_GOAL_KEY = "psguide_daily_goal";
const DEFAULT_DAILY_GOAL = 10;

function getStreakInfo(): { current: number; lastDate: string | null } {
  const current = parseInt(safeLocalStorage.getItem(STREAK_KEY) || "0", 10);
  const lastDate = safeLocalStorage.getItem(LAST_STUDY_KEY);
  return { current, lastDate };
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getGreeting(name: string) {
  const h = new Date().getHours();
  const first = name.split(" ")[0] || "Doutor(a)";
  if (h < 12) return `Bom dia, ${first}`;
  if (h < 18) return `Boa tarde, ${first}`;
  return `Boa noite, ${first}`;
}

export default function DailyBriefingWidget() {
  const navigate = useNavigate();
  const { user, subscription } = useAuth();
  const isPro = subscription.subscribed;
  const { recent } = useRecentHistory();

  const [firstName, setFirstName] = useState("Doutor(a)");
  const [streak, setStreak] = useState(0);
  const [dailyGoal] = useState(() => parseInt(safeLocalStorage.getItem(DAILY_GOAL_KEY) || String(DEFAULT_DAILY_GOAL), 10));

  // Stats SM-2
  const cardIds = useMemo(() => flashcards.map(f => f.id), []);
  const stats = useMemo(() => getStats(cardIds), [cardIds]);
  const dueToday = useMemo(() => getDueCards(cardIds).length, [cardIds]);

  useEffect(() => {
    const fullName = (user?.user_metadata?.full_name as string) || user?.email?.split("@")[0] || "Doutor(a)";
    setFirstName(fullName);

    const { current, lastDate } = getStreakInfo();
    if (!lastDate) {
      setStreak(0);
      return;
    }
    const last = new Date(lastDate);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (isSameDay(last, today) || isSameDay(last, yesterday)) {
      setStreak(current);
    } else {
      // Streak quebrou
      setStreak(0);
      safeLocalStorage.setItem(STREAK_KEY, "0");
    }
  }, [user]);

  const goalProgress = Math.min(100, Math.round(((stats.mastered % dailyGoal) / dailyGoal) * 100));
  const recommendedFlashcard = recent.find(r => r.path.startsWith("/flashcards"));

  const go = (path: string) => {
    hapticLight();
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-card ring-1 ring-primary/15 shadow-md shadow-primary/5"
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
            <Calendar size={10} /> Resumo de hoje
          </p>
          <h2 className="font-heading font-bold text-base mt-0.5 truncate">
            {getGreeting(firstName)}
          </h2>
        </div>
        {isPro ? (
          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-500/10 px-2 py-1 rounded-full ring-1 ring-amber-500/20">
            <Crown size={10} /> PRO
          </span>
        ) : (
          <button
            onClick={() => go("/pricing")}
            className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full ring-1 ring-primary/20 hover:bg-primary/15 transition-colors"
          >
            <Sparkles size={10} /> Pro
          </button>
        )}
      </div>

      {/* Stats em grid — sempre visível (free + pro) */}
      <div className="grid grid-cols-3 gap-1.5 px-4">
        <button
          onClick={() => go("/flashcards")}
          className="flex flex-col items-start p-2.5 rounded-xl bg-background/60 hover:bg-background transition-colors text-left ring-1 ring-border/40"
        >
          <div className="flex items-center gap-1 text-[9px] uppercase font-semibold text-muted-foreground">
            <Brain size={9} /> Revisar
          </div>
          <span className="font-heading font-bold text-lg leading-none mt-1 text-primary">
            {dueToday}
          </span>
          <span className="text-[9px] text-muted-foreground mt-0.5">cards hoje</span>
        </button>

        <div className="flex flex-col items-start p-2.5 rounded-xl bg-background/60 ring-1 ring-border/40">
          <div className="flex items-center gap-1 text-[9px] uppercase font-semibold text-muted-foreground">
            <Flame size={9} className={streak > 0 ? "text-orange-500" : ""} /> Streak
          </div>
          <span className={`font-heading font-bold text-lg leading-none mt-1 ${streak > 0 ? "text-orange-500" : "text-muted-foreground"}`}>
            {streak}
          </span>
          <span className="text-[9px] text-muted-foreground mt-0.5">{streak === 1 ? "dia" : "dias"}</span>
        </div>

        <div className="flex flex-col items-start p-2.5 rounded-xl bg-background/60 ring-1 ring-border/40">
          <div className="flex items-center gap-1 text-[9px] uppercase font-semibold text-muted-foreground">
            <Target size={9} /> Domin.
          </div>
          <span className="font-heading font-bold text-lg leading-none mt-1 text-emerald-600 dark:text-emerald-400">
            {stats.mastered}
          </span>
          <span className="text-[9px] text-muted-foreground mt-0.5">de {stats.total}</span>
        </div>
      </div>

      {/* Meta diária — somente Pro */}
      {isPro ? (
        <div className="px-4 mt-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-medium text-muted-foreground flex items-center gap-1">
              <TrendingUp size={10} /> Meta diária ({dailyGoal} cards)
            </span>
            <span className="text-[10px] font-bold text-primary">{goalProgress}%</span>
          </div>
          <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${goalProgress}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => go("/pricing")}
          className="mx-4 mt-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/8 ring-1 ring-amber-500/20 hover:bg-amber-500/12 transition-colors text-left w-[calc(100%-2rem)]"
        >
          <Lock size={12} className="text-amber-600 shrink-0" />
          <span className="text-[10px] text-foreground/80 flex-1">
            Desbloqueie metas, recomendações por IA e relatórios.
          </span>
          <ChevronRight size={12} className="text-amber-600 shrink-0" />
        </button>
      )}

      {/* Atalhos de estudo */}
      <div className="px-4 pb-4 pt-3 flex gap-1.5">
        <button
          onClick={() => go("/flashcards")}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.97] transition-all font-heading font-semibold text-[11px]"
        >
          <Brain size={12} /> Estudar agora
        </button>
        <button
          onClick={() => go("/quiz")}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-background ring-1 ring-border hover:bg-accent active:scale-[0.97] transition-all font-heading font-semibold text-[11px]"
        >
          <BookOpen size={12} /> Questões
        </button>
        <button
          onClick={() => go("/study-dashboard")}
          className="flex items-center justify-center w-9 rounded-xl bg-background ring-1 ring-border hover:bg-accent active:scale-[0.97] transition-all"
          title="Dashboard de estudo"
        >
          <TrendingUp size={12} />
        </button>
      </div>

      {/* Recomendação contextual (Pro) */}
      {isPro && recommendedFlashcard && (
        <button
          onClick={() => go(recommendedFlashcard.path)}
          className="w-full px-4 py-2.5 border-t border-border/40 flex items-center gap-2 hover:bg-accent/40 transition-colors text-left"
        >
          <Clock size={11} className="text-muted-foreground shrink-0" />
          <span className="text-[10px] text-muted-foreground flex-1 truncate">
            Continuar de onde parou: <span className="text-foreground font-medium">{recommendedFlashcard.title}</span>
          </span>
          <ChevronRight size={12} className="text-muted-foreground shrink-0" />
        </button>
      )}
    </motion.div>
  );
}
