import type { FullProtocol } from "./types";

export const obstetricsFullProtocols2: FullProtocol[] = [
  {
    id: "fp-hpp", title: "Hemorragia Pós-Parto", categoryId: "obstetrics", category: "Obstetrícia",
    tags: ["hemorragia", "pós-parto", "hpp", "atonia", "uterotônico", "tranexâmico"],
    sections: [
      { id: "intro", title: "Introdução", content: "HPP: principal causa de morte materna no mundo. Perda ≥ 500 mL (vaginal) ou ≥ 1000 mL (cesariana). Atonia uterina em 70-80%. Manejo escalonado: uterotônicos → tamponamento → cirurgia. Diretrizes: WHO 2023, WOMAN Trial, ACOG 2017, FEBRASGO 2022." },
      { id: "def", title: "Definição", content: "HPP primária: primeiras 24h. Secundária: 24h-12 semanas. 4 T's: Tônus (atonia 70-80%), Trauma (laceração, ruptura), Tecido (retenção placentária), Trombina (coagulopatia)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Fatores de risco: sobredistensão uterina, TP prolongado, corioamnionite, grande multípara, placenta prévia/acretismo. IC FC/PAS > 0,9 = alerta." },
      { id: "etiology", title: "Etiologia", content: "Atonia (80%): sobredistensão, infecção, fadiga miometrial. Laceração: parto instrumentado, macrossomia. Retenção placentária. Coagulopatia: CIVD, dilucional." },
      { id: "clinical", title: "Apresentação Clínica", content: "Sangramento vaginal ativo, útero flácido (atonia), taquicardia, hipotensão, palidez. Classificação por perda: 1 (<1000), 2 (1000-1500), 3 (1500-2000), 4 (>2000)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Avaliação do tônus uterino, revisão do canal de parto e placenta, hemograma, coagulograma (fibrinogênio < 200 = crítico), tipagem, USG." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Atonia vs laceração vs retenção vs ruptura uterina vs inversão uterina vs coagulopatia vs hematoma." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Massagem uterina bimanual\n2. Ocitocina 20-40 UI IV\n3. TXA 1g IV em 10 min\n4. Misoprostol 800 mcg VR\n5. Metilergonovina 0,2 mg IM (se PA ok)\n6. Revisão canal/placenta\n7. Se refratário: balão de Bakri → B-Lynch → ligadura uterina → histerectomia\n8. Transfusão maciça SN" },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Uterotônicos: ocitocina, metilergonovina, misoprostol. TXA (WOMAN trial). Transfusão: CH:PFC:PLQ, fibrinogênio > 200. Cirúrgico: Bakri, B-Lynch, ligadura, histerectomia." },
      { id: "prescriptions", title: "Prescrições", content: "1. Massagem uterina\n2. Ocitocina 20 UI + RL 500 mL BIC\n3. TXA 1g IV\n4. Misoprostol 800 mcg VR\n5. Metilergonovina 0,2 mg IM\n6. SF 1000 mL IV rápido\n7. Tipagem + 4 CH\n8. Hemograma + fibrinogênio seriados\n9. SVD + balanço hídrico\n10. Monitorização contínua" },
      { id: "followup", title: "Acompanhamento", content: "UTI/UCO 24-48h, hemograma seriado, ocitocina manutenção 12-24h, reposição de ferro IV, apoio psicológico." },
      { id: "complications", title: "Complicações", content: "CIVD, choque hipovolêmico, síndrome de Sheehan, histerectomia, morte materna." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "UTI: perda > 1500 mL, transfusão maciça, cirurgia. Alta: Hb estável, sem sangramento, orientações." },
      { id: "references", title: "Referências Bibliográficas", content: "1. WOMAN Trial. Lancet 2017.\n2. WHO PPH Guidelines 2023.\n3. ACOG Practice Bulletin 183, 2017.\n4. FEBRASGO HPP 2022." }
    ]
  }
];
