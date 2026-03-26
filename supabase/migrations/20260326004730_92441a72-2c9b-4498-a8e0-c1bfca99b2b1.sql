
UPDATE bulario_medications SET indicacoes = 'Hipertensão essencial, IC com FE preservada, nefropatia diabética.' WHERE id = 'candesartana' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Infecções por Gram-negativos MDR incluindo carbapenemases.' WHERE id = 'cefiderocol' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'ITU complicada, pneumonia nosocomial por KPC e ESBL.' WHERE id = 'ceftazidima-avibactam' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'ITU complicada, pneumonia nosocomial por Pseudomonas MDR.' WHERE id = 'ceftolozana-tazobactam' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Dermatofitoses extensas, candidíase mucocutânea crônica.' WHERE id = 'derma-cetoconazol-sist' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Infecções por Acinetobacter, KPC, Pseudomonas pan-resistentes.' WHERE id = 'colistimetato' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'IC com FE reduzida (NYHA II-IV), com ou sem DM2.' WHERE id = 'dapagliflozina-ic' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Glaucoma de ângulo aberto, hipertensão ocular.' WHERE id = 'oftalmo-dorzolamida' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'HPB sintomática, hipertensão arterial.' WHERE id = 'uro-doxazosina-uro' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'FA paroxística/persistente com cardiopatia estável.' WHERE id = 'dronedarona' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET
  descricao = 'ACO combinado com efeito antimineralocorticoide.',
  posologia_adulto = '1cp VO 1x/dia por 21 dias, pausa de 7 dias ou regime contínuo.'
WHERE id = 'gin-drospirenona-etinilestradiol' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);
UPDATE bulario_medications SET indicacoes = 'Anemia ferropriva grave, intolerância ao ferro VO, pré-operatório.' WHERE id = 'hemato-ferro-ev' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Infecções por Gram-negativos MDR, incluindo KPC (em combinação).' WHERE id = 'fosfomicina-iv' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'DM2 quando metformina insuficiente, associação ou monoterapia.' WHERE id = 'glibenclamida' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'DM2 como monoterapia ou associação com outros antidiabéticos.' WHERE id = 'gliclazida' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Hipertensão arterial essencial, preferência em idosos.' WHERE id = 'indapamida' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Doença de Crohn e RCU moderada a grave refratárias.' WHERE id = 'gastro-infliximabe' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Hipertensão arterial essencial.' WHERE id = 'cardio-lercanidipino' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'LLA, LNH, osteossarcoma, coriocarcinoma, Ca mama.' WHERE id = 'metotrexato-onco' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Rinite alérgica sazonal e perene, polipose nasal.' WHERE id = 'otorrino-mometasona-nasal' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Hipertensão arterial, nefropatia diabética.' WHERE id = 'cardio-olmesartana' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET indicacoes = 'Angina crônica estável refratária a tratamento convencional.' WHERE id = 'ranolazina' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET
  descricao = 'Inibidor da PDE5 para disfunção erétil e HPB.',
  mecanismo_acao = 'Inibe PDE5, aumenta GMPc e relaxa musculatura lisa do corpo cavernoso.'
WHERE id = 'uro-sildenafila-uro' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);
UPDATE bulario_medications SET indicacoes = 'DM2 como monoterapia ou em associação.' WHERE id = 'sitagliptina' AND LENGTH(indicacoes) < 10;
UPDATE bulario_medications SET posologia_adulto = '524mg VO 4x/dia ou 2cp após cada evacuação diarreica (máx 8/dia).' WHERE id = 'bismuto' AND LENGTH(posologia_adulto) < 10;
UPDATE bulario_medications SET posologia_adulto = '1g VO 4x/dia 1h antes das refeições e ao deitar, por 4-8 semanas.' WHERE id = 'sucralfato' AND LENGTH(posologia_adulto) < 10;
UPDATE bulario_medications SET
  descricao = 'Associação sulfonamida + trimetoprima de amplo espectro.',
  mecanismo_acao = 'Inibe sequencialmente a síntese de ácido fólico bacteriano (DHPS e DHFR).'
WHERE id = 'anti-sulfametoxazol-tmp' AND (LENGTH(descricao) < 10 OR LENGTH(mecanismo_acao) < 10);
UPDATE bulario_medications SET
  descricao = 'Sulfato ferroso em gotas para anemia ferropriva pediátrica.',
  posologia_adulto = 'Profilático: 1mg Fe/kg/dia. Tratamento: 3-5mg Fe/kg/dia VO em 2-3 doses.'
WHERE id = 'ped-sulfato-ferroso-gotas' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);
UPDATE bulario_medications SET
  descricao = 'Surfactante exógeno para síndrome do desconforto respiratório neonatal.',
  posologia_adulto = '200mg/kg IT na 1ª dose, 100mg/kg nas subsequentes (máx 3 doses em 48h).'
WHERE id = 'neo-surfactante-porcino' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);
UPDATE bulario_medications SET
  descricao = 'Inibidor da calcineurina para imunossupressão pós-transplante renal.',
  posologia_adulto = '0,1-0,2mg/kg/dia VO 12/12h. Monitorar nível sérico (5-15ng/mL).'
WHERE id = 'nefro-tacrolimus-nefro' AND (LENGTH(descricao) < 10 OR LENGTH(posologia_adulto) < 10);
UPDATE bulario_medications SET indicacoes = 'Ca mama HR+ adjuvante e metastático, redução de risco.' WHERE id = 'tamoxifeno' AND LENGTH(indicacoes) < 10;
