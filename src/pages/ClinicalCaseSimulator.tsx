import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, RotateCcw, CheckCircle2, XCircle, Loader2, BookOpen, Trophy, ChevronRight, Brain, Stethoscope, Zap, GraduationCap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import PremiumPageGuard from "@/components/PremiumPageGuard";
import OfflineBadge from "@/components/OfflineBadge";

type Msg = { role: "user" | "assistant"; content: string };

const SIMULATOR_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/clinical-case-simulator`;

const specialties = [
  "Cardiologia", "Pneumologia", "Neurologia", "Gastroenterologia", "Nefrologia",
  "Infectologia", "Endocrinologia", "Hematologia", "Reumatologia",
  "Emergência/Trauma", "Pediatria", "Obstetrícia/Ginecologia", "Psiquiatria",
  "Cirurgia Geral", "Dermatologia", "Ortopedia", "Urologia",
  "Oftalmologia", "Otorrinolaringologia", "Medicina Intensiva (UTI)",
];

const difficulties = [
  { id: "basico", label: "Básico", desc: "Casos clássicos — 5º/6º ano", icon: BookOpen, color: "text-emerald-500" },
  { id: "intermediario", label: "Intermediário", desc: "Comorbidades — Internato/R1", icon: Stethoscope, color: "text-amber-500" },
  { id: "avancado", label: "Avançado", desc: "Casos atípicos — R2+", icon: Brain, color: "text-red-500" },
];

type Phase = "setup" | "running" | "summary";

async function streamSimulator({
  messages, mode, specialty, difficulty, onDelta, onDone, onError,
}: {
  messages: Msg[]; mode: string; specialty?: string; difficulty?: string;
  onDelta: (t: string) => void; onDone: () => void; onError?: (e: string) => void;
}) {
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  const resp = await fetch(SIMULATOR_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ messages, mode, specialty, difficulty }),
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({ error: "Erro de conexão" }));
    onError?.(err.error || `Erro ${resp.status}`);
    onDone();
    return;
  }
  if (!resp.body) { onError?.("Resposta vazia"); onDone(); return; }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  let done = false;

  while (!done) {
    const { done: d, value } = await reader.read();
    if (d) break;
    buf += decoder.decode(value, { stream: true });
    let ni: number;
    while ((ni = buf.indexOf("\n")) !== -1) {
      let line = buf.slice(0, ni);
      buf = buf.slice(ni + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "" || !line.startsWith("data: ")) continue;
      const js = line.slice(6).trim();
      if (js === "[DONE]") { done = true; break; }
      try {
        const p = JSON.parse(js);
        const c = p.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {
        buf = line + "\n" + buf;
        break;
      }
    }
  }
  // flush
  if (buf.trim()) {
    for (let raw of buf.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const js = raw.slice(6).trim();
      if (js === "[DONE]") continue;
      try {
        const p = JSON.parse(js);
        const c = p.choices?.[0]?.delta?.content;
        if (c) onDelta(c);
      } catch {}
    }
  }
  onDone();
}

function SimulatorContent() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("setup");
  const [specialty, setSpecialty] = useState("");
  const [difficulty, setDifficulty] = useState("intermediario");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [specialtySearch, setSpecialtySearch] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, currentResponse]);

  const startCase = useCallback(async () => {
    if (!specialty) { toast.error("Selecione uma especialidade"); return; }
    setPhase("running");
    setIsLoading(true);
    setMessages([]);
    setCurrentResponse("");
    setStep(1);
    setScore({ correct: 0, total: 0 });

    let acc = "";
    await streamSimulator({
      messages: [], mode: "new_case", specialty, difficulty,
      onDelta: (t) => { acc += t; setCurrentResponse(acc); },
      onDone: () => {
        setMessages([{ role: "assistant", content: acc }]);
        setCurrentResponse("");
        setIsLoading(false);
      },
      onError: (e) => { toast.error(e); setPhase("setup"); setIsLoading(false); },
    });
  }, [specialty, difficulty]);

  const sendAnswer = useCallback(async (answer: string) => {
    if (isLoading) return;
    const userMsg: Msg = { role: "user", content: answer };
    const updatedMsgs = [...messages, userMsg];
    setMessages(updatedMsgs);
    setIsLoading(true);
    setScore(prev => ({ ...prev, total: prev.total + 1 }));

    let acc = "";
    await streamSimulator({
      messages: updatedMsgs, mode: "evaluate",
      onDelta: (t) => { acc += t; setCurrentResponse(acc); },
      onDone: () => {
        const fullMsgs: Msg[] = [...updatedMsgs, { role: "assistant", content: acc }];
        setMessages(fullMsgs);
        setCurrentResponse("");
        setIsLoading(false);
        setStep(prev => prev + 1);
        // Check if answer was correct (heuristic)
        const lower = acc.toLowerCase();
        if (lower.includes("correto") || lower.includes("correta") || lower.includes("parabéns") || lower.includes("excelente") || lower.includes("acertou")) {
          setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
        }
      },
      onError: (e) => { toast.error(e); setIsLoading(false); },
    });
  }, [messages, isLoading]);

  const requestSummary = useCallback(async () => {
    setIsLoading(true);
    const summaryMsg: Msg = { role: "user", content: "Forneça o resumo completo deste caso com diagnóstico final, pontos-chave de aprendizado e referências." };
    const updatedMsgs = [...messages, summaryMsg];
    setMessages(updatedMsgs);

    let acc = "";
    await streamSimulator({
      messages: updatedMsgs, mode: "summary",
      onDelta: (t) => { acc += t; setCurrentResponse(acc); },
      onDone: () => {
        setMessages([...updatedMsgs, { role: "assistant", content: acc }]);
        setCurrentResponse("");
        setIsLoading(false);
        setPhase("summary");
      },
      onError: (e) => { toast.error(e); setIsLoading(false); },
    });
  }, [messages]);

  const filteredSpecialties = specialtySearch
    ? specialties.filter(s => s.toLowerCase().includes(specialtySearch.toLowerCase()))
    : specialties;

  // ── SETUP PHASE ──
  if (phase === "setup") {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-foreground">Simulador de Casos</h1>
              <p className="text-xs text-muted-foreground">Treine raciocínio clínico com IA</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
          {/* Difficulty */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">Nível de Dificuldade</label>
            <div className="grid gap-2">
              {difficulties.map(d => (
                <button
                  key={d.id}
                  onClick={() => setDifficulty(d.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                    difficulty === d.id
                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                      : "border-border/50 bg-card hover:border-primary/30"
                  }`}
                >
                  <d.icon className={`h-5 w-5 ${d.color}`} />
                  <div>
                    <p className="font-medium text-sm text-foreground">{d.label}</p>
                    <p className="text-xs text-muted-foreground">{d.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Specialty */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">Especialidade</label>
            <input
              type="text"
              placeholder="Buscar especialidade..."
              value={specialtySearch}
              onChange={e => setSpecialtySearch(e.target.value)}
              className="w-full px-3 py-2 mb-3 rounded-lg border border-border/50 bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {filteredSpecialties.map(s => (
                <button
                  key={s}
                  onClick={() => setSpecialty(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    specialty === s
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Start */}
          <Button
            className="w-full h-12 text-base font-semibold gap-2"
            onClick={startCase}
            disabled={!specialty}
          >
            <Play className="h-5 w-5" />
            Iniciar Caso Clínico
          </Button>
        </div>
      </div>
    );
  }

  // ── RUNNING / SUMMARY PHASE ──
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border/50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => { setPhase("setup"); setMessages([]); }} className="shrink-0">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-sm font-bold text-foreground">{specialty}</h1>
              <p className="text-xs text-muted-foreground">
                Etapa {step} • {difficulties.find(d => d.id === difficulty)?.label}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {score.total > 0 && (
              <Badge variant="outline" className="text-xs gap-1">
                <Trophy className="h-3 w-3 text-amber-500" />
                {score.correct}/{score.total}
              </Badge>
            )}
            {phase === "running" && (
              <Button variant="outline" size="sm" onClick={requestSummary} disabled={isLoading || messages.length < 2} className="text-xs gap-1">
                <BarChart3 className="h-3.5 w-3.5" />
                Resumo
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-32">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`${msg.role === "user" ? "flex justify-end" : ""}`}
            >
              {msg.role === "user" ? (
                <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-br-md max-w-[85%] text-sm font-medium">
                  {msg.content}
                </div>
              ) : (
                <div className="bg-card border border-border/50 rounded-2xl rounded-bl-md p-4 prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Streaming response */}
        {currentResponse && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card border border-border/50 rounded-2xl rounded-bl-md p-4 prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown>{currentResponse}</ReactMarkdown>
          </motion.div>
        )}

        {isLoading && !currentResponse && (
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>A IA está preparando...</span>
          </div>
        )}
      </div>

      {/* Answer options (bottom bar) */}
      {phase === "running" && !isLoading && messages.length > 0 && messages[messages.length - 1].role === "assistant" && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 p-4 safe-area-bottom z-20">
          <div className="max-w-lg mx-auto space-y-2">
            <p className="text-xs text-muted-foreground font-medium mb-2">Selecione sua resposta:</p>
            <div className="grid grid-cols-2 gap-2">
              {["A", "B", "C", "D"].map(opt => (
                <Button
                  key={opt}
                  variant="outline"
                  className="h-12 text-sm font-semibold hover:bg-primary/10 hover:border-primary/40 transition-all"
                  onClick={() => sendAnswer(`Minha resposta é a alternativa ${opt}.`)}
                >
                  <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center mr-2 font-bold text-xs">
                    {opt}
                  </span>
                  Alternativa {opt}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              className="w-full text-xs text-muted-foreground mt-1"
              onClick={requestSummary}
              disabled={messages.length < 2}
            >
              Encerrar caso e ver resumo
            </Button>
          </div>
        </div>
      )}

      {/* Summary done */}
      {phase === "summary" && !isLoading && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 p-4 safe-area-bottom z-20">
          <div className="max-w-lg mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Trophy className="h-5 w-5 text-amber-500" />
              <span className="font-bold text-foreground">
                Resultado: {score.correct}/{score.total} acertos
                {score.total > 0 && ` (${Math.round((score.correct / score.total) * 100)}%)`}
              </span>
            </div>
            <Button className="w-full gap-2" onClick={() => { setPhase("setup"); setMessages([]); }}>
              <RotateCcw className="h-4 w-4" />
              Novo Caso Clínico
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClinicalCaseSimulator() {
  return (
    <PremiumPageGuard feature="case-simulator" title="Simulador de Casos Clínicos">
      <OfflineBadge message="O simulador de casos requer conexão com a internet" />
      <SimulatorContent />
    </PremiumPageGuard>
  );
}
