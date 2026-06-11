import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Send } from "lucide-react";
import BoothLayout from "../BoothLayout";
import { useStreamingText, useTypewriter } from "../Typewriter";
import { claraConversation } from "../mock-data";

function renderMarkdown(text: string) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <div key={i} className="h-2" />;
    const html = line.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#fff">$1</strong>');
    return (
      <p
        key={i}
        className="text-white/85 text-[15px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

export default function SceneClara() {
  const typed = useTypewriter(claraConversation.question, true, 55);
  const sent = typed.length === claraConversation.question.length;
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => {
    if (sent) {
      const t = setTimeout(() => setShowAnswer(true), 500);
      return () => clearTimeout(t);
    }
  }, [sent]);
  const streamed = useStreamingText(claraConversation.answer, showAnswer, 14);

  return (
    <BoothLayout title="Dra. Clara · IA Clínica">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-2xl mx-auto space-y-4">
            {/* user message */}
            <div className="flex justify-end">
              <div
                className="max-w-[80%] px-4 py-3 rounded-2xl rounded-br-md text-[15px]"
                style={{ background: "#0A6DD9", color: "white" }}
              >
                {sent ? claraConversation.question : typed}
              </div>
            </div>

            {/* clara response */}
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(10,109,217,0.2)" }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: "#0A6DD9" }} />
                </div>
                <div
                  className="flex-1 px-4 py-3 rounded-2xl rounded-tl-md space-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-2">
                    Dra. Clara
                  </div>
                  {renderMarkdown(streamed)}
                  {streamed.length < claraConversation.answer.length && (
                    <span className="inline-block w-2 h-4 bg-white/70 align-middle animate-pulse" />
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* input bar */}
        <div className="border-t px-5 py-3" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#050B1A" }}>
          <div className="max-w-2xl mx-auto flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
            <span className="text-white/85 flex-1 text-[15px]">{sent ? "" : typed}</span>
            <Send className="w-4 h-4" style={{ color: sent ? "#0A6DD9" : "rgba(255,255,255,0.4)" }} />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute top-16 right-6 px-4 py-2.5 rounded-xl text-xs font-medium border shadow-2xl"
        style={{ background: "rgba(10,109,217,0.95)", borderColor: "rgba(255,255,255,0.15)", fontFamily: "Sora, system-ui" }}
      >
        IA clínica em português, contexto brasileiro
      </motion.div>
    </BoothLayout>
  );
}
