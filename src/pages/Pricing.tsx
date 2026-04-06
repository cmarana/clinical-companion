import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, LogOut, Sparkles, X, Shield, Zap, Gift, CreditCard, QrCode, Receipt } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { plans } from "@/lib/plans";
import { cn } from "@/lib/utils";

const premiumFeatures = [
  { feature: "Protocolos clínicos", free: "10 protocolos", premium: "1.000+ protocolos completos" },
  { feature: "Medicamentos", free: "10 fármacos", premium: "2.000+ com doses e interações" },
  { feature: "Bulário completo", free: "10 itens", premium: "Acesso total" },
  { feature: "IA Clínica", free: false, premium: true },
  { feature: "Comandos de voz", free: false, premium: true },
  { feature: "Modo Plantão", free: false, premium: true },
  { feature: "Modo Emergência", free: false, premium: true },
  { feature: "Prescrições prontas", free: false, premium: true },
  { feature: "Calculadoras avançadas", free: "Básicas (IMC, Glasgow)", premium: "Todas (53+)" },
  { feature: "Interações medicamentosas", free: false, premium: true },
  { feature: "Diluições IV", free: false, premium: true },
  { feature: "Quiz & Flashcards", free: false, premium: true },
  { feature: "Atlas Clínico", free: false, premium: true },
  { feature: "Notas e anotações", free: false, premium: true },
  { feature: "Compartilhamento QR", free: false, premium: true },
  { feature: "Modo offline completo", free: false, premium: true },
  { feature: "Atualizações contínuas", free: false, premium: true },
];

type PaymentMethod = "card" | "pix";

export default function Pricing() {
  const { user, subscription, checkSubscription, signOut } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Clear onboarding flag now that we're on pricing
    sessionStorage.removeItem("pulso_just_onboarded");

    if (searchParams.get("success") === "true") {
      const method = searchParams.get("method");
      toast({
        title: "🎉 Assinatura realizada!",
        description: method === "pix"
          ? "Pagamento PIX confirmado! Aproveite o PULSO Pro."
          : "Bem-vindo ao PULSO Pro! Aproveite 7 dias grátis.",
      });
      checkSubscription();
    }
  }, [searchParams]);

  const handleCheckout = async (planId: string) => {
    if (!user) { navigate("/auth"); return; }
    setLoading(planId);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { planId, paymentMethod },
      });
      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally { setLoading(null); }
  };

  const handlePortal = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally { setPortalLoading(false); }
  };

  const isPix = paymentMethod === "pix";

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
            Acesso completo para decisões rápidas no plantão.
          </p>
        </div>

        {/* Paid subscription active */}
        {subscription.subscribed && (
          <Card className="border-primary">
            <CardContent className="p-5 space-y-4">
              <div className="text-center p-4 rounded-lg bg-primary/10 text-primary font-medium">
                <Sparkles size={20} className="mx-auto mb-2" />
                Assinatura ativa
                {subscription.subscriptionEnd && (
                  <span className="block text-xs text-muted-foreground mt-1">
                    {subscription.productId === "pix_purchase" ? "Acesso até" : "Renova em"}{" "}
                    {new Date(subscription.subscriptionEnd).toLocaleDateString("pt-BR")}
                  </span>
                )}
              </div>
              {subscription.productId !== "pix_purchase" && (
                <Button onClick={handlePortal} variant="outline" className="w-full" disabled={portalLoading}>
                  {portalLoading ? "Carregando..." : "Gerenciar assinatura"}
                </Button>
              )}
              <Button onClick={() => checkSubscription()} variant="ghost" className="w-full text-xs">
                Atualizar status
              </Button>
            </CardContent>
          </Card>
        )}

        {!subscription.subscribed && (
          <>
            {/* Trial banner — only for card */}
            {!isPix && (
              <Card className="border-primary/30 bg-gradient-to-r from-primary/10 to-accent/20 overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Gift size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm">7 dias grátis</p>
                      <p className="text-xs text-muted-foreground">
                        Teste completo. Cartão cadastrado, mas cobrado só após 7 dias. Cancele a qualquer momento.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

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

            {/* Real example callout */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/30 border-primary/20">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-primary" />
                  <span className="font-heading font-bold text-sm">Na prática</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Imagine: plantão às 3h, paciente com dor torácica. Com o <strong className="text-foreground">PULSO Pro</strong>, 
                  você abre o protocolo de IAM com fluxograma interativo, calcula o TIMI Score ali mesmo, 
                  e gera a prescrição completa em segundos — tudo offline, com comandos de voz.
                </p>
              </CardContent>
            </Card>

            {/* Payment method selector */}
            <div>
              <p className="font-heading font-bold text-sm mb-3 text-center">Forma de pagamento</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={cn(
                    "flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all text-sm font-medium",
                    paymentMethod === "card"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  )}
                >
                  <CreditCard size={18} />
                  Cartão
                </button>
                <button
                  onClick={() => setPaymentMethod("pix")}
                  className={cn(
                    "flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all text-sm font-medium",
                    paymentMethod === "pix"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  )}
                >
                  <QrCode size={18} />
                  PIX
                </button>
              </div>
              {isPix && (
                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  PIX: pagamento único, sem renovação automática. Renove manualmente ao expirar.
                </p>
              )}
            </div>

            {/* Plan selector */}
            <div>
              <p className="font-heading font-bold text-sm mb-3 text-center">Escolha seu plano</p>
              <div className="grid grid-cols-2 gap-3">
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
                        MELHOR VALOR
                      </div>
                    )}
                    <CardContent className="p-4 space-y-1.5">
                      <p className="font-heading font-bold text-sm">{plan.name}</p>
                      <div className="flex items-baseline gap-0.5">
                        <span className="font-heading font-bold text-xl">{plan.priceDisplay}</span>
                        <span className="text-xs text-muted-foreground">{plan.intervalLabel}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">{plan.monthlyEquivalent}</p>
                      {plan.savings && (
                        <p className="text-[11px] font-heading font-semibold text-primary">{plan.savings}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button
              onClick={() => handleCheckout(selectedPlan)}
              className="w-full h-12 text-base font-heading font-bold gap-2"
              size="lg"
              disabled={loading !== null}
            >
              {isPix ? <QrCode size={18} /> : <Gift size={18} />}
              {loading
                ? "Redirecionando..."
                : isPix
                  ? `Pagar com PIX — ${plans.find(p => p.id === selectedPlan)?.priceDisplay}`
                  : "Começar 7 dias grátis"
              }
            </Button>

            {/* Payment methods icons */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] text-muted-foreground font-medium">Formas de pagamento aceitas</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <CreditCard size={16} className="text-primary" />
                  <span className="text-[11px]">Cartão</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <QrCode size={16} className="text-primary" />
                  <span className="text-[11px]">PIX</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
              {isPix
                ? "Pagamento único via PIX. Sem renovação automática. Renove manualmente quando expirar. Pagamento seguro via Stripe."
                : "Teste grátis por 7 dias. Cobrado apenas após o período de teste. Cancele a qualquer momento. Pagamento seguro via Stripe."
              }
            </p>

            {/* Continue free option */}
            <div className="text-center pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Continuar com acesso gratuito limitado →
              </Button>
            </div>
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
