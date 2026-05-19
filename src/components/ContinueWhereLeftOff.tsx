import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecentHistory, type HistoryEntry } from "@/hooks/useRecentHistory";
import { flashcards } from "@/data/flashcardsData";
import { getStats } from "@/lib/spacedRepetition";
import {
  ArrowRight, BookOpen, Pill, Brain, Clock, FileText, Zap, ChevronRight,
} from "lucide-react";
import { hapticLight } from "@/lib/haptics";
import { shortenIfNeeded } from "@/lib/medical-abbreviations";
import { ListSkeleton } from "@/components/skeletons/PulsoSkeletons";

const PROTOCOL_TYPES = new Set(["protocol", "fullProtocol", "emergency"]);

function pickLast(history: HistoryEntry[], predicate: (e: HistoryEntry) => boolean, n = 1) {
  return history.filter(predicate).slice(0, n);
}

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "agora";
  if (m < 60) return `há ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `há ${h}h`;
  const d = Math.floor(h / 24);
  return `há ${d}d`;
}

export default function ContinueWhereLeftOff() {
  const navigate = useNavigate();
  const { history } = useRecentHistory();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(t);
  }, []);

  const lastProtocols = useMemo(
    () => pickLast(history, (e) => PROTOCOL_TYPES.has(e.type), 2),
    [history]
  );
  const lastMedication = useMemo(
    () => pickLast(history, (e) => e.type === "medication", 1)[0],
    [history]
  );

  const pendingFlashcards = useMemo(() => {
    const stats = getStats(flashcards.map((f) => f.id));
    return stats.review + stats.new;
  }, []);

  const go = (path: string) => {
    hapticLight();
    navigate(path);
  };

  const hasAny = lastProtocols.length > 0 || !!lastMedication || pendingFlashcards > 0;

  if (!hasAny) {
    return (
      <div className="rounded-2xl bg-card border border-border/60 p-5 text-center space-y-2">
        <Clock size={22} className="mx-auto text-muted-foreground/40" />
        <p className="text-xs text-muted-foreground">
          Seus protocolos, medicamentos e revisões aparecerão aqui conforme você usar o app.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {/* Last protocols */}
      {lastProtocols.map((p) => {
        const Icon = p.type === "emergency" ? Zap : p.type === "fullProtocol" ? BookOpen : FileText;
        const tone =
          p.type === "emergency"
            ? "bg-destructive/10 text-destructive"
            : p.type === "fullProtocol"
            ? "bg-violet-500/10 text-violet-600 dark:text-violet-400"
            : "bg-primary/10 text-primary";
        return (
          <button
            key={p.path}
            onClick={() => go(p.path)}
            className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md active:scale-[0.99] transition-all text-left"
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${tone}`}>
              <Icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                {p.type === "emergency" ? "Último protocolo de emergência" : "Último protocolo"}
              </p>
              <p className="font-heading font-semibold text-[13px] text-foreground truncate mt-0.5">
                {p.title}
              </p>
              <p className="text-[10.5px] text-muted-foreground mt-0.5">{timeAgo(p.timestamp)}</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground shrink-0" />
          </button>
        );
      })}

      {/* Last medication */}
      {lastMedication && (
        <button
          onClick={() => go(lastMedication.path)}
          className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md active:scale-[0.99] transition-all text-left"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Pill size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              Último medicamento
            </p>
            <p className="font-heading font-semibold text-[13px] text-foreground truncate mt-0.5">
              {lastMedication.title}
            </p>
            <p className="text-[10.5px] text-muted-foreground mt-0.5">
              {timeAgo(lastMedication.timestamp)}
            </p>
          </div>
          <ChevronRight size={16} className="text-muted-foreground shrink-0" />
        </button>
      )}

      {/* Pending flashcards */}
      {pendingFlashcards > 0 && (
        <button
          onClick={() => go("/flashcards")}
          className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-card border border-border/60 hover:border-amber-500/40 hover:shadow-md active:scale-[0.99] transition-all text-left"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Brain size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
              Flashcards pendentes
            </p>
            <p className="font-heading font-semibold text-[13px] text-foreground truncate mt-0.5">
              {pendingFlashcards} {pendingFlashcards === 1 ? "card aguardando revisão" : "cards aguardando revisão"}
            </p>
            <p className="text-[10.5px] text-muted-foreground mt-0.5">
              Revisão espaçada (SM-2)
            </p>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 h-7 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-semibold shrink-0">
            Revisar <ArrowRight size={12} />
          </span>
        </button>
      )}
    </div>
  );
}
