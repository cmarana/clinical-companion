import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircleQuestion, X, Send, Loader2, Mail, ArrowLeft, Bug, Lightbulb, MessageSquarePlus, HelpCircle, CreditCard, Bot, Wifi, Shield, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import OfflineBadge from "@/components/OfflineBadge";
import { useNavigate } from "react-router-dom";

type Msg = { role: "user" | "assistant"; content: string };

const feedbackTypes = [
  { id: "bug", label: "Bug", icon: Bug, color: "text-destructive" },
  { id: "suggestion", label: "Sugestão", icon: Lightbulb, color: "text-destructive" },
  { id: "other", label: "Outro", icon: MessageSquarePlus, color: "text-primary" },
] as const;

const triageCategories = [
  { id: "account", label: "Conta & Perfil", icon: User },
  { id: "billing", label: "Assinatura & Pagamento", icon: CreditCard },
  { id: "ai", label: "IA Clínica", icon: Bot },
  { id: "offline", label: "Offline & App", icon: Wifi },
  { id: "privacy", label: "Privacidade & LGPD", icon: Shield },
  { id: "content", label: "Conteúdo Clínico", icon: FileText },
  { id: "other", label: "Outro", icon: HelpCircle },
] as const;

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/support-chat`;

export default function SupportChat() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"triage" | "chat" | "email" | "feedback">("triage");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [feedbackType, setFeedbackType] = useState("suggestion");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [sendingFeedback, setSendingFeedback] = useState(false);
  // Triagem guiada
  const [triageCategory, setTriageCategory] = useState<string>("");
  const [triageDescription, setTriageDescription] = useState("");
  const [aiAttempts, setAiAttempts] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const aiTriedAtLeastOnce = aiAttempts > 0;
  const showContactShortcuts = aiAttempts >= 1; // depois da 1ª resposta da IA, libera fallback humano

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(async (directText?: string) => {
    const text = (directText || input).trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setIsLoading(true);

    let assistantText = "";
    const upsert = (chunk: string) => {
      assistantText += chunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantText } : m);
        }
        return [...prev, { role: "assistant", content: assistantText }];
      });
    };

    try {
      const token = (await supabase.auth.getSession()).data.session?.access_token
        || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || "Erro de conexão");
      }

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buf = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const c = JSON.parse(json).choices?.[0]?.delta?.content;
            if (c) upsert(c);
          } catch { buf = line + "\n" + buf; break; }
        }
      }
    } catch (e: any) {
      upsert("Desculpe, ocorreu um erro. Tente novamente ou entre em contato por e-mail/WhatsApp.");
    } finally {
      setIsLoading(false);
      setAiAttempts(n => n + 1);
    }
  }, [input, messages, isLoading]);

  const handleStartTriage = () => {
    if (!triageCategory || triageDescription.trim().length < 10) {
      toast.error("Selecione uma categoria e descreva sua dúvida (mín. 10 caracteres).");
      return;
    }
    const catLabel = triageCategories.find(c => c.id === triageCategory)?.label || triageCategory;
    const prompt = `Categoria: ${catLabel}\n\nDúvida do usuário: ${triageDescription.trim()}`;
    setView("chat");
    setTriageDescription("");
    setTimeout(() => sendMessage(prompt), 50);
  };

  const handleSendEmail = async () => {
    if (!emailSubject.trim() || !emailBody.trim()) {
      toast.error("Preencha o assunto e a mensagem");
      return;
    }
    setSendingEmail(true);
    try {
      const feedbackId = crypto.randomUUID();
      const { error } = await supabase.from("feedback").insert({
        id: feedbackId,
        user_id: user?.id || "anonymous",
        type: "support",
        message: `[Suporte] ${emailSubject}\n\n${emailBody}`,
        page_url: window.location.pathname,
      });
      if (error) throw error;

      if (user?.email) {
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "feedback-confirmation",
            recipientEmail: user.email,
            idempotencyKey: `support-${feedbackId}`,
            templateData: { type: "support" },
          },
        }).catch(() => {});
      }

      toast.success("Mensagem enviada! Responderemos por e-mail em breve.");
      setEmailSubject("");
      setEmailBody("");
      setView("chat");
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setSendingEmail(false);
    }
  };

  const handleSendFeedback = async () => {
    if (!feedbackMessage.trim() || !user) return;
    setSendingFeedback(true);
    try {
      const feedbackId = crypto.randomUUID();
      const { error } = await supabase.from("feedback").insert({
        id: feedbackId,
        user_id: user.id,
        type: feedbackType,
        message: feedbackMessage.trim(),
        page_url: window.location.pathname,
      });
      if (error) throw error;
      toast.success("Feedback enviado! Obrigado 🙏");
      setFeedbackMessage("");
      setView("chat");

      supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "feedback-confirmation",
          recipientEmail: user.email,
          idempotencyKey: `feedback-confirm-${feedbackId}`,
          templateData: { type: feedbackType },
        },
      }).catch(() => {});
    } catch {
      toast.error("Erro ao enviar feedback");
    } finally {
      setSendingFeedback(false);
    }
  };

  const viewTitle = view === "chat" ? "Suporte PULSO" : view === "email" ? "Contato por E-mail" : "Enviar Feedback";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Suporte"
      >
        <MessageCircleQuestion size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-end md:justify-end bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full md:w-[400px] md:max-h-[600px] md:mr-6 md:mb-6 md:rounded-2xl bg-card rounded-t-2xl shadow-2xl flex flex-col overflow-hidden"
              style={{ height: "min(85vh, 600px)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-primary/5">
                <div className="flex items-center gap-2">
                  {view !== "chat" && (
                    <button onClick={() => setView("chat")} className="p-1 rounded hover:bg-muted">
                      <ArrowLeft size={16} />
                    </button>
                  )}
                  <MessageCircleQuestion size={18} className="text-primary" />
                  <span className="font-heading font-bold text-sm">{viewTitle}</span>
                </div>
                <div className="flex items-center gap-1">
                  {view === "chat" && (
                    <>
                      <Button variant="ghost" size="sm" onClick={() => setView("feedback")} className="gap-1 text-xs h-7 px-2">
                        <MessageSquarePlus size={13} />
                        Feedback
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setView("email")} className="gap-1 text-xs h-7 px-2">
                        <Mail size={13} />
                        E-mail
                      </Button>
                    </>
                  )}
                  <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground">
                    <X size={16} />
                  </button>
                </div>
              </div>
              <OfflineBadge message="O chat e envio de mensagens requerem conexão" />

              {view === "chat" ? (
                <>
                  {/* Messages */}
                  <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                    {messages.length === 0 && (
                      <div className="text-center py-8 space-y-3">
                        <MessageCircleQuestion size={36} className="mx-auto text-primary/40" />
                        <p className="text-sm text-muted-foreground">
                          Olá! Como posso ajudar?
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {["Como usar a IA Clínica?", "Como cancelar assinatura?", "O app funciona offline?"].map((q) => (
                            <button
                              key={q}
                              onClick={() => sendMessage(q)}
                              className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    {messages.map((m, i) => (
                      <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-muted rounded-bl-md"
                        }`}>
                          {m.role === "assistant" ? (
                            <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:m-0 [&>ul]:mt-1 [&>ol]:mt-1">
                              <ReactMarkdown>{m.content}</ReactMarkdown>
                            </div>
                          ) : m.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && messages[messages.length - 1]?.role === "user" && (
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                          <Loader2 size={16} className="animate-spin text-muted-foreground" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="border-t border-border p-3 flex gap-2" style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 12px)" }}>
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                      placeholder="Digite sua dúvida..."
                      className="flex-1 bg-muted/50 border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <Button size="icon" onClick={() => sendMessage()} disabled={!input.trim() || isLoading} className="h-9 w-9 rounded-xl shrink-0">
                      <Send size={16} />
                    </Button>
                  </div>
                </>
              ) : view === "email" ? (
                <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)" }}>
                  <p className="text-xs text-muted-foreground">
                    Não conseguiu resolver sua dúvida? Fale com a gente pelo WhatsApp ou envie uma mensagem por e-mail.
                  </p>
                  <a
                    href="https://wa.me/message/ZTQKMSJFBHPWG1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-2.5 text-sm transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.8 1 .99-3.71-.23-.38a9.66 9.66 0 0 1-1.48-5.12c0-5.34 4.34-9.68 9.69-9.68 2.59 0 5.02 1.01 6.85 2.84a9.62 9.62 0 0 1 2.84 6.85c0 5.34-4.35 9.76-9.58 9.76Zm5.31-7.27c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15s-.76.95-.93 1.14c-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.24.47 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z"/>
                    </svg>
                    Falar pelo WhatsApp
                  </a>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider">
                    <div className="flex-1 h-px bg-border" />
                    ou por e-mail
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="space-y-3">
                    <input
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      placeholder="Assunto"
                      className="w-full bg-muted/50 border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    <textarea
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                      placeholder="Descreva seu problema ou dúvida em detalhes..."
                      rows={5}
                      className="w-full bg-muted/50 border border-border rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    {user?.email && (
                      <p className="text-[10px] text-muted-foreground">
                        Responderemos para: {user.email}
                      </p>
                    )}
                    <Button onClick={handleSendEmail} disabled={sendingEmail || !emailSubject.trim() || !emailBody.trim()} className="w-full gap-2">
                      {sendingEmail ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                      {sendingEmail ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </div>
                </div>
              ) : (
                /* Feedback form */
                <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)" }}>
                  <div className="flex gap-2">
                    {feedbackTypes.map((ft) => (
                      <button
                        key={ft.id}
                        onClick={() => setFeedbackType(ft.id)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          feedbackType === ft.id
                            ? "ring-2 ring-primary bg-primary/5"
                            : "bg-muted/50 hover:bg-muted"
                        }`}
                      >
                        <ft.icon size={14} className={ft.color} />
                        {ft.label}
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder={
                      feedbackType === "bug"
                        ? "Descreva o bug encontrado..."
                        : feedbackType === "suggestion"
                        ? "Sua sugestão de melhoria..."
                        : "Seu comentário..."
                    }
                    className="w-full h-28 rounded-xl bg-muted/50 border border-border p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <p className="text-[10px] text-muted-foreground">
                    Página: {window.location.pathname}
                  </p>
                  <Button
                    onClick={handleSendFeedback}
                    disabled={!feedbackMessage.trim() || sendingFeedback || !user}
                    className="w-full gap-2"
                  >
                    {sendingFeedback ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {sendingFeedback ? "Enviando..." : "Enviar Feedback"}
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
