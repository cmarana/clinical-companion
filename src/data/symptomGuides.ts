export interface SymptomGuide {
  id: string;
  symptom: string;
  hypotheses: string[];
  exams: string[];
  conduct: string;
  redFlags?: string[];
  guideline?: string;
}

export const symptomGuides: SymptomGuide[] = [
  {
    id: "dor-toracica",
    symptom: "Dor Torácica",
    hypotheses: [
      "Síndrome Coronariana Aguda (IAM/Angina instável)",
      "Embolia pulmonar",
      "Dissecção de aorta",
      "Pneumotórax",
      "Pericardite",
      "Dor musculoesquelética",
      "DRGE / Espasmo esofágico",
      "Crise de ansiedade / Pânico",
    ],
    exams: [
      "ECG de 12 derivações (em até 10 minutos)",
      "Troponina I ou T (0h e 3h)",
      "RX de tórax PA",
      "D-dímero (se suspeita de TEP)",
      "Gasometria arterial",
      "Hemograma, função renal, eletrólitos",
    ],
    conduct: `1. MOV (Monitor, Oxigênio se SpO2 <94%, Veia)
2. AAS 200mg mastigado se suspeita de SCA
3. Nitrato SL se dor anginosa (exceto se PAS <100, FC <50 ou uso de sildenafil)
4. Morfina 2-4mg EV se dor refratária
5. Anticoagulação conforme diagnóstico
6. ECG seriado se ECG inicial normal e clínica sugestiva`,
    redFlags: [
      "Dor em aperto/queimação irradiando para MSE ou mandíbula",
      "Início súbito + dispneia + sudorese",
      "Dor rasgante dorsal (dissecção)",
      "Hipotensão + turgência jugular (tamponamento/TEP)",
      "Dor pleurítica + hemoptise (TEP)",
    ],
    guideline: "SBC / AHA 2023",
  },
  {
    id: "dispneia",
    symptom: "Dispneia",
    hypotheses: [
      "Edema agudo de pulmão (ICC descompensada)",
      "Crise asmática / DPOC exacerbada",
      "Pneumonia",
      "Embolia pulmonar",
      "Pneumotórax",
      "Derrame pleural",
      "Anafilaxia",
      "Acidose metabólica (cetoacidose, sepse)",
      "Ansiedade / Hiperventilação",
    ],
    exams: [
      "SpO2 e gasometria arterial",
      "RX de tórax PA",
      "ECG",
      "BNP/NT-proBNP (se suspeita de IC)",
      "D-dímero (se suspeita de TEP)",
      "Hemograma, PCR, lactato",
      "Função renal, eletrólitos",
    ],
    conduct: `1. O2 suplementar para SpO2 ≥94% (88-92% se DPOC)
2. VNI precoce se EAP ou DPOC com acidose respiratória
3. Broncodilatador se broncoespasmo
4. Furosemida EV se congestão
5. Antibiótico se pneumonia
6. Anticoagulação se TEP
7. Punção se pneumotórax hipertensivo`,
    redFlags: [
      "Tiragem intercostal + uso de musculatura acessória",
      "Cianose",
      "Rebaixamento do nível de consciência",
      "SpO2 <90% em ar ambiente",
      "Estridor (obstrução de via aérea)",
      "Hipotensão associada",
    ],
    guideline: "SBC / SBPT",
  },
  {
    id: "febre",
    symptom: "Febre",
    hypotheses: [
      "Infecção bacteriana (pneumonia, ITU, meningite, celulite)",
      "Infecção viral (IVAS, dengue, COVID-19, influenza)",
      "Sepse",
      "Abscesso",
      "Endocardite",
      "TVP / TEP",
      "Febre de origem indeterminada",
      "Reação medicamentosa",
    ],
    exams: [
      "Hemograma completo",
      "PCR e VHS",
      "Hemocultura (2 amostras de sítios diferentes)",
      "Urocultura + EAS",
      "RX de tórax",
      "Procalcitonina (se disponível)",
      "Lactato se sinais de gravidade",
    ],
    conduct: `1. Dipirona 1g EV ou Paracetamol 750mg VO para controle térmico
2. Investigar foco infeccioso
3. Antibiótico empírico se sinais de gravidade ou sepse
4. Colher culturas ANTES do antibiótico
5. Hidratação adequada
6. Reavaliar em 48-72h`,
    redFlags: [
      "Febre + rigidez de nuca (meningite)",
      "Febre + petéquias (meningococcemia/dengue grave)",
      "Febre + hipotensão (sepse)",
      "Febre + neutropenia (neutropenia febril)",
      "Febre >14 dias sem diagnóstico",
    ],
    guideline: "SBI / Ministério da Saúde",
  },
  {
    id: "sincope",
    symptom: "Síncope",
    hypotheses: [
      "Síncope vasovagal (neurocardiogênica)",
      "Hipotensão ortostática",
      "Arritmia cardíaca (bradicardia, taquicardia)",
      "Estenose aórtica",
      "Embolia pulmonar",
      "Hipoglicemia",
      "Convulsão (diagnóstico diferencial)",
      "AVC de circulação posterior",
    ],
    exams: [
      "ECG de 12 derivações",
      "Glicemia capilar",
      "PA em decúbito e ortostático",
      "Hemograma (descartar anemia)",
      "Eletrólitos",
      "Ecocardiograma (se sopro ou suspeita de cardiopatia)",
      "Holter 24h (ambulatorial)",
    ],
    conduct: `1. Estabilizar: MOV se instável
2. ECG imediato — buscar arritmias, QT longo, Brugada, bloqueios
3. Glicemia capilar
4. Teste ortostático (PA deitado → em pé em 3 min)
5. Investigar causa conforme clínica
6. Se causa cardiogênica: internação e monitorização
7. Se vasovagal típica: orientações e alta`,
    redFlags: [
      "Síncope ao esforço (cardiopatia estrutural)",
      "Palpitação prévia à síncope",
      "História familiar de morte súbita <40 anos",
      "ECG alterado (QT longo, Brugada, BAV)",
      "Síncope sem pródromos (arritmia)",
    ],
    guideline: "SBC / ESC 2018",
  },
  {
    id: "cefaleia",
    symptom: "Cefaleia",
    hypotheses: [
      "Enxaqueca (migrânea)",
      "Cefaleia tensional",
      "Cefaleia em salvas",
      "Hemorragia subaracnóidea (HSA)",
      "Meningite",
      "Hipertensão intracraniana",
      "Trombose venosa cerebral",
      "Arterite temporal (>50 anos)",
      "Sinusite",
    ],
    exams: [
      "TC de crânio sem contraste (se sinais de alarme)",
      "Punção lombar (se suspeita de HSA com TC normal ou meningite)",
      "Hemograma, PCR, VHS",
      "Fundoscopia (papiledema = HIC)",
      "AngioTC se suspeita de aneurisma/trombose",
    ],
    conduct: `1. Avaliar sinais de alarme (thunderclap, focal, rigidez de nuca)
2. Se bandeiras vermelhas: TC crânio urgente
3. Se enxaqueca: Dipirona 1g EV + Metoclopramida 10mg EV + Dexametasona 10mg EV
4. Se tensional: Dipirona 1g EV + repouso em ambiente escuro
5. Se HSA: internação em UTI, controle de PA, neurocirurgia`,
    redFlags: [
      "Cefaleia súbita e intensa (thunderclap headache) — HSA",
      "Cefaleia + febre + rigidez de nuca — Meningite",
      "Cefaleia nova após 50 anos — Arterite temporal",
      "Cefaleia progressiva + papiledema — HIC/Tumor",
      "Cefaleia + déficit neurológico focal",
      "Primeira cefaleia da vida, de forte intensidade",
    ],
    guideline: "SBN / AHS",
  },
  {
    id: "dor-abdominal",
    symptom: "Dor Abdominal",
    hypotheses: [
      "Apendicite aguda",
      "Colecistite / Colelitíase",
      "Pancreatite aguda",
      "Diverticulite",
      "Obstrução intestinal",
      "Úlcera péptica perfurada",
      "Cólica renal",
      "Gravidez ectópica (mulheres em idade fértil)",
      "Isquemia mesentérica",
      "Infecção urinária",
    ],
    exams: [
      "Hemograma, PCR",
      "Amilase e lipase (pancreatite)",
      "Função hepática e bilirrubinas",
      "EAS + urocultura",
      "Beta-HCG (mulheres em idade fértil — SEMPRE)",
      "Lactato (se suspeita de isquemia)",
      "RX abdome (níveis e perfuração)",
      "USG abdome total",
      "TC abdome com contraste (se dúvida)",
    ],
    conduct: `1. Analgesia: NÃO retardar por medo de mascarar diagnóstico
2. Dipirona 1g EV + Buscopan 1 amp EV
3. Jejum se suspeita cirúrgica
4. Hidratação EV
5. Avaliação cirúrgica se abdome agudo
6. Beta-HCG em TODA mulher em idade fértil com dor abdominal`,
    redFlags: [
      "Abdome em tábua (peritonite)",
      "Hipotensão + taquicardia (choque)",
      "Distensão abdominal + vômitos fecalóides (obstrução)",
      "Febre alta + icterícia + dor em HCD (colangite — tríade de Charcot)",
      "Dor desproporcional ao exame físico (isquemia mesentérica)",
    ],
    guideline: "CBC / EAST",
  },
  {
    id: "alteracao-consciencia",
    symptom: "Alteração do Nível de Consciência",
    hypotheses: [
      "Hipoglicemia",
      "AVC (isquêmico ou hemorrágico)",
      "Intoxicação exógena (drogas, álcool, medicamentos)",
      "Sepse / Infecção do SNC",
      "Distúrbio hidroeletrolítico (Na, Ca, K)",
      "Insuficiência hepática (encefalopatia hepática)",
      "Estado pós-ictal (pós-convulsão)",
      "Encefalopatia urêmica",
      "Trauma cranioencefálico",
    ],
    exams: [
      "Glicemia capilar (IMEDIATO)",
      "Glasgow",
      "TC crânio sem contraste",
      "Gasometria + lactato",
      "Eletrólitos (Na, K, Ca, Mg)",
      "Função renal e hepática",
      "Amônia (se suspeita de encefalopatia hepática)",
      "Toxicológico (se suspeita de intoxicação)",
      "Hemograma, coagulograma",
    ],
    conduct: `1. ABCDE — proteger via aérea se Glasgow ≤8 (IOT)
2. Glicemia capilar IMEDIATA → Glicose 50% 40mL EV se <70
3. Naloxona 0,4mg EV se suspeita de opioide
4. Flumazenil 0,2mg EV se suspeita de benzodiazepínico
5. Tiamina 100mg EV ANTES da glicose (se alcoolista)
6. TC crânio se focal ou trauma
7. Tratar causa de base`,
    redFlags: [
      "Glasgow ≤8 — indicação de IOT",
      "Anisocoria (herniação cerebral)",
      "Déficit focal (AVC)",
      "Febre + rigidez de nuca (meningite/encefalite)",
      "Hipoglicemia refratária",
    ],
    guideline: "AHA / SBN",
  },
  {
    id: "convulsao-sintoma",
    symptom: "Convulsão",
    hypotheses: [
      "Epilepsia (primeira crise ou descompensação)",
      "Convulsão febril (pediatria)",
      "Hipoglicemia",
      "Distúrbio eletrolítico (hiponatremia, hipocalcemia)",
      "Intoxicação (álcool, drogas, medicamentos)",
      "AVC / Tumor cerebral",
      "Eclâmpsia (gestante)",
      "Meningite / Encefalite",
      "Abstinência alcoólica",
    ],
    exams: [
      "Glicemia capilar (IMEDIATO)",
      "Eletrólitos: Na, K, Ca, Mg",
      "Hemograma, função renal",
      "TC crânio sem contraste (primeira crise ou déficit focal)",
      "EEG (ambulatorial)",
      "Toxicológico se suspeita",
      "Punção lombar se febre + suspeita de infecção SNC",
    ],
    conduct: `1. Proteger o paciente — decúbito lateral, remover objetos
2. NÃO colocar nada na boca
3. Diazepam 10mg EV lento (0,15-0,3 mg/kg) OU Midazolam 10mg IM
4. Se refratária (>5 min): repetir Diazepam
5. Se status epiléptico: Fenitoína 20mg/kg EV (máx 50mg/min)
6. Valproato 40mg/kg EV se refratário à fenitoína
7. Glicemia capilar + correção se hipoglicemia
8. IOT se status refratário`,
    redFlags: [
      "Convulsão >5 minutos (status epiléptico)",
      "Primeira crise >40 anos (investigar lesão estrutural)",
      "Convulsão + febre no adulto (meningite?)",
      "Gestante com convulsão (eclâmpsia)",
      "Não recuperação de consciência entre crises",
    ],
    guideline: "SBN / ILAE",
  },
];
