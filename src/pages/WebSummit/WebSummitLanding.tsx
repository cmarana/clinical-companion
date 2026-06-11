import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EVENT_FLAG = "pulso_event_src";
const EVENT_FLAG_EXPIRES = "pulso_event_src_expires";

export default function WebSummitLanding() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const inviteLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/websummit?src=websummit`
      : "https://pulsoemergencia.com.br/websummit?src=websummit";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      toast({ title: "Link copiado!", description: "Envie para seus convidados do Web Summit." });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({
        title: "Não foi possível copiar",
        description: inviteLink,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    document.title = "PULSO no Web Summit Rio 2026 — 7 dias de acesso";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Cortesia Web Summit Rio: 7 dias com o PULSO completo. 1.000+ protocolos brasileiros, calculadoras e IA clínica.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  const handleStart = () => {
    try {
      localStorage.setItem(EVENT_FLAG, "websummit");
      localStorage.setItem(
        EVENT_FLAG_EXPIRES,
        String(Date.now() + 1000 * 60 * 60 * 24 * 7),
      );
    } catch {
      /* noop */
    }
    navigate("/auth?mode=signup&src=websummit");
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#050B1A", color: "white" }}>
      {/* glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(10,109,217,0.35), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 110%, rgba(10,109,217,0.20), transparent 60%)",
        }}
      />

      <header className="relative z-10 px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold"
            style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui" }}
          >
            P
          </div>
          <span className="font-semibold tracking-tight" style={{ fontFamily: "Sora, system-ui" }}>
            PULSO
          </span>
        </div>
        <span className="text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur">
          Web Summit Rio · 2026
        </span>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-10 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 mb-6 px-3 py-1.5 rounded-full border border-white/15 bg-white/5"
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: "#0A6DD9" }} />
          Cortesia para visitantes do evento
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
          style={{ fontFamily: "Sora, system-ui" }}
        >
          Você esteve no Web Summit Rio.
          <br />
          <span style={{ color: "#0A6DD9" }}>Use o PULSO completo por 7 dias.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed"
          style={{ fontFamily: "Inter, system-ui" }}
        >
          Acesso total liberado: 1.000+ protocolos brasileiros, calculadoras, IA clínica e muito mais.
          Lançamento oficial em julho de 2026.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <button
            onClick={handleStart}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-base md:text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_40px_-10px_rgba(10,109,217,0.6)]"
            style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui" }}
          >
            Criar minha conta e começar agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="text-xs text-white/50">Cadastro com email e senha · Sem cartão · Sem cobrança</p>

          <div className="mt-6 w-full max-w-md">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 mb-2">
              Convidar outros visitantes
            </div>
            <div className="flex items-stretch gap-2 p-1.5 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur">
              <input
                readOnly
                value={inviteLink}
                onFocus={(e) => e.currentTarget.select()}
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white/85 outline-none truncate"
                aria-label="Link de convite Web Summit"
              />
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#0A6DD9", fontFamily: "Sora, system-ui" }}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
            <p className="mt-2 text-[11px] text-white/45">
              Quem abrir este link recebe os mesmos 7 dias de cortesia ao se cadastrar.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-3 gap-3"
        >
          {[
            { icon: Stethoscope, title: "1.000+ protocolos", desc: "Padrão SUS, UPA e referências brasileiras." },
            { icon: Sparkles, title: "IA clínica em PT-BR", desc: "Dra. Clara responde com contexto brasileiro." },
            { icon: ShieldCheck, title: "Decisão à beira-leito", desc: "Calculadoras, escores e fluxos rápidos." },
          ].map((f, i) => (
            <div
              key={i}
              className="text-left p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <f.icon className="w-5 h-5 mb-3" style={{ color: "#0A6DD9" }} />
              <div className="font-semibold mb-1" style={{ fontFamily: "Sora, system-ui" }}>
                {f.title}
              </div>
              <div className="text-sm text-white/65">{f.desc}</div>
            </div>
          ))}
        </motion.div>
      </main>

      <footer className="relative z-10 fixed bottom-0 inset-x-0 text-center text-[11px] text-white/45 py-3 border-t border-white/5 bg-[#050B1A]/80 backdrop-blur">
        Ferramenta de apoio à decisão clínica. Não substitui o julgamento médico.
      </footer>
    </div>
  );
}
