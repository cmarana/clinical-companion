import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, RefreshCw, Crown, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "confirming" | "success" | "error";

export default function PixSuccess() {
  const { user, checkSubscription } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<Status>("loading");
  const [accessEnd, setAccessEnd] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    const plan = searchParams.get("plan");

    if (!user) {
      setStatus("loading");
      return;
    }

    if (!sessionId) {
      // No session_id — just show existing PIX purchase info
      loadExistingPurchase();
      return;
    }

    confirmPurchase(sessionId, plan || "monthly");
  }, [user, searchParams]);

  const loadExistingPurchase = async () => {
    const { data } = await supabase
      .from("pix_purchases")
      .select("access_end")
      .eq("user_id", user!.id)
      .eq("status", "active")
      .order("access_end", { ascending: false })
      .limit(1);

    if (data && data.length > 0) {
      setAccessEnd(data[0].access_end);
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg("Nenhuma compra PIX encontrada.");
    }
  };

  const confirmPurchase = async (sessionId: string, plan: string) => {
    setStatus("confirming");
    try {
      const { data, error } = await supabase.functions.invoke("confirm-pix-purchase", {
        body: { sessionId, planType: plan },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setAccessEnd(data.access_end);
      setStatus("success");

      // Refresh subscription state
      await checkSubscription();
    } catch (err: any) {
      console.error("PIX confirmation error:", err);
      setErrorMsg(err.message || "Erro ao confirmar pagamento.");
      setStatus("error");
    }
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  const daysLeft = accessEnd
    ? Math.max(0, Math.ceil((new Date(accessEnd).getTime() - Date.now()) / 86400000))
    : 0;

  if (status === "loading" || status === "confirming") {
    return (
      <>
        <TopBar title="Confirmação" />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <Loader2 size={32} className="text-primary animate-spin" />
          <p className="text-sm text-muted-foreground">
            {status === "confirming" ? "Confirmando pagamento PIX..." : "Carregando..."}
          </p>
        </div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <TopBar title="Erro" />
        <div className="px-4 py-8 max-w-lg mx-auto space-y-6 pb-24">
          <div className="text-center space-y-3">
            <div className="mx-auto w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle size={48} className="text-destructive" />
            </div>
            <h1 className="font-heading text-2xl font-bold">Erro na confirmação</h1>
            <p className="text-sm text-muted-foreground">{errorMsg}</p>
          </div>
          <div className="space-y-3">
            <Button onClick={() => navigate("/pricing")} className="w-full" size="lg">
              Voltar para planos
            </Button>
            <Button onClick={() => window.location.reload()} variant="outline" className="w-full">
              Tentar novamente
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar title="Pagamento Confirmado" />
      <div className="px-4 py-8 max-w-lg mx-auto space-y-6 pb-24">
        <div className="text-center space-y-3">
          <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 size={48} className="text-primary" />
          </div>
          <h1 className="font-heading text-2xl font-bold">Pagamento PIX confirmado!</h1>
          <p className="text-sm text-muted-foreground">
            Seu acesso ao PULSO Pro já está ativo.
          </p>
        </div>

        <Card className="border-primary/30">
          <CardContent className="p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Crown size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">PULSO Pro Ativo</p>
                <p className="text-xs text-muted-foreground">Acesso completo a todos os recursos</p>
              </div>
            </div>

            {accessEnd && (
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-medium">Acesso válido até</span>
                </div>
                <p className="font-heading font-bold text-lg text-primary">{formatDate(accessEnd)}</p>
                <p className="text-xs text-muted-foreground">
                  {daysLeft > 0
                    ? `Faltam ${daysLeft} dia${daysLeft > 1 ? "s" : ""} para expirar`
                    : "Seu acesso expirou"}
                </p>
              </div>
            )}

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
              <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                <strong>Lembrete:</strong> O pagamento PIX não renova automaticamente. 
                Quando seu acesso expirar, renove manualmente na página de assinatura.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button onClick={() => navigate("/")} className="w-full h-12 font-heading font-bold gap-2" size="lg">
            <ArrowRight size={18} />
            Começar a usar
          </Button>
          <Button onClick={() => navigate("/pricing")} variant="outline" className="w-full gap-2">
            <RefreshCw size={16} />
            Renovar ou alterar plano
          </Button>
        </div>
      </div>
    </>
  );
}
