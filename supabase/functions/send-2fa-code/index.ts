import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

async function sha256(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function generateCode(): string {
  // 6 dígitos, garantindo zero à esquerda
  const n = crypto.getRandomValues(new Uint32Array(1))[0] % 1_000_000;
  return n.toString().padStart(6, "0");
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return json({ error: "Autenticação necessária" }, 401);
    }

    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claims, error: claimsErr } = await userClient.auth.getClaims(token);
    if (claimsErr || !claims?.claims?.sub) return json({ error: "Token inválido" }, 401);

    const userId = claims.claims.sub as string;
    const email = (claims.claims.email as string) || "";
    if (!email) return json({ error: "E-mail do usuário não encontrado" }, 400);

    const body = await req.json().catch(() => ({}));
    const purpose = body?.purpose === "enable" ? "enable" : "login";

    const service = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );

    // Rate limit: máximo 1 código por 30s, e 5 códigos por hora
    const since30s = new Date(Date.now() - 30_000).toISOString();
    const since1h = new Date(Date.now() - 60 * 60_000).toISOString();
    const { count: recentCount } = await service
      .from("user_2fa_codes")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("purpose", purpose)
      .gte("created_at", since30s);
    if ((recentCount ?? 0) > 0) {
      return json({ error: "Aguarde alguns segundos antes de pedir outro código." }, 429);
    }
    const { count: hourCount } = await service
      .from("user_2fa_codes")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .gte("created_at", since1h);
    if ((hourCount ?? 0) >= 5) {
      return json({ error: "Limite de códigos por hora atingido. Tente mais tarde." }, 429);
    }

    // Invalida códigos anteriores pendentes
    await service
      .from("user_2fa_codes")
      .update({ used: true })
      .eq("user_id", userId)
      .eq("purpose", purpose)
      .eq("used", false);

    const code = generateCode();
    const codeHash = await sha256(code);
    const expiresAt = new Date(Date.now() + 10 * 60_000).toISOString(); // 10 min

    const { error: insertErr } = await service.from("user_2fa_codes").insert({
      user_id: userId,
      code_hash: codeHash,
      purpose,
      expires_at: expiresAt,
      ip_address: req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip"),
    });
    if (insertErr) {
      console.error("[send-2fa-code] insert failed", insertErr);
      return json({ error: "Erro ao gerar código" }, 500);
    }

    // Envia o e-mail invocando o pipeline transacional existente
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const ua = req.headers.get("user-agent") ?? undefined;

    const emailResp = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serviceKey}`,
        apikey: serviceKey,
      },
      body: JSON.stringify({
        templateName: "two-factor-code",
        recipientEmail: email,
        idempotencyKey: `2fa-${userId}-${Date.now()}`,
        templateData: {
          code,
          purpose,
          expiresInMinutes: 10,
          userAgent: ua,
        },
      }),
    });

    if (!emailResp.ok) {
      const errBody = await emailResp.text().catch(() => "");
      console.error("[send-2fa-code] email enqueue failed", emailResp.status, errBody);
      return json({ error: "Não foi possível enviar o e-mail. Tente novamente." }, 502);
    }

    return json({
      success: true,
      // ofusca e-mail para mostrar na UI
      maskedEmail: email.replace(/^(.{2}).*(@.*)$/, "$1***$2"),
      expiresInMinutes: 10,
    });
  } catch (e) {
    console.error("[send-2fa-code] unexpected", e);
    return json({ error: "Erro inesperado" }, 500);
  }
});
