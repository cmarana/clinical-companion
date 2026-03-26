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
  {
    id: "rx-modelo-neurologico",
    title: "Modelo — Paciente Neurológico (AVC/TCE)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (zero se rebaixado / disfagia — testar deglutição)
2. SF 0,9% 1000mL EV — ___mL/h (EVITAR SG 5% — piora edema cerebral)
3. Cabeceira a 30° (reduz PIC)
4. Dipirona 1g EV 6/6h se febre ≥37,8°C (controle rigoroso de temperatura)
5. Omeprazol 40mg EV 1x/dia
6. Fenitoína 100mg EV 8/8h (profilaxia convulsão se indicada)
7. Manitol 20% ___mL EV em 20 min SOS (se sinais de herniação)
8. PA: manter conforme protocolo (AVC isquêmico: <185/110 se trombolisado)
9. Glicemia capilar 6/6h (alvo 140-180mg/dL — evitar hipo e hiperglicemia)
10. Glasgow / pupilas / déficit motor a cada 2h
11. Enoxaparina 40mg SC 1x/dia (após 24-48h se AVC isquêmico, não hemorrágico)
12. SVD (controle de diurese)
13. Fisioterapia motora e respiratória precoce
14. TC crânio de controle conforme evolução`,
    notes: "NÃO usar SG 5% no paciente neurológico (água livre piora edema). SF 0,9% é o padrão.",
  },
  {
    id: "rx-modelo-renal",
    title: "Modelo — Paciente com IRA / DRC",
    type: "Prescrição Padrão",
    prescription: `1. Dieta hipossódica, hipocalêmica, hipoproteica (0,6-0,8g/kg/dia se DRC)
2. Restrição hídrica: ___mL/dia (diurese + 500mL de perdas insensíveis)
3. SF 0,9% — EVITAR sobrecarga. Manter acesso salinizado
4. Suspender drogas nefrotóxicas: AINEs, aminoglicosídeos, contraste
5. Ajustar doses conforme TFG (ClCr estimado)
6. Furosemida ___mg EV ___/___h (se hipervolemia)
7. Bicarbonato de Sódio 8,4% ___mL se acidose grave (pH <7,1)
8. Gluconato de Cálcio 10mL EV se K+ >6,5 (proteção cardíaca)
9. Insulina Regular 10UI + SG 50% 100mL EV se K+ >6,0
10. Exames: Cr, Ur, Na, K, Ca, P, Mg, gasometria, EAS
11. USG renal (tamanho, hidronefrose)
12. Indicações de diálise de urgência: K+ refratário, acidose refratária, EAP, uremia (encefalopatia/pericardite)`,
    warnings: "Indicações de diálise de urgência (mnemônico AEIOU): Acidose, Eletrólitos (K+), Intoxicação, Overload (hipervolemia), Uremia.",
  },
  {
    id: "rx-modelo-hepatico",
    title: "Modelo — Paciente Hepatopata / Cirrótico",
    type: "Prescrição Padrão",
    prescription: `1. Dieta hipossódica (2g Na/dia), normoproteica (1,2-1,5g/kg/dia)
2. Restrição hídrica se Na <125mEq/L
3. SF 0,9% — evitar sobrecarga. Manter acesso
4. Espironolactona 100mg VO 1x/dia + Furosemida 40mg VO 1x/dia (ascite)
5. Lactulose 15-30mL VO 8/8h (alvo: 2-3 evacuações pastosas/dia)
6. Rifaximina 550mg VO 12/12h (profilaxia encefalopatia)
7. Omeprazol 20mg VO 1x/dia
8. Propranolol 20-40mg VO 12/12h (profilaxia HDA varicosa — FC alvo <55)
9. Albumina 20% se indicada (PBE, paracentese de grande volume, SHR)
10. Evitar: AINEs, aminoglicosídeos, benzodiazepínicos (preferir Haloperidol se agitação)
11. Exames: hepatograma, coagulograma, albumina, Na, K, Cr
12. Paracentese diagnóstica se ascite nova/piora (descartar PBE)
13. MELD para priorização de transplante`,
    notes: "EVITAR benzodiazepínicos no cirrótico (precipitam encefalopatia). AINEs causam IRA e sangramento.",
    guideline: "SBG / EASL",
  },
  {
    id: "rx-modelo-queimado",
    title: "Modelo — Grande Queimado",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero (se >20% SCQ) → iniciar dieta enteral precoce em 6-8h
2. 2 acessos venosos calibrosos (pode ser através da queimadura)
3. Hidratação (Parkland): RL 4mL × Peso × %SCQ em 24h
   50% nas primeiras 8h + 50% nas 16h seguintes
4. SVD (alvo diurese 0,5-1mL/kg/h adulto, 1mL/kg/h criança)
5. Analgesia agressiva: Morfina 0,1mg/kg EV (titular) + Dipirona 1g EV 6/6h
6. Profilaxia tétano (dT ± IGHAT)
7. Cuidados de queimadura: limpeza com SF + Sulfadiazina de prata 1%
8. NÃO usar ATB sistêmico profilático
9. Escarotomia se queimadura circunferencial (síndrome compartimental)
10. IOT precoce se: queimadura facial, rouquidão, pelos nasais chamuscados
11. Monitorização: hemograma, eletrólitos, gasometria, lactato
12. Transferir para Centro de Queimados se: >20% SCQ, face, mãos, pés, genitália, elétrica, inalatória`,
    warnings: "Queimadura de via aérea: IOT PRECOCE (edema progride rapidamente). Não esperar estridor.",
    guideline: "SBQ / ABA",
  },
  {
    id: "rx-modelo-pediatrico-internacao",
    title: "Modelo — Internação Pediátrica",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (livre para idade / leite materno / fórmula / pastosa)
2. Hidratação:
   Holliday-Segar: 100mL/kg (0-10kg) + 50mL/kg (10-20kg) + 20mL/kg (>20kg) /dia
   SG 5% + NaCl 20% + KCl 19,1% conforme cálculo
3. Dipirona gotas ___gts VO/EV 6/6h se febre ≥37,8°C ou dor
   (1 gota/kg, máx 40 gotas)
4. Paracetamol gotas ___gts VO 6/6h alternado (se necessário)
5. Ondansetrona ___mg EV 8/8h se vômitos (0,15mg/kg, máx 4mg)
6. ATB: _____________ (dose por kg)
7. O2 suplementar se SpO2 <92%
8. Peso diário
9. Balanço hídrico
10. Sinais vitais + PEWS a cada ___h
11. Comunicar intercorrências + chamar responsável
12. Acompanhante permanente (ECA — direito da criança)`,
    notes: "Sempre calcular doses por peso (mg/kg). Verificar dose máxima. Dupla checagem.",
  },
  {
    id: "rx-modelo-alta-geral",
    title: "Modelo — Receita de Alta Geral",
    type: "Prescrição Padrão",
    prescription: `[NOME DO PACIENTE]
[DATA]

1. _________________ — Tomar 1cp VO _____/___h por ___ dias
2. _________________ — Tomar 1cp VO _____/___h por ___ dias
3. _________________ — Tomar 1cp VO _____/___h se dor/febre
4. _________________ (proteção gástrica se AINE) — 1cp VO 1x/dia em jejum

ORIENTAÇÕES:
- Repouso relativo por ___ dias
- Hidratação oral adequada (≥2L/dia)
- Alimentação leve nos primeiros dias
- Sinais de alerta para retorno ao PS:
  [personalizar conforme diagnóstico]
- Retorno em ___ dias para reavaliação

ENCAMINHAMENTOS:
- Especialidade: _______________
- Exames de retorno: _______________

______________________________
CRM / Carimbo / Assinatura`,
    notes: "Modelo genérico — personalizar conforme diagnóstico. Sempre incluir sinais de alerta e retorno.",
  },
  {
    id: "rx-modelo-pos-pcr",
    title: "Modelo — Pós-PCR (Cuidados Pós-Ressuscitação)",
    type: "Prescrição Padrão",
    prescription: `1. UTI — monitorização contínua
2. VM protetora: VT 6-8mL/kg, PEEP 5-8, FiO2 para SpO2 94-98%
3. Sedação: Midazolam + Fentanil BIC (RASS -3 a -4)
4. PAM alvo ≥65 (Noradrenalina se necessário)
5. Hipotermia terapêutica 32-36°C por 24h (se comatoso após RCE)
6. Reaquecer 0,25-0,5°C/h após 24h
7. Glicemia 140-180mg/dL (evitar hipoglicemia)
8. Tratar causa base da PCR
9. CATE urgente se: IAMST ou forte suspeita isquêmica
10. EEG contínuo (se disponível) — monitorar status epiléptico não convulsivo
11. Gasometria, lactato, troponina seriadas
12. Neuroprognosticação: >72h após reaquecer (não antes)`,
    guideline: "AHA / ILCOR 2020 / AMIB",
  },
  {
    id: "rx-modelo-puerpera",
    title: "Modelo — Puérpera (Pós-Parto Normal)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta livre
2. Deambulação precoce (6h após parto normal)
3. SF 0,9% 500mL EV — manter acesso 12h (retirar se estável)
4. Ocitocina 10UI IM (se não recebeu no parto)
5. Dipirona 1g EV 6/6h se dor
6. Cetoprofeno 100mg VO 12/12h por 3 dias
7. Sulfato ferroso 200mg VO 1x/dia por 30-60 dias
8. Avaliar involução uterina (fundo uterino) a cada 6h
9. Vigiar lóquios (cor, quantidade, odor)
10. Avaliar mamas: pega, fissuras, ingurgitamento
11. Alojamento conjunto + amamentação livre demanda
12. Orientar contracepção pós-parto
13. Alta em 24-48h se sem complicações`,
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-modelo-dialitico",
    title: "Modelo — Paciente Renal Dialítico (Internação)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta renal (hipossódica, hipopotassêmica, hipofosfatêmica)
2. Restrição hídrica: ___mL/dia (incluir medicações EV)
3. NÃO puncionar braço da FAV (fístula arteriovenosa)
4. Evitar: anti-hipertensivos pré-diálise (risco hipotensão)
5. Ajustar doses renais de TODOS os medicamentos
6. Eritropoetina SC (conforme protocolo dialítico)
7. Sevelâmer 800mg VO junto às refeições (quelante fósforo)
8. Calcitriol 0,25mcg VO 1x/dia
9. Hemodiálise conforme escala (___x/semana)
10. Acesso dialítico: verificar funcionamento FAV/cateter
11. Eletrólitos pré e pós-diálise (K, Na, Ca, P, Mg)
12. Evitar nefrotóxicos: AINEs, aminoglicosídeos, contraste iodado (se possível)
13. Peso diário (controle de ganho interdialítico)`,
    guideline: "SBN / KDIGO / KDOQI",
  },
  {
    id: "rx-modelo-oncologico",
    title: "Modelo — Paciente Oncológico (Internação)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta conforme tolerância
2. SF 0,9% 1000mL EV — manter acesso (port-a-cath se disponível)
3. Analgesia escalonada OMS:
   Degrau 1: Dipirona 1g EV 6/6h + Paracetamol 750mg 6/6h
   Degrau 2: + Tramadol 50mg EV 6/6h OU Codeína 30mg VO 4/4h
   Degrau 3: + Morfina 5mg EV 4/4h (titular)
4. Adjuvantes: Gabapentina 300mg VO 8/8h (dor neuropática), Dexametasona 4mg EV 12/12h
5. Ondansetrona 8mg EV 8/8h (antiemético)
6. Omeprazol 40mg EV 1x/dia
7. Laxativo: Lactulose 15mL VO 12/12h (se opioide)
8. Enoxaparina 40mg SC 1x/dia (alto risco trombótico)
9. Hemograma, função renal/hepática, eletrólitos
10. Se neutropenia febril: protocolo específico (ATB na 1ª hora)`,
    notes: "Neutropenia febril: neutrófilos <500 + Tax ≥38,3°C (ou ≥38°C por >1h) = emergência oncológica.",
    guideline: "SBOC / NCCN / ASCO",
  },
  {
    id: "rx-modelo-cesarea",
    title: "Modelo — Pós-Cesárea",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero por 6h → líquida → branda → livre
2. SF 0,9% 1000mL EV a cada 8h (manter até dieta oral)
3. Ocitocina 10-20UI em SF 500mL EV (infundir em 4-8h)
4. Cefazolina 1g EV dose única profilática (se não recebeu no intraoperatório)
5. Dipirona 1g EV 6/6h
6. Cetoprofeno 100mg EV 12/12h (ou IM)
7. Tramadol 50mg EV 6/6h SN (se dor intensa)
8. Ondansetrona 4mg EV 8/8h SN
9. Enoxaparina 40mg SC 1x/dia (se fatores de risco para TEV)
10. SVD: retirar em 12-24h
11. Deambulação precoce (12-24h)
12. Curativo: trocar em 24h, manter limpo e seco
13. Alojamento conjunto + amamentação livre demanda
14. Alta em 48-72h se sem complicações`,
    guideline: "FEBRASGO / NICE / ACOG",
  },
  {
    id: "rx-modelo-observacao",
    title: "Modelo — Observação no PS (12-24h)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (conforme quadro)
2. SF 0,9% 500mL EV — manter acesso
3. Dipirona 1g EV 6/6h se dor ou febre
4. Ondansetrona 4mg EV 8/8h SN
5. _____________________ (medicação específica do caso)
6. Sinais vitais a cada 2h
7. Balanço hídrico
8. Glicemia capilar se DM
9. Reavaliação médica em 6h
10. Exames pendentes: ____________
11. Se piora: comunicar imediatamente
12. Reclassificar em 12-24h: alta / internação / transferência`,
    notes: "Modelo para observação curta no PS. Reavaliar periodicamente.",
  },
  {
    id: "rx-modelo-sala-amarela",
    title: "Modelo — Sala Amarela (Semi-intensivo)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (conforme quadro clínico)
2. SF 0,9% 1000mL EV ___mL/h
3. Monitorização contínua (PA não invasiva, FC, SpO2, ECG)
4. Sinais vitais a cada 1-2h
5. Glicemia capilar 4/4h (se DM ou crítico)
6. Dipirona 1g EV 6/6h SN
7. Omeprazol 40mg EV 1x/dia
8. Enoxaparina 40mg SC 1x/dia (se indicado)
9. O2 suplementar para SpO2 >___% (alvo conforme patologia)
10. _____________________ (medicação específica)
11. Balanço hídrico rigoroso
12. SVD se necessário (controle de diurese)
13. Comunicar plantonista se: instabilidade hemodinâmica, rebaixamento, dessaturação
14. Avaliar necessidade de vaga em UTI`,
    notes: "Sala amarela: paciente potencialmente grave que necessita monitorização contínua mas não necessariamente UTI.",
  },
  {
    id: "rx-modelo-uti-admissao",
    title: "Modelo — Admissão UTI",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero (avaliar em 24h)
2. SF 0,9% 1000mL EV ___mL/h
3. Monitorização contínua: PA invasiva, ECG, SpO2, EtCO2
4. VM: modo ___, VT ___mL, FR ___, PEEP ___, FiO2 ___
5. Sedação: Midazolam ___mg/h + Fentanil ___mcg/h BIC (RASS alvo ___)
6. Vasopressor: Noradrenalina ___mcg/kg/min (PAM alvo ≥65)
7. Omeprazol 40mg EV 1x/dia
8. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
9. Insulina Regular protocolo de correção (glicemia 140-180)
10. Cabeceira 30-45° (prevenção PAV)
11. Higiene oral com clorexidina 0,12% 8/8h
12. Fisioterapia respiratória + motora 2x/dia
13. SVD + mensurar diurese horária
14. Exames à admissão: gasometria, lactato, hemograma, eletrólitos, função renal/hepática, coagulograma
15. Balanço hídrico rigoroso 6/6h
16. Bundle FASTHUG: Feeding, Analgesia, Sedation, Thrombo, Head, Ulcer, Glucose`,
    guideline: "AMIB / SCCM",
  },
  {
    id: "rx-modelo-alta-uti",
    title: "Modelo — Alta da UTI para Enfermaria",
    type: "Modelo Padrão",
    prescription: `1. Dieta conforme liberação (branda/livre)
2. SF 0,9% 500mL EV 8/8h (manter acesso)
3. Manter medicações conforme última prescrição de UTI:
   - ATB: completar esquema (documentar D_/total)
   - Antihipertensivos VO
   - Insulina conforme esquema
4. Dipirona 1g EV 6/6h SOS
5. Omeprazol 20mg VO 1x/dia
6. Enoxaparina 40mg SC 1x/dia (manter profilaxia TVP)
7. Fisioterapia motora e respiratória 2x/dia
8. Mobilização precoce (levantar da cama no D1 de enfermaria)
9. Monitorar SSVV 6/6h
10. Hemograma, eletrólitos, função renal de controle
11. Alertar equipe: sinais de deterioração (qSOFA, NEWS)
12. Plano de alta hospitalar ao atingir critérios`,
    guideline: "AMIB / SCCM / IHI",
  },
  {
    id: "rx-modelo-semicritico",
    title: "Modelo — Paciente Semi-crítico (Semi-intensiva)",
    type: "Modelo Padrão",
    prescription: `1. Dieta branda (se VO liberada) OU dieta enteral (se disfagia)
2. SF 0,9% 500mL EV 8/8h
3. Dipirona 1g EV 6/6h SOS
4. Omeprazol 40mg EV 1x/dia
5. Enoxaparina 40mg SC 1x/dia
6. Monitorização contínua: ECG, SpO2, PA não invasiva
7. Balanço hídrico 12/12h
8. O2 suplementar se SpO2 <92%
9. HGT 6/6h — protocolo de insulina se >180
10. Cabeceira elevada 30-45°
11. SSVV a cada 4h
12. Hemograma, eletrólitos, gasometria 1x/dia
13. Critérios de transferência para UTI: instabilidade hemodinâmica, IOT, droga vasoativa
14. Critérios de transferência para enfermaria: estabilidade 24h sem O2, sem droga`,
    guideline: "AMIB / MS",
  },
  {
    id: "rx-modelo-intoxicado",
    title: "Modelo — Paciente Intoxicado (Observação)",
    type: "Modelo Padrão",
    prescription: `1. ABC — proteger via aérea (IOT se Glasgow ≤8)
2. Dieta zero até avaliação
3. SF 0,9% 1000mL EV em 4h
4. Carvão ativado 1g/kg VO (se ingestão <2h e via aérea protegida)
5. Monitorização contínua: ECG, SpO2, Glasgow horário
6. Glicemia capilar (corrigir hipoglicemia)
7. Exames: hemograma, função renal/hepática, eletrólitos, gasometria, coagulograma
8. Screening toxicológico (se disponível)
9. Antídoto específico (conforme substância):
   - BZD: Flumazenil 0,2mg EV | Opioide: Naloxona 0,4mg EV
   - Paracetamol: NAC | Organofosforado: Atropina + Pralidoxima
10. Observação mínima: 6h (substância conhecida de curta ação) / 24h (desconhecida)
11. Avaliação Psiquiatria OBRIGATÓRIA se tentativa de autoextermínio
12. CIATOX: 0800-722-6001`,
    warnings: "NÃO dar carvão ativado em: cáusticos, hidrocarbonetos, via aérea desprotegida, íleo paralítico.",
    guideline: "AACT / ABRACIT / MS",
  },
  {
    id: "rx-modelo-obeso-morbido",
    title: "Modelo — Paciente Obeso Mórbido",
    type: "Modelo Padrão",
    prescription: `1. Dieta para obeso (ajustar com Nutrição)
2. Peso real para dose de ATB e peso ideal para volumes
3. Enoxaparina 40mg SC 12/12h (profilaxia — dose ajustada para >120kg)
4. Omeprazol 40mg EV 1x/dia
5. Cabeceira elevada ≥30° (SAOS, aspiração)
6. Cama bariátrica se disponível
7. Acesso venoso: preferir USG-guiado (acessos difíceis)
8. Mobilização precoce com fisioterapia
9. Insulina SC conforme protocolo (resistência insulínica)
10. Glicemia capilar 6/6h
11. Monitorização: SpO2 contínua (risco de hipoventilação)
12. Avaliação Anestesiologia precoce se cirurgia (VAD)`,
    notes: "Dosagem de drogas: usar peso real para hidrofílicos (ATB), peso ideal para lipofílicos (Benzo). IOT: preparar para via aérea difícil.",
    guideline: "SBCBM / ASA",
  },
  {
    id: "rx-modelo-transplantado",
    title: "Modelo — Paciente Transplantado no PS",
    type: "Modelo Padrão",
    prescription: `1. MANTER imunossupressores (NÃO suspender sem orientação do centro transplantador)
   - Verificar dose e horário habitual do paciente
   - Tacrolimus / Ciclosporina / Micofenolato / Prednisona
2. Nível sérico de Tacrolimus/Ciclosporina (se disponível)
3. Hemograma, função renal, função hepática, PCR
4. Se febre: hemoculturas 2 pares + ATB empírico PRECOCE
   - Piperacilina-Tazobactam 4,5g EV 6/6h (amplo espectro)
5. Se diarreia: pesquisa de CMV, C. difficile
6. Cuidado com interações: Azólicos ↑ nível de Tacrolimus
7. Contatar centro transplantador IMEDIATAMENTE
8. Profilaxias: verificar se usa Sulfametoxazol-Trimetoprim, Aciclovir
9. Precaução de contato se internação
10. NÃO dar vacinas de vírus vivo`,
    warnings: "Paciente transplantado pode não fazer febre/leucocitose com infecção grave. Baixo limiar para investigar e tratar.",
    guideline: "ABTO / AST / KDIGO",
  },
  {
    id: "rx-modelo-reumatologico",
    title: "Modelo — Paciente Reumatológico em Flare",
    type: "Modelo Padrão",
    prescription: `1. Dieta livre (hiperproteica se corticoide dose alta)
2. Hidratação: SF 0,9% 1500mL EV/24h
3. Corticoide conforme doença de base:
   - LES: Metilprednisolona 1g/dia x 3 OU Prednisona 1mg/kg/dia
   - AR/espondiloartrite: Prednisona 10-20mg/dia
4. Manter imunossupressor habitual (discutir com Reumatologista)
5. Omeprazol 20mg VO 1x/dia
6. Cálcio 1000mg + Vitamina D 1000UI/dia
7. Profilaxia TVP: Enoxaparina 40mg SC 1x/dia (se acamado)
8. Se febre: investigar infecção ANTES de aumentar imunossupressão
   - Hemograma, PCR, hemoculturas, EAS, RX tórax
9. Profilaxia Pneumocystis se dose alta de corticoide: SMX-TMP 400/80mg/dia
10. Glicemia capilar 6/6h (corticoide)
11. Monitorizar: função renal, hepática, hemograma seriado`,
    notes: "Paciente imunossuprimido: infecção pode simular flare e vice-versa. Na dúvida, tratar AMBOS.",
    guideline: "SBR / ACR / EULAR",
  },
  {
    id: "rx-modelo-grande-queimado-uti",
    title: "Modelo — Grande Queimado UTI (>20% SCQ)",
    type: "Modelo Padrão",
    prescription: `1. ABCDE (IOT se queimadura de face/via aérea)
2. Fórmula de Parkland: 4mL x peso(kg) x %SCQ de RL
   - 50% nas primeiras 8h (desde a hora da queimadura)
   - 50% nas próximas 16h
3. SVD + diurese horária (meta: 0,5-1mL/kg/h; se mioglobinúria: 1-2mL/kg/h)
4. Analgesia:
   - Morfina 0,1mg/kg EV (titular) + Ketamina 0,3mg/kg para procedimentos
   - Dipirona 1g EV 6/6h
5. Omeprazol 40mg EV 1x/dia (úlcera de Curling)
6. Profilaxia antitetânica (dT/SAT)
7. Curativo com Sulfadiazina de prata 1% ou curativo biológico
8. Aquecimento do paciente (hipotermia agrava)
9. Nutrição enteral precoce (iniciar em 6-12h): dieta hiperproteica hipercalórica
10. ATB: NÃO usar profilático — tratar apenas infecção documentada
11. Albumina após 24h se SCQ >30%
12. Escarotomia se queimadura circunferencial (comprometimento vascular ou respiratório)`,
    warnings: "NÃO usar Succinilcolina para IOT após 24h de queimadura (hipercalemia letal). Cálculo de Parkland é guia — ajustar por diurese.",
    guideline: "SBQ / ABA / ISBI",
  },
];
