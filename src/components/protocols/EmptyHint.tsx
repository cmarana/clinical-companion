import { Info, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyHintProps {
  /** Título principal (ex.: "Sem diretrizes bibliográficas"). */
  title: string;
  /** Texto secundário opcional explicando o motivo / próxima ação. */
  description?: string;
  /** Ícone customizado (default: Info). */
  icon?: LucideIcon;
  /** Variante visual. */
  tone?: "neutral" | "info" | "warning";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Indicador visual padronizado para áreas vazias dentro dos protocolos.
 * Evita "telas em branco" quando uma seção/aba/painel não tem conteúdo
 * (ex.: protocolo sem diretrizes, sem fluxograma, sem calculadora).
 */
export function EmptyHint({
  title,
  description,
  icon: Icon = Info,
  tone = "neutral",
  className,
  children,
}: EmptyHintProps) {
  const tones = {
    neutral: "bg-muted/40 ring-border/60 text-muted-foreground",
    info: "bg-primary/5 ring-primary/20 text-primary",
    warning: "bg-amber-500/10 ring-amber-500/30 text-amber-700 dark:text-amber-400",
  } as const;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center text-center gap-2 px-4 py-6 rounded-xl ring-1",
        tones[tone],
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-9 h-9 rounded-full",
          tone === "neutral" && "bg-background/60",
          tone === "info" && "bg-primary/10",
          tone === "warning" && "bg-amber-500/15",
        )}
      >
        <Icon size={16} aria-hidden />
      </div>
      <p className="text-xs font-heading font-semibold text-foreground">{title}</p>
      {description && (
        <p className="text-[11px] leading-relaxed text-muted-foreground max-w-xs">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
