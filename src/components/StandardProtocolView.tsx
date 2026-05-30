import { useMemo, useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BookOpen, Activity, Stethoscope, GitBranch, AlertTriangle,
  ListChecks, Pill, LineChart, AlertOctagon, CheckSquare,
  LogOut, Library, FileText, Search, X,
} from "lucide-react";
import {
  normalizeProtocolSections,
  type RawProtocolSection,
  type StandardSectionSpec,
} from "@/data/protocolTemplate";
import { cn } from "@/lib/utils";

const ICONS: Record<string, typeof BookOpen> = {
  BookOpen, Activity, Stethoscope, GitBranch, AlertTriangle,
  ListChecks, Pill, LineChart, AlertOctagon, CheckSquare,
  LogOut, Library, FileText,
};

const ACCENT_CLASSES: Record<NonNullable<StandardSectionSpec["accent"]>, string> = {
  primary: "border-primary/30 bg-primary/5",
  destructive: "border-destructive/30 bg-destructive/5",
  warning: "border-amber-500/30 bg-amber-500/5",
  success: "border-emerald-500/30 bg-emerald-500/5",
  muted: "border-border bg-muted/40",
};

const ICON_ACCENT: Record<NonNullable<StandardSectionSpec["accent"]>, string> = {
  primary: "text-primary",
  destructive: "text-destructive",
  warning: "text-amber-600 dark:text-amber-400",
  success: "text-emerald-600 dark:text-emerald-400",
  muted: "text-muted-foreground",
};

function countMatches(text: string, query: string): number {
  if (!query) return 0;
  const normalizedText = text.normalize("NFD").toLowerCase();
  const normalizedQuery = query.normalize("NFD").toLowerCase();
  let count = 0;
  let idx = normalizedText.indexOf(normalizedQuery);
  while (idx !== -1) {
    count++;
    idx = normalizedText.indexOf(normalizedQuery, idx + 1);
  }
  return count;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightText({ value, query }: { value: string; query: string }) {
  if (!query) return <>{value}</>;
  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  const parts = value.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            className="bg-primary/20 text-primary dark:text-primary rounded px-0.5 font-semibold"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

interface Props {
  sections: RawProtocolSection[];
  /** Quando true, mostra um chip com os títulos originais agrupados no slot. */
  showSourceTitles?: boolean;
  className?: string;
}

/**
 * Renderiza qualquer array de seções no template padrão PULSO,
 * mapeando títulos legados (Manejo→Conduta, Apresentação Clínica→Diagnóstico…)
 * automaticamente. Seções não previstas aparecem em "Outras Seções".
 */
export default function StandardProtocolView({
  sections,
  showSourceTitles = false,
  className,
}: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { standard, extras } = useMemo(
    () => normalizeProtocolSections(sections),
    [sections],
  );

  const trimmedQuery = query.trim();

  const filteredStandard = useMemo(() => {
    if (!trimmedQuery) return standard;
    return standard.filter(
      s =>
        countMatches(s.spec.title, trimmedQuery) > 0 ||
        countMatches(s.content, trimmedQuery) > 0 ||
        s.sourceTitles.some(t => countMatches(t, trimmedQuery) > 0),
    );
  }, [standard, trimmedQuery]);

  const filteredExtras = useMemo(() => {
    if (!trimmedQuery) return extras;
    return extras.filter(
      s =>
        countMatches(s.title, trimmedQuery) > 0 ||
        countMatches(s.content, trimmedQuery) > 0,
    );
  }, [extras, trimmedQuery]);

  const totalMatches = useMemo(() => {
    if (!trimmedQuery) return 0;
    let total = 0;
    for (const s of filteredStandard) {
      total += countMatches(s.spec.title, trimmedQuery);
      total += countMatches(s.content, trimmedQuery);
      for (const t of s.sourceTitles) total += countMatches(t, trimmedQuery);
    }
    for (const s of filteredExtras) {
      total += countMatches(s.title, trimmedQuery);
      total += countMatches(s.content, trimmedQuery);
    }
    return total;
  }, [filteredStandard, filteredExtras, trimmedQuery]);

  // Keyboard shortcut: Cmd/Ctrl + K to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.blur();
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Search bar */}
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Filtrar seções, checklist, erros comuns…"
          className={cn(
            "flex h-10 w-full rounded-xl border border-input bg-background pl-9 pr-16 py-2 text-sm",
            "ring-offset-background placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {trimmedQuery && (
            <button
              onClick={clearSearch}
              className="p-1 rounded-md hover:bg-accent transition-colors"
              aria-label="Limpar busca"
            >
              <X size={13} className="text-muted-foreground" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Results summary */}
      {trimmedQuery && (
        <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
          <span>
            {totalMatches} ocorrência{totalMatches !== 1 ? "s" : ""} em{" "}
            {filteredStandard.length + filteredExtras.length} seção
            {filteredStandard.length + filteredExtras.length !== 1 ? "s" : ""}
          </span>
          {totalMatches === 0 && (
            <span className="text-destructive font-medium">Nenhum resultado</span>
          )}
        </div>
      )}

      {filteredStandard.map(({ spec, content, sourceTitles }) => {
        const Icon = ICONS[spec.icon] ?? FileText;
        const accent = spec.accent ?? "muted";
        const sectionMatches = trimmedQuery
          ? countMatches(spec.title, trimmedQuery) +
            countMatches(content, trimmedQuery) +
            sourceTitles.reduce((a, t) => a + countMatches(t, trimmedQuery), 0)
          : 0;

        return (
          <section
            key={spec.id}
            id={`section-${spec.id}`}
            className={cn(
              "rounded-2xl border p-4 md:p-5",
              ACCENT_CLASSES[accent],
            )}
          >
            <header className="flex items-center gap-2 mb-3">
              <Icon className={cn("h-5 w-5 shrink-0", ICON_ACCENT[accent])} />
              <h2 className="font-heading text-base md:text-lg font-semibold text-foreground">
                {spec.title}
              </h2>
              {trimmedQuery && sectionMatches > 0 && (
                <span className="ml-auto text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-primary/15 text-primary">
                  {sectionMatches} match{sectionMatches !== 1 ? "es" : ""}
                </span>
              )}
              {showSourceTitles && sourceTitles.length > 0 && (
                <span className="ml-auto text-[10px] text-muted-foreground font-mono truncate max-w-[40%]">
                  {sourceTitles.join(" · ")}
                </span>
              )}
            </header>
            <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-heading prose-p:leading-relaxed">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          </section>
        );
      })}

      {filteredExtras.length > 0 && (
        <section
          id="section-extras"
          className="rounded-2xl border border-dashed border-border bg-card p-4 md:p-5"
        >
          <header className="flex items-center gap-2 mb-3">
            <FileText className="h-5 w-5 shrink-0 text-muted-foreground" />
            <h2 className="font-heading text-base md:text-lg font-semibold text-foreground">
              Outras Seções
            </h2>
          </header>
          <div className="flex flex-col gap-4">
            {filteredExtras.map(s => {
              const sectionMatches = trimmedQuery
                ? countMatches(s.title, trimmedQuery) + countMatches(s.content, trimmedQuery)
                : 0;
              return (
                <article key={s.id}>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                    {s.title}
                    {trimmedQuery && sectionMatches > 0 && (
                      <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-primary/15 text-primary">
                        {sectionMatches} match{sectionMatches !== 1 ? "es" : ""}
                      </span>
                    )}
                  </h3>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{s.content}</ReactMarkdown>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {trimmedQuery && filteredStandard.length === 0 && filteredExtras.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground gap-2">
          <Search size={32} className="opacity-30" />
          <p className="text-sm">Nenhuma seção corresponde a "{trimmedQuery}"</p>
          <button
            onClick={clearSearch}
            className="text-xs text-primary hover:underline"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
}
