import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.99.0/cors";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.99.0";

const VAPID_PUBLIC_KEY = "BGyQFm4kXTipB13d4JrcbJxdj1uW5j9mhjHyfA6YjwY8Zsx5snNOsK21hQCicVDi8Qyv4RVIaaBsEnNfjiHCiHo";

// Web Push utilities using Web Crypto API
async function generateVapidAuthHeader(endpoint: string, vapidPrivateKeyBase64: string) {
  const urlSafeToBase64 = (s: string) => {
    let b = s.replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    return b;
  };

  const audience = new URL(endpoint).origin;
  const expiration = Math.floor(Date.now() / 1000) + 12 * 3600;

  // Create JWT
  const header = { typ: "JWT", alg: "ES256" };
  const payload = { aud: audience, exp: expiration, sub: "mailto:pulso@app.com" };

  const encoder = new TextEncoder();
  const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const unsignedToken = `${headerB64}.${payloadB64}`;

  // Import private key
  const privateKeyBytes = Uint8Array.from(atob(urlSafeToBase64(vapidPrivateKeyBase64)), c => c.charCodeAt(0));
  
  // Build JWK for P-256
  const publicKeyBytes = Uint8Array.from(atob(urlSafeToBase64(VAPID_PUBLIC_KEY)), c => c.charCodeAt(0));
  
  const jwk = {
    kty: "EC",
    crv: "P-256",
    x: btoa(String.fromCharCode(...publicKeyBytes.slice(1, 33))).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
    y: btoa(String.fromCharCode(...publicKeyBytes.slice(33, 65))).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
    d: btoa(String.fromCharCode(...privateKeyBytes)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_'),
  };

  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, encoder.encode(unsignedToken));

  // Convert DER signature to raw r||s format for JWT
  const sigArray = new Uint8Array(signature);
  let sigB64: string;
  
  if (sigArray.length === 64) {
    sigB64 = btoa(String.fromCharCode(...sigArray));
  } else {
    // DER encoded - extract r and s
    const r = sigArray.slice(sigArray[3] === 33 ? 5 : 4, sigArray[3] === 33 ? 37 : 36);
    const sOffset = sigArray[3] === 33 ? 37 : 36;
    const sLen = sigArray[sOffset + 1];
    const s = sigArray.slice(sOffset + 2, sOffset + 2 + sLen);
    
    const rPad = new Uint8Array(32);
    const sPad = new Uint8Array(32);
    rPad.set(r.length > 32 ? r.slice(r.length - 32) : r, 32 - Math.min(r.length, 32));
    sPad.set(s.length > 32 ? s.slice(s.length - 32) : s, 32 - Math.min(s.length, 32));
    
    const raw = new Uint8Array(64);
    raw.set(rPad, 0);
    raw.set(sPad, 32);
    sigB64 = btoa(String.fromCharCode(...raw));
  }

  const token = `${unsignedToken}.${sigB64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')}`;
  
  return {
    authorization: `vapid t=${token}, k=${VAPID_PUBLIC_KEY}`,
  };
}

async function sendWebPush(subscription: { endpoint: string; p256dh: string; auth: string }, payload: string, vapidPrivateKey: string) {
  const vapidHeaders = await generateVapidAuthHeader(subscription.endpoint, vapidPrivateKey);

  const response = await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      ...vapidHeaders,
      "Content-Type": "application/json",
      "TTL": "86400",
    },
    body: payload,
  });

  return { status: response.status, ok: response.ok };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const vapidPrivateKey = Deno.env.get("VAPID_PRIVATE_KEY");
    if (!vapidPrivateKey) {
      return new Response(JSON.stringify({ error: "VAPID key not configured" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const body = await req.json();
    const { type, title, message, url, user_ids } = body;

    // Determine which subscriptions to notify
    let query = supabase.from("push_subscriptions").select("*");

    if (user_ids && user_ids.length > 0) {
      query = query.in("user_id", user_ids);
    }

    if (type === "study_reminder") {
      query = query.eq("study_reminders", true);
    } else if (type === "protocol_update") {
      query = query.eq("protocol_updates", true);
    }

    const { data: subscriptions, error } = await query;

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = JSON.stringify({
      title: title || "PULSO",
      body: message || "",
      url: url || "/",
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-192.png",
    });

    let sent = 0;
    let failed = 0;
    const staleEndpoints: string[] = [];

    for (const sub of subscriptions || []) {
      try {
        const result = await sendWebPush(
          { endpoint: sub.endpoint, p256dh: sub.p256dh, auth: sub.auth },
          payload,
          vapidPrivateKey,
        );
        if (result.ok) {
          sent++;
        } else if (result.status === 410 || result.status === 404) {
          staleEndpoints.push(sub.endpoint);
          failed++;
        } else {
          failed++;
        }
      } catch {
        failed++;
      }
    }

    // Clean up stale subscriptions
    if (staleEndpoints.length > 0) {
      await supabase.from("push_subscriptions").delete().in("endpoint", staleEndpoints);
    }

    return new Response(JSON.stringify({ sent, failed, total: subscriptions?.length || 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
