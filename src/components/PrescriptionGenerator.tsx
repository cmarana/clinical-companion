import { useState } from "react";
import { X, Loader2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { streamClinicalAi } from "@/lib/clinicalAiStream";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

interface Props {
  protocolTitle: string;
  protocolId: string;
  onClose: () => void;
}

export default function PrescriptionGenerator({ protocolTitle, protocolId, onClose }: Props) {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [allergies, setAllergies] = useState("");
  const [scenario, setScenario] = useState("");
  const [sex, setSex] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult("");

    const patientInfo: string[] = [];
    if (weight) patientInfo.push(`Peso: ${weight}kg`);
    if (age) patientInfo.push(`Idade: ${age}`);
    if (sex) patientInfo.push(`Sexo: ${sex}`);
    if (creatinine) patientInfo.push(`Creatinina: ${creatinine} mg/dL`);
    if (allergies) patientInfo.push(`Alergias: ${allergies}`);
    if (scenario) patientInfo.push(`Cenário: ${scenario}`);

    const prompt = `[MODO PRESCRIÇÃO AUTOMÁTICA]
Protocolo: ${protocolTitle}
${patientInfo.length ? `Dados do paciente: ${patientInfo.join(" | ")}` : "Sem dados do paciente informados."}

Gere uma PRESCRIÇÃO MÉDICA COMPLETA baseada no protocolo "${protocolTitle}", ajustada ao paciente.
Formato obrigatório:
1. Numerar cada item
2. Nome do medicamento + dose + via + frequência + duração
3. Ajustar dose por peso, idade e função renal (se creatinina informada, calcular ClCr por Cockcroft-Gault)
4. Se alergia informada, substituir medicamentos contraindicados
5. Incluir: dieta, hidratação, monitorização, cuidados de enfermagem
6. Incluir: exames a solicitar
7. Adaptar ao cenário (${scenario || "PS"})
8. Adicionar observações e alertas de segurança

NÃO incluir emojis. Usar formatação markdown com negrito e listas.`;

    let content = "";
    try {
      await streamClinicalAi({
        messages: [{ role: "user", content: prompt }],
        mode: "structured",
        onDelta: (chunk) => {
          content += chunk;
          setResult(content);
        },
        onDone: () => setIsLoading(false),
        onError: (err) => { toast.error(err); setIsLoading(false); },
      });
    } catch {
      toast.error("Erro ao gerar prescrição");
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      toast.success("Prescrição copiada!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Erro ao copiar");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <div className="bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div>
            <h2 className="font-heading font-bold text-sm">Gerar Prescrição</h2>
            <p className="text-[10px] text-muted-foreground">{protocolTitle}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-md hover:bg-accent">
            <X size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {!result && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-[10px] font-heading">Peso (kg)</Label>
                  <Input value={weight} onChange={e => setWeight(e.target.value)} placeholder="70" className="h-8 text-xs" />
                </div>
                <div>
                  <Label className="text-[10px] font-heading">Idade</Label>
                  <Input value={age} onChange={e => setAge(e.target.value)} placeholder="55 anos" className="h-8 text-xs" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-[10px] font-heading">Creatinina (mg/dL)</Label>
                  <Input value={creatinine} onChange={e => setCreatinine(e.target.value)} placeholder="1.2" className="h-8 text-xs" />
                </div>
                <div>
                  <Label className="text-[10px] font-heading">Sexo</Label>
                  <Select value={sex} onValueChange={setSex}>
                    <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Selecionar" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="feminino">Feminino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-[10px] font-heading">Alergias</Label>
                <Input value={allergies} onChange={e => setAllergies(e.target.value)} placeholder="Penicilina, AAS..." className="h-8 text-xs" />
              </div>
              <div>
                <Label className="text-[10px] font-heading">Cenário</Label>
                <Select value={scenario} onValueChange={setScenario}>
                  <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Selecionar cenário" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PS">Pronto-Socorro</SelectItem>
                    <SelectItem value="UTI">UTI</SelectItem>
                    <SelectItem value="UBS">UBS</SelectItem>
                    <SelectItem value="SAMU">SAMU</SelectItem>
                    <SelectItem value="Enfermaria">Enfermaria</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleGenerate} disabled={isLoading} className="w-full h-9 text-xs rounded-xl">
                {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Gerando...</> : "Gerar Prescrição"}
              </Button>
              <p className="text-[9px] text-muted-foreground text-center">
                Campos opcionais — a IA ajustará doses conforme dados informados
              </p>
            </>
          )}

          {result && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-heading font-semibold text-muted-foreground">PRESCRIÇÃO GERADA</span>
                <button onClick={handleCopy} className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-accent text-xs text-muted-foreground">
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? "Copiado" : "Copiar"}
                </button>
              </div>
              <div className="prose prose-sm max-w-none text-sm leading-relaxed dark:prose-invert">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Loader2 size={12} className="animate-spin" /> Gerando...
                </div>
              )}
              {!isLoading && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setResult("")} className="flex-1 text-xs">
                    Nova prescrição
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleCopy} className="flex-1 text-xs">
                    {copied ? "Copiado!" : "Copiar tudo"}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
