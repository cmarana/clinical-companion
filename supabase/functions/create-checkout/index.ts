import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Price mappings
const PRICE_MAP: Record<string, { priceId?: string; amount?: number; interval: string; intervalCount: number }> = {
  monthly: { priceId: "price_1T9b7EFLmvoivW0nSUzffFtq", interval: "month", intervalCount: 1 },
  quarterly: { amount: 4990, interval: "month", intervalCount: 3 },
  semiannual: { amount: 8990, interval: "month", intervalCount: 6 },
  annual: { priceId: "price_1T9b8KFLmvoivW0n34Lg8P7X", interval: "year", intervalCount: 1 },
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
    const plan = PRICE_MAP[planId];
    if (!plan) throw new Error("Invalid plan");

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Build line items
    let lineItems: any[];
    if (plan.priceId) {
      lineItems = [{ price: plan.priceId, quantity: 1 }];
    } else {
      // Create price_data for quarterly/semiannual
      lineItems = [{
        price_data: {
          currency: "brl",
          product: "prod_U7qouLxbNzXrie", // Manual de Plantão Pro product
          unit_amount: plan.amount,
          recurring: {
            interval: plan.interval as any,
            interval_count: plan.intervalCount,
          },
        },
        quantity: 1,
      }];
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems,
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/pricing?success=true`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
      payment_method_types: ["card"],
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
