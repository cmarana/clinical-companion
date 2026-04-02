import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface SummaryData {
  protocolsThisWeek: number;
  nextReviewHours: number | null;
}

function getWeeklySummary(): SummaryData {
  try {
    const history = JSON.parse(localStorage.getItem("recent_history") || "[]");
    const now = Date.now();
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
    const protocolsThisWeek = history.filter(
      (h: any) => h.timestamp >= weekAgo && (h.path?.includes("/protocols/") || h.path?.includes("/full-protocols/"))
    ).length;

    // Check next spaced repetition review
    let nextReviewHours: number | null = null;
    const progressRaw = localStorage.getItem("study_progress");
    if (progressRaw) {
      const progress = JSON.parse(progressRaw);
      const cards = Object.values(progress) as any[];
      const upcoming = cards
        .map((c: any) => c.next_review || c.nextReview)
        .filter((t: number) => t && t > now)
        .sort((a: number, b: number) => a - b);
      if (upcoming.length > 0) {
        nextReviewHours = Math.max(1, Math.round((upcoming[0] - now) / (1000 * 60 * 60)));
      }
    }

    // If no local progress, check if any flashcard sessions exist
    if (nextReviewHours === null) {
      const hasStudied = localStorage.getItem("study_streak");
      if (hasStudied) nextReviewHours = 0; // review available now
    }

    return { protocolsThisWeek, nextReviewHours };
  } catch {
    return { protocolsThisWeek: 0, nextReviewHours: null };
  }
}

export default function WeeklySummaryWidget() {
  const [data, setData] = useState<SummaryData>({ protocolsThisWeek: 0, nextReviewHours: null });
  const navigate = useNavigate();

  useEffect(() => {
    setData(getWeeklySummary());
  }, []);

  const hasActivity = data.protocolsThisWeek > 0 || data.nextReviewHours !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
      className="mb-5"
    >
      <div className="flex gap-2.5">
        {/* Protocols read */}
        <button
          onClick={() => navigate("/full-protocols")}
          className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 ring-1 ring-primary/15 hover:ring-primary/30 active:scale-[0.98] transition-all text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
            <BookOpen size={18} className="text-primary" />
          </div>
          <div className="min-w-0">
            <span className="font-heading font-bold text-lg leading-none text-foreground">
              {data.protocolsThisWeek}
            </span>
            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
              {data.protocolsThisWeek === 1 ? "protocolo lido" : "protocolos lidos"} esta semana
            </p>
          </div>
        </button>

        {/* Next review */}
        <button
          onClick={() => navigate("/flashcards")}
          className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-500/10 dark:from-amber-500/10 dark:to-amber-500/20 ring-1 ring-amber-500/15 hover:ring-amber-500/30 active:scale-[0.98] transition-all text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
            <Clock size={18} className="text-amber-600 dark:text-amber-400" />
          </div>
          <div className="min-w-0">
            {data.nextReviewHours !== null ? (
              <>
                <span className="font-heading font-bold text-lg leading-none text-foreground">
                  {data.nextReviewHours === 0 ? "Agora" : `${data.nextReviewHours}h`}
                </span>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                  {data.nextReviewHours === 0 ? "revisão disponível" : "próxima revisão"}
                </p>
              </>
            ) : (
              <>
                <span className="font-heading font-semibold text-xs leading-none text-foreground">
                  Comece a estudar
                </span>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                  Flashcards com repetição espaçada
                </p>
              </>
            )}
          </div>
        </button>
      </div>
    </motion.div>
  );
}
