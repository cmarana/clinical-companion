import { useMemo, useState } from "react";
import { AlertTriangle, ShieldAlert, Info, ChevronDown, Lightbulb, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { checkInteractions, severityConfig, type Severity } from "@/data/drugInteractionsDB";

interface Props {
  drugNames: string[];
}

export default function EnhancedPrescriptionInteractionAlert({ drugNames }: Props) {
  const interactions = useMemo(() => {
    const valid = drugNames.filter(n => n.trim().length >= 3);
    if (valid.length < 2) return [];
    return checkInteractions(valid);
  }, [drugNames]);

  if (interactions.length === 0) return null;

  const counts = interactions.reduce<Record<Severity, number>>((acc, x) => {
    acc[x.interaction.severity] = (acc[x.interaction.severity] ?? 0) + 1;
    return acc;
  }, { contraindicado: 0, grave: 0, moderado: 0, leve: 0 });

  return (
    <div className="rounded-2xl border-2 border-destructive/40 bg-destructive/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="px-4 py-3 bg-destructive/10 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center shrink-0">
          <ShieldAlert size={16} className="text-destructive" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold font-heading text-destructive flex items-center gap-1.5">
            <AlertTriangle size={12} />
            {interactions.length} Interação(ões) Pré-Análise
          </h4>
          <p className="text-[10px] text-muted-foreground mt-0.5 flex flex-wrap gap-x-1.5">
            {counts.contraindicado > 0 && <span className="font-semibold text-destructive">{counts.contraindicado} contraindicada(s)</span>}
            {counts.grave > 0 && <span className="font-semibold text-destructive">{counts.grave} grave(s)</span>}
            {counts.moderado > 0 && <span className="font-semibold text-warning">{counts.moderado} moderada(s)</span>}
            {counts.leve > 0 && <span className="text-muted-foreground">{counts.leve} leve(s)</span>}
          </p>
        </div>
      </div>

      <div className="px-3 py-2 space-y-2">
        {interactions.map((f, i) => (
          <Row key={i} drugA={f.drugAName} drugB={f.drugBName} inter={f.interaction} />
        ))}
      </div>

      <div className="px-4 py-2 bg-muted/30 border-t border-border/50">
        <p className="text-[9px] text-muted-foreground flex items-start gap-1">
          <Info size={10} className="shrink-0 mt-0.5" />
          Verificação local — confirme com a análise de IA abaixo e fontes atualizadas (Micromedex/UpToDate).
        </p>
      </div>
    </div>
  );
}

function Row({ drugA, drugB, inter }: { drugA: string; drugB: string; inter: ReturnType<typeof checkInteractions>[number]["interaction"] }) {
  const [open, setOpen] = useState(inter.severity === "contraindicado" || inter.severity === "grave");
  const cfg = severityConfig[inter.severity];

  return (
    <div className={`rounded-xl border ${cfg.borderColor} ${cfg.bgColor} overflow-hidden`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full p-2.5 flex items-start gap-2 text-left"
      >
        <Badge
          variant={inter.severity === "contraindicado" || inter.severity === "grave" ? "destructive" : "outline"}
          className="text-[9px] px-1.5 py-0 shrink-0 mt-0.5"
        >
          {cfg.icon} {cfg.label}
        </Badge>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-heading font-semibold">
            {drugA} <span className="text-muted-foreground">×</span> {drugB}
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">{inter.effect}</p>
        </div>
        <ChevronDown size={14} className={`shrink-0 mt-1 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-border/40">
          <Field label="Mecanismo" value={inter.mechanism} />
          <Field label="Recomendação" value={inter.recommendation} icon={<Lightbulb size={10} />} />
          {inter.alternative && <Field label="Alternativa" value={inter.alternative} />}
          {inter.monitoring && <Field label="Monitorização" value={inter.monitoring} icon={<Activity size={10} />} />}
        </div>
      )}
    </div>
  );
}

function Field({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-wide text-foreground/70 flex items-center gap-1">
        {icon}{label}
      </p>
      <p className="text-[10px] text-muted-foreground leading-relaxed">{value}</p>
    </div>
  );
}
