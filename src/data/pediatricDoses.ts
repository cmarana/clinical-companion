export interface PediatricFormulation {
  form: string;          // ex: "Suspensão 50mg/mL", "Comprimido 500mg"
  concentration?: number; // mg per mL (for liquids)
  unit?: string;         // mL, comp, gota, etc.
}

export interface PediatricDrug {
  id: string;
  name: string;
  category: string;
  dosePerKg: number;         // mg/kg per dose
  dosePerKgMax?: number;     // range upper bound (mg/kg)
  frequency: string;         // ex: "6/6h", "8/8h", "12/12h", "24h"
  frequencyHours: number;    // for daily dose calc
  maxSingleDose: number;     // mg
  maxDailyDose?: number;     // mg/day
  route: string;
  indication: string;
  formulations: PediatricFormulation[];
  notes?: string;
  ageRestriction?: string;   // ex: "> 3 meses"
  renalAdjust?: string;
  warnings?: string[];
}

export const pediatricDrugs: PediatricDrug[] = [
  // === ANALGÉSICOS / ANTITÉRMICOS ===
  {
    id: "paracetamol",
    name: "Paracetamol",
    category: "Analgésico/Antitérmico",
    dosePerKg: 10,
    dosePerKgMax: 15,
    frequency: "6/6h",
    frequencyHours: 6,
    maxSingleDose: 750,
    maxDailyDose: 3000,
    route: "VO",
    indication: "Febre, dor leve a moderada",
    formulations: [
      { form: "Gotas 200mg/mL", concentration: 200, unit: "gotas" },
      { form: "Suspensão 32mg/mL", concentration: 32, unit: "mL" },
      { form: "Comprimido 500mg" },
      { form: "Comprimido 750mg" },
    ],
    notes: "1 gota = ~13mg. Hepatotóxico em superdose (>150mg/kg)",
    warnings: ["Hepatotoxicidade em superdosagem", "Máx 5 doses/dia"],
  },
  {
    id: "dipirona",
    name: "Dipirona",
    category: "Analgésico/Antitérmico",
    dosePerKg: 10,
    dosePerKgMax: 25,
    frequency: "6/6h",
    frequencyHours: 6,
    maxSingleDose: 1000,
    maxDailyDose: 4000,
    route: "VO/EV",
    indication: "Febre, dor moderada",
    formulations: [
      { form: "Gotas 500mg/mL", concentration: 500, unit: "gotas" },
      { form: "Solução oral 50mg/mL", concentration: 50, unit: "mL" },
      { form: "Comprimido 500mg" },
    ],
    notes: "1 gota = ~25mg. Evitar em < 3 meses",
    ageRestriction: "> 3 meses",
    warnings: ["Risco de agranulocitose (raro)", "Evitar em < 3 meses"],
  },
  {
    id: "ibuprofeno",
    name: "Ibuprofeno",
    category: "AINE/Antitérmico",
    dosePerKg: 5,
    dosePerKgMax: 10,
    frequency: "6/6h a 8/8h",
    frequencyHours: 6,
    maxSingleDose: 400,
    maxDailyDose: 1200,
    route: "VO",
    indication: "Febre, dor, inflamação",
    formulations: [
      { form: "Gotas 50mg/mL", concentration: 50, unit: "gotas" },
      { form: "Suspensão 30mg/mL", concentration: 30, unit: "mL" },
      { form: "Comprimido 400mg" },
    ],
    ageRestriction: "> 6 meses",
    warnings: ["Evitar se desidratado", "Nefrotóxico", "Contraindicado em dengue"],
  },

  // === ANTIBIÓTICOS ===
  {
    id: "amoxicilina",
    name: "Amoxicilina",
    category: "Antibiótico",
    dosePerKg: 25,
    dosePerKgMax: 50,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 1000,
    maxDailyDose: 3000,
    route: "VO",
    indication: "OMA, faringite, sinusite, PAC leve",
    formulations: [
      { form: "Suspensão 250mg/5mL", concentration: 50, unit: "mL" },
      { form: "Suspensão 400mg/5mL", concentration: 80, unit: "mL" },
      { form: "Cápsula 500mg" },
    ],
    notes: "Dose alta (80-90mg/kg/dia) para OMA e pneumococo resistente",
  },
  {
    id: "amox-clav",
    name: "Amoxicilina-Clavulanato",
    category: "Antibiótico",
    dosePerKg: 25,
    dosePerKgMax: 45,
    frequency: "12/12h",
    frequencyHours: 12,
    maxSingleDose: 875,
    maxDailyDose: 1750,
    route: "VO",
    indication: "OMA resistente, sinusite, ITU, mordeduras",
    formulations: [
      { form: "Suspensão 250/62,5mg por 5mL", concentration: 50, unit: "mL" },
      { form: "Suspensão 400/57mg por 5mL", concentration: 80, unit: "mL" },
      { form: "Comprimido 875/125mg" },
    ],
    notes: "Dose baseada no componente amoxicilina",
  },
  {
    id: "cefalexina",
    name: "Cefalexina",
    category: "Antibiótico",
    dosePerKg: 25,
    dosePerKgMax: 50,
    frequency: "6/6h",
    frequencyHours: 6,
    maxSingleDose: 500,
    maxDailyDose: 4000,
    route: "VO",
    indication: "Celulite, impetigo, ITU, piodermite",
    formulations: [
      { form: "Suspensão 250mg/5mL", concentration: 50, unit: "mL" },
      { form: "Cápsula 500mg" },
    ],
  },
  {
    id: "ceftriaxona",
    name: "Ceftriaxona",
    category: "Antibiótico",
    dosePerKg: 50,
    dosePerKgMax: 100,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 2000,
    maxDailyDose: 4000,
    route: "EV/IM",
    indication: "Meningite, sepse, pneumonia grave, pielonefrite",
    formulations: [
      { form: "Frasco-ampola 500mg" },
      { form: "Frasco-ampola 1g" },
    ],
    notes: "Contraindicado em RN < 28 dias (desloca bilirrubina). Em meningite: 100mg/kg/dia",
    ageRestriction: "> 28 dias",
    warnings: ["Contraindicado em neonatos hiperbilirrubinêmicos", "Não misturar com cálcio EV"],
  },
  {
    id: "azitromicina",
    name: "Azitromicina",
    category: "Antibiótico",
    dosePerKg: 10,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 500,
    maxDailyDose: 500,
    route: "VO",
    indication: "Faringite (alergia penicilina), PAC atípica, coqueluche",
    formulations: [
      { form: "Suspensão 200mg/5mL", concentration: 40, unit: "mL" },
      { form: "Suspensão 600mg/15mL", concentration: 40, unit: "mL" },
      { form: "Comprimido 500mg" },
    ],
    notes: "3-5 dias de tratamento. D1: 10mg/kg, D2-D5: 5mg/kg",
  },
  {
    id: "sulfametoxazol-tmp",
    name: "Sulfametoxazol-Trimetoprima",
    category: "Antibiótico",
    dosePerKg: 4,
    dosePerKgMax: 5,
    frequency: "12/12h",
    frequencyHours: 12,
    maxSingleDose: 160,
    maxDailyDose: 320,
    route: "VO",
    indication: "ITU, otite (2ª linha), shigelose",
    formulations: [
      { form: "Suspensão 40/8mg por mL (TMP)", concentration: 8, unit: "mL" },
      { form: "Comprimido 400/80mg" },
      { form: "Comprimido F 800/160mg" },
    ],
    notes: "Dose baseada no componente trimetoprima. Evitar em < 2 meses",
    ageRestriction: "> 2 meses",
  },
  {
    id: "metronidazol",
    name: "Metronidazol",
    category: "Antibiótico",
    dosePerKg: 7.5,
    dosePerKgMax: 10,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 500,
    maxDailyDose: 2000,
    route: "VO/EV",
    indication: "Giardíase, amebíase, anaeróbios, colite pseudomembranosa",
    formulations: [
      { form: "Suspensão 40mg/mL", concentration: 40, unit: "mL" },
      { form: "Comprimido 250mg" },
      { form: "Comprimido 400mg" },
    ],
    notes: "Giardíase: 15mg/kg/dia 8/8h por 5-7 dias",
  },
  {
    id: "penicilina-benzatina",
    name: "Penicilina G Benzatina",
    category: "Antibiótico",
    dosePerKg: 25000,
    frequency: "Dose única",
    frequencyHours: 0,
    maxSingleDose: 1200000,
    route: "IM",
    indication: "Faringite estreptocócica, profilaxia febre reumática",
    formulations: [
      { form: "Frasco 600.000 UI" },
      { form: "Frasco 1.200.000 UI" },
    ],
    notes: "< 20kg: 600.000 UI IM dose única. ≥ 20kg: 1.200.000 UI IM dose única. Dose em Unidades Internacionais",
  },
  {
    id: "oxacilina",
    name: "Oxacilina",
    category: "Antibiótico",
    dosePerKg: 50,
    dosePerKgMax: 50,
    frequency: "6/6h",
    frequencyHours: 6,
    maxSingleDose: 2000,
    maxDailyDose: 12000,
    route: "EV",
    indication: "Celulite grave, artrite séptica, osteomielite, endocardite (MSSA)",
    formulations: [
      { form: "Frasco-ampola 500mg" },
    ],
    notes: "Dose em infecções graves: 200mg/kg/dia",
  },
  {
    id: "gentamicina",
    name: "Gentamicina",
    category: "Antibiótico",
    dosePerKg: 5,
    dosePerKgMax: 7.5,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 360,
    maxDailyDose: 360,
    route: "EV/IM",
    indication: "Sepse neonatal, ITU complicada, endocardite (sinergismo)",
    formulations: [
      { form: "Ampola 80mg/2mL", concentration: 40, unit: "mL" },
    ],
    notes: "Nefrotóxica e ototóxica. Monitorar nível sérico",
    warnings: ["Nefrotóxica", "Ototóxica", "Dosar nível sérico"],
    renalAdjust: "Ajustar por ClCr e nível sérico",
  },
  {
    id: "clindamicina",
    name: "Clindamicina",
    category: "Antibiótico",
    dosePerKg: 10,
    dosePerKgMax: 13,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 600,
    maxDailyDose: 1800,
    route: "VO/EV",
    indication: "Celulite (MRSA comunitário), abscesso, alergia a penicilina",
    formulations: [
      { form: "Cápsula 300mg" },
      { form: "Ampola 600mg/4mL", concentration: 150, unit: "mL" },
    ],
    warnings: ["Risco de colite por C. difficile"],
  },

  // === ANTIALÉRGICOS / ANTI-HISTAMÍNICOS ===
  {
    id: "loratadina",
    name: "Loratadina",
    category: "Anti-histamínico",
    dosePerKg: 0.2,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 10,
    maxDailyDose: 10,
    route: "VO",
    indication: "Rinite alérgica, urticária",
    formulations: [
      { form: "Xarope 1mg/mL", concentration: 1, unit: "mL" },
      { form: "Comprimido 10mg" },
    ],
    notes: "< 30kg: 5mg/dia. ≥ 30kg: 10mg/dia",
    ageRestriction: "> 2 anos",
  },
  {
    id: "dexclorfeniramina",
    name: "Dexclorfeniramina",
    category: "Anti-histamínico",
    dosePerKg: 0.05,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 2,
    maxDailyDose: 6,
    route: "VO",
    indication: "Reações alérgicas, urticária, prurido",
    formulations: [
      { form: "Xarope 0,4mg/mL", concentration: 0.4, unit: "mL" },
      { form: "Comprimido 2mg" },
    ],
    notes: "Causa sonolência. Evitar em < 2 anos",
    ageRestriction: "> 2 anos",
    warnings: ["Sedativo — evitar em lactentes"],
  },
  {
    id: "prednisolona",
    name: "Prednisolona",
    category: "Corticoide",
    dosePerKg: 1,
    dosePerKgMax: 2,
    frequency: "24h (ou 12/12h)",
    frequencyHours: 24,
    maxSingleDose: 60,
    maxDailyDose: 60,
    route: "VO",
    indication: "Asma aguda, crupe, reação alérgica, síndrome nefrótica",
    formulations: [
      { form: "Solução oral 3mg/mL", concentration: 3, unit: "mL" },
      { form: "Solução oral 1mg/mL", concentration: 1, unit: "mL" },
      { form: "Comprimido 5mg" },
      { form: "Comprimido 20mg" },
    ],
    notes: "Asma: 1-2mg/kg/dia por 3-5 dias. Crupe: 1mg/kg dose única",
  },
  {
    id: "dexametasona",
    name: "Dexametasona",
    category: "Corticoide",
    dosePerKg: 0.15,
    dosePerKgMax: 0.6,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 16,
    maxDailyDose: 16,
    route: "VO/EV/IM",
    indication: "Crupe (laringotraqueobronquite), edema cerebral, meningite",
    formulations: [
      { form: "Elixir 0,1mg/mL", concentration: 0.1, unit: "mL" },
      { form: "Comprimido 4mg" },
      { form: "Ampola 4mg/mL", concentration: 4, unit: "mL" },
    ],
    notes: "Crupe: 0,15-0,6mg/kg dose única (máx 10mg). Meningite: 0,15mg/kg 6/6h 4 dias",
  },

  // === BRONCODILATADORES ===
  {
    id: "salbutamol-neb",
    name: "Salbutamol (nebulização)",
    category: "Broncodilatador",
    dosePerKg: 0.15,
    frequency: "20/20min (crise) ou 4/4h a 6/6h",
    frequencyHours: 4,
    maxSingleDose: 5,
    maxDailyDose: 30,
    route: "Nebulização",
    indication: "Broncoespasmo, asma aguda, bronquiolite",
    formulations: [
      { form: "Solução para nebulização 5mg/mL", concentration: 5, unit: "mL" },
    ],
    notes: "Diluir em 3-4mL de SF 0,9%. Crise: até 3 nebs em 1h. Alternativa: 1 gota/3kg (máx 10 gotas)",
  },
  {
    id: "salbutamol-spray",
    name: "Salbutamol (spray/MDI)",
    category: "Broncodilatador",
    dosePerKg: 0,
    frequency: "20/20min (crise) ou 4/4h a 6/6h",
    frequencyHours: 4,
    maxSingleDose: 10,
    route: "Inalatória",
    indication: "Broncoespasmo, asma",
    formulations: [
      { form: "Spray 100mcg/jato (MDI + espaçador)" },
    ],
    notes: "< 6 anos: 2-4 jatos com espaçador. ≥ 6 anos: 4-8 jatos. Crise: a cada 20min (até 3x na 1ª hora)",
  },
  {
    id: "brometo-ipratropio",
    name: "Brometo de Ipratrópio",
    category: "Broncodilatador",
    dosePerKg: 0,
    frequency: "6/6h a 8/8h",
    frequencyHours: 6,
    maxSingleDose: 0.5,
    route: "Nebulização",
    indication: "Asma moderada-grave (associar ao salbutamol)",
    formulations: [
      { form: "Solução para nebulização 0,25mg/mL", concentration: 0.25, unit: "mL" },
    ],
    notes: "< 6 anos: 0,25mg (20 gotas). ≥ 6 anos: 0,5mg (40 gotas). Associar ao salbutamol na crise",
  },

  // === ANTIEMÉTICOS ===
  {
    id: "ondansetrona",
    name: "Ondansetrona",
    category: "Antiemético",
    dosePerKg: 0.15,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 4,
    maxDailyDose: 12,
    route: "VO/EV",
    indication: "Náusea e vômitos (gastroenterite, pós-operatório, QT)",
    formulations: [
      { form: "Comprimido 4mg" },
      { form: "Comprimido ODT 4mg (sublingual)" },
      { form: "Ampola 4mg/2mL", concentration: 2, unit: "mL" },
    ],
    notes: "8-15kg: 2mg; 15-30kg: 4mg; >30kg: 8mg. Pode prolongar QT",
    ageRestriction: "> 6 meses",
    warnings: ["Pode prolongar QTc", "Evitar em < 6 meses"],
  },
  {
    id: "dimenidrinato",
    name: "Dimenidrinato",
    category: "Antiemético",
    dosePerKg: 1.25,
    frequency: "6/6h",
    frequencyHours: 6,
    maxSingleDose: 50,
    maxDailyDose: 150,
    route: "VO/EV",
    indication: "Cinetose, náuseas, vômitos",
    formulations: [
      { form: "Gotas 25mg/mL", concentration: 25, unit: "gotas" },
      { form: "Solução oral 2,5mg/mL", concentration: 2.5, unit: "mL" },
    ],
    notes: "Causa sonolência. 1 gota = ~1,25mg",
    ageRestriction: "> 2 anos",
    warnings: ["Sedativo"],
  },

  // === ANTICONVULSIVANTES / SNC ===
  {
    id: "diazepam-retal",
    name: "Diazepam (retal/EV)",
    category: "Anticonvulsivante",
    dosePerKg: 0.3,
    dosePerKgMax: 0.5,
    frequency: "Dose única (pode repetir 1x)",
    frequencyHours: 0,
    maxSingleDose: 10,
    route: "EV/Retal",
    indication: "Crise convulsiva aguda, estado de mal epiléptico",
    formulations: [
      { form: "Ampola 10mg/2mL", concentration: 5, unit: "mL" },
    ],
    notes: "EV: 0,2-0,3mg/kg (max 10mg), infundir lento (1mg/min). Retal: 0,5mg/kg",
    warnings: ["Depressão respiratória", "Ter material de reanimação disponível"],
  },
  {
    id: "midazolam",
    name: "Midazolam",
    category: "Sedativo/Anticonvulsivante",
    dosePerKg: 0.1,
    dosePerKgMax: 0.2,
    frequency: "Dose única",
    frequencyHours: 0,
    maxSingleDose: 5,
    route: "EV/IM/Intranasal/Bucal",
    indication: "Convulsão, sedação para procedimentos",
    formulations: [
      { form: "Ampola 15mg/3mL", concentration: 5, unit: "mL" },
      { form: "Ampola 5mg/5mL", concentration: 1, unit: "mL" },
    ],
    notes: "Intranasal: 0,2mg/kg (máx 5mg). Bucal: 0,2-0,5mg/kg. Sedação: 0,05-0,1mg/kg EV",
    warnings: ["Depressão respiratória", "Monitorar SpO2"],
  },
  {
    id: "fenobarbital",
    name: "Fenobarbital",
    category: "Anticonvulsivante",
    dosePerKg: 3,
    dosePerKgMax: 5,
    frequency: "12/12h ou 24h",
    frequencyHours: 12,
    maxSingleDose: 200,
    maxDailyDose: 400,
    route: "VO/EV",
    indication: "Convulsão neonatal, epilepsia (2ª linha pediátrica)",
    formulations: [
      { form: "Solução oral 40mg/mL", concentration: 40, unit: "mL" },
      { form: "Comprimido 100mg" },
      { form: "Ampola 200mg/2mL", concentration: 100, unit: "mL" },
    ],
    notes: "Ataque: 15-20mg/kg EV (max 1g). Manutenção: 3-5mg/kg/dia",
    warnings: ["Sedação", "Depressão respiratória no ataque EV"],
  },

  // === REIDRATAÇÃO / ELETRÓLITOS ===
  {
    id: "soro-reidratacao",
    name: "SRO (Sais de Reidratação Oral)",
    category: "Reidratação",
    dosePerKg: 50,
    dosePerKgMax: 100,
    frequency: "Em 4 horas",
    frequencyHours: 4,
    maxSingleDose: 2000,
    route: "VO",
    indication: "Desidratação leve a moderada (diarreia aguda)",
    formulations: [
      { form: "Envelope para 1L de solução" },
    ],
    notes: "Plano B (OMS): 50-100mL/kg em 4h. Oferecer em pequenos volumes frequentes. Dose em mL/kg",
  },

  // === ANTIPARASITÁRIOS ===
  {
    id: "albendazol",
    name: "Albendazol",
    category: "Antiparasitário",
    dosePerKg: 7.5,
    frequency: "12/12h ou dose única",
    frequencyHours: 12,
    maxSingleDose: 400,
    maxDailyDose: 800,
    route: "VO",
    indication: "Ascaridíase, enterobíase, ancilostomíase, giardíase",
    formulations: [
      { form: "Suspensão 40mg/mL", concentration: 40, unit: "mL" },
      { form: "Comprimido mastigável 400mg" },
    ],
    notes: "Dose única 400mg para maioria dos helmintos. Giardíase: 400mg/dia por 5 dias. Evitar em < 2 anos",
    ageRestriction: "> 2 anos",
  },
  {
    id: "mebendazol",
    name: "Mebendazol",
    category: "Antiparasitário",
    dosePerKg: 0,
    frequency: "12/12h",
    frequencyHours: 12,
    maxSingleDose: 100,
    maxDailyDose: 200,
    route: "VO",
    indication: "Enterobíase, ascaridíase, ancilostomíase, tricuríase",
    formulations: [
      { form: "Suspensão 20mg/mL", concentration: 20, unit: "mL" },
      { form: "Comprimido 100mg" },
    ],
    notes: "100mg 12/12h por 3 dias (dose fixa, independente do peso). Evitar em < 1 ano",
    ageRestriction: "> 1 ano",
  },

  // === ANTIFÚNGICOS ===
  {
    id: "nistatina",
    name: "Nistatina",
    category: "Antifúngico",
    dosePerKg: 0,
    frequency: "6/6h",
    frequencyHours: 6,
    maxSingleDose: 500000,
    route: "VO (tópico oral)",
    indication: "Candidíase oral (sapinho)",
    formulations: [
      { form: "Suspensão oral 100.000 UI/mL", concentration: 100000, unit: "mL" },
    ],
    notes: "RN/lactente: 1-2mL 6/6h. Aplicar na mucosa oral com gaze. Dose em UI, não por peso",
  },
  {
    id: "fluconazol",
    name: "Fluconazol",
    category: "Antifúngico",
    dosePerKg: 6,
    dosePerKgMax: 12,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 400,
    maxDailyDose: 400,
    route: "VO/EV",
    indication: "Candidíase invasiva, candidúria, criptococose",
    formulations: [
      { form: "Cápsula 150mg" },
      { form: "Suspensão 10mg/mL", concentration: 10, unit: "mL" },
      { form: "Frasco EV 2mg/mL" },
    ],
    notes: "Ataque: 12mg/kg D1, manutenção: 6mg/kg/dia",
    renalAdjust: "Reduzir 50% se ClCr < 50mL/min",
  },

  // === ANTI-HELMÍNTICOS ESPECIAIS ===
  {
    id: "ivermectina",
    name: "Ivermectina",
    category: "Antiparasitário",
    dosePerKg: 0.2,
    frequency: "Dose única",
    frequencyHours: 0,
    maxSingleDose: 18,
    route: "VO",
    indication: "Escabiose, pediculose, estrongiloidíase, oncocercose",
    formulations: [
      { form: "Comprimido 6mg" },
    ],
    notes: "200mcg/kg dose única. Repetir em 7-14 dias na escabiose. Evitar em < 15kg ou < 5 anos",
    ageRestriction: "> 5 anos e > 15kg",
    warnings: ["Não usar em < 15kg"],
  },

  // === ANTIRREFLUXO / TGI ===
  {
    id: "omeprazol",
    name: "Omeprazol",
    category: "IBP",
    dosePerKg: 1,
    frequency: "24h (antes do café)",
    frequencyHours: 24,
    maxSingleDose: 20,
    maxDailyDose: 40,
    route: "VO",
    indication: "DRGE, úlcera péptica, esofagite",
    formulations: [
      { form: "Cápsula 10mg" },
      { form: "Cápsula 20mg" },
    ],
    notes: "1-3 anos: 10mg/dia. > 3 anos e < 20kg: 10mg/dia. ≥ 20kg: 20mg/dia",
    ageRestriction: "> 1 ano",
  },
  {
    id: "ranitidina",
    name: "Ranitidina",
    category: "Antagonista H2",
    dosePerKg: 2,
    dosePerKgMax: 4,
    frequency: "12/12h",
    frequencyHours: 12,
    maxSingleDose: 150,
    maxDailyDose: 300,
    route: "VO/EV",
    indication: "DRGE (alternativa a IBP), úlcera",
    formulations: [
      { form: "Xarope 15mg/mL", concentration: 15, unit: "mL" },
      { form: "Comprimido 150mg" },
      { form: "Ampola 50mg/2mL", concentration: 25, unit: "mL" },
    ],
    notes: "Neonatos: 2mg/kg/dose 12/12h",
  },
  {
    id: "simeticona",
    name: "Simeticona",
    category: "Antiflatulento",
    dosePerKg: 0,
    frequency: "6/6h a 8/8h",
    frequencyHours: 6,
    maxSingleDose: 125,
    route: "VO",
    indication: "Cólica do lactente, gases, distensão abdominal",
    formulations: [
      { form: "Gotas 75mg/mL", concentration: 75, unit: "gotas" },
    ],
    notes: "Lactentes: 4-8 gotas antes das mamadas. 1 gota = ~2,5mg. Sem dose por peso — dose fixa por faixa etária",
  },

  // === SUPLEMENTOS ===
  {
    id: "sulfato-ferroso",
    name: "Sulfato Ferroso",
    category: "Suplemento",
    dosePerKg: 3,
    dosePerKgMax: 5,
    frequency: "24h (em jejum)",
    frequencyHours: 24,
    maxSingleDose: 60,
    maxDailyDose: 200,
    route: "VO",
    indication: "Anemia ferropriva, suplementação profilática",
    formulations: [
      { form: "Gotas 125mg/mL (25mg Fe elementar/mL)", concentration: 25, unit: "gotas" },
      { form: "Xarope 5mg Fe/mL", concentration: 5, unit: "mL" },
    ],
    notes: "Dose em mg de ferro elementar. Terapêutico: 3-5mg Fe/kg/dia. Profilático: 1mg Fe/kg/dia. 1 gota ≈ 1mg Fe",
  },
  {
    id: "vitamina-d",
    name: "Vitamina D (Colecalciferol)",
    category: "Suplemento",
    dosePerKg: 0,
    frequency: "24h",
    frequencyHours: 24,
    maxSingleDose: 2000,
    route: "VO",
    indication: "Suplementação, prevenção de raquitismo",
    formulations: [
      { form: "Gotas 200 UI/gota" },
      { form: "Gotas 400 UI/gota" },
    ],
    notes: "0-12m: 400 UI/dia. 1-18 anos: 600 UI/dia. Dose fixa por idade, não por peso. SBP recomenda até 2 anos",
  },

  // === CARDIOVASCULAR ===
  {
    id: "adrenalina",
    name: "Adrenalina (Epinefrina)",
    category: "Emergência",
    dosePerKg: 0.01,
    frequency: "3-5 min (PCR)",
    frequencyHours: 0,
    maxSingleDose: 1,
    route: "EV/IO/IM",
    indication: "PCR, anafilaxia, crupe grave, broncoespasmo refratário",
    formulations: [
      { form: "Ampola 1mg/mL (1:1.000)", concentration: 1, unit: "mL" },
    ],
    notes: "PCR: 0,01mg/kg (0,1mL/kg da 1:10.000) EV/IO. Anafilaxia: 0,01mg/kg IM (1:1.000, máx 0,3-0,5mg). Crupe: nebulização 0,5mL/kg (máx 5mL) da 1:1.000",
    warnings: ["Sempre confirmar concentração antes de administrar", "PCR: usar 1:10.000 EV"],
  },
  {
    id: "atropina",
    name: "Atropina",
    category: "Emergência",
    dosePerKg: 0.02,
    frequency: "Dose única (pode repetir)",
    frequencyHours: 0,
    maxSingleDose: 0.5,
    route: "EV/IO",
    indication: "Bradicardia sintomática, intoxicação por organofosforado",
    formulations: [
      { form: "Ampola 0,25mg/mL", concentration: 0.25, unit: "mL" },
      { form: "Ampola 0,5mg/mL", concentration: 0.5, unit: "mL" },
    ],
    notes: "Dose mínima: 0,1mg (doses menores podem causar bradicardia paradoxal). Máx total: 1mg (criança), 3mg (adolescente)",
    warnings: ["Dose mínima 0,1mg", "Não usar em bradicardia por hipóxia (tratar a causa)"],
  },
  {
    id: "adenosina",
    name: "Adenosina",
    category: "Antiarrítmico",
    dosePerKg: 0.1,
    dosePerKgMax: 0.2,
    frequency: "Dose única rápida",
    frequencyHours: 0,
    maxSingleDose: 6,
    route: "EV rápido (push)",
    indication: "TSV (taquicardia supraventricular)",
    formulations: [
      { form: "Ampola 6mg/2mL", concentration: 3, unit: "mL" },
    ],
    notes: "1ª dose: 0,1mg/kg (máx 6mg). 2ª dose: 0,2mg/kg (máx 12mg). Administrar em bolus rápido seguido de flush de SF",
    warnings: ["Administrar o mais proximal possível do coração", "Pode causar assistolia transitória (esperado)"],
  },

  // === ANTIVIRAIS ===
  {
    id: "aciclovir",
    name: "Aciclovir",
    category: "Antiviral",
    dosePerKg: 10,
    dosePerKgMax: 20,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 800,
    maxDailyDose: 4000,
    route: "VO/EV",
    indication: "Herpes simples, varicela, encefalite herpética",
    formulations: [
      { form: "Suspensão 40mg/mL", concentration: 40, unit: "mL" },
      { form: "Comprimido 200mg" },
      { form: "Comprimido 400mg" },
      { form: "Frasco EV 250mg" },
    ],
    notes: "Varicela: 20mg/kg/dose 6/6h VO 5 dias. Encefalite: 10-20mg/kg/dose 8/8h EV 14-21 dias",
    renalAdjust: "Ajustar por ClCr",
  },
  {
    id: "oseltamivir",
    name: "Oseltamivir (Tamiflu)",
    category: "Antiviral",
    dosePerKg: 3,
    frequency: "12/12h",
    frequencyHours: 12,
    maxSingleDose: 75,
    maxDailyDose: 150,
    route: "VO",
    indication: "Influenza (iniciar em até 48h dos sintomas)",
    formulations: [
      { form: "Cápsula 30mg" },
      { form: "Cápsula 45mg" },
      { form: "Cápsula 75mg" },
      { form: "Suspensão 6mg/mL", concentration: 6, unit: "mL" },
    ],
    notes: "≤ 15kg: 30mg 12/12h. 15-23kg: 45mg 12/12h. 23-40kg: 60mg 12/12h. > 40kg: 75mg 12/12h. Duração: 5 dias",
  },

  // === OUTROS ===
  {
    id: "metoclopramida",
    name: "Metoclopramida",
    category: "Procinético/Antiemético",
    dosePerKg: 0.1,
    dosePerKgMax: 0.15,
    frequency: "8/8h",
    frequencyHours: 8,
    maxSingleDose: 10,
    maxDailyDose: 30,
    route: "VO/EV",
    indication: "Náuseas, vômitos, gastroparesia",
    formulations: [
      { form: "Gotas 4mg/mL", concentration: 4, unit: "gotas" },
      { form: "Comprimido 10mg" },
      { form: "Ampola 10mg/2mL", concentration: 5, unit: "mL" },
    ],
    notes: "Risco de efeitos extrapiramidais em crianças. Usar por período curto",
    warnings: ["Distonia aguda possível", "Máx 5 dias de uso", "Contraindicado em < 1 ano"],
    ageRestriction: "> 1 ano",
  },
  {
    id: "hidratacao-ev",
    name: "Hidratação EV (Holliday-Segar)",
    category: "Fluidoterapia",
    dosePerKg: 0,
    frequency: "Contínuo 24h",
    frequencyHours: 24,
    maxSingleDose: 0,
    route: "EV",
    indication: "Manutenção hídrica, desidratação grave",
    formulations: [
      { form: "SG 5% + NaCl 0,9%" },
      { form: "SF 0,9% (expansão)" },
    ],
    notes: "Holliday-Segar: 0-10kg: 100mL/kg. 10-20kg: 1000 + 50mL/kg acima de 10. > 20kg: 1500 + 20mL/kg acima de 20. Expansão: SF 0,9% 20mL/kg em 20min",
  },
  {
    id: "naloxona",
    name: "Naloxona",
    category: "Antídoto",
    dosePerKg: 0.1,
    frequency: "Pode repetir a cada 2-3 min",
    frequencyHours: 0,
    maxSingleDose: 2,
    route: "EV/IM/SC/IN",
    indication: "Reversão de intoxicação opioide, depressão respiratória por opioide",
    formulations: [
      { form: "Ampola 0,4mg/mL", concentration: 0.4, unit: "mL" },
    ],
    notes: "0,1mg/kg EV (máx 2mg). Pode repetir. Meia-vida curta: risco de renarcotização",
    warnings: ["Meia-vida mais curta que a maioria dos opioides", "Monitorar por horas após reversão"],
  },
  {
    id: "manitol",
    name: "Manitol",
    category: "Osmótico",
    dosePerKg: 0.5,
    dosePerKgMax: 1,
    frequency: "4/4h a 6/6h",
    frequencyHours: 6,
    maxSingleDose: 50,
    route: "EV",
    indication: "Hipertensão intracraniana, edema cerebral",
    formulations: [
      { form: "Frasco 20% (200mg/mL)", concentration: 200, unit: "mL" },
    ],
    notes: "0,5-1g/kg em 20-30min. Manter osmolaridade sérica < 320. Monitorar Na+ e função renal",
    warnings: ["Monitorar osmolaridade sérica", "Risco de IR se osmolaridade > 320"],
  },
];

// Categories for filter
export function getPediatricCategories(): string[] {
  const cats = new Set(pediatricDrugs.map(d => d.category));
  return Array.from(cats).sort();
}

// Calculate dose
export interface CalculatedDose {
  drug: PediatricDrug;
  weight: number;
  singleDoseMg: number;
  singleDoseCapped: number;
  isCapped: boolean;
  dailyDoseMg: number;
  formulations: { form: string; volume: string }[];
  warnings: string[];
}

export function calculatePediatricDose(drug: PediatricDrug, weightKg: number): CalculatedDose {
  const dosePerKg = drug.dosePerKgMax || drug.dosePerKg;
  let singleDoseMg = Math.round(dosePerKg * weightKg * 100) / 100;
  const isCapped = singleDoseMg > drug.maxSingleDose && drug.maxSingleDose > 0;
  const singleDoseCapped = drug.maxSingleDose > 0 ? Math.min(singleDoseMg, drug.maxSingleDose) : singleDoseMg;
  
  const dosesPerDay = drug.frequencyHours > 0 ? Math.floor(24 / drug.frequencyHours) : 1;
  let dailyDoseMg = singleDoseCapped * dosesPerDay;
  if (drug.maxDailyDose && dailyDoseMg > drug.maxDailyDose) {
    dailyDoseMg = drug.maxDailyDose;
  }

  const warnings: string[] = [...(drug.warnings || [])];
  if (isCapped) warnings.unshift(`Dose limitada ao máximo de ${drug.maxSingleDose}mg por dose`);

  // Calculate volumes for liquid formulations
  const formulations = drug.formulations
    .filter(f => f.concentration && f.unit)
    .map(f => {
      const volume = singleDoseCapped / f.concentration!;
      const rounded = Math.round(volume * 10) / 10;
      return { form: f.form, volume: `${rounded} ${f.unit}` };
    });

  return {
    drug,
    weight: weightKg,
    singleDoseMg: Math.round(singleDoseMg * 10) / 10,
    singleDoseCapped: Math.round(singleDoseCapped * 10) / 10,
    isCapped,
    dailyDoseMg: Math.round(dailyDoseMg * 10) / 10,
    formulations,
    warnings,
  };
}
