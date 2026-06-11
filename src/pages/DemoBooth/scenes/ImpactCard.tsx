import { motion } from "framer-motion";
import { ReactNode } from "react";
import { BRAND } from "../mock-data";

export default function ImpactCard({
  children,
  small = false,
  kicker,
}: {
  children: ReactNode;
  small?: boolean;
  kicker?: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-10" style={{ background: BRAND.navy }}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(10,109,217,0.25), transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center"
        style={{ fontFamily: "Sora, system-ui", maxWidth: 1100 }}
      >
        {kicker && (
          <div className="text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase mb-5 text-white/55">
            {kicker}
          </div>
        )}
        <div className={`text-white font-bold leading-[1.08] tracking-tight ${small ? "text-4xl md:text-5xl" : "text-5xl md:text-7xl"}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
