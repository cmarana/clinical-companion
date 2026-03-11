import { useState } from "react";
import { ChevronRight, RotateCcw, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TreeNode {
  id: string;
  label: string;
  type: "decision" | "action" | "endpoint" | "warning";
  detail?: string;
  children?: { label: string; node: TreeNode }[];
}

interface DecisionTreeProps {
  title: string;
  root: TreeNode;
  guideline?: string;
}

function NodeCard({ node, onSelect, depth }: { node: TreeNode; onSelect: (child: { label: string; node: TreeNode }) => void; depth: number }) {
  const bgMap = {
    decision: "bg-accent border-primary/30",
    action: "bg-primary/10 border-primary/40",
    endpoint: "bg-success/10 border-success/40",
    warning: "bg-destructive/10 border-destructive/30",
  };
  const iconMap = {
    decision: <ChevronRight size={16} className="text-primary" />,
    action: <CheckCircle size={16} className="text-primary" />,
    endpoint: <CheckCircle size={16} className="text-success" />,
    warning: <AlertTriangle size={16} className="text-destructive" />,
  };

  return (
    <div className="space-y-2">
      <div className={cn("rounded-xl border p-3 transition-all", bgMap[node.type])}>
        <div className="flex items-start gap-2">
          <div className="mt-0.5 shrink-0">{iconMap[node.type]}</div>
          <div className="flex-1 min-w-0">
            <p className="font-heading font-semibold text-sm">{node.label}</p>
            {node.detail && <p className="text-xs text-muted-foreground mt-1 leading-relaxed whitespace-pre-line">{node.detail}</p>}
          </div>
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <div className="grid gap-2 pl-4 border-l-2 border-primary/20 ml-3">
          {node.children.map((child, i) => (
            <button
              key={i}
              onClick={() => onSelect(child)}
              className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-card hover:bg-accent active:scale-[0.98] transition-all text-left"
            >
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span className="font-heading font-medium text-xs">{child.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DecisionTree({ title, root, guideline }: DecisionTreeProps) {
  const [path, setPath] = useState<{ label: string; node: TreeNode }[]>([{ label: title, node: root }]);

  const current = path[path.length - 1].node;

  const handleSelect = (child: { label: string; node: TreeNode }) => {
    setPath([...path, child]);
  };

  const handleBack = () => {
    if (path.length > 1) setPath(path.slice(0, -1));
  };

  const handleReset = () => {
    setPath([{ label: title, node: root }]);
  };

  return (
    <div className="space-y-3">
      {guideline && (
        <p className="text-[10px] text-muted-foreground font-heading">Diretriz: {guideline}</p>
      )}

      {/* Breadcrumb */}
      {path.length > 1 && (
        <div className="flex items-center gap-1 flex-wrap">
          {path.map((p, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={10} className="text-muted-foreground" />}
              <button
                onClick={() => setPath(path.slice(0, i + 1))}
                className={cn(
                  "text-[10px] font-heading",
                  i === path.length - 1 ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {p.label}
              </button>
            </span>
          ))}
        </div>
      )}

      <NodeCard node={current} onSelect={handleSelect} depth={path.length - 1} />

      {/* Controls */}
      <div className="flex gap-2">
        {path.length > 1 && (
          <button onClick={handleBack} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-heading">
            ← Voltar
          </button>
        )}
        {path.length > 1 && (
          <button onClick={handleReset} className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-heading ml-auto">
            <RotateCcw size={12} /> Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}
