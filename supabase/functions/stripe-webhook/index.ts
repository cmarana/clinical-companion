import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const logStep = (step: string, details?: any) => {
  const d = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[STRIPE-WEBHOOK] ${step}${d}`);
};

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!stripeKey || !webhookSecret) {
    logStep("ERROR", { message: "Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET" });
    return new Response("Server configuration error", { status: 500 });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    logStep("ERROR", { message: "Missing stripe-signature header" });
    return new Response("Missing signature", { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    logStep("ERROR", { message: `Signature verification failed: ${err.message}` });
    return new Response(`Webhook signature verification failed`, { status: 400 });
  }

  logStep("Event received", { type: event.type, id: event.id });

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    switch (event.type) {
      // ── PIX / one-time payment completed ──
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // Only process one-time payments (PIX) — subscriptions handled by Stripe
        if (session.mode !== "payment") {
          logStep("Skipping non-payment session", { mode: session.mode });
          break;
        }

        // Check if payment is actually paid (PIX may be async)
        if (session.payment_status !== "paid") {
          logStep("Payment not yet paid, waiting for async confirmation", { status: session.payment_status });
          break;
        }

        await processPixPayment(supabaseAdmin, session);
        break;
      }

      // ── PIX async payment succeeded (delayed confirmation) ──
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== "payment") break;
        await processPixPayment(supabaseAdmin, session);
        break;
      }

      // ── PIX async payment failed ──
      case "checkout.session.async_payment_failed": {
        const session = event.data.object as Stripe.Checkout.Session;
        logStep("Async payment failed", {
          sessionId: session.id,
          userId: session.metadata?.user_id,
        });
        break;
      }

      // ── Subscription canceled or expired ──
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        logStep("Subscription canceled", {
          subId: sub.id,
          customerId: sub.customer,
        });
        // Stripe check-subscription already handles this via API query
        break;
      }

      default:
        logStep("Unhandled event type", { type: event.type });
    }
  } catch (err) {
    logStep("ERROR processing event", { type: event.type, error: err.message });
    // Return 200 to prevent Stripe from retrying on business logic errors
    return new Response(JSON.stringify({ error: err.message }), { status: 200 });
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});

async function processPixPayment(supabaseAdmin: any, session: Stripe.Checkout.Session) {
  const sessionId = session.id;
  const userId = session.metadata?.user_id;
  const planType = session.metadata?.plan_type || "monthly";

  if (!userId) {
    logStep("ERROR", { message: "No user_id in session metadata", sessionId });
    return;
  }

  // Idempotency check
  const { data: existing } = await supabaseAdmin
    .from("pix_purchases")
    .select("id")
    .eq("stripe_session_id", sessionId)
    .eq("status", "active")
    .limit(1);

  if (existing && existing.length > 0) {
    logStep("Already processed", { sessionId });
    return;
  }

  // Calculate access period
  const now = new Date();
  let startDate = new Date(now);

  // Extend if user already has active access
  const { data: activePurchases } = await supabaseAdmin
    .from("pix_purchases")
    .select("access_end")
    .eq("user_id", userId)
    .eq("status", "active")
    .gte("access_end", now.toISOString())
    .order("access_end", { ascending: false })
    .limit(1);

  if (activePurchases && activePurchases.length > 0) {
    startDate = new Date(activePurchases[0].access_end);
  }

  const accessEnd = new Date(startDate);
  if (planType === "annual") {
    accessEnd.setFullYear(accessEnd.getFullYear() + 1);
  } else {
    accessEnd.setMonth(accessEnd.getMonth() + 1);
  }

  const amount = session.amount_total || (planType === "annual" ? 8990 : 990);

  const { error } = await supabaseAdmin.from("pix_purchases").insert({
    user_id: userId,
    stripe_session_id: sessionId,
    plan_type: planType,
    amount,
    status: "active",
    access_start: startDate.toISOString(),
    access_end: accessEnd.toISOString(),
  });

  if (error) {
    logStep("ERROR inserting purchase", { error: error.message });
    throw error;
  }

  logStep("PIX purchase confirmed", {
    userId,
    planType,
    accessEnd: accessEnd.toISOString(),
  });
}
