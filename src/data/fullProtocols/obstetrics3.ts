import type { FullProtocol } from "./types";

export const obstetricsFullProtocols3: FullProtocol[] = [
  {
    id: "fp-pre-eclampsia", title: "Pré-eclâmpsia Grave", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["pré-eclâmpsia", "HELLP", "sulfato", "magnésio", "hidralazina"],
    sections: [
      { id: "intro", title: "Introdução", content: "Emergência hipertensiva da gestação (≥ 20 sem) com risco de eclâmpsia, AVC, HELLP e morte. PA ≥ 160/110 + critérios de gravidade. Tratamento definitivo: resolução da gestação." },
      { id: "def", title: "Definição", content: "PA ≥ 140/90 + proteinúria ou disfunção orgânica após 20 sem. Gravidade: PA ≥ 160/110, cefaleia, distúrbio visual, dor epigástrica, TGO > 2x, PLQ < 100.000, Cr > 1,1, edema pulmonar." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Fatores: primigesta, HAS, DM, LES, SAF, IMC > 35, idade > 40, gestação múltipla, PE prévia. Alerta: cefaleia + escotomas + dor epigástrica = iminência de eclâmpsia." },
      { id: "etiology", title: "Etiologia", content: "Invasão trofoblástica inadequada → isquemia placentária → disfunção endotelial → vasoespasmo → lesão orgânica." },
      { id: "clinical", title: "Apresentação Clínica", content: "HAS grave, cefaleia frontoccipital, escotomas, dor epigástrica/HCD, hiperreflexia, edema, oligúria. HELLP: hemólise + enzimas hepáticas ↑ + plaquetopenia." },
      { id: "diagnosis", title: "Diagnóstico", content: "PA seriada, proteinúria, hemograma (PLQ, esquizócitos), TGO/TGP/DHL/bilirrubinas, creatinina, ácido úrico, coagulograma, USG + Doppler, CTG." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Emergência hipertensiva, esteatose hepática da gestação, PTT/SHU, LES, feocromocitoma." },
      { id: "conduct", title: "Conduta Inicial", content: "1. MgSO4 Zuspan: 4g IV → 1-2g/h (monitorizar reflexo, FR, DU; antídoto: gluconato de Ca)\n2. Hidralazina 5 mg IV cada 20 min ou Nifedipino 10-20 mg VO (meta PAS 140-150, PAD 90-100; NÃO IECA/BRA)\n3. ≥ 34 sem → parto. < 34 sem → betametasona se estabilizar → parto. HELLP/eclâmpsia → parto" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "MgSO4 4g IV → 1-2g/h. Hidralazina 5 mg IV. Nifedipino 10 mg VO. Betametasona 12 mg IM × 2 (< 34 sem). Pós-parto: Captopril 25 mg 8/8h." },
      { id: "prescriptions", title: "Prescrições", content: "1. MgSO4 4g IV → 1-2g/h BIC\n2. Hidralazina 5 mg IV SN\n3. Reflexo + FR + DU 1/1h\n4. Gluconato de Ca à beira do leito\n5. Hemograma, TGO, DHL, Cr seriados\n6. SVD\n7. Betametasona SN\n8. CTG\n9. Avaliação obstétrica" },
      { id: "followup", title: "Acompanhamento", content: "MgSO4 por 24h pós-parto. PA 1/1h. Anti-hipertensivo conforme PA. Vigiar HPP e coagulopatia." },
      { id: "complications", title: "Complicações", content: "Eclâmpsia, AVC hemorrágico, HELLP, CIVD, IRA, DPP, edema pulmonar, ruptura hepática, óbito materno/fetal." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: HELLP, eclâmpsia, edema pulmonar, IRA. Enfermaria: PE grave controlada. Alta: PA controlada, MgSO4 completado, labs estáveis." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ACOG Practice Bulletin 222, 2020.\n2. Magpie Trial. Lancet 2002.\n3. FEBRASGO 2022.\n4. NICE Guidelines 2019." }
    ]
  },
  {
    id: "fp-dpp", title: "Descolamento Prematuro de Placenta", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["DPP", "descolamento", "placenta", "sangramento", "cesariana"],
    sections: [
      { id: "intro", title: "Introdução", content: "Separação da placenta normoinserida antes do parto, após 20 sem. Emergência com mortalidade fetal até 60%. Diagnóstico CLÍNICO. Conduta: parto imediato se feto vivo e viável." },
      { id: "def", title: "Definição", content: "Sher: Grau I (assintomático), Grau II (sangramento, hipertonia, feto vivo), Grau III (sangramento grave, óbito fetal; IIIA sem CIVD, IIIB com CIVD)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Fatores: HAS/PE (principal), trauma, cocaína, tabagismo, DPP prévio, polidramnia." },
      { id: "etiology", title: "Etiologia", content: "Ruptura de artérias deciduais → hematoma retroplacentário → separação → comprometimento fetal + coagulopatia de consumo." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sangramento vaginal escuro (80%), dor súbita intensa, hipertonia uterina (útero lenhoso), sofrimento fetal, choque desproporcional ao sangramento visível." },
      { id: "diagnosis", title: "Diagnóstico", content: "CLÍNICO — não esperar USG! CTG: desacelerações. USG: sensibilidade baixa (25-50%). Hemograma, coagulograma, fibrinogênio < 200 = CIVD." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Placenta prévia (indolor, vermelho vivo), rotura uterina, trabalho de parto prematuro." },
      { id: "conduct", title: "Conduta Inicial", content: "Feto vivo viável → cesariana EMERGÊNCIA (< 20 min). Feto morto → parto vaginal (amniotomia) ou cesariana. Suporte: 2 acessos, cristaloide + hemoderivados, fibrinogênio > 200, PLQ > 50.000." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Cristaloide + CH + PFC + crioprecipitado. TXA 1g IV. Ocitocina 20 UI pós-parto. Uterotônicos se atonia." },
      { id: "prescriptions", title: "Prescrições", content: "1. 2 acessos calibrosos\n2. SF/RL IV\n3. Tipagem + 4 CH + PFC\n4. TXA 1g IV\n5. Hemograma + fibrinogênio seriados\n6. CTG contínua\n7. Cesariana SN\n8. SVD\n9. Ocitocina pós-parto" },
      { id: "followup", title: "Acompanhamento", content: "UTI SN. Hemograma + coagulograma seriados. Vigiar HPP e atonia. Suporte psicológico. Investigar causas." },
      { id: "complications", title: "Complicações", content: "CIVD, choque hemorrágico, IRA, útero de Couvelaire, histerectomia, óbito fetal/materno." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: CIVD, transfusão maciça, instabilidade. Alta: hemoglobina estável, sem sangramento." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Oyelese Y. Obstet Gynecol 2006.\n2. FEBRASGO 2022.\n3. ACOG 2020." }
    ]
  },
  {
    id: "fp-sepse-puerperal", title: "Sepse Puerperal", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["puerperal", "endometrite", "infecção", "clindamicina", "gentamicina"],
    sections: [
      { id: "intro", title: "Introdução", content: "Infecção do trato genital no puerpério (até 42 dias). Terceira causa de morte materna no Brasil. Endometrite é a causa mais comum. ATB amplo espectro imediato." },
      { id: "def", title: "Definição", content: "Endometrite (mais comum), infecção de ferida, abscesso pélvico, tromboflebite pélvica séptica, fasceíte necrotizante." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Fatores: cesariana (principal), TP prolongado, rotura prolongada > 18h, múltiplos toques, retenção de restos, corioamnionite." },
      { id: "etiology", title: "Etiologia", content: "Polimicrobiana: E. coli, Bacteroides, Streptococcus A/B, Enterococcus, anaeróbios." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre ≥ 38°C, dor uterina, lóquios fétidos, útero amolecido subinvoluído, taquicardia. Fasceíte: dor desproporcional, crepitação, choque rápido." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemograma, PCR, procalcitonina, hemoculturas, cultura de lóquios, USG pélvico (restos, abscesso), TC SN, lactato." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "ITU, mastite, TVP/TEP, pneumonia, ingurgitamento mamário." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Clindamicina 900 mg IV 8/8h + Gentamicina 5 mg/kg/dia IV\n2. Ressuscitação volêmica\n3. Vasopressores SN\n4. Curetagem se restos\n5. Drenagem se abscesso\n6. Histerectomia se fasceíte/refratária" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "1ª linha: Clindamicina + Gentamicina. Grave: Piperacilina-tazobactam ou Meropenem. Curetagem/drenagem/histerectomia SN." },
      { id: "prescriptions", title: "Prescrições", content: "1. Clindamicina 900 mg IV 8/8h\n2. Gentamicina 5 mg/kg/dia\n3. SF 30 mL/kg (sepse)\n4. Hemoculturas\n5. USG pélvico\n6. Noradrenalina SN\n7. Enoxaparina 40 mg SC\n8. SVD" },
      { id: "followup", title: "Acompanhamento", content: "ATB IV até 48h afebril. Hemograma + PCR seriados. USG controle. Tromboprofilaxia. Anticoncepção." },
      { id: "complications", title: "Complicações", content: "Choque séptico, abscesso pélvico, TVP pélvica, fasceíte necrotizante, histerectomia, morte materna." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: sepse/choque séptico, fasceíte. Enfermaria: endometrite não complicada. Alta: 48h afebril, melhora clínica." },
      { id: "references", title: "Referências Bibliográficas", content: "1. WHO 2015.\n2. ACOG 2020.\n3. FEBRASGO 2022." }
    ]
  },
  {
    id: "fp-pcr-gestante", title: "PCR na Gestante", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["PCR", "gestante", "perimortem", "cesariana", "BEAUCHOPS"],
    sections: [
      { id: "intro", title: "Introdução", content: "PCR rara na gestante, mas com particularidades. Compressão aortocaval pelo útero reduz DC em 30-40%. Cesariana perimortem em 4-5 min se sem RCE." },
      { id: "def", title: "Definição", content: "PCR em gestante ≥ 20 sem. Causas (BEAUCHOPS): Bleeding, Embolism, Anesthesia, Uterine atony, Cardiac, Hypertension, Other, Placental, Sepsis." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Gestante inconsciente, sem pulso, sem respiração. Atenção às causas reversíveis específicas." },
      { id: "etiology", title: "Etiologia", content: "Hemorragia (principal), TEP/embolia amniótica, eclâmpsia, cardiomiopatia periparto, sepse, anafilaxia." },
      { id: "clinical", title: "Apresentação Clínica", content: "Ausência de pulso + apneia. Modificações: útero comprime aorta/VCI (> 20 sem), via aérea mais difícil, risco de aspiração." },
      { id: "diagnosis", title: "Diagnóstico", content: "Pulso ausente. Ritmo: FV/TV → desfibrilação; AESP/assistolia → tratar causa. USG point-of-care." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hemorragia, TEP, embolia amniótica, eclâmpsia, hipóxia, anafilaxia." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Deslocamento uterino para ESQUERDA (contínuo)\n2. Compressões centro do esterno\n3. IOT precoce (tubo 6.0-6.5)\n4. Desfibrilação: mesmas doses ACLS\n5. REMOVER monitorização fetal\n6. CESARIANA PERIMORTEM: indicar em 4 min, realizar em 5 min" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "ACLS + deslocamento uterino. Adrenalina 1 mg IV cada 3-5 min. Amiodarona 300 mg. Desfibrilação 200J. Cesariana perimortem. TXA (hemorragia). MgSO4 (eclâmpsia)." },
      { id: "prescriptions", title: "Prescrições", content: "1. Deslocamento uterino\n2. ACLS padrão\n3. Adrenalina 1 mg IV cada 3-5 min\n4. IOT tubo 6.0-6.5\n5. Se sem RCE 4 min → cesariana\n6. Tratar causas\n7. UTI pós-RCE" },
      { id: "followup", title: "Acompanhamento", content: "UTI pós-PCR. Hipotermia terapêutica pode ser considerada. Monitorização fetal se feto in utero. Suporte neonatal." },
      { id: "complications", title: "Complicações", content: "Encefalopatia anóxica, morte materna/fetal, complicações da cesariana perimortem." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos pós-RCE. Cuidados neonatais se parto perimortem." },
      { id: "references", title: "Referências Bibliográficas", content: "1. AHA Guidelines 2020.\n2. Jeejeebhoy FM. Circulation 2015.\n3. FEBRASGO 2022." }
    ]
  },
  {
    id: "fp-rotura-uterina", title: "Rotura Uterina", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["rotura", "uterina", "cesariana prévia", "cicatriz", "laparotomia"],
    sections: [
      { id: "intro", title: "Introdução", content: "Ruptura da parede uterina com comunicação peritoneal. Emergência catastrófica. Fator de risco principal: cesariana prévia. Conduta: laparotomia imediata." },
      { id: "def", title: "Definição", content: "Rotura completa: todas as camadas + peritônio. Deiscência: separação sem ruptura do peritônio. Cesariana segmentar: 0,2-1,5%. Clássica: 4-9%." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Cesariana prévia, miomectomia, ocitocina/misoprostol, grande multípara, parto obstruído, macrossomia, intervalo < 18 meses." },
      { id: "etiology", title: "Etiologia", content: "Deiscência de cicatriz, hiperestimulação, trauma, parto obstruído, Kristeller (proscrita)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor súbita intensa, bradicardia fetal sustentada, sangramento vaginal, parada de progressão do TP, partes fetais palpáveis no abdome, choque. Sinal de Bandl: iminência." },
      { id: "diagnosis", title: "Diagnóstico", content: "CLÍNICO — não esperar exames! CTG: bradicardia fetal. USG: líquido livre, feto extra-uterino. Hemograma, coagulograma." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "DPP, placenta prévia, vasa prévia, embolia amniótica." },
      { id: "conduct", title: "Conduta Inicial", content: "Laparotomia IMEDIATA: extração fetal + histerorrafia ou histerectomia. Ressuscitação: CH + PFC + crioprecipitado. TXA 1g IV." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Histerorrafia (se possível) ou histerectomia. Transfusão maciça. TXA. Cefazolina 2g IV. Ocitocina pós-parto." },
      { id: "prescriptions", title: "Prescrições", content: "1. LAPAROTOMIA IMEDIATA\n2. 2 acessos\n3. SF/RL rápido\n4. Tipagem + 6 CH + PFC\n5. TXA 1g IV\n6. Cefazolina 2g IV\n7. Monitorização\n8. SVD\n9. Neonatologia" },
      { id: "followup", title: "Acompanhamento", content: "UTI pós-op. Hemograma + coagulograma seriados. Se histerorrafia: cesarianas futuras obrigatórias. Suporte psicológico." },
      { id: "complications", title: "Complicações", content: "Choque hemorrágico, histerectomia, óbito fetal/materno, CIVD, lesão vesical." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos. Alta: estabilidade clínica e hematológica." },
      { id: "references", title: "Referências Bibliográficas", content: "1. ACOG 2019.\n2. Landon MB. Obstet Gynecol 2004.\n3. FEBRASGO 2022." }
    ]
  },
  {
    id: "fp-embolia-amniotica", title: "Embolia Amniótica", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["embolia", "amniótica", "colapso", "CIVD", "ECMO"],
    sections: [
      { id: "intro", title: "Introdução", content: "Rara (1:40.000), mortalidade 60-80%. Material amniótico na circulação → resposta anafilactoide → colapso cardiovascular + IR + CIVD. Não existe tratamento específico." },
      { id: "def", title: "Definição", content: "Fase 1 (min): vasoespasmo pulmonar → hipóxia + falência VD → choque. Fase 2 (horas): CIVD + hemorragia + falência VE. É resposta imunológica/anafilactoide, não embolia verdadeira." },
      { id: "screening", title: "Rastreamento e Identificação", content: "TP precipitado, indução, cesariana, polidramnia, DPP. Pode ocorrer sem fatores de risco." },
      { id: "etiology", title: "Etiologia", content: "Componentes do líquido amniótico na circulação → resposta inflamatória massiva → colapso CV + CIVD." },
      { id: "clinical", title: "Apresentação Clínica", content: "Tríade: colapso CV súbito + hipóxia/cianose + CIVD. Convulsões (10-20%), bradicardia fetal, PCR." },
      { id: "diagnosis", title: "Diagnóstico", content: "EXCLUSÃO — clínico! Coagulograma + fibrinogênio, gasometria, troponina, BNP, eco (VD → VE). Sem exame confirmatório ante-mortem." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "TEP maciço, DPP, rotura uterina, anafilaxia, sepse fulminante, cardiomiopatia periparto, IAM." },
      { id: "conduct", title: "Conduta Inicial", content: "Suporte agressivo: IOT + VM FiO2 100%, noradrenalina, tratar CIVD (CH+PFC+PLQ+crioprecipitado), TXA, cesariana imediata se feto viável, ocitocina pós-parto, ECMO em centro terciário, cesariana perimortem se PCR." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "VM FiO2 100%. Noradrenalina ± dobutamina. Transfusão maciça. TXA. Ocitocina. ECMO SN." },
      { id: "prescriptions", title: "Prescrições", content: "1. IOT + VM FiO2 100%\n2. Noradrenalina\n3. SF/RL rápido\n4. TXA 1g IV\n5. Transfusão maciça\n6. Ocitocina 20 UI\n7. Cesariana SN\n8. UTI\n9. Eco\n10. ECMO SN" },
      { id: "followup", title: "Acompanhamento", content: "UTI com suporte multiorgânico. Coagulograma seriado. Ecocardiograma. Monitorização hemodinâmica invasiva. Suporte psicológico." },
      { id: "complications", title: "Complicações", content: "Morte materna (60-80%), CIVD, falência multiorgânica, encefalopatia anóxica, histerectomia." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: todos. Alta: estabilidade hemodinâmica e hematológica (raro, alta mortalidade)." },
      { id: "references", title: "Referências Bibliográficas", content: "1. Clark SL. Obstet Gynecol 2014.\n2. Sultan P. Curr Opin Anaesthesiol 2016.\n3. SMFM 2016.\n4. FEBRASGO 2022." }
    ]
  }
];
