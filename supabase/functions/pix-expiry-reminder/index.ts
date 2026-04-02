import { createClient } from "https://esm.sh/@supabase/supabase-js@2.99.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    // Find PIX purchases expiring in exactly 3 days (±12h window to avoid duplicates)
    const now = new Date();
    const threeDaysLater = new Date(now.getTime() + 3 * 86400000);
    const windowStart = new Date(threeDaysLater.getTime() - 12 * 3600000).toISOString();
    const windowEnd = new Date(threeDaysLater.getTime() + 12 * 3600000).toISOString();

    const { data: expiringPurchases, error: fetchErr } = await supabase
      .from("pix_purchases")
      .select("user_id, access_end, plan_type")
      .eq("status", "active")
      .gte("access_end", windowStart)
      .lte("access_end", windowEnd);

    if (fetchErr) throw fetchErr;
    if (!expiringPurchases || expiringPurchases.length === 0) {
      return new Response(JSON.stringify({ message: "No expiring purchases", notified: 0 }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get unique user IDs
    const userIds = [...new Set(expiringPurchases.map((p) => p.user_id))];

    // Send push notification via existing function
    const origin = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    const pushResponse = await fetch(`${origin}/functions/v1/send-push-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({
        type: "protocol_update",
        user_ids: userIds,
        title: "⏰ Seu acesso PULSO Pro expira em 3 dias",
        message: "Renove agora via PIX para manter acesso completo aos protocolos, IA clínica e mais.",
        url: "/pricing",
      }),
    });

    const pushResult = await pushResponse.json();

    return new Response(JSON.stringify({
      message: "Reminders sent",
      users: userIds.length,
      pushResult,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("pix-expiry-reminder error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
