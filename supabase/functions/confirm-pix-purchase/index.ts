import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    // Authenticate user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Not authenticated");
    const token = authHeader.replace("Bearer ", "");
    const { data: userData } = await supabaseAdmin.auth.getUser(token);
    const user = userData.user;
    if (!user) throw new Error("Not authenticated");

    const body = await req.json().catch(() => ({}));
    const sessionId = body.sessionId;
    if (!sessionId) throw new Error("Missing sessionId");

    // Check if this session was already processed (idempotency)
    const { data: existingPurchase } = await supabaseAdmin
      .from("pix_purchases")
      .select("id, access_end")
      .eq("stripe_session_id", sessionId)
      .eq("status", "active")
      .limit(1);

    if (existingPurchase && existingPurchase.length > 0) {
      return new Response(JSON.stringify({
        success: true,
        already_processed: true,
        access_end: existingPurchase[0].access_end,
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Validate payment with Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Verify: payment completed, belongs to this user, and is a one-time payment
    if (session.payment_status !== "paid") {
      throw new Error("Payment not completed");
    }
    if (session.metadata?.user_id !== user.id) {
      throw new Error("Session does not belong to this user");
    }
    if (session.mode !== "payment") {
      throw new Error("Not a one-time payment session");
    }

    const planType = session.metadata?.plan_type || "monthly";

    // Calculate access period
    const now = new Date();
    let startDate = new Date(now);
    const accessEnd = new Date(now);

    // Check if user already has an active PIX purchase — extend from end date
    const { data: existing } = await supabaseAdmin
      .from("pix_purchases")
      .select("id, access_end")
      .eq("user_id", user.id)
      .eq("status", "active")
      .gte("access_end", now.toISOString())
      .order("access_end", { ascending: false })
      .limit(1);

    if (existing && existing.length > 0) {
      startDate = new Date(existing[0].access_end);
    }

    if (planType === "annual") {
      accessEnd.setTime(startDate.getTime());
      accessEnd.setFullYear(accessEnd.getFullYear() + 1);
    } else {
      accessEnd.setTime(startDate.getTime());
      accessEnd.setMonth(accessEnd.getMonth() + 1);
    }

    const amount = session.amount_total || (planType === "annual" ? 8990 : 990);

    const { error } = await supabaseAdmin.from("pix_purchases").insert({
      user_id: user.id,
      stripe_session_id: sessionId,
      plan_type: planType,
      amount,
      status: "active",
      access_start: startDate.toISOString(),
      access_end: accessEnd.toISOString(),
    });

    if (error) throw new Error(error.message);

    return new Response(JSON.stringify({
      success: true,
      access_end: accessEnd.toISOString(),
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("confirm-pix-purchase error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
