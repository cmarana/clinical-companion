import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ subscribed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
    const user = userData?.user;

    if (userError || !user) {
      return new Response(JSON.stringify({ subscribed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Admin/tester/developer roles always get premium access
    const { data: roleRows } = await supabaseAdmin
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .in("role", ["admin", "tester", "developer"]);

    if (roleRows && roleRows.length > 0) {
      const role = roleRows[0].role;
      return new Response(
        JSON.stringify({
          subscribed: true,
          provider: "role_override",
          product_id: `role_${role}`,
          subscription_end: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Event access (ex: cortesia Web Summit) — trata como Pro enquanto válido.
    const { data: profileEvent } = await supabaseAdmin
      .from("profiles")
      .select("event_access_until")
      .eq("user_id", user.id)
      .maybeSingle();

    if (profileEvent?.event_access_until && new Date(profileEvent.event_access_until) > new Date()) {
      return new Response(
        JSON.stringify({
          subscribed: true,
          provider: "event_access",
          product_id: "event_websummit",
          subscription_end: profileEvent.event_access_until,
          event_access: true,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }


    const { data: override } = await supabaseAdmin
      .from("test_access_overrides")
      .select("expires_at")
      .eq("user_id", user.id)
      .gt("expires_at", new Date().toISOString())
      .maybeSingle();

    if (override) {
      return new Response(
        JSON.stringify({
          subscribed: true,
          provider: "test_override",
          product_id: "test_override",
          subscription_end: override.expires_at,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { data: purchase } = await supabaseAdmin
      .from("pix_purchases")
      .select("id, provider, plan_type, access_end, asaas_subscription_id")
      .eq("user_id", user.id)
      .eq("status", "active")
      .gte("access_end", new Date().toISOString())
      .order("access_end", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!purchase) {
      return new Response(JSON.stringify({ subscribed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        subscribed: true,
        provider: purchase.provider ?? "asaas",
        product_id: purchase.plan_type,
        subscription_end: purchase.access_end,
        asaas_subscription_id: purchase.asaas_subscription_id,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("check-subscription Asaas error:", error);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
