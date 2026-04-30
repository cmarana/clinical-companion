import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { checkInteractions, severityConfig, type FoundInteraction, type Severity } from "@/data/drugInteractionsDB";
import { HIGH_RISK_PAIRS } from "@/data/drugInteractionPairs";
import { streamClinicalAi } from "@/lib/clinicalAiStream";
import { showClinicalAiError } from "@/lib/clinicalAiToast";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import {
  Plus, X, Search, Loader2, AlertTriangle, Shield, ShieldAlert,
  ShieldX, Info, Pill, ChevronDown, ChevronUp, Zap, Bot, Trash2,
  Database, Activity, Heart, Brain, Syringe, Beaker, Leaf, FlaskConical
} from "lucide-react";
import { cn } from "@/lib/utils";
import OfflineBadge from "@/components/OfflineBadge";

type Msg = { role: "user" | "assistant"; content: string };

interface PatientCtx {
  age?: string;
  weight?: string;
  creatinine?: string;
  allergies?: string;
  conditions?: string;
}

function DrugInteractionsContent() {
  const navigate = useNavigate();
  const [drugs, setDrugs] = useState<string[]>(["", ""]);
  const [hasChecked, setHasChecked] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [showAi, setShowAi] = useState(false);
  const [patient, setPatient] = useState<PatientCtx>({});
  const [showPatientPanel, setShowPatientPanel] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const filledDrugs = drugs.filter(d => d.trim().length >= 2);

  const localResults = useMemo<FoundInteraction[]>(() => {
    if (!hasChecked || filledDrugs.length < 2) return [];
    return checkInteractions(filledDrugs);
  }, [hasChecked, filledDrugs]);

  const severitySummary = useMemo(() => {
    const counts: Record<Severity, number> = { contraindicado: 0, grave: 0, moderado: 0, leve: 0 };
    localResults.forEach(r => counts[r.interaction.severity]++);
    return counts;
  }, [localResults]);

  useEffect(() => {
    if (hasChecked && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hasChecked, localResults.length]);

  const addDrug = () => setDrugs([...drugs, ""]);
  const removeDrug = (i: number) => {
    if (drugs.length <= 2) return;
    setDrugs(drugs.filter((_, idx) => idx !== i));
    setHasChecked(false);
  };
  const updateDrug = (i: number, val: string) => {
    const updated = [...drugs];
    updated[i] = val;
    setDrugs(updated);
    setHasChecked(false);
  };

  const handleCheck = () => {
    if (filledDrugs.length < 2) {
      toast.error("Informe ao menos 2 medicamentos");
      return;
    }
    setHasChecked(true);
    setShowAi(false);
    setAiResult("");
    setExpandedIdx(null);
  };

  const handleAiDeepCheck = async () => {
    setAiLoading(true);
    setAiResult("");
    setShowAi(true);

    const ctxParts: string[] = [];
    if (patient.age) ctxParts.push(`Idade: ${patient.age}`);
    if (patient.weight) ctxParts.push(`Peso: ${patient.weight} kg`);
    if (patient.creatinine) ctxParts.push(`Creatinina: ${patient.creatinine} mg/dL`);
    if (patient.allergies) ctxParts.push(`Alergias: ${patient.allergies}`);
    if (patient.conditions) ctxParts.push(`Comorbidades: ${patient.conditions}`);
    const ctxBlock = ctxParts.length ? `\n\n[CONTEXTO DO PACIENTE: ${ctxParts.join(" | ")}]\n\nLeve em conta função renal, idade, alergias e comorbidades ao classificar a severidade e ajustar a conduta.\n` : "";

    const userMsg: Msg = {
      role: "user",
      content: `Analise TODAS as interações medicamentosas entre:\n\n${filledDrugs.map((d, i) => `${i + 1}. ${d}`).join("\n")}${ctxBlock}\n\nPara cada par com interação, inclua:\n- Severidade (Contraindicado/Grave/Moderado/Leve) — ajustada ao paciente\n- Mecanismo farmacológico\n- Efeito clínico\n- Conduta recomendada (cite ajustes por ClCr/idade quando aplicável)\n- Alternativa terapêutica brasileira (preferir SUS/PCDT)\n- Monitoramento necessário\n\nSe não houver interação significativa entre algum par, mencione brevemente. Cite fontes brasileiras (ANVISA, SBC, SBI, PCDT/MS) sempre que possível. Seja rigoroso, completo e baseado em evidências.`,
    };

    let full = "";
    try {
      await streamClinicalAi({
        messages: [userMsg],
        mode: "interactions",
        onDelta: (chunk) => { full += chunk; setAiResult(full); },
        onDone: () => setAiLoading(false),
        onError: (err, code) => { showClinicalAiError(err, code); setAiLoading(false); },
      });
    } catch {
      toast.error("Erro ao consultar IA");
      setAiLoading(false);
    }
  };

  const clearAll = () => {
    setDrugs(["", ""]);
    setHasChecked(false);
    setAiResult("");
    setShowAi(false);
  };

  const getSeverityIcon = (severity: Severity) => {
    switch (severity) {
      case "contraindicado": return <ShieldX size={16} />;
      case "grave": return <ShieldAlert size={16} />;
      case "moderado": return <AlertTriangle size={16} />;
      case "leve": return <Info size={16} />;
    }
  };

  const totalPairs = filledDrugs.length >= 2 ? (filledDrugs.length * (filledDrugs.length - 1)) / 2 : 0;

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar title="Interações Medicamentosas" showBack />
      <OfflineBadge message="A análise por IA requer conexão com a internet" />

      <div className="px-4 pt-3 max-w-lg mx-auto space-y-3">
        {/* Drug inputs */}
        <div className="bg-card rounded-[20px] shadow-sm p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Pill size={16} className="text-destructive" />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-sm">Medicamentos</h2>
                <p className="text-[10px] text-muted-foreground">Insira 2 ou mais para verificar</p>
              </div>
            </div>
            {filledDrugs.length > 0 && (
              <button onClick={clearAll} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground transition-colors">
                <Trash2 size={14} />
              </button>
            )}
          </div>

          {drugs.map((drug, i) => (
            <div key={i} className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-muted-foreground w-4">
                  {i + 1}.
                </span>
                <input
                  value={drug}
                  onChange={(e) => updateDrug(i, e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleCheck(); }}
                  placeholder={`Medicamento ${i + 1}`}
                  className="w-full pl-8 pr-3 h-10 text-sm rounded-xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 font-heading placeholder:text-muted-foreground/50"
                />
              </div>
              {drugs.length > 2 && (
                <button onClick={() => removeDrug(i)} className="p-2 rounded-xl hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                  <X size={16} />
                </button>
              )}
            </div>
          ))}

          <div className="flex gap-2 pt-1">
            <Button variant="outline" size="sm" onClick={addDrug} className="text-xs gap-1.5 rounded-xl flex-1 h-10">
              <Plus size={14} /> Adicionar
            </Button>
            <Button size="sm" onClick={handleCheck} disabled={filledDrugs.length < 2} className="text-xs gap-1.5 rounded-xl flex-1 h-10">
              <Search size={14} /> Verificar ({totalPairs} pares)
            </Button>
          </div>
        </div>

        {/* Patient context panel — improves AI severity classification */}
        <div className="bg-card rounded-[20px] shadow-sm overflow-hidden">
          <button
            onClick={() => setShowPatientPanel(v => !v)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity size={14} className="text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-heading font-semibold text-sm">Contexto do paciente</h3>
                <p className="text-[10px] text-muted-foreground">
                  {Object.values(patient).filter(Boolean).length > 0
                    ? `${Object.values(patient).filter(Boolean).length} dado(s) — IA personaliza severidade`
                    : "Opcional — melhora a precisão da IA"}
                </p>
              </div>
            </div>
            {showPatientPanel ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {showPatientPanel && (
            <div className="px-4 pb-3 grid grid-cols-2 gap-2 border-t border-border/50 pt-3">
              <input
                placeholder="Idade (anos)"
                value={patient.age || ""}
                onChange={e => setPatient(p => ({ ...p, age: e.target.value }))}
                className="h-9 text-xs px-3 rounded-xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                placeholder="Peso (kg)"
                value={patient.weight || ""}
                onChange={e => setPatient(p => ({ ...p, weight: e.target.value }))}
                className="h-9 text-xs px-3 rounded-xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                placeholder="Creatinina (mg/dL)"
                value={patient.creatinine || ""}
                onChange={e => setPatient(p => ({ ...p, creatinine: e.target.value }))}
                className="h-9 text-xs px-3 rounded-xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                placeholder="Alergias"
                value={patient.allergies || ""}
                onChange={e => setPatient(p => ({ ...p, allergies: e.target.value }))}
                className="h-9 text-xs px-3 rounded-xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                placeholder="Comorbidades (HAS, DM, IC...)"
                value={patient.conditions || ""}
                onChange={e => setPatient(p => ({ ...p, conditions: e.target.value }))}
                className="h-9 text-xs px-3 rounded-xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 col-span-2"
              />
            </div>
          )}
        </div>

        {hasChecked && (
          <div ref={resultRef} className="space-y-3">
            {/* Summary bar */}
            <div className="bg-card rounded-[20px] shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
                  <Shield size={16} className="text-primary" />
                  Resultado da Análise
                </h3>
                <Badge variant={localResults.length > 0 ? "destructive" : "default"} className="text-[10px]">
                  {localResults.length} interação(ões)
                </Badge>
              </div>

              {localResults.length === 0 ? (
                <div className="text-center py-4">
                  <Shield size={32} className="mx-auto text-green-500 mb-2" />
                  <p className="font-heading font-semibold text-sm text-green-600 dark:text-green-400">
                    Nenhuma interação conhecida encontrada
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Na base local com {filledDrugs.length} medicamentos ({totalPairs} pares analisados)
                  </p>
                </div>
              ) : (
                <div className="flex gap-2 flex-wrap">
                  {(["contraindicado", "grave", "moderado", "leve"] as Severity[]).map(sev => {
                    if (!severitySummary[sev]) return null;
                    const config = severityConfig[sev];
                    return (
                      <div key={sev} className={cn("flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-heading font-medium", config.bgColor, config.color)}>
                        {config.icon} {severitySummary[sev]} {config.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Interaction cards */}
            {localResults.map((result, idx) => {
              const config = severityConfig[result.interaction.severity];
              const isExpanded = expandedIdx === idx;

              return (
                <div
                  key={idx}
                  className={cn(
                    "bg-card rounded-[20px] shadow-sm border overflow-hidden transition-all",
                    config.borderColor
                  )}
                >
                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="w-full p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0", config.bgColor, config.color)}>
                        {getSeverityIcon(result.interaction.severity)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <Badge className={cn("text-[9px] px-1.5 py-0", config.bgColor, config.color, "border-0")}>
                            {config.icon} {config.label}
                          </Badge>
                        </div>
                        <p className="font-heading font-semibold text-[13px]">
                          {result.drugAName} <span className="text-muted-foreground font-normal">×</span> {result.drugBName}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{result.interaction.effect}</p>
                      </div>
                      <div className="text-muted-foreground shrink-0 mt-1">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-3 border-t border-border/50 pt-3">
                      <DetailRow label="Mecanismo" value={result.interaction.mechanism} icon="🔬" />
                      <DetailRow label="Efeito Clínico" value={result.interaction.effect} icon="⚡" />
                      <DetailRow label="Conduta" value={result.interaction.recommendation} icon="📋" highlight />
                      {result.interaction.alternative && (
                        <DetailRow label="Alternativa" value={result.interaction.alternative} icon="💊" />
                      )}
                      {result.interaction.monitoring && (
                        <DetailRow label="Monitoramento" value={result.interaction.monitoring} icon="📊" />
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* AI deep check button */}
            {!showAi && (
              <Button
                variant="outline"
                onClick={handleAiDeepCheck}
                className="w-full rounded-[20px] h-12 gap-2 text-xs font-heading"
              >
                <Bot size={16} className="text-primary" />
                Análise Aprofundada com IA Clínica
              </Button>
            )}

            {/* AI result */}
            {showAi && (
              <div className="bg-card rounded-[20px] shadow-sm p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">IA Clínica</h3>
                    <p className="text-[10px] text-muted-foreground">Análise aprofundada por inteligência artificial</p>
                  </div>
                  {aiLoading && <Loader2 size={14} className="animate-spin text-primary ml-auto" />}
                </div>
                {aiResult ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:mb-1.5 [&_ul]:mb-1.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm [&_li]:text-[12px]">
                    <ReactMarkdown>{aiResult}</ReactMarkdown>
                  </div>
                ) : aiLoading ? (
                  <div className="flex items-center gap-2 py-4 justify-center text-muted-foreground">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-xs font-heading">Analisando interações...</span>
                  </div>
                ) : null}
                <p className="text-[9px] text-muted-foreground mt-3 pt-2 border-t border-border text-center">
                  ⚠️ Confirme em fontes adicionais. Não substitui julgamento clínico.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Info card when idle */}
        {!hasChecked && (
          <div className="space-y-3">
            {/* Database coverage summary */}
            <DatabaseCoveragePanel />

            <div className="bg-card rounded-[20px] shadow-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} className="text-primary" />
                <h3 className="font-heading font-semibold text-sm">Como funciona</h3>
              </div>
              <div className="space-y-2">
                {[
                  { step: "1", text: "Insira 2 ou mais medicamentos nos campos acima" },
                  { step: "2", text: "Clique em 'Verificar' para análise instantânea local" },
                  { step: "3", text: "Veja severidade, mecanismo, conduta e alternativas" },
                  { step: "4", text: "Use 'IA Clínica' para análise aprofundada adicional" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-bold shrink-0">{step}</span>
                    <p className="text-[12px] text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value, icon, highlight }: { label: string; value: string; icon: string; highlight?: boolean }) {
  return (
    <div className={cn("rounded-xl p-2.5", highlight ? "bg-primary/5 border border-primary/10" : "bg-muted/30")}>
      <p className="text-[10px] text-muted-foreground font-heading font-medium mb-0.5 flex items-center gap-1">
        <span>{icon}</span> {label}
      </p>
      <p className={cn("text-[12px] leading-relaxed", highlight ? "font-medium" : "")}>{value}</p>
    </div>
  );
}

const DB_CATEGORIES = [
  { name: "Anticoagulantes & DOACs", icon: Heart, count: "40+" },
  { name: "Antiarrítmicos", icon: Activity, count: "25+" },
  { name: "Psiquiátricos", icon: Brain, count: "60+" },
  { name: "Antimicrobianos", icon: FlaskConical, count: "80+" },
  { name: "Anestésicos & BNM", icon: Syringe, count: "50+" },
  { name: "Endocrinologia", icon: Beaker, count: "70+" },
  { name: "Fitoterápicos", icon: Leaf, count: "20+" },
  { name: "Cardiovascular", icon: Heart, count: "45+" },
];

function DatabaseCoveragePanel() {
  const totalDrugs = Object.keys(HIGH_RISK_PAIRS).length;
  const totalPairs = Object.values(HIGH_RISK_PAIRS).reduce(
    (sum, pairs) => sum + pairs.reduce((s, p) => s + p.drugs.length, 0), 0
  );

  return (
    <div className="bg-card rounded-[20px] shadow-sm overflow-hidden">
      {/* Header with stats */}
      <div className="px-4 py-3 bg-primary/5 border-b border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
            <Database size={16} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-sm">Base de Interações</h3>
            <p className="text-[10px] text-muted-foreground">Cobertura atual do banco local</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-background/80 rounded-xl p-2.5 text-center">
            <p className="text-lg font-bold font-heading text-primary">{totalDrugs}</p>
            <p className="text-[9px] text-muted-foreground font-medium">Fármacos</p>
          </div>
          <div className="bg-background/80 rounded-xl p-2.5 text-center">
            <p className="text-lg font-bold font-heading text-destructive">{totalPairs}+</p>
            <p className="text-[9px] text-muted-foreground font-medium">Pares</p>
          </div>
          <div className="bg-background/80 rounded-xl p-2.5 text-center">
            <p className="text-lg font-bold font-heading text-amber-500">{DB_CATEGORIES.length}</p>
            <p className="text-[9px] text-muted-foreground font-medium">Categorias</p>
          </div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="p-3">
        <p className="text-[10px] font-heading font-semibold text-muted-foreground mb-2 px-1">CATEGORIAS COBERTAS</p>
        <div className="grid grid-cols-2 gap-1.5">
          {DB_CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-muted/40 hover:bg-muted/60 transition-colors">
              <cat.icon size={13} className="text-primary shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-heading font-medium truncate">{cat.name}</p>
                <p className="text-[9px] text-muted-foreground">{cat.count} pares</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 bg-muted/30 border-t border-border/50">
        <p className="text-[9px] text-muted-foreground text-center">
          📚 Inclui anticoagulantes, antirretrovirais, quimioterápicos, imunossupressores, carbapenêmicos, polimixinas e antifúngicos sistêmicos
        </p>
      </div>
    </div>
  );
}

export default function DrugInteractions() {
  return (
    <PremiumPageGuard feature="Interações Medicamentosas" title="Interações">
      <DrugInteractionsContent />
    </PremiumPageGuard>
  );
}
