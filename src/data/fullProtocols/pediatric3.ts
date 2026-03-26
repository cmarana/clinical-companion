import type { FullProtocol } from "./types";

export const pediatricFullProtocols3: FullProtocol[] = [
  {
    id: "fp-febre-sem-foco-ped",
    title: "Febre sem Foco na Criança",
    categoryId: "pediatrics",
    category: "Pediatria de Emergência",
    tags: ["febre", "sem foco", "lactente", "criança", "bacteremia oculta"],
    sections: [
      { id: "intro", title: "Introdução", content: "Febre sem foco (FSF) é uma das queixas mais comuns em emergência pediátrica. Em lactentes <3 meses, o risco de infecção bacteriana grave (IBG) é significativo. Protocolos de Rochester, Philadelphia, Boston e Step-by-Step orientam a estratificação de risco. Diretriz SBP." },
      { id: "def", title: "Definição", content: "Febre (temperatura retal ≥38°C ou axilar ≥37,8°C) sem foco identificável após anamnese e exame físico completos. Faixas etárias de risco: <28 dias (alto risco), 29-90 dias (risco intermediário), 3-36 meses (risco menor)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Lactente febril <3 meses: SEMPRE considerar IBG. Sinais de alerta: irritabilidade, letargia, recusa alimentar, gemência, tempo de enchimento capilar >3s, petéquias, fontanela abaulada. Critérios de baixo risco (Rochester): previamente hígido, a termo, sem ATB prévio, leucócitos 5.000-15.000, EAS normal." },
      { id: "etiology", title: "Etiologia", content: "<28 dias: Streptococcus grupo B, E. coli, Listeria, HSV. 1-3 meses: E. coli, S. pneumoniae, Neisseria meningitidis. >3 meses: vírus (maioria), S. pneumoniae, S. aureus. IBG: ITU (principal), bacteremia oculta, meningite, pneumonia oculta." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre isolada, criança pode parecer bem (bem-estar geral não exclui IBG em <3 meses). Avaliar sistematicamente: estado geral, hidratação, atividade, interação, sinais meníngeos, exantema, otoscopia." },
      { id: "diagnosis", title: "Diagnóstico", content: "<28 dias: hemograma, PCR/PCT, hemocultura, EAS + urocultura, LCR (punção lombar obrigatória). 29-90 dias: hemograma, PCR/PCT, EAS + urocultura, hemocultura. PL se sinais de alerta ou PCR elevada. >3 meses: avaliação individualizada, EAS se menina <2 anos ou menino <1 ano. Rx tórax se leucocitose >20.000 ou sintomas respiratórios." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Infecção viral (maioria), ITU, meningite bacteriana, bacteremia oculta, pneumonia oculta, otite média aguda, infecção osteoarticular, doença de Kawasaki, reação vacinal." },
      { id: "conduct", title: "Conduta Inicial", content: "<28 dias: internar + ATB empírico sempre (Ampicilina + Gentamicina ± Aciclovir se suspeita HSV). 29-90 dias baixo risco: observação 24-48h ou alta com retorno em 24h (protocolo institucional). 29-90 dias alto risco: internar + ATB empírico. >3 meses bom estado: antitérmico + reavaliação em 24-48h." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Antitérmicos: Dipirona 15 mg/kg/dose VO/EV 6/6h OU Paracetamol 15 mg/kg/dose VO 6/6h OU Ibuprofeno 10 mg/kg/dose VO 8/8h (>6 meses). ATB empírico <28 dias: Ampicilina 200 mg/kg/dia EV (div 6/6h) + Gentamicina 5 mg/kg/dia EV 1x/dia. Se suspeita de HSV: Aciclovir 20 mg/kg/dose EV 8/8h. ATB 1-3 meses: Ceftriaxona 50-100 mg/kg/dia EV." },
      { id: "prescriptions", title: "Prescrições", content: "RN <28 dias (sempre internar): 1. Ampicilina 50 mg/kg/dose EV 6/6h; 2. Gentamicina 5 mg/kg/dose EV 1x/dia; 3. Aciclovir 20 mg/kg/dose EV 8/8h (se suspeita HSV); 4. Dipirona 15 mg/kg EV 6/6h SN. Lactente 1-3 meses alto risco: 1. Ceftriaxona 50 mg/kg/dose EV 12/12h; 2. Dipirona 15 mg/kg EV 6/6h SN." },
      { id: "followup", title: "Acompanhamento", content: "Resultados de culturas em 24-48h. Se culturas negativas e melhora clínica: considerar alta com seguimento ambulatorial. Se cultura positiva: adequar ATB e manter internação. Retorno obrigatório se piora ou persistência da febre >48h." },
      { id: "complications", title: "Complicações", content: "Meningite, sepse, choque séptico, convulsão febril (em >6 meses), desidratação, IBG não diagnosticada." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Internar: todo <28 dias, 29-90 dias com critérios de alto risco, qualquer idade com sinais de toxemia. UTI: sepse, meningite, instabilidade hemodinâmica. Alta: >3 meses, bom estado geral, sem sinais de alerta, responsável confiável, retorno garantido em 24h." },
      { id: "references", title: "Referências Bibliográficas", content: "SBP — Febre sem Sinais Localizatórios em Lactentes. Pantell RH et al. Pediatrics 2021 (AAP Clinical Practice Guideline). Gomez B et al. Pediatrics 2016 (Step-by-Step). NICE — Fever in Under 5s 2019." }
    ]
  },
  {
    id: "fp-laringite-crupe",
    title: "Laringite / Crupe Viral",
    categoryId: "pediatrics",
    category: "Pediatria de Emergência",
    tags: ["crupe", "laringite", "estridor", "dexametasona", "nebulização", "adrenalina"],
    sections: [
      { id: "intro", title: "Introdução", content: "Laringotraqueobronquite aguda (crupe) é a causa mais comum de obstrução de via aérea superior em crianças de 6 meses a 6 anos. Caracterizada por tosse ladrante, estridor e rouquidão. Geralmente benigna, mas pode causar obstrução grave. Diretriz SBP." },
      { id: "def", title: "Definição", content: "Inflamação aguda da laringe, traqueia e brônquios, geralmente viral. Pico de incidência: 1-3 anos. Mais comum no outono/inverno. Classificação de gravidade (Westley): leve (estridor apenas ao choro), moderado (estridor em repouso), grave (estridor + tiragem + cianose/alteração da consciência)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Tríade clássica: tosse ladrante ('de cachorro'), estridor inspiratório, rouquidão. Pródromo de IVAS 1-3 dias. Piora noturna. Sinais de gravidade: estridor em repouso, tiragem intercostal/supraesternal, agitação, cianose, letargia." },
      { id: "etiology", title: "Etiologia", content: "Parainfluenza tipo 1 (75%), Parainfluenza tipos 2 e 3, VSR, Influenza A e B, Adenovírus, Metapneumovírus. Raramente bacteriana (traqueíte bacteriana — considerar se não responde ao tratamento)." },
      { id: "clinical", title: "Apresentação Clínica", content: "IVAS prévia → tosse ladrante, rouquidão, estridor. Piora à noite. Leve: estridor ao chorar/agitar, sem tiragem. Moderado: estridor em repouso, tiragem leve, sem agitação. Grave: estridor em repouso, tiragem acentuada, agitação/letargia, cianose, SpO2 <92%." },
      { id: "diagnosis", title: "Diagnóstico", content: "Clínico. Rx cervical AP (sinal da torre/ponta de lápis — estreitamento subglótico) — não obrigatório. Oximetria. NÃO examinar orofaringe com abaixador em caso de suspeita de epiglotite (risco de laringoespasmo). DD epiglotite: febre alta, sialorreia, posição de tripé." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Epiglotite aguda (emergência — H. influenzae tipo B), corpo estranho em via aérea, abscesso retrofaríngeo/peritonsilar, traqueíte bacteriana, laringomalácia, angioedema, anafilaxia." },
      { id: "conduct", title: "Conduta Inicial", content: "1. Manter criança calma (no colo dos pais — agitação piora o estridor); 2. Avaliar gravidade (Westley); 3. LEVE: Dexametasona dose única; 4. MODERADO: Dexametasona + nebulização com adrenalina; 5. GRAVE: Dexametasona + adrenalina nebulização + O2 + preparar IOT." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Corticoide (TODOS os graus): Dexametasona 0,6 mg/kg VO/IM dose única (máx 10mg) — efeito em 2-4h, dura 24-36h. Alternativa: Budesonida 2mg nebulização (se não tolerar VO). Adrenalina nebulização (moderado/grave): Adrenalina pura 1:1000 — 0,5 mL/kg (máx 5mL) + SF para completar 5mL — nebulizar em 15min. Pode repetir a cada 20-30min. Observar 2-4h após adrenalina (efeito rebote). O2 umidificado se SpO2 <92%." },
      { id: "prescriptions", title: "Prescrições", content: "Leve: 1. Dexametasona 0,6 mg/kg VO dose única. Moderado: 1. Dexametasona 0,6 mg/kg VO/IM; 2. Adrenalina 1:1000 — 0,5 mL/kg (máx 5mL) nebulização; 3. Observar 2-4h. Grave: 1. Dexametasona 0,6 mg/kg IM; 2. Adrenalina nebulização (pode repetir); 3. O2 suplementar; 4. Preparar IOT (tubo 0,5-1mm menor que o habitual)." },
      { id: "followup", title: "Acompanhamento", content: "Leve: alta após dexametasona, orientar pais sobre sinais de piora. Moderado: observar 2-4h após adrenalina, alta se melhora sustentada. Grave: internação. Crupe recorrente (≥2 episódios): investigar causas anatômicas (laringoscopia)." },
      { id: "complications", title: "Complicações", content: "Obstrução completa de via aérea (raro), traqueíte bacteriana secundária, pneumonia, otite média, desidratação (recusa alimentar)." },
      { id: "criteria", title: "Critérios de Internação / UTI / Alta", content: "Alta: leve/moderado que respondeu ao tratamento, sem estridor em repouso após 2-4h, pais orientados. Internação: grave, necessidade de adrenalina repetida, SpO2 <92% persistente. UTI: obstrução iminente, necessidade de IOT." },
      { id: "references", title: "Referências Bibliográficas", content: "SBP — Laringite Aguda (Crupe). Bjornson CL, Johnson DW. Lancet 2008. Russell KF et al. Cochrane Database 2011 (corticoides no crupe). NICE — Croup clinical guideline." }
    ]
  }
];
