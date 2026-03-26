import type { FullProtocol } from "./types";

export const dermatologyFullProtocols4: FullProtocol[] = [
  {
    id: "fp-herpes-zoster",
    title: "Herpes Zoster na Emergência",
    categoryId: "dermatology",
    category: "Dermatologia de Emergência",
    tags: ["herpes zoster", "cobreiro", "varicela", "aciclovir", "dor neuropática"],
    sections: [
      { id: "intro", title: "Introdução", content: "Herpes Zoster resulta da reativação do vírus varicela-zoster (VZV) latente em gânglios sensoriais. Acomete principalmente idosos e imunossuprimidos. Pode causar complicações graves (neuralgia pós-herpética, zoster oftálmico). Diretriz SBD e CDC." },
      { id: "def", title: "Definição", content: "Erupção vesicular dolorosa em distribuição dermatomal (unilateral, não cruza a linha média). Prodromo de dor/queimação 1-5 dias antes das lesões. Incidência aumenta com idade e imunossupressão." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Dor/queimação em faixa unilateral seguida de vesículas agrupadas sobre base eritematosa em dermátomo. Dermátomos mais afetados: torácico (T3-L2), trigeminal (V1 — oftálmico). Avaliar envolvimento ocular e disseminação." },
      { id: "etiology", title: "Etiologia", content: "Reativação do VZV latente em gânglio dorsal. Fatores de risco: idade >50 anos, imunossupressão (HIV, quimioterapia, transplante, corticoterapia crônica), estresse, neoplasias." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor neuropática intensa (queimação, pontadas) no dermátomo. Vesículas agrupadas sobre base eritematosa, unilaterais. Evolução: eritema → pápulas → vesículas → pústulas → crostas (7-10 dias). Zoster oftálmico: envolvimento de V1 — risco de ceratite, uveíte (sinal de Hutchinson: vesículas no nariz). Ramsay-Hunt: zoster oticus + paralisia facial + vesículas no ouvido." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico na maioria dos casos. PCR viral (swab de vesícula) se dúvida diagnóstica. Tzanck (células gigantes multinucleadas — baixa especificidade). Avaliação oftalmológica urgente se zoster oftálmico. Sorologias: HIV se <50 anos ou disseminado." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Herpes simples (HSV), dermatite de contato, celulite, impetigo bolhoso, erisipela. Fase prodromal (sem lesões): IAM, cólica renal, neuralgia do trigêmeo, pleurisia." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Antiviral oral em <72h do início das lesões (idealmente <48h); 2. Analgesia adequada (dor neuropática é intensa); 3. Avaliação oftalmológica se V1 envolvido; 4. Precauções de contato (vesículas contêm vírus viável); 5. Internação se disseminado ou imunossuprimido grave." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Imunocompetente: Aciclovir 800mg VO 5x/dia por 7 dias OU Valaciclovir 1000mg VO 8/8h por 7 dias (melhor biodisponibilidade). Imunossuprimido/disseminado: Aciclovir 10mg/kg EV 8/8h por 7-14 dias. Dor: Gabapentina 300mg VO 8/8h (titular até 1200mg/dia) ou Pregabalina 75mg VO 12/12h. Analgesia escalonada: Dipirona + Tramadol + Gabapentina." },
      { id: "prescriptions", title: "Prescrições", content: "1. Valaciclovir 1000mg VO 8/8h por 7 dias (ou Aciclovir 800mg VO 5x/dia); 2. Dipirona 1g VO/EV 6/6h; 3. Tramadol 50-100mg VO 6/6h se dor moderada-intensa; 4. Gabapentina 300mg VO à noite → 300mg 8/8h (titular); 5. Cuidados locais: compressas úmidas, curativo oclusivo; 6. Se oftálmico: Aciclovir pomada oftálmica 5x/dia + encaminhar oftalmologia urgente; 7. Imunossuprimido: Aciclovir 10mg/kg EV 8/8h." },
      { id: "followup", title: "Acompanhamento", content: "Retorno em 7-14 dias para avaliar resolução. Monitorar neuralgia pós-herpética (dor >90 dias). Vacinação: Shingrix (recombinante) recomendada para >50 anos (prevenção). Investigar imunossupressão em jovens." },
      { id: "complications", title: "Complicações", content: "Neuralgia pós-herpética (complicação mais comum — 10-20%), ceratite/uveíte (zoster oftálmico), paralisia facial (Ramsay-Hunt), meningoencefalite, mielite, vasculopatia, infecção bacteriana secundária, zoster disseminado." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: imunocompetente, sem complicações, analgesia adequada, antiviral VO prescrito. Internação: imunossuprimido, zoster disseminado, complicações neurológicas, zoster oftálmico grave, dor refratária. UTI: meningoencefalite, insuficiência orgânica." },
      { id: "references", title: "Referências Bibliográficas", content: "SBD — Consenso Brasileiro de Herpes Zoster. CDC — Shingles (Herpes Zoster) Clinical Overview. Cohen JI. NEJM 2013. Dworkin RH et al. Clin Infect Dis 2007." }
    ]
  },
  {
    id: "fp-penfigo-emergencia",
    title: "Pênfigo e Dermatoses Bolhosas Graves",
    categoryId: "dermatology",
    category: "Dermatologia de Emergência",
    tags: ["pênfigo", "bolhosa", "nikolsky", "penfigoide", "corticoide"],
    sections: [
      { id: "intro", title: "Introdução", content: "Dermatoses bolhosas autoimunes (pênfigo vulgar, penfigoide bolhoso) podem se apresentar como emergências dermatológicas com risco de vida por perda de barreira cutânea, sepse e distúrbios hidroeletrolíticos — semelhante a grandes queimados." },
      { id: "def", title: "Definição", content: "Pênfigo vulgar: bolhas flácidas intraepidérmicas, sinal de Nikolsky positivo, acometimento mucocutâneo. Penfigoide bolhoso: bolhas tensas subepidérmicas, idosos, Nikolsky negativo. Ambos são autoimunes (anticorpos anti-desmogleína e anti-BP180/230)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Bolhas difusas com erosões extensas, envolvimento de mucosas (oral — 60% início no pênfigo). Sinal de Nikolsky (pressão lateral na pele sã causa descolamento). Perda de área corporal significativa." },
      { id: "etiology", title: "Etiologia", content: "Autoimune: IgG anti-desmogleína 1 e 3 (pênfigo), anti-BP180/BP230 (penfigoide). Medicamentoso: penicilamina, captopril, AINEs podem induzir pênfigo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Pênfigo: bolhas flácidas que rompem facilmente → erosões dolorosas extensas, crostas. Mucosa oral quase sempre acometida. Penfigoide: bolhas tensas, pruriginosas, idosos. Complicações: desidratação, sepse, distúrbios eletrolíticos, dor intensa." },
      { id: "diagnosis", title: "Diagnóstico", content: "Biópsia cutânea (bolha recente): histopatologia + imunofluorescência direta (IFD). Pênfigo: acantólise intraepidérmica + IFD intercelular. Penfigoide: bolha subepidérmica + IFD linear na zona de membrana basal. ELISA anti-desmogleína." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "SSJ/NET, queimaduras, dermatite herpetiforme, impetigo bolhoso, epidermólise bolhosa, eritema multiforme, pênfigo paraneoplásico." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Internação (>20% de superfície corporal acometida); 2. Manejo semelhante a grande queimado: hidratação vigorosa, controle da dor, cuidados com feridas; 3. Corticoterapia sistêmica em dose alta; 4. Culturas de lesões se infecção secundária." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Pênfigo vulgar: Prednisona 1-2 mg/kg/dia VO (ou Metilprednisolona EV se grave) + Azatioprina 2-3 mg/kg/dia ou Micofenolato 2-3g/dia. Rituximab como opção em refratários (aprovado CONITEC). Penfigoide: Prednisona 0,5-1 mg/kg/dia + Dapsona ou Azatioprina. Cuidados locais: curativos úmidos, antibiótico tópico." },
      { id: "prescriptions", title: "Prescrições", content: "1. Prednisona 1-1,5 mg/kg/dia VO (ou Metilprednisolona 1g EV/dia por 3 dias — pulsoterapia se grave); 2. Azatioprina 2 mg/kg/dia VO (após verificar TPMT); 3. Omeprazol 20mg VO 1x/dia; 4. Carbonato de cálcio + vitamina D; 5. Analgesia: Dipirona 1g 6/6h + Tramadol SN; 6. Cuidados locais: vaselina, curativos não aderentes; 7. Profilaxia Pneumocystis: SMX-TMP se imunossupressão intensa." },
      { id: "followup", title: "Acompanhamento", content: "Dermatologia acompanha. Desmame gradual de corticoide após controle (meses). ELISA anti-desmogleína para monitorar atividade. Rastrear complicações de corticoterapia crônica." },
      { id: "complications", title: "Complicações", content: "Sepse (principal causa de óbito), desidratação grave, distúrbios eletrolíticos, infecção secundária (Staphylococcus, Candida), efeitos adversos de imunossupressão, trombose." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: acometimento extenso (>20% SCQ), mucosa oral grave impedindo ingesta, desidratação. UTI: sepse, instabilidade hemodinâmica. Alta: lesões em cicatrização, ingesta oral adequada, corticoide em desmame estável." },
      { id: "references", title: "Referências Bibliográficas", content: "SBD — Consenso Brasileiro de Pênfigo. Joly P et al. NEJM 2007. Murrell DF et al. J Am Acad Dermatol 2020. CONITEC — Protocolo Clínico de Pênfigo." }
    ]
  }
];
