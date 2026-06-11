import { motion } from "framer-motion";
import { BRAND, bigNumbers } from "../mock-data";

export default function SceneNumbers() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-10" style={{ background: BRAND.navy }}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(10,109,217,0.30), transparent 70%)",
        }}
      />
      <div className="relative grid grid-cols-3 gap-x-12 gap-y-8 max-w-5xl w-full">
        {bigNumbers.map((n, i) => (
          <motion.div
            key={n.k}
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-white"
          >
            <div className="text-5xl md:text-6xl font-bold tabular-nums tracking-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.primary }}>
              {n.v}
            </div>
            <div className="text-sm md:text-base uppercase tracking-[0.18em] mt-1 text-white/75">{n.k}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="relative mt-10 text-2xl md:text-3xl text-white font-semibold text-center"
        style={{ fontFamily: "Sora, system-ui" }}
      >
        Uma única camada clínica. À beira-leito.
      </motion.div>
    </div>
  );
}
