import { useState, useRef, useCallback } from "react";
import { ArrowLeft, Mic, MicOff, Copy, Check, RotateCcw, FileText, Loader2, Printer, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import OfflineBadge from "@/components/OfflineBadge";

const DischargeSummary = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    patient_name: "", age: "", sex: "", admission_date: "", discharge_date: "",
    diagnosis: "", comorbidities: "", hospital_course: "", procedures: "",
    exams: "", medications_discharge: "", follow_up: "", extra_notes: "",
  });
  const [result, setResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [voiceField, setVoiceField] = useState<string | null>(null);
  const recRef = useRef<any>(null);

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  // Voice input for any field
  const startVoice = useCallback((field: string) => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) { toast.error("Navegador sem suporte a voz"); return; }
    const r = new SR();
    r.lang = "pt-BR"; r.continuous = true; r.interimResults = true;
    let final = form[field as keyof typeof form];
    r.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += " " + e.results[i][0].transcript;
        else interim = e.results[i][0].transcript;
      }
      set(field, (final + " " + interim).trim());
    };
    r.onend = () => { set(field, final.trim()); setVoiceField(null); };
    r.onerror = () => setVoiceField(null);
    recRef.current = r; r.start(); setVoiceField(field);
  }, [form]);

  const stopVoice = useCallback(() => { recRef.current?.stop(); setVoiceField(null); }, []);

  const generate = useCallback(async () => {
    if (!form.patient_name && !form.diagnosis && !form.hospital_course) {
      toast.error("Preencha ao menos nome, diagnóstico ou evolução."); return;
    }
    setIsGenerating(true); setResult("");
    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/discharge-summary`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify(form),
      });
      if (!resp.ok) { const e = await resp.json().catch(() => ({})); throw new Error(e.error || "Erro"); }
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
          const j = line.slice(6).trim();
          if (j === "[DONE]") break;
          try { const p = JSON.parse(j); const c = p.choices?.[0]?.delta?.content; if (c) { full += c; setResult(full); } } catch {}
        }
      }
    } catch (e: any) { toast.error(e.message); } finally { setIsGenerating(false); }
  }, [form]);

  const printResult = useCallback(() => {
    const w = window.open("", "_blank");
    if (!w) { toast.error("Permita pop-ups"); return; }
    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Resumo de Alta</title>
      <style>body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;max-width:800px;margin:0 auto;padding:24px;color:#1a1a1a;font-size:13px;line-height:1.6;}
      h1,h2,h3{margin-top:16px;margin-bottom:4px;} h1{font-size:18px;} h2{font-size:15px;} h3{font-size:13px;}
      hr{border:none;border-top:1px solid #ddd;margin:12px 0;} ul,ol{padding-left:20px;}
      @media print{body{padding:10px;}}</style></head><body>${
        result.replace(/^### /gm, "<h3>").replace(/^## /gm, "<h2>").replace(/^# /gm, "<h1>")
      }</body></html>`);
    // Use markdown-to-HTML properly via a temp div
    const tempDiv = w.document.createElement("div");
    w.document.body.innerHTML = "";
    // Simple approach: just put the markdown rendered content
    const styleEl = w.document.createElement("style");
    styleEl.textContent = `body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;max-width:800px;margin:0 auto;padding:24px;color:#1a1a1a;font-size:13px;line-height:1.6;}
      h1,h2,h3{margin-top:16px;margin-bottom:4px;}h1{font-size:18px;}h2{font-size:15px;}h3{font-size:13px;}
      hr{border:none;border-top:1px solid #ddd;margin:12px 0;}ul,ol{padding-left:20px;}
      strong{font-weight:600;}@media print{body{padding:10px;}}`;
    w.document.head.appendChild(styleEl);
    // Convert markdown bold/headers manually for print
    let html = result
      .replace(/### (.*)/g, "<h3>$1</h3>")
      .replace(/## (.*)/g, "<h2>$1</h2>")
      .replace(/# (.*)/g, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n- /g, "\n<li>")
      .replace(/\n\d+\. /g, (m) => `\n<li>${m.trim().replace(/^\d+\.\s*/, "")}`)
      .replace(/\n/g, "<br/>");
    w.document.body.innerHTML = html;
    w.document.close();
    setTimeout(() => w.print(), 400);
  }, [result]);

  const copyResult = useCallback(() => {
    navigator.clipboard.writeText(result);
    setCopied(true); toast.success("Copiado!");
    setTimeout(() => setCopied(false), 2000);
  }, [result]);

  const Field = ({ label, field, placeholder, multiline, mic }: { label: string; field: string; placeholder: string; multiline?: boolean; mic?: boolean }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-foreground">{label}</label>
        {mic && (
          <Button
            size="sm" variant={voiceField === field ? "destructive" : "ghost"}
            className="h-6 px-2 text-xs gap-1"
            onClick={voiceField === field ? stopVoice : () => startVoice(field)}
          >
            {voiceField === field ? <><MicOff className="h-3 w-3" /> Parar</> : <><Mic className="h-3 w-3" /> Voz</>}
          </Button>
        )}
      </div>
      {multiline ? (
        <Textarea placeholder={placeholder} value={form[field as keyof typeof form]} onChange={(e) => set(field, e.target.value)} rows={3} className="text-xs resize-none" />
      ) : (
        <Input placeholder={placeholder} value={form[field as keyof typeof form]} onChange={(e) => set(field, e.target.value)} className="text-xs h-8" />
      )}
    </div>
  );

  return (
    <PremiumPageGuard feature="discharge-summary" title="Resumo de Alta">
      <div className="min-h-screen bg-background pb-24">
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}><ArrowLeft className="h-5 w-5" /></Button>
          <div>
            <h1 className="text-lg font-bold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Resumo de Alta
            </h1>
            <p className="text-xs text-muted-foreground">IA gera o resumo completo para impressão</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-5 space-y-4">
          <div className="flex gap-2 p-3 rounded-xl bg-primary/5 border border-primary/15 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Preencha os campos disponíveis (use voz nos campos maiores). A IA compilará um <strong>resumo de alta completo e formatado</strong>.</span>
          </div>

          {/* Patient ID */}
          <div className="grid grid-cols-3 gap-2">
            <Field label="Nome" field="patient_name" placeholder="Nome completo" />
            <Field label="Idade" field="age" placeholder="65 anos" />
            <Field label="Sexo" field="sex" placeholder="M / F" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Data de internação" field="admission_date" placeholder="01/04/2026" />
            <Field label="Data de alta" field="discharge_date" placeholder="06/04/2026" />
          </div>

          {/* Clinical */}
          <Field label="Diagnóstico principal" field="diagnosis" placeholder="Ex: Pneumonia comunitária grave (J18.9)" mic />
          <Field label="Comorbidades" field="comorbidities" placeholder="HAS, DM2, DPOC..." mic />
          <Field label="Evolução hospitalar" field="hospital_course" placeholder="Descreva a evolução clínica durante a internação..." multiline mic />
          <Field label="Procedimentos realizados" field="procedures" placeholder="Intubação, drenagem torácica, transfusão..." mic />
          <Field label="Exames relevantes" field="exams" placeholder="Hemograma, culturas, TC de tórax..." multiline mic />

          {/* Discharge */}
          <Field label="Medicamentos de alta" field="medications_discharge" placeholder="1. Amoxicilina 500mg 8/8h 7d&#10;2. Omeprazol 20mg 1x/dia..." multiline mic />
          <Field label="Seguimento" field="follow_up" placeholder="Retorno pneumo 15 dias, repetir Rx tórax..." mic />
          <Field label="Observações adicionais" field="extra_notes" placeholder="Orientações especiais, restrições..." multiline mic />

          {/* Generate */}
          <Button onClick={generate} disabled={isGenerating} className="w-full gap-2 h-12 text-base font-semibold">
            {isGenerating ? <><Loader2 className="h-5 w-5 animate-spin" /> Gerando resumo...</> : <><FileText className="h-5 w-5" /> Gerar Resumo de Alta</>}
          </Button>

          {/* Result */}
          {result && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">Resumo de Alta</h2>
                <div className="flex gap-1.5">
                  <Button variant="outline" size="sm" onClick={printResult} className="gap-1.5">
                    <Printer className="h-3.5 w-3.5" /> Imprimir
                  </Button>
                  <Button variant="outline" size="sm" onClick={copyResult} className="gap-1.5">
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? "Copiado" : "Copiar"}
                  </Button>
                </div>
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

export default DischargeSummary;
