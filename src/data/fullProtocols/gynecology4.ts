import type { FullProtocol } from "./types";

export const gynecologyFullProtocols4: FullProtocol[] = [
  {
    id: "fp-endometriose-emergencia",
    title: "Endometriose com Dor Aguda",
    categoryId: "gynecology",
    category: "Ginecologia de Emergência",
    tags: ["endometriose", "dor pélvica", "dismenorreia", "endometrioma"],
    sections: [
      { id: "intro", title: "Introdução", content: "A endometriose acomete 10-15% das mulheres em idade reprodutiva. Pode se apresentar na emergência com dor pélvica aguda intensa, especialmente em caso de rotura de endometrioma ou crise álgica refratária. Diretriz FEBRASGO e ESHRE." },
      { id: "def", title: "Definição", content: "Presença de tecido endometrial (glândulas e estroma) fora da cavidade uterina. Localizações: ovários (endometrioma), peritônio, ligamentos uterossacros, intestino, bexiga. Rotura de endometrioma: abdome agudo com irritação peritoneal." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Dismenorreia progressiva, dispareunia profunda, dor pélvica crônica, infertilidade. Na emergência: dor aguda + massa anexial rota (USG). CA-125 pode estar elevado (inespecífico)." },
      { id: "etiology", title: "Etiologia", content: "Teoria da menstruação retrógrada (Sampson), metaplasia celômica, disseminação linfática/hematogênica. Fatores de risco: menarca precoce, ciclos curtos, nuliparidade, história familiar." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor pélvica aguda intensa (rotura de endometrioma), defesa abdominal, sinais de irritação peritoneal. Pode mimetizar apendicite, torção ovariana ou gravidez ectópica rota. Na crise álgica: dismenorreia incapacitante refratária a analgésicos comuns." },
      { id: "diagnosis", title: "Diagnóstico", content: "USG TV: endometrioma (cisto com conteúdo homogêneo em vidro fosco). Se roto: líquido livre em pelve/abdome. β-hCG negativo (excluir ectópica). Hemograma (avaliar sangramento). Diagnóstico definitivo: laparoscopia com biópsia (não na emergência)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Gravidez ectópica, torção ovariana, cisto hemorrágico, apendicite, DIP, cólica renal, cistite intersticial." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Analgesia potente (dor intensa); 2. Estabilização hemodinâmica se sangramento; 3. USG TV urgente; 4. β-hCG para excluir gestação; 5. Se rotura com instabilidade: cirurgia (laparoscopia)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Crise álgica: AINEs (Cetoprofeno 100mg EV ou Cetorolaco 30mg EV) + Dipirona 1g EV + Tramadol 100mg EV se refratária. Rotura com instabilidade: laparoscopia de urgência. Endometrioma íntegro: manejo ambulatorial. Hormonal (ambulatorial): dienogeste 2mg/dia, ACO contínuo, análogos de GnRH." },
      { id: "prescriptions", title: "Prescrições", content: "1. Cetoprofeno 100mg EV 12/12h; 2. Dipirona 1g EV 6/6h; 3. Tramadol 100mg EV 8/8h se dor intensa; 4. Ondansetrona 4mg EV se náusea; 5. Buscopan Composto (escopolamina + dipirona) EV SN; 6. Se alta: Cetoprofeno 100mg VO 12/12h por 5 dias + encaminhar ginecologia." },
      { id: "followup", title: "Acompanhamento", content: "Encaminhar para ginecologista/endometriose. RM de pelve para estadiamento. Discutir tratamento hormonal e/ou cirúrgico. Avaliar fertilidade se desejo reprodutivo." },
      { id: "complications", title: "Complicações", content: "Rotura de endometrioma com hemoperitônio, infertilidade, obstrução intestinal/ureteral (endometriose profunda), dor crônica incapacitante." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: dor controlada, estável, sem sinais de complicação aguda. Internação: rotura com sangramento, dor refratária, necessidade cirúrgica. UTI: choque hemorrágico." },
      { id: "references", title: "Referências Bibliográficas", content: "FEBRASGO — Endometriose. ESHRE Guideline on Endometriosis 2022. Zondervan KT et al. NEJM 2020. NICE — Endometriosis diagnosis and management." }
    ]
  },
  {
    id: "fp-mioma-complicado",
    title: "Mioma Uterino Complicado (Sangramento Agudo)",
    categoryId: "gynecology",
    category: "Ginecologia de Emergência",
    tags: ["mioma", "leiomioma", "sangramento", "menorragia", "transfusão"],
    sections: [
      { id: "intro", title: "Introdução", content: "Miomas uterinos são os tumores benignos mais comuns em mulheres (70-80% até 50 anos). Podem causar sangramento uterino agudo grave com anemia e instabilidade hemodinâmica, constituindo emergência ginecológica. Diretriz FEBRASGO e ACOG." },
      { id: "def", title: "Definição", content: "Leiomiomas são tumores benignos do miométrio. Complicações agudas: menorragia intensa com choque hipovolêmico, degeneração vermelha (necrose — dor aguda na gestação), torção de mioma pediculado, mioma parido (prolapso pelo colo)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Sangramento vaginal volumoso + útero aumentado ao toque. USG TV: miomas (nódulos hipoecoicos bem delimitados). Hemograma: anemia aguda. Sinais de choque: taquicardia, hipotensão, palidez." },
      { id: "etiology", title: "Etiologia", content: "Origem monoclonal do miométrio. Fatores: estrógeno-dependente, história familiar, raça negra (3-4x mais prevalente), nuliparidade, obesidade, menarca precoce." },
      { id: "clinical", title: "Apresentação Clínica", content: "Menorragia grave: fluxo menstrual intenso com coágulos, duração >7 dias. Metrorragia: sangramento fora do período. Anemia crônica agudizada. Dor pélvica aguda: degeneração vermelha, torção de pedículo. Mioma parido: massa no canal cervical, dor em cólica." },
      { id: "diagnosis", title: "Diagnóstico", content: "USG TV (melhor exame inicial). Hemograma urgente + tipagem sanguínea. Coagulograma. β-hCG (excluir gestação). Ferritina (avaliar reserva de ferro). RM de pelve (ambulatorial — melhor para mapear)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Abortamento, gravidez ectópica, hiperplasia endometrial, pólipo endometrial, adenomiose, coagulopatia (von Willebrand), câncer endometrial, SUA ovulatório." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Acesso venoso calibroso (2 acessos se choque); 2. Cristaloide + tipagem + reserva de sangue; 3. Ácido tranexâmico EV; 4. Hormonal para controle do sangramento; 5. Transfusão se Hb <7 ou instável; 6. Avaliação ginecológica urgente." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Ácido tranexâmico 1g EV 8/8h (antifibrinolítico). Estrogênio conjugado EV 25mg a cada 4-6h (máx 6 doses) — controle hormonal do sangramento agudo. Após controle: ACO com alta dose de estrogênio VO. Mioma parido: torção e exérese pelo colo (procedimento ambulatorial/centro cirúrgico). Refratário: tamponamento uterino com balão, embolização de artérias uterinas, histerectomia." },
      { id: "prescriptions", title: "Prescrições", content: "1. Ácido tranexâmico 1g EV 8/8h; 2. SF 0,9% 1000mL EV rápido (se hipovolemia); 3. Estrogênio conjugado 25mg EV a cada 6h (até 4 doses); 4. Após controle: Noretisterona 10mg VO 8/8h por 10 dias ou ACO combinado; 5. Ferro EV: Sacarato de hidróxido férrico 200mg EV (se anemia); 6. Concentrado de hemácias se Hb <7 ou instável." },
      { id: "followup", title: "Acompanhamento", content: "Reposição de ferro (VO ou EV). Encaminhar ginecologia para tratamento definitivo: miomectomia, embolização, histerectomia conforme paridade e desejo reprodutivo. Análogo de GnRH pré-operatório se indicado." },
      { id: "complications", title: "Complicações", content: "Choque hipovolêmico, anemia grave, necessidade transfusional, histerectomia de emergência, infertilidade, degeneração sarcomatosa (raro <0,5%)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: sangramento controlado, Hb estável >8, ferro prescrito, ginecologia agendada. Internação: sangramento ativo, Hb <7, necessidade transfusional, mioma parido. UTI: choque hemorrágico." },
      { id: "references", title: "Referências Bibliográficas", content: "FEBRASGO — Leiomioma Uterino. ACOG Practice Bulletin — Management of Uterine Fibroids 2021. Stewart EA. NEJM 2015. Munro MG et al. FIGO classification (PALM-COEIN)." }
    ]
  },
  {
    id: "fp-abuso-sexual-protocolo",
    title: "Protocolo de Atendimento à Violência Sexual — Detalhado",
    categoryId: "gynecology",
    category: "Ginecologia de Emergência",
    tags: ["violência sexual", "abuso", "profilaxia", "IST", "contracepção emergência"],
    sections: [
      { id: "intro", title: "Introdução", content: "O atendimento à vítima de violência sexual é obrigação legal do SUS (Lei 12.845/2013). Deve ser prioritário, multiprofissional e seguir os protocolos do Ministério da Saúde. NÃO é necessário BO para atendimento. O profissional deve notificar compulsoriamente (SINAN)." },
      { id: "def", title: "Definição", content: "Qualquer ato sexual praticado sem o consentimento da vítima, mediante violência, ameaça ou outro meio que impeça a livre manifestação de vontade (Art. 213, Código Penal). Inclui estupro, atentado violento ao pudor, assédio sexual. Vulnerável: <14 anos, deficiente mental, incapaz de resistir." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Acolhimento imediato, sem julgamento. Perguntar sobre a violência de forma empática e sigilosa. Avaliar lesões, risco de vida, necessidade de profilaxias. Tempo desde a violência é crucial para definir condutas (ideal <72h)." },
      { id: "etiology", title: "Etiologia", content: "Violência de gênero, poder e controle. Pode ser perpetrada por desconhecido ou conhecido (parceiro, familiar — mais comum). Fatores de risco: vulnerabilidade social, uso de substâncias, história prévia de abuso." },
      { id: "clinical", title: "Apresentação Clínica", content: "Lesões genitais/perineais, equimoses, escoriações, mordeduras. Sinais psicológicos: medo, vergonha, dissociação, choro, agitação ou aparente indiferença. Criança: alteração comportamental, lesões incompatíveis com a história. Exame físico detalhado com registro fotográfico (autorizado)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico e baseado no relato da vítima. Exames: β-hCG (excluir gestação prévia), sorologias basais (HIV, HBV, HCV, sífilis — VDRL), hemograma, transaminases. Coleta de vestígios (se <72h e vítima autorizar): swab vaginal/anal/oral, pelos, roupas, unhas. Não é obrigatória para iniciar profilaxias." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Lesões acidentais (em crianças — avaliar mecanismo), relação consensual, autolesão. A avaliação deve sempre priorizar a proteção da vítima." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Acolhimento prioritário e sigiloso; 2. Exame físico completo com registro; 3. Coleta de vestígios (se <72h); 4. Profilaxias (ISTs, HIV, hepatite B, tétano, contracepção de emergência); 5. Notificação compulsória (SINAN); 6. Apoio psicossocial; 7. NÃO condicionar atendimento a BO." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Profilaxia HIV (PEP — até 72h): TDF 300mg + 3TC 300mg + DTG 50mg, 1cp/dia por 28 dias. Profilaxia ISTs: Penicilina Benzatina 2,4 milhões UI IM (sífilis) + Ceftriaxona 500mg IM (gonorreia) + Azitromicina 1g VO DU (clamídia) + Metronidazol 2g VO DU (tricomoníase). Hepatite B: vacina + IGHAHB (se não vacinada). Contracepção de emergência (até 5 dias): Levonorgestrel 1,5mg VO DU. Tétano: vacina se indicado." },
      { id: "prescriptions", title: "Prescrições", content: "1. PEP HIV (até 72h): TDF/3TC/DTG 1cp VO 1x/dia por 28 dias; 2. Penicilina Benzatina 2.400.000 UI IM DU; 3. Ceftriaxona 500mg IM DU; 4. Azitromicina 1g VO DU; 5. Metronidazol 2g VO DU; 6. Levonorgestrel 1,5mg VO DU (contracepção emergência); 7. Vacina Hepatite B + IGHAHB 0,06mL/kg IM (se suscetível); 8. Analgesia: Dipirona + Ibuprofeno." },
      { id: "followup", title: "Acompanhamento", content: "Retorno em 30, 90 e 180 dias para sorologias (HIV, HBV, HCV, sífilis). β-hCG em 2-4 semanas. Acompanhamento psicológico/psiquiátrico. Serviço social. Encaminhamento para serviço de referência. Interrupção legal da gravidez se gestação decorrente (CF, Código Penal Art. 128)." },
      { id: "complications", title: "Complicações", content: "Gravidez, ISTs (HIV, sífilis, hepatite), TEPT (transtorno de estresse pós-traumático), depressão, tentativa de suicídio, lesões físicas, revitimização." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: estável, profilaxias realizadas, rede de apoio identificada, retorno agendado. Internação: lesões graves, risco de vida, tentativa de suicídio, sem rede de proteção (criança/adolescente — acionar Conselho Tutelar). UTI: trauma grave." },
      { id: "references", title: "Referências Bibliográficas", content: "Ministério da Saúde — Prevenção e Tratamento dos Agravos Resultantes da Violência Sexual contra Mulheres e Adolescentes (2012, atualizado). Lei 12.845/2013. Protocolo Clínico PEP — MS 2021. FEBRASGO — Violência Sexual." }
    ]
  }
];
