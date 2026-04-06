import { useState, useRef, useCallback } from "react";
import { ArrowLeft, Mic, MicOff, Copy, Check, RotateCcw, ShieldCheck, Loader2, AlertTriangle, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import PremiumPageGuard from "@/components/PremiumPageGuard";

const PrescriptionChecker = () => {
  const navigate = useNavigate();
  const [prescription, setPrescription] = useState("");
  const [allergies, setAllergies] = useState("");
  const [patientInfo, setPatientInfo] = useState("");
  const [result, setResult] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [copied, setCopied] = useState(false);
  const recognitionRef = useRef<any>(null);

  const startListening = useCallback(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { toast.error("Navegador não suporta voz. Use o Chrome."); return; }
    const recognition = new SR();
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;
    let finalT = prescription;
    recognition.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalT += " " + t; else interim = t;
      }
      setPrescription((finalT + " " + interim).trim());
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => { setPrescription(finalT.trim()); setIsListening(false); };
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
    toast.success("Gravação iniciada — dite a prescrição");
  }, [prescription]);

  const stopListening = useCallback(() => { recognitionRef.current?.stop(); setIsListening(false); }, []);

  const analyze = useCallback(async () => {
    if (!prescription.trim()) { toast.error("Cole ou dite a prescrição primeiro."); return; }
    setIsAnalyzing(true);
    setResult("");
    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/prescription-check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          prescription: prescription.trim(),
          allergies: allergies.trim() || null,
          patient_info: patientInfo.trim() || null,
        }),
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Erro ao analisar prescrição");
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
            if (content) { fullText += content; setResult(fullText); }
          } catch { /* partial */ }
        }
      }
    } catch (e: any) {
      toast.error(e.message || "Erro ao analisar prescrição");
    } finally {
      setIsAnalyzing(false);
    }
  }, [prescription, allergies, patientInfo]);

  const copyResult = useCallback(() => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Resultado copiado!");
    setTimeout(() => setCopied(false), 2000);
  }, [result]);

  return (
    <PremiumPageGuard feature="prescription-checker" title="Checagem de Prescrição">
      <div className="min-h-screen bg-background pb-24">
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Checagem de Prescrição
            </h1>
            <p className="text-xs text-muted-foreground">IA analisa interações, doses, alergias e compat. EV</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
          {/* Info banner */}
          <div className="flex gap-2 p-3 rounded-xl bg-primary/5 border border-primary/15 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Cole a prescrição completa ou dite por voz. A IA verificará <strong>interações, doses, alergias cruzadas, incompatibilidades EV e duplicidades</strong> de uma só vez.</span>
          </div>

          {/* Prescription input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Prescrição completa</label>
            <Textarea
              placeholder={"1. Dipirona 1g EV 6/6h\n2. Omeprazol 40mg EV 1x/dia\n3. Ceftriaxona 1g EV 12/12h\n4. Heparina 5000UI SC 8/8h\n5. Metoclopramida 10mg EV 8/8h\n..."}
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
              rows={7}
              className="text-sm resize-none font-mono"
            />
            <div className="flex gap-2">
              <Button
                onClick={isListening ? stopListening : startListening}
                variant={isListening ? "destructive" : "outline"}
                className="flex-1 gap-2"
                size="sm"
              >
                {isListening ? (
                  <>
                    <MicOff className="h-4 w-4" />
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    Parar
                  </>
                ) : (
                  <><Mic className="h-4 w-4" /> Ditar Prescrição</>
                )}
              </Button>
              {prescription && (
                <Button variant="ghost" size="icon" onClick={() => { setPrescription(""); setResult(""); }}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Allergies & patient info */}
          <div className="grid grid-cols-1 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
                Alergias conhecidas <span className="text-muted-foreground font-normal">(opcional)</span>
              </label>
              <Input
                placeholder="Ex: Penicilina, AINEs, Sulfa, Dipirona..."
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">
                Dados do paciente <span className="text-muted-foreground font-normal">(opcional)</span>
              </label>
              <Input
                placeholder="Ex: 72 anos, 58kg, ClCr 35mL/min, gestante..."
                value={patientInfo}
                onChange={(e) => setPatientInfo(e.target.value)}
                className="text-sm"
              />
            </div>
          </div>

          {/* Analyze button */}
          <Button
            onClick={analyze}
            disabled={isAnalyzing || !prescription.trim()}
            className="w-full gap-2 h-12 text-base font-semibold"
          >
            {isAnalyzing ? (
              <><Loader2 className="h-5 w-5 animate-spin" /> Analisando prescrição...</>
            ) : (
              <><ShieldCheck className="h-5 w-5" /> Verificar Prescrição</>
            )}
          </Button>

          {/* Result */}
          {result && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Resultado da Análise</h2>
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

export default PrescriptionChecker;
