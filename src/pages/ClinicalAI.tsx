import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Send, RotateCcw, MessageSquare, ClipboardList, Loader2, User, Bot, Mic, MicOff, Zap, FileText } from "lucide-react";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { streamClinicalAi } from "@/lib/clinicalAiStream";
import { toast } from "sonner";
import ClinicalResponseCards from "@/components/ClinicalResponseCards";
import { motion } from "framer-motion";
import OfflineBadge from "@/components/OfflineBadge";

type Msg = { role: "user" | "assistant"; content: string };

// Persistent patient context for the session
interface PatientContext {
  weight?: string;
  age?: string;
  creatinine?: string;
  allergies?: string;
  sex?: string;
  scenario?: string;
}

function ClinicalAIContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillHandled = useRef(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"chat" | "structured" | "plantao" | "narrative">("chat");
  const [narrative, setNarrative] = useState("");
  const [plantaoQuery, setPlantaoQuery] = useState("");
  const [patientCtx, setPatientCtx] = useState<PatientContext>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Structured form
  const [symptoms, setSymptoms] = useState("");
  const [history, setHistory] = useState("");
  const [vitals, setVitals] = useState("");
  const [exams, setExams] = useState("");
  const [medications, setMedications] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [voiceTarget, setVoiceTarget] = useState<"chat" | "symptoms" | "history" | "vitals" | "exams">("chat");
  const recognitionRef = useRef<any>(null);

  const speechSupported = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  const startVoice = useCallback((target: typeof voiceTarget) => {
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) { toast.error("Navegador não suporta reconhecimento de voz"); return; }

    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;
    setVoiceTarget(target);

    let finalTranscript = "";

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += t + " ";
        } else {
          interim = t;
        }
      }
      const combined = (finalTranscript + interim).trim();
      
      switch (target) {
        case "chat": setInput(combined); break;
        case "symptoms": setSymptoms(combined); break;
        case "history": setHistory(combined); break;
        case "vitals": setVitals(combined); break;
        case "exams": setExams(combined); break;
      }
    };

    recognition.onerror = () => { setIsListening(false); toast.error("Erro no reconhecimento de voz"); };
    recognition.onend = () => setIsListening(false);

    recognition.start();
    toast.success("🎤 Ouvindo... fale o relato do paciente");
  }, [isListening]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle prefilled context from protocol pages
  useEffect(() => {
    const state = location.state as { prefill?: string } | null;
    if (state?.prefill && !prefillHandled.current) {
      prefillHandled.current = true;
      setInput(state.prefill);
      // Auto-send after a short delay
      setTimeout(() => {
        sendMessage(state.prefill!, "chat");
      }, 300);
    }
  }, [location.state]);

  const buildContextPrefix = () => {
    const parts: string[] = [];
    if (patientCtx.weight) parts.push(`Peso: ${patientCtx.weight}kg`);
    if (patientCtx.age) parts.push(`Idade: ${patientCtx.age}`);
    if (patientCtx.creatinine) parts.push(`Creatinina: ${patientCtx.creatinine}`);
    if (patientCtx.allergies) parts.push(`Alergias: ${patientCtx.allergies}`);
    if (patientCtx.sex) parts.push(`Sexo: ${patientCtx.sex}`);
    if (patientCtx.scenario) parts.push(`Cenário: ${patientCtx.scenario}`);
    return parts.length ? `[CONTEXTO DO PACIENTE: ${parts.join(" | ")}]\n\n` : "";
  };

  const sendMessage = async (text: string, sendMode: "chat" | "structured" | "plantao" | "narrative" = "chat") => {
    if (!text.trim() || isLoading) return;

    const fullText = buildContextPrefix() + text;
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    // Build message history with context injected in latest user msg
    const apiMessages = messages.map(m => ({ role: m.role, content: m.content }));
    apiMessages.push({ role: "user", content: fullText });

    try {
      await streamClinicalAi({
        messages: apiMessages,
        mode: sendMode,
        onDelta: upsertAssistant,
        onDone: () => setIsLoading(false),
        onError: (err) => { toast.error(err, { duration: 6000 }); setIsLoading(false); },
      });
    } catch {
      toast.error("Erro ao conectar com a IA");
      setIsLoading(false);
    }
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input, "chat");
  };

  const handleStructuredSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts: string[] = [];
    if (symptoms) parts.push(`**Sintomas/Queixas:** ${symptoms}`);
    if (history) parts.push(`**História Clínica:** ${history}`);
    if (vitals) parts.push(`**Sinais Vitais:** ${vitals}`);
    if (exams) parts.push(`**Exames:** ${exams}`);
    if (medications) parts.push(`**Medicações em uso:** ${medications}`);
    if (additionalInfo) parts.push(`**Informações adicionais:** ${additionalInfo}`);
    if (patientCtx.weight) parts.push(`**Peso:** ${patientCtx.weight}kg`);
    if (patientCtx.age) parts.push(`**Idade:** ${patientCtx.age}`);
    if (patientCtx.creatinine) parts.push(`**Creatinina:** ${patientCtx.creatinine}`);
    if (patientCtx.allergies) parts.push(`**Alergias:** ${patientCtx.allergies}`);
    if (patientCtx.sex) parts.push(`**Sexo:** ${patientCtx.sex}`);
    if (patientCtx.scenario) parts.push(`**Cenário:** ${patientCtx.scenario}`);

    if (!symptoms && !history && !vitals && !exams) {
      toast.error("Preencha ao menos sintomas, história ou exames");
      return;
    }

    const text = "**CASO CLÍNICO ESTRUTURADO**\n\n" + parts.join("\n\n");
    sendMessage(text, "structured");
    setSymptoms(""); setHistory(""); setVitals("");
    setExams(""); setMedications(""); setAdditionalInfo("");
  };

  const handlePlantaoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plantaoQuery.trim()) {
      toast.error("Descreva a situação em 1-2 linhas");
      return;
    }
    const text = `[MODO PLANTÃO — RESPOSTA DIRETA]\n\nSituação: ${plantaoQuery}`;
    sendMessage(text, "plantao");
    setPlantaoQuery("");
  };

  const handleNarrativeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (narrative.trim().length < 30) {
      toast.error("Cole o relato completo do paciente (mínimo 30 caracteres)");
      return;
    }
    const text = `[RELATO LIVRE — ESTRUTURE E ANALISE]\n\n${narrative}`;
    sendMessage(text, "narrative");
    setNarrative("");
  };

  const clearChat = () => { setMessages([]); };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card/80 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-heading font-bold text-sm">IA Clínica</h1>
          <p className="text-[10px] text-muted-foreground truncate">Diagnóstico • Conduta • Prescrição • Interações</p>
        </div>
        <button onClick={clearChat} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground" title="Nova consulta">
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Patient Context Bar */}
      <div className="px-3 py-1.5 border-b border-border bg-muted/30 flex gap-2 items-center overflow-x-auto">
        <span className="text-[9px] font-heading font-semibold text-muted-foreground shrink-0">PACIENTE:</span>
        <input placeholder="Peso (kg)" value={patientCtx.weight || ""} onChange={e => setPatientCtx(p => ({...p, weight: e.target.value}))}
          className="w-16 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <input placeholder="Idade" value={patientCtx.age || ""} onChange={e => setPatientCtx(p => ({...p, age: e.target.value}))}
          className="w-14 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <input placeholder="Cr (mg/dL)" value={patientCtx.creatinine || ""} onChange={e => setPatientCtx(p => ({...p, creatinine: e.target.value}))}
          className="w-20 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <input placeholder="Alergias" value={patientCtx.allergies || ""} onChange={e => setPatientCtx(p => ({...p, allergies: e.target.value}))}
          className="w-24 h-6 text-[10px] px-1.5 rounded border border-border bg-background" />
        <select value={patientCtx.sex || ""} onChange={e => setPatientCtx(p => ({...p, sex: e.target.value}))}
          className="w-14 h-6 text-[10px] px-1 rounded border border-border bg-background text-foreground">
          <option value="">Sexo</option>
          <option value="masculino">M</option>
          <option value="feminino">F</option>
        </select>
        <select value={patientCtx.scenario || ""} onChange={e => setPatientCtx(p => ({...p, scenario: e.target.value}))}
          className="w-20 h-6 text-[10px] px-1 rounded border border-border bg-background text-foreground">
          <option value="">Cenário</option>
          <option value="PS">PS</option>
          <option value="UTI">UTI</option>
          <option value="UBS">UBS</option>
          <option value="SAMU">SAMU</option>
          <option value="Enfermaria">Enferm.</option>
        </select>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
              <Bot size={24} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold text-base mb-1">Assistente Clínico IA</h2>
            <p className="text-[10px] text-muted-foreground max-w-sm mb-1">
              Respostas estruturadas em 10 seções: resumo, diagnóstico, diferenciais, algoritmo, exames, conduta, prescrição, interações, alertas e referências.
            </p>
            <p className="text-[10px] text-muted-foreground/70 max-w-sm mb-4">
              Preencha o contexto do paciente acima para cálculos de dose automáticos.
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {[
                "Dor torácica tipo A em homem 55a, HAS, DM",
                "Sepse pulmonar — conduta completa",
                "Criança 3a, febre 39°C + petéquias",
                "Gestante 32sem, PA 160x110, proteinúria",
              ].map((s) => (
                <button key={s} onClick={() => { setInput(s); setMode("chat"); }}
                  className="px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-accent text-[10px] font-heading text-left">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Bot size={14} className="text-primary" />
              </div>
            )}
            <div className={`max-w-[95%] rounded-lg text-sm ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground rounded-br-sm px-4 py-3"
                : "rounded-bl-sm"
            }`}>
              {msg.role === "assistant" ? (
                <ClinicalResponseCards content={msg.content} />
              ) : (
                <div className="whitespace-pre-wrap text-[13px]">{msg.content}</div>
              )}
            </div>
            {msg.role === "user" && (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                <User size={14} className="text-primary-foreground" />
              </div>
            )}
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex gap-2 justify-start">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Bot size={14} className="text-primary" />
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-2">
              <Loader2 size={14} className="animate-spin text-muted-foreground" />
              <span className="text-[11px] text-muted-foreground">Analisando caso clínico...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm p-3">
        <Tabs value={mode} onValueChange={(v) => setMode(v as typeof mode)} className="w-full">
          <TabsList className="w-full mb-2 h-8 grid grid-cols-4">
            <TabsTrigger value="chat" className="text-[10px] gap-1 h-7 px-1">
              <MessageSquare size={11} /> Chat
            </TabsTrigger>
            <TabsTrigger value="structured" className="text-[10px] gap-1 h-7 px-1">
              <ClipboardList size={11} /> Caso
            </TabsTrigger>
            <TabsTrigger value="plantao" className="text-[10px] gap-1 h-7 px-1 data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground">
              <Zap size={11} /> Plantão
            </TabsTrigger>
            <TabsTrigger value="narrative" className="text-[10px] gap-1 h-7 px-1">
              <FileText size={11} /> Texto
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="mt-0">
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <Textarea value={input} onChange={(e) => setInput(e.target.value)}
                placeholder={isListening && voiceTarget === "chat" ? "🎤 Ouvindo..." : "Descreva sintomas, caso clínico ou dúvida..."}
                className="min-h-[44px] max-h-32 text-sm resize-none rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleChatSubmit(e); }
                }}
              />
              {speechSupported && (
                <Button type="button" size="icon" variant={isListening && voiceTarget === "chat" ? "destructive" : "outline"}
                  onClick={() => startVoice("chat")}
                  className={`shrink-0 rounded-xl h-[44px] w-[44px] ${isListening && voiceTarget === "chat" ? "animate-pulse" : ""}`}
                  title={isListening ? "Parar gravação" : "Ditar relato por voz"}
                >
                  {isListening && voiceTarget === "chat" ? <MicOff size={18} /> : <Mic size={18} />}
                </Button>
              )}
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0 rounded-xl h-[44px] w-[44px]">
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </Button>
            </form>
            {isListening && voiceTarget === "chat" && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                className="mt-2 flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
                </span>
                <span className="text-[10px] font-heading text-destructive font-medium">Gravando relato... toque no microfone para parar</span>
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="structured" className="mt-0">
            <form onSubmit={handleStructuredSubmit} className="space-y-2">
              {speechSupported && (
                <button type="button" onClick={() => startVoice("symptoms")}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-heading font-semibold transition-all ${
                    isListening && voiceTarget === "symptoms"
                      ? "bg-destructive/15 text-destructive animate-pulse border border-destructive/30"
                      : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                  }`}>
                  {isListening && voiceTarget === "symptoms" ? <><MicOff size={14} /> Parar gravação</> : <><Mic size={14} /> 🎤 Gravar relato do paciente</>}
                </button>
              )}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Sintomas / QP *</label>
                  <div className="flex gap-1">
                    <Input value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder={isListening && voiceTarget === "symptoms" ? "🎤 Ouvindo..." : "Dor torácica, dispneia..."} className="h-8 text-xs" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Sinais Vitais</label>
                  <Input value={vitals} onChange={(e) => setVitals(e.target.value)} placeholder="PA, FC, SpO2, FR, Tax..." className="h-8 text-xs" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">História Clínica</label>
                <div className="flex gap-1">
                  <Input value={history} onChange={(e) => setHistory(e.target.value)} placeholder="HAS, DM, antecedentes..." className="h-8 text-xs flex-1" />
                  {speechSupported && (
                    <button type="button" onClick={() => startVoice("history")}
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        isListening && voiceTarget === "history" ? "bg-destructive/15 text-destructive animate-pulse" : "bg-muted hover:bg-accent text-muted-foreground"
                      }`}>
                      {isListening && voiceTarget === "history" ? <MicOff size={12} /> : <Mic size={12} />}
                    </button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Exames</label>
                  <Input value={exams} onChange={(e) => setExams(e.target.value)} placeholder="ECG, Labs, imagem..." className="h-8 text-xs" />
                </div>
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Medicações em uso</label>
                  <Input value={medications} onChange={(e) => setMedications(e.target.value)} placeholder="Losartana, Metformina..." className="h-8 text-xs" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Info adicional</label>
                <Input value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} placeholder="Alergias, observações..." className="h-8 text-xs" />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full h-9 text-xs rounded-xl">
                {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Analisando...</> : "🔍 Analisar Caso Clínico"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="plantao" className="mt-0">
            <form onSubmit={handlePlantaoSubmit} className="space-y-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-destructive/10 border border-destructive/20">
                <Zap size={11} className="text-destructive shrink-0" />
                <p className="text-[10px] text-destructive font-medium leading-tight">
                  Resposta direta beira-leito: ações 0-10min, prescrição, alertas. Sem texto longo.
                </p>
              </div>
              <Textarea
                value={plantaoQuery}
                onChange={(e) => setPlantaoQuery(e.target.value)}
                placeholder="Ex.: Homem 60a, dor torácica 2h + sudorese, PA 90x60, ECG supra V1-V4"
                className="min-h-[60px] max-h-32 text-sm resize-none rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && (e.ctrlKey || e.metaKey)) {
                    e.preventDefault();
                    handlePlantaoSubmit(e);
                  }
                }}
              />
              <Button
                type="submit"
                disabled={isLoading || !plantaoQuery.trim()}
                variant="destructive"
                className="w-full h-9 text-xs rounded-xl font-heading font-bold"
              >
                {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Calculando...</> : <><Zap size={14} className="mr-1.5" /> RESPOSTA DE PLANTÃO</>}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="narrative" className="mt-0">
            <form onSubmit={handleNarrativeSubmit} className="space-y-2">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 border border-primary/20">
                <FileText size={11} className="text-primary shrink-0" />
                <p className="text-[10px] text-primary font-medium leading-tight">
                  Cole o relato corrido do paciente. A IA estrutura e analisa.
                </p>
              </div>
              <Textarea
                value={narrative}
                onChange={(e) => setNarrative(e.target.value)}
                placeholder="Ex.: Paciente do sexo masculino, 58 anos, hipertenso, diabético, deu entrada com dor torácica retroesternal há 3 horas, irradiando para braço esquerdo, associada a náuseas. PA 150x90, FC 98, sat 96%. Em uso de losartana e metformina. Nega alergias..."
                className="min-h-[140px] max-h-[260px] text-sm resize-y rounded-xl leading-relaxed"
              />
              <div className="flex gap-2">
                {speechSupported && (
                  <Button
                    type="button"
                    variant={isListening && voiceTarget === "history" ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => {
                      // Reuse history voice target to fill narrative via setHistory; we instead reuse "history" trick
                      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
                      if (!SpeechRecognition) { toast.error("Sem suporte de voz"); return; }
                      if (isListening && recognitionRef.current) { recognitionRef.current.stop(); setIsListening(false); return; }
                      const r = new SpeechRecognition();
                      r.lang = "pt-BR"; r.continuous = true; r.interimResults = true;
                      recognitionRef.current = r; setVoiceTarget("history");
                      let final = "";
                      r.onstart = () => setIsListening(true);
                      r.onresult = (ev: any) => {
                        let interim = "";
                        for (let i = ev.resultIndex; i < ev.results.length; i++) {
                          const t = ev.results[i][0].transcript;
                          if (ev.results[i].isFinal) final += t + " ";
                          else interim = t;
                        }
                        setNarrative((prev) => (prev ? prev + " " : "") + (final + interim).trim());
                        final = "";
                      };
                      r.onerror = () => { setIsListening(false); toast.error("Erro voz"); };
                      r.onend = () => setIsListening(false);
                      r.start();
                      toast.success("🎤 Ditando relato...");
                    }}
                    className="rounded-xl h-9"
                  >
                    {isListening ? <MicOff size={14} className="mr-1.5" /> : <Mic size={14} className="mr-1.5" />}
                    {isListening ? "Parar" : "Ditar"}
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={isLoading || narrative.trim().length < 30}
                  className="flex-1 h-9 text-xs rounded-xl"
                >
                  {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Estruturando...</> : <><FileText size={14} className="mr-1.5" /> Estruturar e Analisar</>}
                </Button>
              </div>
              <p className="text-[9px] text-muted-foreground text-center">
                A IA primeiro organiza o caso (sem inventar nada), depois analisa.
              </p>
            </form>
          </TabsContent>
        </Tabs>

        <p className="text-[9px] text-muted-foreground text-center mt-1.5">
          ⚠️ Apoio à decisão clínica — não substitui o julgamento médico
        </p>
      </div>
    </div>
  );
}

export default function ClinicalAI() {
  return (
    <PremiumPageGuard feature="IA Clínica" title="IA Clínica">
      <OfflineBadge message="A IA Clínica requer conexão com a internet para funcionar" />
      <ClinicalAIContent />
    </PremiumPageGuard>
  );
}
