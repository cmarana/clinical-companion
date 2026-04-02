import { useState, useEffect } from "react";
import { CheckSquare, Square, RotateCcw, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { safeLocalStorage } from "@/lib/safeStorage";
import { toast } from "sonner";

const STORAGE_KEY = "duty_handoff_checklist";

const defaultItems = [
  "Revisar prontuários pendentes",
  "Conferir prescrições em andamento",
  "Verificar exames laboratoriais aguardando resultado",
  "Checar pacientes em observação / estabilização",
  "Verificar leitos com medicações IV em curso",
  "Informar pendências ao plantonista seguinte",
  "Registrar evolução dos pacientes atendidos",
  "Conferir estoque de medicações de emergência",
  "Verificar equipamentos (desfibrilador, laringoscópio)",
  "Assinar passagem de plantão",
];

interface CheckItem {
  text: string;
  checked: boolean;
}

export default function DutyHandoffChecklist() {
  const [items, setItems] = useState<CheckItem[]>(() => {
    const saved = safeLocalStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch { /* fallback */ }
    }
    return defaultItems.map(text => ({ text, checked: false }));
  });

  useEffect(() => {
    safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const toggle = (idx: number) => {
    setItems(prev => prev.map((item, i) => i === idx ? { ...item, checked: !item.checked } : item));
  };

  const reset = () => {
    setItems(prev => prev.map(item => ({ ...item, checked: false })));
    toast.success("Checklist reiniciado");
  };

  const checkedCount = items.filter(i => i.checked).length;
  const progress = Math.round((checkedCount / items.length) * 100);

  return (
    <div className="duty-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <ClipboardCheck size={14} />
          Checklist de Passagem
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-heading font-semibold text-muted-foreground">{checkedCount}/{items.length}</span>
          <Button variant="ghost" size="sm" onClick={reset} className="h-7 w-7 p-0">
            <RotateCcw size={12} className="text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-1">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => toggle(idx)}
            className={`w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all active:scale-[0.98] ${
              item.checked
                ? "bg-primary/5 dark:bg-primary/10"
                : "hover:bg-muted/50"
            }`}
          >
            {item.checked ? (
              <CheckSquare size={16} className="text-primary shrink-0 mt-0.5" />
            ) : (
              <Square size={16} className="text-muted-foreground shrink-0 mt-0.5" />
            )}
            <span className={`text-xs font-heading leading-relaxed ${item.checked ? "line-through text-muted-foreground" : ""}`}>
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
