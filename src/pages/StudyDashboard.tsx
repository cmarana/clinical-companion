import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { flashcards, flashcardCategoryLabels, type FlashcardCategory } from "@/data/flashcardsData";
import { getProgress, getStats, type CardProgress } from "@/lib/spacedRepetition";
import { residencyQuestions } from "@/data/residencyQuestions";
import { safeLocalStorage } from "@/lib/safeStorage";
import {
  Flame, Target, Trophy, Brain, GraduationCap, TrendingUp,
  ChevronRight, Calendar, Star, Zap, BarChart3, Settings2, Check, Award, Lock
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { achievements, getUnlockedAchievements, getAchievementProgress, type AchievementContext } from "@/lib/achievements";

// --- Streak logic ---
const STREAK_KEY = "study-streak";
const LAST_STUDY_KEY = "study-last-date";
const WEEKLY_GOAL_KEY = "study-weekly-goal";
const QUIZ_PROGRESS_KEY = "quiz-progress";

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function getStreak(): { current: number; best: number; todayDone: boolean } {
  try {
    const raw = JSON.parse(safeLocalStorage.getItem(STREAK_KEY) || "{}");
    return { current: raw.current || 0, best: raw.best || 0, todayDone: raw.lastDate === getTodayStr() };
  } catch {
    return { current: 0, best: 0, todayDone: false };
  }
}

function recordStudyDay() {
  const today = getTodayStr();
  const last = safeLocalStorage.getItem(LAST_STUDY_KEY) || "";
  const streak = getStreak();

  if (last === today) return streak; // already recorded

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  let newCurrent = last === yesterday ? streak.current + 1 : 1;
  const newBest = Math.max(newCurrent, streak.best);

  safeLocalStorage.setItem(LAST_STUDY_KEY, today);
  safeLocalStorage.setItem(STREAK_KEY, JSON.stringify({ current: newCurrent, best: newBest, lastDate: today }));
  return { current: newCurrent, best: newBest, todayDone: true };
}

function getWeeklyGoal(): number {
  return parseInt(safeLocalStorage.getItem(WEEKLY_GOAL_KEY) || "5", 10);
}

function getWeekStudyDays(): number {
  // Count how many days this week had study activity
  const progress = getProgress();
  const now = Date.now();
  const weekStart = now - 7 * 86400000;
  const days = new Set<string>();
  Object.values(progress).forEach((p: CardProgress) => {
    if (p.lastReview > weekStart) {
      days.add(new Date(p.lastReview).toISOString().slice(0, 10));
    }
  });
  // Also count quiz
  try {
    const quizDates = JSON.parse(safeLocalStorage.getItem("quiz-study-dates") || "[]");
    quizDates.forEach((d: string) => {
      if (new Date(d).getTime() > weekStart) days.add(d);
    });
  } catch {}
  return days.size;
}

function getQuizStats(): { total: number; correct: number; byCategory: Record<string, { total: number; correct: number }> } {
  try {
    const raw = JSON.parse(safeLocalStorage.getItem(QUIZ_PROGRESS_KEY) || "{}");
    return {
      total: raw.total || 0,
      correct: raw.correct || 0,
      byCategory: raw.byCategory || {},
    };
  } catch {
    return { total: 0, correct: 0, byCategory: {} };
  }
}

const PIE_COLORS = [
  "hsl(var(--primary))",
  "hsl(210, 80%, 55%)",
  "hsl(170, 70%, 45%)",
  "hsl(340, 70%, 55%)",
  "hsl(45, 85%, 50%)",
];

const chartConfig: ChartConfig = {
  mastered: { label: "Dominados", color: "hsl(150, 70%, 45%)" },
  learning: { label: "Aprendendo", color: "hsl(45, 85%, 50%)" },
  new: { label: "Novos", color: "hsl(var(--muted-foreground))" },
  review: { label: "Para revisão", color: "hsl(var(--primary))" },
};

export default function StudyDashboard() {
  const navigate = useNavigate();
  const [streak, setStreak] = useState(getStreak);
  const [goalValue, setGoalValue] = useState(getWeeklyGoal);
  const [editingGoal, setEditingGoal] = useState(false);
  const [tempGoal, setTempGoal] = useState(goalValue);

  useEffect(() => {
    const progress = getProgress();
    const today = getTodayStr();
    const hasStudiedToday = Object.values(progress).some(
      (p: CardProgress) => new Date(p.lastReview).toISOString().slice(0, 10) === today
    );
    if (hasStudiedToday) setStreak(recordStudyDay());
  }, []);

  const saveGoal = (val: number) => {
    const clamped = Math.max(1, Math.min(7, val));
    safeLocalStorage.setItem(WEEKLY_GOAL_KEY, String(clamped));
    setGoalValue(clamped);
    setEditingGoal(false);
  };

  const weekDays = getWeekStudyDays();
  const weekProgress = Math.min(100, (weekDays / goalValue) * 100);

  // Flashcard stats
  const allCardIds = flashcards.map((c) => c.id);
  const stats = getStats(allCardIds);
  const totalReviewed = stats.mastered + stats.learning + stats.review;

  // Category breakdown
  const categories = useMemo(() => {
    const cats = [...new Set(flashcards.map((c) => c.category))] as FlashcardCategory[];
    return cats.map((cat) => {
      const catCards = flashcards.filter((c) => c.category === cat);
      const catStats = getStats(catCards.map((c) => c.id));
      const pct = catCards.length > 0 ? Math.round((catStats.mastered / catCards.length) * 100) : 0;
      return { cat, label: flashcardCategoryLabels[cat], total: catCards.length, ...catStats, pct };
    }).sort((a, b) => b.pct - a.pct);
  }, []);

  // Quiz stats
  const quizStats = getQuizStats();

  // Chart data - distribution
  const pieData = [
    { name: "Dominados", value: stats.mastered, fill: "hsl(150, 70%, 45%)" },
    { name: "Aprendendo", value: stats.learning, fill: "hsl(45, 85%, 50%)" },
    { name: "Para revisão", value: stats.review, fill: "hsl(var(--primary))" },
    { name: "Novos", value: stats.new, fill: "hsl(var(--muted-foreground))" },
  ].filter((d) => d.value > 0);

  // Top specialties bar chart
  const barData = categories.slice(0, 8).map((c) => ({
    name: c.label.length > 10 ? c.label.slice(0, 10) + "…" : c.label,
    mastered: c.mastered,
    learning: c.learning,
  }));

  // Weekly activity (simulated from progress timestamps)
  const weekLabels = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const activityData = useMemo(() => {
    const progress = getProgress();
    const now = new Date();
    const days: Record<number, number> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 86400000);
      days[d.getDay()] = 0;
    }
    Object.values(progress).forEach((p: CardProgress) => {
      const d = new Date(p.lastReview);
      const diff = Math.floor((now.getTime() - p.lastReview) / 86400000);
      if (diff < 7) {
        days[d.getDay()] = (days[d.getDay()] || 0) + 1;
      }
    });
    return Object.entries(days).map(([day, count]) => ({
      day: weekLabels[parseInt(day)],
      cards: count,
    }));
  }, []);

  const activityConfig: ChartConfig = {
    cards: { label: "Cards revisados", color: "hsl(var(--primary))" },
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar title="Dashboard de Estudo" showBack />

      <div className="px-4 pt-3 max-w-lg mx-auto space-y-4">
        {/* Streak & Weekly Goal */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 flex flex-col items-center gap-1 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <Flame className="text-orange-500" size={28} />
            <span className="text-2xl font-bold text-foreground">{streak.current}</span>
            <span className="text-[11px] text-muted-foreground font-medium">Streak (dias)</span>
            <span className="text-[10px] text-muted-foreground">Recorde: {streak.best}</span>
          </Card>
          <Card className="p-4 flex flex-col items-center gap-1 relative">
            <button
              onClick={() => { setTempGoal(goalValue); setEditingGoal(!editingGoal); }}
              className="absolute top-2 right-2 p-1 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
            >
              <Settings2 size={14} />
            </button>
            <Target className="text-primary" size={28} />
            {editingGoal ? (
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <button
                      key={n}
                      onClick={() => setTempGoal(n)}
                      className={cn(
                        "w-7 h-7 rounded-full text-xs font-bold transition-all",
                        tempGoal === n
                          ? "bg-primary text-primary-foreground scale-110"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => saveGoal(tempGoal)}
                  className="p-1.5 rounded-lg bg-primary text-primary-foreground"
                >
                  <Check size={14} />
                </button>
              </div>
            ) : (
              <>
                <span className="text-2xl font-bold text-foreground">{weekDays}/{goalValue}</span>
                <span className="text-[11px] text-muted-foreground font-medium">Meta semanal</span>
                <Progress value={weekProgress} className="h-2 mt-1 w-full" />
              </>
            )}
          </Card>
        </div>

        {/* Quick stats row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Brain, label: "Flashcards", value: stats.total, color: "text-primary" },
            { icon: Trophy, label: "Dominados", value: stats.mastered, color: "text-green-500" },
            { icon: Zap, label: "Revisão", value: stats.review, color: "text-yellow-500" },
            { icon: GraduationCap, label: "Questões", value: quizStats.total, color: "text-blue-500" },
          ].map(({ icon: Icon, label, value, color }) => (
            <Card key={label} className="p-3 flex flex-col items-center gap-1">
              <Icon size={18} className={color} />
              <span className="text-lg font-bold">{value}</span>
              <span className="text-[10px] text-muted-foreground">{label}</span>
            </Card>
          ))}
        </div>

        {/* Distribution Pie */}
        {totalReviewed > 0 && (
          <Card className="p-4">
            <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
              <BarChart3 size={16} className="text-primary" /> Distribuição dos Flashcards
            </h3>
            <ChartContainer config={chartConfig} className="h-[180px]">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, i) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              {pieData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5 text-[11px]">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: d.fill }} />
                  <span className="text-muted-foreground">{d.name}: <strong className="text-foreground">{d.value}</strong></span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Weekly Activity */}
        <Card className="p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Calendar size={16} className="text-primary" /> Atividade Semanal
          </h3>
          <ChartContainer config={activityConfig} className="h-[140px]">
            <BarChart data={activityData}>
              <XAxis dataKey="day" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Bar dataKey="cards" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </Card>

        {/* Specialty Ranking */}
        <Card className="p-4">
          <h3 className="font-heading font-semibold text-sm mb-3 flex items-center gap-2">
            <Star size={16} className="text-yellow-500" /> Ranking por Especialidade
          </h3>
          <div className="space-y-2.5">
            {categories.slice(0, 10).map((c, i) => (
              <div key={c.cat}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                      i === 0 ? "bg-yellow-500/20 text-yellow-600" :
                      i === 1 ? "bg-gray-300/30 text-gray-500" :
                      i === 2 ? "bg-orange-400/20 text-orange-500" :
                      "bg-muted text-muted-foreground"
                    )}>
                      {i + 1}
                    </span>
                    <span className="text-xs font-medium truncate max-w-[140px]">{c.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{c.mastered}/{c.total}</span>
                    <Badge variant={c.pct >= 80 ? "default" : c.pct >= 40 ? "secondary" : "outline"} className="text-[10px] px-1.5 py-0">
                      {c.pct}%
                    </Badge>
                  </div>
                </div>
                <Progress value={c.pct} className="h-1.5" />
              </div>
            ))}
          </div>
        </Card>

        {/* Quick access */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <Button
            variant="outline"
            className="h-14 flex flex-col gap-1"
            onClick={() => navigate("/flashcards")}
          >
            <Brain size={18} className="text-primary" />
            <span className="text-xs">Estudar Flashcards</span>
          </Button>
          <Button
            variant="outline"
            className="h-14 flex flex-col gap-1"
            onClick={() => navigate("/residency-quiz")}
          >
            <GraduationCap size={18} className="text-primary" />
            <span className="text-xs">Questões Residência</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
