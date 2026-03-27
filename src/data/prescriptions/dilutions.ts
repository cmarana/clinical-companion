import { PrescriptionItem } from "./types";

export const dilutionItems: PrescriptionItem[] = [
  {
    id: "rx-dil-noradrenalina",
    title: "Noradrenalina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO PADRÃO:
Noradrenalina 4 ampolas (16mg/16mL) + SG 5% 234mL = 250mL
Concentração final: 64 mcg/mL

CÁLCULO DE DOSE:
Dose (mcg/kg/min) × Peso(kg) × 60 / Concentração(mcg/mL) = mL/h

Exemplo (70kg, dose 0,1mcg/kg/min):
0,1 × 70 × 60 / 64 = 6,6 mL/h

FAIXA DE DOSE: 0,05-2 mcg/kg/min
INÍCIO: 0,1 mcg/kg/min → titular a cada 5-10 min conforme PAM

SEM BOMBA:
Macrogotas/min = mL/h / 3
Ex: 6,6 mL/h ≈ 2 macrogotas/min`,
    warnings: "Acesso central preferencial. Se periférico: jelco calibroso, monitorar extravasamento. NÃO diluir em SF (degradação).",
    notes: "Em UPA sem bomba: preparar diluição mais concentrada e contar gotas. Verificar frequentemente.",
  },
  {
    id: "rx-dil-adrenalina",
    title: "Adrenalina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `PCR (bolus):
Adrenalina 1:10.000 → 1 ampola (1mg) + SF 0,9% 9mL = 10mL
Dose: 1mg (10mL) EV a cada 3-5 min

INFUSÃO CONTÍNUA:
Adrenalina 5 ampolas (5mg) + SG 5% 245mL = 250mL
Concentração: 20 mcg/mL
Dose: 0,01-0,5 mcg/kg/min

IM (anafilaxia):
Adrenalina 1:1000 (1mg/mL) — PURA, sem diluir
Dose adulto: 0,3-0,5mg IM na coxa
Dose pediátrica: 0,01mg/kg (máx 0,3mg)

NEBULIZAÇÃO (laringite):
Adrenalina 1:1000 — 3-5mL pura em NBZ`,
    warnings: "EV em bolus APENAS na PCR. IM pura na anafilaxia. NUNCA EV em bolus na anafilaxia.",
  },
  {
    id: "rx-dil-amiodarona",
    title: "Amiodarona — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `PCR (FV/TV refratária):
1. Amiodarona 300mg EV em bolus (pode ser pura)
2. Segunda dose: 150mg EV

TAQUIARRITMIA (com pulso):
Ataque: 150mg + SG 5% 100mL — correr em 10 min
Manutenção: 900mg + SG 5% 500mL — correr em 24h
- Fase rápida: 1mg/min por 6h (33,3 mL/h)
- Fase lenta: 0,5mg/min por 18h (16,7 mL/h)

PREPARO TOTAL 24H:
6 ampolas (900mg) + SG 5% 500mL
Fase 1: 33 mL/h por 6h
Fase 2: 17 mL/h por 18h`,
    warnings: "Diluir apenas em SG 5% (precipita em SF). Usar equipo com filtro se disponível.",
    notes: "Fotossensível — proteger da luz durante infusão prolongada.",
  },
  {
    id: "rx-dil-midazolam",
    title: "Midazolam — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `SEDAÇÃO BOLUS:
Midazolam 5mg/mL — 1-5mg EV lento (puro ou diluído em SF)
Titular: 1-2mg a cada 2-3 min

INFUSÃO CONTÍNUA (VM):
Midazolam 50mg (10mL) + SF 0,9% 90mL = 100mL
Concentração: 0,5mg/mL (500mcg/mL)
Dose: 0,05-0,2 mg/kg/h

Exemplo (70kg, dose 0,1mg/kg/h):
0,1 × 70 = 7mg/h = 14 mL/h

IM (convulsão/agitação):
Midazolam 5mg/mL — 0,2mg/kg IM (máx 10mg)

INTRANASAL (pediatria):
0,2-0,3mg/kg (máx 10mg) — seringa sem agulha na narina`,
    notes: "Antagonista: Flumazenil 0,2mg EV a cada 60s (máx 1mg).",
    warnings: "Risco de depressão respiratória. Ter material de via aérea pronto.",
  },
  {
    id: "rx-dil-fentanil",
    title: "Fentanil — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `BOLUS (analgesia/sedação):
Fentanil 50mcg/mL — diluir 1 ampola (10mL = 500mcg) em SF para 50mL
Concentração: 10mcg/mL
Dose: 50-100mcg EV lento (5-10mL)

INFUSÃO CONTÍNUA (VM):
Fentanil 2500mcg (5 ampolas) + SF 0,9% qsp 50mL em seringa
Concentração: 50mcg/mL
Dose: 1-3 mcg/kg/h

Exemplo (70kg, dose 2mcg/kg/h):
2 × 70 = 140mcg/h = 2,8 mL/h

IOT (sequência rápida):
2-3 mcg/kg EV em 30-60 segundos (antes do hipnótico)`,
    notes: "50-100× mais potente que Morfina. Início de ação EV: 1-2 min. Duração: 30-60 min.",
    warnings: "Rigidez torácica se infusão rápida em dose alta. Ter Naloxona disponível.",
  },
  {
    id: "rx-dil-insulina",
    title: "Insulina Regular EV — Diluição",
    type: "Diluição e Preparo",
    prescription: `CETOACIDOSE DIABÉTICA / ESTADO HIPEROSMOLAR:
Insulina Regular 100UI + SF 0,9% 100mL = 1 UI/mL
Desprezar os primeiros 50mL pelo equipo (saturar ligação ao plástico)

Dose: 0,1 UI/kg/h EV contínua
OU bolus 0,1UI/kg + infusão 0,1UI/kg/h

Exemplo (70kg):
Bolus: 7 UI EV → Manutenção: 7 UI/h = 7 mL/h

MONITORIZAÇÃO:
Glicemia capilar a cada 1h
Quando glicemia <250: associar SG 5% e reduzir insulina para 0,05UI/kg/h
Potássio sérico a cada 2h (repor se <5,3 ANTES da insulina)
Gasometria a cada 2-4h`,
    warnings: "NÃO iniciar insulina se K+ <3,3 (repor primeiro). Hipocalemia é a principal causa de morte na CAD.",
    guideline: "SBD / ADA",
  },
  {
    id: "rx-dil-bicarbonato",
    title: "Bicarbonato de Sódio — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Bicarbonato de Sódio 8,4% — 1mL = 1mEq

PCR (se acidose grave):
1mEq/kg EV em bolus

ACIDOSE METABÓLICA GRAVE (pH <7,1):
Déficit de HCO3 = 0,3 × Peso × (HCO3 desejado - HCO3 atual)
Repor 50% do déficit em 4-6h
Diluir em SG 5% ou água destilada (1:1)

HIPERCALEMIA GRAVE:
50mEq (50mL) EV em 5-10 min

NÃO MISTURAR COM:
- Cálcio (precipita)
- Adrenalina (inativa)
- Dopamina`,
    warnings: "NÃO usar de rotina na PCR. Indicar apenas se acidose documentada ou hipercalemia.",
    notes: "Solução hipertônica — usar acesso calibroso. Risco de alcalose metabólica se uso excessivo.",
  },
  {
    id: "rx-dil-kcl",
    title: "Cloreto de Potássio (KCl) — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: KCl 19,1% — 10mL = 25,6 mEq de K+

REPOSIÇÃO EV:
K+ 3,0-3,5: KCl 40mEq + SF 0,9% 500mL — correr em 4-6h
K+ 2,5-3,0: KCl 60-80mEq dividido em 2 etapas
K+ <2,5 (grave): KCl 40mEq + SF 250mL — correr em 2-4h (UTI, monitorização)

VELOCIDADE MÁXIMA: 20mEq/h (periférico) ou 40mEq/h (central com monitor)
CONCENTRAÇÃO MÁXIMA: 40mEq/L (periférico) ou 60mEq/L (central)

REPOSIÇÃO ORAL:
KCl xarope 6% — 15-30mL VO 8/8h
Slow-K 600mg — 1-2cp VO 8/8h`,
    warnings: "NUNCA em bolus EV (causa parada cardíaca). Sempre diluir. Monitorar ECG se K+ <2,5 ou reposição rápida.",
  },
  {
    id: "rx-dil-mgso4",
    title: "Sulfato de Magnésio (MgSO4) — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: MgSO4 50% — 10mL = 5g = 40mEq

ECLÂMPSIA/PRÉ-ECLÂMPSIA (Zuspan):
Ataque: MgSO4 4g + SF 0,9% 100mL EV em 20 min
Manutenção: MgSO4 1-2g/h em BIC (10g + SF 490mL = 500mL → 50-100mL/h)

ASMA GRAVE:
MgSO4 2g + SF 0,9% 100mL EV em 20 min

TORSADES DE POINTES:
MgSO4 2g EV em 5-10 min

HIPOMAGNESEMIA:
MgSO4 2-4g + SF 0,9% 250mL EV em 2-4h

MONITORIZAÇÃO:
Reflexo patelar (abolido = intoxicação)
FR >16/min
Diurese >25mL/h
Antídoto: Gluconato de Cálcio 10% 10mL EV lento`,
    warnings: "Abolição do reflexo patelar = sinal precoce de intoxicação. Ter Gluconato de Cálcio pronto.",
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-dil-dopamina",
    title: "Dopamina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Dopamina 5mg/mL — 10mL = 50mg

DILUIÇÃO:
5 ampolas (250mg) + SG 5% 200mL = 250mL
Concentração: 1000 mcg/mL (1mg/mL)

EFEITOS POR DOSE:
<5 mcg/kg/min: efeito "renal" (vasodilatação renal) — controverso
5-10 mcg/kg/min: efeito β1 (inotrópico)
>10 mcg/kg/min: efeito α (vasopressor)

CÁLCULO:
Dose (mcg/kg/min) × Peso × 60 / 1000 = mL/h

Exemplo (70kg, 10mcg/kg/min):
10 × 70 × 60 / 1000 = 42 mL/h`,
    notes: "Dopamina é 2ª linha. Noradrenalina é preferida no choque séptico. Dopamina útil em bradicardia.",
    warnings: "Risco de taquiarritmia em doses altas. Acesso central preferencial.",
    guideline: "SSC 2021",
  },
  {
    id: "rx-dil-dobutamina",
    title: "Dobutamina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Dobutamina 12,5mg/mL — 20mL = 250mg

DILUIÇÃO:
1 ampola (250mg) + SG 5% 230mL = 250mL
Concentração: 1000 mcg/mL (1mg/mL)

DOSE: 2,5-20 mcg/kg/min

CÁLCULO:
Dose (mcg/kg/min) × Peso × 60 / 1000 = mL/h

Exemplo (70kg, 5mcg/kg/min):
5 × 70 × 60 / 1000 = 21 mL/h`,
    notes: "Inotrópico positivo puro. Indicada no choque cardiogênico (PAS >90 com sinais de baixo débito).",
    warnings: "Pode causar taquicardia. Contraindicada se obstrução dinâmica da via de saída.",
    guideline: "SBC / AMIB",
  },
  {
    id: "rx-dil-propofol",
    title: "Propofol — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: Propofol 10mg/mL — frasco 20mL (200mg) ou 50mL (500mg)

USO PURO (não diluir):
Bolus IOT: 1-2mg/kg EV lento (70kg = 70-140mg = 7-14mL)
Manutenção: 2-4mg/kg/h em BIC

Em seringa de 50mL:
Propofol 10mg/mL puro → 50mL = 500mg

Exemplo (70kg, 3mg/kg/h):
3 × 70 = 210mg/h = 21 mL/h

RASS alvo: -2 a -3 (ajustar conforme resposta)`,
    warnings: "Hipotensão dose-dependente. NÃO usar em choque. Trocar equipo a cada 12h (meio de cultura). Síndrome da infusão do Propofol se uso prolongado >48h em doses altas.",
    notes: "Contém lipídeos — considerar no balanço calórico. 1,1 kcal/mL.",
  },
  {
    id: "rx-dil-nitroprussiato",
    title: "Nitroprussiato de Sódio — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Nitroprussiato 50mg — pó liofilizado

DILUIÇÃO:
1. Reconstituir com diluente próprio (2mL)
2. Diluir em SG 5% 248mL = 250mL
Concentração: 200 mcg/mL

DOSE: 0,25-10 mcg/kg/min (iniciar 0,25)

CÁLCULO:
Dose (mcg/kg/min) × Peso × 60 / 200 = mL/h

Exemplo (70kg, 1mcg/kg/min):
1 × 70 × 60 / 200 = 21 mL/h

PROTEGER DA LUZ (fotossensível) — usar equipo e frasco opaco`,
    warnings: "Intoxicação por cianeto se >72h ou dose >4mcg/kg/min prolongada. Monitorar tiocianato sérico.",
    guideline: "SBC",
  },
  {
    id: "rx-dil-nitroglicerina",
    title: "Nitroglicerina EV — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Nitroglicerina 5mg/mL — 10mL = 50mg

DILUIÇÃO:
1 ampola (50mg) + SG 5% 240mL = 250mL
Concentração: 200 mcg/mL

DOSE: 5-200 mcg/min (NÃO é por kg)

CÁLCULO:
Dose (mcg/min) × 60 / 200 = mL/h
OU Dose (mcg/min) / 3,33 = mL/h

Exemplo (10mcg/min):
10 × 60 / 200 = 3 mL/h

Iniciar: 5mcg/min → titular a cada 5 min conforme PA
Indicações: SCA, EAP, emergência hipertensiva`,
    warnings: "NÃO usar se PAS <100 ou uso de sildenafil <24h. Usar equipo sem PVC (absorve a droga).",
    notes: "Usar equipo de polietileno (não PVC) — PVC absorve até 80% da nitroglicerina.",
  },
  {
    id: "rx-dil-heparina",
    title: "Heparina Não Fracionada — Diluição",
    type: "Diluição e Preparo",
    prescription: `FRASCO: Heparina 5.000UI/mL — 5mL = 25.000UI

ANTICOAGULAÇÃO PLENA:
25.000UI (5mL) + SF 0,9% 245mL = 250mL
Concentração: 100 UI/mL

Bolus: 80UI/kg EV (ex: 70kg = 5.600UI = 56mL)
Manutenção: 18UI/kg/h (ex: 70kg = 1.260UI/h = 12,6 mL/h)

CONTROLE:
TTPa a cada 6h (alvo: 1,5-2,5x o controle)
Ajustar conforme nomograma institucional

PROFILAXIA TVP:
Heparina 5.000UI SC 8/8h ou 12/12h

ANTAGONISTA:
Protamina 1mg para cada 100UI de Heparina (nas últimas 2h)`,
    warnings: "Monitorar TTPa e plaquetas (risco de HIT — trombocitopenia induzida por heparina).",
    guideline: "SBC / ISTH",
  },
  {
    id: "rx-dil-gluconato-calcio",
    title: "Gluconato de Cálcio — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Gluconato de Cálcio 10% — 10mL = 93mg Ca2+ elementar

HIPERCALEMIA (estabilizar membrana):
10mL EV em 2-3 min (pode repetir em 5 min se ECG persistir alterado)
NÃO misturar com Bicarbonato na mesma via

HIPOCALCEMIA SINTOMÁTICA:
1-2 ampolas (10-20mL) + SF 0,9% 100mL EV em 10-20 min
Manutenção: 6 ampolas + SF 0,9% 500mL EV em 24h

INTOXICAÇÃO POR MAGNÉSIO:
10mL EV lento (antídoto)

INTOXICAÇÃO POR BLOQUEADOR DE CANAL DE CÁLCIO:
10-20mL EV em bolus → repetir a cada 5 min (até 30mL)`,
    warnings: "NUNCA infundir rápido (risco de bradicardia/assistolia). Não misturar com Bicarbonato (precipita).",
  },
  {
    id: "rx-dil-manitol",
    title: "Manitol — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: Manitol 20% — 250mL (50g)

HIPERTENSÃO INTRACRANIANA:
0,25-1g/kg EV em 15-20 min
70kg: 17,5-70g = 87,5-350mL de Manitol 20%
Dose usual: 250mL de Manitol 20% EV em 20 min
Repetir a cada 6-8h conforme PIC/clínica

EDEMA CEREBRAL (TCE, AVC):
0,5-1g/kg EV rápido (15-20 min)
Osmolaridade sérica alvo: <320 mOsm/L

GLAUCOMA AGUDO:
1-2g/kg EV em 30-60 min`,
    warnings: "Monitorar osmolaridade sérica (manter <320). Risco de IRA se uso prolongado. Contraindicado se anúria.",
    notes: "Efeito rebote: pode piorar edema se barreira hematoencefálica rompida. Preferir salina hipertônica em alguns casos.",
  },
  {
    id: "rx-dil-furosemida-bic",
    title: "Furosemida em BIC — Diluição",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Furosemida 10mg/mL — 2mL = 20mg

INFUSÃO CONTÍNUA (IC refratária):
Furosemida 250mg (12,5 ampolas) + SF 0,9% qsp 250mL
Concentração: 1mg/mL
Dose: 5-40mg/h (5-40 mL/h)

Iniciar: bolus 40-80mg EV → BIC 5-10mg/h
Titular conforme diurese (alvo: 100-200mL/h)

Alternativa sem bomba:
Furosemida 20-40mg EV a cada 2-4h

MONITORAR:
K+ sérico 6/6h (repor agressivamente)
Mg2+ sérico
Creatinina
Peso diário e balanço hídrico`,
    notes: "BIC é mais eficaz que bolus intermitente na IC grave. Menos ototoxicidade.",
    guideline: "SBC / ESC",
  },
  {
    id: "rx-dil-terlipressina",
    title: "Terlipressina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Terlipressina 1mg — pó liofilizado

HDA VARICOSA:
Bolus: 2mg EV (ou 1mg se <50kg)
Manutenção: 1mg EV 4/4h por 2-5 dias
NÃO precisa diluir para bolus (reconstituir com 5mL diluente)

SÍNDROME HEPATORRENAL:
1mg EV 4/4h → titular até 2mg 4/4h (máx 12mg/dia)
Associar Albumina 20-40g/dia EV
Duração: até melhora da creatinina ou máx 14 dias`,
    warnings: "Contraindicada: doença coronariana, insuficiência vascular periférica. Monitorar isquemia.",
    guideline: "SBG / EASL",
  },
  {
    id: "rx-dil-ketamina",
    title: "Ketamina / Cetamina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Cetamina 50mg/mL — 10mL = 500mg

IOT (sequência rápida):
1-2mg/kg EV em 60 segundos
Ex (70kg): 70-140mg = 1,4-2,8mL puro

SEDAÇÃO PROCEDURAL:
0,5-1mg/kg EV (diluir em 10mL SF)
OU 4-5mg/kg IM (sem diluir)

ANALGESIA (subdissociativa):
0,1-0,3mg/kg EV em 10 min (diluir em SF 100mL)

INFUSÃO CONTÍNUA (analgesia):
Cetamina 500mg + SF 0,9% 250mL = 2mg/mL
Dose: 0,1-0,5mg/kg/h

BRONCOESPASMO REFRATÁRIO:
0,5-1mg/kg EV → infusão 0,5mg/kg/h`,
    notes: "Mantém drive respiratório e PA. Ideal no choque e broncoespasmo. Associar Midazolam para evitar efeitos dissociativos.",
    warnings: "Emergência laríngea: ter aspirador pronto. Pode causar hipertensão e taquicardia. CI relativa em HIC.",
  },
  {
    id: "rx-dil-rocuronio",
    title: "Rocurônio — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Rocurônio 10mg/mL — 5mL = 50mg

IOT (sequência rápida):
Dose: 1,2mg/kg EV em bolus
Ex (70kg): 84mg = 8,4mL (puro)
Início de ação: 60-90 segundos
Duração: 30-45 min

IOT (dose convencional):
0,6mg/kg EV (início em 90-120s)

INFUSÃO CONTÍNUA (BNM em VM):
Rocurônio 500mg + SF 0,9% qsp 50mL = 10mg/mL
Dose: 0,3-0,6mg/kg/h (avaliar com TOF)

ANTAGONISTA:
Sugammadex 2-4mg/kg EV (reversão imediata)
OU Neostigmina 0,04mg/kg + Atropina 0,02mg/kg`,
    notes: "Sugammadex reverte em 2-3 min (porém caro e nem sempre disponível no SUS).",
    warnings: "Sem efeito analgésico ou sedativo. SEMPRE associar com sedação adequada.",
  },
  {
    id: "rx-dil-vasopressina",
    title: "Vasopressina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Vasopressina 20UI/mL — 1mL

PCR (alternativa à Adrenalina — não mais recomendada AHA 2020):
40UI EV dose única (substituindo 1ª ou 2ª dose de Adrenalina)

CHOQUE SÉPTICO (associada à Noradrenalina):
Vasopressina 20UI + SF 0,9% 100mL = 0,2UI/mL
Dose fixa: 0,03-0,04UI/min (9-12mL/h)
NÃO titular — dose fixa

DIABETES INSIPIDUS:
DDAVP (Desmopressina) — diferente da Vasopressina

HDA VARICOSA (alternativa à Terlipressina):
0,2-0,4UI/min EV`,
    notes: "No choque séptico: associar à Noradrenalina quando dose ≥0,25mcg/kg/min. Permite reduzir dose de Noradrenalina.",
    warnings: "Dose fixa — NÃO titular como outros vasopressores. Risco de isquemia mesentérica e digital.",
    guideline: "SSC 2021",
  },
  {
    id: "rx-dil-atropina",
    title: "Atropina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Atropina 0,25mg/mL — 1mL OU 0,5mg/mL — 1mL

BRADICARDIA SINTOMÁTICA:
0,5mg EV a cada 3-5 min (máx 3mg total = 6 ampolas de 0,5mg)
Dose mínima: 0,5mg (doses <0,5mg podem causar bradicardia paradoxal)

PRÉ-IOT (pediatria):
0,02mg/kg EV (mín 0,1mg, máx 0,5mg)

INTOXICAÇÃO POR ORGANOFOSFORADO:
Atropina 2-4mg EV a cada 5-10 min (doses altas!)
Titular até: secreções secas, FC >80, PA estável
Podem ser necessárias dezenas de ampolas

BRADICARDIA NA PCR:
1mg EV a cada 3-5 min (máx 3mg)`,
    warnings: "Ineficaz em BAV 2º grau Mobitz II e BAV 3º grau (indicar marcapasso). Dose <0,5mg = bradicardia paradoxal.",
    guideline: "AHA / ACLS",
  },
  {
    id: "rx-dil-lidocaina-ev",
    title: "Lidocaína EV — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Lidocaína 2% sem vasoconstritor — 20mg/mL — 5mL = 100mg

ARRITMIA (TV estável — alternativa à Amiodarona):
Bolus: 1-1,5mg/kg EV (70kg = 70-105mg = 3,5-5mL)
Manutenção: 1-4mg/min
Diluição: Lidocaína 2g + SG 5% 500mL = 4mg/mL
Dose 2mg/min = 30mL/h

PRÉ-IOT (reduzir PIC):
1,5mg/kg EV 3 min antes da laringoscopia

ANALGESIA EV (adjuvante):
Bolus 1,5mg/kg em 10 min → infusão 1-2mg/kg/h

DOSE MÁXIMA: 4,5mg/kg (sem adrenalina) ou 7mg/kg (com adrenalina)`,
    warnings: "Sinais de intoxicação: zumbido, gosto metálico, parestesias periorais, convulsão. Antídoto: Intralipid 20%.",
    guideline: "AHA / SBA",
  },
  {
    id: "rx-dil-salina-hipertonica",
    title: "Salina Hipertônica (NaCl 3%) — Preparo",
    type: "Diluição e Preparo",
    prescription: `PREPARO DE NaCl 3%:
NaCl 20% 75mL + SF 0,9% 425mL = 500mL de NaCl 3%
OU NaCl 20% 30mL + SF 0,9% 170mL = 200mL de NaCl 3%

HIPONATREMIA GRAVE SINTOMÁTICA (Na <120 + convulsão/rebaixamento):
NaCl 3% 150mL EV em 20 min (pode repetir 2x)
Alvo: elevar Na+ em 4-6 mEq/L nas primeiras 6h
Máximo: 8-10 mEq/L em 24h (risco de mielinólise pontina)

HIPERTENSÃO INTRACRANIANA (alternativa ao Manitol):
NaCl 3% 250mL EV em 15-20 min
OU NaCl 23,4% 30mL EV em acesso central em 15 min

MONITORAR:
Na+ sérico a cada 2-4h
Osmolaridade sérica (manter <320)`,
    warnings: "Correção rápida de Na+ causa MIELINÓLISE PONTINA (síndrome de desmielinização osmótica). Máx 8-10 mEq/24h.",
    guideline: "KDIGO / SBN",
  },
  {
    id: "rx-dil-fenilefrina",
    title: "Fenilefrina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Fenilefrina 10mg/mL — 1mL

BOLUS (hipotensão aguda — IOT, raquianestesia):
100-200mcg EV (diluir 1 ampola em 100mL SF → 100mcg/mL)
Dar 1-2mL EV lento

INFUSÃO CONTÍNUA:
Fenilefrina 10mg (1 ampola) + SF 0,9% 250mL = 40mcg/mL
Dose: 0,5-5 mcg/kg/min
Ex (70kg, 1mcg/kg/min): 70mcg/min = 105mL/h

USO: vasopressor α1 puro (sem efeito β)
Indicações: hipotensão com taquicardia, raquianestesia, FA com RVR`,
    notes: "α1 puro — aumenta PA sem aumentar FC. Útil quando taquicardia é problema.",
    warnings: "Bradicardia reflexa. Cuidado em coronariopatas (aumento da pós-carga).",
  },
  {
    id: "rx-dil-metilprednisolona",
    title: "Metilprednisolona — Pulsoterapia",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: Metilprednisolona 500mg ou 1g — pó liofilizado

PULSOTERAPIA (LES, vasculite, rejeição, mielite):
1g EV em 250mL SF 0,9% — infundir em 1-3h
Dose: 1g/dia por 3 dias consecutivos
OU 500mg/dia por 3-5 dias

ASMA GRAVE / DPOC:
Metilprednisolona 60-125mg EV 6/6h

CHOQUE REFRATÁRIO (controverso):
Hidrocortisona 50mg EV 6/6h (preferida ao invés de metilprednisolona)

PREPARO:
Reconstituir com diluente próprio → diluir em SF 0,9% 100-250mL
Infundir em 30-60 min (pulsoterapia em 1-3h)`,
    warnings: "Pulsoterapia: monitorar PA e FC durante infusão. Risco de arritmia se infusão rápida. Hiperglicemia.",
  },
  {
    id: "rx-dil-octreotida",
    title: "Octreotida — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AMPOLA: Octreotida 0,1mg/mL (100mcg/mL) — 1mL

HDA VARICOSA:
Bolus: 50mcg EV (0,5mL)
Manutenção: 50mcg/h em BIC por 3-5 dias
Diluição: 600mcg (6 ampolas) + SF 0,9% 250mL = ~2,3mcg/mL
Velocidade: ~21mL/h

FÍSTULA PANCREÁTICA / INTESTINAL:
100-250mcg SC 8/8h

HIPOGLICEMIA POR SULFONILURÉIA:
50mcg SC 6/6h (refratária à glicose)

SÍNDROME CARCINOIDE:
100-600mcg/dia SC divididos 8/8h`,
    notes: "Alternativa à Terlipressina na HDA varicosa (mais disponível que Terlipressina em algumas unidades).",
    guideline: "SBG / AASLD",
  },
  {
    id: "rx-dil-albumina",
    title: "Albumina — Indicações e Preparo",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: Albumina Humana 20% — frasco 50mL (10g)

PERITONITE BACTERIANA ESPONTÂNEA (PBE):
D1: 1,5g/kg EV
D3: 1g/kg EV

PARACENTESE DE GRANDE VOLUME (>5L):
6-8g de Albumina para cada litro retirado acima de 5L
Ex: retirou 8L → repor 6-8g × 3 = 18-24g = ~2 frascos

SÍNDROME HEPATORRENAL:
Albumina 20-40g/dia EV + Terlipressina

GRANDE QUEIMADO:
Após 24h de Parkland: Albumina 0,3-0,5mL/kg/%SCQ

INFUNDIR puro (não diluir) — via EV em 2-4h
Ou diluir em SF 0,9% se necessário`,
    warnings: "NÃO usar albumina como expansor volêmico de rotina. Indicações específicas.",
    guideline: "EASL / SBG",
  },
  {
    id: "rx-dil-dexmedetomidina",
    title: "Dexmedetomidina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Dexmedetomidina 2mL (200mcg) + SF 0,9% 48mL = 50mL
Concentração: 4 mcg/mL

DOSE:
Ataque: 1mcg/kg EV em 10 min (OPCIONAL — causa bradicardia/hipotensão)
Manutenção: 0,2-1,4 mcg/kg/h

Exemplo (70kg, dose 0,7mcg/kg/h):
0,7 × 70 / 4 = 12,25 mL/h

VANTAGENS:
- Sedação sem depressão respiratória
- Paciente "acordável" (cooperativo)
- Ideal para desmame de VM e extubação

CUIDADOS:
- Bradicardia e hipotensão (efeitos mais comuns)
- NÃO usar em bloqueio AV 2°/3° sem MP
- Usar com cautela em hipovolêmico`,
    guideline: "AMIB / SBA",
  },
  {
    id: "rx-dil-levosimendana",
    title: "Levosimendana — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Levosimendana 12,5mg/5mL + SG 5% 245mL = 250mL
Concentração: 0,05 mg/mL (50 mcg/mL)

DOSE:
Ataque: 6-12 mcg/kg EV em 10 min (OMITIR se hipotenso)
Manutenção: 0,05-0,2 mcg/kg/h por 24h

Exemplo (70kg, dose 0,1mcg/kg/h):
0,1 × 70 / 50 × 1000 = 0,14 mL/h → 8,4 mL/h

INDICAÇÕES:
- IC aguda descompensada (baixo débito)
- IC refratária a dobutamina
- Efeito persiste 7-10 dias após infusão

CUIDADOS:
- Hipotensão (omitir bolus se PAS <90)
- Arritmias (especialmente taquiarritmia)
- NÃO usar com outros inotrópicos EV simultaneamente (risco arritmia)`,
    guideline: "SBC / ESC / AMIB",
  },
  {
    id: "rx-dil-alteplase",
    title: "Alteplase (rtPA) — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AVC ISQUÊMICO (janela ≤4,5h):
0,9mg/kg (máx 90mg)
10% em bolus EV em 1 min → restante em BIC em 1h
Exemplo 70kg: 63mg total → 6,3mg bolus → 56,7mg em 1h

TEP MACIÇO:
100mg EV em 2h

IAM (se sem hemodinâmica para CATE):
15mg bolus → 0,75mg/kg em 30min (máx 50mg) → 0,5mg/kg em 60min (máx 35mg)

PREPARO:
Reconstituir 50mg em 50mL de água para injeção = 1mg/mL
Via EV exclusiva (não misturar)

CUIDADOS:
- Suspender heparina durante infusão no AVC
- PA <185/110 antes e <180/105 durante (AVC)
- Monitorizar sangramento ativo (neurológico, acesso, gengival)
- NÃO dar anticoagulante nas primeiras 24h pós-trombólise no AVC`,
    warnings: "Verificar TODOS os critérios de inclusão/exclusão antes de administrar. Protocolo institucional.",
    guideline: "AHA/ASA / SBC / ABN",
  },
  {
    id: "rx-dil-labetalol",
    title: "Labetalol — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `BOLUS:
Labetalol 20mg EV em 2 min → dobrar dose a cada 10 min
Sequência: 20mg → 40mg → 80mg → 80mg → 80mg (máx 300mg)

BIC:
Labetalol 200mg (40mL) + SF 0,9% 160mL = 200mL (1mg/mL)
Dose: 0,5-2mg/min → titular conforme PA

INDICAÇÕES:
- Emergência hipertensiva
- Dissecção de aorta (1ª escolha junto com esmolol)
- Pré-eclâmpsia (seguro na gestação)

CUIDADOS:
- Bradicardia, broncoespasmo (CI em asma/DPOC grave)
- Insuficiência cardíaca (reduzir dose)
- Monitorizar PA a cada 5 min durante titulação`,
    guideline: "SBC / AHA / ESC",
  },
  {
    id: "rx-dil-esmolol",
    title: "Esmolol — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Esmolol 2500mg/250mL (premix) = 10mg/mL
OU 5g em 500mL SG5% = 10mg/mL

DOSE:
Ataque: 500mcg/kg EV em 1 min
Manutenção: 50-300mcg/kg/min

Exemplo (70kg):
Ataque: 35mg (3,5mL) em 1 min
Manutenção 100mcg/kg/min: 0,1 × 70 × 60 / 10.000 = 42 mL/h

VANTAGENS:
- Meia-vida ultracurta (9 min) — fácil titular
- Ideal para: dissecção aorta, crise tireotóxica, FA rápida perioperatória

CUIDADOS:
- Bradicardia, hipotensão
- CI: asma grave, BAV 2°/3°, choque cardiogênico
- Extravasamento: necrose tecidual (via central preferível)`,
    guideline: "SBC / SBA / AMIB",
  },
  {
    id: "rx-dil-tranexamico",
    title: "Ácido Tranexâmico — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `TRAUMA (CRASH-2):
1g EV em 10 min → 1g EV em 8h (dentro de 3h do trauma)

HEMORRAGIA PÓS-PARTO:
1g EV em 10 min → repetir 1g após 30 min se persistir

HEMORRAGIA DIGESTIVA:
1g EV em 10 min (benefício controverso)

PREPARO:
Ácido Tranexâmico 1g (10mL) + SF 0,9% 100mL EV em 10 min
Para BIC: 1g em 500mL SF em 8h

CUIDADOS:
- Administrar LENTO (risco de hipotensão se rápido)
- NÃO usar >3h após trauma (pode aumentar mortalidade)
- Contraindicado em CID ativa com predomínio trombótico
- Eventos tromboembólicos são raros mas possíveis
- Custo baixo, disponível no SUS`,
    guideline: "CRASH-2 / WOMAN Trial / ATLS",
  },
  {
    id: "rx-dil-vancomicina",
    title: "Vancomicina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Vancomicina 500mg + SF 0,9% 100mL → infundir em 1h
Vancomicina 1g + SF 0,9% 200mL → infundir em 2h
Vancomicina 2g + SF 0,9% 400mL → infundir em 2-3h

Concentração máxima: 5mg/mL (para evitar flebite)

DOSE:
15-20mg/kg EV 12/12h (adulto com função renal normal)
Dose de ataque (grave): 25-30mg/kg EV (dose única)
Ajuste renal obrigatório (clearance de creatinina)

MONITORIZAÇÃO:
Vancocinemia (nível sérico vale): 15-20mcg/mL (infecção grave)
AUC/MIC alvo: 400-600 (método preferido atualmente)
Coletar no vale (antes da próxima dose) após 4ª-5ª dose

CUIDADOS:
- Infundir LENTO (Síndrome do Homem Vermelho = infusão rápida)
- Se red man syndrome: parar, anti-histamínico, reiniciar mais devagar
- Nefrotóxica: monitorar creatinina a cada 48-72h
- Via central preferível se uso prolongado`,
    warnings: "Síndrome do Homem Vermelho NÃO é alergia verdadeira. É reação histaminóide por infusão rápida.",
    guideline: "IDSA / ASHP / SBI",
  },
  {
    id: "rx-dil-nac",
    title: "N-Acetilcisteína (NAC) — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `PROTOCOLO 21h (Prescott — padrão):
ETAPA 1: NAC 150mg/kg em SG 5% 200mL EV em 1h
ETAPA 2: NAC 50mg/kg em SG 5% 500mL EV em 4h
ETAPA 3: NAC 100mg/kg em SG 5% 1000mL EV em 16h

Exemplo (70kg):
Etapa 1: 10.500mg (21 ampolas de 500mg/3mL = 63mL) em 200mL SG5% em 1h
Etapa 2: 3.500mg (7 amp) em 500mL SG5% em 4h
Etapa 3: 7.000mg (14 amp) em 1000mL SG5% em 16h

INDICAÇÕES:
- Intoxicação por paracetamol (dentro de 8-10h ideal)
- Insuficiência hepática aguda (qualquer causa)
- Prevenção de nefropatia por contraste (controverso)

CUIDADOS:
- Reação anafilactóide na 1ª etapa é comum (10-20%): reduzir velocidade
- Se reação: parar, anti-histamínico, reiniciar mais devagar
- Cheiro de enxofre forte é normal`,
    guideline: "ABCF / CIT / Toxicologia",
  },
  {
    id: "rx-dil-oxacilina",
    title: "Oxacilina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Oxacilina 500mg: diluir em 10mL de água destilada
Oxacilina 1g: diluir em 20mL de água destilada

DILUIÇÃO PARA INFUSÃO:
Oxacilina 2g + SF 0,9% 100mL → infundir em 30-60 min

DOSE:
Adulto: 2g EV 4/4h (infecção grave) ou 1g EV 6/6h (moderada)
Dose máxima: 12g/dia

INDICAÇÕES PRINCIPAIS:
- Endocardite por S. aureus MSSA
- Osteomielite
- Celulite/erisipela grave
- Artrite séptica por MSSA

CUIDADOS:
- Flebite frequente — rodar acesso a cada 72h
- Nefrite intersticial com uso prolongado (monitorar EAS)
- Estável apenas em SF 0,9% (NÃO usar SG 5%)
- Incompatível com aminoglicosídeos na mesma via`,
    guideline: "ANVISA / SBI",
  },
  {
    id: "rx-dil-ceftriaxona",
    title: "Ceftriaxona — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `IM:
Ceftriaxona 1g + Lidocaína 1% 3,5mL → IM profundo no glúteo
(Dor intensa se diluir em água destilada — SEMPRE usar lidocaína IM)

EV em bolus:
Ceftriaxona 1g + água destilada 10mL → infundir em 3-5 min

EV em infusão:
Ceftriaxona 1g + SF 0,9% 100mL → infundir em 30 min
Ceftriaxona 2g + SF 0,9% 100mL → infundir em 30 min

DOSE:
Adulto: 1g EV 12/12h (maioria das infecções) ou 2g EV 1x/dia
Meningite: 2g EV 12/12h
Dose máxima: 4g/dia

INCOMPATIBILIDADES:
- NÃO diluir em soluções com cálcio (Ringer Lactato)
- CONTRAINDICADO em RN que recebe cálcio EV (precipitação fatal)
- Estável em SF 0,9% e SG 5%`,
    guideline: "ANVISA / SBI / SBP",
  },
  {
    id: "rx-dil-noripurum",
    title: "Ferro Sacarato (Noripurum) — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Ferro sacarato 100mg/5mL + SF 0,9% 100mL → infundir em 15-30 min
Concentração máxima: 1mg/mL (não diluir menos de 100mL)

DOSE:
Fórmula de Ganzoni:
Déficit de ferro (mg) = Peso × (Hb alvo - Hb atual) × 2,4 + depósito (500mg)
Dose máxima por sessão: 200mg (5 ampolas de 100mg)
Frequência: 1-3x por semana até completar déficit

INDICAÇÕES:
- Anemia ferropriva com intolerância VO
- DRC em hemodiálise
- Gestante com Hb <9 no 2°-3° trimestre
- Sangramento ativo com anemia
- Pré-operatório de urgência com anemia

CUIDADOS:
- Dose-teste não é mais recomendada (diferente do ferro dextran)
- Reações: hipotensão, náusea, rubor facial (reduzir velocidade)
- Anafilaxia é rara mas possível — ter adrenalina disponível
- NÃO diluir em SG 5% (instável)`,
    guideline: "SBH / ABHH / KDIGO",
  },
  {
    id: "rx-dil-piperacilina-tazo",
    title: "Piperacilina-Tazobactam — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Piperacilina-Tazobactam 4,5g + SF 0,9% 20mL → agitar até dissolver

DILUIÇÃO PARA INFUSÃO:
4,5g reconstituído + SF 0,9% 100mL → infundir em 30 min (padrão)
OU infusão estendida: 4,5g em 150mL SF → infundir em 4h (superior!)

DOSE:
Padrão: 4,5g EV 6/6h
Infecção grave / Pseudomonas: 4,5g EV 6/6h em infusão estendida de 4h

INFUSÃO ESTENDIDA (recomendada):
Mantém concentração acima do MIC por mais tempo → melhor desfecho
4,5g + SF 0,9% 150mL → infundir em 4h a cada 6h (iniciar próxima 2h após terminar)

CUIDADOS:
- Incompatível com: aminoglicosídeos, vancomicina, bicarbonato
- Lavar linha entre medicações incompatíveis
- Estável por 24h em temperatura ambiente após diluição
- Ajuste renal: ClCr <20 → 4,5g 8/8h`,
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-ampicilina",
    title: "Ampicilina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Ampicilina 500mg + água destilada 5mL
Ampicilina 1g + água destilada 10mL

EV em bolus:
Ampicilina 1g reconstituída → infundir EV lento em 3-5 min

EV em infusão:
Ampicilina 1-2g + SF 0,9% 50-100mL → infundir em 15-30 min

IM:
Ampicilina 500mg + água destilada 3mL → IM profundo

DOSE:
Adulto: 1-2g EV 6/6h (infecção moderada) ou 2g EV 4/4h (grave/meningite)
Neonato: 50mg/kg EV 12/12h (<7dias) ou 8/8h (>7dias)
Meningite: 2g EV 4/4h (12g/dia)

CUIDADOS:
- Estabilidade limitada após reconstituição (1h em TA)
- Administrar IMEDIATAMENTE após diluir
- Compatível com SF 0,9% (preferido) e SG 5% (menos estável)
- Rash maculopapular é MUITO comum (40% se mononucleose — não é alergia)`,
    guideline: "ANVISA / SBI",
  },
  {
    id: "rx-dil-meropenem",
    title: "Meropenem — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Meropenem 500mg + SF 0,9% 10mL
Meropenem 1g + SF 0,9% 20mL

EV em bolus:
Meropenem 1g reconstituído → infundir EV lento em 5 min

EV em infusão (padrão):
Meropenem 1g + SF 0,9% 100mL → infundir em 30 min

INFUSÃO ESTENDIDA (recomendada para infecções graves):
Meropenem 1g + SF 0,9% 100mL → infundir em 3h a cada 8h
Superior ao bolus em sepse / infecções por Gram-negativos MDR

DOSE:
Padrão: 1g EV 8/8h
Meningite: 2g EV 8/8h
Ajuste renal: ClCr 26-50 → 1g 12/12h; ClCr 10-25 → 500mg 12/12h

CUIDADOS:
- Estável por 4h em TA após reconstituição
- NÃO misturar com outros ATB na mesma via
- Sem necessidade de ajuste hepático
- Risco de convulsão (menor que imipenem)`,
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-cefepime",
    title: "Cefepime — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO PADRÃO:
Cefepime 2g + AD 10mL (reconstituição) → diluir em SF 0,9% ou SG 5% 100mL
Infundir em 30 minutos

DOSE: 2g EV 8/8h (infecção grave) ou 12/12h (moderada)
Ajuste renal: ClCr 30-50: 2g 12/12h | ClCr 10-30: 2g 24/24h

INFUSÃO ESTENDIDA (4h):
Cefepime 2g + SF 0,9% 100-250mL — infundir em 4h (otimiza PK/PD)

CUIDADOS:
- Compatível com SF 0,9% e SG 5%
- Estável por 24h refrigerado após reconstituição
- Risco de neurotoxicidade em DRC (confusão, convulsão, mioclonia)
- Monitorar função renal diariamente`,
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-polimixina-b",
    title: "Polimixina B — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Polimixina B 500.000 UI + SF 0,9% 300-500mL
Infundir em 60-90 minutos

DOSE: 15.000-25.000 UI/kg/dia dividido em 12/12h
Dose ataque: 25.000 UI/kg no D1 (dose única)
NÃO ajustar para função renal (excreção não renal)

CUIDADOS:
- Nefrotóxica — monitorar creatinina diariamente
- Neurotóxica — parestesias faciais são comuns (avisar paciente)
- Infusão lenta para minimizar bloqueio neuromuscular
- NÃO usar com outros nefrotóxicos se possível
- Reservar para Gram-negativos MDR (KPC, Acinetobacter pan-R)`,
    warnings: "Polimixina B: droga de último recurso. Nefrotoxicidade em 20-60% dos pacientes. Monitorar diurese e creatinina rigorosamente.",
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-anfotericina-b",
    title: "Anfotericina B — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `ANFOTERICINA B DESOXICOLATO (convencional):
Reconstituir 50mg + AD 10mL → diluir em SG 5% 500mL
Concentração: NÃO exceder 0,1mg/mL
Infundir em 4-6 horas
DOSE: 0,5-1,5mg/kg/dia (iniciar baixa, escalonar)
Dose teste: 1mg em 30 min (observar reação)

ANFOTERICINA B LIPOSSOMAL:
Reconstituir com AD — diluir em SG 5%
Infundir em 2 horas
DOSE: 3-5mg/kg/dia

PRÉ-MEDICAÇÃO (convencional):
- Dipirona 1g EV 30 min antes
- SF 0,9% 500mL EV antes e após (nefoproteção)
- Hidrocortisona 50mg EV (se reação infusional prévia)

CUIDADOS:
- NUNCA diluir em SF (precipita!)
- Monitorar K+, Mg2+, Creatinina diariamente
- Repor K+ e Mg2+ conforme necessidade
- Nefrotoxicidade é dose-cumulativa`,
    warnings: "Anfotericina convencional: nefrotóxica grave. Preferir lipossomal se disponível. NÃO usar SF para diluição — apenas SG 5%.",
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-ciprofloxacino-ev",
    title: "Ciprofloxacino EV — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Ciprofloxacino 400mg/200mL (solução pronta) — não necessita diluição adicional
Infundir em 60 minutos (LENTO — risco de cristalúria e flebite)

DOSE: 400mg EV 12/12h (infecções graves) ou 8/8h (muito graves)
Ajuste renal: ClCr <30: 200-400mg 12/12h

CUIDADOS:
- Infusão LENTA (mínimo 60 min) — reduz flebite
- Hidratação adequada (prevenir cristalúria)
- Fotossensibilidade — orientar proteção solar
- Prolonga QTc — ECG se uso concomitante de outros que prolongam QT
- Risco de tendinopatia (especialmente idosos e uso de corticóide)
- Interação com teofilina, warfarina, antiácidos`,
    guideline: "ANVISA / SBI",
  },
  {
    id: "rx-dil-imipenem",
    title: "Imipenem/Cilastatina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Imipenem 500mg + SF 0,9% ou SG 5% 100mL
Infundir em 30-60 minutos (doses ≤500mg) ou 40-60 min (doses >500mg)

DOSE: 500mg EV 6/6h (infecção grave) ou 1g EV 8/8h (muito grave)
Ajuste renal: ClCr 30-70: 500mg 8/8h | ClCr <30: 500mg 12/12h
Dose máxima: 4g/dia ou 50mg/kg/dia

CUIDADOS:
- Risco de CONVULSÃO (maior que meropenem) — cuidado em DRC e idosos
- Infusão rápida aumenta risco de náusea/vômito
- NÃO diluir <5mg/mL (instável)
- Estável por 4h em TA após reconstituição
- Cilastatina bloqueia metabolismo renal do imipenem`,
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-ertapenem",
    title: "Ertapenem — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Frasco-ampola 1g pó liofilizado

Reconstituição:
- Diluir 1g em 10mL de água destilada ou SF 0,9%
- Agitar até dissolução completa

Diluição EV:
- Transferir para SF 0,9% 50mL
- Infundir em 30 minutos

Dose: 1g EV 1x/dia
Dose pediátrica (3m-12a): 15mg/kg EV 12/12h (máx 1g/dia)

Estabilidade:
- Após reconstituição: usar em até 1h em temperatura ambiente
- Diluído em SF: até 6h em TA ou 24h refrigerado`,
    notes: "NÃO diluir em Ringer Lactato (incompatível). Carbapenêmico com espectro mais estreito — NÃO cobre Pseudomonas e Acinetobacter.",
    warnings: "Incompatível com soluções contendo dextrose (SG). Usar APENAS SF 0,9% ou água destilada.",
    guideline: "ANVISA / Merck",
  },
  {
    id: "rx-dil-linezolida",
    title: "Linezolida — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Bolsa pronta 600mg/300mL (2mg/mL)

Administração EV:
- Solução pronta para uso — NÃO precisa diluir
- Infundir em 30-120 minutos
- Dose: 600mg EV 12/12h

Administração VO:
- Linezolida 600mg VO 12/12h (biodisponibilidade ~100%)
- Pode trocar EV→VO quando tolerando dieta

Estabilidade:
- Bolsa íntegra: conforme fabricante
- Após abertura: usar imediatamente

Interações importantes:
- IMAO: evitar tiramina (queijo, vinho, embutidos)
- Serotonina: risco de síndrome serotoninérgica com ISRS/IRSN`,
    notes: "Oxazolidinona: cobre MRSA, VRE, Enterococcus resistente. Biodisponibilidade oral = EV, preferir VO quando possível. Monitorar plaquetas semanalmente (trombocitopenia dose-dependente).",
    warnings: "Uso >14 dias: risco de neuropatia óptica e periférica, acidose lática, trombocitopenia. Hemograma semanal obrigatório.",
    guideline: "ANVISA / Pfizer / IDSA",
  },
  {
    id: "rx-dil-teicoplanina",
    title: "Teicoplanina — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Frasco-ampola 200mg ou 400mg pó liofilizado + diluente

Reconstituição:
- 200mg: adicionar 3mL de água destilada (diluente fornecido)
- 400mg: adicionar 3mL de água destilada
- Agitar SUAVEMENTE (não espumar) até dissolução completa

Administração EV:
- Pode ser feita em bolus direto (lento, 3-5 min) OU
- Diluir em SF 0,9% ou SG 5% 100mL e infundir em 30 min

Administração IM: pode ser administrada IM (boa alternativa)

Dose de ataque: 6mg/kg EV 12/12h por 3 doses (loading)
Manutenção: 6mg/kg EV 1x/dia (infecções graves: 12mg/kg)

Estabilidade:
- Reconstituída: 24h em TA ou 48h refrigerada`,
    notes: "Glicopeptídeo alternativo à Vancomicina: menos nefrotóxico, pode ser dado IM, sem necessidade de monitorar nível sérico de rotina (embora recomendado em infecções graves: vale >15).",
    warnings: "Loading dose é ESSENCIAL — sem ela, níveis terapêuticos só após 3-4 dias. NÃO pular doses de ataque.",
    guideline: "ANVISA / SBI / IDSA",
  },
  {
    id: "rx-dil-clindamicina",
    title: "Clindamicina — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Clindamicina 600mg/4mL

Diluição EV:
- Diluir 600mg em 50-100mL de SF 0,9% ou SG 5%
- Concentração máxima: 18mg/mL
- Infundir em 20-30 minutos (600mg) ou 40-60 minutos (900mg)

Doses habituais:
- 600mg EV 8/8h (infecções moderadas)
- 900mg EV 8/8h (infecções graves)

Velocidade máxima: 30mg/min
NÃO administrar em bolus (risco de hipotensão e PCR)

Estabilidade:
- Diluída: 24h em TA, 14 dias refrigerada`,
    notes: "Excelente para infecções de pele, celulite, fasciíte (ação antitoxina). Cobre anaeróbios. Alternativa em alergia a Penicilina.",
    warnings: "Risco de colite pseudomembranosa (C. difficile). Não usar IM se dose >600mg.",
    guideline: "ANVISA / ASHP",
  },
  {
    id: "rx-dil-metronidazol",
    title: "Metronidazol — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Metronidazol 500mg/100mL (solução pronta)

Administração EV:
- Infusão direta da bolsa (já diluído)
- Infundir em 30-60 minutos
- Velocidade: 5mL/min

Doses habituais:
- 500mg EV 8/8h (infecções abdominais, anaeróbios)
- 250mg EV 8/8h (C. difficile — preferir VO)
- 15mg/kg ataque + 7,5mg/kg 6/6h (infecções graves)

NÃO misturar com outros medicamentos na mesma linha
Proteger da luz (fotossensível)

Estabilidade:
- Solução pronta: usar imediatamente após abertura`,
    notes: "Principal droga para anaeróbios. Efeito dissulfiram: paciente NÃO pode ingerir álcool durante e 48h após tratamento.",
    warnings: "Neuropatia periférica com uso prolongado (>4 semanas). Monitorizar parestesias.",
    guideline: "ANVISA / SBI",
  },
  {
    id: "rx-dil-ceftazidima",
    title: "Ceftazidima — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Ceftazidima 1g ou 2g pó para reconstituição

Reconstituição:
- 1g: diluir em 10mL de AD
- 2g: diluir em 10mL de AD

Diluição EV:
- Diluir dose reconstituída em 50-100mL SF 0,9% ou SG 5%
- Infundir em 15-30 minutos (intermitente)
- Infusão estendida: 3h (melhora PK/PD para Pseudomonas)

Doses habituais:
- 1g EV 8/8h (infecções moderadas)
- 2g EV 8/8h (Pseudomonas, neutropenia febril)

Estabilidade:
- Reconstituída: 24h em TA
- Diluída: 24h em TA, 7 dias refrigerada`,
    notes: "Cefalosporina de 3ª geração com excelente cobertura para Pseudomonas aeruginosa. Não cobre MRSA.",
    warnings: "Ajuste renal obrigatório. ClCr 31-50: 1g 12/12h. ClCr 16-30: 1g 24/24h. ClCr <15: 500mg 24/24h.",
    guideline: "ANVISA / ASHP / SBI",
  },
  {
    id: "rx-dil-hidrocortisona",
    title: "Hidrocortisona — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Hidrocortisona 100mg ou 500mg pó liofilizado

Reconstituição:
- 100mg: diluir em 2mL AD
- 500mg: diluir em 4mL AD

Administração EV:
- Bolus: diluir em 10mL SF, infundir em 1-2 minutos (doses ≤100mg)
- Infusão: diluir em 50-100mL SF 0,9% ou SG 5%, infundir em 15-30 min

Doses habituais:
- Choque séptico: 50mg EV 6/6h (200mg/dia) — ADRENAL Trial
- Crise adrenal: 100mg EV bolus + 50mg 8/8h
- Asma/DPOC: 100-200mg EV 6/6h
- Insuficiência adrenal crônica: 50mg EV 8/8h (estresse)

Estabilidade:
- Reconstituída: usar em até 3h (sem conservante)`,
    notes: "Equivalência: 100mg Hidrocortisona = 25mg Prednisolona = 4mg Dexametasona. Preferida em choque séptico por ação mineralocorticoide.",
    warnings: "Hiperglicemia frequente. Monitorizar glicemia capilar 4/4h. Não suspender abruptamente após uso >3 dias.",
    guideline: "ANVISA / SSC / Endocrine Society",
  },
  {
    id: "rx-dil-tigeciclina",
    title: "Tigeciclina — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Tigeciclina 50mg pó liofilizado

Reconstituição:
- Diluir em 5,3mL de SF 0,9% (concentração 10mg/mL)

Diluição EV:
- Transferir dose para 100mL de SF 0,9% ou SG 5%
- Infundir em 30-60 minutos

Doses:
- Ataque: 100mg EV (dose única)
- Manutenção: 50mg EV 12/12h
- Infecções graves/resistentes: 100mg 12/12h (high-dose — off-label)

NÃO necessita ajuste renal
NÃO necessita ajuste hepático leve-moderado (Child A-B)
Child-Pugh C: 25mg 12/12h

Estabilidade:
- Reconstituída: usar imediatamente
- Diluída: 24h TA, 48h refrigerada`,
    notes: "Glicilciclina: cobre MRSA, VRE, Acinetobacter, KPC (algumas). NÃO cobre Pseudomonas nem Proteus. Evitar em bacteremia (baixos níveis séricos).",
    warnings: "Aumento de mortalidade em monoterapia para bacteremia e VAP (FDA black box). Usar em combinação. Náusea/vômito frequentes.",
    guideline: "ANVISA / IDSA / SBI",
  },
  {
    id: "rx-dil-colistina",
    title: "Colistina (Polimixina E) — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Colistimetato de sódio 1.000.000 UI (≈80mg CBA ou ≈33mg CMS)

ATENÇÃO: Existem 2 unidades — CBA (colistin base activity) e CMS. Confirmar apresentação!

Reconstituição:
- Diluir frasco em 10mL AD

Dose de ATAQUE (obrigatória):
- 9 milhões UI CMS EV (≈300mg CBA) — dose única
- Diluir em 100mL SF, infundir em 30-60min

Dose de MANUTENÇÃO (iniciar 12-24h após ataque):
- Função renal normal: 4,5 milhões UI CMS EV 12/12h
- Ajustar por ClCr (consultar tabela)
- Diluir em 100mL SF, infundir em 30-60min

Via inalatória (adjuvante em VAP):
- 1-2 milhões UI em 4mL SF nebulização 8/8h

Monitorização:
- Função renal diária (nefrotóxica — 30-60%)
- Nível sérico de Colistina se disponível (alvo: 2-4mg/L)`,
    notes: "Última linha para Gram-negativos MDR (Acinetobacter, KPC, Pseudomonas pan-R). Loading dose é ESSENCIAL — sem ela, níveis subterapêuticos por 48h.",
    warnings: "Nefrotoxicidade dose-dependente e reversível na maioria. Neurotoxicidade: parestesias, fraqueza. NÃO misturar com outros nefrotóxicos.",
    guideline: "ANVISA / IDSA / SBI / EUCAST",
  },
  {
    id: "rx-dil-daptomicina",
    title: "Daptomicina — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Daptomicina 350mg ou 500mg pó liofilizado

Reconstituição:
- 350mg: 7mL de SF 0,9% (concentração 50mg/mL)
- 500mg: 10mL de SF 0,9% (concentração 50mg/mL)

Diluição EV:
- Diluir em 50mL SF 0,9% (NÃO usar SG — incompatível)
- Infundir em 30 minutos
- OU administrar EV direto em 2 minutos (sem diluição)

Doses:
- Infecção de pele: 4mg/kg EV 1x/dia
- Bacteremia / Endocardite: 6-10mg/kg EV 1x/dia
- MRSA com vancomicina MIC ≥2: considerar 8-10mg/kg

Ajuste renal: ClCr <30 ou HD → 4-6mg/kg a cada 48h (administrar após HD)

Monitorização:
- CPK semanal (miopatia — suspender se CPK >10x LSN)
- NÃO usar com estatinas concomitantemente

Estabilidade:
- Reconstituída: 12h TA, 48h refrigerada`,
    notes: "Cobre MRSA, VRE, Enterococcus. NÃO usar para pneumonia (inativada pelo surfactante pulmonar). Alternativa à Vancomicina em bacteremia.",
    warnings: "Miopatia: monitorizar CPK. Suspender estatinas durante uso. Pneumonia eosinofílica rara mas descrita.",
    guideline: "ANVISA / IDSA / SBI",
  },
  {
    id: "rx-dil-azitromicina-ev",
    title: "Azitromicina EV — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Azitromicina 500mg pó para reconstituição

Reconstituição:
- Diluir 500mg em 4,8mL de AD (concentração 100mg/mL)

Diluição EV:
- 1ª diluição: adicionar dose em 250-500mL SF 0,9% ou SG 5%
- Concentração final: 1-2mg/mL
- NUNCA concentração >2mg/mL

Infusão:
- 1mg/mL: infundir em 3 horas
- 2mg/mL: infundir em 1 hora
- NUNCA em bolus (risco de arritmia)

Doses:
- PAC grave: 500mg EV 1x/dia por 2-5 dias, depois VO
- Legionella: 500mg EV 1x/dia

Estabilidade:
- Reconstituída: 24h TA
- Diluída: 24h TA (1mg/mL) ou 7 dias refrigerada`,
    notes: "Excelente para atípicos (Legionella, Mycoplasma, Chlamydia). Trocar para VO assim que possível (boa biodisponibilidade oral).",
    warnings: "Prolongamento de QT. Evitar com outros QT-prolongadores (Amiodarona, Haloperidol). ECG antes se cardiopata.",
    guideline: "ANVISA / ASHP / SBI",
  },
  {
    id: "rx-dil-tramadol-ev",
    title: "Tramadol EV — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Tramadol 50mg/mL ampola 2mL (100mg)

Administração EV:
- Bolus lento: diluir 100mg em 10mL SF, infundir em 2-3 minutos
- Infusão contínua: diluir 200-400mg em 250-500mL SF ou SG 5%
  Velocidade: 10-20mg/hora

Doses:
- 50-100mg EV 6/6-8/8h (máx 400mg/dia)
- Idoso/DRC: 50mg 8/8h (máx 200-300mg/dia)
- NÃO usar em ClCr <10 (acúmulo metabólito ativo)

Pré-medicação: Metoclopramida 10mg EV ou Ondansetrona 4mg EV (náusea)

Estabilidade:
- Diluído: 24h TA`,
    notes: "Opioide fraco. Menor depressão respiratória que Morfina. Efeito dual: opioide + inibição recaptação serotonina/noradrenalina.",
    warnings: "Risco de síndrome serotoninérgica com ISRS/IRSN. Reduz limiar convulsivo — cuidado em epilépticos. NÃO usar com IMAO.",
    guideline: "ANVISA / SBA / SBAD",
  },
  {
    id: "rx-dil-tigeciclina",
    title: "Tigeciclina EV — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Tigeciclina 50mg pó liofilizado (frasco-ampola)

Reconstituição: 5,3mL de SF 0,9% → solução 10mg/mL
Diluição: Transferir para 100mL de SF 0,9% ou SG 5%

Dose: 100mg EV (dose de ataque) → 50mg EV 12/12h
Infusão: 30-60 minutos

Estabilidade:
- Reconstituído: usar imediatamente
- Diluído: 24h TA / 48h refrigerado`,
    notes: "Glicilciclina — amplo espectro incluindo MRSA, VRE, Acinetobacter (exceto P. aeruginosa). Bacteriostático.",
    warnings: "Náusea intensa (30-40%) — infundir lentamente. FDA warning: aumento de mortalidade em estudos. Reservar para infecções sem alternativa.",
    guideline: "ANVISA / ASHP / IDSA",
  },
  {
    id: "rx-dil-colistina-polimixinae",
    title: "Colistina (Polimixina E) EV — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Colistimetato de sódio 1.000.000 UI (≈80mg CBA) frasco-ampola

Reconstituição: 10mL de SF 0,9% ou AD
Diluição: em 100-250mL de SF 0,9% ou SG 5%

DOSE (baseada em CBA — Colistin Base Activity):
- Dose de ataque: 9MUI (≈300mg CBA) EV em 2h
- Manutenção: 4,5MUI (≈150mg CBA) EV 12/12h
- Ajuste renal obrigatório (nefrotóxica)

Infusão: 1-2 horas (NUNCA em bolus)

Estabilidade:
- Reconstituído: usar em até 24h sob refrigeração`,
    notes: "Último recurso para Gram-negativos MDR (Acinetobacter, Pseudomonas, KPC). Atividade concentração-dependente. Associar com Meropenem (sinergia).",
    warnings: "Nefrotoxicidade dose-dependente (30-60%). Monitorizar Cr diariamente. Neurotoxicidade: parestesias, bloqueio neuromuscular. NÃO associar com aminoglicosídeo.",
    guideline: "ANVISA / IDSA / EUCAST / Consenso Brasileiro Polimixinas",
  },
  {
    id: "rx-dil-daptomicina",
    title: "Daptomicina EV — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Daptomicina 350mg ou 500mg pó liofilizado

Reconstituição: 7mL (350mg) ou 10mL (500mg) de SF 0,9% → solução 50mg/mL
Diluição: em 50mL de SF 0,9%

DOSE:
- Infecções de pele: 4mg/kg EV 1x/dia
- Bacteremia / Endocardite: 6-10mg/kg EV 1x/dia
Infusão: 30 minutos (ou 2min EV direto se volume <50mL)

Estabilidade:
- Reconstituído: 12h TA / 48h refrigerado
- Diluído em SF: 12h TA / 48h refrigerado`,
    notes: "Lipopeptídeo — bactericida contra Gram-positivos (MRSA, VRE, S. aureus). NÃO usar para pneumonia (inativada pelo surfactante pulmonar).",
    warnings: "Monitorizar CPK semanal (rabdomiólise). Suspender estatinas durante uso. Se CPK >10x LSN + sintomas: suspender.",
    guideline: "ANVISA / IDSA / ASHP",
  },
  {
    id: "rx-dil-anfotericina-b-lipidica",
    title: "Anfotericina B Lipossomal — Diluição e Preparo",
    type: "Diluição",
    prescription: `Apresentação: Anfotericina B lipossomal 50mg pó liofilizado

Reconstituição: 12mL de AD (agitar vigorosamente) → 4mg/mL
Diluição: em SG 5% para concentração final 1-2mg/mL
(NUNCA usar SF 0,9% — precipita)

DOSE:
- Infecções fúngicas invasivas: 3-5mg/kg/dia EV
- Leishmaniose visceral: 3mg/kg/dia D1-5, D14, D21 (20mg/kg total)
- Mucormicose: 5-10mg/kg/dia

Infusão: 1-2 horas
Pré-medicação: Dipirona 1g + Hidrocortisona 50mg + SF 500mL (pré-hidratação)

Estabilidade:
- Reconstituído: 24h refrigerado
- Diluído: 6h TA`,
    notes: "Formulação lipossomal: MUITO menos nefrotóxica que a convencional. Preferida na prática atual. Agitar bem antes de reconstituir.",
    warnings: "Hipocalemia frequente (repor K+). Nefrotoxicidade (menor que convencional, mas existe). Monitorizar K+, Mg++, Cr diariamente.",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-alteplase-tpa",
    title: "Alteplase (tPA) EV — Diluição para AVC e TEP",
    type: "Diluição",
    prescription: `Apresentação: Alteplase 50mg pó liofilizado + diluente

Reconstituição: 50mL de AD (diluente próprio) → 1mg/mL

AVC ISQUÊMICO (janela <4,5h):
- Dose: 0,9mg/kg (máx 90mg)
- 10% em bolus EV em 1min → 90% em BIC em 60min

TEP MACIÇA:
- Dose: 100mg EV em 2h
- OU 0,6mg/kg (máx 50mg) em 15min (protocolo acelerado se PCR)

IAM com supradesnível de ST (se cateterismo indisponível):
- Dose: 15mg bolus → 0,75mg/kg em 30min (máx 50mg) → 0,5mg/kg em 60min (máx 35mg)

Estabilidade:
- Reconstituído: 8h refrigerado`,
    notes: "Alteplase = tPA recombinante. No AVC: cada minuto sem trombólise = ~1,9 milhão de neurônios perdidos. TNKase (Tenecteplase) é alternativa em dose única.",
    warnings: "Contraindicações absolutas: AVCh prévio, cirurgia craniana <3 meses, sangramento ativo. NÃO usar anticoagulante nas primeiras 24h pós-trombólise no AVC.",
    guideline: "ABN / AHA/ASA / ESO / SBC",
  },
  {
    id: "rx-dil-tigeciclina",
    title: "Tigeciclina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Tigeciclina 50mg frasco-ampola + 5,3mL de SF 0,9% = 10mg/mL

DILUIÇÃO:
Transferir dose para SF 0,9% 100mL

DOSE ADULTO:
Ataque: 100mg EV (2 frascos) em 30-60min
Manutenção: 50mg EV 12/12h em 30-60min

INDICAÇÕES PRINCIPAIS:
- Infecções intra-abdominais complicadas
- Infecções de pele e partes moles (MRSA, Acinetobacter)
- Pneumonia comunitária

Estabilidade: 24h em temperatura ambiente, 48h refrigerado`,
    notes: "Bacteriostático — NÃO usar em bacteremia (concentração sérica baixa). Boa para Acinetobacter pan-resistente. Cobertura: Gram+ (incluindo MRSA), Gram- (incluindo ESBL), anaeróbios.",
    warnings: "NÃO cobre Pseudomonas. Efeitos adversos: náusea intensa (30-40%), pancreatite. Aumento de mortalidade em meta-análise FDA para infecções graves.",
    guideline: "ANVISA / FDA / IDSA",
  },
  {
    id: "rx-dil-colistina",
    title: "Colistina (Colistimetato) — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `ATENÇÃO: Unidades diferentes conforme fabricante!
- CMS (Colistimetato de sódio) — dose em UI ou mg CBA

RECONSTITUIÇÃO:
Polimixina E frasco 1.000.000 UI + 2mL AD = 500.000 UI/mL

DILUIÇÃO:
Dose prescrita em SF 0,9% 100-250mL

DOSE ADULTO:
Ataque: 9 milhões UI (300mg CBA) EV em 2h
Manutenção: 4,5 milhões UI (150mg CBA) EV 12/12h em 1-2h
Ajuste renal obrigatório (DRC/diálise)

NEBULIZAÇÃO (terapia adjuvante):
1-2 milhões UI em 4mL SF — NBZ 8/8h

Estabilidade: usar em até 12h após reconstituição`,
    notes: "Última linha para Gram- pan-resistentes (Acinetobacter, Pseudomonas, KPC). Nefrotoxicidade dose-dependente (30-50%). Monitorar função renal diariamente.",
    warnings: "Ataque é OBRIGATÓRIO (subníveis terapêuticos sem dose de ataque). Bloqueio neuromuscular raro mas grave. NÃO combinar com outros nefrotóxicos se possível.",
    guideline: "ANVISA / IDSA / EMA",
  },
  {
    id: "rx-dil-daptomicina",
    title: "Daptomicina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Daptomicina 500mg frasco + 10mL SF 0,9% = 50mg/mL (agitar LENTAMENTE)

DILUIÇÃO:
Transferir dose para SF 0,9% 50-100mL (NÃO usar Ringer Lactato — incompatível)

DOSES:
Pele/partes moles: 4mg/kg EV 1x/dia em 30min
Bacteremia/Endocardite (S. aureus): 6-10mg/kg EV 1x/dia em 30min
Dose alta (off-label, VRE/MRSA complexo): 8-12mg/kg

Ajuste renal: se ClCr <30 → 48/48h

Estabilidade: 12h em temperatura ambiente, 48h refrigerado`,
    notes: "NÃO usar para pneumonia (inativada pelo surfactante pulmonar). CPK semanal obrigatória (miopatia). Suspender se CPK >10x LSN com sintomas.",
    warnings: "Interação com estatinas: suspender estatina durante uso (risco de rabdomiólise). NÃO diluir em Ringer. Infundir em 30min (2min se bolus EV direto).",
    guideline: "ANVISA / FDA / IDSA / BSAC",
  },
  {
    id: "rx-dil-polimixina-b",
    title: "Polimixina B — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Polimixina B 500.000 UI frasco + 5mL AD = 100.000 UI/mL

DILUIÇÃO:
Dose em SG 5% 250-500mL

DOSE ADULTO:
15.000-25.000 UI/kg/dia EV dividido em 12/12h
Infusão em 1-2h
NÃO necessita dose de ataque (diferente da Colistina)
NÃO precisa ajuste renal (excreção extra-renal)

Estabilidade: 72h refrigerado após reconstituição`,
    notes: "Diferenças da Colistina: não precisa de ataque, não precisa ajuste renal, nefrotoxicidade possivelmente menor. Cobertura similar para Gram- MDR.",
    warnings: "Bloqueio neuromuscular: evitar em miastenia gravis, não associar com BNM. Pigmentação cutânea (hiperpigmentação) em uso prolongado — reversível.",
    guideline: "ANVISA / IDSA",
  },
  {
    id: "rx-dil-micafungina",
    title: "Micafungina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `RECONSTITUIÇÃO:
Micafungina 50mg ou 100mg frasco + 5mL SF 0,9% (NÃO agitar — espumar)

DILUIÇÃO:
Transferir para SF 0,9% 100mL

DOSES:
Candidemia: 100mg EV 1x/dia
Candidíase esofágica: 150mg EV 1x/dia
Profilaxia (TMO): 50mg EV 1x/dia

Infusão: em 1h
NÃO necessita dose de ataque
NÃO precisa ajuste renal ou hepático (leve-moderado)

Estabilidade: 24h em temperatura ambiente (proteger da luz)`,
    notes: "Equinocandina — fungicida contra Candida, fungistática contra Aspergillus. Alternativa ao Fluconazol em Candida resistente ou paciente instável. Sem interação com CYP3A4.",
    warnings: "NÃO usar em SG 5% (precipitação). Hepatotoxicidade rara — monitorar função hepática semanal. Menos interações medicamentosas que Voriconazol.",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-n-acetilcisteina",
    title: "N-Acetilcisteína (NAC) — Diluição EV",
    type: "Diluição",
    prescription: `Protocolo Prescott (21h) para intoxicação por Paracetamol:
1ª fase (1h): NAC 150mg/kg + SG 5% 200mL EV em 1h
2ª fase (4h): NAC 50mg/kg + SG 5% 500mL EV em 4h
3ª fase (16h): NAC 100mg/kg + SG 5% 1000mL EV em 16h
- Dose total: 300mg/kg em 21h
- Usar peso real (até 110kg — acima usar 110kg)
- Reação anafilactóide (rubor, urticária): reduzir velocidade de infusão, anti-histamínico`,
    notes: "NAC EV: ampola 600mg/3mL ou 300mg/3mL (verificar apresentação local). Protocolo modificado de 2 bolsas (Bateman) cada vez mais aceito.",
    warnings: "Reação anafilactóide em 10-20% dos casos (mais comum na 1ª bolsa). NÃO é alergia verdadeira — geralmente pode continuar com velocidade menor.",
    guideline: "SBTox / RCEM / AACT",
  },
  {
    id: "rx-dil-pralidoxima",
    title: "Pralidoxima (Contrathion) — Diluição EV",
    type: "Diluição",
    prescription: `Intoxicação por Organofosforados:
Ataque: 1-2g diluídos em SF 0,9% 100mL EV em 15-30min
Manutenção: 500mg/h EV em BIC ou 1g EV a cada 6-8h (diluir em SF 0,9% 100mL)
- Ampola: 200mg/mL (frasco 10mL = 2g) — varia conforme fabricante
- Iniciar idealmente nas primeiras 6h (antes do envelhecimento da AChE)
- Manter por 24-48h ou até melhora clínica + colinesterase em ascensão`,
    notes: "Pralidoxima reativa a acetilcolinesterase fosforilada. Após 'envelhecimento' (24-48h), a enzima torna-se irreversível e pralidoxima é ineficaz.",
    warnings: "Infusão rápida: hipotensão, rigidez muscular, laringoespasmo. Sempre administrar em 15-30min. Não substitui atropina (ações complementares).",
    guideline: "SBTox / WHO / AACT",
  },
  {
    id: "rx-dil-naloxona-infusao",
    title: "Naloxona — Infusão Contínua EV",
    type: "Diluição",
    prescription: `Intoxicação por Opioides com necessidade de infusão contínua:
Dose: 2/3 da dose eficaz (que reverteu a depressão) por hora
Preparo: Naloxona 2mg (5 ampolas de 0,4mg) + SF 0,9% 250mL
Concentração: 8mcg/mL
Infusão: ajustar conforme resposta clínica (geralmente 0,4-0,8mg/h)
- Monitorizar: FR, nível de consciência, tamanho pupilar
- Titular para FR >12irpm sem abstinência`,
    notes: "Meia-vida da naloxona (30-90min) é menor que a maioria dos opioides. Metadona: infusão por 48-72h. Fentanil ilícito: pode precisar doses muito altas.",
    warnings: "Abstinência aguda por naloxona: vômitos (risco de aspiração), agitação, hipertensão, edema pulmonar. Em dependentes, titular com cautela.",
    guideline: "SBTox / AACT / AHA",
  },
  {
    id: "rx-dil-bicarbonato-intox",
    title: "Bicarbonato de Sódio — Infusão para Intoxicações",
    type: "Diluição",
    prescription: `Intoxicação por Tricíclicos / Bloqueadores de Canal de Na+:
Bolus: NaHCO3 8,4% 1-2mEq/kg (1-2mL/kg) EV em 2-3min
- Repetir a cada 3-5min se QRS >100ms persistir
Manutenção: NaHCO3 8,4% 150mL + SG 5% 850mL EV em BIC
- Velocidade: 150-250mL/h (titular pelo pH arterial e QRS)
- Alvo: pH 7,45-7,55 (NÃO ultrapassar 7,55)
- Monitorizar: ECG contínuo (QRS), gasometria 2/2h, Na+, K+`,
    notes: "Mecanismo: alcalinização aumenta ligação proteica do tricíclico + supera bloqueio de Na+. Funciona também para: cocaína, propafenona, flecainida, quinidina.",
    warnings: "Hipocalemia pode ocorrer com alcalinização (monitorizar e repor K+). NÃO usar em intoxicação por betabloqueadores ou BCC (sem benefício).",
    guideline: "SBTox / AHA / AACT",
  },
  {
    id: "rx-dil-micafungina",
    title: "Micafungina — Diluição e Preparo",
    type: "Diluição",
    prescription: `RECONSTITUIÇÃO:
Micafungina 50mg ou 100mg: reconstituir com SF 0,9% 5mL (sem agitar — girar suavemente)

DILUIÇÃO:
Dose 50mg: diluir em SF 0,9% ou SG 5% 100mL
Dose 100mg: diluir em SF 0,9% ou SG 5% 100mL
Dose 150mg: diluir em SF 0,9% ou SG 5% 100mL
Concentração máxima: 1,5mg/mL

INFUSÃO:
Velocidade: infundir em 1 hora (mínimo)
Não infundir em menos de 1 hora

DOSES:
Candidemia: 100mg EV 1x/dia
Candidíase esofágica: 150mg EV 1x/dia
Profilaxia em TMO: 50mg EV 1x/dia`,
    notes: "Não necessita ajuste renal ou hepático (leve/moderado). Estabilidade: 24h em temperatura ambiente após diluição. Menor interação medicamentosa que outros azólicos.",
    warnings: "Incompatível com diversas soluções — usar linha dedicada. Não misturar com outros medicamentos na mesma via.",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-caspofungina",
    title: "Caspofungina — Diluição e Preparo",
    type: "Diluição",
    prescription: `RECONSTITUIÇÃO:
Caspofungina 50mg ou 70mg: reconstituir com 10,8mL de água destilada
Concentração: ~5,2mg/mL (50mg) ou ~7,2mg/mL (70mg)

DILUIÇÃO:
Diluir em SF 0,9% ou Ringer Lactato 250mL
NÃO diluir em soluções glicosadas (SG 5%)

INFUSÃO:
Velocidade: infundir em 1 hora (LENTAMENTE)

DOSES:
Ataque (D1): 70mg EV 1x/dia
Manutenção (D2+): 50mg EV 1x/dia
Insuficiência hepática moderada (Child B): manutenção 35mg/dia
Peso >80kg: considerar manutenção 70mg/dia`,
    notes: "Não necessita ajuste renal. Ajuste hepático: Child C sem dados. Interações: Ciclosporina (↑área), Rifampicina (↑dose para 70mg/dia). Estabilidade: 24h após diluição (2-25°C).",
    warnings: "NÃO usar SG 5% para diluição (degradação). NÃO infundir em bolus. Histamina-like reaction se infusão rápida (rubor, prurido).",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-voriconazol",
    title: "Voriconazol — Diluição e Preparo",
    type: "Diluição",
    prescription: `RECONSTITUIÇÃO:
Voriconazol 200mg: reconstituir com 19mL de água destilada = 10mg/mL

DILUIÇÃO:
Diluir em SF 0,9% ou SG 5% (concentração final: 0,5-5mg/mL)
Dose 200mg: adicionar a SF 0,9% 100-250mL

INFUSÃO:
Velocidade: infundir em 1-2 horas (máx 3mg/kg/h)

DOSES:
Ataque: 6mg/kg EV 12/12h no D1
Manutenção: 4mg/kg EV 12/12h (→ transição VO 200mg 12/12h)
VO: 200mg 12/12h (>40kg) ou 100mg 12/12h (<40kg) — jejum

MONITORIZAÇÃO:
Nível sérico (vale): colher antes da 5ª dose
Alvo: 1-5,5 mcg/mL (toxicidade >5,5)`,
    notes: "Espectro: Aspergillus (1ª escolha), Fusarium, Scedosporium. Reações visuais transitórias em ~30%. Interações EXTENSAS (CYP2C19/3A4). Fotossensibilidade: proteção solar obrigatória.",
    warnings: "Hepatotoxicidade: TGO/TGP semanais. Formulação EV contém ciclodextrina — contraindicada se ClCr <50 (acúmulo). Usar VO se possível em DRC. QTc: monitorizar ECG.",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-anidulafungina",
    title: "Anidulafungina — Diluição e Preparo",
    type: "Diluição",
    prescription: `RECONSTITUIÇÃO:
Anidulafungina 100mg: reconstituir com 30mL de água destilada = 3,33mg/mL

DILUIÇÃO:
Diluir em SF 0,9% ou SG 5%
Dose 200mg (ataque): diluir em 250mL → concentração 0,77mg/mL
Dose 100mg (manutenção): diluir em 250mL → concentração 0,36mg/mL
Concentração máxima: 0,77mg/mL

INFUSÃO:
Taxa máxima: 1,1mg/min
Ataque 200mg: infundir em ≥3 horas
Manutenção 100mg: infundir em ≥1,5 horas

DOSES:
Candidemia: 200mg EV D1 → 100mg EV 1x/dia
Candidíase esofágica: 100mg D1 → 50mg 1x/dia`,
    notes: "Única equinocandina SEM metabolismo hepático — segura em hepatopata. Não necessita ajuste renal. Sem interações significativas. Estabilidade: 24h (25°C).",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-fluconazol-ev",
    title: "Fluconazol EV — Diluição e Preparo",
    type: "Diluição",
    prescription: `APRESENTAÇÃO:
Fluconazol 2mg/mL — frasco de 100mL (200mg) ou 200mL (400mg)
Solução PRONTA para uso — não necessita diluição adicional

INFUSÃO:
Velocidade máxima: 200mg/hora (≤10mL/min)
Dose 400mg: infundir em ≥2 horas
Dose 800mg: infundir em ≥4 horas

DOSES:
Candidemia: 800mg EV D1 → 400mg EV 1x/dia (12mg/kg → 6mg/kg)
Meningite criptocócica: 400-800mg EV 1x/dia
ITU por Candida: 200-400mg EV/VO 1x/dia
Candidíase orofaríngea: 200mg D1 → 100mg 1x/dia

AJUSTE RENAL:
ClCr <50: reduzir dose em 50%
Hemodiálise: dose total após cada sessão`,
    notes: "Espectro: C. albicans, C. parapsilosis, C. tropicalis. NÃO cobre C. krusei (resistência intrínseca) e C. glabrata (resistência frequente). Boa penetração SNC.",
    guideline: "ANVISA / IDSA / ESCMID",
  },
  {
    id: "rx-dil-dobutamina",
    title: "Dobutamina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO PADRÃO:
Dobutamina 250mg (1 ampola 20mL) + SG 5% 230mL = 250mL
Concentração: 1000 mcg/mL (1mg/mL)

CÁLCULO:
Dose (mcg/kg/min) × Peso(kg) × 60 / 1000 = mL/h

Exemplo (70kg, dose 5mcg/kg/min):
5 × 70 × 60 / 1000 = 21 mL/h

FAIXA DE DOSE: 2,5-20 mcg/kg/min
INÍCIO: 2,5-5mcg/kg/min → titular a cada 10-15 min

SEM BOMBA:
Macrogotas/min = mL/h / 3
Ex: 21 mL/h ≈ 7 macrogotas/min`,
    warnings: "NÃO diluir em soluções alcalinas (precipita). Pode causar hipotensão se dose alta sem vasopressor. Taquicardia: reduzir dose.",
    notes: "Inotropismo: beta-1 agonista. Usar com Noradrenalina se PAM baixa. Efeito: aumenta DC, reduz RVP.",
  },
  {
    id: "rx-dil-milrinona",
    title: "Milrinona — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO PADRÃO:
Milrinona 20mg (20mL) + SG 5% 80mL = 100mL
Concentração: 200 mcg/mL

DOSE:
Ataque (opcional): 50mcg/kg EV em 10 min
Manutenção: 0,375-0,75 mcg/kg/min em BIC

Exemplo (70kg, dose 0,5mcg/kg/min):
0,5 × 70 × 60 / 200 = 10,5 mL/h

AJUSTE RENAL:
ClCr 50: reduzir 25%
ClCr 30: reduzir 33%
ClCr 10: reduzir 50%`,
    warnings: "Inibidor de PDE3: vasodilatador + inotrópico. HIPOTENSÃO é o efeito adverso mais comum. Evitar bolus se instável. Monitorar arritmias.",
    notes: "Alternativa à Dobutamina quando betabloqueado. Não depende de receptores beta. Meia-vida ~2,5h (mais longa que Dobutamina).",
  },
  {
    id: "rx-dil-vasopressina",
    title: "Vasopressina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Vasopressina 20UI (1 ampola 1mL) + SF 0,9% 99mL = 100mL
Concentração: 0,2 UI/mL

DOSE FIXA no choque séptico:
0,03-0,04 UI/min (NÃO titular como catecolaminas)
= 9-12 mL/h

Hemorragia varicosa:
0,2-0,4 UI/min = 60-120 mL/h (usar por tempo limitado)

Diabetes insípidus:
2-4 UI SC/IM a cada 4-6h OU 0,5mUI/kg/h em BIC`,
    warnings: "NÃO usar como vasopressor único no choque. Associar com Noradrenalina. Risco: isquemia digital, mesentérica, coronariana.",
    notes: "Surviving Sepsis 2021: adicionar Vasopressina 0,03UI/min quando Noradrenalina ≥0,25mcg/kg/min (reduzir dose de catecolamina).",
  },
  {
    id: "rx-dil-cisatracurio",
    title: "Cisatracúrio — Diluição e Preparo (BNM em UTI)",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Cisatracúrio 200mg (10 ampolas de 2mL/10mg) + SF 0,9% 180mL = 200mL
Concentração: 1 mg/mL

DOSE:
Bolus: 0,15-0,2 mg/kg EV
Manutenção: 0,06-0,18 mg/kg/h em BIC (1-3mcg/kg/min)

Exemplo (70kg, 0,1mg/kg/h):
0,1 × 70 = 7 mg/h = 7 mL/h

INDICAÇÃO em UTI:
SDRA grave com P/F <120 + prona + sedação profunda
Usar por máximo 48h quando possível`,
    warnings: "SEMPRE associar sedação profunda (RASS -5) — paciente paralisado sentindo dor/consciência é inaceitável. Monitorar TOF (train-of-four). Miopatia do doente crítico se uso prolongado.",
    notes: "Metabolismo de Hofmann (independente de fígado/rim). Preferido em disfunção orgânica múltipla.",
  },
  {
    id: "rx-dil-esmolol",
    title: "Esmolol — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Esmolol 2500mg (250mL frasco pronto 10mg/mL) — usar direto
OU Esmolol 100mg (10mL) + SF 0,9% 90mL = 100mL (1mg/mL = 1000mcg/mL)

DOSE:
Bolus: 500mcg/kg EV em 1 min
Manutenção: 50-200mcg/kg/min em BIC

Exemplo (70kg, 100mcg/kg/min, concentração 10mg/mL):
100 × 70 × 60 / 10000 = 42 mL/h

INDICAÇÕES:
Dissecção aórtica, taquiarritmias perioperatórias, crise tireotóxica, IOT em reativo
Meia-vida: 9 min (ultra-curta — ideal para titulação)`,
    warnings: "Bradicardia e hipotensão: titular cuidadosamente. Contraindicado em IC descompensada, BAV 2º/3º grau, asma grave.",
    notes: "Betabloqueador de ultra-curta ação. Efeito cessa em 10-20 min após suspensão. Ideal quando precisa de controle rápido e reversível.",
  },
  {
    id: "rx-dil-alteplase",
    title: "Alteplase (rt-PA) — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `AVC ISQUÊMICO:
Dose: 0,9mg/kg (máx 90mg)
10% em bolus EV em 1 min → 90% em BIC em 60 min
Diluir: reconstituir 50mg em 50mL de água destilada (1mg/mL)

Exemplo (70kg = 63mg):
Bolus: 6,3mg (6,3mL) EV em 1 min
Infusão: 56,7mg (56,7mL) EV em 60 min = 56,7mL/h

TEP MACIÇO:
Dose: 100mg EV em 2h
10mg bolus → 90mg em 2h

IAM (se Tenecteplase não disponível):
15mg bolus → 0,75mg/kg em 30min (máx 50mg) → 0,5mg/kg em 60min (máx 35mg)

JANELAS:
AVC: até 4,5h | TEP: instabilidade hemodinâmica | IAM: porta-agulha <30min`,
    warnings: "Contraindicações absolutas: sangramento ativo, cirurgia SNC <3 meses, AVC hemorrágico, MAV conhecida. Monitorar PA rigorosamente pós-trombólise.",
  },
  {
    id: "rx-dil-heparina-bic",
    title: "Heparina Não Fracionada — Protocolo de Infusão",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO PADRÃO:
HNF 25.000UI (5mL) + SF 0,9% 245mL = 250mL
Concentração: 100 UI/mL

PROTOCOLO PARA TVP/TEP:
Bolus: 80UI/kg EV (máx 10.000UI)
Infusão: 18UI/kg/h em BIC

Exemplo (70kg):
Bolus: 5600UI = 56mL da solução (NÃO usar em bolus da solução diluída — usar puro: 5600UI = 1,12mL da ampola)
Infusão: 1260UI/h = 12,6mL/h

AJUSTE POR TTPa (colher 6h após início):
TTPa <35s: bolus 80UI/kg + aumentar 4UI/kg/h
TTPa 35-45s: bolus 40UI/kg + aumentar 2UI/kg/h
TTPa 46-70s: sem alteração (ALVO)
TTPa 71-90s: reduzir 2UI/kg/h
TTPa >90s: parar por 1h + reduzir 3UI/kg/h`,
    notes: "Controle: TTPa 1,5-2,5x o controle (46-70s). Colher TTPa 6h após cada ajuste. Antídoto: Protamina 1mg para cada 100UI de HNF das últimas 2-3h.",
  },
  {
    id: "rx-dil-manitol",
    title: "Manitol 20% — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: Manitol 20% (200mg/mL) — frasco 250mL

DOSE:
HIC: 0,5-1g/kg EV em 15-20min (rápido)
Ex: 70kg × 1g/kg = 70g = 350mL de Manitol 20%

MANUTENÇÃO: 0,25-0,5g/kg EV a cada 4-6h
Osmolaridade sérica alvo: <320mOsm/L (acima = risco renal)

EDEMA CEREBRAL POR AVC: 0,5-1g/kg EV em 20min → 0,25g/kg 6/6h

GLAUCOMA AGUDO: 1-2g/kg EV em 30-60min

CUIDADOS:
Cristaliza se frio → aquecer em banho-maria antes de usar
Verificar filtro de infusão (cristais)
Monitorar: Na+, K+, osmolaridade sérica, função renal
Manter SVD (diurese osmótica intensa)`,
    warnings: "Contraindicado em anúria/IRA estabelecida. Efeito rebote: se usar >48h pode piorar edema cerebral. Alternativa: NaCl 20% (melhor em hipovolêmicos).",
  },
  {
    id: "rx-dil-nacl-hipertonico",
    title: "NaCl 20% (Salina Hipertônica) — Preparo",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: NaCl 20% (3,4mEq/mL) — ampola 10-20mL

HIPERTENSÃO INTRACRANIANA:
NaCl 20%: 10-20mL EV em 10-15min (acesso central)
OU NaCl 3%: 150-250mL EV em 10-20min (pode ser periférico)

PREPARO de NaCl 3%:
NaCl 20% 30mL + SF 0,9% 170mL = 200mL de solução ~3%
OU NaCl 20% 15mL + SF 0,9% 85mL = 100mL de solução ~3%

HIPONATREMIA GRAVE (Na+ <120 ou sintomática):
NaCl 3%: 150mL EV em 20min → repetir 1x se persistir sintomas
Alvo: elevar Na+ em 4-6mEq/L nas primeiras 6h (máx 8-10mEq em 24h)

MONITORIZAÇÃO:
Na+ sérico 2/2h durante correção
Osmolaridade sérica (manter <320 se HIC)
Acesso central para NaCl 20% (risco de flebite/necrose se extravasar)`,
    warnings: "Correção rápida de Na+: risco de mielinólise pontina (desmielinização osmótica). NÃO ultrapassar 8-10mEq/24h. Se corrigiu demais: DDAVP 2mcg EV + SG5%.",
  },
  {
    id: "rx-dil-bicarbonato",
    title: "Bicarbonato de Sódio 8,4% — Protocolo de Infusão",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: NaHCO3 8,4%: 1mEq/mL — ampola 10mL ou 250mL

ACIDOSE METABÓLICA GRAVE (pH <7,10):
Dose: (Bic desejado - Bic atual) × 0,3 × Peso(kg) = mEq necessários
Repor 50% do calculado → reavaliar com gasometria

DILUIÇÃO:
NaHCO3 8,4% 150mL + SG 5% 850mL = 1000mL de solução ~1,5%
OU usar puro por acesso central (BIC lenta)

PCR:
1mEq/kg EV (apenas se acidose pré-existente documentada ou PCR prolongada)

HIPERCALEMIA:
50mEq (50mL 8,4%) EV em 5-10min

INTOXICAÇÃO POR TRICÍCLICOS:
1-2mEq/kg bolus → BIC para manter pH 7,45-7,55

CUIDADOS:
NÃO misturar com Ca++ na mesma via (precipita)
Hipocalemia: corrigir K+ ANTES ou junto
Hipernatremia: considerar volume de Na+ administrado`,
    warnings: "Cada 50mL de NaHCO3 8,4% = 50mEq Na+. Risco de hipernatremia e sobrecarga volêmica. NÃO usar de rotina na PCR (sem benefício comprovado exceto situações específicas).",
  },
  {
    id: "rx-dil-insulina-bic",
    title: "Insulina Regular — Protocolo de Infusão Contínua",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Insulina Regular 50UI + SF 0,9% 49,5mL = 50mL (1UI/mL)
OU Insulina Regular 100UI + SF 0,9% 99mL = 100mL (1UI/mL)

PROTOCOLO CAD/EHH:
Bolus: 0,1UI/kg EV
Infusão: 0,1UI/kg/h em BIC
Alvo: queda de glicemia 50-70mg/dL/h
Se queda <50: dobrar taxa
Se queda >70: reduzir em 50%
Quando glicemia <250 (CAD) ou <300 (EHH): iniciar SG 5-10% + manter insulina 0,02-0,05UI/kg/h

PROTOCOLO UTI (controle glicêmico):
Alvo: 140-180mg/dL
Iniciar: 1-2UI/h se glicemia >180
Ajustar: conforme protocolo institucional (colher glicemia 1-2/2h)

HIPERCALEMIA:
Insulina Regular 10UI EV + SG 50% 40mL (4 ampolas) em 15-30min
Início de ação: 15-30min | Duração: 4-6h
Monitorar glicemia 30min e 1h após`,
    notes: "Saturar equipo com solução de insulina antes de conectar ao paciente (insulina adsorve ao plástico). Em CAD: NÃO suspender insulina até resolver acidose (pH >7,3, Bic >18, AG <12).",
  },
  {
    id: "rx-dil-dexmedetomidina",
    title: "Dexmedetomidina — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO PADRÃO:
Dexmedetomidina 200mcg (1 frasco 2mL) + SF 0,9% 48mL = 50mL
Concentração: 4 mcg/mL

DOSE:
Ataque (opcional): 0,5-1mcg/kg EV em 10-20min (pode causar bradicardia/hipotensão)
Manutenção: 0,2-0,7mcg/kg/h (até 1,4mcg/kg/h em alguns protocolos)

CÁLCULO (70kg, dose 0,5mcg/kg/h):
0,5 × 70 / 4 = 8,75mL/h

TABELA RÁPIDA (concentração 4mcg/mL):
60kg: 0,2→3mL/h | 0,5→7,5mL/h | 0,7→10,5mL/h
70kg: 0,2→3,5mL/h | 0,5→8,75mL/h | 0,7→12,25mL/h
80kg: 0,2→4mL/h | 0,5→10mL/h | 0,7→14mL/h`,
    notes: "Não causa depressão respiratória significativa — sedação cooperativa (paciente despertável). Ideal para desmame de VM e delirium em UTI.",
    warnings: "Bradicardia e hipotensão são efeitos comuns. Evitar bolus em idosos e instáveis. NÃO usar em bloqueio cardíaco ≥2º grau.",
  },
  {
    id: "rx-dil-propofol",
    title: "Propofol — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `APRESENTAÇÃO: Propofol 1% (10mg/mL) — frasco 20mL ou 50mL
NÃO precisa diluir (uso puro)

INDUÇÃO (ISR/procedimentos):
Dose: 1-2,5mg/kg EV lento (30-60s)
Exemplo 70kg: 140-175mg = 14-17,5mL

MANUTENÇÃO (sedação UTI):
Dose: 1-4mg/kg/h (5-50mcg/kg/min)
Exemplo 70kg a 2mg/kg/h: 140mg/h = 14mL/h

TABELA RÁPIDA:
60kg: 1mg/kg/h→6mL/h | 2→12mL/h | 3→18mL/h
70kg: 1mg/kg/h→7mL/h | 2→14mL/h | 3→21mL/h
80kg: 1mg/kg/h→8mL/h | 2→16mL/h | 3→24mL/h

SÍNDROME DE INFUSÃO DO PROPOFOL (PRIS):
Risco se >5mg/kg/h por >48h
Sinais: acidose metabólica, rabdomiólise, hipercalemia, arritmia, lipemia
Conduta: SUSPENDER propofol imediatamente, suporte`,
    warnings: "PRIS é fatal — NÃO exceder 5mg/kg/h por tempo prolongado. Monitorar CK e lactato se >48h. Trocar seringa a cada 12h (risco de contaminação — emulsão lipídica).",
  },
  {
    id: "rx-dil-remifentanil",
    title: "Remifentanil — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Remifentanil 2mg (1 frasco) + SF 0,9% 40mL = 40mL
Concentração: 50 mcg/mL

OU concentração dobrada:
Remifentanil 5mg + SF 0,9% 50mL = 50mL → 100mcg/mL

DOSE:
Analgesia/sedação em UTI: 0,05-0,2mcg/kg/min
Anestesia: 0,1-0,5mcg/kg/min (+ hipnótico)
Bolus: 0,5-1mcg/kg em 30-60s (procedimentos)

CÁLCULO (70kg, 0,1mcg/kg/min, conc 50mcg/mL):
0,1 × 70 × 60 / 50 = 8,4mL/h

VANTAGEM: meia-vida contexto-sensitiva de 3-4min (cessação ultra-rápida)
NÃO acumula — ideal para neurointensivismo e desmame de VM`,
    notes: "Após suspensão: dor de rebote intensa — prescrever analgesia de transição ANTES de desligar. Rigidez torácica com bolus rápido — administrar lentamente.",
  },
  {
    id: "rx-dil-nitroprussiato",
    title: "Nitroprussiato de Sódio — Diluição e Preparo",
    type: "Diluição e Preparo",
    prescription: `DILUIÇÃO:
Nitroprussiato 50mg (1 ampola) + SG 5% 250mL
Concentração: 200 mcg/mL

PROTEGER DA LUZ — envolver equipo e frasco com papel alumínio

DOSE: 0,25-10 mcg/kg/min (iniciar baixo, titular a cada 5min)
Dose habitual: 1-3 mcg/kg/min

CÁLCULO (70kg, dose 2mcg/kg/min):
2 × 70 × 60 / 200 = 42mL/h

TABELA RÁPIDA:
60kg: 0,5→9mL/h | 1→18mL/h | 2→36mL/h | 3→54mL/h
70kg: 0,5→10,5mL/h | 1→21mL/h | 2→42mL/h | 3→63mL/h
80kg: 0,5→12mL/h | 1→24mL/h | 2→48mL/h | 3→72mL/h

TOXICIDADE POR CIANETO:
Se dose >3mcg/kg/min por >72h ou >10mcg/kg/min por >10min
Sinais: acidose láctica, taquifilaxia, confusão
Antídoto: Hidroxocobalamina 5g EV OU Tiossulfato de sódio 12,5g EV`,
    warnings: "FOTOSSENSÍVEL — proteger da luz. Monitorar PA contínua (linha arterial obrigatória). Taquifilaxia = suspeitar intoxicação cianídrica.",
  },
];

