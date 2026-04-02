import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already_unsubscribed" | "invalid" | "success" | "error";

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already_unsubscribed");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    setProcessing(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already_unsubscribed");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-8 text-center space-y-4">
        <h1 className="text-2xl font-bold text-primary">PULSO</h1>

        {status === "loading" && (
          <p className="text-muted-foreground">Verificando...</p>
        )}

        {status === "valid" && (
          <>
            <p className="text-foreground">
              Deseja cancelar o recebimento de emails do PULSO?
            </p>
            <button
              onClick={handleUnsubscribe}
              disabled={processing}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {processing ? "Processando..." : "Confirmar Cancelamento"}
            </button>
          </>
        )}

        {status === "success" && (
          <p className="text-success font-medium">
            ✅ Inscrição cancelada com sucesso. Você não receberá mais emails do PULSO.
          </p>
        )}

        {status === "already_unsubscribed" && (
          <p className="text-muted-foreground">
            Você já cancelou a inscrição anteriormente.
          </p>
        )}

        {status === "invalid" && (
          <p className="text-destructive">
            Link inválido ou expirado.
          </p>
        )}

        {status === "error" && (
          <p className="text-destructive">
            Ocorreu um erro. Tente novamente mais tarde.
          </p>
        )}
      </div>
    </div>
  );
}
