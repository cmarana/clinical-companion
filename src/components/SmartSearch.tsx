import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock, TrendingUp, X, ArrowRight, FileText, Pill, ClipboardList, BookOpen, Zap, Calculator, Hash, TestTubes, Stethoscope, Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { safeLocalStorage } from "@/lib/safeStorage";
import { hapticLight } from "@/lib/haptics";
import { typeColors, typeLabels, type SearchResult } from "@/lib/searchEngine";

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
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const recognitionRef = useRef<any>(null);

  const speechSupported = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const toggleVoice = useCallback(() => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsListening(true);
      setFocused(true);
      hapticLight();
    };

    recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((r: any) => r[0].transcript)
        .join("");
      setQuery(transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  }, [isListening]);

  const recentHistory = useMemo(() => {
    try {
      const raw = safeLocalStorage.getItem("psguide_recent_history");
      if (!raw) return [];
      return JSON.parse(raw).slice(0, 5) as { path: string; title: string }[];
    } catch {
      return [];
    }
  }, [focused]);

  // Debounced async search
  const doSearch = useCallback(async (q: string) => {
    if (q.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const { fullTextSearch } = await import("@/lib/searchEngine");
    const results = await fullTextSearch(q.trim());
    setSearchResults(results.slice(0, 8));
    setIsSearching(false);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => doSearch(query), 200);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query, doSearch]);

  const suggestions = useMemo((): Suggestion[] => {
    if (query.trim().length >= 2) {
      return searchResults.map(r => ({
        label: r.title,
        path: r.path,
        type: "result" as const,
        icon: r.icon,
        snippet: r.snippet,
      }));
    }
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

  const showDropdown = focused && (suggestions.length > 0 || isSearching);
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
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="p-1 rounded-full hover:bg-muted text-muted-foreground"
            >
              <X size={16} />
            </button>
          )}
          {speechSupported && (
            <button
              type="button"
              onClick={toggleVoice}
              className={`p-1.5 rounded-full transition-all ${
                isListening
                  ? "bg-destructive/15 text-destructive animate-pulse"
                  : "hover:bg-muted text-muted-foreground"
              }`}
              aria-label={isListening ? "Parar gravação" : "Buscar por voz"}
            >
              {isListening ? <MicOff size={16} /> : <Mic size={16} />}
            </button>
          )}
        </div>
      </form>

      {isListening && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-destructive/10 border border-destructive/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
          </span>
          <span className="text-xs font-heading text-destructive font-medium">Ouvindo... fale o termo desejado</span>
        </motion.div>
      )}
          >
            {query.trim().length >= 2 && totalResults > 0 && (
              <div className="px-4 py-2 bg-muted/30 border-b border-border/50">
                <span className="text-[10px] font-heading font-medium text-muted-foreground uppercase tracking-wider">
                  {totalResults} resultado{totalResults !== 1 ? "s" : ""} · Busca em conteúdo
                </span>
              </div>
            )}

            {isSearching && suggestions.length === 0 && (
              <div className="px-4 py-4 flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-muted-foreground">Buscando...</span>
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
