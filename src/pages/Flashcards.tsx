import { useState, useMemo, useCallback, useEffect } from "react";
import TopBar from "@/components/TopBar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { flashcards, flashcardCategoryLabels, flashcardCategoryColors, type FlashcardCategory } from "@/data/flashcardsData";
import { reviewCard, getStats, getProgress, syncProgressFromCloud, getPrioritizedSession, getLeechCards, estimateRetention, type Rating } from "@/lib/spacedRepetition";
import { Brain, RotateCcw, Search, ChevronRight, Zap, BookOpen, Trophy, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { checkAndUnlock, type AchievementContext } from "@/lib/achievements";
import { safeLocalStorage } from "@/lib/safeStorage";

type View = "decks" | "review";

export default function Flashcards() {
  const { user } = useAuth();
  const [view, setView] = useState<View>("decks");
  const [activeCat, setActiveCat] = useState<FlashcardCategory | "all" | "due" | "leech">("all");
  const [search, setSearch] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionCards, setSessionCards] = useState<string[]>([]);
  const [sessionDone, setSessionDone] = useState(0);
  const [, setRefresh] = useState(0);

  // Sync study progress from cloud on login
  useEffect(() => {
    if (user) {
      syncProgressFromCloud(user.id).then(() => setRefresh((r) => r + 1));
    }
  }, [user?.id]);

  const categories = useMemo(() => {
    const cats = [...new Set(flashcards.map((f) => f.category))];
    return cats.map((c) => ({
      id: c,
      label: flashcardCategoryLabels[c],
      count: flashcards.filter((f) => f.category === c).length,
      stats: getStats(flashcards.filter((f) => f.category === c).map((f) => f.id)),
    }));
  }, [sessionDone]);

  const globalStats = useMemo(() => getStats(flashcards.map((f) => f.id)), [sessionDone]);
  const retention = useMemo(() => estimateRetention(flashcards.map((f) => f.id)), [sessionDone]);
  const leechCount = useMemo(() => getLeechCards(flashcards.map((f) => f.id)).length, [sessionDone]);

  const filteredCats = categories.filter((c) =>
    !search || c.label.toLowerCase().includes(search.toLowerCase())
  );

  const startReview = useCallback((cat: FlashcardCategory | "all" | "due" | "leech") => {
    let cardIds: string[];
    if (cat === "due") {
      cardIds = flashcards.map((f) => f.id);
    } else if (cat === "leech") {
      cardIds = getLeechCards(flashcards.map((f) => f.id));
    } else if (cat === "all") {
      cardIds = flashcards.map((f) => f.id);
    } else {
      cardIds = flashcards.filter((f) => f.category === cat).map((f) => f.id);
    }

    // Sessão priorizada: leech/overdue primeiro, novos intercalados (1 a cada 4)
    const limited = cat === "leech"
      ? cardIds.slice(0, 20)
      : getPrioritizedSession(cardIds, 20);

    if (limited.length === 0) {
      toast.info(cat === "leech" ? "Nenhum card travado 🎉" : "Nenhum card para revisar agora! 🎉");
      return;
    }

    setSessionCards(limited);
    setCurrentIdx(0);
    setFlipped(false);
    setActiveCat(cat);
    setView("review");
  }, []);

  const handleRate = (rating: Rating) => {
    const cardId = sessionCards[currentIdx];
    reviewCard(cardId, rating);
    setFlipped(false);
    setSessionDone((d) => d + 1);

    if (currentIdx + 1 < sessionCards.length) {
      setTimeout(() => setCurrentIdx((i) => i + 1), 200);
    } else {
      // Check achievements
      const allIds = flashcards.map(f => f.id);
      const stats = getStats(allIds);
      const progress = getProgress();
      const catsStarted = new Set(flashcards.filter(f => progress[f.id]).map(f => f.category)).size;
      const streak = JSON.parse(safeLocalStorage.getItem("study-streak") || "{}");
      const quizRaw = JSON.parse(safeLocalStorage.getItem("quiz-progress") || "{}");
      const ctx: AchievementContext = {
        flashcardsMastered: stats.mastered,
        flashcardsReviewed: stats.mastered + stats.learning + stats.review,
        flashcardsTotal: stats.total,
        quizTotal: quizRaw.total || 0,
        quizCorrect: quizRaw.correct || 0,
        streakCurrent: streak.current || 0,
        streakBest: streak.best || 0,
        categoriesStarted: catsStarted,
        perfectQuizSessions: quizRaw.perfectSessions || 0,
      };
      const newBadges = checkAndUnlock(ctx);
      if (newBadges.length > 0) {
        newBadges.forEach(b => toast.success(`${b.icon} Conquista: ${b.title}`, { description: b.description }));
      }
      toast.success(`Sessão concluída! ${sessionCards.length} cards revisados 🎉`);
      setView("decks");
    }
  };

  const currentCard = view === "review" && sessionCards[currentIdx]
    ? flashcards.find((f) => f.id === sessionCards[currentIdx])
    : null;

  if (view === "review" && currentCard) {
    const progress = ((currentIdx + 1) / sessionCards.length) * 100;
    return (
      <>
        <TopBar title="Revisão" rightContent={
          <button onClick={() => setView("decks")} className="text-xs text-muted-foreground px-2 py-1 rounded-lg hover:bg-accent">Sair</button>
        } />
        <div className="px-4 py-4 max-w-lg mx-auto pb-24 flex flex-col min-h-[calc(100vh-3rem)]">
          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-muted-foreground font-mono">{currentIdx + 1}/{sessionCards.length}</span>
          </div>

          {/* Category badge + leech */}
          <div className="flex items-center gap-2 mb-3">
            <Badge className={cn("text-[10px] px-2 py-0.5", flashcardCategoryColors[currentCard.category])}>
              {flashcardCategoryLabels[currentCard.category]}
            </Badge>
            {(() => {
              const p = getProgress()[currentCard.id];
              if (p?.leech) {
                return (
                  <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-red-500/40 text-red-500 gap-1">
                    <AlertTriangle size={10} /> Travado
                  </Badge>
                );
              }
              if ((p?.lapses ?? 0) >= 2) {
                return (
                  <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-orange-500/40 text-orange-500">
                    {p.lapses} lapsos
                  </Badge>
                );
              }
              return null;
            })()}
          </div>

          {/* Card */}
          <div
            onClick={() => !flipped && setFlipped(true)}
            className={cn(
              "flex-1 flex flex-col justify-center rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 min-h-[280px]",
              flipped ? "bg-emerald-500/5 border border-emerald-500/20" : "bg-card border border-border"
            )}
          >
            {!flipped ? (
              <div className="text-center space-y-4">
                <Brain size={24} className="mx-auto text-primary opacity-50" />
                <p className="text-base font-semibold leading-relaxed">{currentCard.front}</p>
                <p className="text-xs text-muted-foreground mt-4">Toque para ver a resposta</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-emerald-500 flex items-center gap-1"><RotateCcw size={12} /> Resposta</p>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">{currentCard.back}</div>
              </div>
            )}
          </div>

          {/* Rating buttons */}
          {flipped && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-muted-foreground text-center">Como foi?</p>
              <div className="grid grid-cols-4 gap-2">
                <Button variant="outline" size="sm" className="flex-col h-14 rounded-xl border-red-500/30 text-red-500 hover:bg-red-500/10" onClick={() => handleRate(1)}>
                  <span className="text-lg">😣</span>
                  <span className="text-[9px]">Errei</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-col h-14 rounded-xl border-orange-500/30 text-orange-500 hover:bg-orange-500/10" onClick={() => handleRate(3)}>
                  <span className="text-lg">😐</span>
                  <span className="text-[9px]">Difícil</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-col h-14 rounded-xl border-sky-500/30 text-sky-500 hover:bg-sky-500/10" onClick={() => handleRate(4)}>
                  <span className="text-lg">😊</span>
                  <span className="text-[9px]">Bom</span>
                </Button>
                <Button variant="outline" size="sm" className="flex-col h-14 rounded-xl border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10" onClick={() => handleRate(5)}>
                  <span className="text-lg">🤩</span>
                  <span className="text-[9px]">Fácil</span>
                </Button>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {currentCard.tags.map((t) => (
              <span key={t} className="text-[9px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">#{t}</span>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Decks view
  return (
    <>
      <TopBar title="Flashcards" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto pb-24">
        <div className="mb-4">
          <h1 className="text-xl font-bold font-heading">Revisão Espaçada</h1>
          <p className="text-xs text-muted-foreground mt-1">Sistema inteligente tipo Anki — {flashcards.length} flashcards</p>
        </div>

        {/* Global stats */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-card rounded-2xl p-3 text-center shadow-sm">
            <Zap size={16} className="mx-auto text-blue-500 mb-1" />
            <p className="text-lg font-bold">{globalStats.new}</p>
            <p className="text-[9px] text-muted-foreground">Novos</p>
          </div>
          <div className="bg-card rounded-2xl p-3 text-center shadow-sm">
            <Clock size={16} className="mx-auto text-orange-500 mb-1" />
            <p className="text-lg font-bold">{globalStats.review}</p>
            <p className="text-[9px] text-muted-foreground">Para revisar</p>
          </div>
          <div className="bg-card rounded-2xl p-3 text-center shadow-sm">
            <BookOpen size={16} className="mx-auto text-emerald-500 mb-1" />
            <p className="text-lg font-bold">{globalStats.learning}</p>
            <p className="text-[9px] text-muted-foreground">Aprendendo</p>
          </div>
          <div className="bg-card rounded-2xl p-3 text-center shadow-sm">
            <Trophy size={16} className="mx-auto text-amber-500 mb-1" />
            <p className="text-lg font-bold">{globalStats.mastered}</p>
            <p className="text-[9px] text-muted-foreground">Dominados</p>
          </div>
        </div>

        {/* Retenção estimada */}
        <div className="bg-card rounded-2xl p-3 mb-3 flex items-center gap-3 shadow-sm">
          <TrendingUp size={18} className="text-emerald-500 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold">Retenção estimada</span>
              <span className="text-[11px] font-mono text-emerald-500">{Math.round(retention * 100)}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${retention * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Start all due */}
        <Button className="w-full rounded-2xl h-12 gap-2 mb-2 text-sm font-semibold" onClick={() => startReview("due")}>
          <Brain size={18} /> Revisar cards pendentes ({globalStats.review + globalStats.new})
        </Button>

        {/* Leech (cards travados) */}
        {leechCount > 0 && (
          <Button
            variant="outline"
            className="w-full rounded-2xl h-10 gap-2 mb-4 text-xs border-red-500/30 text-red-500 hover:bg-red-500/10"
            onClick={() => startReview("leech")}
          >
            <AlertTriangle size={14} /> Cards travados (leech) — {leechCount}
          </Button>
        )}

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <Input placeholder="Buscar especialidade..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 rounded-2xl bg-card border-0 shadow-sm h-10" />
        </div>

        {/* Category decks */}
        <div className="space-y-2">
          {filteredCats.map((cat) => (
            <button
              key={cat.id}
              onClick={() => startReview(cat.id)}
              className="w-full bg-card rounded-2xl shadow-sm p-4 flex items-center gap-3 text-left hover:bg-accent/50 active:scale-[0.98] transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className={cn("text-[9px] px-1.5 py-0", flashcardCategoryColors[cat.id])}>
                    {cat.count} cards
                  </Badge>
                  {cat.stats.review > 0 && (
                    <span className="text-[9px] text-orange-500 font-semibold">{cat.stats.review} pendentes</span>
                  )}
                </div>
                <p className="font-semibold text-sm">{cat.label}</p>
                {/* Mini progress bar */}
                <div className="flex gap-0.5 mt-2">
                  <div className="h-1 rounded-full bg-blue-500/30 flex-1" style={{ flex: cat.stats.new || 0.1 }} />
                  <div className="h-1 rounded-full bg-orange-500/50" style={{ flex: cat.stats.review || 0.1 }} />
                  <div className="h-1 rounded-full bg-emerald-500/50" style={{ flex: cat.stats.learning || 0.1 }} />
                  <div className="h-1 rounded-full bg-amber-500" style={{ flex: cat.stats.mastered || 0.1 }} />
                </div>
              </div>
              <ChevronRight size={16} className="text-muted-foreground shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
