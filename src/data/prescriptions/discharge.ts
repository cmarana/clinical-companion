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
  {
    id: "rx-alta-convulsao",
    title: "Alta — Crise Convulsiva",
    type: "Prescrição de Alta",
    prescription: `1. Fenitoína 100mg — 1cp VO 8/8h (se iniciada na emergência)
2. OU Valproato 500mg — 1cp VO 12/12h
3. OU Levetiracetam 500mg — 1cp VO 12/12h (se 1ª crise)
4. NÃO dirigir até liberação médica
5. Evitar álcool, privação de sono, estresse
6. Retorno neurologia em 1-2 semanas
7. EEG ambulatorial
8. Retorno PS se: nova crise, confusão prolongada, trauma`,
    notes: "1ª crise: investigar causa. Iniciar anticonvulsivante a critério do neurologista.",
  },
  {
    id: "rx-alta-pancreatite",
    title: "Alta — Pancreatite Leve",
    type: "Prescrição de Alta",
    prescription: `1. Paracetamol 750mg — 1cp VO 6/6h se dor
2. OU Tramadol 50mg — 1cp VO 8/8h se dor moderada
3. Omeprazol 20mg — 1cp VO em jejum 1x/dia por 14 dias
4. Dieta branda, hipolipídica por 2-4 semanas
5. Abstinência alcoólica ABSOLUTA
6. Retorno ambulatorial (gastroenterologia) em 1-2 semanas
7. USG abdome controle (avaliar colelitíase como causa)
8. Retorno PS se: dor intensa, febre, vômitos incoercíveis`,
    notes: "Se causa biliar: colecistectomia programada para evitar recorrência.",
  },
  {
    id: "rx-alta-tep",
    title: "Alta — TEP (após estabilização)",
    type: "Prescrição de Alta",
    prescription: `1. Rivaroxabana 15mg — 1cp VO 12/12h por 21 dias → depois 20mg 1x/dia
2. OU Apixabana 10mg VO 12/12h por 7 dias → depois 5mg 12/12h
3. OU Warfarina: ajustar dose conforme INR (alvo 2-3) — sobrepor com Enoxaparina por 5 dias
4. Meia elástica de compressão (se TVP associada)
5. Investigar trombofilia se: <50 anos, sem fator provocador, recorrência
6. Tempo de anticoagulação: 3 meses (provocado) a indefinido (idiopático/recorrente)
7. Retorno hematologia/pneumologia em 2-4 semanas
8. Retorno PS se: dispneia, dor torácica, hemoptise, sangramento`,
    guideline: "SBC / ESC",
  },
  {
    id: "rx-alta-gota",
    title: "Alta — Crise Gotosa",
    type: "Prescrição de Alta",
    prescription: `1. Colchicina 0,5mg — 1cp VO 12/12h por 7 dias
2. Naproxeno 500mg — 1cp VO 12/12h por 5-7 dias (com protetor gástrico)
3. OU Prednisona 20mg — 1cp VO 1x/dia por 5 dias (se CI a AINE)
4. Omeprazol 20mg — 1cp VO 1x/dia em jejum (proteção gástrica)
5. Aumentar ingesta hídrica (≥2L/dia)
6. Evitar: álcool, vísceras, frutos do mar, refrigerantes açucarados
7. NÃO iniciar Alopurinol agora (esperar 2-4 semanas)
8. Retorno reumatologia para avaliação de profilaxia com Alopurinol
9. Retorno PS se: febre, articulação muito quente/vermelha (excluir artrite séptica)`,
    guideline: "SBR / EULAR",
  },
  {
    id: "rx-alta-herpes-zoster",
    title: "Alta — Herpes Zoster",
    type: "Prescrição de Alta",
    prescription: `1. Valaciclovir 1g — 1cp VO 8/8h por 7 dias (iniciar <72h)
2. OU Aciclovir 800mg — 1cp VO 5x/dia por 7 dias
3. Gabapentina 300mg — 1cp VO à noite (neuralgia)
4. Dipirona 500mg — 1cp VO 6/6h se dor
5. Tramadol 50mg — 1cp VO 8/8h se dor intensa
6. Manter lesões limpas e secas (NÃO romper vesículas)
7. Contagioso até todas as lesões estarem em crosta
8. Retorno se: envolvimento ocular, disseminação, piora da dor
9. Encaminhar dermatologia/neurologia se neuralgia persistente`,
  },
  {
    id: "rx-alta-tvp",
    title: "Alta — TVP (Trombose Venosa)",
    type: "Prescrição de Alta",
    prescription: `1. Rivaroxabana 15mg — 1cp VO 12/12h por 21 dias → depois 20mg 1x/dia
2. OU Apixabana 10mg VO 12/12h por 7 dias → depois 5mg 12/12h
3. Meia elástica de compressão graduada (usar durante o dia)
4. Deambulação precoce (repouso NÃO é mais recomendado)
5. Elevar MMII ao repouso
6. Evitar: viagens longas, imobilização prolongada
7. Tempo de anticoagulação: mínimo 3 meses (reavaliar com hematologista)
8. Retorno hematologia em 2-4 semanas
9. Retorno PS se: dispneia, dor torácica, edema progressivo, sangramento`,
    guideline: "SBC / ISTH",
  },
  {
    id: "rx-alta-erisipela",
    title: "Alta — Erisipela / Celulite",
    type: "Prescrição de Alta",
    prescription: `1. Cefalexina 500mg — 1cp VO 6/6h por 10-14 dias
2. OU Amoxicilina-Clavulanato 500/125mg — 1cp VO 8/8h por 10 dias
3. Dipirona 500mg — 1cp VO 6/6h se dor/febre
4. Elevação do membro afetado
5. Cuidados com a pele: hidratar, tratar micose interdigital (porta de entrada)
6. Cetoconazol creme nos espaços interdigitais 1x/dia por 30 dias
7. Meias de compressão (se edema crônico)
8. Retorno em 48-72h para reavaliação
9. Retorno PS se: piora do eritema, febre alta, bolhas, crepitação`,
    notes: "Tratar porta de entrada é fundamental para prevenir recorrência.",
  },
  {
    id: "rx-alta-endocardite-profilaxia",
    title: "Alta — Profilaxia de Endocardite",
    type: "Prescrição de Alta",
    prescription: `Indicações: prótese valvar, endocardite prévia, cardiopatia congênita cianótica

Procedimento dentário (manipulação gengival/periapical):
1. Amoxicilina 2g VO dose única — 30-60 min antes do procedimento
2. Se alergia: Clindamicina 600mg VO dose única
3. Se não tolerar VO: Ampicilina 2g EV/IM

NÃO indicada para:
- Procedimentos GI/GU de rotina
- Sopro inocente
- Prolapso mitral sem regurgitação

Orientações:
4. Levar cartão/orientação para o dentista
5. Manter higiene dental rigorosa`,
    guideline: "SBC / AHA",
  },
  {
    id: "rx-alta-fratura-tornozelo",
    title: "Alta — Fratura de Tornozelo / Entorse",
    type: "Prescrição de Alta",
    prescription: `1. Imobilização com tala gessada suropodálica (manter até consulta)
2. NÃO apoiar o pé (usar muletas)
3. Membro elevado + gelo 20 min 4/4h por 48h
4. Dipirona 500mg — 1cp VO 6/6h se dor
5. Cetoprofeno 100mg — 1cp VO 12/12h por 5 dias (com alimento)
6. Omeprazol 20mg — 1cp VO 1x/dia em jejum
7. Enoxaparina 40mg SC 1x/dia (se imobilização >7 dias — avaliar risco TVP)
8. Retorno ortopedia em 5-7 dias com RX
9. Retorno PS se: dor insuportável, dedos roxos/inchados, formigamento`,
  },
  {
    id: "rx-alta-lombalgia-aguda",
    title: "Alta — Lombalgia Aguda (atualizada)",
    type: "Prescrição de Alta",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h se dor
2. Ibuprofeno 600mg — 1cp VO 8/8h por 5-7 dias (com alimento)
3. Ciclobenzaprina 5mg — 1cp VO à noite por 7-10 dias
4. OU Carisoprodol composto — 1cp VO 8/8h (máx 10 dias)
5. NÃO repouso absoluto (manter atividades toleráveis)
6. Compressas quentes 20min 3-4x/dia
7. Evitar: carregar peso, ficar muito tempo sentado
8. Sinais de alerta (retornar PS):
   Perda de força em MMII, incontinência urinária/fecal (cauda equina),
   anestesia em sela, febre + lombalgia, perda de peso
9. Se >6 semanas sem melhora: RMN lombar
10. Encaminhar fisioterapia`,
    notes: "Red flags: <20 ou >55 anos, trauma, neoplasia prévia, uso de corticoide, perda de peso, déficit neurológico.",
  },
  {
    id: "rx-alta-conjuntivite",
    title: "Alta — Conjuntivite",
    type: "Prescrição de Alta",
    prescription: `Viral (mais comum):
1. Compressas frias com SF 0,9% 4-6x/dia
2. Lágrima artificial sem conservante 4-6x/dia
3. NÃO usar antibiótico tópico (viral = autolimitada em 7-14 dias)
4. Higiene rigorosa (lavar mãos, não compartilhar toalha)
5. Afastamento de trabalho/escola por 7 dias (altamente contagioso)

Bacteriana (secreção purulenta):
6. Ciprofloxacino colírio 0,3% — 1 gota 4/4h por 7 dias
7. OU Tobramicina colírio — 1 gota 4/4h por 7 dias
8. Compressas mornas para remover secreção

9. Retorno se: piora da dor, borramento visual, fotofobia intensa (excluir ceratite, uveíte)`,
    notes: "NÃO usar corticoide tópico sem avaliação oftalmológica (risco de herpes ocular).",
  },
  {
    id: "rx-alta-otite",
    title: "Alta — Otite Média Aguda",
    type: "Prescrição de Alta",
    prescription: `1. Amoxicilina 500mg — 1cp VO 8/8h por 10 dias (adulto)
2. Se falha/recorrente: Amoxicilina-Clavulanato 500/125mg VO 8/8h por 10 dias
3. Dipirona 500mg — 1cp VO 6/6h se dor
4. OU Ibuprofeno 400mg VO 8/8h (analgésico + anti-inflamatório)
5. NÃO usar descongestionantes orais (sem benefício comprovado)
6. NÃO pingar nada no ouvido sem orientação do otorrino
7. Evitar entrada de água no ouvido
8. Retorno em 48-72h se não melhorar
9. Retorno PS se: febre alta persistente, inchaço atrás da orelha (mastoidite)`,
    guideline: "ABORL-CCF",
  },
  {
    id: "rx-alta-urticaria",
    title: "Alta — Urticária Aguda",
    type: "Prescrição de Alta",
    prescription: `1. Cetirizina 10mg — 1cp VO 1x/dia por 7-14 dias
2. OU Loratadina 10mg — 1cp VO 1x/dia
3. Se intensa: Prednisona 40mg — 1cp VO 1x/dia por 3-5 dias
4. Banho frio/morno (NÃO quente — piora)
5. Evitar alérgeno identificado
6. Evitar: álcool, AINEs, alimentos histaminérgicos na crise
7. Retorno PS se: edema de lábio/língua/garganta, dificuldade para respirar, tontura
   (sinais de anafilaxia)
8. Se recorrente (>6 semanas): encaminhar alergista`,
  },
  {
    id: "rx-alta-ic",
    title: "Alta — Insuficiência Cardíaca",
    type: "Prescrição de Alta",
    prescription: `1. Carvedilol 3,125mg — 1cp VO 12/12h (titular gradualmente)
2. Enalapril 5mg — 1cp VO 12/12h (ou Losartana 50mg se tosse)
3. Espironolactona 25mg — 1cp VO 1x/dia
4. Furosemida 40mg — 1cp VO pela manhã (ajustar conforme congestão)
5. Controle de peso diário (ganho >1kg/dia = reter líquido)
6. Restrição hídrica 1,5L/dia se NYHA III-IV
7. Dieta hipossódica (2g Na/dia)
8. Retorno cardiologia em 7-14 dias
9. Retorno PS se: dispneia piora, edema piorando, ganho >2kg em 2 dias`,
    guideline: "SBC / ESC",
  },
  {
    id: "rx-alta-avc",
    title: "Alta — AVC Isquêmico",
    type: "Prescrição de Alta",
    prescription: `1. AAS 100mg — 1cp VO 1x/dia (após almoço)
2. Atorvastatina 40-80mg — 1cp VO à noite
3. Anti-hipertensivo conforme perfil (manter PA <130/80 após fase aguda)
4. Se FA: Rivaroxabana 20mg 1x/dia OU Apixabana 5mg 12/12h
5. Fisioterapia / fonoaudiologia / terapia ocupacional
6. Paracetamol 750mg VO 6/6h SN
7. Retorno neurologia em 30 dias
8. RNM crânio + AngioTC de carótidas ambulatorial se não feitos
9. Retorno PS se: novo déficit, cefaleia súbita intensa, convulsão`,
    guideline: "ABN / AHA/ASA 2019",
  },
  {
    id: "rx-alta-pielonefrite",
    title: "Alta — Pielonefrite",
    type: "Prescrição de Alta",
    prescription: `1. Ciprofloxacino 500mg — 1cp VO 12/12h por 7-10 dias
2. OU Ceftriaxona 1g IM 1x/dia por 7 dias (se não tolera VO)
3. Paracetamol 750mg VO 6/6h se dor ou febre
4. Buscopan simples 10mg VO 6/6h se cólica
5. Hidratação oral abundante (≥2L/dia)
6. Urocultura de controle após tratamento
7. Retorno em 48-72h para reavaliação clínica
8. Retorno PS se: febre persistente, vômitos, piora da dor lombar`,
    guideline: "SBI / IDSA",
  },
  {
    id: "rx-alta-diabetes-descomp",
    title: "Alta — Diabetes Descompensado",
    type: "Prescrição de Alta",
    prescription: `1. Metformina 850mg — 1cp VO no almoço e jantar
2. Glicazida MR 30mg — 1cp VO no café (titular conforme glicemia)
3. OU Insulina NPH __UI SC café + __UI SC jantar (ajustar conforme)
4. Insulina Regular conforme tabela de correção
5. Glicemia capilar: jejum + antes do jantar
6. Dieta diabética (orientação nutricional)
7. Retorno endocrinologia em 15-30 dias
8. HbA1c + função renal + perfil lipídico em 30 dias
9. Retorno PS se: poliúria intensa, vômitos, confusão, glicemia >400`,
    guideline: "SBD / ADA",
  },
  {
    id: "rx-alta-meningite",
    title: "Alta — Meningite Viral",
    type: "Prescrição de Alta",
    prescription: `1. Paracetamol 750mg — 1cp VO 6/6h se febre ou dor
2. Ibuprofeno 400mg — 1cp VO 8/8h se cefaleia intensa
3. Repouso em ambiente escuro e silencioso
4. Hidratação oral abundante
5. Retorno em 48-72h para reavaliação
6. Retorno PS se: febre alta, rigidez de nuca piora, convulsão, confusão mental
7. Notificação epidemiológica se meningocócica`,
  },
  {
    id: "rx-alta-queimadura",
    title: "Alta — Queimadura Menor",
    type: "Prescrição de Alta",
    prescription: `1. Sulfadiazina de prata 1% — aplicar na área queimada 1x/dia após limpeza
2. OU Curativo com gaze vaselinada (Adaptic) se face/articulações
3. Paracetamol 750mg VO 6/6h SN dor
4. Ibuprofeno 400mg VO 8/8h SN (se não contraindicado)
5. Tramadol 50mg VO 6/6h se dor intensa
6. Limpeza com SF 0,9% + troca de curativo 1x/dia
7. Não estourar bolhas íntegras
8. Verificar vacinação antitetânica
9. Retorno em 48-72h para reavaliação do curativo
10. Retorno PS se: sinais de infecção (secreção purulenta, febre, odor fétido)`,
    guideline: "SBCP / ABA",
  },
  {
    id: "rx-alta-colica-renal-2",
    title: "Alta — Cólica Renal com Cálculo Pequeno",
    type: "Prescrição de Alta",
    prescription: `1. Cetoprofeno 100mg — 1cp VO 12/12h por 5 dias
2. Dipirona 1g — 1cp VO 6/6h se dor
3. Tansulosina 0,4mg — 1cp VO 1x/dia (terapia expulsiva para cálculos <10mm)
4. Buscopan composto — 1cp VO 6/6h SN
5. Hidratação oral normal (≥2L/dia) — NÃO forçar hiper-hidratação na cólica aguda
6. Coar urina para capturar cálculo (enviar para análise)
7. TC sem contraste ou USG de controle em 2-4 semanas
8. Retorno urologia em 30 dias
9. Retorno PS se: febre, anúria, dor refratária`,
    guideline: "SBU / EAU / AUA",
  },
  {
    id: "rx-alta-fibrilacao-atrial",
    title: "Alta — Fibrilação Atrial",
    type: "Prescrição de Alta",
    prescription: `1. Controle de FC:
   Metoprolol 50mg VO 12/12h OU Diltiazem 60mg VO 8/8h
2. Anticoagulação (se CHA₂DS₂-VASc ≥2 homem / ≥3 mulher):
   Rivaroxabana 20mg 1x/dia no almoço OU Apixabana 5mg 12/12h
3. Se cardioversão eletiva: manter anticoagulação 4 semanas antes + 4 semanas depois
4. Controle de PA se hipertenso
5. TSH (excluir hipertireoidismo)
6. Ecocardiograma ambulatorial
7. Retorno cardiologia em 7-15 dias
8. Retorno PS se: palpitação intensa, síncope, dispneia, AVC-like`,
    guideline: "SBC / ESC / AHA",
  },
  {
    id: "rx-alta-sepse",
    title: "Alta — Pós-Sepse",
    type: "Prescrição de Alta",
    prescription: `1. Completar ATB conforme foco (duração total: ___dias)
2. ATB VO de transição: _______ (conforme sensibilidade)
3. Paracetamol 750mg VO 6/6h se febre ou dor
4. Probiótico VO 1x/dia (após ATB prolongado)
5. Retorno para repetir hemograma + PCR em 7 dias
6. Fisioterapia motora se descondicionamento (pós-UTI)
7. Avaliação nutricional (caquexia pós-sepse é comum)
8. Retorno PS se: febre, calafrios, piora do estado geral
9. Follow-up ambulatorial em 30 dias (mortalidade pós-sepse é alta nos primeiros 90 dias)`,
    guideline: "SSC / ILAS",
  },
];

