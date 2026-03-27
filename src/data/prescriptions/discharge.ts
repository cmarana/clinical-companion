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
  {
    id: "rx-alta-diverticulite",
    title: "Alta — Diverticulite Não Complicada",
    type: "Prescrição de Alta",
    prescription: `1. Ciprofloxacino 500mg — 1cp VO 12/12h por 7-10 dias
2. Metronidazol 400mg — 1cp VO 8/8h por 7-10 dias
3. OU Amoxicilina-Clavulanato 875/125mg — 1cp VO 12/12h por 7-10 dias
4. Paracetamol 750mg VO 6/6h se dor (evitar AINEs)
5. Buscopan simples 10mg VO 6/6h SN
6. Dieta líquida 48-72h → progredir para dieta com fibras gradualmente
7. Hidratação oral abundante
8. Retorno em 5-7 dias para reavaliação
9. Colonoscopia em 6-8 semanas (excluir neoplasia)
10. Retorno PS se: febre, piora dor, vômitos, distensão abdominal`,
    guideline: "CBCD / WSES",
  },
  {
    id: "rx-alta-pneumotorax",
    title: "Alta — Pneumotórax Pequeno",
    type: "Prescrição de Alta",
    prescription: `1. O2 suplementar por cateter nasal em domicílio NÃO é necessário
2. Repouso relativo por 7-14 dias
3. Evitar: esforço físico intenso, voo comercial, mergulho por 6 semanas
4. Paracetamol 750mg VO 6/6h SN (dor pleurítica)
5. NÃO usar AINEs (risco de sangramento)
6. RX tórax de controle em 7-14 dias
7. Se pneumotórax primário espontâneo pequeno (<2cm no ápice): pode acompanhar ambulatorialmente
8. Retorno IMEDIATO ao PS se: dispneia piora, dor torácica intensa, taquicardia
9. Encaminhar pneumologia
10. Orientar: cessar tabagismo (reduz recorrência em 50%)`,
    guideline: "SBPT / BTS / ACCP",
  },
  {
    id: "rx-alta-colecistite",
    title: "Alta — Pós-Colecistectomia",
    type: "Prescrição de Alta",
    prescription: `1. Dieta leve por 7-14 dias → progredir gradualmente
2. Evitar: frituras, gorduras, condimentos fortes por 30 dias
3. Paracetamol 750mg VO 6/6h SN
4. Cetoprofeno 100mg VO 12/12h por 3-5 dias SN
5. Tramadol 50mg VO 6/6h SN se dor intensa
6. Omeprazol 20mg VO em jejum por 14 dias
7. Cuidados com ferida operatória: manter limpo e seco
8. Retirar pontos em 7-10 dias (UBS)
9. Retorno cirurgião em 15-30 dias
10. Retorno PS se: febre, icterícia, dor abdominal intensa, saída de bile pela ferida`,
  },
  {
    id: "rx-alta-pancreatite-2",
    title: "Alta — Pancreatite Aguda Leve",
    type: "Prescrição de Alta",
    prescription: `1. Dieta hipogordurosa estrita por 30 dias
2. Evitar absolutamente: álcool (abstinência total)
3. Paracetamol 750mg VO 6/6h SN
4. Tramadol 50mg VO 6/6h SN se dor
5. Omeprazol 20mg VO em jejum por 14 dias
6. Enzima pancreática (Creon) se esteatorréia
7. USG abdome em 30 dias (reavaliação biliar)
8. Colecistectomia eletiva se biliar (prevenir recorrência)
9. Retorno gastroenterologia em 15-30 dias
10. Retorno PS se: dor intensa, febre, vômitos, icterícia`,
    guideline: "SBG / AGA / ESGE",
  },
  {
    id: "rx-alta-trombocitopenia",
    title: "Alta — Trombocitopenia Imune (PTI)",
    type: "Prescrição de Alta",
    prescription: `1. Prednisona 1mg/kg/dia VO (máx 80mg) — desmame em 4-8 semanas
2. Omeprazol 20mg VO em jejum (proteção gástrica)
3. Evitar: AAS, AINEs, anticoagulantes
4. Evitar atividades com risco de trauma
5. Hemograma semanal nas primeiras 4 semanas
6. Retorno hematologia em 7-14 dias
7. Retorno PS se: sangramento ativo, petéquias novas extensas, hematúria, melena
8. Se refratária: Romiplostim SC, Eltrombopag VO, ou esplenectomia`,
    guideline: "ABHH / ASH / ITP Foundation",
  },
  {
    id: "rx-alta-apendicectomia",
    title: "Alta — Pós-Apendicectomia",
    type: "Prescrição de Alta",
    prescription: `1. Dieta leve por 3-5 dias → progredir gradualmente
2. Paracetamol 750mg VO 6/6h SN
3. Cetoprofeno 100mg VO 12/12h por 3-5 dias
4. Tramadol 50mg VO 6/6h SN se dor intensa
5. Se apendicite complicada: ATB VO para completar 5-7 dias
   Ciprofloxacino 500mg 12/12h + Metronidazol 400mg 8/8h
6. Cuidados com ferida: manter limpo e seco
7. Retirar pontos em 7-10 dias (UBS)
8. Evitar esforço físico por 15-30 dias
9. Retorno cirurgião em 15 dias
10. Retorno PS se: febre, dor abdominal intensa, vômitos, saída de secreção pela ferida`,
    guideline: "CBCD / WSES",
  },
  {
    id: "rx-alta-mordedura",
    title: "Alta — Mordedura Animal",
    type: "Prescrição de Alta",
    prescription: `1. Amoxicilina-Clavulanato 875/125mg — 1cp VO 12/12h por 5-7 dias
2. Paracetamol 750mg VO 6/6h SN
3. Ibuprofeno 400mg VO 8/8h SN por 3-5 dias
4. Limpeza da ferida com água e sabão 3x/dia
5. Curativo com SF 0,9% + gaze estéril
6. NÃO suturar (exceto face — sutura após lavar bem)
7. Verificar vacinação antitetânica → dT se >5 anos
8. Esquema antirrábico conforme orientação médica
9. Retorno em 48h para reavaliação da ferida
10. Retorno PS se: sinais de infecção (vermelhidão, pus, febre, edema progressivo)`,
    guideline: "MS / SVS",
  },
  {
    id: "rx-alta-intoxicacao",
    title: "Alta — Pós-Intoxicação Exógena",
    type: "Prescrição de Alta",
    prescription: `1. Exames de controle em 24-48h (função hepática se paracetamol, função renal)
2. Se intencional: alta SOMENTE após avaliação psiquiátrica
3. Encaminhamento CAPS / Psiquiatria ambulatorial
4. Plano de segurança: restringir acesso a meios letais
5. Contato com familiar/responsável obrigatório
6. NÃO prescrever medicações em quantidade excessiva
7. Medicações prescritas: manter com familiar responsável
8. Retorno em 48-72h (período de maior risco de nova tentativa)
9. Retorno PS se: sintomas novos, vômitos, dor abdominal, icterícia, confusão
10. Notificação compulsória realizada (violência autoprovocada)`,
    warnings: "NUNCA dar alta sem avaliação psiquiátrica em tentativa de suicídio. Período de maior risco: primeiras 72h.",
    guideline: "ABP / MS / OMS",
  },
  {
    id: "rx-alta-acidente-ofidico",
    title: "Alta — Acidente Ofídico",
    type: "Prescrição de Alta",
    prescription: `1. Completar ATB se ferida infectada (Amoxicilina-Clavulanato 875mg 12/12h)
2. Dipirona 1g VO 6/6h SN
3. Cetoprofeno 100mg VO 12/12h por 5 dias SN
4. Elevar membro afetado
5. Cuidados com ferida: limpeza com SF, curativo oclusivo
6. Hemograma + coagulograma de controle em 24h e 48h
7. Função renal de controle em 48h (IRA tardia)
8. NÃO usar AINEs se coagulopatia persistente
9. Retorno em 24-48h para reavaliação
10. Fisioterapia se edema extenso ou síndrome compartimental tratada
11. Retorno PS se: sangramento, piora do edema, urina escura, febre`,
    guideline: "MS / Instituto Butantan",
  },
  {
    id: "rx-alta-sinusite",
    title: "Alta — Sinusite Aguda",
    type: "Prescrição de Alta",
    prescription: `1. Amoxicilina 500mg — 1cp VO 8/8h por 10-14 dias
2. OU Amoxicilina-Clavulanato 875mg VO 12/12h (se falha ou recorrente)
3. Ibuprofeno 400mg VO 8/8h por 5 dias SN
4. Paracetamol 750mg VO 6/6h SN
5. Lavagem nasal com SF 0,9% 6/6h (seringa 20mL)
6. Budesonida nasal 64mcg — 2 jatos em cada narina 2x/dia por 14 dias
7. Descongestionante nasal (Oximetazolina): máximo 3-5 dias
8. Hidratação oral abundante
9. Retorno em 7-10 dias se não melhorar
10. Retorno PS se: febre alta, edema periorbitário, cefaleia intensa, alteração visual`,
    guideline: "ABORL / AAO-HNS",
  },
  {
    id: "rx-alta-abscesso-drenado",
    title: "Alta — Abscesso Drenado",
    type: "Prescrição de Alta",
    prescription: `1. Cefalexina 500mg — 1cp VO 6/6h por 7-10 dias
2. OU Amoxicilina-Clavulanato 875mg — 1cp VO 12/12h por 7 dias
3. Dipirona 500mg — 1cp VO 6/6h se dor
4. Ibuprofeno 600mg — 1cp VO 8/8h por 3 dias (se dor/edema)
5. Curativo diário com SF 0,9%: lavar a cavidade, tamponar com gaze
6. Manter dreno (se houver) — orientar cuidados
7. Retorno em 48h para reavaliação do curativo
8. Retorno PS se: febre, aumento de dor, secreção purulenta, vermelhidão progressiva`,
    guideline: "IDSA / SBI",
  },
  {
    id: "rx-alta-faringoamigdalite",
    title: "Alta — Faringoamigdalite",
    type: "Prescrição de Alta",
    prescription: `1. Amoxicilina 500mg — 1cp VO 8/8h por 10 dias (estreptocócica)
2. OU Penicilina Benzatina 1.200.000 UI IM dose única (alternativa)
3. Paracetamol 750mg — 1cp VO 6/6h se dor/febre
4. Ibuprofeno 400mg — 1cp VO 8/8h por 3 dias (dor intensa)
5. Orientar gargarejo com água morna e sal
6. Hidratação oral e dieta pastosa
7. Repouso por 48-72h
8. Retorno se: piora após 48h de ATB, trismo, abaulamento de palato, disfagia com sialorreia`,
    notes: "Se alergia a penicilina: Azitromicina 500mg VO 1x/dia por 3 dias.",
    guideline: "ABORL / SBI",
  },
  {
    id: "rx-alta-hernia-disco",
    title: "Alta — Lombalgia / Hérnia de Disco",
    type: "Prescrição de Alta",
    prescription: `1. Cetoprofeno 100mg — 1cp VO 12/12h por 5-7 dias (com protetor gástrico)
2. Omeprazol 20mg — 1cp VO em jejum
3. Ciclobenzaprina 5mg — 1cp VO à noite (relaxante muscular)
4. OU Tizanidina 2mg — 1cp VO 8/8h
5. Dipirona 500mg — 1cp VO 6/6h se dor
6. Se dor intensa: Tramadol 50mg — 1cp VO 8/8h por 5 dias
7. Compressa quente local 20 min 3x/dia
8. Orientar atividade gradual (NÃO repouso absoluto)
9. Encaminhar Fisioterapia
10. Retorno se: piora progressiva, fraqueza em MMII, perda de controle esfincteriano (Síndrome da Cauda Equina — PS URGENTE)`,
    warnings: "Red flags: déficit motor, anestesia em sela, incontinência urinária/fecal = RNM urgente + avaliação neurocirúrgica.",
    guideline: "SBR / ACP / NICE",
  },
  {
    id: "rx-alta-crise-ansiosa",
    title: "Alta — Crise Ansiosa / Pânico",
    type: "Prescrição de Alta",
    prescription: `1. Orientar que não é 'doença orgânica grave' — psicoeducação sobre ansiedade
2. Diazepam 5mg — 1cp VO 12/12h por 3-5 dias (SOS) — receita B1
3. OU Alprazolam 0,5mg — 1cp VO 12/12h por 5 dias (SOS) — receita B1
4. Encaminhar Psiquiatria / Psicologia ambulatorial
5. Orientar técnicas de respiração (4-7-8)
6. Evitar cafeína, álcool, estimulantes
7. Atividade física regular
8. Retorno PS se: dor torácica atípica, dispneia súbita, ideação suicida`,
    notes: "BZD é ponte — NUNCA manter sem acompanhamento psiquiátrico. Investigar organicidade na primeira crise.",
    guideline: "ABP / APA / NICE",
  },
  {
    id: "rx-alta-conjuntivite-bacteriana",
    title: "Alta — Conjuntivite Bacteriana",
    type: "Prescrição de Alta",
    prescription: `1. Ciprofloxacino colírio 0,3% — 1 gota no olho afetado 4/4h por 7 dias
2. OU Moxifloxacino colírio 0,5% — 1 gota 8/8h por 7 dias
3. Compressas frias com SF 0,9% — 3-4x/dia
4. Higiene das mãos rigorosa (altamente contagiosa)
5. Trocar fronhas e toalhas diariamente
6. Evitar coçar os olhos
7. Paracetamol 750mg — 1cp VO 6/6h se dor
8. Retorno se: piora visual, dor ocular intensa, secreção abundante após 48h de ATB`,
    guideline: "CBO / AAO",
  },
  {
    id: "rx-alta-queimadura-menor",
    title: "Alta — Queimadura Menor (<10% SCQ)",
    type: "Prescrição de Alta",
    prescription: `1. Ibuprofeno 600mg VO 8/8h por 5 dias (com alimento)
2. OU Dipirona 500mg VO 6/6h se dor
3. Paracetamol 750mg VO 6/6h (alternativa/adjuvante)
4. Sulfadiazina de prata 1% tópica: aplicar camada fina 1x/dia após limpeza com SF
5. Curativo: gaze não aderente + gaze simples + atadura. Trocar 1x/dia
6. Lavar a área com SF 0,9% ou água corrente limpa antes de cada troca
7. NÃO estourar bolhas — proteger com curativo acolchoado
8. Retorno em 48h para reavaliação
9. Retorno imediato se: febre, secreção purulenta, piora da dor, mau cheiro
10. Dieta hiperproteica (auxiliar cicatrização)`,
    guideline: "SBQ / ABA",
  },
  {
    id: "rx-alta-angina-estavel",
    title: "Alta — Dor Torácica / Angina Estável Investigada",
    type: "Alta Hospitalar",
    prescription: `1. AAS 100mg VO 1x/dia (uso contínuo)
2. Atenolol 25-50mg VO 1x/dia OU Metoprolol 50mg VO 12/12h
3. Sinvastatina 40mg VO à noite OU Rosuvastatina 10-20mg
4. Isossorbida 5mg SL se dor anginosa (máx 3 doses, 5min intervalo)
5. Enalapril 10mg VO 12/12h (se HAS, DM ou disfunção VE)
6. Dieta hipossódica, hipolipídica
7. Cessar tabagismo
8. Atividade física orientada (teste ergométrico antes)
9. Retorno Cardiologia em 7-14 dias com exames
10. Retorno imediato se: dor torácica em repouso, dispneia, síncope`,
    guideline: "SBC / AHA / ESC",
  },
  {
    id: "rx-alta-avc-isquemico",
    title: "Alta — AVC Isquêmico (Pós-Internação)",
    type: "Alta Hospitalar",
    prescription: `1. AAS 100mg VO 1x/dia (ou Clopidogrel 75mg se intolerância)
2. Sinvastatina 40-80mg VO à noite (meta LDL <70)
3. Anti-hipertensivo conforme indicação (iniciar após 24-48h):
   - Losartana 50mg VO 1x/dia OU Enalapril 10mg VO 12/12h
4. Se FA: Rivaroxabana 20mg VO 1x/dia OU Warfarina (INR 2-3)
5. Controle glicêmico se DM
6. Fisioterapia motora + fonoaudiologia (disfagia, afasia)
7. Avaliação Neurologia em 30 dias
8. Eco Doppler de carótidas (se não realizado)
9. Ecocardiograma TT (fonte embólica)
10. Sinais de alarme: déficit focal novo, cefaleia intensa, convulsão, febre`,
    notes: "Dupla antiagregação (AAS + Clopidogrel) por 21 dias em AVC minor (NIHSS ≤3) ou AIT de alto risco.",
    guideline: "ABN / AHA / ESO",
  },
  {
    id: "rx-alta-bronquiolite",
    title: "Alta — Bronquiolite (Lactente)",
    type: "Alta Hospitalar",
    prescription: `1. NÃO prescrever broncodilatadores de rotina (benefício não comprovado)
2. Lavagem nasal com SF 0,9% frequente (antes das mamadas e ao deitar)
3. Aspiração nasal suave se obstrução
4. Fracionamento das mamadas (volumes menores, mais frequentes)
5. Cabeceira elevada 30°
6. Paracetamol 1 gota/kg VO 6/6h se febre (>37,8°C)
7. Sinais de retorno imediato:
   - Tiragem subcostal/intercostal
   - Gemência, batimento de asa nasal
   - Recusa alimentar >50%
   - Cianose, apneia
   - Piora da dispneia
8. Retorno em 48-72h para reavaliação
9. Manter aleitamento materno`,
    notes: "Pico da doença: dia 3-5. Melhora gradual em 7-14 dias. Tosse residual pode durar 2-4 semanas.",
    guideline: "SBP / AAP / NICE",
  },
  {
    id: "rx-alta-epoc-exacerbacao",
    title: "Alta — DPOC Exacerbação (Pós-PS)",
    type: "Alta Hospitalar",
    prescription: `1. Prednisona 40mg VO 1x/dia por 5 dias (não prolongar)
2. Salbutamol spray 200mcg (2 jatos) 4/4-6/6h por 7 dias
3. Brometo de Ipratrópio spray 40mcg (2 jatos) 6/6h por 7 dias
4. Se ATB indicado (escarro purulento + dispneia): 
   - Amoxicilina-Clavulanato 875/125mg VO 12/12h 5 dias OU
   - Azitromicina 500mg VO 1x/dia 3 dias
5. Manter medicações de base (LABA, LAMA, CI)
6. Cessar tabagismo (referência ambulatorial)
7. Vacinação: Influenza anual, Pneumo 23
8. Retorno Pneumologia em 7-14 dias
9. Retorno imediato se: dispneia pior que antes da alta, febre >38,5°C, escarro hemoptoico`,
    guideline: "GOLD / SBPT / ATS",
  },
  {
    id: "rx-alta-fratura-costela",
    title: "Alta — Fratura de Costela Simples",
    type: "Alta Hospitalar",
    prescription: `1. Dipirona 1g VO 6/6h (analgesia regular por 7-10 dias)
2. Ibuprofeno 600mg VO 8/8h por 5-7 dias (com alimentação)
3. Tramadol 50mg VO 8/8h SN (dor intensa, máx 5 dias)
4. Omeprazol 20mg VO 1x/dia (proteção gástrica)
5. Exercícios respiratórios: inspiração profunda 10x a cada hora (IMPORTANTÍSSIMO)
6. NÃO enfaixar ou imobilizar o tórax
7. Gelo local 15min 3-4x/dia
8. Retorno imediato se: falta de ar, piora da dor, febre, escarro com sangue
9. Retorno ambulatorial em 14 dias
10. RX tórax de controle se piora clínica`,
    notes: "Consolidação: 4-6 semanas. Dor pode persistir 2-3 meses. Fisioterapia respiratória é a medida mais importante para prevenir pneumonia.",
    guideline: "SBOT / SBCT",
  },
  {
    id: "rx-alta-luxacao-ombro",
    title: "Alta — Luxação de Ombro (Pós-Redução)",
    type: "Alta Hospitalar",
    prescription: `1. Tipoia (Velpeau) por 3-4 semanas (<40 anos) ou 1-2 semanas (>40 anos)
2. Gelo local 20min 3-4x/dia (primeiras 48h)
3. Dipirona 1g VO 6/6h por 7 dias
4. Ibuprofeno 600mg VO 8/8h por 5 dias (com alimentação)
5. Paracetamol 750mg VO 6/6h SN (alternância)
6. RX pós-redução realizado (documentar congruência)
7. NÃO elevar braço acima do ombro por 4-6 semanas
8. Iniciar exercícios pendulares em 7-10 dias
9. Fisioterapia após retirada da tipoia (fortalecimento manguito rotador)
10. Retorno Ortopedia em 7-14 dias
11. Recidiva >2 episódios em <25 anos: considerar cirurgia (Bankart)`,
    guideline: "SBOT / AAOS",
  },
  {
    id: "rx-alta-crise-renal-aguda",
    title: "Alta — IRA Não Dialítica (Pós-PS)",
    type: "Alta Hospitalar",
    prescription: `1. Hidratação oral vigorosa: 2-3L/dia (se sem restrição)
2. SUSPENDER nefrotóxicos: AINEs, aminoglicosídeos, contraste
3. Ajustar doses de medicamentos por função renal
4. Creatinina e eletrólitos: repetir em 48-72h
5. Dieta hipoproteica leve (0,8g/kg/dia) temporariamente
6. Evitar suplementos de potássio
7. Retorno imediato se: oligúria (<500mL/dia), edema, dispneia, confusão
8. Retorno Nefrologia em 7-14 dias
9. Causas pré-renais: manter hidratação e PA adequadas
10. Se uso crônico de IECA/BRA: reavaliar dose com Nefrologista`,
    notes: "IRA pré-renal: reversível com hidratação. IRA intrínseca: pode levar 2-6 semanas para recuperar. Creatinina pode continuar subindo 24-48h após resolução da causa.",
    guideline: "KDIGO / SBN",
  },
  {
    id: "rx-alta-pneumonia-comunitaria",
    title: "Alta — Pneumonia Adquirida na Comunidade (PAC)",
    type: "Alta",
    prescription: `1. Amoxicilina 500mg VO 8/8h por 5-7 dias (PAC leve, sem comorbidades)
   OU Amoxicilina-Clavulanato 875/125mg VO 12/12h por 7 dias (com comorbidades)
   OU Azitromicina 500mg VO 1x/dia por 3 dias (se alergia a penicilina)
2. Dipirona 1g VO 6/6h SN (febre/dor)
3. Paracetamol 750mg VO 6/6h SN (alternância com Dipirona)
4. Hidratação oral abundante (≥2L/dia)
5. Repouso relativo por 5-7 dias
6. RX tórax controle em 4-6 semanas (resolução radiológica)
7. Retorno imediato se: febre persistente >48h, dispneia progressiva, hemoptise
8. Retorno ambulatorial em 7 dias
9. Vacinar anti-pneumocócica e anti-influenza (se não vacinado)`,
    notes: "Critérios de alta: afebril >24h, VO tolerada, SpO2 >92%, sinais vitais estáveis, antibiótico VO disponível.",
    guideline: "SBPT / IDSA/ATS / BTS",
  },
  {
    id: "rx-alta-itu-complicada",
    title: "Alta — ITU Complicada / Pielonefrite",
    type: "Alta",
    prescription: `1. Ciprofloxacino 500mg VO 12/12h por 7-10 dias
   OU Amoxicilina-Clavulanato 875/125mg VO 12/12h por 10-14 dias
   (ajustar conforme urocultura/antibiograma colhidos na internação)
2. Dipirona 1g VO 6/6h SN (febre/dor)
3. Escopolamina 10mg VO 8/8h SN (cólica)
4. Hidratação oral abundante (≥2L/dia)
5. Urocultura de controle em 7 dias pós-término do ATB
6. USG rins e vias urinárias (se não realizado durante internação)
7. Retorno imediato se: febre >38,5°C, calafrios, dor lombar intensa, vômitos
8. Retorno Urologia/Nefrologia se: ITU de repetição, litíase, malformação`,
    notes: "ITU complicada: homem, gestante, cateter vesical, alteração anatômica/funcional, DRC. Pielonefrite em gestante: sempre internar.",
    guideline: "SBU / EAU / IDSA",
  },
  {
    id: "rx-alta-celulite",
    title: "Alta — Celulite / Erisipela",
    type: "Alta",
    prescription: `1. Cefalexina 500mg VO 6/6h por 7-10 dias (celulite)
   OU Amoxicilina 500mg VO 8/8h por 7 dias (erisipela)
   OU Clindamicina 300mg VO 8/8h por 7-10 dias (alergia a penicilina)
2. Ibuprofeno 600mg VO 8/8h por 5 dias (com alimentação)
3. Dipirona 1g VO 6/6h SN
4. Elevação do membro afetado
5. Compressas mornas locais
6. Cuidados com porta de entrada: tratar micose interdigital (Cetoconazol creme)
7. Meia compressiva 20-30mmHg (se insuficiência venosa)
8. Retorno em 48-72h para reavaliação (melhora esperada em 24-48h)
9. Retorno imediato se: piora do eritema, febre persistente, crepitação, bolhas hemorrágicas`,
    notes: "Erisipela: bordas elevadas, bem delimitadas (Streptococcus). Celulite: bordas difusas, mais profunda (Staphylococcus/Streptococcus). Demarcar borda com caneta para monitorar.",
    guideline: "SBD / IDSA / CREST",
  },
  {
    id: "rx-alta-crise-asmatica",
    title: "Alta — Crise Asmática",
    type: "Alta",
    prescription: `1. Salbutamol spray 200mcg (2 puffs) com espaçador 4/4h por 48h → 6/6h por 5 dias → SN
2. Prednisolona 40mg VO 1x/dia por 5-7 dias (NÃO precisa desmame se ≤7 dias)
   Pediátrico: 1-2mg/kg/dia (máx 40mg) por 3-5 dias
3. Beclometasona 250mcg spray 2 puffs 12/12h (iniciar/retomar CI de manutenção)
4. Espaçador obrigatório para spray
5. Plano de ação escrito: quando aumentar medicação de resgate e quando ir ao PS
6. Evitar gatilhos: tabagismo, ácaros, mofo, animais
7. Peak flow domiciliar (se disponível)
8. Retorno em 2-7 dias para reavaliação (classificar gravidade e Step)
9. Encaminhar Pneumologista se: >2 crises/ano, despertar noturno, limitação de atividade`,
    notes: "NÃO dar alta sem corticoide inalatório (CI) de manutenção. GINA 2023: não usar mais SABA isolado — sempre CI + formoterol ou CI + SABA.",
    guideline: "SBPT / GINA / BTS/SIGN",
  },
  {
    id: "rx-alta-surto-psicotico",
    title: "Alta — Surto Psicótico (Estabilizado)",
    type: "Prescrição de Alta",
    prescription: `1. Risperidona 2mg — 1cp VO 12/12h (manter dose da internação)
2. OU Olanzapina 10mg — 1cp VO à noite
3. Biperideno 2mg — 1cp VO 12/12h (se efeitos extrapiramidais)
4. NÃO interromper medicação sem orientação psiquiátrica
5. Evitar álcool e drogas ilícitas
6. Retorno no CAPS em 7 dias
7. Retorno ao PS se: agitação, alucinações, recusa alimentar, ideação suicida
8. Manter acompanhamento psiquiátrico regular
9. Orientar família sobre sinais de recaída`,
    notes: "Adesão é o maior desafio. Considerar antipsicótico de depósito (Risperidona LA, Palmitato de Paliperidona) se má aderência. Encaminhar CAPS III se grave.",
    guideline: "ABP / MS / NICE",
  },
  {
    id: "rx-alta-crise-adrenal",
    title: "Alta — Insuficiência Adrenal",
    type: "Prescrição de Alta",
    prescription: `1. Prednisona 5mg — 1cp VO pela manhã + 2,5mg à tarde (dose fisiológica)
2. OU Hidrocortisona 20mg manhã + 10mg tarde (se disponível)
3. Fludrocortisona 0,1mg — 1cp VO 1x/dia (se insuficiência primária)
4. Cartão de identificação: "PORTADOR DE INSUFICIÊNCIA ADRENAL"
5. Kit de emergência: Hidrocortisona 100mg IM (uso domiciliar em crise)
6. Dose de estresse: duplicar corticoide em febre/infecção, triplicar se grave
7. NUNCA suspender abruptamente
8. Retorno endocrinologista em 2-4 semanas
9. Retorno PS se: vômitos, hipotensão, prostração extrema`,
    notes: "Alerta médico (bracelete/cartão) é FUNDAMENTAL — salva vidas em emergências quando paciente está inconsciente.",
    guideline: "SBEM / Endocrine Society",
  },
  {
    id: "rx-alta-glaucoma-agudo",
    title: "Alta — Pós-Crise Glaucomatosa",
    type: "Prescrição de Alta",
    prescription: `1. Timolol 0,5% — 1 gota no olho afetado 12/12h
2. Brimonidina 0,2% — 1 gota 8/8h (ambos os olhos se indicado)
3. Acetazolamida 250mg — 1cp VO 8/8h por 3-5 dias (conforme orientação)
4. Prednisolona 1% colírio — 1 gota 6/6h por 5-7 dias (desmame)
5. NÃO usar colírios midriáticos (piora glaucoma de ângulo fechado)
6. Retorno Oftalmologista em 24-48h para Iridotomia a laser (olho afetado + profilática no contralateral)
7. Retorno PS se: dor ocular intensa, piora visual, náusea/vômito`,
    guideline: "CBO / AAO / EGS",
  },
  {
    id: "rx-alta-tvp",
    title: "Alta — TVP",
    type: "Prescrição de Alta",
    prescription: `1. Rivaroxabana 15mg — 1cp VO 12/12h por 21 dias, depois 20mg 1x/dia (com refeição)
2. OU Apixabana 10mg VO 12/12h por 7 dias, depois 5mg 12/12h
3. OU Enoxaparina 1mg/kg SC 12/12h + Varfarina 5mg VO 1x/dia (INR alvo 2-3, suspender HBPM quando INR terapêutico por 2 dias)
4. Meia elástica de compressão (30-40mmHg) — usar diariamente
5. Deambulação precoce (NÃO manter repouso)
6. Duração: 3-6 meses (1º episódio provocado) ou indefinido (não provocado/recorrente)
7. Retorno hematologista/angiologista em 7-14 dias
8. Retorno PS se: dispneia, dor torácica, hemoptise (TEP)`,
    guideline: "SBC / ISTH / ACCP / ESC",
  },
  {
    id: "rx-alta-colica-renal",
    title: "Alta — Cólica Renal",
    type: "Prescrição de Alta",
    prescription: `1. Cetoprofeno 100mg — 1cp VO 12/12h por 5 dias (com protetor gástrico)
2. Dipirona 500mg — 1cp VO 6/6h se dor
3. Tamsulosina 0,4mg — 1cp VO 1x/dia à noite (terapia expulsiva, cálculos 5-10mm)
4. Omeprazol 20mg — 1cp VO 1x/dia (proteção gástrica)
5. Hidratação oral adequada (≥2L/dia)
6. Coar urina (peneira) — guardar cálculo para análise
7. Retorno urologista em 7-14 dias com TC sem contraste
8. Retorno PS se: febre, dor incontrolável, anúria, vômitos persistentes`,
    notes: "Tamsulosina (alfa-bloqueador) facilita passagem de cálculos ureterais distais 5-10mm. Cálculos >10mm geralmente precisam de intervenção.",
    guideline: "SBU / EAU / AUA",
  },
  {
    id: "rx-alta-fratura-conservadora",
    title: "Alta — Fratura com Tratamento Conservador",
    type: "Alta",
    prescription: `1. Manter imobilização (gesso/tala) conforme orientação ortopédica
2. Dipirona 1g VO 6/6h (dor leve-moderada)
3. Ibuprofeno 600mg VO 8/8h por 5-7 dias (com alimento)
4. Codeína 30mg VO 6/6h se dor intensa (por 3-5 dias)
5. Crioterapia: gelo local 20min 4x/dia por 72h
6. Elevação do membro acima do coração
7. Exercícios de mobilização dos dedos (prevenir rigidez)
8. Retorno em 7 dias para Rx controle
9. Sinais de alarme: dor intensa, parestesia, dedos cianóticos/edemaciados, febre`,
    notes: "Orientar: NÃO molhar gesso, NÃO colocar objetos dentro, NÃO apoiar peso até liberação. Verificar sempre pulsos e sensibilidade distal.",
    guideline: "SBTO / AAOS",
  },
  {
    id: "rx-alta-intox-observacao",
    title: "Alta — Pós-Observação por Intoxicação",
    type: "Alta",
    prescription: `1. Alta APENAS após período de observação adequado e estabilidade clínica
2. Avaliação psiquiátrica obrigatória se tentativa de autoextermínio
3. Remover acesso a substância/medicamento causador
4. Orientar familiar/acompanhante sobre sinais de alerta
5. Receita: sintomáticos conforme necessidade (antieméticos, analgésicos)
6. NÃO prescrever medicação com potencial tóxico em grande quantidade
7. Retorno ao PS se: sonolência excessiva, vômitos persistentes, confusão
8. Encaminhar para acompanhamento: CAPS, psiquiatria, toxicologia`,
    notes: "Tempos mínimos de observação: paracetamol 24h (com exames normais), BZD 2-6h, tricíclicos 24h, organofosforados 24-48h, opioides 4-6h (24-72h se metadona/fentanil).",
    warnings: "NUNCA dar alta de tentativa de suicídio sem avaliação psiquiátrica. Risco de nova tentativa é maior nas primeiras semanas.",
    guideline: "SBTox / ABP / MS",
  },
  {
    id: "rx-alta-luxacao-reduzida",
    title: "Alta — Pós-Redução de Luxação",
    type: "Alta",
    prescription: `1. Manter tipoia/imobilização conforme orientação (2-4 semanas para ombro)
2. Dipirona 1g VO 6/6h + Ibuprofeno 600mg VO 8/8h por 5-7 dias
3. Crioterapia 20min 4x/dia por 72h
4. NÃO fazer movimentos de abdução/rotação externa (ombro)
5. Exercícios isométricos e de amplitude limitada conforme orientação
6. Retorno em 7-10 dias para reavaliação + fisioterapia
7. Sinais de alarme: dor intensa, parestesia, fraqueza, sensação de instabilidade
8. Encaminhar Ortopedia para avaliação de instabilidade/lesão ligamentar`,
    notes: "Luxação recorrente de ombro: 80-90% de recidiva em <25 anos. Considerar tratamento cirúrgico (Bankart) precocemente em jovens atletas.",
    guideline: "SBTO / AAOS",
  },
  {
    id: "rx-alta-sindrome-nefrotica",
    title: "Alta — Síndrome Nefrótica",
    type: "Alta",
    prescription: `1. Prednisona ___mg VO 1x/dia pela manhã (com alimento)
2. Furosemida ___mg VO ___/___h (conforme edema)
3. Enalapril ___mg VO 12/12h (antiproteinúrico)
4. Atorvastatina 20mg VO 1x/noite
5. Cálcio 1000mg + Vitamina D 1000UI VO 1x/dia (proteção óssea)
6. Omeprazol 20mg VO em jejum (proteção gástrica)
7. Dieta hipossódica (<2g sal/dia)
8. Controle de peso diário (aumento súbito = retenção hídrica)
9. Retorno: nefro em 2-4 semanas com proteinúria 24h + creatinina + albumina
10. Sinais de alarme: edema intenso, dispneia, dor/edema unilateral de MMII (TVP)`,
    guideline: "SBN / KDIGO",
  },
  {
    id: "rx-alta-pneumotorax",
    title: "Alta — Pós-Drenagem de Pneumotórax",
    type: "Alta",
    prescription: `1. RX tórax de controle pós-retirada do dreno (confirmar expansão)
2. Dipirona 1g VO 6/6h por 5 dias se dor
3. Ibuprofeno 600mg VO 8/8h por 3-5 dias (com alimento)
4. Curativo local: troca diária, manter limpo e seco
5. Evitar mergulho e viagem aérea por 2-4 semanas
6. NÃO fumar (principal fator de recidiva)
7. Retorno com RX tórax em 2 semanas
8. Sinais de alarme: dispneia, dor torácica pleurítica, enfisema subcutâneo
9. Encaminhar cirurgia torácica se recidivante`,
    guideline: "SBPT / BTS",
  },
  {
    id: "rx-alta-tep",
    title: "Alta — TEP em Anticoagulação",
    type: "Alta",
    prescription: `1. Rivaroxabana 15mg VO 12/12h com refeição por 21 dias → 20mg 1x/dia
   OU Apixabana 10mg VO 12/12h por 7 dias → 5mg 12/12h
2. Duração mínima: 3 meses (6-12 meses se provocado, indefinido se não provocado)
3. Meias de compressão elástica 30-40mmHg
4. Deambulação precoce (repouso NÃO é necessário)
5. Evitar: viagens longas sem movimentação, imobilização
6. Retorno: hematologia/pneumologia em 2-4 semanas
7. Exames de controle: hemograma, função renal, D-dímero (após suspensão)
8. Investigar trombofilia se <50 anos e não provocado
9. Sinais de alarme: dispneia, hemoptise, dor torácica, síncope, sangramento`,
    guideline: "SBC / ESC / CHEST",
  },
  {
    id: "rx-alta-apendicectomia",
    title: "Alta — Pós-Apendicectomia",
    type: "Alta Cirúrgica",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h por 5 dias
2. Ibuprofeno 400mg — 1cp VO 8/8h por 3-5 dias (com alimento)
3. Tramadol 50mg — 1cp VO 8/8h SN (se dor intensa)
4. Metronidazol 400mg — 1cp VO 8/8h por 5 dias (se complicada)
5. Curativo: trocar diariamente com SF, manter limpo e seco
6. Retirar pontos em 7-10 dias (ou absorvíveis)
7. Dieta leve por 48h → progressão livre
8. Evitar esforço físico por 30 dias (laparoscópica: 15 dias)
9. Retorno em 7-10 dias ou se: febre, dor progressiva, secreção na ferida
10. Retorno ao trabalho: 7-15 dias (laparoscópica) / 30 dias (aberta)`,
    guideline: "CBC / SAGES",
  },
  {
    id: "rx-alta-colecistectomia",
    title: "Alta — Pós-Colecistectomia",
    type: "Alta Cirúrgica",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h por 5 dias
2. Cetoprofeno 100mg — 1cp VO 12/12h por 3-5 dias (com alimento)
3. Omeprazol 20mg — 1cp VO em jejum por 30 dias
4. Dieta leve, hipolipídica por 30 dias → reintrodução gradual
5. Curativo oclusivo por 48h → expor
6. Retirar pontos em 7-10 dias
7. Evitar esforço abdominal por 15-30 dias
8. Retorno em 7-10 dias com resultado de anatomopatológico
9. Procurar PS se: febre, icterícia, vômitos biliosos, dor intensa`,
    guideline: "CBC / SAGES",
  },
  {
    id: "rx-alta-epistaxe",
    title: "Alta — Epistaxe pós-tamponamento",
    type: "Alta ORL",
    prescription: `1. Amoxicilina-Clavulanato 875mg — 1cp VO 12/12h por 5-7 dias (profilaxia se tamponado)
2. Dipirona 500mg — 1cp VO 6/6h se dor
3. SF nasal (lavagem): 3-4x/dia (após remoção do tampão)
4. NÃO assoar nariz por 7 dias — espirrar de boca aberta
5. Evitar esforço físico por 7-10 dias
6. Retorno ORL em 48-72h para retirada do tamponamento
7. Umidificar ambiente. Evitar ar condicionado direto
8. Procurar PS se: sangramento recorrente, epistaxe do outro lado, febre`,
  },
  {
    id: "rx-alta-fratura-conservadora",
    title: "Alta — Fratura com Tratamento Conservador",
    type: "Alta Ortopédica",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h por 5-7 dias
2. Cetoprofeno 100mg — 1cp VO 12/12h por 5 dias (com alimento)
3. Tramadol 50mg — 1cp VO 8/8h SN (dor intensa)
4. Elevar membro acima do nível do coração quando possível
5. Gelo local: 20 min 4-6x/dia por 48-72h
6. NÃO molhar imobilização gessada
7. Sinais de alarme: dor desproporcional, parestesia, palidez, edema tenso → PS URGENTE (síndrome compartimental)
8. Retorno ortopedia em 7-10 dias com novo RX
9. Fisioterapia após retirada da imobilização`,
  },
  {
    id: "rx-alta-pos-tvp",
    title: "Alta — TVP em Anticoagulação (Vascular)",
    type: "Alta Vascular",
    prescription: `1. Rivaroxabana 15mg — 1cp VO 12/12h com refeição por 21 dias → 20mg 1x/dia
2. OU Apixabana 10mg VO 12/12h por 7 dias → 5mg 12/12h
3. Meia elástica de compressão 20-30mmHg (usar diariamente por 2 anos)
4. Deambulação precoce (repouso NÃO é necessário após anticoagulação)
5. Evitar imobilização prolongada (viagens >4h: levantar a cada 2h)
6. Retorno: cirurgia vascular em 2-4 semanas
7. Exames: hemograma, função renal em 30 dias
8. Duração anticoagulação: 3-6 meses (provocada) / indefinida (não provocada/recorrente)
9. Sinais de alarme: dispneia súbita (TEP), sangramento, edema progressivo`,
    guideline: "SVB / CHEST / ISTH",
  },
  {
    id: "rx-alta-cirurgia-vascular",
    title: "Alta — Pós-Revascularização de Membro",
    type: "Alta Vascular",
    prescription: `1. AAS 100mg — 1cp VO 1x/dia (uso contínuo)
2. Clopidogrel 75mg — 1cp VO 1x/dia (se stent — dupla antiagregação)
3. Atorvastatina 40-80mg — 1cp VO à noite
4. Cilostazol 100mg — 1cp VO 12/12h (claudicação — se tolerado)
5. Dipirona 500mg — 1cp VO 6/6h se dor
6. Curativo da ferida operatória: trocar com SF diariamente
7. Caminhada diária progressiva (reabilitação vascular)
8. Parar de fumar (OBRIGATÓRIO — principal fator de risco)
9. Retorno: 7-10 dias (avaliação de ferida) + 30 dias (Doppler de controle)
10. PS se: dor intensa no membro, palidez, frialdade, ausência de pulso`,
    guideline: "SVB / ACC/AHA",
  },
  {
    id: "rx-alta-pneumotorax",
    title: "Alta — Pós-Drenagem Torácica (Pneumotórax)",
    type: "Alta",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h por 5-7 dias
2. Tramadol 50mg — 1cp VO 8/8h SN (dor intensa)
3. RX tórax de controle em 7-10 dias
4. Cessação tabágica OBRIGATÓRIA (reduz recidiva de 50% para 10%)
5. Evitar esforço físico intenso por 30 dias
6. Evitar voo comercial por 2-6 semanas (expansão de gases em altitude)
7. Evitar mergulho com cilindro — PERMANENTE (risco de pneumotórax subaquático)
8. Retorno ao PS se: dispneia súbita, dor torácica, sensação de ar escapando
9. Retorno: pneumologista em 2-4 semanas
10. Se 2° episódio: discutir cirurgia (VATS + pleurodese)`,
    guideline: "SBPT / BTS",
  },
  {
    id: "rx-alta-dialise-peritoneal",
    title: "Alta — Início de Diálise Peritoneal",
    type: "Alta Nefrológica",
    prescription: `1. Treinamento de manipulação asséptica do cateter (paciente + familiar)
2. Dieta hipossódica (<2g Na+/dia) + hiperproteica (1,2-1,5g/kg/dia — perdas proteicas)
3. Carbonato de Cálcio 500mg — 1cp VO junto às refeições (quelante de fósforo)
4. Alfacalcidol 0,25-0,5mcg VO 1x/dia (ou Calcitriol — conforme PTH)
5. Eritropoetina SC conforme prescrição nefrológica (se Hb <10)
6. Cuidados com o orifício de saída: limpeza diária com SF + oclusão
7. Sinais de peritonite: líquido turvo, dor abdominal, febre → PS IMEDIATO com amostra do efluente
8. Manter diurese residual: não restringir líquidos agressivamente no início
9. Retorno: nefrologista em 7-14 dias
10. Exames mensais: hemograma, função renal, eletrólitos, ferritina, PTH, albumina`,
    guideline: "SBN / ISPD / KDOQI",
  },
  {
    id: "rx-alta-exacerbacao-dpoc",
    title: "Alta — Exacerbação de DPOC",
    type: "Alta Pneumológica",
    prescription: `1. Prednisona 40mg — 1cp VO 1x/dia por 5 dias (completar curso)
2. Salbutamol spray 100mcg — 2-4 jatos 4/4-6/6h SN (resgate)
3. Ipratrópio spray 20mcg — 2 jatos 6/6h (manutenção)
4. Formoterol/Budesonida 12/400mcg — 1 inalação 12/12h (manutenção a longo prazo)
5. Amoxicilina-Clavulanato 875mg — 1cp VO 12/12h por 5-7 dias (se escarro purulento)
6. O2 domiciliar se indicado (PaO2 <55 ou PaO2 <60 + cor pulmonale)
7. Cessação tabágica: encaminhar programa + considerar Vareniclina
8. Vacinação: Influenza anual + Pneumocócica (PCV13 + PPSV23)
9. Reabilitação pulmonar (encaminhar)
10. Retorno: pneumologista em 2-4 semanas com espirometria`,
    guideline: "GOLD 2024 / SBPT",
  },
  {
    id: "rx-alta-derrame-pleural",
    title: "Alta — Pós-Toracocentese / Drenagem Pleural",
    type: "Alta",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h por 5 dias
2. Antibiótico (se empiema): completar curso conforme cultura (14-21 dias total)
3. RX tórax de controle em 7-10 dias
4. Fisioterapia respiratória (expansão pulmonar)
5. Retorno com resultados de citologia/bioquímica/cultura do líquido
6. Investigação complementar conforme resultado:
   Exsudato: TC tórax, broncoscopia, biópsia pleural
   Transudato: ecocardiograma, hepatograma, proteinúria
7. Retorno ao PS se: dispneia progressiva, febre, dor torácica pleurítica
8. Retorno: pneumologista em 1-2 semanas`,
  },
  {
    id: "rx-alta-delirium-resolvido",
    title: "Alta — Pós-Delirium Resolvido",
    type: "Alta",
    prescription: `1. SUSPENDER medicações potencialmente causadoras (benzodiazepínicos, anticolinérgicos)
2. Manter medicações de base otimizadas
3. Orientar família: delirium pode recorrer — sinais de alarme
4. Evitar: bebidas alcoólicas, privação de sono, jejum prolongado
5. Retorno se: confusão, agitação, sonolência excessiva, febre
6. Encaminhar geriatria para avaliação de funcionalidade e cognição
7. Manter hidratação oral adequada
8. Reavaliar polifarmácia na consulta ambulatorial
9. Retorno: geriatra/clínica médica em 1-2 semanas`,
  },
  {
    id: "rx-alta-uti-pos-critico",
    title: "Alta — Pós-UTI (Síndrome Pós-Terapia Intensiva)",
    type: "Alta",
    prescription: `1. Orientar sobre Síndrome Pós-Terapia Intensiva (PICS):
   - Fraqueza muscular (polineuropatia/miopatia do doente crítico)
   - Disfunção cognitiva (memória, atenção)
   - Transtornos psicológicos (TEPT, ansiedade, depressão)
2. Fisioterapia motora + respiratória (encaminhar)
3. Avaliação neuropsicológica se queixas cognitivas
4. Suporte psicológico/psiquiátrico para paciente E família
5. Nutrição hiperproteica: proteína 1,2-1,5g/kg/dia
6. Vitamina D 2000UI/dia (deficiência comum pós-UTI)
7. Reabilitação pulmonar se VM prolongada
8. Profilaxia TVP ambulatorial: avaliar necessidade (se mobilidade reduzida)
9. Reconciliação medicamentosa completa
10. Retorno: equipe multidisciplinar em 2-4 semanas`,
    notes: "Até 50% dos sobreviventes de UTI apresentam PICS. Impacto funcional, cognitivo e psicológico pode durar anos.",
    guideline: "SCCM / AMIB / NICE",
  },
  {
    id: "rx-alta-pos-anestesia",
    title: "Alta — Pós-Anestesia / Day Clinic",
    type: "Alta",
    prescription: `CRITÉRIOS DE ALTA (PADSS ≥9):
1. Sinais vitais estáveis por 30min
2. Orientado, alerta, deambulando sem tontura
3. Dor controlada (EVA <4)
4. Sem náusea/vômito ativo
5. Sem sangramento significativo
6. Acompanhante responsável presente

PRESCRIÇÃO:
7. Dipirona 500mg — 1cp VO 6/6h por 3-5 dias
8. Cetoprofeno 100mg — 1cp VO 12/12h por 3 dias (com alimento)
9. Tramadol 50mg — 1cp VO 8/8h se dor moderada (resgate)
10. Ondansetrona 4mg — 1cp VO 8/8h se náusea (por 24h)
11. NÃO dirigir nas primeiras 24h
12. NÃO ingerir álcool por 48h
13. NÃO assinar documentos legais por 24h
14. Retorno ao PS se: febre, sangramento, dor intensa, vômitos persistentes`,
    guideline: "SBA / ASA / ERAS",
  },
  {
    id: "rx-alta-pos-queimadura",
    title: "Alta — Pós-Queimadura (Pequeno Queimado)",
    type: "Alta",
    prescription: `1. Cefalexina 500mg — 1cp VO 6/6h por 7 dias (se sinais de infecção)
2. Dipirona 500mg — 1cp VO 6/6h se dor
3. Tramadol 50mg — 1cp VO 8/8h se dor moderada (nos primeiros 3-5 dias)
4. Curativo diário com SF 0,9% + Sulfadiazina de prata 1% (2º grau)
5. Trocar curativo 1-2x/dia (lavar suavemente, NÃO esfregar)
6. NÃO estourar bolhas
7. NÃO expor ao sol por 6 meses (hiperpigmentação)
8. Protetor solar FPS 50 na área cicatrizada após reepitelização
9. Hidratação da cicatriz com óleo de semente de uva ou creme à base de silicone
10. Retorno: cirurgia plástica em 7-10 dias para avaliação
11. Retorno ao PS se: febre, secreção purulenta, aumento da dor, mau cheiro`,
    guideline: "SBQ / SBCP",
  },
  {
    id: "rx-alta-pos-parto-normal",
    title: "Alta — Pós-Parto Normal",
    type: "Alta Obstétrica",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h se dor
2. Ibuprofeno 600mg — 1cp VO 8/8h por 3 dias (com alimento)
3. Sulfato ferroso 40mg Fe elementar — 1cp VO 1x/dia por 30-60 dias (prevenção anemia)
4. Amamentação exclusiva em livre demanda
5. Cuidados com episiotomia/laceração: lavar com água e sabão, secar bem
6. Orientar sinais de alarme:
   - Sangramento vaginal aumentado (>1 absorvente/hora)
   - Febre ≥38°C
   - Dor abdominal intensa
   - Disúria, lóquios fétidos
7. Contracepção: discutir opções (minipílula, DIU, implante — compatíveis com amamentação)
8. Retorno: consulta puerperal em 7-10 dias (revisão de episiotomia)
9. Puericultura do RN em 5-7 dias
10. Teste do pezinho: 3-5 dias de vida
11. Vacinação RN: BCG + Hepatite B (maternidade)`,
    guideline: "FEBRASGO / MS",
  },
  {
    id: "rx-alta-pos-cesarea",
    title: "Alta — Pós-Cesárea",
    type: "Alta Obstétrica",
    prescription: `1. Dipirona 500mg — 1cp VO 6/6h se dor (1ª linha)
2. Ibuprofeno 600mg — 1cp VO 8/8h por 5 dias (com alimento)
3. Tramadol 50mg — 1cp VO 8/8h se dor moderada (resgate — por 3 dias)
4. Sulfato ferroso 40mg — 1cp VO 1x/dia por 60 dias
5. Cuidados com FO: manter seco, lavar com água e sabão, NÃO aplicar pomadas
6. Retirada de pontos/grampos: 7-10 dias
7. Não carregar peso >5kg por 30 dias
8. Atividade sexual: após 30-40 dias (ou conforme conforto)
9. Amamentação em livre demanda (cesárea NÃO contraindica)
10. Sinais de alarme: febre, saída de secreção pela FO, sangramento vaginal excessivo, dor intensa
11. Contracepção: iniciar na consulta puerperal
12. Retorno: 7-10 dias (revisão FO) + consulta puerperal 30-40 dias
13. Intervalo intergestacional recomendado: ≥18 meses (cicatriz uterina)`,
    guideline: "FEBRASGO / MS / ACOG",
  },
  {
    id: "rx-alta-hipoglicemia",
    title: "Alta após Hipoglicemia — Orientações",
    type: "Alta / Endocrinologia",
    prescription: `1. Glicemia >100mg/dL estável por 2h antes da alta
2. Identificar e corrigir causa:
   - Ajuste de dose de insulina/sulfoniluréia
   - Suspender medicamento causador se possível
3. Orientações ao paciente:
   - Alimentação regular (não pular refeições)
   - Ter fonte de açúcar sempre disponível (sachê, bala)
   - Reconhecer sintomas: tremor, sudorese, confusão, palidez
   - Glicemia capilar 3-4x/dia por 1 semana
4. Se sulfoniluréia: observar mínimo 12-24h (meia-vida longa!)
5. Receita ajustada: [conforme reavaliação do esquema]
6. Retorno: endocrinologia em 7 dias
7. Se >2 episódios: investigação ambulatorial (insulinoma, insuficiência adrenal)`,
    guideline: "ADA / SBEM / Endocrine Society",
  },
  {
    id: "rx-alta-convulsao-primeira",
    title: "Alta após Primeira Crise Convulsiva",
    type: "Alta / Neurologia",
    prescription: `1. TC crânio e EEG realizados (ou agendados)
2. Exames laboratoriais normais (Na, K, Ca, Mg, glicemia)
3. Exame neurológico normal na alta
4. Orientações:
   - NÃO dirigir até liberação pelo neurologista (CTB + CFM)
   - Evitar altura, natação sem supervisão, operar máquinas
   - Acompanhante por 48h
   - Retorno ao PS se nova crise, febre, cefaleia intensa, confusão
5. Se iniciado anticonvulsivante:
   - Receita controlada (azul ou especial conforme droga)
   - NÃO suspender abruptamente
6. Encaminhar: Neurologia (urgência se lesão em TC)
7. Retorno: 7-14 dias para resultado de EEG/exames`,
    notes: "Primeira crise NÃO obriga tratamento crônico (50% não recorrem). Indicação de DAE na 1ª crise: lesão estrutural, EEG alterado, crise focal, status epilepticus.",
    guideline: "ABN / ILAE / AAN",
  },
  {
    id: "rx-alta-queimadura-menor",
    title: "Alta de Queimadura Menor (1º e 2º grau superficial)",
    type: "Alta / Cirurgia",
    prescription: `1. Curativo:
   - Lavar com SF 0,9% ou água corrente limpa
   - Sulfadiazina de Prata 1% creme (camada fina) + gaze vaselinada
   - OU Curativo de prata nanocristalina (se disponível)
   - Trocar curativo 1x/dia (ou a cada 48h se prata nanocristalina)
2. Analgesia:
   - Paracetamol 750mg VO 6/6h
   - Ibuprofeno 600mg VO 8/8h (se não contraindicado)
   - Tramadol 50mg VO 6/6h SN (dor intensa)
3. NÃO estourar bolhas (proteção natural)
4. NÃO aplicar: pasta de dente, manteiga, pomadas caseiras
5. Hidratação oral abundante
6. Retorno: 48h para reavaliação
7. Sinais de alerta: febre, secreção purulenta, piora da dor, extensão da lesão
8. Se face, mãos, pés, genitália ou >10% SCQ: INTERNAR (não dar alta)`,
    guideline: "SBQ / ABA / MS",
  },
  // ========== ALTA — CIRURGIA TORÁCICA ==========
  {
    id: "rx-alta-drenagem-torax",
    title: "Alta — Pós-Drenagem Torácica",
    type: "Prescrição de Alta",
    prescription: `1. Repouso relativo por 7 dias (evitar esforço físico intenso)
2. Paracetamol 750mg VO 6/6h por 5 dias
3. Ibuprofeno 600mg VO 8/8h por 3-5 dias (se sem contraindicação)
4. Cuidados com ferida operatória:
   - Manter curativo seco por 48h
   - Após: lavar com água e sabão
   - Retirar pontos em 10-14 dias (posto de saúde)
5. Espirometria de incentivo: 10 séries de 10 respirações profundas/dia
6. Evitar tabagismo (principal fator de recidiva de pneumotórax)
7. RX tórax de controle em 7 e 30 dias
8. Retorno em 7 dias ou antes se:
   - Falta de ar súbita
   - Dor torácica intensa
   - Febre
   - Enfisema subcutâneo (inchaço com crepitação)
9. Evitar viagens aéreas por 6 semanas (risco de re-expansão)
10. Evitar mergulho por 12 meses`,
    guideline: "BTS / SBPT",
  },
  {
    id: "rx-alta-toracotomia",
    title: "Alta — Pós-Toracotomia",
    type: "Prescrição de Alta",
    prescription: `1. Repouso relativo por 30 dias
2. Analgesia:
   - Paracetamol 750mg VO 6/6h
   - Tramadol 50mg VO 8/8h SN (não dirigir sob uso)
   - Ibuprofeno 600mg VO 8/8h por 5 dias
3. Exercícios respiratórios: inspirometria de incentivo 3x/dia
4. Deambulação progressiva
5. Evitar elevar braço ipsilateral acima do ombro por 2 semanas
6. Cuidados com cicatriz: protetor solar após cicatrização
7. NÃO carregar peso >5kg por 30 dias
8. Retorno ambulatorial: 7, 14 e 30 dias PO
9. RX tórax nos retornos
10. Sinais de alerta: febre, dispneia, drenagem pela ferida, dor intensa`,
  },
  // ========== ALTA — INFECTOLOGIA ==========
  {
    id: "rx-alta-endocardite",
    title: "Alta — Pós-Tratamento Endocardite",
    type: "Prescrição de Alta",
    prescription: `1. Conclusão ATB EV hospitalar (4-6 semanas)
2. Manter acompanhamento cardiológico:
   - Eco TT em 30 e 90 dias
   - Avaliar necessidade de troca valvar
3. Profilaxia de endocardite em procedimentos:
   - Amoxicilina 2g VO 1h antes de procedimento odontológico
   - Se alergia: Clindamicina 600mg VO
4. Higiene dental rigorosa (escovação 3x/dia, fio dental)
5. Retorno cardiologia: 15 dias
6. Retorno infectologia: 30 dias
7. Hemograma + PCR + VHS no retorno
8. Hemoculturas de controle (negativação confirmada)
9. Sinais de alerta: febre, calafrios, dispneia, edema, lesões cutâneas novas`,
    guideline: "AHA / ESC / SBC",
  },
  {
    id: "rx-alta-tb-tratamento",
    title: "Alta — Tuberculose em Tratamento Ambulatorial",
    type: "Prescrição de Alta",
    prescription: `1. Manter esquema RIPE conforme peso:
   - >50kg: 4 comp RHZE/dia (fase intensiva 2 meses)
   - Seguido de RH (fase manutenção 4 meses)
2. Tomar em JEJUM (1h antes do café)
3. Piridoxina (Vit B6) 50mg/dia VO
4. Retorno mensal na UBS (TDO)
5. Baciloscopia mensal (2º, 4º, 6º mês)
6. TGO/TGP se sintomas (náuseas, icterícia, dor abdominal)
7. NÃO interromper tratamento por conta própria
8. Isolamento respiratório: NÃO necessário após 15 dias de tratamento eficaz (baciloscopia negativa)
9. Comunicantes: investigar com PPD e RX tórax
10. Sinais de alerta: icterícia (suspender e procurar UPA), vômitos persistentes, perda visual
11. Medicação GRATUITA pelo SUS — retirar na UBS mensalmente`,
    guideline: "MS Brasil / PNCT",
  },
  {
    id: "rx-alta-pbe",
    title: "Alta — Peritonite Bacteriana Espontânea",
    type: "Prescrição de Alta",
    prescription: `1. Completar ATB (total 5 dias — hospitalar)
2. Profilaxia secundária CONTÍNUA:
   - Norfloxacino 400mg VO 1x/dia INDEFINIDAMENTE
   - OU Sulfametoxazol-Trimetoprim 800/160mg VO 1x/dia (alternativa)
3. Dieta hipossódica (<2g Na/dia)
4. Restrição hídrica se Na <125
5. Furosemida ___mg VO + Espironolactona ___mg VO (ajustar conforme peso/ascite)
6. Lactulose 15-30mL VO 2-3x/dia (prevenção de encefalopatia)
7. Retorno em 7 dias (hepatologia/gastro)
8. Paracentese de controle se recidiva de sintomas
9. Sinais de alerta: febre, dor abdominal, confusão mental, aumento rápido da barriga
10. Avaliar transplante hepático (PBE = fator de mau prognóstico)`,
    guideline: "AASLD / EASL / SBH",
  },
  // ========== ALTA — PÓS-CIRURGIA GERAL ==========
  {
    id: "rx-alta-pos-op-geral",
    title: "Alta — Pós-Operatório Geral (Modelo)",
    type: "Prescrição de Alta",
    prescription: `1. Repouso relativo por ___dias
2. Analgesia:
   - Paracetamol 750mg VO 6/6h por 5-7 dias
   - Dipirona 500mg VO 6/6h (alternância)
   - Ibuprofeno 600mg VO 8/8h por 3-5 dias (se sem contraindicação renal/GI)
   - Tramadol 50mg VO 6/6h SN (dor intensa — máx 7 dias)
3. Cuidados com ferida operatória:
   - Manter curativo oclusivo seco por 24-48h
   - Após: lavar com água e sabão neutro
   - Trocar curativo diariamente
   - NÃO aplicar pomadas sem orientação
4. Dieta: _____ (conforme cirurgia)
5. Retorno para retirada de pontos: ___dias
6. Sinais de alerta — procurar UPA:
   - Febre ≥38°C
   - Vermelhidão/secreção na ferida
   - Sangramento ativo
   - Dor intensa que não cede com medicação
   - Náuseas/vômitos persistentes
7. Atestado médico: ___dias
8. Retorno ambulatorial: ___dias`,
  },
  {
    id: "rx-alta-apendicectomia",
    title: "Alta — Pós-Apendicectomia",
    type: "Prescrição de Alta",
    prescription: `Não complicada (sem perfuração):
1. Dieta leve por 3 dias → progressão para dieta normal
2. Paracetamol 750mg VO 6/6h + Dipirona 500mg VO 6/6h (alternância)
3. Ibuprofeno 600mg VO 8/8h por 3 dias SN
4. Repouso relativo por 7 dias
5. NÃO carregar peso >5kg por 15 dias
6. Retorno em 7 dias para reavaliação + retirada de pontos (se não absorvíveis)

Complicada (abscesso/peritonite):
7. Completar ATB:
   - Ciprofloxacino 500mg VO 12/12h + Metronidazol 400mg VO 8/8h por 7-10 dias
   - OU Amoxicilina-Clavulanato 875/125mg VO 12/12h por 7 dias
8. Repouso por 14 dias
9. Retorno em 5 dias + 15 dias
10. Sinais de alerta: febre, dor abdominal progressiva, distensão, vômitos`,
    guideline: "EAST / ACS / CBC",
  },
  {
    id: "rx-alta-colecistectomia",
    title: "Alta — Pós-Colecistectomia",
    type: "Prescrição de Alta",
    prescription: `1. Dieta LEVE e HIPOLIPÍDICA por 30 dias
   (evitar: frituras, gorduras, queijos amarelos, embutidos, creme de leite)
2. Paracetamol 750mg VO 6/6h por 5 dias
3. Buscopan Composto 1 comp VO 6/6h SN (cólica)
4. Omeprazol 20mg VO 1x/dia por 30 dias (se dispepsia)
5. Repouso relativo por 7 dias (VLP) ou 15 dias (aberta)
6. NÃO carregar peso >5kg por 15 dias (VLP) ou 30 dias (aberta)
7. Retorno: 7 dias (VLP) ou 10 dias (aberta)
8. Pode tomar banho normal após 24h (VLP)
9. Sinais de alerta: icterícia, febre, dor intensa, distensão abdominal
10. Diarreia pós-colecistectomia (pode ocorrer): Colestiramina 4g VO 1-2x/dia`,
    guideline: "SAGES / CBC / SBAD",
  },
];


