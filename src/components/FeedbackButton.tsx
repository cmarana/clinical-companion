import { useState } from "react";
import { MessageSquarePlus, Bug, Lightbulb, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const feedbackTypes = [
  { id: "bug", label: "Bug", icon: Bug, color: "text-red-500 bg-red-500/10" },
  { id: "suggestion", label: "Sugestão", icon: Lightbulb, color: "text-amber-500 bg-amber-500/10" },
  { id: "other", label: "Outro", icon: MessageSquarePlus, color: "text-blue-500 bg-blue-500/10" },
] as const;

export default function FeedbackButton() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string>("suggestion");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  if (!user) return null;

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setSending(true);
    try {
      const { error } = await supabase.from("feedback").insert({
        user_id: user.id,
        type,
        message: message.trim(),
        page_url: window.location.pathname,
      });
      if (error) throw error;
      toast.success("Feedback enviado! Obrigado 🙏");
      setMessage("");
      setOpen(false);
    } catch (e: any) {
      toast.error("Erro ao enviar feedback");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-6 z-40 h-11 w-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Enviar feedback"
      >
        <MessageSquarePlus size={20} />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-card rounded-t-2xl sm:rounded-2xl shadow-2xl p-5"
              style={{ paddingBottom: "max(env(safe-area-inset-bottom, 0px), 20px)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-base">Enviar Feedback</h3>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground">
                  <X size={18} />
                </button>
              </div>

              {/* Type selector */}
              <div className="flex gap-2 mb-4">
                {feedbackTypes.map((ft) => (
                  <button
                    key={ft.id}
                    onClick={() => setType(ft.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      type === ft.id
                        ? "ring-2 ring-primary bg-primary/5"
                        : "bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    <ft.icon size={14} className={ft.color.split(" ")[0]} />
                    {ft.label}
                  </button>
                ))}
              </div>

              {/* Message */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  type === "bug"
                    ? "Descreva o bug encontrado..."
                    : type === "suggestion"
                    ? "Sua sugestão de melhoria..."
                    : "Seu comentário..."
                }
                className="w-full h-28 rounded-xl bg-muted/50 border border-border p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              <p className="text-[10px] text-muted-foreground mt-1 mb-3">
                Página: {window.location.pathname}
              </p>

              <Button
                onClick={handleSubmit}
                disabled={!message.trim() || sending}
                className="w-full gap-2"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? "Enviando..." : "Enviar Feedback"}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
