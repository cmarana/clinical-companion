
UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Domperidona em gotas para refluxo e náusea pediátrica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Pediátrico: 0,25mg/kg/dose VO 3x/dia antes das refeições.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista D2 periférico, acelera esvaziamento gástrico.' ELSE mecanismo_acao END
WHERE id = 'ped-domperidona-gotas';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da anidrase carbônica tópico para glaucoma.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 gota no olho afetado 3x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe anidrase carbônica no corpo ciliar, reduz produção de humor aquoso.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-dorzolamida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Combinação fixa para glaucoma: inibidor CA + beta-bloqueador.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 gota no olho afetado 2x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Dorzolamida reduz produção aquosa; timolol reduz via receptores beta.' ELSE mecanismo_acao END
WHERE id = 'oftalmo-dorzolamida-timolol';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Alfa-bloqueador para HPB e hipertensão.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-8mg VO 1x/dia ao deitar. Iniciar com 1mg e titular.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueador alfa-1 adrenérgico, relaxa músculo liso prostático e vascular.' ELSE mecanismo_acao END
WHERE id = 'uro-doxazosina-uro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antiarrítmico classe III para FA em pacientes com cardiopatia estrutural.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '400mg VO 2x/dia com refeições.' ELSE posologia_adulto END
WHERE id = 'dronedarona';

UPDATE bulario_medications SET
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '0,75mg SC 1x/semana. Titular de 0,75 para 1,5mg após 4 sem.' ELSE posologia_adulto END
WHERE id = 'dulaglutida';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'iSGLT2 nefroprotetor para DRC com ou sem diabetes.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10-25mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe SGLT2 renal, reduzindo hiperfiltração e proteinúria.' ELSE mecanismo_acao END
WHERE id = 'nefro-empagliflozina-drc';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'IECA nefroprotetor para DRC e proteinúria.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '5-20mg VO 1-2x/dia. Monitorar K+ e creatinina.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe ECA, reduz angiotensina II e pressão intraglomerular.' ELSE mecanismo_acao END
WHERE id = 'nefro-enalapril-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Eritropoietina recombinante para anemia da DRC.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '50-100UI/kg SC 3x/semana. Alvo Hb 10-12g/dL.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Estimula eritropoiese na medula óssea via receptor de EPO.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Anemia da DRC, anemia associada a quimioterapia.' ELSE indicacoes END
WHERE id = 'nefro-eritropoietina-drc';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'EPO para anemia da prematuridade em neonatos.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '250-400UI/kg SC 3x/semana por 4-6 semanas.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Estimula eritropoiese, reduzindo necessidade transfusional.' ELSE mecanismo_acao END
WHERE id = 'neo-eritropoietina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor de tirosina quinase EGFR para câncer de pulmão.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '150mg VO 1x/dia em jejum.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe EGFR (HER1), bloqueando proliferação celular tumoral.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'CPNPC com mutação EGFR, câncer pancreático.' ELSE indicacoes END
WHERE id = 'erlotinibe';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Anticolinérgico antiespasmódico para dor abdominal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '10-20mg VO 3-4x/dia ou 20mg IV/IM quando necessário.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista muscarínico, reduz motilidade e secreção GI.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Cólica abdominal, espasmo GI, síndrome do intestino irritável.' ELSE indicacoes END
WHERE id = 'scopolamina';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antagonista da aldosterona para IC e hipertensão.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '25-50mg VO 1x/dia. Monitorar K+ e função renal.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Antagonista competitivo da aldosterona no túbulo coletor.' ELSE mecanismo_acao END
WHERE id = 'cardio-espironolactona-cv';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Estrogênio para TRH na menopausa e hipogonadismo.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1-2mg VO 1x/dia por 21 dias com pausa de 7 ou contínuo.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista estrogênico, restaura níveis hormonais na menopausa.' ELSE mecanismo_acao END
WHERE id = 'gin-estradiol-valerato';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'ACO combinado para contracepção e controle do ciclo.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 comprimido VO 1x/dia por 21 dias, pausa de 7 dias.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe ovulação por supressão de FSH/LH e espessa muco cervical.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Contracepção, regulação do ciclo menstrual, acne, SOP.' ELSE indicacoes END
WHERE id = 'gin-etinilestradiol-gestodeno';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Imunossupressor inibidor de mTOR para prevenção de rejeição.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '0,75-1mg VO 2x/dia. Monitorar nível sérico (3-8ng/mL).' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe mTOR, bloqueando proliferação de linfócitos T e B.' ELSE mecanismo_acao END
WHERE id = 'nefro-everolimus';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'BCC di-hidropiridínico de longa ação para hipertensão.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2,5-10mg VO 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Bloqueia canais de cálcio tipo L, causando vasodilatação arteriolar.' ELSE mecanismo_acao END
WHERE id = 'cardio-felodipino';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Midriático para exame de fundo de olho.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1 gota no olho 15-30min antes do exame. Repetir se necessário.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Agonista alfa-1 adrenérgico, contrai músculo dilatador da íris.' ELSE mecanismo_acao END,
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Dilatação pupilar para fundoscopia, procedimentos oftálmicos.' ELSE indicacoes END
WHERE id = 'oftalmo-fenilefrina-col';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Barbitúrico anticonvulsivante para convulsões neonatais.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN 'Ataque: 20mg/kg IV lento. Manutenção: 3-5mg/kg/dia VO/IV.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Potencializa GABA-A, elevando limiar convulsivo.' ELSE mecanismo_acao END
WHERE id = 'neo-fenobarbital';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Ferro IV para anemia ferropriva grave ou intolerância VO.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '200mg IV diluído em SF 200mL em 30min. Dose total: 1000-1500mg.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Fornece ferro elementar para síntese de hemoglobina e eritropoiese.' ELSE mecanismo_acao END
WHERE id = 'hemato-ferro-ev';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Ferro IV para anemia da DRC em hemodiálise.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '100-200mg IV por sessão de HD. Dose cumulativa: 1000mg.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Reposição de ferro para eritropoiese em pacientes com DRC.' ELSE mecanismo_acao END
WHERE id = 'nefro-ferro-sacarato-nefro';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Inibidor da 5-alfa-redutase para alopecia androgenética.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '1mg VO 1x/dia contínuo. Efeito visível após 3-6 meses.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe 5-alfa-redutase tipo II, reduzindo DHT no folículo piloso.' ELSE mecanismo_acao END
WHERE id = 'derm-finasterida-derm';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Antifúngico triazólico sistêmico de amplo espectro.' ELSE descricao END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe 14-alfa-demetilase fúngica, bloqueando síntese de ergosterol.' ELSE mecanismo_acao END
WHERE id = 'anti-fluconazol-comp';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Fluconazol VO para candidíase vulvovaginal.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '150mg VO dose única. Recorrente: 150mg D1, D4, D7, depois semanal 6m.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Inibe 14-alfa-demetilase de Candida, bloqueando ergosterol.' ELSE mecanismo_acao END
WHERE id = 'gin-fluconazol-vaginal';

UPDATE bulario_medications SET
  indicacoes = CASE WHEN LENGTH(indicacoes) < 10 THEN 'Asma persistente, DPOC moderada a grave, rinite alérgica.' ELSE indicacoes END
WHERE id = 'fluticasona';

UPDATE bulario_medications SET
  descricao = CASE WHEN LENGTH(descricao) < 10 THEN 'Corticoide nasal tópico para rinite alérgica.' ELSE descricao END,
  posologia_adulto = CASE WHEN LENGTH(posologia_adulto) < 10 THEN '2 jatos em cada narina 1x/dia.' ELSE posologia_adulto END,
  mecanismo_acao = CASE WHEN LENGTH(mecanismo_acao) < 10 THEN 'Anti-inflamatório esteroidal tópico na mucosa nasal.' ELSE mecanismo_acao END
WHERE id = 'orl-fluticasona-nasal';
