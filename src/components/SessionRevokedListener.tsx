import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

/**
 * Ouve o evento global "pulso:session-revoked" emitido pelo AuthContext quando
 * a conta do usuário foi conectada em outro dispositivo. Mostra um toast e
 * redireciona para a tela de login.
 */
export function SessionRevokedListener() {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      const reason = detail.reason || "";
      if (reason === "device_replaced") {
        toast({
          title: "Sessão encerrada",
          description:
            "Sua conta foi conectada em outro dispositivo. Faça login novamente para continuar usando aqui.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sessão encerrada",
          description: "Faça login novamente para continuar.",
        });
      }
      try {
        navigate("/auth", { replace: true });
      } catch { /* noop */ }
    };
    window.addEventListener("pulso:session-revoked", handler);
    return () => window.removeEventListener("pulso:session-revoked", handler);
  }, [toast, navigate]);

  return null;
}
