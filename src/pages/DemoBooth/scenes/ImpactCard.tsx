import { motion } from "framer-motion";
import { ReactNode } from "react";
import { BRAND } from "../mock-data";

export default function ImpactCard({
  children,
  small = false,
}: {
  children: ReactNode;
  small?: boolean;
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
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`relative text-center text-white font-bold leading-[1.05] tracking-tight ${
          small ? "text-4xl md:text-5xl" : "text-5xl md:text-7xl"
        }`}
        style={{ fontFamily: "Sora, system-ui", maxWidth: 1100 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
