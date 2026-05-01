import { ExternalLink, BookOpen, ShieldCheck } from "lucide-react";
import type { GuidelineSource } from "@/data/fullProtocols/types";
import { cn } from "@/lib/utils";

interface GuidelinesPanelProps {
  guidelines: GuidelineSource[];
  /** Quando true, renderiza com cabeçalho próprio (uso fora da aba "Referências"). */
  withHeader?: boolean;
  className?: string;
}

/**
 * Lista as diretrizes/fontes oficiais de um protocolo com link clicável.
 * Permite auditoria e verificação rápida da última atualização.
 */
export function GuidelinesPanel({ guidelines, withHeader = true, className }: GuidelinesPanelProps) {
  if (!guidelines || guidelines.length === 0) return null;

  // Mais recentes primeiro
  const sorted = [...guidelines].sort((a, b) => b.year - a.year);

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
          <span className="text-[10px] text-muted-foreground ml-auto">
            {sorted.length} {sorted.length === 1 ? "fonte" : "fontes"}
          </span>
        </header>
      )}

      <ul className="divide-y divide-border">
        {sorted.map((g, i) => (
          <li key={`${g.society}-${g.year}-${i}`} className="p-3">
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                    {g.society}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {g.year}
                  </span>
                  {g.class && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded",
                        g.class === "I" && "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
                        g.class === "IIa" && "bg-sky-500/15 text-sky-600 dark:text-sky-400",
                        g.class === "IIb" && "bg-amber-500/15 text-amber-600 dark:text-amber-400",
                        g.class === "III" && "bg-red-500/15 text-red-600 dark:text-red-400",
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
        ))}
      </ul>

      <footer className="px-3 py-2 border-t border-border">
        <p className="text-[10px] text-muted-foreground italic">
          Verifique sempre a versão mais recente da diretriz no site oficial. Conteúdo de apoio à decisão clínica.
        </p>
      </footer>
    </section>
  );
}
