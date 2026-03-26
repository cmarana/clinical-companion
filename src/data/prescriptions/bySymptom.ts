import { PrescriptionItem } from "./types";

export const bySymptomItems: PrescriptionItem[] = [
  {
    id: "rx-sint-dor",
    title: "Dor Aguda",
    type: "Prescrição Sintomática",
    prescription: `Leve (EVA 1-3):
1. Dipirona 1g EV/VO 6/6h
2. Paracetamol 750mg VO 6/6h

Moderada (EVA 4-6):
3. Cetoprofeno 100mg EV 12/12h
4. Tramadol 50-100mg EV 8/8h
5. Metoclopramida 10mg EV se náusea

Intensa (EVA 7-10):
6. Morfina 2-4mg EV lento (titular a cada 5 min)
7. OU Fentanil 50-100mcg EV
8. Dipirona 1g EV 6/6h (adjuvante)
9. Ondansetrona 4mg EV 8/8h`,
    notes: "Sempre usar escala EVA. Multimodal é melhor que monoterapia.",
    guideline: "SBA",
  },
  {
    id: "rx-sint-febre",
    title: "Febre",
    type: "Prescrição Sintomática",
    prescription: `Adulto:
1. Dipirona 1g EV 6/6h (1ª escolha no Brasil)
2. OU Paracetamol 750mg VO 6/6h
3. Medidas físicas: compressas mornas
4. Hidratação EV/VO
5. Investigar foco infeccioso

Pediátrico:
6. Dipirona 15mg/kg VO/EV 6/6h
7. OU Paracetamol 10-15mg/kg VO 6/6h
8. OU Ibuprofeno 5-10mg/kg VO 8/8h (>6 meses)`,
    warnings: "NÃO usar AAS em crianças. Febre em <3 meses: SEMPRE investigar.",
    guideline: "MS / SBP",
  },
  {
    id: "rx-sint-nausea",
    title: "Náusea / Vômito",
    type: "Prescrição Sintomática",
    prescription: `1. Ondansetrona 4mg EV 8/8h (1ª escolha — menor sedação)
2. OU Metoclopramida 10mg EV 8/8h
3. OU Dimenidrinato 50mg EV 8/8h
4. SF 0,9% 500-1000mL EV (se desidratação)
5. Omeprazol 40mg EV 1x/dia (se origem gástrica)
6. Dieta líquida → branda conforme tolerância
7. Se gestante: Dimenidrinato 50mg EV (categoria B)`,
    notes: "Metoclopramida: risco de reação extrapiramidal. Reverter com Biperideno 2mg EV.",
    guideline: "SBG",
  },
  {
    id: "rx-sint-dispneia",
    title: "Dispneia",
    type: "Prescrição Sintomática",
    prescription: `Avaliação imediata:
1. SpO2, FR, PA, FC, temperatura
2. O2 suplementar se SpO2 <94% (88-92% se DPOC)
3. Gasometria arterial

Tratamento conforme causa:
Broncoespasmo:
4. Salbutamol 10 gotas NBZ + SF 3mL
5. Ipratrópio 20-40 gotas na mesma NBZ
6. Corticóide EV

EAP:
7. Furosemida 40-80mg EV + Nitroglicerina + VNI

TEP:
8. Heparina EV + AngioTC

Pneumonia:
9. ATB + O2 + suporte`,
    notes: "Dispneia aguda + dor torácica: descartar IAM, TEP, pneumotórax.",
  },
  {
    id: "rx-sint-agitacao",
    title: "Agitação / Delirium",
    type: "Prescrição Sintomática",
    prescription: `1. Excluir: hipoglicemia, hipóxia, dor, retenção urinária, drogas
2. Haloperidol 5mg IM (1ª escolha)
3. Midazolam 5mg IM (se agitação intensa)
4. OU Haloperidol 5mg + Prometazina 50mg IM
5. Monitorar nível de consciência, PA, SpO2
6. Contenção mecânica apenas se risco iminente
7. Após estabilização: investigar causa orgânica`,
    warnings: "Haloperidol EV: monitorar QTc. NÃO usar BZD isolado em idosos com delirium.",
    guideline: "ABP / AMIB",
  },
  {
    id: "rx-sint-insonia",
    title: "Insônia — Paciente Internado",
    type: "Prescrição Sintomática",
    prescription: `1. Medidas não farmacológicas primeiro: reduzir ruído, luz, horários de intervenção
2. Zolpidem 5-10mg VO à noite (adulto)
3. OU Prometazina 25mg VO à noite
4. OU Difenidramina 25-50mg VO à noite
5. Idoso: Trazodona 25-50mg VO à noite (mais seguro)
6. NÃO usar BZD de rotina em idosos
7. Avaliar dor, ansiedade, delirium como causa`,
    warnings: "BZD em idosos: risco de queda, delirium, depressão respiratória.",
    guideline: "AMIB / SBA",
  },
  {
    id: "rx-sint-tosse",
    title: "Tosse",
    type: "Prescrição Sintomática",
    prescription: `Tosse seca:
1. Dextrometorfano 15-30mg VO 6/6h
2. OU Codeína 10-20mg VO 6/6h (adulto, se intensa)
3. Mel + limão (adjuvante — exceto <1 ano)

Tosse produtiva:
4. NÃO suprimir — facilitar expectoração
5. Ambroxol 30mg VO 8/8h
6. OU N-acetilcisteína 600mg VO 1x/dia
7. Nebulização com SF 0,9% 3-5mL
8. Hidratação oral abundante

Investigar causa se >3 semanas:
9. RX tórax, espirometria, pesquisa BAAR`,
    notes: "Codeína: NÃO usar em <12 anos. Tosse crônica: pensar em refluxo, gotejamento nasal, asma.",
  },
  {
    id: "rx-sint-diarreia",
    title: "Diarreia",
    type: "Prescrição Sintomática",
    prescription: `1. Hidratação oral (SRO) — 1ª medida
2. SF 0,9% EV se desidratação moderada/grave
3. Ondansetrona 4mg EV se vômitos associados
4. Racecadotrila 100mg VO 8/8h (adulto)
5. Probiótico: Saccharomyces boulardii 200mg 12/12h
6. Dieta: evitar lactose, gordura por 3-5 dias
7. NÃO usar Loperamida se: febre, sangue, disenteria`,
    warnings: "Diarreia + febre + sangue = disenteria. Considerar ATB (Ciprofloxacino).",
    guideline: "OMS / SBG",
  },
  {
    id: "rx-sint-constipacao",
    title: "Constipação",
    type: "Prescrição Sintomática",
    prescription: `Medidas gerais:
1. Hidratação oral ≥2L/dia
2. Fibras na dieta

Laxantes:
3. Lactulose 15-30mL VO 12/12h (1ª escolha)
4. OU Polietilenoglicol (Muvinlax) 1 envelope VO 1-2x/dia
5. Bisacodil 5-10mg VO à noite (se necessário)
6. Óleo mineral 15-30mL VO 1x/dia (curto prazo)
7. Fleet enema retal se impactação

Investigar se >4 semanas:
8. Colonoscopia (se >50 anos ou sinais de alarme)`,
    notes: "Em internados: avaliar opioides, anticolinérgicos, imobilização como causa.",
  },
  {
    id: "rx-sint-vertigem",
    title: "Vertigem",
    type: "Prescrição Sintomática",
    prescription: `1. Dimenidrinato 50mg EV 8/8h (1ª escolha)
2. OU Meclizina 25mg VO 8/8h
3. Ondansetrona 4mg EV se vômitos
4. SF 0,9% 500mL EV
5. Betaistina 24mg VO 12/12h (manutenção)
6. Manobra de Epley (se VPPB)
7. Investigar: Dix-Hallpike, nistagmo, déficit neurológico
8. Se sinais centrais (nistagmo vertical, ataxia): TC/RNM urgente`,
    notes: "VPPB: Manobra de Epley é o tratamento. Medicação é sintomática.",
    guideline: "SBO / ABN",
  },
  {
    id: "rx-sint-dor-toracica",
    title: "Dor Torácica",
    type: "Prescrição Sintomática",
    prescription: `Avaliação imediata:
1. ECG 12 derivações em até 10 min
2. Troponina + CK-MB
3. RX tórax
4. Monitorização contínua
5. AAS 200mg VO (mastigar) se suspeita de SCA
6. Nitroglicerina SL (se PA >100 e sem CI)
7. Morfina 2-4mg EV se dor refratária
8. O2 se SpO2 <94%
9. Diagnósticos diferenciais: IAM, TEP, dissecção, pneumotórax, pericardite`,
    warnings: "Dor torácica + instabilidade = sala vermelha. NÃO dar alta sem excluir SCA.",
  },
  {
    id: "rx-sint-soluço",
    title: "Soluço Persistente",
    type: "Prescrição Sintomática",
    prescription: `1. Manobras vagais: Valsalva, água gelada, susto
2. Metoclopramida 10mg EV 8/8h
3. OU Clorpromazina 25mg EV/IM (se refratário)
4. OU Baclofeno 5-10mg VO 8/8h
5. Gabapentina 300mg VO 8/8h (se crônico)
6. Omeprazol 40mg EV (se origem gástrica)
7. Investigar causa se >48h: RX tórax, TC crânio, função renal`,
    notes: "Soluço >48h = investigar SNC, diafragma, mediastino, metabólico.",
  },
  {
    id: "rx-sint-prurido",
    title: "Prurido",
    type: "Prescrição Sintomática",
    prescription: `Agudo/alérgico:
1. Difenidramina 50mg EV (ou Hidroxizina 25mg VO)
2. Dexametasona 4mg EV (se componente inflamatório)
3. Compressas frias
4. Loratadina 10mg VO 1x/dia (manutenção)

Por opioides:
5. Naloxona em dose baixa (0,25-0,5mcg/kg/h)
6. OU Ondansetrona 4mg EV

Urêmico/colestático:
7. Colestiramina 4g VO (colestase)
8. Gabapentina 100-300mg (urêmico)`,
  },
  {
    id: "rx-sint-edema",
    title: "Edema / Retenção Hídrica",
    type: "Prescrição Sintomática",
    prescription: `1. Avaliar causa: IC, DRC, síndrome nefrótica, hepática, medicamentosa
2. Restrição hídrica 800-1000mL/dia
3. Restrição de sódio (<2g/dia)
4. Furosemida 40mg EV (ajustar conforme resposta)
5. OU Furosemida 40mg VO 1x/dia (ambulatorial)
6. Espironolactona 25mg VO 1x/dia (se IC ou ascite)
7. Controle de peso diário
8. Balanço hídrico
9. Eletrólitos: Na+, K+, Mg2+, creatinina
10. Albumina sérica (hipoalbuminemia = edema refratário)`,
    notes: "Edema + dispneia = considerar IC ou síndrome nefrótica. ECO + BNP.",
  },
];
