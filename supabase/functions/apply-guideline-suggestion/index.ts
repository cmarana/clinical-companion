// supabase/functions/apply-guideline-suggestion/index.ts
// Admin-only. Aplica ou rejeita uma sugestão de atualização de diretriz.
// Aplicar: bumpa current_version do item; rejeitar: arquiva sem alterar.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const authHeader = req.headers.get("Authorization") ?? "";

    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData } = await userClient.auth.getUser();
    if (!userData?.user) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, serviceKey);
    const { data: roleRow } = await supabase
      .from("user_roles").select("role")
      .eq("user_id", userData.user.id).eq("role", "admin").maybeSingle();
    if (!roleRow) {
      return new Response(JSON.stringify({ error: "Apenas administradores" }), {
        status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const suggestionId: string = body.suggestion_id;
    const action: "approve" | "reject" | "apply" = body.action;
    const note: string = (body.note ?? "").toString().slice(0, 1000);

    if (!suggestionId || !["approve", "reject", "apply"].includes(action)) {
      return new Response(JSON.stringify({ error: "Parâmetros inválidos" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: sug, error: sugErr } = await supabase
      .from("guideline_review_suggestions").select("*").eq("id", suggestionId).single();
    if (sugErr || !sug) {
      return new Response(JSON.stringify({ error: "Sugestão não encontrada" }), {
        status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const now = new Date().toISOString();

    if (action === "reject") {
      await supabase.from("guideline_review_suggestions").update({
        status: "rejected", reviewer_id: userData.user.id, reviewer_note: note, reviewed_at: now,
      }).eq("id", suggestionId);
    } else if (action === "approve") {
      await supabase.from("guideline_review_suggestions").update({
        status: "approved", reviewer_id: userData.user.id, reviewer_note: note, reviewed_at: now,
      }).eq("id", suggestionId);
    } else if (action === "apply") {
      // Bumpa a versão do item. O conteúdo TS continua versionado em código,
      // mas o registro oficial passa a refletir a nova versão para o app exibir.
      await supabase.from("versioned_items").update({
        current_version: sug.proposed_version,
        current_year: parseInt(String(sug.proposed_version).split(".")[0], 10) || new Date().getFullYear(),
        last_check_result: "up_to_date",
        last_checked_at: now,
        notes: sug.change_summary,
      }).eq("item_type", sug.item_type).eq("item_id", sug.item_id);

      await supabase.from("guideline_review_suggestions").update({
        status: "applied", reviewer_id: userData.user.id, reviewer_note: note,
        reviewed_at: sug.reviewed_at ?? now, applied_at: now,
      }).eq("id", suggestionId);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[apply-guideline-suggestion]", err);
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : "Erro" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
