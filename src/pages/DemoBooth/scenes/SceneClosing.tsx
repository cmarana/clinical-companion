import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { BRAND } from "../mock-data";
import PulsoLogo from "@/components/PulsoLogo";

const URL_TARGET = "https://pulsoemergencia.com.br/websummit";

export default function SceneClosing() {
  const [qr, setQr] = useState<string>("");
  useEffect(() => {
    QRCode.toString(URL_TARGET, {
      type: "svg",
      errorCorrectionLevel: "H",
      margin: 4,
      color: { dark: BRAND.navy, light: "#FFFFFF" },
      width: 380,
    }).then(setQr);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ background: BRAND.bgLight }}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(10,109,217,0.12), transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative flex items-center gap-3 mb-7"
      >
        <PulsoLogo size={52} forceVariant="light" priority />
        <div className="text-4xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}>
          PULSO
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 160, damping: 18 }}
        className="relative bg-white rounded-3xl p-6"
        style={{ boxShadow: "0 30px 80px -20px rgba(10,109,217,0.35), 0 0 0 1px rgba(15,23,42,0.05)" }}
      >
        <div
          className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: qr }}
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="relative text-3xl md:text-4xl font-bold mt-7 text-center max-w-3xl"
        style={{ fontFamily: "Sora, system-ui", color: BRAND.text }}
      >
        Experimente o PULSO completo por <span style={{ color: BRAND.primary }}>7 dias</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="relative mt-3 text-center text-base md:text-lg max-w-2xl"
        style={{ color: BRAND.textMuted }}
      >
        Escaneie · cortesia Web Summit Rio 2026<br/>
        <span className="text-sm">Conversas com investidores e parcerias hospitalares · <b style={{ color: BRAND.text }}>contato@pulsoemergencia.com.br</b></span>
      </motion.p>
    </div>
  );
}
