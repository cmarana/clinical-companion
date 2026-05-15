import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type PlanId = "monthly" | "annual";

const PLAN_MAP: Record<PlanId, { name: string; description: string; value: number; cycle: "MONTHLY" | "YEARLY" }> = {
  monthly: {
    name: "Pulso Emergência Premium - Mensal",
    description: "Assinatura mensal do Pulso Emergência Premium",
    value: Number(Deno.env.get("ASAAS_MONTHLY_PRICE") ?? "9.90"),
    cycle: "MONTHLY",
  },
  annual: {
    name: "Pulso Emergência Premium - Anual",
    description: "Assinatura anual do Pulso Emergência Premium",
    value: Number(Deno.env.get("ASAAS_ANNUAL_PRICE") ?? "89.90"),
    cycle: "YEARLY",
  },
};

const ASAAS_API_URL = Deno.env.get("ASAAS_API_URL") ?? "https://api.asaas.com/v3";

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function yyyyMmDd(date: Date) {
  return date.toISOString().slice(0, 10);
}

function onlyDigits(value?: string | null) {
  return (value ?? "").replace(/\D/g, "");
}

async function asaasRequest<T>(path: string, init: RequestInit): Promise<T> {
  const token = Deno.env.get("ASAAS_ACCESS_TOKEN");
  if (!token) throw new Error("Missing ASAAS_ACCESS_TOKEN");

  const response = await fetch(`${ASAAS_API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "access_token": token,
      ...(init.headers ?? {}),
    },
  });

  const raw = await response.text();
  const payload = raw ? JSON.parse(raw) : null;

  if (!response.ok) {
    console.error("Asaas API error", response.status, payload);
    throw new Error(payload?.errors?.[0]?.description ?? payload?.message ?? "Erro na API do Asaas");
  }

  return payload as T;
}

async function findOrCreateCustomer(user: any, body: any) {
  const metadata = user.user_metadata ?? {};
  const name = body.name ?? metadata.full_name ?? metadata.name ?? user.email;
  const cpfCnpj = onlyDigits(body.cpfCnpj ?? metadata.cpfCnpj ?? metadata.cpf ?? metadata.cnpj);
  const mobilePhone = onlyDigits(body.mobilePhone ?? metadata.phone ?? metadata.mobilePhone);

  const search = await asaasRequest<{ data?: any[] }>(
    `/customers?externalReference=${encodeURIComponent(user.id)}`,
    { method: "GET" },
  );

  if (search.data?.[0]?.id) return search.data[0];

  return await asaasRequest<any>("/customers", {
    method: "POST",
    body: JSON.stringify({
      name,
      email: user.email,
      cpfCnpj: cpfCnpj || undefined,
      mobilePhone: mobilePhone || undefined,
      externalReference: user.id,
      notificationDisabled: false,
    }),
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseAuth = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  );

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Usuário não autenticado");

    const token = authHeader.replace("Bearer ", "");
    const { data, error } = await supabaseAuth.auth.getUser(token);
    if (error || !data.user?.email) throw new Error("Usuário não autenticado");

    const user = data.user;
    const body = await req.json().catch(() => ({}));
    const planId = (body.planId === "annual" ? "annual" : "monthly") as PlanId;
    const plan = PLAN_MAP[planId];

    const origin = req.headers.get("origin") || Deno.env.get("APP_ORIGIN") || "https://pulsoemergencia.com.br";
    const customer = await findOrCreateCustomer(user, body);

    const subscription = await asaasRequest<any>("/subscriptions", {
      method: "POST",
      body: JSON.stringify({
        customer: customer.id,
        billingType: body.billingType ?? "UNDEFINED",
        nextDueDate: yyyyMmDd(addDays(new Date(), 7)),
        value: plan.value,
        cycle: plan.cycle,
        description: plan.description,
        externalReference: `${user.id}:${planId}`,
      }),
    });

    const payments = await asaasRequest<{ data?: any[] }>(`/subscriptions/${subscription.id}/payments`, {
      method: "GET",
    });

    const firstPayment = payments.data?.[0];

    await supabaseAdmin.from("pix_purchases").insert({
      user_id: user.id,
      provider: "asaas",
      plan_type: planId,
      amount: Math.round(plan.value * 100),
      status: "pending",
      asaas_customer_id: customer.id,
      asaas_subscription_id: subscription.id,
      asaas_payment_id: firstPayment?.id ?? null,
      access_start: new Date().toISOString(),
      access_end: addDays(new Date(), 7).toISOString(),
    });

    return new Response(
      JSON.stringify({
        url: firstPayment?.invoiceUrl ?? firstPayment?.bankSlipUrl ?? `${origin}/pricing?pending=true`,
        subscriptionId: subscription.id,
        paymentId: firstPayment?.id ?? null,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
    );
  } catch (error) {
    console.error("create-checkout Asaas error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro interno do servidor" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 },
    );
  }
});
