import { motion } from "framer-motion";

export default function GhostCursor({ x, y, clicking }: { x: number; y: number; clicking?: boolean }) {
  return (
    <motion.div
      className="pointer-events-none fixed z-[200]"
      animate={{ x, y, scale: clicking ? 0.85 : 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
      style={{ left: 0, top: 0 }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M5 3 L23 14 L14 16 L11 25 Z"
          fill="white"
          stroke="#050B1A"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {clicking && (
        <motion.div
          initial={{ opacity: 0.8, scale: 0.4 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.5 }}
          className="absolute -left-3 -top-3 w-10 h-10 rounded-full border-2"
          style={{ borderColor: "#0A6DD9" }}
        />
      )}
    </motion.div>
  );
}
