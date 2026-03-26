
UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da co-estimulação de linfócitos T, biológico para artrite reumatoide.' ELSE descricao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Artrite reumatoide moderada a grave refratária a DMARDs convencionais.' ELSE indicacoes END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se a CD80/CD86, impedindo co-estimulação via CD28 nos linfócitos T.' ELSE mecanismo_acao END
WHERE id = 'reuma-abatacepte';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da alfa-glicosidase intestinal para controle glicêmico pós-prandial.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe alfa-glicosidases intestinais, retardando digestão e absorção de carboidratos.' ELSE mecanismo_acao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '50-100mg VO 3x/dia no início das refeições, iniciar com 25mg.' ELSE posologia_adulto END
WHERE id = 'endo-acarbose';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Herpes zóster, encefalite herpética, varicela grave em imunossuprimidos.' ELSE indicacoes END
WHERE id = 'aciclovir-iv';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Hemorragias, hiperfibrinólise, prevenção de sangramento em procedimentos.' ELSE indicacoes END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1g IV em 10min (trauma) ou 15-20mg/kg IV. VO: 1-1,5g 2-3x/dia.' ELSE posologia_adulto END
WHERE id = 'hemato-acido-tranexamico';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antifibrinolítico para controle de sangramento uterino anormal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1g VO 3x/dia por até 5 dias durante menstruação.' ELSE posologia_adulto END
WHERE id = 'gin-acido-tranexamico';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10-15mg/kg/dia VO em 2-3 tomadas. Dose usual 300-900mg/dia.' ELSE posologia_adulto END
WHERE id = 'ursodiol';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '250-500mg VO 2x/dia, titular conforme nível sérico 50-100mcg/mL.' ELSE posologia_adulto END
WHERE id = 'valproato';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '40mg SC cada 2 semanas. Indução: 160mg sem1, 80mg sem2, depois 40mg.' ELSE posologia_adulto END
WHERE id = 'adalimumabe-gastro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da DPP-4 para tratamento de diabetes mellitus tipo 2.' ELSE descricao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM2 como monoterapia ou em associação com outros antidiabéticos.' ELSE indicacoes END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe DPP-4, prolongando ação das incretinas GLP-1 e GIP endógenas.' ELSE mecanismo_acao END
WHERE id = 'endo-alogliptina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da xantina oxidase para hiperuricemia e profilaxia de gota.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe xantina oxidase, reduzindo produção de ácido úrico.' ELSE mecanismo_acao END
WHERE id = 'uro-alopurinol-uro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da xantina oxidase para hiperuricemia na DRC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '100-300mg/dia VO. Ajustar: ClCr 10-20 max 200mg; ClCr<10 max 100mg.' ELSE posologia_adulto END
WHERE id = 'nefro-alopurinol-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Aminoglicosídeo para infecções graves por Gram-negativos.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se à subunidade 30S ribossomal, inibindo síntese proteica.' ELSE mecanismo_acao END
WHERE id = 'anti-amicacina-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Metilxantina como estimulante respiratório neonatal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Neonatal: ataque 5-6mg/kg IV, manutenção 1-2mg/kg 8-12h.' ELSE posologia_adulto END
WHERE id = 'neo-aminofilina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Penicilina de amplo espectro em suspensão pediátrica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 25-50mg/kg/dia VO 8/8h ou 12/12h.' ELSE posologia_adulto END
WHERE id = 'ped-amoxicilina-susp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Amoxicilina + clavulanato em suspensão para uso pediátrico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 25-45mg/kg/dia (amoxicilina) VO 12/12h.' ELSE posologia_adulto END
WHERE id = 'orl-amoxicilina-clavulanato-susp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Penicilina + inibidor de beta-lactamase para infecções mistas.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ampicilina inibe parede celular; sulbactam inibe beta-lactamases.' ELSE mecanismo_acao END
WHERE id = 'anti-ampicilina-sulbactam';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'TEV, TVP, TEP, prevenção de AVC na FA não-valvar.' ELSE indicacoes END
WHERE id = 'apixabana';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2-2,5mg/kg/dia VO. Monitorar hemograma e função hepática.' ELSE posologia_adulto END
WHERE id = 'azatioprina-gastro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anti-histamínico tópico nasal para rinite alérgica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-2 jatos em cada narina 2x/dia.' ELSE posologia_adulto END
WHERE id = 'orl-azelastina-nasal';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Macrolídeo em suspensão para infecções pediátricas.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 10mg/kg no D1, depois 5mg/kg D2-D5 VO 1x/dia.' ELSE posologia_adulto END
WHERE id = 'ped-azitromicina-susp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Monobactâmico para Gram-negativos aeróbios, opção em alergia a penicilina.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se à PBP3, inibindo síntese da parede celular de Gram-negativos.' ELSE mecanismo_acao END
WHERE id = 'anti-aztreonam';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Asma persistente moderada a grave, profilaxia.' ELSE indicacoes END
WHERE id = 'beclometasona';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'AINE tópico com ação analgésica e anti-inflamatória orofaríngea.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2-4 jatos na orofaringe 3-4x/dia após refeições.' ELSE posologia_adulto END
WHERE id = 'orl-benzidamina';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Acidose metabólica, hiperpotassemia, PCR, alcalinização urinária.' ELSE indicacoes END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Acidose: 1-2mEq/kg IV. PCR: 1mEq/kg IV. Monitorar gasometria.' ELSE posologia_adulto END
WHERE id = 'nefro-bicarbonato';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Bicarbonato de sódio VO para acidose metabólica crônica na DRC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '500-1000mg VO 2-3x/dia. Alvo: bicarbonato sérico >22mEq/L.' ELSE posologia_adulto END
WHERE id = 'nefro-bicarbonato-sodio-oral';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Agonista dopaminérgico para hiperprolactinemia e supressão da lactação.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista D2 dopaminérgico, inibe secreção de prolactina pela hipófise.' ELSE mecanismo_acao END
WHERE id = 'endo-bromocriptina';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '9mg VO 1x/dia por 8 semanas, reduzir gradualmente.' ELSE posologia_adulto END
WHERE id = 'budesonida-enteral';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '0,25-1mg VO 2x/semana. Titular conforme prolactina.' ELSE posologia_adulto END
WHERE id = 'cabergolina-endocrino';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Metilxantina estimulante respiratório para apneia da prematuridade.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Ataque: 20mg/kg VO/IV. Manutenção: 5-10mg/kg/dia 1x/dia.' ELSE posologia_adulto END
WHERE id = 'neo-cafeina-citrato';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '100-300mg VO 1x/dia antes do café da manhã.' ELSE posologia_adulto END
WHERE id = 'canagliflozina';
