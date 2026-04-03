import type { FullProtocol } from "./types";

export const neuroFullProtocols6: FullProtocol[] = [
  {
    id: "fp-guillain-barre",
    title: "Sindrome de Guillain-Barre",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["guillain-barre", "polirradiculoneuropatia", "imunoglobulina", "plasmaferese"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Sindrome de Guillain-Barre na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Síndrome de Guillain-Barré (SGB): polirradiculoneuropatia inflamatória aguda, autoimune, desmielinizante (mais comum) ou axonal, caracterizada por fraqueza muscular ascendente simétrica e arreflexia.

Subtipos:
• AIDP (Polirradiculoneuropatia Inflamatória Desmielinizante Aguda): 85-90% no Ocidente
• AMAN (Neuropatia Axonal Motora Aguda): mais comum na Ásia
• AMSAN (Neuropatia Axonal Sensitivo-Motora Aguda): mais grave
• Síndrome de Miller Fisher: oftalmoplegia + ataxia + arreflexia (anti-GQ1b+)
• Variantes: faringo-cervico-braquial, paraparética, sensitiva pura"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Sindrome de Guillain-Barre."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Sindrome de Guillain-Barre."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Quadro clínico típico (evolução em 2-4 semanas):
• Fraqueza ascendente simétrica: inicia em MMII → MMSS → face → respiratório
• Arreflexia ou hiporreflexia generalizada
• Dor neuropática (65%): lombalgia, dor em membros
• Parestesias distais (início frequente)
• Paralisia facial bilateral (50%)
• Disfagia e disartria (bulbar)
• Disfunção autonômica (70%): taquicardia, bradicardia, hipotensão postural, retenção urinária, íleo paralítico
• Insuficiência respiratória (30%): necessidade de VM

História: 60-70% com infecção prévia (1-4 semanas antes):
• Campylobacter jejuni (mais comum)
• CMV, EBV, influenza, Zika, COVID-19
• Vacinação (raro)

Escala de Hughes (incapacidade funcional):
0 = normal; 1 = sinais menores; 2 = anda sem apoio; 3 = anda com apoio; 4 = acamado; 5 = VM; 6 = óbito"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Diagnóstico:
• CLÍNICO: fraqueza progressiva + arreflexia (critérios de Brighton)

Líquor (punção lombar):
• Dissociação albumino-citológica: proteína elevada (>45mg/dL) com celularidade normal (<10 céls/mm³)
• Pode ser normal na 1ª semana — repetir se necessário
• Celularidade >50: pensar em HIV, CMV, linfoma, sarcoidose

Eletroneuromiografia (ENMG):
• Realizar após 2 semanas do início
• Desmielinizante (AIDP): redução da velocidade de condução, bloqueio de condução, aumento da latência distal
• Axonal (AMAN/AMSAN): amplitude reduzida com velocidade preservada

Exames complementares:
• Anti-gangliosídeo: anti-GM1 (AMAN), anti-GQ1b (Miller Fisher), anti-GD1a
• Sorologia: Campylobacter, CMV, HIV, Zika
• RM de coluna: realce de raízes (gadolínio) — diferencial com compressão medular
• CVF (Capacidade Vital Forçada): monitorizar 4-6x/dia — IOT se <20mL/kg ou queda >30%"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Sindrome de Guillain-Barre."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Sindrome de Guillain-Barre."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento específico:
• Imunoglobulina IV (IVIG): 0,4g/kg/dia por 5 dias (total 2g/kg)
  - Iniciar se Hughes ≥3 ou progressão rápida
  - Preferida em instabilidade autonômica
• Plasmaférese: 5 sessões em dias alternados (200-250mL/kg volume total)
  - Eficácia equivalente à IVIG
  - Preferida se disponível precocemente
• NÃO usar corticoides (sem benefício, podem piorar)
• NÃO combinar IVIG + plasmaférese (sem benefício adicional)

Suporte ventilatório:
• Monitorizar CVF a cada 4-6h
• IOT se: CVF <20mL/kg, PImax <-30cmH2O, PEmax <40cmH2O, queda >30% da CVF, hipoxemia ou hipercapnia
• Regra 20-30-40: CVF <20, PImax <-30, PEmax <40 → intubar

Manejo da dor:
• Gabapentina 300-1200mg/dia VO
• Pregabalina 75-300mg/dia VO
• Carbamazepina se dor neuropática intensa
• Opioides: tramadol como resgate

Disfunção autonômica:
• Monitorizar em UTI
• Evitar manobras vagais bruscas
• Tratar bradicardia sintomática com atropina
• Hipotensão: volume + vasopressor se necessário"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — SGB (Hughes ≥3):

1. Internação em UTI (se envolvimento bulbar ou respiratório)
2. Jejum OU dieta por SNG (se disfagia)
3. Imunoglobulina Humana IV 0,4g/kg/dia, diluída em SF 0,9%, infundir em 6-8h, por 5 dias consecutivos
4. Omeprazol 40mg IV 1x/dia
5. Enoxaparina 40mg SC 1x/dia (profilaxia TVP)
6. Gabapentina 300mg VO 8/8h (titular até 1200mg/dia conforme dor)
7. Metoclopramida 10mg IV 8/8h se náusea
8. Monitorizar CVF a cada 4-6h — protocolo de IOT se CVF <20mL/kg
9. Fisioterapia motora e respiratória 2x/dia
10. Controle de PA e FC contínuo
11. Balanço hídrico rigoroso
12. Avaliação fonoaudiológica (deglutição)

* Após IVIG sem melhora em 4 semanas: considerar 2º ciclo de IVIG ou plasmaférese"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Sindrome de Guillain-Barre."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Sindrome de Guillain-Barre e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Sindrome de Guillain-Barre."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. Van den Berg B et al. Guillain-Barré syndrome: pathogenesis, diagnosis, treatment and prognosis. Nat Rev Neurol 2014
2. Willison HJ et al. Guillain-Barré syndrome. Lancet 2016
3. Fokke C et al. Diagnosis of Guillain-Barré syndrome. Brain 2014
4. ABN — Academia Brasileira de Neurologia — Consenso GBS 2022
5. Hughes RA, Swan AV. Randomised trial of plasma exchange, intravenous immunoglobulin, and combined treatments in GBS. Lancet 1997"
      }
],
  },
  {
    id: "fp-miastenia-gravis-crise",
    title: "Crise Miastenica",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["miastenia gravis", "crise", "insuficiencia respiratoria", "piridostigmina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Crise Miastenica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Crise Miastenica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Crise Miastenica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Crise Miastenica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Crise Miastenica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Crise Miastenica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Crise Miastenica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Crise Miastenica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Crise Miastenica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Crise Miastenica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Crise Miastenica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Crise Miastenica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Crise Miastenica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-encefalite-autoimune",
    title: "Encefalite Autoimune",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["encefalite", "autoimune", "anti-NMDA", "imunoglobulina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Encefalite Autoimune na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Encefalite Autoimune."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Encefalite Autoimune."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Encefalite Autoimune."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Encefalite Autoimune."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Encefalite Autoimune."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Encefalite Autoimune."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Encefalite Autoimune."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Encefalite Autoimune."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Encefalite Autoimune."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Encefalite Autoimune."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Encefalite Autoimune e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Encefalite Autoimune."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-esclerose-multipla-surto",
    title: "Esclerose Multipla - Surto Agudo",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["esclerose multipla", "surto", "metilprednisolona", "desmielinizacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Esclerose Multipla - Surto Agudo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Esclerose Multipla - Surto Agudo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Esclerose Multipla - Surto Agudo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-neuralgia-trigeminal",
    title: "Neuralgia do Trigemeo",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["neuralgia", "trigemeo", "dor facial", "carbamazepina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Neuralgia do Trigemeo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Neuralgia do Trigemeo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Neuralgia do Trigemeo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Neuralgia do Trigemeo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Neuralgia do Trigemeo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Neuralgia do Trigemeo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Neuralgia do Trigemeo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Neuralgia do Trigemeo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Neuralgia do Trigemeo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Neuralgia do Trigemeo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Neuralgia do Trigemeo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Neuralgia do Trigemeo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Neuralgia do Trigemeo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-cefaleia-cluster",
    title: "Cefaleia em Salvas (Cluster)",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["cefaleia", "salvas", "cluster", "oxigenio", "sumatriptano"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Cefaleia em Salvas (Cluster) na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Cefaleia em Salvas (Cluster) e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Cefaleia em Salvas (Cluster)."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-status-epilepticus-refratario",
    title: "Status Epilepticus Refratario",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["status epilepticus", "refratario", "anestesico", "EEG", "UTI"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Status Epilepticus Refratario na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Status Epilepticus Refratario."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Status Epilepticus Refratario."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Status Epilepticus Refratario."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Status Epilepticus Refratario."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Status Epilepticus Refratario."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Status Epilepticus Refratario."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Status Epilepticus Refratario."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Status Epilepticus Refratario."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Status Epilepticus Refratario."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Status Epilepticus Refratario."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Status Epilepticus Refratario e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Status Epilepticus Refratario."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-mielopatia-aguda",
    title: "Mielopatia Aguda",
    categoryId: "neurology",
    category: "Neurologia",
    tags: ["mielopatia", "medula", "paraplegia", "RNM", "corticoide"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Mielopatia Aguda na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Mielopatia Aguda."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Mielopatia Aguda."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Mielopatia Aguda."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Mielopatia Aguda."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Mielopatia Aguda."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Mielopatia Aguda."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Mielopatia Aguda."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Mielopatia Aguda."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Mielopatia Aguda."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Mielopatia Aguda."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Mielopatia Aguda e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Mielopatia Aguda."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
