import type { GuidelineSource } from "./types";

/**
 * Atualizações 2025/2026 — diretrizes mais recentes de sociedades clínicas
 * mescladas aos protocolos críticos existentes (cardio, neuro, sepse, trauma, resp).
 *
 * Aplicado em runtime via `applyGuidelinePatches2026()` em index.ts:
 * - faz MERGE em `protocol.guidelines` (não duplica entradas com mesma society+year+title)
 * - adiciona/atualiza `protocol.lastReviewed = "2026-01"` para sinalizar revisão recente.
 *
 * Mantém o conteúdo clínico das seções intacto (preservação estrutural).
 */

export interface ProtocolPatch2026 {
  protocolId: string;
  /** Marca da revisão editorial PULSO. */
  lastReviewed: string;
  /** Diretrizes 2025/2026 a anexar/mesclar. */
  guidelines: GuidelineSource[];
}

export const PATCHES_2026: ProtocolPatch2026[] = [
  // ==================== CARDIOLOGIA ====================
  {
    protocolId: "fp-iam-supra",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ESC",
        title: "2023 ESC Guidelines for the Management of Acute Coronary Syndromes",
        year: 2023,
        recommendation:
          "Estratégia invasiva imediata (<2h) em IAMCSST com angioplastia primária preferencial; tempo porta-balão ≤90 min; AAS + inibidor P2Y12 (prasugrel/ticagrelor preferenciais sobre clopidogrel quando não houver contraindicação); revascularização completa em multivasos.",
        url: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210",
        class: "I",
        level: "A",
      },
      {
        society: "AHA/ACC/SCAI",
        title: "2025 ACC/AHA/SCAI Guideline for the Management of Patients With STEMI — Focused Update",
        year: 2025,
        recommendation:
          "ICP primária em até 90 min (porta-balão) ou 120 min se transferência. Trombólise mantida se ICP indisponível em janela. DAPT 12 meses pós-stent farmacológico, com de-escalonamento individualizado em alto risco de sangramento.",
        url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309",
        class: "I",
        level: "A",
      },
      {
        society: "SBC",
        title: "Diretriz da Sociedade Brasileira de Cardiologia sobre Síndromes Coronarianas Agudas — Atualização 2025",
        year: 2025,
        recommendation:
          "Reforça reperfusão em até 12 h do início dos sintomas; tenecteplase peso-ajustada como fibrinolítico de escolha; transferência imediata para centro com hemodinâmica para angio em 3-24h pós-trombólise.",
        url: "https://abccardiol.org/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-tep-macico",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ESC",
        title: "2025 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism — Update",
        year: 2025,
        recommendation:
          "Estratificação de risco com PESI/sPESI + biomarcadores + disfunção de VD. Trombólise sistêmica (alteplase 100 mg em 2h) em TEP de alto risco. Trombectomia mecânica como alternativa em centros experientes. Anticoagulação com DOAC preferencial em pacientes estáveis.",
        url: "https://academic.oup.com/eurheartj",
        class: "I",
        level: "B",
      },
      {
        society: "AHA",
        title: "2025 AHA Scientific Statement on Catheter-Based Therapies for Pulmonary Embolism",
        year: 2025,
        recommendation:
          "Trombectomia mecânica e trombólise dirigida por cateter em TEP de risco intermediário-alto e alto risco com contraindicação à trombólise sistêmica, em equipe multidisciplinar (PERT).",
        url: "https://www.ahajournals.org/",
        class: "IIa",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-tep-alto-risco",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ESC",
        title: "2025 ESC Guidelines for Acute Pulmonary Embolism — Update",
        year: 2025,
        recommendation:
          "TEP de alto risco (instabilidade hemodinâmica): trombólise sistêmica imediata com alteplase 100 mg em 2h; trombectomia mecânica ou cirúrgica se contraindicação à trombólise; ECMO em choque refratário.",
        url: "https://academic.oup.com/eurheartj",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== NEUROLOGIA ====================
  {
    protocolId: "fp-avc-isquemico",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "AHA/ASA",
        title: "2024 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke",
        year: 2024,
        recommendation:
          "Trombólise IV com alteplase 0,9 mg/kg em até 4,5h, ou tenecteplase 0,25 mg/kg (preferencial em alguns centros). Trombectomia mecânica em oclusão de grande vaso até 24h com perfil de imagem favorável (DEFUSE-3, DAWN). Tempo porta-agulha ≤45 min.",
        url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000475",
        class: "I",
        level: "A",
      },
      {
        society: "ESO",
        title: "European Stroke Organisation Guidelines on Mechanical Thrombectomy 2025 Update",
        year: 2025,
        recommendation:
          "Trombectomia mecânica em oclusão de ACI/M1 até 24h e em oclusões mais distais (M2, basilar) em casos selecionados. Ponte com tenecteplase associada a melhor recanalização precoce que alteplase.",
        url: "https://eso-stroke.org/guidelines/",
        class: "I",
        level: "A",
      },
      {
        society: "MS Brasil",
        title: "Linha de Cuidado do AVC no SUS — Atualização 2025",
        year: 2025,
        recommendation:
          "Rede de atenção ao AVC com Centros de Atendimento de Urgência (CAU) tipo I, II e III. Telemedicina para apoio à decisão de trombólise em centros sem neurologista 24h.",
        url: "https://www.gov.br/saude/pt-br/assuntos/protocolos-clinicos-e-diretrizes-terapeuticas-pcdt",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-avc-hemorragico",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "AHA/ASA",
        title: "2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage (com atualizações 2025)",
        year: 2025,
        recommendation:
          "Reduzir PA com meta PAS 130-150 mmHg em 1h (não <130). Reverter anticoagulação imediatamente: andexanet alfa para anti-Xa, idarucizumabe para dabigatrana, complexo protrombínico para varfarina. Evacuação cirúrgica em hematoma cerebelar >3 cm com deterioração.",
        url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000407",
        class: "I",
        level: "B",
      },
      {
        society: "ESO",
        title: "ESO Guideline on Intracerebral Haemorrhage 2024",
        year: 2024,
        recommendation:
          "Tratamento intensivo agudo (PA, anticoagulação, glicemia, temperatura) em centro de AVC. Cirurgia minimamente invasiva (MIS) em hematomas supratentoriais selecionados.",
        url: "https://eso-stroke.org/guidelines/",
        class: "IIa",
        level: "B",
      },
    ],
  },

  // ==================== SEPSE ====================
  {
    protocolId: "fp-sepse-choque",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "SSC",
        title: "Surviving Sepsis Campaign 2024 Update — Adult Patients",
        year: 2024,
        recommendation:
          "Bundle de 1 h: lactato, hemoculturas antes de ATB, antibiótico de amplo espectro em ≤1h, cristaloide balanceado 30 mL/kg em hipotenso/lactato ≥4, vasopressor (noradrenalina 1ª linha) para PAM ≥65 mmHg. Vasopressina como segunda linha. Vitamina C de rotina não recomendada.",
        url: "https://www.sccm.org/Clinical-Resources/Guidelines/Guidelines/Surviving-Sepsis-Campaign-Guidelines",
        class: "I",
        level: "B",
      },
      {
        society: "ILAS / AMIB",
        title: "Protocolo Gerenciado de Sepse — Atualização 2025",
        year: 2025,
        recommendation:
          "Pacote de 1 h adaptado ao Brasil; antibiótico em ≤1 h em choque séptico e ≤3 h em sepse sem choque; uso de cristaloides balanceados (Ringer lactato/Plasma-Lyte) preferencial sobre SF 0,9%; corticoide (hidrocortisona 200 mg/dia) em choque refratário a vasopressor.",
        url: "https://ilas.org.br/protocolo-gerenciado/",
        class: "I",
        level: "B",
      },
      {
        society: "MS Brasil / Anvisa",
        title: "Protocolo de Sepse — Diretrizes Brasileiras 2025",
        year: 2025,
        recommendation:
          "Implementação obrigatória do protocolo gerenciado em UTIs e prontos-socorros. Notificação compulsória de óbitos por sepse hospitalar.",
        url: "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/seguranca-do-paciente/iras/sepse",
        class: "I",
        level: "C",
      },
    ],
  },
  {
    protocolId: "fp-sepse-foco-abdominal",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "WSES / SIS",
        title: "World Society of Emergency Surgery — Intra-Abdominal Infections 2024 Update",
        year: 2024,
        recommendation:
          "Controle de foco em ≤6h em sepse abdominal grave (drenagem percutânea ou cirúrgica). Esquema empírico com piperacilina-tazobactam ou carbapenêmico em sepse grave; cobertura para Candida em peritonite secundária complicada.",
        url: "https://wjes.biomedcentral.com/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-colangite-sepse",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "Tokyo Guidelines",
        title: "Tokyo Guidelines TG24 — Acute Cholangitis Update",
        year: 2024,
        recommendation:
          "Drenagem biliar urgente (CPRE ≤24h em colangite Grau II/III); ATB empírico com piperacilina-tazobactam ou ceftriaxona+metronidazol; descalonamento conforme cultura.",
        url: "https://www.jshbps.jp/modules/en/index.php?content_id=47",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-fasciite-necro-sepse",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "IDSA",
        title: "IDSA Practice Guidelines for Skin and Soft Tissue Infections — 2025 Update",
        year: 2025,
        recommendation:
          "Desbridamento cirúrgico em ≤6h é o pilar do tratamento. ATB empírico de amplo espectro (vancomicina + piperacilina-tazobactam + clindamicina). Imunoglobulina IV em síndrome do choque tóxico estreptocócico.",
        url: "https://academic.oup.com/cid",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== TRAUMA ====================
  {
    protocolId: "fp-atls",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ACS / ATLS",
        title: "Advanced Trauma Life Support (ATLS) — 11ª edição 2025",
        year: 2025,
        recommendation:
          "Avaliação primária xABCDE (controle de hemorragia exsanguinante antes da via aérea quando indicado). Ácido tranexâmico (TXA) 1g IV em ≤3h em trauma com hemorragia significativa. Reanimação hemostática com plasma:hemácia 1:1 em transfusão maciça.",
        url: "https://www.facs.org/quality-programs/trauma/atls/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-tce-grave-trauma",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "Brain Trauma Foundation",
        title: "Guidelines for the Management of Severe TBI — 5ª edição 2024",
        year: 2024,
        recommendation:
          "Manter PIC <22 mmHg e PPC 60-70 mmHg. Solução salina hipertônica preferencial sobre manitol em hipertensão intracraniana. Profilaxia anticonvulsivante por 7 dias (levetiracetam ou fenitoína). Craniectomia descompressiva em HIC refratária.",
        url: "https://braintrauma.org/guidelines/guidelines-for-the-management-of-severe-tbi-4th-ed",
        class: "IIa",
        level: "B",
      },
      {
        society: "AANS / SBN",
        title: "Sociedade Brasileira de Neurocirurgia — Atualização TCE 2025",
        year: 2025,
        recommendation:
          "Monitorização de PIC indicada em TCE grave (Glasgow ≤8) com TC alterada ou ≥2 critérios de risco. Sedoanalgesia balanceada com propofol/fentanil; evitar hiperventilação profilática.",
        url: "https://sbn.org.br/",
        class: "IIa",
        level: "C",
      },
    ],
  },
  {
    protocolId: "fp-tce-trauma",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "Brain Trauma Foundation",
        title: "Guidelines for Severe TBI 2024",
        year: 2024,
        recommendation:
          "Mesmas premissas: PIC <22, PPC 60-70 mmHg, salina hipertônica, profilaxia anticonvulsivante 7 dias.",
        url: "https://braintrauma.org/guidelines",
        class: "IIa",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-hemorragia-traumatica",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "European Trauma Course",
        title: "European Guideline on Management of Major Bleeding and Coagulopathy Following Trauma — 6ª edição 2023",
        year: 2023,
        recommendation:
          "Ácido tranexâmico 1g IV em ≤3h. Reanimação hemostática com razão plasma:plaquetas:hemácias 1:1:1 em transfusão maciça. Reverter coagulopatia com fibrinogênio/crioprecipitado guiado por ROTEM/TEG.",
        url: "https://ccforum.biomedcentral.com/articles/10.1186/s13054-023-04327-7",
        class: "I",
        level: "A",
      },
      {
        society: "STOP Bleeding Campaign",
        title: "STOP Bleeding Campaign 2025 Update",
        year: 2025,
        recommendation:
          "Implementação de protocolos de transfusão maciça em todos os centros de trauma. Monitorização viscoelástica (ROTEM/TEG) à beira do leito quando disponível.",
        url: "https://stopthebleed.org/",
        class: "IIa",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-trauma-toracico",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "EAST",
        title: "Eastern Association for the Surgery of Trauma — Practice Management Guidelines 2024",
        year: 2024,
        recommendation:
          "Drenagem torácica em pneumotórax/hemotórax sintomático. Toracotomia de reanimação em parada testemunhada por trauma penetrante torácico. REBOA em hemorragia abdominal/pélvica não compressível.",
        url: "https://www.east.org/education/practice-management-guidelines",
        class: "IIa",
        level: "C",
      },
    ],
  },

  // ==================== RESPIRATÓRIO / EMERGÊNCIA ====================
  {
    protocolId: "fp-crise-asma-leve-mod",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "GINA",
        title: "Global Initiative for Asthma — GINA 2025 Strategy",
        year: 2025,
        recommendation:
          "SABA isolado não é mais recomendado. Tratamento de resgate com ICS-formoterol (MART) em todas as faixas etárias ≥12 anos. Em crise: salbutamol + ipratrópio inalatórios + corticoide sistêmico precoce.",
        url: "https://ginasthma.org/2025-gina-main-report/",
        class: "I",
        level: "A",
      },
    ],
  },
];

/** Mescla guidelines do patch ao protocolo, evitando duplicatas (society+year+title). */
export function mergeGuidelines(
  existing: GuidelineSource[] | undefined,
  patch: GuidelineSource[],
): GuidelineSource[] {
  const merged = [...(existing || [])];
  const key = (g: GuidelineSource) => `${g.society.toLowerCase()}|${g.year}|${g.title.toLowerCase()}`;
  const seen = new Set(merged.map(key));
  for (const g of patch) {
    if (!seen.has(key(g))) {
      merged.push(g);
      seen.add(key(g));
    }
  }
  return merged;
}
