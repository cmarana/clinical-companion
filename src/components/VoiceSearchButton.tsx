import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Square } from "lucide-react";
import { toast } from "sonner";
import { hapticLight } from "@/lib/haptics";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
};

/**
 * Botão de busca por voz — usa Web Speech API (pt-BR) com fallback gracioso.
 * Ao reconhecer, navega para /search?q=<transcrição>.
 */
export default function VoiceSearchButton({ className, size = 16 }: Props) {
  const navigate = useNavigate();
  const [listening, setListening] = useState(false);
  const recRef = useRef<any>(null);

  const stop = useCallback(() => {
    try { recRef.current?.stop(); } catch {}
    setListening(false);
  }, []);

  useEffect(() => () => stop(), [stop]);

  const start = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    hapticLight();

    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      toast.info("Busca por voz não suportada neste navegador. Abrindo busca por texto.");
      navigate("/search");
      return;
    }

    if (listening) { stop(); return; }

    try {
      const rec = new SR();
      rec.lang = "pt-BR";
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.continuous = false;

      rec.onstart = () => {
        setListening(true);
        toast.message("Ouvindo...", { description: "Diga uma conduta, medicamento, CID ou cálculo." });
      };
      rec.onerror = (ev: any) => {
        setListening(false);
        if (ev.error === "not-allowed" || ev.error === "service-not-allowed") {
          toast.error("Permissão de microfone negada.");
        } else if (ev.error !== "aborted" && ev.error !== "no-speech") {
          toast.error("Não consegui ouvir. Tente novamente.");
        }
      };
      rec.onend = () => setListening(false);
      rec.onresult = (ev: any) => {
        const transcript = (ev.results?.[0]?.[0]?.transcript || "").trim();
        if (transcript) {
          navigate(`/search?q=${encodeURIComponent(transcript)}`);
        } else {
          toast.error("Não entendi. Tente novamente.");
        }
      };

      recRef.current = rec;
      rec.start();
    } catch {
      setListening(false);
      navigate("/search");
    }
  }, [listening, navigate, stop]);

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={listening ? "Parar gravação" : "Buscar por voz"}
      onClick={start}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") start(e as any); }}
      className={cn(
        "relative flex items-center justify-center rounded-xl transition-all cursor-pointer select-none",
        listening
          ? "bg-destructive text-destructive-foreground shadow-md shadow-destructive/30"
          : "bg-primary/10 text-primary hover:bg-primary/15",
        className
      )}
    >
      {listening && (
        <span className="absolute inset-0 rounded-xl bg-destructive/60 animate-ping opacity-60" />
      )}
      {listening ? <Square size={size} fill="currentColor" /> : <Mic size={size} />}
    </span>
  );
}
