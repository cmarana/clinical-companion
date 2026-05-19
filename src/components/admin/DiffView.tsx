import { useMemo, useState } from "react";
import { diffLines, diffStats, type DiffLine } from "@/lib/diff";
import { cn } from "@/lib/utils";
import { Columns2, AlignLeft } from "lucide-react";

interface DiffViewProps {
  oldText: string;
  newText: string;
  oldLabel?: string;
  newLabel?: string;
  /** Quando true, força modo unificado (mobile). */
  forceUnified?: boolean;
  className?: string;
}

/**
 * Visualizador de diff antes/depois com modos unificado e lado-a-lado.
 */
export function DiffView({
  oldText,
  newText,
  oldLabel = "Antes",
  newLabel = "Depois",
  forceUnified = false,
  className,
}: DiffViewProps) {
  const lines = useMemo(() => diffLines(oldText ?? "", newText ?? ""), [oldText, newText]);
  const stats = useMemo(() => diffStats(lines), [lines]);
  const [mode, setMode] = useState<"unified" | "split">(forceUnified ? "unified" : "split");

  return (
    <div className={cn("rounded-md border bg-card", className)}>
      <header className="flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-mono text-primary dark:text-primary">+{stats.added}</span>
          <span className="font-mono text-destructive dark:text-destructive">-{stats.removed}</span>
          <span className="font-mono text-muted-foreground">={stats.unchanged}</span>
        </div>
        {!forceUnified && (
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setMode("unified")}
              className={cn(
                "inline-flex items-center gap-1 rounded px-2 py-1 text-xs",
                mode === "unified" ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
              aria-pressed={mode === "unified"}
            >
              <AlignLeft size={12} /> Unificado
            </button>
            <button
              type="button"
              onClick={() => setMode("split")}
              className={cn(
                "inline-flex items-center gap-1 rounded px-2 py-1 text-xs",
                mode === "split" ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
              aria-pressed={mode === "split"}
            >
              <Columns2 size={12} /> Lado a lado
            </button>
          </div>
        )}
      </header>

      {mode === "unified" ? (
        <UnifiedDiff lines={lines} />
      ) : (
        <SplitDiff lines={lines} oldLabel={oldLabel} newLabel={newLabel} />
      )}
    </div>
  );
}

function UnifiedDiff({ lines }: { lines: DiffLine[] }) {
  return (
    <pre className="overflow-x-auto text-xs leading-relaxed font-mono">
      {lines.map((l, idx) => (
        <div
          key={idx}
          className={cn(
            "flex gap-2 px-3 py-0.5",
            l.op === "add" && "bg-primary/10 text-primary dark:text-primary",
            l.op === "remove" && "bg-destructive/10 text-destructive dark:text-destructive",
          )}
        >
          <span className="w-5 shrink-0 select-none text-muted-foreground">
            {l.op === "add" ? "+" : l.op === "remove" ? "-" : " "}
          </span>
          <span className="w-8 shrink-0 select-none text-right text-muted-foreground/70">
            {l.oldLine ?? ""}
          </span>
          <span className="w-8 shrink-0 select-none text-right text-muted-foreground/70">
            {l.newLine ?? ""}
          </span>
          <span className="whitespace-pre-wrap break-words">{l.text || "\u00A0"}</span>
        </div>
      ))}
    </pre>
  );
}

function SplitDiff({ lines, oldLabel, newLabel }: { lines: DiffLine[]; oldLabel: string; newLabel: string }) {
  // Agrupar por par: para cada operação, alinhar coluna esquerda (antigo) e direita (novo)
  const rows: { left: DiffLine | null; right: DiffLine | null }[] = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (l.op === "equal") {
      rows.push({ left: l, right: l });
      i++;
    } else if (l.op === "remove") {
      // Tenta parear com um "add" subsequente
      const next = lines[i + 1];
      if (next && next.op === "add") {
        rows.push({ left: l, right: next });
        i += 2;
      } else {
        rows.push({ left: l, right: null });
        i++;
      }
    } else {
      rows.push({ left: null, right: l });
      i++;
    }
  }

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 border-b text-[10px] uppercase tracking-wide text-muted-foreground">
        <div className="border-r px-3 py-1.5 font-semibold">{oldLabel}</div>
        <div className="px-3 py-1.5 font-semibold">{newLabel}</div>
      </div>
      <div className="font-mono text-xs leading-relaxed">
        {rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-2 border-b border-border/40 last:border-b-0">
            <div
              className={cn(
                "border-r px-3 py-0.5 whitespace-pre-wrap break-words",
                row.left?.op === "remove" && "bg-destructive/10 text-destructive dark:text-destructive",
              )}
            >
              <span className="mr-2 inline-block w-6 select-none text-right text-muted-foreground/70">
                {row.left?.oldLine ?? ""}
              </span>
              {row.left?.text || "\u00A0"}
            </div>
            <div
              className={cn(
                "px-3 py-0.5 whitespace-pre-wrap break-words",
                row.right?.op === "add" && "bg-primary/10 text-primary dark:text-primary",
              )}
            >
              <span className="mr-2 inline-block w-6 select-none text-right text-muted-foreground/70">
                {row.right?.newLine ?? ""}
              </span>
              {row.right?.text || "\u00A0"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
