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
];
