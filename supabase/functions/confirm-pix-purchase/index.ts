import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ASAAS_API_URL = Deno.env.get("ASAAS_API_URL") ?? "https://api.asaas.com/v3";

async function asaasRequest<T>(path: string): Promise<T> {
  const token = Deno.env.get("ASAAS_ACCESS_TOKEN");
  if (!token) throw new Error("Missing ASAAS_ACCESS_TOKEN");

  const response = await fetch(`${ASAAS_API_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "access_token": token,
    },
  });

  const raw = await response.text();
  const payload = raw ? JSON.parse(raw) : null;

  if (!response.ok) {
    throw new Error(payload?.errors?.[0]?.description ?? payload?.message ?? "Erro na API do Asaas");
  }

  return payload as T;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Usuário não autenticado");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData } = await supabaseAdmin.auth.getUser(token);
    const user = userData.user;
    if (!user) throw new Error("Usuário não autenticado");

    const body = await req.json().catch(() => ({}));
    const paymentId = body.paymentId;
    if (!paymentId) throw new Error("Missing paymentId");

    const payment = await asaasRequest<any>(`/payments/${paymentId}`);

    const { data: row } = await supabaseAdmin
      .from("pix_purchases")
      .select("id, status, access_end")
      .eq("user_id", user.id)
      .eq("asaas_payment_id", paymentId)
      .maybeSingle();

    if (row?.status === "active") {
      return new Response(
        JSON.stringify({ success: true, already_processed: true, access_end: row.access_end }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
      );
    }

    const paid = ["RECEIVED", "CONFIRMED", "RECEIVED_IN_CASH"].includes(payment.status);
    return new Response(
      JSON.stringify({
        success: paid,
        status: payment.status,
        message: paid
          ? "Pagamento confirmado. O webhook liberará ou já liberou o acesso."
          : "Pagamento ainda não confirmado.",
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
    );
  } catch (error) {
    console.error("confirm-pix-purchase Asaas error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Erro interno do servidor" }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 },
    );
  }
});
