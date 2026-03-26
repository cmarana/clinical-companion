import { PrescriptionItem } from "./types";

export const byDrugClassItems: PrescriptionItem[] = [
  {
    id: "rx-classe-atb",
    title: "Antibióticos — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `PENICILINAS: Amoxicilina 500mg 8/8h, Ampicilina 1g EV 6/6h, Oxacilina 2g EV 4/4h
CEFALOSPORINAS: Cefalexina 500mg VO 6/6h, Ceftriaxona 1g EV 12/12h, Cefepime 2g EV 8/8h
CARBAPENÊMICOS: Meropenem 1g EV 8/8h, Ertapenem 1g EV 1x/dia
QUINOLONAS: Ciprofloxacino 500mg VO 12/12h, Levofloxacino 750mg 1x/dia
MACROLÍDEOS: Azitromicina 500mg 1x/dia, Claritromicina 500mg 12/12h
AMINOGLICOSÍDEOS: Gentamicina 5mg/kg/dia, Amicacina 15mg/kg/dia
GLICOPEPTÍDEOS: Vancomicina 15-20mg/kg EV 12/12h
LINCOSAMIDAS: Clindamicina 600mg EV 6/6h
NITROIMIDAZÓIS: Metronidazol 500mg EV/VO 8/8h`,
    notes: "Sempre coletar culturas ANTES do ATB quando possível.",
  },
  {
    id: "rx-classe-analgesicos",
    title: "Analgésicos — Doses Rápidas",
    type: "Por Classe de Medicamento",
    prescription: `NÃO OPIOIDES:
Dipirona: 500mg-1g EV/VO 6/6h
Paracetamol: 750mg VO 6/6h (máx 4g/dia)

AINEs:
Cetoprofeno: 100mg EV 12/12h
Diclofenaco: 75mg IM (dose única)
Ibuprofeno: 400-600mg VO 8/8h
Tenoxicam: 20mg EV 1x/dia

OPIOIDES FRACOS:
Tramadol: 50-100mg EV/VO 8/8h
Codeína: 30mg VO 6/6h

OPIOIDES FORTES:
Morfina: 2-4mg EV lento (titular)
Fentanil: 50-100mcg EV
Nalbufina: 10mg EV/IM 4/6h`,
    warnings: "AINEs: evitar em DRC, idoso, sangramento GI. Opioides: monitorar FR e SpO2.",
  },
  {
    id: "rx-classe-aines",
    title: "AINEs — Indicações e Cuidados",
    type: "Por Classe de Medicamento",
    prescription: `DOSES:
Cetoprofeno 100mg EV 12/12h (máx 300mg/dia)
Diclofenaco 75mg IM dose única (NÃO repetir)
Ibuprofeno 400-600mg VO 8/8h
Tenoxicam 20mg EV 1x/dia
Naproxeno 250-500mg VO 12/12h
Nimesulida 100mg VO 12/12h (máx 15 dias)

CONTRAINDICAÇÕES:
- DRC (TFG <30)
- Úlcera péptica ativa
- Sangramento GI
- Idoso >65 anos (usar com cautela)
- Desidratação
- ICC descompensada
- 3º trimestre gestação
- Uso de anticoagulantes`,
    notes: "Associar Omeprazol 20mg VO se uso >5 dias. NÃO associar 2 AINEs.",
  },
  {
    id: "rx-classe-opioides",
    title: "Opioides — Doses e Equivalência",
    type: "Por Classe de Medicamento",
    prescription: `EQUIVALÊNCIA DE OPIOIDES (equipotência com Morfina 10mg EV):
Morfina 10mg EV = Morfina 30mg VO
Fentanil 100mcg EV = Morfina 10mg EV
Tramadol 100mg EV ≈ Morfina 3-4mg EV
Codeína 200mg VO ≈ Morfina 30mg VO
Nalbufina 10mg EV ≈ Morfina 10mg EV
Metadona 3mg VO ≈ Morfina 30mg VO

EFEITOS ADVERSOS: náusea, constipação, sedação, prurido, depressão respiratória
ANTAGONISTA: Naloxona 0,4mg EV (início 1-2min, repetir a cada 2-3min)`,
    warnings: "Ter Naloxona disponível. Monitorar FR (alerta se <12irpm).",
    guideline: "SBA",
  },
  {
    id: "rx-classe-antiemeticos",
    title: "Antieméticos",
    type: "Por Classe de Medicamento",
    prescription: `Ondansetrona: 4-8mg EV 8/8h (menor sedação, 1ª escolha)
Metoclopramida: 10mg EV 8/8h (procinético)
Dimenidrinato: 50mg EV 8/8h (vertigem associada)
Bromoprida: 10mg EV 8/8h (similar metoclopramida)
Clorpromazina: 12,5-25mg EV/IM (vômitos refratários)
Dexametasona: 4-8mg EV (adjuvante, pós-QT)
Escopolamina: 20mg EV (cólica + antiemético)`,
    notes: "Metoclopramida: risco de distonia aguda → tratar com Biperideno 2mg EV.",
  },
  {
    id: "rx-classe-anticonv",
    title: "Anticonvulsivantes",
    type: "Por Classe de Medicamento",
    prescription: `EMERGÊNCIA:
Diazepam: 10mg EV lento (0,15-0,2mg/kg)
Midazolam: 10mg IM ou 0,2mg/kg EV

MANUTENÇÃO:
Fenitoína: ataque 20mg/kg EV → 100mg VO 8/8h
Valproato: ataque 40mg/kg EV → 500mg VO 12/12h
Fenobarbital: ataque 20mg/kg EV → 100mg VO 1x/dia
Levetiracetam: 500-1500mg VO/EV 12/12h
Carbamazepina: 200-400mg VO 12/12h (NÃO usar na emergência)
Lacosamida: 200mg EV 12/12h`,
    warnings: "Fenitoína: NÃO diluir em SG. Infundir com monitorização cardíaca.",
  },
  {
    id: "rx-classe-antihta",
    title: "Anti-hipertensivos",
    type: "Por Classe de Medicamento",
    prescription: `EMERGÊNCIA:
Nitroprussiato: 0,25-10mcg/kg/min EV
Nitroglicerina: 5-200mcg/min EV (SCA/EAP)
Esmolol: 500mcg/kg bolus → 50-200mcg/kg/min
Hidralazina: 5-20mg EV (gestante)

URGÊNCIA (VO):
Captopril: 25mg VO (pode repetir 30min)
Clonidina: 0,1-0,2mg VO (repetir 1h)

MANUTENÇÃO:
Losartana: 50-100mg 1x/dia
Enalapril: 10-20mg 12/12h
Anlodipino: 5-10mg 1x/dia
Hidroclorotiazida: 25mg 1x/dia`,
    warnings: "NÃO usar Nifedipino SL. NÃO reduzir PA >25% na 1ª hora.",
    guideline: "SBC 2020",
  },
  {
    id: "rx-classe-bronco",
    title: "Broncodilatadores",
    type: "Por Classe de Medicamento",
    prescription: `β2-AGONISTAS:
Salbutamol spray: 4-8 jatos com espaçador a cada 20 min
Salbutamol NBZ: 10-20 gotas + SF 3mL
Fenoterol NBZ: 8-10 gotas + SF 3mL
Terbutalina 0,25mg SC (se grave, sem acesso inalatório)

ANTICOLINÉRGICOS:
Ipratrópio spray: 2-4 jatos a cada 20 min
Ipratrópio NBZ: 20-40 gotas

XANTINAS (uso restrito):
Aminofilina: 5-6mg/kg EV em 20 min (diluir em SG5%)

ASSOCIAÇÕES INALATÓRIAS (manutenção):
Formoterol + Budesonida
Salmeterol + Fluticasona`,
    guideline: "GINA / GOLD 2024",
  },
  {
    id: "rx-classe-corticoides",
    title: "Corticóides — Doses e Equivalência",
    type: "Por Classe de Medicamento",
    prescription: `EQUIVALÊNCIA (em potência anti-inflamatória):
Hidrocortisona 20mg = Prednisona 5mg = Dexametasona 0,75mg = Metilprednisolona 4mg

DOSES COMUNS:
Hidrocortisona: 100-200mg EV (choque, anafilaxia, asma)
Prednisona: 40-60mg VO (asma, DPOC, autoimune)
Dexametasona: 4-10mg EV (edema cerebral, anti-inflamatório potente)
Metilprednisolona: 1g EV/dia por 3-5 dias (pulsoterapia)
Prednisolona: 1-2mg/kg VO (pediatria)

EFEITOS ADVERSOS: hiperglicemia, HAS, úlcera, imunossupressão, osteoporose`,
    notes: "Dexametasona: meia-vida longa (36-54h), melhor para dose única. Hidrocortisona: ação mineralocorticóide.",
  },
  {
    id: "rx-classe-insulinas",
    title: "Insulinas — Tipos e Protocolos",
    type: "Por Classe de Medicamento",
    prescription: `INSULINA REGULAR (correção e EV):
Correção SC: escala móvel
- 150-200: 2UI SC  |  201-250: 4UI SC  |  251-300: 6UI SC  |  >300: 8UI SC
Infusão EV: 0,1 UI/kg/h (CAD, estado hiperosmolar)

INSULINA NPH (basal):
Dose inicial: 0,2-0,4 UI/kg/dia dividido em 2/3 manhã e 1/3 noite

INSULINAS ANÁLOGAS:
Glargina (Lantus): 1x/dia (dose fixa)
Detemir (Levemir): 1-2x/dia
Lispro/Aspart: pré-prandial

HIPERGLICEMIA NO INTERNADO:
Basal-bolus: NPH 2x/dia + Regular pré-refeição + escala de correção
Alvo: 140-180mg/dL (internado) | <140mg/dL pré-prandial`,
    guideline: "SBD / ADA",
  },
  {
    id: "rx-classe-sedativos",
    title: "Sedativos e Hipnóticos",
    type: "Por Classe de Medicamento",
    prescription: `BENZODIAZEPÍNICOS:
Midazolam: 2-5mg EV (sedação) | BIC: 0,05-0,2mg/kg/h
Diazepam: 5-10mg EV (convulsão, ansiedade)
Lorazepam: 1-2mg VO/EV (ansiedade, abstinência)

ANESTÉSICOS:
Propofol: 1-2mg/kg bolus → 2-4mg/kg/h BIC
Cetamina: 1-2mg/kg EV (sedação dissociativa)
Etomidato: 0,3mg/kg EV (IOT — dose única)

NÃO-BZD:
Dexmedetomidina: 0,2-1,4mcg/kg/h BIC (sem depressão respiratória)
Zolpidem: 5-10mg VO (insônia)

ANTAGONISTA:
Flumazenil: 0,2mg EV (a cada 60s, máx 1mg)`,
    warnings: "Propofol: hipotensão. Cetamina: não deprime PA (boa em choque).",
    guideline: "SBA / AMIB",
  },
  {
    id: "rx-classe-vasoativas",
    title: "Drogas Vasoativas",
    type: "Por Classe de Medicamento",
    prescription: `VASOPRESSORES:
Noradrenalina: 0,1-2mcg/kg/min (1ª escolha no choque séptico)
Vasopressina: 0,03-0,04 UI/min (adjuvante, dose fixa)
Adrenalina: 0,1-1mcg/kg/min (anafilaxia, choque misto)
Fenilefrina: 0,5-6mcg/kg/min (vasoplégico puro)

INOTRÓPICOS:
Dobutamina: 2,5-20mcg/kg/min (choque cardiogênico)
Milrinona: 0,375-0,75mcg/kg/min (IC refratária)

VASODILATADORES:
Nitroprussiato: 0,25-10mcg/kg/min (emergência HAS)
Nitroglicerina: 5-200mcg/min (SCA, EAP)`,
    notes: "Noradrenalina: acesso central preferencial. Dobutamina: pode causar taquicardia.",
    guideline: "SSC 2021 / AMIB",
  },
  {
    id: "rx-classe-antifungicos",
    title: "Antifúngicos",
    type: "Por Classe de Medicamento",
    prescription: `AZÓLICOS:
Fluconazol: 400mg EV/VO ataque → 200mg/dia (candidíase, cripto)
Itraconazol: 200mg VO 12/12h
Voriconazol: 6mg/kg EV 12/12h (D1) → 4mg/kg 12/12h (aspergilose invasiva)

EQUINOCANDINAS:
Caspofungina: 70mg EV D1 → 50mg/dia (candidemia)
Anidulafungina: 200mg EV D1 → 100mg/dia
Micafungina: 100mg EV 1x/dia

POLIÊNICOS:
Anfotericina B desoxicolato: 0,5-1mg/kg/dia EV (nefrotóxica)
Anfotericina B lipossomal: 3-5mg/kg/dia EV (menos nefrotóxica)

TÓPICOS:
Nistatina: 100.000UI/mL — bochechos 4x/dia (candidíase oral)`,
    notes: "Fluconazol: 1ª escolha para Candida não-resistente. Equinocandinas: 1ª escolha para candidemia.",
    guideline: "IDSA / SBI",
  },
  {
    id: "rx-classe-diureticos",
    title: "Diuréticos",
    type: "Por Classe de Medicamento",
    prescription: `ALÇA:
Furosemida: 20-80mg EV bolus (1ª escolha no EAP/IC)
Furosemida BIC: 5-40mg/h (refratário)
Bumetanida: 1-2mg EV (alternativa)

TIAZÍDICOS:
Hidroclorotiazida: 25mg VO 1x/dia (HAS)
Clortalidona: 12,5-25mg VO 1x/dia (mais potente que HCTZ)
Indapamida: 1,5mg VO 1x/dia

POUPADORES DE K+:
Espironolactona: 25-100mg VO 1x/dia (IC, ascite, hiperaldosteronismo)
Amilorida: 5-10mg VO 1x/dia

OSMÓTICO:
Manitol 20%: 0,5-1g/kg EV em 20 min (HIC, edema cerebral)

INIBIDOR DE ANIDRASE CARBÔNICA:
Acetazolamida: 250mg VO 8/8h (glaucoma, alcalose metabólica)`,
    warnings: "Furosemida: monitorar K+, Mg2+. Espironolactona: risco de hipercalemia (NÃO associar com IECA + suplemento de K+).",
  },
  {
    id: "rx-classe-antiarritmicos",
    title: "Antiarrítmicos",
    type: "Por Classe de Medicamento",
    prescription: `CLASSE I (Bloqueio de Na+):
Lidocaína: 1-1,5mg/kg EV bolus → 1-4mg/min (TV)
Procainamida: 20-50mg/min EV (até 17mg/kg)

CLASSE II (Betabloqueadores):
Metoprolol: 5mg EV lento (até 15mg) — FA, TV
Esmolol: 500mcg/kg bolus → 50-200mcg/kg/min
Propranolol: 1mg EV lento (até 3mg)

CLASSE III (Bloqueio de K+):
Amiodarona: 150mg EV em 10 min → 1mg/min 6h → 0,5mg/min 18h
Sotalol: 1,5mg/kg EV em 5 min

CLASSE IV (Bloqueador de Ca2+):
Diltiazem: 0,25mg/kg EV em 2 min (FA com RVR)
Verapamil: 0,075-0,15mg/kg EV (TSV)

OUTROS:
Adenosina: 6mg EV rápido → 12mg se necessário (TSV)
Atropina: 0,5-1mg EV (bradicardia)`,
    guideline: "SBC / AHA",
  },
  {
    id: "rx-classe-anticoagulantes",
    title: "Anticoagulantes — Doses e Indicações",
    type: "Por Classe de Medicamento",
    prescription: `HEPARINA NÃO FRACIONADA:
Profilaxia: 5.000UI SC 8/8h ou 12/12h
Terapêutica: 80UI/kg bolus → 18UI/kg/h (ajustar por TTPa)

ENOXAPARINA (HBPM):
Profilaxia: 40mg SC 1x/dia
Terapêutica: 1mg/kg SC 12/12h

DOACs (Anticoagulantes Orais Diretos):
Rivaroxabana: TEP/TVP: 15mg 12/12h 21d → 20mg 1x/dia; FA: 20mg 1x/dia
Apixabana: TEP/TVP: 10mg 12/12h 7d → 5mg 12/12h; FA: 5mg 12/12h
Edoxabana: 60mg 1x/dia (30mg se ClCr 15-50)
Dabigatrana: FA: 150mg 12/12h (110mg se >80 anos)

WARFARINA:
Dose inicial: 5mg VO 1x/dia → ajustar por INR (alvo 2-3)
Sobreposição com Heparina por ≥5 dias + INR ≥2 por 24h`,
    notes: "DOACs: não precisa monitorar INR. CI se ClCr <15-30 e prótese valvar mecânica.",
    guideline: "SBC / ISTH",
  },
  {
    id: "rx-classe-tromboliticos",
    title: "Trombolíticos — Doses e Indicações",
    type: "Por Classe de Medicamento",
    prescription: `ALTEPLASE (rt-PA):
AVC isquêmico (<4,5h): 0,9mg/kg EV (máx 90mg)
  10% em bolus 1 min → 90% em 60 min

IAM com supra ST (se angioplastia >120min):
Alteplase: 15mg bolus → 0,75mg/kg em 30min (máx 50mg) → 0,5mg/kg em 60min (máx 35mg)

TEP maciço (instabilidade):
Alteplase 100mg EV em 2h

TENECTEPLASE:
IAM: dose por peso (30-50mg) EV bolus único
TEP: dose por peso (mesma do IAM)

ESTREPTOQUINASE (disponível SUS):
IAM: 1.500.000UI EV em 60 min
NÃO repetir (anticorpos)`,
    warnings: "Contraindicações absolutas: sangramento ativo, AVCh <3 meses, cirurgia <3 semanas, dissecção aórtica.",
    guideline: "SBC / AHA",
  },
  {
    id: "rx-classe-cristaloides-coloides",
    title: "Cristaloides e Coloides — Guia",
    type: "Por Classe de Medicamento",
    prescription: `CRISTALOIDES:
SF 0,9%: isotônico, Na 154mEq/L. Risco: acidose hiperclorêmica se grande volume
Ringer Lactato: mais fisiológico, Na 130, K 4, Ca 3. Preferido na ressuscitação
SG 5%: água livre. NÃO para ressuscitação. Usado para manutenção/diluição

COLOIDES:
Albumina 20%: hipoalbuminemia grave, SHR, PBE (1,5g/kg D1 + 1g/kg D3)
Albumina 5%: expansor em grandes queimados, paracentese de grande volume

SOLUÇÕES HIPERTÔNICAS:
NaCl 3%: hiponatremia grave, HIC
NaCl 20%: para preparo de NaCl 3%

RESSUSCITAÇÃO VOLÊMICA:
SF 0,9% ou RL 30mL/kg → reavaliar
Preferir Ringer Lactato (menos acidose)`,
    notes: "Coloides sintéticos (HES/Voluven) NÃO são mais recomendados na sepse (aumento de IRA e mortalidade).",
    guideline: "SSC 2021 / AMIB",
  },
  {
    id: "rx-classe-benzodiazepinicos",
    title: "Benzodiazepínicos — Doses e Indicações",
    type: "Por Classe de Medicamento",
    prescription: `MIDAZOLAM:
EV: 1-5mg lento (sedação); IM: 0,2mg/kg (convulsão/agitação)
Intranasal: 0,2mg/kg (pediatria)
Infusão: 0,05-0,2mg/kg/h

DIAZEPAM:
EV: 5-10mg lento (convulsão); VR: 0,5mg/kg (pediatria)
VO: 5-10mg 8/8h (ansiedade/relaxante)

CLONAZEPAM:
VO: 0,25-2mg 12/12h (epilepsia, pânico)
SL: 0,25-0,5mg (crise de pânico aguda)

LORAZEPAM:
VO: 1-2mg 8/8h; SL: 1-2mg (ansiedade aguda)
Preferido no hepatopata (não tem metabólitos ativos)

ANTAGONISTA: Flumazenil 0,2mg EV a cada 60s (máx 1mg)`,
    warnings: "Depressão respiratória dose-dependente. CI em miastenia gravis. Evitar em idosos e hepatopatas.",
    guideline: "ABP / SBA",
  },
  {
    id: "rx-classe-antidepressivos",
    title: "Antidepressivos — Guia Rápido PS",
    type: "Por Classe de Medicamento",
    prescription: `ISRS (1ª linha — NUNCA iniciar no PS, mas reconhecer):
Sertralina 50mg, Fluoxetina 20mg, Escitalopram 10mg

TRICÍCLICOS (cuidado — intoxicação grave):
Amitriptilina 25mg, Nortriptilina 25mg
Uso no PS: dor neuropática, cefaleia profilaxia, insônia

INTOXICAÇÃO POR TRICÍCLICO:
1. ECG: QRS >100ms = risco de arritmia
2. Bicarbonato 8,4% 1-2mEq/kg EV (proteção cardíaca)
3. NÃO usar Flumazenil (risco de convulsão)
4. Carvão ativado 1g/kg se <1h da ingestão
5. Monitorização contínua por 24h

SÍNDROME SEROTONINÉRGICA:
Tríade: alteração mental + hiperatividade autonômica + clônus
Tratamento: Ciproheptadina 12mg VO ataque → 4mg 8/8h`,
    warnings: "Intoxicação por tricíclico: QRS largo = Bicarbonato URGENTE. NÃO dar Flumazenil.",
    guideline: "ABP / AACT",
  },
  {
    id: "rx-classe-antidiabeticos",
    title: "Antidiabéticos Orais — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `BIGUANIDAS: Metformina 500-850mg VO 2-3x/dia (1ª linha DM2, CI se ClCr <30)
SULFONILUREIAS: Glicazida MR 30-120mg 1x/dia, Glibenclamida 5mg 1-3x/dia (risco hipoglicemia)
INIBIDORES DPP-4: Sitagliptina 100mg 1x/dia, Vildagliptina 50mg 12/12h (neutros no peso)
AGONISTAS GLP-1: Liraglutida 0,6-1,8mg SC 1x/dia, Semaglutida 0,25-1mg SC 1x/sem (perda de peso)
INIBIDORES SGLT2: Dapagliflozina 10mg 1x/dia, Empagliflozina 10-25mg 1x/dia (benefício cardio-renal)
TIAZOLIDINEDIONAS: Pioglitazona 15-45mg 1x/dia (CI em IC)
INIBIDORES α-GLUCOSIDASE: Acarbose 50-100mg 3x/dia (reduz pico pós-prandial)

SUS disponíveis: Metformina, Glibenclamida, Glicazida, Insulina NPH/Regular`,
    notes: "SGLT2i: reduz mortalidade CV e progressão DRC. GLP-1a: reduz eventos CV em DM2 com DCV.",
    guideline: "SBD / ADA 2024",
  },
  {
    id: "rx-classe-antihistaminicos",
    title: "Anti-histamínicos — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `1ª GERAÇÃO (sedativos — atravessam BHE):
Dexclorfeniramina 2mg VO 8/8h (Polaramine)
Prometazina 25mg VO ou IM 8/8h (Fenergan) — NÃO usar EV
Hidroxizina 25mg VO 8/8h (Hixizine)
Difenidramina 50mg VO ou EV 8/8h

2ª GERAÇÃO (não sedativos — preferidos):
Loratadina 10mg VO 1x/dia
Desloratadina 5mg VO 1x/dia
Cetirizina 10mg VO 1x/dia
Fexofenadina 180mg VO 1x/dia
Bilastina 20mg VO 1x/dia (jejum)

EMERGÊNCIA:
Dexclorfeniramina 5mg EV lento (anafilaxia — adjuvante)
Ranitidina 50mg EV (anti-H2 — adjuvante na anafilaxia)`,
    notes: "1ª geração: evitar em idosos (risco delirium, retenção urinária). 2ª geração: preferir sempre que possível.",
  },
  {
    id: "rx-classe-antiplaquetarios",
    title: "Antiplaquetários — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `AAS (ácido acetilsalicílico):
100mg 1x/dia (prevenção secundária)
200-300mg ataque (SCA)

CLOPIDOGREL:
75mg 1x/dia (manutenção)
300-600mg ataque (SCA, antes de angioplastia)

TICAGRELOR:
90mg 12/12h (SCA — superior ao clopidogrel)
Ataque: 180mg

PRASUGREL:
10mg 1x/dia (pós-angioplastia em SCA)
Ataque: 60mg
CI: >75 anos, <60kg, AVC/AIT prévio

DUPLA ANTIAGREGAÇÃO (DAPT):
AAS + Clopidogrel/Ticagrelor/Prasugrel
Duração: 12 meses pós-SCA, 6 meses pós-stent eletivo
Suspender 5-7 dias antes de cirurgia (exceto urgência)`,
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-classe-antiparasitarios",
    title: "Antiparasitários — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `ALBENDAZOL 400mg VO dose única:
Ascaris, Ancilostomídeo, Enterobius, Trichuris

IVERMECTINA 200mcg/kg VO dose única (jejum):
Estrongiloidíase, Escabiose, Pediculose, Oncocercose
Strongyloides: repetir em 14 dias

METRONIDAZOL 500mg VO 8/8h por 7-10 dias:
Giardíase, Amebíase invasiva

NITAZOXANIDA (Annita) 500mg VO 12/12h por 3 dias:
Giardíase, Criptosporidiose, Rotavírus (efeito modesto)

PRAZIQUANTEL 40-60mg/kg VO dose única:
Esquistossomose, Teníase

BENZNIDAZOL 5mg/kg/dia VO por 60 dias:
Doença de Chagas (fase aguda)

PIRIMETAMINA + SULFADIAZINA + Ácido folínico:
Toxoplasmose (gestante: Espiramicina 1g 8/8h)`,
    notes: "Ivermectina em JEJUM (absorção oral). Albendazol com alimentos gordurosos (melhor absorção).",
    guideline: "MS / OMS / SBI",
  },
  {
    id: "rx-classe-antirretrovirais-pep",
    title: "Antirretrovirais — PEP e TARV de Emergência",
    type: "Por Classe de Medicamento",
    prescription: `PEP (Profilaxia Pós-Exposição — até 72h):
Tenofovir 300mg + Lamivudina 300mg (TDF/3TC) — 1cp 1x/dia
+ Dolutegravir 50mg — 1cp 1x/dia
Duração: 28 dias

TARV INICIAL (1ª linha Brasil):
Tenofovir + Lamivudina + Dolutegravir (TLD)
1cp 1x/dia, via oral

PROFILAXIAS EM HIV:
CD4 <200: Sulfametoxazol-Trimetoprim 800/160mg 1x/dia (Pneumocistose)
CD4 <50: + Azitromicina 1200mg 1x/semana (MAC)
TB latente: Isoniazida 300mg + Piridoxina 50mg por 6-9 meses

INTERAÇÕES IMPORTANTES:
- Rifampicina: trocar DTG para 50mg 12/12h
- NÃO usar: carbamazepina, fenitoína com ARV
- Contraste iodado: avaliar função renal (TDF é nefrotóxico)`,
    guideline: "MS / PCDT HIV 2024 / OMS",
  },
  {
    id: "rx-classe-laxantes",
    title: "Laxantes — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `OSMÓTICOS (1ª linha):
Lactulose 15-30mL VO 12/12h (também usado para encefalopatia hepática)
Polietilenoglicol (PEG 4000) 1 sachê em 250mL água 1-2x/dia
Manitol 20% VO (preparo de colonoscopia)

ESTIMULANTES:
Bisacodil 5-10mg VO à noite (efeito em 6-12h)
Senna 12mg VO à noite
Picossulfato de sódio 5-10 gotas VO à noite

EMOLIENTES:
Docusato de sódio 100mg VO 12/12h (amolecedor fecal)
Óleo mineral 15-45mL VO à noite (NÃO em idosos — risco aspiração)

ENEMA (retal):
Fleet enema (fosfato de sódio) 1 frasco via retal SN
Glicerina supositório 1 unidade via retal SN

PROCINÉTICOS:
Prucaloprida 2mg VO 1x/dia (constipação crônica refratária)

Em uso de opioide: Naloxegol 25mg VO 1x/dia OU Metilnaltrexona SC`,
    notes: "PEG 4000: melhor perfil para uso crônico. Lactulose: pode causar flatulência. Estimulantes: não usar cronicamente.",
  },
  {
    id: "rx-classe-antifibrinoliticos",
    title: "Antifibrinolíticos e Hemostáticos — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `ÁCIDO TRANEXÂMICO:
EV: 1g em 10 min (trauma, HPP, hemoptise)
VO: 250-500mg 8/8h por 5 dias (menorragia, pós-extração dentária)
Tópico: em gaze embebida (epistaxe, ferida oral)

ÁCIDO AMINOCAPRÓICO:
4-5g EV na 1ª hora → 1g/h em BIC (até 30g/dia)
Alternativa ao tranexâmico

VITAMINA K (Fitomenadiona):
EV lento: 10mg em 100mL SF em 30 min (reversão de Varfarina / coagulopatia)
VO: 5-10mg (efeito em 24-48h)
IM: 1mg (RN ao nascer — profilaxia de doença hemorrágica)
NÃO dar vitamina K EV em bolus rápido (risco de anafilaxia)

PROTAMINA:
1mg neutraliza 100UI de heparina NF
Infundir lento (máx 50mg em 10 min)
Para HBPM: neutralização parcial (60-75%)

DESMOPRESSINA (DDAVP):
0,3mcg/kg EV em 30 min (hemofilia A leve, von Willebrand tipo 1, uremia)`,
    guideline: "ABHH / ISTH / SBC",
  },
  {
    id: "rx-classe-antipsicoticos",
    title: "Antipsicóticos — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `TÍPICOS (1ª geração):
- Haloperidol 5mg IM/EV (agitação aguda) — máx 20mg/dia
- Clorpromazina 25-50mg IM (sedação intensa)
- Levomepromazina 25mg VO/IM (sedação + analgesia)

ATÍPICOS (2ª geração):
- Olanzapina 10mg IM (agitação — NÃO associar com BZD IM)
- Risperidona 2mg VO (manutenção)
- Quetiapina 25-100mg VO (insônia/agitação leve)

CUIDADOS:
- Haloperidol EV: monitorar QTc (risco de Torsade de Pointes)
- Síndrome neuroléptica maligna: rigidez + hipertermia + rabdomiólise
- Acatisia: pode confundir com piora da agitação
- Distonia aguda: Prometazina 50mg IM ou Biperideno 2mg IM`,
    guideline: "ABP / APA",
  },
  {
    id: "rx-classe-antivirais",
    title: "Antivirais — Guia Rápido",
    type: "Por Classe de Medicamento",
    prescription: `HERPES/VARICELA:
- Aciclovir 200mg VO 5x/dia (herpes simples) ou 800mg VO 5x/dia (zoster)
- Aciclovir 10mg/kg EV 8/8h (encefalite herpética, varicela grave)
- Valaciclovir 1000mg VO 8/8h (zoster) — melhor biodisponibilidade oral

INFLUENZA:
- Oseltamivir 75mg VO 12/12h por 5 dias (iniciar <48h do início)
- Dose dobrada (150mg 12/12h) se paciente grave em UTI

HIV (PEP — profilaxia pós-exposição):
- Tenofovir 300mg + Lamivudina 300mg + Dolutegravir 50mg — 1x/dia por 28 dias
- Iniciar em até 72h da exposição

COVID-19 (alto risco):
- Nirmatrelvir/Ritonavir (se disponível) — iniciar <5 dias
- Dexametasona 6mg/dia por 10 dias (se O2-dependente)`,
    guideline: "MS / SBI / IDSA / OMS",
  },
  {
    id: "rx-classe-imunossupressores",
    title: "Imunossupressores — Guia no PS",
    type: "Por Classe de Medicamento",
    prescription: `CORTICOIDES EM ALTAS DOSES:
- Metilprednisolona 1g/dia EV por 3-5 dias (pulsoterapia — LES, vasculite, transplante)
- Prednisona 1-2mg/kg/dia VO (indução)

CUIDADOS NA EMERGÊNCIA com paciente IMUNOSSUPRIMIDO:
1. Limiar baixo para ATB empírico (febre = infecção até prova contrária)
2. Coletar culturas ANTES do ATB
3. Pesquisar infecções oportunistas: CMV, PCP, TB, fungos
4. NÃO suspender imunossupressão sem consultar especialista
5. Dose de estresse de corticóide se uso crônico (Hidrocortisona 100mg EV)

DROGAS COMUNS (informativo):
- Azatioprina, Micofenolato, Ciclosporina, Tacrolimus, Metotrexato
- Verificar interações medicamentosas antes de prescrever ATB/antifúngico`,
    notes: "Paciente imunossuprimido febril: tratar como neutropenia febril até resultado de hemograma.",
    guideline: "SBR / SBN / ABT / IDSA",
  },
];
