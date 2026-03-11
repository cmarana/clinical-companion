import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const features = [
  "Todos os protocolos médicos",
  "Guia completo de medicamentos",
  "Modo Emergência",
  "Quiz com 100+ questões",
  "Favoritos e anotações",
  "Busca inteligente",
  "Funcionamento offline (PWA)",
  "Atualizações contínuas",
];

export default function Pricing() {
  const { user, subscription, checkSubscription, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckout = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout");
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
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

  return (
    <>
      <TopBar title="Assinatura" />
      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        <Card className="border-primary">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Crown size={20} className="text-primary" />
            </div>
            <CardTitle className="font-heading text-lg">Manual de Plantão Pro</CardTitle>
            <div className="flex items-baseline justify-center gap-1 mt-1">
              <span className="text-3xl font-bold">R$ 20</span>
              <span className="text-sm text-muted-foreground">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {subscription.subscribed ? (
              <div className="space-y-3">
                <div className="text-center p-3 rounded-lg bg-primary/10 text-primary text-sm font-medium">
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
              </div>
            ) : (
              <Button onClick={handleCheckout} className="w-full" size="lg" disabled={loading}>
                {loading ? "Redirecionando..." : user ? "Assinar agora" : "Entrar para assinar"}
              </Button>
            )}
          </CardContent>
        </Card>

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
