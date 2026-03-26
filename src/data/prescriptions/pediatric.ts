import { PrescriptionItem } from "./types";

export const pediatricItems: PrescriptionItem[] = [
  {
    id: "rx-ped-febre",
    title: "Febre na Criança",
    type: "Prescrição Pediátrica",
    prescription: `1. Dipirona gotas: 1 gota/kg VO 6/6h (máx 40 gotas)
2. OU Paracetamol gotas: 1 gota/kg VO 6/6h (máx 35 gotas)
3. OU Ibuprofeno 50mg/mL: 1 gota/kg VO 8/8h (>6 meses)
4. Medidas físicas: banho morno, roupas leves
5. Hidratação oral reforçada
6. Retorno se: febre >48h, prostração, manchas, convulsão, <3 meses com febre`,
    notes: "Febre em <3 meses: SEMPRE investigar (hemograma, PCR, hemocultura, EAS, urocultura). Internar se <1 mês.",
    warnings: "NÃO usar AAS em crianças (Síndrome de Reye).",
    guideline: "SBP 2023",
  },
  {
    id: "rx-ped-desidratacao",
    title: "Desidratação Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Plano A (sem desidratação):
1. SRO após cada evacuação: <1 ano: 50-100mL; 1-10 anos: 100-200mL

Plano B (desidratação leve/moderada):
2. TRO: SRO 50-100mL/kg em 4-6h (via oral, frequente, pequenos volumes)
3. Se vômitos: Ondansetrona 0,15mg/kg VO/EV (máx 4mg)
4. Reavaliar após 4h

Plano C (desidratação grave):
5. SF 0,9% 20mL/kg EV em 20-30 min (repetir até 3x)
6. Reavaliar: se melhorou → Plano B
7. Se choque: SF 0,9% 20mL/kg em bolus rápido
8. Glicemia capilar (hipoglicemia frequente)`,
    guideline: "OMS / MS / SBP",
  },
  {
    id: "rx-ped-asma",
    title: "Asma Pediátrica — Crise",
    type: "Prescrição Pediátrica",
    prescription: `Leve/Moderada:
1. Salbutamol spray 2-4 jatos com espaçador a cada 20 min (3x)
2. Ipratrópio 2 jatos a cada 20 min (3x)
3. Prednisolona 1-2mg/kg VO (máx 40mg)

Grave:
4. Salbutamol NBZ: 0,15mg/kg (mín 2,5mg) + SF 3mL a cada 20 min
5. Ipratrópio 250mcg na NBZ
6. Metilprednisolona 1-2mg/kg EV
7. Sulfato de magnésio 25-50mg/kg EV em 20 min (máx 2g)
8. O2 para SpO2 >94%
9. Adrenalina IM se risco de PCR`,
    guideline: "GINA 2023 / SBP",
  },
  {
    id: "rx-ped-convulsao-febril",
    title: "Convulsão Febril",
    type: "Prescrição Pediátrica",
    prescription: `Durante a crise:
1. Proteção (posição lateral, nada na boca)
2. Diazepam 0,3-0,5mg/kg EV (máx 10mg) OU retal 0,5mg/kg
3. OU Midazolam 0,2mg/kg IM/intranasal
4. Antitérmico: Dipirona 15mg/kg EV

Após a crise:
5. Observação por 4-6h
6. Glicemia capilar
7. Investigar foco infeccioso
8. Punção lombar: se <12 meses, suspeita de meningite, ou crise complexa
9. Orientar pais: convulsão febril simples é benigna`,
    notes: "Convulsão febril SIMPLES: <15 min, generalizada, sem recorrência em 24h, 6m-5 anos.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-pneumonia",
    title: "Pneumonia Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Ambulatorial (>2 meses, sem gravidade):
1. Amoxicilina 50mg/kg/dia VO dividido 8/8h por 7-10 dias
2. Dipirona gotas 1gota/kg 6/6h se febre
3. Hidratação oral

Hospitalar (sinais de gravidade):
4. Penicilina Cristalina 200.000 UI/kg/dia EV div 6/6h
5. OU Ampicilina 200mg/kg/dia EV div 6/6h
6. SF 0,9% — acesso venoso
7. O2 se SpO2 <92%
8. Dipirona 15mg/kg EV 6/6h
9. RX tórax + hemograma + PCR`,
    notes: "<2 meses: SEMPRE internar. ATB: Ampicilina + Gentamicina.",
    guideline: "SBP / OMS",
  },
  {
    id: "rx-ped-sepse",
    title: "Sepse Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1ª HORA:
1. O2 alto fluxo
2. SF 0,9% 20mL/kg EV em 5-10 min (repetir até 60mL/kg)
3. Ceftriaxona 100mg/kg EV (máx 4g) — ATB IMEDIATO
4. Glicemia: se <70 → Glicose 25% 2mL/kg EV
5. Cálcio: Gluconato de Cálcio 10% 1mL/kg EV lento

Se refratário a fluido:
6. Adrenalina 0,1-1mcg/kg/min OU Noradrenalina
7. Hidrocortisona 2mg/kg EV (se refratário a catecolaminas)
8. IOT precoce se instável`,
    warnings: "Criança compensa choque até colapso súbito. PAM mínima = 40 + (2 × idade em anos).",
    guideline: "SSC 2020 Pediatric / SBP",
  },
  {
    id: "rx-ped-anafilaxia",
    title: "Anafilaxia Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1. Adrenalina 1:1000 — 0,01mg/kg IM na coxa (máx 0,3mg em <30kg)
2. Repetir a cada 5-15 min se necessário
3. SF 0,9% 20mL/kg EV rápido
4. Difenidramina 1mg/kg EV (máx 50mg)
5. Metilprednisolona 1-2mg/kg EV
6. Salbutamol NBZ se broncoespasmo
7. O2 alto fluxo
8. Monitorização por 6-8h`,
    warnings: "Dose de adrenalina pediátrica: 0,01mg/kg (máx 0,3mg se <30kg, 0,5mg se >30kg).",
    guideline: "SBP / WAO",
  },
  {
    id: "rx-ped-dor",
    title: "Analgesia Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `Dor leve:
1. Dipirona 15mg/kg VO/EV 6/6h
2. Paracetamol 10-15mg/kg VO 6/6h (máx 75mg/kg/dia)
3. Ibuprofeno 5-10mg/kg VO 8/8h (>6 meses)

Dor moderada:
4. Tramadol 1-2mg/kg EV 6/6h (>1 ano)
5. OU Codeína 0,5-1mg/kg VO 6/6h (>12 anos)

Dor intensa:
6. Morfina 0,1mg/kg EV lento (titular)
7. OU Fentanil 1-2mcg/kg EV
8. Monitorar SpO2 e FR`,
    warnings: "NÃO usar AAS em crianças. Codeína: contraindicada <12 anos (metabolismo variável).",
    guideline: "SBP / SBA",
  },
  {
    id: "rx-ped-bronquiolite",
    title: "Bronquiolite Viral Aguda",
    type: "Prescrição Pediátrica",
    prescription: `1. O2 suplementar se SpO2 <92%
2. Aspiração nasal com SF 0,9% antes das mamadas
3. Hidratação: VO ou EV conforme tolerância
4. Posição: cabeceira elevada 30°
5. Monitorização de SpO2 e FR
6. Cateter nasal de alto fluxo (se disponível e SpO2 <92%)
7. NÃO usar: broncodilatador de rotina, corticóide, antibiótico
8. Teste rápido para VSR (se disponível)
9. Internação se: <3 meses, prematuro, SpO2 <92%, apneias, recusa alimentar`,
    notes: "Bronquiolite é VIRAL. ATB apenas se infecção bacteriana secundária documentada.",
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-laringite",
    title: "Laringite / Crupe",
    type: "Prescrição Pediátrica",
    prescription: `Leve (estridor apenas ao chorar):
1. Dexametasona 0,15-0,6mg/kg VO dose única (máx 10mg)
2. Observação por 2-4h

Moderada/Grave (estridor em repouso):
3. Nebulização com Adrenalina pura (1:1000) 3-5mL
4. Dexametasona 0,6mg/kg VO/EV (máx 10mg)
5. O2 umidificado se SpO2 <94%
6. Observar por 3-4h após NBZ com adrenalina (efeito rebote)
7. Se grave/sem resposta: considerar IOT (tubo 0,5-1mm menor)`,
    notes: "Adrenalina NBZ: início em 10-30min, duração ~2h. Observar efeito rebote.",
    guideline: "SBP",
  },
  {
    id: "rx-ped-itu",
    title: "ITU Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `<3 meses ou grave: INTERNAR
1. Ampicilina 100mg/kg/dia EV div 6/6h + Gentamicina 5mg/kg/dia EV

3 meses-2 anos (moderada):
2. Ceftriaxona 50mg/kg/dia EV 1x/dia

>2 anos (leve, ambulatorial):
3. Cefalexina 50mg/kg/dia VO div 6/6h por 7-10 dias
4. OU Amoxicilina-Clavulanato

Sempre solicitar:
5. EAS + urocultura (coleta por cateterismo se <2 anos)
6. USG renal
7. UCM se <6 meses ou ITU recorrente`,
    guideline: "SBP / AAP",
  },
  {
    id: "rx-ped-cetoacidose",
    title: "Cetoacidose Diabética Pediátrica",
    type: "Prescrição Pediátrica",
    prescription: `1. SF 0,9% 20mL/kg EV em 1h (expansão) → 10mL/kg/h nas 2h seguintes
2. NÃO corrigir desidratação rápido demais (risco de edema cerebral)
3. Insulina Regular 0,1UI/kg/h EV contínua (iniciar APÓS 1ª hora de hidratação)
4. K+ ≥5,3: não repor. K+ 3,5-5,3: 40mEq/L no soro. K+ <3,5: repor ANTES da insulina
5. Glicemia capilar 1/1h
6. Gasometria 2/2h
7. Quando glicemia <250: trocar para SG 5% + SF 0,45% e reduzir insulina
8. Transição para SC quando pH >7,3 e HCO3 >15 e paciente comendo`,
    warnings: "Edema cerebral: cefaleia, bradicardia, alteração consciência → Manitol 0,5-1g/kg EV.",
    guideline: "SBP / ISPAD",
  },
];
