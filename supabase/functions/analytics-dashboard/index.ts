import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // ─── AUTH ───
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseAnon = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const supabaseService = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    const userClient = createClient(supabaseUrl, supabaseAnon, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) {
      return new Response(JSON.stringify({ error: "Token inválido" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userId = userData.user.id;
    const supabaseAdmin = createClient(supabaseUrl, supabaseService);

    // ─── SCOPE: super-admin OR institutional admin/editor ───
    const { data: roles } = await supabaseAdmin
      .from("user_roles").select("role").eq("user_id", userId);
    const isSuperAdmin = (roles || []).some((r) => r.role === "admin");

    let institutionId: string | null = null;
    let institutionName: string | null = null;
    let institutionUserIds: string[] | null = null;

    if (!isSuperAdmin) {
      // Find any institution where user is admin or editor
      const { data: memberships } = await supabaseAdmin
        .from("institution_members")
        .select("institution_id, role, institutions(name)")
        .eq("user_id", userId)
        .in("role", ["admin", "editor"]);

      const validMembership = (memberships || [])[0];
      if (!validMembership) {
        return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), {
          status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      institutionId = validMembership.institution_id;
      // @ts-ignore deep
      institutionName = validMembership.institutions?.name ?? null;

      // Collect all member user_ids of this institution to scope queries
      const { data: members } = await supabaseAdmin
        .from("institution_members").select("user_id").eq("institution_id", institutionId);
      institutionUserIds = (members || []).map((m) => m.user_id);
    }

    // Helper to apply institutional scope to queries
    const scope = <T>(qb: T): T => {
      if (isSuperAdmin) return qb;
      // @ts-ignore — supabase chainable
      return institutionUserIds && institutionUserIds.length > 0
        ? qb.in("user_id", institutionUserIds)
        : qb.eq("user_id", "00000000-0000-0000-0000-000000000000");
    };

    // ─── MODULE ANALYTICS ───
    const { data: topModules } = await scope(
      supabaseAdmin.from("module_analytics").select("module_path, module_label, user_id")
    );

    const moduleCounts: Record<string, { label: string; count: number }> = {};
    let total = 0;
    for (const row of topModules || []) {
      total++;
      const key = row.module_path;
      if (!moduleCounts[key]) moduleCounts[key] = { label: row.module_label || key, count: 0 };
      moduleCounts[key].count++;
    }

    // ─── SPECIALTY ───
    const { data: specData } = await scope(
      supabaseAdmin.from("module_analytics").select("specialty, module_path, module_label, user_id").neq("specialty", "")
    );
    const specialtyCounts: Record<string, number> = {};
    const specialtyModules: Record<string, Record<string, number>> = {};
    for (const row of specData || []) {
      const spec = row.specialty || "sem_especialidade";
      specialtyCounts[spec] = (specialtyCounts[spec] || 0) + 1;
      if (!specialtyModules[spec]) specialtyModules[spec] = {};
      const modKey = row.module_label || row.module_path;
      specialtyModules[spec][modKey] = (specialtyModules[spec][modKey] || 0) + 1;
    }

    // ─── DAILY ACTIVITY (30d) ───
    const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString();
    const { data: recentData } = await scope(
      supabaseAdmin.from("module_analytics").select("accessed_at, user_id")
        .gte("accessed_at", thirtyDaysAgo).order("accessed_at", { ascending: true })
    );
    const dailyActivity: Record<string, number> = {};
    for (const row of recentData || []) {
      const day = row.accessed_at.slice(0, 10);
      dailyActivity[day] = (dailyActivity[day] || 0) + 1;
    }

    // ─── UNIQUE USERS ───
    const { data: uniqueUsers } = await scope(
      supabaseAdmin.from("module_analytics").select("user_id")
    );
    const uniqueUserSet = new Set((uniqueUsers || []).map((r) => r.user_id));

    // ─── PROTOCOL VIEWS (top by views) ───
    const { data: protocolViewsData } = await scope(
      supabaseAdmin.from("protocol_views")
        .select("protocol_id, protocol_title, protocol_category, duration_seconds, user_id")
        .order("created_at", { ascending: false }).limit(2000)
    );

    const protocolCounts: Record<string, { title: string; category: string; views: number; totalDuration: number }> = {};
    for (const row of protocolViewsData || []) {
      const key = row.protocol_id;
      if (!protocolCounts[key]) protocolCounts[key] = { title: row.protocol_title, category: row.protocol_category, views: 0, totalDuration: 0 };
      protocolCounts[key].views++;
      protocolCounts[key].totalDuration += row.duration_seconds || 0;
    }
    const topProtocols = Object.entries(protocolCounts)
      .sort((a, b) => b[1].views - a[1].views)
      .slice(0, 20)
      .map(([id, data]) => ({ id, ...data, avgDuration: data.views ? Math.round(data.totalDuration / data.views) : 0 }));

    const topModulesList = Object.entries(moduleCounts)
      .sort((a, b) => b[1].count - a[1].count).slice(0, 15)
      .map(([path, { label, count }]) => ({ path, label, count }));

    const specialtyList = Object.entries(specialtyCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }));

    const topBySpecialty: Record<string, { label: string; count: number }[]> = {};
    for (const [spec, mods] of Object.entries(specialtyModules)) {
      topBySpecialty[spec] = Object.entries(mods)
        .sort((a, b) => b[1] - a[1]).slice(0, 5)
        .map(([label, count]) => ({ label, count }));
    }

    return new Response(
      JSON.stringify({
        scope: isSuperAdmin ? "super_admin" : "institution",
        institution: institutionName,
        totalEvents: total,
        uniqueUsers: uniqueUserSet.size,
        topModules: topModulesList,
        specialties: specialtyList,
        topBySpecialty,
        dailyActivity: Object.entries(dailyActivity).map(([date, count]) => ({ date, count })),
        topProtocols,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("analytics-dashboard error:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao gerar relatório" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
