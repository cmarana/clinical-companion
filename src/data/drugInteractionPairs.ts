// Shared high-risk drug interaction pairs database
// Used by both DrugInteractionAlert (Bulário) and PrescriptionInteractionChecker (Receituário)

export interface InteractionPair {
  drugs: string[];
  severity: "grave" | "moderado";
  desc: string;
}

export const HIGH_RISK_PAIRS: Record<string, InteractionPair[]> = {
  "varfarina": [
    { drugs: ["ácido acetilsalicílico", "aas", "aspirina"], severity: "grave", desc: "Risco hemorrágico aumentado. Monitorar INR rigorosamente." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno", "tenoxicam", "naproxeno", "meloxicam", "piroxicam"], severity: "grave", desc: "AINEs aumentam risco de sangramento GI com varfarina." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Amiodarona aumenta efeito anticoagulante — reduzir dose de varfarina 30–50%." },
    { drugs: ["metronidazol"], severity: "moderado", desc: "Inibe metabolismo da varfarina — monitorar INR." },
    { drugs: ["fluconazol"], severity: "grave", desc: "Inibe CYP2C9 — aumento significativo do INR." },
    { drugs: ["ciprofloxacino", "levofloxacino"], severity: "moderado", desc: "Quinolonas podem potencializar varfarina — monitorar INR." },
    { drugs: ["omeprazol"], severity: "moderado", desc: "Pode alterar metabolismo da varfarina via CYP2C19." },
  ],
  "digoxina": [
    { drugs: ["amiodarona"], severity: "grave", desc: "Amiodarona eleva nível sérico de digoxina — reduzir dose 50%." },
    { drugs: ["verapamil"], severity: "grave", desc: "Verapamil aumenta digoxinemia e risco de bradicardia." },
    { drugs: ["furosemida", "hidroclorotiazida", "clortalidona"], severity: "moderado", desc: "Diuréticos causam hipocalemia → maior toxicidade digitálica." },
    { drugs: ["espironolactona"], severity: "moderado", desc: "Espironolactona pode aumentar nível de digoxina." },
    { drugs: ["claritromicina", "eritromicina"], severity: "grave", desc: "Macrolídeos aumentam nível sérico de digoxina." },
  ],
  "amiodarona": [
    { drugs: ["digoxina"], severity: "grave", desc: "Aumenta nível sérico de digoxina — reduzir dose 50%." },
    { drugs: ["varfarina"], severity: "grave", desc: "Aumenta efeito anticoagulante — reduzir varfarina 30–50%." },
    { drugs: ["sotalol", "procainamida"], severity: "grave", desc: "Risco de prolongamento QT e torsades de pointes." },
    { drugs: ["ciprofloxacino", "azitromicina", "levofloxacino", "moxifloxacino"], severity: "moderado", desc: "Risco adicional de prolongamento QT." },
    { drugs: ["sinvastatina", "atorvastatina"], severity: "moderado", desc: "Aumento do risco de miopatia/rabdomiólise." },
    { drugs: ["metoprolol", "propranolol", "carvedilol"], severity: "moderado", desc: "Risco de bradicardia e bloqueio AV." },
  ],
  "enalapril": [
    { drugs: ["espironolactona", "amilorida", "eplerenona"], severity: "grave", desc: "Hipercalemia potencialmente fatal — monitorar K+ sérico." },
    { drugs: ["losartana", "valsartana", "candesartana", "telmisartana"], severity: "moderado", desc: "Duplo bloqueio SRAA — risco de hipercalemia e IRA." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno"], severity: "moderado", desc: "AINEs reduzem efeito anti-hipertensivo e aumentam risco de IRA." },
  ],
  "captopril": [
    { drugs: ["espironolactona", "amilorida", "eplerenona"], severity: "grave", desc: "Hipercalemia potencialmente fatal — monitorar K+ sérico." },
    { drugs: ["losartana", "valsartana"], severity: "moderado", desc: "Duplo bloqueio SRAA — risco de hipercalemia e IRA." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "moderado", desc: "AINEs reduzem efeito anti-hipertensivo." },
  ],
  "losartana": [
    { drugs: ["espironolactona", "amilorida", "eplerenona"], severity: "grave", desc: "Hipercalemia — monitorar K+ sérico." },
    { drugs: ["enalapril", "captopril", "ramipril", "lisinopril"], severity: "moderado", desc: "Duplo bloqueio SRAA — risco de hipercalemia e IRA." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "moderado", desc: "AINEs reduzem efeito anti-hipertensivo." },
  ],
  "metformina": [
    { drugs: ["contraste iodado"], severity: "grave", desc: "Suspender 48h antes e após contraste — risco de acidose lática." },
    { drugs: ["furosemida"], severity: "moderado", desc: "Furosemida pode aumentar risco de acidose lática em desidratação." },
  ],
  "sinvastatina": [
    { drugs: ["amiodarona"], severity: "moderado", desc: "Limitar sinvastatina a 20mg/dia com amiodarona — risco de rabdomiólise." },
    { drugs: ["ciclosporina"], severity: "grave", desc: "Contraindicado — risco de rabdomiólise." },
    { drugs: ["fluconazol", "itraconazol", "voriconazol", "cetoconazol"], severity: "grave", desc: "Azólicos inibem CYP3A4 — risco de rabdomiólise." },
    { drugs: ["claritromicina", "eritromicina"], severity: "grave", desc: "Macrolídeos inibem CYP3A4 — risco de rabdomiólise." },
  ],
  "atorvastatina": [
    { drugs: ["ciclosporina"], severity: "grave", desc: "Evitar — risco de rabdomiólise." },
    { drugs: ["amiodarona"], severity: "moderado", desc: "Monitorar CPK — risco de miopatia." },
    { drugs: ["claritromicina", "eritromicina"], severity: "moderado", desc: "Macrolídeos aumentam nível de atorvastatina." },
  ],
  "clopidogrel": [
    { drugs: ["omeprazol"], severity: "moderado", desc: "Omeprazol reduz ativação do clopidogrel via CYP2C19. Preferir pantoprazol." },
  ],
  "metotrexato": [
    { drugs: ["sulfametoxazol", "trimetoprima"], severity: "grave", desc: "Ambos inibem folato — pancitopenia grave." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno"], severity: "grave", desc: "AINEs reduzem clearance renal do metotrexato — toxicidade." },
  ],
  "lítio": [
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno", "naproxeno"], severity: "grave", desc: "AINEs aumentam litemia — risco de intoxicação." },
    { drugs: ["furosemida", "hidroclorotiazida"], severity: "grave", desc: "Diuréticos aumentam litemia." },
    { drugs: ["enalapril", "losartana", "captopril", "ramipril"], severity: "moderado", desc: "IECA/BRA podem aumentar litemia." },
  ],
  "ciprofloxacino": [
    { drugs: ["tizanidina"], severity: "grave", desc: "Contraindicado — ciprofloxacino aumenta drasticamente nível de tizanidina." },
    { drugs: ["amiodarona", "sotalol"], severity: "moderado", desc: "Risco de prolongamento QT." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Pode potencializar efeito anticoagulante." },
  ],
  "tramadol": [
    { drugs: ["fluoxetina", "sertralina", "paroxetina", "venlafaxina", "duloxetina"], severity: "grave", desc: "Risco de síndrome serotoninérgica — evitar combinação." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz efeito do tramadol via CYP3A4." },
  ],
  "fluoxetina": [
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica." },
    { drugs: ["selegilina", "rasagilina"], severity: "grave", desc: "IMAO + ISRS — síndrome serotoninérgica fatal." },
    { drugs: ["varfarina"], severity: "moderado", desc: "ISRS aumenta risco de sangramento com anticoagulantes." },
    { drugs: ["metoprolol"], severity: "moderado", desc: "Fluoxetina inibe CYP2D6 — aumento do nível de metoprolol." },
  ],
  "sertralina": [
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica." },
    { drugs: ["selegilina", "rasagilina"], severity: "grave", desc: "IMAO + ISRS — síndrome serotoninérgica fatal." },
  ],
  "claritromicina": [
    { drugs: ["sinvastatina", "atorvastatina"], severity: "grave", desc: "Inibe CYP3A4 — risco de rabdomiólise com estatinas." },
    { drugs: ["digoxina"], severity: "grave", desc: "Aumenta nível sérico de digoxina." },
    { drugs: ["carbamazepina"], severity: "grave", desc: "Aumenta nível de carbamazepina — risco de toxicidade." },
    { drugs: ["colchicina"], severity: "grave", desc: "Contraindicado em insuficiência renal — toxicidade fatal." },
  ],
  "carbamazepina": [
    { drugs: ["claritromicina", "eritromicina"], severity: "grave", desc: "Macrolídeos aumentam nível de carbamazepina." },
    { drugs: ["valproato", "ácido valproico"], severity: "moderado", desc: "Carbamazepina reduz nível de valproato." },
    { drugs: ["anticoncepcionais", "etinilestradiol", "levonorgestrel"], severity: "moderado", desc: "Carbamazepina reduz eficácia contraceptiva — usar método adicional." },
  ],
  "heparina": [
    { drugs: ["ácido acetilsalicílico", "aas", "aspirina"], severity: "grave", desc: "Risco hemorrágico aumentado — evitar combinação sem indicação clara." },
    { drugs: ["ibuprofeno", "diclofenaco", "cetoprofeno"], severity: "grave", desc: "AINEs + heparina = alto risco de sangramento." },
    { drugs: ["clopidogrel", "ticagrelor"], severity: "moderado", desc: "Antiplaquetários + heparina requerem monitorização." },
  ],
  "enoxaparina": [
    { drugs: ["ácido acetilsalicílico", "aas"], severity: "moderado", desc: "Risco de sangramento aumentado — monitorar." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "moderado", desc: "AINEs + HBPM = risco hemorrágico." },
  ],
  "insulina": [
    { drugs: ["propranolol", "atenolol"], severity: "moderado", desc: "Betabloqueadores mascaram sintomas de hipoglicemia." },
    { drugs: ["corticoides", "prednisona", "dexametasona", "hidrocortisona"], severity: "moderado", desc: "Corticoides causam hiperglicemia — ajustar dose de insulina." },
  ],
  "prednisona": [
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno"], severity: "moderado", desc: "Corticoide + AINE = risco GI aumentado (úlcera, sangramento)." },
    { drugs: ["insulina", "metformina", "glibenclamida"], severity: "moderado", desc: "Corticoides causam hiperglicemia — monitorar glicemia." },
  ],
  "clozapina": [
    { drugs: ["ciprofloxacino"], severity: "grave", desc: "Ciprofloxacino inibe CYP1A2 — aumento perigoso do nível de clozapina." },
    { drugs: ["carbamazepina"], severity: "grave", desc: "Carbamazepina + clozapina — risco de agranulocitose aditivo." },
  ],
  "rivaroxabana": [
    { drugs: ["ácido acetilsalicílico", "aas"], severity: "moderado", desc: "Risco de sangramento aumentado com antiagregante." },
    { drugs: ["cetoconazol", "itraconazol"], severity: "grave", desc: "Azólicos aumentam nível de rivaroxabana — evitar." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "moderado", desc: "AINEs + DOAC = risco hemorrágico." },
  ],
  "apixabana": [
    { drugs: ["ácido acetilsalicílico", "aas"], severity: "moderado", desc: "Risco de sangramento aumentado." },
    { drugs: ["cetoconazol", "itraconazol"], severity: "grave", desc: "Azólicos aumentam nível de apixabana." },
  ],
};

// Normalize drug name for matching
export function normalizeDrugName(s: string): string {
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export interface DetectedInteraction {
  drugA: string;
  drugB: string;
  severity: "grave" | "moderado";
  description: string;
}

/**
 * Check a list of drug names for pairwise interactions.
 * Returns unique interactions found.
 */
export function checkInteractions(drugNames: string[]): DetectedInteraction[] {
  const results: DetectedInteraction[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < drugNames.length; i++) {
    const nameA = drugNames[i];
    const normA = normalizeDrugName(nameA);
    if (!normA) continue;

    for (const [sourceDrug, pairs] of Object.entries(HIGH_RISK_PAIRS)) {
      const sourceNorm = normalizeDrugName(sourceDrug);
      if (!normA.includes(sourceNorm)) continue;

      for (const pair of pairs) {
        for (const target of pair.drugs) {
          const targetNorm = normalizeDrugName(target);
          // Check if any OTHER drug in the list matches
          for (let j = 0; j < drugNames.length; j++) {
            if (j === i) continue;
            const normB = normalizeDrugName(drugNames[j]);
            if (normB.includes(targetNorm)) {
              const key = [normA, normB].sort().join("|") + pair.desc;
              if (!seen.has(key)) {
                seen.add(key);
                results.push({
                  drugA: nameA,
                  drugB: drugNames[j],
                  severity: pair.severity,
                  description: pair.desc,
                });
              }
            }
          }
        }
      }
    }
  }

  // Sort: grave first
  return results.sort((a, b) => (a.severity === "grave" ? -1 : 1) - (b.severity === "grave" ? -1 : 1));
}
