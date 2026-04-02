import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Clock, TrendingUp, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { safeLocalStorage } from "@/lib/safeStorage";
import { hapticLight } from "@/lib/haptics";

interface Suggestion {
  label: string;
  path: string;
  type: "recent" | "popular" | "specialty";
}

// Popular terms by specialty
const specialtySuggestions: Record<string, string[]> = {
  "emergencia": ["PCR", "Sepse", "IOT", "Choque", "IAM", "Cetoacidose", "AVC"],
  "pediatria": ["Dose pediátrica", "Bronquiolite", "Febre sem foco", "Desidratação", "Meningite"],
  "clinica-medica": ["Hipertensão", "Diabetes", "DPOC", "ICC", "Pneumonia", "ITU"],
  "ginecologia-obstetricia": ["Pré-eclâmpsia", "Hemorragia pós-parto", "Trabalho de parto", "DMG"],
  "cirurgia": ["Abdome agudo", "Apendicite", "Colecistite", "Sutura", "Drenagem torácica"],
  "infectologia": ["Antimicrobianos", "HIV", "Tuberculose", "Meningite", "Sepse"],
  "psiquiatria-neuro": ["Convulsão", "AVC", "Delirium", "Agitação psicomotora", "Cefaleia"],
  "generalista": ["PCR", "Sepse", "Calculadoras", "Prescrições", "Antimicrobianos"],
  "todas": ["PCR", "Sepse", "Calculadoras", "Prescrições", "Bulário", "Protocolos"],
};

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

  // Load recent history
  const recentHistory = useMemo(() => {
    try {
      const raw = safeLocalStorage.getItem("psguide_recent_history");
      if (!raw) return [];
      return JSON.parse(raw).slice(0, 5) as { path: string; title: string }[];
    } catch {
      return [];
    }
  }, [focused]); // re-read when focused

  // Build suggestions
  const suggestions = useMemo((): Suggestion[] => {
    const results: Suggestion[] = [];

    if (query.trim().length >= 1) {
      const q = query.toLowerCase();

      // Filter recent history by query
      recentHistory
        .filter(h => h.title.toLowerCase().includes(q))
        .slice(0, 3)
        .forEach(h => results.push({ label: h.title, path: h.path, type: "recent" }));

      // Filter specialty suggestions
      const specTerms = specialtySuggestions[specialty || "todas"] || specialtySuggestions["todas"];
      specTerms
        .filter(t => t.toLowerCase().includes(q))
        .slice(0, 3)
        .forEach(t => results.push({ label: t, path: `/search?q=${encodeURIComponent(t)}`, type: "specialty" }));

      // Filter popular
      defaultPopular
        .filter(p => p.label.toLowerCase().includes(q))
        .slice(0, 2)
        .forEach(p => results.push({ label: p.label, path: p.path, type: "popular" }));
    } else {
      // Show recent + specialty when empty and focused
      recentHistory.slice(0, 3).forEach(h =>
        results.push({ label: h.title, path: h.path, type: "recent" })
      );

      const specTerms = specialtySuggestions[specialty || "todas"] || specialtySuggestions["todas"];
      specTerms.slice(0, 4).forEach(t =>
        results.push({ label: t, path: `/search?q=${encodeURIComponent(t)}`, type: "specialty" })
      );
    }

    // Deduplicate by label
    const seen = new Set<string>();
    return results.filter(r => {
      const key = r.label.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 7);
  }, [query, specialty, recentHistory]);

  // Close on outside click
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

  const typeIcon = (type: Suggestion["type"]) => {
    switch (type) {
      case "recent": return <Clock size={14} className="text-muted-foreground shrink-0" />;
      case "popular": return <TrendingUp size={14} className="text-primary shrink-0" />;
      case "specialty": return <Search size={14} className="text-primary/60 shrink-0" />;
    }
  };

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

      {/* Dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-card rounded-2xl shadow-lg border border-border overflow-hidden"
          >
            {suggestions.map((s, i) => (
              <button
                key={`${s.type}-${s.label}-${i}`}
                onClick={() => handleSuggestionClick(s)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 active:bg-muted transition-colors border-b border-border/50 last:border-0"
              >
                {typeIcon(s.type)}
                <span className="font-heading text-[13px] truncate flex-1">{s.label}</span>
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
                  Buscar "{query.trim()}" em tudo
                </span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
