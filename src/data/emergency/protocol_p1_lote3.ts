import type { EmergencyProtocol } from "./types";

export const protocolEscorpiao: EmergencyProtocol = {
  id: "acidente-escorpionico-tityus-emergencia",
  title: "Acidente Escorpiônico — Tityus serrulatus",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["escorpião","tityus serrulatus","escorpionismo","soro antiescorpiônico","ciatox"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Acidente Escorpiônico\n\nMaior causa de mortalidade por animais peçonhentos no Brasil (~120.000 casos/ano). Tityus serrulatus é a espécie de maior importância clínica.\n\n**Espécies:**\n- T. serrulatus (amarelo) — alta gravidade\n- T. bahiensis (preto/amarelo) — moderada\n- T. stigmurus (marrom) — baixa\n\n> ⚠️ CIATox: 0800 722 6001. Notificação compulsória SINAN." },
    { id: "def", title: "Classificação", content: "## Classificação Clínica\n\n| Grau | Manifestações | Soro | Destino |\n|---|---|---|---|\n| Leve | Dor e parestesia locais apenas | Não | Alta |\n| Moderado | Náuseas, vômitos, sudorese, taquicardia | Sim | Observação 6h |\n| Grave | Choque, EAP, arritmia, convulsão, coma | Sim urgente | UTI |\n\nCrianças < 7 anos e idosos: risco aumentado — soro mesmo em moderado.\n\n**Manifestações:**\nLocal: dor intensa, parestesia, eritema (sem necrose)\nAutonômica: sudorese, sialorreia, vômitos, diarreia, priapismo\nCardiovascular: taquicardia/bradicardia, HAS, choque, EAP\nNeurológico: agitação, nistagmo, convulsão, coma (grave)" },
    { id: "conduct", title: "Conduta", content: "## Soroterapia — SAE\n\nModerado: 3 ampolas IV\nGrave: 6 ampolas IV\nDiluir em 100 mL SF 0,9%, infundir em 1h.\nTer adrenalina 0,5 mg IM disponível (reação anafilática em 5-10%).\n\n## Analgesia\nDipirona 1g IV 6/6h\nBloqueio local com lidocaína 2% se dor intensa refratária.\n\n## EAP no Escorpionismo\nDobutamina 5-10 mcg/kg/min + furosemida 40 mg IV + CPAP/VNI se SpO2 < 90%" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição Modelo\n\n\`\`\`\nPACIENTE: _____  Grau: Moderado\n1. SAE 3 ampolas + 100 mL SF 0,9% IV em 1h\n   Ter adrenalina 0,5 mg IM disponível\n2. Dipirona 1g IV 6/6h\n3. Metoclopramida 10 mg IV 8/8h (vômitos)\nSE GRAVE: SAE 6 ampolas + UTI + eco\nCIATox 0800 722 6001\n\`\`\`" },
    { id: "references", title: "Referências", content: "MS/SVS. Manual de Acidentes por Animais Peçonhentos. 2ª ed. 2001. CIATox. Protocolo de Escorpionismo. 2024." },
  ],
};

export const protocolSuicidio: EmergencyProtocol = {
  id: "risco-suicidio-columbia-emergencia",
  title: "Avaliação de Risco de Suicídio — Escala Columbia (C-SSRS)",
  categoryId: "psychiatry-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["suicídio","columbia","c-ssrs","ideação suicida","psiquiatria emergência"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Avaliação de Risco de Suicídio\n\nA Columbia Suicide Severity Rating Scale (C-SSRS) é o padrão validado para o PS.\n\n**Quando aplicar:** tentativa, ideação suicida, intoxicação com possível intenção, autolesão, depressão grave, psicose aguda.\n\n> ⚠️ CVV 188 (24h). Avaliação psiquiátrica presencial nos casos moderado-alto." },
    { id: "def", title: "C-SSRS e Classificação", content: "## Columbia — Bloco de Ideação\n\n| Item | Pergunta | Risco |\n|---|---|---|\n| 1 | Desejou estar morto? | Baixo |\n| 2 | Pensamentos de se matar? | Baixo |\n| 3 | Pensou em como se matar? | Moderado |\n| 4 | Intenção de agir? | Alto |\n| 5 | Planejou como faria? | Alto |\n\n**Classificação:**\n- Baixo (1-2 sem tentativa): seguimento ambulatorial\n- Moderado (3-4): avaliação psiquiátrica\n- Alto (5, plano, tentativa): internação" },
    { id: "conduct", title: "Conduta por Risco", content: "## Conduta\n\nRisco Baixo: orientação familiar + encaminhamento CAPS 24-48h + plano de segurança.\n\nRisco Moderado: avaliação psiquiátrica no PS + não deixar sozinho.\n\nRisco Alto / Tentativa: internação (voluntária ou involuntária - Lei 10.216/2001) + vigilância 1:1 + remover objetos perigosos + tratar dano físico.\n\n**Plano de Segurança (obrigatório):** sinais de alerta + estratégias + contatos + CVV 188." },
    { id: "references", title: "Referências", content: "Posner K et al. Columbia-SSRS. Arch Gen Psychiatry. 2011. CFM 2.232/2019. Lei 10.216/2001. CVV 188." },
  ],
};

export const protocolCardioversao: EmergencyProtocol = {
  id: "cardioversao-desfibrilacao-emergencia",
  title: "Cardioversão Elétrica Sincronizada e Desfibrilação",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["cardioversão","desfibrilação","cve","fibrilação ventricular","tv"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Cardioversão e Desfibrilação\n\nCVE Sincronizada: taquiarritmias com pulso + instabilidade.\nDesfibrilação: FV e TV sem pulso.\n\n**Energias bifásicas:**\n| Ritmo | Sincronizado | Energia |\n|---|---|---|\n| FA | Sim | 120-200 J |\n| Flutter | Sim | 50-100 J |\n| TSVP | Sim | 50-100 J |\n| TV mono com pulso | Sim | 100-200 J |\n| TV polimórfica | Não | 200 J |\n| FV/TV sem pulso | Não | 200 J |" },
    { id: "conduct", title: "Sedoanalgesia e Técnica", content: "## Sedoanalgesia para CVE\n\nEtomidato 0,3 mg/kg IV (hemodinâmica estável)\nMidazolam 1-3 mg IV (choque)\nFentanil 50-100 mcg IV (adjuvante)\n\n## Sequência\n1. Monitor + O2 15 L/min (afastar antes do choque)\n2. Sedoanalgesia IV\n3. Modo SINCRONIZADO no desfibrilador\n4. Gel nos eletrodos (anterolateral)\n5. Carregar → avisar equipe → confirmar sincronização → choque\n6. Verificar ritmo/pulso\n\nDesfibrilação: modo NÃO sincronizado → RCP imediato após o choque" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — CVE\n\`\`\`\n1. Etomidato 0,3 mg/kg IV = ___ mg + Fentanil 50 mcg IV\n2. MODO SINCRONIZADO\n3. FA: 150 J | Flutter: 75 J | TV: 150 J\n4. Gel anterolateral → afastar equipe → confirmar sincronização → choque\n5. ECG contínuo 30 min pós-CVE\n\`\`\`" },
    { id: "references", title: "Referências", content: "AHA 2019 Guidelines for CPR/ECC. Circulation 2019. ESC FA Guidelines 2020. SBC Arq Bras Cardiol 2023." },
  ],
};

export const protocolManchester: EmergencyProtocol = {
  id: "manchester-classificacao-risco-emergencia",
  title: "Classificação de Risco — Sistema Manchester",
  categoryId: "other-emergencies",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["manchester","triagem","classificação risco","mts","emergência triagem"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Sistema Manchester de Triagem\n\nSistema de 5 níveis — classifica pelo discriminador mais grave presente, não pelo diagnóstico.\n\n**Tempos-alvo:**\n| Cor | Prioridade | Tempo | Exemplos |\n|---|---|---|---|\n| Vermelho | Emergência | Imediato | PCR, choque, obstrução VA |\n| Laranja | Muito urgente | 10 min | Dor intensa, dispneia moderada |\n| Amarelo | Urgente | 60 min | Dor moderada, vômitos |\n| Verde | Pouco urgente | 120 min | Trauma menor |\n| Azul | Não urgente | 240 min | Queixa ambulatorial |" },
    { id: "conduct", title: "Discriminadores e Aplicação", content: "## Discriminadores Gerais Vermelhos\nObstrução VA, respiração inadequada, choque, inconsciente, convulsão ativa.\n\n## Situações Especiais\nGestante: subir uma cor | Criança < 3 meses: mín amarelo | Febre + petéquias: vermelho (meningococcemia) | Imunossuprimido + febre: laranja.\n\n## Reavaliação\nLaranja: cada 10 min | Amarelo: cada 30 min | Piora: reclassificar imediatamente." },
    { id: "references", title: "Referências", content: "Mackway-Jones K et al. Manchester Triage System. 3rd ed. BMJ; 2014. ABRATUC. Manual MTS. 2022." },
  ],
};

export const protocolColangite: EmergencyProtocol = {
  id: "colangite-aguda-tokyo-tg18",
  title: "Colangite Aguda — Tokyo Guidelines TG18/24",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["colangite","tokyo","tg18","icterícia","cpre","coledocolitíase"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Colangite Aguda\n\nInfecção bacteriana das vias biliares. Mortalidade 5-10% (grave: 30%).\n\nTríade de Charcot: febre + icterícia + dor HCD.\nPêntade de Reynolds: tríade + choque + neurológico = colangite grave.\n\n> ⚠️ CPRE urgente é o tratamento definitivo. Avaliação endoscópica imediata." },
    { id: "def", title: "Gravidade — TG18", content: "## Graus TG18\n\n| Grau | Critérios | CPRE |\n|---|---|---|\n| I (Leve) | Sem disfunção orgânica | Eletiva |\n| II (Moderado) | Leucocitose, febre > 39°C, BT > 5 | 24-48h |\n| III (Grave) | Hipotensão, confusão, PaO2 < 300, Cr > 2, INR > 1,5, plaquetas < 100k | < 12h urgente + UTI |" },
    { id: "conduct", title: "ATB e Drenagem", content: "## ATB Empírico\nGrau I: amoxicilina-clavulanato 2,2g IV 8/8h\nGrau II/III: piperacilina-tazobactam 4,5g IV 8/8h\n\n## Suporte Grau III\nSF 0,9% 30 mL/kg + vasopressores se PAM < 65 + UTI + Vitamina K 10 mg IV se INR > 1,5" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Colangite Grau II\n\`\`\`\n1. Hemocultura x2 ANTES do ATB\n2. Pip-tazo 4,5g IV 8/8h\n3. SF 0,9% 1000 mL IV em 30 min\n4. Vitamina K 10 mg IV se INR > 1,5\nACIONAR ENDOSCOPIA: CPRE em 24-48h (Grau II) ou < 12h (Grau III)\n\`\`\`" },
    { id: "references", title: "Referências", content: "Kiriyama S et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018." },
  ],
};

export const protocolEncefalopatiaHepatica: EmergencyProtocol = {
  id: "encefalopatia-hepatica-lactulose-rifaximina",
  title: "Encefalopatia Hepática — Lactulose, Rifaximina e Albumina",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["encefalopatia hepática","lactulose","rifaximina","albumina","cirrose","amônia"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Encefalopatia Hepática\n\nGraus West Haven:\n| Grau | Manifestações |\n|---|---|\n| I | Alteração sutil, euforia |\n| II | Desorientação, asterixis |\n| III | Confusão grave |\n| IV | Coma |\n\nCausas precipitantes (6 Ps): Purgação, Proteína excessiva, Parasangramento, Psicofármacos, PBE, Procedimento." },
    { id: "conduct", title: "Tratamento", content: "## Lactulose (principal)\nAgudo: 30-45 mL VO/SNG a cada 1-2h até 2-4 evacuações pastosas/dia.\nManutenção: 15-30 mL VO 8/8h.\nEnema: 300 mL em 700 mL água.\n\n## Rifaximina\n550 mg VO 12/12h (prevenção de recorrência).\n\n## Albumina\n1,5 g/kg IV D1 + 1 g/kg D3 se EH por PBE.\n8g por litro drenado na paracentese > 5L.\n\n## Nutrição\nNÃO restringir proteína. Meta 1,2-1,5 g/kg/dia." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — EH Grau II-III\n\`\`\`\n1. Lactulose 30 mL SNG 2/2h → Meta 2-4 evacuações/dia\n2. Rifaximina 550 mg SNG 12/12h\n3. Dieta 1,2 g/kg/dia proteína\nSE PBE: Cefotaxima 2g IV 8/8h + Albumina 1,5 g/kg D1\nSE GCS ≤ 8: IOT + UTI\n\`\`\`" },
    { id: "references", title: "Referências", content: "Bass NM et al. RIFLE trial. NEJM 2010. EASL Guidelines Hepatic Encephalopathy. J Hepatol 2022." },
  ],
};

export const protocolFasciite: EmergencyProtocol = {
  id: "fasciite-necrosante-infeccao-grave",
  title: "Fasciíte Necrosante e Infecção Grave de Tecidos Moles",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["fasciíte necrosante","LRINEC","desbridamento","streptococcus","cirurgia urgente"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Fasciíte Necrosante\n\nMortalidade 20-40%. O desbridamento cirúrgico precoce é o único tratamento que salva vidas.\n\nTipos:\n- Tipo I (polimicrobiana): idosos, diabéticos\n- Tipo II (S. pyogenes): jovens saudáveis, mais grave\n- Tipo III (Vibrio/Clostridium): feridas marinhas\n\n> ⚠️ Não aguardar confirmação microbiológica para operar." },
    { id: "def", title: "LRINEC Score", content: "## LRINEC Score\n\n| Variável | Valor | Pontos |\n|---|---|---|\n| PCR | ≥ 150 mg/L | 4 |\n| Leucócitos | 15-25k | 1 / > 25k = 2 |\n| Hb | 11-13,5 | 1 / < 11 = 2 |\n| Na+ | < 135 | 2 |\n| Cr | > 1,6 | 2 |\n| Glicemia | > 180 | 1 |\n\n≥ 8: alto risco → cirurgia imediata. Clínica > score." },
    { id: "conduct", title: "Cirurgia e ATB", content: "## Cirurgia IMEDIATA\nDesbridamento amplo de toda fáscia comprometida. Second-look em 24-48h obrigatório.\n\n## ATB Empírico\nPip-tazo 4,5g IV 8/8h + Vancomicina 15 mg/kg IV 8/8h + Clindamicina 900 mg IV 8/8h (inibe toxinas de Streptococcus).\n\nSinais: dor desproporcional, anestesia local, crepitação, flictenas hemorrágicas, necrose." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nCIRURGIA URGENTE — ACIONAR\n1. Pip-tazo 4,5g IV agora → 4,5g 8/8h\n2. Vancomicina 25 mg/kg IV → 15 mg/kg 8/8h\n3. Clindamicina 900 mg IV 8/8h\n4. SF 0,9% 1L IV em 30 min\nPré-op: tipagem + CH 4U reserva\n\`\`\`" },
    { id: "references", title: "Referências", content: "Wong CH et al. LRINEC score. Crit Care Med. 2004. WSES/SIS-E consensus. World J Emerg Surg. 2020. IDSA guidelines 2014." },
  ],
};

export const protocolQueimado: EmergencyProtocol = {
  id: "grande-queimado-parkland-emergencia",
  title: "Grande Queimado — Fórmula de Parkland e Ressuscitação",
  categoryId: "trauma",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["queimadura","grande queimado","parkland","regra dos nove","scb","inalação","escarotomia"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Grande Queimado\n\nSCQ > 20% (adultos) ou > 10% (crianças) exige ressuscitação volêmica estruturada.\n\nRegra dos 9 (adultos): Cabeça 9%, cada MMSS 9%, tronco ant 18%, tronco post 18%, cada MMII 18%, genitália 1%.\nPalma da mão = 1% SCQ." },
    { id: "conduct", title: "Parkland e Lesão Inalatória", content: "## Fórmula de Parkland Modificada (ABA 2018)\n\`\`\`\nVolume = 2 mL × peso (kg) × SCQ (%)\nFluido: Ringer Lactato\n50% nas 1ªs 8h (da queimadura) + 50% nas 16h seguintes\nMeta DU: 0,5 mL/kg/h (adultos)\n\`\`\`\n\n## Lesão Inalatória\nSuspeitar: ambiente fechado, chamuscamento, fuligem, rouquidão, confusão (CO).\nConduta: O2 100% + IOT precoce (edema de VA evolui em horas)." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Grande Queimado\n\`\`\`\nSCQ: _____%  PESO: _____ kg\nVol Parkland = 2 × _____ × _____ = _____ mL RL\n1ªs 8h: _____ mL/h | Próximas 16h: _____ mL/h\nMeta DU ≥ 0,5 mL/kg/h = _____ mL/h\nSonda vesical + morfina titulada\nSulfadiazina de prata nas lesões 2º-3º grau\n\`\`\`" },
    { id: "references", title: "Referências", content: "ABA. Advanced Burn Life Support (ABLS). 2018. SBCP. Queimaduras no Brasil. 2023." },
  ],
};

export const protocolHeatStroke: EmergencyProtocol = {
  id: "heat-stroke-hipertermia-maligna",
  title: "Heat Stroke / Hipertermia Maligna — Resfriamento de Emergência",
  categoryId: "other-emergencies",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["heat stroke","hipertermia maligna","dantrolene","golpe de calor","resfriamento"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Heat Stroke e Hipertermia Maligna\n\n| Condição | Causa | Tratamento |\n|---|---|---|\n| Heat Stroke clássico | Calor ambiental, idosos | Resfriamento externo |\n| Heat Stroke por esforço | Exercício + calor, jovens | Imersão água gelada |\n| Hipertermia Maligna | Halogenado + succinilcolina | Dantrolene |\n| Síndrome serotoninérgica | SSRIs/IMAO | Ciproeptadina |\n| SNM | Antipsicóticos | Dantrolene + bromocriptina |" },
    { id: "conduct", title: "Conduta", content: "## Heat Stroke — Resfriamento\nMeta: T < 38,5°C em 60 min.\nMétodos: imersão água gelada (mais eficaz), lençóis gelados + ventiladores, gelo axilas/virilhas, SF 4°C 30 mL/kg IV.\nParar resfriamento quando T = 38-38,5°C.\n\n## Hipertermia Maligna (sala cirúrgica)\nProtocolo AMRA:\n1. Avisar + chamar ajuda\n2. Mudar o agente (suspender halogenado/succinilcolina)\n3. Resfriamento externo\n4. Dantrolene 2,5 mg/kg IV bolus → repetir cada 5 min até controle (máx 10 mg/kg)" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Heat Stroke\n\`\`\`\nT°: _____  GCS: _____\n1. Resfriamento imediato: lençóis gelados + gelo axilas + ventiladores\n2. SF 4°C 30 mL/kg IV\n3. Sonda vesical — meta DU ≥ 1 mL/kg/h (rabdomiólise)\n4. Diazepam 10 mg IV SE convulsão\nSE HIPERTERMIA MALIGNA: Dantrolene 2,5 mg/kg IV → repetir 5/5 min\n\`\`\`" },
    { id: "references", title: "Referências", content: "Bouchama A, Knochel JP. Heat stroke. NEJM 2002. MHAUS Clinical Guidelines 2023. SBA. Hipertermia Maligna. 2022." },
  ],
};

export const protocolCO: EmergencyProtocol = {
  id: "intoxicacao-monoxido-carbono-emergencia",
  title: "Intoxicação por Monóxido de Carbono — O₂ a 100%",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["monóxido de carbono","co","carboxihemoglobina","hiperbárico","incêndio"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Intoxicação por CO\n\nPrincipal causa de morte por intoxicação em incêndios. SpO2 normal (não distingue COHb).\n\n| COHb % | Sintomas |\n|---|---|\n| 0-10 | Assintomático |\n| 10-20 | Cefaleia, náuseas |\n| 20-40 | Confusão, síncope |\n| 40-60 | Convulsão, coma, IAM |\n| > 60 | Coma profundo, morte |" },
    { id: "conduct", title: "O2 100% e Hiperbárico", content: "## O2 100% — Tratamento Principal\nMeia-vida COHb: ar ambiente 5h → O2 100% 60-90 min → câmara hiperbárica 20-30 min.\n\nO2 15 L/min máscara não-reinalante por ≥ 4-6h (até COHb < 5%).\nIOT se GCS ≤ 8.\n\n## Câmara Hiperbárica\nIndicar se: COHb > 25%, perda de consciência, sintomas neurológicos, isquemia miocárdica, gestação (COHb > 15%)." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nCOHb: _____%  GCS: _____\n1. O2 15 L/min máscara não-reinalante (≥ 4-6h)\n2. Gasometria com CO-oximetria 2/2h\n3. ECG + troponina (IAM?)\nSE GCS ≤ 8: IOT + FiO2 100%\nAvaliar câmara hiperbárica se COHb > 25%\n\`\`\`" },
    { id: "references", title: "Referências", content: "Weaver LK et al. HBO2 trial. NEJM 2002. CIATox. CO Protocolo. 2024." },
  ],
};

export const protocolCocaina: EmergencyProtocol = {
  id: "intoxicacao-cocaina-drogas-sinteticas",
  title: "Intoxicação por Cocaína e Drogas Sintéticas",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["cocaína","crack","anfetamina","MDMA","simpaticomimético","hipertermia"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Intoxicação por Cocaína\n\nSíndrome simpaticomimética: taquicardia, HAS, midríase, diaforese, hipertermia, agitação.\n\n**Complicações:** dor torácica/vasoespasmo (40%), arritmias (30%), IAM (6%), convulsão (5%), AVC hemorrágico (2%).\n\n> ⚠️ BZD é o pilar. Evitar betabloqueador isolado." },
    { id: "conduct", title: "Tratamento", content: "## Benzodiazepínico — Tratamento Principal\nDiazepam 5-10 mg IV → repetir 5 mg IV a cada 5-10 min até sedação.\nTrata TODAS as manifestações simpáticas.\n\n## Hipertermia\nResfriamento externo + BZD IV para reduzir agitação.\nMeta T < 39°C em 30 min (principal causa de morte).\n\n## Dor Torácica\nNitroglicerina IV (vasoespasmo) + BZD + AAS se IAM.\nEVITAR betabloqueador isolado (vasoespasmo paradoxal)." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nT°: _____  FC: _____  PA: _____\n1. Diazepam 10 mg IV → 5 mg cada 5 min (meta FC < 100, T < 39°C)\n2. Lençóis gelados + gelo axilas se T > 39°C\nDOR TORÁCICA: Nitroglicerina 5 mcg/min BIC + AAS 300 mg\nEVITAR: betabloqueador isolado\n\`\`\`" },
    { id: "references", title: "Referências", content: "Richards JR et al. Treatment cocaine toxicity. Ann Emerg Med 2016. CIATox 2024." },
  ],
};

export const protocolSalicilato: EmergencyProtocol = {
  id: "intoxicacao-salicilato-aas-emergencia",
  title: "Intoxicação por Salicilatos (AAS) — Alcalinização Urinária",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["salicilato","AAS","alcalinização urinária","hemodiálise","Done nomogram"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Intoxicação por Salicilatos\n\nAlcalinização urinária aumenta excreção 10-20x.\n\n| Fase | Gasometria | Sintomas |\n|---|---|---|\n| Precoce | Alcalose resp | Hiperventilação, tinido |\n| Intermediária | Mista | Confusão, vômitos |\n| Tardia | Acidose met | Coma, convulsão, EAP |\n\nDone nomogram: nível 6h pós-ingestão. > 70 mg/dL = grave. > 100 mg/dL = potencialmente fatal." },
    { id: "conduct", title: "Alcalinização", content: "## Alcalinização Urinária\nMeta: pH urinário 7,5-8.\nPreparo: NaHCO3 8,4% 150 mEq + SG5% 850 mL + KCl 40 mEq → 200-250 mL/h IV.\nMonitorar pH urinário com fita horária.\nKCl obrigatório (hipocalemia impede alcalinização).\n\n## Hemodiálise\nIndicar se: salicilato > 100 mg/dL, IR, EAP, coma, convulsão." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nSalicilato: _____  pH: _____\n1. Carvão 50g VO/SNG (< 2h)\n2. NaHCO3 150 mEq + SG5% 850 mL + KCl 40 mEq → 200 mL/h\n   Meta pH urinário 7,5-8 (fita horária)\n3. Glicemia 2/2h (hipoglicemia)\n4. Salicilato 4/4h\nSE hemodiálise indicada: acionar nefrologia\n\`\`\`" },
    { id: "references", title: "Referências", content: "AAPCC Annual Report 2024. CIATox. Salicilatos. 2024." },
  ],
};

export const protocolPEPHIV: EmergencyProtocol = {
  id: "pep-hiv-exposicao-ocupacional-sexual",
  title: "PEP HIV — Profilaxia Pós-Exposição Ocupacional e Sexual",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["pep","hiv","profilaxia","exposição ocupacional","tenofovir","dolutegravir","72h"],
  sections: [
    { id: "intro", title: "Introdução", content: "## PEP HIV\n\nJanela de eficácia: até 72h (ideal < 2h). Eficácia: reduz 80% do risco se tomada 28 dias.\n\nDisponível gratuitamente no SUS: CTA, UBS, UPA 24h.\n\n> ⚠️ Iniciar a primeira dose na consulta — não enviar para buscar na farmácia." },
    { id: "conduct", title: "Esquema MS 2024 e Indicações", content: "## Esquema Preferencial (> 12 anos ou > 40 kg)\nTDF 300 mg + 3TC 300 mg + DTG 50 mg — 1 comprimido/dia por 28 dias.\n\n## Indicações\nQualquer exposição de risco com fonte HIV+ ou desconhecida dentro de 72h.\n\nNão indicar: exposição de baixíssimo risco, fonte HIV-, após 72h.\n\n## Violência Sexual — Adicionar\nLevonorgestrel 1,5 mg VO (< 72h), azitromicina 1g VO dose única, ceftriaxona 500 mg IM dose única." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nExposição: _____  Tempo: _____ h  Anti-HIV exposto: Não reativo\n1. TDF 300mg + 3TC 300mg + DTG 50mg 1 cp/dia × 28 dias\n   (iniciar a 1ª dose agora)\n2. Retorno 2 semanas (aderência) + 28 dias + 3 meses\nSE VIOLÊNCIA SEXUAL: + levonorgestrel + azitromicina + ceftriaxona\n\`\`\`" },
    { id: "references", title: "Referências", content: "MS. Protocolo PEP. Brasília: MS; 2024. WHO Guidelines HIV PEP. 2014." },
  ],
};

export const protocolRaiva: EmergencyProtocol = {
  id: "raiva-profilaxia-pos-exposicao",
  title: "Raiva — Profilaxia Pós-Exposição (PEP Antirrábica)",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["raiva","profilaxia antirrábica","vacina antirrábica","soro antirrábico","mordedura","morcego"],
  sections: [
    { id: "intro", title: "Introdução", content: "## PEP Antirrábica\n\nRaiva = 100% fatal após sintomas. PEP = 100% eficaz se correta e precoce.\n\n| Tipo | Conduta |\n|---|---|\n| Leve (mordedura superficial, animal sadio observável) | Lavar + vacina D0/D3/D7 |\n| Grave (face/mãos, animal silvestre/morcego, profunda) | Lavar + SORO + vacina |\n| Sem indicação (pele íntegra, contato indireto) | Lavar apenas |" },
    { id: "conduct", title: "Lavar, Soro e Vacina", content: "## Passo 1 — Lavar (imediato)\nÁgua + sabão 10-15 min → álcool 70%.\n\n## Passo 2 — Soro Antirrábico (graves)\nHeterólogo 40 UI/kg: infiltrar máximo na ferida, restante IM.\nTeste ID antes.\n\n## Passo 3 — Vacina\nNão vacinado: D0, D3, D7, D14, D28 (5 doses IM deltóide).\nVacinado (≥ 3 doses): apenas D0 e D3, sem soro.\n\n## Observação do Animal\nCão/gato: observar 10 dias. Animal saudável ao final = não transmitiu. Suspender vacina após D7." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Exposição Grave\n\`\`\`\n1. Lavar ferida: água + sabão 15 min → álcool 70%\n2. Soro antirrábico 40 UI/kg = _____ UI\n   → Infiltrar máximo na(s) ferida(s)\n   → Restante IM glúteo (longe da vacina)\n   Teste ID 1:100 antes\n3. Vacina antirrábica 1 mL IM deltóide D0 → D3, D7, D14, D28\nNotificar SINAN + Vigilância Epidemiológica\n\`\`\`" },
    { id: "references", title: "Referências", content: "MS/SVS. Norma Técnica Profilaxia Raiva. 2024. Guia Vigilância em Saúde Vol 3. 6ª ed. 2023." },
  ],
};

export const protocolSepsePuerperal: EmergencyProtocol = {
  id: "sepse-puerperal-emergencia",
  title: "Sepse Puerperal — Bundle e Manejo na Emergência",
  categoryId: "obstetrics",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["sepse puerperal","endometrite","pós-parto","clindamicina","gentamicina"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Sepse Puerperal\n\nTerceira causa de morte materna no Brasil. Infecção do trato genital entre nascimento e 42 dias pós-parto com sinais de sepse.\n\nCausas: endometrite (pós-cesárea > vaginal), infecção de ferida, mastite, tromboflebite séptica, ITU.\n\n> ⚠️ Avaliação obstétrica urgente." },
    { id: "conduct", title: "Bundle e ATB", content: "## Bundle Hora 1\n1. Culturas antes do ATB (hemocultura x2 + swab endometrial + urocultura)\n2. ATB em < 1h\n3. SF 0,9% 30 mL/kg se hipoperfusão\n4. Vasopressores se PAM < 65 após volume\n5. Lactato\n\n## ATB Empírico\nEndometrite pós-parto: Clindamicina 900 mg IV 8/8h + Gentamicina 5 mg/kg IV 24h (ambos compatíveis com amamentação).\nPós-cesárea/grave: Pip-tazo 4,5g IV 8/8h." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nDPP: _____  Tipo parto: _____  Lactante: SIM/NÃO\n□ Hemocultura x2 + swab endometrial + urocultura ANTES\n1. Clindamicina 900 mg IV 8/8h\n2. Gentamicina 5 mg/kg IV 24h\nSF 0,9% 1L IV se hipoperfusão\nAvaliar RN (sepse neonatal?)\n\`\`\`" },
    { id: "references", title: "Referências", content: "WHO. Peripartum infections prevention and treatment. 2015. FEBRASGO. Sepse Puerperal. 2023." },
  ],
};

export const protocolTRM: EmergencyProtocol = {
  id: "trauma-raquimedular-agudo-emergencia",
  title: "Trauma Raquimedular Agudo — ASIA e Manejo",
  categoryId: "trauma",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["trauma raquimedular","trm","ASIA","choque neurogênico","imobilização","coluna"],
  sections: [
    { id: "intro", title: "Introdução", content: "## TRM Agudo\n\nImobilização cervical em toda vítima de trauma com mecanismo de risco.\n\nASIA: A (completo) / B (sensitivo preservado) / C (motor fraco) / D (motor ≥ 3) / E (normal).\n\nCritérios NEXUS para NÃO imobilizar: sem dor linha média, sem déficit focal, consciência normal, sem intoxicação, sem distratora." },
    { id: "conduct", title: "Metas e Suporte", content: "## Metas Hemodinâmicas\nPAM ≥ 85-90 mmHg por 5-7 dias (perfusão medular).\n\nChoque neurogênico: hipotensão + bradicardia (simpatectomia).\nSF 0,9% 1-2 L IV → norepinefrina se refratário → atropina se bradicardia sintomática.\n\n## Corticoide\nMetilprednisolona NÃO recomendada de rotina (NASCIS III). Decisão neurocirúrgica individual." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — TRM Agudo\n\`\`\`\nASIA: _____  NÍVEL: _____  PAM: _____\n□ Colar cervical rígido + decúbito neutro\nMETA PAM ≥ 85 mmHg:\n1. SF 0,9% 1L IV em 30 min\n2. Norepinefrina BIC → PAM ≥ 85 mmHg\n3. Atropina 0,5-1 mg IV se bradicardia sintomática\nPROFILAXIAS: Enoxaparina 40 mg SC (após 48h) + compressão pneumática + omeprazol\nTC coluna total + RM medular urgente\nACIONAR NEUROCIRURGIA\n\`\`\`" },
    { id: "references", title: "Referências", content: "ATLS 11th ed. ACS 2023. SBN/SBCCP. Lesão Medular Traumática. 2023." },
  ],
};

export const protocolCriseTireotoxica: EmergencyProtocol = {
  id: "crise-tireotoxica-burch-wartofsky",
  title: "Crise Tireotóxica — Score de Burch-Wartofsky e Manejo",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["crise tireotóxica","burch-wartofsky","ptu","propranolol","iodeto"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Crise Tireotóxica\n\nMortalidade 10-30%. Sempre tem precipitante: cirurgia, infecção, trauma, iodo radioativo, suspensão do antitireoideano.\n\nBurch-Wartofsky ≥ 45 = Crise / 25-44 = Iminente.\nPontuado por: temperatura, SNC, GI, FC, ICC, FA, precipitante." },
    { id: "conduct", title: "Protocolo ABCDE", content: "## Protocolo ABCDE\nA — Antitireoideano: PTU 600 mg SNG/VO (ataque) → 200 mg 4/4h.\nB — Betabloqueador: propranolol 40-80 mg VO 4/4h ou esmolol IV. Meta FC < 90.\nC — Corticoide: dexametasona 2 mg IV 6/6h (bloqueia T4→T3).\nD — (iodeto) Lugol 10 gotas 8/8h: SOMENTE 1h após PTU.\nE — Etiologia: tratar precipitante." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nBW: _____  FC: _____  T°: _____\n1. PTU 600 mg SNG/VO AGORA → 200 mg VO/SNG 4/4h\n2. Propranolol 40-80 mg VO/SNG 4/4h (meta FC < 90)\n3. Dexametasona 2 mg IV 6/6h\n4. Lugol 10 gotas VO 8/8h (≥ 1h após PTU)\nEVITAR AAS (desloca T4 da TBG)\nACIONAR ENDOCRINOLOGIA\n\`\`\`" },
    { id: "references", title: "Referências", content: "Burch HB, Wartofsky L. Endocrinol Metab Clin North Am. 1993. ATA/AES Guidelines. Thyroid 2016/2022. SBEM 2023." },
  ],
};

export const protocolCriseMiastenica: EmergencyProtocol = {
  id: "crise-miastenica-emergencia",
  title: "Crise Miastênica — Insuficiência Respiratória na Miastenia Gravis",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["crise miastênica","miastenia gravis","plasmafese","ivig","piridostigmina","insuficiência respiratória"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Crise Miastênica\n\nInsuficiência respiratória aguda em miastenia gravis. Mortalidade 5%.\n\nPrecipitantes FACTS: Fármacos (fluoroquinolonas, aminoglicosídeos, Mg, BB), Anestesia, Colapso emocional, Timoma/infecção, Sepse.\n\nRegra 20/30/40: CVF < 20 mL/kg ou PI < 30 cmH2O ou PE < 40 cmH2O → IOT eletiva." },
    { id: "conduct", title: "IOT e Imunoterapia", content: "## IOT Precoce\nCritério: CVF < 20 mL/kg. NÃO esperar falência instalada.\nEvitar succinilcolina → rocurônio 0,6 mg/kg (reversão com sugamadex).\n\n## Imunoterapia (escolher uma — equivalentes)\nIVIG: 0,4 g/kg IV/dia × 5 dias.\nPlasmaférese: 5 sessões em 10-14 dias.\n\nSUSPENDER PIRIDOSTIGMINA durante a crise (ineficaz + aumenta secreções)." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nCVF: _____ mL/kg  PI: _____ cmH2O\nMonitorar CVF + PI a cada 2-4h\nSuspender piridostigmina\nSE CVF < 20 mL/kg: IOT com cetamina + rocurônio\nIVIG: 0,4 g/kg IV/dia × 5 dias (= _____ g/dia)\nOU Plasmaférese: acionar UTI neuro\nEVITAR: fluoroquinolonas, aminoglicosídeos, magnésio\n\`\`\`" },
    { id: "references", title: "Referências", content: "Sanders DB et al. MG Consensus. Neurology 2016. ABN. Miastenia Gravis. Arq Neuropsiquiatr 2023." },
  ],
};

export const protocolDorToracica: EmergencyProtocol = {
  id: "dor-toracica-heart-score-emergencia",
  title: "Dor Torácica na Emergência — HEART Score e Fluxograma",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["dor torácica","HEART score","SCA","troponina","ECG","síndromes coronarianas"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Dor Torácica — Grandes Cinco\n\nExcluir primeiro (risco imediato de vida):\n1. IAMCSST (supra de ST no ECG)\n2. Dissecção de Aorta\n3. Pneumotórax Hipertensivo\n4. Tamponamento Cardíaco\n5. TEP Maciço\n\nDepois estratificar SCA com HEART Score." },
    { id: "def", title: "HEART Score", content: "## HEART Score\n\n| Letra | Critério | 0 | 1 | 2 |\n|---|---|---|---|---|\n| H | História | Levemente suspeita | Moderada | Altamente suspeita |\n| E | ECG | Normal | BRE/HVE | Depressão ST |\n| A | Idade | < 45 | 45-64 | ≥ 65 |\n| R | Fatores de risco | Nenhum | 1-2 | ≥ 3 ou DAC prévia |\n| T | Troponina | ≤ 1× | 1-3× | > 3× normal |\n\n0-3: baixo risco → alta precoce.\n4-6: intermediário → observação + troponina seriada.\n7-10: alto → cateterismo urgente." },
    { id: "conduct", title: "Fluxograma", content: "## IAMCSST: ativar código IAM → meta porta-balão < 90 min + AAS + heparina.\n\nSCA sem supra (HEART 7-10 ou troponina positiva): AAS 300 mg + ticagrelor 180 mg + heparina 60 UI/kg IV + cateterismo < 24h.\n\nHEART baixo (0-3) + troponina neg T0 e T3h: alta + seguimento cardiológico." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — SCA sem Supra\n\`\`\`\nHEART: _____  Troponina T0: _____ T3h: _____\n1. AAS 300 mg VO + ticagrelor 180 mg VO\n2. Heparina 60 UI/kg IV (máx 4000 UI) → 12 UI/kg/h (alvo TTPa 50-70s)\n3. Atorvastatina 80 mg VO\n4. Acionar cardiologia → cateterismo < 24h\nECG 12D a cada 30 min (1ª hora)\n\`\`\`" },
    { id: "references", title: "Referências", content: "Backus BE et al. HEART score. Int J Cardiol 2010. ESC ACS Guidelines 2020. SBC Arq Bras Cardiol 2021." },
  ],
};

export const protocolALF: EmergencyProtocol = {
  id: "insuficiencia-hepatica-aguda-nac",
  title: "Insuficiência Hepática Aguda (ALF) — NAC e King's Criteria",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["insuficiência hepática aguda","alf","nac","king's college","paracetamol","transplante hepático"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Insuficiência Hepática Aguda\n\nINR ≥ 1,5 + encefalopatia + sem doença hepática prévia + < 26 semanas de evolução.\n\nCausas: paracetamol 40%, hepatite viral 25%, DILI 15%, Wilson 5%, indeterminada 15%.\nMortalidade sem transplante: 30-80%.\n\n> ⚠️ King's College = avaliação urgente para transplante hepático." },
    { id: "conduct", title: "NAC e Critérios de Transplante", content: "## NAC (N-Acetilcisteína)\nTodas as etiologias de ALF se beneficiam.\nIV: 150 mg/kg em 1h → 50 mg/kg em 4h → 100 mg/kg em 16h. Manter 72h.\n\n## King's College (indicação de transplante)\nParacetamol: pH < 7,3 OU (INR > 6,5 + Cr > 3,4 + EH III-IV).\nOutras causas: INR > 6,5 OU 3 de: idade < 10 ou > 40, etiologia não A não B, icterícia > 7d antes de EH, INR > 3,5, BT > 17 mg/dL." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição\n\`\`\`\nINR: _____  EH: _____  King's College: POS/NEG\n1. NAC 150 mg/kg IV em 1h = _____ mg\n   → 50 mg/kg em 4h → 100 mg/kg em 16h\n2. SG10% 100 mL/h (glicemia 80-180 mg/dL)\n3. Lactulose 30 mL SNG 4/4h\n4. Vitamina K 10 mg IV 1×/dia\nSE King's+ → acionar transplante hepático\n\`\`\`" },
    { id: "references", title: "Referências", content: "AASLD Guidelines ALF. Hepatology 2023. O'Grady JG. King's Criteria. Gastroenterology 1989." },
  ],
};

export const protocolTRR: EmergencyProtocol = {
  id: "trr-dialise-uti-indicacoes",
  title: "Indicações de TRR / Diálise em UTI",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["terapia substituição renal","tRR","hemodiálise","HDVVC","kdigo"],
  sections: [
    { id: "intro", title: "Introdução", content: "## TRR na UTI\n\nIndicações absolutas AEIOU:\nA - Acidose pH < 7,15 refratária\nE - Eletrólitos: K+ > 6,5 com ECG\nI - Intoxicação dialisável (lítio, metanol, salicilato)\nO - Overload: EAP refratário a diurético\nU - Uremia: encefalopatia, pericardite\n\nModalidades: HD intermitente (estável) / HDVVC/CVVHDF (instável, choque) / SLED / DP." },
    { id: "conduct", title: "Acesso e Anticoagulação", content: "## Acesso Vascular\nCateter Shaldon 11,5-13,5 Fr: jugular interno D (preferido), femoral, subclávia.\n\n## Anticoagulação\nSem risco de sangramento: heparina NF 500-1000 UI/h no circuito.\nRisco de sangramento: citrato regional (anticoagula circuito, não o paciente).\nCIVD grave: sem anticoagulação.\n\n## Dose HDVVC\nEfluxo ≥ 25 mL/kg/h. Monitorar eletrólitos 4-6h." },
    { id: "prescriptions", title: "Prescrições", content: "## Check-list TRR\n\`\`\`\nK+: _____  pH: _____  DU: _____ mL/h\nINDICAÇÃO: □ Hipercalemia □ Acidose □ Sobrecarga □ Uremia □ Intoxicação\nMODALIDADE: □ HD □ HDVVC □ SLED\n1. Cateter Shaldon _____ Fr — local: _____\n2. Anticoagulação: □ HNF 500 UI/h □ Citrato □ Sem\n3. Eletrólitos + gasometria 4/4h durante TRR\nACIONAR NEFROLOGIA\n\`\`\`" },
    { id: "references", title: "Referências", content: "KDIGO AKI Guidelines 2024. Barbar SD et al. IDEAL-ICU. NEJM 2018. Gaudry S et al. AKIKI. NEJM 2016. SBN 2023." },
  ],
};
