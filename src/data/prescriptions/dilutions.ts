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
];
