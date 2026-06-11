// Mocks PT-BR para a demonstração de estande. Conteúdo realista, sem chamadas reais.

export const searchResults = [
  {
    id: "sepse-ssc-2026",
    title: "Protocolo Sepse — SSC 2026",
    subtitle: "Bundle da 1ª hora · qSOFA · Antibiótico empírico",
    badge: "Protocolo",
  },
  { id: "qsofa", title: "Calculadora qSOFA", subtitle: "Triagem rápida de sepse à beira-leito", badge: "Calculadora" },
  { id: "ssc-pediatrica", title: "Sepse Pediátrica — SBP 2025", subtitle: "Choque séptico em crianças", badge: "Protocolo" },
  { id: "noradrenalina", title: "Noradrenalina — Diluição e titulação", subtitle: "Bulário PULSO", badge: "Medicação" },
];

export const sepseProtocol = {
  title: "Sepse e Choque Séptico — Surviving Sepsis Campaign 2026",
  meta: ["Adulto", "Emergência", "Atualizado em mar/2026", "Referência: SSC/IDSA"],
  sections: [
    {
      heading: "Definição",
      body:
        "Disfunção orgânica ameaçadora à vida causada por resposta desregulada do hospedeiro à infecção. Choque séptico = sepse + necessidade de vasopressor para manter PAM ≥65 mmHg + lactato >2 mmol/L após ressuscitação.",
    },
    {
      heading: "Critérios diagnósticos (qSOFA ≥2)",
      bullets: [
        "Frequência respiratória ≥22 ipm",
        "Alteração do nível de consciência (Glasgow <15)",
        "Pressão arterial sistólica ≤100 mmHg",
      ],
    },
    {
      heading: "Bundle da 1ª hora",
      bullets: [
        "Lactato sérico — repetir em 2h se >2 mmol/L",
        "Hemoculturas antes do antibiótico (2 pares)",
        "Antibiótico de amplo espectro EV ≤1h",
        "Cristaloide 30 mL/kg em 3h se hipotensão ou lactato ≥4",
        "Vasopressor (noradrenalina) se PAM <65 após volume",
      ],
    },
    {
      heading: "Antibiótico empírico",
      body:
        "Foco indefinido: piperacilina-tazobactam 4,5 g EV 6/6h. Suspeita de MRSA: associar vancomicina 25–30 mg/kg ataque, depois 15–20 mg/kg 8–12/12h.",
    },
  ],
};

export const claraConversation = {
  question: "Dose de noradrenalina para choque séptico, paciente 70kg?",
  answer: [
    "**Noradrenalina — choque séptico (adulto 70 kg)**",
    "",
    "**Diluição padrão:** 4 ampolas (16 mg) em 234 mL de SG 5% = 64 mcg/mL (concentração de 250 mL).",
    "",
    "**Dose inicial:** 0,05 mcg/kg/min — em paciente de 70 kg ≈ 3,5 mcg/min ≈ **3,3 mL/h** em BIC.",
    "",
    "**Titulação:** ajustar a cada 5 min até PAM ≥65 mmHg. Faixa usual: **0,05 – 1,0 mcg/kg/min** (até 2,0 em refratário).",
    "",
    "**Via:** preferir acesso central. Em via periférica, calibre adequado e tempo limitado (até 6h), com vigilância de extravasamento.",
    "",
    "**Referência:** SSC 2026; Diretriz AMIB de sepse 2024.",
  ].join("\n"),
};

export const epidemicAlerts = [
  { region: "Sudeste", level: "amarelo", title: "Dengue", detail: "Aumento de 38% em 4 semanas" },
  { region: "Norte", level: "vermelho", title: "Malária", detail: "Surto em municípios do AM" },
  { region: "Nordeste", level: "amarelo", title: "Chikungunya", detail: "Casos acima da média histórica" },
  { region: "Sul", level: "verde", title: "Influenza", detail: "Cobertura vacinal estável" },
  { region: "Centro-Oeste", level: "amarelo", title: "Febre Amarela", detail: "Alerta sazonal ativo" },
];
