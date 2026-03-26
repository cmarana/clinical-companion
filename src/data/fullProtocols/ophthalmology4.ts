import type { FullProtocol } from "./types";

export const ophthalmologyFullProtocols4: FullProtocol[] = [
  {
    id: "fp-trauma-ocular",
    title: "Trauma Ocular na Emergência",
    categoryId: "ophthalmology",
    category: "Oftalmologia de Emergência",
    tags: ["trauma", "ocular", "perfurante", "contuso", "globo aberto"],
    sections: [
      { id: "intro", title: "Introdução", content: "O trauma ocular é uma das principais causas de cegueira monocular evitável. Pode variar de abrasão corneana simples a rotura de globo ocular. O reconhecimento precoce e manejo adequado na emergência são cruciais para preservar a visão. Diretriz CBO e AAO." },
      { id: "def", title: "Definição", content: "Classificação (BETT — Birmingham Eye Trauma Terminology): Globo fechado: contusão, laceração lamelar. Globo aberto: rotura (por contusão), penetrante (objeto perfurante), perfurante (transfixante), corpo estranho intraocular (CEIO). OTS (Ocular Trauma Score): preditor de prognóstico visual." },
      { id: "screening", title: "Rastreamento e Identificação", content: "História: mecanismo (contuso, perfurante, químico, projétil), uso de proteção ocular, tempo. Sinais de globo aberto: pupila irregular, câmara anterior rasa, herniação de tecido uveal, hipotonia, seidel positivo (vazamento de humor aquoso com fluoresceína)." },
      { id: "etiology", title: "Etiologia", content: "Trauma contuso (soco, bola, airbag), perfurante (metal, vidro, madeira), corpo estranho (limalha metálica — esmeril), queimadura química, explosão. Ocupacional: trabalhadores sem proteção ocular." },
      { id: "clinical", title: "Apresentação Clínica", content: "Dor ocular, baixa acuidade visual, hiperemia, lacrimejamento, edema palpebral, hemorragia subconjuntival. Sinais de gravidade: deformidade pupilar, hifema (sangue na câmara anterior), proptose, limitação de motilidade (fratura de órbita), perda de visão." },
      { id: "diagnosis", title: "Diagnóstico", content: "Acuidade visual (SEMPRE medir — valor prognóstico e médico-legal). Biomicroscopia com fluoresceína (abrasão, seidel). Fundoscopia (se possível). TC de órbita sem contraste (fratura, CEIO — NUNCA RM se suspeita de CEIO metálico). Pressão intraocular (NÃO medir se suspeita de globo aberto)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Glaucoma agudo, uveíte anterior, ceratite infecciosa, corpo estranho superficial vs intraocular, fratura de órbita vs hematoma periorbitário simples." },
      { id: "conduct", title: "Conduta Inicial", content: "Globo aberto: 1. NÃO comprimir o olho; 2. Proteção com escudo rígido (copo protetor); 3. NÃO remover corpo estranho encravado; 4. ATB sistêmico (Ceftriaxona 1g EV); 5. Antitetânica; 6. Antiemético (evitar Valsalva); 7. Encaminhar oftalmologia URGENTE. Globo fechado: avaliar gravidade, tratar dor, encaminhar se necessário." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Abrasão corneana: colírio antibiótico (Ciprofloxacino 0,3% 6/6h por 5-7 dias) + analgesia + NÃO usar tampão. Corpo estranho superficial: remoção com agulha 25G sob biomicroscopia (oftalmologista). Hifema: repouso, cabeceira 30°, colírio cicloplégico, controle de PIO. Globo aberto: cirurgia (oftalmologista). Fratura de órbita: gelo, analgesia, avaliação cirúrgica se encarceramento muscular." },
      { id: "prescriptions", title: "Prescrições", content: "Abrasão: 1. Ciprofloxacino colírio 0,3% — 1 gota 6/6h por 7 dias; 2. Dipirona 1g VO 6/6h. Globo aberto: 1. Escudo ocular rígido; 2. Ceftriaxona 1g EV 12/12h; 3. Vancomicina 1g EV 12/12h (se CEIO/solo); 4. Ondansetrona 4mg EV (antiemético); 5. Vacina antitetânica; 6. Dipirona 1g EV 6/6h. Hifema: 1. Atropina 1% colírio 8/8h; 2. Prednisolona 1% colírio 6/6h; 3. Repouso com cabeceira elevada." },
      { id: "followup", title: "Acompanhamento", content: "Oftalmologia em 24h para abrasão. Cirurgia em <24h para globo aberto. Acompanhamento semanal para hifema. TC controle para fraturas. Avaliação de acuidade visual seriada." },
      { id: "complications", title: "Complicações", content: "Endoftalmite (infecção intraocular — emergência), glaucoma pós-traumático, catarata traumática, descolamento de retina, siderosis bulbi (CEIO metálico), perda visual permanente, enucleação, oftalmia simpática (rara)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: abrasão simples, corpo estranho superficial removido. Internação: globo aberto (cirurgia), hifema significativo, CEIO, endoftalmite. UTI: politrauma associado." },
      { id: "references", title: "Referências Bibliográficas", content: "CBO — Urgências em Oftalmologia. AAO — Eye Trauma. Kuhn F et al. Ophthalmology 2004 (BETT classification). Pieramici DJ et al. Ophthalmology 2003 (OTS)." }
    ]
  }
];
