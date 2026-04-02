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
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: userData } = await supabaseAdmin.auth.getUser(token);
    const user = userData.user;
    if (!user) throw new Error("Not authenticated");

    const body = await req.json().catch(() => ({}));
    const planType = body.planType || "monthly";

    // Calculate access period
    const now = new Date();
    const accessEnd = new Date(now);
    if (planType === "annual") {
      accessEnd.setFullYear(accessEnd.getFullYear() + 1);
    } else {
      accessEnd.setMonth(accessEnd.getMonth() + 1);
    }

    // Check if user already has an active PIX purchase
    const { data: existing } = await supabaseAdmin
      .from("pix_purchases")
      .select("id, access_end")
      .eq("user_id", user.id)
      .eq("status", "active")
      .gte("access_end", now.toISOString())
      .limit(1);

    // If they have an active purchase, extend from end date
    let startDate = now;
    if (existing && existing.length > 0) {
      startDate = new Date(existing[0].access_end);
      const newEnd = new Date(startDate);
      if (planType === "annual") {
        newEnd.setFullYear(newEnd.getFullYear() + 1);
      } else {
        newEnd.setMonth(newEnd.getMonth() + 1);
      }
      accessEnd.setTime(newEnd.getTime());
    }

    const amount = planType === "annual" ? 8990 : 990;

    const { error } = await supabaseAdmin.from("pix_purchases").insert({
      user_id: user.id,
      stripe_session_id: `pix_${Date.now()}`,
      plan_type: planType,
      amount,
      status: "active",
      access_start: startDate.toISOString(),
      access_end: accessEnd.toISOString(),
    });

    if (error) throw new Error(error.message);

    return new Response(JSON.stringify({ success: true, access_end: accessEnd.toISOString() }), {
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
