import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, LogOut, Sparkles, Clock, X, Shield, Zap } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { plans } from "@/lib/plans";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const premiumFeatures = [
  { feature: "Protocolos completos", free: "3 protocolos básicos", premium: "280+ protocolos, todas especialidades" },
  { feature: "Medicamentos", free: "3 medicamentos (indicação)", premium: "2.000+ fármacos com doses, diluições, interações" },
  { feature: "IA Clínica", free: false, premium: true },
  { feature: "Modo Emergência", free: false, premium: true },
  { feature: "Modo Plantão", free: false, premium: true },
  { feature: "Calculadoras clínicas", free: false, premium: true },
  { feature: "Prescrições prontas", free: false, premium: true },
  { feature: "Quiz & Flashcards", free: false, premium: true },
  { feature: "Favoritos e anotações", free: "Limitado", premium: true },
  { feature: "Modo offline", free: false, premium: true },
  { feature: "Atualizações contínuas", free: false, premium: true },
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
      toast({ title: "Assinatura realizada!", description: "Bem-vindo ao PULSO Pro!" });
      checkSubscription();
    }
  }, [searchParams]);

  const handleCheckout = async (planId: string) => {
    if (!user) { navigate("/auth"); return; }
    setLoading(planId);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", { body: { planId } });
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally { setLoading(null); }
  };

  const handlePortal = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally { setPortalLoading(false); }
  };

  return (
    <>
      <TopBar title="Assinatura" />
      <div className="px-4 py-6 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-6 pb-24">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
            <Crown size={28} className="text-primary-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-bold">PULSO Pro</h1>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            O companheiro completo do médico plantonista — decisões rápidas, sem margem para erro.
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

        {/* ── COMPARISON TABLE ──────────────────────────── */}
        {(!subscription.subscribed || subscription.isTrial) && (
          <>
            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield size={14} className="text-primary" />
              <span>Usado por médicos plantonistas em todo o Brasil</span>
            </div>

            {/* Comparison */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-3 text-center text-xs font-heading font-bold border-b">
                <div className="p-3 bg-muted/30">Recurso</div>
                <div className="p-3 bg-muted/50">Gratuito</div>
                <div className="p-3 bg-primary/10 text-primary">Pro</div>
              </div>
              {premiumFeatures.map((f, i) => (
                <div key={i} className={cn("grid grid-cols-3 text-center text-[11px] border-b last:border-0", i % 2 === 0 && "bg-muted/10")}>
                  <div className="p-2.5 text-left font-medium text-foreground">{f.feature}</div>
                  <div className="p-2.5 flex items-center justify-center">
                    {f.free === false ? (
                      <X size={14} className="text-muted-foreground/50" />
                    ) : f.free === true ? (
                      <Check size={14} className="text-primary" />
                    ) : (
                      <span className="text-muted-foreground text-[10px]">{f.free}</span>
                    )}
                  </div>
                  <div className="p-2.5 bg-primary/5 flex items-center justify-center">
                    {f.premium === true ? (
                      <Check size={14} className="text-primary" />
                    ) : (
                      <span className="text-primary text-[10px] font-medium">{f.premium}</span>
                    )}
                  </div>
                </div>
              ))}
            </Card>

            {/* Example callout */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/30 border-primary/20">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-primary" />
                  <span className="font-heading font-bold text-sm">Na prática</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Imagine: plantão às 3h, paciente com dor torácica. Com o <strong className="text-foreground">PULSO Pro</strong>, 
                  você abre o protocolo de IAM com fluxograma interativo, calcula o TIMI Score ali mesmo, 
                  e gera a prescrição completa em segundos — tudo offline.
                </p>
              </CardContent>
            </Card>

            {/* Plan selector */}
            <div>
              <p className="font-heading font-bold text-sm mb-3 text-center">Escolha seu plano</p>
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
            </div>

            <Button
              onClick={() => handleCheckout(selectedPlan)}
              className="w-full h-12 text-base font-heading font-bold"
              size="lg"
              disabled={loading !== null}
            >
              {loading ? "Redirecionando..." : "Assinar agora"}
            </Button>

            <p className="text-[10px] text-muted-foreground text-center">
              Cancele a qualquer momento. Pagamento seguro via Stripe.
            </p>
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
