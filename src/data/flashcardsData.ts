export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: FlashcardCategory;
  tags: string[];
}

export type FlashcardCategory =
  | "cardiologia"
  | "pneumologia"
  | "neurologia"
  | "infectologia"
  | "nefrologia"
  | "endocrinologia"
  | "gastroenterologia"
  | "hematologia"
  | "emergencia"
  | "pediatria"
  | "obstetricia"
  | "cirurgia"
  | "farmacologia"
  | "psiquiatria";

export const flashcardCategoryLabels: Record<FlashcardCategory, string> = {
  cardiologia: "Cardiologia",
  pneumologia: "Pneumologia",
  neurologia: "Neurologia",
  infectologia: "Infectologia",
  nefrologia: "Nefrologia",
  endocrinologia: "Endocrinologia",
  gastroenterologia: "Gastroenterologia",
  hematologia: "Hematologia",
  emergencia: "Emergência",
  pediatria: "Pediatria",
  obstetricia: "Obstetrícia",
  cirurgia: "Cirurgia",
  farmacologia: "Farmacologia",
  psiquiatria: "Psiquiatria",
};

export const flashcardCategoryColors: Record<FlashcardCategory, string> = {
  cardiologia: "bg-red-500/15 text-red-500",
  pneumologia: "bg-sky-500/15 text-sky-500",
  neurologia: "bg-violet-500/15 text-violet-500",
  infectologia: "bg-amber-500/15 text-amber-500",
  nefrologia: "bg-cyan-500/15 text-cyan-500",
  endocrinologia: "bg-emerald-500/15 text-emerald-500",
  gastroenterologia: "bg-orange-500/15 text-orange-500",
  hematologia: "bg-pink-500/15 text-pink-500",
  emergencia: "bg-red-600/15 text-red-600",
  pediatria: "bg-blue-500/15 text-blue-500",
  obstetricia: "bg-fuchsia-500/15 text-fuchsia-500",
  cirurgia: "bg-slate-500/15 text-slate-500",
  farmacologia: "bg-teal-500/15 text-teal-500",
  psiquiatria: "bg-indigo-500/15 text-indigo-500",
};

export const flashcards: Flashcard[] = [
  // ========== CARDIOLOGIA ==========
  { id: "fc-cardio-01", front: "Qual o tratamento de escolha para FV/TV sem pulso?", back: "Desfibrilação imediata (200J bifásico ou 360J monofásico) + RCP + Adrenalina 1mg IV a cada 3-5min + Amiodarona 300mg IV (1ª dose) → 150mg (2ª dose).", category: "cardiologia", tags: ["pcr", "fv", "desfibrilação"] },
  { id: "fc-cardio-02", front: "Critérios diagnósticos de IAMCSST no ECG?", back: "Supra de ST ≥ 1mm em 2 derivações contíguas (≥ 2mm em V2-V3 em homens ≥ 40a, ≥ 1.5mm em mulheres). BRE novo com clínica compatível. Supra em aVR + infra difuso = lesão de tronco.", category: "cardiologia", tags: ["iam", "ecg", "supra"] },
  { id: "fc-cardio-03", front: "Qual a classificação de Killip no IAM?", back: "I: sem IC (mortalidade 6%)\nII: estertores basais, B3, turgência jugular (17%)\nIII: EAP franco (38%)\nIV: choque cardiogênico (81%)", category: "cardiologia", tags: ["iam", "killip", "classificação"] },
  { id: "fc-cardio-04", front: "Contraindicações absolutas à trombólise no IAM?", back: "AVC hemorrágico prévio, AVC isquêmico < 3 meses, neoplasia intracraniana, sangramento ativo (exceto menstruação), dissecção de aorta, trauma facial/craniano < 3 meses.", category: "cardiologia", tags: ["iam", "trombólise", "contraindicação"] },
  { id: "fc-cardio-05", front: "Qual a tríade de Beck no tamponamento cardíaco?", back: "1. Hipotensão arterial\n2. Turgência jugular (↑PVC)\n3. Hipofonese de bulhas\n\nPulso paradoxal (queda > 10mmHg da PAS na inspiração). Diagnóstico: ECO → líquido pericárdico + colapso de câmaras direitas.", category: "cardiologia", tags: ["tamponamento", "beck", "pericárdio"] },
  { id: "fc-cardio-06", front: "Diferença entre FA e Flutter no ECG?", back: "FA: ausência de ondas P, ritmo irregularmente irregular, ondas f.\nFlutter: ondas F em 'dente de serra' (DII/DIII/aVF), frequência atrial ~300bpm, condução geralmente 2:1 (FC ~150bpm), ritmo regular.", category: "cardiologia", tags: ["fa", "flutter", "arritmia"] },
  { id: "fc-cardio-07", front: "Quando usar betabloqueador vs. verapamil na taquicardia supraventricular?", back: "Ambos para controle de FC. Verapamil é CONTRAINDICADO em: FA pré-excitada (WPW), IC com FE reduzida, uso concomitante de betabloqueador IV. Betabloqueador: preferir em IC (carvedilol, bisoprolol, metoprolol).", category: "cardiologia", tags: ["tsv", "betabloqueador", "verapamil"] },
  { id: "fc-cardio-08", front: "Qual a diferença entre Insuficiência Cardíaca HFrEF e HFpEF?", back: "HFrEF (FE ≤ 40%): dilatação ventricular, tratamento com IECA/BRA + BB + espironolactona + SGLT2i + sacubitril/valsartana.\nHFpEF (FE ≥ 50%): hipertrofia, disfunção diastólica. Tratar congestão (diuréticos) + comorbidades. SGLT2i tem benefício.", category: "cardiologia", tags: ["ic", "fração ejeção", "tratamento"] },
  
  // ========== PNEUMOLOGIA ==========
  { id: "fc-pneumo-01", front: "Critérios de Light para diferenciação de exsudato vs transudato?", back: "EXSUDATO se qualquer um:\n• Proteína pleural/sérica > 0.5\n• LDH pleural/sérica > 0.6\n• LDH pleural > 2/3 do limite superior normal sérico\n\nTransudato: IC, cirrose, síndrome nefrótica.", category: "pneumologia", tags: ["derrame pleural", "light", "exsudato"] },
  { id: "fc-pneumo-02", front: "Classificação da DPOC (GOLD) por espirometria?", back: "Pós-broncodilatador VEF1/CVF < 0.7:\nGOLD 1 (leve): VEF1 ≥ 80%\nGOLD 2 (moderada): 50-79%\nGOLD 3 (grave): 30-49%\nGOLD 4 (muito grave): < 30%\n\nClassificação ABE por sintomas + exacerbações.", category: "pneumologia", tags: ["dpoc", "gold", "espirometria"] },
  { id: "fc-pneumo-03", front: "Tratamento do pneumotórax hipertensivo?", back: "1. Diagnóstico CLÍNICO (não esperar RX!)\n2. Descompressão imediata: agulha 14G no 2º EIC linha hemiclavicular\n3. Seguido de drenagem torácica em selo d'água (5º EIC linha axilar média)\n\nSinais: desvio traqueal, ausência de MV, timpanismo, hipotensão.", category: "pneumologia", tags: ["pneumotórax", "drenagem", "emergência"] },
  { id: "fc-pneumo-04", front: "Indicações de VNI na insuficiência respiratória aguda?", back: "Indicações com forte evidência:\n• DPOC exacerbada com acidose (pH < 7.35)\n• EAP cardiogênico\n• Imunossuprimidos com IR\n• Pós-extubação em pacientes de risco\n\nContraindicações: rebaixamento de consciência, vômitos, PCR, trauma facial.", category: "pneumologia", tags: ["vni", "insuficiência respiratória", "cpap"] },
  { id: "fc-pneumo-05", front: "Qual a diferença entre SDRA leve, moderada e grave?", back: "Classificação de Berlim (P/F com PEEP ≥ 5):\nLeve: P/F 200-300 (mortalidade ~27%)\nModerada: P/F 100-200 (mortalidade ~32%)\nGrave: P/F < 100 (mortalidade ~45%)\n\nTratamento: VM protetora (VT 6ml/kg, Pplatô ≤ 30, PEEP alta, prona se P/F < 150).", category: "pneumologia", tags: ["sdra", "berlim", "vm protetora"] },
  { id: "fc-pneumo-06", front: "Parâmetros da ventilação mecânica protetora?", back: "• VT: 6 ml/kg de peso predito\n• Pressão de platô ≤ 30 cmH₂O\n• Driving pressure ≤ 15 cmH₂O\n• PEEP: tabela PEEP/FiO₂\n• FR: ajustar para pH > 7.20\n• FiO₂: menor possível para SpO₂ 92-96%", category: "pneumologia", tags: ["vm", "protetora", "sdra"] },

  // ========== NEUROLOGIA ==========
  { id: "fc-neuro-01", front: "Qual a escala de NIHSS e quando usar?", back: "National Institutes of Health Stroke Scale: 0-42 pontos.\nAvalia: consciência, olhar, campo visual, paralisia facial, força MMSS/MMII, ataxia, sensibilidade, linguagem, disartria, extinção.\n\nUsar em TODO AVC para definir gravidade e indicação de trombólise/trombectomia.", category: "neurologia", tags: ["avc", "nihss", "escala"] },
  { id: "fc-neuro-02", front: "Janela terapêutica para trombólise e trombectomia no AVC isquêmico?", back: "Trombólise IV (alteplase 0.9mg/kg): até 4.5h\nTrombectomia mecânica: até 24h (seleção por perfusão — mismatch penumbra/core)\n\nAlteplase: 10% bolus + 90% em 1h. Dose máx: 90mg.\nTenecteplase (0.25mg/kg): alternativa em bolus único.", category: "neurologia", tags: ["avc", "trombólise", "trombectomia"] },
  { id: "fc-neuro-03", front: "Tratamento do Status Epiléptico — sequência?", back: "1º (0-5min): ABC + Diazepam 10mg IV ou Midazolam 10mg IM\n2º (5-20min): Fenitoína 20mg/kg IV (em SF, 50mg/min) ou Valproato 40mg/kg IV\n3º (20-40min): Dose adicional de fenitoína 5-10mg/kg ou fenobarbital 20mg/kg\n4º (>40min): SE refratário → Midazolam, Propofol ou Tiopental em infusão contínua + IOT + EEG.", category: "neurologia", tags: ["status epiléptico", "convulsão", "antiepiléptico"] },
  { id: "fc-neuro-04", front: "Como diferenciar AVC isquêmico de hemorrágico clinicamente?", back: "Não é possível com certeza — TC é obrigatória!\nSugestivo de hemorrágico: cefaleia intensa, vômitos, rebaixamento precoce, hipertensão grave.\nSugestivo de isquêmico: déficit focal abrupto sem cefaleia intensa.\n\nRegra: TODA suspeita de AVC → TC sem contraste IMEDIATA.", category: "neurologia", tags: ["avc", "diagnóstico diferencial", "tc"] },
  { id: "fc-neuro-05", front: "Critérios diagnósticos de morte encefálica no Brasil?", back: "CFM 2.173/2017:\n1. Pré-requisitos: causa conhecida, T > 35°C, sem drogas depressoras, sem DHE grave\n2. Dois exames clínicos (intervalos por idade) por médicos diferentes\n3. Teste de apneia (pCO₂ > 55 mmHg sem drive respiratório)\n4. Exame complementar: angiografia, EEG, DTC ou cintilografia", category: "neurologia", tags: ["morte encefálica", "critérios", "apneia"] },

  // ========== INFECTOLOGIA ==========
  { id: "fc-infecto-01", front: "Critérios diagnósticos de sepse (Sepsis-3)?", back: "Sepse: infecção SUSPEITA ou CONFIRMADA + aumento ≥ 2 pontos no SOFA.\nChoque séptico: sepse + necessidade de vasopressor para PAM ≥ 65 + lactato > 2 mmol/L após ressuscitação volêmica adequada.\n\nqSOFA (screening): FR ≥ 22, PAS ≤ 100, alteração mental.", category: "infectologia", tags: ["sepse", "sofa", "critérios"] },
  { id: "fc-infecto-02", front: "Antibióticos empíricos na PAC — ambulatorial vs internado?", back: "Ambulatorial sem comorbidades: Amoxicilina 500mg 8/8h\nAmbulatrial com comorbidades: Amoxicilina-clavulanato + Azitromicina ou Levofloxacino\nEnfermaria: Ceftriaxone 1g IV 12/12h + Azitromicina 500mg IV/VO\nUTI: Ceftriaxone + Azitromicina (ou Levofloxacino). Se risco MRSA: + Vancomicina.", category: "infectologia", tags: ["pneumonia", "antibiótico", "pac"] },
  { id: "fc-infecto-03", front: "Quando cobrir anaeróbios em pneumonia?", back: "Indicações: abscesso pulmonar, pneumonia aspirativa com cavitação, empiema.\nEscolhas: Clindamicina 600mg IV 6/6h, Amoxicilina-clavulanato, Metronidazol (apenas se associado a outro ATB, não cobre aeróbios).\n\nPneumonia aspirativa SEM cavitação: Amoxicilina-clavulanato é suficiente.", category: "infectologia", tags: ["anaeróbio", "aspirativa", "abscesso"] },
  { id: "fc-infecto-04", front: "Esquema RIPE para tuberculose — doses e duração?", back: "Fase intensiva (2 meses): RHZE\n• Rifampicina (R) 150mg\n• Isoniazida (H) 75mg\n• Pirazinamida (Z) 400mg\n• Etambutol (E) 275mg\n(Dose fixa combinada por peso)\n\nFase manutenção (4 meses): RH\nTotal: 6 meses (meningite TB: 12 meses).", category: "infectologia", tags: ["tuberculose", "ripe", "tratamento"] },
  { id: "fc-infecto-05", front: "Classificação de dengue e sinais de alarme?", back: "Dengue sem sinais de alarme → Grupo A (hidratação oral)\nCom sinais de alarme → Grupo C (hidratação IV)\nDengue grave → Grupo D (expansão rápida)\n\nSinais de alarme: dor abdominal intensa, vômitos persistentes, acúmulo de líquidos, sangramento mucosa, letargia, hepatomegalia, ↑Ht com ↓plaquetas.", category: "infectologia", tags: ["dengue", "alarme", "classificação"] },

  // ========== NEFROLOGIA ==========
  { id: "fc-nefro-01", front: "Indicações de diálise de urgência (mnemônico AEIOU)?", back: "A — Acidose metabólica grave refratária (pH < 7.1)\nE — Eletrólitos: hipercalemia refratária (K > 6.5)\nI — Intoxicação (metanol, etilenoglicol, lítio, salicilato)\nO — Overload (hipervolemia refratária)\nU — Uremia sintomática (encefalopatia, pericardite, sangramento)", category: "nefrologia", tags: ["diálise", "urgência", "aeiou"] },
  { id: "fc-nefro-02", front: "Como diferenciar IRA pré-renal de renal (NTA)?", back: "Pré-renal: Na urinário < 20, FENa < 1%, osmolaridade urinária > 500, cilindros hialinos.\nNTA (renal): Na urinário > 40, FENa > 2%, osmolaridade urinária < 350, cilindros granulosos ('muddy brown').\n\nFENa = (NaU × CrP) / (NaP × CrU) × 100", category: "nefrologia", tags: ["ira", "pré-renal", "nta"] },
  { id: "fc-nefro-03", front: "Classificação KDIGO de lesão renal aguda?", back: "Estágio 1: Cr ↑ 1.5-1.9x basal ou ↑ ≥ 0.3mg/dL em 48h ou diurese < 0.5ml/kg/h por 6-12h\nEstágio 2: Cr ↑ 2.0-2.9x basal ou diurese < 0.5ml/kg/h por ≥ 12h\nEstágio 3: Cr ↑ ≥ 3x basal ou Cr ≥ 4mg/dL ou diálise ou diurese < 0.3ml/kg/h por ≥ 24h ou anúria ≥ 12h", category: "nefrologia", tags: ["kdigo", "ira", "classificação"] },

  // ========== ENDOCRINOLOGIA ==========
  { id: "fc-endo-01", front: "Diagnóstico e tratamento da cetoacidose diabética (CAD)?", back: "Diagnóstico: glicemia > 250, pH < 7.3, HCO₃ < 18, cetonemia/cetonúria, AG aumentado.\n\nTratamento:\n1. SF 0.9% 1-1.5L na 1ª hora\n2. Insulina regular 0.1 UI/kg/h IV\n3. Repor K+ se < 5.3 (ANTES da insulina se K < 3.3)\n4. Bicarbonato APENAS se pH < 6.9", category: "endocrinologia", tags: ["cad", "diabetes", "insulina"] },
  { id: "fc-endo-02", front: "Diferença entre CAD e Estado Hiperglicêmico Hiperosmolar (EHH)?", back: "CAD: DM1, glicemia 250-600, pH < 7.3, cetose +++, AG ↑, osmolaridade variável.\nEHH: DM2 idosos, glicemia > 600, pH > 7.3, cetose leve/ausente, osmolaridade > 320 mOsm/kg.\n\nEHH: desidratação muito mais intensa. Volume: até 6-9L nas primeiras 24h. Insulina em dose mais baixa.", category: "endocrinologia", tags: ["ehh", "cad", "diferencial"] },
  { id: "fc-endo-03", front: "Critérios diagnósticos de tireotoxicose/tempestade tireoidiana?", back: "Score de Burch-Wartofsky ≥ 45 = altamente sugestivo:\nFebre, taquicardia, IC, disfunção GI, alteração neurológica.\n\nTratamento:\n1. PTU 200mg VO 4/4h (bloqueia síntese + conversão T4→T3)\n2. Iodo (Lugol) 1h APÓS PTU\n3. Propranolol IV/VO\n4. Hidrocortisona 100mg IV 8/8h\n5. Suporte: resfriar, hidratar", category: "endocrinologia", tags: ["tireotoxicose", "tempestade", "ptu"] },

  // ========== GASTROENTEROLOGIA ==========
  { id: "fc-gastro-01", front: "Classificação de Child-Pugh na cirrose — parâmetros?", back: "5 parâmetros (1-3 pontos cada):\n• Bilirrubina\n• Albumina\n• INR/TP\n• Ascite\n• Encefalopatia hepática\n\nChild A: 5-6 pts (sobrevida 100% em 1 ano)\nChild B: 7-9 pts (81%)\nChild C: 10-15 pts (45%)", category: "gastroenterologia", tags: ["cirrose", "child-pugh", "prognóstico"] },
  { id: "fc-gastro-02", front: "Conduta na hemorragia digestiva alta varicosa?", back: "1. Estabilizar: acesso calibroso, cristalóide, transfusão (alvo Hb 7-8)\n2. Octreotida/Terlipressina IV (antes mesmo da EDA)\n3. Ceftriaxone 1g/dia (profilaxia PBE)\n4. EDA em < 12h: ligadura elástica\n5. Se falha: TIPS ou balão de Sengstaken-Blakemore (temporário)", category: "gastroenterologia", tags: ["hda", "varicosa", "octreotida"] },
  { id: "fc-gastro-03", front: "Diagnóstico e tratamento da peritonite bacteriana espontânea (PBE)?", back: "Diagnóstico: paracentese com PMN ≥ 250/mm³ no líquido ascítico.\nCultura: monobacteriana (E. coli, Klebsiella, pneumococo).\n\nTratamento: Ceftriaxone 2g/dia por 5 dias + Albumina 1.5g/kg no D1 e 1g/kg no D3 (reduz mortalidade de 30% para 10%).\nProfilaxia secundária: Norfloxacino 400mg/dia.", category: "gastroenterologia", tags: ["pbe", "ascite", "paracentese"] },

  // ========== HEMATOLOGIA ==========
  { id: "fc-hemato-01", front: "Quando transfundir concentrado de hemácias?", back: "• Hb < 7 g/dL: maioria dos pacientes estáveis (restritiva)\n• Hb < 8 g/dL: cardiopatas, cirurgia cardíaca, sepse precoce\n• Hb < 9-10 g/dL: SCA com instabilidade\n\nSempre avaliar CLÍNICA (taquicardia, hipotensão, dispneia) além do valor numérico.", category: "hematologia", tags: ["transfusão", "hemácias", "threshold"] },
  { id: "fc-hemato-02", front: "Diferença entre PTT e SHU?", back: "PTT: ADAMTS13 < 10%, pêntade (trombocitopenia, anemia hemolítica microangiopática, febre, alteração neurológica, IRA). Tratamento: plasmaférese.\nSHU: pós-diarreia (E. coli O157:H7), tríade (trombocitopenia, AHMA, IRA). Crianças. Tratamento: suporte. Atípico: eculizumabe.", category: "hematologia", tags: ["ptt", "shu", "microangiopatia"] },
  { id: "fc-hemato-03", front: "Protocolo de transfusão maciça — quando ativar e proporção?", back: "Ativar se: perda ≥ 1 volemia em 24h, > 10 CH em 24h, sangramento incontrolável.\nProporção: CH:PFC:Plaquetas = 1:1:1\nÁcido tranexâmico 1g IV em < 3h do trauma (CRASH-2).\nFibrinogênio: crioprecipitado se < 150mg/dL.", category: "hematologia", tags: ["transfusão maciça", "trauma", "1:1:1"] },

  // ========== EMERGÊNCIA ==========
  { id: "fc-emerg-01", front: "ABCDE do trauma — o que cada letra significa?", back: "A: Airway + proteção cervical\nB: Breathing (ventilação)\nC: Circulation (controle de hemorragia)\nD: Disability (neurológico — Glasgow, pupilas)\nE: Exposure (exposição com controle de hipotermia)\n\nSempre na ORDEM. Tratar o que encontrar antes de avançar.", category: "emergencia", tags: ["atls", "trauma", "abcde"] },
  { id: "fc-emerg-02", front: "Qual a sequência rápida de intubação (SRI)?", back: "1. Preparação (material, drogas, plano B)\n2. Pré-oxigenação 3-5min (SpO₂ 100%)\n3. Pré-tratamento (fentanil 1-2mcg/kg se HIC/reatividade)\n4. Paralisia + Indução:\n   • Etomidato 0.3mg/kg ou Quetamina 1-2mg/kg\n   • Succinilcolina 1.5mg/kg ou Rocurônio 1.2mg/kg\n5. Posicionar e intubar\n6. Confirmar (capnografia!)", category: "emergencia", tags: ["iot", "sri", "intubação"] },
  { id: "fc-emerg-03", front: "Drogas e doses na anafilaxia?", back: "1ª LINHA: Adrenalina 0.3-0.5mg IM (1:1000) na face anterolateral da coxa. Repetir a cada 5-15min se necessário.\n\n2ª linha:\n• Difenidramina 25-50mg IV\n• Ranitidina 50mg IV\n• Metilprednisolona 125mg IV\n• SF 0.9% 1-2L rápido se hipotensão\n• Salbutamol NBI se broncoespasmo", category: "emergencia", tags: ["anafilaxia", "adrenalina", "alergia"] },
  { id: "fc-emerg-04", front: "Como manejar a via aérea difícil (plano B/C/D)?", back: "Plano A: Laringoscopia direta/videolaringoscopia\nPlano B: Dispositivo supraglótico (máscara laríngea)\nPlano C: Ventilação com máscara + guedel (voltar ao básico)\nPlano D: Cricotireoidostomia cirúrgica ('can't intubate, can't oxygenate')\n\nNUNCA mais de 3 tentativas de laringoscopia sem oxigenar.", category: "emergencia", tags: ["via aérea difícil", "cricotireoidostomia", "supraglótico"] },

  // ========== PEDIATRIA ==========
  { id: "fc-ped-01", front: "Classificação da desidratação em crianças e reposição?", back: "Leve (< 5%): mucosas secas, sede. Plano A: TRO domiciliar.\nModerada (5-10%): olhos encovados, turgor reduzido, taquicardia. Plano B: TRO supervisionada 4h.\nGrave (> 10%): letargia/coma, pulsos finos, tempo enchimento > 3s. Plano C: SF 20ml/kg em 20min, repetir até 3x.", category: "pediatria", tags: ["desidratação", "tro", "reposição"] },
  { id: "fc-ped-02", front: "Cálculo de hidratação de manutenção IV em crianças (Holliday-Segar)?", back: "• Até 10 kg: 100 ml/kg/dia\n• 10-20 kg: 1000 + 50 ml/kg acima de 10\n• > 20 kg: 1500 + 20 ml/kg acima de 20\n\nExemplo: criança de 25kg = 1500 + (5×20) = 1600 ml/dia = ~67 ml/h\nSolução: SG5% + NaCl 20% (3ml/500ml) + KCl 10% (5ml/500ml).", category: "pediatria", tags: ["hidratação", "holliday-segar", "manutenção"] },
  { id: "fc-ped-03", front: "Dose de adrenalina na PCR pediátrica?", back: "Adrenalina: 0.01 mg/kg (0.1 ml/kg da solução 1:10.000) IV/IO\nDose máxima: 1mg\nRepetir a cada 3-5 minutos\n\nCompressões: 100-120/min\nRelação: 15:2 (2 socorristas) ou 30:2 (1 socorrista)\nProfundidade: 1/3 do diâmetro AP do tórax.", category: "pediatria", tags: ["pcr", "pediátrica", "adrenalina"] },
  { id: "fc-ped-04", front: "Critérios de internação na bronquiolite (lactentes)?", back: "• < 3 meses ou prematuros < 6 meses\n• SpO₂ < 92% em ar ambiente\n• Desconforto respiratório moderado/grave (tiragem, batimento de asa)\n• Apneia\n• Incapacidade de alimentação\n• Comorbidades: cardiopatia, doença pulmonar crônica, imunodeficiência\n\nTratamento: O₂ + hidratação. NÃO usar broncodilatador/corticóide de rotina.", category: "pediatria", tags: ["bronquiolite", "lactente", "internação"] },

  // ========== OBSTETRÍCIA ==========
  { id: "fc-obst-01", front: "Diagnóstico e tratamento da pré-eclâmpsia grave?", back: "Diagnóstico: PA ≥ 160/110 + proteinúria ≥ 300mg/24h (ou relação P/C ≥ 0.3) OU sinais de gravidade (cefaleia, epigastralgia, trombocitopenia < 100.000, Cr > 1.1, TGO/TGP > 2x).\n\nTratamento:\n1. Sulfato de Magnésio (Zuspan: 4g IV bolus + 1-2g/h IV)\n2. Anti-hipertensivo: Nifedipina VO ou Hidralazina IV\n3. Resolução da gestação (> 34 sem ou se instável).", category: "obstetricia", tags: ["pré-eclâmpsia", "magnésio", "zuspan"] },
  { id: "fc-obst-02", front: "Sinais de intoxicação por sulfato de magnésio e antídoto?", back: "Monitorar a cada 1-2h:\n• Reflexo patelar abolido (primeiro sinal — 10mg/dL)\n• FR < 16 irpm (15mg/dL)\n• Parada respiratória (> 15mg/dL)\n• Parada cardíaca (> 25mg/dL)\n\nAntídoto: Gluconato de Cálcio 10% — 10ml IV lento (1g em 3-5 min).\nManter diurese ≥ 25ml/h (excreção é renal).", category: "obstetricia", tags: ["magnésio", "intoxicação", "gluconato cálcio"] },
  { id: "fc-obst-03", front: "Classificação de hemorragia pós-parto e tratamento escalonado?", back: "HPP: perda ≥ 500ml (vaginal) ou ≥ 1000ml (cesárea).\n\n4 T's (causas): Tônus (70%), Trauma, Tecido, Trombina.\n\nEscalonamento:\n1. Massagem uterina + Ocitocina 20-40UI em SF\n2. Misoprostol 800mcg retal + Ác. Tranexâmico 1g IV\n3. Balão de Bakri\n4. Sutura de B-Lynch\n5. Histerectomia (último recurso)", category: "obstetricia", tags: ["hpp", "hemorragia", "4ts"] },

  // ========== CIRURGIA ==========
  { id: "fc-cir-01", front: "Indicações de laparotomia exploradora no trauma abdominal?", back: "Absolutas:\n• Instabilidade hemodinâmica com FAST positivo\n• Peritonite difusa\n• Evisceração\n• Pneumoperitônio\n• Lesão diafragmática\n• FAB transabdominal\n\nRelativas: sangramento GI, lesão de víscera oca na TC, sangue na SNG/sonda retal.", category: "cirurgia", tags: ["laparotomia", "trauma", "abdome agudo"] },
  { id: "fc-cir-02", front: "Classificação de Hinchey para diverticulite complicada?", back: "I: abscesso pericólico (< 4cm) → ATB IV\nII: abscesso pélvico/retroperitoneal (> 4cm) → drenagem percutânea\nIII: peritonite purulenta (ruptura de abscesso) → cirurgia\nIV: peritonite fecal (perfuração livre) → cirurgia de URGÊNCIA (Hartmann)\n\nNão complicada: ATB oral + dieta líquida. Colonoscopia em 6 sem.", category: "cirurgia", tags: ["diverticulite", "hinchey", "peritonite"] },
  { id: "fc-cir-03", front: "Score de Alvarado para apendicite — critérios?", back: "Sintomas:\n• Migração da dor para FID (1 pt)\n• Anorexia (1 pt)\n• Náuseas/vômitos (1 pt)\n\nSinais:\n• Dor em FID (2 pts)\n• Descompressão brusca (1 pt)\n• Febre > 37.3°C (1 pt)\n\nLab:\n• Leucocitose > 10.000 (2 pts)\n• Desvio à esquerda (1 pt)\n\nTotal 10 pts. ≥ 7: alta probabilidade → cirurgia.", category: "cirurgia", tags: ["apendicite", "alvarado", "score"] },

  // ========== FARMACOLOGIA ==========
  { id: "fc-farma-01", front: "Antídotos de emergência — principais pares droga/antídoto?", back: "• Paracetamol → N-Acetilcisteína\n• Opióides → Naloxona\n• Benzodiazepínicos → Flumazenil\n• Organofosforados → Atropina + Pralidoxima\n• Cumarínicos (warfarina) → Vitamina K + CCP\n• Heparina → Protamina\n• Dabigatrana → Idarucizumabe\n• Digitálicos → Anticorpos anti-digoxina\n• Metanol/Etilenoglicol → Fomepizol ou Etanol + Diálise", category: "farmacologia", tags: ["antídoto", "intoxicação", "emergência"] },
  { id: "fc-farma-02", front: "Quais drogas prolongam o QT e risco de Torsades?", back: "Classes/drogas que prolongam QT:\n• Antiarrítmicos: Amiodarona, Sotalol, Procainamida\n• Antibióticos: Macrolídeos, Fluoroquinolonas\n• Antipsicóticos: Haloperidol, Quetiapina\n• Antidepressivos: Tricíclicos, Citalopram\n• Outros: Ondansetrona, Metadona, Domperidona\n\nSe Torsades: Magnésio 2g IV. NUNCA Amiodarona!", category: "farmacologia", tags: ["qt longo", "torsades", "medicamentos"] },
  { id: "fc-farma-03", front: "Drogas contraindicadas na gestação — categoria X?", back: "• Metotrexato\n• Warfarina (1º trimestre)\n• Misoprostol\n• Isotretinoína\n• Talidomida\n• Estatinas\n• IECA/BRA (2º e 3º trimestre)\n• Tetraciclinas\n• Finasterida\n• Ribavirina\n\nAlternativas seguras: insulina, metildopa, labetalol, penicilinas, cefalosporinas.", category: "farmacologia", tags: ["gestação", "categoria x", "contraindicação"] },

  // ========== PSIQUIATRIA ==========
  { id: "fc-psiq-01", front: "Tratamento da agitação psicomotora no PS?", back: "1º: Abordagem verbal (descalada)\n2º: Contenção química:\n• Haloperidol 5mg IM + Midazolam 5mg IM (mais usado)\n• Alternativa: Olanzapina 10mg IM (evitar com BZD)\n• Se intoxicação por estimulantes: BZD isolado (Diazepam 10mg IV)\n\n3º: Contenção mecânica (último recurso, com monitorização contínua).\nECG antes se possível (risco de QT longo com haloperidol).", category: "psiquiatria", tags: ["agitação", "contenção", "haloperidol"] },
  { id: "fc-psiq-02", front: "Síndrome Neuroléptica Maligna — diagnóstico e tratamento?", back: "Tétrade: hipertermia + rigidez muscular + alteração mental + disautonomia.\nLab: CPK muito elevada (> 1000), leucocitose, mioglobinúria.\n\nTratamento:\n1. Suspender antipsicótico\n2. Suporte (hidratação, resfriamento)\n3. Dantrolene 1-2.5mg/kg IV (relaxante muscular)\n4. Bromocriptina 2.5mg VO 8/8h\n5. Monitorar CPK, função renal (rabdomiólise)", category: "psiquiatria", tags: ["snm", "neuroléptica", "dantrolene"] },
  { id: "fc-psiq-03", front: "Avaliação de risco suicida — fatores e conduta?", back: "Fatores de alto risco: tentativa prévia, plano detalhado, acesso a meios letais, isolamento social, transtorno psiquiátrico (depressão, bipolar, esquizofrenia), abuso de substâncias, desesperança.\n\nConduta:\n1. Perguntar diretamente sobre ideação suicida\n2. Escala Columbia (C-SSRS)\n3. Restringir acesso a meios letais\n4. Internação se risco iminente\n5. Não deixar sozinho", category: "psiquiatria", tags: ["suicídio", "risco", "columbia"] },
];
