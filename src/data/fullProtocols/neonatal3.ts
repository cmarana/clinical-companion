import type { FullProtocol } from "./types";

export const neonatalFullProtocols3: FullProtocol[] = [
  {
    id: "fp-pca-neonatal",
    title: "Persistência do Canal Arterial (PCA)",
    categoryId: "neonatal",
    category: "Neonatal",
    tags: ["pca", "canal arterial", "ductus", "prematuro", "ibuprofeno", "indometacina"],
    sections: [
      { id: "intro", title: "Introdução", content: "A persistência do canal arterial (PCA) é uma das cardiopatias mais comuns no período neonatal, especialmente em prematuros <28 semanas (até 60-70%). O shunt esquerda-direita pode causar sobrecarga pulmonar e comprometimento hemodinâmico. Diretriz SBP e AHA." },
      { id: "def", title: "Definição", content: "Falha no fechamento funcional do ducto arterioso (canal arterial) após o nascimento. No RN a termo, o fechamento funcional ocorre em 24-48h e anatômico em 2-3 semanas. No prematuro, a imaturidade da parede ductal e a maior sensibilidade às prostaglandinas mantêm o canal patente." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Ecocardiograma funcional de rotina em prematuros <28 semanas entre 48-72h de vida. Sinais clínicos: sopro sistólico ou contínuo em BEE alta, pulsos amplos (martelo d'água), precórdio hiperdinâmico, pressão de pulso alargada. Piora respiratória sem outra causa." },
      { id: "etiology", title: "Etiologia", content: "Prematuridade (principal fator): imaturidade da musculatura lisa ductal, maior sensibilidade a prostaglandinas vasodilatadoras (PGE2), menor resposta ao oxigênio. Outros: hipóxia, acidose, excesso de líquidos, SDR, infecção." },
      { id: "clinical", title: "Apresentação Clínica", content: "PCA pequeno: assintomático. PCA hemodinamicamente significativo (PCAhs): taquicardia, taquipneia, necessidade crescente de O2/VM, sopro contínuo ou sistólico em foco pulmonar, pulsos periféricos amplos, hepatomegalia, edema pulmonar, dificuldade em progredir dieta." },
      { id: "diagnosis", title: "Diagnóstico", content: "Ecocardiograma com Doppler (padrão-ouro): diâmetro do ducto (>1,5mm/kg sugere significância), relação AE/Ao (>1,4 = sobrecarga esquerda), fluxo diastólico reverso em aorta descendente, padrão de fluxo ductal. Rx tórax: cardiomegalia, congestão pulmonar. BNP/NT-proBNP elevados." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Sopro inocente neonatal, comunicação interventricular (CIV), janela aortopulmonar, fístula arteriovenosa, insuficiência aórtica, sepse com hiperfluxo." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Ecocardiograma para confirmar e avaliar significância hemodinâmica; 2. Restrição hídrica (120-140 mL/kg/dia); 3. Otimizar suporte ventilatório (PEEP adequada); 4. Se PCAhs: tratamento farmacológico ou cirúrgico; 5. PCA assintomático em prematuro: observação (pode fechar espontaneamente)." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Farmacológico (inibidores de COX): Ibuprofeno EV (primeira escolha — menos efeitos renais): 10mg/kg D1 → 5mg/kg D2 → 5mg/kg D3. Alternativa: Indometacina EV 0,2mg/kg 12/12h por 3 doses. Paracetamol EV 15mg/kg 6/6h por 3-7 dias (alternativa se CI para AINEs). Contraindicações aos AINEs: plaquetas <50.000, sangramento ativo, ECN, IRA (creatinina >1,8), hiperbilirrubinemia grave. Cirúrgico: ligadura ductal (se refratário a 2 ciclos de tratamento farmacológico ou CI)." },
      { id: "prescriptions", title: "Prescrições", content: "Ibuprofeno EV: D1 — 10mg/kg EV em 15min; D2 — 5mg/kg EV em 15min; D3 — 5mg/kg EV em 15min (intervalo de 24h entre doses). OU Indometacina EV: 0,2mg/kg EV lento — 3 doses com 12-24h de intervalo. OU Paracetamol EV: 15mg/kg EV 6/6h por 3-7 dias. Associar: restrição hídrica 120-140 mL/kg/dia, manter PEEP adequada, monitorizar função renal e plaquetas." },
      { id: "followup", title: "Acompanhamento", content: "Ecocardiograma de controle 24-48h após tratamento. Se PCA persistente: considerar segundo ciclo ou cirurgia. Monitorar função renal (creatinina, diurese) durante tratamento com AINEs. Acompanhamento cardiológico ambulatorial." },
      { id: "complications", title: "Complicações", content: "ICC neonatal, displasia broncopulmonar (associação), hemorragia pulmonar, enterocolite necrosante, hemorragia intraventricular. Complicações do tratamento: IRA (indometacina > ibuprofeno), plaquetopenia, sangramento GI, perfuração intestinal." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Todo RN com PCAhs deve estar em UTI neonatal. Tratamento cirúrgico: centro com cirurgia cardíaca neonatal. Alta: PCA fechado ou pequeno sem repercussão, estável, em crescimento adequado." },
      { id: "references", title: "Referências Bibliográficas", content: "SBP — Persistência do Canal Arterial no Prematuro. AHA — Management of PDA in Preterm Infants. Ohlsson A et al. Cochrane 2020 (Ibuprofeno vs Indometacina). Hammerman C et al. Pediatrics 2011 (Paracetamol para PCA)." }
    ]
  }
];
