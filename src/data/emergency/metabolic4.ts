import type { EmergencyProtocol } from "./types";

export const metabolicProtocols4: EmergencyProtocol[] = [
  {
    id: "ehh-emergencia",
    title: "Estado Hiperglicêmico Hiperosmolar",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "O EHH é uma emergência hiperglicêmica com mortalidade de 5-20%, superior à CAD. Mais comum em idosos com DM2. Caracteriza-se por hiperglicemia extrema (> 600 mg/dL), hiperosmolalidade (> 320 mOsm/kg) e desidratação grave sem cetoacidose significativa." },
      { id: "def", title: "Definição", content: "Glicemia > 600 mg/dL, osmolalidade > 320 mOsm/kg, pH > 7,3, HCO3 > 18, cetonúria mínima ou ausente. Desidratação grave (déficit 10-15% do peso)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Idoso + DM2 + desidratação grave + rebaixamento de consciência + glicemia muito elevada. Precipitantes: infecção (principal), AVC, IAM, medicamentos (corticoides, tiazídicos)." },
      { id: "etiology", title: "Etiologia", content: "Insulina residual suficiente para prevenir cetogênese, mas insuficiente para evitar hiperglicemia. Diurese osmótica → desidratação profunda → hiperosmolalidade → rebaixamento." },
      { id: "clinical", title: "Apresentação Clínica", content: "Desidratação muito grave, rebaixamento de consciência (proporcional à osmolalidade), convulsões (10-15%), déficit focal (pode simular AVC!), hipotensão, oligúria." },
      { id: "diagnosis", title: "Diagnóstico", content: "Glicemia, osmolalidade (calculada e medida), gasometria, eletrólitos (Na corrigido), função renal, hemograma, ECG, RX tórax, buscar precipitante." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "CAD, AVC, coma hipoglicêmico, coma urêmico, intoxicação, coma hepático." },
      { id: "conduct", title: "Conduta", content: "HIDRATAÇÃO É O PRINCIPAL TRATAMENTO:\n1. SF 0,9% 1-1,5 L/h na 1ª hora\n2. Depois: 250-500 mL/h (SF 0,9% ou 0,45% conforme Na corrigido)\n3. Insulina: doses MENORES que na CAD (0,02-0,05 UI/kg/h IV)\n4. K+: repor como na CAD\n5. Profilaxia de TVP: Enoxaparina (maior risco trombótico)\n6. Queda da osmolalidade: máx 3-8 mOsm/kg/h (evitar edema cerebral)" },
      { id: "followup", title: "Acompanhamento", content: "Osmolalidade a cada 2-4h. Glicemia horária. Eletrólitos 2-4h. Débito urinário. Identificar e tratar precipitante. Mortalidade alta — UTI obrigatória." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "SF 0,9% bolus inicial. Insulina 0,02-0,05 UI/kg/h IV (menor que CAD). KCl conforme nível sérico. Enoxaparina 40 mg SC 1x/dia (profilaxia TEV). Tratar precipitante." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. SF 0,9% 1000-1500 mL IV 1ª hora\n2. SF 0,9% ou 0,45% 250-500 mL/h\n3. Insulina Regular IV BIC 0,02-0,05 UI/kg/h\n4. KCl conforme nível sérico\n5. Enoxaparina 40 mg SC 1x/dia\n6. Glicemia 1/1h, osmolalidade 2/2h\n7. Buscar foco infeccioso" },
      { id: "references", title: "Referências Bibliográficas", content: "1. ADA Standards 2024.\n2. Umpierrez GE. Nat Rev Endocrinol 2016.\n3. Pasquel FJ et al. Diabetes Care 2014." }
    ]
  },
  {
    id: "hipercalemia-emergencia",
    title: "Hipercalemia",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "K+ > 6,5 mEq/L ou qualquer valor com alteração no ECG é emergência com risco de arritmia fatal. O tratamento segue 3 etapas: estabilizar membrana cardíaca (cálcio), shift intracelular (insulina+glicose, beta-2, bicarbonato), remoção corporal (diurético, resina, diálise)." },
      { id: "def", title: "Definição", content: "Leve: 5,5-6,0. Moderada: 6,1-6,5. Grave: > 6,5 ou ECG alterado. Pseudo-hipercalemia: hemólise, torniquete, leucocitose extrema." },
      { id: "screening", title: "Rastreamento e Identificação", content: "DRC, IECA/BRA/espironolactona, rabdomiólise, lise tumoral, acidose, queimaduras. ECG: T apiculadas → QRS alargado → padrão sinusoidal → FV/assistolia." },
      { id: "etiology", title: "Etiologia", content: "Redução excreção renal (DRC, IRA), redistribuição (acidose, insulinopenia, BB), aporte excessivo (suplementação, transfusão), liberação celular (rabdomiólise, lise tumoral)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Fraqueza muscular, parestesias, palpitações, bradicardia, hipotensão. ECG progressivo: T apiculadas → P achatada → QRS largo → sinusoidal → FV." },
      { id: "diagnosis", title: "Diagnóstico", content: "K+ sérico, ECG 12 derivações, gasometria, função renal, CK, ácido úrico, fósforo, cálcio iônico." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Pseudo-hipercalemia, ondas T apiculadas por repolarização precoce, isquemia, hipotermia." },
      { id: "conduct", title: "Conduta", content: "1. ESTABILIZAR MEMBRANA: Gluconato de cálcio 10% 10-20 mL IV em 2-3 min (efeito em 1-3 min, duração 30-60 min)\n2. SHIFT INTRACELULAR:\n   • Insulina Regular 10 UI + Glicose 50% 50 mL IV (efeito 15-30 min)\n   • Salbutamol 10-20 mg nebulização (efeito 15-30 min)\n   • NaHCO3 50 mEq IV se acidose (efeito 15-30 min)\n3. REMOÇÃO:\n   • Furosemida 40-80 mg IV\n   • Poliestirenossulfonato de cálcio 30-60g VO/VR\n   • Diálise de urgência se refratária ou anúrica" },
      { id: "followup", title: "Acompanhamento", content: "K+ a cada 1-2h. ECG seriado. Monitorização cardíaca contínua. Tratar causa de base. Ajustar medicações (suspender IECA/BRA/espironolactona)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Gluconato de cálcio 10%: 10-20 mL IV. Insulina 10 UI + G50% 50 mL IV. Salbutamol 10-20 mg NEB. NaHCO3 50 mEq IV. Furosemida 40-80 mg IV. Kayexalate 30g VO. Diálise se refratária." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Gluconato de cálcio 10% 10 mL IV em 2-3 min\n2. Insulina Regular 10 UI + G50% 50 mL IV\n3. Salbutamol 10-20 mg NEB\n4. Furosemida 40-80 mg IV\n5. Kayexalate 30g VO\n6. K+ 1/1h, ECG seriado\n7. Monitorização cardíaca contínua\n8. Avaliar diálise" },
      { id: "references", title: "Referências Bibliográficas", content: "1. KDIGO 2024.\n2. AHA ACLS Guidelines.\n3. Palmer BF. NEJM 2004." }
    ]
  },
  {
    id: "hipocalemia-grave",
    title: "Hipocalemia Grave",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "K+ < 2,5 mEq/L é emergência com risco de arritmia fatal, paralisia respiratória e rabdomiólise. Causa mais comum: perdas GI (vômitos/diarreia) e uso de diuréticos. A reposição IV deve ser cuidadosa (máximo 40 mEq/h por via central)." },
      { id: "def", title: "Definição", content: "Leve: 3,0-3,5. Moderada: 2,5-3,0. Grave: < 2,5. ECG: achatamento de T, onda U, depressão ST, prolongamento QT, arritmias." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Diuréticos, vômitos, diarreia, laxantes, alcalose, hiperaldosteronismo, cetoacidose em tratamento. Sintomas: fraqueza, câimbras, íleo, arritmia." },
      { id: "etiology", title: "Etiologia", content: "Perdas GI: diarreia, vômitos, SNG, laxantes. Perdas renais: diuréticos, hiperaldosteronismo, ATR, anfotericina B. Redistribuição: insulina, beta-agonistas, alcalose. Ingesta reduzida: desnutrição, etilismo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Fraqueza muscular, câimbras, hiporreflexia, paralisia flácida, íleo paralítico, distensão abdominal, rabdomiólise, arritmias (extra-sístoles, FV, torsades)." },
      { id: "diagnosis", title: "Diagnóstico", content: "K+ sérico, ECG, Mg2+ (hipomagnesemia perpetua hipocalemia!), gasometria (alcalose?), K+ urinário, função renal." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Guillain-Barré, miastenia, botulismo, hipercalemia (ambas causam fraqueza), hipofosfatemia." },
      { id: "conduct", title: "Conduta", content: "GRAVE (< 2,5 ou sintomática):\n• KCl IV: 10-20 mEq/h periférico (máx 40 mEq/h central)\n• Diluição: máx 40 mEq/L periférico, 60 mEq/L central\n• Monitorização cardíaca OBRIGATÓRIA\n• Corrigir hipomagnesemia SEMPRE (MgSO4 1-2g IV)\n• Meta: K+ > 3,5\n\nMODERADA: KCl 40-80 mEq/dia VO\nNÃO usar SG como diluente (insulina piora hipocalemia)" },
      { id: "followup", title: "Acompanhamento", content: "K+ a cada 2-4h durante reposição IV. ECG seriado. Mg2+ (repor se baixo). Tratar causa. Não usar apenas solução glicosada." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "KCl 19,1%: cada mL = 2,5 mEq. Via periférica: máx 10-20 mEq/h. Via central: máx 40 mEq/h. MgSO4 50%: 1-2g IV em 1h (obrigatório se Mg baixo). KCl VO: 40-80 mEq/dia (manutenção)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. KCl 19,1% ____ mL + SF 0,9% 500 mL IV (máx 20 mEq/h periférico)\n2. MgSO4 50% 2 mL (1g) + SF 100 mL IV em 1h\n3. K+ sérico 2/2h\n4. ECG seriado\n5. Monitorização cardíaca contínua\n6. NÃO diluir em SG!\n7. Suspender diuréticos espoliadores de K+" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Kardalas E et al. Hypokalemia. Kidney Int Rep 2018.\n2. Crop MJ et al. NEJM 2010.\n3. AMIB Distúrbios Eletrolíticos 2022." }
    ]
  },
  {
    id: "hipernatremia-grave",
    title: "Hipernatremia Grave",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "Hipernatremia (Na+ > 145 mEq/L) indica déficit de água livre. Grave quando > 160 mEq/L. A correção rápida causa edema cerebral. Máximo: queda de 10-12 mEq/L em 24h (0,5 mEq/L/h)." },
      { id: "def", title: "Definição", content: "Leve: 146-150. Moderada: 151-159. Grave: ≥ 160. Aguda (< 48h): corrigir mais rápido (1 mEq/L/h). Crônica (> 48h): corrigir lentamente (0,5 mEq/L/h)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Idosos, UTI (sem acesso à água), diabetes insipidus, diurese osmótica, diarreia, queimaduras, hiperventilação, diuréticos osmóticos." },
      { id: "etiology", title: "Etiologia", content: "Perda de água: diarreia, vômitos, febre, queimaduras, diabetes insipidus (central/nefrogênico). Ganho de Na+: solução salina hipertônica, bicarbonato, nutrição parenteral. Acesso reduzido à água: idosos, rebaixados, neonatos." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sede intensa, mucosas secas, letargia, irritabilidade, hiperreflexia, convulsão, coma. Hemorragia intracraniana (por tração das veias cerebrais em desidratação neuronal)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Na+ sérico, osmolalidade sérica/urinária (diferenciar DI de perda extrarrenal), volume urinário, sódio urinário, função renal, glicemia." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diabetes insipidus central vs nefrogênico (teste com DDAVP). Perda cutânea/GI vs ganho de sódio." },
      { id: "conduct", title: "Conduta", content: "1. Calcular déficit de água livre: 0,5 × peso × [(Na atual/140) - 1]\n2. Repor com SG 5% IV ou água VO (se possível)\n3. Velocidade: queda de 0,5 mEq/L/h (crônica), 1 mEq/L/h (aguda)\n4. Máximo: 10-12 mEq/L em 24h\n5. DI central: DDAVP 1-2 mcg IV/SC 12/12h\n6. DI nefrogênico: tiazídico + dieta hipossódica" },
      { id: "followup", title: "Acompanhamento", content: "Na+ a cada 2-4h. Ajustar velocidade de reposição. Monitorizar para edema cerebral (cefaleia, vômitos, convulsão). Tratar causa." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "SG 5% IV para repor água livre. DDAVP (DI central). Tiazídico (DI nefrogênico). Água livre enteral se possível (preferível)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. SG 5% ____ mL/h IV (conforme déficit calculado)\n2. Na+ sérico a cada 2-4h\n3. Meta: queda 0,5 mEq/L/h (máx 10-12/24h)\n4. Se DI central: DDAVP 1-2 mcg IV/SC 12/12h\n5. Oferecer água livre VO/SNG se possível\n6. Monitorização contínua" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Sterns RH. Disorders of Plasma Sodium. NEJM 2015.\n2. Adrogué HJ. NEJM 2000.\n3. AMIB Distúrbios Eletrolíticos 2022." }
    ]
  },
  {
    id: "acidose-metabolica-grave",
    title: "Acidose Metabólica Grave",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "Acidose metabólica com pH < 7,1 ou HCO3 < 10 é emergência com risco de colapso cardiovascular. O tratamento foca na causa de base. Bicarbonato IV é controverso e reservado para pH < 6,9-7,0 em situações específicas." },
      { id: "def", title: "Definição", content: "pH < 7,35 + HCO3 < 22. Grave: pH < 7,1 ou HCO3 < 10.\nÂnion gap (AG) = Na - (Cl + HCO3). Normal: 8-12.\nAG elevado: MUDPILES (Metanol, Uremia, Diabetes/CAD, Propileno, Isoniazida, Lactato, Etilenoglicol, Salicilato).\nAG normal (hiperclorêmica): diarreia, ATR, solução salina excessiva." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Kussmaul, rebaixamento, hipotensão refratária. Contextos: sepse/choque (lactato), CAD, intoxicações, IRA/DRC, diarreia profusa." },
      { id: "etiology", title: "Etiologia", content: "AG elevado: acidose láctica (sepse, choque — mais comum), CAD, uremia, intoxicações (metanol, etilenoglicol, salicilato).\nAG normal: diarreia, ATR, SF 0,9% excessivo, ileostomia, acetazolamida." },
      { id: "clinical", title: "Apresentação Clínica", content: "Kussmaul (respiração compensatória), hipotensão (vasodilatação), arritmias (hipercalemia associada), rebaixamento, náusea/vômitos." },
      { id: "diagnosis", title: "Diagnóstico", content: "Gasometria arterial, eletrólitos (AG), lactato, cetonas, função renal, osmolalidade (gap osmolar para intoxicações), urina tipo 1." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Acidose respiratória, alcalose metabólica compensada, distúrbio misto." },
      { id: "conduct", title: "Conduta", content: "1. TRATAR A CAUSA (principal!):\n   • Lactato: volume + vasopressor + tratar sepse/choque\n   • CAD: insulina + volume\n   • Intoxicação: antídoto + diálise\n   • Uremia: diálise\n2. Bicarbonato IV: APENAS se pH < 6,9-7,0:\n   • NaHCO3 8,4% 100 mL + AD 400 mL IV em 2h\n   • Meta: pH > 7,1 (não normalizar)\n3. Evitar excesso de SF 0,9% (piora acidose hiperclorêmica)" },
      { id: "followup", title: "Acompanhamento", content: "Gasometria seriada 2-4h. Lactato seriado. Monitorizar K+ (acidose causa hipercalemia). Identificar e tratar causa." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratar causa é o tratamento. NaHCO3 8,4%: 1-2 mEq/kg IV lento (apenas se pH < 6,9-7,0). Diálise: uremia, intoxicação. THAM: alternativa ao bicarbonato em pesquisa." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Identificar e tratar causa\n2. Se pH < 6,9: NaHCO3 8,4% 100 mL + AD 400 mL IV em 2h\n3. Gasometria a cada 2h\n4. Monitorizar K+ (repor se necessário)\n5. Evitar excesso de SF 0,9%\n6. Lactato seriado" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Kraut JA et al. Lactic Acidosis. NEJM 2014.\n2. Jaber S et al. BICAR-ICU Trial. Lancet 2018.\n3. AMIB 2022." }
    ]
  },
  {
    id: "alcalose-metabolica-grave",
    title: "Alcalose Metabólica Grave",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "Alcalose metabólica com pH > 7,55 é emergência por risco de arritmia, hipocalemia, hipoventilação compensatória (hipoxemia) e convulsão. Classificação por responsividade ao cloreto: cloro-responsiva (mais comum) vs cloro-resistente." },
      { id: "def", title: "Definição", content: "pH > 7,45 + HCO3 > 26. Grave: pH > 7,55 ou HCO3 > 40. Cloro urinário: < 20 mEq/L = cloro-responsiva. > 20 mEq/L = cloro-resistente." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Vômitos, SNG, diuréticos (tiazídicos, furosemida), excesso de bicarbonato. Cloro-resistente: hiperaldosteronismo, Cushing, Bartter, Gitelman." },
      { id: "etiology", title: "Etiologia", content: "Cloro-responsiva: vômitos/SNG, diuréticos (principal), pós-hipercapnia. Cloro-resistente: hiperaldosteronismo primário/secundário, Cushing, Bartter, Gitelman, excesso de mineralocorticoide." },
      { id: "clinical", title: "Apresentação Clínica", content: "Confusão, tetania, arritmias, hipoventilação (compensação), hipoxemia, convulsão. Hipocalemia associada (fraqueza, arritmia)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Gasometria, eletrólitos (K+, Cl-, Ca2+), Cl- urinário (< 20 = responsiva, > 20 = resistente), aldosterona/renina se cloro-resistente." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Alcalose respiratória (pCO2 baixa), distúrbio misto, pseudo-alcalose (contração)." },
      { id: "conduct", title: "Conduta", content: "CLORO-RESPONSIVA:\n• SF 0,9% IV (expansão com cloreto!)\n• KCl IV (corrigir hipocalemia)\n• Suspender diuréticos\n• Se pH > 7,6: HCl 0,1N via central ou Acetazolamida 250-500 mg IV\n\nCLORO-RESISTENTE:\n• Tratar causa (espironolactona se hiperaldosteronismo)\n• KCl\n• Acetazolamida 250-500 mg IV/VO" },
      { id: "followup", title: "Acompanhamento", content: "Gasometria seriada. K+ e Cl- seriados. Tratar causa. Monitorizar ventilação (compensação pode causar hipoxemia)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "SF 0,9% (volume + cloreto). KCl reposição. Acetazolamida 250-500 mg (inibe reabsorção de HCO3). HCl 0,1N central: casos extremos (pH > 7,6). Espironolactona: cloro-resistente." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. SF 0,9% 1000 mL IV\n2. KCl 19,1% ____ mL + SF IV (meta K+ > 4)\n3. Acetazolamida 250 mg IV se pH > 7,55\n4. Gasometria 2-4h\n5. Suspender diuréticos espoliadores\n6. Monitorização cardíaca" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Luke RG et al. Metabolic Alkalosis. NEJM 2012.\n2. Galla JH. Metabolic Alkalosis. JASN 2000.\n3. AMIB 2022." }
    ]
  },
  {
    id: "crise-adrenal",
    title: "Crise Adrenal",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "A crise adrenal (insuficiência adrenal aguda) é emergência com mortalidade > 25% se não tratada. Causa mais comum: interrupção abrupta de corticoterapia crônica. Hidrocortisona IV é o tratamento de primeira linha — NÃO atrasar por exames!" },
      { id: "def", title: "Definição", content: "Falência aguda da produção de cortisol com colapso hemodinâmico. Primária (Addison): destruição das adrenais. Secundária: supressão do eixo HPA por corticoide exógeno (mais comum). Terciária: supressão hipotalâmica." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Suspender corticoide > 2 semanas + estresse (infecção, cirurgia, trauma). Addison: hiperpigmentação. Sintomas: hipotensão refratária, náusea, confusão, dor abdominal." },
      { id: "etiology", title: "Etiologia", content: "Suspensão de corticoide crônico (principal), doença autoimune (Addison), infecção (TB, HIV, fúngica), hemorragia adrenal (Waterhouse-Friderichsen/meningococcemia), metástases, infiltração." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hipotensão refratária a volume e vasopressores, hipoglicemia, hiponatremia, hipercalemia (primária), náusea, vômitos, dor abdominal, confusão, febre, hiperpigmentação (primária crônica)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Cortisol sérico (basal < 3 mcg/dL confirma; colher ANTES da hidrocortisona se possível, mas NÃO atrasar tratamento). ACTH, eletrólitos (hipoNa, hiperK), glicemia, hemograma (eosinofilia).\nTeste de estímulo com cosintropina (pós-estabilização)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Choque séptico, hipoglicemia, abdome agudo, hipotireoidismo grave, intoxicação." },
      { id: "conduct", title: "Conduta", content: "1. HIDROCORTISONA 100 mg IV bolus (imediato!)\n2. Seguida de 50 mg IV 6/6h ou 200 mg/dia IV BIC\n3. SF 0,9% + SG 5% (corrigir hipovolemia + hipoglicemia)\n4. Monitorizar e corrigir hipoglicemia e hipercalemia\n5. NÃO ATRASAR hidrocortisona por exames\n6. Tratar precipitante (infecção, etc.)" },
      { id: "followup", title: "Acompanhamento", content: "Desmame gradual para dose fisiológica (15-25 mg/dia VO). Fludrocortisona 0,05-0,2 mg/dia VO (primária). Educação: dose de estresse, identificação médica. Investigação etiológica." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hidrocortisona 100 mg IV bolus → 50 mg 6/6h. SF 0,9% 1-2L na 1ª hora. SG 5-10% se hipoglicemia. Dexametasona 4 mg IV (alternativa se não confirmou diagnóstico — não interfere no teste de cortisol)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Hidrocortisona 100 mg IV agora\n2. Hidrocortisona 50 mg IV 6/6h\n3. SF 0,9% 1000 mL IV rápido\n4. SG 10% se glicemia < 70\n5. Monitorizar K+, Na+, glicemia\n6. Tratar precipitante\n7. Cortisol e ACTH (se possível antes do tratamento)" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Bornstein SR et al. Diagnosis and Treatment of Primary Adrenal Insufficiency. JCEM 2016.\n2. Rushworth RL et al. Adrenal Crisis. NEJM 2019.\n3. SBEM 2023." }
    ]
  },
  {
    id: "tempestade-tireoidiana",
    title: "Tempestade Tireoidiana",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "A tempestade tireoidiana (crise tireotóxica) é a forma mais grave de tireotoxicose, com mortalidade de 10-30% mesmo com tratamento. É um diagnóstico clínico (escore de Burch-Wartofsky ≥ 45). Precipitantes: infecção, cirurgia, trauma, iodo." },
      { id: "def", title: "Definição", content: "Exacerbação aguda e grave da tireotoxicose com disfunção multiorgânica. Escore de Burch-Wartofsky: ≥ 45 = tempestade provável, 25-44 = iminente, < 25 = improvável. Avalia: temperatura, FC, IC, GI, SNC." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Hipertireoidismo conhecido + precipitante + febre + taquicardia extrema + alteração neurológica. Precipitantes: infecção, cirurgia, trauma, contraste iodado, suspensão de antitireoidianos." },
      { id: "etiology", title: "Etiologia", content: "Doença de Graves (principal), bócio multinodular tóxico, adenoma tóxico. Precipitantes: infecção (40%), cirurgia, parto, trauma, iodo, amiodarona, suspensão de medicação." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre > 40°C, taquicardia > 140 (pode haver FA), agitação → delírio → coma, náusea/vômitos/diarreia/icterícia, ICC de alto débito, sudorese profusa." },
      { id: "diagnosis", title: "Diagnóstico", content: "TSH suprimido, T4L e T3 elevados. Escore de Burch-Wartofsky. Função hepática (pode haver hepatite). ECG (FA, taquicardia). Buscar precipitante (culturas, RX)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Sepse, síndrome neuroléptica maligna, feocromocitoma, intoxicação por simpaticomiméticos, síndrome serotoninérgica, hipertermia maligna." },
      { id: "conduct", title: "Conduta", content: "TRATAMENTO MULTIFATORIAL (4 bloqueios):\n\n1. BLOQUEAR SÍNTESE: Propiltiouracil (PTU) 200 mg VO/SNG 4/4h (preferido na crise — bloqueia T4→T3)\n2. BLOQUEAR LIBERAÇÃO: Iodo (LUGOL 10 gotas 8/8h) — iniciar 1h APÓS PTU\n3. BLOQUEAR EFEITOS PERIFÉRICOS: Propranolol 40-80 mg VO 6/6h ou Esmolol IV se grave\n4. BLOQUEAR CONVERSÃO T4→T3: Hidrocortisona 100 mg IV 8/8h (também trata insuficiência adrenal relativa)\n\nSuporte: resfriamento ativo (NÃO usar AAS — desloca T4 da TBG), volume, UTI." },
      { id: "followup", title: "Acompanhamento", content: "UTI. Monitorização contínua. T4L/T3 seriados. Desmame gradual de PTU → metimazol. Tratamento definitivo: radioiodo ou cirurgia após estabilização." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "PTU 200 mg 4/4h VO/SNG. Lugol 10 gotas 8/8h (1h após PTU). Propranolol 40-80 mg 6/6h VO. Hidrocortisona 100 mg IV 8/8h. Paracetamol (febre — NÃO AAS). Resfriamento ativo." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. PTU 200 mg VO/SNG 4/4h\n2. Lugol 10 gotas 8/8h (1h após PTU)\n3. Propranolol 40-80 mg VO 6/6h\n4. Hidrocortisona 100 mg IV 8/8h\n5. Paracetamol 1g IV 6/6h SN\n6. Resfriamento ativo\n7. Volume IV\n8. UTI + monitorização" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Burch HB et al. Thyroid Storm. Endocrinol Metab Clin North Am 1993.\n2. Ross DS et al. ATA Guidelines Hyperthyroidism 2016.\n3. SBEM 2023." }
    ]
  },
  {
    id: "coma-mixedematoso",
    title: "Coma Mixedematoso",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "O coma mixedematoso é a forma mais grave de hipotireoidismo, com mortalidade de 25-60%. Mais comum em mulheres idosas no inverno. Precipitantes: infecção, AVC, sedativos, cirurgia. Reposição de T4 IV + hidrocortisona são o tratamento." },
      { id: "def", title: "Definição", content: "Hipotireoidismo grave + hipotermia + rebaixamento de consciência + falência multiorgânica. TSH muito elevado (primário) ou baixo/normal (central). T4L muito baixo." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Idosa + hipotermia (< 35°C) + rebaixamento + bradicardia + hipotensão + hipoventilação. Contexto: inverno, infecção, uso de sedativos, cirurgia, hipotireoidismo não tratado." },
      { id: "etiology", title: "Etiologia", content: "Hipotireoidismo não diagnosticado/não tratado + fator precipitante. Causas: tireoidite de Hashimoto, pós-tireoidectomia, pós-radioiodo, hipotireoidismo central. Precipitantes: infecção (40%), AVC, fármacos (amiodarona, lítio, sedativos)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hipotermia (< 35°C — pode não ter febre mesmo com infecção!), bradicardia, hipotensão, hipoventilação (hipercapnia, hipoxemia), rebaixamento → coma, edema (face, periorbitário, mixedema), hiponatremia, hipoglicemia, íleo paralítico." },
      { id: "diagnosis", title: "Diagnóstico", content: "TSH, T4L (e T3L), cortisol, hemograma, gasometria (hipercapnia), eletrólitos (hiponatremia), glicemia, CK (miopatia), ECG (bradicardia, baixa voltagem, QT longo), RX tórax (derrame pericárdico/pleural)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hipotermia por exposição, sepse, hipoglicemia, AVC, intoxicação por opioides/sedativos, insuficiência adrenal isolada." },
      { id: "conduct", title: "Conduta", content: "1. HIDROCORTISONA 100 mg IV (ANTES da levotiroxina — descartar insuficiência adrenal associada)\n2. Levotiroxina (T4) 200-400 mcg IV ataque → 50-100 mcg/dia IV\n3. OU T3 (liotironina) 10-20 mcg IV 8/8h (se muito grave)\n4. Aquecimento passivo (cobertores — NÃO aquecer ativamente)\n5. Ventilação mecânica se hipercapnia/hipoxemia\n6. SF 0,9% com cautela (risco de hiponatremia — usar NaCl 3% se Na < 120)\n7. Tratar precipitante (infecção)" },
      { id: "followup", title: "Acompanhamento", content: "UTI. TSH/T4L diários. Desmame gradual para levotiroxina VO. Monitorizar Na+, glicemia. Prognóstico ruim se idade avançada, hipotermia grave, bradicardia persistente." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hidrocortisona 100 mg IV 8/8h (até descartar insuficiência adrenal). Levotiroxina 200-400 mcg IV (ataque) → 50-100 mcg/dia IV. Liotironina 10-20 mcg IV 8/8h (opcional). Aquecimento passivo. VM se necessário." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Hidrocortisona 100 mg IV agora → 100 mg IV 8/8h\n2. Levotiroxina 300 mcg IV (ataque)\n3. Levotiroxina 50-100 mcg IV 1x/dia\n4. Aquecimento passivo\n5. VM se pCO2 > 55 ou SpO2 < 88%\n6. Monitorizar: Na+, glicemia, ECG\n7. Tratar precipitante" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Jonklaas J et al. ATA Guidelines Hypothyroidism 2014.\n2. Ono Y et al. Myxedema Coma. J Intensive Care 2017.\n3. SBEM 2023." }
    ]
  },
  {
    id: "uremia-emergencia",
    title: "Uremia",
    categoryId: "metabolic",
    sections: [
      { id: "intro", title: "Introdução", content: "A síndrome urêmica representa o acúmulo de toxinas urêmicas por falência renal grave. Quando sintomática (encefalopatia, pericardite, sangramento), constitui indicação de diálise de urgência." },
      { id: "def", title: "Definição", content: "Síndrome clínica de falência renal avançada. Ureia > 200 mg/dL (variável). Indicações de diálise de urgência (AEIOU): Acidose refratária, Eletrólitos (hipercalemia), Intoxicação (por droga dialisável), Overload (hipervolemia/EAP), Uremia sintomática." },
      { id: "screening", title: "Rastreamento e Identificação", content: "DRC avançada, IRA oligúrica, ureia > 200, sintomas neurológicos/GI inexplicados, pericardite sem causa, sangramento difuso." },
      { id: "etiology", title: "Etiologia", content: "IRA (pré-renal, renal, pós-renal), DRC estágio 5 descompensada. Toxinas urêmicas: ureia, creatinina, ácido úrico, fosfato, PTH, indóis, cresóis." },
      { id: "clinical", title: "Apresentação Clínica", content: "Neurológico: encefalopatia (confusão → convulsão → coma), asterixis, mioclonias.\nCardiovascular: pericardite urêmica (atrito pericárdico), tamponamento, HAS, EAP.\nHematológico: sangramento (disfunção plaquetária), anemia.\nGI: náusea, vômitos, hálito urêmico (amoniacal), anorexia.\nMetabólico: hipercalemia, acidose, hiperfosfatemia, hipocalcemia." },
      { id: "diagnosis", title: "Diagnóstico", content: "Ureia, creatinina, eletrólitos, gasometria, hemograma, coagulograma, ECG, RX tórax (EAP), ecocardiograma (pericardite/tamponamento)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Encefalopatia hepática, intoxicações, sepse, distúrbios eletrolíticos isolados, pericardite de outra causa." },
      { id: "conduct", title: "Conduta", content: "DIÁLISE DE URGÊNCIA: indicada na uremia sintomática (encefalopatia, pericardite, sangramento).\n\nMedidas paliativas enquanto aguarda diálise:\n• Hipercalemia: gluconato de cálcio + insulina + glicose\n• EAP: furosemida dose alta (160-200 mg IV)\n• Acidose: NaHCO3 se pH < 7,1\n• Sangramento urêmico: DDAVP 0,3 mcg/kg IV\n• Pericardite: diálise intensiva (diária)" },
      { id: "followup", title: "Acompanhamento", content: "Diálise de manutenção. Nefrologia. Avaliar transplante renal. Controle de comorbidades (DM, HAS). Dieta hipoproteica." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hemodiálise de urgência. DDAVP 0,3 mcg/kg IV (sangramento urêmico). Eritropoietina (anemia crônica). Quelante de fósforo. Calcitriol. Furosemida dose alta." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Solicitar diálise de urgência\n2. Gluconato de cálcio 10% 10 mL IV se hipercalemia\n3. Insulina 10 UI + G50% 50 mL IV se hipercalemia\n4. Furosemida 160-200 mg IV se hipervolemia\n5. NaHCO3 se pH < 7,1\n6. DDAVP 0,3 mcg/kg IV se sangramento\n7. Monitorização contínua" },
      { id: "references", title: "Referências Bibliográficas", content: "1. KDIGO AKI Guidelines 2012.\n2. Vanholder R et al. Uremic Toxicity. JASN 2003.\n3. SBN Diretrizes 2023." }
    ]
  }
];
