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

const MAX_ATTEMPTS = 5;
const DEVICE_TRUST_DAYS = 30;

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

    const body = await req.json().catch(() => ({}));
    const code = String(body?.code ?? "").trim();
    const purpose = body?.purpose === "enable" ? "enable" : "login";
    const deviceId = String(body?.deviceId ?? "").trim();
    const deviceLabel = body?.deviceLabel ? String(body.deviceLabel).slice(0, 80) : null;

    if (!/^\d{6}$/.test(code)) return json({ error: "Código inválido" }, 400);
    if (purpose === "login" && !deviceId) return json({ error: "Dispositivo inválido" }, 400);

    const service = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { persistSession: false } },
    );

    const codeHash = await sha256(code);

    // Busca o código mais recente não usado para esse usuário+purpose
    const { data: rows, error: selErr } = await service
      .from("user_2fa_codes")
      .select("id, code_hash, expires_at, used, attempts")
      .eq("user_id", userId)
      .eq("purpose", purpose)
      .eq("used", false)
      .order("created_at", { ascending: false })
      .limit(1);

    if (selErr) {
      console.error("[verify-2fa-code] select failed", selErr);
      return json({ error: "Erro ao validar código" }, 500);
    }

    const row = rows?.[0];
    if (!row) return json({ error: "Código expirado ou já utilizado. Solicite outro." }, 400);

    if (new Date(row.expires_at).getTime() < Date.now()) {
      await service.from("user_2fa_codes").update({ used: true }).eq("id", row.id);
      return json({ error: "Código expirado. Solicite outro." }, 400);
    }

    if (row.attempts >= MAX_ATTEMPTS) {
      await service.from("user_2fa_codes").update({ used: true }).eq("id", row.id);
      return json({ error: "Muitas tentativas. Solicite um novo código." }, 429);
    }

    if (row.code_hash !== codeHash) {
      await service
        .from("user_2fa_codes")
        .update({ attempts: row.attempts + 1 })
        .eq("id", row.id);
      const remaining = MAX_ATTEMPTS - (row.attempts + 1);
      return json(
        {
          error: `Código incorreto.${remaining > 0 ? ` Restam ${remaining} tentativa(s).` : ""}`,
        },
        400,
      );
    }

    // Sucesso — marca como usado
    await service.from("user_2fa_codes").update({ used: true }).eq("id", row.id);

    if (purpose === "enable") {
      await service.from("user_2fa_settings").upsert({
        user_id: userId,
        enabled: true,
        enabled_at: new Date().toISOString(),
      });
      return json({ success: true, purpose });
    }

    // Login: registra dispositivo confiável por 30 dias
    const expiresAt = new Date(
      Date.now() + DEVICE_TRUST_DAYS * 24 * 60 * 60_000,
    ).toISOString();

    const { error: upErr } = await service.from("user_2fa_verifications").upsert(
      {
        user_id: userId,
        device_id: deviceId,
        device_label: deviceLabel,
        verified_at: new Date().toISOString(),
        last_seen_at: new Date().toISOString(),
        expires_at: expiresAt,
        user_agent: req.headers.get("user-agent") ?? null,
      },
      { onConflict: "user_id,device_id" },
    );
    if (upErr) {
      console.error("[verify-2fa-code] verification upsert failed", upErr);
      return json({ error: "Erro ao registrar dispositivo" }, 500);
    }

    return json({ success: true, purpose, trustedUntil: expiresAt });
  } catch (e) {
    console.error("[verify-2fa-code] unexpected", e);
    return json({ error: "Erro inesperado" }, 500);
  }
});
