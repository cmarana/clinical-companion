// Ingestão em lote de conteúdo médico do PULSO.
// Recebe um array de itens já chunked; gera embedding e faz upsert em medical_knowledge.
// Admin-only.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { embedText } from "../_shared/embeddings.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface IngestItem {
  source_type: string;
  source_id: string;
  specialty?: string;
  category?: string;
  title: string;
  subtitle?: string;
  content: string;
  chunk_index?: number;
  tags?: string[];
  last_reviewed?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Auth: admin only
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Auth necessária" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data: claimsData } = await userClient.auth.getClaims(authHeader.replace("Bearer ", ""));
    const userId = claimsData?.claims?.sub;
    if (!userId) {
      return new Response(JSON.stringify({ error: "Token inválido" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const service = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );
    const { data: isAdmin } = await service.rpc("has_role", { _user_id: userId, _role: "admin" });
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Apenas admin" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const items: IngestItem[] = body.items || [];
    if (!Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: "items vazio" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (items.length > 50) {
      return new Response(JSON.stringify({ error: "Máximo 50 itens por lote" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let inserted = 0, failed = 0;
    const errors: string[] = [];

    for (const item of items) {
      try {
        const text = `${item.title}\n${item.subtitle || ""}\n${item.content}`.slice(0, 8000);
        const embedding = await embedText(text);
        const { error } = await service.from("medical_knowledge").upsert({
          source_type: item.source_type,
          source_id: item.source_id,
          specialty: item.specialty || "",
          category: item.category || "",
          title: item.title,
          subtitle: item.subtitle || "",
          content: item.content,
          chunk_index: item.chunk_index ?? 0,
          tokens: Math.ceil(text.length / 4),
          tags: item.tags || [],
          embedding: embedding as unknown as string,
          last_reviewed: item.last_reviewed || null,
          is_active: true,
        }, { onConflict: "source_type,source_id,chunk_index" });
        if (error) {
          failed++;
          errors.push(`${item.source_id}: ${error.message}`);
        } else {
          inserted++;
        }
      } catch (e) {
        failed++;
        errors.push(`${item.source_id}: ${e instanceof Error ? e.message : "erro"}`);
      }
      // rate limit suave
      await new Promise((r) => setTimeout(r, 60));
    }

    return new Response(JSON.stringify({ inserted, failed, errors: errors.slice(0, 10) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ingest-medical-knowledge error:", e);
    return new Response(JSON.stringify({ error: "Erro na ingestão" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
