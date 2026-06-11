import { motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import LightShell, { MetricChip } from "../LightShell";
import { useTypewriter } from "../Typewriter";
import { BRAND, claraAnswerBlocks } from "../mock-data";
import { useEffect, useState } from "react";

export default function SceneClara() {
  const [phase, setPhase] = useState(0);
  const question = "Dose de noradrenalina, choque séptico, 70kg?";
  const q = useTypewriter(question, phase === 0, 38);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    // Resposta começa 0,5s após o fim da digitação (38ms * 44 chars ≈ 1670ms + 500ms)
    const t = setTimeout(() => setPhase(1), question.length * 38 + 500);
    return () => clearTimeout(t);
  }, [question]);
  useEffect(() => {
    if (phase !== 1) return;
    const id = setInterval(() => setShown((s) => Math.min(claraAnswerBlocks.length, s + 1)), 650);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <LightShell title="Dra. Clara · IA Clínica">
      <motion.div
        className="h-full flex flex-col p-6"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "linear" }}
      >
        <div className="flex-1 overflow-hidden max-w-3xl mx-auto w-full space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm px-4 py-3 text-white"
            style={{
              background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
              fontFamily: "Inter, system-ui",
              boxShadow: `0 14px 30px -10px ${BRAND.primary}80`,
            }}
          >
            {q}
            {phase === 0 && <span className="inline-block w-[2px] h-4 align-middle ml-0.5 animate-pulse bg-white" />}
          </motion.div>

          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3"
              style={{
                background: BRAND.surfaceElev,
                border: `1px solid ${BRAND.border}`,
                boxShadow: `0 14px 36px -16px ${BRAND.primary}40`,
              }}
            >
              <div className="flex items-center gap-2 text-xs font-bold mb-2" style={{ color: BRAND.primaryGlow }}>
                <Sparkles className="w-3.5 h-3.5" /> Dra. Clara
              </div>
              <div className="text-sm leading-relaxed space-y-1.5" style={{ color: BRAND.text }}>
                {claraAnswerBlocks.slice(0, shown).map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                    dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i style='opacity:.7'>$1</i>") }}
                  />
                ))}
                {shown < claraAnswerBlocks.length && (
                  <span className="inline-block w-2 h-4 align-middle animate-pulse" style={{ background: BRAND.primaryGlow }} />
                )}
              </div>
            </motion.div>
          )}
        </div>

        <div className="max-w-3xl mx-auto w-full mt-4">
          <div className="rounded-2xl px-4 py-3 flex items-center gap-3" style={{ background: BRAND.surfaceElev, border: `1px solid ${BRAND.border}` }}>
            <div className="flex-1 text-sm" style={{ color: BRAND.textMuted }}>Pergunte algo clínico...</div>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: BRAND.primary, boxShadow: `0 0 14px ${BRAND.primary}` }}>
              <Send className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-20 right-6">
        <MetricChip accent>IA clínica em PT-BR · contexto brasileiro</MetricChip>
      </div>
    </LightShell>
  );
}
