import type { EmergencyProtocol } from "./types";

export const samuMissingBatch5Protocols: EmergencyProtocol[] = [
  {
    id: "uti-indicacoes-ecmo-eolia-elso",
    title: "Indicações de ECMO — EOLIA / ELSO",
    categoryId: "procedures",
    tags: [
      "ecmo",
      "vv-ecmo",
      "va-ecmo",
      "elso",
      "eolia",
      "sara",
      "ards",
      "hipoxemia refratária",
      "ponte",
      "uti"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "ECMO é suporte extracorpóreo para insuficiência respiratória ou circulatória grave potencialmente reversível, refratária ao tratamento convencional otimizado. Na emergência/UTI, o objetivo é reconhecer precocemente candidatos, otimizar medidas convencionais e acionar centro ECMO antes de falência multiorgânica irreversível."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "VV-ECMO oferece suporte respiratório em hipoxemia ou hipercapnia refratária com função cardíaca suficiente. VA-ECMO oferece suporte circulatório e respiratório em choque cardiogênico, parada cardíaca selecionada ou falência circulatória potencialmente reversível. A indicação depende de reversibilidade, gravidade, tempo de ventilação, contraindicações e recursos do centro."
      },
      {
        id: "indicacoes",
        title: "Quando Considerar VV-ECMO",
        content:
          "Considerar discussão com centro ECMO em SARA grave com hipoxemia refratária apesar de ventilação protetora, PEEP adequada, bloqueio neuromuscular quando indicado, pronação e otimização hemodinâmica; hipercapnia grave com acidose refratária apesar de estratégia ventilatória segura; ou impossibilidade de ventilação protetora sem lesão pulmonar adicional. Critérios do estudo EOLIA são frequentemente usados como referência para gravidade."
      },
      {
        id: "va",
        title: "Quando Considerar VA-ECMO",
        content:
          "Considerar em choque cardiogênico refratário potencialmente reversível ou ponte para decisão/terapia, miocardite fulminante, intoxicações cardiotóxicas selecionadas, falência primária de enxerto, TEP maciço com colapso circulatório e ECPR em parada cardíaca altamente selecionada, conforme protocolo regional."
      },
      {
        id: "conduta",
        title: "Conduta Inicial antes da Transferência",
        content:
          "1. Confirmar ventilação protetora: volume corrente baixo, pressão de platô e driving pressure controladas quando possível.\n\n2. Usar pronação precoce em SARA grave se não contraindicado.\n\n3. Corrigir causas reversíveis de hipoxemia: pneumotórax, tubo seletivo, secreção, atelectasia, sobrecarga hídrica, choque, dissincronia e PEEP inadequada.\n\n4. Acionar centro ECMO cedo, antes de parada cardíaca ou falência multiorgânica avançada.\n\n5. Enviar dados objetivos: idade, diagnóstico, tempo de ventilação, gasometrias, parâmetros ventilatórios, P/F, uso de prona, vasopressores, lactato, função renal/hepática, sangramentos, comorbidades e contraindicações.\n\n6. Manter estratégia de proteção pulmonar, sedação adequada e estabilidade hemodinâmica enquanto aguarda orientação."
      },
      {
        id: "contraindicacoes",
        title: "Contraindicações Relativas",
        content:
          "Contraindicações variam por centro, mas incluem doença irreversível sem ponte possível, falência multiorgânica avançada, lesão neurológica grave irreversível, sangramento incontrolável, contraindicação absoluta à anticoagulação em alguns cenários, idade/fraqueza extrema, comorbidade terminal e ventilação mecânica lesiva/prolongada antes da avaliação."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "Extracorporeal Life Support Organization. ELSO Guidelines. Disponível em: https://www.elso.org/ecmo-resources/elso-ecmo-guidelines.aspx\n\nTonna JE, et al. Management of Adult Patients Supported with Venovenous Extracorporeal Membrane Oxygenation: Guideline from ELSO. ASAIO Journal. 2021. Disponível em: https://pubmed.ncbi.nlm.nih.gov/33965970/\n\nCombes A, et al. Extracorporeal Membrane Oxygenation for Severe Acute Respiratory Distress Syndrome — EOLIA. New England Journal of Medicine. 2018. Disponível em: https://www.nejm.org/doi/full/10.1056/NEJMoa1800385"
      }
    ]
  },
  {
    id: "uti-profilaxia-tev-paciente-critico",
    title: "Profilaxia de TEV em UTI",
    categoryId: "other-emergencies",
    tags: [
      "tev",
      "trombose venosa profunda",
      "tep",
      "profilaxia",
      "uti",
      "heparina",
      "enoxaparina",
      "heparina não fracionada",
      "compressão pneumática",
      "risco de sangramento"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Pacientes críticos têm risco aumentado de tromboembolismo venoso por imobilidade, inflamação, sepse, trauma, cirurgia, neoplasia, cateteres e ventilação mecânica. A profilaxia deve equilibrar risco trombótico, risco de sangramento, função renal, plaquetas, procedimentos e contraindicações."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Profilaxia de TEV é uso de medidas farmacológicas e/ou mecânicas para reduzir TVP e TEP em pacientes hospitalizados. Em UTI, heparina de baixo peso molecular ou heparina não fracionada são opções frequentes quando o risco de sangramento é aceitável."
      },
      {
        id: "avaliacao",
        title: "Avaliação Inicial",
        content:
          "Avaliar indicação diariamente. Considerar risco de TEV, sangramento ativo, plaquetopenia, coagulopatia, cirurgia/procedimento recente, trauma craniano, hemorragia intracraniana, insuficiência renal, peso extremo, gestação/puerpério, câncer e uso prévio de anticoagulantes."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Se risco de sangramento aceitável: iniciar profilaxia farmacológica conforme protocolo institucional.\n\n2. Escolher HBPM ou HNF considerando função renal, peso, necessidade de procedimentos e política local.\n\n3. Se contraindicação temporária à farmacológica: usar profilaxia mecânica, preferencialmente compressão pneumática intermitente se disponível.\n\n4. Reavaliar diariamente sangramento, plaquetas, função renal, procedimentos e possibilidade de iniciar ou retomar heparina.\n\n5. Evitar combinação rotineira de mecânica + farmacológica se não houver indicação específica, conforme diretrizes e avaliação individual.\n\n6. Ajustar dose em obesidade, baixo peso, insuficiência renal, gestação e pacientes de muito alto risco conforme protocolo da unidade."
      },
      {
        id: "contraindicacoes",
        title: "Contraindicações e Cautelas",
        content:
          "Contraindicações comuns: sangramento ativo maior, plaquetopenia grave, coagulopatia importante não corrigida, neurocirurgia/hemorragia intracraniana recente sem liberação, trauma com sangramento não controlado e procedimento invasivo iminente de alto risco. Meias/compressão podem ser contraindicadas em isquemia crítica de membros, lesões cutâneas importantes ou fraturas instáveis."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Suspensão prolongada por procedimento 'possível' aumenta risco de TEV. Profilaxia não é tratamento de TEV estabelecido. Suspeita de TVP/TEP exige protocolo diagnóstico e anticoagulação terapêutica se indicada. Reavaliar profilaxia na admissão, após cirurgia/procedimentos e diariamente."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "American Society of Hematology. 2018 Guidelines for Management of Venous Thromboembolism: Prophylaxis for Hospitalized and Nonhospitalized Medical Patients. Disponível em: https://ashpublications.org/bloodadvances/article-abstract/2/22/3198/16115/American-Society-of-Hematology-2018-guidelines-for\n\nAmerican Society of Hematology. VTE Guidelines — Prophylaxis for Medical Patients. Disponível em: https://www.hematology.org/education/clinicians/guidelines-and-quality-care/clinical-practice-guidelines/venous-thromboembolism-guidelines/prophylaxis-for-medical-patients"
      }
    ]
  },
  {
    id: "emergencia-lombalgia-aguda-red-flags",
    title: "Lombalgia Aguda — Red Flags",
    categoryId: "other-emergencies",
    tags: [
      "lombalgia",
      "dor lombar",
      "red flags",
      "cauda equina",
      "fratura",
      "infecção",
      "neoplasia",
      "ciatalgia",
      "imagem",
      "emergência"
    ],
    sections: [
      {
        id: "intro",
        title: "Introdução",
        content:
          "Lombalgia aguda é queixa frequente e, na maioria dos casos, não exige imagem imediata. A função da emergência é identificar sinais de alarme para causas graves, controlar dor, preservar função, orientar retorno e encaminhar casos suspeitos para investigação urgente."
      },
      {
        id: "definicao",
        title: "Definição",
        content:
          "Dor na região lombar com ou sem irradiação para membros inferiores, de início recente. Pode ser inespecífica, radicular ou associada a condição grave como síndrome da cauda equina, infecção, neoplasia, fratura, aneurisma/dissecção, doença inflamatória ou déficit neurológico progressivo."
      },
      {
        id: "redflags",
        title: "Red Flags",
        content:
          "Investigar: retenção urinária ou incontinência nova, anestesia em sela, déficit motor progressivo, febre, imunossupressão, uso de drogas IV, infecção recente, dor noturna/progressiva, história de câncer, perda de peso inexplicada, trauma significativo, osteoporose, uso crônico de corticoide, idade avançada com trauma mínimo, anticoagulação, dor abdominal/pulsátil, síncope ou sinais vasculares."
      },
      {
        id: "conduta",
        title: "Conduta",
        content:
          "1. Avaliar sinais vitais, marcha, força, sensibilidade, reflexos, Lasègue quando aplicável, função esfincteriana e pulsos se suspeita vascular.\n\n2. Se suspeita de cauda equina: solicitar RM urgente e acionar neurocirurgia/ortopedia de coluna.\n\n3. Se febre, imunossupressão, droga IV ou dor vertebral intensa: considerar infecção espinhal, coletar exames e imagem urgente conforme estabilidade.\n\n4. Se trauma, osteoporose, corticoide crônico ou dor focal óssea: avaliar fratura e indicar imagem.\n\n5. Se história de câncer, perda ponderal ou dor progressiva noturna: investigar neoplasia/metástase.\n\n6. Se sem red flags e exame neurológico sem déficit progressivo: manejo conservador, analgesia, manutenção de atividade conforme tolerância, evitar repouso absoluto e orientar retorno.\n\n7. Evitar imagem de rotina nos casos inespecíficos sem sinais de alarme."
      },
      {
        id: "analgesia",
        title: "Analgesia e Alta Segura",
        content:
          "Usar analgesia multimodal conforme perfil do paciente: paracetamol, dipirona, anti-inflamatórios se não contraindicado, relaxante muscular por curto período em casos selecionados e opioide apenas excepcionalmente. Orientar atividade progressiva, evitar repouso prolongado e retorno imediato se déficit, alterações urinárias/intestinais, febre, piora progressiva ou dor incapacitante."
      },
      {
        id: "alertas",
        title: "Alertas",
        content:
          "Ciatalgia isolada não é indicação automática de imagem emergencial. Anestesia em sela e retenção urinária são sinais críticos. Dor lombar com dor abdominal, hipotensão, síncope ou massa pulsátil exige pensar em aneurisma/dissecção. Anticoagulação com dor intensa e déficit pode sugerir hematoma espinhal."
      },
      {
        id: "referencias",
        title: "Referências Bibliográficas",
        content:
          "American College of Radiology. ACR Appropriateness Criteria — Low Back Pain. Disponível em: https://acsearch.acr.org/docs/69483/narrative/\n\nHutchins TA, et al. ACR Appropriateness Criteria® Low Back Pain: 2021 Update. Journal of the American College of Radiology. Disponível em: https://pubmed.ncbi.nlm.nih.gov/34794594/\n\nAmerican College of Physicians. Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain: Clinical Practice Guideline. Disponível em: https://www.acpjournals.org/doi/10.7326/M16-2367"
      }
    ]
  }
];
