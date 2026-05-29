// ──────────────────────────────────────────────────────────────────────────
// Resolver de vínculos seguros entre Matriz SAMU 192 e protocolos clínicos
// reais do Pulso (src/data/fullProtocols).
//
// IDs auditados manualmente contra src/data/fullProtocols/* — todos
// existem na base atual. NÃO inventar slugs. NÃO criar rotas novas.
// ──────────────────────────────────────────────────────────────────────────

/** Normaliza string: minúsculas, sem acento, sem pontuação dupla. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Mapa manual de correspondência segura entre títulos/sinônimos da matriz SAMU
 * e o `id` real do protocolo clínico no Pulso. Cada chave é uma frase-chave
 * (já normalizada) que, se contida no título relacionado, resolve o protocolo.
 *
 * Ordem importa: padrões mais específicos vêm primeiro.
 */
const TITLE_KEYWORD_TO_FP_ID: Array<[string, string]> = [
  // PCR / Parada Cardiorrespiratória
  ["pcr pediatrica",                       "full-pcr-pediatrica-pals"],
  ["parada cardiorrespiratoria pediatrica","full-pcr-pediatrica-pals"],
  ["pcr na gestante",                      "fp-pcr-gestante"],
  ["pcr adulto",                           "fp-pcr-adulto"],
  ["parada cardiorrespiratoria",           "fp-pcr-adulto"],
  ["pcr",                                  "fp-pcr-adulto"],
  ["rcp",                                  "fp-pcr-adulto"],

  // Via aérea / IOT / SRI
  ["sequencia rapida de intubacao",        "fp-sri"],
  ["sri",                                  "fp-sri"],
  ["intubacao orotraqueal",                "fp-iot"],
  ["iot",                                  "fp-iot"],
  ["via aerea dificil",                    "fp-via-aerea-dificil"],
  ["manejo de via aerea",                  "fp-iot"],

  // Respiratório
  ["asma grave",                           "fp-asma-grave"],
  ["asma quase fatal",                     "fp-asma-grave"],
  ["dpoc exacerbado",                      "fp-dpoc-exacerbado"],

  // Sepse / Choque
  ["sepse e choque septico",               "fp-sepse-choque"],
  ["choque septico",                       "fp-sepse-choque"],
  ["sepse",                                "fp-sepse-choque"],
  ["choque hemorragico",                   "fp-choque-hemorragico"],
  ["choque cardiogenico",                  "fp-choque-cardiogenico"],
  ["choque anafilatico",                   "fp-choque-anafilatico"],
  ["choque hipovolemico",                  "fp-choque-hipovolemico"],

  // Cardiologia
  ["iam com supra",                        "fp-iam-supra"],
  ["infarto agudo do miocardio",           "fp-iam-supra"],
  ["iam sem supra",                        "fp-iam-sem-supra"],
  ["sindrome coronariana aguda",           "fp-iam-supra"],
  ["sca",                                  "fp-iam-supra"],
  ["iam",                                  "fp-iam-supra"],
  ["crise hipertensiva",                   "fp-crise-hipertensiva"],
  ["emergencia hipertensiva",              "fp-crise-hipertensiva"],
  ["urgencia hipertensiva",                "fp-crise-hipertensiva"],

  // Neuro
  ["avc hemorragico",                      "fp-avc-hemorragico"],
  ["avc isquemico",                        "fp-avc-isquemico"],
  ["acidente vascular cerebral",           "fp-avc-isquemico"],
  ["avc",                                  "fp-avc-isquemico"],
  ["estado de mal epileptico",             "fp-eme"],
  ["convulsao",                            "fp-convulsao-aguda"],
  ["crise epileptica",                     "fp-convulsao-aguda"],
  ["hipertensao intracraniana",            "fp-hic"],

  // Trauma
  ["atendimento inicial ao politraumatizado","fp-atls"],
  ["politraumatizado",                     "fp-atls"],
  ["atls",                                 "fp-atls"],
  ["pneumotorax hipertensivo",             "fp-pneumotorax-hipertensivo"],

  // Anafilaxia / Alergia
  ["anafilaxia",                           "full-anafilaxia"],

  // Metabólico
  ["cetoacidose diabetica",                "fp-cad"],
  ["cad",                                  "fp-cad"],

  // Neonatal / Pediatria
  ["reanimacao neonatal",                  "full-reanimacao-neonatal"],
  ["sepse neonatal",                       "full-sepse-neonatal"],
];

/**
 * Resolve, com segurança, o `id` real do protocolo clínico do Pulso a partir
 * do `relatedPulsoProtocolTitle` ou `relatedPulsoProtocolSlug` vindo da
 * Matriz SAMU. Retorna `undefined` quando não houver correspondência segura.
 *
 * Convenção: a página de detalhe do Pulso vive em `/full-protocols/:id`.
 */
export function resolvePulsoProtocolLink(
  title?: string | null,
  slugFromMatrix?: string | null
): string | undefined {
  // 1. Se a matriz já trouxe um caminho absoluto válido, usa direto.
  if (slugFromMatrix && slugFromMatrix.startsWith("/")) {
    return slugFromMatrix;
  }
  // 2. Se trouxe um id "fp-..." ou "full-...", monta a rota.
  if (slugFromMatrix && /^(fp-|full-)/.test(slugFromMatrix)) {
    return `/full-protocols/${slugFromMatrix}`;
  }

  if (!title) return undefined;
  const n = norm(title);

  for (const [needle, fpId] of TITLE_KEYWORD_TO_FP_ID) {
    if (n.includes(needle)) {
      return `/full-protocols/${fpId}`;
    }
  }
  return undefined;
}

/**
 * Resumo interno de auditoria — atualizado manualmente quando o mapa cresce.
 *
 * Vínculos resolvidos com slug real (palavras-chave cobertas pelo mapa): 30+
 *   PCR adulto/pediátrico/gestante, IOT, SRI, Via Aérea Difícil, Asma Grave,
 *   DPOC, Sepse, Choques (séptico/cardiogênico/hemorrágico/anafilático/hipo),
 *   IAM c/s supra, SCA, Crise Hipertensiva, AVC isq/hem, EME, Convulsão,
 *   HIC, ATLS, Pneumotórax hipertensivo, Anafilaxia, CAD, Reanimação
 *   Neonatal, Sepse Neonatal.
 *
 * Relação conceitual (título preenchido, sem id seguro): demais itens da
 *   matriz que mencionam protocolos ainda não publicados no Pulso ou cujo
 *   título genérico não permite vínculo unívoco. Aparecem como
 *   "Relacionado no Pulso: …" + botão "Abrir na matriz SAMU".
 *
 * Sem relação: itens operacionais SAMU (regulação, frota, aeromédico, etc.)
 *   e slots "Sem título no sumário".
 */
