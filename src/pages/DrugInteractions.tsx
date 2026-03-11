import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, X, Search, Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { streamClinicalAi } from "@/lib/clinicalAiStream";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

export default function DrugInteractions() {
  const navigate = useNavigate();
  const [drugs, setDrugs] = useState<string[]>(["", ""]);
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result) resultRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [result]);

  const addDrug = () => setDrugs([...drugs, ""]);

  const removeDrug = (i: number) => {
    if (drugs.length <= 2) return;
    setDrugs(drugs.filter((_, idx) => idx !== i));
  };

  const updateDrug = (i: number, val: string) => {
    const updated = [...drugs];
    updated[i] = val;
    setDrugs(updated);
  };

  const handleCheck = async () => {
    const filled = drugs.filter((d) => d.trim());
    if (filled.length < 2) {
      toast.error("Informe ao menos 2 medicamentos");
      return;
    }

    setIsLoading(true);
    setResult("");

    const userMsg: Msg = {
      role: "user",
      content: `Verifique TODAS as interações medicamentosas entre os seguintes medicamentos:\n\n${filled.map((d, i) => `${i + 1}. ${d}`).join("\n")}\n\nAnalise TODOS os pares possíveis. Seja rigoroso e completo.`,
    };

    let full = "";
    try {
      await streamClinicalAi({
        messages: [userMsg],
        mode: "interactions",
        onDelta: (chunk) => {
          full += chunk;
          setResult(full);
        },
        onDone: () => setIsLoading(false),
        onError: (err) => {
          toast.error(err);
          setIsLoading(false);
        },
      });
    } catch {
      toast.error("Erro ao verificar interações");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1">
          <h1 className="font-heading font-bold text-sm">Interações Medicamentosas</h1>
          <p className="text-[10px] text-muted-foreground">Verifique interações entre 2 ou mais medicamentos</p>
        </div>
      </div>

      <div className="px-3 py-3 max-w-2xl mx-auto space-y-3">
        {/* Drug inputs */}
        <div className="bg-card border border-border rounded-xl p-3 space-y-2">
          <div className="flex items-center gap-1.5 mb-1">
            <AlertTriangle size={14} className="text-warning" />
            <span className="font-heading font-semibold text-xs">Medicamentos</span>
          </div>

          {drugs.map((drug, i) => (
            <div key={i} className="flex gap-2">
              <Input
                value={drug}
                onChange={(e) => updateDrug(i, e.target.value)}
                placeholder={`Medicamento ${i + 1}`}
                className="h-9 text-sm rounded-lg"
              />
              {drugs.length > 2 && (
                <button onClick={() => removeDrug(i)} className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive">
                  <X size={16} />
                </button>
              )}
            </div>
          ))}

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={addDrug} className="text-xs gap-1.5 rounded-lg flex-1">
              <Plus size={14} /> Adicionar medicamento
            </Button>
            <Button size="sm" onClick={handleCheck} disabled={isLoading} className="text-xs gap-1.5 rounded-lg flex-1">
              {isLoading ? <><Loader2 size={14} className="animate-spin" /> Analisando...</> : <><Search size={14} /> Verificar</>}
            </Button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div ref={resultRef} className="bg-card border border-border rounded-xl p-3">
            <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:mb-1.5 [&_ul]:mb-1.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
            <p className="text-[9px] text-muted-foreground mt-3 pt-2 border-t border-border text-center">
              ⚠️ Confirme interações em fontes adicionais. Esta análise não substitui o julgamento clínico.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
