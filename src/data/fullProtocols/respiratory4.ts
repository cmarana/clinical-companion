import type { FullProtocol } from "./types";

export const respiratoryFullProtocols4: FullProtocol[] = [
  {
    id: "fp-derrame-pleural",
    title: "Derrame Pleural",
    categoryId: "respiratory",
    category: "Respiratório",
    tags: ["derrame pleural", "toracocentese", "exsudato", "transudato", "Light"],
    sections: [
      { id: "intro", title: "Introdução", content: "O derrame pleural é o acúmulo patológico de líquido no espaço pleural. Pode ser transudato (causas sistêmicas) ou exsudato (causas inflamatórias/infecciosas). A diferenciação segue os critérios de Light. A toracocentese é diagnóstica e terapêutica." },
      { id: "def", title: "Definição", content: "**Transudato:** desequilíbrio de pressões (hidrostática ou oncótica). Causas: IC, cirrose, síndrome nefrótica.\n**Exsudato:** inflamação/infecção pleural. Causas: pneumonia (parapneumônico), TB, câncer, TEP.\n\n**Critérios de Light (exsudato se ≥ 1):**\n• Proteína líquido/sérica > 0,5\n• LDH líquido/sérica > 0,6\n• LDH líquido > 2/3 limite superior sérico" },
      { id: "screening", title: "Rastreamento e Identificação", content: "• RX tórax PA e perfil: obliteração do seio costofrênico (> 200mL)\n• USG de tórax: sensibilidade > 90%, guia punção\n• TC de tórax: caracterização, septações, massas\n• Derrames > 10mm na USG → puncionáveis" },
      { id: "etiology", title: "Etiologia", content: "**Transudato:** IC (mais comum), cirrose, síndrome nefrótica, diálise, mixedema\n**Exsudato:** Pneumonia/parapneumônico, TB pleural, neoplasia, TEP, artrite reumatoide, LES, pancreatite, quilotórax, hemotórax" },
      { id: "clinical", title: "Apresentação Clínica", content: "• Dispneia progressiva\n• Dor torácica pleurítica (exsudato)\n• Tosse seca\n• Murmúrio vesicular diminuído/abolido\n• Macicez à percussão\n• Redução do frêmito toracovocal\n• Egofonia na transição\n• Derrames volumosos: desvio de traqueia contralateral" },
      { id: "diagnosis", title: "Diagnóstico", content: "**Toracocentese diagnóstica — análise do líquido:**\n• Aspecto (citrino, turvo, hemático, purulento, leitoso)\n• Bioquímica: proteínas, LDH, glicose, pH\n• Citologia: celularidade total e diferencial\n• Bacterioscopia + cultura\n• ADA (adenosina deaminase) > 40 → TB\n• Citologia oncótica\n• Triglicérides (quilotórax se > 110mg/dL)\n\n**Derrame complicado/empiema:**\n• pH < 7,2 OU glicose < 60 OU bacterioscopia/cultura positiva OU pus → drenagem" },
      { id: "differential", title: "Diagnóstico Diferencial", content: "• Atelectasia (pode mimetizar)\n• Consolidação pulmonar\n• Massa pleural/diafragmática\n• Elevação diafragmática\n• Derrame pericárdico (confusão em RX)" },
      { id: "conduct", title: "Conduta Inicial", content: "1. RX tórax + USG de tórax\n2. Se derrame significativo: toracocentese diagnóstica guiada por USG\n3. Aplicar critérios de Light\n4. Se transudato: tratar causa base (diurético, IC)\n5. Se exsudato: investigar causa (TB, câncer, infecção)\n6. Se complicado/empiema: drenagem torácica em selo d'água\n7. Se volumoso com desconforto: toracocentese de alívio (máx 1-1,5L por sessão)" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "**Transudato:** tratar causa base (diurético, restrição hídrica, paracentese se ascite)\n**Parapneumônico simples:** ATB apenas (sem necessidade de drenagem)\n**Parapneumônico complicado/empiema:** drenagem + ATB IV\n**TB pleural:** esquema RIPE (6 meses)\n**Neoplásico:** pleurodese se recorrente (talco via dreno ou toracoscopia)\n**Hemotórax:** drenagem torácica em selo d'água (dreno 28-32Fr)" },
      { id: "prescriptions", title: "Prescrições", content: "**Derrame parapneumônico complicado:**\n1. Drenagem torácica em selo d'água (posição guiada por USG)\n2. Ceftriaxona 2g IV 1x/dia + Clindamicina 600mg IV 8/8h (cobertura anaeróbio)\n3. Analgesia: Dipirona 1g IV 6/6h + Tramadol 100mg IV 8/8h SN\n4. Controle radiológico diário\n5. Fisioterapia respiratória\n6. Retirar dreno quando débito < 100mL/24h e líquido claro" },
      { id: "followup", title: "Acompanhamento", content: "• Controle radiológico após drenagem\n• Se septado/loculado: considerar fibrinolítico intrapleural (Alteplase + DNase) ou videotoracoscopia\n• RX controle ambulatorial em 4-6 semanas\n• Se neoplásico recorrente: pleurodese\n• Se TB: acompanhamento com RIPE por 6 meses" },
      { id: "complications", title: "Complicações", content: "• Pneumotórax iatrogênico (pós-toracocentese)\n• Edema de reexpansão (drenagem rápida > 1,5L)\n• Empiema\n• Septação e encarceramento pulmonar\n• Fístula broncopleural\n• Hemotórax (lesão intercostal)" },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "**Internação:** empiema, derrame grande com dispneia, necessidade de drenagem, investigação etiológica\n**UTI:** insuficiência respiratória, sepse associada\n**Alta:** derrame pequeno estável, causa identificada e tratável ambulatorialmente" },
      { id: "references", title: "Referências Bibliográficas", content: "• BTS: Guidelines for Investigation of Pleural Effusion (2010/2023)\n• SBPT: Derrame Pleural — Diretrizes (2021)\n• Light RW: Pleural Diseases, 7th ed (2022)\n• Rahman NM et al. MIST2 Trial. NEJM 2011" },
    ],
  },
];
