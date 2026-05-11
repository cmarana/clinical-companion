// Helper compartilhado para gerar embeddings via Google text-embedding-004 (gratuito).
// Dimensão: 768. Usado por embed-text, ingest-medical-knowledge e medical-rag-query.

const EMBED_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent";

export async function embedText(text: string): Promise<number[]> {
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) throw new Error("GEMINI_API_KEY não configurada");
  const clean = (text || "").trim().slice(0, 8000);
  if (!clean) throw new Error("Texto vazio");

  const res = await fetch(`${EMBED_URL}?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "models/text-embedding-004",
      content: { parts: [{ text: clean }] },
    }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Embedding API ${res.status}: ${t}`);
  }
  const data = await res.json();
  const values = data?.embedding?.values;
  if (!Array.isArray(values)) throw new Error("Resposta de embedding inválida");
  return values;
}

export async function embedBatch(texts: string[]): Promise<number[][]> {
  const out: number[][] = [];
  for (const t of texts) {
    out.push(await embedText(t));
    // Rate-limit suave (gratuito ~1500 RPM)
    await new Promise((r) => setTimeout(r, 80));
  }
  return out;
}
