import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
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
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const admin = createClient(supabaseUrl, supabaseService);

    // Verifica role admin
    const { data: roles } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id);
    const isAdmin = (roles || []).some((r) => r.role === "admin");
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ===== KPI TARGETS + PROGRESS =====
    const { data: targets } = await admin
      .from("kpi_phase_targets")
      .select("*")
      .eq("active", true)
      .order("phase");
    const { data: progress } = await admin
      .from("kpi_phase_progress")
      .select("*")
      .order("measured_at", { ascending: false });

    const latestProgress: Record<string, any> = {};
    for (const p of progress || []) {
      const key = `${p.phase}::${p.kpi_code}`;
      if (!latestProgress[key]) latestProgress[key] = p;
    }

    const kpiRows = (targets || []).map((t: any) => {
      const key = `${t.phase}::${t.kpi_code}`;
      const measured = latestProgress[key]?.measured_value ?? null;
      let pct = 0;
      if (measured !== null) {
        if (t.direction === "lower_better") {
          pct = Math.min(100, Math.max(0, (Number(t.target_value) / Math.max(0.0001, Number(measured))) * 100));
        } else {
          pct = Math.min(100, Math.max(0, (Number(measured) / Math.max(0.0001, Number(t.target_value))) * 100));
        }
      }
      return { ...t, measured_value: measured, progress_pct: Math.round(pct) };
    });

    // ===== CHECKLISTS =====
    const { data: executions } = await admin
      .from("clinical_checklist_executions")
      .select("checklist_id, unit, shift, completion_pct, started_at")
      .order("started_at", { ascending: false })
      .limit(2000);

    const totalExec = (executions || []).length;
    const overallAdh = totalExec
      ? Math.round(
          (executions || []).reduce((s: number, e: any) => s + Number(e.completion_pct || 0), 0) / totalExec
        )
      : 0;

    const byUnit: Record<string, { total: number; sum: number }> = {};
    const byShift: Record<string, { total: number; sum: number }> = {};
    for (const e of executions || []) {
      const u = e.unit || "Não informado";
      const s = e.shift || "Não informado";
      byUnit[u] = byUnit[u] || { total: 0, sum: 0 };
      byUnit[u].total++;
      byUnit[u].sum += Number(e.completion_pct || 0);
      byShift[s] = byShift[s] || { total: 0, sum: 0 };
      byShift[s].total++;
      byShift[s].sum += Number(e.completion_pct || 0);
    }
    const adhByUnit = Object.entries(byUnit).map(([name, v]) => ({
      name,
      executions: v.total,
      avg_pct: Math.round(v.sum / v.total),
    }));
    const adhByShift = Object.entries(byShift).map(([name, v]) => ({
      name,
      executions: v.total,
      avg_pct: Math.round(v.sum / v.total),
    }));

    // ===== ERROR EVENTS =====
    const { data: baselines } = await admin.from("error_baselines").select("*");
    const { data: errorEvents } = await admin
      .from("error_events")
      .select("category, was_mitigated, occurred_at")
      .order("occurred_at", { ascending: false })
      .limit(2000);

    const epmCount = (errorEvents || []).filter(
      (e: any) => e.category === "EPM" && e.was_mitigated
    ).length;
    const cddiCount = (errorEvents || []).filter((e: any) => e.category === "CDDI").length;

    // ===== GUIDELINES =====
    const { data: guidelines } = await admin
      .from("guideline_curation")
      .select("*")
      .order("next_review_date");

    const today = new Date();
    const upcoming = (guidelines || []).filter((g: any) => {
      const d = new Date(g.next_review_date);
      const days = (d.getTime() - today.getTime()) / 86400000;
      return days <= 60;
    });

    // ===== TTP =====
    const { data: ttp } = await admin
      .from("ttp_events")
      .select("trigger_source, ttp_seconds, is_outlier, created_at, protocol_title")
      .order("created_at", { ascending: false })
      .limit(1000);

    const ttpAll = (ttp || []).map((t: any) => Number(t.ttp_seconds || 0));
    const ttpAvg = ttpAll.length
      ? Math.round(ttpAll.reduce((a, b) => a + b, 0) / ttpAll.length)
      : 0;
    const ttpBySource: Record<string, { count: number; sum: number }> = {};
    for (const t of ttp || []) {
      const k = t.trigger_source || "manual";
      ttpBySource[k] = ttpBySource[k] || { count: 0, sum: 0 };
      ttpBySource[k].count++;
      ttpBySource[k].sum += Number(t.ttp_seconds || 0);
    }
    const ttpSourceList = Object.entries(ttpBySource).map(([source, v]) => ({
      source,
      count: v.count,
      avg_seconds: Math.round(v.sum / v.count),
    }));
    const outliers = (ttp || []).filter((t: any) => t.is_outlier).slice(0, 20);

    return new Response(
      JSON.stringify({
        kpi: kpiRows,
        checklists: {
          total_executions: totalExec,
          overall_adherence: overallAdh,
          by_unit: adhByUnit,
          by_shift: adhByShift,
        },
        errors: {
          baselines: baselines || [],
          epm_count: epmCount,
          cddi_count: cddiCount,
          recent: (errorEvents || []).slice(0, 50),
        },
        guidelines: {
          all: guidelines || [],
          upcoming_60d: upcoming,
        },
        ttp: {
          avg_seconds: ttpAvg,
          total: ttpAll.length,
          by_source: ttpSourceList,
          outliers,
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
