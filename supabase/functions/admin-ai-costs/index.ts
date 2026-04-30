// Admin-only: agrega uso de IA do mês e estima custo em R$
// Acesso restrito a usuários com role 'admin' (validado via has_role RPC)

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Custo médio estimado por chamada (R$) — baseado em flash-lite default + cache hits
// Valores conservadores (pior caso sem cache). Ajuste se mudar de modelo.
const COST_PER_CALL_BRL: Record<string, number> = {
  "clinical-ai": 0.0025,        // gemini-2.5-flash, prompts médios
  "prescription-check": 0.0015, // flash-lite, JSON estruturado
  "discharge-summary": 0.005,   // flash-lite, resposta longa
  "voice-evolution": 0.0015,    // flash-lite, estruturado
  "conduct-comparator": 0.003,  // flash, comparação 2-colunas
  "clinical-case-simulator": 0.004, // flash, casos longos
};

const DEFAULT_COST = 0.002;
const USD_TO_BRL = 5.0; // referência

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Autenticação necessária" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: claimsErr } = await userClient.auth.getClaims(token);
    if (claimsErr || !claims?.claims?.sub) {
      return new Response(JSON.stringify({ error: "Token inválido" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = claims.claims.sub as string;

    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );

    // Validar admin
    const { data: isAdmin } = await serviceClient.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });

    if (isAdmin !== true) {
      return new Response(JSON.stringify({ error: "Acesso negado" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Mês atual (America/Sao_Paulo) — mesmo formato usado em get_ai_usage
    const now = new Date();
    const fmt = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
    });
    const parts = fmt.formatToParts(now);
    const yyyy = parts.find((p) => p.type === "year")!.value;
    const mm = parts.find((p) => p.type === "month")!.value;
    const yearMonth = `${yyyy}-${mm}`;

    // 1. Uso por feature no mês atual
    const { data: usage, error: usageErr } = await serviceClient
      .from("ai_usage")
      .select("feature, count, user_id")
      .eq("year_month", yearMonth);

    if (usageErr) throw usageErr;

    const byFeature: Record<string, { calls: number; users: number; costBrl: number }> = {};
    const userSet: Record<string, Set<string>> = {};
    let totalCalls = 0;
    let totalCostBrl = 0;

    for (const row of usage ?? []) {
      const f = row.feature as string;
      const c = row.count as number;
      const uid = row.user_id as string;
      const unitCost = COST_PER_CALL_BRL[f] ?? DEFAULT_COST;
      const cost = c * unitCost;

      if (!byFeature[f]) byFeature[f] = { calls: 0, users: 0, costBrl: 0 };
      if (!userSet[f]) userSet[f] = new Set();
      userSet[f].add(uid);
      byFeature[f].calls += c;
      byFeature[f].costBrl += cost;
      totalCalls += c;
      totalCostBrl += cost;
    }
    for (const f of Object.keys(byFeature)) {
      byFeature[f].users = userSet[f].size;
    }

    // 2. Cache stats (hits salvos R$)
    const { data: cacheStats } = await serviceClient
      .from("ai_response_cache")
      .select("hits, feature")
      .gt("expires_at", new Date().toISOString());

    let cacheEntries = 0;
    let totalHits = 0;
    let savedBrl = 0;
    for (const row of cacheStats ?? []) {
      cacheEntries++;
      const h = (row.hits as number) ?? 0;
      totalHits += h;
      const unitCost = COST_PER_CALL_BRL[row.feature as string] ?? DEFAULT_COST;
      savedBrl += h * unitCost;
    }

    // 3. Top usuários do mês (max 10)
    const userTotals: Record<string, number> = {};
    for (const row of usage ?? []) {
      const uid = row.user_id as string;
      userTotals[uid] = (userTotals[uid] ?? 0) + (row.count as number);
    }
    const topUserIds = Object.entries(userTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    let topUsers: Array<{ email: string; calls: number }> = [];
    if (topUserIds.length > 0) {
      const ids = topUserIds.map(([id]) => id);
      const { data: profiles } = await serviceClient
        .from("profiles")
        .select("user_id, email, full_name")
        .in("user_id", ids);
      const byId: Record<string, { email: string; name: string }> = {};
      for (const p of profiles ?? []) {
        byId[p.user_id as string] = {
          email: (p.email as string) || "",
          name: (p.full_name as string) || "",
        };
      }
      topUsers = topUserIds.map(([id, calls]) => ({
        email: byId[id]?.email || byId[id]?.name || id.slice(0, 8),
        calls,
      }));
    }

    // 4. Total de assinantes Pro ativos (Stripe seria caro consultar p/ todos)
    // Usamos pix_purchases ativos como proxy + contagem de profiles
    const { count: totalUsers } = await serviceClient
      .from("profiles")
      .select("*", { count: "exact", head: true });

    const { count: activePix } = await serviceClient
      .from("pix_purchases")
      .select("*", { count: "exact", head: true })
      .eq("status", "active")
      .gte("access_end", new Date().toISOString());

    return new Response(
      JSON.stringify({
        yearMonth,
        totals: {
          calls: totalCalls,
          costBrl: Number(totalCostBrl.toFixed(2)),
          uniqueUsers: Object.keys(userTotals).length,
          totalUsers: totalUsers ?? 0,
          activePixUsers: activePix ?? 0,
        },
        byFeature: Object.entries(byFeature).map(([feature, v]) => ({
          feature,
          calls: v.calls,
          users: v.users,
          costBrl: Number(v.costBrl.toFixed(2)),
          unitCostBrl: COST_PER_CALL_BRL[feature] ?? DEFAULT_COST,
        })),
        cache: {
          entries: cacheEntries,
          totalHits,
          savedBrl: Number(savedBrl.toFixed(2)),
          hitRate: totalCalls + totalHits > 0
            ? Number(((totalHits / (totalCalls + totalHits)) * 100).toFixed(1))
            : 0,
        },
        topUsers,
        usdToBrl: USD_TO_BRL,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
    );
  } catch (e) {
    console.error("admin-ai-costs error:", e);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
