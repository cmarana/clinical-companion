import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Strong unique passwords (12 chars, mixed): letters + digits + symbol.
function generatePassword(): string {
  const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const lower = "abcdefghijkmnpqrstuvwxyz";
  const digits = "23456789";
  const symbols = "!@#$%&*";
  const all = upper + lower + digits + symbols;
  const pick = (set: string) => set[Math.floor(Math.random() * set.length)];
  let pwd = pick(upper) + pick(lower) + pick(digits) + pick(symbols);
  for (let i = 0; i < 8; i++) pwd += pick(all);
  // shuffle
  return pwd.split("").sort(() => Math.random() - 0.5).join("");
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const admin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    // 1) Auth check
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Não autenticado" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userErr } = await admin.auth.getUser(token);
    if (userErr || !userData?.user) {
      return new Response(JSON.stringify({ error: "Sessão inválida" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2) Admin role check
    const { data: roleRow } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user.id)
      .eq("role", "admin")
      .maybeSingle();
    if (!roleRow) {
      return new Response(JSON.stringify({ error: "Acesso restrito a administradores" }), {
        status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 3) Parse params
    const body = await req.json().catch(() => ({}));
    const count = Math.min(Math.max(parseInt(body.count ?? "20", 10) || 20, 1), 50);
    const emailDomain = String(body.emailDomain ?? "pulsoemergencia.com.br").trim();
    const prefix = String(body.prefix ?? "teste").trim();
    const days = Math.min(Math.max(parseInt(body.days ?? "90", 10) || 90, 1), 730);
    const note = String(body.note ?? `Lote de teste - ${new Date().toISOString().slice(0,10)}`);

    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();

    const created: Array<{ email: string; password: string; status: string; user_id?: string; error?: string }> = [];

    for (let i = 1; i <= count; i++) {
      const num = String(i).padStart(2, "0");
      const email = `${prefix}${num}@${emailDomain}`;
      const password = generatePassword();

      const { data: createRes, error: createErr } = await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: `Testador ${num}`, test_account: true },
      });

      if (createErr || !createRes?.user) {
        created.push({ email, password: "", status: "error", error: createErr?.message ?? "criação falhou" });
        continue;
      }

      const newUserId = createRes.user.id;

      const { error: ovErr } = await admin
        .from("test_access_overrides")
        .upsert({
          user_id: newUserId,
          expires_at: expiresAt,
          note,
          created_by: userData.user.id,
        }, { onConflict: "user_id" });

      if (ovErr) {
        created.push({ email, password, status: "user_created_no_override", user_id: newUserId, error: ovErr.message });
        continue;
      }

      created.push({ email, password, status: "ok", user_id: newUserId });
    }

    return new Response(JSON.stringify({
      success: true,
      expires_at: expiresAt,
      total: count,
      results: created,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("admin-create-test-users error:", e);
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
