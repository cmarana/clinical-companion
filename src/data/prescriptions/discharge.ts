import { PrescriptionItem } from "./types";

export const dischargeItems: PrescriptionItem[] = [
  {
    id: "rx-alta-pneumonia",
    title: "Alta — Pneumonia",
    type: "Prescrição de Alta",
    prescription: `1. Amoxicilina 500mg — Tomar 1cp VO 8/8h por 7 dias
2. OU Levofloxacino 750mg — 1cp VO 1x/dia por 5 dias (se alergia)
3. Paracetamol 750mg — 1cp VO 6/6h se febre ou dor
4. Hidratação oral abundante (≥2L/dia)
5. Repouso relativo
6. Retorno se: febre persistente >48h, piora da dispneia, hemoptise
7. Retorno ambulatorial em 7-10 dias com novo RX tórax`,
  },
  {
    id: "rx-alta-itu",
    title: "Alta — ITU",
    type: "Prescrição de Alta",
    prescription: `1. Nitrofurantoína 100mg — 1cp VO 6/6h por 5 dias
2. OU Cefalexina 500mg — 1cp VO 6/6h por 7 dias
3. Dipirona 500mg — 1cp VO 6/6h se dor
4. Hidratação oral abundante
5. Retorno com resultado de urocultura em 5-7 dias
6. Retorno se: febre, dor lombar, vômitos`,
  },
  {
    id: "rx-alta-lombalgia",
    title: "Alta — Dor Lombar",
    type: "Prescrição de Alta",
    prescription: `1. Ibuprofeno 600mg — 1cp VO 8/8h por 5 dias (com alimento)
2. Ciclobenzaprina 5mg — 1cp VO 8/8h por 5-7 dias
3. Paracetamol 750mg — 1cp VO 6/6h se dor (intercalar com AINE)
4. Compressas mornas na região 3x/dia por 20 min
5. Evitar repouso absoluto — manter atividades leves
6. Retorno se: dor irradiada para MMII, perda de força, alteração esfincteriana`,
    warnings: "Red flags: déficit motor, síndrome de cauda equina, febre + lombalgia = urgência.",
  },
  {
    id: "rx-alta-cefaleia",
    title: "Alta — Cefaleia",
    type: "Prescrição de Alta",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h se dor
2. OU Ibuprofeno 400mg — 1cp VO 8/8h se dor (com alimento)
3. Sumatriptano 50mg — 1cp VO no início da crise (se migrânea)
4. Metoclopramida 10mg — 1cp VO se náusea
5. Evitar gatilhos: jejum prolongado, estresse, álcool, pouco sono
6. Retorno se: cefaleia mais intensa que o habitual, febre, vômitos, alteração visual
7. Encaminhar neurologia se >4 crises/mês`,
  },
  {
    id: "rx-alta-gastroenterite",
    title: "Alta — Gastroenterite",
    type: "Prescrição de Alta",
    prescription: `1. SRO — tomar após cada evacuação
2. Hidratação oral abundante
3. Paracetamol 750mg — 1cp VO 6/6h se febre
4. Ondansetrona 4mg — 1cp VO 8/8h se náusea (por 2-3 dias)
5. Probiótico (Saccharomyces boulardii) — 1cp VO 12/12h por 5 dias
6. Dieta: evitar leite, gorduras, alimentos pesados por 3-5 dias
7. Retorno se: febre >38,5°C, sangue nas fezes, desidratação, >5 dias de diarreia`,
    warnings: "NÃO usar Loperamida se febre ou disenteria.",
  },
  {
    id: "rx-alta-crise-has",
    title: "Alta — Crise Hipertensiva",
    type: "Prescrição de Alta",
    prescription: `1. Losartana 50mg — 1cp VO 1x/dia (manhã)
2. OU Captopril 25mg — 1cp VO 12/12h (se já usa IECA)
3. Anlodipino 5mg — 1cp VO 1x/dia (se necessário 2º droga)
4. Hidroclorotiazida 25mg — 1cp VO 1x/dia (se necessário)
5. Orientar: dieta hipossódica, exercício regular, cessar tabagismo
6. MAPA ou MRPA em 2-4 semanas
7. Retorno ambulatorial em 1-2 semanas para reavaliação
8. Retorno PS se: PA >180x110, cefaleia intensa, dor torácica, dispneia`,
    guideline: "SBC 2020",
  },
  {
    id: "rx-alta-asma",
    title: "Alta — Asma",
    type: "Prescrição de Alta",
    prescription: `1. Prednisolona 40mg — 1cp VO 1x/dia por 5-7 dias
2. Salbutamol spray — 2 jatos com espaçador 4/4h por 5 dias
3. Budesonida + Formoterol (manutenção): 1 inalação 12/12h
4. Espaçador para uso do spray
5. Orientar técnica inalatória correta
6. Retorno ambulatorial (pneumologia) em 1-2 semanas
7. Plano de ação por escrito para crises
8. Retorno ao PS se: dispneia persistente, uso >8 jatos/dia de resgate`,
    guideline: "GINA 2023",
  },
  {
    id: "rx-alta-dor-muscular",
    title: "Alta — Dor Muscular",
    type: "Prescrição de Alta",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h se dor
2. OU Ibuprofeno 400mg — 1cp VO 8/8h (com alimento, por 5 dias)
3. Ciclobenzaprina 5mg — 1cp VO 8/8h por 5-7 dias (relaxante)
4. Compressas mornas 20 min 3x/dia
5. Atividade física leve — evitar repouso prolongado
6. Retorno se piora ou dor >7 dias`,
  },
  {
    id: "rx-alta-dpoc",
    title: "Alta — DPOC Exacerbada",
    type: "Prescrição de Alta",
    prescription: `1. Prednisona 40mg — 1cp VO 1x/dia por 5 dias
2. Amoxicilina-Clavulanato 875mg — 1cp VO 12/12h por 7 dias (se escarro purulento)
3. Salbutamol spray — 2-4 jatos com espaçador 4/4h conforme dispneia
4. Ipratrópio spray — 2 jatos 6/6h
5. Manter medicações de uso contínuo
6. Cessação tabágica OBRIGATÓRIA
7. Retorno se piora da dispneia ou febre
8. Retorno pneumologia em 1-2 semanas`,
    guideline: "GOLD 2024",
  },
  {
    id: "rx-alta-colica-renal",
    title: "Alta — Cólica Renal",
    type: "Prescrição de Alta",
    prescription: `1. Ibuprofeno 600mg — 1cp VO 8/8h por 5 dias (com alimento)
2. Dipirona 500mg — 1cp VO 6/6h se dor
3. Tamsulosina 0,4mg — 1cp VO à noite (terapia expulsiva, cálculos 5-10mm)
4. Buscopan Simples 10mg — 1cp VO 8/8h se cólica
5. Hidratação oral 2-3L/dia (APÓS resolver a cólica aguda)
6. Coar urina (filtrar o cálculo para análise)
7. Retorno se: febre, dor incontrolável, parada de diurese
8. Retorno urologia em 2-4 semanas com TC/USG controle`,
  },
  {
    id: "rx-alta-celulite",
    title: "Alta — Celulite / Erisipela",
    type: "Prescrição de Alta",
    prescription: `1. Cefalexina 500mg — 1cp VO 6/6h por 7-10 dias
2. OU Amoxicilina-Clavulanato 875mg — 1cp VO 12/12h por 7-10 dias
3. Dipirona 500mg — 1cp VO 6/6h se dor/febre
4. Elevação do membro afetado
5. Compressas mornas
6. Retorno em 48-72h para reavaliação obrigatória
7. Retorno imediato se: piora da vermelhidão, febre alta, bolhas, crepitação`,
  },
  {
    id: "rx-alta-dengue",
    title: "Alta — Dengue (Grupo A/B)",
    type: "Prescrição de Alta",
    prescription: `1. Hidratação oral: 60-80 mL/kg/dia
2. Paracetamol 750mg — 1cp VO 6/6h se febre (1ª escolha)
3. OU Dipirona 500mg — 1cp VO 6/6h
4. Repouso
5. NÃO usar AAS, Ibuprofeno, Diclofenaco ou qualquer AINE
6. Retorno DIÁRIO até 48h após fim da febre
7. Sinais de alarme (retorno IMEDIATO): dor abdominal intensa, vômitos persistentes, sangramento, tontura, sonolência`,
    warnings: "Fase crítica da dengue = quando a febre BAIXA (3º-7º dia). Atenção redobrada.",
    guideline: "MS 2024",
  },
  {
    id: "rx-alta-fa",
    title: "Alta — Fibrilação Atrial",
    type: "Prescrição de Alta",
    prescription: `1. Metoprolol 50mg — 1cp VO 12/12h (controle de FC)
2. OU Diltiazem 60mg — 1cp VO 8/8h
3. Rivaroxabana 20mg — 1cp VO 1x/dia com refeição (se CHA2DS2-VASc indicar)
4. OU Apixabana 5mg — 1cp VO 12/12h
5. Encaminhar cardiologia em 1-2 semanas
6. Retorno PS se: palpitações intensas, dispneia, síncope, sangramento`,
    guideline: "SBC / ESC",
  },
];
