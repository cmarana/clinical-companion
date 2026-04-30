// Retorna o uso atual e tier do usuário, sem incrementar nada.
// Usado pelo frontend para exibir "X/3 perguntas grátis" ou "X/200 Pro".

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { verifyAuthAndQuota } from "../_shared/aiQuota.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const feature = url.searchParams.get("feature") || "clinical-ai";

    // Aceitamos "limite atingido" aqui — frontend só quer ver o contador.
    const result = await verifyAuthAndQuota(req.clone(), feature);
    if (result instanceof Response) {
      // Se for 429 (quota), ainda devolvemos os números no payload de erro.
      if (result.status === 429) {
        const body = await result.json();
        return new Response(
          JSON.stringify({
            tier: body.tier ?? "free",
            used: body.used ?? 0,
            limit: body.limit ?? 0,
            remaining: 0,
            quotaExceeded: true,
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      return result; // 401/403
    }

    return new Response(
      JSON.stringify({
        tier: result.tier,
        used: result.used,
        limit: result.limit === Number.MAX_SAFE_INTEGER ? -1 : result.limit,
        remaining: result.remaining === Number.MAX_SAFE_INTEGER ? -1 : result.remaining,
        quotaExceeded: false,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("ai-usage-status error:", e);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
