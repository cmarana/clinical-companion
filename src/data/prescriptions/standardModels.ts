import { PrescriptionItem } from "./types";

export const standardModelItems: PrescriptionItem[] = [
  {
    id: "rx-modelo-clinico",
    title: "Modelo — Paciente Clínico (Internação)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (livre / branda / leve / pastosa / líquida / zero)
2. SF 0,9% 1000mL EV — ___mL/h (ou manter acesso salinizado)
3. Dipirona 1g EV 6/6h se dor ou febre ≥37,8°C
4. Omeprazol 40mg EV 1x/dia (proteção gástrica)
5. Ondansetrona 4mg EV 8/8h se náusea/vômito
6. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — se indicado)
7. Cabeceira a 30°
8. Monitorização de sinais vitais 6/6h
9. Glicemia capilar ___/___h (se DM)
10. Insulina Regular conforme protocolo (se DM)
11. Balanço hídrico (se necessário)
12. SVD / SNG — se indicado
13. _____________ (ATB / medicação específica)
14. Exames: hemograma, função renal, eletrólitos, ___
15. Comunicar intercorrências`,
    notes: "Adaptar conforme o diagnóstico. Sempre avaliar profilaxia de TVP, proteção gástrica e controle glicêmico.",
  },
  {
    id: "rx-modelo-grave",
    title: "Modelo — Paciente Grave (UTI/Sala Vermelha)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero (até reavaliação)
2. SF 0,9% 1000mL EV — manter acesso (2 acessos calibrosos)
3. IOT + VM: Modo ___  |  FiO2 ___  |  PEEP ___  |  VC ___
4. Sedação: Midazolam ___mg/h + Fentanil ___mcg/h em BIC
5. Noradrenalina ___mcg/kg/min em BIC (se choque)
6. ATB: _________________________ (conforme foco)
7. Dipirona 1g EV 6/6h se febre
8. Omeprazol 40mg EV 1x/dia
9. Enoxaparina 40mg SC 1x/dia (se não contraindicado)
10. SVD — controle de diurese (alvo ≥0,5mL/kg/h)
11. SNG aberta (ou dieta enteral conforme avaliação)
12. Glicemia capilar 4/4h — Insulina Regular conforme protocolo
13. Monitorização contínua: ECG, PA invasiva, SpO2, capnografia
14. Gasometria arterial ___/___h
15. Exames: hemograma, função renal, lactato, coagulograma
16. Balanço hídrico rigoroso
17. Cabeceira 30-45°
18. Aspiração traqueal conforme necessidade
19. RASS alvo: ___ (-2 a -3)
20. Comunicar intercorrências IMEDIATAMENTE`,
  },
  {
    id: "rx-modelo-dor",
    title: "Modelo — Paciente com Dor",
    type: "Prescrição Padrão",
    prescription: `1. Avaliar EVA (Escala Visual Analógica): ___/10
2. Dipirona 1g EV 6/6h
3. Cetoprofeno 100mg EV 12/12h (se não CI)
4. Tramadol 50-100mg EV 8/8h (se EVA ≥5)
5. OU Morfina 2-4mg EV lento (se EVA ≥7)
6. Ondansetrona 4mg EV 8/8h (profilaxia náusea se opioide)
7. Buscopan Composto 1 amp EV 8/8h (se cólica)
8. SF 0,9% 500mL EV
9. Reavaliar dor em 30 min após medicação
10. Ajustar escalonamento conforme EVA`,
    notes: "Analgesia multimodal é mais eficaz. Associar diferentes classes.",
  },
  {
    id: "rx-modelo-febril",
    title: "Modelo — Paciente Febril",
    type: "Prescrição Padrão",
    prescription: `1. Aferir Tax axilar/timpânica — se ≥37,8°C:
2. Dipirona 1g EV 6/6h
3. OU Paracetamol 750mg VO 6/6h
4. Medidas físicas: compressas mornas
5. SF 0,9% 1000mL EV (hidratação)
6. Investigar foco:
   - Hemograma, PCR, hemocultura (2 pares)
   - EAS + urocultura
   - RX tórax
   - Outros conforme suspeita
7. Se sepse: iniciar ATB empírico na 1ª hora
8. Monitorar: sinais vitais 4/4h, lactato se suspeita de sepse`,
  },
  {
    id: "rx-modelo-vomito",
    title: "Modelo — Paciente com Vômito",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero até melhora dos vômitos
2. SF 0,9% 1000mL EV (reposição volêmica)
3. Ondansetrona 4mg EV 8/8h (1ª escolha)
4. OU Metoclopramida 10mg EV 8/8h
5. Omeprazol 40mg EV 1x/dia (se origem gástrica)
6. Glicemia capilar (hipoglicemia)
7. Eletrólitos: Na+, K+, Mg2+ (repor se necessário)
8. Avaliar causa: gastroenterite, obstrução, SNC, medicamentos, gestação
9. βHCG se mulher em idade fértil
10. Após melhora: dieta líquida → branda progressiva`,
  },
  {
    id: "rx-modelo-septico",
    title: "Modelo — Paciente Séptico",
    type: "Prescrição Padrão",
    prescription: `BUNDLE 1ª HORA:
1. Lactato arterial (repetir se >2)
2. Hemoculturas 2 pares ANTES do ATB
3. ATB empírico amplo espectro:
   Foco pulmonar: Ceftriaxona + Azitromicina
   Foco abdominal: Ceftriaxona + Metronidazol OU Piperacilina-Taz
   Foco urinário: Ceftriaxona
   Foco desconhecido: Piperacilina-Taz OU Meropenem
4. SF 0,9% 30mL/kg EV em 3h (se hipotensão ou lactato ≥4)
5. Noradrenalina se PAM <65 após volume

MONITORIZAÇÃO:
6. PA a cada 15 min (invasiva se disponível)
7. SVD — alvo diurese ≥0,5mL/kg/h
8. Gasometria + lactato a cada 2-4h
9. Hemograma, PCR, função renal, coagulograma
10. Balanço hídrico rigoroso
11. RASS se sedado
12. Reavaliar ATB em 48-72h com resultado de culturas`,
    guideline: "SSC 2021",
  },
  {
    id: "rx-modelo-pos-op",
    title: "Modelo — Pós-Operatório Imediato",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero por ___h (até peristalse ou orientação cirúrgica)
2. SF 0,9% 1000mL + SG 5% 1000mL EV — alternados, ___mL/h
3. Dipirona 1g EV 6/6h
4. Cetoprofeno 100mg EV 12/12h (se não CI)
5. Tramadol 50-100mg EV 8/8h SN (se dor moderada)
6. Ondansetrona 4mg EV 8/8h SN
7. Omeprazol 40mg EV 1x/dia
8. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
9. Cabeceira a 30°
10. Monitorização de sinais vitais 4/4h
11. Controle de drenagem / débito SNG
12. Glicemia capilar ___/___h (se DM)
13. Deambulação precoce quando possível
14. Comunicar intercorrências`,
    notes: "Ajustar analgesia pela escala EVA. Iniciar dieta conforme cirurgião/peristalse.",
  },
  {
    id: "rx-modelo-diabetico",
    title: "Modelo — Paciente Diabético Internado",
    type: "Prescrição Padrão",
    prescription: `1. Dieta para diabético (1800-2000 kcal, fracionada)
2. Glicemia capilar: antes das refeições e às 22h (4x/dia)
3. Insulina NPH ___UI SC manhã + ___UI SC noite (2/3 manhã, 1/3 noite)
4. Insulina Regular conforme escala:
   - 150-200: 2UI SC | 201-250: 4UI SC | 251-300: 6UI SC | >300: 8UI SC + avisar plantonista
5. Se dieta zero: SG 5% 500mL EV 8/8h + Insulina Regular conforme escala
6. Suspender hipoglicemiantes orais durante internação (preferir insulina)
7. Alvo glicêmico: 140-180mg/dL
8. Se hipoglicemia (<70): Glicose 50% 20mL EV + reavaliar em 15 min
9. HbA1c se não dosada nos últimos 3 meses`,
    guideline: "SBD / ADA",
  },
  {
    id: "rx-modelo-idoso",
    title: "Modelo — Paciente Idoso (>65 anos)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (avaliar consistência — risco de disfagia/aspiração)
2. SF 0,9% — cuidado com hipervolemia (500-1000mL/dia, ajustar)
3. Dipirona 500mg EV 6/6h (dose reduzida)
4. EVITAR: AINEs, Benzodiazepínicos, Metoclopramida, Anti-histamínicos 1ª geração
5. Omeprazol 20mg EV 1x/dia
6. Enoxaparina 40mg SC 1x/dia (ajustar se ClCr <30: 20mg)
7. Avaliar função renal ANTES de qualquer medicação
8. Reconciliação medicamentosa (listar todas as medicações de uso domiciliar)
9. Prevenção de delirium: orientação, iluminação, sono, mobilização precoce
10. Protocolo de prevenção de queda
11. Profilaxia de lesão por pressão (mudança de decúbito 2/2h)
12. Comunicar intercorrências — limiar baixo para investigar`,
    notes: "Critérios de Beers: lista de medicamentos potencialmente inapropriados para idosos. Sempre consultar.",
    guideline: "AGS Beers Criteria",
  },
  {
    id: "rx-modelo-politrauma",
    title: "Modelo — Paciente Politraumatizado",
    type: "Prescrição Padrão",
    prescription: `1. ABCDE do trauma — estabilizar
2. 2 acessos calibrosos (jelco 14-16G) + SF 0,9% ou RL em bolus
3. Tipagem + reserva de concentrado de hemácias
4. Ácido tranexâmico 1g EV em 10 min (se <3h do trauma)
5. Dipirona 1g EV 6/6h + Tramadol 100mg EV 8/8h
6. Omeprazol 40mg EV 1x/dia
7. Profilaxia antitetânica (dT se necessário)
8. Cefazolina 1g EV 8/8h (se fratura exposta)
9. SVD (avaliar hematúria)
10. Imobilização de fraturas
11. TC crânio + cervical + tórax + abdome (politrauma)
12. FAST à beira do leito
13. Monitorização contínua
14. Reavaliar a cada 15-30 min
15. Comunicar cirurgia se abdome agudo / FAST +`,
    guideline: "ATLS / SBAIT",
  },
  {
    id: "rx-modelo-gestante",
    title: "Modelo — Paciente Gestante (PS Obstétrico)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (livre / leve / zero)
2. SF 0,9% ou RL — manter acesso
3. Decúbito lateral esquerdo (>20 sem — evitar compressão aortocava)
4. Monitorização materna: PA, FC, SpO2 4/4h
5. BCF (batimentos cardiofetais) ___/___h
6. Cardiotocografia se ≥26 semanas
7. Analgesia: Dipirona 1g EV 6/6h OU Paracetamol 750mg VO (1ª escolha)
8. Antiemético: Dimenidrinato 50mg EV 8/8h (categoria B)
9. ATB se necessário: Cefalosporinas (1ª escolha na gestação)
10. EVITAR: AINEs (3º trim), Quinolonas, Tetraciclinas, IECA/BRA
11. Betametasona 12mg IM 2 doses (24/24h) se risco de parto prematuro 24-34 sem
12. Sulfato de magnésio se pré-eclâmpsia grave / eclâmpsia
13. Exames: hemograma, tipagem, EAS, glicemia, função renal
14. Avaliação obstétrica`,
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-modelo-psiquiatrico",
    title: "Modelo — Paciente Psiquiátrico no PS",
    type: "Prescrição Padrão",
    prescription: `1. Avaliação de risco: auto/heteroagressividade, ideação suicida
2. Contenção verbal (de-escalação) — SEMPRE primeira abordagem
3. Se agitação com risco:
   Haloperidol 5mg IM + Midazolam 5mg IM
   OU Haloperidol 5mg IM + Prometazina 50mg IM
4. Monitorar: PA, FC, SpO2, nível de consciência
5. Glicemia capilar (excluir hipoglicemia)
6. Excluir causas orgânicas: intoxicação, TCE, infecção, metabólico
7. Contenção mecânica apenas se risco iminente (protocolo institucional)
8. Reavaliar a cada 30 min
9. ECG se uso de Haloperidol EV (QTc)
10. Avaliação psiquiátrica
11. Se ideação suicida ativa: internação involuntária conforme Lei 10.216
12. Comunicar familiar/responsável`,
    notes: "Sempre excluir causa orgânica antes de atribuir a quadro psiquiátrico primário.",
    guideline: "ABP / CFM",
  },
];
