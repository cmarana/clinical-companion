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
2. AAS 300mg mastigado se suspeita de SCA
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
  // ── EXPANSÃO: sintomas 9-40 ──────────────────────────────────
  {
    id: "edema-mmii",
    symptom: "Edema de Membros Inferiores",
    hypotheses: [
      "Insuficiência cardíaca descompensada",
      "Síndrome nefrótica / nefrite",
      "Cirrose hepática com hipoalbuminemia",
      "Insuficiência venosa crônica",
      "Trombose venosa profunda (TVP)",
      "Linfedema",
      "Hipoalbuminemia por desnutrição",
      "Hipotireoidismo (mixedema)",
      "Efeito adverso de medicamentos (BCC, corticoide, AINE)",
    ],
    exams: [
      "Proteína total e albumina sérica",
      "BNP ou NT-proBNP",
      "Creatinina, ureia, proteinúria (RPC ou 24h)",
      "TSH",
      "Hemograma, TGO/TGP, bilirrubinas",
      "US Doppler venoso de MMII (se TVP suspeita)",
      "ECG e RX de tórax",
    ],
    conduct: `1. Identificar a causa base — edema bilateral ≠ edema unilateral
2. Edema bilateral: investigar IC, renal, hepático, nutricional
3. Edema unilateral: US Doppler MMII urgente (TVP)
4. Diurético de alça (furosemida) se IC ou renal com sobrecarga
5. Suspender medicamentos causadores se possível
6. Elevação dos MMII + meia de compressão (venoso)
7. Encaminhar para especialidade conforme etiologia`,
    redFlags: [
      "Edema unilateral + dor + hiperemia (TVP)",
      "Edema + dispneia + ortopneia (IC descompensada)",
      "Edema + proteinúria maciça (síndrome nefrótica)",
      "Edema + icterícia + ascite (cirrose descompensada)",
      "Anasarca de rápida instalação",
    ],
    guideline: "SBC / SBN 2023",
  },
  {
    id: "icterícia",
    symptom: "Icterícia",
    hypotheses: [
      "Coledocolitíase / obstrução biliar",
      "Hepatite viral aguda (A, B, C, E)",
      "Hepatite alcoólica aguda",
      "Colangite aguda (Charcot: febre + icterícia + dor)",
      "Carcinoma de pâncreas / colangiocarcinoma",
      "Cirrose com descompensação",
      "Hemólise (anemia hemolítica)",
      "Síndrome de Gilbert (hiperbilirrubinemia indireta benigna)",
      "Leptospirose / sepse biliar",
    ],
    exams: [
      "Bilirrubinas total, direta e indireta",
      "TGO, TGP, FA, GGT",
      "Albumina, TP/INR (função hepática)",
      "Hemograma, reticulócitos, LDH, haptoglobina",
      "Sorologias hepatites (anti-HAV IgM, HBsAg, anti-HCV)",
      "US abdome (1ª escolha — dilatação de ductos?)",
      "Amilase/lipase (pancreatite associada?)",
    ],
    conduct: `1. Diferenciar icterícia pré-hepática (indireta), hepática (mista) ou pós-hepática (direta)
2. Obstrução biliar: CPRE + antibiótico (ceftriaxona + metronidazol)
3. Colangite grave: internação + ATB IV + drenagem endoscópica urgente
4. Hepatite viral: notificar + suporte
5. Hepatite alcoólica grave (Maddrey ≥ 32): prednisolona 40mg/dia
6. Cirrose descompensada: tratar complicação específica`,
    redFlags: [
      "Febre + icterícia + dor (Charcot) → colangite aguda",
      "Icterícia + encefalopatia → insuficiência hepática aguda",
      "Icterícia progressiva sem dor + emagrecimento (neoplasia)",
      "Icterícia + coagulopatia grave (INR > 1,5)",
    ],
    guideline: "SBHCI / AASLD 2023",
  },
  {
    id: "hematuria",
    symptom: "Hematúria",
    hypotheses: [
      "Urolitíase (cólica renal)",
      "Infecção urinária / cistite hemorrágica",
      "Tumor de bexiga ou rim",
      "Hipertrofia prostática benigna",
      "Glomerulonefrite (cilindros hemáticos)",
      "Trauma renal",
      "Distúrbio da coagulação / anticoagulação",
      "Nefropatia por IgA (hematúria pós-IVAS)",
      "Esquistossomose vesical (S. haematobium)",
    ],
    exams: [
      "EAS (confirmar hematúria + análise de cilindros)",
      "Urocultura",
      "Hemograma, creatinina, ureia",
      "Coagulograma (se anticoagulado ou sangramento excessivo)",
      "US rins e vias urinárias (1ª escolha)",
      "Cistoscopia (hematúria macroscópica em adulto > 40 anos)",
      "Citologia urinária (suspeita de tumor)",
    ],
    conduct: `1. Hematúria micro: EAS + cultura + US
2. Hematúria macro indolor > 40 anos: US + cistoscopia obrigatória
3. Cólica renal + hematúria: analgesia (dipirona/cetorolaco IV) + US ou uro-TC
4. Hematúria com cilindros → nefrítica → biópsia renal
5. Hematúria + febre + disúria: ITU — tratar com antibiótico
6. Tamponamento vesical: irrigação + cateter de 3 vias`,
    redFlags: [
      "Hematúria indolor em adulto > 40 anos (tumor até prova contrária)",
      "Hematúria + cilindros hemáticos (GN ativa)",
      "Hematúria + insuficiência renal aguda",
      "Tamponamento vesical (coágulos + retenção)",
    ],
    guideline: "AUA / SBU 2023",
  },
  {
    id: "palpitacao",
    symptom: "Palpitação",
    hypotheses: [
      "Extrassístoles atriais ou ventriculares (benignas)",
      "Fibrilação atrial / Flutter atrial",
      "Taquicardia supraventricular paroxística (TSVP)",
      "Taquicardia ventricular",
      "Anemia / hipertireoidismo",
      "Hipoglicemia",
      "Ansiedade / Síndrome do pânico",
      "Uso de cafeína, anfetaminas, cocaína",
      "Prolapso de valva mitral",
    ],
    exams: [
      "ECG de 12 derivações (durante a palpitação se possível)",
      "Holter 24h (se ECG normal e episódios frequentes)",
      "Hemograma (anemia?)",
      "TSH (hipertireoidismo?)",
      "Glicemia (hipoglicemia?)",
      "Eletrólitos (K+, Mg2+)",
      "Ecocardiograma (se estrutural suspeito)",
    ],
    conduct: `1. ECG imediato se em curso — documentar o ritmo
2. Avaliar hemodinâmica: estável → investigação eletiva; instável → cardioversão
3. TSV estável: manobra vagal → adenosina 6mg IV
4. FA recente (< 48h): ritmo vs frequência conforme CHA2DS2-VASc
5. TV sustentada estável: amiodarona IV
6. TV instável / FV: cardioversão imediata
7. Extrassístoles benignas sem cardiopatia: tranquilizar + suspender cafeína/estimulantes`,
    redFlags: [
      "Síncope associada às palpitações",
      "QTc > 500ms no ECG",
      "Cardiopatia estrutural conhecida",
      "Palpitação + hipotensão",
      "TV sustentada ou FV prévia",
    ],
    guideline: "AHA / ESC 2024",
  },
  {
    id: "artralgia",
    symptom: "Artralgia / Artrite",
    hypotheses: [
      "Artrite reumatoide",
      "Osteoartrite (artrose)",
      "Gota / Pseudogota",
      "Artrite séptica (urgência)",
      "Artrite reativa / pós-infecciosa",
      "Lúpus eritematoso sistêmico",
      "Artropatia psoriásica",
      "Espondiloartropatia (HLA-B27+)",
      "Febre reumática",
    ],
    exams: [
      "Hemograma, PCR, VHS",
      "Ácido úrico (se suspeita de gota)",
      "FR e anti-CCP (AR?)",
      "FAN (LES?)",
      "Radiografia das articulações acometidas",
      "Análise do líquido sinovial (artrite séptica ou microcristais)",
      "HLA-B27 (espondiloartropatia?)",
    ],
    conduct: `1. Diferenciar artrite monoarticular vs poliarticular, aguda vs crônica
2. Monoartrite aguda febril: punção articular URGENTE (artrite séptica até prova contrária)
3. Artrite séptica: drenagem + oxacilina/vancomicina IV
4. Gota aguda: AINE ou colchicina ou corticoide
5. AR: iniciar metotrexato + AINE + encaminhar reumatologia
6. Artrose: exercício + paracetamol + fisioterapia`,
    redFlags: [
      "Monoartrite aguda quente + febre (artrite séptica)",
      "Artrite + rush malar + FAN+ (LES)",
      "Artrite + uveíte + dor lombar noturna (espondiloartropatia)",
      "Artrite + cardite + febre (febre reumática)",
    ],
    guideline: "SBR 2023",
  },
  {
    id: "rash-cutaneo",
    symptom: "Rash Cutâneo / Exantema",
    hypotheses: [
      "Exantema viral (rubéola, sarampo, roséola, dengue)",
      "Reação medicamentosa (exantema morbiliforme)",
      "Urticária aguda alérgica",
      "Escarlatina (estreptocócica)",
      "Meningococcemia (petéquias/púrpura — emergência)",
      "Dermatite de contato",
      "Psoríase em gotas",
      "Doença de Lyme (eritema migratório)",
      "SJS/NET (urgência dermatológica)",
    ],
    exams: [
      "Hemograma (leucograma, plaquetas)",
      "PCR, VHS",
      "Sorologias virais conforme suspeita",
      "Cultura de swab de lesão (se pustular)",
      "Dermatoscopia (se lesão suspeita)",
      "Biópsia de pele (se exantema grave/atípico)",
      "Nikolsky (se bolhoso — SJS/NET)",
    ],
    conduct: `1. Avaliar extensão + morfologia das lesões (mácula, pápula, vesícula, púrpura)
2. Petéquias/púrpura + febre: meningococcemia → penicilina G IV IMEDIATO
3. Bolhas + Nikolsky+ + mucosas: SJS/NET → suspender medicamento causador + UTI
4. Urticária: anti-H1 + corticoide se grave + adrenalina se anafilaxia
5. Exantema viral: suporte + notificação se doença de notificação`,
    redFlags: [
      "Petéquias/púrpura em não-trombocitopênico + febre (meningococcemia)",
      "Bolhas + Nikolsky+ (SJS/NET)",
      "Rash + hipotensão + broncoespasmo (anafilaxia)",
      "Rash + artrite + febre + FAN+ (LES)",
    ],
    guideline: "SBD 2023",
  },
  {
    id: "dispepsia",
    symptom: "Dispepsia / Dor Epigástrica",
    hypotheses: [
      "Doença ulcerosa péptica (H. pylori)",
      "DRGE / Esofagite de refluxo",
      "Gastrite aguda / crônica",
      "Dispepsia funcional (Roma IV)",
      "Pancreatite aguda",
      "Colecistite / colelitíase",
      "SCA (IAM inferior — dor epigástrica!)",
      "Carcinoma gástrico (> 45 anos + red flags)",
      "Intolerância alimentar / medicamentos (AINE, AAS)",
    ],
    exams: [
      "ECG (excluir IAM em > 40 anos com dor epigástrica nova)",
      "Troponina se suspeita cardiovascular",
      "Amilase/lipase (pancreatite?)",
      "Hemograma, PCR",
      "US abdome (colelitíase, pâncreas)",
      "EDA: indicada se > 45 anos, red flags ou refratariedade",
      "Teste para H. pylori (uréase ou antígeno fecal)",
    ],
    conduct: `1. Excluir SCA com ECG se > 40 anos e dor epigástrica aguda nova
2. IBP 40mg/dia antes das refeições por 4-8 semanas
3. Erradicar H. pylori se positivo (esquema tríplice × 14 dias)
4. Suspender AINEs/AAS se possível
5. Pancreatite: RL 250-500mL/h + analgesia + NPO se vômitos
6. EDA se red flags: disfagia, perda de peso, anemia, vômitos persistentes`,
    redFlags: [
      "Disfagia + perda de peso (neoplasia)",
      "Vômitos com sangue (hematemese)",
      "Rigidez abdominal (perfuração)",
      "Dor epigástrica intensa irradiando para dorso (pancreatite/dissecção)",
      "Início em > 45 anos sem investigação prévia",
    ],
    guideline: "SBAD / ACG 2023",
  },
  {
    id: "lombalgia",
    symptom: "Lombalgia Aguda",
    hypotheses: [
      "Lombalgia inespecífica (musculoesquelética — 85%)",
      "Hérnia de disco com radiculopatia",
      "Estenose de canal lombar",
      "Fratura vertebral por compressão (osteoporose)",
      "Espondilite anquilosante / espondiloartropatia",
      "Cólica renal / pielonefrite",
      "Aneurisma de aorta abdominal (> 60 anos, dor grave)",
      "Neoplasia (metástase óssea)",
      "Síndrome da cauda equina (emergência)",
    ],
    exams: [
      "Nenhum exame de imagem na lombalgia inespecífica < 6 semanas sem red flags",
      "RX lombar: fratura, espondilolistese (se trauma ou osteoporose)",
      "RM lombar: indicada se déficit neurológico, suspeita de cauda equina, red flags",
      "US renal: se suspeita de cólica renal",
      "Hemograma, PCR, VHS (espondilite, infecção, neoplasia)",
      "PSA (homem > 50 anos com dor noturna)",
    ],
    conduct: `1. Pesquisar red flags em TODA lombalgia (ver abaixo)
2. Inespecífica: manter atividade física + AINE + miorrelaxante por < 7 dias
3. Radiculopatia: AINE + fisioterapia; cirurgia se déficit progressivo ou falha em 6 semanas
4. Cauda equina: RM urgente + cirurgia descompressiva em < 24h
5. Cólica renal: dipirona/cetorolaco IV + alphaabloqueador
6. Pielonefrite: ATB + hidratação`,
    redFlags: [
      "Disfunção vesical/intestinal + anestesia em sela (síndrome da cauda equina — emergência)",
      "Dor noturna + perda de peso + neoplasia prévia",
      "Febre + dor lombar (discite, abscesso epidural)",
      "Trauma + idoso + corticoide crônico (fratura)",
      "Déficit neurológico progressivo",
      "Dor intensa > 60 anos irradiando para abdome (AAA)",
    ],
    guideline: "Cochrane / NICE 2023",
  },
  {
    id: "disuria",
    symptom: "Disúria / Sintomas Urinários Baixos",
    hypotheses: [
      "Cistite bacteriana não complicada",
      "Uretrite (gonorreia, clamídia)",
      "Prostatite aguda bacteriana",
      "Cistite intersticial",
      "Litíase vesical",
      "Tumor de bexiga",
      "Vaginite / vulvovaginite (mulher)",
      "Herpes genital",
    ],
    exams: [
      "EAS + urocultura (padrão-ouro)",
      "Nitrito + esterase leucocitária (triagem rápida)",
      "PCR/swab para gonorreia e clamídia (se uretrite suspeita)",
      "US rins e bexiga (litíase, tumor?)",
      "PSA (homem > 50 anos + sintomas baixos)",
      "Exame especular (mulher — vaginite)",
    ],
    conduct: `1. Cistite não complicada mulher: nitrofurantoína 100mg 12/12h × 5 dias OU fosfomicina 3g dose única
2. Cistite complicada / homem / gestante: fluoroquinolona ou amoxicilina-clavulanato × 7 dias + cultura
3. Prostatite aguda: ciprofloxacino 500mg 12/12h × 4 semanas
4. Uretrite: ceftriaxona 500mg IM + azitromicina 1g VO dose única (gonorreia + clamídia)
5. Cistite recorrente (> 3×/ano): profilaxia antibiótica ou arando vermelho`,
    redFlags: [
      "Febre + dor lombar + disúria (pielonefrite)",
      "Disúria + secreção purulenta (uretrite/IST)",
      "Hematúria macroscópica + disúria em fumante > 40 anos",
      "Retenção urinária aguda",
    ],
    guideline: "IDSA / MS Brasil 2023",
  },
  {
    id: "melena-hematoquesia",
    symptom: "Melena / Hematoquesia",
    hypotheses: [
      "Úlcera péptica sangrante (HDA — mais comum)",
      "Varizes esofágicas (cirrótico)",
      "Síndrome de Mallory-Weiss",
      "Angiodisplasia gástrica",
      "Doença diverticular (HDB)",
      "Neoplasia coloretal",
      "Colite isquêmica / inflamatória",
      "Hemorróidas (hematoquesia leve, sem instabilidade)",
    ],
    exams: [
      "Hemograma, plaquetas, coagulograma",
      "Tipagem sanguínea e reserva de concentrado de hemácias",
      "Creatinina, ureia (ureia elevada sugere HDA)",
      "Função hepática (cirrose?)",
      "Endoscopia digestiva alta (EDA): < 24h (estável), < 12h (instável)",
      "Colonoscopia: HDB após estabilização",
      "TC angiografia: HDB com sangramento ativo",
    ],
    conduct: `1. ABC: acesso venoso calibroso × 2, SF 0,9% se instável, tipagem
2. Glasgow-Blatchford: score 0 = alta segura (HDA)
3. HDA: IBP pantoprazol 80mg IV bolus → 8mg/h BIC
4. Varizes: terlipressina 2mg IV + ceftriaxona 1g/dia + EDA urgente
5. Transfusão se Hb < 7 (< 8 em cardiopata)
6. Endoscopia: hemostasia por clipe, coagulação ou injeção de adrenalina`,
    redFlags: [
      "Hipotensão + taquicardia (choque hemorrágico)",
      "Hematêmese maciça",
      "Melena em cirrótico (varizes)",
      "Queda de Hb > 3g/dL em 24h",
    ],
    guideline: "SBAD / BSG 2023",
  },
  {
    id: "tontura-vertigem",
    symptom: "Tontura / Vertigem",
    hypotheses: [
      "VPPB (vertigem posicional paroxística benigna — mais comum)",
      "Neurite vestibular",
      "Doença de Ménière",
      "Labirintite",
      "AVC de fossa posterior (EMERGÊNCIA)",
      "Hipotensão ortostática",
      "Hipoglicemia",
      "Medicamentos (anti-hipertensivos, BZD)",
      "Anemia",
    ],
    exams: [
      "Manobra de Dix-Hallpike (VPPB)",
      "HINTS exam (Head Impulse + Nystagmus + Test of Skew) — AVC de fossa posterior",
      "Glicemia capilar",
      "PA em ortostase",
      "Hemograma, eletrólitos",
      "RM de crânio com difusão (se HINTS anormal ou déficit neurológico)",
      "Audiometria (se perda auditiva associada → Ménière)",
    ],
    conduct: `1. HINTS exam em TODA vertigem aguda com fatores de risco para AVC
2. HINTS anormal (head impulse normal + nystagmus multidirecional + skew) → AVC → RM urgente
3. VPPB: manobra de Epley (eficácia 80-90%)
4. Neurite vestibular: prednisona 50-100mg/dia × 5 dias + betaistina
5. Hipotensão ortostática: revisar medicamentos, hidratação
6. Ménière: dieta hipossódica + betaistina + diurético`,
    redFlags: [
      "Diplopia + disartria + ataxia + vertigem (AVC de fossa posterior)",
      "Perda auditiva súbita unilateral",
      "Cefaleia + vertigem em não-hipertenso",
      "HINTS anormal",
    ],
    guideline: "ABN / AAO-HNS 2023",
  },
  {
    id: "anemia-sintomatica",
    symptom: "Anemia Sintomática",
    hypotheses: [
      "Deficiência de ferro (mais comum globalmente)",
      "Deficiência de B12 ou folato",
      "Anemia de doença crônica",
      "Hemólise (autoimune, falciforme, G6PD)",
      "Aplasia de medula óssea",
      "Leucemia / linfoma",
      "Hemorragia oculta (GI, ginecológica)",
      "Insuficiência renal crônica",
      "Hemoglobinopatias (talassemia)",
    ],
    exams: [
      "Hemograma completo com VCM e HCM",
      "Reticulócitos (↑ hemólise/sangramento, ↓ central)",
      "Ferritina, ferro sérico, TIBC",
      "B12 e folato",
      "LDH, haptoglobina, bilirrubina (hemólise?)",
      "Coombs direto (hemólise imune?)",
      "Esfregaço de sangue periférico",
      "Colonoscopia/EDA (sangramento GI oculto em adulto)",
    ],
    conduct: `1. Classificar pelo VCM: micro (<80), normo (80-100), macro (>100)
2. Microcítica + ferritina baixa: sulfato ferroso 300mg 3×/dia VO
3. Macrocítica: B12 1000mcg IM/semana × 4 → mensal; folato 5mg/dia
4. Hemolítica: suspender agente, corticoide se AHAI
5. Hb < 7 com sintomas: transfusão
6. Buscar e tratar a causa base`,
    redFlags: [
      "Hb < 7 g/dL com sintomas cardiovasculares",
      "Queda rápida de Hb (sangramento agudo)",
      "Anemia + leucopenia + trombocitopenia (pancitopenia — MO)",
      "Anemia + adenomegalia + febre (linfoma/leucemia)",
    ],
    guideline: "BSH / ASH 2023",
  },
  {
    id: "paralisia-facial",
    symptom: "Paralisia Facial",
    hypotheses: [
      "Paralisia de Bell (idiopática — mais comum)",
      "Síndrome de Ramsay Hunt (herpes zóster VNC VII+VIII)",
      "AVC (central — poupa testa)",
      "Tumor de parótida / parótida infiltrativa",
      "Neurinoma do acústico (compressão)",
      "Otite média / mastoidite com extensão",
      "Sarcoidose / LES",
      "Linfoma",
    ],
    exams: [
      "Otoscopia (vesículas = Ramsay Hunt; infecção = otite)",
      "TC de ossos temporais (otite com extensão, tumor)",
      "RM de crânio com gadolínio (neurinoma, tumor, AVC)",
      "EMG/ENMG (prognóstico na Bell > 3 semanas)",
      "Glicemia, hemograma (DM e hemato associados)",
      "Sorologias (Borrelia se área endêmica)",
    ],
    conduct: `1. Diferenciar CENTRAL (preserva testa, sem fechamento do olho) vs PERIFÉRICA (toda a hemiface)
2. Central → AVC → neurologista urgente + TC/RM
3. Bell: prednisona 1mg/kg/dia × 10 dias (iniciar < 72h)
4. Ramsay Hunt: prednisona + aciclovir/valaciclovir × 7-10 dias
5. Proteção ocular: colírio lubrificante + câmara úmida noturna (risco de ceratite)
6. Fisioterapia facial: iniciar precocemente`,
    redFlags: [
      "Paralisia facial + preservação da testa = AVC central",
      "Paralisia + vesículas auriculares (Ramsay Hunt)",
      "Paralisia + perda auditiva + massa cervical (tumor de parótida)",
      "Paralisia + febre + otorreia (otite complicada)",
    ],
    guideline: "AAO-HNS / ABN 2022",
  },
  {
    id: "hipotensao",
    symptom: "Hipotensão / Choque",
    hypotheses: [
      "Choque séptico (mais comum na UTI)",
      "Choque hipovolêmico (hemorragia, desidratação)",
      "Choque cardiogênico (IAM, IC aguda)",
      "Choque distributivo (anafilaxia, SIRS)",
      "Choque obstrutivo (TEP maciço, tamponamento)",
      "Hipotensão ortostática",
      "Insuficiência adrenal aguda",
      "Overdose de medicamentos (anti-hipertensivos, BZD)",
    ],
    exams: [
      "ECG (IAM? Arritmia?)",
      "Lactato sérico (hipoperfusão)",
      "Hemograma, PCR, procalcitonina",
      "Troponina, BNP",
      "Gasometria arterial",
      "US FAST (líquido livre, tamponamento, contractilidade)",
      "Cortisol basal (insuficiência adrenal?)",
      "Hemoculturas (se séptico)",
    ],
    conduct: `1. ABCDE: vias aéreas + O2 + 2 acessos calibrosos
2. Volume: SF 0,9% 500-1000mL em 30 min (avaliar resposta)
3. Vasopressor se refratário: norepinefrina (1ª linha no séptico e distributivo)
4. Séptico: colher culturas → ATB em < 1h → controle do foco
5. Cardiogênico: dobutamina + considerar IABP/Impella
6. Anafilaxia: adrenalina 0,5mg IM imediato
7. Obstrutivo (TEP/tamponamento): tratar a causa específica
8. Adrenal: hidrocortisona 100mg IV bolus`,
    redFlags: [
      "PAM < 65 mmHg refratária a volume",
      "Lactato > 4 mmol/L",
      "Rebaixamento de consciência + hipotensão",
      "Hipotensão + turgência jugular + abafamento de bulhas (tamponamento)",
    ],
    guideline: "SCCM / SSC 2024",
  },
  {
    id: "rebaixamento-consciencia",
    symptom: "Rebaixamento do Nível de Consciência",
    hypotheses: [
      "Hipoglicemia (mais comum e tratável — exluir primeiro)",
      "AVC hemorrágico ou isquêmico extenso",
      "Encefalopatia hepática",
      "Meningite / Encefalite (infecciosa)",
      "Convulsão (pós-ictal ou status não convulsivo)",
      "Intoxicação exógena (álcool, opioides, BZD, CO)",
      "Encefalopatia metabólica (uremia, hiponatremia, hipercapnia)",
      "TCE / Hematoma intracraniano",
      "Hipertensão intracraniana",
    ],
    exams: [
      "Glicemia capilar IMEDIATA (< 30s)",
      "Glasgow + pupilas + déficit focal",
      "TC crânio sem contraste urgente (AVC hemorrágico, TCE)",
      "Gasometria arterial (hipóxia, hipercapnia, acidose)",
      "Eletrólitos: Na+, K+, Ca2+, Mg2+",
      "Creatinina, ureia, amônia, TGO/TGP",
      "Toxicológico (sangue e urina)",
      "EEG (status epilepticus não convulsivo?)",
    ],
    conduct: `1. Glicemia < 60: glicose 50% 40mL IV imediato (+ tiamina 100mg se etilista)
2. GCS ≤ 8: posicionar + O2 + considerar IOT (proteção de VA)
3. Naloxona 0,4-2mg IV se suspeita de opioide
4. TC urgente se: focal + trauma + anticoagulado
5. Meningite suspeita: ATB IV imediato (não aguardar TC se sem focal)
6. Hipernatremia/hiponatremia: corrigir lentamente (max 10-12mEq/L/dia)
7. Encefalopatia hepática: lactulose + tratar precipitante`,
    redFlags: [
      "GCS < 8 (IOT para proteção de VA)",
      "Anisocoria + rebaixamento (herniação iminente)",
      "Febre + rebaixamento + rigidez (meningite)",
      "Queda brusca de GCS em < 1h",
    ],
    guideline: "AHA / ABN 2023",
  },
  {
    id: "sangramento-anormal",
    symptom: "Sangramento Anormal / Equimoses",
    hypotheses: [
      "Plaquetopenia (PTI, quimioterapia, medicamentos)",
      "Coagulopatia por hepatopatia",
      "Hemofilia A ou B",
      "Doença de Von Willebrand",
      "CIVD",
      "Anticoagulação excessiva (varfarina, DOAC)",
      "Deficiência de vitamina K",
      "Vasculite / púrpura de Henoch-Schönlein",
    ],
    exams: [
      "Hemograma completo com plaquetas",
      "TP/RNI e TTPa",
      "Fibrinogênio e D-dímero",
      "Dosagem de fatores (VIII e IX)",
      "Fator de Von Willebrand antigeno e atividade",
      "Função hepática (TGO/TGP, albumina)",
      "Nível de varfarina / DOAC (se anticoagulado)",
    ],
    conduct: `1. Identificar: plaquetopenia vs coagulopatia vs vascular
2. Plaquetas < 10.000 ou sangramento ativo: transfusão de plaquetas
3. Anticoagulação excessiva: reverter (vitamina K, CCP 4 fatores, idarucizumab)
4. CIVD: tratar causa + PFC + crioprecipitado + plaquetas
5. Hemofilia: concentrado de fator específico
6. PTI grave: IVIG + corticoide`,
    redFlags: [
      "Plaquetas < 10.000 espontaneamente",
      "Sangramento intracraniano / retroperitoneal",
      "CIVD com instabilidade hemodinâmica",
      "Sangramento + febre + pancitopenia (leucemia aguda)",
    ],
    guideline: "ASH / ISTH 2023",
  },
  {
    id: "poliuria-polidipsia",
    symptom: "Poliúria / Polidipsia",
    hypotheses: [
      "Diabetes mellitus descompensado",
      "Diabetes insipidus central ou nefrogênico",
      "Hipercalcemia",
      "Hipocalemia",
      "Polidipsia psicogênica (primária)",
      "Insuficiência renal crônica (fase poliúrica)",
      "Uso de diuréticos / lítio",
    ],
    exams: [
      "Glicemia de jejum e HbA1c",
      "Osmolalidade sérica e urinária",
      "Eletrólitos: Na+, K+, Ca2+",
      "Creatinina, ureia",
      "Densidad urinária",
      "ADH (vasopressina) sérico",
      "Teste de restrição hídrica + DDAVP (se DI suspeito)",
    ],
    conduct: `1. Glicemia > 250: tratar DM (insulina se CAD/EHH)
2. Osmolalidade sérica > 295 + urinária baixa → diabetes insipidus
3. DI central: desmopressina (DDAVP)
4. DI nefrogênico: suspender lítio + diurético tiazídico + dieta hipossódica
5. Hipercalcemia: SF 0,9% agressivo + bifosfonato
6. Polidipsia psicogênica: psiquiatria`,
    redFlags: [
      "Poliúria + confusão + hipernatremia grave (> 155 mEq/L)",
      "Poliúria + vômitos + hálito cetônico (CAD)",
      "Poliúria + hipercalcemia (neoplasia?)",
    ],
    guideline: "SBD / ADA 2024",
  },
  {
    id: "disfagia",
    symptom: "Disfagia",
    hypotheses: [
      "Carcinoma de esôfago (disfagia progressiva para sólidos → líquidos)",
      "Acalásia",
      "Anel de Schatzki / estenose péptica",
      "Disfagia orofaríngea (AVC, Parkinson, miastenia)",
      "Esofagite eosinofílica",
      "Compressão extrínseca (bócio, adenomegalia)",
      "Espasmose difuso do esôfago",
      "Corpo estranho",
    ],
    exams: [
      "EDA (1ª linha — visualiza lesão + biópsia)",
      "Estudo radiológico contrastado (EED — acalásia, anel)",
      "Manometria de alta resolução (distúrbio motor)",
      "TC tórax + abdome (compressão extrínseca, estadiamento)",
      "Videofluoroscopia da deglutição (disfagia orofaríngea)",
    ],
    conduct: `1. Disfagia para sólidos progressiva em adulto > 45 anos: EDA urgente
2. Corpo estranho impactado: endoscopia urgente
3. Acalásia: POEM ou dilatação pneumática ou toxina botulínica
4. Carcinoma: estadiamento + oncologia
5. Orofaríngea: fonoaudiologia + adaptação da dieta + tratar causa base`,
    redFlags: [
      "Disfagia progressiva para sólidos → líquidos (neoplasia)",
      "Disfagia + perda de peso + disfonia",
      "Regurgitação noturna + sialorreia (acalásia grave)",
      "Disfagia aguda (corpo estranho)",
    ],
    guideline: "SBGE / ACG 2023",
  },
  {
    id: "oliguria-anuria",
    symptom: "Oligúria / Anúria",
    hypotheses: [
      "Hipovolemia / desidratação (pré-renal — mais comum)",
      "Necrose tubular aguda (NTA isquêmica ou tóxica)",
      "Obstrução urinária (pós-renal — cateter, cálculo, HPB)",
      "Sepse com hipoperfusão renal",
      "Nefrite intersticial aguda (medicamentos)",
      "Glomerulonefrite rapidamente progressiva",
      "Síndrome hepatorrenal",
      "Rabdomiólise",
    ],
    exams: [
      "Creatinina, ureia, eletrólitos (K+!)",
      "EAS + sedimento urinário",
      "Densidade urinária, Na+ urinário (FeNa < 1% = pré-renal)",
      "US rins e vias urinárias (obstrução, tamanho renal)",
      "CPK (rabdomiólise?)",
      "Hemograma, PCR (infecção?)",
      "US Doppler renal (fluxo vascular)",
    ],
    conduct: `1. Cateter vesical IMEDIATO (excluir obstrução baixa)
2. Pré-renal: volume — SF 0,9% 500mL em 30 min, avaliar resposta
3. Se não responder: verificar função cardíaca (não dar mais volume cegamente)
4. Obstrução alta: nefrostomia percutânea ou DJ-stent
5. Hipercalemia > 6,5: gluconato de cálcio + insulina + bicarbonato + resina
6. Oligúria + sepse: bundle séptico + norepinefrina
7. Diálise se AEIOU presente`,
    redFlags: [
      "Anúria completa (obstrução bilateral ou grave)",
      "K+ > 6,5 mEq/L com alterações no ECG",
      "Oligúria + edema pulmonar refratário",
      "Oligúria + encefalopatia urêmica",
    ],
    guideline: "KDIGO 2024",
  },
  {
    id: "perda-peso",
    symptom: "Perda de Peso Involuntária",
    hypotheses: [
      "Neoplasia oculta (pulmão, TGI, hematológica — 25%)",
      "Depressão / ansiedade / transtorno alimentar",
      "Diabetes mellitus não controlado",
      "Hipertireoidismo",
      "Tuberculose / infecção crônica (HIV, endocardite)",
      "Má absorção (celíaca, Crohn, insuficiência pancreática)",
      "Insuficiência cardíaca avançada / DPOC",
      "Demência / disfagia (idoso)",
      "Causa social (pobreza, isolamento)",
    ],
    exams: [
      "Hemograma, VHS, PCR",
      "Glicemia e HbA1c",
      "TSH",
      "Sorologias (HIV, hepatites)",
      "Função hepática e renal",
      "RX tórax PA + TC tórax-abdome-pelve (rastreio oncológico)",
      "EDA + colonoscopia (se sintomas GI)",
      "PHQ-9 (depressão?)",
    ],
    conduct: `1. Definir perda significativa: > 5% em 1 mês OU > 10% em 6 meses
2. Anamnese dirigida: apetite, sintomas associados, medicamentos, contexto social
3. Exames básicos + TC tórax-abdome se > 45 anos sem causa óbvia
4. Tratar a causa identificada
5. Suporte nutricional: dieta hipercalórica + suplemento oral
6. Se sem causa após investigação: seguimento a cada 3-6 meses`,
    redFlags: [
      "Perda > 10% em 6 meses",
      "Associada a hemoptise, disfagia ou sangramento GI",
      "Perda em idoso com declínio funcional rápido",
      "Adenomegalia + perda de peso (linfoma)",
    ],
    guideline: "NICE / ASCO 2023",
  },
  {
    id: "confusao-mental-aguda",
    symptom: "Confusão Mental Aguda (Delirium)",
    hypotheses: [
      "Causas farmacológicas (BZD, opioides, anticolinérgicos, corticoide)",
      "Infecção (ITU, pneumonia, sepse — principal no idoso)",
      "Distúrbio metabólico (hiponatremia, hipoglicemia, uremia)",
      "AVC (principalmente frontal e temporal direito)",
      "Convulsão / pós-ictal",
      "Hipóxia / hipercapnia",
      "Retenção urinária / impactação fecal (idoso)",
      "Privação de sono / mudança de ambiente",
    ],
    exams: [
      "Glicemia capilar imediata",
      "Gasometria (hipóxia/hipercapnia)",
      "Eletrólitos, creatinina, amônia",
      "Hemograma, PCR, hemoculturas",
      "EAS + urocultura",
      "TC crânio (se focal, trauma, anticoagulado)",
      "EEG (status não convulsivo?)",
      "Revisão de medicamentos (causa mais tratável)",
    ],
    conduct: `1. CAM para confirmar delirium
2. Tratar causa precipitante identificada
3. Medidas não farmacológicas: reorientar frequentemente, mobilizar, óculos e aparelho auditivo, janela
4. Revisar TODOS os medicamentos — suspender anticolinérgicos, opioides, BZD desnecessários
5. Evitar contenção física (piora o delirium)
6. Haloperidol 0,5-1mg VO se agitação intensa ameaça segurança`,
    redFlags: [
      "Confusão + febre + rigidez de nuca (meningite)",
      "Confusão + novo déficit focal (AVC)",
      "Confusão + hipotensão + lactato elevado (sepse)",
      "Confusão em idoso sem causa óbvia → ITU oculta",
    ],
    guideline: "NICE / AGS 2023",
  },
  {
    id: "hemoptise",
    symptom: "Hemoptise",
    hypotheses: [
      "Bronquite aguda / crônica (causa mais comum — sangue escasso)",
      "Tuberculose pulmonar",
      "Bronquiectasia",
      "Carcinoma broncogênico",
      "Embolia pulmonar",
      "Estenose mitral (hipertensão pulmonar venosa)",
      "Vasculite pulmonar (granulomatose com poliangiíte)",
      "Aspergilose (bola fúngica em cavidades)",
    ],
    exams: [
      "RX tórax PA (lesão? cavidade? congestão?)",
      "TC tórax com contraste (angiografia se suspeita de embolia)",
      "Broncoscopia (localiza origem + biópsia)",
      "Escarro BAAR × 3 (TB)",
      "Hemograma, coagulograma",
      "Sorologias (ANCA — vasculite)",
      "Ecocardiograma (estenose mitral)",
    ],
    conduct: `1. Avaliar volume: < 100mL/24h = não maciça; > 600mL/24h = maciça (emergência)
2. Maciça: IOT seletiva do brônquio não sangrante + embolização brônquica urgente
3. Posicionamento: decúbito lateral com lado sangrante para baixo
4. TB suspeita: isolamento + investigação BAAR
5. Broncoscopia diagnóstica e terapêutica em hemoptise persistente
6. Vasculite: imunossupressão urgente`,
    redFlags: [
      "Hemoptise maciça (> 600mL/24h) — risco de asfixia",
      "Hemoptise + perda de peso + tabagismo (neoplasia)",
      "Hemoptise + sudorese noturna + febre (TB)",
      "Hemoptise + insuficiência renal aguda (síndrome pulmão-rim)",
    ],
    guideline: "ATS / SBPT 2023",
  },
  {
    id: "priapismo",
    symptom: "Priapismo",
    hypotheses: [
      "Doença falciforme (mais comum em crianças e adultos jovens)",
      "Idiopático",
      "Medicamentos (trazodona, antipsicóticos, anti-hipertensivos, anticoagulantes)",
      "Lesão medular / anestesia peridural",
      "Leucemia com leucostase",
      "Drogas recreativas (cocaína, ecstasy)",
      "Injeção intracavernosa de papaverina/alprostadil",
    ],
    exams: [
      "Gasometria do sangue do corpo cavernoso (isquêmico vs não-isquêmico)",
      "Hemograma completo com diferencial (falciforme, leucemia)",
      "US Doppler peniano (fluxo ausente = isquêmico)",
      "Eletroforese de Hb (falciforme?)",
      "Toxicológico",
    ],
    conduct: `1. Isquêmico (baixo fluxo, emergência): aspiração do corpo cavernoso + irrigação com SF
2. Fenilefrina intracavernosa 100-500mcg a cada 3-5 min (vasoconstrição)
3. Falciforme: hidratação + analgesia + transfusão/exsanguíneotransfusão se refratário
4. > 4h: urgência urológica (cirurgia de shunt se refratário)
5. > 24h: risco de disfunção erétil permanente
6. Não isquêmico (alto fluxo): eletivo — embolização artéria pudenda`,
    redFlags: [
      "Duração > 4h (isquemia cavernosa irreversível)",
      "Priapismo em criança (falciforme)",
      "Não isquêmico após trauma (fístula arteriovenosa)",
    ],
    guideline: "AUA / EAU 2023",
  },
  {
    id: "insonia",
    symptom: "Insônia",
    hypotheses: [
      "Insônia crônica primária / psicofisiológica",
      "Apneia obstrutiva do sono (SAOS)",
      "Ansiedade / depressão (comorbidade mais comum)",
      "Síndrome das pernas inquietas",
      "Hipotireoidismo / hipertireoidismo",
      "Medicamentos (corticoide, estimulantes, ISRS)",
      "Dor crônica",
      "Ambiente inadequado / higiene do sono ruim",
    ],
    exams: [
      "STOP-BANG e Epworth (SAOS?)",
      "Polissonografia (se suspeita de SAOS ou dissónia)",
      "PHQ-9 e GAD-7 (depressão e ansiedade)",
      "TSH",
      "Ferro sérico e ferritina (síndrome das pernas inquietas)",
      "Diário do sono (2 semanas)",
    ],
    conduct: `1. TCC-I (Terapia Cognitivo-Comportamental para Insônia): 1ª linha — superior a medicamentos
2. Higiene do sono: horários fixos, sem telas, sem álcool, ambiente escuro e frio
3. Restrição do sono e controle de estímulos (TCC-I)
4. Farmacológico se necessário (curto prazo): zolpidem, zopiclona (máx 4 semanas)
5. SAOS: CPAP
6. Síndrome das pernas inquietas: ferro (se ferritina < 75), agonista dopaminérgico`,
    redFlags: [
      "Insônia + depressão grave + ideação suicida",
      "Insônia + apneias observadas + sonolência diurna excessiva (SAOS)",
      "Insônia em idoso com novos medicamentos (BZD → queda, delirium)",
    ],
    guideline: "AASM 2023",
  },
  {
    id: "fraqueza-muscular",
    symptom: "Fraqueza Muscular",
    hypotheses: [
      "AVC / TIA (início súbito, assimétrico)",
      "Síndrome de Guillain-Barré (ascendente, simétrico, arreflexia)",
      "Miastenia gravis (flutuante, piora à tarde)",
      "Miopatias inflamatórias (proximal, CPK elevado)",
      "Distrofias musculares",
      "Hipocalemia / hipomagnesemia",
      "Hipotireoidismo",
      "Compressão medular (paraparesia)",
    ],
    exams: [
      "Força muscular por grupo (MRC 0-5)",
      "Reflexos tendinosos (↑ = neurônio motor superior; ↓ = inferior/miopatia)",
      "TC/RM crânio (AVC)",
      "RM de coluna (compressão medular)",
      "CPK, aldolase, LDH (miopatia/miosite)",
      "Eletrólitos, TSH",
      "ENMG (neuropatia, miopatia, SNM)",
      "Anticorpos anti-AChR (miastenia)",
    ],
    conduct: `1. AVC: protocolo código AVC, TC urgente, janela trombolítica
2. Compressão medular: RM urgente + dexametasona + cirurgia se indicado
3. GBS: IVIG 0,4g/kg/dia × 5 ou plasmaférese; regra 20-30-40 para IOT
4. Miastenia: piridostigmina + crise (IVIG/plasmaférese + IOT se necessário)
5. Miosite: prednisona + azatioprina
6. Hipocalemia grave: KCl IV com monitorização`,
    redFlags: [
      "Fraqueza + disfagia + voz nasal (miastenia/GBS — risco de apneia)",
      "Fraqueza + dor lombar + distúrbio esfincteriano (cauda equina/medula)",
      "Paraparesia de instalação rápida",
      "CVF < 20 mL/kg (critério de IOT no GBS)",
    ],
    guideline: "AAN / ABN 2023",
  },
  {
    id: "dor-cabeca-aguda",
    symptom: "Cefaleia de Início Recente",
    hypotheses: [
      "Cefaleia primária (enxaqueca, tensional, em salvas)",
      "Hemorragia subaracnóidea (cefaleia trovão — excluir primeiro)",
      "Meningite / encefalite",
      "Hipertensão intracraniana (idiopática, tumor, trombose venosa)",
      "Arterite de células gigantes (> 50 anos + VSH elevado)",
      "AVC / TIA",
      "Sinusite aguda",
      "Crise hipertensiva encefalopatia",
    ],
    exams: [
      "TC crânio sem contraste (excluir HSA, sangramento)",
      "Punção lombar com xantocromia (se TC negativa + suspeita de HSA)",
      "RM crânio com venografia (trombose venosa)",
      "Fundo de olho (papiledema = HIC)",
      "VHS + PCR (arterite temporal?)",
      "PA (crise hipertensiva)",
    ],
    conduct: `1. Cefaleia trovão (onset < 1 min, 'pior da vida'): TC urgente → PL se negativa
2. Meningismo: ATB + dexametasona IV imediato (antes de TC se instável)
3. Papiledema: RM urgente (massa? trombose venosa?)
4. Arterite temporal: prednisona 1mg/kg imediato (antes da biópsia — previne cegueira)
5. Enxaqueca: sumatriptano + AINE + antiemétic
6. NEVER: dar forte analgésico e dispensar sem investigação se red flags`,
    redFlags: [
      "Cefaleia trovão (pior dor da vida, < 1 min)",
      "Cefaleia + febre + rigidez de nuca",
      "Cefaleia progressiva em semanas com neurológico",
      "Início após esforço/tosse/sexo em > 50 anos",
      "Cefaleia + papiledema",
    ],
    guideline: "AAN / SBN 2023",
  },
  {
    id: "choro-excessivo-lactente",
    symptom: "Choro Excessivo no Lactente (< 3 meses)",
    hypotheses: [
      "Cólica do lactente (diagnóstico de exclusão — regra dos 3s)",
      "Fome / sucção ineficaz",
      "Intolerância à proteína do leite de vaca (IPLV)",
      "Refluxo gastroesofágico",
      "Otite média aguda",
      "Invaginação intestinal (episódico + vômitos)",
      "Fratura / maus-tratos",
      "Hérnia encarcerada",
      "Torção do cabelo em dedo/pênis (tourniquet syndrome)",
    ],
    exams: [
      "Exame físico completo (fonte de dor? hérnia? trauma?)",
      "Otoscopia",
      "Inspeção genital (tourniquet syndrome)",
      "US abdome se episódico + vômitos (invaginação)",
      "RX de esqueleto se trauma não acidental suspeito",
      "Glicemia (hipoglicemia neonatal)",
    ],
    conduct: `1. Exame físico completo para excluir causas orgânicas ANTES de diagnosticar cólica
2. Cólica: orientar pais (autolimitada até 3-4 meses), técnicas de conforto, evitar estímulos excessivos
3. IPLV: dieta de exclusão na mãe (aleitamento) ou fórmula extensamente hidrolisada
4. Invaginação: US + enema pneumático (redução) + cirurgia se falha
5. Maus-tratos: notificar conselho tutelar + RX esqueleto
6. Tourniquet: remoção imediata do cabelo`,
    redFlags: [
      "Choro + abdome distendido + vômitos biliosos (obstrução)",
      "Choro episódico em crises + posição de defesa + sangue nas fezes (invaginação)",
      "Choro + palidez + hipoatividade (sepse/intoxicação)",
      "Achados de maus-tratos",
    ],
    guideline: "AAP / SBP 2023",
  },
  {
    id: "epistaxe",
    symptom: "Epistaxe (Sangramento Nasal)",
    hypotheses: [
      "Epistaxe anterior idiopática (plexo de Kiesselbach — 90%)",
      "Traumatismo nasal / manipulação digital",
      "Mucosa ressecada (clima seco, ar condicionado)",
      "Hipertensão arterial (fator agravante, não causa primária)",
      "Anticoagulação (varfarina, DOAC, AAS)",
      "Epistaxe posterior (plexo de Woodruff — 10%, grave)",
      "Coagulopatia / plaquetopenia",
      "Tumor nasal / angiofibroma (adolescente masculino)",
    ],
    exams: [
      "PA (crise hipertensiva?)",
      "Hemograma + coagulograma + plaquetas (epistaxe grave ou recorrente)",
      "INR (se anticoagulado)",
      "Nasofibroscopia (sangramento posterior ou suspeita de tumor)",
      "TC de face (tumor, trauma)",
    ],
    conduct: `1. Compressão digital da asa nasal por 10-15 min (cabeça inclinada para frente)
2. Descongestionante + anestésico local (oximetazolina)
3. Cauterização com nitrato de prata (ponto visível)
4. Tamponamento anterior (gaze com vaselina 48-72h)
5. Posterior: tamponamento posterior (cateter de Foley) ou cirurgia (ligadura/embolização)
6. Anticoagulado: avaliar reversão parcial se grave`,
    redFlags: [
      "Sangramento posterior (maciço, não controlável por frente)",
      "Epistaxe + instabilidade hemodinâmica",
      "Epistaxe recorrente unilateral em adolescente masculino (angiofibroma)",
      "Epistaxe + plaquetas < 20.000",
    ],
    guideline: "AAO-HNS / ABORL-CCF 2022",
  },
  {
    id: "proteinuria",
    symptom: "Proteinúria",
    hypotheses: [
      "Nefropatia diabética",
      "Glomerulonefrite primária (membranosa, GESF, lesão mínima)",
      "Nefropatia hipertensiva",
      "Nefropatia lúpica",
      "Nefropatia por IgA",
      "Amiloidose renal",
      "Proteinúria ortostática (benigna, jovens)",
      "Mieloma múltiplo (proteinúria de Bence-Jones)",
    ],
    exams: [
      "Razão proteína/creatinina urinária (RPC) em amostra isolada",
      "Proteinúria de 24h (se RPC alterada)",
      "EAS com sedimento (cilindros?)",
      "Creatinina, ureia, eletrólitos",
      "Albumina sérica",
      "Glicemia / HbA1c (nefropatia diabética?)",
      "FAN, anti-dsDNA, complemento (LES?)",
      "SPEP + imunofixação (mieloma?)",
    ],
    conduct: `1. RPC > 0,3 = proteinúria significativa; > 3,5 = faixa nefrótica
2. Iniciar IECA ou BRA (reduz proteinúria e progressão em qualquer nefropatia)
3. Nefropatia diabética: iSGLT-2 + IECA/BRA + finerenona
4. Síndrome nefrótica: biópsia renal + tratamento específico
5. Encaminhar nefrologia se: RPC > 1,0, TFG caindo, proteinúria sem causa óbvia`,
    redFlags: [
      "Proteinúria nefrótica + edema + hipoalbuminemia (síndrome nefrótica)",
      "Proteinúria + hematúria + cilindros (GN ativa — biópsia urgente)",
      "Proteinúria em gestante + HAS (pré-eclâmpsia)",
    ],
    guideline: "KDIGO / SBN 2024",
  },
  {
    id: "ganho-peso-rapido",
    symptom: "Ganho de Peso Rápido / Retenção Hídrica",
    hypotheses: [
      "Insuficiência cardíaca descompensada",
      "Síndrome nefrótica",
      "Cirrose hepática descompensada",
      "Hipotireoidismo",
      "Síndrome de Cushing",
      "Medicamentos (corticoide, BCC, AINE, glitazonas)",
      "Gravidez",
      "Linfedema",
    ],
    exams: [
      "Peso diário (ganho > 2kg/3 dias = sinal de alerta em IC)",
      "BNP/NT-proBNP",
      "Creatinina, ureia, proteinúria",
      "TGO/TGP, albumina (cirrose?)",
      "TSH",
      "Cortisol (Cushing?)",
      "Ecocardiograma (IC?)",
      "Teste de gravidez",
    ],
    conduct: `1. Pesar diariamente + controle do balanço hídrico
2. IC descompensada: furosemida IV 40-80mg + suspender líquidos
3. Cirrose + ascite: espironolactona + furosemida VO + restrição de sódio
4. Síndrome nefrótica: IECA/BRA + diurético + albumina IV se albumina < 2,5
5. Hipotireoidismo: levotiroxina
6. Suspender medicamentos causadores se possível`,
    redFlags: [
      "Ganho > 2kg/dia + ortopneia + crepitações (IC aguda)",
      "Anasarca + oligúria (síndrome nefrótica grave ou IC avançada)",
      "Ascite tensa + icterícia (cirrose descompensada)",
    ],
    guideline: "SBC / SBN 2023",
  },
  {
    id: "trauma-abdominal",
    symptom: "Trauma Abdominal",
    hypotheses: [
      "Trauma de baço (mais comum)",
      "Trauma hepático",
      "Trauma renal",
      "Ruptura de bexiga",
      "Trauma de mesentério / intestino delgado",
      "Trauma pancreático",
      "Trauma vascular (aorta, ilíacas)",
      "Trauma de pelve",
    ],
    exams: [
      "FAST (Focused Assessment Sonography in Trauma) — líquido livre?",
      "TC de abdome e pelve com contraste (padrão-ouro para estável)",
      "Hemograma, coagulograma, tipagem sanguínea",
      "Amilase/lipase (trauma pancreático?)",
      "Creatinina + EAS (trauma renal?)",
      "RX pelve (fratura pélvica?)",
    ],
    conduct: `1. ABCDE (ATLS): estabilização antes de qualquer imagem
2. FAST positivo + instável: laparotomia de emergência (não vai à TC)
3. FAST positivo + estável: TC abdome-pelve com contraste
4. Trauma esplênico estável grau I-III: conservador (UTI + repouso)
5. Trauma hepático estável: conservador ± embolização
6. Damage control surgery se tríade letal: packing + fechamento temporário
7. Ressuscitação hemostática: proporção 1:1:1 (CH:PFC:plaquetas)`,
    redFlags: [
      "FAST positivo + hipotensão refratária → cirurgia imediata",
      "Dor abdominal difusa + rigidez (peritonite)",
      "Pneumoperitônio no RX (perfuração visceral)",
      "Hematúria maciça + flanco (trauma renal grau IV-V)",
    ],
    guideline: "ATLS 10ª edição / EAST 2023",
  },
  {
    id: "dor-cervical",
    symptom: "Dor Cervical / Cervicalgia",
    hypotheses: [
      "Tensão muscular cervical (cervicalgia inespecífica — mais comum)",
      "Hérnia de disco cervical com radiculopatia",
      "Artrose cervical / espondilose",
      "Síndrome de whiplash (trauma)",
      "Meningismo (meningite — pescoço rígido + febre)",
      "Fratura cervical (C1-C2 — trauma)",
      "Tumor / metástase vertebral",
      "Artrite reumatoide (instabilidade C1-C2)",
    ],
    exams: [
      "RX cervical em 3 posições (fratura? alinhamento?)",
      "RM cervical: indicada se déficit neurológico, mielopatia, red flags",
      "TC cervical: trauma (fratura?)",
      "Hemograma, PCR, VHS (infecção/inflamação)",
      "EMG/ENMG: radiculopatia vs mielopatia",
    ],
    conduct: `1. Trauma + cervicalgia: imobilizar até descartar fratura (colar + RX/TC)
2. Febre + rigidez cervical: punção lombar + ATB (meningite)
3. Inespecífica: AINE + miorrelaxante + fisioterapia; sem imobilização prolongada
4. Radiculopatia: AINE + fisioterapia; cirurgia se déficit progressivo
5. Mielopatia (marcha instável + reflexos ↑): RM urgente + neurocirurgia`,
    redFlags: [
      "Trauma + cervicalgia (fratura até prova contrária)",
      "Febre + rigidez de nuca (meningite)",
      "Disfagia + disfonia + massa cervical (tumor)",
      "Paraparesia + hiperreflexia (mielopatia cervical)",
    ],
    guideline: "AAN / NICE 2023",
  },
];
