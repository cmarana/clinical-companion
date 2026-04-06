import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircleQuestion, X, Send, Loader2, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/support-chat`;

export default function SupportChat() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"chat" | "email">("chat");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      upsert("Desculpe, ocorreu um erro. Tente novamente ou entre em contato por e-mail.");
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading]);

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

  return (
    <>
      {/* Trigger button - visible on mobile and desktop */}
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
                  {view === "email" && (
                    <button onClick={() => setView("chat")} className="p-1 rounded hover:bg-muted">
                      <ArrowLeft size={16} />
                    </button>
                  )}
                  <MessageCircleQuestion size={18} className="text-primary" />
                  <span className="font-heading font-bold text-sm">
                    {view === "chat" ? "Suporte PULSO" : "Contato por E-mail"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {view === "chat" && (
                    <Button variant="ghost" size="sm" onClick={() => setView("email")} className="gap-1 text-xs h-7 px-2">
                      <Mail size={13} />
                      E-mail
                    </Button>
                  )}
                  <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground">
                    <X size={16} />
                  </button>
                </div>
              </div>

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
              ) : (
                /* Email form */
                <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)" }}>
                  <p className="text-xs text-muted-foreground">
                    Não conseguiu resolver sua dúvida? Envie uma mensagem e responderemos por e-mail.
                  </p>
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
                      rows={6}
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
