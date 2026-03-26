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
];
