/**
 * Protocolos P2 — Lote 1. Auditoria 2026-05-29.
 * Fontes: NICE, AHA, SBP, ESC, OPAS, ERS, WHO, CDC, CFM.
 */

import type { EmergencyProtocol } from "./types";

export const protocolAbstinenciaAlcoolica: EmergencyProtocol = {
  id: "abstinencia-alcoolica-delirium-tremens-ciwa",
  title: "Abstinência Alcoólica / Delirium Tremens — CIWA-Ar",
  categoryId: "psychiatry-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["abstinência alcoólica","delirium tremens","ciwa","benzodiazepínico","tiamina","síndrome de abstinência"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Abstinência Alcoólica\n\nOcorre 6–72h após interrupção em dependentes. Síndrome de abstinência alcoólica (SAA) pode ser fatal se não tratada — convulsão e delirium tremens são as complicações mais graves.\n\n**Linha do tempo:**\n| Tempo | Manifestações |\n|---|---|\n| 6–24h | Tremores, ansiedade, diaforese, taquicardia, HAS |\n| 12–48h | Convulsões (pico 24h) |\n| 24–72h | Alucinações (visuais, auditivas, táteis) |\n| 48–96h | Delirium tremens (confusão + autonômico) |\n\n**Delirium tremens:** confusão + tremor intenso + hiperatividade autonômica — mortalidade 1–5% com tratamento, 20% sem.\n\n> ⚠️ Tiamina ANTES da glicose em etilistas. Disclaimer: apoio à decisão.` },
    { id: "def", title: "CIWA-Ar — Avaliação", content: `## Clinical Institute Withdrawal Assessment (CIWA-Ar)\n\n10 itens avaliados de 0–7 (exceto orientação 0–4):\nNáuseas, tremor, diaforese, ansiedade, agitação, distúrbios táteis, auditivos e visuais, cefaleia, orientação.\n\n**Pontuação:**\n| Score | Gravidade | Conduta |\n|---|---|---|\n| < 8 | Leve | Monitorar + tiamina |\n| 8–15 | Moderada | BZD VO |\n| > 15 | Grave | BZD IV + UTI |\n| Delirium tremens | Grave | BZD IV + suporte intensivo |` },
    { id: "conduct", title: "Conduta", content: `## Tratamento — Benzodiazepínico\n\n**Protocolo escalonado (CIWA-Ar guiado):**\n\n**Leve/moderado (CIWA 8–15):**\n- Diazepam 10 mg VO a cada 6h + SOS 10 mg se CIWA > 8\n- OU lorazepam 2 mg VO/IV a cada 6h\n\n**Grave / Delirium Tremens (CIWA > 15):**\n- Diazepam 10 mg IV a cada 5–10 min até sedação (sem limite fixo — titular pelo efeito)\n- OU lorazepam 2–4 mg IV a cada 5–15 min\n- Internação em UTI\n\n**Tiamina — OBRIGATÓRIA:**\n- 100–500 mg IV em 30 min (ANTES de qualquer glicose)\n- Manutenção: 100 mg IV 8/8h por 3–5 dias\n- Previne encefalopatia de Wernicke\n\n**Sulfato de Mg:**\n- 2g IV em 10 min (hipomagnesemia frequente nos etilistas)` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição Modelo — Delirium Tremens\n\n\`\`\`\nCIWA-Ar: _____  FC: _____  PA: _____\n\n1. Tiamina 500 mg IV em 30 min AGORA (antes da glicose)\n   → Manutenção: tiamina 100 mg IV 8/8h × 5 dias\n\n2. Diazepam 10 mg IV → repetir 10 mg IV a cada 5 min até sedação\n   (sem teto — titular pelo efeito; CIWA-Ar guiado)\n\n3. MgSO4 2g IV em 10 min\n4. SF 0,9% 1L IV (hidratação)\n5. Haloperidol 5 mg IM SE alucinações refratárias\n   (adjuvante — não substitui BZD)\n6. Monitorização ECG + glicemia 4/4h\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nSullivan JT et al. Assessment of alcohol withdrawal: the revised CIWA-Ar. Br J Addict. 1989.\n\nFayaz MK et al. Management of alcohol withdrawal delirium. Br J Anaesth. 2022.\n\nSBA / ABP. Consenso de abstinência alcoólica. 2023.` },
  ],
};

export const protocolAraneido: EmergencyProtocol = {
  id: "acidente-araneideo-loxosceles-phoneutria",
  title: "Acidente Araneídico — Loxosceles / Phoneutria / Latrodectus",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["aranha","loxosceles","phoneutria","latrodectus","araneídico","necrose","neurotóxico"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Acidente Araneídico\n\n| Gênero | Síndrome | Gravidade | Soro |\n|---|---|---|---|\n| **Loxosceles** (aranha marrom) | Loxoscélica: necrose local + hemólise | Moderada-grave | SAL (loxoscélico) |\n| **Phoneutria** (armadeira) | Foneutrica: dor intensa + neurotóxico | Leve-moderada | SAF (foneutrismo) |\n| **Latrodectus** (viúva-negra) | Latrodectismo: espasmos musculares | Moderada | SAL (latrodectus) |\n\n> ⚠️ CIATox: 0800 722 6001. Notificação compulsória SINAN.` },
    { id: "def", title: "Síndromes por Gênero", content: `## Loxosceles (Aranha Marrom)\n\n- Dor e eritema progressivos (horas)\n- Lesão de "placa marmórea" (azulada, endurecida)\n- Necrose seca em 7–14 dias\n- **Loxoscelismo sistêmico:** hemólise intravascular, hemoglobinúria, LRA (crianças)\n\n## Phoneutria (Armadeira)\n\n- Dor imediata e intensa no local\n- Sintomas sistêmicos: sudorese, taquicardia, priapismo (crianças), salivação\n- Crianças < 7 anos: risco de edema pulmonar e choque\n\n## Latrodectus (Viúva-negra)\n\n- Dor intensa irradiada, espasmos musculares\n- Fasciculações, sudorese, HAS, abdome em tábua (sem peritonite real)` },
    { id: "conduct", title: "Conduta e Soroterapia", content: `## Soroterapia\n\n| Gênero | Grau | Soro | Dose |\n|---|---|---|---|\n| Loxosceles grave | Sistêmico (hemólise) | SAL | 5 amp IV |\n| Phoneutria | Moderado-grave | SAF | 2–4 amp IV |\n| Latrodectus | Moderado-grave | SAL | 1–2 amp IV |\n\n**Loxosceles leve (apenas local):** corticoide VO (prednisona 40 mg/dia × 5 dias) — sem soro.\n\n**Hemólise sistêmica (Loxosceles):**\n- Hidratação vigorosa (meta DU ≥ 1 mL/kg/h)\n- Monitorar hemograma, creatinina, urina\n- TRR se LRA grave\n\n## Analgesia\n- Dipirona 1g IV 6/6h (todos)\n- Gluconato de cálcio 10% 10 mL IV (espasmos no Latrodectus)` },
    { id: "references", title: "Referências", content: `## Referências\n\nMS/SVS. Manual de Acidentes por Animais Peçonhentos. 2ª ed. 2001.\n\nCIATox. Protocolo de araneísmo. São Paulo; 2024.` },
  ],
};

export const protocolAgitacaoPsicomotora: EmergencyProtocol = {
  id: "agitacao-psicomotora-manejo-escalonado",
  title: "Agitação Psicomotora — Manejo Escalonado na Emergência",
  categoryId: "psychiatry-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["agitação psicomotora","contenção","midazolam","haloperidol","droperidol","sedação"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Agitação Psicomotora\n\nEstado de hiperatividade motora e agitação que pode colocar o paciente e a equipe em risco.\n\n**Causas orgânicas (excluir primeiro):** hipoglicemia, hipóxia, hipotermia, intoxicação, AVC, trauma craniano, convulsão pós-ictal, sepse.\n\n**Causas psiquiátricas:** psicose aguda, mania, transtorno de personalidade, abstinência.\n\n**Abordagem escalonada:** verbal → contenção física (se necessário) → farmacológica.` },
    { id: "conduct", title: "Abordagem Escalonada", content: `## Passo 1 — Abordagem Verbal (sempre tentar primeiro)\n\n- Ambiente calmo, tom de voz firme e não ameaçador\n- 1 interlocutor apenas\n- Oferecer opções ("prefere tomar o remédio ou receber injeção?")\n\n## Passo 2 — Contenção Física (se risco imediato)\n\n- 5 pessoas (1 por membro + cabeça)\n- Decúbito dorsal, quatro pontos\n- Monitorar respiração e circulação\n- Objetivo: viabilizar avaliação e medicação — não punição\n\n## Passo 3 — Sedação Farmacológica\n\n**Preferência: VO/SL → IM → IV**\n\n| Fármaco | Dose | Via | Indicação |\n|---|---|---|---|\n| **Midazolam** | 5–10 mg | IM | Agitação moderada-grave, 1ª escolha |\n| **Haloperidol** | 5–10 mg | IM/IV | Psicose aguda |\n| **Droperidol** | 5–10 mg | IM/IV | Potente, rápido |\n| **Olanzapina** | 10 mg | IM/SL | Psicose, alternativa |\n| **Lorazepam** | 2–4 mg | IM/IV | Etilismo, abstinência |\n\n**Combinação midazolam + haloperidol:** sinergismo — usar metade das doses individuais.\n\n**EVITAR:** contenção química prolongada sem causa identificada.` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição Modelo — Agitação Psicomotora Grave\n\n\`\`\`\nPACIENTE: _____  Causa orgânica excluída: SIM/NÃO\n\nGlicemia capilar: _____  SpO2: _____\n\n1. Midazolam 5 mg IM (ou 10 mg se adulto corpulento)\n   + Haloperidol 5 mg IM (combinação sinérgica)\n   → Repetir 50% da dose em 10 min se insuficiente\n\nSE ETILISMO/ABSTINÊNCIA:\n2. Lorazepam 2–4 mg IM/IV (preferir ao haloperidol)\n   + Tiamina 100 mg IV\n\nMONITORIZAÇÃO:\n3. SpO2 contínua após medicação\n4. ECG se QTc longo suspeito (droperidol/haloperidol)\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nNAASM. Project BETA: Best Practices in the Evaluation and Treatment of Agitation. West J Emerg Med. 2012.\n\nABP / CFM. Consenso sobre contenção em emergências. 2022.\n\nHsin-Yi Lee et al. Haloperidol vs droperidol in agitation. Emerg Med J. 2023.` },
  ],
};

export const protocolAngioedema: EmergencyProtocol = {
  id: "angioedema-histaminergico-bradicininergico",
  title: "Angioedema — Histaminérgico vs Bradicininérgico",
  categoryId: "other-emergencies",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["angioedema","bradicinina","histamina","icatibanto","c1 inibidor","IECA","hereditário","face"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Angioedema\n\nEdema não-inflamatório de tecidos subcutâneos/submucosos. Risco de óbito se obstrução de via aérea.\n\n**Diferença fundamental para o tratamento:**\n\n| Tipo | Mediador | Causa | Trata com adrenalina? |\n|---|---|---|---|\n| **Histaminérgico** | Histamina/IgE | Alérgico (anafilaxia), urticária | **Sim** |\n| **Bradicininérgico** | Bradicinina | IECA, hereditário (HAE) | **Não** — adrenalina ineficaz |` },
    { id: "def", title: "Diagnóstico Diferencial", content: `## Pistas Diagnósticas\n\n| Característica | Histaminérgico | Bradicininérgico |\n|---|---|---|\n| Urticária | Frequente | Ausente |\n| Prurido | Presente | Ausente |\n| Dor abdominal | Rara | Frequente (HAE) |\n| Uso de IECA | Não | Pode ser |\n| Resposta à adrenalina | Sim | Não |\n| Complemento (C4) | Normal | Baixo (HAE tipo I/II) |\n\n## Angioedema por IECA\n\n- Qualquer momento do tratamento (mesmo após anos)\n- Afeta mais negros\n- Língua e lábios predominam\n- SUSPENDER IECA imediatamente\n- Não responde a adrenalina, anti-H1, corticoide` },
    { id: "conduct", title: "Conduta por Tipo", content: `## Angioedema Histaminérgico (anafilaxia)\n\n1. **Adrenalina 0,5 mg IM** (coxa lateral) — 1ª linha\n2. Anti-H1: difenidramina 50 mg IV + ranitidina 50 mg IV\n3. Corticoide: hidrocortisona 200 mg IV\n4. Se via aérea ameaçada: IOT precoce\n\n## Angioedema Bradicininérgico\n\n**Suspender o IECA.**\n\n**Tratamentos específicos (preferir nesta ordem):**\n\n1. **Icatibanto** 30 mg SC (antagonista receptor B2 bradicinina) — se disponível\n2. **Concentrado de C1-inibidor** 20 UI/kg IV — HAE tipo I/II\n3. **Plasma fresco congelado** 2 U IV — se acima indisponível (contém C1-INH)\n4. Ácido tranexâmico 1g IV (antifibrinolítico — adjuvante)\n\n**Adrenalina, anti-H1 e corticoide são INEFICAZES no bradicininérgico** — podem dar falsa segurança.\n\n## Via Aérea\n\n- IOT ou cricotireoidotomia se angioedema de língua + glote\n- Chamar ORL/anestesia precocemente\n- Nebulização com adrenalina: efeito local temporário (compra tempo)` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Angioedema por IECA (bradicininérgico)\n\n\`\`\`\nPACIENTE: _____  IECA em uso: _____\n\n1. SUSPENDER IECA imediatamente\n\n2. Icatibanto 30 mg SC (1 seringa pré-cheia) — 1ª escolha\n   OU C1-inibidor 20 UI/kg IV se HAE confirmado\n   OU PFC 2 U IV se acima indisponível\n\n3. O2 15 L/min máscara + monitorização SpO2\n4. IOT precoce se edema de língua/glote progressivo\n   → Ter cricotireoidotomia disponível\n\nNÃO USAR: adrenalina, anti-H1, corticoide (ineficazes)\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nEMA. Icatibanto (Firazyr) SmPC. 2023.\n\nMaurer M et al. Hereditary angioedema — international WAO/EAACI guideline. Allergy. 2022.\n\nBrasil. Protocolo PCDT — Angioedema Hereditário. MS; 2023.` },
  ],
};

export const protocolBronquiolite: EmergencyProtocol = {
  id: "bronquiolite-viral-aguda-pediatria",
  title: "Bronquiolite Viral Aguda — Lactentes",
  categoryId: "pediatric-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["bronquiolite","VSR","lactente","bronquiolite viral","score de wang","VNI pediátrica"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Bronquiolite Viral Aguda\n\nPrincipal causa de hospitalização em lactentes < 2 anos. VSR em 70% dos casos.\n\n**Tratamento é de suporte — não há broncodilatador, corticoide ou antibiótico com benefício comprovado.**\n\n**Fatores de risco para gravidade:**\n- Idade < 3 meses\n- Prematuridade < 35 semanas\n- Cardiopatia congênita ou doença pulmonar crônica\n- Imunossupressão\n- Sem aleitamento materno` },
    { id: "def", title: "Score de Wang — Gravidade", content: `## Score de Wang\n\n| Parâmetro | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| **FR** | < 30 | 31–45 | 46–60 | > 60 |\n| **Sibilância** | Ausente | Expiração final | Toda expiração | Inspir + expiração |\n| **Retrações** | Ausente | Leve intercostal | Moderada | Grave (todos) |\n| **Oxigenação** | ≥ 95% em AA | 93–94% | 91–92% | < 91% |\n\n**Interpretação:** 0–4 leve / 5–8 moderada / 9–12 grave` },
    { id: "conduct", title: "Conduta por Gravidade", content: `## Leve (Wang 0–4)\n\n- Alta com orientações\n- Desobstrução nasal com SF 0,9%\n- Posição elevada da cabeceira\n- Hidratação oral\n\n## Moderada (Wang 5–8)\n\n- Observação no PS 4–6h\n- O₂ se SpO₂ < 94% (cateter nasal ou máscara)\n- Soro fisiológico intranasal\n- Hidratação: VO fracionada ou SNE se incapaz\n- Internação se não melhora\n\n## Grave (Wang 9–12 ou SpO₂ < 90%)\n\n- Internação / UTI pediátrica\n- O₂ de alto fluxo (CNAF: até 2 L/kg/min, FiO₂ 100%)\n- VNI (CPAP 5–8 cmH₂O) se falha do CNAF\n- IOT se: apneia, falha da VNI, GCS < 12\n- SNE ou SNG (não interromper nutrição)\n\n**O que NÃO usar:**\n- Broncodilatadores (salbutamol, adrenalina inalada) — sem evidência\n- Corticoide sistêmico — sem benefício\n- Antibiótico — viral, sem superinfecção` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Bronquiolite Moderada-Grave\n\n\`\`\`\nPACIENTE: _____  PESO: _____ kg  SpO2: _____  Wang: _____\n\n1. O2 cateter nasal _____ L/min (meta SpO2 ≥ 94%)\n   OU CNAF _____ L/kg/min FiO2 100% (se SpO2 < 90%)\n\n2. SF 0,9% 0,5 mL/narina — desobstrução 4/4h antes das mamadas\n\n3. Hidratação:\n   Capaz de mamar: VO fracionada\n   Incapaz: SNE + dieta _____ mL/kg/dia\n\n4. Posição: cabeceira 30°\n\nSE ALTA:\n5. Orientar retorno SE: FR > 60, taquicardia, cianose, apneia\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nRenggli L et al. Bronchiolitis: clinical practice guideline. Lancet. 2023.\n\nSBP — Sociedade Brasileira de Pediatria. Diretrizes de Bronquiolite. 2023.\n\nNICE. Bronchiolitis in children: diagnosis and management. NG9. 2021.` },
  ],
};

export const protocolCefaleia: EmergencyProtocol = {
  id: "cefaleia-emergencia-red-flags-snnoop10",
  title: "Cefaleia na Emergência — Red Flags (SNNOOP10)",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["cefaleia","red flags","snnoop10","cefaleia trovão","meningite","hsa","cefaleia secundária"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Cefaleia na Emergência\n\nA maioria das cefaleias no PS é primária (enxaqueca, tensional) — benigna. O objetivo é identificar as secundárias com risco de vida.\n\n**Mnemônico SNNOOP10 — Red Flags:**\n\n| Letra | Sinal | Suspeita |\n|---|---|---|\n| **S** | Sistêmica (febre, peso, HIV) | Meningite, neoplasia |\n| **N** | Neurológico focal | AVC, tumor, abscesso |\n| **N** | Novo (> 40 anos, 1ª vez) | HSA, neoplasia |\n| **O** | Onset súbito (trovão) | **HSA** |\n| **O** | Ortostático (piora em pé) | Hipotensão intracraniana |\n| **P** | Papilema | HIC |\n| **1** | Pós-trauma | Hematoma subdural |\n| **0** | ... | 10 outros itens |` },
    { id: "screening", title: "Cefaleia Trovão — Emergência", content: `## Cefaleia Trovão\n\nOnset máximo em < 1 min — "pior cefaleia da vida".\n\n**Causa em 10–12%: HSA (hemorragia subaracnoide)**\n**Causas benignas (88%):** cefaleia primária em trovão, cefaleia relacionada ao esforço\n\n**Protocolo:**\n1. TC crânio sem contraste (sensibilidade 98% nas primeiras 6h)\n2. Se TC negativa + suspeita persistente: **LCR** (xantocromia após 2–4h)\n3. Angio-TC se LCR positivo (localizar aneurisma)\n\n## Outros Red Flags — Exames\n\n| Red Flag | Exame |\n|---|---|\n| Febre + rigidez de nuca | LCR |\n| Papilema + cefaleia progressiva | RM + fundo de olho |\n| Déficit focal novo | TC/RM urgente |\n| Pós-trauma | TC crânio |\n| HIV/imunossuprimido | TC + LCR + cryptococo |` },
    { id: "conduct", title: "Conduta por Tipo", content: `## Cefaleia Primária (sem red flags)\n\n**Enxaqueca — Tratamento de Ataque:**\n- Ibuprofeno 400–600 mg VO (1ª escolha, leve-moderado)\n- Dipirona 1g VO/IV + Metoclopramida 10 mg IV (ambiente escuro, repouso)\n- Sumatriptano 50–100 mg VO (se triptan disponível e sem contraindicação)\n- Fluidos IV se desidratação/vômitos\n\n**Enxaqueca refratária ("status migrainosus"):**\n- Dexametasona 10 mg IV (reduz recorrência em 24h)\n- Clorpromazina 12,5–25 mg IV diluído (hidratação prévia)\n- Valproato 500–1000 mg IV em 15 min\n\n**Cefaleia tensional:**\n- AAS ou ibuprofeno VO\n- Evitar opioides (cronificação)` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Enxaqueca com Vômitos no PS\n\n\`\`\`\nPACIENTE: _____  Red flags: SIM/NÃO\n\nSE RED FLAG: TC crânio urgente ± LCR\n\nSEM RED FLAG (enxaqueca):\n1. Ambiente escuro, silencioso\n2. SF 0,9% 500 mL IV em 30 min (hidratação)\n3. Metoclopramida 10 mg IV (antieméetico + antimigranoso)\n4. Dipirona 1g IV após metoclopramida\n5. Dexametasona 10 mg IV SE refratária (evita recorrência)\n\nSE STATUS MIGRAINOSUS (> 72h):\n6. Valproato 500 mg IV em 15 min\n   OU Clorpromazina 12,5 mg IV em 250 mL SF\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nSanders S et al. Evidence-based guideline update: pharmacological treatment of migraine in adults. Neurology. 2012.\n\nTerry BJ et al. Emergency management of headache. Curr Opin Neurol. 2022.\n\nABN. Consenso de Cefaleia. Arq Neuropsiquiatr. 2023.` },
  ],
};

export const protocolChikungunya: EmergencyProtocol = {
  id: "chikungunya-agudo-subagudo-manejo",
  title: "Chikungunya — Manejo Agudo e Subagudo",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["chikungunya","arbovirose","artralgia","aedes","paracetamol","fase aguda","fase subaguda"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Chikungunya\n\nArbovirose endêmica no Brasil causada pelo vírus CHIKV, transmitida pelo Aedes aegypti.\n\n**Fases clínicas:**\n| Fase | Duração | Manifestações |\n|---|---|---|\n| **Aguda** | 0–10 dias | Febre alta súbita, artralgia intensa, mialgia, exantema |\n| **Subaguda** | 10 dias–3 meses | Artrite persistente/recorrente, tenossinovite |\n| **Crônica** | > 3 meses | Artropatia inflamatória (semelhante à AR) |\n\n**Diferencial Dengue vs Chikungunya:**\n- Artralgia intensa + febre → Chikungunya\n- Sangramento + plaquetopenia → Dengue\n\n> ⚠️ Notificação compulsória SINAN.` },
    { id: "conduct", title: "Conduta por Fase", content: `## Fase Aguda\n\n**Analgesia/Antitérmico:**\n- **Paracetamol 500–1000 mg VO 6/6h** (1ª escolha)\n- **NÃO usar AAS ou ibuprofeno** antes de excluir dengue (risco de sangramento)\n- Após excluir dengue: ibuprofeno 400 mg VO 8/8h se artralgia intensa\n\n**Hidratação oral:** 2–3 L/dia\n\n**Formas graves (raras):** encefalite, miocardite, hepatite — internar + suporte.\n\n## Fase Subaguda (10 dias–3 meses)\n\n- AINEs: ibuprofeno 400 mg 8/8h ou naproxeno 500 mg 12/12h\n- Corticoide de curto prazo se artralgia debilitante: prednisona 20 mg/dia × 5–7 dias\n- Fisioterapia e reabilitação articular\n- Cloroquina 150 mg/dia: considerar se artropatia persistente > 3 meses\n\n## Populações Especiais\n\n- **Gestante:** paracetamol apenas (AINEs contraindicados > 28 semanas)\n- **Neonato de mãe virêmica:** observar 5–7 dias (risco de meningoencefalite neonatal)\n- **Idosos:** maior risco de fase crônica — seguimento reumatológico precoce` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Chikungunya Aguda (ambulatorial)\n\n\`\`\`\nPACIENTE: _____  Dengue excluída: SIM/NÃO\n\n1. Paracetamol 500–1000 mg VO 6/6h (7 dias)\n2. Hidratação oral 2–3 L/dia\n\nSE DENGUE EXCLUÍDA E ARTRALGIA INTENSA:\n3. Ibuprofeno 400 mg VO 8/8h (7–10 dias) com alimentação\n\nORIENTAR:\n- Repouso relativo\n- Fisioterapia se artralgia subaguda\n- Retorno se: sangramento, confusão, dispneia\n- Notificação SINAN\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nMS/SVS. Protocolo de Manejo Clínico da Chikungunya. Brasília: MS; 2024.\n\nOPAS. Chikungunya: Guia para Equipes de Saúde. 2015 (atualizado 2023).\n\nSociedade Brasileira de Reumatologia. Consenso de Chikungunya. 2022.` },
  ],
};

export const protocolFalciforme: EmergencyProtocol = {
  id: "crise-vaso-oclusiva-falciforme-emergencia",
  title: "Crise Vaso-oclusiva em Falcêmico — Manejo",
  categoryId: "hematology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["doença falciforme","crise vaso-oclusiva","drepanocitose","anemia falciforme","dor aguda","hidratação","opioide"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Doença Falciforme — Crise Vaso-oclusiva\n\nA crise álgica é a complicação mais frequente da doença falciforme. A isquemia tecidual por oclusão de microvasos causa dor intensa.\n\n**Formas graves que exigem internação imediata:**\n- Síndrome torácica aguda (STA): febre + dor torácica + infiltrado novo\n- Sequestro esplênico: esplenomegalia rápida + anemia grave\n- AVC isquêmico (criança com doença falciforme)\n- Priapismo > 4h\n- Crise aplástica (parvovírus B19)\n\n> ⚠️ Avaliação hematológica urgente nas formas graves.` },
    { id: "conduct", title: "Conduta — Analgesia Escalonada", content: `## Analgesia (pilar do tratamento)\n\n**Avaliar dor com escala EVA a cada 30–60 min.**\n\n**EVA ≤ 6 (ambulatorial):**\n- AINEs: ibuprofeno 400 mg VO 8/8h\n- Dipirona 1g VO 6/6h\n- Paracetamol 1g VO 6/6h\n\n**EVA ≥ 7 ou refratário (PS/internação):**\n- Morfina 0,05–0,1 mg/kg IV bolus → BIC 0,05 mg/kg/h\n- Hidromorfona (se disponível): mais eficaz, menos efeitos colaterais\n- Dipirona 1g IV 6/6h (adjuvante)\n- Cetamina 0,3 mg/kg IV (crise refratária a opioide)\n\n## Hidratação\n\n- SF 0,9% ou SG 5% + eletrólitos\n- 1,5× manutenção (promove hemodiluição)\n- Evitar excesso (STA)\n\n## Síndrome Torácica Aguda (STA)\n\n- O₂ se SpO₂ < 95%\n- VNI/CNAF se hipóxia\n- Antibiótico: ceftriaxona 2g IV + azitromicina 500 mg IV (atípicos)\n- **Exsanguineotransfusão** se deterioração rápida (reduzir HbS < 30%)\n- Analgesia adequada (atelectasia por imobilidade)` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Crise Álgica Grave no PS\n\n\`\`\`\nPACIENTE: _____  PESO: _____ kg  EVA: _____  SpO2: _____\n\n1. SF 0,9% 250 mL/h IV (1,5× manutenção)\n\nANALGESIA ESCALONADA:\n2. Dipirona 1g IV 6/6h\n3. Morfina 0,1 mg/kg IV bolus agora (= _____ mg)\n   → BIC 0,05 mg/kg/h = _____ mg/h\n   → Reavaliação EVA a cada 30 min\n   → Se EVA > 7 após 30 min: bolus adicional 0,05 mg/kg\n\n4. Ondansetrona 4–8 mg IV (antieméetico)\n5. Dipirona + morfina concomitantes = analgesia multimodal\n\nSE SÍNDROME TORÁCICA:\n6. O2 → ceftriaxona 2g IV + azitromicina 500 mg IV\n   → Acionar hematologia para exsanguineotransfusão\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nVichinsky EP et al. NHLBI guidelines for sickle cell disease. Ann Intern Med. 2020.\n\nSBH. Consenso Brasileiro de Doença Falciforme. 2023.\n\nMS/SVS. Manual de Saúde da Pessoa com Doença Falciforme. 2022.` },
  ],
};

export const protocolDelirium: EmergencyProtocol = {
  id: "delirium-uti-cam-icu-icdsc",
  title: "Delirium em UTI — CAM-ICU / ICDSC e Manejo",
  categoryId: "other-emergencies",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["delirium","cam-icu","icdsc","haloperidol","dexmedetomidina","bundle abcdef","uti"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Delirium em UTI\n\nPresente em 20–80% dos pacientes críticos. Associado a maior mortalidade, tempo de VM, e declínio cognitivo a longo prazo.\n\n**Tipos:**\n- **Hiperativo:** agitação, tentativa de retirar cateteres (mais reconhecido)\n- **Hipoativo:** sonolência, lentidão (mais frequente, mais subdiagnosticado)\n- **Misto:** alternância\n\n**Fatores de risco:** idade > 65 anos, demência prévia, imobilização, privação de sono, dor não tratada, bloqueio neuromuscular, BZD.` },
    { id: "def", title: "CAM-ICU — Diagnóstico", content: `## CAM-ICU (Confusion Assessment Method — ICU)\n\n**Delirium = critérios 1 e 2 + (3 OU 4):**\n\n1. **Início agudo ou flutuação:** mudança aguda do estado mental ou flutuação nas últimas 24h\n2. **Desatenção:** dificuldade de manter atenção (pedir para apertar mão a cada "A" nas letras SAVEAHAART)\n3. **Nível de consciência alterado:** qualquer RASS diferente de 0\n4. **Pensamento desorganizado:** incapaz de responder 4 perguntas simples corretamente\n\n**Positivo = DELIRIUM presente**` },
    { id: "conduct", title: "Conduta — Bundle ABCDEF", content: `## Bundle ABCDEF — Prevenção e Tratamento\n\n| Letra | Intervenção |\n|---|---|\n| **A** | Analgesia first (tratar dor antes da sedação) |\n| **B** | Awakening + Breathing trials (SAT + SBT diários) |\n| **C** | Coordenação (SAT + SBT juntos) |\n| **D** | Delirium — monitorar + tratar |\n| **E** | Early mobility (mobilização precoce) |\n| **F** | Family engagement (família presente) |\n\n## Tratamento Farmacológico\n\n**Delirium hiperativo (agitação):**\n- Haloperidol 1–5 mg IV/IM 8/8h (não reduz duração, controla agitação)\n- Quetiapina 25–50 mg VO 12/12h (alternativa)\n- **Dexmedetomidina** 0,2–1,5 mcg/kg/h BIC (preferir se em VM — reduz delirium)\n\n**NÃO usar BZD** — piora delirium (exceto abstinência alcoólica)\n\n**Medidas não farmacológicas (mais eficazes na prevenção):**\n- Reorientação frequente, relógio e calendário visíveis\n- Manter ciclo dia/luz e noite/escuro\n- Mobilização precoce\n- Óculos e aparelho auditivo\n- Restringir sedativos ao mínimo necessário` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Delirium Hiperativo em VM\n\n\`\`\`\nCAM-ICU: POSITIVO  RASS: _____\n\nAVALIAR E TRATAR CAUSA: dor, retenção urinária, obstipação,\n  abstinência, hipoglicemia, hipóxia, infecção\n\nNÃO FARMACOLÓGICO:\n1. Reorientação 3x/turno (data, local, por que está internado)\n2. Luz natural durante o dia + escuro à noite\n3. Mobilização passiva ou ativa conforme RASS\n4. Óculos + aparelho auditivo (se usa)\n\nSE AGITAÇÃO INTERFERINDO NO CUIDADO:\n5. Haloperidol 2,5–5 mg IV/IM 8/8h\n   OU Quetiapina 25 mg SNG 12/12h\n\nSE EM VM:\n6. Dexmedetomidina 0,2 mcg/kg/h → titular 0,2–1,5 mcg/kg/h\n   (substituir propofol/midazolam — menos delirium)\n\nNÃO USAR: BZD (piora delirium), haloperidol em QTc > 500ms\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nDevlin JW et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption (PADIS). Crit Care Med. 2018.\n\nBarr J et al. Clinical Practice Guidelines for the Management of Pain, Agitation, and Delirium in Adult ICU Patients. Crit Care Med. 2013.\n\nSBET. Bundle ABCDEF no Brasil. Rev Bras Ter Intensiva. 2022.` },
  ],
};

export const protocolDesmame: EmergencyProtocol = {
  id: "desmame-ventilacao-mecanica-sbt-sat",
  title: "Desmame da VM — TRE / SAT / SBT (ERS/ATS)",
  categoryId: "respiratory",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["desmame","ventilação mecânica","sbt","sat","tre","extubação","pressão de suporte"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Desmame da Ventilação Mecânica\n\nO objetivo é identificar o momento mais precoce em que o paciente pode ser extubado com segurança. Protelar o desmame aumenta complicações (PAV, fraqueza adquirida).\n\n**Sequência diária:**\n1. **SAT** (Spontaneous Awakening Trial): reduzir/suspender sedativos\n2. **SBT** (Spontaneous Breathing Trial): teste de respiração espontânea\n3. **Extubação** se SBT bem tolerado` },
    { id: "def", title: "Critérios e Etapas", content: `## Critérios para Iniciar o Desmame\n\n- Causa da VM em resolução\n- SpO₂ ≥ 90% com FiO₂ ≤ 0,40 e PEEP ≤ 8\n- RASS −1 a 0 (acordado, colaborativo)\n- Hemodinâmica estável (vasopressor mínimo ou ausente)\n- Sem agravamento agudo\n\n## SAT (Spontaneous Awakening Trial)\n\n1. Suspender sedativos e opioides (ou reduzir 50%)\n2. Observar por 2h\n3. **SAT falhou:** agitação, SpO₂ < 88%, FR > 35, frequência cardíaca > 140 → retomar sedação\n\n## SBT (Spontaneous Breathing Trial)\n\nApós SAT bem tolerado:\n- Modo: Pressão de Suporte 5–8 cmH₂O + PEEP 5 cmH₂O\n- Duração: 30–120 min\n- **SBT falhou:** FR > 35, SpO₂ < 90%, FC > 20% basal, agitação, sudorese, tiragem\n\n## Extubação\n\nSe SBT tolerado:\n- Tosse eficaz + deglutição\n- Secreção gerenciável\n- Sem edema de glote significativo\n- Glasgow ≥ 10 (ventilado)\n\n**Dexametasona 8 mg IV 6–8h antes** (reduz edema pós-extubação em pacientes de risco)` },
    { id: "conduct", title: "Falha da Extubação", content: `## Falha da Extubação\n\nDefinida como: reintubação em < 48–72h.\n\n**Fatores de risco para falha:** DPOC, ICC, tosse fraca, hipersecreção, Glasgow < 13.\n\n**Suporte pós-extubação (extubação de alto risco):**\n- VNI profilática: BiPAP IPAP 12/EPAP 5 nas primeiras 24–48h (DPOC, ICC)\n- CNAF 40–60 L/min FiO₂ ajustada\n- Dexametasona se edema pós-extubação\n\n**Traqueostomia precoce:** se previsão de VM > 14 dias ou múltiplas falhas de extubação.` },
    { id: "prescriptions", title: "Prescrições", content: `## Protocolo Diário de Desmame\n\n\`\`\`\nPACIENTE: _____  FiO2: _____  PEEP: _____  RASS: _____\n\nCRITÉRIOS CUMPRIDOS: □ Sim → Iniciar SAT\n□ Causa em resolução □ SpO2 ≥ 90% FiO2 ≤ 0,4 PEEP ≤ 8\n□ RASS −1 a 0  □ HD estável\n\nSAT:\n1. Suspender propofol e midazolam por 2h\n   → Monitorar: FR, SpO2, RASS\n   → Se bem tolerado: iniciar SBT\n\nSBT:\n2. PS 5 cmH2O + PEEP 5 cmH2O por 30–120 min\n   → Tolerado: EXTUBAR\n   → Falhou: retomar VM + investigar causa\n\nPRÉ-EXTUBAÇÃO (alto risco):\n3. Dexametasona 8 mg IV (administrar 6–8h antes)\n\nPÓS-EXTUBAÇÃO (DPOC/ICC):\n4. VNI BiPAP IPAP 12/EPAP 5 FiO2 40% por 24h\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nRochwerg B et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.\n\nSchmidt GA et al. Liberation from mechanical ventilation in critically ill adults: ERS/ATS guidelines. Eur Respir J. 2017.\n\nSBET. Diretrizes de Desmame em VM. Rev Bras Ter Intensiva. 2023.` },
  ],
};

export const protocolMorteEncefalica: EmergencyProtocol = {
  id: "morte-encefalica-cfm-2173-diagnostico",
  title: "Diagnóstico de Morte Encefálica — CFM 2173/2014",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["morte encefálica","cfm","2173","diagnóstico","doação órgãos","apneia","reflexos","neurológico"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Morte Encefálica\n\nDefinida como a cessação total e irreversível das funções encefálicas (cérebro + tronco encefálico + cerebelo).\n\n**Base legal:** CFM 2173/2014 + Lei 9.434/1997.\n\n**Pré-requisitos antes do diagnóstico:**\n- Causa conhecida, estrutural e irreversível\n- Temperatura corporal ≥ 35°C\n- pH entre 7,25–7,45, PaCO₂ 35–45 mmHg\n- Pressão arterial adequada\n- Ausência de intoxicação exógena\n- Sem distúrbio metabólico corrigível` },
    { id: "def", title: "Critérios CFM 2173/2014", content: `## Etapas do Diagnóstico\n\n**Dois médicos não envolvidos na assistência (pelo menos 1 neurologista ou neurocirurgião)**\n\n**Etapa 1 — Exame Neurológico:**\n- Coma não perceptivo (sem resposta ao estímulo doloroso no território trigeminhal)\n- Ausência dos reflexos de tronco (fotomotor, córneo, óculo-cefálico, óculo-vestibular, de tosse, de engasgamento)\n\n**Etapa 2 — Teste de Apneia:**\n- Pré-oxigenar (FiO₂ 100% por 10 min)\n- Desconectar do ventilador\n- Oferecer O₂ pela cânula 6 L/min\n- Observar por 10 min ou até PaCO₂ ≥ 55 mmHg (ou elevação ≥ 10 sobre o basal)\n- **Ausência de movimentos respiratórios = positivo**\n\n**Intervalo entre exames:**\n- < 2 anos: 4 testes com 24h de intervalo\n- 2–12 anos: 2 testes com 12h de intervalo\n- > 12 anos: 2 testes com 1h de intervalo\n\n**Etapa 3 — Exame Complementar:**\n- Confirmar ausência de atividade encefálica\n- EEG, angio-TC, ECD ou cintilografia cerebral (1 exame obrigatório)` },
    { id: "conduct", title: "Protocolo e Notificação", content: `## Após Confirmação de ME\n\n1. Preenchimento do Termo de Declaração de Morte Encefálica\n2. Notificação ao familiar (a família deve ser comunicada antes do processo de doação)\n3. Contato com a Central de Transplantes (obrigatório por lei)\n4. Manejo do potencial doador (ver seção seguinte)\n\n## Contraindicações ao Diagnóstico\n\n- Intoxicação por barbitúrico, BZD, opioides (aguardar eliminação)\n- Hipotermia T < 35°C\n- Distúrbio metabólico grave não corrigido (Na+ > 160, NH₃ muito elevada)\n- Encefalopatia hepática, urêmica sem causa estrutural\n\n## Manejo do Potencial Doador\n\n- Manter PAM ≥ 65 mmHg (vasopressores)\n- Hormônios: vasopressina 0,8–1 U/h + corticoide + levotiroxina\n- Glicemia 140–180 mg/dL\n- T° 36–37,5°C\n- PaO₂ ≥ 100 mmHg, SpO₂ ≥ 95%` },
    { id: "references", title: "Referências", content: `## Referências\n\nCFM. Resolução 2173/2014 — Critérios de Morte Encefálica.\n\nABTO. Protocolo de Diagnóstico de Morte Encefálica. 2023.\n\nLei Federal 9.434/1997 — Transplante de Órgãos e Tecidos.` },
  ],
};

export const protocolHDB: EmergencyProtocol = {
  id: "hemorragia-digestiva-baixa-oakland",
  title: "Hemorragia Digestiva Baixa — Score de Oakland",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hdb","hemorragia digestiva baixa","oakland","rectorragia","colonoscopia","divertículo","angiodisplasia"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Hemorragia Digestiva Baixa (HDB)\n\nSangramento originado abaixo do ângulo de Treitz. Principal causa: diverticulose (40%).\n\n**Causas por frequência:**\n| Causa | Frequência |\n|---|---|\n| Diverticulose | 40% |\n| Angiodisplasia | 15% |\n| Hemorroidas | 10% |\n| Neoplasia | 8% |\n| Colite (isquêmica, IBD, infecciosa) | 8% |\n| Outras | 19% |\n\n> ⚠️ Excluir hemorragia digestiva alta (HDA) — pode se apresentar como rectorragia em sangramentos volumosos.` },
    { id: "def", title: "Score de Oakland — Estratificação", content: `## Score de Oakland\n\n| Variável | Valor | Pontos |\n|---|---|---|\n| Idade | 40–69 | 1 / ≥ 70 = 2 |\n| Sexo | Masculino | 1 |\n| Admissão anterior por HDB | Sim | 1 |\n| Uso de aspirina | Sim | 1 |\n| Frequência cardíaca | 70–89 | 1 / ≥ 90 = 2 |\n| PAS mmHg | 100–119 | 1 / < 100 = 2 |\n| Hemoglobina g/dL | 10–12,9 | 1 / 7–9,9 = 2 / < 7 = 3 |\n| Toque retal | Sangue | 1 |\n\n**Interpretação:**\n- ≤ 8: baixo risco — alta segura + colonoscopia eletiva\n- > 8: alto risco — internação + colonoscopia precoce (< 24h)` },
    { id: "conduct", title: "Conduta", content: `## Abordagem Inicial\n\n1. Acesso venoso calibroso × 2, tipagem, hemograma, coagulograma\n2. Toque retal: localização aproximada, hemorróidas\n3. SNG e aspirado: se aspirado bilioso sem sangue → HDA improvável\n4. Estabilização hemodinâmica (ver Choque Hipovolêmico)\n\n## Colonoscopia\n\n**Timing baseado no Oakland:**\n- ≤ 8: eletiva (1–4 semanas)\n- > 8 estável: precoce (< 24h) — melhor yield diagnóstico e terapêutico\n- Instável: ressuscitar antes; angio-TC ou arteriografia se sangramento ativo\n\n## Tratamento Endoscópico\n\n- Injeção de adrenalina + hemoclipe (divertículo)\n- Coagulação com plasma de argônio (angiodisplasia)\n- Ligadura elástica (hemorróidas)\n\n## Angio-TC / Arteriografia\n\n- Sangramento ativo > 0,5 mL/min detectável na angio-TC\n- Arteriografia + embolização: alta eficácia em sangramento ativo\n- Indicar se colonoscopia indisponível ou falha` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — HDB Alto Risco (Oakland > 8)\n\n\`\`\`\nPACIENTE: _____  Oakland: _____  Hb: _____  PA: _____\n\n1. SF 0,9% 1L IV em 30 min → avaliar resposta\n2. Omeprazol 40 mg IV 1×/dia (HDA não excluída)\n3. Transfusão CH se Hb < 7 g/dL (ou < 8 se cardiopata)\n4. Suspender AAS/AINE/anticoagulante se possível\n5. Tipagem + prova cruzada\n\nCOLONOSCOPIA < 24h:\n□ Preparo: polietilenoglicol 4L VO/SNG em 4h\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nOakland K et al. Derivation and validation of a novel risk score for safe discharge after acute lower gastrointestinal bleeding (Oakland Score). Gut. 2017.\n\nStrate LL et al. AGA Guidelines for Management of Acute Lower GI Bleeding. Gastroenterology. 2016.\n\nSBGE. Diretriz de Hemorragia Digestiva Baixa. 2023.` },
  ],
};

export const protocolHipernatremia: EmergencyProtocol = {
  id: "hipernatremia-grave-correcao-segura",
  title: "Hipernatremia Grave — Correção Segura",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hipernatremia","sódio elevado","sódio","desidratação","diabetes insipidus","correção sódio"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Hipernatremia Grave\n\nNa+ > 150 mEq/L com sintomas neurológicos. A redução muito rápida causa edema cerebral.\n\n**Meta de correção:** máximo 10–12 mEq/L/24h (0,5 mEq/L/h).\n\n**Causas:**\n| Causa | Mecanismo |\n|---|---|\n| Desidratação | Perdas hipotônicas (diarreia, sudorese) |\n| Diabetes insipidus (DI) | Deficit de ADH (central) ou resistência (nefrogênico) |\n| Hiperaldosteronismo | Retenção de Na+ |\n| Iatrogênica | SF 0,9% ou NaHCO₃ excessivo |` },
    { id: "conduct", title: "Correção", content: `## Fórmula de Correção\n\n\`\`\`\nDéficit de água livre = ACT × [(Na sérico / Na alvo) − 1]\nACT = 0,6 × peso (homem) ou 0,5 × peso (mulher)\n\nInfundir déficit ao longo de 24–48h\nMeta: queda ≤ 10 mEq/L/24h\n\`\`\`\n\n## Fluidos para Correção\n\n| Solução | Na+ (mEq/L) | Uso |\n|---|---|---|\n| Água oral/SNG | 0 | Paciente consciente |\n| SG5% | 0 | IV, rápida correção |\n| SF 0,45% | 77 | Moderada |\n| SF 0,9% | 154 | Apenas para choque |\n\n## Diabetes Insipidus\n\n**DI Central:** desmopressina 1–4 mcg SC/IV 12/12h + SG5% para repor déficit\n\n**DI Nefrogênico:** tiazídico + amilorida + dieta hiposódica; tratar causa\n\n## Monitorização\n\n- Na+ sérico a cada 2–4h durante correção\n- Se Na+ cair rápido demais: reduzir velocidade de infusão` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Hipernatremia Grave\n\n\`\`\`\nPACIENTE: _____  PESO: _____ kg  Na+: _____\n\nDéficit água livre = 0,6 × _____ × [(_____ / 140) − 1] = _____ L\n\nCORREÇÃO (infundir em 24–48h):\n1. SG5% _____ mL/h IV\n   (_____ mL / 24h = _____ mL/h)\n\nSE DIABETES INSIPIDUS CENTRAL:\n2. Desmopressina 1 mcg IV/SC 12/12h\n\nMONITORIZAÇÃO:\n3. Na+ sérico a cada 4h durante correção\n   Meta: queda ≤ 10 mEq/L/24h\n4. Débito urinário horário\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nAdrogue HJ, Madias NE. Hypernatremia. NEJM. 2000.\n\nSBN. Distúrbios do sódio. J Bras Nefrol. 2023.` },
  ],
};

export const protocolHipocalemia: EmergencyProtocol = {
  id: "hipocalemia-sintomatica-reposicao-ev",
  title: "Hipocalemia Sintomática — Reposição EV de Potássio",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hipocalemia","potássio","kcl","reposição","arritmia","fraqueza muscular","alcalose"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Hipocalemia\n\nK+ < 3,5 mEq/L. Grave se < 2,5 mEq/L ou sintomática.\n\n**Causas:**\n- Perdas GI: vômitos, diarreia\n- Diuréticos tiazídicos e de alça\n- Hiperaldosteronismo\n- Redistributiva: insulina, beta-2 agonistas, alcalose\n\n**Manifestações graves:**\n- K+ < 2,5: fraqueza muscular grave, paralisia\n- Arritmias: extrassístoles, TV, FV\n- ECG: onda U proeminente, achatamento de T, QTc prolongado` },
    { id: "conduct", title: "Reposição de KCl", content: `## Velocidade Máxima Segura\n\n| Via | Concentração máxima | Velocidade máxima |\n|---|---|---|\n| Veia periférica | 40 mEq/L | 10 mEq/h |\n| Veia central | 60–80 mEq/L | 20–40 mEq/h |\n| Emergência (K+ < 2,0 + arritmia) | 100 mEq/L central | Até 40 mEq/h |\n\n**Regra prática:** 1 mEq de KCl eleva K+ em ~0,1 mEq/L\n\n## Protocolo de Reposição\n\n**K+ 3,0–3,5 (leve):**\n- VO: KCl 20 mEq 3×/dia + aumentar dieta\n\n**K+ 2,5–3,0 (moderado) ou sintomático:**\n- KCl 40 mEq em 500 mL SF 0,9% → infundir em 4h (10 mEq/h)\n- Monitorar ECG e K+ a cada 4h\n\n**K+ < 2,5 (grave) ou arritmia:**\n- Acesso central: KCl 20 mEq em 100 mL SF → infundir em 1h (20 mEq/h)\n- ECG contínuo + K+ a cada 1–2h\n\n## Magnésio\n\n- Verificar Mg²+ sempre (hipomagnesemia impede correção de K+)\n- Se Mg²+ < 1,5: MgSO₄ 2g IV antes de repor K+\n\n## Evitar\n\n- Soluções com glicose (insulina endógena redistribui K+ para célula)\n- Velocidades > 40 mEq/h (fibrilação ventricular)` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Hipocalemia Grave (K+ < 2,5)\n\n\`\`\`\nPACIENTE: _____  K+: _____  Mg2+: _____  ECG: _____\n\nSE Mg2+ < 1,5:\n1. MgSO4 2g IV em 10 min (corrigir antes do K+)\n\nREPOSIÇÃO DE K+:\n2. KCl 20 mEq + SF 0,9% 100 mL → infundir em 1h (via central)\n   → Repetir conforme K+\n   Máximo: 40 mEq/h em veia central, 10 mEq/h em periférica\n\nMONITORIZAÇÃO:\n3. ECG contínuo durante infusão rápida\n4. K+ sérico a cada 1–2h\n5. Tratar causa base\n\nEVITAR: diluir KCl em SG (insulina redistribui K+)\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nAlfonzo A et al. Clinical practice guidelines for the management of hypokalaemia. BMJ. 2019.\n\nSBN. Distúrbios do potássio. J Bras Nefrol. 2023.` },
  ],
};

export const protocolHipotermia: EmergencyProtocol = {
  id: "hipotermia-acidental-reaquecimento-emergencia",
  title: "Hipotermia Acidental — Reaquecimento e Suporte",
  categoryId: "other-emergencies",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["hipotermia","temperatura","reaquecimento","afogamento","RCP hipotermia","temperatura central"],
  sections: [
    { id: "intro", title: "Introdução", content: `## Hipotermia Acidental\n\nTemperatura central < 35°C. Causa de morte prevenível em trauma, afogamento e exposição ao frio.\n\n**Graus:**\n| Grau | Temperatura | Manifestações |\n|---|---|---|\n| I (Leve) | 35–32°C | Tremores, taquicardia, confusão leve |\n| II (Moderada) | 32–28°C | Sem tremores, sonolência, bradicardia, FA |\n| III (Grave) | 28–24°C | Inconsciente, arritmias graves |\n| IV (Profunda) | < 24°C | PCR, assistolia |\n\n**"Não está morto enquanto não está quente e morto"** — RCP prolongada é indicada.` },
    { id: "conduct", title: "Conduta e Reaquecimento", content: `## Princípios do Reaquecimento\n\n**Meta:** aquecer 1–2°C/hora (externo) ou mais rápido (interno/ECMO)\n\n## Grau I–II — Reaquecimento Externo Passivo\n\n- Ambiente aquecido, remover roupas molhadas\n- Cobertores secos, cobertor térmico\n- Bebidas quentes se consciente\n\n## Grau II–III — Reaquecimento Externo Ativo\n\n- Cobertores de ar quente (Bair Hugger)\n- Bolsas de água quente nas axilas e virilhas\n- SF 0,9% aquecido (42°C) IV\n- Oxigênio aquecido e umidificado\n\n## Grau III–IV / PCR — Reaquecimento Interno\n\n- Lavagem gástrica, vesical, peritoneal com SF 42°C\n- **ECMO VA** — método mais eficaz em hipotermia profunda com PCR (objetivo: T > 32°C)\n- RCP contínua até ECMO ou T > 32°C + sem resposta\n\n## Arritmias na Hipotermia\n\n- Bradicardia e FA são comuns — **NÃO tratar farmacologicamente** (se estável; reversíveis com reaquecimento)\n- FV: desfibrilar 1× → se refratária, aguardar T > 30°C\n- **Não usar adrenalina até T > 30°C** (acúmulo tóxico em hipotermia)` },
    { id: "prescriptions", title: "Prescrições", content: `## Prescrição — Hipotermia Grau III\n\n\`\`\`\nPACIENTE: _____  T°: _____°C  FC: _____  PA: _____\n\nREAQUECIMENTO EXTERNO ATIVO:\n1. Cobertores de ar quente (Bair Hugger) — ligar imediatamente\n2. Bolsas de água quente: axilas + virilhas\n3. SF 0,9% a 42°C 500 mL/h IV\n4. O2 aquecido e umidificado (se ventilando)\n\nSE PCR (assistolia/FV refratária):\n5. RCP contínua\n6. 1 choque de desfibrilação → se refratário: aguardar T > 30°C\n7. NÃO usar adrenalina IV até T > 30°C\n8. Acionar ECMO VA se disponível (hipotermia profunda)\n\nMONITOR:\n9. T° retal/esofágica contínua\n10. ECG contínuo, K+ 1/1h\n11. Glicemia 2/2h (hipoglicemia frequente)\n\`\`\`` },
    { id: "references", title: "Referências", content: `## Referências\n\nSoar J et al. 2021 ERC/ESICM Guidelines for Post-Resuscitation Care. Resuscitation. 2021.\n\nBrown DJ et al. Accidental hypothermia. NEJM. 2012.\n\nAHA. 2020 Guidelines for Cardiopulmonary Resuscitation — Hypothermia Section. Circulation. 2020.` },
  ],
};
