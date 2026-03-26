import type { FullProtocol } from "./types";

export const cardioFullProtocols7: FullProtocol[] = [
  {
    id: "fp-ic-aguda",
    title: "Insuficiência Cardíaca Aguda Descompensada",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["ic", "insuficiência cardíaca", "descompensada", "congestão", "baixo débito"],
    sections: [
      { id: "intro", title: "Introdução", content: "A insuficiência cardíaca aguda descompensada (ICAD) é uma das principais causas de internação hospitalar no Brasil, com alta morbimortalidade. Representa deterioração rápida dos sintomas e sinais de IC, exigindo intervenção urgente. Diretriz SBC 2018 e ESC 2021." },
      { id: "def", title: "Definição", content: "Síndrome clínica de início rápido ou gradual de sinais e sintomas de IC que requer tratamento urgente. Pode ser IC de novo ou descompensação de IC crônica. Classificação: perfil hemodinâmico (quente-úmido, quente-seco, frio-úmido, frio-seco) conforme Stevenson." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Sinais de alerta: dispneia progressiva, ortopneia, DPN, edema de MMII, ganho ponderal >2kg/semana, intolerância ao exercício, turgência jugular. BNP >100 pg/mL ou NT-proBNP >300 pg/mL sugerem IC." },
      { id: "etiology", title: "Etiologia", content: "Causas de descompensação: má aderência medicamentosa (principal causa no Brasil), infecções, arritmias (FA), isquemia miocárdica, HAS não controlada, anemia, disfunção tireoidiana, embolia pulmonar, uso de AINEs/drogas cardiotóxicas." },
      { id: "clinical", title: "Apresentação Clínica", content: "Congestão pulmonar: dispneia, ortopneia, crepitações. Congestão sistêmica: edema, hepatomegalia, turgência jugular, refluxo hepatojugular. Baixo débito: hipotensão, extremidades frias, confusão mental, oligúria. Perfis de Stevenson orientam o manejo." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico + laboratorial: BNP/NT-proBNP, troponina, função renal, eletrólitos, hemograma, TSH, gasometria. ECG (arritmias, isquemia). Rx tórax (congestão, derrame). Ecocardiograma (FE, valvulopatias). USG pulmonar (linhas B)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "TEP, pneumonia, DPOC exacerbado, asma, síndrome nefrótica, cirrose hepática, pericardite constritiva, tamponamento cardíaco." },
      { id: "conduct", title: "Conduta Inicial", content: "1. MOV + oximetria; 2. Posição sentada (Fowler); 3. O2 se SpO2 <90%; 4. Acesso venoso; 5. Classificar perfil hemodinâmico (Stevenson); 6. VNI se desconforto respiratório (CPAP 10 cmH2O ou BiPAP); 7. Furosemida EV 0,5-1 mg/kg (se congesto); 8. Nitroglicerina EV se PAS >110 mmHg." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Quente-úmido: diurético + vasodilatador. Frio-úmido: inotrópico (dobutamina 2,5-20 mcg/kg/min) + diurético cauteloso. Frio-seco: volume cauteloso (250mL SF em 15-30min, reavaliar). Quente-seco: ajustar medicações ambulatoriais. Norepinefrina se choque (PAS <90). Levosimendan se refratário a dobutamina." },
      { id: "prescriptions", title: "Prescrições", content: "1. Furosemida 20-80mg EV (2-3x/dia, titular por diurese); 2. Nitroglicerina 5-200 mcg/min EV (se PAS >110); 3. Nitroprussiato 0,3-5 mcg/kg/min (se PAS >110 e refratário); 4. Dobutamina 2,5-20 mcg/kg/min (se baixo débito); 5. Enoxaparina 40mg SC 1x/dia (profilaxia TVP); 6. Restrição hídrica 800-1200mL/dia; 7. Dieta hipossódica." },
      { id: "followup", title: "Acompanhamento", content: "Balanço hídrico rigoroso, peso diário, débito urinário, função renal e eletrólitos 12-24h. Meta: euvolemia, diurese >0,5 mL/kg/h. Iniciar/otimizar IECA/BRA + BB + espironolactona + SGLT2i antes da alta (pilares da IC)." },
      { id: "complications", title: "Complicações", content: "Choque cardiogênico, lesão renal aguda (síndrome cardiorrenal), arritmias, congestão refratária, necessidade de suporte mecânico (BIA, ECMO), óbito." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: IC descompensada com necessidade de diurético EV. UTI: choque cardiogênico, necessidade de vasopressores/inotrópicos, VNI/IOT. Alta: estável hemodinamicamente, euvolêmico, medicações VO otimizadas, orientações claras, consulta ambulatorial em 7-14 dias." },
      { id: "references", title: "Referências Bibliográficas", content: "Diretriz Brasileira de IC Aguda e Crônica — SBC 2018. ESC Guidelines for Acute and Chronic Heart Failure 2021. DATASUS — Internações por IC no Brasil. Stevenson LW. Eur J Heart Fail 1999." }
    ]
  },
  {
    id: "fp-taquicardia-supraventricular",
    title: "Taquicardia Supraventricular (TSV)",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["tsv", "taquicardia", "supraventricular", "adenosina", "manobra vagal"],
    sections: [
      { id: "intro", title: "Introdução", content: "A TSV paroxística é a arritmia sustentada mais comum na emergência (excluindo FA). Caracteriza-se por FC >150 bpm com QRS estreito. Geralmente benigna, mas pode causar instabilidade hemodinâmica. Diretriz SBC e AHA/ACC/HRS 2015." },
      { id: "def", title: "Definição", content: "Taquicardia de origem supraventricular com QRS estreito (<120ms), regular, FC 150-250 bpm. Tipos: reentrada nodal (60%), reentrada AV por via acessória (30%), taquicardia atrial (10%)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "ECG 12 derivações: taquicardia regular de QRS estreito, sem onda P visível ou onda P retrógrada. Início e término abruptos (paroxística). Comparar com ECG prévio em ritmo sinusal." },
      { id: "etiology", title: "Etiologia", content: "Reentrada nodal AV (mais comum), síndrome de Wolff-Parkinson-White (via acessória), taquicardia atrial focal. Fatores desencadeantes: cafeína, álcool, estresse, exercício, hipóxia, distúrbios eletrolíticos." },
      { id: "clinical", title: "Apresentação Clínica", content: "Palpitação de início súbito, sensação de 'coração acelerado', dispneia, tontura, dor torácica, ansiedade. Raramente síncope. Instável: hipotensão, alteração de consciência, dor torácica isquêmica, sinais de choque." },
      { id: "diagnosis", title: "Diagnóstico", content: "ECG: taquicardia regular QRS estreito, FC 150-250 bpm. Ausência de onda P ou P retrógrada (pseudo-S em DII, pseudo-r' em V1). Adenosina pode ser diagnóstica e terapêutica. Diagnósticos diferenciais no ECG: flutter 2:1 (FC ~150), taquicardia sinusal." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Flutter atrial 2:1, taquicardia sinusal, taquicardia atrial, taquicardia juncional, TV de QRS estreito (rara)." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Avaliar estabilidade hemodinâmica; 2. Se INSTÁVEL → cardioversão sincronizada 50-100J; 3. Se ESTÁVEL → manobras vagais (Valsalva modificada, massagem carotídea); 4. Se não reverte → Adenosina." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Manobras vagais: Valsalva modificada (soprar seringa 10mL por 15s, deitar e elevar MMII 45° por 15s — taxa de conversão ~40%). Adenosina: 6mg EV rápido em push + flush 20mL SF; se não reverte em 1-2min → 12mg EV; pode repetir 12mg. Alternativas: Verapamil 5mg EV em 2min ou Diltiazem 0,25 mg/kg EV." },
      { id: "prescriptions", title: "Prescrições", content: "1. Adenosina 6mg EV push rápido em veia antecubital + flush 20mL SF 0,9%; 2. Se não reverte: Adenosina 12mg EV push (pode repetir 1x); 3. Alternativa: Verapamil 5-10mg EV em 2-3min (CI se WPW ou IC); 4. Refratária: Amiodarona 150mg EV em 10min; 5. Cardioversão sincronizada 50-100J se instável." },
      { id: "followup", title: "Acompanhamento", content: "Após reversão: ECG em ritmo sinusal (procurar pré-excitação/WPW). Se recorrente: encaminhar eletrofisiologia para ablação. Profilaxia crônica: BB ou BCC VO se recorrências frequentes." },
      { id: "complications", title: "Complicações", content: "Instabilidade hemodinâmica, IC aguda (se TSV prolongada — taquicardiomiopatia), síncope, PCR (raro). Adenosina: pausa sinusal transitória, broncoespasmo (CI em asmáticos graves)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: TSV revertida, estável, sem comorbidades graves, orientado sobre recorrências. Internação: instabilidade hemodinâmica, TSV recorrente, suspeita de WPW, comorbidades. UTI: choque, necessidade de cardioversão repetida." },
      { id: "references", title: "Referências Bibliográficas", content: "AHA/ACC/HRS Guidelines for SVT 2015. Diretriz SBC — Arritmias Cardíacas 2016. Page RL et al. Circulation 2016. Appelboam A et al. Lancet 2015 (Valsalva modificada — REVERT trial)." }
    ]
  }
];
