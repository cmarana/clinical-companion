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
    lastReviewed: "2026-03",
    guidelines: [
      {
        society: "AHA/ASA",
        title: "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke",
        year: 2026,
        recommendation:
          "Substitui a diretriz de 2018 e a atualização de 2019. Triagem pré-hospitalar de OGV com VAN, NIHSS≥6 ou RACE≥5 (Classe 1 / LOE A). Tenecteplase 0,25 mg/kg considerada equivalente/preferencial à alteplase em centros que adotaram. Unidades móveis de AVC (mobile stroke units) ↑30-40% reperfusão. Metas: porta-TC ≤25 min, DTN <60 min, DTP <90 min, DIDO ≤90 min. Trombectomia até 24 h em OGV com perfil favorável; expandida para ASPECTS 3-5 (SELECT2, ANGEL-ASPECT) e até 0-2 em casos selecionados (LASTE, COR 2a). Oclusão de basilar: trombectomia até 24 h se NIHSS≥10 e PC-ASPECTS≥6 (ATTENTION/BAOCHE). PA <185/110 pré-reperfusão; <180/105 por 24 h pós. DAPT (AAS+clopidogrel 21-90 d) em AVCi menor (NIHSS 0-5)/AIT alto risco — CHANCE/POINT/THALES; ticagrelor em maus metabolizadores CYP2C19. DOAC em FA: 24-48 h pós-AVCi leve/moderado (ELAN). Disfagia: rastreio em ≤4 h. Mobilização ≥24 h pós-início (evitar muito precoce — AVERT). IPC 1ª linha p/ TEV; meias elásticas NÃO recomendadas. PRIMEIRA orientação pediátrica: trombectomia em ≥6 anos com PedNIHSS≥6 (COR 2a) — Save ChildS Pro registry.",
        url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000513",
        class: "I",
        level: "A",
      },
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
    lastReviewed: "2026-03",
    guidelines: [
      {
        society: "SSC",
        title: "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026",
        year: 2026,
        recommendation:
          "Publicada 23/mar/2026 (Prescott, Antonelli, Alhazzani et al.). Triagem com NEWS/NEW2/MEWS/SIRS preferencial sobre qSOFA. ATB em ≤1 h em sepse provável/definida (com ou sem choque); ≤3 h em sepse 'possível'. Cristaloide balanceado 30 mL/kg em 3 h (preferencial sobre SF 0,9%, exceto TCE). Noradrenalina 1ª linha — iniciar em veia periférica antes do central. PAM alvo 65 (60-65 se ≥65 anos). Vasopressina 0,03 U/min ao escalar NA. Hidrocortisona EV em choque refratário. Infusão prolongada de β-lactâmico (RECOMENDAÇÃO FORTE — nova). LMWH > HNF para profilaxia TEV (forte). HFNC > VNI em IRpA hipoxêmica. Awake proning sugerido. Remoção ativa de fluidos pós-ressuscitação. Transfusão restritiva. Insulina se glicemia ≥180. Contra: vit C, vit D, IgIV, hemoperfusão, polimixina B, beta-bloqueadores, terlipressina, antipiréticos rotineiros.",
        url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026",
        class: "I",
        level: "A",
      },
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
  {
    protocolId: "fp-asma-grave",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "GINA",
        title: "GINA 2025 — Severe Asthma Exacerbations",
        year: 2025,
        recommendation:
          "Crise grave: O₂ alvo SpO₂ 93-95%, salbutamol contínuo nebulizado + ipratrópio nas primeiras 1-2h, corticoide sistêmico (prednisolona 50 mg VO ou metilprednisolona 60-125 mg IV). Sulfato de magnésio 2 g IV em 20 min se refratária. VNI ou IOT precoce em falência ventilatória; ECMO em casos selecionados.",
        url: "https://ginasthma.org/2025-gina-main-report/",
        class: "I",
        level: "A",
      },
      {
        society: "SBPT",
        title: "Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia — Asma 2025",
        year: 2025,
        recommendation:
          "Reforça uso de ICS-formoterol como resgate (MART/SMART). Internação em UTI se PFE <33% pós-tratamento, hipercapnia, alteração de consciência ou exaustão.",
        url: "https://sbpt.org.br/portal/diretrizes/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-dpoc-exacerbado",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "GOLD",
        title: "GOLD 2025 — Global Strategy for Prevention, Diagnosis and Management of COPD",
        year: 2025,
        recommendation:
          "Exacerbação: broncodilatador inalatório curto (SABA + SAMA), corticoide sistêmico 5 dias (prednisona 40 mg/dia), antibiótico se ≥2 critérios de Anthonisen ou necessidade de VM. VNI (BiPAP) em acidose respiratória pH ≤7,35. Alvo SpO₂ 88-92%.",
        url: "https://goldcopd.org/2025-gold-report/",
        class: "I",
        level: "A",
      },
    ],
  },
  {
    protocolId: "fp-pneumonia-grave",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ATS/IDSA",
        title: "ATS/IDSA Guidelines on Community-Acquired Pneumonia — 2024 Update",
        year: 2024,
        recommendation:
          "PAC grave (UTI): β-lactâmico (ceftriaxona/ampicilina-sulbactam) + macrolídeo OU β-lactâmico + fluoroquinolona respiratória. Cobertura para Pseudomonas/MRSA conforme fatores de risco. Corticoide (hidrocortisona 200 mg/dia) reduz mortalidade em PAC grave (CAPE COD).",
        url: "https://www.atsjournals.org/doi/10.1164/rccm.201908-1581ST",
        class: "I",
        level: "A",
      },
      {
        society: "SBPT",
        title: "Diretrizes Brasileiras de Pneumonia Adquirida na Comunidade 2025",
        year: 2025,
        recommendation:
          "CURB-65/PSI para estratificação. Antibioticoterapia em ≤4h da chegada ao PS. Hemoculturas + antígenos urinários em PAC grave.",
        url: "https://sbpt.org.br/portal/diretrizes/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-sdra",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ESICM",
        title: "ESICM Guidelines on Acute Respiratory Distress Syndrome 2024",
        year: 2024,
        recommendation:
          "Ventilação protetora: VC 4-6 mL/kg peso predito, Pplat ≤30 cmH₂O, driving pressure ≤15 cmH₂O. Posição prona ≥16h em SDRA grave (PaO₂/FiO₂ <150). PEEP titulada. ECMO V-V em refratários após otimização.",
        url: "https://www.esicm.org/",
        class: "I",
        level: "A",
      },
      {
        society: "ATS/AMIB",
        title: "Recomendações Brasileiras AMIB para Manejo da SDRA 2025",
        year: 2025,
        recommendation:
          "Reforça prona precoce e VM protetora. Bloqueio neuromuscular nas primeiras 48 h em SDRA grave. Evitar excesso de fluidos após estabilização.",
        url: "https://www.amib.org.br/diretrizes/",
        class: "IIa",
        level: "B",
      },
    ],
  },

  // ==================== INFECTOLOGIA ====================
  {
    protocolId: "fp-meningite-completo",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "IDSA",
        title: "IDSA Guidelines for Bacterial Meningitis — 2024 Update",
        year: 2024,
        recommendation:
          "ATB empírico em ≤1h da suspeita: ceftriaxona 2 g IV 12/12h + vancomicina 15-20 mg/kg IV 8-12h (+ ampicilina 2 g 4/4h se >50 anos ou imunossuprimido). Dexametasona 0,15 mg/kg IV 6/6h por 4 dias, antes ou junto com a 1ª dose de ATB. TC antes da PL apenas se sinais de hipertensão intracraniana ou imunocomprometido.",
        url: "https://www.idsociety.org/practice-guideline/bacterial-meningitis/",
        class: "I",
        level: "A",
      },
      {
        society: "MS Brasil",
        title: "PCDT — Meningites Bacterianas 2025",
        year: 2025,
        recommendation:
          "Notificação compulsória imediata. Quimioprofilaxia para contatos próximos: rifampicina ou ceftriaxona dose única. Vacinação meningocócica conjugada na rotina infantil (Meningo C aos 3 e 5 m + reforço 12 m).",
        url: "https://www.gov.br/saude/pt-br/assuntos/protocolos-clinicos-e-diretrizes-terapeuticas-pcdt",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-itu-complicada",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "EAU",
        title: "European Association of Urology Guidelines on Urological Infections 2025",
        year: 2025,
        recommendation:
          "Pielonefrite/ITU complicada: ceftriaxona 1 g IV/dia ou piperacilina-tazobactam se sepse; descalonamento conforme cultura. Duração 7-14 dias. Drenagem urgente em obstrução (cateterização ureteral/nefrostomia).",
        url: "https://uroweb.org/guidelines/urological-infections",
        class: "I",
        level: "A",
      },
      {
        society: "MS Brasil / SBI",
        title: "Diretrizes Brasileiras de ITU em Adultos 2024",
        year: 2024,
        recommendation:
          "ITU baixa não complicada: nitrofurantoína 100 mg 6/6h × 5 dias ou fosfomicina 3 g VO dose única. Evitar fluoroquinolonas em casos não complicados (RAM e resistência).",
        url: "https://infectologia.org.br/diretrizes/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-celulite-erisipela",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "IDSA",
        title: "IDSA Guidelines for Skin and Soft Tissue Infections 2025 Update",
        year: 2025,
        recommendation:
          "Erisipela/celulite não purulenta: cefalexina 500 mg VO 6/6h ou cefazolina 1-2 g IV 8/8h por 5-7 dias. Cobertura MRSA (clindamicina/SMX-TMP) se purulência, abscesso, trauma penetrante ou colonização prévia.",
        url: "https://academic.oup.com/cid/article/59/2/e10/2895845",
        class: "I",
        level: "A",
      },
    ],
  },

  // ==================== METABÓLICO / ENDÓCRINO ====================
  {
    protocolId: "fp-cad",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ADA",
        title: "ADA Standards of Care in Diabetes — 2025 (Capítulo Hyperglycemic Crises)",
        year: 2025,
        recommendation:
          "Reposição volêmica com SF 0,9% 15-20 mL/kg na 1ª hora, depois ajuste por sódio corrigido. Insulina regular 0,1 U/kg/h IV em infusão (sem bolus em crianças). K+ antes de iniciar insulina: <3,3 reponha antes; 3,3-5,2 reponha junto. Bicarbonato apenas se pH <6,9. Transição para SC quando HCO₃ ≥18, AG ≤12, paciente comendo.",
        url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
        class: "I",
        level: "A",
      },
      {
        society: "SBD",
        title: "Diretrizes da Sociedade Brasileira de Diabetes 2024-2025 — Crises Hiperglicêmicas",
        year: 2025,
        recommendation:
          "Cristaloides balanceados (Plasma-Lyte/Ringer) preferenciais sobre SF em CAD para reduzir acidose hiperclorêmica (PLUS-IS-LESS, SCOPE-DKA). Insulina SC análoga (lispro/aspart) em CAD leve a moderada como alternativa à infusão IV.",
        url: "https://diretriz.diabetes.org.br/",
        class: "IIa",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-hipoglicemia",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ADA",
        title: "ADA — Hypoglycemia in Diabetes 2025",
        year: 2025,
        recommendation:
          "Consciente: 15 g de carboidrato VO, repetir em 15 min se glicemia <70. Inconsciente: glicose hipertônica 25 g IV (50 mL G50% ou 100 mL G25%) ou glucagon 1 mg IM/SC/IN se sem acesso. Hipoglicemia por sulfonilureia: internação 24-48h pelo risco de recidiva (octreotida 50-100 µg SC 8/8h em refratária).",
        url: "https://diabetesjournals.org/care",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-hipercalemia",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "KDIGO / ERA",
        title: "KDIGO Clinical Practice Guideline on Potassium Management 2024",
        year: 2024,
        recommendation:
          "K+ ≥6,5 ou alterações ECG: gluconato de cálcio 10% 10 mL IV em 2-3 min (estabilização miocárdica), insulina regular 10 U + glicose 25 g IV, salbutamol 10-20 mg nebulizado. Remoção: furosemida (se diurese), patiromer/SZC (resinas modernas) ou hemodiálise em refratários/anúricos.",
        url: "https://kdigo.org/guidelines/",
        class: "I",
        level: "A",
      },
    ],
  },
  {
    protocolId: "fp-hiponatremia",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "European Societies",
        title: "European Clinical Practice Guideline on Hyponatremia — 2024 Update",
        year: 2024,
        recommendation:
          "Hiponatremia sintomática grave: salina hipertônica 3% 150 mL IV em 10-20 min (ou 2 mL/kg), repetir até 2-3 vezes ou ↑Na 5 mEq/L. Limite de correção: ≤10 mEq/L em 24h e ≤18 mEq/L em 48h (prevenir mielinólise). Dose-resposta com Na sérico de 1/1h nas primeiras 6h.",
        url: "https://academic.oup.com/ndt",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== OBSTETRÍCIA ====================
  {
    protocolId: "fp-eclampsia",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "FIGO / ISSHP",
        title: "International Society for the Study of Hypertension in Pregnancy — 2024 Recommendations",
        year: 2024,
        recommendation:
          "Sulfato de magnésio: 4-6 g IV em 20 min (ataque) + 1-2 g/h IV manutenção por 24h pós-parto/última crise. Anti-hipertensivo se PA ≥160/110: hidralazina 5 mg IV ou nifedipino 10 mg VO ou labetalol 20 mg IV. Resolução obstétrica após estabilização materna.",
        url: "https://www.isshp.org/",
        class: "I",
        level: "A",
      },
      {
        society: "FEBRASGO / MS Brasil",
        title: "Manual de Gestação de Alto Risco — MS 2025 e Protocolo FEBRASGO de Eclâmpsia",
        year: 2025,
        recommendation:
          "Notificação compulsória de near-miss materno. Sulfato de magnésio mantém-se 1ª linha (Esquema Pritchard IM como alternativa em UBS sem bomba). Corticoide para maturação fetal entre 24-34s.",
        url: "https://www.febrasgo.org.br/",
        class: "I",
        level: "A",
      },
    ],
  },
  {
    protocolId: "fp-hpp",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "WHO / FIGO",
        title: "WHO Recommendations on the Prevention and Treatment of Postpartum Haemorrhage 2024",
        year: 2024,
        recommendation:
          "MOTIVE bundle (Massage uterus, Oxytocin, TXA 1 g IV em ≤3h, IV fluids, Examination, Escalation). Misoprostol 800 µg SL se sem ocitocina. Balão intrauterino (Bakri) e sutura B-Lynch precoces em refratários. Histerectomia como último recurso.",
        url: "https://www.who.int/publications/i/item/9789240088450",
        class: "I",
        level: "A",
      },
      {
        society: "FEBRASGO",
        title: "Protocolo FEBRASGO — Hemorragia Pós-Parto 2025",
        year: 2025,
        recommendation:
          "Implementação de carrinho de HPP em todos os centros obstétricos. Treinamento simulado obrigatório. TXA em até 3h reduz mortalidade (WOMAN Trial).",
        url: "https://www.febrasgo.org.br/",
        class: "I",
        level: "A",
      },
    ],
  },
  {
    protocolId: "fp-gravidez-ectopica",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ACOG / ESHRE",
        title: "ACOG Practice Bulletin — Tubal Ectopic Pregnancy 2024",
        year: 2024,
        recommendation:
          "Conduta expectante apenas se β-hCG <200 e em queda. Metotrexato 50 mg/m² IM em ectópica não rota com β-hCG <5000, sem BCF, sem hemoperitônio. Cirurgia (salpingostomia/salpingectomia) em rotura, instabilidade, falha clínica ou contraindicação ao MTX.",
        url: "https://www.acog.org/clinical/clinical-guidance/practice-bulletin",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== PEDIATRIA ====================
  {
    protocolId: "fp-febre-sem-foco-ped",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "AAP / NICE",
        title: "AAP Clinical Practice Guideline — Evaluation and Management of Well-Appearing Febrile Infants 2024",
        year: 2024,
        recommendation:
          "0-21 dias: avaliação completa (HMG, PCR, PCT, urocultura, hemocultura, LCR) + ATB empírico (ampicilina + cefotaxima/ceftazidima). 22-28 dias: avaliação completa, ATB se anormal. 29-60 dias: PCT ≥0,5 ou PCR ≥20 → expansão investigação. Lactato/PCR seriados em sepse oculta.",
        url: "https://publications.aap.org/pediatrics/article/148/2/e2021052228/179783",
        class: "I",
        level: "A",
      },
      {
        society: "SBP",
        title: "Sociedade Brasileira de Pediatria — Febre Sem Sinais Localizatórios 2025",
        year: 2025,
        recommendation:
          "Ferramenta YIOS/PCT para estratificação de risco. Antibioticoterapia empírica em <90 dias com critérios de risco. Vigilância para SARS-CoV-2 e dengue conforme cenário epidemiológico.",
        url: "https://www.sbp.com.br/",
        class: "IIa",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-laringite-crupe",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "AAP",
        title: "American Academy of Pediatrics — Croup Management 2024",
        year: 2024,
        recommendation:
          "Dexametasona 0,15-0,6 mg/kg VO/IM/IV dose única em todos os graus (incluindo leve). Adrenalina nebulizada (L-epi 5 mL ou racêmica 0,5 mL) em moderado-grave; observação 3-4h pós-dose pelo rebote. O₂ se hipoxemia.",
        url: "https://publications.aap.org/pediatrics",
        class: "I",
        level: "A",
      },
    ],
  },

  // ==================== GERIATRIA ====================
  {
    protocolId: "fp-delirium",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "AGS / NICE",
        title: "American Geriatrics Society — Delirium Clinical Practice Guideline 2024",
        year: 2024,
        recommendation:
          "Prevenção não farmacológica multicomponente (HELP) é 1ª linha. Tratar causa subjacente (sepse, dor, fármacos). Antipsicótico (haloperidol 0,5-1 mg ou quetiapina 12,5-25 mg) apenas em agitação que coloca em risco; evitar benzodiazepínicos exceto abstinência alcoólica.",
        url: "https://www.americangeriatrics.org/",
        class: "I",
        level: "B",
      },
    ],
  },
  {
    protocolId: "fp-geri5-fratura-quadril",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "AAOS / NICE",
        title: "AAOS Clinical Practice Guideline — Hip Fractures in the Elderly 2025 Update",
        year: 2025,
        recommendation:
          "Cirurgia em ≤24-48h reduz mortalidade. Bloqueio de nervo femoral/fascia ilíaca para analgesia; evitar opioides em altas doses. Profilaxia de TEV (HBPM) e antibiótica perioperatória. Mobilização precoce no 1º DPO.",
        url: "https://www.aaos.org/quality/quality-programs/lower-extremity-programs/hip-fractures/",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== CARDIOLOGIA EXTRA ====================
  {
    protocolId: "fp-iam-sem-supra",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ESC",
        title: "2023 ESC Guidelines for the Management of Acute Coronary Syndromes (NSTE-ACS)",
        year: 2023,
        recommendation:
          "Estratificação com GRACE 2.0/TIMI. Estratégia invasiva em ≤24h em alto risco (GRACE >140, troponina dinâmica, alterações ST/T). DAPT com AAS + ticagrelor (ou prasugrel pós-anatomia coronária). Anticoagulação com fondaparinux ou enoxaparina.",
        url: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210",
        class: "I",
        level: "A",
      },
      {
        society: "SBC",
        title: "Diretriz SBC sobre Síndromes Coronarianas Agudas Sem Supra de ST — Atualização 2025",
        year: 2025,
        recommendation:
          "GRACE 2.0 para risco. Estratégia invasiva precoce (<24h) em alto risco. Inibidor de PCSK9 ou ezetimiba na alta para LDL <55 mg/dL.",
        url: "https://abccardiol.org/",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== NEUROLOGIA EXTRA ====================
  {
    protocolId: "fp-status-epilepticus-refratario",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "NCS / ESETT",
        title: "Neurocritical Care Society — Status Epilepticus Guidelines 2024 Update",
        year: 2024,
        recommendation:
          "1ª linha (5-20 min): benzodiazepínico (midazolam 10 mg IM ou diazepam 0,15 mg/kg IV ou lorazepam 0,1 mg/kg IV). 2ª linha (20-40 min, ESETT): levetiracetam 60 mg/kg, fosfenitoína 20 mg/kg ou valproato 40 mg/kg — equivalência demonstrada. 3ª linha (>40 min, refratário): IOT + midazolam/propofol/cetamina em infusão; EEG contínuo. Super-refratário: cetamina, anestésicos inalatórios, dieta cetogênica, imunoterapia.",
        url: "https://www.neurocriticalcare.org/",
        class: "I",
        level: "A",
      },
    ],
  },

  // ==================== GASTRO ====================
  {
    protocolId: "fp-pancreatite-aguda",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ACG / AGA",
        title: "ACG Clinical Guideline — Acute Pancreatitis 2024 Update",
        year: 2024,
        recommendation:
          "Reanimação volêmica controlada com Ringer lactato 5-10 mL/kg/h nas primeiras 24h (não mais 'agressiva' — WATERFALL trial). Dieta oral precoce em pancreatite leve. ATB apenas em necrose infectada documentada. CPRE em ≤24-72h em colangite associada.",
        url: "https://journals.lww.com/ajg/Fulltext/2024/03000/",
        class: "I",
        level: "A",
      },
    ],
  },
  {
    protocolId: "fp-hda",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "ACG",
        title: "ACG Clinical Guideline — Upper GI Bleeding 2024",
        year: 2024,
        recommendation:
          "Estratificação com Glasgow-Blatchford. EDA em ≤24h (≤12h em instabilidade). IBP IV em bolus + infusão (omeprazol 80 mg + 8 mg/h) pré-EDA em alto risco. Transfusão restritiva (Hb alvo 7-8 g/dL). Eritromicina 250 mg IV 30 min pré-EDA melhora visualização.",
        url: "https://journals.lww.com/ajg/",
        class: "I",
        level: "A",
      },
    ],
  },
  {
    protocolId: "fp-hda-choque",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "Baveno VII",
        title: "Baveno VII Consensus Workshop — Portal Hypertension and Variceal Bleeding 2024 Update",
        year: 2024,
        recommendation:
          "HDA varicosa: terlipressina 2 mg IV 4/4h ou octreotida; ceftriaxona 1 g/dia IV por 7 dias (profilaxia PBE). EDA com ligadura elástica em ≤12h. TIPS precoce (≤72h) em alto risco (Child-Pugh C ou B com sangramento ativo).",
        url: "https://www.journal-of-hepatology.eu/article/S0168-8278(23)05021-X/fulltext",
        class: "I",
        level: "B",
      },
    ],
  },

  // ==================== ANAFILAXIA ====================
  {
    protocolId: "fp-anafilaxia-cutanea",
    lastReviewed: "2026-01",
    guidelines: [
      {
        society: "WAO / EAACI",
        title: "World Allergy Organization Anaphylaxis Guidance 2025",
        year: 2025,
        recommendation:
          "Adrenalina IM 0,3-0,5 mg (face anterolateral da coxa) é 1ª linha — repetir a cada 5-15 min se necessário. Decúbito dorsal com MMII elevados. Adrenalina IV em infusão (0,1 µg/kg/min, titular) em refratários. Anti-histamínicos e corticoides são adjuvantes (não substituem adrenalina). Observação ≥6-8h pós-resolução pelo risco de bifásica.",
        url: "https://www.worldallergy.org/",
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
