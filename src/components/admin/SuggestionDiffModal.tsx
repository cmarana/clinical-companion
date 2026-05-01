import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { DiffView } from "./DiffView";
import { getFullProtocolAsync } from "@/data/fullProtocols/lazyLoader";
import {
  CheckCircle2,
  XCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  ExternalLink,
  Keyboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface SuggestionLite {
  id: string;
  item_type: string;
  item_id: string;
  item_title: string;
  current_version: string;
  proposed_version: string;
  change_summary: string;
  proposed_patch: string;
  evidence_sources: { name: string; url?: string; year?: number }[];
  impact: "low" | "medium" | "high" | "critical";
  status: "pending" | "approved" | "rejected" | "applied";
  reviewer_note: string;
}

interface Props {
  suggestion: SuggestionLite | null;
  /** Posição atual na fila (1-indexed) e total — para "X de Y". */
  position?: { current: number; total: number };
  open: boolean;
  acting: boolean;
  onOpenChange: (open: boolean) => void;
  onAction: (action: "approve" | "reject" | "apply", note: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const IMPACT_STYLES: Record<string, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  high: "bg-orange-500/15 text-orange-700 dark:text-orange-300",
  critical: "bg-destructive/15 text-destructive",
};

/**
 * Constrói uma representação textual do conteúdo atual de um protocolo
 * para comparar com o patch proposto pela IA.
 */
async function loadCurrentText(itemType: string, itemId: string): Promise<string> {
  if (itemType !== "protocol") {
    return "(versão atual não disponível para diff automático — compare manualmente com a fonte deste tipo de item)";
  }
  try {
    const protocol = await getFullProtocolAsync(itemId);
    if (!protocol) return "(protocolo não encontrado no bundle local)";
    const lines: string[] = [
      `# ${protocol.title}`,
      `Categoria: ${protocol.category}`,
      `Tags: ${protocol.tags.join(", ")}`,
      "",
    ];
    for (const s of protocol.sections) {
      lines.push(`## ${s.title}`);
      lines.push(s.content);
      lines.push("");
    }
    return lines.join("\n");
  } catch {
    return "(falha ao carregar versão atual)";
  }
}

export function SuggestionDiffModal({
  suggestion,
  position,
  open,
  acting,
  onOpenChange,
  onAction,
  onPrev,
  onNext,
}: Props) {
  const [currentText, setCurrentText] = useState<string>("");
  const [loadingCurrent, setLoadingCurrent] = useState(false);
  const [note, setNote] = useState("");

  // Reset note ao trocar de sugestão
  useEffect(() => {
    setNote(suggestion?.reviewer_note ?? "");
  }, [suggestion?.id, suggestion?.reviewer_note]);

  // Carrega "antes" quando abre / muda
  useEffect(() => {
    if (!open || !suggestion) return;
    let cancel = false;
    setLoadingCurrent(true);
    void loadCurrentText(suggestion.item_type, suggestion.item_id).then((text) => {
      if (!cancel) {
        setCurrentText(text);
        setLoadingCurrent(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, [open, suggestion]);

  // Atalhos de teclado
  useEffect(() => {
    if (!open || !suggestion) return;
    const isPending = suggestion.status === "pending";
    const handler = (e: KeyboardEvent) => {
      // Ignora se foco em campo editável
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return;

      if (e.key === "j" || e.key === "ArrowRight") {
        e.preventDefault();
        onNext?.();
      } else if (e.key === "k" || e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev?.();
      } else if (isPending && !acting && (e.key === "a" || e.key === "A")) {
        e.preventDefault();
        onAction("apply", note);
      } else if (isPending && !acting && (e.key === "r" || e.key === "R")) {
        e.preventDefault();
        onAction("reject", note);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, suggestion, acting, onAction, onNext, onPrev, note]);

  if (!suggestion) return null;

  const isPending = suggestion.status === "pending";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-base leading-snug">
                {suggestion.item_title}
              </DialogTitle>
              <DialogDescription className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                <span className="font-mono">{suggestion.item_type} · {suggestion.item_id}</span>
                <span>·</span>
                <span>
                  {suggestion.current_version} →{" "}
                  <strong className="text-foreground">{suggestion.proposed_version}</strong>
                </span>
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              {position && (
                <span className="text-xs text-muted-foreground">
                  {position.current} de {position.total}
                </span>
              )}
              <Badge className={IMPACT_STYLES[suggestion.impact]}>
                {suggestion.impact === "critical" && <AlertTriangle className="mr-1 h-3 w-3" />}
                {suggestion.impact}
              </Badge>
              <Badge
                variant={
                  suggestion.status === "applied"
                    ? "default"
                    : suggestion.status === "rejected"
                    ? "destructive"
                    : "secondary"
                }
              >
                {suggestion.status}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        {/* Resumo */}
        <div className="rounded-md border bg-muted/30 p-3 text-sm">
          <p className="font-medium">{suggestion.change_summary || "Sem resumo"}</p>
        </div>

        {/* Fontes */}
        {suggestion.evidence_sources?.length > 0 && (
          <div className="rounded-md border p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              Fontes citadas
            </p>
            <ul className="space-y-1 text-xs">
              {suggestion.evidence_sources.map((src, i) => (
                <li key={i} className="flex items-center gap-1">
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {src.name}
                      {src.year ? ` (${src.year})` : ""}
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span>
                      {src.name}
                      {src.year ? ` (${src.year})` : ""}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Diff antes/depois */}
        <section>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Diff (antes → depois)
          </h3>
          {loadingCurrent ? (
            <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Carregando versão atual…
            </div>
          ) : (
            <DiffView
              oldText={currentText}
              newText={suggestion.proposed_patch || ""}
              oldLabel={`Atual ${suggestion.current_version || ""}`.trim()}
              newLabel={`Proposto ${suggestion.proposed_version || ""}`.trim()}
              className="max-h-[50vh] overflow-auto"
            />
          )}
        </section>

        {/* Nota + ações */}
        {isPending && (
          <div className="space-y-2">
            <Textarea
              placeholder="Nota do revisor (opcional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
            />
            <div className="flex flex-wrap items-center gap-2">
              <Button
                size="sm"
                disabled={acting}
                onClick={() => onAction("apply", note)}
              >
                {acting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                )}
                Aplicar versão
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={acting}
                onClick={() => onAction("approve", note)}
              >
                Aprovar (sem aplicar)
              </Button>
              <Button
                size="sm"
                variant="ghost"
                disabled={acting}
                onClick={() => onAction("reject", note)}
              >
                <XCircle className="mr-2 h-4 w-4" /> Rejeitar
              </Button>
              <span
                className={cn(
                  "ml-auto inline-flex items-center gap-1 rounded border px-2 py-1 text-[10px] text-muted-foreground",
                )}
                title="Atalhos: A aplicar · R rejeitar · J/→ próximo · K/← anterior"
              >
                <Keyboard size={11} /> A · R · J · K
              </span>
            </div>
          </div>
        )}

        {!isPending && suggestion.reviewer_note && (
          <p className="text-xs text-muted-foreground">
            <strong>Nota anterior:</strong> {suggestion.reviewer_note}
          </p>
        )}

        {/* Navegação */}
        <div className="flex items-center justify-between border-t pt-3">
          <Button size="sm" variant="ghost" onClick={onPrev} disabled={!onPrev}>
            <ChevronLeft className="mr-1 h-4 w-4" /> Anterior
          </Button>
          <Button size="sm" variant="ghost" onClick={onNext} disabled={!onNext}>
            Próximo <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
