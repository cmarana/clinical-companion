// Adapter: converte requisições OpenAI chat.completions → Gemini generateContent
// Permite que o código existente (formato OpenAI) continue funcionando, mas
// chame diretamente a API do Google (sem passar pelos créditos do Lovable AI Gateway).

interface OpenAIMessage {
  role: string;
  content: string | Array<Record<string, any>>;
}

interface OpenAIRequest {
  model: string;
  messages: OpenAIMessage[];
  stream?: boolean;
  response_format?: { type: string };
  tools?: any[];
  tool_choice?: any;
  temperature?: number;
  max_tokens?: number;
}

function normalizeModel(m: string): string {
  if (!m) return "gemini-2.5-flash";
  return m.replace(/^google\//, "");
}

function convertContent(content: string | Array<Record<string, any>>): any[] {
  if (typeof content === "string") return [{ text: content }];
  const parts: any[] = [];
  for (const part of content) {
    if (part.type === "text") {
      parts.push({ text: part.text ?? "" });
    } else if (part.type === "image_url") {
      const url: string = part.image_url?.url ?? "";
      const m = url.match(/^data:([^;]+);base64,(.+)$/);
      if (m) {
        parts.push({ inlineData: { mimeType: m[1], data: m[2] } });
      } else {
        parts.push({ fileData: { fileUri: url, mimeType: "image/jpeg" } });
      }
    }
  }
  return parts.length ? parts : [{ text: "" }];
}

function convertTools(tools: any[]): any[] {
  return [{
    functionDeclarations: tools
      .filter((t) => t?.type === "function" && t.function)
      .map((t) => ({
        name: t.function.name,
        description: t.function.description ?? "",
        parameters: t.function.parameters ?? { type: "object", properties: {} },
      })),
  }];
}

export async function geminiChat(req: OpenAIRequest): Promise<Response> {
  const apiKey = Deno.env.get("GEMINI_API_KEY");
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: { message: "GEMINI_API_KEY não configurada" } }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const model = normalizeModel(req.model);
  const systemTexts: string[] = [];
  const contents: any[] = [];

  for (const m of req.messages) {
    if (m.role === "system") {
      const text = typeof m.content === "string"
        ? m.content
        : (m.content as any[]).map((p) => p.text ?? "").join("\n");
      systemTexts.push(text);
    } else {
      contents.push({
        role: m.role === "assistant" ? "model" : "user",
        parts: convertContent(m.content),
      });
    }
  }

  const body: any = {
    contents,
    generationConfig: {
      ...(req.temperature != null ? { temperature: req.temperature } : {}),
      ...(req.max_tokens != null ? { maxOutputTokens: req.max_tokens } : {}),
      ...(req.response_format?.type === "json_object"
        ? { responseMimeType: "application/json" }
        : {}),
    },
  };
  if (systemTexts.length) {
    body.systemInstruction = { parts: [{ text: systemTexts.join("\n\n") }] };
  }
  if (req.tools && req.tools.length) {
    body.tools = convertTools(req.tools);
    if (req.tool_choice && typeof req.tool_choice === "object" && req.tool_choice.function?.name) {
      body.toolConfig = {
        functionCallingConfig: {
          mode: "ANY",
          allowedFunctionNames: [req.tool_choice.function.name],
        },
      };
    }
  }

  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const upstream = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!upstream.ok) {
    const text = await upstream.text();
    console.error("[gemini] error", upstream.status, text);
    // Mapeia 429 / 403 mantendo compatibilidade com o código que checa esses status
    return new Response(
      JSON.stringify({ error: { message: text || "Erro Gemini API" } }),
      { status: upstream.status, headers: { "Content-Type": "application/json" } },
    );
  }

  const data = await upstream.json();
  const cand = data?.candidates?.[0];
  const parts = cand?.content?.parts ?? [];
  let textContent = "";
  const toolCalls: any[] = [];
  for (const p of parts) {
    if (typeof p.text === "string") textContent += p.text;
    if (p.functionCall) {
      toolCalls.push({
        id: `call_${toolCalls.length}`,
        type: "function",
        function: {
          name: p.functionCall.name,
          arguments: JSON.stringify(p.functionCall.args ?? {}),
        },
      });
    }
  }

  const message: any = { role: "assistant", content: textContent || null };
  if (toolCalls.length) message.tool_calls = toolCalls;

  if (req.stream) {
    const sse =
      `data: ${JSON.stringify({ choices: [{ delta: { content: textContent } }] })}\n\n` +
      `data: [DONE]\n\n`;
    return new Response(sse, {
      headers: { "Content-Type": "text/event-stream" },
    });
  }

  const openaiResp = {
    id: "chatcmpl-gemini",
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model: req.model,
    choices: [{
      index: 0,
      message,
      finish_reason: typeof cand?.finishReason === "string"
        ? cand.finishReason.toLowerCase()
        : "stop",
    }],
  };

  return new Response(JSON.stringify(openaiResp), {
    headers: { "Content-Type": "application/json" },
  });
}
