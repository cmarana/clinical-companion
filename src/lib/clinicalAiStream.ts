import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/clinical-ai`;

export async function streamClinicalAi({
  messages,
  mode = "chat",
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  mode?: "chat" | "structured" | "interactions" | "plantao" | "narrative";
  onDelta: (text: string) => void;
  onDone: () => void;
  onError?: (error: string) => void;
}) {
  // Get the user's actual session token for auth
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ messages, mode }),
  });

  if (!resp.ok) {
    const errorData = await resp.json().catch(() => ({} as { error?: string }));
    let friendly: string;
    if (resp.status === 402) {
      friendly =
        "A IA clínica está temporariamente sem créditos. O administrador já foi notificado — tente novamente em instantes.";
    } else if (resp.status === 429) {
      friendly = "Muitas requisições em sequência. Aguarde alguns segundos e tente de novo.";
    } else if (resp.status === 401 || resp.status === 403) {
      friendly = "Sessão expirada. Faça login novamente para usar a IA clínica.";
    } else if (resp.status >= 500) {
      friendly = "A IA clínica está instável no momento. Tente novamente em instantes.";
    } else {
      friendly = errorData.error || `Erro ${resp.status} ao consultar a IA.`;
    }
    onError?.(friendly);
    onDone();
    return;
  }

  if (!resp.body) {
    onError?.("Resposta vazia do servidor. Tente novamente.");
    onDone();
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);

      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;

      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") { streamDone = true; break; }

      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  // Final flush
  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch { /* ignore */ }
    }
  }

  onDone();
}
