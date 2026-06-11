import { motion } from "framer-motion";

export default function SceneIntro() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "#050B1A" }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl font-bold"
          style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui", color: "white" }}
        >
          P
        </div>
        <div className="text-white text-6xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui" }}>
          PULSO
        </div>
      </motion.div>

      {/* ECG line */}
      <div className="relative w-full max-w-3xl h-24 overflow-hidden">
        <svg viewBox="0 0 800 100" className="w-full h-full">
          <motion.path
            d="M0,50 L150,50 L170,50 L180,20 L190,80 L200,50 L350,50 L370,50 L380,20 L390,80 L400,50 L550,50 L570,50 L580,20 L590,80 L600,50 L800,50"
            fill="none"
            stroke="#0A6DD9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="text-2xl md:text-3xl text-white/85 mt-6 font-medium"
        style={{ fontFamily: "Sora, system-ui" }}
      >
        A emergência não pode esperar Wi-Fi.
      </motion.div>
    </div>
  );
}
