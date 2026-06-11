import { motion } from "framer-motion";
import { BRAND } from "../mock-data";
import PulsoLogo from "@/components/PulsoLogo";

export default function SceneColdOpen() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: BRAND.navyDeep,
        backgroundImage: `radial-gradient(ellipse 60% 45% at 50% 50%, rgba(10,109,217,0.28), transparent 65%)`,
      }}
    >
      {/* Grid sutil de fundo (tech) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,168,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(91,168,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center gap-3 mb-6"
      >
        <PulsoLogo size={64} forceVariant="dark" priority />
        <div
          className="text-6xl font-bold tracking-tight"
          style={{
            fontFamily: "Sora, system-ui",
            color: BRAND.text,
            textShadow: `0 0 40px ${BRAND.primary}80`,
          }}
        >
          PULSO
        </div>
      </motion.div>

      <div className="relative w-full max-w-4xl h-32 overflow-hidden">
        <svg viewBox="0 0 800 100" className="w-full h-full">
          <defs>
            <linearGradient id="ecg-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={BRAND.primaryGlow} stopOpacity="0.2" />
              <stop offset="50%" stopColor={BRAND.primaryGlow} stopOpacity="1" />
              <stop offset="100%" stopColor={BRAND.primaryGlow} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 L160,50 L175,50 L185,18 L195,82 L205,50 L360,50 L375,50 L385,18 L395,82 L405,50 L560,50 L575,50 L585,18 L595,82 L605,50 L800,50"
            fill="none"
            stroke="url(#ecg-glow)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: `drop-shadow(0 0 8px ${BRAND.primary})` }}
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
        className="relative text-xl md:text-2xl mt-4 tracking-wide"
        style={{ color: BRAND.textMuted, fontFamily: "Sora, system-ui" }}
      >
        Plataforma clínica de emergência
      </motion.div>
    </div>
  );
}
