/**
 * Master list de cobertura de protocolos críticos por setor (Emergência, UTI/CTI,
 * Urgência/UPA, Pronto-Socorro). Usada pelo painel de Auditoria de Cobertura
 * (`/admin/coverage-audit`) para sinalizar lacunas, desatualizações e diretrizes
 * mais recentes esperadas para cada cenário de risco de vida.
 *
 * Não é usada em produção clínica — apenas para auditoria interna.
 *
 * Quando criar um protocolo novo no app, adicione (ou atualize) o `expectedId`
 * abaixo para que o painel reconheça a cobertura.
 */

export type Sector = "emergencia" | "uti" | "cti" | "upa" | "ps";
export type Priority = "P1" | "P2" | "P3";

export interface CoverageEntry {
  /** ID canônico esperado no `fullProtocols` (ou prefixo de ID). */
  expectedId: string;
  /** IDs alternativos que satisfazem a cobertura. */
  aliases?: string[];
  /** Termos no título que também resolvem (case-insensitive). */
  titleHints?: string[];
  /** Título humano para exibição no painel. */
  title: string;
  /** Setores onde o protocolo é esperado. */
  sectors: Sector[];
  /** Prioridade clínica. P1 = risco de vida imediato. */
  priority: Priority;
  /** Ano alvo da revisão (`lastReviewed` mínimo aceitável). */
  targetYear: number;
  /** Sociedades/órgãos esperados como fonte (qualquer match conta). */
  expectedSocieties: string[];
  /** Diretriz de referência mais recente. */
  guidelineHint: string;
  /** Observação operacional. */
  notes?: string;
}

/** ~140 cenários críticos auditados. */
export const COVERAGE_MASTER: CoverageEntry[] = [
  // ============== CARDIOVASCULAR ==============
  { expectedId: "fp-pcr", titleHints: ["parada cardio", "PCR", "ACLS"], title: "PCR / RCP — ACLS Adulto", sectors: ["emergencia","uti","cti","upa","ps"], priority: "P1", targetYear: 2026, expectedSocieties: ["AHA","ILCOR"], guidelineHint: "AHA ACLS 2025 Focused Update" },
  { expectedId: "fp-iam-supra", title: "IAM com supra de ST (IAMCSST)", sectors: ["emergencia","upa","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESC","AHA/ACC","SBC"], guidelineHint: "ACC/AHA/SCAI 2025 STEMI Focused Update" },
  { expectedId: "fp-sca-sem-supra", aliases: ["fp-iam-sem-supra","fp-sca"], title: "SCA sem supra de ST (NSTEMI/AI)", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESC","AHA/ACC","SBC"], guidelineHint: "ESC ACS 2023 + ACC 2025 update" },
  { expectedId: "fp-eap", titleHints: ["edema agudo de pulmão","EAP","IC descompensada"], title: "EAP / IC Descompensada (perfis Forrester)", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2026, expectedSocieties: ["ESC","AHA","SBC"], guidelineHint: "ESC HF 2023 Focused Update + AHA 2024" },
  { expectedId: "fp-choque-cardiogenico", title: "Choque Cardiogênico (SCAI A–E)", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2026, expectedSocieties: ["AHA","SCAI","ESC"], guidelineHint: "AHA Cardiogenic Shock 2024" },
  { expectedId: "fp-tep", titleHints: ["tromboembolismo pulmonar","TEP","embolia pulmonar"], title: "TEP — estratificação de risco e trombólise", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESC","CHEST","AHA"], guidelineHint: "ESC PE 2019 + CHEST 2024 update" },
  { expectedId: "fp-tep-macico", title: "TEP maciço com instabilidade hemodinâmica", sectors: ["emergencia","uti","cti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESC","AHA"], guidelineHint: "ESC PE 2019 — alto risco" },
  { expectedId: "fp-disseccao-aorta", titleHints: ["dissecção","aorta"], title: "Dissecção Aguda de Aorta (Stanford A/B)", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ACC/AHA","ESC"], guidelineHint: "ACC/AHA Aortic Disease 2022" },
  { expectedId: "fp-aaa-roto", titleHints: ["aneurisma","aorta abdominal"], title: "Ruptura de Aneurisma Aórtico Abdominal", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["SVS","ESVS"], guidelineHint: "ESVS AAA 2024" },
  { expectedId: "fp-tamponamento", title: "Tamponamento Cardíaco / Pericardiocentese", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESC","AHA"], guidelineHint: "ESC Pericardial 2015 + 2024 update" },
  { expectedId: "fp-taquiarritmia", titleHints: ["taquiarritmia","TSV","FA","flutter"], title: "Taquiarritmias — instável vs. estável", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA","ESC"], guidelineHint: "ESC AF 2024 + ACLS 2025" },
  { expectedId: "fp-bradiarritmia", aliases: ["samu-bradiarritmias-bav"], title: "Bradiarritmias e BAV avançado", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA","ESC"], guidelineHint: "ACC/AHA Bradycardia 2018 + ESC Pacing 2021" },
  { expectedId: "fp-cardioversao", titleHints: ["cardioversão","desfibrilação"], title: "Cardioversão sincronizada / desfibrilação", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA"], guidelineHint: "AHA ACLS 2025" },
  { expectedId: "fp-fa-aguda", aliases: ["emergencia-fibrilacao-atrial-aguda"], title: "Fibrilação Atrial aguda — controle de FC/ritmo + anticoagulação", sectors: ["emergencia","ps","uti"], priority: "P2", targetYear: 2025, expectedSocieties: ["ESC","AHA"], guidelineHint: "ESC AF 2024" },
  { expectedId: "fp-crise-hipertensiva", titleHints: ["crise hipertensiva","emergência hipertensiva","urgência hipertensiva"], title: "Crise Hipertensiva — urgência vs. emergência", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["SBC","ACC/AHA","ESC"], guidelineHint: "Diretriz Brasileira HAS 2020 + ESC 2024" },
  { expectedId: "fp-sincope", title: "Síncope — estratificação (San Francisco/Canadian Syncope)", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2025, expectedSocieties: ["ESC","ACC/AHA"], guidelineHint: "ESC Syncope 2018" },

  // ============== RESPIRATÓRIO ==============
  { expectedId: "fp-via-aerea-dificil", titleHints: ["via aérea","intubação","IOT"], title: "Manejo de Via Aérea Difícil (DAS/PUMA)", sectors: ["emergencia","uti","cti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["DAS","ASA"], guidelineHint: "DAS 2024 + PUMA 2025" },
  { expectedId: "fp-sdra", titleHints: ["SDRA","ARDS"], title: "SDRA — Definição Global 2024 + ventilação protetora", sectors: ["uti","cti"], priority: "P1", targetYear: 2026, expectedSocieties: ["ESICM","ATS"], guidelineHint: "Global Definition of ARDS 2024" },
  { expectedId: "fp-asma-grave", titleHints: ["asma","crise asmática"], title: "Crise Asmática Grave / Quase Fatal (GINA 2025)", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["GINA","SBPT"], guidelineHint: "GINA 2025" },
  { expectedId: "fp-dpoc-exacerbacao", titleHints: ["DPOC","exacerbação"], title: "Exacerbação de DPOC (GOLD 2025)", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["GOLD","SBPT"], guidelineHint: "GOLD 2025" },
  { expectedId: "fp-pneumotorax-hipertensivo", title: "Pneumotórax Hipertensivo — descompressão", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["ATLS","BTS"], guidelineHint: "ATLS 11th Ed 2024" },
  { expectedId: "fp-hemoptise-macica", aliases: ["samu-hemoptise-macica"], title: "Hemoptise Maciça — proteção de via aérea + arteriografia", sectors: ["emergencia","uti","cti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ATS","BTS"], guidelineHint: "ATS Massive Hemoptysis 2020" },
  { expectedId: "fp-vmni", titleHints: ["VNI","ventilação não invasiva"], title: "Ventilação Não Invasiva (BiPAP/CPAP) — indicações", sectors: ["emergencia","uti","ps"], priority: "P2", targetYear: 2025, expectedSocieties: ["ERS","ATS"], guidelineHint: "ERS/ATS NIV 2017 + ATS 2023 update" },
  { expectedId: "fp-vm-protetora", titleHints: ["ventilação mecânica","ventilação protetora"], title: "Ventilação Mecânica Protetora (Vt/PEEP/Pplat)", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESICM","ATS"], guidelineHint: "ATS/ESICM 2023" },
  { expectedId: "fp-weaning", aliases: ["uti-desmame-ventilacao-mecanica-sat-sbt-tre"], title: "Desmame da Ventilação Mecânica (TRE/SAT/SBT)", sectors: ["uti","cti"], priority: "P2", targetYear: 2025, expectedSocieties: ["ATS","ERS"], guidelineHint: "ATS/ACCP Liberation 2017 + 2024 update" },
  { expectedId: "fp-pav", titleHints: ["PAV","pneumonia associada"], title: "PAV / IRAS — diagnóstico e antibioticoterapia empírica", sectors: ["uti","cti"], priority: "P2", targetYear: 2025, expectedSocieties: ["IDSA","ATS"], guidelineHint: "IDSA/ATS HAP/VAP 2016 + 2024 update" },
  { expectedId: "fp-bronquiolite", aliases: ["samu-bronquiolite-viral-aguda"], title: "Bronquiolite Viral Aguda — pediatria", sectors: ["emergencia","ps","upa","uti"], priority: "P2", targetYear: 2025, expectedSocieties: ["AAP","SBP"], guidelineHint: "AAP Bronchiolitis 2014 + SBP 2024" },

  // ============== SEPSE / INFECCIOSO ==============
  { expectedId: "fp-sepse", titleHints: ["sepse","choque séptico"], title: "Sepse e Choque Séptico (Hour-1 bundle)", sectors: ["emergencia","ps","upa","uti","cti"], priority: "P1", targetYear: 2026, expectedSocieties: ["SSC","IDSA"], guidelineHint: "SSC 2021 + 2024 Adult update" },
  { expectedId: "fp-meningite", titleHints: ["meningite","encefalite"], title: "Meningite / Encefalite Aguda — porta-antibiótico", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["IDSA","ESCMID"], guidelineHint: "IDSA Bacterial Meningitis 2024" },
  { expectedId: "fp-celulite-fasciite", titleHints: ["fasciíte","necrosante"], title: "Fasciíte Necrosante / Infecção de Tecidos Moles", sectors: ["emergencia","ps","uti","cti"], priority: "P1", targetYear: 2025, expectedSocieties: ["IDSA","WSES"], guidelineHint: "IDSA SSTI 2014 + WSES 2022" },
  { expectedId: "fp-dengue", aliases: ["samu-dengue-estratificacao-hidratacao"], title: "Dengue — estratificação A/B/C/D + hidratação", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2026, expectedSocieties: ["MS Brasil","OPAS"], guidelineHint: "MS Diretrizes Dengue 2024" },
  { expectedId: "fp-chikungunya", aliases: ["samu-chikungunya-manejo-agudo-subagudo"], title: "Chikungunya — manejo agudo e subagudo", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2026, expectedSocieties: ["MS Brasil","OPAS"], guidelineHint: "MS Chikungunya 2024" },
  { expectedId: "fp-malaria-grave", aliases: ["samu-malaria-grave-artesunato"], title: "Malária Grave — artesunato EV", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["WHO","MS Brasil"], guidelineHint: "WHO Malaria 2023 + MS 2024" },
  { expectedId: "fp-leptospirose-grave", aliases: ["samu-leptospirose-grave-weil"], title: "Leptospirose Grave (Síndrome de Weil)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["MS Brasil","WHO"], guidelineHint: "MS Leptospirose 2024" },
  { expectedId: "fp-tetano", aliases: ["samu-tetano-acidental-profilaxia-tratamento"], title: "Tétano Acidental — profilaxia e tratamento", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2025, expectedSocieties: ["MS Brasil","CDC"], guidelineHint: "MS Tétano 2023" },
  { expectedId: "fp-raiva-pep", titleHints: ["raiva","pós-exposição"], title: "Raiva — Profilaxia Pós-Exposição", sectors: ["emergencia","ps","upa"], priority: "P1", targetYear: 2025, expectedSocieties: ["MS Brasil","WHO"], guidelineHint: "MS Raiva PEP 2024" },
  { expectedId: "fp-hiv-pep", titleHints: ["PEP","HIV","exposição ocupacional"], title: "PEP HIV — exposição ocupacional/sexual", sectors: ["emergencia","ps","upa"], priority: "P1", targetYear: 2025, expectedSocieties: ["MS Brasil","CDC"], guidelineHint: "PCDT PEP 2024" },

  // ============== NEUROLÓGICO ==============
  { expectedId: "fp-avci", titleHints: ["AVC isquêmico","AVCi"], title: "AVCi — Trombólise (TNK/Alteplase) e Trombectomia", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2026, expectedSocieties: ["AHA/ASA","SBDCV"], guidelineHint: "AHA/ASA Stroke 2024 (TNK 0,25 mg/kg)" },
  { expectedId: "fp-avch", titleHints: ["AVC hemorrágico","AVCh","hemorragia intracerebral"], title: "AVCh / Hemorragia Intracerebral", sectors: ["emergencia","uti","cti"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA/ASA"], guidelineHint: "AHA/ASA ICH 2022" },
  { expectedId: "fp-hsa", titleHints: ["hemorragia subaracnoide","HSA"], title: "Hemorragia Subaracnoide (Hunt-Hess/WFNS)", sectors: ["emergencia","uti","cti"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA/ASA","NCS"], guidelineHint: "AHA/ASA SAH 2023" },
  { expectedId: "fp-mal-epileptico", titleHints: ["mal epiléptico","status epilepticus"], title: "Mal Epiléptico (Status Epilepticus) — ILAE 2025", sectors: ["emergencia","uti","cti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["ILAE","NCS"], guidelineHint: "ILAE 2025 timing/medications" },
  { expectedId: "fp-coma", aliases: ["samu-coma-aeiou-tips"], title: "Coma — abordagem AEIOU-TIPS", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["AAN"], guidelineHint: "AAN Coma 2024" },
  { expectedId: "fp-crise-miastenica", titleHints: ["miastenia","crise miastênica"], title: "Crise Miastênica", sectors: ["emergencia","uti","cti"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAN"], guidelineHint: "AAN MG 2024" },
  { expectedId: "fp-guillain-barre", titleHints: ["Guillain","SGB"], title: "Síndrome de Guillain-Barré", sectors: ["emergencia","uti"], priority: "P2", targetYear: 2024, expectedSocieties: ["AAN","EAN"], guidelineHint: "EAN/PNS GBS 2024" },
  { expectedId: "fp-delirium-uti", aliases: ["uti-delirium-cam-icu-icdsc"], title: "Delirium em UTI (CAM-ICU/ICDSC)", sectors: ["uti","cti"], priority: "P2", targetYear: 2025, expectedSocieties: ["SCCM"], guidelineHint: "PADIS 2018 + SCCM 2024 update" },

  // ============== ENDÓCRINO/METABÓLICO ==============
  { expectedId: "fp-cad", titleHints: ["cetoacidose","CAD","DKA"], title: "Cetoacidose Diabética (ADA 2026)", sectors: ["emergencia","ps","uti","upa"], priority: "P1", targetYear: 2026, expectedSocieties: ["ADA","SBD"], guidelineHint: "ADA 2026 + JBDS 2023" },
  { expectedId: "fp-ehh", titleHints: ["EHH","estado hiperosmolar"], title: "Estado Hiperosmolar Hiperglicêmico (EHH)", sectors: ["emergencia","ps","uti","upa"], priority: "P1", targetYear: 2026, expectedSocieties: ["ADA","SBD"], guidelineHint: "ADA 2026" },
  { expectedId: "fp-hipoglicemia", title: "Hipoglicemia Grave — manejo por níveis", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2026, expectedSocieties: ["ADA","SBD"], guidelineHint: "ADA 2026" },
  { expectedId: "fp-crise-tireotoxica", titleHints: ["tireotóxica","tempestade tireoidiana"], title: "Crise Tireotóxica (Burch-Wartofsky)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["ATA"], guidelineHint: "ATA Hyperthyroidism 2024" },
  { expectedId: "fp-coma-mixedematoso", aliases: ["samu-coma-mixedematoso"], title: "Coma Mixedematoso", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["ATA"], guidelineHint: "ATA Hypothyroidism 2024" },
  { expectedId: "fp-insuf-adrenal-aguda", titleHints: ["insuficiência adrenal","crise adrenal","Addison"], title: "Crise Adrenal / Insuficiência Adrenal Aguda", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["ES","ENDO"], guidelineHint: "Endocrine Society Adrenal Insufficiency 2024" },
  { expectedId: "fp-hiponatremia-grave", aliases: ["samu-hiponatremia-grave-sintomatica"], title: "Hiponatremia Grave / Sintomática (NaCl 3%)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2025, expectedSocieties: ["ESE","ERA-EDTA"], guidelineHint: "ESE Hyponatremia 2014 + 2024 update" },
  { expectedId: "fp-hipernatremia", aliases: ["emergencia-hipernatremia-grave-correcao-segura"], title: "Hipernatremia Grave — correção segura", sectors: ["uti","ps","emergencia"], priority: "P2", targetYear: 2024, expectedSocieties: ["KDIGO"], guidelineHint: "KDIGO 2024" },
  { expectedId: "fp-hipercalemia", titleHints: ["hipercalemia","potássio elevado"], title: "Hipercalemia Grave — estabilização de membrana", sectors: ["emergencia","ps","uti","upa"], priority: "P1", targetYear: 2024, expectedSocieties: ["KDIGO","ERC"], guidelineHint: "KDIGO 2024 + ERC 2021" },
  { expectedId: "fp-hipocalemia", aliases: ["emergencia-hipocalemia-sintomatica-reposicao-ev"], title: "Hipocalemia Sintomática — reposição EV", sectors: ["emergencia","uti","ps"], priority: "P2", targetYear: 2024, expectedSocieties: ["KDIGO"], guidelineHint: "KDIGO 2024" },

  // ============== NEFRO/HEPATO ==============
  { expectedId: "fp-ira", titleHints: ["lesão renal aguda","LRA","AKI"], title: "Lesão Renal Aguda (KDIGO 2024)", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2026, expectedSocieties: ["KDIGO"], guidelineHint: "KDIGO AKI 2024" },
  { expectedId: "fp-rabdo", title: "Rabdomiólise — hidratação agressiva + alcalinização", sectors: ["emergencia","uti","ps"], priority: "P2", targetYear: 2024, expectedSocieties: ["EAST"], guidelineHint: "EAST 2024" },
  { expectedId: "fp-insuf-hepatica-fulminante", titleHints: ["insuficiência hepática","hepática fulminante","ALF"], title: "Insuficiência Hepática Aguda (ALF) — NAC", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2023, expectedSocieties: ["AASLD","EASL"], guidelineHint: "AASLD ALF 2023" },
  { expectedId: "fp-encefalopatia-hepatica", title: "Encefalopatia Hepática — Lactulose + Rifaximina + Albumina", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2023, expectedSocieties: ["AASLD","EASL"], guidelineHint: "AASLD HE 2023" },
  { expectedId: "fp-hda", titleHints: ["HDA","hemorragia digestiva alta","varicosa"], title: "Hemorragia Digestiva Alta (Glasgow-Blatchford)", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["ACG","BSG","ESGE"], guidelineHint: "ACG Upper GI Bleed 2021 + ESGE 2024" },
  { expectedId: "fp-hdb", title: "Hemorragia Digestiva Baixa (Oakland)", sectors: ["emergencia","ps","uti"], priority: "P2", targetYear: 2024, expectedSocieties: ["BSG","ACG"], guidelineHint: "BSG LGIB 2019 + ACG 2023" },
  { expectedId: "fp-pancreatite-aguda", title: "Pancreatite Aguda Grave (WSES 2024)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["WSES","ACG"], guidelineHint: "WSES Pancreatitis 2024" },
  { expectedId: "fp-colangite-tokyo", titleHints: ["colangite","Tokyo"], title: "Colangite Aguda (Tokyo Guidelines TG18/24)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["JHBP"], guidelineHint: "TG18 + revisão 2024" },
  { expectedId: "fp-isquemia-mesenterica", aliases: ["samu-isquemia-mesenterica-aguda"], title: "Isquemia Mesentérica Aguda", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["WSES","AGA"], guidelineHint: "WSES 2024" },
  { expectedId: "fp-obstrucao-intestinal", title: "Obstrução Intestinal — Bologna 2017 + WSES 2024", sectors: ["emergencia","ps","uti"], priority: "P2", targetYear: 2024, expectedSocieties: ["WSES"], guidelineHint: "WSES SBO 2024" },
  { expectedId: "fp-abdome-agudo", title: "Abdome Agudo — abordagem sindrômica", sectors: ["emergencia","ps","upa"], priority: "P1", targetYear: 2024, expectedSocieties: ["WSES","ACS"], guidelineHint: "WSES 2024" },

  // ============== HEMATOLOGIA / HEMOSTASIA ==============
  { expectedId: "fp-transfusao-macica", titleHints: ["transfusão maciça","MTP"], title: "Protocolo de Transfusão Maciça (1:1:1 + TXA)", sectors: ["emergencia","uti","cti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["EAST","ATLS"], guidelineHint: "ATLS 11th + EAST 2024" },
  { expectedId: "fp-civd", title: "CIVD — escore ISTH e manejo", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2024, expectedSocieties: ["ISTH"], guidelineHint: "ISTH DIC 2024" },
  { expectedId: "fp-reversao-anticoag", titleHints: ["reversão","warfarina","DOAC","anticoagulação"], title: "Reversão de Anticoagulação (Vit K/PCC/Idarucizumabe/Andexanete)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["ASH","ACC"], guidelineHint: "ASH/ACC 2024" },
  { expectedId: "fp-tev-profilaxia-uti", aliases: ["uti-profilaxia-tev-paciente-critico"], title: "Profilaxia de TEV em UTI (CHEST 2024)", sectors: ["uti","cti"], priority: "P2", targetYear: 2024, expectedSocieties: ["CHEST","ASH"], guidelineHint: "CHEST 2024" },
  { expectedId: "fp-anemia-falciforme-crise", aliases: ["samu-crise-vaso-oclusiva-falciforme"], title: "Crise Vaso-oclusiva em Falcêmico", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["ASH","MS Brasil"], guidelineHint: "ASH SCD 2020 + MS 2024" },

  // ============== TRAUMA / CIRÚRGICO ==============
  { expectedId: "fp-atls", titleHints: ["ATLS","trauma","politraumatizado"], title: "Atendimento ao Politraumatizado (ATLS 11th)", sectors: ["emergencia","ps","uti","cti"], priority: "P1", targetYear: 2024, expectedSocieties: ["ACS","ATLS"], guidelineHint: "ATLS 11th Ed 2024" },
  { expectedId: "fp-tce-grave", titleHints: ["TCE","traumatismo cranioencefálico"], title: "TCE Grave — BTF 2024", sectors: ["emergencia","uti","cti"], priority: "P1", targetYear: 2024, expectedSocieties: ["BTF"], guidelineHint: "Brain Trauma Foundation 2024" },
  { expectedId: "fp-trauma-raqui", titleHints: ["raquimedular","TRM"], title: "Trauma Raquimedular Agudo", sectors: ["emergencia","uti"], priority: "P1", targetYear: 2024, expectedSocieties: ["AANS","CNS"], guidelineHint: "AANS/CNS Acute SCI 2024" },
  { expectedId: "fp-choque-hipovolemico", title: "Choque Hipovolêmico — hipotensão permissiva", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["EAST","ATLS"], guidelineHint: "EAST 2024" },
  { expectedId: "fp-grande-queimado", titleHints: ["queimado","Parkland"], title: "Grande Queimado — Parkland modificada (2 mL/kg)", sectors: ["emergencia","uti","cti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["ABA"], guidelineHint: "ABA Burn 2024" },
  { expectedId: "fp-queimadura-quimica", title: "Queimadura Química / Elétrica", sectors: ["emergencia","ps","uti"], priority: "P2", targetYear: 2024, expectedSocieties: ["ABA"], guidelineHint: "ABA 2024" },
  { expectedId: "fp-afogamento", aliases: ["samu-afogamento"], title: "Afogamento (SOBRASA 2024)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["SOBRASA","ILCOR"], guidelineHint: "SOBRASA 2024" },
  { expectedId: "fp-hipotermia", aliases: ["emergencia-hipotermia-acidental-reaquecimento"], title: "Hipotermia Acidental — reaquecimento", sectors: ["emergencia","uti","ps"], priority: "P2", targetYear: 2024, expectedSocieties: ["WMS","AHA"], guidelineHint: "WMS Hypothermia 2024" },
  { expectedId: "fp-hipertermia-maligna", titleHints: ["hipertermia maligna","intermação","heat stroke"], title: "Heat Stroke / Hipertermia Maligna", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["WMS","MHAUS"], guidelineHint: "MHAUS 2024" },

  // ============== TOXICOLOGIA ==============
  { expectedId: "fp-tox-paracetamol", titleHints: ["paracetamol","acetaminofeno"], title: "Intoxicação por Paracetamol — NAC (Rumack-Matthew)", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["AAPCC","AACT"], guidelineHint: "AACT/AAPCC 2025" },
  { expectedId: "fp-tox-aas", titleHints: ["AAS","salicilato"], title: "Intoxicação por Salicilatos (AAS)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC"], guidelineHint: "AAPCC 2024" },
  { expectedId: "fp-tox-adt", titleHints: ["antidepressivo tricíclico","ADT"], title: "Intoxicação por ADT — Bicarbonato", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC"], guidelineHint: "AAPCC 2024" },
  { expectedId: "fp-tox-bzd", titleHints: ["benzodiazepínico","BZD"], title: "Intoxicação por BZD — Flumazenil (uso restrito)", sectors: ["emergencia","ps","uti"], priority: "P2", targetYear: 2024, expectedSocieties: ["AAPCC"], guidelineHint: "AAPCC 2024" },
  { expectedId: "fp-tox-opioide", title: "Intoxicação por Opioides — Naloxona", sectors: ["emergencia","ps","uti"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC","SAMHSA"], guidelineHint: "AAPCC 2024" },
  { expectedId: "fp-tox-bcc-bb", titleHints: ["bloqueador canal cálcio","BCC","betabloqueador"], title: "Intoxicação por BCC/Betabloqueador — Insulina/Glucagon/Lipídios", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC"], guidelineHint: "AAPCC 2024" },
  { expectedId: "fp-tox-digoxina", aliases: ["samu-intoxicacao-digitalica-fab"], title: "Intoxicação Digitálica — Anticorpos Fab", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC"], guidelineHint: "AAPCC 2024" },
  { expectedId: "fp-tox-metanol-etilenoglicol", titleHints: ["metanol","etilenoglicol"], title: "Intoxicação por Metanol/Etilenoglicol — Fomepizol/Hemodiálise", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC","EAPCCT"], guidelineHint: "EAPCCT 2024" },
  { expectedId: "fp-tox-organofosforado", titleHints: ["organofosforado","carbamato"], title: "Intoxicação por Organofosforado — Atropina + Pralidoxima", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC","WHO"], guidelineHint: "WHO 2024" },
  { expectedId: "fp-tox-co", titleHints: ["monóxido de carbono","CO"], title: "Intoxicação por Monóxido de Carbono", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC","UHMS"], guidelineHint: "UHMS 2024" },
  { expectedId: "fp-tox-cocaina-anfeta", titleHints: ["cocaína","anfetamina","drogas sintéticas"], title: "Intoxicação por Cocaína / Drogas Sintéticas", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAPCC"], guidelineHint: "AAPCC 2024" },

  // ============== ENVENENAMENTOS ==============
  { expectedId: "fp-acidente-ofidico", titleHints: ["ofídico","Bothrops","Crotalus","cobra"], title: "Acidente Ofídico (Bothrops/Crotalus/Lachesis/Micrurus)", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["MS Brasil","Funed"], guidelineHint: "MS/Funed Soros 2025" },
  { expectedId: "fp-acidente-escorpionico", titleHints: ["escorpiônico","escorpião","Tityus"], title: "Acidente Escorpiônico (Tityus serrulatus)", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["MS Brasil","Funed"], guidelineHint: "MS/Funed 2025" },
  { expectedId: "fp-acidente-aracnideo", titleHints: ["aranha","Loxosceles","Phoneutria"], title: "Acidente Araneídico (Loxosceles/Phoneutria/Latrodectus)", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2025, expectedSocieties: ["MS Brasil","Funed"], guidelineHint: "MS/Funed 2025" },

  // ============== UTI / SUPORTE AVANÇADO ==============
  { expectedId: "fp-sedacao-uti", titleHints: ["sedação","analgesia","ABCDEF"], title: "Sedação/Analgesia em UTI — bundle ABCDEF (PADIS)", sectors: ["uti","cti"], priority: "P2", targetYear: 2025, expectedSocieties: ["SCCM"], guidelineHint: "PADIS 2018 + SCCM 2024" },
  { expectedId: "fp-vasopressores", title: "Vasopressores e Inotrópicos em Choque", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2025, expectedSocieties: ["SCCM","ESICM"], guidelineHint: "SSC 2021 + 2024" },
  { expectedId: "fp-ecmo", aliases: ["uti-indicacoes-ecmo-eolia-elso"], title: "Indicações de ECMO (EOLIA / ELSO)", sectors: ["uti","cti"], priority: "P2", targetYear: 2024, expectedSocieties: ["ELSO"], guidelineHint: "ELSO 2024" },
  { expectedId: "fp-trr", titleHints: ["terapia renal substitutiva","hemodiálise","CRRT"], title: "Indicações de TRR / Diálise em UTI", sectors: ["uti","cti","emergencia"], priority: "P1", targetYear: 2024, expectedSocieties: ["KDIGO"], guidelineHint: "KDIGO AKI 2024" },
  { expectedId: "fp-morte-encefalica", titleHints: ["morte encefálica"], title: "Diagnóstico de Morte Encefálica (CFM 2173)", sectors: ["uti","cti"], priority: "P2", targetYear: 2025, expectedSocieties: ["CFM","WFNS"], guidelineHint: "CFM 2.173/2017 + WFNS 2023" },

  // ============== OBSTETRÍCIA ==============
  { expectedId: "fp-eclampsia", titleHints: ["eclâmpsia","pré-eclâmpsia"], title: "Pré-eclâmpsia / Eclâmpsia (FIGO 2025)", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["FIGO","ACOG","FEBRASGO"], guidelineHint: "FIGO 2025 + FEBRASGO 2024" },
  { expectedId: "fp-hpp", titleHints: ["hemorragia pós-parto","HPP"], title: "Hemorragia Pós-Parto (FIGO/WHO 2024)", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["FIGO","WHO","FEBRASGO"], guidelineHint: "WHO PPH 2024" },
  { expectedId: "fp-sepse-puerperal", title: "Sepse Puerperal", sectors: ["emergencia","uti","ps"], priority: "P1", targetYear: 2024, expectedSocieties: ["FEBRASGO","SSC"], guidelineHint: "SSC 2024 + FEBRASGO" },
  { expectedId: "fp-trabalho-parto-prematuro", title: "Trabalho de Parto Prematuro — tocolíticos + CCS", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["ACOG","FEBRASGO"], guidelineHint: "ACOG 2024" },

  // ============== PEDIATRIA ==============
  { expectedId: "fp-pals", titleHints: ["PALS","parada pediátrica"], title: "PALS — RCP Pediátrica (AHA 2025)", sectors: ["emergencia","uti","ps","upa"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA","SBP"], guidelineHint: "AHA PALS 2025" },
  { expectedId: "fp-sepse-pediatrica", aliases: ["samu-sepse-pediatrica-phoenix"], title: "Sepse Pediátrica (Phoenix Criteria 2024)", sectors: ["emergencia","ps","uti","upa"], priority: "P1", targetYear: 2024, expectedSocieties: ["SCCM","SSC"], guidelineHint: "SSC Pediatric 2020 + Phoenix 2024" },
  { expectedId: "fp-sepse-neonatal", aliases: ["samu-sepse-neonatal-precoce-tardia"], title: "Sepse Neonatal Precoce/Tardia", sectors: ["emergencia","uti"], priority: "P1", targetYear: 2024, expectedSocieties: ["AAP","SBP"], guidelineHint: "AAP 2024" },
  { expectedId: "fp-asma-pediatrica-grave", aliases: ["samu-asma-pediatrica-grave"], title: "Asma Pediátrica Grave", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2025, expectedSocieties: ["GINA","SBP"], guidelineHint: "GINA 2025" },
  { expectedId: "fp-laringite", titleHints: ["laringite","crupe"], title: "Laringite Estridulosa / Crupe", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["SBP","AAP"], guidelineHint: "AAP/SBP 2024" },
  { expectedId: "fp-desidratacao-pediatrica", aliases: ["samu-desidratacao-pediatrica-planos-abc"], title: "Desidratação Pediátrica — Plano A/B/C", sectors: ["emergencia","ps","upa"], priority: "P1", targetYear: 2025, expectedSocieties: ["MS Brasil","WHO","SBP"], guidelineHint: "MS Diarreia 2024" },
  { expectedId: "fp-avc-pediatrico", aliases: ["samu-avc-pediatrico"], title: "AVC Pediátrico", sectors: ["emergencia","uti"], priority: "P2", targetYear: 2024, expectedSocieties: ["AHA/ASA"], guidelineHint: "AHA Pediatric Stroke 2024" },

  // ============== ANAFILAXIA / ALERGIA ==============
  { expectedId: "fp-anafilaxia", title: "Anafilaxia — Epinefrina IM (WAO 2024)", sectors: ["emergencia","ps","upa","uti"], priority: "P1", targetYear: 2024, expectedSocieties: ["WAO","ASBAI"], guidelineHint: "WAO 2024" },
  { expectedId: "fp-angioedema", aliases: ["samu-angioedema-histaminergico-bradicininergico"], title: "Angioedema (histaminérgico vs. bradicininérgico)", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["WAO","HAEi"], guidelineHint: "WAO/EAACI 2024" },

  // ============== PSIQUIATRIA / COMPORTAMENTAL ==============
  { expectedId: "fp-agitacao-psicomotora", titleHints: ["agitação","contenção"], title: "Agitação Psicomotora — manejo escalonado", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["BETA","ABP"], guidelineHint: "BETA 2012 + ABP 2024" },
  { expectedId: "fp-risco-suicidio", aliases: ["samu-risco-suicidio-columbia"], title: "Avaliação de Risco de Suicídio (Columbia)", sectors: ["emergencia","ps","upa"], priority: "P1", targetYear: 2024, expectedSocieties: ["MS Brasil","ABP"], guidelineHint: "MS Suicídio 2024" },
  { expectedId: "fp-sd-abstinencia-alcool", titleHints: ["abstinência alcoólica","delirium tremens"], title: "Abstinência Alcoólica / Delirium Tremens (CIWA-Ar)", sectors: ["emergencia","ps","uti","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["ASAM"], guidelineHint: "ASAM 2024" },

  // ============== UPA / PORTA DE ENTRADA ==============
  { expectedId: "fp-triagem-manchester", titleHints: ["Manchester","triagem"], title: "Classificação de Risco — Protocolo de Manchester", sectors: ["upa","ps","emergencia"], priority: "P1", targetYear: 2025, expectedSocieties: ["GBCR","MS Brasil"], guidelineHint: "Manchester 3rd Ed + MS 2024" },
  { expectedId: "fp-dor-toracica-classificacao", titleHints: ["dor torácica","HEART score"], title: "Dor Torácica na Emergência — HEART Score", sectors: ["emergencia","ps","upa"], priority: "P1", targetYear: 2025, expectedSocieties: ["AHA","ESC"], guidelineHint: "AHA Chest Pain 2021 + ESC 2024" },
  { expectedId: "fp-cefaleia-vermelha", titleHints: ["cefaleia","red flag"], title: "Cefaleia na Emergência — Red Flags (SNNOOP10)", sectors: ["emergencia","ps","upa"], priority: "P2", targetYear: 2024, expectedSocieties: ["IHS","ABN"], guidelineHint: "IHS 2024" },
  { expectedId: "fp-lombalgia-red-flags", aliases: ["emergencia-lombalgia-aguda-red-flags"], title: "Lombalgia Aguda — Red Flags", sectors: ["ps","upa"], priority: "P3", targetYear: 2024, expectedSocieties: ["NICE","ACP"], guidelineHint: "NICE 2024" },
];

export function masterEntriesBySector(sector: Sector): CoverageEntry[] {
  return COVERAGE_MASTER.filter((e) => e.sectors.includes(sector));
}
