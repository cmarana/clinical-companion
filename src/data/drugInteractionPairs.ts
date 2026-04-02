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
  "metotrexato": [
    { drugs: ["penicilina", "amoxicilina", "piperacilina"], severity: "moderado", desc: "Penicilinas reduzem excreção renal do metotrexato — toxicidade." },
    { drugs: ["omeprazol", "pantoprazol"], severity: "moderado", desc: "IBPs podem retardar eliminação do metotrexato." },
    { drugs: ["ciprofloxacino"], severity: "moderado", desc: "Quinolonas reduzem clearance renal do metotrexato." },
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
  "prednisona": [
    { drugs: ["cetoconazol"], severity: "moderado", desc: "Cetoconazol aumenta exposição a corticoides via CYP3A4." },
    { drugs: ["rifampicina"], severity: "moderado", desc: "Rifampicina acelera metabolismo da prednisona — pode requerer aumento de dose." },
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
