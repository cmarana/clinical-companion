import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck, LogOut, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { getDeviceId, getDeviceLabel } from "@/lib/deviceId";
import { toast } from "sonner";

interface TwoFactorGateProps {
  onVerified: (trustedUntil?: string) => void;
}

export default function TwoFactorGate({ onVerified }: TwoFactorGateProps) {
  const { signOut, user } = useAuth();
  const [code, setCode] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState<string>("");
  const [cooldown, setCooldown] = useState(0);

  const requestCode = async () => {
    if (sending || cooldown > 0) return;
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-2fa-code", {
        body: { purpose: "login" },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setMaskedEmail(data?.maskedEmail ?? user?.email ?? "");
      toast.success("Código enviado para seu e-mail.");
      setCooldown(30);
    } catch (e: any) {
      toast.error(e?.message || "Não foi possível enviar o código.");
    } finally {
      setSending(false);
    }
  };

  // Solicita código automaticamente ao montar
  useEffect(() => {
    requestCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const verify = async () => {
    if (!/^\d{6}$/.test(code) || verifying) return;
    setVerifying(true);
    try {
      const { data, error } = await supabase.functions.invoke("verify-2fa-code", {
        body: {
          code,
          purpose: "login",
          deviceId: getDeviceId(),
          deviceLabel: getDeviceLabel(),
        },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("Verificação concluída.");
      onVerified(data?.trustedUntil);
    } catch (e: any) {
      toast.error(e?.message || "Código incorreto.");
      setCode("");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl"
      >
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <ShieldCheck className="text-primary" size={26} />
          </div>
          <h1 className="font-heading text-xl font-bold text-foreground mb-1">
            Verificação em duas etapas
          </h1>
          <p className="text-sm text-muted-foreground">
            Enviamos um código de 6 dígitos para
            <br />
            <strong className="text-foreground">{maskedEmail || user?.email}</strong>
          </p>
        </div>

        <input
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          onKeyDown={(e) => e.key === "Enter" && verify()}
          placeholder="000000"
          autoFocus
          className="w-full text-center text-2xl font-mono tracking-[0.5em] py-4 rounded-xl bg-muted/40 border-2 border-border focus:border-primary focus:outline-none mb-4"
        />

        <Button
          onClick={verify}
          disabled={code.length !== 6 || verifying}
          className="w-full gap-2 mb-3"
          size="lg"
        >
          {verifying ? <Loader2 size={18} className="animate-spin" /> : <ShieldCheck size={18} />}
          {verifying ? "Verificando..." : "Verificar e entrar"}
        </Button>

        <div className="flex items-center justify-between text-xs">
          <button
            onClick={requestCode}
            disabled={sending || cooldown > 0}
            className="flex items-center gap-1.5 text-primary hover:underline disabled:opacity-50 disabled:no-underline disabled:cursor-not-allowed"
          >
            <Mail size={13} />
            {cooldown > 0 ? `Reenviar em ${cooldown}s` : sending ? "Enviando..." : "Reenviar código"}
          </button>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <LogOut size={13} />
            Sair
          </button>
        </div>

        <p className="text-[11px] text-muted-foreground text-center mt-6 leading-relaxed">
          Este dispositivo será lembrado por <strong>30 dias</strong>. Em dispositivos novos
          pediremos o código novamente para garantir sua segurança.
        </p>
      </motion.div>
    </div>
  );
}
