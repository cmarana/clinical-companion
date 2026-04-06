import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Search, Mic, MicOff, Loader2, AlertTriangle, Pill, Stethoscope, Globe, Building2, BookOpen, ArrowRightLeft, History, Trash2, Clock, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PremiumPageGuard from "@/components/PremiumPageGuard";

interface Medication {
  name: string;
  dose: string;
  route: string;
  duration: string;
}

interface Source {
  source_name: string;
  source_type: "sus" | "brazilian_society" | "international";
  guideline_name: string;
  year: string;
  diagnostic_criteria: string[];
  first_line_treatment: string;
  alternative_treatments: string[];
  medications: Medication[];
  red_flags: string[];
  follow_up: string;
  notes: string;
}

interface ComparisonResult {
  diagnosis_title: string;
  icd10: string;
  summary: string;
  sources: Source[];
  key_differences: string[];
  evidence_level: string;
  last_update_check: string;
}

const sourceConfig = {
  sus: { icon: Building2, label: "SUS / Min. Saúde", color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20", badge: "bg-green-500/15 text-green-700 dark:text-green-400" },
  brazilian_society: { icon: Stethoscope, label: "Sociedade Brasileira", color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20", badge: "bg-blue-500/15 text-blue-700 dark:text-blue-400" },
  international: { icon: Globe, label: "Guideline Internacional", color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20", badge: "bg-purple-500/15 text-purple-700 dark:text-purple-400" },
};

function SourceCard({ source }: { source: Source }) {
  const config = sourceConfig[source.source_type] || sourceConfig.international;
  const Icon = config.icon;

  return (
    <Card className={`border ${config.color} h-full`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${config.badge}`}>
            <Icon size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-sm font-bold leading-tight">{source.source_name}</CardTitle>
            <p className="text-[10px] text-muted-foreground truncate">{source.guideline_name} ({source.year})</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3 text-xs">
        {/* First line treatment */}
        <div>
          <h4 className="font-semibold text-foreground mb-1 flex items-center gap-1">
            <Pill size={12} /> Tratamento 1ª linha
          </h4>
          <p className="text-muted-foreground leading-relaxed">{source.first_line_treatment}</p>
        </div>

        {/* Medications */}
        {source.medications?.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-1">Medicamentos</h4>
            <div className="space-y-1">
              {source.medications.map((m, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-2">
                  <span className="font-medium">{m.name}</span>
                  <span className="text-muted-foreground"> — {m.dose}, {m.route}, {m.duration}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Diagnostic criteria */}
        {source.diagnostic_criteria?.length > 0 && (
          <Accordion type="single" collapsible>
            <AccordionItem value="criteria" className="border-none">
              <AccordionTrigger className="py-1 text-xs font-semibold">Critérios Diagnósticos</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
                  {source.diagnostic_criteria.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {/* Alternatives */}
        {source.alternative_treatments?.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-1">Alternativas</h4>
            <div className="flex flex-wrap gap-1">
              {source.alternative_treatments.map((a, i) => (
                <Badge key={i} variant="outline" className="text-[10px]">{a}</Badge>
              ))}
            </div>
          </div>
        )}

        {/* Red flags */}
        {source.red_flags?.length > 0 && (
          <div className="bg-destructive/5 rounded-lg p-2 border border-destructive/10">
            <h4 className="font-semibold text-destructive mb-1 flex items-center gap-1">
              <AlertTriangle size={12} /> Sinais de Alarme
            </h4>
            <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
              {source.red_flags.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        )}

        {/* Follow-up */}
        {source.follow_up && (
          <div>
            <h4 className="font-semibold text-foreground mb-1">Seguimento</h4>
            <p className="text-muted-foreground">{source.follow_up}</p>
          </div>
        )}

        {/* Notes */}
        {source.notes && (
          <div className="bg-muted/30 rounded-lg p-2 italic text-muted-foreground">
            {source.notes}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface HistoryEntry {
  diagnosis: string;
  context?: string;
  result: ComparisonResult;
  timestamp: number;
}

const HISTORY_KEY = "pulso_conduct_history";
const MAX_HISTORY = 20;

function loadHistory(): HistoryEntry[] {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch { return []; }
}

function saveHistory(entries: HistoryEntry[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(entries.slice(0, MAX_HISTORY)));
}

export default function ConductComparator() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [diagnosis, setDiagnosis] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [listening, setListening] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>(loadHistory);
  const [showHistory, setShowHistory] = useState(false);

  const toggleVoice = useCallback(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      toast({ title: "Não suportado", description: "Seu navegador não suporta reconhecimento de voz.", variant: "destructive" });
      return;
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = "pt-BR";
    recognition.continuous = false;
    recognition.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setDiagnosis(text);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);
  }, [toast]);

  const handleCompare = useCallback(async () => {
    if (!diagnosis.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("conduct-comparator", {
        body: { diagnosis: diagnosis.trim(), context: context.trim() || undefined },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResult(data);
      // Save to history
      const entry: HistoryEntry = { diagnosis: diagnosis.trim(), context: context.trim() || undefined, result: data, timestamp: Date.now() };
      const updated = [entry, ...history.filter(h => h.diagnosis.toLowerCase() !== diagnosis.trim().toLowerCase())].slice(0, MAX_HISTORY);
      setHistory(updated);
      saveHistory(updated);
    } catch (err: any) {
      toast({ title: "Erro", description: err.message || "Falha ao comparar condutas", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }, [diagnosis, context, toast, history]);

  const loadFromHistory = useCallback((entry: HistoryEntry) => {
    setDiagnosis(entry.diagnosis);
    setContext(entry.context || "");
    setResult(entry.result);
    setShowHistory(false);
  }, []);

  const removeFromHistory = useCallback((idx: number) => {
    const updated = history.filter((_, i) => i !== idx);
    setHistory(updated);
    saveHistory(updated);
  }, [history]);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  return (
    <PremiumPageGuard feature="Comparador de Condutas" title="Comparador de Condutas">
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0">
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1 min-w-0">
              <h1 className="font-heading font-bold text-base truncate">Comparador de Condutas</h1>
              <p className="text-[11px] text-muted-foreground">SUS × Sociedades × Internacional</p>
            </div>
            <ArrowRightLeft size={20} className="text-primary shrink-0" />
            {history.length > 0 && (
              <Button variant="ghost" size="icon" onClick={() => setShowHistory(!showHistory)} className="shrink-0 relative">
                <History size={20} className={showHistory ? "text-primary" : ""} />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">{history.length}</span>
              </Button>
            )}
          </div>
        </div>

        <div className="px-4 py-4 max-w-4xl mx-auto space-y-4">
          {/* History panel */}
          {showHistory && history.length > 0 && (
            <Card className="border-primary/20 animate-in fade-in-0 slide-in-from-top-2 duration-300">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <History size={14} className="text-primary" /> Histórico ({history.length})
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={clearHistory} className="text-destructive hover:text-destructive text-xs h-7 gap-1">
                  <Trash2 size={12} /> Limpar
                </Button>
              </CardHeader>
              <CardContent className="pt-0 max-h-64 overflow-y-auto space-y-1.5">
                {history.map((entry, i) => (
                  <div
                    key={entry.timestamp}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer group transition-colors"
                    onClick={() => loadFromHistory(entry)}
                  >
                    <Clock size={12} className="text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{entry.result.diagnosis_title || entry.diagnosis}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {new Date(entry.timestamp).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                        {entry.result.icd10 && ` · ${entry.result.icd10}`}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                      onClick={e => { e.stopPropagation(); removeFromHistory(i); }}
                    >
                      <Trash2 size={12} className="text-muted-foreground" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Input */}
          <Card>
            <CardContent className="pt-4 space-y-3">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Ex: Pneumonia adquirida na comunidade"
                    value={diagnosis}
                    onChange={e => setDiagnosis(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleCompare()}
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={toggleVoice}
                    className={`absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 ${listening ? "text-destructive animate-pulse" : "text-muted-foreground"}`}
                  >
                    {listening ? <MicOff size={14} /> : <Mic size={14} />}
                  </Button>
                </div>
              </div>
              <Textarea
                placeholder="Contexto adicional (opcional): idade, comorbidades, gestante..."
                value={context}
                onChange={e => setContext(e.target.value)}
                rows={2}
                className="text-sm resize-none"
              />
              <Button onClick={handleCompare} disabled={loading || !diagnosis.trim()} className="w-full gap-2">
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
                {loading ? "Comparando condutas..." : "Comparar Condutas"}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
              {/* Header */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="font-heading font-bold text-lg">{result.diagnosis_title}</h2>
                      <Badge variant="outline" className="mt-1 text-[10px]">{result.icd10}</Badge>
                    </div>
                    <Badge className="bg-primary/15 text-primary text-[10px] shrink-0">{result.evidence_level}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{result.summary}</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-2">{result.last_update_check}</p>
                </CardContent>
              </Card>

              {/* Source cards - responsive grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {result.sources?.map((s, i) => (
                  <SourceCard key={i} source={s} />
                ))}
              </div>

              {/* Key differences */}
              {result.key_differences?.length > 0 && (
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <BookOpen size={16} className="text-amber-600 dark:text-amber-400" />
                      Principais Diferenças entre as Fontes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {result.key_differences.map((d, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">{i + 1}.</span>
                          <span className="text-muted-foreground">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Empty state */}
          {!result && !loading && (
            <div className="text-center py-12 text-muted-foreground">
              <ArrowRightLeft size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-medium">Digite um diagnóstico para comparar</p>
              <p className="text-xs mt-1">Veja lado a lado as condutas do SUS, sociedades brasileiras e guidelines internacionais</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["Pneumonia comunitária", "IAM com supra de ST", "Cetoacidose diabética", "Sepse", "TEP"].map(ex => (
                  <Button key={ex} variant="outline" size="sm" className="text-xs" onClick={() => setDiagnosis(ex)}>
                    {ex}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PremiumPageGuard>
  );
}
