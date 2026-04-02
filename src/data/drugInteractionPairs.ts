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
    { drugs: ["penicilina", "amoxicilina", "piperacilina"], severity: "moderado", desc: "Penicilinas reduzem excreção renal do metotrexato — toxicidade." },
    { drugs: ["omeprazol", "pantoprazol"], severity: "moderado", desc: "IBPs podem retardar eliminação do metotrexato." },
    { drugs: ["ciprofloxacino"], severity: "moderado", desc: "Quinolonas reduzem clearance renal do metotrexato." },
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
    { drugs: ["cetoconazol"], severity: "moderado", desc: "Cetoconazol aumenta exposição a corticoides via CYP3A4." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Rifampicina acelera metabolismo da prednisona — pode requerer aumento de dose." },
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
  // === ANTIRRETROVIRAIS ===
  "ritonavir": [
    { drugs: ["sinvastatina", "atorvastatina", "lovastatina"], severity: "grave", desc: "Contraindicado — inibição potente de CYP3A4 → rabdomiólise." },
    { drugs: ["midazolam", "triazolam"], severity: "grave", desc: "Contraindicado — sedação prolongada potencialmente fatal." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Ritonavir aumenta drasticamente nível de amiodarona — arritmia fatal." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz drasticamente nível de ritonavir — falha terapêutica." },
    { drugs: ["fluticasona"], severity: "moderado", desc: "Risco de síndrome de Cushing iatrogênica — evitar uso prolongado." },
    { drugs: ["colchicina"], severity: "grave", desc: "Contraindicado em IR/IH — toxicidade fatal por colchicina." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Altera metabolismo da varfarina — monitorar INR frequentemente." },
  ],
  "efavirenz": [
    { drugs: ["midazolam", "triazolam"], severity: "grave", desc: "Contraindicado — risco de sedação prolongada." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Redução mútua de níveis séricos — monitorar." },
    { drugs: ["voriconazol"], severity: "grave", desc: "Efavirenz reduz nível de voriconazol e vice-versa — evitar." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Rifampicina reduz nível de efavirenz — ajustar dose para 800mg." },
    { drugs: ["anticoncepcionais", "etinilestradiol"], severity: "moderado", desc: "Reduz eficácia contraceptiva — usar método adicional." },
  ],
  "dolutegravir": [
    { drugs: ["rifampicina"], severity: "moderado", desc: "Rifampicina reduz nível de dolutegravir — dobrar dose para 50mg 12/12h." },
    { drugs: ["metformina"], severity: "moderado", desc: "Dolutegravir aumenta nível de metformina — limitar a 1000mg/dia." },
    { drugs: ["hidróxido de alumínio", "hidróxido de magnésio", "carbonato de cálcio"], severity: "moderado", desc: "Antiácidos/cátions reduzem absorção — separar por 2h ou tomar 6h antes." },
    { drugs: ["fenitoína", "fenobarbital", "carbamazepina"], severity: "moderado", desc: "Anticonvulsivantes reduzem nível de dolutegravir — dobrar dose." },
  ],
  "atazanavir": [
    { drugs: ["omeprazol", "pantoprazol", "esomeprazol", "lansoprazol"], severity: "grave", desc: "IBPs reduzem absorção de atazanavir — contraindicado." },
    { drugs: ["sinvastatina", "lovastatina"], severity: "grave", desc: "Contraindicado — risco de rabdomiólise." },
    { drugs: ["tenofovir"], severity: "moderado", desc: "Tenofovir reduz nível de atazanavir — usar com ritonavir." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Contraindicado — redução drástica do nível de atazanavir." },
  ],
  "tenofovir": [
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno"], severity: "moderado", desc: "AINEs aumentam risco de nefrotoxicidade com tenofovir." },
    { drugs: ["gentamicina", "amicacina"], severity: "moderado", desc: "Aminoglicosídeos + tenofovir = nefrotoxicidade aditiva." },
    { drugs: ["anfotericina b"], severity: "grave", desc: "Nefrotoxicidade sinérgica — evitar ou monitorar função renal diariamente." },
  ],
  "zidovudina": [
    { drugs: ["ganciclovir"], severity: "grave", desc: "Mielossupressão aditiva — pancitopenia grave." },
    { drugs: ["sulfametoxazol", "trimetoprima"], severity: "moderado", desc: "Risco de anemia/neutropenia — monitorar hemograma." },
    { drugs: ["ribavarina"], severity: "grave", desc: "Contraindicado — anemia grave por antagonismo intracelular." },
  ],
  // === QUIMIOTERÁPICOS ===
  "cisplatina": [
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Ototoxicidade e nefrotoxicidade sinérgicas — evitar." },
    { drugs: ["furosemida"], severity: "grave", desc: "Furosemida potencializa ototoxicidade da cisplatina." },
    { drugs: ["anfotericina b"], severity: "grave", desc: "Nefrotoxicidade aditiva — contraindicado." },
    { drugs: ["fenitoína"], severity: "moderado", desc: "Cisplatina reduz absorção de fenitoína — monitorar níveis." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Efeito anticoagulante pode ser alterado — monitorar INR." },
  ],
  "ciclofosfamida": [
    { drugs: ["alopurinol"], severity: "moderado", desc: "Alopurinol aumenta mielotoxicidade da ciclofosfamida." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Efeito anticoagulante potencializado — monitorar INR." },
    { drugs: ["succinilcolina"], severity: "grave", desc: "Ciclofosfamida prolonga bloqueio neuromuscular — apneia prolongada." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Reduz absorção de digoxina — monitorar nível sérico." },
  ],
  "doxorrubicina": [
    { drugs: ["ciclosporina"], severity: "grave", desc: "Ciclosporina aumenta exposição à doxorrubicina — cardiotoxicidade." },
    { drugs: ["verapamil"], severity: "grave", desc: "Verapamil aumenta cardiotoxicidade da doxorrubicina." },
    { drugs: ["trastuzumabe"], severity: "grave", desc: "Cardiotoxicidade sinérgica — monitorar fração de ejeção." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Reduz absorção de digoxina." },
    { drugs: ["fenitoína"], severity: "moderado", desc: "Reduz absorção de fenitoína." },
  ],
  "fluorouracil": [
    { drugs: ["varfarina"], severity: "grave", desc: "5-FU potencializa drasticamente efeito da varfarina — INR perigoso." },
    { drugs: ["fenitoína"], severity: "moderado", desc: "5-FU aumenta toxicidade da fenitoína." },
    { drugs: ["metronidazol"], severity: "moderado", desc: "Metronidazol aumenta toxicidade do 5-FU." },
    { drugs: ["leucovorina"], severity: "moderado", desc: "Leucovorina potencializa efeito e toxicidade do 5-FU (uso intencional, monitorar)." },
  ],
  "imatinibe": [
    { drugs: ["sinvastatina", "atorvastatina"], severity: "moderado", desc: "Imatinibe inibe CYP3A4 — aumenta nível de estatinas." },
    { drugs: ["varfarina"], severity: "grave", desc: "Interação imprevisível — usar HBPM como alternativa." },
    { drugs: ["cetoconazol", "itraconazol"], severity: "moderado", desc: "Azólicos aumentam nível de imatinibe." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz drasticamente nível de imatinibe — falha terapêutica." },
    { drugs: ["fenitoína", "carbamazepina"], severity: "moderado", desc: "Anticonvulsivantes reduzem nível de imatinibe." },
    { drugs: ["paracetamol"], severity: "moderado", desc: "Imatinibe inibe metabolismo do paracetamol — hepatotoxicidade." },
  ],
  "tamoxifeno": [
    { drugs: ["fluoxetina", "paroxetina"], severity: "grave", desc: "ISRS inibem CYP2D6 — reduzem conversão a endoxifeno → falha terapêutica." },
    { drugs: ["varfarina"], severity: "grave", desc: "Tamoxifeno potencializa varfarina — risco de sangramento grave." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Reduz nível de tamoxifeno via indução CYP3A4." },
  ],
  // === IMUNOSSUPRESSORES ===
  "ciclosporina": [
    { drugs: ["sinvastatina", "atorvastatina", "lovastatina"], severity: "grave", desc: "Contraindicado — risco elevado de rabdomiólise." },
    { drugs: ["cetoconazol", "itraconazol", "voriconazol"], severity: "grave", desc: "Azólicos aumentam drasticamente nível de ciclosporina — nefrotoxicidade." },
    { drugs: ["claritromicina", "eritromicina"], severity: "grave", desc: "Macrolídeos aumentam ciclosporinemia — nefrotoxicidade." },
    { drugs: ["gentamicina", "amicacina"], severity: "grave", desc: "Nefrotoxicidade sinérgica — evitar combinação." },
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno"], severity: "grave", desc: "AINEs + ciclosporina = nefrotoxicidade grave." },
    { drugs: ["metformina"], severity: "moderado", desc: "Ciclosporina pode aumentar nível de metformina." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz drasticamente nível de ciclosporina — rejeição." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Ciclosporina aumenta nível de digoxina." },
    { drugs: ["colchicina"], severity: "grave", desc: "Risco de toxicidade neuromuscular grave." },
    { drugs: ["verapamil", "diltiazem"], severity: "moderado", desc: "BCC aumentam nível de ciclosporina — monitorar." },
  ],
  "tacrolimus": [
    { drugs: ["cetoconazol", "itraconazol", "voriconazol", "fluconazol"], severity: "grave", desc: "Azólicos aumentam nível de tacrolimus — nefrotoxicidade e neurotoxicidade." },
    { drugs: ["claritromicina", "eritromicina"], severity: "grave", desc: "Macrolídeos aumentam tacrolimemia." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz nível de tacrolimus — risco de rejeição." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "moderado", desc: "AINEs aumentam nefrotoxicidade do tacrolimus." },
    { drugs: ["gentamicina", "amicacina"], severity: "grave", desc: "Nefrotoxicidade sinérgica." },
    { drugs: ["enalapril", "losartana"], severity: "moderado", desc: "Hipercalemia com IECA/BRA + tacrolimus — monitorar K+." },
    { drugs: ["espironolactona"], severity: "grave", desc: "Hipercalemia grave — evitar combinação." },
    { drugs: ["fenitoína", "carbamazepina", "fenobarbital"], severity: "moderado", desc: "Anticonvulsivantes reduzem nível de tacrolimus." },
    { drugs: ["metoclopramida"], severity: "moderado", desc: "Aumenta absorção do tacrolimus." },
  ],
  "micofenolato": [
    { drugs: ["aciclovir", "valaciclovir", "ganciclovir"], severity: "moderado", desc: "Competição pela excreção tubular — aumento mútuo de níveis." },
    { drugs: ["hidróxido de alumínio", "hidróxido de magnésio"], severity: "moderado", desc: "Antiácidos reduzem absorção do micofenolato — separar doses." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz nível de micofenolato — risco de rejeição." },
    { drugs: ["colestiramina"], severity: "moderado", desc: "Reduz absorção e recirculação entero-hepática do micofenolato." },
    { drugs: ["ciprofloxacino", "amoxicilina"], severity: "moderado", desc: "Antibióticos podem reduzir recirculação entero-hepática." },
  ],
  "azatioprina": [
    { drugs: ["alopurinol"], severity: "grave", desc: "Alopurinol inibe xantina-oxidase → toxicidade fatal da azatioprina. Reduzir dose 75%." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Azatioprina pode reduzir efeito anticoagulante." },
    { drugs: ["sulfametoxazol", "trimetoprima"], severity: "moderado", desc: "Mielossupressão aditiva — monitorar hemograma." },
    { drugs: ["enalapril", "captopril"], severity: "moderado", desc: "IECA + azatioprina = risco de leucopenia." },
  ],
  "sirolimus": [
    { drugs: ["cetoconazol", "itraconazol", "voriconazol"], severity: "grave", desc: "Azólicos aumentam drasticamente nível de sirolimus." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz nível de sirolimus — rejeição de transplante." },
    { drugs: ["ciclosporina"], severity: "moderado", desc: "Uso concomitante aumenta nível de sirolimus — dosar separadamente." },
    { drugs: ["claritromicina", "eritromicina"], severity: "moderado", desc: "Macrolídeos aumentam nível de sirolimus." },
    { drugs: ["sinvastatina", "atorvastatina"], severity: "moderado", desc: "Risco de rabdomiólise — monitorar CPK." },
  ],
  // === PARES ADICIONAIS ===
  "anfotericina b": [
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Nefrotoxicidade sinérgica — monitorar função renal diariamente." },
    { drugs: ["ciclosporina", "tacrolimus"], severity: "grave", desc: "Nefrotoxicidade grave — evitar ou ajustar doses." },
    { drugs: ["furosemida"], severity: "moderado", desc: "Hipocalemia aditiva — monitorar eletrólitos." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Hipocalemia por anfotericina aumenta toxicidade digitálica." },
  ],
  "rifampicina": [
    { drugs: ["anticoncepcionais", "etinilestradiol", "levonorgestrel"], severity: "grave", desc: "Rifampicina anula eficácia contraceptiva — usar método de barreira." },
    { drugs: ["varfarina"], severity: "grave", desc: "Rifampicina reduz drasticamente efeito da varfarina." },
    { drugs: ["metadona"], severity: "grave", desc: "Rifampicina precipita abstinência por redução do nível de metadona." },
    { drugs: ["midazolam", "diazepam"], severity: "moderado", desc: "Rifampicina reduz efeito de benzodiazepínicos." },
    { drugs: ["verapamil", "diltiazem", "nifedipina"], severity: "moderado", desc: "Rifampicina reduz efeito de BCC — falha anti-hipertensiva." },
  ],
  "ganciclovir": [
    { drugs: ["zidovudina"], severity: "grave", desc: "Mielossupressão aditiva — neutropenia grave." },
    { drugs: ["imipenem"], severity: "grave", desc: "Risco de convulsões — evitar combinação." },
    { drugs: ["micofenolato"], severity: "moderado", desc: "Aumento mútuo de níveis — monitorar toxicidade." },
  ],
  // === FITOTERÁPICOS ===
  "erva de são joão": [
    { drugs: ["fluoxetina", "sertralina", "paroxetina", "citalopram", "escitalopram", "venlafaxina", "duloxetina"], severity: "grave", desc: "Síndrome serotoninérgica — combinação contraindicada." },
    { drugs: ["varfarina"], severity: "grave", desc: "Erva de São João induz CYP3A4/2C9 — reduz efeito anticoagulante drasticamente." },
    { drugs: ["ciclosporina", "tacrolimus", "sirolimus"], severity: "grave", desc: "Reduz nível de imunossupressores — risco de rejeição de transplante." },
    { drugs: ["ritonavir", "efavirenz", "dolutegravir", "atazanavir"], severity: "grave", desc: "Reduz nível de antirretrovirais — falha terapêutica e resistência viral." },
    { drugs: ["anticoncepcionais", "etinilestradiol", "levonorgestrel"], severity: "grave", desc: "Anula eficácia contraceptiva — gravidez não planejada." },
    { drugs: ["digoxina"], severity: "grave", desc: "Reduz nível sérico de digoxina — falha terapêutica." },
    { drugs: ["imatinibe"], severity: "grave", desc: "Reduz nível de imatinibe — falha terapêutica oncológica." },
    { drugs: ["sinvastatina", "atorvastatina"], severity: "moderado", desc: "Reduz nível de estatinas via indução CYP3A4." },
    { drugs: ["midazolam", "alprazolam"], severity: "moderado", desc: "Reduz efeito de benzodiazepínicos." },
    { drugs: ["omeprazol"], severity: "moderado", desc: "Reduz nível de IBPs." },
    { drugs: ["metadona"], severity: "grave", desc: "Precipita abstinência por redução do nível de metadona." },
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica + redução do efeito analgésico." },
  ],
  "hypericum": [
    { drugs: ["fluoxetina", "sertralina", "paroxetina", "citalopram", "escitalopram"], severity: "grave", desc: "Síndrome serotoninérgica — hypericum = erva de São João." },
    { drugs: ["varfarina"], severity: "grave", desc: "Induz metabolismo da varfarina — INR reduzido." },
    { drugs: ["ciclosporina", "tacrolimus"], severity: "grave", desc: "Reduz nível de imunossupressores." },
    { drugs: ["anticoncepcionais", "etinilestradiol"], severity: "grave", desc: "Reduz eficácia contraceptiva." },
  ],
  "ginkgo biloba": [
    { drugs: ["varfarina"], severity: "grave", desc: "Ginkgo inibe PAF — aumenta risco de sangramento com anticoagulantes." },
    { drugs: ["ácido acetilsalicílico", "aas", "aspirina"], severity: "moderado", desc: "Risco de sangramento aumentado por inibição plaquetária aditiva." },
    { drugs: ["clopidogrel", "ticagrelor"], severity: "moderado", desc: "Risco de sangramento com antiplaquetários." },
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno"], severity: "moderado", desc: "Risco hemorrágico aumentado com AINEs." },
    { drugs: ["heparina", "enoxaparina"], severity: "moderado", desc: "Risco de sangramento com anticoagulantes." },
    { drugs: ["rivaroxabana", "apixabana"], severity: "moderado", desc: "Risco hemorrágico com DOACs." },
    { drugs: ["fluoxetina", "sertralina"], severity: "moderado", desc: "ISRS + ginkgo = risco hemorrágico aditivo." },
    { drugs: ["omeprazol"], severity: "moderado", desc: "Ginkgo induz CYP2C19 — pode reduzir efeito de IBPs." },
    { drugs: ["alprazolam", "midazolam"], severity: "moderado", desc: "Ginkgo pode reduzir efeito de benzodiazepínicos via CYP3A4." },
  ],
  "valeriana": [
    { drugs: ["midazolam", "diazepam", "alprazolam", "clonazepam", "lorazepam"], severity: "moderado", desc: "Sedação aditiva com benzodiazepínicos." },
    { drugs: ["zolpidem"], severity: "moderado", desc: "Sedação aditiva — risco de depressão respiratória." },
    { drugs: ["tramadol", "codeína", "morfina"], severity: "moderado", desc: "Depressão do SNC aditiva com opioides." },
    { drugs: ["fenobarbital"], severity: "moderado", desc: "Sedação excessiva com barbitúricos." },
  ],
  "kava-kava": [
    { drugs: ["alprazolam", "diazepam", "clonazepam", "lorazepam"], severity: "moderado", desc: "Sedação aditiva com benzodiazepínicos." },
    { drugs: ["levodopa"], severity: "moderado", desc: "Kava pode antagonizar efeito da levodopa — piora dos sintomas parkinsonianos." },
    { drugs: ["paracetamol"], severity: "moderado", desc: "Hepatotoxicidade aditiva — evitar uso prolongado concomitante." },
  ],
  "ginseng": [
    { drugs: ["varfarina"], severity: "moderado", desc: "Ginseng pode reduzir efeito anticoagulante — monitorar INR." },
    { drugs: ["insulina", "metformina", "glibenclamida"], severity: "moderado", desc: "Ginseng pode potencializar efeito hipoglicemiante." },
    { drugs: ["fenelzina", "selegilina"], severity: "moderado", desc: "Risco de efeitos tipo IMAO — cefaleia, insônia, tremor." },
  ],
  // === ANTIPSICÓTICOS ===
  "haloperidol": [
    { drugs: ["amiodarona"], severity: "grave", desc: "Prolongamento QT aditivo — risco de torsades de pointes." },
    { drugs: ["sotalol"], severity: "grave", desc: "Prolongamento QT aditivo — arritmia fatal." },
    { drugs: ["ciprofloxacino", "levofloxacino", "moxifloxacino"], severity: "moderado", desc: "Quinolonas + haloperidol = risco de prolongamento QT." },
    { drugs: ["metoclopramida"], severity: "moderado", desc: "Efeitos extrapiramidais aditivos." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz nível de haloperidol via CYP3A4." },
    { drugs: ["fluoxetina", "paroxetina"], severity: "moderado", desc: "ISRS inibem CYP2D6 — aumentam nível de haloperidol." },
    { drugs: ["lítio"], severity: "moderado", desc: "Neurotoxicidade aditiva — encefalopatia rara mas grave." },
    { drugs: ["levodopa"], severity: "moderado", desc: "Haloperidol antagoniza efeito da levodopa." },
    { drugs: ["tramadol"], severity: "moderado", desc: "Risco de convulsões aumentado." },
  ],
  "risperidona": [
    { drugs: ["fluoxetina", "paroxetina"], severity: "moderado", desc: "ISRS inibem CYP2D6 — aumentam nível de risperidona e efeitos adversos." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz nível de risperidona — pode requerer ajuste." },
    { drugs: ["amiodarona", "sotalol"], severity: "moderado", desc: "Risco de prolongamento QT." },
    { drugs: ["levodopa"], severity: "moderado", desc: "Risperidona antagoniza efeito da levodopa." },
    { drugs: ["tramadol"], severity: "moderado", desc: "Reduz limiar convulsivo." },
  ],
  "quetiapina": [
    { drugs: ["cetoconazol", "itraconazol"], severity: "grave", desc: "Azólicos aumentam drasticamente nível de quetiapina via CYP3A4." },
    { drugs: ["claritromicina", "eritromicina"], severity: "moderado", desc: "Macrolídeos aumentam nível de quetiapina." },
    { drugs: ["carbamazepina", "fenitoína"], severity: "moderado", desc: "Indutores reduzem nível de quetiapina — eficácia reduzida." },
    { drugs: ["amiodarona", "sotalol"], severity: "moderado", desc: "Risco de prolongamento QT." },
    { drugs: ["rifampicina"], severity: "grave", desc: "Rifampicina reduz drasticamente nível de quetiapina." },
    { drugs: ["fluoxetina"], severity: "moderado", desc: "Pode aumentar nível de quetiapina." },
    { drugs: ["lítio"], severity: "moderado", desc: "Monitorar — risco de efeitos neurológicos." },
  ],
  "olanzapina": [
    { drugs: ["ciprofloxacino"], severity: "moderado", desc: "Ciprofloxacino inibe CYP1A2 — aumenta nível de olanzapina." },
    { drugs: ["fluvoxamina"], severity: "grave", desc: "Fluvoxamina inibe CYP1A2 — aumento perigoso de olanzapina." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz nível de olanzapina." },
    { drugs: ["diazepam", "lorazepam"], severity: "moderado", desc: "Sedação e hipotensão aditivas — especialmente IM." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Rifampicina reduz nível de olanzapina." },
  ],
  "aripiprazol": [
    { drugs: ["fluoxetina", "paroxetina"], severity: "moderado", desc: "Inibem CYP2D6 — reduzir dose de aripiprazol 50%." },
    { drugs: ["cetoconazol", "itraconazol"], severity: "moderado", desc: "Inibem CYP3A4 — reduzir dose de aripiprazol 50%." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Indução CYP3A4 — dobrar dose de aripiprazol." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Reduz nível de aripiprazol." },
  ],
  // === ESTABILIZADORES DE HUMOR ===
  "valproato": [
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz nível de valproato e vice-versa." },
    { drugs: ["lamotrigina"], severity: "grave", desc: "Valproato duplica nível de lamotrigina — risco de síndrome de Stevens-Johnson. Reduzir dose de lamotrigina 50%." },
    { drugs: ["ácido acetilsalicílico", "aas"], severity: "moderado", desc: "AAS desloca valproato de proteínas — aumenta fração livre." },
    { drugs: ["meropenem", "imipenem", "ertapenem"], severity: "grave", desc: "Carbapenêmicos reduzem nível de valproato 60-90% — contraindicado." },
    { drugs: ["topiramato"], severity: "moderado", desc: "Risco de hiperamonemia e encefalopatia." },
    { drugs: ["clonazepam"], severity: "moderado", desc: "Risco de status epilepticus de ausência (raro)." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Valproato pode potencializar varfarina — monitorar INR." },
    { drugs: ["risperidona", "olanzapina", "quetiapina"], severity: "moderado", desc: "Monitorar — risco de aumento de efeitos metabólicos." },
  ],
  "lamotrigina": [
    { drugs: ["valproato", "ácido valproico"], severity: "grave", desc: "Valproato duplica nível de lamotrigina — risco de Stevens-Johnson." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz nível de lamotrigina 40%." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Rifampicina reduz nível de lamotrigina." },
    { drugs: ["anticoncepcionais", "etinilestradiol"], severity: "moderado", desc: "Contraceptivos reduzem nível de lamotrigina — ajustar dose no ciclo." },
  ],
  "fenitoína": [
    { drugs: ["valproato", "ácido valproico"], severity: "moderado", desc: "Interação complexa — monitorar níveis de ambos." },
    { drugs: ["fluconazol"], severity: "grave", desc: "Fluconazol aumenta nível de fenitoína — toxicidade." },
    { drugs: ["omeprazol"], severity: "moderado", desc: "Omeprazol pode aumentar nível de fenitoína via CYP2C19." },
    { drugs: ["anticoncepcionais", "etinilestradiol"], severity: "moderado", desc: "Fenitoína reduz eficácia contraceptiva." },
    { drugs: ["varfarina"], severity: "grave", desc: "Interação bidirecional imprevisível — monitorar INR rigorosamente." },
    { drugs: ["cisplatina", "fluorouracil"], severity: "moderado", desc: "Quimioterápicos reduzem absorção de fenitoína." },
    { drugs: ["dexametasona"], severity: "moderado", desc: "Fenitoína reduz efeito de corticoides." },
  ],
  "fenobarbital": [
    { drugs: ["varfarina"], severity: "grave", desc: "Fenobarbital reduz drasticamente efeito anticoagulante." },
    { drugs: ["anticoncepcionais", "etinilestradiol"], severity: "grave", desc: "Reduz eficácia contraceptiva — usar método adicional." },
    { drugs: ["ciclosporina", "tacrolimus"], severity: "grave", desc: "Reduz nível de imunossupressores — risco de rejeição." },
    { drugs: ["dexametasona", "prednisona"], severity: "moderado", desc: "Reduz efeito de corticoides via indução enzimática." },
    { drugs: ["valproato", "ácido valproico"], severity: "moderado", desc: "Valproato inibe metabolismo do fenobarbital — monitorar níveis." },
  ],
  // === ANTIDEPRESSIVOS ADICIONAIS ===
  "venlafaxina": [
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica." },
    { drugs: ["selegilina", "rasagilina"], severity: "grave", desc: "IMAO + ISRSN — síndrome serotoninérgica fatal." },
    { drugs: ["lítio"], severity: "moderado", desc: "Risco de síndrome serotoninérgica." },
    { drugs: ["metoprolol"], severity: "moderado", desc: "Venlafaxina inibe CYP2D6 — aumento do nível de metoprolol." },
  ],
  "duloxetina": [
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica." },
    { drugs: ["selegilina", "rasagilina"], severity: "grave", desc: "IMAO + ISRSN — síndrome serotoninérgica fatal." },
    { drugs: ["ciprofloxacino"], severity: "moderado", desc: "Ciprofloxacino inibe CYP1A2 — aumenta nível de duloxetina." },
    { drugs: ["metoprolol"], severity: "moderado", desc: "Duloxetina inibe CYP2D6 — bradicardia." },
  ],
  "fluvoxamina": [
    { drugs: ["clozapina"], severity: "grave", desc: "Fluvoxamina inibe CYP1A2 — aumento perigoso de clozapina." },
    { drugs: ["olanzapina"], severity: "grave", desc: "Fluvoxamina inibe CYP1A2 — aumento perigoso de olanzapina." },
    { drugs: ["tizanidina"], severity: "grave", desc: "Contraindicado — aumento extremo do nível de tizanidina." },
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica." },
    { drugs: ["selegilina", "rasagilina"], severity: "grave", desc: "IMAO + ISRS — síndrome serotoninérgica fatal." },
    { drugs: ["teofilina"], severity: "grave", desc: "Fluvoxamina aumenta drasticamente nível de teofilina." },
    { drugs: ["varfarina"], severity: "moderado", desc: "Aumenta efeito anticoagulante." },
  ],
  "amitriptilina": [
    { drugs: ["fluoxetina", "paroxetina"], severity: "moderado", desc: "ISRS inibem CYP2D6 — aumentam nível de amitriptilina." },
    { drugs: ["tramadol"], severity: "grave", desc: "Risco de síndrome serotoninérgica + sedação aditiva." },
    { drugs: ["selegilina", "rasagilina"], severity: "grave", desc: "IMAO + tricíclico — reação hipertensiva/serotoninérgica fatal." },
    { drugs: ["amiodarona", "sotalol"], severity: "grave", desc: "Prolongamento QT aditivo." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina reduz nível de amitriptilina." },
    { drugs: ["clonidina"], severity: "moderado", desc: "Tricíclicos antagonizam efeito anti-hipertensivo da clonidina." },
  ],

  // ── Antiepilépticos novos ──
  "levetiracetam": [
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Carbamazepina pode reduzir levemente níveis de levetiracetam." },
    { drugs: ["metotrexato"], severity: "moderado", desc: "Risco de toxicidade hematológica aditiva — monitorar hemograma." },
    { drugs: ["clozapina"], severity: "moderado", desc: "Risco aditivo de leucopenia — monitorar hemograma." },
  ],
  "pregabalina": [
    { drugs: ["lorazepam", "diazepam", "clonazepam", "midazolam", "alprazolam"], severity: "grave", desc: "Depressão respiratória e sedação aditiva grave — evitar combinação." },
    { drugs: ["oxicodona", "morfina", "fentanil", "tramadol", "codeína"], severity: "grave", desc: "Depressão respiratória fatal — risco aditivo com opióides." },
    { drugs: ["gabapentina"], severity: "moderado", desc: "Mecanismo semelhante — sedação e tontura aditivas sem benefício adicional." },
    { drugs: ["etanol"], severity: "moderado", desc: "Potencialização de sedação e comprometimento cognitivo." },
    { drugs: ["tioridazina", "clorpromazina"], severity: "moderado", desc: "Sedação aditiva com antipsicóticos de baixa potência." },
  ],
  "gabapentina": [
    { drugs: ["morfina", "oxicodona", "fentanil", "tramadol", "codeína"], severity: "grave", desc: "Depressão respiratória aditiva fatal — evitar ou reduzir doses." },
    { drugs: ["lorazepam", "diazepam", "clonazepam", "midazolam"], severity: "grave", desc: "Sedação e depressão respiratória aditivas." },
    { drugs: ["pregabalina"], severity: "moderado", desc: "Sem benefício aditivo — sedação e tontura aumentadas." },
    { drugs: ["antiácidos"], severity: "moderado", desc: "Antiácidos com alumínio/magnésio reduzem absorção — separar por 2h." },
  ],
  "lacosamida": [
    { drugs: ["carbamazepina", "fenitoína", "fenobarbital"], severity: "moderado", desc: "Indutores enzimáticos reduzem níveis de lacosamida em 25%." },
    { drugs: ["amiodarona", "sotalol"], severity: "grave", desc: "Prolongamento PR aditivo — risco de bloqueio AV." },
    { drugs: ["verapamil", "diltiazem"], severity: "grave", desc: "Bloqueio AV aditivo — contraindicado." },
    { drugs: ["metoprolol", "propranolol", "atenolol"], severity: "moderado", desc: "Risco de bradicardia e bloqueio PR." },
  ],
  "topiramato": [
    { drugs: ["metformina"], severity: "moderado", desc: "Topiramato pode alterar clearance de metformina." },
    { drugs: ["lítio"], severity: "moderado", desc: "Topiramato pode alterar níveis de lítio — monitorar litemia." },
    { drugs: ["ácido valproico", "valproato"], severity: "moderado", desc: "Risco de hiperamonemia e encefalopatia — monitorar amônia." },
    { drugs: ["acetazolamida"], severity: "moderado", desc: "Ambos inibidores de anidrase carbônica — risco de nefrolitíase e acidose." },
    { drugs: ["anticoncepcionais orais"], severity: "moderado", desc: "Doses >200mg/dia reduzem eficácia contraceptiva." },
  ],
  "oxcarbazepina": [
    { drugs: ["anticoncepcionais orais"], severity: "grave", desc: "Indução CYP3A4 — reduz eficácia contraceptiva significativamente." },
    { drugs: ["fenitoína"], severity: "moderado", desc: "Aumento de 40% nos níveis de fenitoína." },
    { drugs: ["lítio"], severity: "moderado", desc: "Risco de neurotoxicidade — monitorar litemia." },
    { drugs: ["carbamazepina"], severity: "moderado", desc: "Redução mútua de níveis séricos." },
    { drugs: ["hidroclorotiazida", "furosemida"], severity: "moderado", desc: "Risco aditivo de hiponatremia — monitorar Na+." },
  ],

  // ── Anestésicos ──
  "propofol": [
    { drugs: ["fentanil", "remifentanil", "sufentanil", "alfentanil"], severity: "grave", desc: "Depressão cardiovascular e respiratória sinérgica — titular doses cuidadosamente." },
    { drugs: ["midazolam", "diazepam"], severity: "grave", desc: "Sedação profunda e apneia — reduzir dose de propofol 30-50%." },
    { drugs: ["dexmedetomidina"], severity: "moderado", desc: "Hipotensão e bradicardia aditivas." },
    { drugs: ["succinilcolina"], severity: "moderado", desc: "Propofol pode prolongar bloqueio de succinilcolina." },
    { drugs: ["lidocaína"], severity: "moderado", desc: "Coadministração IV pode reduzir dor à injeção mas aumentar depressão cardíaca." },
  ],
  "cetamina": [
    { drugs: ["halotano", "sevoflurano", "isoflurano", "desflurano"], severity: "moderado", desc: "Estimulação cardiovascular da cetamina pode ser atenuada — monitorar PA." },
    { drugs: ["teofilina"], severity: "grave", desc: "Reduz limiar convulsivo — risco de convulsões." },
    { drugs: ["atropina"], severity: "moderado", desc: "Taquicardia aditiva — monitorar FC." },
    { drugs: ["diazepam", "midazolam"], severity: "moderado", desc: "Benzodiazepínicos podem prolongar recuperação da cetamina." },
    { drugs: ["levotiroxina"], severity: "moderado", desc: "Risco de hipertensão e taquicardia em hipertireoidismo." },
  ],
  "sevoflurano": [
    { drugs: ["succinilcolina"], severity: "moderado", desc: "Sevoflurano potencializa bloqueio neuromuscular." },
    { drugs: ["rocurônio", "atracúrio", "cisatracúrio", "vecurônio", "pancurônio"], severity: "moderado", desc: "Anestésicos inalatórios potencializam bloqueadores neuromusculares — reduzir dose 25-40%." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Risco de bradicardia refratária e hipotensão grave." },
    { drugs: ["epinefrina", "adrenalina"], severity: "grave", desc: "Sevoflurano sensibiliza miocárdio a catecolaminas — risco de arritmias." },
    { drugs: ["isoniazida"], severity: "moderado", desc: "Aumento de nefrotoxicidade pelo composto A." },
  ],
  "isoflurano": [
    { drugs: ["rocurônio", "atracúrio", "cisatracúrio", "vecurônio"], severity: "moderado", desc: "Potencialização do bloqueio neuromuscular — reduzir dose." },
    { drugs: ["epinefrina", "adrenalina"], severity: "grave", desc: "Sensibilização miocárdica a catecolaminas — arritmias." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Bradicardia e hipotensão refratárias." },
    { drugs: ["labetalol"], severity: "moderado", desc: "Hipotensão aditiva — monitorar PA." },
  ],
  "lidocaína": [
    { drugs: ["amiodarona"], severity: "grave", desc: "Risco de bradicardia sinusal grave e convulsões." },
    { drugs: ["propranolol", "metoprolol"], severity: "moderado", desc: "Betabloqueadores reduzem clearance hepático da lidocaína." },
    { drugs: ["cimetidina"], severity: "moderado", desc: "Cimetidina inibe metabolismo — risco de toxicidade por lidocaína." },
    { drugs: ["fenitoína"], severity: "moderado", desc: "Depressão cardíaca aditiva." },
    { drugs: ["succinilcolina"], severity: "moderado", desc: "Lidocaína IV pode prolongar bloqueio neuromuscular." },
  ],
  "bupivacaína": [
    { drugs: ["ropivacaína"], severity: "grave", desc: "Toxicidade cardiovascular aditiva — não combinar anestésicos locais do mesmo grupo." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Cardiotoxicidade aditiva — risco de arritmias refratárias." },
    { drugs: ["propranolol"], severity: "moderado", desc: "Reduz metabolismo hepático — acúmulo de bupivacaína." },
    { drugs: ["cimetidina"], severity: "moderado", desc: "Inibe metabolismo — risco de toxicidade sistêmica." },
  ],
  "dexmedetomidina": [
    { drugs: ["propofol", "midazolam"], severity: "moderado", desc: "Sedação profunda aditiva — titular doses." },
    { drugs: ["fentanil", "morfina", "remifentanil"], severity: "moderado", desc: "Bradicardia e depressão respiratória aditivas." },
    { drugs: ["metoprolol", "atenolol", "propranolol"], severity: "grave", desc: "Bradicardia grave e bloqueio AV — monitorar FC rigorosamente." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Bradicardia aditiva — monitorar FC." },
    { drugs: ["verapamil", "diltiazem"], severity: "grave", desc: "Bradicardia e hipotensão sinérgicas graves." },
  ],

  // ── Bloqueadores neuromusculares ──
  "succinilcolina": [
    { drugs: ["neostigmina", "piridostigmina", "fisostigmina"], severity: "grave", desc: "Anticolinesterásicos prolongam bloqueio por succinilcolina (fase II)." },
    { drugs: ["lidocaína"], severity: "moderado", desc: "Lidocaína IV potencializa bloqueio neuromuscular." },
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Aminoglicosídeos potencializam e prolongam bloqueio — risco de apneia." },
    { drugs: ["lítio"], severity: "moderado", desc: "Lítio prolonga bloqueio por succinilcolina." },
    { drugs: ["magnésio"], severity: "grave", desc: "Magnésio IV potencializa bloqueio — risco de paralisia prolongada." },
    { drugs: ["dantrolene"], severity: "moderado", desc: "Contraindicação relativa — dantrolene pode mascarar hipertermia maligna." },
    { drugs: ["metoclopramida"], severity: "moderado", desc: "Metoclopramida inibe pseudocolinesterase — prolonga bloqueio." },
  ],
  "rocurônio": [
    { drugs: ["gentamicina", "amicacina", "tobramicina", "neomicina"], severity: "grave", desc: "Aminoglicosídeos potencializam e prolongam bloqueio neuromuscular." },
    { drugs: ["sevoflurano", "isoflurano", "desflurano"], severity: "moderado", desc: "Anestésicos inalatórios prolongam bloqueio — reduzir dose de rocurônio." },
    { drugs: ["magnésio"], severity: "grave", desc: "Magnésio potencializa bloqueio — risco de paralisia prolongada." },
    { drugs: ["carbamazepina", "fenitoína"], severity: "moderado", desc: "Anticonvulsivantes aceleram metabolismo — pode necessitar doses maiores." },
    { drugs: ["clindamicina"], severity: "moderado", desc: "Clindamicina potencializa bloqueio neuromuscular." },
    { drugs: ["vancomicina"], severity: "moderado", desc: "Potencialização do bloqueio neuromuscular." },
    { drugs: ["sugamadex"], severity: "moderado", desc: "Sugamadex reverte rocurônio — interação terapêutica esperada. Pode reduzir eficácia de anticoncepcionais hormonais." },
  ],
  "atracúrio": [
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Aminoglicosídeos prolongam bloqueio neuromuscular — monitorar TOF." },
    { drugs: ["sevoflurano", "isoflurano", "desflurano"], severity: "moderado", desc: "Anestésicos inalatórios potencializam bloqueio — reduzir dose." },
    { drugs: ["magnésio"], severity: "grave", desc: "Magnésio IV prolonga bloqueio — risco de paralisia." },
    { drugs: ["lítio"], severity: "moderado", desc: "Lítio pode prolongar bloqueio neuromuscular." },
    { drugs: ["clindamicina", "polimixina b"], severity: "moderado", desc: "Antibióticos que potencializam bloqueio neuromuscular." },
    { drugs: ["furosemida"], severity: "moderado", desc: "Em doses altas pode potencializar ou antagonizar bloqueio — monitorar." },
  ],
  "cisatracúrio": [
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Aminoglicosídeos prolongam bloqueio — monitorar TOF." },
    { drugs: ["sevoflurano", "isoflurano"], severity: "moderado", desc: "Potencialização do bloqueio — reduzir dose de cisatracúrio." },
    { drugs: ["magnésio"], severity: "grave", desc: "Potencialização grave do bloqueio neuromuscular." },
    { drugs: ["carbamazepina", "fenitoína"], severity: "moderado", desc: "Resistência ao bloqueio — pode necessitar doses maiores." },
  ],
  "pancurônio": [
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Potencialização e prolongamento do bloqueio neuromuscular." },
    { drugs: ["corticosteroides"], severity: "moderado", desc: "Uso prolongado pode causar miopatia do paciente crítico." },
    { drugs: ["magnésio"], severity: "grave", desc: "Paralisia prolongada — monitorar TOF." },
    { drugs: ["quinidina"], severity: "grave", desc: "Quinidina pode recuararizar — risco de paralisia recorrente." },
    { drugs: ["verapamil", "diltiazem"], severity: "moderado", desc: "Potencialização do bloqueio neuromuscular." },
  ],
  "vecurônio": [
    { drugs: ["gentamicina", "amicacina", "tobramicina"], severity: "grave", desc: "Aminoglicosídeos potencializam e prolongam bloqueio." },
    { drugs: ["sevoflurano", "isoflurano", "desflurano"], severity: "moderado", desc: "Anestésicos inalatórios potencializam bloqueio." },
    { drugs: ["magnésio"], severity: "grave", desc: "Magnésio potencializa bloqueio — monitorar TOF." },
    { drugs: ["clindamicina"], severity: "moderado", desc: "Potencialização do bloqueio neuromuscular." },
    { drugs: ["carbamazepina", "fenitoína"], severity: "moderado", desc: "Resistência ao bloqueio — ajustar dose." },
  ],
  "sugamadex": [
    { drugs: ["rocurônio", "vecurônio"], severity: "moderado", desc: "Interação terapêutica — reverte bloqueio. Pode encapsular progesteronas e reduzir eficácia de anticoncepcionais." },
    { drugs: ["anticoncepcionais orais"], severity: "moderado", desc: "Sugamadex pode reduzir eficácia contraceptiva — usar método adicional por 7 dias." },
    { drugs: ["flucloxacilina", "toremifeno", "ácido fusídico"], severity: "moderado", desc: "Podem competir por ligação e reduzir eficácia do sugamadex — monitorar reversão." },
  ],
  "neostigmina": [
    { drugs: ["succinilcolina"], severity: "grave", desc: "Prolonga bloqueio despolarizante (fase II) — evitar." },
    { drugs: ["atropina"], severity: "moderado", desc: "Coadministração necessária para prevenir bradicardia — interação terapêutica." },
    { drugs: ["betabloqueadores"], severity: "moderado", desc: "Bradicardia aditiva — associar atropina." },
    { drugs: ["aminoglicosídeos"], severity: "moderado", desc: "Pode antagonizar parcialmente bloqueio potencializado por aminoglicosídeos." },
  ],

  // ── DOACs (Anticoagulantes Diretos) ──
  "rivaroxabana": [
    { drugs: ["cetoconazol", "itraconazol", "voriconazol", "posaconazol"], severity: "grave", desc: "Inibidores potentes de CYP3A4/P-gp — aumento perigoso de rivaroxabana. Contraindicado." },
    { drugs: ["rifampicina", "carbamazepina", "fenitoína", "fenobarbital"], severity: "grave", desc: "Indutores potentes de CYP3A4 — redução significativa da eficácia anticoagulante." },
    { drugs: ["ácido acetilsalicílico", "aas", "aspirina"], severity: "grave", desc: "Risco hemorrágico aumentado — usar somente se benefício superar risco." },
    { drugs: ["clopidogrel", "ticagrelor", "prasugrel"], severity: "grave", desc: "Dupla antitrombótica — risco hemorrágico significativo. Limitar duração." },
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno", "cetoprofeno"], severity: "grave", desc: "AINEs aumentam risco de sangramento GI com DOACs." },
    { drugs: ["amiodarona"], severity: "moderado", desc: "Amiodarona inibe P-gp — aumento moderado de rivaroxabana." },
    { drugs: ["dronedarona"], severity: "grave", desc: "Inibição de CYP3A4 e P-gp — evitar combinação." },
    { drugs: ["eritromicina", "claritromicina"], severity: "moderado", desc: "Inibidores moderados de CYP3A4 — monitorar sinais de sangramento." },
    { drugs: ["verapamil"], severity: "moderado", desc: "Inibição de P-gp — aumento moderado de rivaroxabana." },
    { drugs: ["heparina", "enoxaparina", "fondaparinux"], severity: "grave", desc: "Anticoagulação dupla — risco hemorrágico grave." },
  ],
  "apixabana": [
    { drugs: ["cetoconazol", "itraconazol", "voriconazol", "posaconazol"], severity: "grave", desc: "Inibidores potentes de CYP3A4/P-gp — contraindicado. Aumento perigoso de apixabana." },
    { drugs: ["rifampicina", "carbamazepina", "fenitoína"], severity: "grave", desc: "Indutores potentes de CYP3A4 — redução de 50% dos níveis. Evitar." },
    { drugs: ["ácido acetilsalicílico", "aas", "aspirina"], severity: "grave", desc: "Risco hemorrágico aumentado — avaliar risco-benefício." },
    { drugs: ["clopidogrel", "ticagrelor", "prasugrel"], severity: "grave", desc: "Tripla terapia antitrombótica — limitar duração e usar menor dose de apixabana." },
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno"], severity: "grave", desc: "AINEs aumentam risco de sangramento GI." },
    { drugs: ["amiodarona"], severity: "moderado", desc: "Inibição de P-gp — aumento leve a moderado de apixabana." },
    { drugs: ["diltiazem"], severity: "moderado", desc: "Inibidor moderado de CYP3A4 — aumento de 40% na exposição." },
    { drugs: ["heparina", "enoxaparina"], severity: "grave", desc: "Dupla anticoagulação — risco hemorrágico grave." },
    { drugs: ["erva de são joão", "hypericum"], severity: "grave", desc: "Indução CYP3A4 — reduz eficácia anticoagulante significativamente." },
  ],
  "dabigatrana": [
    { drugs: ["cetoconazol", "itraconazol", "voriconazol"], severity: "grave", desc: "Inibidores potentes de P-gp — contraindicado com dabigatrana." },
    { drugs: ["rifampicina", "carbamazepina", "fenitoína"], severity: "grave", desc: "Indutores de P-gp — redução significativa da eficácia." },
    { drugs: ["amiodarona"], severity: "moderado", desc: "Aumento de 12-60% nos níveis — ajustar dose em insuficiência renal." },
    { drugs: ["verapamil"], severity: "grave", desc: "Aumento de 150% nos níveis — tomar dabigatrana 2h antes do verapamil." },
    { drugs: ["dronedarona"], severity: "grave", desc: "Contraindicado — aumento perigoso dos níveis de dabigatrana." },
    { drugs: ["ticagrelor", "clopidogrel", "prasugrel"], severity: "grave", desc: "Risco hemorrágico significativo — limitar duração." },
    { drugs: ["ácido acetilsalicílico", "aas"], severity: "grave", desc: "Aumento do risco hemorrágico." },
    { drugs: ["ibuprofeno", "diclofenaco", "naproxeno"], severity: "grave", desc: "AINEs + DOAC — risco hemorrágico aumentado." },
    { drugs: ["heparina", "enoxaparina"], severity: "grave", desc: "Dupla anticoagulação — contraindicado." },
    { drugs: ["claritromicina"], severity: "moderado", desc: "Inibição de P-gp — aumento moderado dos níveis." },
    { drugs: ["pantoprazol", "omeprazol"], severity: "moderado", desc: "IBPs podem reduzir absorção em 20-30% — administrar sem esmagar cápsula." },
  ],
  "edoxabana": [
    { drugs: ["cetoconazol", "itraconazol"], severity: "moderado", desc: "Inibidores de P-gp — reduzir dose de edoxabana para 30mg." },
    { drugs: ["rifampicina", "carbamazepina", "fenitoína"], severity: "grave", desc: "Indutores de P-gp — reduzem eficácia. Evitar combinação." },
    { drugs: ["amiodarona", "verapamil", "quinidina"], severity: "moderado", desc: "Inibidores de P-gp — considerar redução de dose." },
    { drugs: ["ácido acetilsalicílico", "clopidogrel"], severity: "grave", desc: "Risco hemorrágico aumentado." },
    { drugs: ["ibuprofeno", "diclofenaco"], severity: "grave", desc: "AINEs aumentam risco de sangramento." },
    { drugs: ["heparina", "enoxaparina"], severity: "grave", desc: "Dupla anticoagulação contraindicada." },
    { drugs: ["dronedarona"], severity: "moderado", desc: "Aumento moderado dos níveis — monitorar." },
  ],

  // ── Antiarrítmicos Classe III ──
  "dronedarona": [
    { drugs: ["dabigatrana"], severity: "grave", desc: "Contraindicado — aumento perigoso dos níveis de dabigatrana." },
    { drugs: ["rivaroxabana", "apixabana"], severity: "grave", desc: "Inibição de CYP3A4/P-gp — risco hemorrágico aumentado." },
    { drugs: ["digoxina"], severity: "grave", desc: "Aumenta digoxinemia em 150-250% — reduzir dose de digoxina 50%." },
    { drugs: ["sinvastatina", "atorvastatina"], severity: "moderado", desc: "Inibição CYP3A4 — risco de miopatia. Limitar sinvastatina a 10mg." },
    { drugs: ["metoprolol", "propranolol", "carvedilol"], severity: "moderado", desc: "Bradicardia e hipotensão aditivas." },
    { drugs: ["verapamil", "diltiazem"], severity: "grave", desc: "Bradicardia grave e bloqueio AV — contraindicado." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Contraindicado — prolongamento QT excessivo." },
    { drugs: ["ciclosporina", "tacrolimus"], severity: "grave", desc: "Inibição CYP3A4 — aumento perigoso de imunossupressores." },
    { drugs: ["erva de são joão"], severity: "grave", desc: "Indução CYP3A4 — reduz níveis de dronedarona." },
  ],
  "sotalol": [
    { drugs: ["amiodarona"], severity: "grave", desc: "Prolongamento QT aditivo — risco de torsades de pointes." },
    { drugs: ["dronedarona"], severity: "grave", desc: "QT prolongado — contraindicado." },
    { drugs: ["haloperidol", "clorpromazina"], severity: "grave", desc: "Prolongamento QT aditivo com antipsicóticos." },
    { drugs: ["moxifloxacino", "levofloxacino"], severity: "grave", desc: "Quinolonas prolongam QT — risco aditivo." },
    { drugs: ["ondansetrona"], severity: "moderado", desc: "Prolongamento QT aditivo." },
    { drugs: ["furosemida", "hidroclorotiazida"], severity: "moderado", desc: "Hipocalemia por diuréticos potencializa QT longo — monitorar K+." },
    { drugs: ["insulina", "glibenclamida"], severity: "moderado", desc: "Sotalol pode mascarar sinais de hipoglicemia." },
    { drugs: ["verapamil", "diltiazem"], severity: "grave", desc: "Bradicardia e hipotensão graves — contraindicado." },
    { drugs: ["clonidina"], severity: "moderado", desc: "Hipertensão rebote se clonidina descontinuada abruptamente." },
  ],
  "dofetilida": [
    { drugs: ["amiodarona"], severity: "grave", desc: "Prolongamento QT excessivo — contraindicado." },
    { drugs: ["verapamil"], severity: "grave", desc: "Contraindicado — aumenta níveis de dofetilida." },
    { drugs: ["cimetidina"], severity: "grave", desc: "Contraindicado — aumenta níveis via inibição de secreção tubular renal." },
    { drugs: ["cetoconazol", "itraconazol"], severity: "grave", desc: "Inibição CYP3A4 — aumento perigoso dos níveis." },
    { drugs: ["trimetoprima"], severity: "grave", desc: "Inibe secreção tubular — aumenta níveis de dofetilida." },
    { drugs: ["hidroclorotiazida"], severity: "grave", desc: "Contraindicado — hipocalemia potencializa QT longo." },
    { drugs: ["metformina"], severity: "moderado", desc: "Competição por transporte catiônico renal." },
  ],

  // ── Anti-hipertensivos de uso hospitalar ──
  "nitroprussiato": [
    { drugs: ["sildenafil", "tadalafil", "vardenafil"], severity: "grave", desc: "Hipotensão grave e potencialmente fatal — contraindicado." },
    { drugs: ["enalapril", "captopril", "losartana"], severity: "moderado", desc: "Hipotensão aditiva — titular doses cuidadosamente." },
    { drugs: ["propofol"], severity: "grave", desc: "Hipotensão sinérgica — monitoração invasiva obrigatória." },
    { drugs: ["metoprolol", "propranolol", "labetalol"], severity: "moderado", desc: "Hipotensão aditiva — monitorar PA continuamente." },
  ],
  "nitroglicerina": [
    { drugs: ["sildenafil", "tadalafil", "vardenafil"], severity: "grave", desc: "Hipotensão grave e potencialmente fatal — contraindicado. Aguardar 24-48h." },
    { drugs: ["heparina"], severity: "moderado", desc: "Nitroglicerina IV pode reduzir efeito da heparina — monitorar TTPa." },
    { drugs: ["alteplase", "tenecteplase"], severity: "moderado", desc: "Usar com cautela — monitorar PA rigorosamente." },
    { drugs: ["propranolol", "metoprolol", "atenolol"], severity: "moderado", desc: "Hipotensão e bradicardia aditivas." },
  ],
  "labetalol": [
    { drugs: ["verapamil", "diltiazem"], severity: "grave", desc: "Bradicardia grave, hipotensão e bloqueio AV — evitar combinação IV." },
    { drugs: ["clonidina"], severity: "moderado", desc: "Hipertensão rebote se clonidina retirada abruptamente." },
    { drugs: ["insulina", "glibenclamida"], severity: "moderado", desc: "Mascaramento de sinais de hipoglicemia." },
    { drugs: ["halotano", "sevoflurano", "isoflurano"], severity: "grave", desc: "Hipotensão sinérgica grave com anestésicos inalatórios." },
    { drugs: ["nitroglicerina", "nitroprussiato"], severity: "moderado", desc: "Hipotensão aditiva — monitorar PA invasivamente." },
    { drugs: ["amiodarona"], severity: "grave", desc: "Bradicardia refratária e hipotensão." },
  ],
  "hidralazina": [
    { drugs: ["metoprolol", "propranolol", "atenolol"], severity: "moderado", desc: "Combinação terapêutica — betabloqueador previne taquicardia reflexa." },
    { drugs: ["diazóxido"], severity: "grave", desc: "Hipotensão grave aditiva — evitar combinação." },
    { drugs: ["nitroprussiato"], severity: "moderado", desc: "Hipotensão aditiva — titular cuidadosamente." },
    { drugs: ["epinefrina"], severity: "moderado", desc: "Taquicardia exagerada." },
  ],
  "fenoldopam": [
    { drugs: ["metoprolol", "propranolol", "atenolol", "labetalol"], severity: "moderado", desc: "Evitar betabloqueadores — podem causar hipotensão excessiva." },
    { drugs: ["acetaminofeno", "paracetamol"], severity: "moderado", desc: "Fenoldopam aumenta níveis de paracetamol em 50%." },
  ],
  "clevidipina": [
    { drugs: ["propofol"], severity: "moderado", desc: "Ambos em emulsão lipídica — monitorar carga lipídica total." },
    { drugs: ["metoprolol", "labetalol"], severity: "moderado", desc: "Hipotensão e bradicardia aditivas — titular doses." },
  ],
  "esmolol": [
    { drugs: ["verapamil", "diltiazem"], severity: "grave", desc: "Bradicardia grave e assistolia — contraindicado uso IV concomitante." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Bradicardia aditiva — monitorar FC." },
    { drugs: ["clonidina"], severity: "moderado", desc: "Hipertensão rebote se clonidina descontinuada." },
    { drugs: ["insulina"], severity: "moderado", desc: "Mascaramento de hipoglicemia e potencialização do efeito." },
    { drugs: ["succinilcolina"], severity: "moderado", desc: "Esmolol pode prolongar bloqueio neuromuscular." },
    { drugs: ["morfina"], severity: "moderado", desc: "Aumento dos níveis de esmolol em 46% — monitorar bradicardia." },
  ],

  // ── Antiplaquetários avançados ──
  "ticagrelor": [
    { drugs: ["cetoconazol", "itraconazol", "voriconazol"], severity: "grave", desc: "Inibidores potentes de CYP3A4 — aumento perigoso dos níveis." },
    { drugs: ["rifampicina", "carbamazepina", "fenitoína"], severity: "grave", desc: "Indutores de CYP3A4 — redução significativa da eficácia." },
    { drugs: ["sinvastatina", "lovastatina"], severity: "moderado", desc: "Ticagrelor inibe CYP3A4 — limitar sinvastatina a 40mg." },
    { drugs: ["digoxina"], severity: "moderado", desc: "Ticagrelor inibe P-gp — aumenta digoxinemia 28%." },
    { drugs: ["ácido acetilsalicílico", "aspirina"], severity: "moderado", desc: "Dose de AAS >100mg pode reduzir eficácia de ticagrelor." },
    { drugs: ["morfina"], severity: "moderado", desc: "Morfina retarda absorção e reduz exposição a ticagrelor." },
  ],
  "prasugrel": [
    { drugs: ["varfarina", "rivaroxabana", "apixabana", "dabigatrana"], severity: "grave", desc: "Risco hemorrágico grave — tripla terapia deve ser limitada." },
    { drugs: ["ibuprofeno", "naproxeno"], severity: "grave", desc: "AINEs + antiplaquetário — risco hemorrágico GI aumentado." },
    { drugs: ["omeprazol"], severity: "moderado", desc: "Interação menor que com clopidogrel, mas monitorar." },
  ],
  "cangrelor": [
    { drugs: ["clopidogrel"], severity: "grave", desc: "Cangrelor bloqueia ligação de clopidogrel ao receptor P2Y12 — administrar clopidogrel após suspensão." },
    { drugs: ["prasugrel"], severity: "grave", desc: "Administrar prasugrel somente após descontinuação do cangrelor." },
    { drugs: ["ticagrelor"], severity: "moderado", desc: "Ticagrelor pode ser administrado durante infusão de cangrelor — interação menor." },
    { drugs: ["heparina", "enoxaparina"], severity: "moderado", desc: "Risco hemorrágico aditivo — monitorar." },
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
