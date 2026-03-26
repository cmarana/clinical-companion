
UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Fosfomicina IV para infecções graves por MDR.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '4-8g IV 6/6h ou 8/8h. Máx 24g/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe MurA, bloqueando etapa inicial da síntese do peptidoglicano.' ELSE mecanismo_acao END
WHERE id = 'fosfomicina-iv';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Aminoglicosídeo para infecções graves e endocardite.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se à subunidade 30S ribossomal bacteriana.' ELSE mecanismo_acao END
WHERE id = 'anti-gentamicina-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Sulfonilureia para DM2, estimula secreção de insulina.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Fecha canais KATP nas células beta, estimulando secreção de insulina.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2,5-20mg VO 1-2x/dia com refeições.' ELSE posologia_adulto END
WHERE id = 'glibenclamida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Sulfonilureia de ação intermediária para DM2.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Fecha canais KATP, estimula secreção de insulina com menor risco de hipo.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '30-120mg VO 1x/dia com café da manhã.' ELSE posologia_adulto END
WHERE id = 'gliclazida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anticolinérgico de longa ação (LAMA) inalatório para DPOC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '50mcg inalação 1x/dia via dispositivo Breezhaler.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista muscarínico M3 de longa ação, broncodilatação sustentada.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DPOC moderada a grave, manutenção.' ELSE indicacoes END
WHERE id = 'pneumo-glicopirronio';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Sulfonilureia de longa ação para DM2.' ELSE descricao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM2 quando metformina insuficiente.' ELSE indicacoes END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Fecha canais KATP, estimula secreção de insulina pancreática.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-6mg VO 1x/dia com café da manhã.' ELSE posologia_adulto END
WHERE id = 'endo-glimepirida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'AINE em gotas para febre e dor pediátrica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 5-10mg/kg/dose VO 6-8h. Máx 40mg/kg/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe COX-1 e COX-2, reduzindo prostaglandinas.' ELSE mecanismo_acao END
WHERE id = 'ped-ibuprofeno-gotas';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Ibuprofeno IV para fechamento do canal arterial em prematuros.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10mg/kg IV D1, depois 5mg/kg IV D2 e D3.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe COX, reduzindo prostaglandinas que mantêm o canal arterial.' ELSE mecanismo_acao END
WHERE id = 'neo-ibuprofeno-iv';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor de tirosina quinase BCR-ABL para LMC e GIST.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '400-800mg VO 1x/dia com refeição.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe BCR-ABL, c-KIT e PDGFR, bloqueando proliferação tumoral.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'LMC Ph+, GIST, LLA Ph+, dermatofibrossarcoma.' ELSE indicacoes END
WHERE id = 'imatinibe';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Carbapenêmico de amplo espectro para infecções graves.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe síntese da parede celular; cilastatina impede degradação renal.' ELSE mecanismo_acao END
WHERE id = 'anti-imipenem-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Beta-2 agonista de ultra-longa ação (LABA) para DPOC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '150-300mcg inalação 1x/dia via Breezhaler.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista beta-2 de ultra-longa ação, broncodilatação por 24h.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DPOC, manutenção. Não usar isolado na asma.' ELSE indicacoes END
WHERE id = 'pneumo-indacaterol';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Diurético tiazídico-like para hipertensão.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1,5-2,5mg VO 1x/dia pela manhã.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe reabsorção de Na+ no túbulo contorcido distal.' ELSE mecanismo_acao END
WHERE id = 'indapamida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Indometacina IV para fechamento do canal arterial neonatal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '0,1-0,2mg/kg IV 12-24h por 3 doses.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe COX, reduzindo PGE2 que mantém o canal arterial patente.' ELSE mecanismo_acao END
WHERE id = 'neo-indometacina-iv';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anti-TNF para doença inflamatória intestinal grave.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '5mg/kg IV semanas 0, 2, 6 e depois cada 8 semanas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anticorpo monoclonal anti-TNF-alfa, reduz inflamação intestinal.' ELSE mecanismo_acao END
WHERE id IN ('gastro-infliximabe', 'infliximabe-gastro');

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Insulina de ação ultrarrápida para controle prandial.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'SC antes das refeições. Dose individual conforme glicemia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Análogo de insulina de ação rápida, pico em 1-2h.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM1, DM2, controle glicêmico prandial.' ELSE indicacoes END
WHERE id = 'endo-insulina-asparte';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Insulina basal de ultra-longa ação (>42h) para DM1 e DM2.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'SC 1x/dia em horário fixo. Dose individual.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Forma multi-hexâmeros SC, liberação lenta e estável por >42h.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM1, DM2, insulina basal com menor variabilidade.' ELSE indicacoes END
WHERE id = 'endo-insulina-degludeca';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DPOC, asma aguda, broncoespasmo. Adjuvante aos beta-2 agonistas.' ELSE indicacoes END
WHERE id = 'ipratrópio';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anticonvulsivante para crises focais, bloqueador de canal de sódio.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '50mg VO 2x/dia, aumentar 100mg/sem até 200-400mg/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Potencializa inativação lenta de canais de sódio voltagem-dependentes.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Epilepsia focal, adjuvante ou monoterapia.' ELSE indicacoes END
WHERE id = 'lacosamida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Probiótico para reequilíbrio da flora intestinal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-2 cápsulas VO 1-2x/dia com refeições.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Coloniza intestino, compete com patógenos e modula imunidade.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Diarreia por antibióticos, SII, disbiose intestinal.' ELSE indicacoes END
WHERE id = 'lactobacillus';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'BCC di-hidropiridínico para hipertensão essencial.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10-20mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia canais de cálcio tipo L, vasodilatação arteriolar.' ELSE mecanismo_acao END
WHERE id = 'cardio-lercanidipino';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da aromatase para câncer de mama HR+.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2,5mg VO 1x/dia contínuo.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe aromatase, bloqueando conversão de andrógenos em estrogênios.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Ca mama HR+ pós-menopausa, adjuvante e metastático.' ELSE indicacoes END
WHERE id = 'letrozol';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da aromatase off-label para indução da ovulação.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2,5-5mg VO 1x/dia do D3-D7 do ciclo menstrual.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reduz estrogênio, estimulando FSH e desenvolvimento folicular.' ELSE mecanismo_acao END
WHERE id = 'gin-letrozol-fertil';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Progestágeno para contracepção e TRH.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Implante: 1 bastão SC a cada 3 anos. Comprimido: conforme regime.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Progestágeno que inibe ovulação e espessa muco cervical.' ELSE mecanismo_acao END
WHERE id = 'endo-levonorgestrel';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Contracepção de emergência pós-coito.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1,5mg VO dose única até 72h após relação desprotegida.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe/atrasa ovulação por supressão do pico de LH.' ELSE mecanismo_acao END
WHERE id = 'gin-levonorgestrel-emergencia';
