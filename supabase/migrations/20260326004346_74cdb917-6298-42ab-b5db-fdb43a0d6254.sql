
UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antiemético perioperatório e para quimioterapia.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '4mg IV na indução. Pós-op: 4mg IV 8/8h.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista 5-HT3, bloqueia via emetogênica central e periférica.' ELSE mecanismo_acao END
WHERE id = 'anest-ondansetrona-anest';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Ondansetrona em solução oral para vômitos pediátricos.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 0,15mg/kg/dose VO 8/8h. Máx 4mg/dose.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista seletivo 5-HT3, antiemético central e periférico.' ELSE mecanismo_acao END
WHERE id = 'ped-ondansetrona-susp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da lipase para tratamento da obesidade.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '120mg VO 3x/dia com refeições contendo gordura.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe lipase pancreática, reduzindo absorção de gorduras em 30%.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Obesidade (IMC≥30) ou sobrepeso com comorbidades.' ELSE indicacoes END
WHERE id = 'orlistate';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Descongestionante nasal tópico alfa-agonista.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2-3 jatos em cada narina 2x/dia por no máximo 3-5 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista alfa-1, vasoconstrição da mucosa nasal.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Congestão nasal aguda. Uso curto para evitar rinite medicamentosa.' ELSE indicacoes END
WHERE id = 'orl-oximetazolina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Enzimas pancreáticas para insuficiência exócrina.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '25.000-50.000UI de lipase por refeição principal. Ajustar conforme sintomas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Repõe lipase, amilase e protease para digestão de nutrientes.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Insuficiência pancreática exócrina, fibrose cística, pancreatite crônica.' ELSE indicacoes END
WHERE id = 'enzimas-pancreaticas';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'BNM não-despolarizante de longa ação para cirurgias.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '0,08-0,1mg/kg IV. Manutenção: 0,01-0,02mg/kg.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia receptores nicotínicos na placa motora.' ELSE mecanismo_acao END
WHERE id = 'anest-pancuronio';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Paracetamol em gotas para analgesia e antitérmico pediátrico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 10-15mg/kg/dose VO 4-6h. 1gota/kg até 35 gotas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe COX central, ação analgésica e antipirética sem anti-inflamatória.' ELSE mecanismo_acao END
WHERE id = 'ped-paracetamol-gotas';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Quelante de potássio para hiperpotassemia crônica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '8,4g VO 1x/dia com refeição. Ajustar conforme K+ sérico.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Troca K+ por Ca2+ no trato GI, aumentando excreção fecal de K+.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Hiperpotassemia em DRC e uso crônico de IECA/BRA.' ELSE indicacoes END
WHERE id = 'nefro-patiromer';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'IECA para hipertensão e IC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '4-8mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe ECA, reduzindo angiotensina II e degradação de bradicinina.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'HAS, IC, pós-IAM, nefropatia diabética.' ELSE indicacoes END
WHERE id = 'perindopril';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Penicilina + inibidor para infecções graves hospitalares.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Piperacilina inibe PBPs; tazobactam inibe beta-lactamases.' ELSE mecanismo_acao END
WHERE id = 'anti-piperacilina-tazobactam';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Laxante osmótico para constipação crônica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Adulto: 1 sachê (17g) diluído em 250mL de água 1-2x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Osmótico: retém água no lúmen intestinal, amolecendo fezes.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Constipação crônica funcional, preparo intestinal.' ELSE indicacoes END
WHERE id = 'polietilenoglicol';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Corticoide para síndrome nefrótica em crianças e adultos.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Adulto: 1mg/kg/dia VO (máx 80mg) por 4-8 sem, depois desmame.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Imunossupressão por inibição de NF-kB e citocinas inflamatórias.' ELSE mecanismo_acao END
WHERE id = 'nefro-prednisolona-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Corticoide tópico oftálmico para inflamação ocular.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-2 gotas no olho afetado 4-6x/dia, reduzir gradualmente.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anti-inflamatório esteroidal tópico, inibe fosfolipase A2 ocular.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-prednisolona-col';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Prednisolona em solução oral para uso pediátrico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Asma: 1-2mg/kg/dia VO (máx 60mg) por 3-5 dias. SN: protocolo específico.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Corticoide com ação anti-inflamatória e imunossupressora.' ELSE mecanismo_acao END
WHERE id = 'ped-prednisolona-susp';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '5-60mg VO 1x/dia. Insuficiência adrenal: 5mg manhã + 2,5mg tarde.' ELSE posologia_adulto END
WHERE id = 'prednisona-endocrino';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Progesterona natural para TRH e suporte de fase lútea.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '200-400mg vaginal ou 100-200mg VO ao deitar.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Progesterona bioidêntica, transforma endométrio proliferativo em secretor.' ELSE mecanismo_acao END
WHERE id = 'gin-progesterona-micronizada';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Procinético serotoninérgico para constipação crônica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2mg VO 1x/dia. Se ineficaz em 4 sem, reavaliar.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista 5-HT4, estimula peristaltismo e secreção colônica.' ELSE mecanismo_acao END
WHERE id = 'alvimopan';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'SERM para prevenção de osteoporose pós-menopausa.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '60mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista estrogênico no osso, antagonista na mama e útero.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Osteoporose pós-menopausa, redução de risco de Ca mama HR+.' ELSE indicacoes END
WHERE id = 'gin-raloxifeno';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antianginoso metabólico para angina estável refratária.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '500-1000mg VO 2x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe corrente tardia de Na+, reduzindo sobrecarga de Ca2+ no miócito.' ELSE mecanismo_acao END
WHERE id = 'ranolazina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antibiótico não-absorvível para encefalopatia hepática e SII.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'EH: 550mg VO 2x/dia. SII-D: 550mg VO 3x/dia por 14 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe RNA polimerase bacteriana no lúmen intestinal, ação local.' ELSE mecanismo_acao END
WHERE id = 'rifaximina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anti-CD20 para glomerulonefrites e vasculites renais.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '375mg/m2 IV semanal x4 ou 1g IV D1 e D15.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anticorpo monoclonal anti-CD20, depleta linfócitos B.' ELSE mecanismo_acao END
WHERE id = 'nefro-rituximabe-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Probiótico levedura para prevenção de diarreia associada a antibióticos.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '250-500mg VO 2x/dia durante tratamento ATB e 1 sem após.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Levedura não-patogênica que compete com C. difficile e restaura flora.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Prevenção de diarreia por ATB, colite por C. difficile.' ELSE indicacoes END
WHERE id = 'saccharomyces';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Beta-2 agonista inalatório de curta ação para broncoespasmo pediátrico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 2-4 jatos com espaçador 20/20min (crise). Manutenção: 2 jatos 4-6h.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista beta-2, relaxamento do músculo liso brônquico.' ELSE mecanismo_acao END
WHERE id = 'ped-salbutamol-inal';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anti-IL-17A para psoríase moderada a grave e espondilite.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '300mg SC semanal por 5 sem, depois mensal.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anticorpo monoclonal anti-IL-17A, inibe inflamação Th17.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Psoríase em placas moderada-grave, espondilite anquilosante, artrite psoriásica.' ELSE indicacoes END
WHERE id = 'secuquinumabe';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Agonista GLP-1 para DM2 e obesidade.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'DM2: 0,25mg SC/sem, titular até 1mg. Obesidade: titular até 2,4mg/sem.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista GLP-1, estimula insulina, suprime glucagon e reduz apetite.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM2, obesidade com IMC≥30, redução de risco CV.' ELSE indicacoes END
WHERE id = 'semaglutida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Semaglutida oral para DM2.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '3mg VO 1x/dia por 30 dias, depois 7mg, pode titular para 14mg.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista GLP-1 oral com potenciador de absorção SNAC.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'DM2 com ou sem doença CV. Tomar em jejum com água.' ELSE indicacoes END
WHERE id = 'endo-semaglutida-oral';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anestésico inalatório halogenado de uso geral.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'CAM 2%. Indução: 1-8%. Manutenção: 0,5-3%.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Potencializa GABA-A e inibe glutamato, deprimindo o SNC.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Anestesia geral inalatória. Preferido em pediatria pela indução suave.' ELSE indicacoes END
WHERE id IN ('anes', 'anest-sevoflurano');

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'SRO para reidratação oral em diarreia aguda.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 sachê em 1L de água. Oferecer 50-100mL/kg em 4h (desidratação leve).' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Co-transporte Na+/glicose facilita absorção de água no intestino.' ELSE mecanismo_acao END
WHERE id = 'ped-sro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Midriático cicloplégico para exame oftalmológico.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-2 gotas no olho 15-20min antes do exame.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista muscarínico, causa midríase e cicloplegia.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-tropicamida';
