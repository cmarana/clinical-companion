
-- Enrich 50 medications with expanded fields (antibiotics, cardiovascular, ICU)

-- ANTIBIÓTICOS
UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese proteica bacteriana ligando-se à subunidade 30S do ribossomo',
  dose_maxima = '1,5 g/dia',
  diluicao = 'Diluir em 100-200 mL de SF 0,9% ou SG 5%',
  tempo_infusao = '30-60 minutos',
  tarja = 'Vermelha',
  descricao = 'Aminoglicosídeo de amplo espectro para infecções graves por Gram-negativos'
WHERE id = 'amicacina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese da parede celular bacteriana ligando-se às PBPs (proteínas ligadoras de penicilina)',
  dose_maxima = '3 g/dia (adulto)',
  tarja = 'Vermelha',
  descricao = 'Aminopenicilina de amplo espectro para infecções respiratórias, urinárias e otites'
WHERE id = 'amoxicilina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Amoxicilina inibe síntese da parede celular; Clavulanato inibe beta-lactamases bacterianas',
  dose_maxima = '3 g/dia de amoxicilina',
  tarja = 'Vermelha',
  descricao = 'Associação de aminopenicilina com inibidor de beta-lactamase'
WHERE id = 'amoxicilina-clavulanato';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese da parede celular bacteriana; Sulbactam inibe beta-lactamases',
  dose_maxima = '12 g/dia de ampicilina',
  diluicao = 'Reconstituir em 50-100 mL de SF 0,9%',
  tempo_infusao = '15-30 minutos',
  tarja = 'Vermelha',
  descricao = 'Aminopenicilina IV com inibidor de beta-lactamase para infecções moderadas a graves'
WHERE id = 'ampicilina-sulbactam';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese proteica bacteriana ligando-se à subunidade 50S do ribossomo',
  dose_maxima = '500 mg/dia (via oral)',
  tarja = 'Vermelha',
  descricao = 'Macrolídeo com meia-vida longa, amplo espectro incluindo atípicos'
WHERE id = 'azitromicina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Cefalosporina de 4ª geração; inibe a síntese da parede celular bacteriana',
  dose_maxima = '6 g/dia',
  diluicao = 'Reconstituir em 50-100 mL de SF 0,9% ou SG 5%',
  tempo_infusao = '30 minutos',
  tarja = 'Vermelha',
  descricao = 'Cefalosporina de 4ª geração para infecções graves hospitalares incluindo Pseudomonas'
WHERE id = 'cefepime';

UPDATE bulario_medications SET
  mecanismo_acao = 'Cefalosporina de 3ª geração; inibe a transpeptidação na síntese da parede celular',
  dose_maxima = '4 g/dia',
  diluicao = 'Reconstituir em 50-100 mL de SF 0,9% ou SG 5%',
  tempo_infusao = '30 minutos',
  tarja = 'Vermelha',
  descricao = 'Cefalosporina de 3ª geração de amplo espectro com penetração no SNC'
WHERE id = 'ceftriaxona';

UPDATE bulario_medications SET
  mecanismo_acao = 'Cefalosporina de 3ª geração com atividade anti-Pseudomonas',
  dose_maxima = '6 g/dia',
  diluicao = 'Reconstituir em 50-100 mL de SF 0,9%',
  tempo_infusao = '30 minutos',
  tarja = 'Vermelha',
  descricao = 'Cefalosporina de 3ª geração com espectro para Pseudomonas aeruginosa'
WHERE id = 'ceftazidima';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a DNA-girase e topoisomerase IV bacterianas',
  dose_maxima = '1,5 g/dia (VO) ou 800 mg/dia (IV)',
  diluicao = 'Já disponível em solução pronta para infusão (200 mg/100 mL)',
  tempo_infusao = '60 minutos',
  tarja = 'Vermelha',
  descricao = 'Fluoroquinolona de amplo espectro para infecções urinárias, respiratórias e abdominais'
WHERE id = 'ciprofloxacino';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese proteica bacteriana ligando-se à subunidade 50S do ribossomo',
  dose_maxima = '1,8 g/dia (via oral ou IV)',
  diluicao = 'Diluir em 50-100 mL de SF 0,9% ou SG 5%',
  tempo_infusao = '20-30 minutos',
  tarja = 'Vermelha',
  descricao = 'Lincosamida com excelente cobertura para anaeróbios e cocos Gram-positivos'
WHERE id = 'clindamicina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Polimixina que desestabiliza a membrana celular bacteriana',
  dose_maxima = '5 mg/kg/dia de colistimetato',
  diluicao = 'Reconstituir em 50-100 mL de SF 0,9%',
  tempo_infusao = '60 minutos',
  tarja = 'Vermelha',
  descricao = 'Polimixina E de último recurso para Gram-negativos multirresistentes (MDR)'
WHERE id = 'colistina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Lipopeptídeo cíclico que despolariza a membrana celular bacteriana',
  dose_maxima = '12 mg/kg/dia',
  diluicao = 'Reconstituir em 50 mL de SF 0,9%',
  tempo_infusao = '30 minutos',
  tarja = 'Vermelha',
  descricao = 'Lipopeptídeo para infecções graves por Gram-positivos incluindo MRSA e VRE'
WHERE id = 'daptomicina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Carbapenêmico; inibe a síntese da parede celular com o mais amplo espectro entre beta-lactâmicos',
  dose_maxima = '1 g/dia',
  diluicao = 'Reconstituir em 50 mL de SF 0,9%',
  tempo_infusao = '30 minutos',
  tarja = 'Vermelha',
  descricao = 'Carbapenêmico de dose única diária para infecções comunitárias e hospitalares'
WHERE id = 'ertapenem';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese proteica bacteriana ligando-se à subunidade 30S do ribossomo',
  dose_maxima = '7 mg/kg/dia (dose única diária)',
  diluicao = 'Diluir em 50-100 mL de SF 0,9%',
  tempo_infusao = '30-60 minutos',
  tarja = 'Vermelha',
  descricao = 'Aminoglicosídeo para infecções graves por Gram-negativos e endocardite'
WHERE id = 'gentamicina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a enzima 14-alfa-desmetilase do citocromo P450 fúngico, bloqueando síntese de ergosterol',
  dose_maxima = '800 mg/dia',
  diluicao = 'Disponível em solução pronta para infusão (200 mg/100 mL)',
  tempo_infusao = '60-120 minutos',
  tarja = 'Vermelha',
  descricao = 'Antifúngico triazólico sistêmico para candidíase e criptococose'
WHERE id = 'fluconazol';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese de 1,3-beta-D-glucano da parede celular fúngica',
  dose_maxima = '70 mg/dia (ataque), 50 mg/dia (manutenção)',
  diluicao = 'Reconstituir em 250 mL de SF 0,9%',
  tempo_infusao = '60 minutos',
  tarja = 'Vermelha',
  descricao = 'Equinocandina para candidíase invasiva e aspergilose refratária'
WHERE id = 'caspofungina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a síntese proteica bacteriana ligando-se à subunidade 50S do ribossomo',
  dose_maxima = '1 g/dia',
  diluicao = 'Reconstituir em 250 mL de SF 0,9%',
  tempo_infusao = '60 minutos',
  tarja = 'Vermelha',
  descricao = 'Macrolídeo para infecções respiratórias e erradicação de H. pylori'
WHERE id = 'claritromicina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Cefalosporina de 1ª geração; inibe síntese da parede celular bacteriana',
  dose_maxima = '4 g/dia (adulto)',
  tarja = 'Vermelha',
  descricao = 'Cefalosporina oral de 1ª geração para infecções de pele e ITU não complicada'
WHERE id = 'cefalexina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Cefalosporina de 1ª geração IV; inibe síntese da parede celular bacteriana',
  dose_maxima = '6 g/dia',
  diluicao = 'Reconstituir em 50-100 mL de SF 0,9%',
  tempo_infusao = '30 minutos',
  tarja = 'Vermelha',
  descricao = 'Cefalosporina IV de 1ª geração, padrão-ouro para profilaxia cirúrgica'
WHERE id = 'cefazolina';

-- CARDIOVASCULARES
UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe a enzima conversora de angiotensina (ECA), reduzindo angiotensina II e aldosterona',
  dose_maxima = '40 mg/dia',
  tarja = 'Vermelha',
  descricao = 'IECA para hipertensão, insuficiência cardíaca e nefropatia diabética'
WHERE id = 'enalapril';

UPDATE bulario_medications SET
  mecanismo_acao = 'Bloqueador dos canais de cálcio diidropiridínico, promove vasodilatação arterial periférica',
  dose_maxima = '10 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Bloqueador de canal de cálcio para hipertensão e angina estável'
WHERE id = 'anlodipino';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibe competitivamente a aldosterona no túbulo coletor, promovendo natriurese com retenção de potássio',
  dose_maxima = '400 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Diurético poupador de potássio para IC, hipertensão e hiperaldosteronismo'
WHERE id = 'espironolactona-cardio';

UPDATE bulario_medications SET
  mecanismo_acao = 'Betabloqueador cardiosseletivo de 3ª geração com propriedades vasodilatadoras (bloqueio alfa-1)',
  dose_maxima = '50 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Betabloqueador com ação vasodilatadora para IC com fração de ejeção reduzida'
WHERE id = 'carvedilol';

UPDATE bulario_medications SET
  mecanismo_acao = 'Betabloqueador cardiosseletivo beta-1 sem atividade simpatomimética intrínseca',
  dose_maxima = '200 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Betabloqueador seletivo para hipertensão, IC e controle de frequência cardíaca'
WHERE id = 'metoprolol';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibidor do cotransportador de sódio-glicose 2 (SGLT2) no túbulo proximal renal',
  dose_maxima = '25 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Inibidor de SGLT2 com benefício cardiovascular e renal comprovado em DM2 e IC'
WHERE id = 'empagliflozina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibidor do cotransportador de sódio-glicose 2 (SGLT2) no túbulo proximal renal',
  dose_maxima = '10 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Inibidor de SGLT2 para DM2, IC com FE reduzida e doença renal crônica'
WHERE id = 'dapagliflozina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Ativa receptores alfa-1 adrenérgicos causando vasoconstrição; em doses altas ativa alfa e beta',
  dose_maxima = 'Sem dose máxima fixa; titular conforme resposta (usual: 0,01-3 mcg/kg/min)',
  diluicao = 'Diluir 4 mg (4 ampolas) em 234 mL de SG 5% (concentração: 16 mcg/mL)',
  tempo_infusao = 'Infusão contínua em bomba de infusão',
  tarja = 'Vermelha',
  descricao = 'Vasopressor de primeira escolha no choque séptico'
WHERE id = 'noradrenalina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Ativa receptores dopaminérgicos (D1), beta-1 e alfa-1 adrenérgicos de forma dose-dependente',
  dose_maxima = '20 mcg/kg/min',
  diluicao = 'Diluir 250 mg em 250 mL de SG 5% (concentração: 1 mg/mL = 1000 mcg/mL)',
  tempo_infusao = 'Infusão contínua em bomba de infusão',
  tarja = 'Vermelha',
  descricao = 'Catecolamina dose-dependente para choque e suporte inotrópico'
WHERE id = 'dopamina-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Agonista beta-1 adrenérgico seletivo; aumenta contratilidade e débito cardíaco',
  dose_maxima = '20 mcg/kg/min',
  diluicao = 'Diluir 250 mg em 250 mL de SG 5% (concentração: 1 mg/mL)',
  tempo_infusao = 'Infusão contínua em bomba de infusão',
  tarja = 'Vermelha',
  descricao = 'Inotrópico positivo para choque cardiogênico e IC descompensada'
WHERE id = 'dobutamina-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Vasodilatador direto por liberação de óxido nítrico; reduz pré e pós-carga',
  dose_maxima = '10 mcg/kg/min (máximo 72h devido risco de toxicidade por cianeto)',
  diluicao = 'Diluir 50 mg em 250 mL de SG 5% (concentração: 200 mcg/mL). Proteger da luz',
  tempo_infusao = 'Infusão contínua em bomba de infusão. Proteger equipo da luz',
  tarja = 'Vermelha',
  descricao = 'Vasodilatador arterial e venoso para emergência hipertensiva e IC aguda'
WHERE id = 'nitroprussiato';

-- DROGAS DE UTI / ANESTESIA
UPDATE bulario_medications SET
  mecanismo_acao = 'Agonista opioide mu de alta potência; 75-100x mais potente que morfina',
  dose_maxima = 'Variável conforme indicação; analgesia: 1-2 mcg/kg; sedação: 0,5-3 mcg/kg/h',
  diluicao = 'Diluir 500 mcg (10 mL) em 240 mL de SF 0,9% (concentração: 2 mcg/mL)',
  tempo_infusao = 'Bolus lento (1-2 min) ou infusão contínua',
  tarja = 'Preta',
  descricao = 'Opioide sintético de alta potência para analgesia e sedação em UTI e anestesia'
WHERE id = 'fentanil';

UPDATE bulario_medications SET
  mecanismo_acao = 'Agonista seletivo alfa-2 adrenérgico central com propriedades sedativas e analgésicas',
  dose_maxima = '1,4 mcg/kg/h',
  diluicao = 'Diluir 200 mcg (1 frasco) em 48 mL de SF 0,9% (concentração: 4 mcg/mL)',
  tempo_infusao = 'Infusão contínua sem bolus (risco de bradicardia)',
  tarja = 'Vermelha',
  descricao = 'Sedativo alfa-2 agonista para sedação leve em UTI com mínima depressão respiratória'
WHERE id = 'dexmedetomidina-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Antagonista competitivo dos receptores NMDA com ação dissociativa',
  dose_maxima = '4,5 mg/kg (indução anestésica)',
  diluicao = 'Pode ser administrada sem diluição IM ou diluída em SF 0,9% para IV',
  tempo_infusao = 'Bolus lento (60 segundos) ou infusão contínua',
  tarja = 'Preta',
  descricao = 'Anestésico dissociativo com propriedades analgésicas e broncodilatadoras'
WHERE id = 'ketamina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Potencializa a ação do GABA-A no SNC; efeito hipnótico e anticonvulsivante',
  dose_maxima = '2-2,5 mg/kg (indução); infusão: 4-12 mg/kg/h',
  diluicao = 'Não diluir (usar puro ou em SG 5% na concentração ≥ 2 mg/mL)',
  tempo_infusao = 'Bolus lento (20-30 seg) ou infusão contínua',
  tarja = 'Preta',
  descricao = 'Hipnótico venoso de ação ultracurta para indução anestésica e sedação em UTI'
WHERE id = 'propofol';

UPDATE bulario_medications SET
  mecanismo_acao = 'Bloqueador neuromuscular não-despolarizante; compete com acetilcolina na placa motora',
  dose_maxima = '0,6 mg/kg (intubação); manutenção: 0,1-0,2 mg/kg',
  diluicao = 'Pode ser usado sem diluição ou diluído em SF 0,9%',
  tempo_infusao = 'Bolus IV rápido',
  tarja = 'Vermelha',
  descricao = 'Bloqueador neuromuscular aminosteroidal para IOT e relaxamento em cirurgias'
WHERE id = 'rocuronio';

UPDATE bulario_medications SET
  mecanismo_acao = 'Liga-se seletivamente ao rocurônio formando complexo inativo, revertendo bloqueio neuromuscular',
  dose_maxima = '16 mg/kg',
  diluicao = 'Administrar sem diluição',
  tempo_infusao = 'Bolus IV em 10 segundos',
  tarja = 'Vermelha',
  descricao = 'Ciclodextrina modificada para reversão imediata do bloqueio neuromuscular por rocurônio'
WHERE id = 'sugamadex-anest';

UPDATE bulario_medications SET
  mecanismo_acao = 'Bloqueador neuromuscular não-despolarizante benzilisoquinolínico; libera histamina',
  dose_maxima = '0,5 mg/kg (intubação); infusão: 5-10 mcg/kg/min',
  diluicao = 'Diluir em SF 0,9% ou SG 5%',
  tempo_infusao = 'Bolus IV ou infusão contínua',
  tarja = 'Vermelha',
  descricao = 'Bloqueador neuromuscular com metabolização por via de Hofmann (independente de órgão)'
WHERE id = 'atracurio-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Isômero cis-cis do atracúrio; bloqueio neuromuscular sem liberação significativa de histamina',
  dose_maxima = '0,15 mg/kg (intubação); infusão: 1-3 mcg/kg/min',
  diluicao = 'Diluir em SF 0,9% ou SG 5%',
  tempo_infusao = 'Bolus IV ou infusão contínua',
  tarja = 'Vermelha',
  descricao = 'Bloqueador neuromuscular de perfil hemodinâmico estável para IOT e cirurgias'
WHERE id = 'cisatracurio-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Opioide agonista mu com metabolismo por esterases plasmáticas (metabolismo independente de órgão)',
  dose_maxima = 'Infusão: 0,05-2 mcg/kg/min',
  diluicao = 'Diluir 1 mg em 50 mL de SF 0,9% (concentração: 20 mcg/mL)',
  tempo_infusao = 'Infusão contínua (sem bolus pelo risco de rigidez torácica)',
  tarja = 'Preta',
  descricao = 'Opioide de ação ultracurta para analgesia intraoperatória e sedação em UTI'
WHERE id = 'remifentanil-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Opioide agonista mu de altíssima potência (5-10x mais potente que fentanil)',
  dose_maxima = 'Analgesia: 0,2-0,5 mcg/kg/h em infusão contínua',
  diluicao = 'Diluir 250 mcg em 250 mL de SF 0,9%',
  tempo_infusao = 'Infusão contínua',
  tarja = 'Preta',
  descricao = 'Opioide de altíssima potência para analgesia pós-operatória e UTI'
WHERE id = 'sufentanil-uti';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibidor direto do fator Xa da coagulação',
  dose_maxima = '20 mg/dia',
  tarja = 'Vermelha',
  descricao = 'Anticoagulante oral direto para FA, TVP/TEP e profilaxia de tromboembolismo'
WHERE id = 'rivaroxabana';

UPDATE bulario_medications SET
  mecanismo_acao = 'Antagonista da vitamina K; inibe fatores II, VII, IX e X da coagulação',
  dose_maxima = 'Individualizada pelo INR (alvo 2-3)',
  tarja = 'Vermelha',
  descricao = 'Anticoagulante cumarínico para FA, próteses valvares e tromboembolismo'
WHERE id = 'varfarina-cardio';

UPDATE bulario_medications SET
  mecanismo_acao = 'Inibidor da agregação plaquetária por bloqueio irreversível do receptor P2Y12',
  dose_maxima = '600 mg (ataque); 75 mg/dia (manutenção)',
  tarja = 'Vermelha',
  descricao = 'Antiagregante plaquetário para SCA, pós-stent e prevenção de eventos aterotrombóticos'
WHERE id = 'clopidogrel-cardio';

UPDATE bulario_medications SET
  mecanismo_acao = 'Liga-se à membrana celular fúngica (ergosterol) formando poros que alteram permeabilidade',
  dose_maxima = '1-1,5 mg/kg/dia (convencional); 3-5 mg/kg/dia (lipossomal)',
  diluicao = 'Convencional: diluir em SG 5% (concentração 0,1 mg/mL). Lipossomal: diluir em SG 5%',
  tempo_infusao = 'Convencional: 4-6 horas. Lipossomal: 2 horas',
  tarja = 'Vermelha',
  descricao = 'Antifúngico poliênico para infecções fúngicas sistêmicas graves'
WHERE id = 'anfotericina-b-gastro';

UPDATE bulario_medications SET
  mecanismo_acao = 'Análogo nucleosídeo; inibe a DNA polimerase viral do HSV e VZV',
  dose_maxima = '30 mg/kg/dia (IV para encefalite herpética)',
  diluicao = 'Reconstituir e diluir em SF 0,9% (concentração ≤ 7 mg/mL)',
  tempo_infusao = '60 minutos (mínimo)',
  tarja = 'Vermelha',
  descricao = 'Antiviral para infecções por herpes simples e varicela-zoster'
WHERE id = 'aciclovir-gastro';

UPDATE bulario_medications SET
  mecanismo_acao = 'Antagonista competitivo dos receptores H2 da histamina; reduz secreção ácida gástrica',
  dose_maxima = '300 mg/dia (IV) ou 300 mg 2x/dia (VO)',
  diluicao = 'Diluir 50 mg em 20 mL de SF 0,9% ou SG 5%',
  tempo_infusao = '15-20 minutos',
  tarja = 'Vermelha',
  descricao = 'Antagonista H2 para profilaxia de úlcera de estresse e DRGE'
WHERE id = 'ranitidina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Bloqueia canais de sódio voltagem-dependentes, estabilizando membranas neuronais e cardíacas',
  dose_maxima = '4,5 mg/kg (dose máxima sem vasoconstritor); 7 mg/kg (com vasoconstritor)',
  tarja = 'Vermelha',
  descricao = 'Anestésico local tipo amida para bloqueios regionais e antiarrítmico classe Ib'
WHERE id = 'lidocaina';

UPDATE bulario_medications SET
  mecanismo_acao = 'Análogo de vasopressina (ADH) com ação V1 e V2; vasoconstricção e antidiurese',
  dose_maxima = 'PCR: 40 UI dose única; choque: 0,04 UI/min; HDA varicosa: 0,2-0,4 UI/min',
  diluicao = 'Diluir em SF 0,9% ou SG 5% conforme indicação',
  tempo_infusao = 'Infusão contínua',
  tarja = 'Vermelha',
  descricao = 'Vasopressor não-catecolaminérgico para PCR, choque refratário e HDA varicosa'
WHERE id = 'vasopressina-uti';
