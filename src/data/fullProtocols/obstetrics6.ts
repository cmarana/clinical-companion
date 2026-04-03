import type { FullProtocol } from "./types";

export const obstetricsFullProtocols6: FullProtocol[] = [
  {
    id: "fp-trabalho-parto-prematuro",
    title: "Trabalho de Parto Prematuro",
    categoryId: "obstetrics",
    category: "obstetrics",
    tags: ["prematuro", "tocolítico", "corticoide", "betametasona", "parto"],
    sections: [
,      { id: "intro", title: "Introdução", content: `TPP é principal causa de morbimortalidade neonatal — corticoide antenatal é a intervenção mais impactante.` }
      { id: "def", title: "Definição", content: `Trabalho de parto que ocorre entre 20-36 semanas e 6 dias de gestação, com contrações regulares e modificação cervical.` }
      { id: "etiology", title: "Etiologia", content: `Infecção (corioamnionite), polidrâmnio, gestação múltipla, colo curto, história de prematuridade, incompetência istmocervical, trauma, estresse.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Contrações uterinas regulares (≥4/20min ou ≥8/60min)
- Modificação cervical: dilatação ≥1cm e/ou apagamento ≥80%
- Pressão pélvica, lombalgia
- Secreção vaginal (descartar RPMO)
- Sangramento (descartar DPP, placenta prévia)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Toque vaginal:** dilatação e apagamento
**USG transvaginal:** comprimento cervical <25mm = risco
**Fibronectina fetal:** VPN alto (se negativo, baixo risco nas próximas 2 semanas)
**Excluir:** RPMO (teste de cristalização), ITU, vaginose` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Corticoide antenatal (24-34 semanas):**
- Betametasona 12mg IM 2 doses com 24h intervalo
- Ou Dexametasona 6mg IM 4 doses com 12h intervalo
- Maturação pulmonar fetal

**2. Tocolítico (comprar tempo para corticoide — máx 48h):**
- Nifedipino 20mg VO (1ª linha) + 10-20mg a cada 30min (máx 60mg)
- Ou Atosibana IV
- NÃO usar se infecção, DPP, sofrimento fetal

**3. Neuroproteção (24-32 semanas):**
- MgSO₄ 4g IV bolus + 1g/h por 12-24h

**4. ATB se GBS desconhecido ou positivo:**
- Penicilina G 5 milhões UI IV ataque + 2.5 milhões 4/4h` }
    ]
  },
  {
    id: "fp-rpmo",
    title: "Rotura Prematura de Membranas Ovulares (RPMO)",
    categoryId: "obstetrics",
    category: "obstetrics",
    tags: ["RPMO", "ruptura", "membranas", "prematuro", "corioamnionite"],
    sections: [
,      { id: "intro", title: "Introdução", content: `RPMO ocorre em 3% das gestações e é responsável por 30-40% dos partos prematuros.` }
      { id: "def", title: "Definição", content: `Rotura das membranas amnióticas antes do início do trabalho de parto, em gestação <37 semanas.` }
      { id: "etiology", title: "Etiologia", content: `Infecção cervicovaginal, colo curto, polidrâmnio, gestação múltipla, tabagismo, história de RPMO prévia, procedimentos invasivos (amniocentese).` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Perda súbita de líquido pela vagina (em jato ou gotejamento contínuo)
- Líquido claro/amarelado com odor sui generis
- Oligodrâmnio ao USG
- Contrações podem ou não estar presentes` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Exame especular:** visualização de líquido pelo orifício externo do colo (padrão-ouro clínico)
**Teste de cristalização (fern test):** líquido coletado cristaliza em samambaia ao secar
**Teste do papel de nitrazina:** pH >6.5 (alcalino)
**USG:** oligodrâmnio (ILA <5 ou maior bolsão <2cm)
**PAMG-1 ou IGFBP-1:** testes rápidos confirmatórios
**Evitar toque vaginal** (risco de infecção)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**<24 semanas:** aconselhamento sobre prognóstico, conduta individualizada
**24-34 semanas (conduta expectante):**
- Corticoide: betametasona 12mg IM 2 doses
- ATB profilático: ampicilina 2g IV 6/6h por 48h + eritromicina 250mg VO 6/6h por 10 dias
- MgSO₄ neuroproteção se <32 semanas
- Monitorar: temperatura, leucograma, CTG, ILA seriado
- Interromper se: corioamnionite, sofrimento fetal, TP franco, 34 semanas

**34-37 semanas:** indução do parto
**≥37 semanas:** indução imediata` }
    ]
  },
  {
    id: "fp-dheg-classificacao",
    title: "Distúrbios Hipertensivos da Gestação — Classificação e Manejo",
    categoryId: "obstetrics",
    category: "obstetrics",
    tags: ["DHEG", "hipertensão", "gestacional", "pré-eclâmpsia", "crônica"],
    sections: [
,      { id: "intro", title: "Introdução", content: `DHEG afetam 5-10% das gestações e são principal causa de morte materna no Brasil.` }
      { id: "def", title: "Definição", content: `Classificação: HAS crônica (pré-gestacional), HAS gestacional (após 20 semanas sem proteinúria), Pré-eclâmpsia (HAS + proteinúria ou lesão de órgão-alvo), HAS crônica com pré-eclâmpsia sobreposta.` }
      { id: "etiology", title: "Etiologia", content: `Placentação inadequada (remodelamento deficiente das artérias espiraladas), fatores angiogênicos (sFlt-1/PlGF), disfunção endotelial, predisposição genética.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- PA ≥140/90 em 2 medidas com 4h de intervalo
- Proteinúria ≥300mg/24h ou relação P/C ≥0.3
- Cefaleia, escotomas, dor em barra (epigástrica/HCD)
- Edema súbito/generalizado
- Hiperreflexia, clônus` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Pré-eclâmpsia com sinais de gravidade:**
- PAS ≥160 ou PAD ≥110
- Trombocitopenia <100.000
- TGO/TGP >2x o normal
- Creatinina >1.1mg/dL
- Edema pulmonar
- Sintomas cerebrais/visuais
**HELLP:** hemólise + enzimas elevadas + plaquetopenia
**Relação sFlt-1/PlGF:** auxilia diagnóstico diferencial` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**HAS gestacional/leve:**
- Metildopa 250-500mg 8/8h (1ª linha)
- Nifedipino 20-60mg/dia
- Monitorar PA, proteinúria semanal

**Pré-eclâmpsia grave:**
- Internação, sulfato de magnésio (Zuspan: 4g bolus + 1-2g/h)
- Anti-hipertensivo: Hidralazina 5mg IV ou Nifedipino 10mg VO
- Corticoide se <34 semanas
- **Parto:** tratamento definitivo — ≥37 semanas (sem gravidade), ≥34 semanas (com gravidade), qualquer IG se risco materno iminente` }
    ]
  },
  {
    id: "fp-diabetes-gestacional",
    title: "Diabetes Gestacional",
    categoryId: "obstetrics",
    category: "obstetrics",
    tags: ["diabetes gestacional", "DMG", "insulina", "TOTG", "rastreamento"],
    sections: [
,      { id: "intro", title: "Introdução", content: `DMG afeta até 18% das gestações e impacta diretamente no desfecho perinatal.` }
      { id: "def", title: "Definição", content: `Hiperglicemia diagnosticada pela primeira vez durante a gestação, sem critérios de DM prévio. TOTG 75g entre 24-28 semanas.` }
      { id: "etiology", title: "Etiologia", content: `Resistência insulínica fisiológica da gestação (hormônios placentários: hPL, progesterona, cortisol) com insuficiente compensação pelas células beta pancreáticas.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Maioria assintomática (diagnóstico por rastreamento)
- Macrossomia fetal (>4kg)
- Polidrâmnio
- Ganho de peso excessivo` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Rastreamento universal 24-28 semanas:**
- TOTG 75g: glicemia jejum ≥92, 1h ≥180, 2h ≥153 (1 valor alterado = DMG)
**1º trimestre:**
- Glicemia de jejum ≥92mg/dL e <126 = DMG precoce
- ≥126 ou HbA1c ≥6.5% = DM prévio (overt diabetes)
**USG:** crescimento fetal, líquido amniótico` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Dieta + exercício (70% controlam apenas com MEV):**
- Dieta fracionada 6 refeições/dia
- Exercício 30min/dia

**2. Insulinoterapia (se glicemia fora do alvo após 2 semanas):**
- Alvo: jejum <95, 1h pós-prandial <140, 2h pós-prandial <120
- NPH: 0.7-2.0 UI/kg/dia dividida 2-3x
- Regular/ultrarrápida pré-prandial se pós-prandial elevada

**3. Metformina:** alternativa se recusa/impossibilidade de insulina (cruza placenta)

**Parto:** ≤39 semanas se insulina; ≤40 semanas se dieta; ≤37-38 semanas se macrossomia ou mal controle
**Pós-parto:** TOTG 6-12 semanas (20-50% desenvolverão DM2)` }
    ]
  },
  {
    id: "fp-hemorragia-1-trimestre",
    title: "Hemorragia do Primeiro Trimestre",
    categoryId: "obstetrics",
    category: "obstetrics",
    tags: ["sangramento", "1º trimestre", "aborto", "ectópica", "beta-hCG"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Sangramento no 1º trimestre ocorre em 20-25% das gestações — prioridade é excluir gravidez ectópica.` }
      { id: "def", title: "Definição", content: `Sangramento vaginal antes de 12 semanas de gestação. Causas: ameaça de aborto, aborto, gravidez ectópica, doença trofoblástica.` }
      { id: "etiology", title: "Etiologia", content: `**Ameaça de aborto (50%):** mais comum, gestação viável com sangramento
**Aborto espontâneo:** inevitável, incompleto, completo, retido
**Gravidez ectópica:** tubária (95%), ovariana, cervical, intersticial
**Doença trofoblástica:** mola hidatiforme` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Sangramento vaginal (volume variável)
- Cólicas/dor pélvica
- Dor unilateral intensa → pensar em ectópica
- Instabilidade → ectópica rota ou aborto com hemorragia
- Útero maior que esperado → mola` }
      { id: "diagnosis", title: "Diagnóstico", content: `**β-hCG quantitativo:** >1500-2000 → USG TV deve visualizar saco gestacional intrauterino
**USG transvaginal:**
- Saco gestacional intrauterino com embrião e BCF = gestação viável
- Ausência de saco intrauterino com β-hCG >2000 = suspeita de ectópica
- Massa anexial + líquido livre = ectópica até prova contrária
**Tipagem sanguínea + Rh** (imunoglobulina anti-D se Rh negativo)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Ameaça de aborto:** repouso relativo, controle com β-hCG e USG seriados
**Aborto incompleto:** AMIU (aspiração manual intrauterina) ou misoprostol
**Aborto retido:** misoprostol 800mcg vaginal ou AMIU
**Gravidez ectópica:**
- Estável, íntegra, β-hCG <5000, saco <3.5cm: Metotrexato 50mg/m² IM
- Rota ou instável: laparoscopia/laparotomia (salpingectomia)
**Mola:** esvaziamento uterino + seguimento com β-hCG semanal` }
    ]
  }
];
