import { useState, useRef, useCallback } from "react";
import {
  ArrowLeft, Mic, MicOff, Copy, Check, RotateCcw, FileText,
  Loader2, Wand2, Edit3, Save, ChevronDown, Stethoscope,
  Activity, Building2, ClipboardList, LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import { supabase } from "@/integrations/supabase/client";

const getAuthHeader = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token
    ? `Bearer ${session.access_token}`
    : `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`;
};

// ── Tipos ────────────────────────────────────────────────────────────────────
type Format = "SOAP" | "I-PASS" | "ADMISSAO" | "SBAR" | "ALTA";
type Context = "ps" | "uti" | "enfermaria" | "ambulatorio";

interface FormatOption {
  id: Format;
  label: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
}

const FORMATS: FormatOption[] = [
  { id: "SOAP",     label: "SOAP",       icon: <ClipboardList className="h-4 w-4" />, desc: "Evolução estruturada", color: "bg-blue-500/10 text-blue-500 border-blue-500/30" },
  { id: "I-PASS",   label: "I-PASS",     icon: <Activity className="h-4 w-4" />,      desc: "Passagem de plantão", color: "bg-violet-500/10 text-violet-500 border-violet-500/30" },
  { id: "ADMISSAO", label: "Admissão",   icon: <Building2 className="h-4 w-4" />,     desc: "Entrada no PS/UTI",  color: "bg-amber-500/10 text-amber-500 border-amber-500/30" },
  { id: "SBAR",     label: "SBAR",       icon: <Stethoscope className="h-4 w-4" />,   desc: "Transferência",      color: "bg-green-500/10 text-green-500 border-green-500/30" },
  { id: "ALTA",     label: "Sumário",    icon: <LogOut className="h-4 w-4" />,        desc: "Alta hospitalar",    color: "bg-rose-500/10 text-rose-500 border-rose-500/30" },
];

const CONTEXTS: { id: Context; label: string }[] = [
  { id: "ps",          label: "Pronto-Socorro" },
  { id: "uti",         label: "UTI" },
  { id: "enfermaria",  label: "Enfermaria" },
  { id: "ambulatorio", label: "Ambulatório" },
];

// ── Componente principal ──────────────────────────────────────────────────────
const VoiceEvolution = () => {
  const navigate = useNavigate();
  const [transcription, setTranscription]   = useState("");
  const [format, setFormat]                 = useState<Format>("SOAP");
  const [context, setContext]               = useState<Context>("ps");
  const [result, setResult]                 = useState("");
  const [isListening, setIsListening]       = useState(false);
  const [isGenerating, setIsGenerating]     = useState(false);
  const [isEditing, setIsEditing]           = useState(false);
  const [editedResult, setEditedResult]     = useState("");
  const [copied, setCopied]                 = useState(false);
  const [showContextPicker, setShowContextPicker] = useState(false);
  const recognitionRef = useRef<any>(null);

  // ── Reconhecimento de voz ────────────────────────────────────────────────
  const startListening = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      toast.error("Use o Chrome para reconhecimento de voz.");
      return;
    }
    const rec = new SR();
    rec.lang = "pt-BR";
    rec.continuous = true;
    rec.interimResults = true;
    let final = transcription;

    rec.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += " " + t;
        else interim = t;
      }
      setTranscription((final + " " + interim).trim());
    };
    rec.onerror  = () => setIsListening(false);
    rec.onend    = () => { setTranscription(final.trim()); setIsListening(false); };

    recognitionRef.current = rec;
    rec.start();
    setIsListening(true);
    toast.success("Gravando — fale o caso clínico");
  }, [transcription]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  // ── Geração ──────────────────────────────────────────────────────────────
  const generate = useCallback(async () => {
    if (!transcription.trim()) { toast.error("Digite ou fale o relato clínico primeiro."); return; }
    setIsGenerating(true);
    setResult("");
    setIsEditing(false);

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
    } catch (e: any) {
      toast.error(e.message || "Erro ao gerar documento");
    } finally {
      setIsGenerating(false);
    }
  }, [transcription, format, context]);

  const copyResult = useCallback(() => {
    const text = isEditing ? editedResult : result;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  }, [result, editedResult, isEditing]);

  const saveEdit = () => { setResult(editedResult); setIsEditing(false); toast.success("Edição salva"); };
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
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 text-primary border-primary/30">
                IA
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground truncate">Fale o caso → documentação clínica em segundos</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">

          {/* ── Seletor de contexto ── */}
          <div className="relative">
            <button
              onClick={() => setShowContextPicker(p => !p)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-border bg-muted/40 text-sm font-medium"
            >
              <span className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Contexto: <span className="text-foreground">{ctx.label}</span>
              </span>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showContextPicker ? "rotate-180" : ""}`} />
            </button>
            {showContextPicker && (
              <div className="absolute z-20 top-full mt-1 w-full rounded-xl border border-border bg-card shadow-xl overflow-hidden">
                {CONTEXTS.map(c => (
                  <button key={c.id}
                    onClick={() => { setContext(c.id); setShowContextPicker(false); }}
                    className={`w-full px-4 py-2.5 text-sm text-left transition-colors hover:bg-muted ${context === c.id ? "bg-muted font-semibold text-primary" : ""}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Seletor de formato ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-2 font-medium">Formato do documento</p>
            <div className="grid grid-cols-5 gap-1.5">
              {FORMATS.map(f => (
                <button key={f.id}
                  onClick={() => setFormat(f.id)}
                  className={`flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl border text-center transition-all ${
                    format === f.id
                      ? `${f.color} border-current shadow-sm`
                      : "border-border bg-muted/30 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {f.icon}
                  <span className="text-[10px] font-semibold leading-tight">{f.label}</span>
                  <span className="text-[9px] leading-tight opacity-70">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Área de entrada ── */}
          <div className="space-y-2.5">
            <label className="text-sm font-medium text-foreground">Relato clínico</label>
            <Textarea
              placeholder={`Fale ou digite o caso... Ex: Paciente 65 anos, masculino, HAS e DM2, deu entrada com dor torácica há 2h, tipo pressão, irradiando para MSE, sudorese, FC 110, PA 160/100, ECG com supra em DII DIII aVF...`}
              value={transcription}
              onChange={e => setTranscription(e.target.value)}
              rows={5}
              className="text-sm resize-none leading-relaxed"
            />
            <div className="flex gap-2">
              <Button
                onClick={isListening ? stopListening : startListening}
                variant={isListening ? "destructive" : "outline"}
                className="flex-1 gap-2 h-11"
              >
                {isListening ? (
                  <>
                    <MicOff className="h-4 w-4" />
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      Parar
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

          {/* ── Botão de geração ── */}
          <Button
            onClick={generate}
            disabled={isGenerating || !transcription.trim()}
            className="w-full gap-2 h-12 text-base font-semibold"
          >
            {isGenerating ? (
              <><Loader2 className="h-5 w-5 animate-spin" />Gerando {fmt.label}...</>
            ) : (
              <><Wand2 className="h-5 w-5" />Gerar {fmt.label} — {ctx.label}</>
            )}
          </Button>

          {/* ── Resultado ── */}
          {result && (
            <div className="space-y-3">
              {/* Toolbar do resultado */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border ${fmt.color}`}>
                    {fmt.icon}{fmt.label}
                  </span>
                  <span className="text-xs text-muted-foreground">{ctx.label}</span>
                </div>
                <div className="flex gap-1.5">
                  {!isEditing ? (
                    <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs"
                      onClick={() => { setIsEditing(true); setEditedResult(result); }}>
                      <Edit3 className="h-3 w-3" />Editar
                    </Button>
                  ) : (
                    <Button variant="default" size="sm" className="h-7 gap-1.5 text-xs"
                      onClick={saveEdit}>
                      <Save className="h-3 w-3" />Salvar
                    </Button>
                  )}
                  <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs"
                    onClick={copyResult}>
                    {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copiado" : "Copiar"}
                  </Button>
                </div>
              </div>

              {/* Conteúdo editável ou renderizado */}
              {isEditing ? (
                <Textarea
                  value={editedResult}
                  onChange={e => setEditedResult(e.target.value)}
                  rows={20}
                  className="text-sm font-mono resize-none leading-relaxed"
                />
              ) : (
                <div className="bg-card rounded-xl border border-border p-4 prose prose-sm dark:prose-invert max-w-none leading-relaxed">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              )}

              {/* Dica */}
              <p className="text-[11px] text-muted-foreground text-center">
                ⚕️ Revise antes de registrar no prontuário. Documento gerado por IA.
              </p>
            </div>
          )}
        </div>
      </div>
    </PremiumPageGuard>
  );
};

export default VoiceEvolution;
