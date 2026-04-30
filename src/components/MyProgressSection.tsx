import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain, Flame, Target, TrendingUp, Trophy, BookOpen, ChevronRight,
  Sparkles, Lock, Crown, Calendar, Award,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { flashcards } from "@/data/flashcardsData";
import { getStats, getDueCards } from "@/lib/spacedRepetition";
import { safeLocalStorage } from "@/lib/safeStorage";
import { hapticLight } from "@/lib/haptics";
import { cn } from "@/lib/utils";

const STREAK_KEY = "psguide_study_streak";
const LAST_STUDY_KEY = "psguide_last_study_date";
const DAILY_GOAL_KEY = "psguide_daily_goal";
const WEEKLY_GOAL_KEY = "psguide_weekly_goal";
const DEFAULT_DAILY = 10;
const DEFAULT_WEEKLY = 50;

interface CategoryCount {
  category: string;
  count: number;
}

export default function MyProgressSection() {
  const navigate = useNavigate();
  const { user, subscription } = useAuth();
  const isPro = subscription.subscribed;

  const [streak, setStreak] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(DEFAULT_DAILY);
  const [weeklyGoal, setWeeklyGoal] = useState(DEFAULT_WEEKLY);
  const [topSpecialties, setTopSpecialties] = useState<CategoryCount[]>([]);
  const [weekViews, setWeekViews] = useState(0);

  // Stats SM-2
  const cardIds = useMemo(() => flashcards.map(f => f.id), []);
  const stats = useMemo(() => getStats(cardIds), [cardIds]);
  const dueToday = useMemo(() => getDueCards(cardIds).length, [cardIds]);
  const masteredPct = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;

  useEffect(() => {
    setDailyGoal(parseInt(safeLocalStorage.getItem(DAILY_GOAL_KEY) || String(DEFAULT_DAILY), 10));
    setWeeklyGoal(parseInt(safeLocalStorage.getItem(WEEKLY_GOAL_KEY) || String(DEFAULT_WEEKLY), 10));
    const cur = parseInt(safeLocalStorage.getItem(STREAK_KEY) || "0", 10);
    setStreak(cur);
  }, []);

  // Top especialidades acessadas (últimos 30 dias)
  useEffect(() => {
    if (!user) return;
    const since = new Date();
    since.setDate(since.getDate() - 30);

    supabase
      .from("protocol_views" as any)
      .select("protocol_category, created_at")
      .eq("user_id", user.id)
      .gte("created_at", since.toISOString())
      .limit(500)
      .then(({ data }) => {
        if (!data) return;
        const byCat: Record<string, number> = {};
        let weekly = 0;
        const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        (data as any[]).forEach(row => {
          const cat = row.protocol_category || "geral";
          byCat[cat] = (byCat[cat] ?? 0) + 1;
          if (new Date(row.created_at).getTime() >= weekAgo) weekly++;
        });
        const sorted = Object.entries(byCat)
          .map(([category, count]) => ({ category, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);
        setTopSpecialties(sorted);
        setWeekViews(weekly);
      });
  }, [user]);

  const dailyProgress = Math.min(100, Math.round(((stats.mastered % dailyGoal) / dailyGoal) * 100));
  const weeklyProgress = Math.min(100, Math.round((weekViews / weeklyGoal) * 100));

  // Recomendação personalizada
  const recommendation = useMemo(() => {
    if (dueToday > 5) return { icon: Brain, text: `Você tem ${dueToday} flashcards para revisar hoje`, action: "Revisar agora", path: "/flashcards" };
    if (streak === 0) return { icon: Flame, text: "Comece um streak hoje! Estude 10 min", action: "Começar", path: "/flashcards" };
    if (topSpecialties.length === 0) return { icon: BookOpen, text: "Explore protocolos da sua especialidade", action: "Explorar", path: "/full-protocols" };
    if (masteredPct < 30) return { icon: Target, text: `Você dominou ${masteredPct}%. Que tal mais flashcards hoje?`, action: "Estudar", path: "/flashcards" };
    return { icon: Trophy, text: "Excelente progresso! Mantenha o ritmo", action: "Continuar", path: "/study-dashboard" };
  }, [dueToday, streak, topSpecialties, masteredPct]);

  const updateGoal = (kind: "daily" | "weekly", val: number) => {
    if (kind === "daily") {
      setDailyGoal(val);
      safeLocalStorage.setItem(DAILY_GOAL_KEY, String(val));
    } else {
      setWeeklyGoal(val);
      safeLocalStorage.setItem(WEEKLY_GOAL_KEY, String(val));
    }
    hapticLight();
  };

  const RecIcon = recommendation.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/12 text-primary flex items-center justify-center">
            <TrendingUp size={13} />
          </div>
          <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
            Meu Progresso
          </h3>
        </div>
        {isPro ? (
          <span className="flex items-center gap-1 text-[9px] font-bold text-amber-600 bg-amber-500/10 px-1.5 py-0.5 rounded-full ring-1 ring-amber-500/20">
            <Crown size={9} /> PRO
          </span>
        ) : null}
      </div>

      {/* Recomendação contextual no topo */}
      <button
        onClick={() => { hapticLight(); navigate(recommendation.path); }}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 ring-1 ring-primary/20 hover:ring-primary/40 transition-all text-left active:scale-[0.99]"
      >
        <div className="w-9 h-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
          <RecIcon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-wider font-bold text-primary">Recomendação</p>
          <p className="text-xs font-medium leading-tight">{recommendation.text}</p>
        </div>
        <span className="text-[10px] font-heading font-bold text-primary flex items-center gap-0.5 shrink-0">
          {recommendation.action} <ChevronRight size={12} />
        </span>
      </button>

      {/* KPIs em grid */}
      <div className="grid grid-cols-2 gap-2">
        <StatCard
          icon={Brain}
          label="Cards dominados"
          value={stats.mastered}
          sub={`${masteredPct}% de ${stats.total}`}
          color="text-primary"
          onClick={() => navigate("/flashcards")}
        />
        <StatCard
          icon={Flame}
          label="Streak atual"
          value={streak}
          sub={streak === 1 ? "dia consecutivo" : "dias consecutivos"}
          color={streak > 0 ? "text-orange-500" : "text-muted-foreground"}
        />
        <StatCard
          icon={Calendar}
          label="Para revisar hoje"
          value={dueToday}
          sub="cards no SM-2"
          color="text-emerald-600 dark:text-emerald-400"
          onClick={() => navigate("/flashcards")}
        />
        <StatCard
          icon={BookOpen}
          label="Esta semana"
          value={weekViews}
          sub="protocolos consultados"
          color="text-violet-500"
          onClick={() => navigate("/full-protocols")}
        />
      </div>

      {/* Metas — Pro: editáveis. Free: visualização + lock */}
      <div className="rounded-2xl bg-card ring-1 ring-border/50 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-heading font-bold flex items-center gap-1.5">
            <Target size={13} className="text-primary" /> Minhas metas
          </p>
          {!isPro && (
            <button
              onClick={() => navigate("/pricing")}
              className="flex items-center gap-1 text-[9px] font-bold text-amber-600 hover:underline"
            >
              <Lock size={9} /> Editar com Pro
            </button>
          )}
        </div>

        <GoalRow
          label="Diária — flashcards"
          current={stats.mastered % dailyGoal}
          goal={dailyGoal}
          progress={dailyProgress}
          editable={isPro}
          onChange={(v) => updateGoal("daily", v)}
          options={[5, 10, 15, 20, 30]}
        />

        <GoalRow
          label="Semanal — protocolos"
          current={weekViews}
          goal={weeklyGoal}
          progress={weeklyProgress}
          editable={isPro}
          onChange={(v) => updateGoal("weekly", v)}
          options={[20, 50, 80, 120]}
        />
      </div>

      {/* Top especialidades visitadas */}
      {topSpecialties.length > 0 ? (
        <div className="rounded-2xl bg-card ring-1 ring-border/50 p-4 space-y-3">
          <p className="text-xs font-heading font-bold flex items-center gap-1.5">
            <Award size={13} className="text-amber-500" /> Trilhas mais ativas
            <span className="text-[9px] text-muted-foreground font-normal ml-auto">últimos 30 dias</span>
          </p>
          <div className="space-y-2">
            {topSpecialties.map((s, idx) => {
              const max = topSpecialties[0].count;
              const pct = Math.round((s.count / max) * 100);
              return (
                <div key={s.category} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-medium capitalize truncate">
                      {idx === 0 && "🥇 "}{idx === 1 && "🥈 "}{idx === 2 && "🥉 "}
                      {s.category || "Geral"}
                    </span>
                    <span className="text-muted-foreground font-bold">{s.count}</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className={cn(
                        "h-full rounded-full",
                        idx === 0 ? "bg-amber-500" : idx === 1 ? "bg-slate-400" : idx === 2 ? "bg-orange-600" : "bg-primary/60"
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-muted/30 p-4 text-center">
          <BookOpen size={20} className="mx-auto text-muted-foreground/60 mb-1" />
          <p className="text-[11px] text-muted-foreground">
            Acesse protocolos para ver suas trilhas mais ativas aqui.
          </p>
        </div>
      )}

      {/* CTA Pro Free-only */}
      {!isPro && (
        <button
          onClick={() => navigate("/pricing")}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md hover:shadow-lg active:scale-[0.99] transition-all"
        >
          <Sparkles size={16} />
          <div className="flex-1 text-left">
            <p className="font-heading font-bold text-xs">Desbloqueie metas + IA</p>
            <p className="text-[10px] opacity-90">Recomendações personalizadas e relatórios completos</p>
          </div>
          <ChevronRight size={14} />
        </button>
      )}
    </motion.div>
  );
}

function StatCard({
  icon: Icon, label, value, sub, color, onClick,
}: {
  icon: React.ElementType; label: string; value: number; sub: string; color: string; onClick?: () => void;
}) {
  const Comp: any = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "flex flex-col items-start p-3 rounded-2xl bg-card ring-1 ring-border/50 text-left transition-all",
        onClick && "hover:ring-primary/30 active:scale-[0.98]"
      )}
    >
      <div className="flex items-center gap-1.5 text-[9px] uppercase font-semibold text-muted-foreground tracking-wider">
        <Icon size={10} className={color} /> {label}
      </div>
      <span className={cn("font-heading font-bold text-2xl leading-none mt-1.5", color)}>
        {value}
      </span>
      <span className="text-[9px] text-muted-foreground mt-1">{sub}</span>
    </Comp>
  );
}

function GoalRow({
  label, current, goal, progress, editable, onChange, options,
}: {
  label: string; current: number; goal: number; progress: number;
  editable: boolean; onChange: (v: number) => void; options: number[];
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold">
            <span className={progress >= 100 ? "text-emerald-600" : "text-foreground"}>{current}</span>
            <span className="text-muted-foreground"> / {goal}</span>
          </span>
        </div>
      </div>
      <div className="h-1.5 bg-muted/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full",
            progress >= 100 ? "bg-emerald-500" : "bg-gradient-to-r from-primary to-primary/70"
          )}
        />
      </div>
      {editable && (
        <div className="flex gap-1 mt-1">
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={cn(
                "flex-1 py-1 rounded-lg text-[10px] font-bold transition-colors",
                opt === goal
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/40 text-muted-foreground hover:bg-muted"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
