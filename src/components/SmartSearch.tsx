import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock, TrendingUp, X, ArrowRight, FileText, Pill, ClipboardList, BookOpen, Zap, Calculator, Hash, TestTubes, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { safeLocalStorage } from "@/lib/safeStorage";
import { hapticLight } from "@/lib/haptics";
import { fullTextSearch, typeColors, typeLabels, type SearchResult } from "@/lib/searchEngine";

const iconMap: Record<string, React.ReactNode> = {
  protocol: <FileText size={14} />,
  prescription: <ClipboardList size={14} />,
  symptom: <Stethoscope size={14} />,
  bulario: <Pill size={14} />,
  fullProtocol: <BookOpen size={14} />,
  emergency: <Zap size={14} />,
  calculator: <Calculator size={14} />,
  cid: <Hash size={14} />,
  labValue: <TestTubes size={14} />,
};

interface Suggestion {
  label: string;
  path: string;
  type: "recent" | "popular" | "result";
  icon?: string;
  snippet?: string;
}

const defaultPopular = [
  { label: "PCR / Parada Cardíaca", path: "/protocols/pcr" },
  { label: "Sepse", path: "/protocols/sepse" },
  { label: "Calculadoras médicas", path: "/calculators" },
  { label: "Interações medicamentosas", path: "/drug-interactions" },
  { label: "Bulário", path: "/bulario" },
];

interface SmartSearchProps {
  specialty: string | null;
}

export default function SmartSearch({ specialty }: SmartSearchProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const recentHistory = useMemo(() => {
    try {
      const raw = safeLocalStorage.getItem("psguide_recent_history");
      if (!raw) return [];
      return JSON.parse(raw).slice(0, 5) as { path: string; title: string }[];
    } catch {
      return [];
    }
  }, [focused]);

  // Full-text search results
  const searchResults = useMemo(() => {
    if (query.trim().length < 2) return [];
    return fullTextSearch(query.trim()).slice(0, 8);
  }, [query]);

  // Build suggestions
  const suggestions = useMemo((): Suggestion[] => {
    if (query.trim().length >= 2) {
      // Show real full-text results
      return searchResults.map(r => ({
        label: r.title,
        path: r.path,
        type: "result" as const,
        icon: r.icon,
        snippet: r.snippet,
      }));
    }

    // When empty and focused, show recent history + popular
    const results: Suggestion[] = [];
    recentHistory.slice(0, 4).forEach(h =>
      results.push({ label: h.title, path: h.path, type: "recent" })
    );
    defaultPopular.slice(0, 3).forEach(p =>
      results.push({ label: p.label, path: p.path, type: "popular" })
    );

    const seen = new Set<string>();
    return results.filter(r => {
      const key = r.label.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 7);
  }, [query, recentHistory, searchResults]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      setFocused(false);
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSuggestionClick = (s: Suggestion) => {
    hapticLight();
    setFocused(false);
    setQuery("");
    navigate(s.path);
  };

  const showDropdown = focused && suggestions.length > 0;
  const totalResults = searchResults.length;

  return (
    <div ref={containerRef} className="relative mb-5 z-20">
      <form onSubmit={handleSubmit} className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          placeholder="Buscar medicamento, protocolo, CID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="w-full pl-11 pr-10 h-[52px] text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground"
          >
            <X size={16} />
          </button>
        )}
      </form>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-card rounded-2xl shadow-lg border border-border overflow-hidden max-h-[400px] overflow-y-auto"
          >
            {/* Results count header */}
            {query.trim().length >= 2 && totalResults > 0 && (
              <div className="px-4 py-2 bg-muted/30 border-b border-border/50">
                <span className="text-[10px] font-heading font-medium text-muted-foreground uppercase tracking-wider">
                  {totalResults} resultado{totalResults !== 1 ? "s" : ""} · Busca em conteúdo
                </span>
              </div>
            )}

            {suggestions.map((s, i) => (
              <button
                key={`${s.type}-${s.label}-${i}`}
                onClick={() => handleSuggestionClick(s)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-muted/50 active:bg-muted transition-colors border-b border-border/30 last:border-0"
              >
                {s.type === "result" && s.icon ? (
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${typeColors[s.icon] || ""}`}>
                    {iconMap[s.icon] || <FileText size={14} />}
                  </div>
                ) : s.type === "recent" ? (
                  <Clock size={14} className="text-muted-foreground shrink-0" />
                ) : (
                  <TrendingUp size={14} className="text-primary shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-[13px] truncate block">{s.label}</span>
                  {s.snippet && (
                    <span className="text-[10px] text-muted-foreground line-clamp-1 block mt-0.5">
                      {s.snippet}
                    </span>
                  )}
                  {s.type === "result" && s.icon && !s.snippet && (
                    <span className="text-[10px] text-muted-foreground/70">
                      {typeLabels[s.icon]}
                    </span>
                  )}
                </div>
                <ArrowRight size={14} className="text-muted-foreground shrink-0" />
              </button>
            ))}

            {query.trim().length >= 2 && (
              <button
                onClick={handleSubmit as any}
                className="w-full flex items-center gap-3 px-4 py-3 text-left bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <Search size={14} className="text-primary shrink-0" />
                <span className="font-heading text-[13px] text-primary font-medium">
                  Ver todos os resultados para "{query.trim()}"
                </span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
