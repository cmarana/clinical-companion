import type { FullProtocol } from "./types";

export const respiratoryFullProtocols5: FullProtocol[] = [
  {
    id: "fp-ventilacao-mecanica",
    title: "Ventilação Mecânica — Ajustes Iniciais",
    categoryId: "respiratory",
    category: "Respiratório",
    tags: ["ventilação mecânica", "vm", "respirador", "parâmetros", "modalidades"],
    sections: [
      { id: "intro", title: "Introdução", content: "A ventilação mecânica invasiva (VMI) é uma das intervenções mais frequentes na emergência e UTI. O ajuste inicial adequado é fundamental para evitar lesão pulmonar induzida pelo ventilador (VILI). Diretrizes AMIB e SBPT 2013." },
      { id: "def", title: "Definição", content: "Suporte ventilatório através de prótese traqueal (TOT ou TQT) conectada a ventilador mecânico. Modalidades básicas: VCV (Volume Controlado), PCV (Pressão Controlada), PSV (Pressão de Suporte). Conceitos: Volume Corrente (VC), PEEP, FiO2, FR, relação I:E." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Indicações de IOT + VM: IRpA refratária a VNI, rebaixamento de consciência (Glasgow ≤8), parada respiratória, fadiga muscular respiratória, proteção de via aérea, pós-PCR. Avaliar se VNI pode ser tentada antes." },
      { id: "etiology", title: "Etiologia", content: "Causas que levam à VM: IRpA hipoxêmica (pneumonia, SDRA, EAP), IRpA hipercápnica (DPOC, asma grave), neurológica (AVC, TCE), pós-operatório, trauma torácico, choque grave, PCR." },
      { id: "clinical", title: "Apresentação Clínica", content: "Paciente intubado necessitando ajustes iniciais. Avaliar: oxigenação (SpO2, PaO2), ventilação (PaCO2, EtCO2), mecânica respiratória (pressão de pico, pressão de platô, complacência), sincronia paciente-ventilador." },
      { id: "diagnosis", title: "Diagnóstico", content: "Gasometria arterial 30min após IOT e após cada ajuste significativo. Rx tórax (posição do TOT — 2-4cm acima da carina). Monitorização contínua: SpO2, EtCO2, curvas do ventilador. Pressão de platô <30 cmH2O (meta protetora)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Causas de hipoxemia refratária: SDRA, pneumotórax (excluir sempre), atelectasia, TEP, shunt. Causas de auto-PEEP: DPOC, asma (hiperinsuflação). Causas de pressão elevada: broncoespasmo, secreção, pneumotórax, assincronia." },
      { id: "conduct", title: "Conduta Inicial", content: "Parâmetros iniciais padrão (estratégia protetora): VC 6-8 mL/kg de peso predito; PEEP 5-8 cmH2O (titular conforme tabela PEEP/FiO2); FiO2 100% inicialmente → desmamar para SpO2 92-96%; FR 12-16 irpm; Relação I:E 1:2; Modo VCV ou PCV." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Peso predito: Homem = 50 + 0,91 × (altura cm − 152,4); Mulher = 45,5 + 0,91 × (altura cm − 152,4). SDRA: VC 6 mL/kg, PEEP alta (tabela ARDSNet), FiO2 para SpO2 88-95%, Pplatô <30. DPOC/Asma: VC 6-8, FR baixa (8-12), tempo expiratório longo (I:E 1:3-4), PEEP ≤ auto-PEEP. Neuroproteção (TCE): PaCO2 35-40, evitar hipóxia." },
      { id: "prescriptions", title: "Prescrições", content: "1. VM modo VCV: VC 450mL (6-8 mL/kg PP), FR 14, PEEP 5, FiO2 100% → titular; 2. Sedação: Midazolam 0,1-0,2 mg/kg/h + Fentanil 1-3 mcg/kg/h EV contínuo; 3. Cabeceira elevada 30-45°; 4. Profilaxia TVP: Enoxaparina 40mg SC 1x/dia; 5. Profilaxia úlcera: Omeprazol 40mg EV 1x/dia; 6. Higiene oral com Clorexidina 0,12% 12/12h; 7. Gasometria arterial 30min após IOT." },
      { id: "followup", title: "Acompanhamento", content: "Gasometria seriada. Avaliar diariamente prontidão para desmame (teste de respiração espontânea — TRE). Bundle de prevenção de PAV: cabeceira elevada, higiene oral, interrupção diária de sedação, profilaxia TVP. Rx tórax diário em UTI." },
      { id: "complications", title: "Complicações", content: "VILI (barotrauma, volutrauma, atelectrauma), pneumotórax, PAV, atelectasia, auto-PEEP, toxicidade por O2, lesão traqueal, desnutrição, fraqueza muscular adquirida em UTI (ICUAW)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Todo paciente em VMI deve estar em UTI ou sala de emergência com monitorização contínua. Critérios para TRE: FiO2 ≤40%, PEEP ≤8, estável hemodinamicamente, sem sedação profunda, tosse eficaz. Extubação se TRE bem-sucedido por 30-120min." },
      { id: "references", title: "Referências Bibliográficas", content: "Diretrizes Brasileiras de Ventilação Mecânica — AMIB/SBPT 2013. ARDSNet — ARMA Trial (NEJM 2000). Papazian L et al. NEJM 2010 (ACURASYS). Boles JM et al. Eur Respir J 2007 (desmame)." }
    ]
  }
];
