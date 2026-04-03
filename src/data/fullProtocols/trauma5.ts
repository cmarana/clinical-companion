import type { FullProtocol } from "./types";

export const traumaFullProtocols5: FullProtocol[] = [
  {
    id: "fp-tce-grave",
    title: "Traumatismo Cranioencefálico Grave",
    categoryId: "trauma",
    category: "trauma",
    tags: ["TCE", "Glasgow", "hipertensão intracraniana", "PIC", "neurocirurgia"],
    sections: [
,      { id: "intro", title: "Introdução", content: `TCE grave (Glasgow ≤8) é principal causa de morte em jovens — manejo neurocrítico salva vidas.` }
      { id: "def", title: "Definição", content: `Trauma craniano com Glasgow ≤8 após ressuscitação. Classificação: leve (13-15), moderado (9-12), grave (≤8).` }
      { id: "etiology", title: "Etiologia", content: `Acidente de trânsito (principal), queda, agressão, acidente esportivo. Lesões primárias (contusão, HAD, HED, LAD) e secundárias (hipotensão, hipóxia, HIC).` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Glasgow ≤8 (definição)
- Anisocoria (herniação uncal — EMERGÊNCIA)
- Postura de decorticação/descerebração
- Otorreia/rinorreia (fratura de base de crânio)
- Sinal de Battle, olhos de guaxinim
- Convulsões precoces` }
      { id: "diagnosis", title: "Diagnóstico", content: `**TC de crânio SEM contraste:** padrão-ouro inicial
- HED: lente biconvexa (artéria meníngea média)
- HSD: crescente côncavo
- Contusão, LAD (petéquias), edema difuso
**Glasgow seriado:** reavaliar frequentemente
**Pupilometria**
**PIC (pressão intracraniana):** monitorar se Glasgow ≤8 com TC anormal` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**ABC + C-spine:**
- IOT com neuroproteção (evitar hipotensão na indução)
- PAS ≥100mmHg (BTF 2016) ou PAM para PPC ≥60mmHg
- SpO₂ >94%, PaCO₂ 35-40mmHg (NÃO hiperventilar rotineiramente)

**Manejo da HIC (PIC >22mmHg):**
1. Cabeceira 30°, cabeça alinhada
2. Sedação + analgesia (propofol, fentanil)
3. Manitol 20% 0.25-1g/kg ou NaCl 3% 150-250mL
4. Hiperventilação breve (PaCO₂ 30-35) se herniação iminente
5. Craniectomia descompressiva se refratário

**Neurocirurgia:** HED >30mL, HSD >10mm ou desvio >5mm
**Profilaxia anticonvulsivante:** fenitoína ou levetiracetam 7 dias` }
    ]
  },
  {
    id: "fp-trauma-cervical",
    title: "Trauma Cervical (Coluna Cervical)",
    categoryId: "trauma",
    category: "trauma",
    tags: ["cervical", "coluna", "imobilização", "NEXUS", "Canadian"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Lesão de coluna cervical deve ser suspeitada em todo politraumatizado até exclusão segura.` }
      { id: "def", title: "Definição", content: `Lesão traumática da coluna cervical, podendo envolver elementos ósseos, ligamentares e/ou medula espinhal. Prevalência: 2-5% dos politraumatizados.` }
      { id: "etiology", title: "Etiologia", content: `Acidente de trânsito, queda de altura, mergulho em água rasa, trauma esportivo, agressão.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Dor cervical (pode estar ausente se rebaixamento ou lesão medular completa)
- Rigidez cervical
- Déficit neurológico: tetraparesia/plegia, nível sensitivo cervical
- Choque neurogênico (hipotensão + bradicardia)
- Priapismo, retenção urinária
- Insuficiência respiratória (lesão C3-C5 = diafragma)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**NEXUS ou Canadian C-Spine Rule:** se negativos, dispensam imagem
**TC cervical:** padrão-ouro inicial no politraumatizado
**RMC:** lesão ligamentar, medular, discal — se TC normal mas déficit neurológico
**RX cervical (AP, lateral, boca aberta):** alternativa se TC indisponível — visualizar C1-T1` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Imobilização:** colar cervical rígido + prancha (retirar prancha precocemente)
**IOT:** sequência rápida com estabilização manual em linha (retirar porção anterior do colar)
**Metilprednisolona:** NÃO recomendada rotineiramente (NASCIS controverso)
**Cirurgia:** instabilidade, compressão medular com déficit progressivo
**PAM ≥85mmHg** se lesão medular (7 dias)
**Prevenção de TVP:** HBPM após 72h se sem sangramento ativo` }
    ]
  },
  {
    id: "fp-trauma-facial",
    title: "Trauma Facial",
    categoryId: "trauma",
    category: "trauma",
    tags: ["trauma facial", "fratura", "Le Fort", "maxilofacial", "via aérea"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Trauma facial é emergência que prioriza via aérea — fraturas de face são secundárias à estabilização.` }
      { id: "def", title: "Definição", content: `Lesões traumáticas do esqueleto facial, tecidos moles e estruturas associadas. Classificação de Le Fort (I, II, III) para fraturas do terço médio.` }
      { id: "etiology", title: "Etiologia", content: `Agressão (mais comum), acidente de trânsito, queda, acidente esportivo.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Edema, equimose, deformidade facial
- Sangramento oral/nasal
- Maloclusão dentária
- Mobilidade anormal de face (Le Fort)
- Diplopia (fratura de assoalho de órbita)
- **AMEAÇA À VIA AÉREA:** edema, sangramento, fragmentos ósseos
- Rinorreia (fratura base de crânio)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**TC de face com reconstrução 3D:** padrão-ouro
**Le Fort:**
- I: fratura maxilar horizontal (mobilidade maxilar)
- II: fratura piramidal (mobilidade nasal + maxilar)
- III: disjunção craniofacial (toda face móvel)
**Avaliação oftalmológica** se fratura orbital
**TC crânio associada** (30% têm lesão intracraniana)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Via aérea:** prioridade absoluta
- IOT pode ser difícil (sangue, edema)
- Cricotireoidostomia se IOT impossível
- Evitar nasotraqueal se suspeita de fratura de base de crânio
**2. Sangramento:** tampão nasal anterior/posterior, Foley em nasofaringe
**3. Fratura:** fixação cirúrgica geralmente em 5-10 dias (após redução do edema)
**4. Fratura orbital com encarceramento muscular:** cirurgia em 24-48h
**5. ATB profilático** se fratura exposta ou comunicação com seios` }
    ]
  },
  {
    id: "fp-trauma-vascular-periferico",
    title: "Trauma Vascular Periférico",
    categoryId: "trauma",
    category: "trauma",
    tags: ["trauma vascular", "isquemia", "torniquete", "revascularização", "hard signs"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Trauma vascular periférico requer diagnóstico rápido — isquemia >6h leva a perda do membro.` }
      { id: "def", title: "Definição", content: `Lesão traumática de vasos sanguíneos periféricos (artérias e/ou veias de extremidades). Tempo de isquemia quente >6h = risco de amputação.` }
      { id: "etiology", title: "Etiologia", content: `Trauma penetrante (arma branca, PAF), fratura fechada com lesão vascular (supracondiliana de úmero, fratura de joelho), iatrogênica.` }
      { id: "clinical", title: "Apresentação Clínica", content: `**Hard signs (indicação cirúrgica imediata):**
- Hemorragia ativa pulsátil
- Hematoma expansivo
- Ausência de pulso distal
- Isquemia distal (6 Ps: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia)
- Frêmito/sopro

**Soft signs:** hematoma estável, deficit neurológico, história de sangramento, redução de pulso` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Hard signs → cirurgia sem exames adicionais**
**Soft signs → AngioTC** (sensibilidade >95%)
**Índice tornozelo-braquial (ITB):** <0.9 = lesão provável
**Arteriografia:** padrão-ouro se dúvida
**Doppler portátil**` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Hemorragia:** compressão direta → torniquete se falha
**2. Ressuscitação:** hemoderivados se choque
**3. Revascularização cirúrgica:** reparo primário, enxerto venoso (safena invertida), prótese
- Tempo: ideal <6h de isquemia
**4. Fasciotomia profilática:** se isquemia >4-6h (prevenir síndrome compartimental)
**5. Shunt temporário (Javid):** em damage control
**6. Anticoagulação:** heparina regional intraoperatória` }
    ]
  },
  {
    id: "fp-sindrome-compartimental",
    title: "Síndrome Compartimental Aguda",
    categoryId: "trauma",
    category: "trauma",
    tags: ["síndrome compartimental", "fasciotomia", "pressão", "isquemia", "fratura"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Síndrome compartimental aguda é emergência — fasciotomia tardia resulta em necrose e amputação.` }
      { id: "def", title: "Definição", content: `Aumento da pressão dentro de um compartimento fascial fechado, comprometendo perfusão e viabilidade dos tecidos.` }
      { id: "etiology", title: "Etiologia", content: `Fratura de tíbia (mais comum), fratura de antebraço, esmagamento, queimadura circunferencial, revascularização pós-isquemia, gesso apertado, mordedura de cobra.` }
      { id: "clinical", title: "Apresentação Clínica", content: `**5 Ps (diagnóstico clínico):**
1. **Pain (dor DESPROPORCIONAL)** — mais precoce e confiável
2. **Pain com estiramento passivo** dos músculos do compartimento
3. Pressão (compartimento tenso)
4. Parestesia (nervo isquêmico)
5. Paralisia (tardio — mau prognóstico)
- **Ausência de pulso é sinal TARDIO** — não esperar para diagnosticar` }
      { id: "diagnosis", title: "Diagnóstico", content: `**DIAGNÓSTICO É CLÍNICO** — não atrasar fasciotomia por exames
**Pressão intracompartimental:** confirmatória se dúvida
- >30mmHg ou delta P <30mmHg (PD - PIC) = fasciotomia
**CPK, mioglobina, função renal:** rabdomiólise
**Dispositivo de Stryker ou manômetro de coluna d'água**` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. FASCIOTOMIA DE EMERGÊNCIA** — tratamento definitivo
- Perna: 4 compartimentos (2 incisões)
- Antebraço: volar + dorsal
- Incisão da pele E da fáscia
- Deixar aberta (curativo a vácuo)
- Fechamento secundário em 48-72h

**Medidas adjuvantes:**
- Remover gesso/imobilização constritiva
- Membro no nível do coração (não elevar)
- Hidratação agressiva (prevenir IRA por mioglobinúria)
- Monitorar K+ (rabdomiólise → hipercalemia)` }
    ]
  },
  {
    id: "fp-lesao-renal-traumatica",
    title: "Lesão Renal Traumática",
    categoryId: "trauma",
    category: "trauma",
    tags: ["trauma renal", "hematúria", "conservador", "embolização", "AAST"],
    sections: [
,      { id: "intro", title: "Introdução", content: `80-90% das lesões renais traumáticas são tratadas conservadoramente — classificação AAST guia conduta.` }
      { id: "def", title: "Definição", content: `Lesão do parênquima renal e/ou pedículo vascular por trauma contuso ou penetrante. Classificação AAST: I-V.` }
      { id: "etiology", title: "Etiologia", content: `**Contuso (mais comum):** acidente de trânsito, queda, esporte. **Penetrante:** arma branca, PAF.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Hematúria (macro ou microscópica) — pode estar ausente em lesão de pedículo
- Dor lombar/flanco
- Equimose lombar (sinal de Grey-Turner)
- Instabilidade hemodinâmica (lesão grave)
- Massa palpável (urinoma, hematoma)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**TC de abdome com contraste (fase arterial, venosa e tardia/excretora):** padrão-ouro
- Grau I: contusão, hematoma subcapsular
- Grau II: laceração <1cm
- Grau III: laceração >1cm sem lesão de sistema coletor
- Grau IV: laceração com lesão de sistema coletor ou lesão de segmentar
- Grau V: rim fragmentado ou lesão de pedículo
**EAS:** hematúria
**FAST:** líquido livre` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Conservador (graus I-IV estável):**
- Repouso, monitorização hemodinâmica
- Hidratação, ATB profilático
- TC de controle em 48-72h
- Acompanhamento ambulatorial

**Intervenção:**
- **Angioembolização seletiva:** sangramento ativo contido (grau IV)
- **Cirurgia:** instabilidade refratária, lesão de pedículo (grau V), exploração abdominal por outra indicação
- Nefrectomia pode ser necessária em rim destruído` }
    ]
  }
];
