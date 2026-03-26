import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, LogOut, Sparkles, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { plans } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const features = [
  "Todos os protocolos completos",
  "Guia completo de medicamentos",
  "Doses, diluições e precauções",
  "Modo Emergência",
  "Quiz com 100+ questões",
  "Favoritos e anotações pessoais",
  "Busca inteligente",
  "Funcionamento offline (PWA)",
  "Atualizações contínuas",
];

export default function Pricing() {
  const { user, subscription, checkSubscription, signOut } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("semiannual");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast({ title: "Assinatura realizada!", description: "Bem-vindo ao Manual de Plantão Pro!" });
      checkSubscription();
    }
  }, [searchParams]);

  const handleCheckout = async (planId: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    setLoading(planId);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { planId },
      });
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setLoading(null);
    }
  };

  const handlePortal = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setPortalLoading(false);
    }
  };

  const PlanSelector = () => (
    <>
      <div className="grid grid-cols-2 gap-2">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={cn(
              "cursor-pointer transition-all relative overflow-hidden",
              selectedPlan === plan.id
                ? "border-primary ring-2 ring-primary/20 shadow-md"
                : "border-border hover:border-primary/40"
            )}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[9px] font-heading font-bold px-2 py-0.5 rounded-bl-lg">
                POPULAR
              </div>
            )}
            <CardContent className="p-3 space-y-1">
              <p className="font-heading font-bold text-xs">{plan.name}</p>
              <div className="flex items-baseline gap-0.5">
                <span className="font-heading font-bold text-lg">{plan.priceDisplay}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{plan.monthlyEquivalent}</p>
              {plan.savings && (
                <p className="text-[10px] font-heading font-semibold text-primary">{plan.savings}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        onClick={() => handleCheckout(selectedPlan)}
        className="w-full h-12 text-base font-heading font-bold"
        size="lg"
        disabled={loading !== null}
      >
        {loading ? "Redirecionando..." : "Assinar agora"}
      </Button>
    </>
  );

  return (
    <>
      <TopBar title="Assinatura" />
      <div className="px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-6 pb-24">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Crown size={24} className="text-primary" />
          </div>
          <h1 className="font-heading text-xl font-bold">Manual de Plantão Pro</h1>
          <p className="text-sm text-muted-foreground">
            Acesso completo a todos os protocolos, medicamentos e ferramentas
          </p>
        </div>

        {/* Trial Banner */}
        {subscription.isTrial && (
          <Card className="border-primary bg-accent/30">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-sm">Teste gratuito ativo</p>
                  <p className="text-xs text-muted-foreground">
                    {subscription.trialDaysLeft} {subscription.trialDaysLeft === 1 ? "dia restante" : "dias restantes"}
                  </p>
                </div>
              </div>
              <Progress value={((7 - subscription.trialDaysLeft) / 7) * 100} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                Assine agora para manter o acesso completo após o período de teste.
              </p>
              <PlanSelector />
            </CardContent>
          </Card>
        )}

        {/* Paid subscription active */}
        {subscription.subscribed && !subscription.isTrial && (
          <Card className="border-primary">
            <CardContent className="p-5 space-y-4">
              <div className="text-center p-4 rounded-lg bg-primary/10 text-primary font-medium">
                <Sparkles size={20} className="mx-auto mb-2" />
                Assinatura ativa
                {subscription.subscriptionEnd && (
                  <span className="block text-xs text-muted-foreground mt-1">
                    Renova em {new Date(subscription.subscriptionEnd).toLocaleDateString("pt-BR")}
                  </span>
                )}
              </div>
              <Button onClick={handlePortal} variant="outline" className="w-full" disabled={portalLoading}>
                {portalLoading ? "Carregando..." : "Gerenciar assinatura"}
              </Button>
              <Button onClick={() => checkSubscription()} variant="ghost" className="w-full text-xs">
                Atualizar status
              </Button>
            </CardContent>
          </Card>
        )}

        {/* No subscription and no trial */}
        {!subscription.subscribed && (
          <>
            <PlanSelector />

            {/* Features */}
            <Card>
              <CardContent className="p-4">
                <p className="font-heading font-bold text-sm mb-3">Tudo incluso:</p>
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Free tier info */}
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <p className="font-heading font-bold text-sm mb-2">Versão Gratuita</p>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>• Visualização de definições e diagnósticos</li>
                  <li>• Indicações dos medicamentos</li>
                  <li>• Lista de protocolos e medicamentos</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        {user && (
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">Logado como {user.email}</p>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-xs gap-1">
              <LogOut size={14} /> Sair
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
