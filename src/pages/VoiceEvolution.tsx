import { useState, useRef, useCallback, useEffect } from "react";
import {
  ArrowLeft, Mic, MicOff, Copy, Check, RotateCcw, FileText,
  Loader2, Wand2, Edit3, Save, ChevronDown, Stethoscope,
  Activity, Building2, ClipboardList, LogOut, WifiOff, Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import { supabase } from "@/integrations/supabase/client";
import { safeLocalStorage } from "@/lib/safeStorage";

// ── Auth helper ──────────────────────────────────────────────────────────────
const getAuthHeader = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token
    ? `Bearer ${session.access_token}`
    : `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`;
};

// ── Tipos ────────────────────────────────────────────────────────────────────
type Format  = "SOAP" | "I-PASS" | "ADMISSAO" | "SBAR" | "ALTA";
type Context = "ps" | "uti" | "enfermaria" | "ambulatorio";

interface FormatOption {
  id: Format;
  label: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
}

interface SavedDoc {
  id: string;
  format: Format;
  context: Context;
  result: string;
  ts: number;
}

const FORMATS: FormatOption[] = [
  { id: "SOAP",     label: "SOAP",     icon: <ClipboardList className="h-4 w-4" />, desc: "Evolução",   color: "bg-blue-500/10 text-blue-500 border-blue-500/30" },
  { id: "I-PASS",   label: "I-PASS",   icon: <Activity className="h-4 w-4" />,      desc: "Plantão",    color: "bg-violet-500/10 text-violet-500 border-violet-500/30" },
  { id: "ADMISSAO", label: "Admissão", icon: <Building2 className="h-4 w-4" />,     desc: "Entrada",    color: "bg-amber-500/10 text-amber-500 border-amber-500/30" },
  { id: "SBAR",     label: "SBAR",     icon: <Stethoscope className="h-4 w-4" />,   desc: "Transfer.",  color: "bg-green-500/10 text-green-500 border-green-500/30" },
  { id: "ALTA",     label: "Sumário",  icon: <LogOut className="h-4 w-4" />,        desc: "Alta",       color: "bg-rose-500/10 text-rose-500 border-rose-500/30" },
];

const CONTEXTS: { id: Context; label: string }[] = [
  { id: "ps",          label: "Pronto-Socorro" },
  { id: "uti",         label: "UTI" },
  { id: "enfermaria",  label: "Enfermaria" },
  { id: "ambulatorio", label: "Ambulatório" },
];

const CACHE_KEY = "pulso:ambient-scribe:docs";
const MAX_CACHED = 5;

// ── Templates offline ────────────────────────────────────────────────────────
function offlineTemplate(format: Format, context: string): string {
  const ctx = { ps: "Pronto-Socorro", uti: "UTI", enfermaria: "Enfermaria", ambulatorio: "Ambulatório" }[context] ?? "PS";
  const now = new Date().toLocaleString("pt-BR");

  const templates: Record<Format, string> = {
    SOAP: `## Evolução SOAP — ${ctx} — ${now}

**S — Subjetivo**
Paciente refere: _______________________________
Queixa principal: _______________________________
Início / duração: _______________________________
Fatores de melhora/piora: _______________________________
Sintomas associados: _______________________________

**O — Objetivo**
PA: ___/___  FC: ___  FR: ___  T°: ___  SpO₂: ___%
Exame físico: _______________________________
Exames: _______________________________

**A — Avaliação**
Hipótese diagnóstica: _______________________________
CID-10: _______

**P — Plano**
Conduta: _______________________________
Medicamentos: _______________________________
Exames solicitados: _______________________________
Orientações: _______________________________

⚕️ Uso exclusivo por profissional de saúde habilitado.`,

    "I-PASS": `## Passagem de Plantão I-PASS — ${ctx} — ${now}

**I — Illness Severity (Gravidade)**
☐ Estável   ☐ Em observação   ☐ Instável   ☐ Crítico
Justificativa: _______________________________

**P — Patient Summary (Resumo)**
Paciente: _______________________________
Diagnóstico: _______________________________
Eventos do plantão: _______________________________

**A — Action List (Pendências)**
- [ ] _______________________________
- [ ] _______________________________
- [ ] _______________________________

**S — Situation Awareness (Alertas)**
Se piorar, fazer: _______________________________
Alertas críticos: _______________________________

**S — Synthesis (Mensagem-chave)**
_______________________________

⚕️ Uso exclusivo por profissional de saúde habilitado.`,

    ADMISSAO: `## Admissão — ${ctx} — ${now}

**Identificação**
Nome: ___________________________  Idade: ___  Sexo: ___

**Motivo da Admissão**
_______________________________

**HDA (História da Doença Atual)**
_______________________________

**Antecedentes**
Comorbidades: _______________________________
Medicamentos em uso: _______________________________
Alergias: _______________________________

**Exame Físico**
PA: ___/___  FC: ___  FR: ___  T°: ___  SpO₂: ___%
Geral: _______________________________
Cardíaco / Pulmonar / Abdome / Neuro: _______________________________

**Hipóteses Diagnósticas**
1. _______________________________ CID-10: _______
2. _______________________________ CID-10: _______

**Conduta Inicial**
_______________________________

**Plano**
_______________________________

⚕️ Uso exclusivo por profissional de saúde habilitado.`,

    SBAR: `## Transferência SBAR — ${ctx} — ${now}

**S — Situation (Situação)**
Paciente ___, ___ anos, diagnosticado com _______________.
Motivo da transferência: _______________________________

**B — Background (Contexto)**
Comorbidades: _______________________________
Medicamentos: _______________________________
Evolução: _______________________________

**A — Assessment (Avaliação Atual)**
PA: ___/___  FC: ___  SpO₂: ___%
Estado: ☐ Estável   ☐ Instável
Exames pendentes: _______________________________

**R — Recommendation (Recomendações)**
- _______________________________
- _______________________________
- _______________________________

**Alertas de Segurança**
Alergias: _______________________________
Cuidados especiais: _______________________________

⚕️ Uso exclusivo por profissional de saúde habilitado.`,

    ALTA: `## Sumário de Alta — ${ctx} — ${now}

**Dados da Internação**
Admissão: ___/___/___   Alta: ___/___/___   Leito: ___

**Diagnóstico Principal**
_______________________________  CID-10: _______

**Diagnósticos Secundários**
_______________________________

**Resumo da Internação**
_______________________________

**Condição na Alta**
☐ Melhorado   ☐ Estável   ☐ A pedido   ☐ Transferido

**Prescrição de Alta**
| Medicamento | Dose | Via | Frequência | Duração |
|---|---|---|---|---|
| | | | | |

**Orientações**
Dieta: _______________________________
Atividade: _______________________________
Curativos: _______________________________

**Retorno**
_______________________________

**Sinais de Alarme — Retornar ao PS se:**
- _______________________________

⚕️ Uso exclusivo por profissional de saúde habilitado.`,
  };

  return templates[format];
}

// ── Cache helpers ────────────────────────────────────────────────────────────
function loadCachedDocs(): SavedDoc[] {
  try {
    const raw = safeLocalStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveCachedDoc(doc: SavedDoc) {
  try {
    const docs = loadCachedDocs();
    const updated = [doc, ...docs.filter(d => d.id !== doc.id)].slice(0, MAX_CACHED);
    safeLocalStorage.setItem(CACHE_KEY, JSON.stringify(updated));
  } catch { /* storage full */ }
}

// ── Hook online/offline ──────────────────────────────────────────────────────
function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const on  = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online",  on);
    window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);
  return online;
}

// ── Componente principal ──────────────────────────────────────────────────────
const VoiceEvolution = () => {
  const navigate   = useNavigate();
  const isOnline   = useOnlineStatus();

  const [transcription, setTranscription] = useState("");
  const [format,  setFormat]  = useState<Format>("SOAP");
  const [context, setContext] = useState<Context>("ps");
  const [result,  setResult]  = useState("");
  const [isListening,    setIsListening]    = useState(false);
  const [isGenerating,   setIsGenerating]   = useState(false);
  const [isEditing,      setIsEditing]      = useState(false);
  const [editedResult,   setEditedResult]   = useState("");
  const [copied,         setCopied]         = useState(false);
  const [showCtxPicker,  setShowCtxPicker]  = useState(false);
  const [showHistory,    setShowHistory]    = useState(false);
  const [cachedDocs,     setCachedDocs]     = useState<SavedDoc[]>([]);
  const recognitionRef = useRef<any>(null);

  // Carregar histórico local ao montar
  useEffect(() => { setCachedDocs(loadCachedDocs()); }, []);

  // ── Voz ──────────────────────────────────────────────────────────────────
  const startListening = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { toast.error("Use o Chrome para reconhecimento de voz."); return; }
    const rec = new SR();
    rec.lang = "pt-BR"; rec.continuous = true; rec.interimResults = true;
    let final = transcription;
    rec.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += " " + t; else interim = t;
      }
      setTranscription((final + " " + interim).trim());
    };
    rec.onerror = () => setIsListening(false);
    rec.onend   = () => { setTranscription(final.trim()); setIsListening(false); };
    recognitionRef.current = rec;
    rec.start();
    setIsListening(true);
    toast.success("Gravando — fale o caso clínico");
  }, [transcription]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  // ── Geração online (IA) ────────────────────────────────────────────────
  const generateOnline = useCallback(async () => {
    setIsGenerating(true); setResult(""); setIsEditing(false);
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/voice-evolution`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: await getAuthHeader() },
          body: JSON.stringify({ transcription: transcription.trim(), format, context }),
        }
      );
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Erro ao gerar documento");
      }
      const reader = resp.body!.getReader();
      const dec = new TextDecoder();
      let buf = "", full = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx); buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const p = JSON.parse(json);
            const c = p.choices?.[0]?.delta?.content;
            if (c) { full += c; setResult(full); }
          } catch { /* partial */ }
        }
      }
      setEditedResult(full);
      // Salvar no cache local
      const doc: SavedDoc = { id: Date.now().toString(), format, context, result: full, ts: Date.now() };
      saveCachedDoc(doc);
      setCachedDocs(loadCachedDocs());
    } catch (e: any) {
      toast.error(e.message || "Erro ao gerar documento");
    } finally {
      setIsGenerating(false);
    }
  }, [transcription, format, context]);

  // ── Geração offline (template) ────────────────────────────────────────
  const generateOffline = useCallback(() => {
    const tmpl = offlineTemplate(format, context);
    setResult(tmpl);
    setEditedResult(tmpl);
    setIsEditing(true); // Começa em modo edição — médico preenche os campos
    toast.info("Modo offline — template para preenchimento manual", { duration: 4000 });
  }, [format, context]);

  const generate = useCallback(() => {
    if (!transcription.trim() && isOnline) { toast.error("Digite ou fale o relato clínico primeiro."); return; }
    if (isOnline) generateOnline();
    else generateOffline();
  }, [transcription, isOnline, generateOnline, generateOffline]);

  const copyResult = useCallback(() => {
    navigator.clipboard.writeText(isEditing ? editedResult : result);
    setCopied(true);
    toast.success("Copiado!");
    setTimeout(() => setCopied(false), 2000);
  }, [result, editedResult, isEditing]);

  const saveEdit = () => {
    setResult(editedResult);
    setIsEditing(false);
    toast.success("Edição salva");
    // Atualizar cache
    const doc: SavedDoc = { id: Date.now().toString(), format, context, result: editedResult, ts: Date.now() };
    saveCachedDoc(doc);
    setCachedDocs(loadCachedDocs());
  };

  const loadDoc = (doc: SavedDoc) => {
    setFormat(doc.format);
    setContext(doc.context);
    setResult(doc.result);
    setEditedResult(doc.result);
    setShowHistory(false);
    toast.success("Documento carregado");
  };

  const fmt = FORMATS.find(f => f.id === format)!;
  const ctx = CONTEXTS.find(c => c.id === context)!;

  return (
    <PremiumPageGuard feature="voice-evolution" title="Ambient Scribe">
      <div className="min-h-screen bg-background pb-28">

        {/* ── Header ── */}
        <div className="sticky top-safe z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 pt-safe-0 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-foreground">Ambient Scribe</h1>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 text-primary border-primary/30">IA</Badge>
              {!isOnline && (
                <Badge variant="outline" className="text-[10px] px-1.5 py-0 text-amber-500 border-amber-500/30 gap-1">
                  <WifiOff className="h-2.5 w-2.5" />Offline
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {isOnline ? "Fale o caso → IA estrutura em segundos" : "Modo offline — templates para preenchimento"}
            </p>
          </div>
          {/* Histórico */}
          {cachedDocs.length > 0 && (
            <Button variant="ghost" size="icon" onClick={() => setShowHistory(p => !p)}>
              <Clock className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* ── Banner offline ── */}
        {!isOnline && (
          <div className="mx-4 mt-3 flex items-start gap-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3.5 py-3">
            <WifiOff className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">Modo offline</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Sem internet, a IA não está disponível. Gerando template estruturado para preenchimento manual.
                Documentos recentes salvos no dispositivo ainda estão acessíveis.
              </p>
            </div>
          </div>
        )}

        {/* ── Histórico de documentos recentes ── */}
        {showHistory && (
          <div className="mx-4 mt-3 rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2.5 border-b border-border">
              <p className="text-xs font-semibold text-foreground">Documentos recentes (salvos no dispositivo)</p>
            </div>
            {cachedDocs.map(doc => {
              const f = FORMATS.find(x => x.id === doc.format)!;
              const c = CONTEXTS.find(x => x.id === doc.context)!;
              return (
                <button key={doc.id} onClick={() => loadDoc(doc)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 text-left">
                  <span className={`p-1.5 rounded-lg border ${f.color}`}>{f.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{f.label} — {c.label}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {new Date(doc.ts).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <p className="text-[10px] text-muted-foreground truncate max-w-[100px]">
                    {doc.result.replace(/[#*_`\n]/g, " ").slice(0, 40)}...
                  </p>
                </button>
              );
            })}
          </div>
        )}

        <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">

          {/* ── Contexto ── */}
          <div className="relative">
            <button onClick={() => setShowCtxPicker(p => !p)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-sm font-medium">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Contexto: <span className="text-foreground">{ctx.label}</span>
              </span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showCtxPicker ? "rotate-180" : ""}`} />
            </button>
            {showCtxPicker && (
              <div className="absolute z-20 top-full mt-1 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden">
                {CONTEXTS.map(c => (
                  <button key={c.id} onClick={() => { setContext(c.id); setShowCtxPicker(false); }}
                    className={`w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-muted ${context === c.id ? "bg-muted font-semibold text-primary" : ""}`}>
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Formatos ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-2 font-medium">Tipo de documento</p>
            <div className="grid grid-cols-5 gap-1.5">
              {FORMATS.map(f => (
                <button key={f.id} onClick={() => setFormat(f.id)}
                  className={`flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl border text-center transition-all ${
                    format === f.id
                      ? `${f.color} border-current shadow-sm`
                      : "border-border bg-muted/30 text-muted-foreground hover:bg-muted"
                  }`}>
                  {f.icon}
                  <span className="text-[10px] font-semibold leading-tight">{f.label}</span>
                  <span className="text-[9px] leading-tight opacity-70">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Entrada de texto/voz (só quando online) ── */}
          {isOnline && (
            <div className="space-y-2.5">
              <label className="text-sm font-medium text-foreground">Relato clínico</label>
              <Textarea
                placeholder="Fale ou digite o caso... Ex: Paciente 65 anos, masculino, HAS e DM2, dor torácica há 2h tipo pressão irradiando para MSE, sudorese, FC 110, PA 160/100..."
                value={transcription}
                onChange={e => setTranscription(e.target.value)}
                rows={5}
                className="text-sm resize-none leading-relaxed"
              />
              <div className="flex gap-2">
                <Button onClick={isListening ? stopListening : startListening}
                  variant={isListening ? "destructive" : "outline"}
                  className="flex-1 gap-2 h-11">
                  {isListening ? (
                    <><MicOff className="h-4 w-4" />
                      <span className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                        </span>Parar
                      </span>
                    </>
                  ) : (
                    <><Mic className="h-4 w-4" />Gravar voz</>
                  )}
                </Button>
                {transcription && (
                  <Button variant="ghost" size="icon" className="h-11 w-11"
                    onClick={() => { setTranscription(""); setResult(""); setIsEditing(false); }}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* ── Botão de ação ── */}
          <Button onClick={generate} disabled={isGenerating || (isOnline && !transcription.trim())}
            className="w-full gap-2 h-12 text-base font-semibold">
            {isGenerating ? (
              <><Loader2 className="h-5 w-5 animate-spin" />Gerando {fmt.label}...</>
            ) : isOnline ? (
              <><Wand2 className="h-5 w-5" />Gerar {fmt.label} com IA — {ctx.label}</>
            ) : (
              <><FileText className="h-5 w-5" />Abrir Template {fmt.label} — {ctx.label}</>
            )}
          </Button>

          {/* ── Resultado ── */}
          {result && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border ${fmt.color}`}>
                    {fmt.icon}{fmt.label}
                  </span>
                  <span className="text-xs text-muted-foreground">{ctx.label}</span>
                  {!isOnline && (
                    <span className="text-[10px] text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">template</span>
                  )}
                </div>
                <div className="flex gap-1.5">
                  {!isEditing ? (
                    <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs"
                      onClick={() => { setIsEditing(true); setEditedResult(result); }}>
                      <Edit3 className="h-3 w-3" />Editar
                    </Button>
                  ) : (
                    <Button variant="default" size="sm" className="h-7 gap-1.5 text-xs" onClick={saveEdit}>
                      <Save className="h-3 w-3" />Salvar
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs" onClick={copyResult}>
                    {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copiado" : "Copiar"}
                  </Button>
                </div>
              </div>

              {isEditing ? (
                <Textarea value={editedResult} onChange={e => setEditedResult(e.target.value)}
                  rows={20} className="text-sm font-mono resize-none leading-relaxed" />
              ) : (
                <div className="bg-card rounded-xl border border-border p-4 prose prose-sm dark:prose-invert max-w-none leading-relaxed">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              )}

              <p className="text-[11px] text-muted-foreground text-center">
                ⚕️ Revise antes de registrar no prontuário. {isOnline ? "Documento gerado por IA." : "Template para preenchimento manual."}
              </p>
            </div>
          )}
        </div>
      </div>
    </PremiumPageGuard>
  );
};

export default VoiceEvolution;
