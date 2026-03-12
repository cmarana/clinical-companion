import type { EmergencyProtocol } from "./types";

export const otherEmergencyProtocols: EmergencyProtocol[] = [
  {
    id: "anafilaxia-emergencia",
    title: "Anafilaxia",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "Anafilaxia é reação alérgica sistêmica grave, potencialmente fatal. ADRENALINA IM é o único tratamento de primeira linha. O atraso na administração é o principal fator de óbito." },
      { id: "def", title: "Definição", content: "Início agudo com envolvimento cutâneo/mucoso + comprometimento respiratório ou cardiovascular. Ou exposição a alérgeno provável + ≥ 2 sistemas (pele, respiratório, cardiovascular, GI)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Exposição a alérgeno (medicamento, alimento, inseto, látex) + sintomas sistêmicos rápidos. Gravidade: estridor, hipotensão, SpO2 < 92%." },
      { id: "etiology", title: "Etiologia", content: "IgE-mediada: antibióticos, AINE, alimentos (frutos do mar, amendoim), insetos, látex. Não IgE: contraste iodado, opioides." },
      { id: "clinical", title: "Apresentação Clínica", content: "Pele (90%): urticária, angioedema, flushing. Respiratório (70%): dispneia, sibilância, estridor. Cardiovascular (45%): hipotensão, taquicardia, síncope. GI: náusea, dor abdominal. Reação bifásica (20%): recorrência em 4-12h." },
      { id: "diagnosis", title: "Diagnóstico", content: "Diagnóstico CLÍNICO — NÃO atrasar tratamento. Triptase sérica (1-2h para confirmar)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Angioedema hereditário, asma, síncope vasovagal, crise de pânico, urticária isolada, choque séptico." },
      { id: "conduct", title: "Conduta", content: "1. ADRENALINA IM (coxa anterolateral): 0,3-0,5 mg (adulto), 0,01 mg/kg (criança, máx 0,3 mg). Repetir 5-15 min SN.\n2. Decúbito dorsal + MMII elevados (se hipotensão)\n3. O2 alto fluxo\n4. SF 0,9% 1-2 L rápido\n5. Salbutamol NEB se broncoespasmo\n6. Anti-histamínicos + corticoide (adjuvantes, NÃO substituem adrenalina)\n7. Se refratário: Adrenalina IV BIC 0,1-1 mcg/kg/min\n8. Observar 6-12h (reação bifásica)" },
      { id: "followup", title: "Acompanhamento", content: "Auto-injetor de adrenalina na alta. Encaminhar alergista. Plano de ação escrito. Pulseira de alerta." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Adrenalina IM (1ª linha). Adrenalina IV BIC (refratário). Volume. Salbutamol NEB. Difenidramina 50 mg IV. Metilprednisolona 125 mg IV. Glucagon 1-5 mg IV (se em uso de BB)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Adrenalina 0,5 mg IM coxa (repetir 5-15 min SN)\n2. O2 alto fluxo\n3. SF 0,9% 1000 mL IV rápido\n4. Difenidramina 50 mg IV\n5. Metilprednisolona 125 mg IV\n6. Salbutamol 5 mg NEB SN\n7. Observar 6-12h" },
      { id: "references", title: "Referências Bibliográficas", content: "1. WAO Anaphylaxis Guidelines 2020.\n2. Simons FER et al. JACI 2011.\n3. ASBAI 2023." }
    ]
  },
  {
    id: "reacao-transfusional",
    title: "Reação Transfusional",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "Reações transfusionais podem ser fatais (hemolítica aguda, TRALI, anafilaxia). Ao suspeitar: PARAR TRANSFUSÃO IMEDIATAMENTE e manter acesso venoso com SF." },
      { id: "def", title: "Definição", content: "Hemolítica aguda: incompatibilidade ABO (mais grave, mortalidade 10-40%). TRALI: edema pulmonar não cardiogênico em < 6h. TACO: sobrecarga volêmica. Anafilática: IgA-deficiente. Febril não hemolítica: mais comum, benigna." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Monitorizar durante transfusão: febre, calafrios, urticária, dispneia, hipotensão, dor lombar, hemoglobinúria. Sinais de alarme: hipotensão, dispneia, dor lombar/torácica, hemoglobinúria." },
      { id: "etiology", title: "Etiologia", content: "Hemolítica: erro de tipagem/identificação (causa mais comum de morte transfusional). TRALI: anticorpos anti-HLA do doador. TACO: excesso de volume. Alérgica: proteínas plasmáticas. Séptica: contaminação bacteriana." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hemolítica aguda: febre, calafrios, dor lombar, hemoglobinúria (urina escura), hipotensão, CIVD.\nTRALI: dispneia, hipoxemia, infiltrado bilateral (sem cardiomegalia), hipotensão.\nTACO: dispneia, hipertensão, turgência jugular, EAP.\nAnafilática: urticária, broncoespasmo, hipotensão.\nFebril: febre, calafrios (sem hemólise)." },
      { id: "diagnosis", title: "Diagnóstico", content: "PARAR transfusão. Coombs direto, haptoglobina, LDH, bilirrubinas, hemoglobina livre, urina (hemoglobinúria). Repetir tipagem. RX tórax (TRALI/TACO). BNP (diferenciar TRALI vs TACO). Culturas (se séptica)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Diferenciação entre tipos é crucial: hemolítica vs TRALI vs TACO vs alérgica vs séptica vs febril não hemolítica." },
      { id: "conduct", title: "Conduta", content: "1. PARAR TRANSFUSÃO IMEDIATAMENTE\n2. Manter acesso com SF 0,9%\n3. Notificar banco de sangue\n4. Enviar bolsa + amostra do paciente\n\nHemolítica: volume agressivo, forçar diurese, monitorizar CIVD, UTI.\nTRALI: suporte ventilatório, NÃO dar diuréticos, recuperação em 48-72h.\nTACO: Furosemida, VNI, sentar paciente.\nAnafilática: Adrenalina IM (protocolo anafilaxia).\nFebril: Paracetamol, observação." },
      { id: "followup", title: "Acompanhamento", content: "Notificação ao banco de sangue. Investigação completa. Prevenir futuras reações: hemácias lavadas (alérgica), leucodepletadas (febril), volume controlado (TACO)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Hemolítica: SF + Furosemida (manter diurese). TRALI: VM protetiva. TACO: Furosemida + VNI. Anafilática: Adrenalina IM. Séptica: ATB amplo espectro + vasopressores." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. PARAR transfusão\n2. SF 0,9% 500 mL IV\n3. Coombs direto + hemoglobina livre\n4. Notificar banco de sangue\n5. Tratar conforme tipo de reação\n6. UTI se hemolítica ou TRALI" },
      { id: "references", title: "Referências Bibliográficas", content: "1. ANVISA — Hemovigilância 2023.\n2. Delaney M et al. Transfusion Reactions. JAMA 2016.\n3. AABB Technical Manual 2020." }
    ]
  },
  {
    id: "hemoptise-macica",
    title: "Hemoptise Maciça",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "Hemoptise maciça (> 300-600 mL/24h ou > 100 mL/h) é emergência com mortalidade de 50-80% se não tratada. A asfixia (e não o choque) é a principal causa de morte. Proteção de via aérea e lateralização para o lado do sangramento são prioridades." },
      { id: "def", title: "Definição", content: "Hemoptise maciça: > 300-600 mL/24h (varia conforme referência) ou taxa > 100 mL/h ou instabilidade hemodinâmica. Hemoptise ameaçadora à vida: qualquer volume que cause instabilidade respiratória/hemodinâmica." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Tosse com sangue vermelho vivo, dispneia, hipoxemia. Diferenciar de hematemese (sangue escuro/borra de café, pH ácido) e epistaxe deglutida." },
      { id: "etiology", title: "Etiologia", content: "Infecciosa: TB (mais comum no Brasil), pneumonia necrosante, abscesso, aspergilose. Neoplásica: carcinoma broncogênico. Vascular: TEP, malformação AV, vasculite (Goodpasture, granulomatose). Outras: bronquiectasias, trauma, coagulopatia, iatrogênica." },
      { id: "clinical", title: "Apresentação Clínica", content: "Tosse com sangue vermelho vivo, espumoso (origem brônquica). Dispneia, hipoxemia, instabilidade hemodinâmica. Estertores no lado do sangramento." },
      { id: "diagnosis", title: "Diagnóstico", content: "RX tórax (localizar lado). TC tórax com contraste (angiografia — localiza fonte). Broncoscopia (diagnóstica e terapêutica). Hemograma, coagulograma, tipagem sanguínea. Pesquisar TB (BAAR)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Hematemese, epistaxe, hemorragia alveolar difusa (bilateral vs focal)." },
      { id: "conduct", title: "Conduta", content: "1. Posicionar: DECÚBITO LATERAL com lado do sangramento PARA BAIXO (proteger pulmão são)\n2. O2 alto fluxo\n3. IOT precoce se instabilidade (tubo ≥ 8,0 para permitir broncoscopia)\n4. Intubação seletiva do pulmão são se necessário\n5. Broncoscopia: identificar fonte, tamponamento com balão, soro gelado, adrenalina tópica\n6. Arteriografia com embolização de artéria brônquica (tratamento definitivo em 85-90%)\n7. Ácido tranexâmico 1g IV\n8. Corrigir coagulopatia (PFC, plaquetas, vitamina K)\n9. Cirurgia: se falha de embolização ou sangramento incontrolável" },
      { id: "followup", title: "Acompanhamento", content: "Investigar causa de base (TB, neoplasia, bronquiectasia). Pós-embolização: monitorizar recorrência (10-20%). Tratamento definitivo da causa." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "IOT precoce. Lateralização. Broncoscopia + tamponamento. Embolização de artéria brônquica. Ácido tranexâmico 1g IV. PFC/plaquetas se coagulopatia. Cirurgia (último recurso)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Decúbito lateral (lado sangrante para baixo)\n2. O2 alto fluxo\n3. Ácido tranexâmico 1g IV\n4. Tipagem sanguínea + reserva de CH\n5. IOT se instabilidade\n6. Broncoscopia urgente\n7. Arteriografia/embolização\n8. Corrigir coagulopatia" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Jean-Baptiste E. Massive Hemoptysis. Am J Respir Crit Care Med 2005.\n2. Sakr L et al. Etiology of Hemoptysis. Chest 2010.\n3. SBPT 2022." }
    ]
  },
  {
    id: "hda-emergencia",
    title: "Hemorragia Digestiva Alta",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "HDA é sangramento proximal ao ângulo de Treitz. Mortalidade de 5-10%. Úlcera péptica é a causa mais comum (40-50%). Varizes esofágicas têm maior mortalidade (15-25%). Ressuscitação + EDA em < 24h (ou < 12h se instável)." },
      { id: "def", title: "Definição", content: "Sangramento GI proximal ao ligamento de Treitz. Varicosa (varizes esofágicas/gástricas — cirrose) vs Não varicosa (úlcera, Mallory-Weiss, neoplasia). Escores: Glasgow-Blatchford (necessidade de intervenção), Rockall (mortalidade)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Hematêmese (vômito com sangue), melena (fezes escuras), instabilidade hemodinâmica. Glasgow-Blatchford = 0: pode ter alta." },
      { id: "etiology", title: "Etiologia", content: "Não varicosa: úlcera péptica (40-50%), erosões, Mallory-Weiss, Dieulafoy, neoplasia, esofagite. Varicosa: cirrose hepática, hipertensão portal." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hematêmese (sangue vivo ou borra de café), melena, enterorragia (se volumosa), taquicardia, hipotensão, palidez, síncope." },
      { id: "diagnosis", title: "Diagnóstico", content: "EDA (padrão-ouro — em < 24h, < 12h se instável). Hemograma seriado (Hb pode estar normal nas primeiras horas!). Coagulograma. Função hepática. Tipagem sanguínea + prova cruzada." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "HDB (hematoquezia por HDA volumosa). Epistaxe deglutida. Hemoptise deglutida." },
      { id: "conduct", title: "Conduta", content: "RESSUSCITAÇÃO:\n1. 2 acessos calibrosos\n2. SF 0,9% / Ringer\n3. Transfusão: meta Hb 7-8 g/dL (restritiva — melhora sobrevida em varicosa)\n4. IBP IV: Omeprazol 80 mg IV bolus → 8 mg/h BIC (não varicosa)\n\nVARICOSA (suspeita de cirrose):\n• Terlipressina 2 mg IV bolus → 1 mg 4/4h (ou Octreotide 50 mcg bolus → 50 mcg/h)\n• Ceftriaxona 1g IV 1x/dia por 7 dias (ATB profilático — obrigatório!)\n• EDA em < 12h: ligadura elástica\n• Se sangramento incontrolável: balão de Sengstaken-Blakemore (ponte para TIPS)\n\nNÃO VARICOSA:\n• IBP dose alta\n• EDA: hemostasia (injeção, clipagem, cauterização)\n• Forrest Ia/Ib: hemostasia endoscópica obrigatória" },
      { id: "followup", title: "Acompanhamento", content: "IBP VO por 4-8 semanas (úlcera). Erradicar H. pylori. Suspender AINE/AAS se possível. Beta-bloqueador (profilaxia secundária varicosa): Propranolol ou Carvedilol. EDA controle em 6-8 semanas (úlcera gástrica — excluir neoplasia)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Omeprazol 80 mg IV + BIC 8 mg/h (não varicosa). Terlipressina 2 mg → 1 mg 4/4h (varicosa). Ceftriaxona 1g/dia (varicosa). Ácido tranexâmico: evidência limitada. Sengstaken-Blakemore: ponte para TIPS." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "NÃO VARICOSA:\n1. Omeprazol 80 mg IV bolus → 8 mg/h BIC\n2. SF/Ringer IV\n3. Transfusão se Hb < 7\n4. EDA em < 24h\n\nVARICOSA:\n1. Terlipressina 2 mg IV → 1 mg 4/4h\n2. Ceftriaxona 1g IV 1x/dia\n3. EDA em < 12h\n4. Transfusão restritiva (Hb 7)" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Laine L et al. ACG Guidelines UGIB. Am J Gastroenterol 2021.\n2. De Franchis R et al. Baveno VII. J Hepatol 2022.\n3. FBG/SOBED 2023." }
    ]
  },
  {
    id: "hdb-emergencia",
    title: "Hemorragia Digestiva Baixa",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "HDB é sangramento distal ao ângulo de Treitz. Em 80-85% dos casos cessa espontaneamente. Doença diverticular é a causa mais comum (30-40%). Colonoscopia é o exame diagnóstico de escolha." },
      { id: "def", title: "Definição", content: "Sangramento GI distal ao ligamento de Treitz. Aguda (< 3 dias de duração) vs Crônica. Importante: 10-15% das hematoquezia são por HDA volumosa (excluir com SNG ou EDA)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Hematoquezia (sangue vivo), enterorragia. Instabilidade hemodinâmica em minoria (< 15%). Se instável com hematoquezia: considerar HDA volumosa!" },
      { id: "etiology", title: "Etiologia", content: "Divertículos (30-40%), angiodisplasia (20-30%), neoplasia colorretal, colite isquêmica, DII, hemorroidas, pós-polipectomia, úlcera retal, divertículo de Meckel (crianças)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hematoquezia (sangue vivo ou marrom). Diverticular: sangramento indolor, autolimitado. Angiodisplasia: indolor, intermitente. Colite isquêmica: dor abdominal + diarreia sanguinolenta. Neoplasia: sangramento crônico intermitente." },
      { id: "diagnosis", title: "Diagnóstico", content: "Colonoscopia (após preparo, em < 24h se significativa). Se instável: angioTC. Se colonoscopia inconclusiva: angiografia, cintilografia com hemácias marcadas. Excluir HDA: EDA se dúvida." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "HDA volumosa (principal diagnóstico a excluir!), sangramento de intestino delgado (cápsula endoscópica)." },
      { id: "conduct", title: "Conduta", content: "1. Ressuscitação (como HDA): acessos, volume, transfusão restritiva\n2. Colonoscopia após preparo (< 24h)\n3. Se instável: angioTC → angiografia com embolização\n4. Se sangramento ativo na colonoscopia: hemostasia endoscópica (clipagem, cauterização)\n5. Se refratário: cirurgia (colectomia segmentar se localizado, subtotal se não localizado)\n6. Maioria cessa espontaneamente (80-85%)" },
      { id: "followup", title: "Acompanhamento", content: "Investigar causa. Colonoscopia de seguimento. Tratamento de divertículos recorrentes (embolização, cirurgia). Rastreio de neoplasia colorretal." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Ressuscitação + colonoscopia. Embolização angiográfica (sangramento ativo). Cirurgia (refratário). Suspender anticoagulantes/antiplaquetários se possível." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Acessos calibrosos + tipagem\n2. SF/Ringer IV\n3. Transfusão se Hb < 7\n4. Preparo para colonoscopia\n5. Se instável: angioTC\n6. Suspender anticoagulantes\n7. Monitorização" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Strate LL et al. ACG Guidelines LGIB. Am J Gastroenterol 2016.\n2. Oakland K et al. BSG Guidelines LGIB 2019.\n3. FBG/SOBED 2023." }
    ]
  },
  {
    id: "sangramento-grave-emergencia",
    title: "Sangramento Grave",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "Sangramento grave com instabilidade hemodinâmica requer ativação do protocolo de transfusão maciça (PTM). A abordagem moderna prioriza hemoderivados em proporção balanceada (1:1:1 CH:PFC:Plaquetas), ácido tranexâmico precoce e cirurgia de controle de dano." },
      { id: "def", title: "Definição", content: "Hemorragia classe III-IV (ATLS): > 30% da volemia. Transfusão maciça: ≥ 10 CH em 24h ou ≥ 4 CH em 1h. ABC Score ≥ 2: ativar PTM." },
      { id: "screening", title: "Rastreamento e Identificação", content: "FC > 120, PAS < 90, FAST positivo, trauma penetrante, sangramento externo volumoso. Índice de choque (FC/PAS) > 1,0." },
      { id: "etiology", title: "Etiologia", content: "Trauma (principal), hemorragia obstétrica, HDA/HDB, ruptura de aneurisma, pós-operatório, coagulopatia (CIVD, anticoagulantes)." },
      { id: "clinical", title: "Apresentação Clínica", content: "Taquicardia, hipotensão, palidez, extremidades frias, confusão → coma, oligúria, acidose metabólica, hipotermia, coagulopatia (tríade letal do trauma)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico (instabilidade). Hemograma seriado, gasometria + lactato, coagulograma, fibrinogênio, TEG/ROTEM (se disponível), tipagem + prova cruzada, FAST/eFAST." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Choque não hemorrágico: séptico, cardiogênico, obstrutivo, neurogênico." },
      { id: "conduct", title: "Conduta", content: "1. Ativar PTM (protocolo de transfusão maciça)\n2. CH:PFC:Plaquetas 1:1:1\n3. Ácido tranexâmico 1g IV em 10 min (nas primeiras 3h!) + 1g em 8h\n4. Fibrinogênio > 1,5 g/L (crioprecipitado se < 1,5)\n5. Cálcio IV (hipocalcemia por citrato)\n6. Aquecer fluidos e paciente (prevenir hipotermia)\n7. Hipotensão permissiva: PAS 80-90 mmHg (até controle cirúrgico)\n8. Cirurgia de controle de dano / embolização\n9. Reverter anticoagulantes: Vitamina K, PFC, CCP, Idarucizumabe (dabigatrana), Andexanet alfa (rivaroxabana/apixabana)" },
      { id: "followup", title: "Acompanhamento", content: "UTI. Corrigir tríade letal (hipotermia, acidose, coagulopatia). TEG/ROTEM para guiar hemoderivados. Cirurgia definitiva quando estável." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "CH O neg (emergência) ou tipado. PFC 10-15 mL/kg. Plaquetas 1U/10kg. Crioprecipitado 10U. Ácido tranexâmico 1g+1g. Gluconato de cálcio 1g IV. CCP 25-50 UI/kg (anticoagulante)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Ativar PTM\n2. CH O neg 4U + PFC 4U + Plaquetas 1 aférese\n3. Ácido tranexâmico 1g IV em 10 min\n4. Gluconato de cálcio 1g IV\n5. Aquecer fluidos\n6. PAS alvo 80-90 (permissiva)\n7. Cirurgia/embolização\n8. Crioprecipitado se fibrinogênio < 1,5" },
      { id: "references", title: "Referências Bibliográficas", content: "1. CRASH-2 Trial. Lancet 2010.\n2. Holcomb JB et al. PROPPR Trial. JAMA 2015.\n3. Spahn DR et al. European Trauma Guidelines 2023." }
    ]
  },
  {
    id: "dor-abdominal-aguda",
    title: "Dor Abdominal Aguda",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "A dor abdominal é a queixa mais comum na emergência. O desafio é identificar rapidamente condições cirúrgicas (abdome agudo) e causas potencialmente fatais (ruptura de AAA, isquemia mesentérica). A avaliação sistemática com anamnese + exame físico + exames direcionados é essencial." },
      { id: "def", title: "Definição", content: "Classificação do abdome agudo:\n• Inflamatório: apendicite, colecistite, diverticulite, pancreatite\n• Obstrutivo: obstrução intestinal (bridas, hérnia, tumor)\n• Perfurativo: úlcera perfurada, diverticulite perfurada\n• Vascular: isquemia mesentérica, ruptura de AAA\n• Hemorrágico: gravidez ectópica, ruptura de baço\n• Funcional: SII, cólica renal" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Red flags: sinais de peritonite (defesa, rigidez, DB+), instabilidade hemodinâmica, dor desproporcional ao exame (isquemia mesentérica), distensão + parada de eliminação (obstrução), febre alta + sepse." },
      { id: "etiology", title: "Etiologia", content: "Quadrantes:\n• QSD: colecistite, hepatite, pneumonia, pielonefrite D\n• QSE: esplenomegalia, pancreatite, pneumonia, pielonefrite E\n• QID: apendicite (mais comum cirúrgica), ectópica, torção ovariana\n• QIE: diverticulite, torção ovariana, ectópica\n• Difusa: obstrução, isquemia mesentérica, peritonite, pancreatite, AAA" },
      { id: "clinical", title: "Apresentação Clínica", content: "Peritonite: defesa involuntária, rigidez, DB+, imobilidade. Obstrução: cólica, vômitos, parada de gases/fezes, distensão, RHA metálicos. Isquemia mesentérica: dor INTENSA desproporcional ao exame (abdome inocente!), idoso, FA." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemograma, PCR, amilase/lipase, função renal/hepática, lactato, beta-hCG (mulheres em idade fértil!), gasometria, urina tipo 1.\nRX abdome: pneumoperitônio, níveis hidroaéreos.\nTC abdome com contraste: padrão-ouro na maioria.\nUSG: colecistite, ectópica, líquido livre." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Causas extra-abdominais: IAM inferior, pneumonia basal, cetoacidose, porfiria, herpes zoster, crise falcêmica." },
      { id: "conduct", title: "Conduta", content: "1. Analgesia NÃO mascara diagnóstico — NÃO privar de analgesia!\n2. Estabilização hemodinâmica\n3. Beta-hCG em toda mulher em idade fértil\n4. Imagem conforme suspeita (USG → TC)\n5. Avaliação cirúrgica precoce se: peritonite, instabilidade, obstrução com estrangulamento, pneumoperitônio\n6. Antibiótico se perfuração/peritonite\n7. Laparotomia de urgência: perfuração, isquemia mesentérica, ruptura de AAA" },
      { id: "followup", title: "Acompanhamento", content: "Reavaliação seriada (exame abdominal muda!). Se alta: orientar sinais de alarme. Retorno em 24-48h se dor persistente." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Dipirona 1g IV ou Tramadol 100 mg IV (analgesia). Buscopan (cólica). Omeprazol 40 mg IV. ATB: Ceftriaxona + Metronidazol (peritonite). Volume. Cirurgia conforme indicação." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Dipirona 1g IV 6/6h\n2. Tramadol 100 mg IV SN\n3. SF 0,9% IV\n4. Beta-hCG se mulher fértil\n5. Hemograma + PCR + amilase\n6. TC abdome se indicado\n7. Avaliação cirúrgica se peritonite" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Cartwright SL et al. Evaluation of Acute Abdominal Pain. Am Fam Physician 2008.\n2. Gans SL et al. Guideline for the Diagnostic Pathway in Patients with Acute Abdominal Pain. Dig Surg 2015.\n3. CBC/SAAD 2023." }
    ]
  },
  {
    id: "abdome-agudo-inflamatorio",
    title: "Abdome Agudo Inflamatório",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "O abdome agudo inflamatório inclui apendicite, colecistite, diverticulite e pancreatite aguda. A apendicite é a causa mais comum de abdome agudo cirúrgico. O diagnóstico precoce reduz complicações (perfuração, abscesso, peritonite)." },
      { id: "def", title: "Definição", content: "Processo inflamatório agudo intra-abdominal com peritonite localizada ou difusa.\n• Apendicite: inflamação do apêndice (pico 10-30 anos)\n• Colecistite: inflamação da vesícula (90% calculosa)\n• Diverticulite: inflamação de divertículo (> 50 anos)\n• Pancreatite: inflamação pancreática (biliar 40%, alcoólica 30%)" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Apendicite: dor periumbilical → QID (migração), Blumberg +. Escore de Alvarado ≥ 7: alta probabilidade.\nColecistite: dor em QSD + Murphy +, febre, leucocitose.\nDiverticulite: dor em QIE + febre + leucocitose (> 50 anos).\nPancreatite: dor epigástrica em faixa + amilase/lipase > 3x." },
      { id: "etiology", title: "Etiologia", content: "Apendicite: obstrução do lúmen (fecalito, hiperplasia linfoide). Colecistite: cálculo impactado no infundíbulo. Diverticulite: perfuração de divertículo. Pancreatite: cálculo biliar (40%), álcool (30%), hipertrigliceridemia." },
      { id: "clinical", title: "Apresentação Clínica", content: "Apendicite: dor periumbilical → QID, anorexia, náusea, febre baixa. Sinais: McBurney, Blumberg, Rovsing, psoas, obturador.\nColecistite: dor QSD > 6h, Murphy +, febre, vômitos.\nDiverticulite: dor QIE, febre, alteração do hábito intestinal.\nPancreatite: dor epigástrica intensa em faixa, irradiação dorsal, vômitos." },
      { id: "diagnosis", title: "Diagnóstico", content: "Apendicite: TC abdome (> 95% sensibilidade) ou USG (crianças/gestantes).\nColecistite: USG (cálculo + espessamento de parede + Murphy sonográfico).\nDiverticulite: TC abdome com contraste.\nPancreatite: lipase > 3x (mais específica que amilase), TC se dúvida ou gravidade (necrose)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Entre si + ectópica, torção ovariana, DIP, cólica renal, gastroenterite, isquemia mesentérica, IAM inferior." },
      { id: "conduct", title: "Conduta", content: "APENDICITE: Apendicectomia (laparoscópica preferida). ATB pré-op: Cefoxitina 2g IV.\nCOLECISTITE: ATB (Ceftriaxona + Metronidazol) + Colecistectomia (< 72h idealmente).\nDIVERTICULITE: Não complicada → ATB VO + dieta. Complicada (abscesso > 4 cm) → drenagem percutânea. Perfuração livre → cirurgia.\nPANCREATITE: Jejum + SF IV (250-500 mL/h nas primeiras 12-24h) + analgesia. CPRE se biliar com coledocolitíase/colangite." },
      { id: "followup", title: "Acompanhamento", content: "Apendicite: alta em 24-48h (não complicada). Colecistite: colecistectomia no mesmo internamento. Diverticulite: colonoscopia em 4-6 semanas (excluir neoplasia). Pancreatite: alimentação precoce, colecistectomia (se biliar) no mesmo internamento." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Dipirona/Tramadol (analgesia). Ceftriaxona + Metronidazol (ATB infra-abdominal). Omeprazol. SF IV agressivo (pancreatite). Cirurgia conforme indicação." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "APENDICITE:\n1. Cefoxitina 2g IV pré-op\n2. Apendicectomia laparoscópica\n\nCOLECISTITE:\n1. Ceftriaxona 1g IV + Metronidazol 500 mg IV\n2. Colecistectomia < 72h\n\nPANCREATITE:\n1. SF 0,9% 250-500 mL/h IV\n2. Dipirona/Tramadol analgesia\n3. Alimentação precoce" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Di Saverio S et al. WSES Jerusalem Guidelines Appendicitis 2020.\n2. Yokoe M et al. Tokyo Guidelines Cholecystitis 2018.\n3. IAP/APA Guidelines Pancreatitis 2013.\n4. CBC 2023." }
    ]
  },
  {
    id: "abdome-agudo-obstrutivo",
    title: "Abdome Agudo Obstrutivo",
    categoryId: "other-emergencies",
    sections: [
      { id: "intro", title: "Introdução", content: "A obstrução intestinal é responsável por 15-20% das internações cirúrgicas por abdome agudo. Bridas/aderências pós-operatórias são a causa mais comum de obstrução do delgado (60-75%). O estrangulamento (isquemia) é a complicação mais temida e requer cirurgia de urgência." },
      { id: "def", title: "Definição", content: "Interrupção mecânica ou funcional do trânsito intestinal.\n• Mecânica: obstrução física (bridas, hérnia, tumor)\n  — Parcial: suboclusão (passagem de gases)\n  — Completa: parada total de eliminação\n• Funcional: íleo paralítico (pós-operatório, metabólico)\n\nDelgado vs Cólon:\n• Delgado: bridas (principal), hérnia encarcerada\n• Cólon: neoplasia (principal), volvo, diverticulite" },
      { id: "screening", title: "Rastreamento e Identificação", content: "Dor abdominal em cólica + distensão + vômitos + parada de eliminação de gases e fezes. Sinais de estrangulamento: dor contínua, febre, taquicardia, peritonite, leucocitose, lactato elevado." },
      { id: "etiology", title: "Etiologia", content: "Delgado: bridas pós-operatórias (60-75%), hérnia encarcerada (15-20%), tumores (10%), Crohn, bezoar.\nCólon: carcinoma colorretal (60%), volvo de sigmoide (20%), diverticulite estenosante, fecaloma.\nFuncional: pós-operatório, distúrbio eletrolítico (hipocalemia), opioides, peritonite." },
      { id: "clinical", title: "Apresentação Clínica", content: "Cólica abdominal (ondas), distensão, vômitos (precoce no delgado alto, fecalóide no delgado baixo/cólon), parada de eliminação.\nAusculta: RHA aumentados (metálicos, borborigmos) → RHA ausentes (íleo ou peritonite).\nEstrangulamento: dor contínua intensa, febre, taquicardia, peritonite." },
      { id: "diagnosis", title: "Diagnóstico", content: "RX abdome em pé e deitado: níveis hidroaéreos, distensão de alças (delgado > 3 cm, cólon > 6 cm, ceco > 9 cm — risco perfuração).\nTC abdome com contraste: padrão-ouro (identifica causa, nível, estrangulamento — sinal do bico, realce parietal, pneumatose).\nHemograma, lactato (estrangulamento), eletrólitos, função renal." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Íleo paralítico (sem cólica, sem peristalse), pseudo-obstrução (Ogilvie), obstrução funcional, abdome agudo vascular." },
      { id: "conduct", title: "Conduta", content: "CONSERVADOR (obstrução parcial por bridas, sem sinais de estrangulamento):\n1. Jejum + SNG (descompressão)\n2. Hidratação IV\n3. Correção de eletrólitos\n4. Gastrografin VO/SNG: diagnóstico + terapêutico (contraste hidrossolúvel)\n5. Reavaliação em 24-48h: se não resolver → cirurgia\n\nCIRÚRGICO (indicação de urgência):\n• Estrangulamento (peritonite, febre, lactato elevado)\n• Obstrução completa sem melhora\n• Hérnia encarcerada\n• Obstrução de cólon por neoplasia\n• Volvo de ceco (cirurgia) ou sigmoide (descompressão endoscópica → cirurgia eletiva)" },
      { id: "followup", title: "Acompanhamento", content: "Pós-operatório: realimentação gradual, deambulação precoce. Prevenção de bridas: técnica cirúrgica cuidadosa, barreira anti-aderência. Se neoplasia: estadiamento + oncologia." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "SNG para descompressão. SF 0,9% + KCl IV. Gastrografin 100 mL VO/SNG (se parcial por bridas). Laparotomia/laparoscopia (cirúrgico). Colonoscopia descompressiva (volvo de sigmoide)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Jejum\n2. SNG aberta\n3. SF 0,9% + KCl IV\n4. Omeprazol 40 mg IV\n5. Dipirona 1g IV 6/6h\n6. Gastrografin 100 mL VO/SNG (se parcial)\n7. TC abdome\n8. Avaliação cirúrgica\n9. RX controle em 6-8h" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Ten Broek RPG et al. Bologna Guidelines for Diagnosis and Management of Adhesive SBO. World J Emerg Surg 2018.\n2. Defined SBO guidelines — EAST 2012.\n3. CBC/SAAD 2023." }
    ]
  }
];
