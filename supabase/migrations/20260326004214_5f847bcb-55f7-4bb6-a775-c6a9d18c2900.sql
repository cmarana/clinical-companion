
UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inodilatador para IC descompensada refratária.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '6-12mcg/kg IV em 10min, depois 0,05-0,2mcg/kg/min.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Sensibilizador de cálcio e abertura de canais KATP.' ELSE mecanismo_acao END
WHERE id = 'cardio-levosimendan';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Levotiroxina para hipotireoidismo em doses alternativas.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '25-200mcg VO 1x/dia em jejum, 30min antes do café.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reposição de T4, convertido em T3 nos tecidos periféricos.' ELSE mecanismo_acao END
WHERE id = 'endo-levotiroxina-alt';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Lidocaína IV como antiarrítmico e analgésico adjuvante.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Antiarrítmico: 1-1,5mg/kg IV bolus, manutenção 1-4mg/min. Analgesia: 1-2mg/kg/h.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia canais de sódio cardíacos e neurais.' ELSE mecanismo_acao END
WHERE id = 'anest-lidocaina-ev';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Agonista da guanilato ciclase C para constipação crônica e SII-C.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '290mcg VO 1x/dia em jejum. SII-C: 72mcg 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ativa guanilato ciclase C, aumenta secreção de Cl- e água no lúmen.' ELSE mecanismo_acao END
WHERE id = 'tegaserode-linaclotida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da DPP-4 para DM2, não requer ajuste renal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '5mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe DPP-4, prolongando ação de GLP-1 e GIP endógenos.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM2 monoterapia ou associação. Seguro na DRC.' ELSE indicacoes END
WHERE id = 'endo-linagliptina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antidiarreico opioide periférico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '4mg VO dose inicial, depois 2mg após cada evacuação. Máx 16mg/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista opioide mu periférico, reduz motilidade e secreção intestinal.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Diarreia aguda inespecífica, diarreia crônica.' ELSE indicacoes END
WHERE id = 'gastro-loperamida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'BRA nefroprotetor para HAS e DRC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '50mg VO 1x/dia. Pode aumentar para 100mg.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia receptor AT1 da angiotensina II.' ELSE mecanismo_acao END
WHERE id = 'nefro-losartana-50';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Progestágeno IM de depósito para contracepção trimestral.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '150mg IM a cada 3 meses (12 semanas).' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Suprime ovulação, espessa muco cervical e atrofia endometrial.' ELSE mecanismo_acao END
WHERE id = 'gin-medroxiprogesterona-im';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Carbapenêmico para infecções graves incluindo SNC.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe síntese da parede celular bacteriana via PBPs.' ELSE mecanismo_acao END
WHERE id = 'anti-meropenem-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Metformina de liberação prolongada para DM2.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '500-2000mg VO 1x/dia com jantar.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reduz produção hepática de glicose e melhora sensibilidade insulínica.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM2, SOP, pré-diabetes. Formulação XR com menor intolerância GI.' ELSE indicacoes END
WHERE id = 'endo-metformina-xr';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antimetabólito antineoplásico e imunossupressor.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Oncológico: varia por protocolo. Dose alta: 1-12g/m2 com leucovorin.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe diidrofolato redutase, bloqueando síntese de DNA.' ELSE mecanismo_acao END
WHERE id = 'metotrexato-onco';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Nitroimidazólico para anaeróbios e protozoários.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reduzido em anaeróbios, gera radicais que danificam DNA.' ELSE mecanismo_acao END
WHERE id = 'anti-metronidazol-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Metronidazol para H. pylori e infecções GI anaeróbias.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '250-500mg VO 3x/dia por 7-14 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reduzido intracelularmente em anaeróbios, danifica DNA.' ELSE mecanismo_acao END
WHERE id = 'metronidazol-gastro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Metronidazol gel vaginal para vaginose bacteriana.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 aplicador vaginal 1x/dia ao deitar por 5 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Ação bactericida tópica contra anaeróbios vaginais.' ELSE mecanismo_acao END
WHERE id = 'gin-metronidazol-vaginal';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Imunossupressor para nefrite lúpica e glomerulonefrites.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-1,5g VO 2x/dia. Monitorar hemograma e função hepática.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe IMPDH, bloqueando síntese de purinas em linfócitos.' ELSE mecanismo_acao END
WHERE id = 'nefro-micofenolato-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Benzodiazepínico para sedação e pré-anestesia.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Sedação: 0,02-0,1mg/kg IV. Pré-med: 0,07-0,1mg/kg IM.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Potencializa GABA-A, produzindo sedação, amnésia e ansiolise.' ELSE mecanismo_acao END
WHERE id = 'anest-midazolam-anest';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Prostaglandina E1 para indução do parto e HPP.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Indução: 25mcg vaginal 6/6h. HPP: 600-800mcg retal.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Análogo de PGE1, causa contração uterina e amadurecimento cervical.' ELSE mecanismo_acao END
WHERE id = 'gin-misoprostol-obst';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Corticoide nasal potente para rinite alérgica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2 jatos em cada narina 1x/dia. Manutenção: 1 jato/narina.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anti-inflamatório esteroidal tópico de alta potência nasal.' ELSE mecanismo_acao END
WHERE id = 'otorrino-mometasona-nasal';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Nitrato de ação prolongada para profilaxia de angina.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '20-40mg VO 2x/dia com intervalo assimétrico (8h e 16h).' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Libera óxido nítrico, vasodilatação venosa e coronariana.' ELSE mecanismo_acao END
WHERE id = 'cardio-mononitrato-isossorbida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Fluoroquinolona tópica de 4a geração para infecções oculares.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 gota no olho afetado 3x/dia por 7 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe DNA girase e topoisomerase IV de Gram+ e Gram-.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-moxifloxacino-col';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antifúngico tópico oral para candidíase orofaríngea pediátrica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 100.000UI (1mL) na boca 4x/dia após alimentação.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Liga-se ao ergosterol da membrana fúngica, causando lise.' ELSE mecanismo_acao END
WHERE id = 'ped-nistatina-oral';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'BRA para hipertensão essencial.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '20-40mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia seletivamente receptor AT1 da angiotensina II.' ELSE mecanismo_acao END
WHERE id = 'cardio-olmesartana';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Beta-2 agonista de ultra-longa ação (LABA) para DPOC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '5mcg inalação 1x/dia via Respimat.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista beta-2 de ultra-longa ação, broncodilatação 24h.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DPOC, manutenção em combinação com LAMA.' ELSE indicacoes END
WHERE id = 'pneumo-olodaterol';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anti-histamínico tópico oftálmico para conjuntivite alérgica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 gota no olho afetado 2x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista H1 e estabilizador de mastócitos na conjuntiva.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-olopatadina';
