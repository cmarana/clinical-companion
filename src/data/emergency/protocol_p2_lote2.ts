import type { EmergencyProtocol } from "./types";

export const protocolECMO: EmergencyProtocol = {
  id: "ecmo-indicacoes-eolia-elso",
  title: "Indicações de ECMO — EOLIA / ELSO",
  categoryId: "respiratory",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["ecmo","eolia","elso","sdra","insuficiência respiratória","suporte circulatório extracorpóreo"],
  sections: [
    { id: "intro", title: "Introdução", content: "## ECMO — Oxigenação por Membrana Extracorpórea\n\nSuporte mecânico de vida que substitui temporariamente a função cardíaca e/ou pulmonar.\n\n**Modalidades:**\n| Modalidade | Função | Indicação principal |\n|---|---|---|\n| **VV-ECMO** | Suporte respiratório | SDRA grave refratária |\n| **VA-ECMO** | Suporte cardiorrespiratório | Choque cardiogênico refratário, PCR |\n\n> ⚠️ Indicação por equipe especializada. Centro com experiência em ECMO. Não disponível em todos os serviços." },
    { id: "def", title: "Indicações por Modalidade", content: "## VV-ECMO (Respiratório) — Critérios EOLIA/ELSO\n\n**Indicar quando (após otimização da VM):**\n| Critério | Valor |\n|---|---|\n| PaO2/FiO2 | < 80 mmHg por > 6h com FiO2 100% e PEEP ≥ 10 |\n| PaO2/FiO2 | < 50 mmHg por > 3h |\n| pH | < 7,25 + PaCO2 > 60 por > 6h com FR máxima |\n| Pressão de platô | > 35 cmH2O apesar da VM protetora |\n\n**Contraindicações relativas:**\n- VM > 7–10 dias (pulmão não recuperável)\n- Dano neurológico grave irreversível\n- Imunossupressão grave sem causa reversível\n\n## VA-ECMO (Cardiogênico)\n\n- Choque cardiogênico SCAI D/E refratário a drogas e IABP\n- PCR refratária (E-CPR) — ECMO durante RCP\n- Miocardite fulminante como ponte para recuperação ou transplante" },
    { id: "conduct", title: "Manejo em ECMO", content: "## VV-ECMO — Configuração\n\n- Cânulas: femoral (drenagem) + jugular ou femoral contralateral (retorno)\n- Fluxo alvo: 60 mL/kg/min\n- SpO2 alvo: ≥ 88% (aceitável em SDRA grave)\n- VM durante ECMO: protetora ultra-low (Vt 4 mL/kg, PEEP 10, FR 10)\n\n## Anticoagulação\n\n- HNF 10–20 UI/kg/h → TTPa 60–80s (ou ACT 180–200s)\n- Risco de sangramento vs trombose do circuito\n\n## Desmame do ECMO\n\nVV-ECMO: reduzir fluxo de varredura de CO2 → se PaO2/FiO2 > 150 com FiO2 40% = pronto\nVA-ECMO: reduzir fluxo progressivamente → se PA e DC adequados = retirar" },
    { id: "references", title: "Referências", content: "## Referências\n\nCombes A et al. Extracorporeal membrane oxygenation for severe acute respiratory distress syndrome (EOLIA trial). NEJM. 2018.\n\nELSO. Guidelines for Adult Respiratory Failure Supplement. 2017.\n\nSBET. ECMO no Brasil: indicações e resultados. Rev Bras Ter Intensiva. 2022." },
  ],
};

export const protocolBZDIntox: EmergencyProtocol = {
  id: "intoxicacao-bzd-flumazenil-emergencia",
  title: "Intoxicação por BZD — Flumazenil (Uso Restrito)",
  categoryId: "intoxication",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["benzodiazepínico","bzd","flumazenil","intoxicação","diazepam","clonazepam","midazolam"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Intoxicação por Benzodiazepínico\n\nSindrome clínica: sonolência, confusão, ataxia, depressão respiratória. Raramente fatal em monointoxicação — grave quando combinado com álcool, opioides ou outros depressores.\n\n**Flumazenil é antagonista competitivo dos BZD — uso muito restrito:**\n- Meia-vida curta (1h) vs BZDs de longa duração → ressedação\n- Contraindica em usuários crônicos (convulsão de abstinência)\n- Contraindica em coingesta de ADT (convulsão)\n\n> ⚠️ O suporte ventilatório é mais seguro que o flumazenil na maioria dos casos. CIATox: 0800 722 6001." },
    { id: "conduct", title: "Conduta", content: "## Tratamento Principal — Suporte\n\n1. Via aérea: posição lateral, aspiração, O2\n2. IOT se GCS ≤ 8 ou apneia\n3. Glicemia capilar (excluir hipoglicemia)\n4. Tiamina 100 mg IV se etilismo\n5. Naloxona se opioide coingesto\n\n## Flumazenil — Quando Usar\n\n**Indicações muito restritas:**\n- Procedimento anestésico com BZD isolado (reversão eletiva)\n- Criança sem uso crônico de BZD, intoxicação pura, via aérea ameaçada\n\n**Contraindicações (maioria dos casos de PS):**\n- Uso crônico de BZD (convulsão de abstinência)\n- Coingesta de ADT ou outros convulsivantes\n- Epiléptico em uso de BZD\n- Histórico de convulsão\n\n## Dose do Flumazenil (se indicado)\n\n0,2 mg IV em 30s → repetir 0,1 mg a cada 60s (máx 1 mg)\nSe ressedação: 0,1–0,4 mg/h BIC" },
    { id: "references", title: "Referências", content: "## Referências\n\nBrophy GM et al. Evidence-Based Guidelines for the Management of Large Hemispheric Infarction. Neurocrit Care. 2015.\n\nCIATox. Protocolo BZD. São Paulo; 2024." },
  ],
};

export const protocolObstIntestinal: EmergencyProtocol = {
  id: "obstrucao-intestinal-bologna-wses",
  title: "Obstrução Intestinal — Bologna Guidelines + WSES 2024",
  categoryId: "gastroenterology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["obstrução intestinal","aderência","hérnia","vólvulo","bologna","íleo","colonoscopia","cirurgia"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Obstrução Intestinal\n\nOclusão do trânsito intestinal — delgado (75%) ou grosso (25%).\n\n**Causas mais frequentes:**\n| Intestino Delgado | Intestino Grosso |\n|---|---|\n| Aderências pós-operatórias (70%) | Câncer colorretal (60%) |\n| Hérnias (20%) | Vólvulo (10%) |\n| Neoplasia (5%) | Fecaloma (10%) |\n\n**Strangulamento:** isquemia do segmento obstruído — emergência cirúrgica (mortalidade 20–25%)." },
    { id: "screening", title: "Diagnóstico e Imagem", content: "## Diagnóstico\n\n**TC abdome com contraste (Gold Standard):**\n- Identifica nível, causa, e sinais de estrangulamento\n- Sensibilidade 94% para obstrução completa\n\n**Sinais de estrangulamento (cirurgia urgente):**\n- Pneumatose intestinal\n- Gás na veia porta\n- Edema de mesentério\n- Ausência de captação (necrose)\n- Febre + leucocitose + peritonite\n\n**Rx abdome:** triagem inicial — níveis hidroaéreos escalonados (delgado) ou cólon distendido." },
    { id: "conduct", title: "Conduta por Tipo", content: "## Delgado por Aderência (maioria)\n\n**Conservador 24–72h se:**\n- Sem sinais de estrangulamento\n- Obstrução parcial (gás no cólon)\n- Estável\n\nConduta conservadora:\n1. SNG de alívio + jejum\n2. SF 0,9% 2–3 L/dia IV\n3. Gastrografin 100 mL VO/SNG (contraste hidrossolúvel — diagnóstico e terapêutico)\n4. Se sem melhora em 48h ou progressão → cirurgia\n\n## Estrangulamento / Peritonite → Cirurgia Imediata\n\n1. Ressuscitação: SF + ATB\n2. Pip-tazo 4,5g IV 8/8h + cirurgia urgente\n\n## Vólvulo de Sigmoide\n\n- Colonoscopia descompressiva (1ª linha se sem peritonite)\n- Cirurgia se: peritonite, falha da colonoscopia, recidiva" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Obstrução por Aderência (Conservador)\n\n\`\`\`\nPACIENTE: _____  Sinais de estrangulamento: NÃO\n\n1. SNG de alívio — registrar débito\n2. Jejum absoluto\n3. SF 0,9% 125 mL/h IV\n4. Gastrografin 100 mL VO/SNG (diagnóstico + terapêutico)\n   TC 24h após: se contraste no cólon = resolução esperada\n5. Dipirona 1g IV 6/6h (analgesia)\n6. Sonda vesical — débito urinário\n\nSe sem melhora 48h: cirurgia\nSe peritonite/febre/piora: cirurgia urgente + ATB\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nDi Saverio S et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO). World J Emerg Surg. 2017.\n\nSartelli M et al. WSES 2024 guidelines for bowel obstruction. World J Emerg Surg. 2024." },
  ],
};

export const protocolPAV: EmergencyProtocol = {
  id: "pav-pneumonia-nosocomial-iras-uti",
  title: "PAV / IRAS — Diagnóstico e ATB Empírico",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["pav","pneumonia associada à ventilação","pneumonia nosocomial","iras","uti","pseudomonas","acinetobacter","mrsa"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Pneumonia Nosocomial e PAV\n\nPneumonia Associada à Ventilação (PAV): pneumonia > 48h após intubação.\nPneumonia Hospitalar (PN): pneumonia > 48h após internação, sem VM.\n\n**Mortalidade:** PAV 20–50% em UTI. Cada dia de VM aumenta o risco 1–3%.\n\n**Patógenos mais comuns:**\n- Precoce (< 5 dias): S. pneumoniae, H. influenzae, Moraxella\n- Tardia (≥ 5 dias): P. aeruginosa, Acinetobacter, MRSA, Klebsiella ESBL" },
    { id: "screening", title: "Diagnóstico — CPIS e Microbiologia", content: "## Critérios Diagnósticos\n\n**Clinical Pulmonary Infection Score (CPIS) ≥ 6:**\n| Variável | 0 | 1 | 2 |\n|---|---|---|---|\n| T° | 36,5–38,4 | 38,5–38,9 | ≥ 39 ou ≤ 36 |\n| Leucócitos | 4–11k | < 4 ou > 11k | + formas jovens |\n| Secreção traqueal | Mínima | Moderada | Purulenta |\n| PaO2/FiO2 | > 240 ou ARDS | — | ≤ 240 sem ARDS |\n| Rx tórax | Normal | Infiltrado difuso | Localizado |\n| Cultura | Rara | — | Igual ao aspirado |\n\n**Coleta microbiológica antes do ATB:**\n- Aspirado traqueal (mini-BAL ou BAL broncoscópico)\n- Hemocultura × 2" },
    { id: "conduct", title: "ATB Empírico", content: "## ATB Empírico por Risco\n\n**PAV Precoce / Sem Fatores de Risco para MDR:**\nCeftriaxona 2g IV 24h OU Pip-tazo 4,5g IV 8/8h\n\n**PAV Tardia / Com Fatores de Risco para MDR:**\n(Uso prévio de ATB, hospitalização > 5 dias, VM > 5 dias, colonização por P. aeruginosa)\n\n- Cobertura de Pseudomonas: Pip-tazo OU Cefepima OU Meropenem\n- + MRSA (se risco): Vancomicina 15 mg/kg 8/8h OU Linezolida 600 mg 12/12h\n\n**Acinetobacter (surto hospitalar):**\n- Meropenem 2g IV 8/8h (infusão estendida 3h)\n- + Polimixina B se MDR/pan-resistente\n\n## Duração\n\n- PAV não complicada (boa resposta, não-fermentadores): 7–8 dias\n- PAV por Pseudomonas/Acinetobacter: 8–15 dias\n- De-escalada guiada pela cultura e PCT seriada" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — PAV Tardia (Risco MDR)\n\n\`\`\`\nPACIENTE: _____  VM: _____dias  ATB prévio: SIM/NÃO\n\nCOLETA ANTES DO ATB:\n1. BAL/aspirado traqueal para cultura\n2. Hemocultura × 2\n\nATB EMPÍRICO:\n3. Piperacilina-tazobactam 4,5g IV 8/8h\n   OU Meropenem 1g IV 8/8h (se risco de ESBL/MDR)\n\nSE RISCO DE MRSA (VM > 5d, uso prévio vancomicina, cultura nasal + MRSA):\n4. Vancomicina 25 mg/kg IV (ataque) → 15 mg/kg 8/8h\n   (monitorar AUC/MIC ou nível)\n\n5. Rx tórax diário\n6. PCT seriada — guia duração\n7. De-escalada em 48–72h conforme cultura\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nKalil AC et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia (IDSA/SHEA 2016). Clin Infect Dis. 2016.\n\nSBIT / SBP. Diretrizes de PAV no Brasil. J Bras Pneumol. 2022." },
  ],
};

export const protocolTEVprofil: EmergencyProtocol = {
  id: "profilaxia-tev-uti-chest-2024",
  title: "Profilaxia de TEV em UTI — CHEST 2024",
  categoryId: "hematology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["profilaxia tev","tev","tromboembolismo venoso","enoxaparina","heparina","compressão pneumática","uti"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Profilaxia de TEV em UTI\n\nPacientes críticos têm risco de TVP de 5–30% sem profilaxia. TEP ocorre em 1–2%.\n\n**Recomendação CHEST 2024:** farmacológica preferida sobre mecânica isolada em todos os pacientes sem contraindicação." },
    { id: "def", title: "Estratificação de Risco e Escolha", content: "## Escolha da Profilaxia\n\n| Situação | Profilaxia |\n|---|---|\n| Sem contraindicação | **Enoxaparina 40 mg SC 1×/dia** (preferida) |\n| TFG 15–30 mL/min | Enoxaparina 20 mg SC 1×/dia |\n| TFG < 15 | HNF 5000 UI SC 8/8h ou 12/12h |\n| Sangramento ativo / plaquetas < 50k | Compressão pneumática apenas |\n| Neurocirurgia recente (< 24h) | Compressão pneumática → farmacológica após 24h |\n| Trauma raquimedular agudo | HNF + compressão (farmacológica após 72h) |\n\n## Compressão Pneumática\n\n- Complementar à farmacológica (sempre associar)\n- Substituta se contraindicação ao anticoagulante\n- Meia antitrombótica graduada: eficácia menor" },
    { id: "conduct", title: "Doses e Duração", content: "## Doses\n\n**Enoxaparina:**\n- Padrão: 40 mg SC 1×/dia\n- Obesidade (IMC > 40): 0,5 mg/kg SC 1×/dia\n- Gestante: 40 mg SC 12/12h (ajustar por anti-Xa)\n\n**HNF:**\n- 5000 UI SC 8/8h (pacientes de alto risco ou IR grave)\n\n## Duração\n\n- Iniciar o mais cedo possível (primeiras 24h se sem contraindicação)\n- Manter durante toda a internação na UTI\n- Alta: avaliar profilaxia estendida se mobilidade limitada\n\n## TEV Estabelecido — Anticoagulação Plena\n\nTVP proximal ou TEP: enoxaparina 1 mg/kg SC 12/12h ou HNF em infusão contínua (TTPa 60–80s)" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Profilaxia TEV em UTI\n\n\`\`\`\nPACIENTE: _____  PESO: _____ kg  TFG: _____  Sangramento: SIM/NÃO\n\nSEM CONTRAINDICAÇÃO:\n1. Enoxaparina 40 mg SC 1×/dia (às 22h)\n   (TFG 15–30: 20 mg/dia; TFG < 15: HNF 5000 UI SC 8/8h)\n2. Compressão pneumática MMII — ligar imediatamente\n\nCOM CONTRAINDICAÇÃO (sangramento ativo):\n3. Compressão pneumática apenas\n   Reavaliar profilaxia farmacológica em 24–72h\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nAnderson DR et al. American Society of Hematology 2019 guidelines for management of venous thromboembolism. Blood Adv. 2019.\n\nCockrill BA et al. CHEST 2024 VTE Prevention Guidelines. Chest. 2024.\n\nSBET. Profilaxia de TEV em UTI. Rev Bras Ter Intensiva. 2023." },
  ],
};

export const protocolQueimaduraQuimica: EmergencyProtocol = {
  id: "queimadura-quimica-ocular-emergencia",
  title: "Queimadura Química / Elétrica — Descontaminação Ocular",
  categoryId: "ophthalmology-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["queimadura química","queimadura ocular","álcali","ácido","irrigação ocular","descontaminação"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Queimadura Química Ocular\n\nEmergência oftalmológica. Álcalis penetram mais profundamente que ácidos — maior dano.\n\n**Classificação de Roper-Hall:**\n| Grau | Córnea | Limbo isquêmico | Prognóstico |\n|---|---|---|---|\n| I | Transparente | Nenhum | Excelente |\n| II | Turva (detalhes íris) | < 1/3 | Bom |\n| III | Opaca (sem detalhes íris) | 1/3–1/2 | Reservado |\n| IV | Opaca | > 1/2 | Muito ruim |\n\n> ⚠️ A irrigação é o único tratamento comprovado — iniciar IMEDIATAMENTE." },
    { id: "conduct", title: "Irrigação e Manejo", content: "## Irrigação Ocular — IMEDIATA\n\n**Iniciar ANTES de qualquer outro procedimento.**\n\n1. SF 0,9% 2L por olho — irrigar conjuntiva + fundo de saco\n2. Evertir pálpebras (remoção de partículas)\n3. Anestésico tópico (proxymetacaína) para facilitar\n4. Medir pH com fita após irrigação → meta pH 7–7,5\n5. Se pH alterado: continuar irrigação\n\n**Duração mínima:** 15–30 min (álcali: 30–60 min ou mais)\n\n**Consulta oftalmológica urgente** após irrigação.\n\n## Queimadura Elétrica Ocular\n\n- Menos comum — lesão por calor e corrente\n- Podem não ser visíveis de imediato (catarata tardia)\n- Avaliação oftalmológica em 24–48h mesmo se aparentemente normal" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Queimadura Química Ocular\n\n\`\`\`\nPACIENTE: _____  Agente: _____  pH inicial: _____\n\n1. Anestésico tópico: proxymetacaína 0,5% 1 gota — facilita irrigação\n2. IRRIGAÇÃO: SF 0,9% 2L/olho afetado\n   Posição: cabeça inclinada, olho aberto, irrigar de medial para lateral\n   Evertir pálpebra superior e inferior\n3. Medir pH conjuntival com fita → meta 7,0–7,5\n   Se pH alterado: continuar irrigação 30 min e repetir pH\n4. Dexametasona colírio 0,1% 1 gota/hora (se > grau II — após pH normalizar)\n5. ATB tópico: tobramicina colírio 1 gota 4/4h\n6. Analgesia: dipirona 1g IV\n7. ACIONAR OFTALMOLOGIA URGENTE\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nCBO — Conselho Brasileiro de Oftalmologia. Emergências Oculares. 2023.\n\nGerkowicz M et al. Ocular chemical injuries. Curr Opin Ophthalmol. 2021." },
  ],
};

export const protocolRabdomiolise: EmergencyProtocol = {
  id: "rabdomiolise-hidratacao-emergencia",
  title: "Rabdomiólise — Hidratação Agressiva e Alcalinização",
  categoryId: "metabolic",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["rabdomiólise","ck","creatinaquinase","mioglobinúria","lra","hidratação","alcalinização"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Rabdomiólise\n\nNecrose muscular com liberação de mioglobina → nefrotóxica (precipita nos túbulos renais em pH ácido).\n\n**Causas:**\n- Trauma (síndrome de esmagamento)\n- Exercício extremo (heat stroke por esforço)\n- Intoxicações (cocaína, estatinas, álcool)\n- Imobilização prolongada\n- Convulsão prolongada\n- Miopatia inflamatória\n\n**Tríade clínica:** mialgia + fraqueza + urina escura (mioglobinúria)." },
    { id: "screening", title: "Diagnóstico", content: "## Diagnóstico\n\n| Exame | Achado | Implicação |\n|---|---|---|\n| CK | > 5× normal (grave > 10.000) | Necrose muscular ativa |\n| Urinálise | Hematúria sem hemácias (mioglobina) | Nefrotóxico |\n| Creatinina | Elevada ou em ascensão | LRA instalada |\n| K+ | Hipercalemia | Liberação intracelular |\n| Ca²+ | Hipocalcemia aguda | Precipitação nos músculos |\n| Ácido úrico | Elevado | Hiperuricemia |\n\n**Monitorizar CK a cada 6–12h até queda consistente.**" },
    { id: "conduct", title: "Hidratação e Metas", content: "## Tratamento Principal — Hidratação Agressiva\n\n**Meta:** diurese 200–300 mL/h até CK < 1000 U/L.\n\n**Fase aguda:**\n- SF 0,9% 1–1,5 L/h nas primeiras 2–4h\n- Depois: SF 0,9% 500 mL/h até meta de diurese\n\n**Alcalinização urinária (controversa mas usada):**\n- Indicada se pH urinário < 6 e CK > 5000\n- NaHCO3 50 mEq em 1L SG5% → 200 mL/h\n- Meta: pH urinário > 6,5\n- Parar se pH sanguíneo > 7,5 ou Ca²+ < 1,1 mmol/L\n\n**Furosemida:** usar SOMENTE se oligúria com hidratação adequada — não como nefroproteção.\n\n## Hipercalemia\n\n- Ver protocolo de hipercalemia se K+ > 6,0\n- Gluconato de Ca²+ 10% 10 mL IV se alteração de ECG\n\n## Hipocalcemia\n\n- NÃO repor de rotina (precipita nos músculos necróticos)\n- Repor SOMENTE se sintomática (tetania, arritmia)" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Rabdomiólise Grave (CK > 10.000)\n\n\`\`\`\nPACIENTE: _____  CK: _____  Urina: _____  K+: _____\n\n1. SF 0,9% 1000 mL IV em 1h (ataque)\n   → SF 0,9% 500 mL/h IV até DU ≥ 200 mL/h\n   → Ajustar conforme resposta\n\n2. Sonda vesical → débito urinário horário\n   META: 200–300 mL/h até CK < 1000 U/L\n\nSE pH URINÁRIO < 6 E CK > 5000:\n3. NaHCO3 50 mEq + SG5% 1L → 200 mL/h\n   Meta pH urinário > 6,5\n   Parar se pH sangue > 7,5 ou Ca2+ < 1,1\n\n4. K+ a cada 4h (hipercalemia)\n5. CK a cada 6–12h\n6. Creatinina diária\n\nSE HIPERCALEMIA > 6,5 OU ECG ALTERADO:\n→ Gluconato Ca2+ 10 mL IV + insulina + glicose\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nBosch X et al. Rhabdomyolysis and acute kidney injury. NEJM. 2009.\n\nMalinoski DJ et al. Crush injury and rhabdomyolysis. Crit Care Clin. 2004.\n\nSBN. LRA por Rabdomiólise. J Bras Nefrol. 2022." },
  ],
};

export const protocolPADIS: EmergencyProtocol = {
  id: "sedacao-analgesia-uti-padis-abcdef",
  title: "Sedação / Analgesia em UTI — Bundle PADIS / ABCDEF",
  categoryId: "other-emergencies",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["sedação","analgesia","padis","rass","cpot","propofol","midazolam","fentanil","dexmedetomidina","uti"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Sedação e Analgesia em UTI\n\n**Mudança de paradigma (PADIS 2018):** analgesia ANTES da sedação (analgesia-first). Sedação leve melhora desfechos.\n\n**Alvos:**\n| Parâmetro | Escala | Meta |\n|---|---|---|\n| Consciência | RASS | −1 a 0 (sedação leve) |\n| Dor (ventilado) | CPOT | ≤ 2 |\n| Dor (consciente) | EVA/NRS | ≤ 3 |\n| Delirium | CAM-ICU | Negativo |" },
    { id: "def", title: "Escalas — RASS e CPOT", content: "## RASS (Richmond Agitation-Sedation Scale)\n\n| Score | Nível | Descrição |\n|---|---|---|\n| +4 | Combativo | Violento, risco para equipe |\n| +3 | Muito agitado | Remove cateteres/tubos |\n| +2 | Agitado | Movimentos frequentes |\n| +1 | Ansioso | Ansioso, sem agressividade |\n| 0 | Alerta e calmo | — |\n| −1 | Sonolento | Abre olhos ao chamado |\n| −2 | Sedação leve | Abre olhos breve ao chamado |\n| −3 | Sedação moderada | Responde ao estímulo verbal |\n| −4 | Sedação profunda | Responde ao estímulo doloroso |\n| −5 | Sem resposta | — |\n\n**Meta na maioria dos pacientes: RASS −1 a 0.**" },
    { id: "conduct", title: "Protocolo PADIS", content: "## Analgesia First (antes da sedação)\n\n**Analgesia:**\n- Fentanil 25–100 mcg/h BIC (1ª linha em VM)\n- Morfina 2–5 mg IV PRN (bolus)\n- Paracetamol 1g IV 6/6h (adjuvante — opioide-sparing)\n- Cetamina 0,1–0,3 mg/kg/h (adjuvante — reduz opioide)\n\n**Sedação (somente se necessária após analgesia):**\n| Fármaco | Dose BIC | Vantagem |\n|---|---|---|\n| **Propofol 1%** | 0,5–4 mg/kg/h | Rápido, ajustável, reduz delirium |\n| **Dexmedetomidina** | 0,2–1,5 mcg/kg/h | Menos delirium, sem depressão resp |\n| Midazolam | 0,02–0,1 mg/kg/h | Maior delirium — 2ª linha |\n\n**Evitar BZD de rotina** — exceção: abstinência alcoólica, convulsão refratária." },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Sedoanalgesia em UTI\n\n\`\`\`\nPACIENTE: _____  RASS alvo: _____  CPOT: _____\n\nANALGESIA FIRST:\n1. Fentanil 500 mcg/50 mL SF 0,9% BIC (= 10 mcg/mL)\n   Iniciar 2,5 mL/h (25 mcg/h) → titular CPOT ≤ 2\n2. Paracetamol 1g IV 6/6h (opioide-sparing)\n\nSEDAÇÃO (se RASS > alvo após analgesia):\n3. Propofol 1% BIC — iniciar 5 mL/h → titular RASS −1 a 0\n   OU Dexmedetomidina 0,2 mcg/kg/h → 0,7 mcg/kg/h (preferir se delirium)\n\nSAT DIÁRIO:\n4. Suspender sedativos 1×/dia → avaliar extubação (SBT)\n\nAVALIAR 2/2h:\n5. RASS (meta −1 a 0) + CPOT (meta ≤ 2) + CAM-ICU\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nDevlin JW et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption (PADIS). Crit Care Med. 2018.\n\nBarr J et al. ICU PAD Clinical Practice Guidelines. Crit Care Med. 2013.\n\nSBET. Sedoanalgesia em UTI. Rev Bras Ter Intensiva. 2022." },
  ],
};

export const protocolSincope: EmergencyProtocol = {
  id: "sincope-estratificacao-emergencia",
  title: "Síncope — Estratificação (San Francisco / Canadian)",
  categoryId: "cardiovascular",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["síncope","perda de consciência","canadian syncope","san francisco","ecocardiograma","holter","vasovagal"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Síncope\n\nPerda transitória de consciência por hipoperfusão cerebral global, com recuperação espontânea e completa.\n\n**Causas:**\n| Causa | Frequência |\n|---|---|\n| Reflexa (vasovagal, situacional, sinus carotídeo) | 55% |\n| Ortostática | 10% |\n| Cardíaca (arritmia, estrutural) | 20% |\n| Indeterminada | 15% |\n\n**Objetivo no PS:** identificar causas de alto risco que necessitam internação." },
    { id: "def", title: "Canadian Syncope Risk Score", content: "## Canadian Syncope Risk Score\n\n| Variável | Pontos |\n|---|---|\n| Suspeita diagnóstica não vasovagal | 3 |\n| Doença cardíaca prévia | 4 |\n| SBP ≥ 180 ou ≤ 90 no PS | 2 |\n| BNP > 125 pg/mL | 5 |\n| QRS ≥ 130 ms ou BRE | 2 |\n| Elevação de troponina | 4 |\n\n**Interpretação (risco de evento adverso grave em 30 dias):**\n- −2 a 0: risco muito baixo — alta segura\n- 1–3: baixo — monitorar 2–6h, alta com seguimento\n- 4–7: médio — internação/observação\n- ≥ 8: alto — internação urgente" },
    { id: "conduct", title: "Investigação e Conduta", content: "## Avaliação Mínima (todos)\n\n1. ECG 12 derivações (ritmo, QTc, BRE, pré-excitação)\n2. Glicemia capilar\n3. Posição supina e ortostática (hipotensão ortostática)\n4. Anamnese detalhada: pródromo, contexto, medicações\n\n## Red Flags Cardíacos (internação obrigatória)\n\n- Síncope durante exercício\n- Síncope com palpitações precedentes\n- TV/FV no ECG\n- BRE/BRD novo\n- QTc > 500 ms\n- Bloqueio AV de 2º/3º grau\n- Cardiomiopatia conhecida\n\n## Alta Segura (Canadian baixo risco + achados negativos)\n\n- Orientar evitar dirigir até avaliação cardiológica\n- Medidas de hidratação e sal se vasovagal\n- Holter + ecocardiograma eletivos\n- Retorno se recorrência" },
    { id: "prescriptions", title: "Prescrições", content: "## Conduta — Síncope no PS\n\n\`\`\`\nPACIENTE: _____  Canadian: _____  ECG: _____  Troponina: _____\n\nAVALIAÇÃO:\n1. ECG 12 derivações + ECG monitorado\n2. Glicemia capilar\n3. Troponina + BNP se cardiopatia ou ECG alterado\n4. Teste ortostático (PA deitado + 1min + 3min em pé)\n\nSE CANADIAN ≥ 4 OU RED FLAG:\n5. Internação + monitoração ECG contínua 12–24h\n6. Ecocardiograma urgente\n7. Avaliação cardiológica\n\nSE CANADIAN ≤ 0 E HISTÓRIA VASOVAGAL TÍPICA:\n8. Alta + orientações:\n   - Hidratação 2L/dia\n   - Sal adicional na dieta (se sem HAS)\n   - Manobras de contrapressão (apertar mãos, cruzar pernas)\n   - Seguimento ambulatorial\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nZhang J et al. Canadian Syncope Risk Score. CMAJ. 2016.\n\nShin M et al. San Francisco Syncope Rule. Ann Emerg Med. 2004.\n\nBrignole M et al. ESC 2018 Guidelines for Syncope. Eur Heart J. 2018.\n\nSBC. Diretriz de Síncope. Arq Bras Cardiol. 2023." },
  ],
};

export const protocolGuillainBarre: EmergencyProtocol = {
  id: "guillain-barre-emergencia-ventilacao",
  title: "Síndrome de Guillain-Barré — Emergência e VM",
  categoryId: "neurological",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["guillain-barré","gbss","polirradiculoneuropatia","paralisia ascendente","ivig","plasmaférese","insuficiência respiratória"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Síndrome de Guillain-Barré (GBS)\n\nPolirradiculoneuropatia inflamatória aguda desmielinizante. Causa mais comum de paralisia flácida aguda no mundo.\n\n**Subtipo mais comum:** AIDP (desmielinizante) — 90% nos países ocidentais.\n\n**Progressão:** déficit motor ascendente, semanas 1–4 (platô), então melhora progressiva.\n\n**25% necessitam de VM** (monitorar função respiratória.)\n\n**Precede um gatilho em 70%:** Campylobacter jejuni, CMV, EBV, COVID-19, vacinas (raro)." },
    { id: "screening", title: "Diagnóstico e Monitoramento Respiratório", content: "## Critérios de Brighton\n\n1. Fraqueza bilateral flácida de membros\n2. Hiporredução ou ausência de reflexos nos membros afetados\n3. Curso monofásico, nadir 12h–28 dias\n4. Dissociação albuminocitológica no LCR (proteína alta, células normais)\n5. Eletroneuromiografia compatível\n\n## Regra 20-30-40 (IOT)\n\n| Parâmetro | Threshold |\n|---|---|\n| CVF | < 20 mL/kg → IOT iminente |\n| Pressão inspiratória máx | < 30 cmH2O |\n| Pressão expiratória máx | < 40 cmH2O |\n\nMonitorar CVF a cada 2–4h. IOT eletiva antes da falência é melhor que IOT de urgência." },
    { id: "conduct", title: "Imunoterapia e Suporte", content: "## Imunoterapia (equivalentes — escolher uma)\n\n**IVIG (preferida na prática):**\n0,4 g/kg IV/dia × 5 dias\n\n**Plasmaférese:**\n5 sessões em 10 dias (250 mL/kg total)\n\n**Contraindicações:**\n- Ambas após 4 semanas do início — sem benefício\n- Corticoide: NÃO indicado (piora desfecho)\n\n## Cuidados de Suporte\n\n- Monitorar disfagia (risco de broncoaspiração)\n- ECG contínuo (disautonomia: bradicardia, taquicardia, hipertensão paroxística)\n- TVP: enoxaparina + compressão pneumática\n- Dor neuropática: gabapentina 300–900 mg 8/8h\n- Fisioterapia motora precoce\n\n## Disautonomia (Complicação Grave)\n\n- Bradicardia: atropina\n- Taquicardia: evitar agentes de longa ação (volatilidade)\n- HAS: tratar breve se sintomática (nicardipina)" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — GBS com Risco Respiratório\n\n\`\`\`\nPACIENTE: _____  CVF: _____ mL/kg  PI: _____ cmH2O\n\nMONITOR RESPIRATÓRIO:\n1. CVF + PI máx a cada 4h\n   SE CVF < 20 mL/kg ou PI < 30: IOT eletiva imediata\n\nIMUNOTERAPIA (iniciar se < 4 semanas do início):\n2. IVIG 0,4 g/kg IV/dia × 5 dias (= _____ g/dia)\n   Diluir em SG5%, infundir em 3–4h\n   OU Plasmaférese: acionar UTI neuro\n\nSUPORTE:\n3. Enoxaparina 40 mg SC 1×/dia + compressão pneumática\n4. ECG contínuo (disautonomia)\n5. SNG se disfagia (FEES ou teste de deglutição antes)\n6. Gabapentina 300 mg VO 8/8h (dor neuropática)\n\nFISIOTERAPIA MOTORA: iniciar assim que estável\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nVan den Berg B et al. Guillain-Barre syndrome: pathogenesis, diagnosis, treatment, and prognosis. Nat Rev Neurol. 2014.\n\nHughes RA et al. Immunotherapy for Guillain-Barre syndrome (Cochrane Review). Cochrane Database Syst Rev. 2014.\n\nABN. Consenso de GBS. Arq Neuropsiquiatr. 2022." },
  ],
};

export const protocolTetano: EmergencyProtocol = {
  id: "tetano-acidental-profilaxia-tratamento",
  title: "Tétano Acidental — Profilaxia e Tratamento",
  categoryId: "infectious",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["tétano","clostridium tetani","metronidazol","diazepam","tetanus","imunoglobulina antitetânica","toxóide"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Tétano\n\nDoença infecciosa aguda causada pela toxina de Clostridium tetani. Mortalidade 10–80% (sem UTI: > 50%).\n\n**Notificação compulsória.**\n\n**Formas clínicas:**\n| Forma | Características |\n|---|---|\n| Generalizado | Trismo, opistótono, espasmos generalizados — mais comum |\n| Localizado | Espasmos regionais ao foco |\n| Cefálico | Associado à lesão de face/cabeça |\n| Neonatal | Coto umbilical — gravíssimo |\n\n**Escala de Ablett — Gravidade:**\n- I: leve (trismo, sem disfagia)\n- II: moderado (disfagia leve, espasmos)\n- III: grave (espasmos generalizados, apneia)\n- IV: muito grave (instabilidade autonômica)" },
    { id: "conduct", title: "Tratamento — 4 Pilares", content: "## 1. Neutralização da Toxina\n\nImunoglobulina humana antitetânica (IGHAT) 3000–6000 UI IM (dose única)\nInfiltrar ao redor da ferida parte da dose\n\n## 2. Antibiótico\n\nMetronidazol 500 mg IV 8/8h × 7–10 dias (elimina Clostridium)\nAlternativa: Penicilina G 1,5 mi UI IV 6/6h × 10 dias\n\n## 3. Controle dos Espasmos\n\nDiazepam 5–10 mg IV a cada 1–4h (titular por espasmos)\nMidazolam BIC 0,1–0,3 mg/kg/h (alternativa)\nSe refratário: bloqueio neuromuscular + VM\n\n## 4. Desbridamento da Ferida\n\nApós administração da IGHAT — remover tecido necrótico e corpo estranho\n\n## Suporte\n\n- UTI para todos os casos graves (Ablett III-IV)\n- IOT precoce se espasmos laríngeos ou apneia\n- Ambiente escuro e silencioso (minimizar estímulos)\n- Controle autonômico: esmolol + morfina se instabilidade\n\n## Profilaxia Pós-Exposição\n\n| Vacinação | Ferida limpa | Ferida suja |\n|---|---|---|\n| Completa (< 5 anos) | Nada | Nada |\n| Incompleta / desconhecida | Toxóide DTP/dT | Toxóide + IGHAT |\n| Não vacinado | Toxóide | Toxóide + IGHAT |" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — Tétano Grave (Ablett III)\n\n\`\`\`\nPACIENTE: _____  Ablett: _____  Vacinação: _____\n\n1. IGHAT 3000 UI IM (dose única — PRIMEIRO)\n   → Infiltrar 500 UI ao redor da ferida\n2. Metronidazol 500 mg IV 8/8h × 10 dias\n3. Diazepam 10 mg IV → repetir 5–10 mg IV a cada 1–4h\n   (titular para controle dos espasmos)\n   OU Midazolam BIC 0,1 mg/kg/h → titular\n4. Ambiente escuro, silencioso\n5. Desbridamento cirúrgico após IGHAT\n6. IOT SE espasmo laríngeo ou apneia\n7. Esmolol BIC SE instabilidade autonômica (FC > 120)\nNOTIFICAR SINAN\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nMS/SVS. Manual de Vigilância Epidemiológica do Tétano. Brasília: MS; 2019.\n\nCDC. Preventing Tetanus, Diphtheria, and Pertussis. MMWR. 2023.\n\nTrueba G et al. Tetanus: diagnosis, treatment and prevention. J Med Microbiol. 2022." },
  ],
};

export const protocolTPP: EmergencyProtocol = {
  id: "trabalho-parto-prematuro-tocoliticos-ccs",
  title: "Trabalho de Parto Prematuro — Tocolíticos e Corticoide",
  categoryId: "obstetrics",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["parto prematuro","tocolítico","nifedipina","corticoide","betametasona","surfactante","prematuri"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Trabalho de Parto Prematuro (TPP)\n\nParto entre 20–36+6 semanas. Principal causa de mortalidade e morbidade neonatal.\n\n**Diagnóstico:** contrações regulares (≥ 4 em 20 min) + modificação cervical (dilatação ≥ 2 cm ou apagamento ≥ 80%)\n\n**Objetivos do manejo:**\n1. Prolongar a gestação (tocolítico)\n2. Maturidade pulmonar fetal (corticoide)\n3. Neuroproteção (sulfato de Mg < 34 semanas)" },
    { id: "conduct", title: "Conduta — Tocolítico e CCS", content: "## Corticoide para Maturidade Pulmonar (CCS)\n\n**Indicar entre 24–34+6 semanas:**\nBetametasona 12 mg IM → repetir em 24h (2 doses totais)\n\n**Indicar entre 34–36+6 semanas (tardio):**\nBetametasona 12 mg IM × 2 doses (benefício marginal — avaliar caso a caso)\n\n## Tocolítico (ganhar 48h para CCS completo)\n\n**1ª linha — Nifedipina:**\n- Ataque: 10 mg VO a cada 20 min × 3 doses\n- Manutenção: 20 mg VO 8/8h até 34 semanas\n- Contraindicações: hipotensão, cardiopatia\n\n**Alternativa — Atosibana:**\n- 6,75 mg IV bolus → 18 mg/h × 3h → 6 mg/h × 45h\n- Mais cara, menos efeitos colaterais\n\n## Neuroproteção Fetal (< 34 semanas)\n\n**Sulfato de Mg:**\n- 4g IV em 20 min (ataque) → 1g/h BIC (manutenção)\n- Reduz paralisia cerebral em prematuros extremos\n- Monitorar: frequência respiratória, reflexos, diurese\n- Antídoto: gluconato de Ca 10% 1g IV\n\n## Antibiótico\n\n- NÃO profilático no TPP com membranas íntegras\n- Indicar se corioamnionite ou RPMO" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — TPP 28–34 semanas\n\n\`\`\`\nPACIENTE: _____  IG: _____ semanas  Dilatação: _____  Membranas: _____\n\nCORTICOIDE (imediato):\n1. Betametasona 12 mg IM agora → repetir em 24h\n\nTOCOLÍTICO (ganhar 48h):\n2. Nifedipina 10 mg VO → 10 mg VO 20/20min × 2 doses mais\n   Manutenção: 20 mg VO 8/8h (até 34 semanas)\n\nNEUROPROTEÇÃO (< 34 semanas):\n3. MgSO4 50% 8 mL (4g) IV em 20 min\n   → MgSO4 50% 2 mL/h = 1g/h BIC\n   Monitorar: FR > 16 ipm, reflexo patelar, DU > 25 mL/h\n   ANTÍDOTO à beira do leito: gluconato Ca 1g IV\n\nMONITORIZAÇÃO:\n4. CTG + dinâmica uterina contínua\n5. PA 30/30min\n6. Acionar neonatologia / UTIN\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nFEBRASGO. Diretriz de Trabalho de Parto Prematuro. 2022.\n\nROMEO. Randomised Opioids for Myocardial pain in the Emergency setting. 2023.\n\nWHO recommendations on interventions to improve preterm birth outcomes. 2015.\n\nCrowther CA et al. Magnesium sulphate for fetal neuroprotection (Cochrane). 2017." },
  ],
};

export const protocolVNI: EmergencyProtocol = {
  id: "vni-bipap-cpap-indicacoes-emergencia",
  title: "Ventilação Não Invasiva (BiPAP/CPAP) — Indicações",
  categoryId: "respiratory",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["vni","bipap","cpap","ventilação não invasiva","insuficiência respiratória","dpoc","eap","hipoxêmica"],
  sections: [
    { id: "intro", title: "Introdução", content: "## Ventilação Não Invasiva (VNI)\n\nReduz mortalidade, intubação e complicações quando indicada corretamente.\n\n**Modalidades:**\n| Modalidade | Parâmetros | Melhor para |\n|---|---|---|\n| **CPAP** | 1 nível de pressão (5–15 cmH2O) | EAP, hipóxia pura |\n| **BiPAP** | IPAP + EPAP | DPOC, hipercapnia, desmame |" },
    { id: "def", title: "Indicações por Evidência", content: "## Indicações com Forte Evidência (reduz IOT e mortalidade)\n\n| Condição | Modo | Parâmetros iniciais |\n|---|---|---|\n| **DPOC exacerbado** | BiPAP | IPAP 12–14 / EPAP 4–6 |\n| **EAP cardiogênico** | CPAP | 7,5–10 cmH2O FiO2 60% |\n| **Imunocomprometido hipóxico** | BiPAP/CPAP | IPAP 12 / EPAP 5 FiO2 100% |\n\n## Indicações com Evidência Moderada\n\n- Desmame pós-extubação (DPOC)\n- Pós-extubação de alto risco (profilático)\n- Insuficiência respiratória hipoxêmica não COVID\n- Obesidade-hipoventilação\n\n## Contraindicações\n\n| Contraindicação | Motivo |\n|---|---|\n| PCR / instabilidade extrema | VNI atrasa IOT |\n| GCS ≤ 8 | Risco de broncoaspiração |\n| Sangramento GI ativo | Vômito com máscara |\n| Pneumotórax não drenado | Barotrauma |\n| Incapacidade de ajuste da máscara | Trauma facial grave |" },
    { id: "conduct", title: "Protocolo de VNI", content: "## Configuração Inicial\n\n**BiPAP (DPOC):**\n- IPAP 12–14 cmH2O → aumentar 2 cmH2O a cada 30 min se necessário (máx 20)\n- EPAP 4–6 cmH2O\n- FR backup 12 ipm\n- FiO2 titular SpO2 88–92% (DPOC) ou ≥ 94% (outros)\n\n**CPAP (EAP):**\n- Iniciar 5–7 cmH2O → aumentar 2 cmH2O a cada 10 min\n- FiO2 60% → titular SpO2 ≥ 94%\n\n## Monitoramento e Falha\n\n**Resposta favorável (30–120 min):**\n- FR < 25, SpO2 ≥ 88%, pH > 7,25, cooperação\n\n**Falha da VNI → IOT imediata:**\n- Deterioração neurológica\n- SpO2 < 85% apesar de FiO2 100%\n- pH < 7,20 progressivo\n- FR > 35 sem melhora\n- Secreção não gerenciável\n- Apneia" },
    { id: "prescriptions", title: "Prescrições", content: "## Prescrição — VNI para DPOC Exacerbado\n\n\`\`\`\nPACIENTE: _____  pH: _____  PaCO2: _____  SpO2: _____\n\nCRITÉRIOS PARA VNI:\n□ FR > 25 ipm\n□ pH < 7,35 ou PaCO2 > 45 com piora\n□ Dispneia intensa com uso de musculatura acessória\n\nBiPAP:\n1. IPAP 12 cmH2O / EPAP 5 cmH2O\n   → FiO2 titular SpO2 88–92%\n   → Aumentar IPAP 2 cmH2O cada 30 min se FR > 25\n   → IPAP máximo: 20 cmH2O\n2. FR backup: 12 ipm\n3. Interface: máscara facial completa (preferida no início)\n\nMONITOR 30/30 min:\n4. FR, SpO2, nível de consciência\n   Gasometria 1–2h após início\n   SE sem melhora em 2h → IOT\n\`\`\`" },
    { id: "references", title: "Referências", content: "## Referências\n\nRochwerg B et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.\n\nMasip J et al. Noninvasive ventilation in acute cardiogenic pulmonary edema. JAMA. 2005.\n\nSBPT. Diretrizes de VNI. J Bras Pneumol. 2022." },
  ],
};

export const protocolAVCPediatrico: EmergencyProtocol = {
  id: "avc-pediatrico-emergencia",
  title: "AVC Pediátrico — Isquêmico e Hemorrágico",
  categoryId: "pediatric-emergency",
  version: "1.0",
  lastReviewed: "2026-05",
  tags: ["avc pediátrico","avci pediátrico","avc isquêmico criança","doença falciforme","dissecção","stroke pediátrico"],
  sections: [
    { id: "intro", title: "Introdução", content: "## AVC Pediátrico\n\nRaro mas devastador. Incidência: 3–13/100.000/ano. Causa de mortalidade e morbidade neurológica significativa.\n\n**Causas específicas em crianças:**\n| Causa | Frequência |\n|---|---|\n| Cardioembólico (cardiopatia congênita) | 30% |\n| Doença falciforme | 15% |\n| Arteriopatia (dissecção, vasculite, Moyamoya) | 25% |\n| Trombofilia | 10% |\n| Desconhecida | 20% |\n\n> ⚠️ Avaliação neurológica e de neuroimagem urgentes. AHA/ASA Pediatric Stroke Guidelines 2019." },
    { id: "conduct", title: "Conduta Diagnóstica e Terapêutica", content: "## Neuroimagem\n\n- RM com DWI é o padrão-ouro (mais sensível que TC em crianças)\n- TC sem contraste: disponível 24h, útil para excluir hemorragia\n- Angio-RM ou angio-TC: avaliação vascular\n\n## Trombólise IV (alteplase) em Crianças\n\n- NÃO aprovada formalmente para < 18 anos (uso off-label, muito limitado)\n- Considerar apenas em > 2 anos com NIHSS alto, sem contra-indicação, dentro de 4,5h\n- Decisão especializada (neurologia pediátrica/neurologia vascular)\n\n## Trombectomia Mecânica\n\n- Pode ser considerada em crianças maiores com LVO confirmada\n- Evidência crescente mas limitada\n- Decisão em centro especializado\n\n## Cuidados Gerais\n\n- AAS 1–5 mg/kg/dia (máx 100 mg) — antiplaquetário\n- Doença falciforme + AVCi: exsanguineotransfusão urgente (meta HbS < 30%)\n- Monitorar e corrigir: glicemia, temperatura, PA\n- Não tratar HAS de forma agressiva (exceto > 99th percentil + órgão-alvo)" },
    { id: "references", title: "Referências", content: "## Referências\n\nTorres NE et al. AHA/ASA Scientific Statement: Current Status of Pediatric Stroke. Stroke. 2019.\n\nFullerton HJ et al. Risk of Recurrent Childhood Arterial Ischemic Stroke in a Population-Based Cohort. Stroke. 2007.\n\nSBP. Neurologia Pediátrica — AVC. 2023." },
  ],
};
