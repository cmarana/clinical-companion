import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

const URL_TARGET = "https://pulsoemergencia.com.br/websummit";

export default function SceneClosing() {
  const [qr, setQr] = useState<string>("");
  useEffect(() => {
    QRCode.toString(URL_TARGET, {
      type: "svg",
      errorCorrectionLevel: "H",
      margin: 3,
      color: { dark: "#050B1A", light: "#FFFFFF" },
      width: 360,
    }).then(setQr);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-8" style={{ background: "#050B1A" }}>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold"
          style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui", color: "white" }}
        >
          P
        </div>
        <div className="text-white text-4xl font-bold tracking-tight" style={{ fontFamily: "Sora, system-ui" }}>
          PULSO
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 18 }}
        className="bg-white rounded-3xl p-6 shadow-[0_30px_80px_-20px_rgba(10,109,217,0.5)]"
      >
        <div
          className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: qr }}
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl md:text-4xl font-bold mt-8 text-white text-center"
        style={{ fontFamily: "Sora, system-ui" }}
      >
        Use o PULSO completo por <span style={{ color: "#0A6DD9" }}>7 dias</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-white/75 mt-3 text-center text-base md:text-lg"
      >
        Escaneie, crie sua conta e comece agora — cortesia Web Summit Rio.
      </motion.p>
    </div>
  );
}
