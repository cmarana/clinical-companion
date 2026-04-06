import { useState, useRef, useCallback } from "react";
import { ArrowLeft, Mic, MicOff, Copy, Check, RotateCcw, FileText, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import OfflineBadge from "@/components/OfflineBadge";

type Format = "SOAP" | "I-PASS";

const VoiceEvolution = () => {
  const navigate = useNavigate();
  const [transcription, setTranscription] = useState("");
  const [format, setFormat] = useState<Format>("SOAP");
  const [result, setResult] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef<any>(null);

  // ── Web Speech API ──
  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Seu navegador não suporta reconhecimento de voz. Use o Chrome.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;

    let finalTranscript = transcription;

    recognition.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += " " + t;
        } else {
          interim = t;
        }
      }
      setTranscription((finalTranscript + " " + interim).trim());
    };
    recognition.onerror = () => { setIsListening(false); };
    recognition.onend = () => {
      setTranscription(finalTranscript.trim());
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
    toast.success("Gravação iniciada — fale o caso clínico");
  }, [transcription]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  // ── Generate structured evolution via AI ──
  const generate = useCallback(async () => {
    if (!transcription.trim()) {
      toast.error("Digite ou fale o relato clínico primeiro.");
      return;
    }
    setIsGenerating(true);
    setResult("");

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/voice-evolution`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ transcription: transcription.trim(), format }),
        }
      );

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Erro ao gerar evolução");
      }

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              fullText += content;
              setResult(fullText);
            }
          } catch { /* partial */ }
        }
      }
    } catch (e: any) {
      toast.error(e.message || "Erro ao gerar evolução");
    } finally {
      setIsGenerating(false);
    }
  }, [transcription, format]);

  const copyResult = useCallback(() => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Evolução copiada!");
    setTimeout(() => setCopied(false), 2000);
  }, [result]);

  return (
    <PremiumPageGuard feature="voice-evolution" title="Evolução por Voz">
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-foreground">Evolução por Voz</h1>
            <p className="text-xs text-muted-foreground">Fale o caso → IA estrutura em SOAP ou I-PASS</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          {/* Format selector */}
          <div className="flex gap-2">
            {(["SOAP", "I-PASS"] as Format[]).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                  format === f
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Voice input area */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Relato clínico</label>
            <Textarea
              placeholder="Fale ou digite o caso clínico aqui... Ex: Paciente masculino, 65 anos, hipertenso, diabético, deu entrada com dor torácica..."
              value={transcription}
              onChange={(e) => setTranscription(e.target.value)}
              rows={6}
              className="text-sm resize-none"
            />
            <div className="flex gap-2">
              <Button
                onClick={isListening ? stopListening : startListening}
                variant={isListening ? "destructive" : "outline"}
                className="flex-1 gap-2"
              >
                {isListening ? (
                  <>
                    <MicOff className="h-4 w-4" />
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    Parar Gravação
                  </>
                ) : (
                  <>
                    <Mic className="h-4 w-4" />
                    Gravar Voz
                  </>
                )}
              </Button>
              {transcription && (
                <Button variant="ghost" size="icon" onClick={() => { setTranscription(""); setResult(""); }}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Generate button */}
          <Button
            onClick={generate}
            disabled={isGenerating || !transcription.trim()}
            className="w-full gap-2 h-12 text-base font-semibold"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Estruturando em {format}...
              </>
            ) : (
              <>
                <FileText className="h-5 w-5" />
                Gerar Evolução {format}
              </>
            )}
          </Button>

          {/* Result */}
          {result && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Evolução Estruturada — {format}</h2>
                <Button variant="outline" size="sm" onClick={copyResult} className="gap-1.5">
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copiado" : "Copiar"}
                </Button>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </PremiumPageGuard>
  );
};

export default VoiceEvolution;
