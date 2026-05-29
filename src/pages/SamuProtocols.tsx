import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ChevronRight, Filter, X, ExternalLink, Radio, AlertTriangle } from "lucide-react";
import TopBar from "@/components/TopBar";
import { cn } from "@/lib/utils";
import {
  samuProtocols,
  SAMU_CATEGORIES,
  type SamuProtocol,
  type SamuProtocolLevel,
  type SamuCoverageStatus,
  type SamuContentStatus,
} from "@/data/samuProtocols";
import { resolvePulsoProtocolLink } from "@/data/samuPulsoLinks";

const LEVELS: SamuProtocolLevel[] = ["SBV", "SAV"];

const COVERAGE_OPTIONS: SamuCoverageStatus[] = [
  "Encontrado",
  "Parcial",
  "Não localizado",
  "Operacional SAMU",
  "Sem título no sumário",
];

const CONTENT_OPTIONS: SamuContentStatus[] = [
  "Completo",
  "Precisa revisar",
  "Precisa criar",
  "Não aplicável",
];

const COVERAGE_TONE: Record<SamuCoverageStatus, string> = {
  "Encontrado":          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Parcial":             "bg-amber-500/10  text-amber-700  dark:text-amber-300  border-amber-500/20",
  "Não localizado":      "bg-red-500/10    text-red-700    dark:text-red-300    border-red-500/20",
  "Operacional SAMU":    "bg-sky-500/10    text-sky-700    dark:text-sky-300    border-sky-500/20",
  "Sem título no sumário": "bg-muted text-muted-foreground border-border",
};

const CONTENT_TONE: Record<SamuContentStatus, string> = {
  "Completo":        "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Precisa revisar": "bg-amber-500/10  text-amber-700  dark:text-amber-300  border-amber-500/20",
  "Precisa criar":   "bg-red-500/10    text-red-700    dark:text-red-300    border-red-500/20",
  "Não aplicável":   "bg-muted text-muted-foreground border-border",
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

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={cn(
      "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wide border",
      className
    )}>
      {children}
    </span>
  );
}

export default function SamuProtocols() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState<"all" | SamuProtocolLevel>("all");
  const [category, setCategory] = useState<"all" | string>("all");
  const [coverage, setCoverage] = useState<"all" | SamuCoverageStatus>("all");
  const [content, setContent] = useState<"all" | SamuContentStatus>("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return samuProtocols.filter(p => {
      if (level !== "all" && p.level !== level) return false;
      if (category !== "all" && p.category !== category) return false;
      if (coverage !== "all" && p.coverageStatus !== coverage) return false;
      if (content !== "all" && p.contentStatus !== content) return false;
      if (!q) return true;
      const hay = [
        p.code, p.title, p.category,
        p.relatedPulsoProtocolTitle ?? "",
        ...(p.tags ?? []),
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [search, level, category, coverage, content]);

  const grouped = useMemo(() => {
    const map = new Map<string, SamuProtocol[]>();
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return SAMU_CATEGORIES
      .map(c => ({ category: c, items: map.get(c) ?? [] }))
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
                Matriz SAMU 192
              </h1>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Matriz de referência baseada nos protocolos nacionais do SAMU 192, organizada para mapear cobertura, lacunas e prioridades clínicas do Pulso.
              </p>
            </div>
          </div>
        </div>

        {/* Acesso rápido às Lacunas */}
        <button
          onClick={() => navigate("/samu-protocols/gaps")}
          className="w-full rounded-xl bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/25 hover:border-amber-500/40 p-3 flex items-center gap-2.5 text-left transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={15} className="text-amber-600 dark:text-amber-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-heading font-semibold text-[12.5px] text-foreground leading-tight">
              Lacunas do Pulso
            </p>
            <p className="text-[10.5px] text-muted-foreground leading-snug">
              Painel de priorização: o que falta criar, revisar ou complementar
            </p>
          </div>
          <ChevronRight size={15} className="text-muted-foreground flex-shrink-0" />
        </button>

        {/* Busca */}
        <div className="relative">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Buscar por código, título, categoria ou tag..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 h-11 text-sm rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/25 transition-all placeholder:text-muted-foreground/60 font-heading"
          />
        </div>

        {/* Nível + botão filtros */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <Pill active={level === "all"} onClick={() => setLevel("all")}>Todos níveis</Pill>
          {LEVELS.map(l => (
            <Pill key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Pill>
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

        {/* Filtros avançados */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-card border border-border p-3 space-y-3"
          >
            <div>
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Categoria
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Pill active={category === "all"} onClick={() => setCategory("all")}>Todas</Pill>
                {SAMU_CATEGORIES.map(c => (
                  <Pill key={c} active={category === c} onClick={() => setCategory(c)}>{c}</Pill>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Cobertura no Pulso
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Pill active={coverage === "all"} onClick={() => setCoverage("all")}>Todas</Pill>
                {COVERAGE_OPTIONS.map(k => (
                  <Pill key={k} active={coverage === k} onClick={() => setCoverage(k)}>{k}</Pill>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10.5px] font-heading font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Status do conteúdo
              </p>
              <div className="flex flex-wrap gap-1.5">
                <Pill active={content === "all"} onClick={() => setContent("all")}>Todos</Pill>
                {CONTENT_OPTIONS.map(k => (
                  <Pill key={k} active={content === k} onClick={() => setContent(k)}>{k}</Pill>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <p className="text-[11px] text-muted-foreground px-1">
          {filtered.length} protocolo{filtered.length === 1 ? "" : "s"}
        </p>

        {grouped.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            Nenhum protocolo encontrado com os filtros atuais.
          </div>
        )}

        {grouped.map(({ category, items }) => (
          <section key={category} className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-heading font-bold text-[12px] uppercase tracking-wider text-muted-foreground">
                {category}
              </h2>
              <span className="text-[10.5px] text-muted-foreground">{items.length}</span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {items.map(p => {
                const resolvedPath = resolvePulsoProtocolLink(
                  p.relatedPulsoProtocolTitle,
                  p.relatedPulsoProtocolSlug,
                );
                return (
                <motion.div
                  key={p.id}
                  whileTap={{ scale: 0.995 }}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="p-3.5 space-y-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        {p.code}
                      </span>
                      <Badge className={p.level === "SAV"
                        ? "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20"
                        : "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20"}>
                        {p.level}
                      </Badge>
                      <Badge className={COVERAGE_TONE[p.coverageStatus]}>
                        {p.coverageStatus}
                      </Badge>
                      <Badge className={CONTENT_TONE[p.contentStatus]}>
                        {p.contentStatus}
                      </Badge>
                    </div>

                    <h3 className="font-heading font-semibold text-[13.5px] text-foreground leading-snug">
                      {p.title}
                    </h3>

                    {p.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {p.tags.slice(0, 4).map(t => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {p.relatedPulsoProtocolTitle && (
                      <div className="rounded-lg bg-primary/5 border border-primary/15 px-2.5 py-1.5 text-[11px] flex items-center gap-1.5">
                        <span className="text-muted-foreground shrink-0">
                          {resolvedPath ? "Relacionado:" : "Relacionado no Pulso:"}
                        </span>
                        <span className="font-heading font-semibold text-foreground truncate flex-1">
                          {p.relatedPulsoProtocolTitle}
                        </span>
                      </div>
                    )}

                    {p.notes && (
                      <p className="text-[11px] text-muted-foreground italic leading-snug">
                        {p.notes}
                      </p>
                    )}

                    <div className="flex items-center gap-2 pt-1">
                      {resolvedPath ? (
                        <>
                          <button
                            onClick={() => navigate(resolvedPath)}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-primary text-primary-foreground text-[12px] font-heading font-semibold hover:bg-primary/90 transition"
                            title="Abrir protocolo clínico do Pulso"
                          >
                            <ExternalLink size={13} />
                            Ver protocolo no Pulso
                          </button>
                          <button
                            onClick={() => navigate(`/samu-protocols/${encodeURIComponent(p.code)}`)}
                            className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-card border border-border text-foreground text-[12px] font-heading font-semibold hover:border-primary/40 transition"
                            title="Detalhes na matriz SAMU"
                          >
                            Matriz
                            <ChevronRight size={13} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => navigate(`/samu-protocols/${encodeURIComponent(p.code)}`)}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-primary text-primary-foreground text-[12px] font-heading font-semibold hover:bg-primary/90 transition"
                        >
                          Abrir na matriz SAMU
                          <ChevronRight size={13} />
                        </button>
                      )}
                    </div>


                    <p className="text-[10px] text-muted-foreground/70 pt-1">
                      Fonte: {p.source}
                    </p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Disclaimer de segurança clínica */}
        <div className="mt-6 rounded-xl border border-border bg-muted/30 p-3">
          <p className="text-[10.5px] text-muted-foreground leading-snug">
            <strong className="text-foreground">Aviso:</strong> A Matriz SAMU é uma ferramenta de organização e auditoria de conteúdo. Protocolos marcados como "Precisa criar" ou "Precisa revisar" não devem ser interpretados como conduta assistencial completa.
          </p>
        </div>
      </div>
    </>
  );
}
