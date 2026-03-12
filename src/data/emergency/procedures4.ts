import type { EmergencyProtocol } from "./types";

export const proceduresProtocols4: EmergencyProtocol[] = [
  {
    id: "cardioversao-eletrica",
    title: "Cardioversão Elétrica",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A cardioversão elétrica sincronizada é o tratamento de emergência para taquiarritmias instáveis (hipotensão, dispneia, dor torácica, alteração de consciência). O choque é sincronizado com a onda R para evitar FV. Difere da desfibrilação, que é assíncrona." },
      { id: "def", title: "Definição", content: "Aplicação de choque elétrico sincronizado com o complexo QRS para reversão de taquiarritmias.\n\nIndicações:\n• Taquicardia com instabilidade hemodinâmica\n• FA/Flutter com RVR instável\n• TVS monomórfica com pulso e instável\n• TSV refratária a adenosina\n\nContraindicações relativas:\n• Intoxicação digitálica (risco de FV)\n• Trombo atrial sem anticoagulação (risco de AVC)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Sinais de instabilidade (indicam cardioversão imediata):\n• Hipotensão (PAS < 90)\n• Dispneia/edema pulmonar\n• Dor torácica (isquemia)\n• Alteração do nível de consciência\n• Sinais de choque" },
      { id: "etiology", title: "Etiologia", content: "Arritmias passíveis de cardioversão:\n• FA/Flutter atrial\n• Taquicardia supraventricular (TSV)\n• Taquicardia ventricular monomórfica com pulso\n\nNÃO cardioverter:\n• FV → desfibrilação (assíncrona)\n• TV polimórfica (Torsades) → desfibrilação\n• Taquicardia sinusal → tratar causa" },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente com taquicardia + sinais de instabilidade:\n• FC geralmente > 150 bpm\n• Hipotensão, sudorese, palidez\n• Dispneia, congestão pulmonar\n• Dor torácica\n• Síncope ou pré-síncope" },
      { id: "diagnosis", title: "Diagnóstico", content: "1. ECG 12 derivações (identificar ritmo)\n2. Monitorização contínua\n3. PA, SpO2\n4. Distinção: QRS estreito (supraventricular) vs largo (ventricular ou SVT com aberrância)" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Identificar o ritmo antes de cardioverter:\n• TSV vs FA vs Flutter vs TV\n• Taquicardia sinusal NÃO responde à cardioversão" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Monitorização contínua\n2. Acesso venoso + material de via aérea pronto\n3. SEDAÇÃO: Propofol 1 mg/kg IV ou Midazolam 0,1-0,2 mg/kg IV + Fentanil 1 mcg/kg IV\n4. Ativar modo SINCRONIZADO no desfibrilador\n5. Pás adesivas: anterolateral ou anteroposterior\n6. Cargas:\n   — FA: 120-200J bifásico (iniciar com 200J)\n   — Flutter: 50-100J\n   — TSV: 50-100J\n   — TV monomórfica: 100J\n7. Verificar sincronização (marca sobre onda R)\n8. Afastar todos → Chocar\n9. Reavaliar ritmo\n10. Se sem sucesso: aumentar carga e repetir" },
      { id: "followup", title: "Acompanhamento", content: "• Monitorização pós-cardioversão (mínimo 2-4h)\n• ECG 12 derivações pós-procedimento\n• Vigiar recidiva da arritmia\n• Anticoagulação se FA > 48h ou sem documentação de duração\n• Investigar causa da arritmia" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Sedação: Propofol 1 mg/kg IV ou Midazolam + Fentanil\nCargas bifásicas: FA 200J, Flutter/TSV 50-100J, TV 100J\nPós: antiarrítmico de manutenção conforme ritmo" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. ECG 12 derivações\n2. Jejum (se possível — não atrasar em urgência)\n3. Acesso venoso periférico\n4. Material de via aérea + desfibrilador\n5. Propofol 1 mg/kg IV (sedação)\n6. Cardioversão sincronizada (carga conforme ritmo)\n7. ECG pós-cardioversão\n8. Monitorização contínua 4h\n9. Eletrólitos (K, Mg)\n10. Considerar anticoagulação (FA)" },
      { id: "references", title: "Referências Bibliográficas", content: "1. AHA ACLS Guidelines 2020.\n2. ESC Guidelines on SVT, 2019.\n3. Diretriz Brasileira de Arritmias Cardíacas — SBC, 2022." }
    ]
  },
  {
    id: "desfibrilacao",
    title: "Desfibrilação",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A desfibrilação é a aplicação de choque elétrico ASSÍNCRONO para tratamento de FV e TV sem pulso. É a intervenção mais importante na PCR por ritmo chocável. Cada minuto de atraso reduz a sobrevida em 7-10%. DEA pode ser usado por leigos." },
      { id: "def", title: "Definição", content: "Choque elétrico não sincronizado que despolariza simultaneamente todas as células cardíacas, permitindo que o nó sinusal reassuma a condução.\n\nIndicações:\n• Fibrilação ventricular (FV)\n• Taquicardia ventricular sem pulso (TVSP)\n• TV polimórfica (Torsades de pointes)\n\nNÃO indicada: assistolia, AESP" },
      { id: "screening", title: "Rastreamento e Identificação", content: "• Paciente em PCR\n• Monitorizar ritmo: FV (traçado irregular, sem complexos identificáveis) ou TVSP (complexos largos regulares)\n• DEA: análise automática do ritmo" },
      { id: "etiology", title: "Etiologia", content: "Causas de FV/TVSP:\n• SCA/IAM (principal)\n• Distúrbios eletrolíticos (K, Mg)\n• Intoxicação (ADT, cocaína, digoxina)\n• Hipóxia\n• Choque elétrico/eletrocussão\n• QT longo (congênito ou adquirido)" },
      { id: "clinical", title: "Apresentação Clínica", content: "PCR: ausência de pulso, apneia, inconsciência\nRitmo: FV ou TV sem pulso no monitor/DEA" },
      { id: "diagnosis", title: "Diagnóstico", content: "1. Pulso ausente (< 10 segundos para verificar)\n2. Monitor: FV ou TVSP\n3. DEA: \"choque recomendado\"" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• FV fina vs assistolia (aumentar ganho, confirmar em 2 derivações)\n• Artefato de movimento vs FV\n• AESP (ritmo organizado sem pulso — NÃO chocar)" },
      { id: "conduct", title: "Conduta", content: "PROTOCOLO:\n1. Confirmar PCR (sem pulso em < 10s)\n2. Iniciar RCP imediata (100-120/min, 5-6 cm)\n3. Conectar desfibrilador/DEA o mais rápido possível\n4. CHOQUE:\n   — Bifásico: 200J (1º e subsequentes)\n   — Monofásico: 360J\n   — Pediátrico: 2 J/kg → 4 J/kg\n5. RCP imediata por 2 min após cada choque\n6. Adrenalina 1 mg IV a cada 3-5 min (após 2º choque)\n7. Amiodarona 300 mg IV (após 3º choque) → 150 mg\n8. Investigar e tratar 5H's e 5T's\n9. Minimizar interrupções das compressões (< 10s)" },
      { id: "followup", title: "Acompanhamento", content: "Pós-RCE:\n• Protocolo de cuidados pós-PCR\n• TTM (controle de temperatura: 32-36°C por 24h)\n• Cateterismo se SCA suspeitada\n• TC crânio\n• Monitorização contínua em UTI\n• Neuroprognosticação ≥ 72h" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Desfibrilação: 200J bifásico\nAdrenalina: 1 mg IV a cada 3-5 min\nAmiodarona: 300 mg IV (1ª dose) → 150 mg (2ª dose)\nLidocaína: alternativa à amiodarona 1-1,5 mg/kg IV\nMgSO4: 1-2g IV (Torsades)" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. RCP de alta qualidade\n2. Desfibrilação 200J bifásico\n3. Adrenalina 1 mg IV a cada 3-5 min\n4. Amiodarona 300 mg IV (após 3º choque)\n5. Amiodarona 150 mg IV (2ª dose)\n6. SF 0,9% flush após cada droga\n7. IOT quando oportuna\n8. Gasometria + eletrólitos\n9. Protocolo pós-PCR se RCE\n10. TTM 32-36°C por 24h" },
      { id: "references", title: "Referências Bibliográficas", content: "1. AHA ACLS Guidelines 2020.\n2. ERC Guidelines 2021.\n3. Diretriz SBC de RCP, 2023." }
    ]
  },
  {
    id: "marcapasso-transcutaneo",
    title: "Marcapasso Transcutâneo",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "O marcapasso transcutâneo (MPT) é o método mais rápido de pacing temporário. Indicado para bradicardia sintomática refratária a atropina. Utiliza pás adesivas no tórax do paciente. É uma medida ponte até marcapasso transvenoso ou reversão da causa." },
      { id: "def", title: "Definição", content: "Estimulação elétrica cardíaca externa através de eletrodos adesivos no tórax.\n\nIndicações:\n• Bradicardia sintomática refratária a atropina\n• BAV de 2º grau Mobitz II\n• BAV de 3º grau (BAVT)\n• Bradicardia com escape ventricular\n• Assistolia (tentativa)\n• Overdrive pacing (taquicardia refratária)\n\nContraindicações: hipotermia grave (tratar hipotermia primeiro)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Bradicardia com sinais de instabilidade:\n• FC < 50-60 bpm + hipotensão\n• Síncope\n• IC aguda\n• Isquemia miocárdica\n• Não responsiva a atropina" },
      { id: "etiology", title: "Etiologia", content: "Causas de bradicardia necessitando MPT:\n• IAM inferior (BAV)\n• Intoxicação (BB, BCC, digoxina)\n• Pós-cirurgia cardíaca\n• Distúrbios eletrolíticos\n• Disfunção de nó sinusal" },
      { id: "clinical", title: "Apresentação Clínica", content: "Bradicardia + instabilidade hemodinâmica não responsiva a fármacos." },
      { id: "diagnosis", title: "Diagnóstico", content: "1. ECG: bradicardia, BAV, escape\n2. PA, SpO2\n3. Eletrólitos (K, Ca, Mg)\n4. Resposta inadequada a atropina" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Bradicardia fisiológica (atleta) — não requer tratamento\n• Hipotireoidismo\n• Hipotermia" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Conectar pás adesivas:\n   — Anteroposterior (preferido): anterior (pré-cordial esquerdo) + posterior (infraescapular esquerdo)\n   — Anterolateral: esterno + ápice\n2. Selecionar modo DEMAND (sob demanda)\n3. Definir FC: 60-80 bpm\n4. Aumentar corrente (mA) gradualmente até captura:\n   — Iniciar com 0 mA, aumentar até espícula seguida de QRS\n   — Geralmente 50-100 mA\n   — Captura: espícula → QRS → onda T\n5. Confirmar captura elétrica E mecânica (pulso palpável)\n6. Adicionar 10% à corrente de captura (margem de segurança)\n7. SEDAÇÃO/ANALGESIA: Fentanil + Midazolam (dor significativa)" },
      { id: "followup", title: "Acompanhamento", content: "• Monitorização contínua\n• Verificar captura regularmente\n• Providenciar marcapasso transvenoso se necessário > 30-60 min\n• Tratar causa base" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "MPT: FC 60-80 bpm, corrente titulada até captura\nSedação: Fentanil 50-100 mcg IV + Midazolam 2-5 mg IV\nAtropina: 0,5 mg IV (enquanto prepara MPT)\nDopamina/Adrenalina: infusão como ponte SN" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Pás de MPT anteroposterior\n2. Modo DEMAND, FC 60-80 bpm\n3. Titular corrente até captura\n4. Fentanil 50 mcg IV SN (dor)\n5. Midazolam 2 mg IV SN (sedação)\n6. Monitorização contínua (ECG, PA, SpO2)\n7. Verificar captura mecânica (pulso)\n8. Providenciar MPT transvenoso se > 30-60 min\n9. Eletrólitos, ECG 12 derivações\n10. Tratar causa base" },
      { id: "references", title: "Referências Bibliográficas", content: "1. AHA ACLS Guidelines 2020.\n2. ACC/AHA Guidelines on Bradycardia, 2019.\n3. Diretriz SBC de Arritmias, 2022." }
    ]
  },
  {
    id: "marcapasso-transvenoso",
    title: "Marcapasso Transvenoso",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "O marcapasso transvenoso temporário (MPTV) é inserido via venosa central (jugular interna ou femoral) até o ventrículo direito, proporcionando pacing confiável. Indicado quando o marcapasso transcutâneo é insuficiente ou para uso prolongado. Requer acesso venoso central e idealmente fluoroscopia ou ECG intracavitário." },
      { id: "def", title: "Definição", content: "Inserção de eletrodo de pacing via venosa central até o ápice do VD.\n\nIndicações:\n• Bradicardia refratária ao MPT transcutâneo\n• BAV total pós-IAM anterior\n• Necessidade de pacing > 30-60 min\n• Pré-operatório com bradicardia grave\n• Overdrive pacing para taquicardia\n\nVia de acesso:\n• Jugular interna direita (mais direta ao VD)\n• Femoral (mais fácil, maior risco de TVP)\n• Subclávia (risco de pneumotórax)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "• MPT transcutâneo com captura inadequada\n• Bradicardia persistente necessitando pacing prolongado\n• BAV total com instabilidade" },
      { id: "etiology", title: "Etiologia", content: "Mesmas indicações do MPT, quando este é insuficiente ou transitório demais." },
      { id: "clinical", title: "Apresentação Clínica", content: "Bradicardia grave com instabilidade hemodinâmica refratária a tratamento farmacológico e MPT transcutâneo." },
      { id: "diagnosis", title: "Diagnóstico", content: "1. ECG confirmando indicação de pacing\n2. Eco: avaliar função ventricular\n3. Fluoroscopia ou ECG intracavitário para posicionamento\n4. Rx tórax pós-inserção (confirmar posição, excluir pneumotórax)" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Avaliar se a causa da bradicardia é reversível antes de inserir MPTV." },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Acesso venoso central (jugular interna D preferida)\n2. Introdutor 6 Fr\n3. Avançar eletrodo de pacing (balão na ponta facilita)\n4. Posicionar no ápice do VD:\n   — Fluoroscopia: ponta no ápice do VD\n   — ECG intracavitário: ST supra no contato endocárdico\n   — Às cegas: avançar ~40 cm pela jugular, verificar captura\n5. Conectar ao gerador externo\n6. FC: 60-80 bpm, modo DEMAND\n7. Encontrar limiar de captura (mA mínima com captura)\n8. Configurar output: 2-3x o limiar\n9. Verificar sensing\n10. Fixar eletrodo, curativo estéril\n11. Rx tórax controle" },
      { id: "followup", title: "Acompanhamento", content: "• Rx tórax diário (migração do eletrodo)\n• Verificar limiar de captura diariamente\n• Curativo do acesso 48/48h\n• Avaliar indicação de marcapasso definitivo\n• Remover assim que possível (risco de infecção)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Inserção de eletrodo de pacing transvenoso\nFC: 60-80 bpm, output 2-3x limiar\nSedação leve: Fentanil + Midazolam\nATB: não indicado profilático de rotina" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Acesso venoso central + introdutor 6 Fr\n2. Eletrodo de pacing bipolar\n3. Gerador externo: FC 60-80, modo DEMAND\n4. Output: 2-3x limiar de captura\n5. Fentanil 50 mcg IV + Midazolam 2 mg IV (sedação)\n6. Rx tórax controle\n7. ECG 12 derivações pós-inserção\n8. Curativo estéril oclusivo\n9. Monitorização contínua\n10. Verificação diária do limiar" },
      { id: "references", title: "Referências Bibliográficas", content: "1. ACC/AHA Guidelines on Bradycardia and Pacing, 2019.\n2. AHA ACLS Provider Manual, 2020.\n3. Roberts & Hedges' Clinical Procedures in Emergency Medicine, 7th ed. 2019." }
    ]
  },
  {
    id: "toracocentese",
    title: "Toracocentese",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A toracocentese é a punção da cavidade pleural para drenagem de líquido (derrame pleural) ou ar (pneumotórax). Pode ser diagnóstica (análise do líquido) ou terapêutica (alívio de dispneia). USG point-of-care aumenta a segurança e o sucesso." },
      { id: "def", title: "Definição", content: "Punção percutânea do espaço pleural com agulha ou cateter.\n\nIndicações diagnósticas:\n• Derrame pleural de causa indeterminada\n\nIndicações terapêuticas:\n• Derrame pleural volumoso com dispneia\n• Pneumotórax simples sem indicação de dreno\n\nContraindicações relativas:\n• Coagulopatia grave (INR > 2, PLQ < 25.000)\n• VM com PEEP alta (risco de pneumotórax)\n• Derrame loculado (preferir guiado por imagem)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "• Dispneia + murmúrio vesicular diminuído\n• Rx tórax: opacidade, velamento de seio costofrênico\n• USG: líquido anecóico acima do diafragma\n• Puncionável: camada líquida > 10 mm na USG" },
      { id: "etiology", title: "Etiologia", content: "Transudato: ICC, cirrose, síndrome nefrótica\nExsudato: pneumonia (parapneumônico), TB, neoplasia, TEP\nHemotórax: trauma, iatrogênico\nEmpiema: infecção pleural" },
      { id: "clinical", title: "Apresentação Clínica", content: "• Dispneia progressiva\n• Tosse seca\n• Dor pleurítica\n• Macicez à percussão\n• MV diminuído/abolido\n• Desvio de traqueia (derrames volumosos)" },
      { id: "diagnosis", title: "Diagnóstico", content: "Análise do líquido pleural:\n1. Aspecto macroscópico (citrino, hemático, purulento, leitoso)\n2. Bioquímica: proteínas, DHL, glicose, pH\n3. Critérios de Light (exsudato vs transudato)\n4. Celularidade + diferencial\n5. Bacterioscopia + cultura\n6. ADA (tuberculose)\n7. Citologia oncótica\n8. NT-proBNP (ICC)" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Consolidação pulmonar\n• Atelectasia\n• Elevação diafragmática\n• Massa pulmonar" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Posição sentada, braços apoiados\n2. USG: localizar líquido, marcar ponto\n3. Assepsia + anestesia local (lidocaína 2%)\n4. Ponto de punção: 1-2 EIC abaixo do nível do líquido, linha axilar posterior\n5. BORDA SUPERIOR da costela inferior (feixe neurovascular na borda inferior)\n6. Agulha 14-16G ou kit de toracocentese\n7. Aspirar lentamente\n8. Máximo: 1000-1500 mL por sessão (risco de edema de reexpansão)\n9. Coletar amostras para análise\n10. Rx tórax controle (excluir pneumotórax)" },
      { id: "followup", title: "Acompanhamento", content: "• Rx tórax 2-4h pós-procedimento\n• Monitorizar SpO2\n• Vigiar sinais de pneumotórax (dor, dispneia, enfisema subcutâneo)\n• Resultado da análise do líquido → guiar tratamento" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "O procedimento é o tratamento.\nSe empiema: drenagem torácica (dreno)\nSe derrame neoplásico recorrente: pleurodese\nSe transudato: tratar causa base (ICC, cirrose)" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. USG point-of-care\n2. Lidocaína 2% 10-20 mL (anestesia local)\n3. Kit de toracocentese ou jelco 14G\n4. Coletar: bioquímica, celularidade, cultura, ADA, citologia\n5. Máximo 1500 mL drenados\n6. Rx tórax controle\n7. Monitorização SpO2\n8. Vigiar edema de reexpansão" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Light RW. Pleural Diseases, 6th ed. 2013.\n2. BTS Guidelines on Pleural Procedures, 2010.\n3. Roberts & Hedges' Clinical Procedures, 7th ed. 2019." }
    ]
  },
  {
    id: "drenagem-torax",
    title: "Drenagem de Tórax",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A drenagem torácica (toracostomia com dreno tubular) é procedimento de emergência para pneumotórax hipertensivo, hemotórax e empiema. Ponto de inserção: triângulo de segurança (5º EIC, linha axilar anterior). Dreno conectado a sistema de selo d'água." },
      { id: "def", title: "Definição", content: "Inserção de dreno tubular no espaço pleural para remoção de ar, sangue, pus ou líquido.\n\nIndicações:\n• Pneumotórax hipertensivo (emergência)\n• Hemotórax\n• Derrame pleural volumoso/recorrente\n• Empiema\n• Pós-operatório de cirurgia torácica\n• Pneumotórax simples sintomático ou > 2 cm\n\nCalibre do dreno:\n• Hemotórax/empiema: 28-36 Fr\n• Pneumotórax: 16-24 Fr\n• Derrame: 20-28 Fr" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Indicação emergencial:\n• Pneumotórax hipertensivo: timpanismo, MV abolido, desvio de traqueia, hipotensão, turgência jugular\n• Hemotórax maciço: macicez, MV abolido, choque" },
      { id: "etiology", title: "Etiologia", content: "• Trauma (contuso ou penetrante)\n• Espontâneo (pneumotórax primário/secundário)\n• Iatrogênico (pós-punção venosa central, barotrauma)\n• Infeccioso (empiema)" },
      { id: "clinical", title: "Apresentação Clínica", content: "• Dispneia\n• Dor torácica\n• MV diminuído/abolido\n• Timpanismo (ar) ou macicez (líquido)\n• Instabilidade hemodinâmica" },
      { id: "diagnosis", title: "Diagnóstico", content: "1. Clínico (pneumotórax hipertensivo — não esperar Rx)\n2. Rx tórax\n3. USG (eFAST)\n4. TC tórax (pneumotórax oculto)" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Atelectasia\n• Derrame vs consolidação\n• Hérnia diafragmática" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Posição: decúbito dorsal elevado 30-45° ou sentado\n2. Ponto: 5º EIC, linha axilar anterior (triângulo de segurança)\n3. Assepsia + campos estéreis\n4. Anestesia local: lidocaína 2% (pele, subcutâneo, periósteo, pleura)\n5. Incisão de 2-3 cm na borda superior da costela inferior\n6. Dissecção romba com pinça Kelly até pleura\n7. Penetrar pleura com dedo (confirmar espaço pleural)\n8. Inserir dreno direcionado:\n   — Ápice (pneumotórax)\n   — Base (hemotórax/líquido)\n9. Conectar ao sistema de selo d'água\n10. Verificar oscilação + borbulhamento\n11. Fixação com fio + curativo oclusivo\n12. Rx tórax controle" },
      { id: "followup", title: "Acompanhamento", content: "• Registrar débito 6/6h\n• Rx tórax diário\n• Retirada: débito < 150-200 mL/24h + sem borbulhamento + pulmão expandido\n• Clampar por 4-6h antes de retirar + Rx controle\n• ATB: controverso (Cefazolina dose única — trauma)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Procedimento técnico — ver conduta.\nAnalgesia pós: Dipirona + Tramadol\nFisioterapia respiratória" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Lidocaína 2% 20 mL (anestesia local)\n2. Dreno tubular (calibre conforme indicação)\n3. Sistema de selo d'água\n4. Curativo oclusivo\n5. Rx tórax controle\n6. Dipirona 1g IV 6/6h\n7. Tramadol 100 mg IV 8/8h SN\n8. Registrar débito 6/6h\n9. Fisioterapia respiratória\n10. Rx tórax diário" },
      { id: "references", title: "Referências Bibliográficas", content: "1. ATLS 10th ed. ACS, 2018.\n2. BTS Guidelines on Chest Drain Insertion, 2010.\n3. Roberts & Hedges', 7th ed. 2019." }
    ]
  },
  {
    id: "paracentese",
    title: "Paracentese",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A paracentese é a punção da cavidade peritoneal para drenagem de líquido ascítico. Pode ser diagnóstica (PBE, neoplasia) ou terapêutica (ascite tensa). Procedimento seguro mesmo em coagulopatas. Ponto: FIE, entre umbigo e EIAS." },
      { id: "def", title: "Definição", content: "Punção percutânea da cavidade peritoneal.\n\nIndicações diagnósticas:\n• Ascite de início recente\n• Suspeita de PBE (peritonite bacteriana espontânea)\n• Toda admissão de cirrótico com ascite\n\nIndicações terapêuticas:\n• Ascite tensa com dispneia/desconforto\n• Ascite refratária\n\nContraindicação absoluta: nenhuma\nRelativas: CIVD clinicamente significativa, abdome cirúrgico" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Todo cirrótico internado com ascite: paracentese diagnóstica na admissão para excluir PBE.\n\nSinais de PBE: febre, dor abdominal, encefalopatia hepática" },
      { id: "etiology", title: "Etiologia", content: "Transudato (GASA ≥ 1,1): cirrose (80%), ICC, Budd-Chiari\nExsudato (GASA < 1,1): neoplasia, tuberculose, pancreatite, síndrome nefrótica" },
      { id: "clinical", title: "Apresentação Clínica", content: "• Distensão abdominal progressiva\n• Dispneia (elevação diafragmática)\n• Desconforto abdominal\n• Semicírculos de Skoda\n• Macicez de decúbito" },
      { id: "diagnosis", title: "Diagnóstico", content: "Análise do líquido ascítico:\n1. Celularidade: PMN > 250/mm³ = PBE\n2. GASA (gradiente albumina soro-ascite)\n3. Proteínas totais\n4. Glicose, DHL\n5. Cultura (inocular em frasco de hemocultura)\n6. ADA (tuberculose)\n7. Citologia oncótica" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Globo vesical\n• Obesidade\n• Cisto ovariano gigante\n• Obstrução intestinal com distensão" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Posição: decúbito dorsal, leve lateralização para esquerda\n2. Ponto: FIE, entre umbigo e EIAS (junção do terço lateral com terço médio)\n3. USG: localizar líquido, evitar alças e vasos\n4. Assepsia + anestesia local (lidocaína 2%)\n5. Agulha 14-16G ou cateter de paracentese\n6. Técnica em Z (previne fístula)\n7. Coletar amostras\n8. Paracentese terapêutica: drenar lentamente\n9. Se > 5L drenados: albumina 6-8 g/L retirado (ex: 6L → 40g albumina)\n10. Curativo" },
      { id: "followup", title: "Acompanhamento", content: "• Monitorizar PA (risco de hipotensão pós-paracentese)\n• Repor albumina se > 5L (prevenir disfunção circulatória)\n• Resultado do líquido\n• Se PBE: Ceftriaxona 2g/dia IV + albumina D1 e D3\n• Diuréticos para manejo crônico (espironolactona + furosemida)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Procedimento: conforme conduta\nAlbumina: 6-8g por litro drenado (se > 5L)\nPBE: Ceftriaxona 2g/dia IV × 5-7 dias\nAlbumina na PBE: 1,5 g/kg D1 + 1 g/kg D3" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. USG point-of-care\n2. Lidocaína 2% 10-20 mL\n3. Jelco 14-16G ou kit de paracentese\n4. Coletar: celularidade, GASA, proteínas, cultura, ADA\n5. Paracentese terapêutica: volume conforme tolerância\n6. Albumina 20% IV (se > 5L: 6-8g/L drenado)\n7. Monitorizar PA\n8. Se PMN > 250: Ceftriaxona 2g IV 1x/dia\n9. Curativo compressivo" },
      { id: "references", title: "Referências Bibliográficas", content: "1. EASL Guidelines on Decompensated Cirrhosis, 2018.\n2. AASLD Guidelines on Ascites, 2021.\n3. Runyon BA. Paracentesis. UpToDate 2024." }
    ]
  },
  {
    id: "puncao-lombar",
    title: "Punção Lombar",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A punção lombar (PL) é a coleta de líquor cefalorraquidiano (LCR) por punção no espaço subaracnoide lombar. Fundamental para diagnóstico de meningite, hemorragia subaracnoidea e doenças desmielinizantes. Nível: L3-L4 ou L4-L5." },
      { id: "def", title: "Definição", content: "Inserção de agulha no espaço subaracnoide entre L3-L4 ou L4-L5 para coleta de LCR ou medida de pressão.\n\nIndicações:\n• Meningite/encefalite\n• HSA (TC normal + suspeita clínica)\n• Síndrome de Guillain-Barré\n• Esclerose múltipla\n• Medida de pressão intracraniana\n• PL terapêutica (hidrocefalia comunicante)\n\nContraindicações:\n• HIC com risco de herniação → TC antes\n• Coagulopatia grave (INR > 1,5, PLQ < 50.000)\n• Infecção no local de punção\n• Lesão expansiva na TC (efeito de massa)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "TC crânio ANTES da PL se:\n• Imunossupressão\n• Doença do SNC prévia\n• Convulsão na última semana\n• Papiledema\n• Déficit neurológico focal\n• Rebaixamento de consciência\n\nSe meningite: NÃO atrasar ATB para fazer TC. Iniciar ATB → TC → PL" },
      { id: "etiology", title: "Etiologia", content: "Indicações mais frequentes na emergência:\n• Meningite bacteriana\n• Meningite viral\n• HSA com TC normal\n• Meningoencefalite herpética" },
      { id: "clinical", title: "Apresentação Clínica", content: "Suspeita de meningite: febre + cefaleia + rigidez de nuca\nSuspeita de HSA: cefaleia súbita + TC normal\nRebaixamento + febre: encefalite" },
      { id: "diagnosis", title: "Diagnóstico", content: "Análise do LCR:\n1. Aspecto: límpido, turvo, hemorrágico, xantocrômico\n2. Pressão de abertura (normal: 6-20 cmH2O)\n3. Celularidade + diferencial (PMN vs linfócitos)\n4. Proteínas (normal: 15-45 mg/dL)\n5. Glicose (normal: 2/3 da glicemia)\n6. Bacterioscopia (Gram) + cultura\n7. Látex para antígenos bacterianos\n8. PCR para vírus (HSV, enterovírus)\n9. ADA (TB)\n10. VDRL (neurossífilis)" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Meningite bacteriana vs viral vs TB vs fúngica — diferenciada pelo LCR" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Posição: decúbito lateral esquerdo em flexão (joelhos no peito) ou sentado\n2. Identificar espaço: linha entre cristas ilíacas (L4) → L3-L4\n3. Assepsia + campos + anestesia local (lidocaína 2%)\n4. Agulha de PL (20-22G) com mandril\n5. Avançar lentamente com bisel paralelo às fibras (longitudinal)\n6. Sentir o \"pop\" da dura-máter\n7. Retirar mandril: verificar saída de LCR\n8. Medir pressão de abertura (manômetro)\n9. Coletar 3-4 tubos (1 mL cada)\n10. Reintroduzir mandril → retirar agulha\n11. Decúbito por 1-2h (prevenir cefaleia pós-punção)" },
      { id: "followup", title: "Acompanhamento", content: "• Repouso 1-2h pós-procedimento\n• Hidratação oral\n• Cefaleia pós-punção: cafeína, analgésicos, blood patch se persistente\n• Resultado do LCR → guiar tratamento" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "A PL é diagnóstica. O tratamento depende do resultado.\nMeningite bacteriana: Ceftriaxona + Dexametasona\nHSA: neurocirurgia + nimodipina\nCefaleia pós-punção: Blood patch" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. TC crânio SN (antes da PL)\n2. Lidocaína 2% 5 mL\n3. Agulha de PL 20-22G\n4. Coletar 4 tubos (celularidade, bioquímica, cultura, especiais)\n5. Medir pressão de abertura\n6. Repouso 1-2h pós-PL\n7. Dipirona 1g IV SN (cefaleia)\n8. Hidratação oral\n9. ATB empírico se meningite (NÃO atrasar para PL)" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Ellenby MS et al. Lumbar Puncture. NEJM 2006.\n2. IDSA Guidelines on Meningitis, 2004/2017.\n3. Roberts & Hedges', 7th ed. 2019." }
    ]
  },
  {
    id: "sedacao-rapida",
    title: "Sedação Rápida",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A sedação procedural (consciente ou profunda) é realizada para procedimentos dolorosos ou invasivos na emergência. Requer monitorização, material de via aérea disponível e conhecimento farmacológico. As drogas mais usadas são: propofol, midazolam, cetamina e fentanil." },
      { id: "def", title: "Definição", content: "Níveis de sedação (ASA):\n• Mínima (ansiolítica): responde a comando verbal\n• Moderada (consciente): responde a estímulo tátil\n• Profunda: responde a estímulo doloroso\n• Anestesia geral: sem resposta\n\nDrogas:\n• Propofol: sedação profunda, início rápido (30s), curta duração (5-10 min)\n• Midazolam: sedação moderada, amnésia, início 2-3 min\n• Cetamina: sedação dissociativa, analgesia, mantém reflexos de via aérea\n• Fentanil: analgesia pura, início 1-2 min\n• Etomidato: indução, estabilidade hemodinâmica" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Checklist pré-sedação:\n• Jejum (idealmente 2h líquidos, 6h sólidos — na emergência pode não ser possível)\n• Via aérea: Mallampati, abertura oral, pescoço\n• Comorbidades: cardiovascular, respiratória\n• Alergias\n• Acesso venoso\n• Material de via aérea avançada pronto\n• Monitorização" },
      { id: "etiology", title: "Etiologia", content: "Indicações:\n• Cardioversão elétrica\n• Redução de fraturas/luxações\n• Drenagem de abscessos\n• Endoscopia de emergência\n• Suturas complexas em crianças\n• Procedimentos dolorosos" },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente necessitando procedimento doloroso ou invasivo na emergência com necessidade de sedação/analgesia." },
      { id: "diagnosis", title: "Diagnóstico", content: "N/A — indicação é o procedimento planejado.\nAvaliar risco anestésico (ASA), via aérea difícil, comorbidades." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Escolha da droga baseada no procedimento:\n• Dor + ansiedade: Midazolam + Fentanil\n• Sedação rápida: Propofol\n• Crianças / hemodinâmica instável: Cetamina\n• Cardioversão: Propofol ou Midazolam + Fentanil\n• Instabilidade: Etomidato ou Cetamina" },
      { id: "conduct", title: "Conduta", content: "PROTOCOLOS COMUNS:\n\n1. Propofol: 1 mg/kg IV lento → 0,5 mg/kg a cada 3-5 min SN\n   — Vantagem: rápido início/recuperação\n   — Risco: hipotensão, apneia\n\n2. Midazolam + Fentanil:\n   — Midazolam 0,05-0,1 mg/kg IV + Fentanil 1 mcg/kg IV\n   — Antídotos: flumazenil / naloxona\n\n3. Cetamina (dissociativa):\n   — 1-2 mg/kg IV (ou 4-5 mg/kg IM)\n   — Mantém reflexos de via aérea, broncodilata\n   — Efeitos: aumento de secreções (dar atropina ou glicopirrolato), emergência (midazolam profilático)\n\n4. Etomidato: 0,2-0,3 mg/kg IV\n   — Estabilidade CV, rápido\n   — Supressão adrenal transitória\n\nTODOS: monitorização contínua (SpO2, ETCO2, PA, FC)" },
      { id: "followup", title: "Acompanhamento", content: "• Monitorização até recuperação completa\n• Critérios de alta: nível de consciência basal, deambulação segura, ingestão oral tolerada\n• Acompanhante para ir para casa\n• Não dirigir por 24h" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Propofol: 1 mg/kg IV\nMidazolam: 0,05-0,1 mg/kg IV (antídoto: flumazenil)\nFentanil: 1 mcg/kg IV (antídoto: naloxona)\nCetamina: 1-2 mg/kg IV\nEtomidato: 0,2-0,3 mg/kg IV" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Jejum (quando possível)\n2. Acesso venoso periférico\n3. Material de via aérea + BVM + aspiração prontos\n4. Monitorização: SpO2, ETCO2 (ideal), ECG, PA\n5. Droga de sedação conforme protocolo\n6. O2 suplementar (cânula nasal 3-5 L/min)\n7. Antídotos à beira do leito (flumazenil, naloxona)\n8. Observação pós-sedação até recuperação\n9. Critérios de alta documentados" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Green SM et al. Clinical Practice Guideline: Emergency Department Procedural Sedation. Ann Emerg Med 2019.\n2. ACEP Policy Statement on Procedural Sedation, 2014.\n3. Roberts & Hedges', 7th ed. 2019." }
    ]
  },
  {
    id: "sonda-vesical",
    title: "Sonda Vesical",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A sondagem vesical de demora (SVD) é a inserção de cateter de Foley na bexiga para drenagem contínua de urina. Indicada para monitorização de débito urinário, retenção urinária e cirurgias. Técnica asséptica é fundamental para prevenção de ITU associada a cateter." },
      { id: "def", title: "Definição", content: "Inserção de cateter vesical pela uretra até a bexiga.\n\nTipos:\n• Sonda de demora (Foley): balão de retenção, drenagem contínua\n• Sonda de alívio: cateterismo intermitente, sem balão\n• Cateter de 3 vias: irrigação vesical contínua (hematúria)\n\nCalibre:\n• Adulto homem: 16-18 Fr\n• Adulto mulher: 14-16 Fr\n• Criança: 6-10 Fr\n\nIndicações:\n• Monitorização de débito urinário (choque, cirurgia, queimaduras)\n• Retenção urinária aguda\n• Hematúria com coágulos\n• Peri-operatório" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Retenção urinária: globo vesical palpável, dor suprapúbica, USG com volume residual > 300 mL\n\nContraindicações:\n• Sangue no meato uretral (suspeita de lesão uretral no trauma)\n• Estenose uretral conhecida (usar cistostomia ou cateter flexível)" },
      { id: "etiology", title: "Etiologia", content: "Indicações na emergência:\n• Choque (monitorização DU)\n• Retenção urinária (HPB, medicamentosa)\n• Trauma (exceto se contraindicado)\n• Queimaduras extensas\n• Cirurgia de emergência" },
      { id: "clinical", title: "Apresentação Clínica", content: "Retenção urinária: dor suprapúbica, globo vesical, agitação\nMonitorização: paciente crítico necessitando controle de DU" },
      { id: "diagnosis", title: "Diagnóstico", content: "USG à beira do leito: volume vesical > 300 mL = indicação de sondagem" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Anúria vs retenção (USG diferencia)\n• IRA vs retenção urinária" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO — HOMEM:\n1. Posição supina\n2. Assepsia: clorexidina aquosa\n3. Lubrificar sonda com gel de xilocaína 2%\n4. Segurar pênis perpendicular, tracionando\n5. Inserir cateter até bifurcação (20-22 cm)\n6. Verificar retorno de urina\n7. Insuflar balão com 10 mL de água destilada\n8. Tracionar levemente\n9. Conectar ao coletor fechado\n\nPROCEDIMENTO — MULHER:\n1. Posição de litotomia\n2. Identificar meato uretral (entre clitóris e vagina)\n3. Assepsia\n4. Inserir 5-6 cm\n5. Restante igual" },
      { id: "followup", title: "Acompanhamento", content: "• Reavaliar necessidade diariamente (retirar o mais cedo possível)\n• Sistema fechado de drenagem\n• Higiene do meato\n• Se retenção > 1000 mL: clampar intermitentemente (controverso)\n• ITU associada a cateter: trocar sonda + ATB" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "A SVD é o procedimento.\nSe falha na passagem: sonda de menor calibre, sonda tipo Coudé (ponta curva), cistostomia suprapúbica" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Sonda Foley (calibre conforme paciente)\n2. Gel de xilocaína 2% (lubrificação/anestesia)\n3. Clorexidina aquosa 2% (assepsia)\n4. Água destilada 10 mL (balão)\n5. Coletor de sistema fechado\n6. Fixação na coxa\n7. Registrar débito urinário horário\n8. Reavaliar necessidade diariamente" },
      { id: "references", title: "Referências Bibliográficas", content: "1. IDSA/SHEA Guidelines on CAUTI Prevention, 2022.\n2. Roberts & Hedges', 7th ed. 2019.\n3. AUA Guidelines on Catheter-Associated Complications, 2021." }
    ]
  },
  {
    id: "sonda-nasogastrica",
    title: "Sonda Nasogástrica",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A sonda nasogástrica (SNG) é inserida pelo nariz até o estômago para descompressão gástrica, lavagem gástrica ou alimentação. Procedimento simples, mas com riscos (aspiração, posicionamento em via aérea). Confirmar posição com ausculta + Rx." },
      { id: "def", title: "Definição", content: "Inserção de sonda plástica pelo nariz até o estômago.\n\nTipos:\n• Levine (lúmen único): descompressão, aspiração\n• Nasogástrica duplo lúmen (Salem Sump): aspiração contínua\n• Dobbhoff (nasoenteral): alimentação (posição pós-pilórica)\n\nCalibre:\n• Adulto: 16-18 Fr (Levine), 12-16 Fr (Dobbhoff)\n• Criança: 8-12 Fr\n\nIndicações:\n• Descompressão gástrica (íleo, obstrução)\n• Lavagem gástrica (intoxicação)\n• Hemorragia digestiva (avaliar sangramento ativo)\n• Administração de medicamentos\n• Alimentação enteral" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Indicações na emergência:\n• Obstrução intestinal: distensão + vômitos\n• Intoxicação aguda < 1h: lavagem gástrica\n• HDA: avaliar sangramento ativo\n• Pré-IOT em estômago cheio\n\nContraindicações:\n• Fratura de base de crânio → usar orogástrica\n• Estenose/cirurgia esofágica recente\n• Ingestão de cáustico" },
      { id: "etiology", title: "Etiologia", content: "Indicações conforme patologia:\n• Obstrução intestinal\n• Intoxicação aguda\n• Hemorragia digestiva\n• Pancreatite aguda (descompressão)\n• Pós-operatório com íleo" },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente com indicação de descompressão gástrica ou necessidade de acesso ao TGI." },
      { id: "diagnosis", title: "Diagnóstico", content: "N/A — procedimento terapêutico/diagnóstico." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "N/A" },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Medir: nariz → lóbulo da orelha → apêndice xifoide (profundidade de inserção)\n2. Posição sentada (se possível), queixo fletido\n3. Lubrificar sonda com gel\n4. Inserir pela narina, direcionando para trás e para baixo\n5. Ao atingir orofaringe: pedir para engolir (oferecer água com canudo)\n6. Avançar até a marca medida\n7. Confirmar posição:\n   — Ausculta epigástrica com insuflação de ar (método impreciso)\n   — Aspiração de conteúdo gástrico (pH < 5)\n   — Rx abdome: ponta da sonda na câmara gástrica (mais confiável)\n8. Fixar no nariz com fita adesiva\n9. Conectar ao coletor (aspiração) ou fechar" },
      { id: "followup", title: "Acompanhamento", content: "• Verificar posição diariamente\n• Medir débito\n• Irrigar com 20 mL SF a cada 6h\n• Reavaliar necessidade diariamente\n• Trocar a cada 7-14 dias (ou conforme material)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Procedimento técnico — ver conduta.\nLavagem gástrica: SF 0,9% em alíquotas de 250 mL\nDescompressão: aspiração contínua ou intermitente" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. SNG Levine 16-18 Fr\n2. Gel lubrificante\n3. Aspiração de conteúdo gástrico\n4. Rx abdome (confirmar posição)\n5. Conectar ao coletor/aspiração\n6. Irrigar com SF 20 mL 6/6h\n7. Registrar débito\n8. Fixação nasal" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Roberts & Hedges', 7th ed. 2019.\n2. ACEP Clinical Policy on Nasogastric Tubes, 2017.\n3. Tintinalli's Emergency Medicine, 9th ed. 2020." }
    ]
  },
  {
    id: "gasometria-arterial",
    title: "Gasometria Arterial",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "A gasometria arterial (GA) é a análise dos gases sanguíneos e do equilíbrio ácido-base em sangue arterial. Fundamental na avaliação de distúrbios respiratórios e metabólicos. Artéria radial é o sítio preferido. Teste de Allen recomendado previamente." },
      { id: "def", title: "Definição", content: "Coleta de sangue arterial para análise de pH, PaO2, PaCO2, HCO3, BE, SaO2, lactato.\n\nValores normais:\n• pH: 7,35-7,45\n• PaO2: 80-100 mmHg\n• PaCO2: 35-45 mmHg\n• HCO3: 22-26 mEq/L\n• BE: -2 a +2\n• SaO2: 95-100%\n• Lactato: < 2 mmol/L\n\nSítios de punção:\n• Artéria radial (preferida)\n• Artéria femoral\n• Artéria braquial\n• Artéria dorsal do pé" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Indicações:\n• Insuficiência respiratória\n• Choque / instabilidade hemodinâmica\n• Distúrbios ácido-base\n• Monitorização de VM\n• Intoxicações\n• Cetoacidose diabética\n• Avaliação de oxigenação (PaO2/FiO2)" },
      { id: "etiology", title: "Etiologia", content: "Interpretação:\n• Acidose respiratória: PaCO2 ↑ (DPOC, hipoventilação)\n• Alcalose respiratória: PaCO2 ↓ (hiperventilação, TEP)\n• Acidose metabólica: HCO3 ↓ (sepse, CAD, IRA, intoxicação)\n• Alcalose metabólica: HCO3 ↑ (vômitos, diuréticos)" },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente com dispneia, choque, alteração de consciência ou necessidade de avaliação de oxigenação/ventilação/ácido-base." },
      { id: "diagnosis", title: "Diagnóstico", content: "A GA é o diagnóstico.\n\nAnálise sistemática:\n1. pH: acidose ou alcalose?\n2. Distúrbio primário: respiratório (PaCO2) ou metabólico (HCO3)?\n3. Compensação adequada? (fórmulas de Winter, etc.)\n4. Ânion gap: AG = Na - (Cl + HCO3). Normal: 8-12\n5. PaO2/FiO2: IRA se < 300, SDRA se < 200\n6. Lactato: > 2 = hipoperfusão" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Distúrbios ácido-base simples vs mistos.\nCalcular ânion gap para diferenciar causas de acidose metabólica." },
      { id: "conduct", title: "Conduta", content: "PROCEDIMENTO:\n1. Teste de Allen (circulação colateral ulnar)\n2. Posição: punho em dorsiflexão (apoio sob o punho)\n3. Palpar pulso radial\n4. Assepsia com álcool 70%\n5. Agulha 22-25G, seringa heparinizada (ou kit de GA)\n6. Ângulo de 30-45° com a pele, bisel para cima\n7. Avançar até retorno arterial pulsátil\n8. Coletar 1-3 mL\n9. Retirar agulha, comprimir por 5 min\n10. Remover bolhas de ar da seringa\n11. Enviar ao laboratório em gelo (ou analisar em < 15 min)" },
      { id: "followup", title: "Acompanhamento", content: "• Compressão 5 min (10 min se anticoagulado)\n• Vigiar hematoma\n• Resultado: tratar conforme distúrbio identificado\n• GA seriada para monitorização de VM e choque" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "A GA guia o tratamento — não é tratamento em si.\nAcidose metabólica: tratar causa (insulina CAD, ATB sepse)\nAcidose respiratória: VM\nLactato elevado: ressuscitação volêmica" },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Kit de gasometria ou seringa heparinizada + agulha 22-25G\n2. Álcool 70%\n3. Gaze estéril para compressão\n4. Enviar imediatamente ao laboratório\n5. Solicitar: pH, PaO2, PaCO2, HCO3, BE, SaO2, lactato, eletrólitos" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Dev SP et al. Arterial Puncture for Blood Gas Analysis. NEJM 2011.\n2. Roberts & Hedges', 7th ed. 2019.\n3. Tintinalli's Emergency Medicine, 9th ed. 2020." }
    ]
  },
  {
    id: "pocus",
    title: "POCUS (Point-of-Care Ultrasound)",
    categoryId: "procedures",
    sections: [
      { id: "intro", title: "Introdução", content: "O POCUS é o uso da ultrassonografia à beira do leito pelo médico assistente para diagnóstico e guia de procedimentos. Ferramenta que muda condutas em tempo real. Protocolos padronizados: eFAST (trauma), RUSH (choque), BLUE (dispneia), FEEL (PCR)." },
      { id: "def", title: "Definição", content: "Exame ultrassonográfico point-of-care realizado pelo médico à beira do leito.\n\nProtocolos principais:\n• eFAST: líquido livre + pneumotórax (trauma)\n• RUSH (Rapid Ultrasound in Shock): avaliação hemodinâmica\n• BLUE (Bedside Lung Ultrasound in Emergency): dispneia\n• FEEL (Focused Echocardiography in Emergency Life Support): PCR\n• Guia de procedimentos: acesso venoso, punções, IOT" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Indicações:\n• Trauma: eFAST\n• Choque indiferenciado: RUSH\n• Dispneia aguda: BLUE\n• PCR: eFAST + eco\n• Guia de AVC: USG para jugular\n• Guia de drenagem: USG para derrame/ascite\n• TVP: USG compressivo de MMII" },
      { id: "etiology", title: "Etiologia", content: "POCUS diagnostica:\n• Líquido livre peritoneal/pericárdico\n• Pneumotórax\n• Derrame pleural\n• Disfunção de VE/VD\n• Dilatação de VCI (volemia/IC)\n• Aneurisma de aorta\n• TVP\n• Hidronefrose\n• Gestação ectópica" },
      { id: "clinical", title: "Apresentação Clínica", content: "Qualquer paciente crítico na emergência se beneficia de POCUS:\n• Instabilidade hemodinâmica\n• Dispneia\n• Trauma\n• PCR\n• Dor abdominal\n• Guia de procedimentos invasivos" },
      { id: "diagnosis", title: "Diagnóstico", content: "Achados por protocolo:\n\neFAST:\n• Morrison +, esplenorrenal +, pelve +: hemoperitônio\n• Pericárdio +: tamponamento\n• Sem sliding pleural: pneumotórax\n\nRUSH (Pump, Tank, Pipes):\n• Pump: contratilidade, derrame pericárdico\n• Tank: VCI, líquido pleural/peritoneal\n• Pipes: aorta, TVP\n\nBLUE:\n• Linhas A + sliding: normal ou DPOC/asma\n• Linhas B difusas: EAP\n• Consolidação + derrame: pneumonia\n• Sem sliding + lung point: pneumotórax" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "POCUS diferencia causas de choque (hipovolêmico vs cardiogênico vs obstrutivo vs distributivo) e causas de dispneia (EAP vs pneumotórax vs derrame vs pneumonia)." },
      { id: "conduct", title: "Conduta", content: "POCUS é ferramenta diagnóstica que guia condutas:\n1. Trauma: eFAST → laparotomia/drenagem/pericardiocentese\n2. Choque: RUSH → volume/vasopressor/inotrópico/drenagem\n3. Dispneia: BLUE → diurético/drenagem/broncodilatador\n4. PCR: identificar causas reversíveis (tamponamento, TEP, hipovolemia)\n5. Procedimentos: guia USG para acesso venoso, toracocentese, paracentese, pericardiocentese, bloqueios\n\nDocumentar achados no prontuário." },
      { id: "followup", title: "Acompanhamento", content: "• POCUS seriado para reavaliação\n• Monitorização de resposta ao tratamento\n• Solicitar exame formal se achados duvidosos" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "POCUS não é tratamento — guia o tratamento.\nPermite diagnóstico em < 5 minutos e mudança de conduta imediata." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "N/A — ferramenta diagnóstica.\nPrescrições dependem dos achados:\n• Hemoperitônio → laparotomia\n• Tamponamento → pericardiocentese\n• Pneumotórax → drenagem\n• EAP → furosemida + VNI\n• TVP → anticoagulação" },
      { id: "references", title: "Referências Bibliográficas", content: "1. ACEP Emergency Ultrasound Guidelines, 2023.\n2. Lichtenstein D. BLUE Protocol. Chest 2008.\n3. Perera P et al. RUSH Protocol. Acad Emerg Med 2010.\n4. Ma OJ et al. Emergency Ultrasound, 4th ed. 2021." }
    ]
  }
];
