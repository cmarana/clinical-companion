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
];

