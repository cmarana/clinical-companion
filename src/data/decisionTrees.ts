import type { TreeNode } from "@/components/DecisionTree";

export const pcrTree: TreeNode = {
  id: "pcr-start",
  label: "Paciente irresponsivo, sem pulso, sem respiração",
  type: "decision",
  detail: "Confirmar em <10 segundos. Checar pulso carotídeo.",
  children: [
    {
      label: "Confirmada PCR → Iniciar RCP",
      node: {
        id: "rcp",
        label: "Iniciar RCP de alta qualidade",
        type: "action",
        detail: "Compressões 100-120/min, 5-6cm de profundidade\nRelação 30:2 (sem IOT)\nMinimizar interrupções (<10s)\nTrocar compressor a cada 2 min",
        children: [
          {
            label: "Desfibrilador chegou → Checar ritmo",
            node: {
              id: "ritmo",
              label: "Qual o ritmo no monitor?",
              type: "decision",
              children: [
                {
                  label: "FV / TV sem pulso (Ritmo chocável)",
                  node: {
                    id: "chocavel",
                    label: "Desfibrilar 200J bifásico",
                    type: "action",
                    detail: "Choque → RCP imediata por 2 min\nAdrenalina 1mg IV a cada 3-5 min (após 2º choque)\nAmiodarona 300mg IV (após 3º choque) → 150mg",
                    children: [
                      {
                        label: "Ritmo organizado? Checar pulso",
                        node: {
                          id: "rosc-check",
                          label: "Pulso presente?",
                          type: "decision",
                          children: [
                            { label: "Sim → RCE (Retorno da Circulação Espontânea)", node: { id: "rosc", label: "Cuidados pós-PCR", type: "endpoint", detail: "PA >90mmHg, SpO2 94-98%, Temperatura 32-36°C\nECG 12 derivações\nConsiderar cateterismo se IAM\nTC crânio\nControle de temperatura terapêutico" } },
                            { label: "Não → Continuar RCP", node: { id: "cont", label: "Manter ciclos de RCP", type: "action", detail: "RCP 2 min → checar ritmo → choque se indicado\nAdrenalina a cada 3-5 min\nAvaliar causas reversíveis (5H e 5T)" } },
                          ],
                        },
                      },
                      {
                        label: "Avaliar causas reversíveis (5H e 5T)",
                        node: {
                          id: "5h5t",
                          label: "5H e 5T",
                          type: "warning",
                          detail: "5H: Hipovolemia, Hipóxia, H+ (acidose), Hipo/Hipercalemia, Hipotermia\n5T: Tensão (pneumotórax), Tamponamento, Toxinas, TEP, Trombose coronariana",
                        },
                      },
                    ],
                  },
                },
                {
                  label: "AESP / Assistolia (Não chocável)",
                  node: {
                    id: "nao-chocavel",
                    label: "NÃO desfibrilar!",
                    type: "warning",
                    detail: "RCP contínua por 2 min\nAdrenalina 1mg IV IMEDIATAMENTE (a cada 3-5 min)\nAvaliar causas reversíveis (5H e 5T)\nConsiderar IOT",
                    children: [
                      { label: "Assistolia confirmada em 2 derivações?", node: { id: "asist", label: "Confirmar assistolia", type: "decision", detail: "Verificar em 2 derivações\nAumentar ganho do monitor\nVerificar cabos e conexões", children: [
                        { label: "Sim → Manter RCP e tratar causas", node: { id: "asist-y", label: "RCP + Adrenalina + 5H/5T", type: "action", detail: "Manter RCP de alta qualidade\nAdrenalina 1mg IV a cada 3-5min\nTratar causas reversíveis\nConsiderar terminar esforços se >20min sem RCE e sem causa tratável" } },
                        { label: "Na verdade é FV fina → Tratar como chocável", node: { id: "fvfina", label: "Considerar choque", type: "action", detail: "Se dúvida entre FV fina e assistolia: tratar como assistolia\nMelhorar RCP pode converter FV fina em FV grosseira" } },
                      ] } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const sepseTree: TreeNode = {
  id: "sepse-start",
  label: "Suspeita de Infecção + Disfunção Orgânica",
  type: "decision",
  detail: "qSOFA ≥2: PAS ≤100, FR ≥22, Glasgow <15\nOU SOFA ≥2 pontos acima do basal",
  children: [
    {
      label: "qSOFA ≥2 → Investigar sepse",
      node: {
        id: "hour1",
        label: "PACOTE DA 1ª HORA",
        type: "action",
        detail: "1. Medir lactato arterial\n2. Coletar 2 pares de hemocultura\n3. Antibiótico IV de amplo espectro\n4. Cristalóide 30mL/kg se hipotensão ou lactato ≥4\n5. Vasopressor se PAM <65 após volume",
        children: [
          {
            label: "PAM ≥65 após volume?",
            node: {
              id: "pam",
              label: "Avaliar resposta ao volume",
              type: "decision",
              children: [
                { label: "Sim → Sepse sem choque", node: { id: "sepse-ok", label: "Manter antibiótico + Monitorar", type: "endpoint", detail: "Repetir lactato em 2-4h\nMonitorar diurese ≥0,5 mL/kg/h\nAvaliar foco e controle de fonte\nDesescalonar ATB conforme culturas" } },
                { label: "Não → Choque Séptico", node: { id: "choque", label: "Iniciar Noradrenalina", type: "action", detail: "Noradrenalina 0,1-2 mcg/kg/min IV em BIC\nAlvo: PAM ≥65 mmHg\nAcesso venoso central + PA invasiva", children: [
                  { label: "Refratário a noradrenalina?", node: { id: "refrat", label: "Choque Refratário", type: "decision", children: [
                    { label: "Sim → Associar drogas", node: { id: "refrat-y", label: "Vasopressina + Hidrocortisona", type: "action", detail: "Vasopressina 0,03 UI/min (adjuvante)\nHidrocortisona 50mg IV 6/6h\nConsiderar adrenalina como 2ª droga\nAvaliar ecocardiograma (disfunção miocárdica da sepse)" } },
                    { label: "Não → Manter conduta", node: { id: "refrat-n", label: "Titular noradrenalina conforme PAM", type: "endpoint", detail: "Reavaliação volêmica (responsividade a fluidos)\nLactato seriado como marcador de perfusão\nMeta: clareamento de lactato >10%/h" } },
                  ] } },
                ] } },
              ],
            },
          },
          {
            label: "Qual antibiótico empírico?",
            node: {
              id: "atb",
              label: "Escolha do Antibiótico por Foco",
              type: "action",
              detail: "Pulmonar: Ceftriaxona + Azitromicina\nAbdominal: Piperacilina-Tazobactam ou Meropenem\nUrinário: Ceftriaxona ou Ciprofloxacino\nPele: Oxacilina ou Vancomicina\nSem foco: Piperacilina-Tazobactam ou Meropenem",
            },
          },
        ],
      },
    },
  ],
};

export const iamTree: TreeNode = {
  id: "iam-start",
  label: "Dor torácica sugestiva de SCA",
  type: "decision",
  detail: "Dor precordial em aperto/queimação >20min\nIrradiação MSE/mandíbula\nSudorese, náusea, dispneia",
  children: [
    {
      label: "ECG em 10 minutos",
      node: {
        id: "ecg",
        label: "Resultado do ECG?",
        type: "decision",
        children: [
          {
            label: "Supra de ST → IAMCSST",
            node: {
              id: "stemi",
              label: "IAMCSST — Reperfusão URGENTE",
              type: "warning",
              detail: "AAS 300mg mastigado\nTicagrelor 180mg ou Clopidogrel 600mg\nHeparina NF 60UI/kg bolus\nAtorvastina 80mg",
              children: [
                {
                  label: "Angioplastia disponível em <120min?",
                  node: {
                    id: "pci",
                    label: "Estratégia de reperfusão",
                    type: "decision",
                    children: [
                      { label: "Sim → Angioplastia Primária", node: { id: "pci-y", label: "Cateterismo de Emergência", type: "endpoint", detail: "Porta-balão <90min\nHeparina na sala de hemodinâmica\nConsiderar BIA se choque\nMonitorização em UCO" } },
                      { label: "Não → Fibrinolítico", node: { id: "fibri", label: "Tenecteplase peso-ajustada", type: "action", detail: "Porta-agulha <30min\n<60kg: 30mg / 60-70kg: 35mg / 70-80kg: 40mg / 80-90kg: 45mg / >90kg: 50mg\nAvaliar critérios de reperfusão em 60-90min\nSe falha: transferir para angioplastia de resgate" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Sem supra → IAMSSST / Angina Instável",
            node: {
              id: "nstemi",
              label: "IAMSSST — Estratificação de Risco",
              type: "action",
              detail: "AAS 300mg + Ticagrelor 180mg\nEnoxaparina 1mg/kg SC 12/12h\nTroponina seriada (0h e 3h)\nEscore GRACE para definir estratégia",
              children: [
                { label: "GRACE >140 ou instabilidade?", node: { id: "grace", label: "Estratégia invasiva", type: "decision", children: [
                  { label: "Sim → Cateterismo precoce (<24h)", node: { id: "inv", label: "Cateterismo em até 24h", type: "endpoint", detail: "Manter dupla antiagregação\nBetabloqueador se FC >70 e PA >120\nIECA em 24h se estável\nEstatina de alta potência" } },
                  { label: "Não → Estratégia conservadora", node: { id: "cons", label: "Tratamento clínico + teste funcional", type: "endpoint", detail: "Manter medicações\nTeste provocativo de isquemia\nCateterismo se teste positivo\nAcompanhamento ambulatorial" } },
                ] } },
              ],
            },
          },
          {
            label: "ECG normal + Troponina normal",
            node: { id: "normal", label: "Considerar outras causas", type: "endpoint", detail: "Dor musculoesquelética\nGERD\nAnsiedade\nPneumotórax\nEmbolia pulmonar\nDissecção aórtica\nRepetir ECG e troponina em 3-6h" },
          },
        ],
      },
    },
  ],
};

export const avcTree: TreeNode = {
  id: "avc-start",
  label: "Déficit neurológico focal de início súbito",
  type: "decision",
  detail: "Escala de Cincinnati: assimetria facial, fraqueza em braço, alteração de fala\nRegistrar hora do início dos sintomas (last seen well)",
  children: [
    {
      label: "Ativar Código AVC → TC de Crânio URGENTE",
      node: {
        id: "tc",
        label: "Resultado da TC de Crânio?",
        type: "decision",
        detail: "Glicemia capilar OBRIGATÓRIA antes de trombolítico\nNIHSS para quantificar gravidade",
        children: [
          {
            label: "Sem sangramento → AVC Isquêmico",
            node: {
              id: "isq",
              label: "AVC Isquêmico — Avaliar Trombólise",
              type: "action",
              detail: "Janela: até 4,5h para trombólise IV\nAté 24h para trombectomia mecânica",
              children: [
                {
                  label: "Dentro da janela de 4,5h?",
                  node: {
                    id: "janela",
                    label: "Elegível para Alteplase?",
                    type: "decision",
                    children: [
                      { label: "Sim, sem contraindicações", node: { id: "tpa", label: "Alteplase 0,9 mg/kg IV", type: "action", detail: "Máximo 90mg\n10% em bolus em 1 min\n90% restante em 60 min\nPA <185/110 antes e <180/105 após\nNÃO usar antiagregante/anticoagulante por 24h\nMonitorar PA a cada 15min por 2h", children: [
                        { label: "Avaliar trombectomia mecânica", node: { id: "tromb", label: "AngioTC: Oclusão de grande vaso?", type: "decision", children: [
                          { label: "Sim, NIHSS ≥6 e ASPECTS ≥6", node: { id: "tromb-y", label: "Trombectomia mecânica", type: "endpoint", detail: "Transferir para centro com neurointervenção\nJanela: até 24h com mismatch em imagem\nManter PA controlada" } },
                          { label: "Não → Manter tratamento clínico", node: { id: "tromb-n", label: "Cuidados pós-trombólise", type: "endpoint", detail: "AAS em 24h\nProfilaxia TVP com compressão pneumática\nDisfagia screening antes de VO\nCabeceira 30°" } },
                        ] } },
                      ] } },
                      { label: "Não, contraindicação presente", node: { id: "no-tpa", label: "Sem trombólise IV", type: "action", detail: "AAS 300mg VO (se não hemorrágico)\nAvaliar trombectomia mecânica se oclusão de grande vaso\nControle de PA: tolerar até 220/120\nProfilaxia TVP" } },
                    ],
                  },
                },
                { label: "Fora da janela de 4,5h", node: { id: "fora", label: "Avaliar trombectomia (até 24h)", type: "action", detail: "AngioTC para avaliar oclusão de grande vaso\nSe elegível: trombectomia mecânica\nSe não: tratamento clínico\nAAS + estatina\nInvestigar etiologia (ecocardiograma, doppler carótidas)" } },
              ],
            },
          },
          {
            label: "Sangramento presente → AVC Hemorrágico",
            node: {
              id: "hem",
              label: "AVC Hemorrágico",
              type: "warning",
              detail: "NÃO trombolisar!\nControle pressórico: PAS <140mmHg\nReverter anticoagulação se em uso",
              children: [
                { label: "Avaliar necessidade neurocirúrgica", node: { id: "neuro", label: "Indicações cirúrgicas", type: "decision", children: [
                  { label: "Hematoma cerebelar >3cm ou hidrocefalia", node: { id: "cx-y", label: "Neurocirurgia de urgência", type: "endpoint", detail: "Drenagem do hematoma\nDVE se hidrocefalia\nUTI neurocirúrgica" } },
                  { label: "Hematoma supratentorial, estável", node: { id: "cx-n", label: "Tratamento conservador", type: "endpoint", detail: "UTI\nPA <140 mmHg (Nitroprussiato ou Labetalol IV)\nProfilaxia de convulsões se indicado\nMonitorizar PIC\nTC controle em 6-24h" } },
                ] } },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const anafilaxiaTree: TreeNode = {
  id: "anaf-start",
  label: "Reação alérgica sistêmica grave de início rápido",
  type: "decision",
  detail: "Urticária/angioedema + comprometimento respiratório e/ou hipotensão\nExposição a alérgeno conhecido (medicamento, alimento, inseto, látex)",
  children: [
    {
      label: "Critérios de anafilaxia presentes?",
      node: {
        id: "confirm",
        label: "ADRENALINA IM — PRIMEIRA LINHA",
        type: "warning",
        detail: "Adrenalina 1:1000 (1mg/mL)\n0,3-0,5mg IM na face anterolateral da coxa\nRepetir a cada 5-15 min se necessário",
        children: [
          {
            label: "Avaliar via aérea e respiração",
            node: {
              id: "airway",
              label: "Comprometimento respiratório?",
              type: "decision",
              children: [
                { label: "Sim — Estridor/broncoespasmo", node: { id: "resp-y", label: "Manejo respiratório", type: "action", detail: "O2 alto fluxo (máscara com reservatório)\nSalbutamol 5mg nebulização (broncoespasmo)\nConsiderar IOT precoce se edema de glote progressivo\nAdrenalina nebulizada 3-5mg se estridor" } },
                { label: "Não — Via aérea patente", node: { id: "resp-n", label: "Monitorar e manter observação", type: "action", detail: "O2 suplementar se SpO2 <94%\nMonitorização contínua" } },
              ],
            },
          },
          {
            label: "Avaliar circulação",
            node: {
              id: "circ",
              label: "Hipotensão / Choque?",
              type: "decision",
              children: [
                { label: "Sim — Choque anafilático", node: { id: "choque-anaf", label: "Ressuscitação volêmica + Adrenalina", type: "action", detail: "Trendelenburg (pernas elevadas)\nSF 0,9% 1-2L em bolus rápido\nAdrenalina IM repetida\nSe refratário: Adrenalina IV em BIC 0,1-1 mcg/kg/min\nGlucagon 1-5mg IV se uso de betabloqueador", children: [
                  { label: "Estabilizou?", node: { id: "estab", label: "Cuidados pós-estabilização", type: "decision", children: [
                    { label: "Sim", node: { id: "pos", label: "Observação 6-12h + Adjuvantes", type: "endpoint", detail: "Difenidramina 50mg IV\nRanitidina 50mg IV\nHidrocortisona 200mg IV (previne reação bifásica)\nPrescrever auto-injetor na alta\nOrientar sobre alérgeno e encaminhar ao alergista" } },
                    { label: "Não — Refratário", node: { id: "refrat", label: "Adrenalina IV em BIC + UTI", type: "endpoint", detail: "Adrenalina IV: 1mg em 250mL SF = 4mcg/mL\nIniciar 0,1 mcg/kg/min, titular\nConsiderar vasopressina\nIOT se edema de via aérea\nUTI" } },
                  ] } },
                ] } },
                { label: "Não — PA mantida", node: { id: "pa-ok", label: "Adjuvantes + Observação", type: "endpoint", detail: "Difenidramina 50mg IV\nRanitidina 50mg IV\nHidrocortisona 200mg IV\nObservar 6-8h (risco de reação bifásica em até 20%)\nPrescrever adrenalina auto-injetável na alta" } },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const choqueTree: TreeNode = {
  id: "choque-start",
  label: "Hipotensão + Sinais de hipoperfusão",
  type: "decision",
  detail: "PAS <90 ou PAM <65 + taquicardia, extremidades frias, oligúria, lactato elevado, alteração de consciência",
  children: [
    {
      label: "Identificar tipo de choque",
      node: {
        id: "tipo",
        label: "Qual o mecanismo?",
        type: "decision",
        detail: "Avaliar: história, exame físico, ecocardiograma POCUS, PVC, lactato",
        children: [
          {
            label: "Hipovolêmico (hemorragia, desidratação)",
            node: {
              id: "hipo",
              label: "Choque Hipovolêmico",
              type: "action",
              detail: "2 acessos calibrosos (14-16G)\nCristalóide aquecido: RL 1-2L bolus\nTipagem e reserva de sangue",
              children: [
                { label: "Hemorrágico?", node: { id: "hemorr", label: "Controle de sangramento", type: "decision", children: [
                  { label: "Sim — Transfusão maciça", node: { id: "transf", label: "Protocolo 1:1:1", type: "endpoint", detail: "CH : PFC : Plaquetas em proporção 1:1:1\nÁcido Tranexâmico 1g IV em 10min (se <3h)\nHipotensão permissiva (PAS ~90) em trauma penetrante\nControle cirúrgico do sangramento\nPrevenir tríade letal: hipotermia + acidose + coagulopatia" } },
                  { label: "Não — Desidratação/perdas", node: { id: "desid", label: "Reposição volêmica", type: "endpoint", detail: "Cristalóide 30mL/kg\nMonitorar diurese >0,5mL/kg/h\nLactato seriado\nTratar causa (diarreia, vômitos, queimaduras)" } },
                ] } },
              ],
            },
          },
          {
            label: "Distributivo (sepse, anafilaxia)",
            node: { id: "distrib", label: "Choque Distributivo", type: "action", detail: "Cristalóide 30mL/kg\nNoradrenalina se PAM <65 após volume\n\nSe Séptico: ATB na 1ª hora + culturas\nSe Anafilático: Adrenalina IM\nSe Neurogênico: Noradrenalina + Atropina se bradicardia" },
          },
          {
            label: "Cardiogênico (IAM, IC, arritmia)",
            node: { id: "cardio", label: "Choque Cardiogênico", type: "action", detail: "Eco de urgência\nDobutamina 2-20 mcg/kg/min se PAS >90\nNoradrenalina se PAS <90\nEvitar excesso de volume\nCateterismo emergência se IAM\nConsiderar BIA ou ECMO" },
          },
          {
            label: "Obstrutivo (TEP, tamponamento, pneumotórax)",
            node: { id: "obstru", label: "Choque Obstrutivo", type: "action", detail: "TEP: Heparina + Trombólise se maciço\nTamponamento: Pericardiocentese de urgência\nPneumotórax hipertensivo: Punção no 2º EIC linha hemiclavicular → Drenagem torácica\nVolume com cautela" },
          },
        ],
      },
    },
  ],
};

export const taquiarritmiaTree: TreeNode = {
  id: "taqui-start",
  label: "FC ≥100 bpm",
  type: "decision",
  detail: "ECG 12 derivações OBRIGATÓRIO\nAvaliar estabilidade hemodinâmica",
  children: [
    {
      label: "Paciente instável? (hipotensão, dor torácica, dispneia, rebaixamento)",
      node: {
        id: "estab",
        label: "Estabilidade hemodinâmica?",
        type: "decision",
        children: [
          {
            label: "INSTÁVEL → Cardioversão elétrica sincronizada",
            node: { id: "instavel", label: "Cardioversão Elétrica IMEDIATA", type: "warning", detail: "Sedar: Midazolam 3-5mg IV ou Propofol 1mg/kg\nQRS estreito: 50-100J → 200J → 360J\nQRS largo: 100J → 200J → 300J → 360J\nFA: 120-200J bifásico\nFlutter: 50-100J" },
          },
          {
            label: "ESTÁVEL → Avaliar QRS",
            node: {
              id: "qrs",
              label: "QRS estreito (<120ms) ou largo (≥120ms)?",
              type: "decision",
              children: [
                {
                  label: "QRS Estreito — Supraventricular",
                  node: {
                    id: "estreito",
                    label: "Tipo de taquicardia supraventricular?",
                    type: "decision",
                    children: [
                      { label: "Regular (TSVP)", node: { id: "tsvp", label: "Manobra vagal → Adenosina", type: "action", detail: "1. Valsalva modificada (soprar seringa 10mL por 15s, deitar e elevar pernas)\n2. Se não reverteu: Adenosina 6mg IV rápido (push + flush 20mL SF)\n3. Se não reverteu: Adenosina 12mg IV\n4. Se não reverteu: Adenosina 12mg IV\n5. Alternativa: Verapamil 5mg IV em 2min" } },
                      { label: "Irregular (FA / Flutter)", node: { id: "fa", label: "Controle de frequência ou ritmo", type: "action", detail: "Controle de FC (alvo <110):\nMetoprolol 5mg IV lento (até 15mg)\nDiltiazem 0,25mg/kg IV em 2min\n\nControle de ritmo (<48h ou anticoagulado):\nAmiodarona 150mg IV em 10min\nOU Cardioversão elétrica 120-200J\n\nAnticoagulação: avaliar CHA₂DS₂-VASc" } },
                    ],
                  },
                },
                {
                  label: "QRS Largo — Ventricular até prova contrária",
                  node: {
                    id: "largo",
                    label: "Tipo de TV?",
                    type: "decision",
                    children: [
                      { label: "Monomórfica", node: { id: "mono", label: "Amiodarona 150mg IV em 10min", type: "endpoint", detail: "Manutenção: 1mg/min por 6h → 0,5mg/min por 18h\nAlternativa: Procainamida 20-50mg/min\nSe deteriorar: cardioversão sincronizada" } },
                      { label: "Polimórfica (Torsades de Pointes)", node: { id: "torsades", label: "Sulfato de Magnésio 2g IV em 10min", type: "endpoint", detail: "Se instável: desfibrilação (NÃO sincronizada)\nCorrigir QT longo: suspender drogas, corrigir K e Mg\nIsoproterenol ou overdrive pacing se recorrente\nNÃO usar amiodarona (prolonga QT)" } },
                      { label: "Dúvida se TV ou TSV com aberrância", node: { id: "duvida", label: "Tratar como TV (mais seguro)", type: "warning", detail: "Amiodarona 150mg IV\nNÃO usar Verapamil/Diltiazem em QRS largo (pode ser fatal)\nSe WPW + FA: NÃO usar drogas que bloqueiam nó AV" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const bradicardiaTree: TreeNode = {
  id: "bradi-start",
  label: "FC <60 bpm",
  type: "decision",
  detail: "Avaliar: sintomas + ECG 12 derivações\nCausas: drogas (BB, BCC, digoxina), BAV, hipotireoidismo, hipercalemia, hipotermia",
  children: [
    {
      label: "Paciente sintomático? (hipotensão, síncope, dispneia, confusão)",
      node: {
        id: "sintomas",
        label: "Presença de sintomas?",
        type: "decision",
        children: [
          {
            label: "Assintomático",
            node: { id: "assint", label: "Observação e monitorização", type: "endpoint", detail: "ECG 12 derivações\nInvestigar causa\nSuspender drogas bradicardizantes se possível\nSe BAV 2º Mobitz II ou BAVT assintomático: ainda considerar marcapasso" },
          },
          {
            label: "Sintomático → Tratar",
            node: {
              id: "tratar",
              label: "Atropina 0,5mg IV",
              type: "action",
              detail: "Repetir a cada 3-5 min\nDose máxima: 3mg\nATENÇÃO: dose <0,5mg pode causar bradicardia paradoxal",
              children: [
                {
                  label: "Atropina funcionou?",
                  node: {
                    id: "resp-atro",
                    label: "Resposta à atropina?",
                    type: "decision",
                    children: [
                      { label: "Sim → Manter observação", node: { id: "atro-ok", label: "Monitorar + Investigar causa", type: "endpoint", detail: "Manter monitorização\nInvestigar causa reversível\nAvaliar necessidade de marcapasso definitivo\nSuspender drogas causadoras" } },
                      { label: "Não → Escalonar tratamento", node: { id: "atro-fail", label: "Dopamina ou Adrenalina + Marcapasso", type: "action", detail: "Dopamina 5-20 mcg/kg/min IV em BIC\nOU Adrenalina 2-10 mcg/min IV em BIC\nMarcapasso transcutâneo (sedar com Midazolam + Fentanil)\nFC no marcapasso: 60-80 bpm\nVerificar captura mecânica (pulso)", children: [
                        { label: "Marcapasso transcutâneo eficaz?", node: { id: "mptc", label: "Avaliar marcapasso transvenoso", type: "decision", children: [
                          { label: "Sim — Estável com MPTC", node: { id: "mptc-ok", label: "Manter até marcapasso definitivo", type: "endpoint", detail: "Solicitar avaliação de cardiologia/eletrofisiologia\nMarcapasso transvenoso como ponte se necessário\nManter sedação e analgesia" } },
                          { label: "Não — Falha de captura", node: { id: "mptc-fail", label: "Marcapasso transvenoso de URGÊNCIA", type: "endpoint", detail: "Acesso venoso central (jugular ou subclávia)\nEletrocateter sob fluoroscopia\nIsoproterenol 2-10 mcg/min como ponte\nAminofilina 250mg IV se denervação cardíaca" } },
                        ] } },
                      ] } },
                    ],
                  },
                },
                {
                  label: "Atropina ineficaz em BAV de alto grau?",
                  node: { id: "bav-alto", label: "BAV 2º Mobitz II ou BAVT", type: "warning", detail: "Atropina geralmente INEFICAZ nestes bloqueios\nIr direto para:\n• Dopamina/Adrenalina em BIC\n• Marcapasso transcutâneo IMEDIATO\n• Marcapasso transvenoso de urgência\nNÃO atrasar marcapasso" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const eapTree: TreeNode = {
  id: "eap-start",
  label: "Dispneia intensa + Estertores bilaterais + Ortopneia",
  type: "decision",
  detail: "Sinais: tosse com escarro róseo/espumoso, taquipneia, sudorese, ansiedade\nRx: infiltrado bilateral \"asa de borboleta\"",
  children: [
    {
      label: "Confirmar EAP → Iniciar tratamento",
      node: {
        id: "inicio",
        label: "Medidas iniciais SIMULTÂNEAS",
        type: "action",
        detail: "1. Sentar o paciente (pernas pendentes)\n2. O2 / VNI imediatamente\n3. Monitorização contínua (SpO2, PA, ECG)\n4. Acesso venoso",
        children: [
          {
            label: "VNI disponível?",
            node: {
              id: "vni",
              label: "Ventilação Não Invasiva",
              type: "decision",
              children: [
                { label: "Sim → Iniciar VNI (1ª linha)", node: { id: "vni-y", label: "CPAP 10 cmH2O ou BiPAP", type: "action", detail: "CPAP 10 cmH2O (mais simples)\nOU BiPAP: IPAP 10-15 / EPAP 5-8 cmH2O\nReduz necessidade de IOT em ~60%\nAvaliar resposta em 30-60 min" } },
                { label: "Não → O2 com máscara de reservatório", node: { id: "vni-n", label: "O2 alto fluxo", type: "action", detail: "Máscara com reservatório 10-15L/min\nAlvo SpO2 >94%\nPreparar para IOT se deteriorar" } },
              ],
            },
          },
          {
            label: "Avaliar PA e iniciar medicações",
            node: {
              id: "pa",
              label: "Qual a PA do paciente?",
              type: "decision",
              children: [
                { label: "PA alta (>140) — Mais comum", node: { id: "pa-alta", label: "Vasodilatadores + Diurético", type: "action", detail: "Furosemida 40-80mg IV (diurese + venodilatação)\nNitroglicerina IV 5-200 mcg/min (potente venodilatador)\nOU Nitrato SL 5mg (se sem acesso para BIC)\nCaptopril 25mg SL se PAS >160", children: [
                  { label: "Melhorou?", node: { id: "resp-alta", label: "Resposta ao tratamento?", type: "decision", children: [
                    { label: "Sim", node: { id: "ok-alta", label: "Manter e desmame da VNI", type: "endpoint", detail: "Manter diurético conforme diurese\nTitular vasodilatador\nDesmame gradual da VNI\nECG + BNP + Eco\nTratar causa de base (SCA, arritmia, crise HAS)" } },
                    { label: "Não — Refratário", node: { id: "refrat-eap", label: "IOT + VM + UTI", type: "endpoint", detail: "IOT com sequência rápida\nVM protetora\nConsiderar Nitroprussiato IV se HAS grave\nAvaliar ultrafiltração se anasarca\nUTI" } },
                  ] } },
                ] } },
                { label: "PA normal (100-140)", node: { id: "pa-norm", label: "Furosemida + VNI", type: "endpoint", detail: "Furosemida 40mg IV\nNitroglicerina com cautela (titular)\nMorfina 2-4mg IV se ansiedade intensa (com cautela)\nEvitar hipotensão" } },
                { label: "PA baixa (<100) — EAP + Choque", node: { id: "pa-baixa", label: "Inotrópicos + UTI", type: "warning", detail: "Dobutamina 2-20 mcg/kg/min\nNoradrenalina se PAS <80\nNÃO usar nitroglicerina ou morfina\nFurosemida com cautela (pode piorar hipotensão)\nIOT precoce\nUTI + Eco urgência\nConsiderar BIA se IAM" } },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const convulsaoTree: TreeNode = {
  id: "conv-start",
  label: "Paciente em crise convulsiva",
  type: "decision",
  detail: "Proteger via aérea, posicionar em decúbito lateral\nNÃO colocar nada na boca\nCronometrar duração da crise",
  children: [
    {
      label: "Crise >5 min ou sem recuperação entre crises?",
      node: {
        id: "status",
        label: "Status Epiléptico?",
        type: "decision",
        children: [
          {
            label: "Crise autolimitada (<5 min)",
            node: { id: "auto", label: "Crise cessou espontaneamente", type: "action", detail: "Posição de recuperação (decúbito lateral)\nO2 suplementar\nGlicemia capilar\nMonitorização\nAguardar recuperação da consciência\nInvestigar: TC crânio, eletrólitos, glicemia, toxicológico", children: [
              { label: "Primeira crise?", node: { id: "primeira", label: "Investigação etiológica", type: "endpoint", detail: "TC crânio sem contraste\nHemograma, eletrólitos, glicemia, cálcio, magnésio\nFunção renal e hepática\nScreening toxicológico\nEEG ambulatorial\nConsiderar RNM de crânio\nNÃO iniciar anticonvulsivante após crise única sem causa estrutural" } },
              { label: "Epilepsia conhecida", node: { id: "conhecida", label: "Verificar adesão e nível sérico", type: "endpoint", detail: "Verificar adesão ao anticonvulsivante\nDosar nível sérico se disponível (fenitoína, valproato)\nAjustar dose se subterapêutico\nIdentificar gatilhos: privação de sono, álcool, febre, medicamentos" } },
            ] },
          },
          {
            label: "Sim → Status Epiléptico (≥5 min)",
            node: {
              id: "se",
              label: "FASE 1 (0-5 min): Benzodiazepínico",
              type: "warning",
              detail: "Diazepam 10mg IV lento (0,15mg/kg)\nOU Midazolam 10mg IM (se sem acesso IV)\nO2 + Glicemia capilar\nGlicose 50% 40mL IV se hipoglicemia",
              children: [
                {
                  label: "Crise cessou com benzodiazepínico?",
                  node: {
                    id: "fase1-resp",
                    label: "Resposta ao BZD?",
                    type: "decision",
                    children: [
                      { label: "Sim → Anticonvulsivante de manutenção", node: { id: "bzd-ok", label: "Fenitoína 20mg/kg IV", type: "endpoint", detail: "Fenitoína 20mg/kg IV (máx 50mg/min) em SF — NÃO usar em SG!\nMonitorar ECG durante infusão (risco de arritmia e hipotensão)\nAlternativa: Valproato de sódio 40mg/kg IV em 10min\nTC crânio + investigação etiológica" } },
                      { label: "Não → FASE 2 (5-20 min)", node: { id: "fase2", label: "Fenitoína 20mg/kg IV", type: "action", detail: "Fenitoína 20mg/kg IV (máx 1500mg) em 20-30min\nVelocidade máxima: 50mg/min\nOU Valproato de sódio 40mg/kg IV em 10min\nOU Levetiracetam 60mg/kg IV (máx 4500mg) em 15min", children: [
                        { label: "Cessou?", node: { id: "fase2-resp", label: "Resposta à FASE 2?", type: "decision", children: [
                          { label: "Sim", node: { id: "fase2-ok", label: "Manter anticonvulsivante + UTI", type: "endpoint", detail: "Manter fenitoína 100mg IV 8/8h\nMonitorização contínua\nTC crânio + EEG\nInvestigar causa" } },
                          { label: "Não → FASE 3: Status Refratário", node: { id: "fase3", label: "IOT + Anestésico em BIC", type: "endpoint", detail: "IOT + Ventilação mecânica\nMidazolam IV: bolus 0,2mg/kg → 0,1-0,4mg/kg/h em BIC\nOU Propofol: bolus 2mg/kg → 2-5mg/kg/h\nOU Tiopental: bolus 3-5mg/kg → 1-5mg/kg/h\nEEG contínuo (alvo: surto-supressão)\nUTI\nManter por 24-48h antes de desmamar" } },
                        ] } },
                      ] } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

import { decisionTrees2 } from "./decisionTrees2";

export const decisionTrees: Record<string, { title: string; tree: TreeNode; guideline: string }> = {
  pcr: { title: "Fluxograma PCR / RCP", tree: pcrTree, guideline: "AHA 2020 / ACLS" },
  sepse: { title: "Fluxograma Sepse", tree: sepseTree, guideline: "Surviving Sepsis Campaign 2021" },
  iam: { title: "Fluxograma IAM / SCA", tree: iamTree, guideline: "SBC / AHA 2023" },
  avc: { title: "Fluxograma AVC", tree: avcTree, guideline: "AHA/ASA 2019" },
  anafilaxia: { title: "Fluxograma Anafilaxia", tree: anafilaxiaTree, guideline: "WAO / ASBAI" },
  "choque-hipovolemico": { title: "Fluxograma Choque", tree: choqueTree, guideline: "ATLS / SSC" },
  "choque-cardiogenico": { title: "Fluxograma Choque", tree: choqueTree, guideline: "ATLS / SSC" },
  taquiarritmia: { title: "Fluxograma Taquiarritmia", tree: taquiarritmiaTree, guideline: "AHA / ACLS 2020" },
  bradicardia: { title: "Fluxograma Bradicardia", tree: bradicardiaTree, guideline: "AHA / ACLS 2020" },
  "edema-agudo-pulmao": { title: "Fluxograma EAP", tree: eapTree, guideline: "SBC / ESC" },
  eap: { title: "Fluxograma EAP", tree: eapTree, guideline: "SBC / ESC" },
  convulsao: { title: "Fluxograma Convulsão", tree: convulsaoTree, guideline: "ABN / AES" },
  "status-epileptico": { title: "Fluxograma Status Epiléptico", tree: convulsaoTree, guideline: "ABN / AES" },
  ...decisionTrees2,
};
