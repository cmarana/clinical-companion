import { toast } from "sonner";
import type { ClinicalAiErrorCode } from "./clinicalAiStream";

const USAGE_URL = "https://lovable.dev/settings/workspace/usage";

/**
 * Toast padronizado para erros da IA clínica.
 * Em caso de 402 (créditos esgotados), inclui um botão de ação que
 * leva o admin direto para a página de Usage do workspace Lovable.
 */
export function showClinicalAiError(message: string, code?: ClinicalAiErrorCode) {
  if (code === "credits") {
    toast.error(message, {
      duration: 10000,
      action: {
        label: "Adicionar créditos",
        onClick: () => window.open(USAGE_URL, "_blank", "noopener,noreferrer"),
      },
    });
    return;
  }
  toast.error(message, { duration: 6000 });
}
