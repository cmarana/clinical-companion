export interface Antidote {
  drug: string;
  dose: string;
  route: string;
  notes?: string;
}

export interface Decontamination {
  method: string;
  indication: string;
  contraindication?: string;
  howTo: string;
}

export interface ToxicAgent {
  id: string;
  name: string;
  aliases?: string[];
  category: string;
  icon: string;
  severity: "leve" | "moderado" | "grave" | "potencialmente_fatal";
  mechanism?: string;
  symptoms: string[];
  redFlags: string[];
  antidotes: Antidote[];
  decontamination: Decontamination[];
  supportiveCare: string[];
  keyPoints?: string[];
  references?: string[];
}

export const toxicAgents: ToxicAgent[] = [
  {
    id: "paracetamol",
    name: "Paracetamol (Acetaminofeno)",
    aliases: ["Tylenol", "dipirona não"],
    category: "Analgésicos",
    icon: "💊",
    severity: "potencialmente_fatal",
    mechanism: "Metabolismo hepático gera NAPQI → esgota glutationa → necrose centrolobular",
    symptoms: ["Náuseas e vômitos (fase 1)", "Dor em hipocôndrio direito (fase 2)", "Insuficiência hepática (fase 3)", "Icterícia, encefalopatia (fase 4)"],
    redFlags: ["Ingestão > 150 mg/kg ou > 7,5g", "Nível plasmático acima da linha de Rumack-Matthew", "INR > 2 em 24h", "Falência hepática fulminante"],
    antidotes: [
      {
        drug: "N-Acetilcisteína (NAC)",
        dose: "150 mg/kg EV em 60 min → 50 mg/kg em 4h → 100 mg/kg em 16h (Regra 21h Prescott)",
        route: "EV (preferencial) ou VO",
        notes: "Iniciar se nível acima da linha de tratamento no nomograma de Rumack-Matthew. Máx eficácia nas primeiras 8h.",
      },
    ],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "< 2h da ingestão, paciente alerta, via aérea protegida",
        contraindication: "Rebaixamento de consciência, vômitos incoercíveis, obstrução intestinal",
        howTo: "1 g/kg VO (máx 50g) diluído em água — dose única",
      },
    ],
    supportiveCare: [
      "Monitorar glicemia (hipoglicemia na falência hepática)",
      "Vitamina K se coagulopatia",
      "Avaliar transplante hepático (Critérios de King's College)",
      "Hemodiálise nas fases iniciais se NAC indisponível",
    ],
    keyPoints: [
      "Usar nomograma de Rumack-Matthew para indicar NAC",
      "Dosar paracetamol 4h após a ingestão",
      "NAC é eficaz mesmo após 24h se houver insuficiência hepática",
    ],
  },
  {
    id: "aas",
    name: "Salicilatos (AAS)",
    aliases: ["Aspirina", "Ácido acetilsalicílico"],
    category: "Analgésicos",
    icon: "💊",
    severity: "grave",
    mechanism: "Desacoplamento fosforilação oxidativa, estímulo centro respiratório, acidose metabólica + alcalose respiratória",
    symptoms: ["Tinido, hipoacusia", "Hiperventilação, alcalose respiratória inicial", "Acidose metabólica", "Febre, diaforese", "Agitação, confusão, convulsão", "Edema pulmonar não cardiogênico"],
    redFlags: ["Nível sérico > 100 mg/dL em adultos", "Acidose metabólica + alteração neurológica", "Edema pulmonar", "Convulsões"],
    antidotes: [],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "< 2h da ingestão, doses múltiplas indicam doses repetidas de CA",
        contraindication: "Rebaixamento de consciência",
        howTo: "1 g/kg VO (máx 50g). Considerar doses múltiplas: 0,5 g/kg a cada 4h",
      },
    ],
    supportiveCare: [
      "Alcalinização urinária: NaHCO3 1-2 mEq/kg EV → manter pH urinário 7,5-8,0",
      "Correção de hipocalemia (impede alcalinização eficaz)",
      "Glicose EV mesmo com glicemia normal (neuroglicopenia)",
      "Hemodiálise se: nível > 100 mg/dL, IRA, edema pulmonar, falha clínica",
      "Intubação SOMENTE se imprescindível — risco de acidose grave pós-intubação",
    ],
    keyPoints: [
      "Dosar nível a cada 2h até queda confirmada",
      "Não guiar conduta APENAS pelo nível — correlacionar com clínica",
      "Evitar intubação — se necessária, manter hiperventilação idêntica à espontânea",
    ],
  },
  {
    id: "opioides",
    name: "Opioides",
    aliases: ["Morfina", "Codeína", "Tramadol", "Oxicodona", "Fentanil", "Heroína"],
    category: "Opioides",
    icon: "🩺",
    severity: "potencialmente_fatal",
    mechanism: "Agonismo receptores µ → depressão SNC e respiratória",
    symptoms: ["Miose (pupilas puntiformes)", "Depressão respiratória", "Rebaixamento de consciência", "Bradicardia, hipotensão", "Bradipneia ou apneia"],
    redFlags: ["FR < 12 irpm", "SpO2 < 90%", "Coma (Glasgow < 8)", "Apneia"],
    antidotes: [
      {
        drug: "Naloxona",
        dose: "0,4–2 mg EV/IM/IN — repetir a cada 2-3 min até resposta (máx 10 mg). Meia-vida curta: repetir ou infusão contínua 2/3 da dose de reversão/hora",
        route: "EV (preferencial), IM, SC, IN",
        notes: "Titular pela respiração — evitar síndrome de abstinência abrupta. Em usuários dependentes: iniciar com 0,04–0,1 mg.",
      },
    ],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "Se ingestão oral e paciente alerta (raro — maioria EV ou inalada)",
        contraindication: "Rebaixamento de consciência",
        howTo: "1 g/kg VO (máx 50g)",
      },
    ],
    supportiveCare: [
      "Suporte ventilatório — BVM antes de intubar se naloxona disponível",
      "Oxigênio suplementar",
      "Monitorização contínua (meia-vida naloxona < opioide → rebote)",
      "Internação mínima 4-6h após última dose de naloxona",
    ],
    keyPoints: [
      "Tríade clássica: miose + depressão respiratória + rebaixamento consciência",
      "Naloxona intransal (IN) 2 mg é opção pré-hospitalar eficaz",
      "Fentanil e análogos: podem necessitar doses maiores de naloxona",
    ],
  },
  {
    id: "benzodiazepinicos",
    name: "Benzodiazepínicos",
    aliases: ["Diazepam", "Clonazepam", "Alprazolam", "Midazolam", "Lorazepam"],
    category: "Psicofármacos",
    icon: "💊",
    severity: "moderado",
    mechanism: "Potencialização GABA-A → depressão SNC",
    symptoms: ["Sonolência, sedação", "Ataxia, disartria", "Rebaixamento de consciência", "Depressão respiratória (rara isolada — grave se associada a álcool/opioides)"],
    redFlags: ["Coingestão com álcool ou opioides", "Glasgow < 8", "SpO2 < 90%"],
    antidotes: [
      {
        drug: "Flumazenil",
        dose: "0,2 mg EV em 30s → repetir 0,1 mg a cada 60s (máx 1 mg). Infusão: 0,1–0,4 mg/h",
        route: "EV",
        notes: "CONTRAINDICADO em: epilepsia tratada com BZD, dependência crônica (risco de convulsão), coingestão de tricíclicos. Uso restrito — preferir suporte.",
      },
    ],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "< 1-2h da ingestão, paciente alerta",
        contraindication: "Rebaixamento de consciência",
        howTo: "1 g/kg VO (máx 50g)",
      },
    ],
    supportiveCare: [
      "Suporte ventilatório se necessário",
      "Posição lateral de segurança",
      "Monitorizar — maioria resolve com suporte",
    ],
    keyPoints: [
      "BZD isolado raramente causa morte — coingestões são o perigo",
      "Flumazenil: risco de convulsão — usar com cautela",
      "Evitar flumazenil em dependentes crônicos",
    ],
  },
  {
    id: "organofosforados",
    name: "Organofosforados e Carbamatos",
    aliases: ["Agrotóxicos", "Inseticidas", "Chumbinho"],
    category: "Agrotóxicos",
    icon: "⚗️",
    severity: "potencialmente_fatal",
    mechanism: "Inibição da acetilcolinesterase → acúmulo de ACh nas sinapses muscarínicas e nicotínicas",
    symptoms: [
      "Muscarínico (SLUDGE): Sialorreia, Lacrimejamento, Urinação, Defecação, Vômito, Emese + broncospasmo, miose",
      "Nicotínico: Fasciculações, fraqueza muscular, paralisia, taquicardia",
      "SNC: Confusão, convulsão, coma",
    ],
    redFlags: ["Broncospasmo grave", "Secreções abundantes", "Convulsões", "Paralisia respiratória", "Coma"],
    antidotes: [
      {
        drug: "Atropina",
        dose: "2-4 mg EV bolus → dobrar a cada 5-10 min até secar secreções brônquicas. Podem ser necessários centenas de mg.",
        route: "EV",
        notes: "Titular pela secreção brônquica — NÃO pela FC ou pupila. Endpoint = secreções secas.",
      },
      {
        drug: "Pralidoxima (2-PAM)",
        dose: "1-2 g EV em 15-30 min → manutenção 200-400 mg/h por 24-48h",
        route: "EV",
        notes: "Reativar colinesterase — eficaz apenas nas primeiras 24-48h (janela antes do 'aging'). Carbamatos: pralidoxima controversa.",
      },
    ],
    decontamination: [
      {
        method: "Descontaminação cutânea",
        indication: "Exposição dérmica (principal via nos agrotóxicos)",
        howTo: "Remover roupas, lavar com água e sabão em abundância. EPI para equipe (luvas, avental).",
      },
      {
        method: "Carvão Ativado",
        indication: "Ingestão oral < 1h, via aérea protegida",
        contraindication: "Rebaixamento de consciência, convulsão",
        howTo: "1 g/kg VO (máx 50g)",
      },
    ],
    supportiveCare: [
      "Via aérea — intubação precoce se secreções incontroláveis ou apneia",
      "Benzodiazepínico para convulsões",
      "Monitorizar atividade de colinesterase eritrocitária",
      "Evitar succinilcolina para intubação (metabolismo dependente de colinesterase)",
    ],
    keyPoints: [
      "Atropina: doses altíssimas podem ser necessárias — não limitar",
      "Pralidoxima: iniciar precocemente para ser eficaz",
      "EPI obrigatório para equipe — risco de contaminação secundária",
    ],
  },
  {
    id: "tricíclicos",
    name: "Antidepressivos Tricíclicos",
    aliases: ["Amitriptilina", "Nortriptilina", "Imipramina", "Clomipramina"],
    category: "Psicofármacos",
    icon: "💊",
    severity: "potencialmente_fatal",
    mechanism: "Bloqueio canais Na+ (cardiotoxicidade), anticolinérgico, anti-histamínico, bloqueio α1",
    symptoms: ["Efeitos anticolinérgicos: taquicardia, midríase, retenção urinária, íleo", "QRS alargado (>100ms = risco alto)", "Hipotensão", "Convulsões", "Coma"],
    redFlags: ["QRS > 100ms", "QTc prolongado", "Hipotensão refratária", "Convulsões", "Arritmia ventricular"],
    antidotes: [
      {
        drug: "Bicarbonato de Sódio",
        dose: "1-2 mEq/kg EV bolus → repetir até pH 7,45-7,55 ou QRS < 100ms",
        route: "EV",
        notes: "Mecanismo: alcalinização + efeito competitivo nos canais de Na+. Manter infusão 150 mEq NaHCO3 em 1L SG5% se necessário.",
      },
    ],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "< 1-2h da ingestão, paciente alerta",
        contraindication: "Rebaixamento de consciência — alto risco de aspiração",
        howTo: "1 g/kg VO (máx 50g)",
      },
    ],
    supportiveCare: [
      "ECG seriado — monitorizar QRS e QTc",
      "BZD para convulsões (evitar fenitoína)",
      "Noradrenalina para hipotensão (evitar adrenalina — risco arrítmico)",
      "Lipoterapia (Intralipid) em arritmia refratária",
      "Evitar flumazenil (baixa o limiar convulsivo)",
      "Não usar fisostigmina",
    ],
    keyPoints: [
      "QRS > 100ms → indicar bicarbonato imediatamente",
      "Aparente melhora inicial pode ser seguida de deterioração rápida",
      "Observação mínima 6h — se assintomático e ECG normal",
    ],
  },
  {
    id: "etanol",
    name: "Etanol (Álcool Etílico)",
    category: "Álcoois",
    icon: "🍺",
    severity: "moderado",
    mechanism: "Potencialização GABA, inibição NMDA → depressão SNC",
    symptoms: ["Euforia, desinibição", "Ataxia, disartria", "Sonolência, confusão", "Coma, depressão respiratória (grave)"],
    redFlags: ["Glasgow < 8", "Hipoglicemia", "Coingestão de outras substâncias", "Convulsões (abstinência)"],
    antidotes: [],
    decontamination: [],
    supportiveCare: [
      "Tiamina 100-500 mg EV ANTES de glicose (prevenir Wernicke)",
      "Glicose 50% 50 mL EV se hipoglicemia",
      "Posição lateral de segurança",
      "Aquecimento se hipotermia",
      "Eletrólitos: hipomagnesemia, hipocalemia frequentes",
    ],
    keyPoints: [
      "Sempre excluir hipoglicemia no comatoso",
      "Tiamina ANTES da glicose em etilistas",
      "Considerar coingestões — álcool mascara outros tóxicos",
    ],
  },
  {
    id: "metanol",
    name: "Metanol e Etilenoglicol",
    aliases: ["Álcool metílico", "Anticongelante"],
    category: "Álcoois",
    icon: "⚗️",
    severity: "potencialmente_fatal",
    mechanism: "Metabolizados em ácido fórmico (metanol) e oxalato (etilenoglicol) → acidose grave + toxicidade orgânica específica",
    symptoms: [
      "Metanol: distúrbios visuais (neve visual, cegueira), cefaleia, náusea, acidose grave",
      "Etilenoglicol: embriaguez sem odor, IRA (cristais de oxalato), hipocalcemia, convulsão",
    ],
    redFlags: ["Acidose metabólica com gap elevado", "Distúrbio visual (metanol)", "IRA progressiva (etilenoglicol)", "Coma"],
    antidotes: [
      {
        drug: "Fomepizol (4-MP)",
        dose: "15 mg/kg EV em 30 min → 10 mg/kg a cada 12h × 4 doses → 15 mg/kg a cada 12h",
        route: "EV",
        notes: "Inibidor de álcool desidrogenase. Preferível ao etanol. Iniciar imediatamente se disponível.",
      },
      {
        drug: "Etanol (alternativa)",
        dose: "Alvo: etanolemia 100-150 mg/dL. VO: dose inicial 0,8 g/kg (vodka/whisky) → manutenção 0,15 g/kg/h",
        route: "EV ou VO",
        notes: "Usar apenas se fomepizol indisponível. Competição com álcool desidrogenase.",
      },
    ],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "Pouco eficaz — álcoois absorvidos rapidamente",
        howTo: "Considerar apenas se ingestão recente (< 30 min) e coingestão de outros tóxicos",
      },
    ],
    supportiveCare: [
      "Hemodiálise: acidose grave (pH < 7,2), nível > 50 mg/dL, IRA, falha visual",
      "Bicarbonato EV para acidose grave",
      "Ácido folínico 50 mg EV a cada 4h (metanol — facilita metabolização formiato)",
      "Tiamina + piridoxina (etilenoglicol — cofatores do metabolismo)",
      "Gluconato de cálcio se hipocalcemia (etilenoglicol)",
    ],
    keyPoints: [
      "Gap osmolar elevado nas primeiras horas → gap aniônico elevado depois",
      "Fomepizol: iniciar sem esperar confirmação laboratorial se suspeita clínica",
      "Hemodiálise precoce é chave nos casos graves",
    ],
  },
  {
    id: "co",
    name: "Monóxido de Carbono (CO)",
    aliases: ["Intoxicação por gás", "CO"],
    category: "Gases e Inalados",
    icon: "🌫️",
    severity: "potencialmente_fatal",
    mechanism: "CO se liga à hemoglobina (COHb, afinidade 240× O2) → hipóxia tecidual + inibição citocromo c oxidase",
    symptoms: ["Cefaleia, tontura (leve)", "Náuseas, vômitos, confusão (moderado)", "Síncope, convulsão, coma (grave)", "Isquemia miocárdica", "Sequelas neuropsiquiátricas tardias"],
    redFlags: ["COHb > 25% (sintomático) ou > 40%", "Alteração de consciência", "Isquemia miocárdica no ECG", "Gestação qualquer nível", "Crianças e idosos"],
    antidotes: [
      {
        drug: "Oxigênio a 100%",
        dose: "Máscara sem reinalação com reservatório — mínimo 6h (reduz meia-vida de 5h para 60-90 min)",
        route: "Inalatório",
        notes: "Câmara hiperbárica se: coma, convulsão, déficit neurológico, gestante, COHb > 25% com sintomas graves.",
      },
    ],
    decontamination: [
      {
        method: "Remoção do ambiente",
        indication: "Imediata — primordial",
        howTo: "Remover a vítima do ambiente contaminado. EPI para socorristas (SCBAs).",
      },
    ],
    supportiveCare: [
      "ECG — isquemia miocárdica frequente",
      "Troponina e lactato",
      "Suporte neurológico",
      "Gestantes: COHb fetal > maternal — câmara hiperbárica mesmo com COHb baixa materna",
    ],
    keyPoints: [
      "Oxímetro de pulso NORMAL não exclui intoxicação — não detecta COHb",
      "Usar CO-oxímetro ou gasometria",
      "Câmara hiperbárica reduz sequelas neurológicas tardias",
    ],
  },
  {
    id: "digitalicos",
    name: "Digitálicos",
    aliases: ["Digoxina", "Digitoxina"],
    category: "Cardiovasculares",
    icon: "❤️",
    severity: "potencialmente_fatal",
    mechanism: "Inibição Na+/K+-ATPase → aumento Ca2+ intracelular + aumento tônus vagal",
    symptoms: ["Náuseas, vômitos, dor abdominal", "Visão amarelo-esverdeada (xantopsia)", "Bradicardia, bloqueios AV", "Arritmias ventriculares (TV, FV)", "Hipercalemia (intoxicação aguda)"],
    redFlags: ["Hipercalemia > 5,5", "Bloqueio AV de alto grau", "TV/FV", "Nível sérico > 2 ng/mL com sintomas"],
    antidotes: [
      {
        drug: "Anticorpos antidigoxina (Digibind/DigiFab)",
        dose: "Ingestão aguda conhecida: nº vials = (mg ingeridos × 0,8) / 0,5. Nível sérico: nº vials = (nível ng/mL × peso kg) / 100. Empírico: 10-20 vials EV.",
        route: "EV em 30 min (urgência: bolus)",
        notes: "Indicado em: arritmia ameaçadora, hipercalemia > 5,5, nível > 10 ng/mL. Após uso: nível total de digoxina aumenta (inativo ligado).",
      },
    ],
    decontamination: [
      {
        method: "Carvão Ativado",
        indication: "< 2h da ingestão, doses múltiplas beneficiam",
        howTo: "1 g/kg VO (máx 50g). Repetir 0,5 g/kg a cada 4h nas primeiras 24h",
      },
    ],
    supportiveCare: [
      "Marcapasso transcutâneo se bradicardia sintomática refratária",
      "Tratar hipercalemia (NaHCO3, glicose-insulina) — NÃO gluconato de cálcio se suspeita de digitálico",
      "Cardioversão elétrica só em FV — aumenta toxicidade",
      "Magnésio EV pode suprimir arritmias ventriculares",
    ],
    keyPoints: [
      "Gluconato de cálcio CONTRAINDICADO na intoxicação digitálica",
      "Anticorpos: tratamento definitivo — solicitar precocemente",
      "Hipercalemia é marcador de gravidade na intoxicação aguda",
    ],
  },
  {
    id: "ferro",
    name: "Ferro (Sulfato Ferroso e outros sais)",
    aliases: ["Sulfato ferroso", "Fumarato ferroso"],
    category: "Outros",
    icon: "💊",
    severity: "grave",
    mechanism: "Ferro livre catalisa radicais livres (Fenton) → lesão GI, hepática, cardiovascular",
    symptoms: [
      "Fase 1 (0-6h): vômitos, diarreia, dor abdominal, hematêmese",
      "Fase 2 (6-24h): aparente melhora",
      "Fase 3 (12-48h): choque, acidose metabólica, IH",
      "Fase 4 (2-6 sem): estenose pilórica cicatricial",
    ],
    redFlags: ["Sideremia > 500 µg/dL", "Acidose metabólica", "Choque", "Leucocitose > 15.000 + glicemia > 150 → nível > 300"],
    antidotes: [
      {
        drug: "Deferoxamina",
        dose: "15 mg/kg/h EV (máx 6g/dia). Manter até urina cor-de-rosa (\"vin rosé\") desaparecer",
        route: "EV",
        notes: "Indicar se: sideremia > 500 µg/dL, sintomas sistêmicos, acidose. Monitorar toxicidade pulmonar com doses prolongadas.",
      },
    ],
    decontamination: [
      {
        method: "Lavagem Intestinal Total (polietilenoglicol)",
        indication: "Comprimidos visíveis na radiografia, ingestão de liberação prolongada",
        howTo: "1-2 L/h VO ou SNG até efluente retal limpo",
      },
    ],
    supportiveCare: [
      "Reposição volêmica agressiva",
      "Monitorar função hepática",
      "Carvão ativado NÃO adsorve ferro",
    ],
    keyPoints: [
      "Fase de melhora aparente (fase 2) é enganosa — monitorar rigorosamente",
      "Urina cor \"vin rosé\" confirma excreção de ferrioxamina (tratamento eficaz)",
      "Carvão ativado ineficaz para ferro",
    ],
  },
];

export const toxicologyCategories = Array.from(new Set(toxicAgents.map(a => a.category)));

export function searchToxicAgents(query: string): ToxicAgent[] {
  if (!query || query.length < 2) return toxicAgents;
  const q = query.toLowerCase();
  return toxicAgents.filter(a =>
    a.name.toLowerCase().includes(q) ||
    a.aliases?.some(al => al.toLowerCase().includes(q)) ||
    a.category.toLowerCase().includes(q) ||
    a.symptoms.some(s => s.toLowerCase().includes(q))
  );
}

export function getToxicAgent(id: string): ToxicAgent | undefined {
  return toxicAgents.find(a => a.id === id);
}
