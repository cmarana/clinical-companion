
UPDATE bulario_medications SET
  descricao = 'Combinação alfa-bloqueador + inibidor 5-alfa-redutase para HPB.',
  mecanismo_acao = 'Tansulosina relaxa músculo liso prostático; dutasterida inibe 5-alfa-redutase tipo 1 e 2.'
WHERE id = 'uro-tamsulosina-dutasterida' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  descricao = 'Hormônio androgênico para reposição em hipogonadismo masculino.',
  mecanismo_acao = 'Liga-se ao receptor androgênico, promovendo efeitos virilizantes e anabólicos.'
WHERE id = 'endo-testosterone' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  descricao = 'Esteroide sintético com ação estrogênica, progestogênica e androgênica para TRH.',
  posologia_adulto = '2,5mg VO 1x/dia contínuo.'
WHERE id = 'gin-tibolona' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  descricao = 'Agonista duplo GIP/GLP-1 para DM2 e obesidade.',
  mecanismo_acao = 'Ativa receptores GIP e GLP-1, potencializando secreção de insulina e saciedade.'
WHERE id = 'endo-tirzepatida' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  descricao = 'Aminoglicosídeo tópico oftálmico para infecções oculares bacterianas.',
  posologia_adulto = '1-2 gotas no olho afetado 4-6x/dia por 7-10 dias.'
WHERE id = 'oftalmo-tobramicina-col' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  indicacoes = 'AR moderada a grave refratária a DMARDs e biológicos.',
  posologia_adulto = '5mg VO 2x/dia ou 11mg XR 1x/dia.'
WHERE id = 'reuma-tofacitinibe' AND (LENGTH(indicacoes) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  descricao = 'Anticolinérgico para bexiga hiperativa e incontinência urinária.',
  mecanismo_acao = 'Antagonista muscarínico M2/M3, reduz contrações involuntárias do detrusor.'
WHERE id = 'uro-tolterodina' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  descricao = 'Diurético de alça de longa ação, alternativa à furosemida.',
  mecanismo_acao = 'Inibe co-transportador Na+/K+/2Cl- na alça de Henle com maior biodisponibilidade oral.'
WHERE id = 'cardio-torasemida' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  descricao = 'Diurético poupador de potássio para hipertensão e edema.',
  mecanismo_acao = 'Bloqueia canais de sódio epiteliais (ENaC) no túbulo coletor.'
WHERE id = 'cardio-triantereno' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  posologia_adulto = '200mg VO 3x/dia antes das refeições.'
WHERE id = 'trimebutina' AND LENGTH(posologia_adulto) < 10;

UPDATE bulario_medications SET
  indicacoes = 'Angina estável crônica, adjuvante ao tratamento convencional.'
WHERE id = 'trimetazidina' AND LENGTH(indicacoes) < 10;

UPDATE bulario_medications SET
  descricao = 'Anticolinérgico LAMA inalatório de ultra-longa ação para DPOC.',
  indicacoes = 'DPOC moderada a grave, manutenção.',
  mecanismo_acao = 'Antagonista muscarínico M3 de longa ação, broncodilatação sustentada por 24h.'
WHERE id = 'pneumo-umeclidinio' AND (LENGTH(descricao) < 30 OR LENGTH(indicacoes) < 10 OR LENGTH(mecanismo_acao) < 30);

UPDATE bulario_medications SET
  indicacoes = 'Psoríase em placas moderada-grave, artrite psoriásica, doença de Crohn.',
  posologia_adulto = '45mg SC semanas 0 e 4, depois a cada 12 semanas (>100kg: 90mg).'
WHERE id = 'reuma-ustequinumabe' AND (LENGTH(indicacoes) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  posologia_adulto = 'Indução: 300mg IV sem 0, 2, 6. Manutenção: 300mg IV cada 8 semanas.'
WHERE id = 'ustequinumabe-gastro' AND LENGTH(posologia_adulto) < 10;

UPDATE bulario_medications SET
  descricao = 'Glicopeptídeo oral para colite por C. difficile.',
  mecanismo_acao = 'Inibe síntese da parede celular bacteriana ligando-se ao D-Ala-D-Ala. Ação local no lúmen GI.'
WHERE id = 'anti-vancomicina-oral' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);

UPDATE bulario_medications SET
  indicacoes = 'RCU e Crohn moderados a graves, seletivo para intestino.',
  posologia_adulto = 'Indução: 300mg IV sem 0, 2, 6. Manutenção: 300mg IV cada 8 semanas.'
WHERE id = 'gastro-vedolizumabe' AND (LENGTH(indicacoes) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  indicacoes = 'DM2 como monoterapia ou associação com metformina.',
  posologia_adulto = '50mg VO 2x/dia com refeições.'
WHERE id = 'vildagliptina' AND (LENGTH(indicacoes) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  descricao = 'Vitamina D3 em gotas para suplementação e prevenção de raquitismo.',
  posologia_adulto = 'Lactentes: 400UI/dia. Crianças 1-18a: 600UI/dia. Deficiência: 1000-4000UI/dia.'
WHERE id = 'ped-vitamina-d-gotas' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);

UPDATE bulario_medications SET
  descricao = 'Vitamina K1 para prevenção de doença hemorrágica do recém-nascido.',
  posologia_adulto = '1mg IM dose única ao nascimento. Prematuros <1kg: 0,5mg IM.'
WHERE id = 'neo-vitamina-k' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);
