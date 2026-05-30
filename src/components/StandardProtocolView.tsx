import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BookOpen, Activity, Stethoscope, GitBranch, AlertTriangle,
  ListChecks, Pill, LineChart, AlertOctagon, CheckSquare,
  LogOut, Library, FileText,
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
  const { standard, extras } = useMemo(
    () => normalizeProtocolSections(sections),
    [sections],
  );

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {standard.map(({ spec, content, sourceTitles }) => {
        const Icon = ICONS[spec.icon] ?? FileText;
        const accent = spec.accent ?? "muted";
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

      {extras.length > 0 && (
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
            {extras.map(s => (
              <article key={s.id}>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-1.5">
                  {s.title}
                </h3>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{s.content}</ReactMarkdown>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
