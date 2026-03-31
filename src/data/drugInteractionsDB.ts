// Comprehensive drug interaction database with severity, mechanism, recommendations and alternatives

export type Severity = "contraindicado" | "grave" | "moderado" | "leve";

export interface DrugInteraction {
  drugA: string[];   // normalized names/aliases for drug A
  drugB: string[];   // normalized names/aliases for drug B
  severity: Severity;
  mechanism: string;
  effect: string;
  recommendation: string;
  alternative?: string;
  monitoring?: string;
}

export const severityConfig: Record<Severity, { label: string; color: string; bgColor: string; borderColor: string; icon: string }> = {
  contraindicado: { label: "CONTRAINDICADO", color: "text-red-700 dark:text-red-400", bgColor: "bg-red-500/15", borderColor: "border-red-500/30", icon: "🚫" },
  grave: { label: "GRAVE", color: "text-destructive", bgColor: "bg-destructive/10", borderColor: "border-destructive/25", icon: "⚠️" },
  moderado: { label: "MODERADO", color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/25", icon: "⚡" },
  leve: { label: "LEVE", color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/25", icon: "ℹ️" },
};

export const interactionsDB: DrugInteraction[] = [
  // === ANTICOAGULANTES ===
  {
    drugA: ["varfarina", "marevan", "coumadin"],
    drugB: ["ácido acetilsalicílico", "aas", "aspirina"],
    severity: "grave",
    mechanism: "Inibição plaquetária + anticoagulação oral — efeito hemorrágico sinérgico",
    effect: "Risco hemorrágico aumentado, especialmente sangramento GI e intracraniano",
    recommendation: "Evitar uso concomitante quando possível. Se necessário, monitorar INR 2x/semana e usar IBP profilático",
    alternative: "Considerar clopidogrel se indicação antiplaquetária",
    monitoring: "INR, hemograma, sinais de sangramento",
  },
  {
    drugA: ["varfarina", "marevan"],
    drugB: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno", "piroxicam", "meloxicam", "tenoxicam"],
    severity: "grave",
    mechanism: "AINEs inibem COX-1 plaquetária e podem causar erosão gástrica",
    effect: "Risco de sangramento GI aumentado em 3-6x",
    recommendation: "Evitar AINEs. Se imprescindível, usar por curto período com IBP",
    alternative: "Paracetamol (até 2g/dia) ou dipirona",
    monitoring: "INR, hemograma, sangue oculto nas fezes",
  },
  {
    drugA: ["varfarina", "marevan"],
    drugB: ["amiodarona", "ancoron"],
    severity: "grave",
    mechanism: "Amiodarona inibe CYP2C9 e CYP3A4, reduzindo metabolismo da varfarina",
    effect: "Aumento do INR em 30-50%, risco de sangramento",
    recommendation: "Reduzir dose de varfarina em 30-50% ao iniciar amiodarona. Monitorar INR semanalmente por 6-8 semanas",
    monitoring: "INR semanal nas primeiras 8 semanas",
  },
  {
    drugA: ["varfarina", "marevan"],
    drugB: ["fluconazol", "voriconazol"],
    severity: "grave",
    mechanism: "Azólicos inibem CYP2C9 — principal via metabólica da varfarina",
    effect: "Aumento significativo do INR, risco de sangramento grave",
    recommendation: "Reduzir varfarina 25-50%. Monitorar INR a cada 2-3 dias",
    alternative: "Micafungina ou anidulafungina (se possível)",
    monitoring: "INR a cada 2-3 dias durante tratamento antifúngico",
  },
  {
    drugA: ["varfarina", "marevan"],
    drugB: ["metronidazol", "flagyl"],
    severity: "moderado",
    mechanism: "Metronidazol inibe CYP2C9",
    effect: "Aumento do efeito anticoagulante",
    recommendation: "Monitorar INR. Considerar redução de 25% da varfarina",
    monitoring: "INR antes, durante e após metronidazol",
  },
  {
    drugA: ["varfarina", "marevan"],
    drugB: ["rifampicina"],
    severity: "contraindicado",
    mechanism: "Rifampicina é potente indutor de CYP2C9 e CYP3A4",
    effect: "Redução drástica do efeito anticoagulante — risco de trombose",
    recommendation: "Contraindicado. Usar anticoagulante alternativo se necessário",
    alternative: "Heparina durante tratamento com rifampicina",
  },

  // === DIGOXINA ===
  {
    drugA: ["digoxina", "lanoxin"],
    drugB: ["amiodarona", "ancoron"],
    severity: "grave",
    mechanism: "Amiodarona inibe glicoproteína-P, reduzindo clearance da digoxina",
    effect: "Aumento de 70-100% da digoxinemia — intoxicação digitálica",
    recommendation: "REDUZIR dose de digoxina em 50% ao iniciar amiodarona",
    monitoring: "Digoxinemia (alvo 0.5-0.9 ng/mL), ECG, K+ sérico",
  },
  {
    drugA: ["digoxina", "lanoxin"],
    drugB: ["verapamil", "ditiazem"],
    severity: "grave",
    mechanism: "Bloqueadores de canal de cálcio inibem clearance renal e efeito cronotrópico",
    effect: "Bradicardia severa e aumento da digoxinemia",
    recommendation: "Evitar combinação. Se necessário, reduzir digoxina e monitorar FC",
    alternative: "Beta-bloqueador (com cautela)",
    monitoring: "FC, ECG, digoxinemia",
  },
  {
    drugA: ["digoxina", "lanoxin"],
    drugB: ["furosemida", "hidroclorotiazida", "clortalidona", "indapamida"],
    severity: "moderado",
    mechanism: "Diuréticos causam hipocalemia e hipomagnesemia",
    effect: "Maior sensibilidade à toxicidade digitálica",
    recommendation: "Repor K+ e Mg²+. Manter K+ > 4.0 mEq/L",
    monitoring: "K+ sérico, Mg²+, digoxinemia, ECG",
  },

  // === IECA / BRA ===
  {
    drugA: ["enalapril", "captopril", "ramipril", "lisinopril", "perindopril"],
    drugB: ["espironolactona", "eplerenona", "amilorida"],
    severity: "grave",
    mechanism: "Duplo bloqueio da excreção de potássio — retenção de K+",
    effect: "Hipercalemia potencialmente fatal (K+ > 6.0 mEq/L)",
    recommendation: "Se necessário, iniciar espironolactona em dose baixa (12.5-25mg) com monitoramento rigoroso",
    monitoring: "K+ sérico em 3, 7 e 30 dias. Creatinina",
  },
  {
    drugA: ["enalapril", "captopril", "ramipril", "lisinopril"],
    drugB: ["losartana", "valsartana", "candesartana", "telmisartana", "irbesartana"],
    severity: "moderado",
    mechanism: "Duplo bloqueio do SRAA",
    effect: "Hipercalemia, hipotensão e insuficiência renal aguda",
    recommendation: "Evitar combinação (ONTARGET trial). Não há benefício adicional",
    alternative: "Usar apenas um bloqueador do SRAA",
    monitoring: "K+, creatinina, PA",
  },
  {
    drugA: ["enalapril", "captopril", "losartana", "valsartana"],
    drugB: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno"],
    severity: "moderado",
    mechanism: "AINEs reduzem prostaglandinas renais vasodilatadoras",
    effect: "Redução do efeito anti-hipertensivo e risco de IRA",
    recommendation: "Evitar AINEs crônicos. Se necessário, monitorar função renal",
    alternative: "Paracetamol ou dipirona",
    monitoring: "PA, creatinina, K+",
  },

  // === ESTATINAS ===
  {
    drugA: ["sinvastatina", "atorvastatina", "rosuvastatina"],
    drugB: ["ciclosporina"],
    severity: "contraindicado",
    mechanism: "Ciclosporina inibe CYP3A4, OATP1B1 e glicoproteína-P",
    effect: "Risco extremo de rabdomiólise (aumento de 6-10x nos níveis de estatina)",
    recommendation: "Contraindicado com sinvastatina. Atorvastatina máx 10mg. Preferir pravastatina",
    alternative: "Pravastatina (menor interação) ou fluvastatina",
  },
  {
    drugA: ["sinvastatina"],
    drugB: ["amiodarona", "ancoron"],
    severity: "moderado",
    mechanism: "Amiodarona inibe CYP3A4",
    effect: "Risco de miopatia e rabdomiólise",
    recommendation: "Limitar sinvastatina a 20mg/dia",
    alternative: "Rosuvastatina ou pravastatina",
    monitoring: "CPK, sintomas musculares",
  },
  {
    drugA: ["sinvastatina", "atorvastatina"],
    drugB: ["fluconazol", "itraconazol", "voriconazol", "cetoconazol"],
    severity: "grave",
    mechanism: "Azólicos são potentes inibidores de CYP3A4",
    effect: "Risco de rabdomiólise",
    recommendation: "Suspender estatina durante tratamento antifúngico",
    alternative: "Pravastatina ou rosuvastatina",
    monitoring: "CPK, dor muscular",
  },

  // === ANTIPLAQUETÁRIOS ===
  {
    drugA: ["clopidogrel", "plavix"],
    drugB: ["omeprazol"],
    severity: "moderado",
    mechanism: "Omeprazol inibe CYP2C19, necessário para ativar clopidogrel",
    effect: "Redução de 40-50% do efeito antiplaquetário",
    recommendation: "Trocar omeprazol por pantoprazol (menor interação via CYP2C19)",
    alternative: "Pantoprazol 40mg ou esomeprazol",
  },
  {
    drugA: ["clopidogrel", "plavix"],
    drugB: ["ácido acetilsalicílico", "aas", "aspirina"],
    severity: "leve",
    mechanism: "Dupla antiagregação plaquetária — sinergismo terapêutico",
    effect: "Aumento do risco hemorrágico (esperado e geralmente aceito em SCA/stent)",
    recommendation: "Combinação indicada em SCA e pós-stent por 6-12 meses. Usar IBP profilático",
    monitoring: "Hemograma, sinais de sangramento",
  },

  // === METOTREXATO ===
  {
    drugA: ["metotrexato", "mtx"],
    drugB: ["sulfametoxazol", "trimetoprima", "bactrim", "cotrimoxazol"],
    severity: "contraindicado",
    mechanism: "Ambos inibem metabolismo do folato em diferentes pontos",
    effect: "Pancitopenia grave, aplasia medular",
    recommendation: "Contraindicado. Não usar SMX-TMP com MTX",
    alternative: "Outro antibiótico conforme cultura/sensibilidade",
  },
  {
    drugA: ["metotrexato", "mtx"],
    drugB: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno"],
    severity: "grave",
    mechanism: "AINEs reduzem excreção renal do metotrexato",
    effect: "Toxicidade hematológica e renal do MTX",
    recommendation: "Evitar AINEs com doses altas de MTX. Em doses baixas (artrite), usar com cautela",
    alternative: "Paracetamol ou corticoide em curto prazo",
    monitoring: "Hemograma, função renal, nível sérico de MTX",
  },

  // === LÍTIO ===
  {
    drugA: ["lítio", "carbonato de lítio", "carbolitium"],
    drugB: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno", "piroxicam"],
    severity: "grave",
    mechanism: "AINEs reduzem clearance renal do lítio em 15-25%",
    effect: "Intoxicação por lítio (tremor, ataxia, insuficiência renal)",
    recommendation: "Evitar AINEs. Se necessário, monitorar litemia a cada 3 dias",
    alternative: "Paracetamol ou aspirina em dose baixa",
    monitoring: "Litemia (alvo 0.6-1.2 mEq/L), creatinina",
  },
  {
    drugA: ["lítio", "carbonato de lítio", "carbolitium"],
    drugB: ["furosemida", "hidroclorotiazida", "clortalidona"],
    severity: "grave",
    mechanism: "Diuréticos causam depleção de sódio → reabsorção tubular de lítio",
    effect: "Aumento da litemia em 25-40%, risco de toxicidade",
    recommendation: "Reduzir dose de lítio e monitorar litemia semanalmente",
    monitoring: "Litemia, Na+, função renal",
  },
  {
    drugA: ["lítio", "carbonato de lítio"],
    drugB: ["enalapril", "captopril", "losartana", "valsartana", "ramipril"],
    severity: "moderado",
    mechanism: "IECA/BRA reduzem TFG e excreção de lítio",
    effect: "Aumento da litemia",
    recommendation: "Monitorar litemia ao iniciar IECA/BRA e após ajustes de dose",
    monitoring: "Litemia, creatinina, K+",
  },

  // === QUINOLONAS ===
  {
    drugA: ["ciprofloxacino", "levofloxacino", "moxifloxacino"],
    drugB: ["amiodarona", "sotalol", "dronedarona"],
    severity: "grave",
    mechanism: "Ambas prolongam intervalo QT por mecanismos diferentes",
    effect: "Risco de Torsades de Pointes e morte súbita",
    recommendation: "Evitar combinação. Se necessário, monitorar QTc e K+/Mg²+",
    alternative: "Amoxicilina-clavulanato ou cefalosporina",
    monitoring: "ECG (QTc), K+, Mg²+",
  },
  {
    drugA: ["ciprofloxacino"],
    drugB: ["tizanidina"],
    severity: "contraindicado",
    mechanism: "Ciprofloxacino inibe CYP1A2, aumentando nível de tizanidina 10x",
    effect: "Hipotensão grave, bradicardia, sedação excessiva",
    recommendation: "Combinação contraindicada",
    alternative: "Usar outro antibiótico ou outro relaxante muscular",
  },
  {
    drugA: ["ciprofloxacino", "levofloxacino", "norfloxacino"],
    drugB: ["hidróxido de alumínio", "hidróxido de magnésio", "carbonato de cálcio", "sucralfato"],
    severity: "moderado",
    mechanism: "Cátions divalentes/trivalentes quelam quinolonas no TGI",
    effect: "Redução de 50-90% da absorção da quinolona",
    recommendation: "Administrar quinolona 2h antes ou 6h após antiácidos",
  },

  // === ANTIDEPRESSIVOS / PSIQUIÁTRICOS ===
  {
    drugA: ["fluoxetina", "paroxetina", "sertralina", "citalopram", "escitalopram"],
    drugB: ["tramadol"],
    severity: "grave",
    mechanism: "ISRS + tramadol = excesso de serotonina",
    effect: "Síndrome serotoninérgica (hipertermia, rigidez, clonus, delirium)",
    recommendation: "Evitar combinação. Se necessário, usar dose baixa de tramadol com monitoramento",
    alternative: "Morfina ou codeína (menor risco serotoninérgico)",
    monitoring: "Sinais de síndrome serotoninérgica",
  },
  {
    drugA: ["fluoxetina", "paroxetina", "sertralina", "citalopram", "escitalopram", "venlafaxina", "duloxetina"],
    drugB: ["selegilina", "tranilcipromina", "isocarboxazida", "moclobemida"],
    severity: "contraindicado",
    mechanism: "ISRS/IRSN + IMAO = acúmulo maciço de serotonina",
    effect: "Síndrome serotoninérgica grave — potencialmente fatal",
    recommendation: "CONTRAINDICADO. Aguardar washout de 2-5 semanas entre as classes",
  },
  {
    drugA: ["fluoxetina", "paroxetina"],
    drugB: ["metoprolol", "carvedilol"],
    severity: "moderado",
    mechanism: "Fluoxetina/paroxetina inibem CYP2D6, que metaboliza beta-bloqueadores",
    effect: "Aumento do efeito beta-bloqueador → bradicardia e hipotensão",
    recommendation: "Usar atenolol ou bisoprolol (não metabolizados por CYP2D6)",
    alternative: "Atenolol, bisoprolol, nebivolol",
    monitoring: "FC, PA",
  },
  {
    drugA: ["citalopram", "escitalopram"],
    drugB: ["amiodarona", "sotalol", "haloperidol", "droperidol"],
    severity: "grave",
    mechanism: "Ambos prolongam QTc",
    effect: "Risco aumentado de Torsades de Pointes",
    recommendation: "Evitar combinação. Se necessário, ECG basal e monitoramento",
    alternative: "Sertralina (menor efeito no QTc)",
    monitoring: "ECG (QTc), K+, Mg²+",
  },

  // === METFORMINA ===
  {
    drugA: ["metformina"],
    drugB: ["contraste iodado"],
    severity: "grave",
    mechanism: "Contraste pode causar nefropatia → acúmulo de metformina",
    effect: "Acidose lática (rara mas fatal)",
    recommendation: "Suspender metformina 48h antes do contraste. Retomar após confirmar creatinina normal",
    monitoring: "Creatinina antes e 48h após contraste",
  },
  {
    drugA: ["metformina"],
    drugB: ["álcool", "etanol"],
    severity: "moderado",
    mechanism: "Álcool inibe gliconeogênese hepática",
    effect: "Risco de hipoglicemia e acidose lática",
    recommendation: "Orientar abstinência ou moderação",
  },

  // === OPIOIDES ===
  {
    drugA: ["fentanil", "morfina", "metadona", "oxicodona"],
    drugB: ["benzodiazepínicos", "diazepam", "midazolam", "clonazepam", "alprazolam", "lorazepam"],
    severity: "grave",
    mechanism: "Depressão sinérgica do SNC e do centro respiratório",
    effect: "Depressão respiratória, coma, morte",
    recommendation: "FDA black box warning. Usar menores doses e monitorar saturação",
    monitoring: "SpO2, FR, nível de consciência",
  },
  {
    drugA: ["metadona"],
    drugB: ["amiodarona", "sotalol", "haloperidol", "ciprofloxacino", "levofloxacino"],
    severity: "grave",
    mechanism: "Metadona + fármacos que prolongam QT",
    effect: "Risco de Torsades de Pointes",
    recommendation: "ECG basal e monitoramento. Manter QTc < 500ms",
    monitoring: "ECG, QTc, K+, Mg²+",
  },

  // === ANTIBIÓTICOS ===
  {
    drugA: ["gentamicina", "amicacina", "tobramicina"],
    drugB: ["vancomicina"],
    severity: "moderado",
    mechanism: "Nefrotoxicidade sinérgica — lesão tubular",
    effect: "Insuficiência renal aguda",
    recommendation: "Monitorar creatinina diariamente. Dosar vancocinemia e aminoglicosídeo",
    monitoring: "Creatinina, vancocinemia (vale), nível de aminoglicosídeo",
  },
  {
    drugA: ["gentamicina", "amicacina", "tobramicina"],
    drugB: ["furosemida"],
    severity: "moderado",
    mechanism: "Ototoxicidade e nefrotoxicidade sinérgicas",
    effect: "Perda auditiva e insuficiência renal",
    recommendation: "Monitorar função renal e auditiva. Hidratar adequadamente",
    monitoring: "Creatinina, audiometria se uso prolongado",
  },
  {
    drugA: ["linezolida"],
    drugB: ["fluoxetina", "paroxetina", "sertralina", "venlafaxina", "duloxetina", "tramadol"],
    severity: "grave",
    mechanism: "Linezolida é IMAO fraco — inibe MAO-A reversivelmente",
    effect: "Síndrome serotoninérgica",
    recommendation: "Evitar combinação. Se necessário, suspender ISRS 2 semanas antes",
    alternative: "Vancomicina ou daptomicina",
  },

  // === ANTICONVULSIVANTES ===
  {
    drugA: ["carbamazepina", "tegretol"],
    drugB: ["anticoncepcionais orais", "etinilestradiol", "levonorgestrel", "desogestrel"],
    severity: "grave",
    mechanism: "Carbamazepina induz CYP3A4, acelerando metabolismo de contraceptivos",
    effect: "Falha contraceptiva — risco de gravidez indesejada",
    recommendation: "Usar método contraceptivo adicional (DIU de cobre ou injetável trimestral)",
    alternative: "Levetiracetam ou lamotrigina (menor interação)",
  },
  {
    drugA: ["fenitoína", "hidantoína"],
    drugB: ["fluconazol", "voriconazol"],
    severity: "grave",
    mechanism: "Azólicos inibem CYP2C9/CYP2C19 (metabolismo da fenitoína) e fenitoína induz CYP (metabolismo do azólico)",
    effect: "Toxicidade por fenitoína e falha antifúngica",
    recommendation: "Monitorar nível sérico de fenitoína. Considerar outro antifúngico",
    monitoring: "Fenitoínemia, função hepática",
  },
  {
    drugA: ["valproato", "ácido valpróico", "depakene", "depakote"],
    drugB: ["carbamazepina", "tegretol"],
    severity: "moderado",
    mechanism: "Carbamazepina induz metabolismo do valproato; valproato inibe epóxido-hidrolase",
    effect: "Redução do nível de valproato e aumento do epóxido de carbamazepina (tóxico)",
    recommendation: "Monitorar níveis séricos de ambos",
    monitoring: "Níveis séricos de valproato e carbamazepina",
  },

  // === POTÁSSIO / ELETRÓLITOS ===
  {
    drugA: ["cloreto de potássio", "kcl", "potássio"],
    drugB: ["espironolactona", "eplerenona", "amilorida", "triantereno"],
    severity: "grave",
    mechanism: "Diuréticos poupadores de K+ + suplementação de K+",
    effect: "Hipercalemia grave — risco de arritmia fatal",
    recommendation: "Evitar suplementação de K+ com poupadores. Monitorar K+ rigorosamente",
    monitoring: "K+ sérico, ECG",
  },

  // === INSULINA ===
  {
    drugA: ["insulina", "insulina nph", "insulina glargina", "insulina lispro"],
    drugB: ["propranolol", "atenolol", "metoprolol"],
    severity: "moderado",
    mechanism: "Beta-bloqueadores mascaram sinais adrenérgicos de hipoglicemia",
    effect: "Hipoglicemia não percebida (sem taquicardia, tremor)",
    recommendation: "Preferir beta-bloqueadores cardiosseletivos. Orientar monitoramento de glicemia",
    alternative: "Nebivolol, bisoprolol (mais seletivos)",
    monitoring: "Glicemia capilar frequente",
  },
];

// Normalize for matching
export function normalizeDrug(s: string): string {
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

export interface FoundInteraction {
  drugAName: string;
  drugBName: string;
  interaction: DrugInteraction;
}

export function checkInteractions(drugNames: string[]): FoundInteraction[] {
  const normalized = drugNames.map(d => normalizeDrug(d));
  const results: FoundInteraction[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < normalized.length; i++) {
    for (let j = i + 1; j < normalized.length; j++) {
      const a = normalized[i];
      const b = normalized[j];

      for (const inter of interactionsDB) {
        const aMatchesDrugA = inter.drugA.some(d => a.includes(normalizeDrug(d)) || normalizeDrug(d).includes(a));
        const bMatchesDrugB = inter.drugB.some(d => b.includes(normalizeDrug(d)) || normalizeDrug(d).includes(b));
        const aMatchesDrugB = inter.drugB.some(d => a.includes(normalizeDrug(d)) || normalizeDrug(d).includes(a));
        const bMatchesDrugA = inter.drugA.some(d => b.includes(normalizeDrug(d)) || normalizeDrug(d).includes(b));

        if ((aMatchesDrugA && bMatchesDrugB) || (aMatchesDrugB && bMatchesDrugA)) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}-${inter.mechanism}`;
          if (!seen.has(key)) {
            seen.add(key);
            results.push({
              drugAName: drugNames[i],
              drugBName: drugNames[j],
              interaction: inter,
            });
          }
        }
      }
    }
  }

  // Sort by severity
  const order: Record<Severity, number> = { contraindicado: 0, grave: 1, moderado: 2, leve: 3 };
  return results.sort((a, b) => order[a.interaction.severity] - order[b.interaction.severity]);
}
