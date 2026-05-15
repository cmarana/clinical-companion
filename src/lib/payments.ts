import { supabase } from "@/integrations/supabase/client";

export type BillingPlanId = "monthly" | "annual";

export async function startAsaasCheckout(planId: BillingPlanId) {
  const { data, error } = await supabase.functions.invoke("create-checkout", {
    body: { planId },
  });

  if (error) {
    console.error("Erro ao criar checkout Asaas:", error);
    throw new Error(error.message || "Não foi possível iniciar o checkout");
  }

  if (!data?.url) {
    throw new Error("Checkout não retornou URL de pagamento");
  }

  window.location.href = data.url;
}

export async function checkPremiumSubscription() {
  const { data, error } = await supabase.functions.invoke("check-subscription");

  if (error) {
    console.error("Erro ao verificar assinatura:", error);
    return { subscribed: false };
  }

  return data as {
    subscribed: boolean;
    provider?: string;
    product_id?: string;
    subscription_end?: string;
    asaas_subscription_id?: string;
  };
}
