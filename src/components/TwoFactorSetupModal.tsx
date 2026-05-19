import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ShieldCheck, Mail, Loader2, ShieldOff } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  open: boolean;
  mode: "enable" | "disable";
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function TwoFactorSetupModal({ open, mode, onOpenChange, onSuccess }: Props) {
  const { user } = useAuth();
  const [step, setStep] = useState<"intro" | "code">("intro");
  const [code, setCode] = useState("");
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [disabling, setDisabling] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (open) {
      setStep("intro");
      setCode("");
      setCooldown(0);
    }
  }, [open]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const sendCode = async () => {
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-2fa-code", {
        body: { purpose: "enable" },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setMaskedEmail(data?.maskedEmail ?? user?.email ?? "");
      toast.success("Código enviado para seu e-mail.");
      setStep("code");
      setCooldown(30);
    } catch (e: any) {
      toast.error(e?.message || "Não foi possível enviar o código.");
    } finally {
      setSending(false);
    }
  };

  const verify = async () => {
    if (!/^\d{6}$/.test(code)) return;
    setVerifying(true);
    try {
      const { data, error } = await supabase.functions.invoke("verify-2fa-code", {
        body: { code, purpose: "enable" },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("Autenticação em dois fatores ativada!");
      onSuccess();
      onOpenChange(false);
    } catch (e: any) {
      toast.error(e?.message || "Código incorreto.");
      setCode("");
    } finally {
      setVerifying(false);
    }
  };

  const disable = async () => {
    if (!user) return;
    setDisabling(true);
    try {
      const { error } = await supabase
        .from("user_2fa_settings")
        .update({ enabled: false })
        .eq("user_id", user.id);
      if (error) throw error;
      // remove dispositivos confiáveis também
      await supabase.from("user_2fa_verifications").delete().eq("user_id", user.id);
      toast.success("2FA desativado.");
      onSuccess();
      onOpenChange(false);
    } catch (e: any) {
      toast.error(e?.message || "Erro ao desativar.");
    } finally {
      setDisabling(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {mode === "disable" ? (
          <>
            <DialogHeader>
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
                <ShieldOff className="text-destructive" size={22} />
              </div>
              <DialogTitle>Desativar autenticação em dois fatores?</DialogTitle>
              <DialogDescription>
                Sua conta ficará menos protegida. Recomendamos manter ativado para evitar acessos
                não autorizados.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancelar
              </Button>
              <Button variant="destructive" onClick={disable} disabled={disabling} className="flex-1 gap-2">
                {disabling && <Loader2 size={16} className="animate-spin" />}
                Desativar
              </Button>
            </div>
          </>
        ) : step === "intro" ? (
          <>
            <DialogHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <ShieldCheck className="text-primary" size={22} />
              </div>
              <DialogTitle>Ativar autenticação em dois fatores</DialogTitle>
              <DialogDescription>
                Toda vez que entrar em um novo dispositivo, enviaremos um código de 6 dígitos para
                <strong className="text-foreground"> {user?.email}</strong>. Dispositivos confiáveis
                são lembrados por 30 dias.
              </DialogDescription>
            </DialogHeader>
            <div className="bg-muted/40 rounded-xl p-3 text-xs text-muted-foreground space-y-1 mt-2">
              <p>✓ Protege contra senhas vazadas</p>
              <p>✓ Funciona offline depois de verificar o dispositivo</p>
              <p>✓ Você pode desativar a qualquer momento</p>
            </div>
            <Button onClick={sendCode} disabled={sending} className="w-full gap-2 mt-3" size="lg">
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Mail size={16} />}
              Enviar código para meu e-mail
            </Button>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Digite o código recebido</DialogTitle>
              <DialogDescription>
                Enviamos um código de 6 dígitos para{" "}
                <strong className="text-foreground">{maskedEmail}</strong>. Ele expira em 10 minutos.
              </DialogDescription>
            </DialogHeader>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              autoFocus
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              onKeyDown={(e) => e.key === "Enter" && verify()}
              placeholder="000000"
              className="w-full text-center text-2xl font-mono tracking-[0.5em] py-3 rounded-xl bg-muted/40 border-2 border-border focus:border-primary focus:outline-none my-2"
            />
            <Button onClick={verify} disabled={code.length !== 6 || verifying} className="w-full gap-2" size="lg">
              {verifying ? <Loader2 size={16} className="animate-spin" /> : <ShieldCheck size={16} />}
              Confirmar e ativar
            </Button>
            <button
              onClick={sendCode}
              disabled={sending || cooldown > 0}
              className="text-xs text-primary hover:underline mt-2 disabled:opacity-50 disabled:no-underline"
            >
              {cooldown > 0 ? `Reenviar em ${cooldown}s` : "Reenviar código"}
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
