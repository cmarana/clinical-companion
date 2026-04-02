import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Recurring subscription prices (card/boleto)
const SUB_PRICE_MAP: Record<string, string> = {
  monthly: "price_1THgm6FLmvoivW0nM2oX7iwh",
  annual: "price_1THgm7FLmvoivW0nIvfRyMSc",
};

// One-time PIX prices (no auto-renewal)
const PIX_PRICE_MAP: Record<string, string> = {
  monthly: "price_1THgp3FLmvoivW0nr6rNh7hr",
  annual: "price_1THgp4FLmvoivW0n095lj2Xb",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user?.email) throw new Error("User not authenticated");

    const body = await req.json().catch(() => ({}));
    const planId = body.planId || "monthly";
    const paymentMethod = body.paymentMethod || "card"; // "card" | "pix"

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const origin = req.headers.get("origin") || "https://pronto-socorro-guide.lovable.app";

    // ── PIX flow: one-time payment, no auto-renewal ──
    if (paymentMethod === "pix") {
      const pixPriceId = PIX_PRICE_MAP[planId];
      if (!pixPriceId) throw new Error("Invalid plan for PIX");

      const customers = await stripe.customers.list({ email: user.email, limit: 1 });

      const session = await stripe.checkout.sessions.create({
        customer: customers.data.length > 0 ? customers.data[0].id : undefined,
        customer_email: customers.data.length > 0 ? undefined : user.email,
        line_items: [{ price: pixPriceId, quantity: 1 }],
        mode: "payment",
        payment_method_types: ["pix"],
        success_url: `${origin}/pix-success?session_id={CHECKOUT_SESSION_ID}&plan=${planId}`,
        cancel_url: `${origin}/pricing`,
        locale: "pt-BR",
        metadata: {
          user_id: user.id,
          plan_type: planId,
          payment_method: "pix",
        },
      });

      return new Response(JSON.stringify({ url: session.url }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // ── Card/Boleto flow: recurring subscription ──
    const priceId = SUB_PRICE_MAP[planId];
    if (!priceId) throw new Error("Invalid plan");

    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;

      const pastSubs = await stripe.subscriptions.list({
        customer: customerId,
        limit: 1,
      });
      const hadTrial = pastSubs.data.some(s => s.trial_end !== null);

      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        line_items: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        subscription_data: hadTrial ? undefined : { trial_period_days: 7 },
        success_url: `${origin}/pricing?success=true`,
        cancel_url: `${origin}/pricing`,
        payment_method_types: ["card"],
        locale: "pt-BR",
      });

      return new Response(JSON.stringify({ url: session.url }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // New customer — always offer 7-day trial
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      subscription_data: { trial_period_days: 7 },
      success_url: `${origin}/pricing?success=true`,
      cancel_url: `${origin}/pricing`,
      payment_method_types: ["card"],
      locale: "pt-BR",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
