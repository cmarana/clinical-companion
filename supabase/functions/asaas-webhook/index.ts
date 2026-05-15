import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

function logStep(step: string, details?: unknown) {
  console.log(`[ASAAS-WEBHOOK] ${step}${details ? ` - ${JSON.stringify(details)}` : ""}`);
}

const SUCCESS_EVENTS = new Set(["PAYMENT_RECEIVED", "PAYMENT_CONFIRMED"]);
const FAILURE_EVENTS = new Set([
  "PAYMENT_OVERDUE",
  "PAYMENT_DELETED",
  "PAYMENT_REFUNDED",
  "PAYMENT_CHARGEBACK_REQUESTED",
  "PAYMENT_CREDIT_CARD_CAPTURE_REFUSED",
]);

function addPeriod(base: Date, planType: string) {
  const d = new Date(base);
  if (planType === "annual") d.setFullYear(d.getFullYear() + 1);
  else d.setMonth(d.getMonth() + 1);
  return d;
}

function parsePlanType(payment: any, existing?: any) {
  if (existing?.plan_type) return existing.plan_type;
  const external = String(payment?.externalReference ?? "");
  return external.includes(":annual") ? "annual" : "monthly";
}

function parseUserId(payment: any, existing?: any) {
  if (existing?.user_id) return existing.user_id;
  const external = String(payment?.externalReference ?? "");
  const [userId] = external.split(":");
  return userId && userId.length > 10 ? userId : null;
}

serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const webhookToken = Deno.env.get("ASAAS_WEBHOOK_TOKEN");
  const receivedToken = req.headers.get("asaas-access-token");
  if (webhookToken && receivedToken !== webhookToken) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );

  try {
    const payload = await req.json();
    const eventId = payload.id;
    const event = payload.event;
    const payment = payload.payment ?? payload.checkout ?? {};

    logStep("Event received", {
      eventId,
      event,
      paymentId: payment?.id,
      subscription: payment?.subscription,
    });

    try {
      const { error: eventError } = await supabaseAdmin.from("payment_webhook_events").insert({
        provider: "asaas",
        event_id: eventId,
        event_type: event,
        resource_id: payment?.id ?? payment?.subscription ?? null,
        payload,
      });
      if (eventError?.code === "23505") {
        return new Response(JSON.stringify({ received: true, duplicate: true }), {
          headers: { "Content-Type": "application/json" },
          status: 200,
        });
      }
    } catch (e) {
      logStep("Webhook event table skipped", { error: String(e) });
    }

    const { data: existingRows } = await supabaseAdmin
      .from("pix_purchases")
      .select("*")
      .or(
        `asaas_payment_id.eq.${payment?.id ?? "none"},asaas_subscription_id.eq.${
          payment?.subscription ?? "none"
        }`,
      )
      .order("created_at", { ascending: false })
      .limit(1);

    const existing = existingRows?.[0];
    const userId = parseUserId(payment, existing);
    const planType = parsePlanType(payment, existing);

    if (!userId) {
      return new Response(JSON.stringify({ received: true, linked: false }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    if (SUCCESS_EVENTS.has(event)) {
      const now = new Date();
      let startDate = now;

      const { data: activePurchases } = await supabaseAdmin
        .from("pix_purchases")
        .select("access_end")
        .eq("user_id", userId)
        .eq("status", "active")
        .gte("access_end", now.toISOString())
        .order("access_end", { ascending: false })
        .limit(1);

      if (activePurchases?.[0]?.access_end) startDate = new Date(activePurchases[0].access_end);

      const accessEnd = addPeriod(startDate, planType);
      const amount = Math.round(Number(payment?.value ?? (existing?.amount ?? 0) / 100) * 100);

      if (existing?.id) {
        const { error } = await supabaseAdmin
          .from("pix_purchases")
          .update({
            provider: "asaas",
            status: "active",
            amount,
            plan_type: planType,
            asaas_payment_id: payment?.id ?? existing.asaas_payment_id,
            asaas_subscription_id: payment?.subscription ?? existing.asaas_subscription_id,
            access_start: startDate.toISOString(),
            access_end: accessEnd.toISOString(),
          })
          .eq("id", existing.id);
        if (error) throw error;
      } else {
        const { error } = await supabaseAdmin.from("pix_purchases").insert({
          user_id: userId,
          provider: "asaas",
          status: "active",
          amount,
          plan_type: planType,
          asaas_payment_id: payment?.id ?? null,
          asaas_subscription_id: payment?.subscription ?? null,
          access_start: startDate.toISOString(),
          access_end: accessEnd.toISOString(),
        });
        if (error) throw error;
      }
    }

    if (FAILURE_EVENTS.has(event) && existing?.id) {
      await supabaseAdmin
        .from("pix_purchases")
        .update({ status: "payment_failed" })
        .eq("id", existing.id);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    logStep("ERROR processing event", {
      error: error instanceof Error ? error.message : String(error),
    });
    return new Response(JSON.stringify({ received: true, error: String(error) }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
});
