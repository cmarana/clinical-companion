import { toast } from "sonner";

/**
 * Friendly error messages for common API/network failures.
 * Wraps any async call and shows a toast on failure.
 */

const FRIENDLY_MESSAGES: Record<string, string> = {
  "Failed to fetch": "Sem conexão com a internet. Verifique sua rede.",
  "NetworkError": "Erro de rede. Verifique sua conexão.",
  "Load failed": "Falha ao carregar dados. Tente novamente.",
  "TypeError: Failed to fetch": "Servidor indisponível. Tente novamente em instantes.",
  "PGRST": "Erro ao acessar o banco de dados.",
  "JWT": "Sessão expirada. Faça login novamente.",
  "401": "Sessão expirada. Faça login novamente.",
  "403": "Sem permissão para esta ação.",
  "404": "Recurso não encontrado.",
  "429": "Muitas requisições. Aguarde um momento.",
  "500": "Erro interno do servidor. Tente novamente.",
  "502": "Servidor temporariamente indisponível.",
  "503": "Serviço em manutenção. Tente em alguns minutos.",
};

function getFriendlyMessage(error: unknown): string {
  const msg = error instanceof Error ? error.message : String(error);
  
  for (const [key, friendly] of Object.entries(FRIENDLY_MESSAGES)) {
    if (msg.includes(key)) return friendly;
  }
  
  return "Algo deu errado. Tente novamente.";
}

/**
 * Wrap an async operation with friendly error handling.
 * Returns [data, error] tuple.
 */
export async function safeAsync<T>(
  fn: () => Promise<T>,
  options?: { silent?: boolean; fallbackMessage?: string }
): Promise<[T | null, Error | null]> {
  try {
    const result = await fn();
    return [result, null];
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    if (!options?.silent) {
      toast.error(options?.fallbackMessage || getFriendlyMessage(error));
    }
    return [null, error];
  }
}

/**
 * Show a friendly error toast for Supabase errors.
 */
export function handleSupabaseError(error: { message?: string; code?: string } | null, context?: string) {
  if (!error) return;
  
  const prefix = context ? `${context}: ` : "";
  const msg = error.message || "Erro desconhecido";
  
  const friendly = getFriendlyMessage(new Error(msg));
  toast.error(prefix + friendly);
}
