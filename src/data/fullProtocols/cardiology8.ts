import type { FullProtocol } from "./types";

export const cardioFullProtocols8: FullProtocol[] = [
  {
    id: "fp-endocardite-cardio8",
    title: "Endocardite Infecciosa - Protocolo Completo",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["endocardite", "valva", "febre", "hemocultura", "vegetacao", "Duke"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Endocardite Infecciosa - Protocolo Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Síndrome de Brugada: canalopatia cardíaca hereditária (autossômica dominante) caracterizada por padrão eletrocardiográfico típico (supradesnivelamento de ST em V1-V3 com morfologia tipo 1 'coved' ou tipo 2 'saddleback') associada a risco de arritmias ventriculares malignas e morte súbita cardíaca.\n\nTipo 1 (Coved): supradesnível de ST ≥2mm com concavidade descendente + onda T negativa em V1-V2 — DIAGNÓSTICO\nTipo 2 (Saddleback): supradesnível de ST ≥2mm com concavidade ascendente + onda T positiva — SUGESTIVO (necessita teste provocativo)\nTipo 3: morphologia < 2mm — insuficiente para diagnóstico"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Suspeitar em todo paciente com:\n• Febre persistente + sopro cardíaco novo\n• Febre + fator de risco (uso de drogas IV, prótese valvar, cardiopatia prévia)\n• Bacteremia por S. aureus sem foco identificado\n• Fenômenos embólicos inexplicados (AVC, embolia pulmonar séptica)\n• Hemoculturas positivas persistentes\n\nCritérios de Duke Modificados:\nMAIORES: (1) Hemoculturas típicas (2 positivas para germe típico); (2) Evidência de envolvimento endocárdico ao ecocardiograma (vegetação, abscesso, deiscência de prótese) ou nova regurgitação valvar\nMENORES: Predisposição, febre ≥38°C, fenômenos vasculares (Janeway, embolia arterial), fenômenos imunológicos (Osler, Roth, FR+, GN), evidência microbiológica não critério maior\nDEFINITIVO: 2 maiores, ou 1 maior + 3 menores, ou 5 menores"
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Agentes etiológicos por frequência:\n• Streptococcus viridans: 30-40% (valva nativa, subaguda)\n• Staphylococcus aureus: 25-30% (mais comum em aguda e UDIV)\n• Enterococcus: 10-15%\n• Grupo HACEK: 5-10% (Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella)\n• Staphylococcus coagulase-negativo: 5-8% (próteses)\n• Fungos (Candida, Aspergillus): 1-2% (imunossuprimidos, próteses)\n\nFatores de risco:\n• Doença valvar prévia (reumática, degenerativa, bicúspide)\n• Prótese valvar\n• Uso de drogas intravenosas\n• Dispositivos intracardíacos\n• Procedimentos dentários ou invasivos recentes\n• Hemodiálise crônica"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Manifestações clínicas:\n• Maioria assintomáticos (diagnóstico incidental ou screening familiar)\n• Síncope (20-30%): geralmente noturna ou em repouso\n• Morte súbita cardíaca abortada\n• Palpitações\n• Respiração agônica noturna\n\nCaracterísticas epidemiológicas:\n• Prevalência: 1-5/10.000\n• Predominância masculina (8-10:1)\n• Idade média de eventos: 40 anos\n• Maior prevalência no Sudeste Asiático\n\nFatores desencadeantes:\n• Febre (pode desmascarar padrão tipo 1)\n• Refeições copiosas (estímulo vagal)\n• Sono / repouso\n• Drogas bloqueadoras de canal de sódio\n• Álcool, cocaína\n• Hipocalemia, hipomagnesemia"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "ECG de 12 derivações (com V1-V2 no 2º, 3º e 4º EIC):\n• Padrão tipo 1 espontâneo = diagnóstico se + critério clínico\n\nTeste provocativo (se padrão não tipo 1):\n• Ajmalina 1mg/kg IV em 5min (padrão-ouro)\n• Procainamida 10mg/kg IV em 10min\n• Flecainida 2mg/kg IV em 10min (máx 150mg)\n• POSITIVO: conversão para padrão tipo 1 com ST ≥2mm\n• Monitorização contínua durante teste + material de RCP disponível\n\nEstratificação de risco:\n• ALTO RISCO: parada cardíaca recuperada, síncope arrítmica documentada\n• RISCO INTERMEDIÁRIO: padrão tipo 1 espontâneo + história familiar de MSC <45 anos\n• BAIXO RISCO: assintomático, padrão tipo 1 apenas com provocação\n\nEstudo eletrofisiológico: papel controverso na estratificação\nTeste genético: mutação SCN5A em 20-30% — não muda conduta isoladamente"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Endocardite Infecciosa - Protocolo Completo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Conduta inicial:\n1. Coletar 3 pares de hemoculturas ANTES de iniciar antibiótico\n2. Solicitar ETT de urgência (ETE se prótese ou alta suspeita)\n3. Iniciar antibioticoterapia empírica após hemoculturas:\n\n• Valva nativa, aguda: Oxacilina 2g IV 4/4h + Gentamicina 3mg/kg/dia IV\n• Valva nativa, subaguda: Ampicilina 2g IV 4/4h + Gentamicina 3mg/kg/dia\n• Prótese valvar: Vancomicina 15-20mg/kg IV 12/12h + Gentamicina 3mg/kg/dia + Rifampicina 300mg VO 8/8h\n• Alérgico a penicilina: Vancomicina 15-20mg/kg IV 12/12h\n\n4. Avaliar necessidade de cirurgia precoce\n5. Avaliação odontológica\n6. Ecocardiograma seriado"
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "CDI (Cardiodesfibrilador Implantável):\n• Classe I: sobrevivente de parada cardíaca; síncope com padrão tipo 1 espontâneo\n• Classe IIa: padrão tipo 1 espontâneo + FV induzida no EEF\n• NÃO indicado: assintomáticos com padrão apenas provocado\n\nQuinidinada:\n• Quinidina 300-600mg VO 8/8h — alternativa se CDI recusado/indisponível\n• Reduz choques em portadores de CDI com tempestade elétrica\n\nAblação por cateter:\n• Ablação epicárdica do substrato em VSVD — para tempestades elétricas refratárias\n\nMedidas gerais:\n• EVITAR: flecainida, propafenona, ajmalina (exceto teste), antidepressivos tricíclicos, lítio, cocaína\n• Tratar febre agressivamente com antitérmicos (febre desmascara padrão)\n• Evitar álcool em excesso\n• Lista de drogas a evitar: www.brugadadrugs.org\n• Screening familiar de 1º grau obrigatório"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — Brugada com tempestade elétrica:\n\n1. UTI — monitorização contínua\n2. Isoproterenol 1-4 mcg/min IV contínuo (aumenta corrente de cálcio, suprime arritmias)\n3. Quinidina 300mg VO 8/8h (quando disponível)\n4. Correção eletrolítica agressiva:\n   - Manter K+ 4,0-4,5 mEq/L\n   - Manter Mg++ >2,0 mEq/L\n5. Controle térmico rigoroso — Dipirona 1g IV 6/6h se T ≥37,5°C\n6. Suspender TODAS as drogas da lista de Brugada\n7. Avaliação para ablação epicárdica de urgência\n8. Programação de CDI: otimizar detecção para reduzir choques inapropriados"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Acompanhamento:\n• Hemoculturas de controle 48-72h após início ATB (esperar negativação)\n• Monitorar temperatura diária — febre persistente >7 dias: reavaliar terapia e buscar complicações\n• Ecocardiograma: repetir em 7-10 dias e ao final do tratamento\n• Função renal e níveis séricos de aminoglicosídeos/vancomicina 2x/semana\n• Hemograma e PCR semanais\n• Avaliação odontológica durante internação\n• Após alta:\n  - Retorno em 1, 3 e 6 meses\n  - Ecocardiograma de controle em 1-3 meses\n  - Orientar profilaxia de endocardite em procedimentos de risco\n  - Cartão de profilaxia para portadores de prótese valvar"
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Complicações:\n• Insuficiência cardíaca (30-40%): principal causa de óbito\n• Embolias sistêmicas (20-50%): AVC, embolia esplênica, renal, mesentérica\n• Embolia pulmonar séptica (endocardite direita)\n• Abscesso perianular/paravalvar\n• Bloqueio AV (extensão para septo — abscesso aórtico)\n• Aneurisma micótico (cerebral, aórtico)\n• Glomerulonefrite por imunocomplexos\n• Infarto esplênico / abscesso esplênico\n• Insuficiência renal aguda (multifatorial)\n• Recidiva (5-10%)\n\nManejo de complicações:\n• ICC: diuréticos + vasodilatadores + cirurgia precoce\n• AVC: TC de crânio urgente — cirurgia cardíaca após 4 semanas se AVC hemorrágico\n• Abscesso: indicação cirúrgica absoluta"
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Internação: TODO paciente com endocardite confirmada ou provável\n\nUTI:\n• Choque séptico\n• ICC aguda / edema agudo de pulmão\n• AVC ou evento embólico major\n• Necessidade de suporte vasoativo\n• Pós-operatório de cirurgia valvar\n\nAlta hospitalar:\n• Completou ciclo de ATB IV com boa resposta\n• Hemoculturas negativas\n• Estável hemodinamicamente\n• Sem complicações ativas\n• Opção de OPAT (Outpatient Parenteral Antibiotic Therapy) em casos selecionados\n  - Critérios: >2 sem de ATB IV, sem complicações, adesão garantida\n\nAlta ambulatorial:\n• Profilaxia de endocardite mantida indefinidamente para pacientes de alto risco\n• Amoxicilina 2g VO 1h antes de procedimentos dentários invasivos"
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. ESC 2022 Guidelines for management of patients with ventricular arrhythmias\n2. Brugada J et al. Brugada Syndrome. Eur Heart J 2018;39:1256-64\n3. Antzelevitch C et al. J-Wave syndromes expert consensus. Heart Rhythm 2016\n4. SBC — Diretriz de Arritmias Cardíacas 2023\n5. www.brugadadrugs.org — lista atualizada de drogas a evitar"
      }
],
  },
  {
    id: "fp-pericardite-aguda",
    title: "Pericardite Aguda",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["pericardite", "dor toracica", "derrame pericardico", "ECG"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Pericardite Aguda na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Pericardite Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Pericardite Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Pericardite Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Pericardite Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Pericardite Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Pericardite Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Pericardite Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Pericardite Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Pericardite Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Pericardite Aguda."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Pericardite Aguda e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Pericardite Aguda."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-miocardite-aguda",
    title: "Miocardite Aguda",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["miocardite", "insuficiencia cardiaca", "troponina", "RNM"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Miocardite Aguda na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Miocardite Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Miocardite Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Miocardite Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Miocardite Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Miocardite Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Miocardite Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Miocardite Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Miocardite Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Miocardite Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Miocardite Aguda."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Miocardite Aguda e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Miocardite Aguda."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-sindrome-brugada",
    title: "Sindrome de Brugada",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["brugada", "morte subita", "ECG", "CDI", "arritmia"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Sindrome de Brugada na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Sindrome de Brugada."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Sindrome de Brugada."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Sindrome de Brugada."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Sindrome de Brugada."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Sindrome de Brugada."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Sindrome de Brugada."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Sindrome de Brugada."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Sindrome de Brugada."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Sindrome de Brugada."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Sindrome de Brugada."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Sindrome de Brugada e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sindrome de Brugada."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-sindrome-coronariana-cronica",
    title: "Sindrome Coronariana Cronica",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["coronaria", "angina", "isquemia", "cateterismo"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Sindrome Coronariana Cronica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Sindrome Coronariana Cronica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Sindrome Coronariana Cronica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Sindrome Coronariana Cronica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Sindrome Coronariana Cronica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Sindrome Coronariana Cronica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Sindrome Coronariana Cronica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Sindrome Coronariana Cronica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Sindrome Coronariana Cronica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Sindrome Coronariana Cronica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Sindrome Coronariana Cronica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Sindrome Coronariana Cronica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sindrome Coronariana Cronica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-insuficiencia-cardiaca-cronica",
    title: "Insuficiencia Cardiaca Cronica",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["IC", "fracao de ejecao", "IECA", "betabloqueador"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Insuficiencia Cardiaca Cronica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Insuficiencia Cardiaca Cronica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Insuficiencia Cardiaca Cronica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-valvopatia-aortica",
    title: "Valvopatia Aortica",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["valvopatia", "estenose aortica", "insuficiencia aortica", "TAVI"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Valvopatia Aortica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Valvopatia Aortica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Valvopatia Aortica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Valvopatia Aortica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Valvopatia Aortica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Valvopatia Aortica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Valvopatia Aortica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Valvopatia Aortica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Valvopatia Aortica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Valvopatia Aortica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Valvopatia Aortica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Valvopatia Aortica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Valvopatia Aortica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-fibrilacao-atrial-cronica",
    title: "Fibrilacao Atrial Cronica",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["FA", "anticoagulacao", "CHA2DS2-VASc", "controle de frequencia"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Fibrilacao Atrial Cronica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Fibrilacao Atrial Cronica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Fibrilacao Atrial Cronica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Fibrilacao Atrial Cronica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Fibrilacao Atrial Cronica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Fibrilacao Atrial Cronica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Fibrilacao Atrial Cronica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Fibrilacao Atrial Cronica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Fibrilacao Atrial Cronica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Fibrilacao Atrial Cronica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Fibrilacao Atrial Cronica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Fibrilacao Atrial Cronica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Fibrilacao Atrial Cronica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-trombose-venosa-profunda-cardio",
    title: "Trombose Venosa Profunda (TVP)",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["TVP", "trombose", "anticoagulacao", "heparina", "DOAC"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Trombose Venosa Profunda (TVP) na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Trombose Venosa Profunda (TVP) e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Trombose Venosa Profunda (TVP)."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-tep-submacico",
    title: "TEP Submacico",
    categoryId: "cardiology",
    category: "Cardiologia",
    tags: ["TEP", "submacico", "risco intermediario", "anticoagulacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de TEP Submacico na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de TEP Submacico."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de TEP Submacico."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para TEP Submacico."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de TEP Submacico."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de TEP Submacico."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para TEP Submacico."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com TEP Submacico."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de TEP Submacico."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para TEP Submacico."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de TEP Submacico."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de TEP Submacico e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para TEP Submacico."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
