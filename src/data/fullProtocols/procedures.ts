import type { FullProtocol } from "./types";

export const proceduresFullProtocols: FullProtocol[] = [
  {
    id: "fp-cardioversao", title: "Cardioversão Elétrica", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["cardioversão", "sincronizada", "taquiarritmia", "sedação"],
    sections: [
      { id: "intro", title: "Introdução", content: "Choque elétrico sincronizado com onda R para taquiarritmias instáveis. Difere da desfibrilação (assíncrona)." },
      { id: "def", title: "Definição", content: "Indicações: taquicardia instável (hipotensão, dispneia, dor torácica, alteração de consciência). FA, Flutter, TSV, TV monomórfica com pulso." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Instabilidade: PAS < 90, dispneia, dor torácica isquêmica, alteração de consciência." },
      { id: "etiology", title: "Etiologia", content: "FA, Flutter atrial, TSV, TV monomórfica. NÃO: FV (desfibrilação), TV polimórfica (desfibrilação), taquicardia sinusal." },
      { id: "clinical", title: "Apresentação Clínica", content: "FC > 150 + sinais de instabilidade hemodinâmica." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG 12 derivações, monitorização, PA, SpO2. QRS estreito vs largo." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Identificar ritmo: TSV vs FA vs Flutter vs TV. Taquicardia sinusal NÃO responde a cardioversão." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Sedação: Propofol 1 mg/kg ou Midazolam + Fentanil\n2. Modo SINCRONIZADO\n3. Pás anterolateral ou anteroposterior\n4. Cargas: FA 200J, Flutter/TSV 50-100J, TV 100J bifásico\n5. Verificar sincronização → chocar\n6. Reavaliar, aumentar carga se necessário" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Sedação + cardioversão sincronizada conforme ritmo. Antiarrítmico de manutenção pós-conversão." },
      { id: "prescriptions", title: "Prescrições", content: "1. ECG\n2. Acesso IV + material de VA\n3. Propofol 1 mg/kg IV\n4. Cardioversão sincronizada\n5. ECG pós\n6. Monitorização 4h\n7. Eletrólitos (K, Mg)\n8. Anticoagulação SN (FA)" },
      { id: "followup", title: "Acompanhamento", content: "Monitorização 2-4h. ECG controle. Vigiar recidiva. Anticoagulação se FA > 48h. Investigar causa." },
      { id: "complications", title: "Complicações", content: "FV (sincronização falha), queimadura de pele, embolia (FA sem anticoagulação), bradicardia transitória." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Observação ≥ 4h. Alta se ritmo estável, hemodinâmica normalizada." },
      { id: "references", title: "Referências Bibliográficas", content: "1. AHA ACLS 2020.\n2. ESC SVT Guidelines 2019.\n3. SBC Arritmias 2022." }
    ]
  },
  {
    id: "fp-desfibrilacao", title: "Desfibrilação", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["desfibrilação", "FV", "TVSP", "PCR", "DEA"],
    sections: [
      { id: "intro", title: "Introdução", content: "Choque assíncrono para FV e TV sem pulso. Intervenção mais importante na PCR chocável. Cada minuto de atraso: -7-10% sobrevida." },
      { id: "def", title: "Definição", content: "Indicações: FV, TVSP, TV polimórfica. NÃO: assistolia, AESP. Bifásico 200J. Monofásico 360J. Pediátrico 2→4 J/kg." },
      { id: "screening", title: "Rastreamento e Identificação", content: "PCR: sem pulso, apneia, inconsciência. Monitor: FV ou TVSP." },
      { id: "etiology", title: "Etiologia", content: "SCA/IAM (principal), distúrbios eletrolíticos, intoxicação, hipóxia, eletrocussão, QT longo." },
      { id: "clinical", title: "Apresentação Clínica", content: "PCR: ausência de pulso + apneia." },
      { id: "diagnosis", title: "Diagnóstico", content: "Pulso ausente < 10s. Monitor: FV/TVSP. DEA: choque recomendado." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "FV fina vs assistolia. Artefato vs FV. AESP (NÃO chocar)." },
      { id: "conduct", title: "Conduta Inicial", content: "1. RCP 100-120/min\n2. Desfibrilação 200J bifásico\n3. RCP 2 min após choque\n4. Adrenalina 1 mg IV cada 3-5 min (após 2º choque)\n5. Amiodarona 300 mg (após 3º choque) → 150 mg\n6. Investigar 5H's e 5T's" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Desfibrilação 200J. Adrenalina 1 mg cada 3-5 min. Amiodarona 300 mg → 150 mg. MgSO4 1-2g (Torsades). Pós-RCE: TTM 32-36°C." },
      { id: "prescriptions", title: "Prescrições", content: "1. RCP\n2. Desfibrilação 200J\n3. Adrenalina 1 mg IV\n4. Amiodarona 300 mg\n5. SF flush\n6. IOT\n7. Gasometria\n8. TTM pós-RCE" },
      { id: "followup", title: "Acompanhamento", content: "Pós-RCE: UTI, TTM 32-36°C por 24h, cateterismo se SCA, TC crânio, neuroprognosticação ≥ 72h." },
      { id: "complications", title: "Complicações", content: "Queimadura de pele, lesão miocárdica, FV recorrente." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos pós-RCE. Considerar suspensão de esforços conforme protocolo." },
      { id: "references", title: "Referências Bibliográficas", content: "1. AHA ACLS 2020.\n2. ERC 2021.\n3. SBC RCP 2023." }
    ]
  },
  {
    id: "fp-toracocentese", title: "Toracocentese", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["toracocentese", "derrame", "pleural", "Light", "USG"],
    sections: [
      { id: "intro", title: "Introdução", content: "Punção pleural para drenagem diagnóstica ou terapêutica. USG aumenta segurança. Critérios de Light: transudato vs exsudato." },
      { id: "def", title: "Definição", content: "Punção percutânea do espaço pleural. Diagnóstica: derrame indeterminado. Terapêutica: dispneia por derrame volumoso. Máximo 1500 mL por sessão." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Dispneia + MV diminuído + macicez. Rx: opacidade. USG: líquido > 10 mm. Contraindicações relativas: INR > 2, PLQ < 25.000." },
      { id: "etiology", title: "Etiologia", content: "Transudato: ICC, cirrose. Exsudato: pneumonia, TB, neoplasia, TEP. Hemotórax. Empiema." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dispneia, tosse, dor pleurítica, macicez, MV diminuído." },
      { id: "diagnosis", title: "Diagnóstico", content: "Análise: aspecto, proteínas, DHL, glicose, pH, celularidade, cultura, ADA, citologia oncótica. Critérios de Light." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Consolidação, atelectasia, elevação diafragmática, massa." },
      { id: "conduct", title: "Conduta Inicial", content: "Posição sentada, USG, assepsia, lidocaína 2%, punção na borda SUPERIOR da costela inferior, aspirar lentamente, máx 1500 mL, Rx controle." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Empiema: drenagem. Neoplásico recorrente: pleurodese. Transudato: tratar causa." },
      { id: "prescriptions", title: "Prescrições", content: "1. USG\n2. Lidocaína 2%\n3. Jelco 14G ou kit\n4. Coletar amostras\n5. Máx 1500 mL\n6. Rx controle\n7. SpO2" },
      { id: "followup", title: "Acompanhamento", content: "Rx 2-4h. Vigiar pneumotórax. Resultado do líquido → tratamento." },
      { id: "complications", title: "Complicações", content: "Pneumotórax, hemotórax iatrogênico, edema de reexpansão, infecção, reação vasovagal." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Depende da causa do derrame. Procedimento ambulatorial se estável." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Light RW. Pleural Diseases, 6th ed. 2013.\n2. BTS Guidelines 2010.\n3. Roberts & Hedges' 7th ed. 2019." }
    ]
  },
  {
    id: "fp-drenagem-torax", title: "Drenagem de Tórax", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["drenagem", "torácica", "pneumotórax", "hemotórax", "selo d'água"],
    sections: [
      { id: "intro", title: "Introdução", content: "Inserção de dreno tubular no espaço pleural para remoção de ar, sangue, pus ou líquido. Ponto: triângulo de segurança (5º EIC, LAA)." },
      { id: "def", title: "Definição", content: "Indicações: pneumotórax hipertensivo, hemotórax, empiema, pneumotórax > 2 cm. Calibre: hemotórax 28-36 Fr, pneumotórax 16-24 Fr." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Pneumotórax hipertensivo: timpanismo + MV abolido + desvio de traqueia. Hemotórax: macicez + MV abolido + choque." },
      { id: "etiology", title: "Etiologia", content: "Trauma, espontâneo, iatrogênico, infeccioso." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dispneia, dor torácica, MV diminuído, instabilidade." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico (hipertensivo — não esperar Rx). Rx tórax. eFAST. TC." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Atelectasia, derrame vs consolidação, hérnia diafragmática." },
      { id: "conduct", title: "Conduta Inicial", content: "5º EIC, LAA, assepsia, lidocaína, incisão 2-3 cm, dissecção romba com Kelly, dedo na pleura, dreno direcionado (ápice/base), selo d'água, fixação, Rx controle." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Procedimento técnico. Analgesia pós: Dipirona + Tramadol. Fisioterapia respiratória." },
      { id: "prescriptions", title: "Prescrições", content: "1. Lidocaína 2% 20 mL\n2. Dreno tubular\n3. Selo d'água\n4. Rx controle\n5. Dipirona 1g IV 6/6h\n6. Tramadol 100 mg IV 8/8h SN\n7. Débito 6/6h\n8. Fisioterapia\n9. Rx diário" },
      { id: "followup", title: "Acompanhamento", content: "Débito 6/6h. Rx diário. Retirada: < 150-200 mL/24h + sem borbulhamento + pulmão expandido." },
      { id: "complications", title: "Complicações", content: "Posicionamento inadequado, infecção, lesão de órgão (pulmão, diafragma, fígado/baço), sangramento intercostal." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: todos com dreno. Alta: após retirada + Rx normal." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. 2018.\n2. BTS Guidelines 2010.\n3. Roberts & Hedges' 7th ed. 2019." }
    ]
  },
  {
    id: "fp-paracentese", title: "Paracentese", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["paracentese", "ascite", "PBE", "GASA", "albumina"],
    sections: [
      { id: "intro", title: "Introdução", content: "Punção da cavidade peritoneal para ascite. Diagnóstica (PBE, neoplasia) ou terapêutica (ascite tensa). Ponto: FIE. Segura mesmo em coagulopatas." },
      { id: "def", title: "Definição", content: "Diagnóstica: ascite nova, suspeita PBE, toda admissão de cirrótico. Terapêutica: ascite tensa com dispneia. Se > 5L: albumina 6-8g/L." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Todo cirrótico internado com ascite: paracentese na admissão. PBE: febre + dor + encefalopatia." },
      { id: "etiology", title: "Etiologia", content: "Transudato (GASA ≥ 1,1): cirrose, ICC. Exsudato (GASA < 1,1): neoplasia, TB." },
      { id: "clinical", title: "Apresentação Clínica", content: "Distensão abdominal, dispneia, desconforto, macicez de decúbito." },
      { id: "diagnosis", title: "Diagnóstico", content: "PMN > 250/mm³ = PBE. GASA. Proteínas. Cultura (frasco hemocultura). ADA. Citologia oncótica." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Globo vesical, obesidade, cisto ovariano, obstrução intestinal." },
      { id: "conduct", title: "Conduta Inicial", content: "FIE, USG, assepsia, lidocaína 2%, técnica em Z, coletar amostras. Terapêutica: drenar lentamente. > 5L: albumina 6-8 g/L." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Albumina se > 5L. PBE: Ceftriaxona 2g/dia + albumina D1 e D3. Diuréticos crônicos." },
      { id: "prescriptions", title: "Prescrições", content: "1. USG\n2. Lidocaína 2%\n3. Jelco 14-16G\n4. Coletar amostras\n5. Albumina 20% SN\n6. PA\n7. Se PBE: Ceftriaxona 2g/dia" },
      { id: "followup", title: "Acompanhamento", content: "PA pós. Albumina. Resultado do líquido. PBE: ATB 5-7 dias. Diuréticos crônicos." },
      { id: "complications", title: "Complicações", content: "Hipotensão pós-paracentese, perfuração intestinal (raro), sangramento, infecção, fístula." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Ambulatorial se estável. Internação se PBE ou instabilidade." },
      { id: "references", title: "Referências Bibliográficas", content: "1. EASL 2018.\n2. AASLD 2021.\n3. Runyon BA. UpToDate 2024." }
    ]
  },
  {
    id: "fp-puncao-lombar", title: "Punção Lombar", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["punção lombar", "LCR", "meningite", "HSA", "pressão"],
    sections: [
      { id: "intro", title: "Introdução", content: "Coleta de LCR por punção subaracnoide L3-L4 ou L4-L5. Fundamental para meningite e HSA. TC antes se sinais de HIC." },
      { id: "def", title: "Definição", content: "Indicações: meningite/encefalite, HSA (TC normal), Guillain-Barré, EM, medida de pressão. Contraindicações: HIC com herniação, coagulopatia, infecção local." },
      { id: "screening", title: "Rastreamento e Identificação", content: "TC antes se: imunossupressão, doença SNC, convulsão, papiledema, déficit focal, rebaixamento. Meningite: NÃO atrasar ATB para TC/PL." },
      { id: "etiology", title: "Etiologia", content: "Meningite bacteriana, viral, TB, HSA, encefalite herpética." },
      { id: "clinical", title: "Apresentação Clínica", content: "Meningite: febre + cefaleia + rigidez de nuca. HSA: cefaleia súbita + TC normal." },
      { id: "diagnosis", title: "Diagnóstico", content: "LCR: aspecto, pressão, celularidade, proteínas, glicose, Gram, cultura, látex, PCR viral, ADA, VDRL." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Bacteriana vs viral vs TB vs fúngica — diferenciada pelo LCR." },
      { id: "conduct", title: "Conduta Inicial", content: "DLE flexão ou sentado, L3-L4, assepsia, lidocaína 2%, agulha 20-22G com mandril, bisel longitudinal, medir pressão, coletar 3-4 tubos, repor mandril, repouso 1-2h." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "PL é diagnóstica. Meningite: Ceftriaxona + Dexametasona. HSA: neurocirurgia + nimodipina. Cefaleia pós-PL: blood patch." },
      { id: "prescriptions", title: "Prescrições", content: "1. TC SN\n2. Lidocaína 2%\n3. Agulha PL 20-22G\n4. 4 tubos\n5. Pressão de abertura\n6. Repouso 1-2h\n7. Dipirona SN\n8. ATB se meningite (NÃO atrasar)" },
      { id: "followup", title: "Acompanhamento", content: "Repouso, hidratação oral, cefaleia pós-PL: cafeína, analgésicos, blood patch. Resultado LCR → tratamento." },
      { id: "complications", title: "Complicações", content: "Cefaleia pós-punção (10-30%), herniação (se HIC), hematoma epidural, infecção, dor lombar." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Depende do diagnóstico. PL ambulatorial é possível em casos seletivos." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Ellenby MS. NEJM 2006.\n2. IDSA Guidelines 2017.\n3. Roberts & Hedges' 7th ed. 2019." }
    ]
  },
  {
    id: "fp-sedacao-rapida", title: "Sedação Rápida", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["sedação", "propofol", "cetamina", "midazolam", "procedural"],
    sections: [
      { id: "intro", title: "Introdução", content: "Sedação procedural para procedimentos dolorosos ou invasivos na emergência. Requer monitorização e material de via aérea. Drogas: propofol, midazolam, cetamina, fentanil, etomidato." },
      { id: "def", title: "Definição", content: "Níveis: mínima (verbal), moderada (tátil), profunda (doloroso), anestesia geral (sem resposta). Propofol: rápido, curto. Cetamina: dissociativa, mantém via aérea." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Checklist: jejum (idealmente), via aérea (Mallampati), comorbidades, alergias, acesso IV, material de VA pronto, monitorização." },
      { id: "etiology", title: "Etiologia", content: "Cardioversão, redução de fraturas, drenagem de abscessos, endoscopia, suturas complexas." },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente necessitando procedimento doloroso/invasivo." },
      { id: "diagnosis", title: "Diagnóstico", content: "Avaliar risco ASA, via aérea difícil, comorbidades." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Escolha: Propofol (rápido), Midazolam+Fentanil (moderada), Cetamina (crianças/instáveis), Etomidato (instáveis)." },
      { id: "conduct", title: "Conduta Inicial", content: "Propofol 1 mg/kg IV. Midazolam 0,05-0,1 mg/kg + Fentanil 1 mcg/kg. Cetamina 1-2 mg/kg IV (ou 4-5 IM). Etomidato 0,2-0,3 mg/kg. Todos: monitorização SpO2, ETCO2, PA, FC." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Conforme protocolo escolhido. Antídotos disponíveis: flumazenil (BZD), naloxona (opioide)." },
      { id: "prescriptions", title: "Prescrições", content: "1. Jejum SN\n2. Acesso IV + material VA + aspiração\n3. Monitorização: SpO2, ETCO2, ECG, PA\n4. Droga de sedação\n5. O2 3-5 L/min\n6. Antídotos à beira do leito\n7. Observação pós" },
      { id: "followup", title: "Acompanhamento", content: "Monitorização até recuperação. Alta: consciência basal, deambulação, ingestão oral, acompanhante. Não dirigir 24h." },
      { id: "complications", title: "Complicações", content: "Depressão respiratória, apneia, aspiração, hipotensão, laringoespasmo, alergia." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: critérios de recuperação preenchidos. Internação: complicações." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Green SM. Ann Emerg Med 2019.\n2. ACEP 2014.\n3. Roberts & Hedges' 7th ed. 2019." }
    ]
  },
  {
    id: "fp-pocus", title: "POCUS (Point-of-Care Ultrasound)", categoryId: "procedures", category: "Procedimentos de Emergência",
    tags: ["POCUS", "ultrassom", "eFAST", "RUSH", "BLUE"],
    sections: [
      { id: "intro", title: "Introdução", content: "USG à beira do leito pelo médico assistente. Muda condutas em tempo real. Protocolos: eFAST (trauma), RUSH (choque), BLUE (dispneia), FEEL (PCR)." },
      { id: "def", title: "Definição", content: "eFAST: líquido livre + pneumotórax. RUSH (Pump/Tank/Pipes): avaliação hemodinâmica. BLUE: dispneia. FEEL: PCR. Guia de procedimentos." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Trauma: eFAST. Choque: RUSH. Dispneia: BLUE. PCR: eco. Guia de AVC, drenagem, bloqueios." },
      { id: "etiology", title: "Etiologia", content: "Diagnostica: líquido livre, pneumotórax, derrame, disfunção ventricular, VCI, AAA, TVP, hidronefrose, gestação ectópica." },
      { id: "clinical", title: "Apresentação Clínica", content: "Todo paciente crítico se beneficia: instabilidade, dispneia, trauma, PCR, dor abdominal, guia de procedimentos." },
      { id: "diagnosis", title: "Diagnóstico", content: "eFAST: hemoperitônio/hemopericárdio/pneumotórax. RUSH: causa do choque. BLUE: EAP (linhas B) vs pneumotórax (sem sliding) vs pneumonia (consolidação)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diferencia causas de choque e dispneia em tempo real." },
      { id: "conduct", title: "Conduta Inicial", content: "POCUS guia condutas: trauma → laparotomia/drenagem. Choque → volume/vasopressor/drenagem. Dispneia → diurético/drenagem/broncodilatador. PCR → causas reversíveis. Documentar achados." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "POCUS não é tratamento — guia o tratamento. Diagnóstico em < 5 min → mudança de conduta imediata." },
      { id: "prescriptions", title: "Prescrições", content: "N/A — ferramenta diagnóstica. Prescrições dependem dos achados." },
      { id: "followup", title: "Acompanhamento", content: "POCUS seriado. Monitorização de resposta. Exame formal se achados duvidosos." },
      { id: "complications", title: "Complicações", content: "Nenhuma (não invasivo). Risco de interpretação incorreta." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Depende do diagnóstico, não do exame." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ACEP US Guidelines 2023.\n2. Lichtenstein D. Chest 2008.\n3. Perera P. Acad Emerg Med 2010.\n4. Ma OJ. Emergency US 4th ed. 2021." }
    ]
  }
];
