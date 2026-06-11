import { motion } from "framer-motion";
import { BRAND } from "../mock-data";
import PulsoLogo from "@/components/PulsoLogo";

export default function SceneColdOpen() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "white" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <PulsoLogo size={56} forceVariant="light" priority />
        <div className="text-5xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>
          PULSO
        </div>
      </motion.div>
      <div className="relative w-full max-w-4xl h-32 overflow-hidden">
        <svg viewBox="0 0 800 100" className="w-full h-full">
          <motion.path
            d="M0,50 L160,50 L175,50 L185,18 L195,82 L205,50 L360,50 L375,50 L385,18 L395,82 L405,50 L560,50 L575,50 L585,18 L595,82 L605,50 L800,50"
            fill="none"
            stroke={BRAND.primary}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="text-xl md:text-2xl mt-4"
        style={{ color: BRAND.textMuted, fontFamily: "Sora, system-ui" }}
      >
        Plataforma clínica de emergência
      </motion.div>
    </div>
  );
}
