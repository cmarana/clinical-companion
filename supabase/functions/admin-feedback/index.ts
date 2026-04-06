const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "No auth" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Verify user identity
    const userClient = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: userError } = await userClient.auth.getUser();
    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check admin role using has_role function
    const serviceClient = createClient(supabaseUrl, supabaseKey);
    const { data: isAdmin } = await serviceClient.rpc("has_role", {
      _user_id: user.id,
      _role: "admin",
    });

    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = new URL(req.url);
    const action = url.searchParams.get("action");

    // GET: Fetch feedbacks or users
    if (req.method === "GET") {
      if (action === "users") {
        const { data: profiles, error: pErr } = await serviceClient
          .from("profiles")
          .select("user_id, full_name, first_name, last_name, email, phone, specialty, city, state, university, academic_status, provider, created_at, avatar_url")
          .order("created_at", { ascending: false })
          .limit(500);
        if (pErr) throw pErr;
        return new Response(JSON.stringify(profiles), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (action === "stats") {
        const { count: totalUsers } = await serviceClient
          .from("profiles")
          .select("*", { count: "exact", head: true });
        const { count: totalFeedback } = await serviceClient
          .from("feedback")
          .select("*", { count: "exact", head: true });
        const { count: newFeedback } = await serviceClient
          .from("feedback")
          .select("*", { count: "exact", head: true })
          .eq("status", "new");

        return new Response(JSON.stringify({
          totalUsers: totalUsers || 0,
          totalFeedback: totalFeedback || 0,
          newFeedback: newFeedback || 0,
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Default: fetch feedbacks with user email
      const { data: feedback, error: fbError } = await serviceClient
        .from("feedback")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500);
      if (fbError) throw fbError;

      // Enrich with user emails
      const userIds = [...new Set((feedback || []).map((f: any) => f.user_id))];
      let emailMap: Record<string, string> = {};
      if (userIds.length > 0) {
        const { data: profiles } = await serviceClient
          .from("profiles")
          .select("user_id, email, full_name")
          .in("user_id", userIds);
        if (profiles) {
          for (const p of profiles) {
            emailMap[p.user_id] = p.email;
          }
        }
      }

      const enriched = (feedback || []).map((f: any) => ({
        ...f,
        user_email: emailMap[f.user_id] || "",
      }));

      return new Response(JSON.stringify(enriched), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // PATCH: Update status
    if (req.method === "PATCH") {
      const { id, status } = await req.json();
      const { error: updateError } = await serviceClient
        .from("feedback")
        .update({ status })
        .eq("id", id);
      if (updateError) throw updateError;
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // POST: Send reply email to user
    if (req.method === "POST") {
      const { feedbackId, replyMessage, recipientEmail, originalMessage, originalType } = await req.json();

      if (!replyMessage || !recipientEmail) {
        return new Response(JSON.stringify({ error: "Missing replyMessage or recipientEmail" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Send reply via transactional email
      const { error: invokeErr } = await serviceClient.functions.invoke("send-transactional-email", {
        body: {
          templateName: "admin-reply",
          recipientEmail,
          idempotencyKey: `admin-reply-${feedbackId}-${Date.now()}`,
          templateData: {
            replyMessage,
            originalMessage: originalMessage || "",
            originalType: originalType || "",
          },
        },
      });

      if (invokeErr) {
        console.error("Failed to send reply email", invokeErr);
        throw new Error("Failed to send reply email");
      }

      // Update feedback status to "resolved"
      await serviceClient
        .from("feedback")
        .update({ status: "resolved" })
        .eq("id", feedbackId);

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
