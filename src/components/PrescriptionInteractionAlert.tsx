import { useMemo } from "react";
import { AlertTriangle, ShieldAlert, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { checkInteractions, type DetectedInteraction } from "@/data/drugInteractionPairs";

interface Props {
  drugNames: string[];
}

export default function PrescriptionInteractionAlert({ drugNames }: Props) {
  const interactions = useMemo(() => {
    const validNames = drugNames.filter(n => n.trim().length >= 3);
    if (validNames.length < 2) return [];
    return checkInteractions(validNames);
  }, [drugNames]);

  if (interactions.length === 0) return null;

  const graveCount = interactions.filter(i => i.severity === "grave").length;
  const moderadoCount = interactions.length - graveCount;

  return (
    <div className="rounded-2xl border-2 border-destructive/40 bg-destructive/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Header */}
      <div className="px-4 py-3 bg-destructive/10 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
          <ShieldAlert size={16} className="text-destructive" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold font-heading text-destructive flex items-center gap-1.5">
            <AlertTriangle size={12} />
            {interactions.length} Interação(ões) Detectada(s)
          </h4>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            {graveCount > 0 && <span className="text-destructive font-semibold">{graveCount} grave(s)</span>}
            {graveCount > 0 && moderadoCount > 0 && " • "}
            {moderadoCount > 0 && <span className="text-amber-600 dark:text-amber-400 font-semibold">{moderadoCount} moderada(s)</span>}
          </p>
        </div>
      </div>

      {/* Interactions list */}
      <div className="px-3 py-2 space-y-2">
        {interactions.map((inter, i) => (
          <InteractionRow key={i} interaction={inter} />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-2 bg-muted/30 border-t border-border/50">
        <p className="text-[9px] text-muted-foreground flex items-start gap-1">
          <Info size={10} className="shrink-0 mt-0.5" />
          Verificação automática baseada em banco de interações. Sempre confirme com fontes atualizadas (Micromedex, UpToDate).
        </p>
      </div>
    </div>
  );
}

function InteractionRow({ interaction }: { interaction: DetectedInteraction }) {
  const isGrave = interaction.severity === "grave";

  return (
    <div className={`p-2.5 rounded-xl transition-colors ${
      isGrave
        ? "bg-destructive/10 border border-destructive/20"
        : "bg-amber-500/10 border border-amber-500/20"
    }`}>
      <div className="flex items-start gap-2">
        <Badge
          variant={isGrave ? "destructive" : "outline"}
          className="text-[9px] px-1.5 py-0 shrink-0 mt-0.5"
        >
          {isGrave ? "⚠ GRAVE" : "MODERADO"}
        </Badge>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-heading font-semibold">
            {interaction.drugA} <span className="text-muted-foreground">×</span> {interaction.drugB}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
            {interaction.description}
          </p>
        </div>
      </div>
    </div>
  );
}
