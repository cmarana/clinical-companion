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

export const decisionTrees: Record<string, { title: string; tree: TreeNode; guideline: string }> = {
  pcr: { title: "Fluxograma PCR / RCP", tree: pcrTree, guideline: "AHA 2020 / ACLS" },
  sepse: { title: "Fluxograma Sepse", tree: sepseTree, guideline: "Surviving Sepsis Campaign 2021" },
  iam: { title: "Fluxograma IAM / SCA", tree: iamTree, guideline: "SBC / AHA 2023" },
  avc: { title: "Fluxograma AVC", tree: avcTree, guideline: "AHA/ASA 2019" },
};
