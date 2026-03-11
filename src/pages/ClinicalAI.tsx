import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, RotateCcw, MessageSquare, ClipboardList, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { streamClinicalAi } from "@/lib/clinicalAiStream";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

export default function ClinicalAI() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"chat" | "structured">("chat");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Structured form fields
  const [symptoms, setSymptoms] = useState("");
  const [history, setHistory] = useState("");
  const [vitals, setVitals] = useState("");
  const [exams, setExams] = useState("");
  const [medications, setMedications] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string, sendMode: "chat" | "structured" = "chat") => {
    if (!text.trim() || isLoading) return;

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

    try {
      await streamClinicalAi({
        messages: [...messages, userMsg],
        mode: sendMode,
        onDelta: upsertAssistant,
        onDone: () => setIsLoading(false),
        onError: (err) => {
          toast.error(err);
          setIsLoading(false);
        },
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

    if (parts.length === 0) {
      toast.error("Preencha ao menos um campo");
      return;
    }

    const text = "**CASO CLÍNICO ESTRUTURADO**\n\n" + parts.join("\n\n");
    sendMessage(text, "structured");

    // Clear form
    setSymptoms(""); setHistory(""); setVitals("");
    setExams(""); setMedications(""); setAdditionalInfo("");
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-card/80 backdrop-blur-sm">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground">
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="font-heading font-bold text-sm">IA Clínica</h1>
          <p className="text-[10px] text-muted-foreground truncate">Apoio diagnóstico e terapêutico baseado em evidências</p>
        </div>
        <button onClick={clearChat} className="p-1.5 rounded-md hover:bg-accent text-muted-foreground" title="Limpar conversa">
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
              <MessageSquare size={24} className="text-primary" />
            </div>
            <h2 className="font-heading font-bold text-base mb-1">Assistente Clínico IA</h2>
            <p className="text-xs text-muted-foreground max-w-sm mb-4">
              Descreva sintomas, caso clínico ou dúvida médica. A IA fornecerá diagnóstico diferencial, conduta, prescrição e referências.
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {["Dor torácica tipo A", "Sepse — conduta", "Dose de Noradrenalina", "IAM com supra de ST"].map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); setMode("chat"); }}
                  className="px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:bg-accent text-xs font-heading"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground rounded-br-md"
                : "bg-muted rounded-bl-md"
            }`}>
              {msg.role === "assistant" ? (
                <div className="prose prose-sm dark:prose-invert max-w-none [&_p]:mb-1.5 [&_ul]:mb-1.5 [&_ol]:mb-1.5 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm [&_li]:text-sm">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              )}
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 size={16} className="animate-spin text-muted-foreground" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm p-3">
        <Tabs value={mode} onValueChange={(v) => setMode(v as "chat" | "structured")} className="w-full">
          <TabsList className="w-full mb-2 h-8">
            <TabsTrigger value="chat" className="flex-1 text-xs gap-1.5 h-7">
              <MessageSquare size={12} /> Chat
            </TabsTrigger>
            <TabsTrigger value="structured" className="flex-1 text-xs gap-1.5 h-7">
              <ClipboardList size={12} /> Estruturado
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chat" className="mt-0">
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Descreva o caso, sintomas ou dúvida..."
                className="min-h-[44px] max-h-32 text-sm resize-none rounded-xl"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleChatSubmit(e); }
                }}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0 rounded-xl h-[44px] w-[44px]">
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="structured" className="mt-0">
            <form onSubmit={handleStructuredSubmit} className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Sintomas / QP</label>
                  <Input value={symptoms} onChange={(e) => setSymptoms(e.target.value)} placeholder="Dor torácica, dispneia..." className="h-8 text-xs" />
                </div>
                <div>
                  <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">Sinais Vitais</label>
                  <Input value={vitals} onChange={(e) => setVitals(e.target.value)} placeholder="PA, FC, SpO2, FR, Tax..." className="h-8 text-xs" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-heading font-medium text-muted-foreground mb-0.5 block">História Clínica</label>
                <Input value={history} onChange={(e) => setHistory(e.target.value)} placeholder="HAS, DM, antecedentes..." className="h-8 text-xs" />
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
                {isLoading ? <><Loader2 size={14} className="animate-spin mr-1.5" /> Analisando...</> : "Analisar Caso Clínico"}
              </Button>
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
