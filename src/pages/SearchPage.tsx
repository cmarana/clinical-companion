import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { useBularioList } from "@/hooks/useBularioMedications";
import { useRecentHistory } from "@/hooks/useRecentHistory";
import { fullTextSearch, typeColors, typeLabels, categoryOrder, type SearchResult } from "@/lib/searchEngine";
import {
  Search, FileText, Pill, ClipboardList, Stethoscope, BookOpen,
  Loader2, Zap, Calculator, Hash, Clock, X, TestTubes, LayoutGrid, List
} from "lucide-react";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, React.ReactNode> = {
  protocol: <FileText size={16} />,
  prescription: <ClipboardList size={16} />,
  symptom: <Stethoscope size={16} />,
  bulario: <Pill size={16} />,
  fullProtocol: <BookOpen size={16} />,
  emergency: <Zap size={16} />,
  calculator: <Calculator size={16} />,
  cid: <Hash size={16} />,
  labValue: <TestTubes size={16} />,
};

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "grouped">("grouped");
  const { recent } = useRecentHistory();

  // Bulario search (DB-backed)
  const bularioFilters = useMemo(() => ({
    search: query.length >= 2 ? query : "",
    drugClass: null, category: null, dosageForm: null,
    route: null, controlled: null, pediatric: null, pregnancySafe: null,
  }), [query]);
  const { data: bularioMeds = [], isLoading: bularioLoading } = useBularioList(bularioFilters);

  // Full-text search across static data
  const staticResults = useMemo(() => fullTextSearch(query), [query]);

  // Merge with bulario DB results
  const allResults = useMemo<SearchResult[]>(() => {
    const bularioResults: SearchResult[] = bularioMeds.map(m => ({
      id: m.id, title: m.nome, subtitle: `${m.principio_ativo} · ${m.classe}`,
      type: "Bulário", path: `/bulario/${m.id}`, icon: "bulario" as const,
    }));
    return [...staticResults, ...bularioResults];
  }, [staticResults, bularioMeds]);

  const filteredResults = activeFilter
    ? allResults.filter(r => r.icon === activeFilter)
    : allResults;

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allResults.forEach(r => { counts[r.icon] = (counts[r.icon] || 0) + 1; });
    return counts;
  }, [allResults]);

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    filteredResults.forEach(r => {
      if (!groups[r.icon]) groups[r.icon] = [];
      groups[r.icon].push(r);
    });
    return categoryOrder
      .filter(cat => groups[cat])
      .map(cat => ({ category: cat, label: typeLabels[cat], results: groups[cat].slice(0, 8) }));
  }, [filteredResults]);

  const filters = categoryOrder.filter(c => typeCounts[c]);

  return (
    <>
      <TopBar title="Busca Global" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        {/* Search bar */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            autoFocus
            placeholder="Protocolo, medicamento, CID, calculadora..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveFilter(null); }}
            className="w-full pl-11 pr-10 h-[48px] text-sm rounded-2xl bg-muted/60 dark:bg-muted/40 border-0 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
          {query && (
            <button onClick={() => { setQuery(""); setActiveFilter(null); }} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-accent text-muted-foreground">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Info badge */}
        {query.length >= 2 && (
          <div className="flex items-center gap-2 px-1">
            <div className="flex items-center gap-1 text-[10px] text-primary/70 bg-primary/5 rounded-full px-2.5 py-1 font-heading font-medium">
              <Search size={10} />
              Busca em conteúdo completo
            </div>
          </div>
        )}

        {/* Filter pills + view toggle */}
        {query.length >= 2 && filters.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 overflow-x-auto pb-1 flex-1">
                <button
                  onClick={() => setActiveFilter(null)}
                  className={cn(
                    "shrink-0 px-3 py-1.5 rounded-2xl text-[11px] font-heading font-medium transition-all",
                    !activeFilter ? "bg-primary text-primary-foreground" : "bg-muted/60 text-muted-foreground hover:bg-accent"
                  )}
                >
                  Todos ({allResults.length})
                </button>
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                    className={cn(
                      "shrink-0 px-3 py-1.5 rounded-2xl text-[11px] font-heading font-medium transition-all",
                      activeFilter === f ? "bg-primary text-primary-foreground" : "bg-muted/60 text-muted-foreground hover:bg-accent"
                    )}
                  >
                    {typeLabels[f]} ({typeCounts[f]})
                  </button>
                ))}
              </div>
              <div className="flex bg-muted/60 rounded-lg p-0.5 shrink-0">
                <button
                  onClick={() => setViewMode("grouped")}
                  className={cn("p-1.5 rounded-md transition-all", viewMode === "grouped" ? "bg-background shadow-sm" : "text-muted-foreground")}
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn("p-1.5 rounded-md transition-all", viewMode === "list" ? "bg-background shadow-sm" : "text-muted-foreground")}
                >
                  <List size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[11px] text-muted-foreground font-heading">{filteredResults.length} resultado(s)</p>
              {bularioLoading && <Loader2 size={12} className="animate-spin text-muted-foreground" />}
            </div>
          </div>
        )}

        {/* Grouped view */}
        {query.length >= 2 && viewMode === "grouped" && !activeFilter && groupedResults.length > 0 && (
          <div className="space-y-4">
            {groupedResults.map(group => (
              <div key={group.category}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <span className={cn("w-5 h-5 rounded-md flex items-center justify-center", typeColors[group.category])}>
                      {typeIcons[group.category]}
                    </span>
                    {group.label}
                    <span className="text-muted-foreground font-normal">({typeCounts[group.category]})</span>
                  </h3>
                  {(typeCounts[group.category] || 0) > 8 && (
                    <button
                      onClick={() => setActiveFilter(group.category)}
                      className="text-[10px] text-primary font-heading font-medium hover:underline"
                    >
                      Ver todos →
                    </button>
                  )}
                </div>
                <div className="space-y-1.5">
                  {group.results.map(r => (
                    <ResultCard key={`${r.icon}-${r.id}`} result={r} navigate={navigate} compact />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List view or filtered view */}
        {query.length >= 2 && (viewMode === "list" || activeFilter) && (
          <div className="space-y-2">
            {filteredResults.slice(0, 60).map((r) => (
              <ResultCard key={`${r.icon}-${r.id}`} result={r} navigate={navigate} />
            ))}
          </div>
        )}

        {/* Recent history when no query */}
        {query.length < 2 && recent.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={12} /> Acessados Recentemente
            </h3>
            {recent.map((entry) => (
              <div
                key={entry.path}
                onClick={() => navigate(entry.path)}
                className="cursor-pointer flex items-center gap-3 p-3 bg-card rounded-[16px] shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200"
              >
                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", typeColors[entry.type] || typeColors.protocol)}>
                  {typeIcons[entry.type] || <FileText size={16} />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-heading font-semibold text-[13px] truncate">{entry.title}</p>
                  <p className="text-[11px] text-muted-foreground">{new Date(entry.timestamp).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {query.length >= 2 && filteredResults.length === 0 && !bularioLoading && (
          <div className="text-center py-12">
            <Search size={32} className="mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm font-heading">Nenhum resultado encontrado</p>
            <p className="text-[11px] text-muted-foreground/60 mt-1">Tente outros termos ou abreviações</p>
          </div>
        )}

        {/* Suggestions when empty */}
        {query.length < 2 && recent.length === 0 && (
          <div className="text-center py-12">
            <Search size={32} className="mx-auto text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm font-heading">Busca Global Full-Text</p>
            <p className="text-[11px] text-muted-foreground/60 mt-1 max-w-xs mx-auto">
              Pesquise dentro do conteúdo de protocolos, prescrições, medicamentos, calculadoras, CID-10 e valores laboratoriais
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center mt-4">
              {["Sepse", "Amiodarona", "IAM", "Glasgow", "I21", "Hemoglobina", "Hipocalemia", "Noradrenalina"].map(s => (
                <button key={s} onClick={() => setQuery(s)}
                  className="px-3 py-1.5 rounded-2xl bg-muted/60 hover:bg-accent text-[11px] font-heading text-muted-foreground transition-all">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function ResultCard({ result: r, navigate, compact }: { result: SearchResult; navigate: (path: string) => void; compact?: boolean }) {
  return (
    <div
      onClick={() => navigate(r.path)}
      className={cn(
        "cursor-pointer flex items-center gap-3 bg-card rounded-[16px] shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200",
        compact ? "p-2.5" : "p-3"
      )}
    >
      <div className={cn("rounded-xl flex items-center justify-center shrink-0", typeColors[r.icon], compact ? "w-8 h-8" : "w-9 h-9")}>
        {typeIcons[r.icon]}
      </div>
      <div className="min-w-0 flex-1">
        <p className={cn("font-heading font-semibold truncate", compact ? "text-[12px]" : "text-[13px]")}>{r.title}</p>
        <p className={cn("text-muted-foreground truncate", compact ? "text-[10px]" : "text-[11px]")}>{r.subtitle}</p>
        {r.snippet && (
          <p className="text-[10px] text-primary/70 line-clamp-1 mt-0.5 italic">
            "{r.snippet}"
          </p>
        )}
      </div>
    </div>
  );
}
