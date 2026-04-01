import { useState } from "react";
import TopBar from "@/components/TopBar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Info, ExternalLink, Syringe } from "lucide-react";
import { cn } from "@/lib/utils";

import iotImg from "@/assets/procedures/iot.jpg";
import cvcImg from "@/assets/procedures/cvc.jpg";
import drenagemImg from "@/assets/procedures/drenagem.jpg";
import suturaImg from "@/assets/procedures/sutura.jpg";
import puncaoImg from "@/assets/procedures/puncao-lombar.jpg";
import paracenteseImg from "@/assets/procedures/paracentese.jpg";

interface ProcedureStep {
  step: number;
  title: string;
  detail: string;
  tip?: string;
}

interface Procedure {
  id: string;
  title: string;
  category: string;
  difficulty: "básico" | "intermediário" | "avançado";
  image: string;
  indication: string;
  contraindications: string[];
  materials: string[];
  steps: ProcedureStep[];
  complications: string[];
  pearls: string[];
  videoSearch: string;
  guideline: string;
}

const procedures: Procedure[] = [
  {
    id: "iot",
    title: "Intubação Orotraqueal (IOT)",
    category: "Via Aérea",
    difficulty: "avançado",
    image: iotImg,
    indication: "Falência respiratória, proteção de via aérea, PCR, Glasgow ≤8, cirurgia sob anestesia geral.",
    contraindications: [
      "Trauma cervical instável (relativa — considerar IOT com estabilização manual)",
      "Obstrução supraglótica completa (considerar cricotireoidostomia)",
      "Epiglotite aguda grave (considerar IOT em centro cirúrgico)",
    ],
    materials: [
      "Laringoscópio (lâmina curva Macintosh 3 ou 4, ou reta Miller)",
      "Tubo endotraqueal (♂ 7,5-8,5mm / ♀ 7,0-8,0mm)",
      "Guia metálico (bougie ou mandril)",
      "Seringa 10mL para insuflar cuff",
      "Fixador de tubo ou cadarço",
      "Aspirador montado e funcionando",
      "Bolsa-válvula-máscara (AMBU) + O₂",
      "Capnógrafo ou detector de CO₂",
      "Medicações: Fentanil, Etomidato/Ketamina, Succinilcolina/Rocurônio",
      "Plano B: máscara laríngea, videolaringoscópio",
    ],
    steps: [
      { step: 1, title: "Preparação e checklist", detail: "Verifique equipamentos, aspire, teste laringoscópio e cuff. Monte drogas. Posicione monitor (SpO₂, ECG, capnografia).", tip: "Mnemônico SOAP-ME: Suction, Oxygen, Airway, Pharmacy, Monitoring/Equipment." },
      { step: 2, title: "Posicionamento do paciente", detail: "Posição olfativa (sniffing position): coxim occipital de 8-10cm, hiperextensão cervical. Alinhamento dos eixos oral, faríngeo e laríngeo.", tip: "Em obesos: rampa com lençóis até alinhar meato auditivo externo com incisura esternal." },
      { step: 3, title: "Pré-oxigenação", detail: "O₂ 100% por 3-5 minutos em máscara com reservatório ou VNI. Objetivo: denitrogenação e reserva de O₂ apneico.", tip: "Alvo: EtO₂ >85%. Paciente crítico: oxigena por tempo que puder antes de paralisar." },
      { step: 4, title: "Indução em sequência rápida (ISR)", detail: "Fentanil 1-3mcg/kg EV (3 min antes) → Lidocaína 1,5mg/kg EV (opcional para PIC↑) → Etomidato 0,3mg/kg ou Ketamina 1-2mg/kg → Succinilcolina 1-1,5mg/kg ou Rocurônio 1,2mg/kg.", tip: "Esperar 45-60s após o bloqueador para fasciculações cessarem (succinilcolina) ou efeito pleno (rocurônio)." },
      { step: 5, title: "Laringoscopia direta", detail: "Abra a boca com a mão direita. Insira a lâmina pelo lado direito, varrendo a língua para a esquerda. Macintosh: posicione na valécula. Miller: eleve a epiglote diretamente. Faça tração para cima e para frente (45°) — NUNCA alavanca.", tip: "Se não visualizar cordas: BURP (pressão posterior, cefálica e à direita na cartilagem tireoidea)." },
      { step: 6, title: "Passagem do tubo", detail: "Visualize as cordas vocais (Cormack-Lehane I-IV). Insira o tubo pelo lado direito da boca. Passe o cuff 1-2cm abaixo das cordas. Profundidade: 21cm na comissura labial (♀) / 23cm (♂).", tip: "Se dificuldade: use bougie como guia, passe primeiro o bougie entre as cordas e depois deslize o tubo sobre ele." },
      { step: 7, title: "Confirmação do posicionamento", detail: "1º: Capnografia (padrão-ouro — onda de CO₂ sustentada). 2º: Ausculta em 5 pontos (epigástrio, bases e ápices bilaterais). 3º: Expansão torácica simétrica. 4º: Condensação no tubo.", tip: "RX de tórax confirma posição (ponta do tubo 2-4cm acima da carina)." },
      { step: 8, title: "Fixação e cuidados pós-IOT", detail: "Insufle cuff com 5-10mL (pressão 20-30cmH₂O). Fixe com cadarço ou dispositivo comercial. Conecte ao ventilador mecânico. Solicite RX de tórax.", tip: "Parâmetros iniciais do ventilador: modo A/C, VC 6-8mL/kg (peso predito), FR 12-16, PEEP 5, FiO₂ 100% → titular." },
    ],
    complications: [
      "Intubação esofágica (verificar SEMPRE com capnografia)",
      "Intubação seletiva em brônquio direito (ausculta assimétrica)",
      "Trauma dentário ou de via aérea",
      "Broncoespasmo reflexo",
      "Hipotensão pós-indução",
      "Aspiração de conteúdo gástrico",
      "Pneumotórax (raro, por barotrauma)",
    ],
    pearls: [
      "Sempre tenha plano B (máscara laríngea) e C (cricotireoidostomia) prontos",
      "Via aérea difícil: LEMON score — Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility",
      "Não tente mais de 3 tentativas de laringoscopia convencional",
      "Pré-oxigenação é a etapa mais importante — nunca pule",
    ],
    videoSearch: "orotracheal intubation technique step by step",
    guideline: "DAS/AMIB/SBA 2023",
  },
  {
    id: "cvc",
    title: "Acesso Venoso Central (CVC)",
    category: "Acesso Vascular",
    difficulty: "avançado",
    image: cvcImg,
    indication: "Infusão de drogas vasoativas, NPT, acesso periférico difícil, monitorização de PVC, hemodiálise.",
    contraindications: [
      "Infecção no sítio de punção",
      "Coagulopatia grave não corrigida (relativa)",
      "Trombose venosa no sítio escolhido",
      "Distorção anatômica local",
    ],
    materials: [
      "Kit de cateter venoso central (mono, duplo ou triplo lúmen)",
      "Campos estéreis, gorro, máscara, avental e luvas estéreis",
      "Clorexidina alcoólica 2%",
      "Lidocaína 2% sem vasoconstritor",
      "Seringa 5-10mL, agulha de punção 18G",
      "Fio-guia (guidewire), dilatador, cateter",
      "Ultrassom (obrigatório para jugular interna)",
      "Fio de sutura (Nylon 3-0) para fixação",
      "Curativo transparente estéril",
    ],
    steps: [
      { step: 1, title: "Escolha do sítio", detail: "Jugular interna direita (1ª escolha): menor risco de pneumotórax, caminho reto até AD. Subclávia: melhor para longa permanência, menor infecção. Femoral: emergência, sem risco de pneumotórax.", tip: "Jugular interna + USG é o padrão-ouro atual (recomendação Classe I)." },
      { step: 2, title: "Posicionamento", detail: "Trendelenburg (15-20°) para distender veias e prevenir embolia aérea. Jugular: cabeça virada para o lado contralateral. Subclávia: coxim interescapular.", tip: "Femoral: paciente em supina, coxa em leve abdução e rotação externa." },
      { step: 3, title: "Técnica asséptica máxima", detail: "Paramentação completa (gorro, máscara, avental estéril, luvas estéreis). Antissepsia ampla com clorexidina 2%. Campos estéreis cobrindo todo o paciente.", tip: "Barreira máxima reduz infecção de cateter em >50% (evidência Classe I)." },
      { step: 4, title: "Identificação com ultrassom", detail: "Jugular interna: visualize em eixo transversal. Veia: compressível, sem pulsação. Artéria: não compressível, pulsátil. Confirme com Doppler se dúvida.", tip: "Calibre o ganho. Veia é anterior e lateral à carótida. Comprima levemente para confirmar." },
      { step: 5, title: "Anestesia local", detail: "Infiltre lidocaína 2% no sítio de punção, criando botão anestésico na pele e tecido subcutâneo profundo.", tip: "Aspire antes de infiltrar para evitar injeção intravascular." },
      { step: 6, title: "Punção (Seldinger)", detail: "Puncione com agulha 18G acoplada à seringa, sob visualização direta por USG. Avance com aspiração negativa contínua. Ao obter retorno venoso livre: desconecte a seringa mantendo a agulha fixa.", tip: "Sangue venoso: escuro, sem pulsação, fluxo não pulsátil. Se dúvida: gasometria do sangue aspirado." },
      { step: 7, title: "Fio-guia e dilatação", detail: "Introduza o fio-guia pela agulha (nunca force). Confirme posição no USG. Retire a agulha mantendo o fio-guia. Realize incisão punctiforme com bisturi nº 11. Passe o dilatador sobre o fio-guia.", tip: "Nunca solte o fio-guia. Monitore ECG — extrassístoles indicam fio-guia em AD (recue)." },
      { step: 8, title: "Passagem do cateter", detail: "Passe o cateter sobre o fio-guia. Profundidade: jugular D 12-15cm, jugular E 15-18cm, subclávia D 15cm, subclávia E 18cm, femoral 20cm. Retire o fio-guia. Aspire e flush cada via com SF.", tip: "Sempre aspire sangue de cada lúmen para confirmar posicionamento intravascular." },
      { step: 9, title: "Fixação e RX", detail: "Fixe com sutura (Nylon 3-0). Aplique curativo transparente estéril. Solicite RX de tórax para confirmar ponta do cateter na junção VCS-AD e descartar pneumotórax.", tip: "Ponta ideal: junção VCS-AD (nível de T4-T5 na carina)." },
    ],
    complications: [
      "Pneumotórax (subclávia > jugular)",
      "Punção arterial (comprimir por 10min)",
      "Hemotórax",
      "Embolia aérea (manter Trendelenburg)",
      "Arritmia cardíaca (fio-guia em AD)",
      "Infecção de cateter (trocar se >7-10 dias ou sinais infecciosos)",
      "Trombose venosa",
    ],
    pearls: [
      "USG reduz complicações em >50% — use SEMPRE na jugular",
      "Checklist de segurança antes do procedimento (bundle de CVC)",
      "Nunca force o fio-guia — se resistência, reposicione a agulha",
      "Subclávia tem menor taxa de infecção para cateteres de longa permanência",
    ],
    videoSearch: "central venous catheter insertion ultrasound guided seldinger technique",
    guideline: "AMIB / ESICM 2022",
  },
  {
    id: "drenagem",
    title: "Drenagem Torácica (Toracostomia)",
    category: "Torácica",
    difficulty: "avançado",
    image: drenagemImg,
    indication: "Pneumotórax (>2cm ou sintomático), hemotórax, derrame pleural volumoso, empiema, pós-toracotomia.",
    contraindications: [
      "Aderências pleurais extensas conhecidas (relativa)",
      "Coagulopatia grave não corrigida (relativa)",
      "Pulmão não expansível (considerar pleurodese)",
    ],
    materials: [
      "Dreno torácico (28-36 Fr para hemotórax, 20-28 Fr para pneumotórax)",
      "Kit de drenagem em selo d'água",
      "Campo estéril, gorro, máscara, avental e luvas estéreis",
      "Clorexidina alcoólica 2%",
      "Lidocaína 2% (20-30mL para bloqueio intercostal amplo)",
      "Bisturi nº 10, pinça Kelly curva grande",
      "Fio de sutura (Nylon 2-0 ou seda 0) — ponto em U + bailarina",
      "Gaze estéril, esparadrapo largo",
    ],
    steps: [
      { step: 1, title: "Posicionamento", detail: "Paciente semi-sentado (45°) ou em decúbito lateral. Braço ipsilateral elevado e abduzido, apoiado atrás da cabeça.", tip: "O triângulo de segurança (safety triangle) é o local ideal: bordas anterior e posterior do grande dorsal, linha axilar anterior e base axilar." },
      { step: 2, title: "Identificação do sítio", detail: "5º espaço intercostal (EIC), linha axilar média a anterior. Referência: nível do mamilo no homem. SEMPRE borda SUPERIOR da costela inferior (feixe vasculonervoso na borda inferior).", tip: "USG à beira-leito (POCUS) para confirmar derrame e marcar o ponto — reduz complicações." },
      { step: 3, title: "Antissepsia e anestesia", detail: "Antissepsia ampla com clorexidina 2%. Bloqueio intercostal com lidocaína 2%: pele → subcutâneo → músculo intercostal → pleura parietal. Aspire ao atingir espaço pleural (confirmação).", tip: "Use 20-30mL de lidocaína — a dor do procedimento é a principal queixa. Anestesie generosamente a pleura parietal." },
      { step: 4, title: "Incisão", detail: "Incisão transversal de 3-4cm no 5º EIC, sobre a borda superior da costela inferior. Incisão através de pele e subcutâneo.", tip: "Incisão deve ser generosa o suficiente para passar o dedo indicador." },
      { step: 5, title: "Dissecção romba", detail: "Com a pinça Kelly curva, disseque o músculo intercostal por divulsão (abrir e fechar). Ao perfurar a pleura parietal, espere o jato de ar ou líquido (confirma espaço pleural).", tip: "Introduza o dedo indicador enluvado para: confirmar espaço pleural, liberar aderências, palpar pulmão e diafragma." },
      { step: 6, title: "Inserção do dreno", detail: "Clampeie a ponta do dreno com Kelly. Direcione: para cima e posterior (hemotórax) ou para cima e anterior (pneumotórax). Insira até que todos os orifícios estejam dentro do tórax.", tip: "Nunca use trocarte — risco de lesão pulmonar, cardíaca e diafragmática." },
      { step: 7, title: "Conexão e fixação", detail: "Conecte ao sistema de selo d'água (frasco com 2cm de água). Observe oscilação da coluna líquida com a respiração (confirma posição). Fixe com sutura em U + ponto bailarina (para fechamento após retirada).", tip: "Coluna que oscila = dreno bem posicionado. Borbulhamento contínuo = fístula aérea ou conexão frouxa." },
      { step: 8, title: "RX e cuidados", detail: "Solicite RX de tórax para confirmar posição e expansão pulmonar. Mantenha frasco SEMPRE abaixo do nível do tórax. Monitorize débito (cor, volume, velocidade).", tip: "Retirada: quando débito <200mL/24h, sem borbulhamento, pulmão expandido no RX. Clampeie por 4-6h e repita RX antes de retirar." },
    ],
    complications: [
      "Lesão pulmonar (pelo trocarte — evite!)",
      "Hemotórax iatrogênico (lesão de intercostais)",
      "Lesão diafragmática ou abdominal",
      "Infecção / empiema",
      "Enfisema subcutâneo",
      "Edema de reexpansão (se drenagem muito rápida em derrame crônico)",
      "Obstrução ou dobra do dreno",
    ],
    pearls: [
      "NUNCA use trocarte para inserir dreno — dissecção digital SEMPRE",
      "Dedo indicador dentro do tórax é obrigatório antes de passar o dreno",
      "Hemotórax maciço (>1500mL imediato ou >200mL/h por 2-4h) = toracotomia",
      "Pneumotórax hipertensivo: descompressão com agulha ANTES da drenagem formal",
    ],
    videoSearch: "chest tube insertion thoracostomy technique",
    guideline: "ATLS / BTS 2023",
  },
  {
    id: "sutura",
    title: "Técnicas de Sutura",
    category: "Cirurgia Menor",
    difficulty: "básico",
    image: suturaImg,
    indication: "Feridas limpas/limpas-contaminadas com <6h (face <12-24h), bordas alinhadas, sem sinais de infecção.",
    contraindications: [
      "Feridas infectadas (realizar limpeza e cicatrização por segunda intenção)",
      "Mordeduras em mãos/pés (fechamento primário contraindicado, exceto face)",
      "Feridas com >24h de evolução (relativa)",
      "Corpo estranho retido",
    ],
    materials: [
      "Kit de sutura (porta-agulhas, pinça dente-de-rato, tesoura)",
      "Fios: Nylon (pele), Vicryl/Catgut (subcutâneo), Seda (mucosa oral)",
      "Clorexidina aquosa ou PVPI",
      "Lidocaína 1-2% com ou sem adrenalina",
      "Seringa 10mL + agulha 25G (anestesia)",
      "SF 0,9% para lavagem copiosa",
      "Gaze estéril, campo estéril",
      "Fio por região: Face 5-0/6-0 | Couro cabeludo 3-0 | Tronco 3-0/4-0 | Extremidades 4-0/5-0",
    ],
    steps: [
      { step: 1, title: "Avaliação da ferida", detail: "Avalie profundidade, estruturas lesadas (tendões, nervos, vasos), contaminação, viabilidade dos tecidos. Verifique status vacinal (tétano).", tip: "Feridas em mão: SEMPRE avalie função tendinosa e sensitiva antes de anestesiar." },
      { step: 2, title: "Anestesia", detail: "Bloqueio local com lidocaína 1-2% infiltrada nas bordas da ferida. Dose máxima: 4,5mg/kg (sem adrenalina) ou 7mg/kg (com adrenalina).", tip: "NÃO use adrenalina em extremidades (dedos, nariz, orelha, pênis). Espere 5-10 min para efeito máximo." },
      { step: 3, title: "Lavagem e debridamento", detail: "Irrigação copiosa com SF 0,9% sob pressão (seringa 20mL + agulha 18G). Mínimo 200-500mL. Debride tecido desvitalizado com bisturi.", tip: "A irrigação é o fator MAIS importante na prevenção de infecção — mais que o antibiótico." },
      { step: 4, title: "Ponto simples separado", detail: "Mais versátil. Agulha entra perpendicular à pele, a 3-5mm da borda, percorre trajeto curvilíneo pegando mesma quantidade de tecido de ambos os lados. Nó quadrado com 4-5 seminós.", tip: "O ponto deve ficar levemente evertido — bordas invertidas resultam em cicatriz deprimida." },
      { step: 5, title: "Ponto Donati (colchoeiro vertical)", detail: "Para bordas com tendência à inversão. Entra longe (1cm) → sai profundo → entra raso no lado oposto → sai perto (3mm). Garante excelente eversão.", tip: "Ideal para couro cabeludo, dorso e áreas de tensão." },
      { step: 6, title: "Sutura contínua simples", detail: "Primeiro ponto como simples, depois continue passando a agulha sem cortar o fio. Mantenha tensão uniforme. Finalize com nó no último loop.", tip: "Vantagem: rápida e hemostática. Desvantagem: se romper em um ponto, toda a sutura abre." },
      { step: 7, title: "Sutura subdérmica (intradérmica)", detail: "Para resultado estético superior. Agulha percorre horizontalmente no plano subdérmico, alternando lados. Fio absorvível (Monocryl 4-0/5-0).", tip: "Ideal para face e áreas estéticas. Pode complementar com Steri-Strips." },
      { step: 8, title: "Curativo e orientações", detail: "Cubra com gaze estéril + micropore. Orientar: manter seco por 24-48h, lavar após com água e sabão, sinais de infecção (dor, calor, secreção). Retirada: face 5d, couro cabeludo 7-10d, tronco 10-14d, extremidades 10-14d, articulações 14d.", tip: "Profilaxia antitetânica: dT se última dose >5 anos (ferida suja) ou >10 anos (ferida limpa)." },
    ],
    complications: [
      "Infecção de ferida (2-5% em feridas limpas)",
      "Deiscência (abertura da sutura)",
      "Hematoma / seroma",
      "Cicatriz hipertrófica ou queloide",
      "Lesão de estruturas subjacentes (nervos, tendões)",
      "Reação ao fio de sutura",
    ],
    pearls: [
      "Bordas evertidas = boa cicatriz. Bordas invertidas = cicatriz deprimida",
      "Menos tensão = melhor resultado estético. Use pontos subdérmicos para reduzir tensão na pele",
      "Face: fio fino (5-0/6-0), muitos pontos próximos, retirada precoce (5 dias)",
      "Cola cirúrgica (Dermabond): alternativa para feridas superficiais, lineares, sem tensão",
    ],
    videoSearch: "suture techniques simple interrupted mattress subcuticular",
    guideline: "ATLS / Roberts & Hedges",
  },
  {
    id: "puncao-lombar",
    title: "Punção Lombar",
    category: "Neurologia",
    difficulty: "intermediário",
    image: puncaoImg,
    indication: "Suspeita de meningite, HSA com TC normal, síndrome de Guillain-Barré, esclerose múltipla, hipertensão intracraniana idiopática.",
    contraindications: [
      "Hipertensão intracraniana com efeito de massa (risco de herniação) — TC antes!",
      "Infecção no sítio de punção",
      "Coagulopatia grave (INR >1,5, plaquetas <50.000)",
      "Compressão medular (relativa)",
    ],
    materials: [
      "Agulha de punção lombar (22G atraumática tipo Sprotte — preferida)",
      "Manômetro de pressão liquórica",
      "4 tubos de coleta estéreis (numerados)",
      "Clorexidina alcoólica 2%",
      "Lidocaína 2% (5-10mL), seringa e agulha 25G",
      "Campos estéreis, luvas estéreis",
      "Gaze estéril, curativo oclusivo",
    ],
    steps: [
      { step: 1, title: "TC de crânio (se indicada)", detail: "Indicar TC antes da PL se: déficit focal, papiledema, alteração de consciência, imunossupressão, convulsão recente, >60 anos. Se meningite suspeita: NÃO atrasar antibiótico para TC.", tip: "Se TC normal em paciente com suspeita de HSA e PL com líquor xantocrômico: confirma HSA." },
      { step: 2, title: "Posicionamento", detail: "Decúbito lateral esquerdo com flexão máxima (posição fetal): joelhos ao peito, queixo ao peito. Alternativa: sentado inclinado sobre mesa.", tip: "Decúbito lateral permite aferição fidedigna da pressão de abertura." },
      { step: 3, title: "Identificação do nível", detail: "Palpe cristas ilíacas (linha intercrestal = L3-L4 ou L4-L5). Marque o espaço intervertebral. Cone medular termina em L1-L2 no adulto — puncione ABAIXO.", tip: "Use USG à beira-leito para marcar o espaço em pacientes obesos ou com anatomia difícil." },
      { step: 4, title: "Antissepsia e anestesia", detail: "Antissepsia ampla com clorexidina. Anestesia local com lidocaína 2%: botão dérmico e trajeto profundo.", tip: "Infiltre no plano do ligamento interespinhoso — é o mais doloroso." },
      { step: 5, title: "Punção", detail: "Insira agulha 22G na linha média, com bisel voltado para cima (paralelo às fibras durais, reduz cefaleia pós-PL). Avance lentamente com leve inclinação cefálica (10-15°). Remova o mandril a cada 2-3mm para verificar saída de líquor.", tip: "Sequência de resistências: pele → ligamento supraespinhoso → interespinhoso → amarelo (ligamentum flavum) → dura-máter (click)." },
      { step: 6, title: "Pressão de abertura", detail: "Conecte o manômetro assim que houver saída de líquor. Normal: 10-20 cmH₂O. Paciente deve estar relaxado, pernas esticadas.", tip: ">25 cmH₂O: hipertensão intracraniana. <6 cmH₂O: hipotensão liquórica." },
      { step: 7, title: "Coleta", detail: "Colete em 4 tubos (1mL cada): Tubo 1: bioquímica (proteínas, glicose). Tubo 2: microbiologia (Gram, cultura). Tubo 3: citologia (celularidade). Tubo 4: testes especiais (PCR, VDRL, etc.).", tip: "HSA: compare hemácias nos tubos 1 e 4. PL traumática: hemácias diminuem do tubo 1→4. HSA verdadeira: hemácias constantes + xantocromia." },
      { step: 8, title: "Pós-procedimento", detail: "Recoloque o mandril antes de retirar a agulha. Curativo oclusivo. Repouso por 1-2h (embora evidência de repouso prolongado seja fraca). Hidratação oral.", tip: "Cefaleia pós-PL (CPPD): postural, melhora deitado. Tratamento: cafeína VO ou blood patch epidural se persistente." },
    ],
    complications: [
      "Cefaleia pós-punção dural (10-30% — usar agulha atraumática reduz para <5%)",
      "Dor lombar local",
      "Herniação cerebral (se PIC elevada sem TC prévia)",
      "Hematoma epidural (raro, em coagulopatas)",
      "Infecção (meningite iatrogênica — extremamente rara)",
      "Punção traumática (sangue no líquor)",
    ],
    pearls: [
      "Agulha atraumática (Sprotte/Whitacre) reduz cefaleia pós-PL em >50%",
      "Recoloque SEMPRE o mandril antes de retirar a agulha",
      "Se suspeita de meningite: antibiótico ANTES da TC e PL, se houver atraso",
      "Xantocromia aparece 2-12h após HSA — solicitar se suspeita alta com TC normal",
    ],
    videoSearch: "lumbar puncture technique step by step",
    guideline: "AAN / AMIB 2023",
  },
  {
    id: "paracentese",
    title: "Paracentese Abdominal",
    category: "Gastroenterologia",
    difficulty: "intermediário",
    image: paracenteseImg,
    indication: "Ascite de início recente, suspeita de PBE, ascite tensa sintomática (alívio), diagnóstico diferencial de ascite.",
    contraindications: [
      "CIVD clinicamente evidente (relativa — corrigir antes)",
      "Fibrinólise (relativa)",
      "Abdome agudo cirúrgico com indicação de laparotomia",
      "NÃO são contraindicações: coagulopatia leve, plaquetopenia moderada, INR até 2,0",
    ],
    materials: [
      "Jelco 14G ou 16G (paracentese de alívio) ou agulha de paracentese com cateter",
      "Seringa 20-60mL, equipo de soro",
      "Frascos de coleta (citologia, bioquímica, cultura — inocular em frasco de hemocultura)",
      "Clorexidina aquosa 2%",
      "Lidocaína 2% (5-10mL)",
      "Bolsa de drenagem (se paracentese de alívio)",
      "Albumina 20% (se >5L drenados)",
    ],
    steps: [
      { step: 1, title: "Posicionamento e sítio", detail: "Paciente em decúbito dorsal, levemente lateralizado para o lado da punção. Sítio: quadrante inferior esquerdo (QIE), no ponto de McBurney invertido (1/3 lateral da linha espinha ilíaca-umbigo).", tip: "QIE preferido por menor risco de perfurar ceco (que é mais fixo à direita). Evite cicatrizes cirúrgicas (aderências)." },
      { step: 2, title: "Ultrassom", detail: "Use USG à beira-leito para confirmar presença de líquido, medir profundidade e marcar o melhor ponto de punção. Identifique alças e vasos.", tip: "USG reduz taxa de complicações para <1%. Marque o ponto com caneta antes de preparar o campo." },
      { step: 3, title: "Antissepsia e anestesia", detail: "Antissepsia com clorexidina. Anestesia com lidocaína 2%: pele → subcutâneo → peritônio parietal (é o mais sensível). Técnica em Z-track: tracione a pele 2cm antes de inserir, para evitar fístula.", tip: "Infiltre em plano profundo até aspirar líquido ascítico — isso confirma o trajeto." },
      { step: 4, title: "Punção diagnóstica", detail: "Insira Jelco 14-16G com seringa acoplada. Avance com aspiração contínua. Ao obter líquido: avance o cateter, retire a agulha. Colete: Tubo para celularidade, proteínas, albumina (GASA), glicose, LDH, cultura (em frasco de hemocultura).", tip: "GASA ≥1,1 = hipertensão portal (cirrose). GASA <1,1 = causa peritoneal (TB, neoplasia)." },
      { step: 5, title: "Paracentese de alívio", detail: "Se tensa: conecte equipo à bolsa de drenagem. Drene lentamente (máximo 1L/15min). Volume máximo seguro: até 5L sem reposição. Se >5L: repor Albumina 20% 8g por litro drenado.", tip: "Exemplo: drenagem de 8L → repor 64g de albumina (≈3,2 frascos de 50mL a 20%)." },
      { step: 6, title: "Análise do líquido", detail: "PMN ≥250/mm³ = PBE (peritonite bacteriana espontânea) → iniciar Ceftriaxona 2g/dia imediatamente. Proteínas <2,5g/dL: alto risco de PBE. Citologia oncótica se suspeita de neoplasia.", tip: "Inocule líquido em frasco de hemocultura à beira-leito — aumenta sensibilidade da cultura em 40%." },
      { step: 7, title: "Pós-procedimento", detail: "Retire o cateter. Curativo simples. Monitore PA e FC nas primeiras horas (risco de hipotensão em grandes volumes). Observe sítio de punção para vazamento.", tip: "Se vazamento persistente pelo orifício: ponto em X com Nylon 3-0. Orientar decúbito do lado oposto." },
    ],
    complications: [
      "Vazamento de líquido ascítico pelo sítio (mais comum)",
      "Hipotensão (se grandes volumes sem albumina)",
      "Perfuração de alça intestinal (rara com USG)",
      "Hematoma de parede abdominal",
      "Peritonite secundária (perfuração — muito rara)",
      "Infecção do sítio de punção",
    ],
    pearls: [
      "NÃO é necessário corrigir INR ou plaquetas de rotina antes da paracentese em cirróticos",
      "Use USG SEMPRE — mesmo com ascite volumosa clinicamente evidente",
      "Inocule em frasco de hemocultura à beira-leito — sensibilidade muito superior",
      "GASA é mais útil que classificação transudato/exsudato para ascite",
    ],
    videoSearch: "paracentesis technique ultrasound guided abdominal",
    guideline: "AASLD / EASL 2023",
  },
];

const difficultyColors = {
  "básico": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30",
  "intermediário": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  "avançado": "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30",
};

export default function ProcedureGuides() {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<Record<string, string[]>>({});

  const filtered = procedures.filter(p => {
    const q = search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const t = `${p.title} ${p.category} ${p.indication}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return t.includes(q);
  });

  const toggleSection = (procId: string, section: string) => {
    setExpandedSection(prev => {
      const current = prev[procId] || [];
      return {
        ...prev,
        [procId]: current.includes(section) ? current.filter(s => s !== section) : [...current, section],
      };
    });
  };

  const isSectionOpen = (procId: string, section: string) => {
    return (expandedSection[procId] || []).includes(section);
  };

  return (
    <>
      <TopBar title="Procedimentos Médicos" />
      <div className="px-4 py-4 max-w-2xl mx-auto pb-24">
        <div className="mb-4">
          <h1 className="text-xl font-bold font-heading flex items-center gap-2">
            <Syringe size={20} className="text-primary" />
            Guia de Procedimentos
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Passo a passo ilustrado com dicas práticas e pearls
          </p>
        </div>

        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar procedimento..."
            className="pl-9 h-10 rounded-xl"
          />
        </div>

        <div className="space-y-3">
          {filtered.map(proc => {
            const isExpanded = expandedId === proc.id;
            return (
              <div key={proc.id} className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border/50">
                {/* Card header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : proc.id)}
                  className="w-full text-left"
                >
                  <div className="relative">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className={cn("text-[10px] border", difficultyColors[proc.difficulty])}>
                          {proc.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-[10px] bg-white/10 text-white border-white/20">
                          {proc.category}
                        </Badge>
                      </div>
                      <h3 className="text-white font-bold text-sm">{proc.title}</h3>
                    </div>
                    <div className="absolute top-3 right-3">
                      {isExpanded ? (
                        <ChevronUp size={20} className="text-white/80" />
                      ) : (
                        <ChevronDown size={20} className="text-white/80" />
                      )}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 space-y-4">
                    {/* Indication */}
                    <div className="bg-primary/5 rounded-xl p-3">
                      <p className="text-xs font-semibold text-primary mb-1">📋 Indicações</p>
                      <p className="text-xs text-foreground/80">{proc.indication}</p>
                    </div>

                    {/* Contraindications */}
                    <CollapsibleSection
                      title="⛔ Contraindicações"
                      isOpen={isSectionOpen(proc.id, "contra")}
                      onToggle={() => toggleSection(proc.id, "contra")}
                    >
                      <ul className="space-y-1">
                        {proc.contraindications.map((c, i) => (
                          <li key={i} className="text-xs text-foreground/80 flex gap-2">
                            <span className="text-destructive shrink-0">•</span> {c}
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    {/* Materials */}
                    <CollapsibleSection
                      title="🧰 Material Necessário"
                      isOpen={isSectionOpen(proc.id, "materials")}
                      onToggle={() => toggleSection(proc.id, "materials")}
                    >
                      <ul className="space-y-1">
                        {proc.materials.map((m, i) => (
                          <li key={i} className="text-xs text-foreground/80 flex gap-2">
                            <CheckCircle2 size={12} className="text-primary shrink-0 mt-0.5" /> {m}
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    {/* Steps - always open */}
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-3 flex items-center gap-1.5">
                        📝 Passo a Passo
                      </p>
                      <div className="space-y-3">
                        {proc.steps.map(s => (
                          <div key={s.step} className="flex gap-3">
                            <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              {s.step}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-foreground">{s.title}</p>
                              <p className="text-xs text-foreground/70 mt-0.5 leading-relaxed">{s.detail}</p>
                              {s.tip && (
                                <div className="mt-1.5 flex gap-1.5 bg-amber-500/10 dark:bg-amber-500/5 rounded-lg p-2">
                                  <Info size={12} className="text-amber-500 shrink-0 mt-0.5" />
                                  <p className="text-[11px] text-amber-700 dark:text-amber-400 leading-relaxed">{s.tip}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Complications */}
                    <CollapsibleSection
                      title="⚠️ Complicações"
                      isOpen={isSectionOpen(proc.id, "complications")}
                      onToggle={() => toggleSection(proc.id, "complications")}
                    >
                      <ul className="space-y-1">
                        {proc.complications.map((c, i) => (
                          <li key={i} className="text-xs text-foreground/80 flex gap-2">
                            <AlertTriangle size={12} className="text-amber-500 shrink-0 mt-0.5" /> {c}
                          </li>
                        ))}
                      </ul>
                    </CollapsibleSection>

                    {/* Pearls */}
                    <div className="bg-primary/5 rounded-xl p-3">
                      <p className="text-xs font-semibold text-primary mb-2">💎 Pearls</p>
                      <ul className="space-y-1.5">
                        {proc.pearls.map((p, i) => (
                          <li key={i} className="text-xs text-foreground/80 flex gap-2">
                            <span className="text-primary shrink-0">→</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Video + Guideline */}
                    <div className="flex gap-2">
                      <a
                        href={`https://www.google.com/search?tbm=vid&q=${encodeURIComponent(proc.videoSearch)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-500/20 transition-colors"
                      >
                        <ExternalLink size={13} /> Ver Vídeos
                      </a>
                      <div className="flex-1 flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-muted/50 text-muted-foreground text-xs">
                        📖 {proc.guideline}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Syringe size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">Nenhum procedimento encontrado</p>
          </div>
        )}
      </div>
    </>
  );
}

function CollapsibleSection({ title, isOpen, onToggle, children }: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-border/50 rounded-xl overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-3 hover:bg-muted/30 transition-colors">
        <span className="text-xs font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {isOpen && <div className="px-3 pb-3">{children}</div>}
    </div>
  );
}
