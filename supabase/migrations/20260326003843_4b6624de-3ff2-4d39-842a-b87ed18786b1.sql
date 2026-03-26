
UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '8-32mg VO 1x/dia.' ELSE posologia_adulto END
WHERE id = 'candesartana';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Mucolítico expectorante para secreções respiratórias.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Adulto: 750mg VO 3x/dia. Pediátrico: 15mg/kg/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reduz viscosidade do muco por ação sobre glicoproteínas.' ELSE mecanismo_acao END
WHERE id = 'orl-carbocisteina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Cefalosporina de 1a geração em suspensão pediátrica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 25-50mg/kg/dia VO 6/6h ou 8/8h.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe síntese da parede celular ligando-se às PBPs.' ELSE mecanismo_acao END
WHERE id = 'ped-cefalexina-susp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Cefalosporina de 4a geração para infecções graves.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe síntese da parede celular, amplo espectro incluindo Pseudomonas.' ELSE mecanismo_acao END
WHERE id = 'anti-cefepima';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Sideróforo-cefalosporina para Gram-negativos multirresistentes.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Utiliza transportadores de ferro bacterianos para penetrar na célula.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2g IV 8/8h em infusão de 3 horas.' ELSE posologia_adulto END
WHERE id = 'cefiderocol';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Cefalosporina + inibidor de beta-lactamase para MDR.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ceftazidima inibe PBPs; avibactam inibe beta-lactamases classe A/C/D.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2,5g IV 8/8h em infusão de 2 horas.' ELSE posologia_adulto END
WHERE id = 'ceftazidima-avibactam';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Cefalosporina + inibidor de beta-lactamase para infecções por MDR.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ceftolozana tem afinidade por PBPs de Pseudomonas; tazobactam inibe beta-lactamases.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1,5g IV 8/8h (ITU) ou 3g IV 8/8h (pneumonia) em 1h.' ELSE posologia_adulto END
WHERE id = 'ceftolozana-tazobactam';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antifúngico azólico sistêmico para micoses disseminadas.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '200-400mg VO 1x/dia por 4-6 semanas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe 14-alfa-demetilase fúngica, bloqueando síntese de ergosterol.' ELSE mecanismo_acao END
WHERE id = 'derma-cetoconazol-sist';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'AINE tópico oftálmico para dor e inflamação ocular.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 gota no olho afetado 4x/dia por 2 semanas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe COX, reduzindo síntese de prostaglandinas no olho.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-cetorolaco-col';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Imunossupressor alquilante para nefrite lúpica grave.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pulso IV: 500-1000mg/m2 mensal por 6 meses (protocolo NIH).' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agente alquilante que interfere na replicação do DNA de linfócitos.' ELSE mecanismo_acao END
WHERE id = 'nefro-ciclofosfamida-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antagonista H2 para redução da secreção ácida gástrica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '400mg VO 2x/dia ou 800mg ao deitar.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia receptores H2 da histamina nas células parietais gástricas.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DRGE, úlcera péptica, síndrome de Zollinger-Ellison.' ELSE indicacoes END
WHERE id = 'cimetidina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Fluoroquinolona tópica oftálmica para infecções oculares.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-2 gotas no olho afetado 4-6x/dia por 7-14 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe DNA girase e topoisomerase IV bacteriana.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-ciprofloxacino-col';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Macrolídeo de amplo espectro para infecções respiratórias e H. pylori.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se à subunidade 50S ribossomal, inibindo síntese proteica.' ELSE mecanismo_acao END
WHERE id = 'anti-claritromicina-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Lincosamida para infecções anaeróbias e Gram-positivos.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se à subunidade 50S, inibindo translocação peptídica.' ELSE mecanismo_acao END
WHERE id = 'anti-clindamicina-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Modulador seletivo do receptor de estrogênio para indução da ovulação.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '50-150mg VO 1x/dia do D5 ao D9 do ciclo menstrual.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista estrogênico no hipotálamo, estimulando liberação de FSH/LH.' ELSE mecanismo_acao END
WHERE id = 'gin-clomifeno';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Agonista alfa-2 central para hipertensão refratária.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '0,1-0,3mg VO 2x/dia. Máx 2,4mg/dia. Não suspender abruptamente.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista alfa-2 adrenérgico central, reduz tônus simpático.' ELSE mecanismo_acao END
WHERE id = 'cardio-clonidina-cv';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antisséptico tópico orofaríngeo para higiene bucal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2-3 jatos na cavidade oral 3x/dia após higiene.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ação bactericida por disrupção da membrana celular.' ELSE mecanismo_acao END
WHERE id = 'orl-clorexidina-spray';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antifúngico tópico para otomicose.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2-3 gotas no ouvido afetado 3x/dia por 7-14 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Altera permeabilidade da membrana fúngica por ligação ao ergosterol.' ELSE mecanismo_acao END
WHERE id = 'orl-clotrimazol-otologico';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Polimixina para Gram-negativos multirresistentes (Acinetobacter, KPC).' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Desestrutura membrana externa de Gram-negativos por ligação ao lipídeo A.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Ataque: 9MUI IV, manutenção: 4,5MUI IV 12/12h. Ajustar por ClCr.' ELSE posologia_adulto END
WHERE id = 'colistimetato';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'iSGLT2 com benefício cardiovascular na IC com FE reduzida.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe SGLT2 renal, promovendo glicosúria e natriurese.' ELSE mecanismo_acao END
WHERE id = 'dapagliflozina-ic';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'iSGLT2 com nefroproteção na doença renal crônica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10mg VO 1x/dia. Pode usar até TFG 20mL/min.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe SGLT2, reduz hiperfiltração glomerular e pressão intraglomerular.' ELSE mecanismo_acao END
WHERE id = 'nefro-dapagliflozina-drc';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antraciclina para leucemias agudas e linfomas.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '45-60mg/m2 IV nos D1-3 do ciclo. Dose cumulativa max 550mg/m2.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Intercala-se ao DNA e inibe topoisomerase II, causando quebras.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'LMA, LLA, linfomas. Protocolo de indução e consolidação.' ELSE indicacoes END
WHERE id = 'daunorrubicina-onco';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anestésico inalatório halogenado de rápida indução e despertar.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'CAM 6-7%. Indução: 3-6%. Manutenção: 2-6% conforme resposta.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Potencializa GABA-A e inibe receptores NMDA no SNC.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Anestesia geral inalatória, manutenção anestésica.' ELSE indicacoes END
WHERE id = 'anest-desflurano';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Progestágeno oral isolado para contracepção (minipílula).' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '75mcg VO 1x/dia contínuo, sem pausa.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe ovulação e espessa muco cervical, impedindo fertilização.' ELSE mecanismo_acao END
WHERE id = 'gin-desogestrel';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Corticosteroide perioperatório para NVPO e edema.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '4-8mg IV na indução anestésica para profilaxia de NVPO.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anti-inflamatório esteroidal, inibe fosfolipase A2 e citocinas.' ELSE mecanismo_acao END
WHERE id = 'anest-dexametasona-anest';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Corticoide em elixir/gotas para uso pediátrico (crupe, asma).' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Crupe: 0,15-0,6mg/kg VO dose única. Asma: 0,15mg/kg/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Potente anti-inflamatório esteroidal com longa duração de ação.' ELSE mecanismo_acao END
WHERE id = 'ped-dexametasona-gotas';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Progestágeno para endometriose e dor pélvica crônica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2mg VO 1x/dia contínuo.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ação progestacional com efeito antiproliferativo no endométrio.' ELSE mecanismo_acao END
WHERE id = 'gin-dienogeste';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Nitrato para angina e insuficiência coronariana aguda.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '5mg SL a cada 5min (máx 3 doses). VO: 5-40mg 3x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Libera óxido nítrico, causando vasodilatação venosa e coronariana.' ELSE mecanismo_acao END
WHERE id = 'cardio-dinitrato-isossorbida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Adsorvente intestinal para diarreia aguda.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Adulto: 3g VO 3x/dia. Pediátrico: 1-2 sachês/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Adsorve toxinas e agentes patogênicos no lúmen intestinal.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Diarreia aguda, proteção da mucosa gastrointestinal.' ELSE indicacoes END
WHERE id = 'diosmectita';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Dipirona em gotas para analgesia e antitérmico pediátrico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 10-25mg/kg/dose VO 6/6h. 1gota/kg até 40 gotas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe COX central e ativa via canabinoide endógena.' ELSE mecanismo_acao END
WHERE id = 'ped-dipirona-gotas';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'DIU de cobre como contraceptivo de longa duração não hormonal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Inserção intrauterina por profissional. Duração: até 10 anos.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Cobre causa reação inflamatória local espermicida no endométrio.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Contracepção de longa duração, contracepção de emergência até 5 dias.' ELSE indicacoes END
WHERE id = 'gin-diu-cobre';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'DIU hormonal com levonorgestrel para contracepção e SUA.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Inserção intrauterina. Duração: 5-8 anos conforme modelo.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liberação local de levonorgestrel, atrofia endometrial e espessamento do muco.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Contracepção, sangramento uterino anormal, endometriose, dismenorreia.' ELSE indicacoes END
WHERE id = 'gin-diu-levonorgestrel';
