import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ChevronRight, Filter, X, ExternalLink, Radio } from "lucide-react";
import TopBar from "@/components/TopBar";
import { cn } from "@/lib/utils";
import {
  samuProtocols,
  SAMU_CATEGORIES,
  SAMU_LEVELS,
  SAMU_COVERAGE_META,
  SAMU_CONTENT_META,
  type SamuProtocol,
  type SamuProtocolLevel,
  type SamuProtocolCategory,
  type SamuCoverageStatus,
  type SamuContentStatus,
} from "@/data/samuProtocols";

/** Mapa de tonalidades semânticas (tokens HSL definidos em index.css). */
const TONE_CLASSES: Record<string, string> = {
  ok:      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  warn:    "bg-amber-500/10  text-amber-700  dark:text-amber-300  border-amber-500/20",
  danger:  "bg-red-500/10    text-red-700    dark:text-red-300    border-red-500/20",
  info:    "bg-sky-500/10    text-sky-700    dark:text-sky-300    border-sky-500/20",
  neutral: "bg-muted         text-muted-foreground                 border-border",
};

function Pill({
  active, onClick, children,
}: { active?: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 px-3 py-1.5 rounded-full text-[11.5px] font-heading font-medium border transition-all",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-foreground border-border hover:border-primary/40"
      )}
    >
      {children}
    </button>
  );
}

function Badge({ tone, children }: { tone: string; children: React.ReactNode }) {
  return (
    <span className={cn(
      "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wide border",
      TONE_CLASSES[tone] ?? TONE_CLASSES.neutral
    )}>
      {children}
    </span>
  );
}

export default function SamuProtocols() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState<"all" | SamuProtocolLevel>("all");
  const [category, setCategory] = useState<"all" | SamuProtocolCategory>("all");
  const [coverage, setCoverage] = useState<"all" | SamuCoverageStatus>("all");
  const [content, setContent] = useState<"all" | SamuContentStatus>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return samuProtocols.filter(p => {
      if (level !== "all" && p.level !== level) return false;
      if (category !== "all" && p.category !== category) return false;
      if (coverage !== "all" && p.coverage !== coverage) return false;
      if (content !== "all" && p.content !== content) return false;
      if (!q) return true;
      const hay = [
        p.code, p.title, p.summary ?? "",
        ...(p.tags ?? []),
        SAMU_CATEGORIES.find(c => c.id === p.category)?.title ?? "",
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [search, level, category, coverage, content]);

  // Agrupa por categoria para exibição.
  const grouped = useMemo(() => {
    const map = new Map<SamuProtocolCategory, SamuProtocol[]>();
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return SAMU_CATEGORIES
      .map(c => ({ cat: c, items: map.get(c.id) ?? [] }))
      .filter(g => g.items.length > 0);
  }, [filtered]);

  const activeFilterCount =
    (level !== "all" ? 1 : 0) +
    (category !== "all" ? 1 : 0) +
    (coverage !== "all" ? 1 : 0) +
    (content !== "all" ? 1 : 0);

  const clearFilters = () => {
    setLevel("all"); setCategory("all"); setCoverage("all"); setContent("all");
  };

  return (
    <>
      <TopBar title="Matriz SAMU 192" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">

        {/* Banner institucional */}
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Radio size={18} className="text-primary" />
            </div>
            <div className="min-w-0">
              <h1 className="font-heading font-bold text-[13.5px] text-foreground leading-tight">
                Protocolos SAMU 192
              </h1>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Matriz nacional de protocolos pré-hospitalares — SBV e SAV
              </p>
            </div>
          </div>
        </div>

        {/* Busca */}
        <div className="relative">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar por código, título ou tag..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 h-11 text-sm rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {/* Linha de filtros rápidos: nível */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <Pill active={level === "all"} onClick={() => setLevel("all")}>Todos níveis</Pill>
          {SAMU_LEVELS.map(l => (
            <Pill key={l.id} active={level === l.id} onClick={() => setLevel(l.id)}>
              {l.title}
            </Pill>
          ))}
          <div className="w-px bg-border mx-1 my-1 flex-shrink-0" />
          <button
            onClick={() => setShowFilters(v => !v)}
            className={cn(
              "shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-heading font-medium border transition-all",
              activeFilterCount > 0
                ? "bg-primary/10 text-primary border-primary/30"
                : "bg-card text-foreground border-border hover:border-primary/40"
            )}
          >
            <Filter size={12} />
            Filtros
            {activeFilterCount > 0 && (
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11.5px] font-heading text-muted-foreground hover:text-foreground transition"
            >
              <X size={12} /> Limpar
            </button>
          )}
        </div>

        {/* Painel de filtros avançados */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-card border border-border p-3 space-y-3"
          >
            {/* Categoria */}
            <div>
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Categoria
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Pill active={category === "all"} onClick={() => setCategory("all")}>Todas</Pill>
                {SAMU_CATEGORIES.map(c => (
                  <Pill key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                    {c.short}
                  </Pill>
                ))}
              </div>
            </div>
            {/* Cobertura */}
            <div>
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Cobertura no Pulso
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Pill active={coverage === "all"} onClick={() => setCoverage("all")}>Todas</Pill>
                {(Object.keys(SAMU_COVERAGE_META) as SamuCoverageStatus[]).map(k => (
                  <Pill key={k} active={coverage === k} onClick={() => setCoverage(k)}>
                    {SAMU_COVERAGE_META[k].label}
                  </Pill>
                ))}
              </div>
            </div>
            {/* Conteúdo */}
            <div>
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Status do conteúdo
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Pill active={content === "all"} onClick={() => setContent("all")}>Todos</Pill>
                {(Object.keys(SAMU_CONTENT_META) as SamuContentStatus[]).map(k => (
                  <Pill key={k} active={content === k} onClick={() => setContent(k)}>
                    {SAMU_CONTENT_META[k].label}
                  </Pill>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Contagem */}
        <p className="text-[11px] text-muted-foreground px-1">
          {filtered.length} protocolo{filtered.length === 1 ? "" : "s"}
        </p>

        {/* Lista agrupada */}
        {grouped.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            Nenhum protocolo encontrado com os filtros atuais.
          </div>
        )}

        {grouped.map(({ cat, items }) => (
          <section key={cat.id} className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-heading font-bold text-[12px] uppercase tracking-wider text-muted-foreground">
                {cat.title}
              </h2>
              <span className="text-[10.5px] text-muted-foreground">{items.length}</span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {items.map(p => (
                <motion.div
                  key={p.code}
                  whileTap={{ scale: 0.995 }}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="p-3.5 space-y-2.5">
                    {/* Cabeçalho: código + nível */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        {p.code}
                      </span>
                      <Badge tone={p.level === "SAV" ? "danger" : "info"}>
                        {p.level}
                      </Badge>
                      <Badge tone={SAMU_COVERAGE_META[p.coverage].tone}>
                        {SAMU_COVERAGE_META[p.coverage].label}
                      </Badge>
                      <Badge tone={SAMU_CONTENT_META[p.content].tone}>
                        {SAMU_CONTENT_META[p.content].label}
                      </Badge>
                    </div>

                    {/* Título */}
                    <h3 className="font-heading font-semibold text-[13.5px] text-foreground leading-snug">
                      {p.title}
                    </h3>

                    {/* Resumo */}
                    {p.summary && (
                      <p className="text-[12px] text-muted-foreground leading-snug">
                        {p.summary}
                      </p>
                    )}

                    {/* Tags */}
                    {p.tags && p.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {p.tags.slice(0, 4).map(t => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Relacionado */}
                    {p.related && (
                      <div className="rounded-lg bg-primary/5 border border-primary/15 px-2.5 py-1.5 text-[11px] flex items-center gap-1.5">
                        <span className="text-muted-foreground">Relacionado:</span>
                        <span className="font-heading font-semibold text-foreground truncate flex-1">
                          {p.related.label}
                        </span>
                      </div>
                    )}

                    {/* Ações */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => navigate(`/samu-protocols/${encodeURIComponent(p.code)}`)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-primary text-primary-foreground text-[12px] font-heading font-semibold hover:bg-primary/90 transition"
                      >
                        Ver protocolo
                        <ChevronRight size={13} />
                      </button>
                      {p.related && (
                        <button
                          onClick={() => navigate(p.related!.route)}
                          className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-card border border-border text-foreground text-[12px] font-heading font-semibold hover:border-primary/40 transition"
                          title="Abrir protocolo relacionado"
                        >
                          <ExternalLink size={13} />
                          <span className="hidden sm:inline">Relacionado</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
