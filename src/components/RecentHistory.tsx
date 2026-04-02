import { useNavigate } from "react-router-dom";
import { useRecentHistory } from "@/hooks/useRecentHistory";
import { Clock, ChevronRight, FileText, Pill, ClipboardList, BookOpen, Zap, Calculator } from "lucide-react";

const typeColors: Record<string, string> = {
  protocol: "bg-primary/10 text-primary",
  prescription: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  medication: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  fullProtocol: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  emergency: "bg-destructive/10 text-destructive",
  calculator: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
};

const getIcon = (type: string) => {
  switch (type) {
    case "protocol": return <FileText size={14} />;
    case "prescription": return <ClipboardList size={14} />;
    case "medication": return <Pill size={14} />;
    case "fullProtocol": return <BookOpen size={14} />;
    case "emergency": return <Zap size={14} />;
    case "calculator": return <Calculator size={14} />;
    default: return <FileText size={14} />;
  }
};

export default function RecentHistory() {
  const navigate = useNavigate();
  const { recent } = useRecentHistory();

  if (recent.length === 0) {
    return (
      <div className="mt-5">
        <h2 className="font-heading font-semibold text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider mb-3">
          <Clock size={12} /> Recentes
        </h2>
        <div className="rounded-2xl bg-card p-5 text-center space-y-2">
          <Clock size={22} className="mx-auto text-muted-foreground/40" />
          <p className="text-xs text-muted-foreground">Seus protocolos e medicamentos acessados recentemente aparecerão aqui.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-heading font-semibold text-xs flex items-center gap-1.5 text-muted-foreground uppercase tracking-wider">
          <Clock size={12} /> Recentes
        </h2>
        <button onClick={() => navigate("/search")} className="text-[10px] text-muted-foreground flex items-center gap-0.5 hover:text-foreground">
          Ver todos <ChevronRight size={10} />
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {recent.slice(0, 6).map((entry) => (
          <button
            key={entry.path}
            onClick={() => navigate(entry.path)}
            className="shrink-0 flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-card shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 max-w-[200px]"
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${typeColors[entry.type] || typeColors.protocol}`}>
              {getIcon(entry.type)}
            </div>
            <span className="font-heading font-medium text-[11px] truncate">{entry.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
