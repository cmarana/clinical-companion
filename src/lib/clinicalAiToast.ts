import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { ClinicalAiErrorCode } from "./clinicalAiStream";

const USAGE_URL = "https://lovable.dev/settings/workspace/usage";

/**
 * Mensagens "amigáveis" mostradas ao usuário final (não-admin).
 * Esconde detalhes técnicos como "créditos esgotados" — isso é
 * responsabilidade do desenvolvedor/admin, não do médico usando o app.
 */
const FRIENDLY_MESSAGES: Partial<Record<ClinicalAiErrorCode, string>> = {
  credits: "A IA clínica está temporariamente indisponível. Tente novamente em instantes.",
  server: "A IA clínica está temporariamente indisponível. Tente novamente em instantes.",
  rate_limit: "Muitas solicitações. Aguarde alguns segundos e tente novamente.",
  auth: "Sua sessão expirou. Faça login novamente.",
};

let cachedIsAdmin: boolean | null = null;

async function checkIsAdmin(): Promise<boolean> {
  if (cachedIsAdmin !== null) return cachedIsAdmin;
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      cachedIsAdmin = false;
      return false;
    }
    const { data } = await supabase.rpc("has_role", {
      _user_id: user.id,
      _role: "admin",
    });
    cachedIsAdmin = !!data;
    return cachedIsAdmin;
  } catch {
    cachedIsAdmin = false;
    return false;
  }
}

/**
 * Toast padronizado para erros da IA clínica.
 *
 * - Usuário final: vê apenas mensagem amigável e genérica.
 * - Admin: vê a mensagem técnica completa e, em caso de 402,
 *   um botão de ação que leva direto à página de Usage do workspace Lovable.
 */
export async function showClinicalAiError(message: string, code?: ClinicalAiErrorCode) {
  const isAdmin = await checkIsAdmin();

  if (!isAdmin) {
    const friendly = (code && FRIENDLY_MESSAGES[code]) || "Algo deu errado. Tente novamente.";
    toast.error(friendly, { duration: 5000 });
    return;
  }

  // Admin: mensagem técnica + ação de billing quando aplicável
  if (code === "credits") {
    toast.error(`[Admin] ${message}`, {
      duration: 10000,
      description: "Apenas administradores veem este aviso.",
      action: {
        label: "Adicionar créditos",
        onClick: () => window.open(USAGE_URL, "_blank", "noopener,noreferrer"),
      },
    });
    return;
  }
  toast.error(message, { duration: 6000 });
}

/** Limpa o cache de admin (ex.: após logout). */
export function resetClinicalAiAdminCache() {
  cachedIsAdmin = null;
}
