// Helper compartilhado de quota + cache para edge functions de IA
// Usado por: clinical-ai, prescription-check, conduct-comparator, etc.

import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

export const FREE_MONTHLY_QUOTA = 3;
export const PRO_MONTHLY_QUOTA = 50;

export type UserTier = "free" | "pro" | "admin";

export interface QuotaContext {
  userId: string;
  tier: UserTier;
  used: number;
  limit: number;
  remaining: number;
  serviceClient: SupabaseClient;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

/**
 * Valida JWT, identifica tier (admin > pro > free) e checa quota mensal.
 * Retorna QuotaContext em sucesso, ou Response com erro pronto pra devolver.
 */
export async function verifyAuthAndQuota(
  req: Request,
  feature: string = "clinical-ai",
): Promise<QuotaContext | Response> {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Autenticação necessária", code: "auth" }), {
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
  const { data, error } = await userClient.auth.getClaims(token);
  if (error || !data?.claims?.sub) {
    return new Response(JSON.stringify({ error: "Token inválido", code: "auth" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const userId = data.claims.sub as string;

  const serviceClient = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );

  // 1. Admin? (sem limite)
  const { data: adminCheck } = await serviceClient.rpc("has_role", {
    _user_id: userId,
    _role: "admin",
  });
  let tier: UserTier = "free";
  if (adminCheck === true) tier = "admin";

  // 2. Se não for admin, verificar Pro (Stripe ou PIX)
  if (tier !== "admin") {
    const { data: userData } = await serviceClient.auth.admin.getUserById(userId);
    const email = userData?.user?.email;

    let isPro = false;
    if (email) {
      try {
        const { default: Stripe } = await import("https://esm.sh/stripe@18.5.0");
        const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
          apiVersion: "2025-08-27.basil",
        });
        const customers = await stripe.customers.list({ email, limit: 1 });
        if (customers.data.length > 0) {
          const subs = await stripe.subscriptions.list({
            customer: customers.data[0].id,
            status: "active",
            limit: 1,
          });
          isPro = subs.data.length > 0;
        }
      } catch (e) {
        console.error("Stripe check error:", e);
      }
    }

    if (!isPro) {
      const { data: pixData } = await serviceClient
        .from("pix_purchases")
        .select("id")
        .eq("user_id", userId)
        .eq("status", "active")
        .gte("access_end", new Date().toISOString())
        .limit(1);
      isPro = !!(pixData && pixData.length > 0);
    }

    if (isPro) tier = "pro";
  }

  // 3. Buscar uso atual
  const { data: usage } = await serviceClient.rpc("get_ai_usage", {
    _user_id: userId,
    _feature: feature,
  });
  const used = (usage as number) ?? 0;

  const limit =
    tier === "admin" ? Number.MAX_SAFE_INTEGER : tier === "pro" ? PRO_MONTHLY_QUOTA : FREE_MONTHLY_QUOTA;
  const remaining = Math.max(0, limit - used);

  if (remaining <= 0) {
    return new Response(
      JSON.stringify({
        error:
          tier === "free"
            ? `Limite mensal grátis atingido (${FREE_MONTHLY_QUOTA} consultas). Assine o PULSO Pro para liberar ${PRO_MONTHLY_QUOTA} consultas/mês.`
            : `Limite mensal Pro atingido (${PRO_MONTHLY_QUOTA} consultas). Renova no dia 1 do próximo mês.`,
        code: "quota_exceeded",
        tier,
        used,
        limit,
      }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  return { userId, tier, used, limit, remaining, serviceClient };
}

/** Incrementa contador de uso após sucesso (não bloqueia se falhar). */
export async function bumpAiUsage(
  serviceClient: SupabaseClient,
  userId: string,
  feature: string = "clinical-ai",
): Promise<void> {
  try {
    await serviceClient.rpc("increment_ai_usage", { _user_id: userId, _feature: feature });
  } catch (e) {
    console.error("bumpAiUsage error:", e);
  }
}

/** SHA-256 hex do prompt+modo+modelo, base do cache global. */
export async function hashPrompt(input: string): Promise<string> {
  const buf = new TextEncoder().encode(input.trim().toLowerCase());
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export interface CacheLookup {
  hit: boolean;
  response?: string;
}

export async function lookupCache(
  serviceClient: SupabaseClient,
  promptHash: string,
  feature: string,
  model: string,
  mode: string,
): Promise<CacheLookup> {
  const { data } = await serviceClient
    .from("ai_response_cache")
    .select("response, id")
    .eq("prompt_hash", promptHash)
    .eq("feature", feature)
    .eq("model", model)
    .eq("mode", mode)
    .gt("expires_at", new Date().toISOString())
    .maybeSingle();

  if (!data) return { hit: false };

  // Atualiza hit count em background (não await)
  serviceClient
    .from("ai_response_cache")
    .update({ hits: undefined as unknown as number, last_hit_at: new Date().toISOString() })
    .eq("id", data.id)
    .then(() => {});

  // Increment via RPC seria mais limpo; por ora usamos PATCH simples sem inflar hits
  return { hit: true, response: data.response as string };
}

export async function storeCache(
  serviceClient: SupabaseClient,
  promptHash: string,
  feature: string,
  model: string,
  mode: string,
  response: string,
): Promise<void> {
  // Só cacheia se a resposta tem >150 chars (evita lixo) e <30k (evita inflar tabela)
  if (response.length < 150 || response.length > 30000) return;
  try {
    await serviceClient.from("ai_response_cache").upsert(
      {
        prompt_hash: promptHash,
        feature,
        model,
        mode,
        response,
        last_hit_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      },
      { onConflict: "prompt_hash,feature,model,mode" },
    );
  } catch (e) {
    console.error("storeCache error:", e);
  }
}
