import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const sb = createClient(supabaseUrl, serviceKey);

    // ── Validate JWT and require admin role ──
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const token = authHeader.slice(7);
    const userClient = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: claimsData, error: claimsErr } = await userClient.auth.getClaims(token);
    if (claimsErr || !claimsData?.claims?.sub) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userId = claimsData.claims.sub as string;
    const { data: isAdmin } = await sb.rpc("has_role", { _user_id: userId, _role: "admin" });
    if (isAdmin !== true) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: profiles, error } = await sb
      .from("profiles")
      .select("provider, specialty, city, state, university, academic_status, created_at, gender");

    if (error) throw error;

    const all = profiles || [];

    const groupBy = (key: string) => {
      const map: Record<string, number> = {};
      for (const p of all) {
        const val = (p as any)[key] || "Não informado";
        if (val.trim() === "") {
          map["Não informado"] = (map["Não informado"] || 0) + 1;
        } else {
          map[val] = (map[val] || 0) + 1;
        }
      }
      return Object.entries(map)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
    };

    // Signups over time (by month)
    const signupsByMonth: Record<string, number> = {};
    for (const p of all) {
      const month = (p.created_at || "").slice(0, 7); // YYYY-MM
      if (month) signupsByMonth[month] = (signupsByMonth[month] || 0) + 1;
    }
    const signupsTimeline = Object.entries(signupsByMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, count]) => ({ month, count }));

    const result = {
      totalUsers: all.length,
      byProvider: groupBy("provider"),
      bySpecialty: groupBy("specialty"),
      byCity: groupBy("city").slice(0, 20),
      byState: groupBy("state"),
      byUniversity: groupBy("university").slice(0, 20),
      byAcademicStatus: groupBy("academic_status"),
      byGender: groupBy("gender"),
      signupsTimeline,
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
