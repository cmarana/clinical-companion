import { ExternalLink, BookOpen, ShieldCheck, Sparkles, BookX } from "lucide-react";
import type { GuidelineSource } from "@/data/fullProtocols/types";
import { cn } from "@/lib/utils";
import { EmptyHint } from "@/components/protocols/EmptyHint";

interface GuidelinesPanelProps {
  guidelines: GuidelineSource[];
  /** Quando true, renderiza com cabeçalho próprio (uso fora da aba "Referências"). */
  withHeader?: boolean;
  className?: string;
  /**
   * Quando true e `guidelines` estiver vazio, mostra um indicador
   * "Sem diretrizes bibliográficas" em vez de retornar null.
   * Default: true (evita áreas em branco).
   */
  showEmptyState?: boolean;
}

const RECENT_YEAR_THRESHOLD = 2025;

/**
 * Lista as diretrizes/fontes oficiais de um protocolo com link clicável.
 * Permite auditoria e verificação rápida da última atualização.
 * Diretrizes ≥2025 recebem badge "Atualizado" e destaque visual.
 */
export function GuidelinesPanel({
  guidelines,
  withHeader = true,
  className,
  showEmptyState = true,
}: GuidelinesPanelProps) {
  if (!guidelines || guidelines.length === 0) {
    if (!showEmptyState) return null;
    return (
      <EmptyHint
        icon={BookX}
        tone="neutral"
        title="Sem diretrizes bibliográficas"
        description="Este protocolo ainda não possui fontes oficiais indexadas. A equipe PULSO está revisando continuamente — novas diretrizes serão adicionadas em breve."
        className={className}
      />
    );
  }

  // Mais recentes primeiro
  const sorted = [...guidelines].sort((a, b) => b.year - a.year);
  const recentCount = sorted.filter((g) => g.year >= RECENT_YEAR_THRESHOLD).length;

  return (
    <section
      aria-label="Fontes e diretrizes oficiais"
      className={cn("rounded-lg border border-border bg-card/50", className)}
    >
      {withHeader && (
        <header className="flex items-center gap-2 px-3 py-2 border-b border-border">
          <BookOpen size={14} className="text-primary" />
          <h3 className="text-xs font-semibold font-heading text-foreground">
            Fontes e diretrizes oficiais
          </h3>
          {recentCount > 0 && (
            <span className="inline-flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-primary0/15 text-primary dark:text-primary">
              <Sparkles size={9} />
              {recentCount} {recentCount === 1 ? "atualizada" : "atualizadas"}
            </span>
          )}
          <span className="text-[10px] text-muted-foreground ml-auto">
            {sorted.length} {sorted.length === 1 ? "fonte" : "fontes"}
          </span>
        </header>
      )}

      <ul className="divide-y divide-border">
        {sorted.map((g, i) => {
          const isRecent = g.year >= RECENT_YEAR_THRESHOLD;
          return (
            <li
              key={`${g.society}-${g.year}-${i}`}
              className={cn(
                "p-3 transition-colors",
                isRecent && "bg-primary0/5 border-l-2 border-l-emerald-500/40",
              )}
            >
              <div className="flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                      {g.society}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-medium",
                        isRecent
                          ? "text-primary dark:text-primary font-bold"
                          : "text-muted-foreground",
                      )}
                    >
                      {g.year}
                    </span>
                    {isRecent && (
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary0/15 text-primary dark:text-primary">
                        <Sparkles size={8} />
                        ATUALIZADO
                      </span>
                    )}
                    {g.class && (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded",
                          g.class === "I" && "bg-primary0/15 text-primary dark:text-primary",
                          g.class === "IIa" && "bg-primary0/15 text-primary dark:text-primary",
                          g.class === "IIb" && "bg-destructive0/15 text-destructive dark:text-destructive",
                          g.class === "III" && "bg-destructive0/15 text-destructive dark:text-destructive",
                        )}
                      >
                        <ShieldCheck size={10} />
                        Classe {g.class}
                        {g.level ? ` · ${g.level}` : ""}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug mb-1">
                    {g.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {g.recommendation}
                  </p>
                </div>
                <a
                  href={g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline px-2 py-1 rounded-md hover:bg-primary/5"
                  aria-label={`Abrir diretriz ${g.society} ${g.year} em nova aba`}
                >
                  Abrir
                  <ExternalLink size={11} />
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      <footer className="px-3 py-2 border-t border-border">
        <p className="text-[10px] text-muted-foreground italic">
          Verifique sempre a versão mais recente da diretriz no site oficial. Conteúdo de apoio à decisão clínica.
        </p>
      </footer>
    </section>
  );
}

