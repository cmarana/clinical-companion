import type { FullProtocol } from "./types";

export const geriatricsFullProtocols4: FullProtocol[] = [
  {
    id: "fp-delirium-hipoativo-idoso",
    title: "Delirium Hipoativo no Idoso",
    categoryId: "geriatrics",
    category: "Geriatria de Emergência",
    tags: ["delirium", "hipoativo", "idoso", "confusão", "subdiagnosticado"],
    sections: [
      { id: "intro", title: "Introdução", content: "O delirium hipoativo é o subtipo mais comum em idosos hospitalizados (até 75% dos casos), porém o mais subdiagnosticado. Apresenta-se com apatia e sonolência, sendo frequentemente confundido com depressão ou demência. Associado a pior prognóstico. Diretriz SBGG e NICE." },
      { id: "def", title: "Definição", content: "Delirium com predomínio de hipoatividade psicomotora: letargia, redução do nível de alerta, lentificação, apatia, redução da fala. CAM (Confusion Assessment Method) positivo. Diferente do delirium hiperativo (agitação) e misto." },
      { id: "screening", title: "Rastreamento e Identificação", content: "CAM: 1) Início agudo e flutuante + 2) Desatenção + 3) Pensamento desorganizado OU 4) Alteração do nível de consciência. RASS (Richmond) negativo (-1 a -3). Aplicar CAM em todo idoso >65 anos admitido na emergência/internação." },
      { id: "etiology", title: "Etiologia", content: "Infecções (ITU, pneumonia — principais em idosos), medicamentos (benzodiazepínicos, anticolinérgicos, opioides), distúrbios metabólicos, desidratação, dor não tratada, retenção urinária, constipação, cirurgia, hipóxia, AVC." },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente quieto, sonolento, apático, com redução da interação. Pode parecer 'deprimido' ou 'demenciado'. Flutuação ao longo do dia. Redução da ingesta alimentar. Frequentemente não detectado pela equipe (diferente do hiperativo que 'incomoda')." },
      { id: "diagnosis", title: "Diagnóstico", content: "CAM + RASS. Investigar causa: hemograma, PCR, eletrólitos, função renal, glicemia, EAS + urocultura, Rx tórax, gasometria, TSH, hepatograma. TC crânio se déficit focal ou queda. Revisar prescrição (medicamentos de risco). ECG." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Depressão, demência (evolução crônica vs aguda), hipotireoidismo, AVC (afasia, heminegligência), efeito sedativo de medicamentos, hipoglicemia, encefalopatia hepática." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Identificar e tratar causa precipitante; 2. Revisar e suspender medicamentos de risco (Critérios de Beers); 3. Medidas não farmacológicas (orientação temporal, presença de familiar, iluminação, mobilização); 4. Evitar contenção física; 5. NÃO usar benzodiazepínicos (exceto abstinência alcoólica)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratamento da causa base é a prioridade. Medidas não farmacológicas: protocolo HELP (Hospital Elder Life Program). Farmacológico: reservado para sofrimento significativo — Haloperidol 0,5-1mg VO/IM (menor dose, menor tempo). Quetiapina 12,5-25mg VO como alternativa. NÃO tratar o delirium hipoativo com antipsicóticos rotineiramente." },
      { id: "prescriptions", title: "Prescrições", content: "1. Tratar causa (ATB se infecção, hidratação se desidratado, etc.); 2. Suspender: benzodiazepínicos, anticolinérgicos, anti-histamínicos; 3. Se necessário (sofrimento): Haloperidol 0,5mg VO 12/12h (reavaliar diariamente); 4. Orientação temporal: relógio, calendário, luz natural; 5. Presença de familiar 24h; 6. Mobilização precoce; 7. Correção sensorial (óculos, prótese auditiva)." },
      { id: "followup", title: "Acompanhamento", content: "CAM diário para monitorar resolução. Duração média: 7-10 dias (pode persistir semanas). Avaliar cognição basal após resolução. Encaminhar para geriatra se primeira manifestação cognitiva." },
      { id: "complications", title: "Complicações", content: "Aumento de mortalidade (3-5x), hospitalização prolongada, declínio funcional, institucionalização, progressão para demência, quedas, aspiração, úlceras de pressão." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: delirium com causa que requer tratamento hospitalar. UTI: causa grave (sepse, distúrbio metabólico grave). Alta: delirium resolvido ou em resolução, causa tratada, cuidador orientado, seguimento ambulatorial agendado." },
      { id: "references", title: "Referências Bibliográficas", content: "SBGG — Delirium no Idoso. Inouye SK et al. NEJM 2006. NICE Guideline — Delirium: prevention, diagnosis and management 2019. Programa HELP — Hospital Elder Life Program." }
    ]
  },
  {
    id: "fp-iatrogenia-idoso",
    title: "Iatrogenia e Eventos Adversos no Idoso",
    categoryId: "geriatrics",
    category: "Geriatria de Emergência",
    tags: ["iatrogenia", "evento adverso", "medicamento", "idoso", "segurança"],
    sections: [
      { id: "intro", title: "Introdução", content: "Eventos adversos a medicamentos são a 5ª causa de morte em idosos hospitalizados. A iatrogenia medicamentosa é responsável por até 30% das admissões de emergência em >65 anos. Desprescrição e reconciliação medicamentosa são ferramentas fundamentais. Diretriz SBGG e OMS." },
      { id: "def", title: "Definição", content: "Evento adverso causado por intervenção médica (medicamento, procedimento, internação) e não pela doença de base. Inclui: reação adversa a medicamentos (RAM), interações medicamentosas, cascata de prescrição, eventos associados à hospitalização (quedas, infecções, delirium)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Critérios de Beers (AGS 2023): lista de medicamentos potencialmente inapropriados em idosos. Critérios STOPP/START: identificar medicamentos a suspender e a iniciar. Número de medicamentos: polifarmácia (≥5) e hiperpolifarmácia (≥10). Reconciliação medicamentosa na admissão." },
      { id: "etiology", title: "Etiologia", content: "Alterações farmacocinéticas do envelhecimento (↓ clearance renal, ↓ metabolismo hepático, ↑ volume de distribuição de lipofílicos), interações medicamentosas, cascata de prescrição, falta de ajuste de dose para função renal." },
      { id: "clinical", title: "Apresentação Clínica", content: "Manifestações atípicas no idoso: queda (anti-hipertensivos, benzodiazepínicos), confusão/delirium (anticolinérgicos), hipotensão postural (diuréticos, alfa-bloqueadores), sangramento GI (AINEs, anticoagulantes), hipoglicemia (sulfonilureias), bradicardia (betabloqueadores, digitálicos)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Algoritmo de Naranjo para causalidade de RAM. Revisar toda a lista de medicamentos. Cronologia: correlacionar início dos sintomas com introdução/mudança de medicamento. Dosagens séricas quando disponíveis (digoxina, lítio, fenitoína). Função renal (TFG pelo CKD-EPI, não creatinina isolada)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Progressão da doença de base, nova patologia, descompensação de comorbidade, causa infecciosa, distúrbio metabólico." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Suspender medicamento suspeito; 2. Tratar o evento adverso; 3. Reconciliação medicamentosa completa; 4. Aplicar Critérios de Beers/STOPP; 5. Desprescrição: retirar medicamentos sem indicação clara; 6. Ajustar doses para função renal." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Tratamento específico conforme o evento: Flumazenil se intoxicação por BZD, vitamina K se sangramento por varfarina, glucagon se intoxicação por BB. Desprescrição gradual (especialmente BZD, ISRS, opioides). Princípio: 'start low, go slow, but get there'." },
      { id: "prescriptions", title: "Prescrições", content: "Medicamentos a EVITAR em idosos (Beers): 1. Benzodiazepínicos de longa ação (diazepam, clonazepam); 2. Anticolinérgicos (amitriptilina, prometazina); 3. AINEs por >7 dias; 4. Sulfonilureias de longa ação (glibenclamida); 5. Anti-histamínicos de 1ª geração; 6. Alfa-bloqueadores como anti-hipertensivos (doxazosina). Preferir: Zolpidem curto prazo, Duloxetina, Paracetamol, Metformina." },
      { id: "followup", title: "Acompanhamento", content: "Reconciliação medicamentosa na alta. Orientar paciente e cuidador sobre sinais de alerta. Revisar medicamentos em toda consulta. Notificar RAM grave ao sistema VigiMed (ANVISA)." },
      { id: "complications", title: "Complicações", content: "Queda com fratura, hemorragia grave, delirium prolongado, insuficiência renal, arritmias, óbito, hospitalização prolongada, institucionalização." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: RAM grave com instabilidade. UTI: intoxicação grave, arritmia, hemorragia maciça. Alta: evento resolvido, medicação ajustada, cuidador orientado, lista de medicamentos atualizada entregue." },
      { id: "references", title: "Referências Bibliográficas", content: "AGS Beers Criteria 2023. O'Mahony D et al. Age Ageing 2023 (STOPP/START v3). SBGG — Polifarmácia no Idoso. OMS — Medication Safety in Polypharmacy 2019. ANVISA — VigiMed." }
    ]
  },
  {
    id: "fp-sindrome-imobilidade",
    title: "Síndrome de Imobilidade e Sarcopenia",
    categoryId: "geriatrics",
    category: "Geriatria de Emergência",
    tags: ["imobilidade", "sarcopenia", "acamado", "funcionalidade", "reabilitação"],
    sections: [
      { id: "intro", title: "Introdução", content: "A síndrome de imobilidade é uma das grandes síndromes geriátricas, caracterizada por restrição severa ao leito com perda funcional global. A sarcopenia (perda de massa e força muscular) é um fator contribuinte e consequência. Diretriz SBGG e EWGSOP2." },
      { id: "def", title: "Definição", content: "Síndrome de imobilidade: paciente restrito ao leito >50% do dia, com incapacidade funcional grave (Katz ≤2). Sarcopenia: perda de massa muscular + baixa força (dinamometria <27kg homem, <16kg mulher) ± baixa performance física. Sarcopenia aguda: instalação <6 meses (associada a doença aguda/hospitalização)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "SARC-F questionnaire (≥4 pontos sugere sarcopenia). Avaliação funcional: Katz (AVDs básicas), Lawton (AVDs instrumentais). Força de preensão palmar. Velocidade de marcha (<0,8 m/s). Circunferência de panturrilha (<31cm sugere depleção muscular)." },
      { id: "etiology", title: "Etiologia", content: "Causas de imobilização: AVC, fratura de fêmur, demência avançada, ICC grave, DPOC terminal, dor crônica não tratada, depressão grave, hospitalização prolongada. Sarcopenia: envelhecimento, sedentarismo, desnutrição proteica, inflamação crônica, endocrinopatias." },
      { id: "clinical", title: "Apresentação Clínica", content: "Perda de funcionalidade progressiva, dificuldade para deambular/transferir-se, quedas recorrentes, perda de peso/massa muscular, úlceras de pressão, contraturas articulares, constipação, retenção urinária, trombose venosa, pneumonia aspirativa." },
      { id: "diagnosis", title: "Diagnóstico", content: "Avaliação geriátrica ampla (AGA): cognição (MEEM), humor (GDS), funcionalidade (Katz/Lawton), equilíbrio (Timed Up and Go), nutrição (MNA), social. Laboratório: albumina, pré-albumina, vitamina D, hemograma, função renal, TSH. DXA ou BIA para massa muscular." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Miopatia inflamatória, hipotireoidismo, insuficiência adrenal, neuropatia periférica, doença de Parkinson, depressão maior, neoplasia oculta." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Identificar causa reversível de imobilidade; 2. Mobilização precoce (mesmo em UTI); 3. Suporte nutricional proteico; 4. Prevenção de complicações (TVP, úlcera de pressão, pneumonia); 5. Fisioterapia motora e respiratória; 6. Avaliar necessidade de dispositivos auxiliares." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Nutrição: proteína 1,2-1,5 g/kg/dia, suplementação de vitamina D (se <30 ng/mL: Colecalciferol 50.000UI/semana por 8 semanas → 1.000-2.000UI/dia). Exercício: resistido progressivo (mesmo em acamados — exercícios no leito). Prevenção de TVP: Enoxaparina 40mg SC 1x/dia se acamado agudo. Úlceras: mudança de decúbito 2/2h, colchão pneumático." },
      { id: "prescriptions", title: "Prescrições", content: "1. Dieta hiperproteica (1,2-1,5 g/kg/dia de proteína); 2. Vitamina D3 1.000-2.000 UI/dia VO; 3. Enoxaparina 40mg SC 1x/dia (se agudo); 4. Mudança de decúbito 2/2h; 5. Fisioterapia motora 2x/dia; 6. Fisioterapia respiratória; 7. Laxante osmótico (Lactulose 15-30mL VO 1-2x/dia); 8. Avaliação fonoaudiológica (disfagia)." },
      { id: "followup", title: "Acompanhamento", content: "Reavaliação funcional semanal. Meta: recuperar maior funcionalidade possível. Programa de reabilitação domiciliar. Orientar cuidadores. Avaliar necessidade de órteses, cadeira de rodas, adaptações domiciliares." },
      { id: "complications", title: "Complicações", content: "Úlceras de pressão (graus I-IV), TEP/TVP, pneumonia aspirativa, constipação/fecaloma, ITU de repetição, contraturas, depressão, desnutrição, óbito." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internação: complicação aguda (pneumonia, TVP, úlcera infectada). UTI: sepse, TEP. Alta: estável, plano de reabilitação domiciliar, cuidador capacitado, seguimento geriátrico/fisioterapia agendado." },
      { id: "references", title: "Referências Bibliográficas", content: "SBGG — Grandes Síndromes Geriátricas. Cruz-Jentoft AJ et al. Age Ageing 2019 (EWGSOP2). Dent E et al. J Nutr Health Aging 2019. OMS — Década do Envelhecimento Saudável 2020-2030." }
    ]
  }
];
