// supabase/functions/check-guideline-updates/index.ts
// Manual-trigger routine that scans versioned_items, asks Gemini whether each
// item has 2026 guideline updates, and stores AI suggestions for admin review.
// NEVER applies changes directly — every patch goes through manual approval.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface VersionedItem {
  id: string;
  item_type: string;
  item_id: string;
  title: string;
  category: string;
  current_version: string;
  current_year: number;
  source: string;
}

interface AISuggestion {
  needs_update: boolean;
  proposed_version?: string;
  change_summary?: string;
  proposed_patch?: string;
  evidence_sources?: { name: string; url?: string; year?: number }[];
  impact?: "low" | "medium" | "high" | "critical";
}

const BR_SOURCES = [
  "Sociedade Brasileira de Cardiologia (SBC)",
  "Sociedade Brasileira de Pediatria (SBP)",
  "FEBRASGO",
  "Ministério da Saúde / PCDT / SUS",
  "ANVISA",
  "AMB",
];

const INTL_SOURCES = [
  "AHA / ACC (cardiologia, ACLS, PALS)",
  "ESC (cardiologia europeia)",
  "IDSA / Surviving Sepsis Campaign",
  "NICE (Reino Unido)",
  "WHO / OMS",
];

function buildPrompt(item: VersionedItem, targetYear: number, sourcePolicy: string) {
  const sources = sourcePolicy === "br_only"
    ? BR_SOURCES
    : [...BR_SOURCES, ...INTL_SOURCES];

  return `Você é um revisor clínico sênior. Avalie se o item abaixo possui ATUALIZAÇÕES RELEVANTES publicadas em diretrizes de ${targetYear} (ou consensos ${targetYear - 1}/${targetYear}) que justifiquem revisar a versão vigente.

ITEM
- Tipo: ${item.item_type}
- ID interno: ${item.item_id}
- Título: ${item.title}
- Categoria/especialidade: ${item.category || "não informada"}
- Versão atual: ${item.current_version} (ano ${item.current_year})
- Fonte atual: ${item.source || "não informada"}

FONTES PERMITIDAS
${sources.map((s) => `- ${s}`).join("\n")}

REGRAS
1. Só recomende atualização se houver MUDANÇA CLÍNICA REAL (dose, fluxo, contraindicação, escalonamento). Mudanças puramente editoriais NÃO justificam.
2. Cite no mínimo 1 e no máximo 5 fontes oficiais com ano de publicação.
3. Resuma a mudança em até 280 caracteres.
4. Forneça um patch sugerido em texto Markdown pronto para revisão humana, em PT-BR, com seções: "O que muda", "Conduta nova", "Justificativa".
5. Classifique impacto: low (ajuste menor), medium (mudança de dose/timing), high (alteração de fluxo), critical (contraindicação nova ou risco grave).
6. Se NÃO houver atualização relevante, retorne needs_update=false sem patch.

Responda APENAS com JSON válido seguindo o schema solicitado.`;
}

const RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    needs_update: { type: "boolean" },
    proposed_version: { type: "string" },
    change_summary: { type: "string" },
    proposed_patch: { type: "string" },
    evidence_sources: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          url: { type: "string" },
          year: { type: "number" },
        },
        required: ["name"],
      },
    },
    impact: { type: "string", enum: ["low", "medium", "high", "critical"] },
  },
  required: ["needs_update"],
};

async function callGemini(prompt: string, apiKey: string): Promise<AISuggestion> {
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: "Revisor clínico baseado em evidências. Responda apenas com JSON válido conforme o schema." },
        { role: "user", content: prompt },
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "report_guideline_review",
            description: "Reporta se o item precisa de atualização e qual mudança aplicar.",
            parameters: RESPONSE_SCHEMA,
          },
        },
      ],
      tool_choice: { type: "function", function: { name: "report_guideline_review" } },
    }),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Gemini ${res.status}: ${txt.slice(0, 200)}`);
  }

  const data = await res.json();
  const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
  if (!toolCall?.function?.arguments) {
    return { needs_update: false };
  }
  return JSON.parse(toolCall.function.arguments) as AISuggestion;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    if (!lovableKey) throw new Error("LOVABLE_API_KEY não configurada");

    const authHeader = req.headers.get("Authorization") ?? "";
    const supabase = createClient(supabaseUrl, serviceKey);

    // Validação de admin via JWT
    const userClient = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: roleRow } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id)
      .eq("role", "admin")
      .maybeSingle();
    if (!roleRow) {
      return new Response(JSON.stringify({ error: "Apenas administradores" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json().catch(() => ({}));
    const scope: string[] = Array.isArray(body.scope) && body.scope.length > 0
      ? body.scope
      : ["protocol", "quick_protocol", "prescription", "calculator", "antimicrobial"];
    const targetYear: number = Number.isInteger(body.target_year) ? body.target_year : 2026;
    const sourcePolicy: string = body.source_policy === "br_only" ? "br_only" : "br_plus_intl";
    const limit: number = Math.min(Math.max(Number(body.limit) || 25, 1), 100);

    // Cria job
    const { data: job, error: jobErr } = await supabase
      .from("guideline_review_jobs")
      .insert({
        triggered_by: userData.user.id,
        scope,
        target_year: targetYear,
        source_policy: sourcePolicy,
        status: "running",
        started_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (jobErr || !job) throw new Error("Falha ao criar job: " + jobErr?.message);

    // Busca itens prioritários: nunca checados ou checados há mais tempo, dentro do escopo
    const { data: items, error: itemsErr } = await supabase
      .from("versioned_items")
      .select("*")
      .in("item_type", scope)
      .lt("current_year", targetYear)
      .order("last_checked_at", { ascending: true, nullsFirst: true })
      .limit(limit);
    if (itemsErr) throw new Error("Falha ao buscar itens: " + itemsErr.message);

    const itemList = (items ?? []) as VersionedItem[];
    await supabase
      .from("guideline_review_jobs")
      .update({ total_items: itemList.length })
      .eq("id", job.id);

    let processed = 0;
    let suggestions = 0;
    const errors: string[] = [];

    for (const item of itemList) {
      try {
        const suggestion = await callGemini(buildPrompt(item, targetYear, sourcePolicy), lovableKey);
        processed += 1;

        if (suggestion.needs_update) {
          await supabase.from("guideline_review_suggestions").insert({
            job_id: job.id,
            item_type: item.item_type,
            item_id: item.item_id,
            item_title: item.title,
            current_version: item.current_version,
            proposed_version: suggestion.proposed_version || `${targetYear}.1`,
            change_summary: (suggestion.change_summary || "").slice(0, 500),
            proposed_patch: suggestion.proposed_patch || "",
            evidence_sources: suggestion.evidence_sources || [],
            impact: suggestion.impact || "medium",
          });
          suggestions += 1;
          await supabase
            .from("versioned_items")
            .update({
              last_checked_at: new Date().toISOString(),
              last_check_result: "update_suggested",
            })
            .eq("id", item.id);
        } else {
          await supabase
            .from("versioned_items")
            .update({
              last_checked_at: new Date().toISOString(),
              last_check_result: "up_to_date",
            })
            .eq("id", item.id);
        }

        // throttle leve para não estourar quota
        await new Promise((r) => setTimeout(r, 350));
      } catch (err) {
        errors.push(`${item.item_id}: ${err instanceof Error ? err.message : String(err)}`);
        await supabase
          .from("versioned_items")
          .update({
            last_checked_at: new Date().toISOString(),
            last_check_result: "error",
          })
          .eq("id", item.id);
      }

      // atualiza progresso a cada 5
      if (processed % 5 === 0) {
        await supabase
          .from("guideline_review_jobs")
          .update({ processed_items: processed, suggestions_count: suggestions })
          .eq("id", job.id);
      }
    }

    await supabase
      .from("guideline_review_jobs")
      .update({
        status: "completed",
        processed_items: processed,
        suggestions_count: suggestions,
        completed_at: new Date().toISOString(),
        error_message: errors.slice(0, 5).join(" | "),
      })
      .eq("id", job.id);

    return new Response(
      JSON.stringify({
        job_id: job.id,
        processed,
        suggestions,
        total: itemList.length,
        errors: errors.length,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("[check-guideline-updates]", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Erro interno" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
