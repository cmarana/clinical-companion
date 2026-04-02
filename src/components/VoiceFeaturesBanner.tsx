import { Mic, Bot, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { hapticLight } from "@/lib/haptics";

export default function VoiceFeaturesBanner() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-6 rounded-2xl bg-gradient-to-br from-primary/8 via-primary/5 to-violet-500/8 dark:from-primary/15 dark:via-primary/10 dark:to-violet-500/15 ring-1 ring-primary/15 dark:ring-primary/25 p-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/15 text-primary">
          <Mic size={14} />
        </div>
        <h3 className="font-heading font-bold text-xs tracking-tight">
          Comando por Voz
        </h3>
        <span className="ml-auto text-[9px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Novo
        </span>
      </div>

      <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">
        Use sua voz para buscar medicamentos, protocolos e calcular doses — ideal para plantões com as mãos ocupadas.
      </p>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => { hapticLight(); navigate("/clinical-ai"); }}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card ring-1 ring-border/50 hover:ring-primary/30 hover:shadow-md active:scale-[0.97] transition-all text-left"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-600 dark:text-blue-400">
            <Bot size={16} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-semibold text-[11px] leading-tight">IA por Voz</span>
            <span className="text-[9px] text-muted-foreground">Dite o relato do paciente</span>
          </div>
          <ChevronRight size={10} className="text-muted-foreground ml-auto shrink-0" />
        </button>

        <button
          onClick={() => {
            hapticLight();
            const searchInput = document.querySelector<HTMLInputElement>('input[placeholder*="Buscar"]');
            if (searchInput) {
              searchInput.focus();
              searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card ring-1 ring-border/50 hover:ring-primary/30 hover:shadow-md active:scale-[0.97] transition-all text-left"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/15 to-primary/25 text-primary">
            <Search size={16} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-semibold text-[11px] leading-tight">Busca por Voz</span>
            <span className="text-[9px] text-muted-foreground">Fale o que procura</span>
          </div>
          <ChevronRight size={10} className="text-muted-foreground ml-auto shrink-0" />
        </button>
      </div>
    </motion.div>
  );
}
