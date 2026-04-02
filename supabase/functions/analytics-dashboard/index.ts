import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Top modules overall
    const { data: topModules } = await supabaseAdmin
      .from("module_analytics")
      .select("module_path, module_label")
      .order("accessed_at", { ascending: false });

    // Aggregate in JS since we can't do GROUP BY via SDK
    const moduleCounts: Record<string, { label: string; count: number }> = {};
    const specialtyCounts: Record<string, number> = {};
    const specialtyModules: Record<string, Record<string, number>> = {};
    let total = 0;

    for (const row of topModules || []) {
      total++;
      const key = row.module_path;
      if (!moduleCounts[key]) moduleCounts[key] = { label: row.module_label || key, count: 0 };
      moduleCounts[key].count++;
    }

    // Get specialty data separately
    const { data: specData } = await supabaseAdmin
      .from("module_analytics")
      .select("specialty, module_path, module_label")
      .neq("specialty", "");

    for (const row of specData || []) {
      const spec = row.specialty || "sem_especialidade";
      specialtyCounts[spec] = (specialtyCounts[spec] || 0) + 1;

      if (!specialtyModules[spec]) specialtyModules[spec] = {};
      const modKey = row.module_label || row.module_path;
      specialtyModules[spec][modKey] = (specialtyModules[spec][modKey] || 0) + 1;
    }

    // Daily activity (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString();
    const { data: recentData } = await supabaseAdmin
      .from("module_analytics")
      .select("accessed_at")
      .gte("accessed_at", thirtyDaysAgo)
      .order("accessed_at", { ascending: true });

    const dailyActivity: Record<string, number> = {};
    for (const row of recentData || []) {
      const day = row.accessed_at.slice(0, 10);
      dailyActivity[day] = (dailyActivity[day] || 0) + 1;
    }

    // Unique users
    const { data: uniqueUsers } = await supabaseAdmin
      .from("module_analytics")
      .select("user_id");
    const uniqueUserSet = new Set((uniqueUsers || []).map(r => r.user_id));

    const topModulesList = Object.entries(moduleCounts)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 15)
      .map(([path, { label, count }]) => ({ path, label, count }));

    const specialtyList = Object.entries(specialtyCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }));

    // Top modules per specialty
    const topBySpecialty: Record<string, { label: string; count: number }[]> = {};
    for (const [spec, mods] of Object.entries(specialtyModules)) {
      topBySpecialty[spec] = Object.entries(mods)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([label, count]) => ({ label, count }));
    }

    return new Response(
      JSON.stringify({
        totalEvents: total,
        uniqueUsers: uniqueUserSet.size,
        topModules: topModulesList,
        specialties: specialtyList,
        topBySpecialty,
        dailyActivity: Object.entries(dailyActivity).map(([date, count]) => ({ date, count })),
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
