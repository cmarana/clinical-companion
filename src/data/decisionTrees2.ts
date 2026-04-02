import type { TreeNode } from "@/components/DecisionTree";

// ─── TEP ────────────────────────────────────────
export const tepTree: TreeNode = {
  id: "tep-start",
  label: "Suspeita de Tromboembolismo Pulmonar",
  type: "decision",
  detail: "Dispneia súbita, dor torácica pleurítica, taquicardia, hipoxemia\nFatores de risco: imobilização, cirurgia recente, neoplasia, TVP prévia, ACO",
  children: [
    {
      label: "Avaliar estabilidade hemodinâmica",
      node: {
        id: "estab",
        label: "Paciente hemodinamicamente estável?",
        type: "decision",
        children: [
          {
            label: "INSTÁVEL (PAS <90 ou choque) → TEP maciço",
            node: {
              id: "massivo",
              label: "TEP MACIÇO — Trombólise sistêmica",
              type: "warning",
              detail: "Alteplase 100mg IV em 2h\nOU Tenecteplase peso-ajustada\nHeparina NF concomitante\nConsiderar trombectomia se contraindicação a trombólise\nEco beira-leito: VD dilatado",
              children: [
                { label: "Respondeu à trombólise?", node: { id: "resp-trombo", label: "Resposta?", type: "decision", children: [
                  { label: "Sim → UTI + Anticoagulação", node: { id: "trombo-ok", label: "UTI + Heparina plena", type: "endpoint", detail: "Manter heparina NF em BIC\nTransição para DOAC em 24-48h\nAnticoagulação por mínimo 3 meses\nAvaliar causa e risco de recorrência" } },
                  { label: "Não → Trombectomia mecânica ou cirúrgica", node: { id: "trombo-fail", label: "Resgate invasivo", type: "endpoint", detail: "Trombectomia mecânica percutânea\nOU Embolectomia cirúrgica (Trendelenburg)\nECMO como ponte se disponível" } },
                ] } },
              ],
            },
          },
          {
            label: "ESTÁVEL → Estratificar risco",
            node: {
              id: "estavel",
              label: "Probabilidade clínica (Wells / Geneva)",
              type: "decision",
              children: [
                { label: "Baixa/Intermediária probabilidade", node: { id: "baixa", label: "D-dímero", type: "decision", detail: "Se <500 ng/mL (ou ajustado por idade): exclui TEP\nSe elevado: AngioTC de tórax", children: [
                  { label: "D-dímero normal → TEP excluído", node: { id: "dd-neg", label: "Buscar diagnóstico alternativo", type: "endpoint", detail: "Considerar: pneumonia, EAP, derrame pleural, dor musculoesquelética\nSem necessidade de anticoagulação" } },
                  { label: "D-dímero elevado → AngioTC", node: { id: "dd-pos", label: "AngioTC confirma TEP?", type: "decision", children: [
                    { label: "Sim → Anticoagulação", node: { id: "tep-conf", label: "Iniciar anticoagulação", type: "action", detail: "Risco intermediário-alto (VD dilatado + troponina): Heparina NF\nRisco intermediário-baixo: DOAC (Rivaroxabana 15mg 12/12h por 21d → 20mg/dia)\nOU Enoxaparina 1mg/kg 12/12h → transição para Warfarina" } },
                    { label: "Não → Diagnóstico alternativo", node: { id: "tep-neg", label: "Buscar outra causa", type: "endpoint" } },
                  ] } },
                ] } },
                { label: "Alta probabilidade", node: { id: "alta", label: "AngioTC direto (sem esperar D-dímero)", type: "action", detail: "Se AngioTC indisponível: iniciar heparina empírica\nAlternativa: cintilografia V/Q\nEco beira-leito: avaliar VD" } },
              ],
            },
          },
        ],
      },
    },
  ],
};

// ─── PNEUMONIA COMUNITÁRIA ──────────────────────
export const pneumoniaTree: TreeNode = {
  id: "pnm-start",
  label: "Pneumonia Adquirida na Comunidade (PAC)",
  type: "decision",
  detail: "Tosse + febre + dispneia + infiltrado radiológico\nAvaliar gravidade com CURB-65 ou PSI",
  children: [
    {
      label: "Estratificar gravidade (CURB-65)",
      node: {
        id: "curb",
        label: "CURB-65: Confusão, Ureia >50, FR ≥30, PA <90/60, ≥65 anos",
        type: "decision",
        children: [
          { label: "0-1 ponto → Ambulatório", node: { id: "amb", label: "Tratamento ambulatorial", type: "endpoint", detail: "Amoxicilina 500mg 8/8h por 5-7 dias\nOU Azitromicina 500mg/dia por 3-5 dias\nSe comorbidades: Amoxicilina-Clavulanato + Azitromicina\nRetorno em 48-72h se sem melhora" } },
          { label: "2 pontos → Enfermaria", node: { id: "enf", label: "Internação em enfermaria", type: "action", detail: "Ceftriaxona 1g IV 12/12h + Azitromicina 500mg IV/VO 1x/dia\nOU Levofloxacino 750mg IV 1x/dia (monoterapia)\nHemoculturas + escarro se possível\nO2 suplementar se SpO2 <94%" } },
          { label: "3-5 pontos → UTI", node: { id: "uti", label: "PAC grave — UTI", type: "warning", detail: "Ceftriaxona 2g IV 12/12h + Azitromicina 500mg IV\nSe risco de Pseudomonas: Piperacilina-Tazobactam + Levofloxacino\nSe risco de MRSA: adicionar Vancomicina ou Linezolida\nVNI ou IOT conforme necessidade\nVasopressor se choque", children: [
            { label: "Sem melhora em 48-72h?", node: { id: "falha", label: "Falha terapêutica", type: "decision", children: [
              { label: "Complicação: empiema/abscesso", node: { id: "comp", label: "TC tórax + Drenagem", type: "endpoint", detail: "TC de tórax com contraste\nToracocentese diagnóstica\nDrenagem torácica se empiema\nAjustar ATB conforme culturas" } },
              { label: "Considerar outros diagnósticos", node: { id: "outros", label: "Diagnóstico diferencial", type: "endpoint", detail: "TEP, IC descompensada, neoplasia, TB pulmonar\nBroncoscopia com LBA se imunossuprimido\nAjustar cobertura antimicrobiana" } },
            ] } },
          ] } },
        ],
      },
    },
  ],
};

// ─── CETOACIDOSE DIABÉTICA ──────────────────────
export const cadTree: TreeNode = {
  id: "cad-start",
  label: "Hiperglicemia + Acidose + Cetonemia/Cetonúria",
  type: "decision",
  detail: "Glicemia >250 mg/dL + pH <7,3 + HCO3 <18 + AG elevado\nCausas: omissão de insulina, infecção, IAM, cirurgia",
  children: [
    {
      label: "Confirmar CAD → Iniciar tratamento",
      node: {
        id: "tto",
        label: "3 PILARES: Hidratação + Insulina + Potássio",
        type: "action",
        detail: "1. SF 0,9% 1-1,5L na 1ª hora\n2. Insulina Regular 0,1 UI/kg bolus → 0,1 UI/kg/h BIC\n3. Repor K+ se <5,2 mEq/L ANTES da insulina",
        children: [
          {
            label: "Potássio sérico?",
            node: {
              id: "k",
              label: "Checar K+ antes de iniciar insulina!",
              type: "decision",
              children: [
                { label: "K+ <3,3 → NÃO iniciar insulina", node: { id: "k-baixo", label: "Repor K+ primeiro!", type: "warning", detail: "KCl 40 mEq/h IV até K+ >3,3\nSÓ então iniciar insulina\nRisco de arritmia fatal se insulina com hipocalemia" } },
                { label: "K+ 3,3-5,2 → Repor K+ junto com insulina", node: { id: "k-ok", label: "KCl 20-30 mEq/L no soro", type: "action", detail: "Manter K+ entre 4-5 mEq/L\nDosar K+ a cada 2h\nIniciar insulina normalmente" } },
                { label: "K+ >5,2 → Não repor, monitorar", node: { id: "k-alto", label: "Iniciar insulina sem K+", type: "action", detail: "Insulina vai reduzir o K+\nDosar K+ a cada 1-2h\nRepor quando K+ <5,2" } },
              ],
            },
          },
          {
            label: "Glicemia caiu para <250?",
            node: {
              id: "glicemia",
              label: "Transição",
              type: "decision",
              children: [
                { label: "Sim → Mudar soro para SG 5%", node: { id: "sg5", label: "SG 5% + Insulina em dose menor", type: "action", detail: "Trocar SF por SG 5%\nReduzir insulina para 0,02-0,05 UI/kg/h\nManter glicemia entre 150-250\nNÃO suspender insulina até resolver acidose (pH >7,3 + HCO3 >18 + AG normal)" } },
                { label: "Não → Manter conduta", node: { id: "manter", label: "Manter SF + Insulina BIC", type: "action", detail: "Se glicemia não cair 50-70mg/dL/h:\nDobrar taxa de insulina\nVerificar acesso venoso\nDosar glicemia capilar a cada 1h" } },
              ],
            },
          },
          {
            label: "Critérios de resolução?",
            node: {
              id: "resolucao",
              label: "CAD resolvida quando:",
              type: "endpoint",
              detail: "pH >7,3 + HCO3 >18 + AG <12\nGlicemia <200 + paciente alimentando\n→ Transição para insulina SC:\nAplicar insulina SC 1-2h ANTES de suspender BIC\nRetornar esquema basal-bolus habitual",
            },
          },
        ],
      },
    },
  ],
};

// ─── HIPERCALEMIA ───────────────────────────────
export const hipercalemiaTree: TreeNode = {
  id: "hiperk-start",
  label: "Potássio sérico >5,5 mEq/L",
  type: "decision",
  detail: "Causas: IRA/DRC, rabdomiólise, acidose, drogas (IECA, espironolactona, AINEs)\nRisco de arritmia fatal se K+ >6,5",
  children: [
    {
      label: "ECG tem alterações?",
      node: {
        id: "ecg",
        label: "Avaliar ECG imediatamente",
        type: "decision",
        children: [
          {
            label: "Sim: onda T apiculada, QRS alargado, bradicardia",
            node: {
              id: "ecg-alt",
              label: "EMERGÊNCIA — Estabilizar membrana",
              type: "warning",
              detail: "Gluconato de Cálcio 10% — 10mL IV em 2-3 min\nEfeito em 1-3 min, duração 30-60 min\nPode repetir se ECG não normalizar\nNÃO reduz o K+, apenas protege o coração",
              children: [
                { label: "Próximo: Shift de K+ para intracelular", node: { id: "shift", label: "Reduzir K+ rapidamente", type: "action", detail: "Insulina Regular 10 UI + Glicose 50% 50mL IV\n(Efeito em 15-30 min, dura 4-6h)\n+\nNebulização com Salbutamol 10-20mg\n(Efeito em 15-30 min)\n+\nBicarbonato de sódio 8,4% 50mL IV se pH <7,2", children: [
                  { label: "Remover K+ do organismo", node: { id: "remover", label: "Eliminação de K+", type: "endpoint", detail: "Furosemida 40-80mg IV (se função renal preservada)\nResina de troca: Poliestirenossulfonato de cálcio 30g VO\nOU Patiromer / Ciclossilicato de zircônio\nHemodiálise de urgência se: refratário, K+ >7, IRA oligúrica" } },
                ] } },
              ],
            },
          },
          {
            label: "Não: ECG normal, K+ 5,5-6,5",
            node: {
              id: "ecg-nl",
              label: "Hipercalemia moderada",
              type: "action",
              detail: "Suspender drogas hipercalemiantes (IECA, espironolactona, AINEs)\nFurosemida 40mg IV\nResina de troca VO\nDieta pobre em K+\nMonitorar K+ a cada 4-6h",
            },
          },
        ],
      },
    },
  ],
};

// ─── HEMORRAGIA DIGESTIVA ALTA ──────────────────
export const hdaTree: TreeNode = {
  id: "hda-start",
  label: "Hematêmese / Melena / Instabilidade hemodinâmica",
  type: "decision",
  detail: "Avaliar ABCDE, 2 acessos calibrosos, tipagem sanguínea\nCausas: úlcera péptica, varizes esofágicas, Mallory-Weiss, neoplasia",
  children: [
    {
      label: "Ressuscitação inicial",
      node: {
        id: "ressus",
        label: "Estabilização hemodinâmica",
        type: "action",
        detail: "2 acessos venosos calibrosos (14-16G)\nSF 0,9% ou RL em bolus\nReserva de hemácias: transfundir se Hb <7 (ou <9 se coronariopata)\nIOT protetora se hematêmese maciça com rebaixamento",
        children: [
          {
            label: "Suspeita de varizes esofágicas?",
            node: {
              id: "varizes",
              label: "Sinais de hepatopatia crônica?",
              type: "decision",
              detail: "Ascite, hepatomegalia, icterícia, aranhas vasculares, circulação colateral",
              children: [
                { label: "Sim → HDA varicosa", node: { id: "varicosa", label: "Terapia para varizes", type: "action", detail: "Octreotida 50mcg IV bolus → 50mcg/h em BIC por 3-5 dias\nOU Terlipressina 2mg IV 4/4h → 1mg 4/4h\nCeftriaxona 1g IV 1x/dia por 7 dias (profilaxia PBE)\nEDA terapêutica em <12h: ligadura elástica\nSe falha: Balão de Sengstaken-Blakemore (ponte)\nTIPS se refratário" } },
                { label: "Não → HDA não varicosa", node: { id: "nao-varicosa", label: "IBP + EDA", type: "action", detail: "Omeprazol 80mg IV bolus → 8mg/h em BIC\nEDA em <24h (ou <12h se instabilidade)\nClassificação de Forrest para risco de ressangramento\nTerapia endoscópica: clipes, eletrocautério, adrenalina", children: [
                  { label: "Glasgow-Blatchford score", node: { id: "gbs", label: "Estratificação de risco", type: "endpoint", detail: "GBS 0-1: considerar alta precoce e EDA ambulatorial\nGBS ≥2: internação + EDA\nRockall pós-EDA para risco de mortalidade" } },
                ] } },
              ],
            },
          },
        ],
      },
    },
  ],
};

// ─── INSUFICIÊNCIA RESPIRATÓRIA AGUDA ───────────
export const iraRespTree: TreeNode = {
  id: "ira-resp-start",
  label: "Dispneia aguda + Hipoxemia (SpO2 <92% ou PaO2 <60)",
  type: "decision",
  detail: "Avaliar: FR, tiragem, uso de musculatura acessória, cianose\nGasometria arterial para classificar tipo",
  children: [
    {
      label: "Tipo de insuficiência respiratória?",
      node: {
        id: "tipo",
        label: "Gasometria arterial",
        type: "decision",
        children: [
          { label: "Tipo I (Hipoxêmica): PaO2 baixa, PaCO2 normal/baixa", node: { id: "tipo1", label: "Causas: PNM, TEP, EAP, SDRA", type: "action", detail: "O2 suplementar (CN → Máscara → VNI → IOT)\nTratar causa de base\nSe P/F <200: SDRA → VM protetora", children: [
            { label: "P/F <150 e refratário?", node: { id: "sdra-grave", label: "SDRA Grave", type: "warning", detail: "VM protetora: VT 6mL/kg, Pplatô <30\nPEEP alta (tabela PEEP/FiO2)\nPosição prona ≥16h/dia\nBloqueio neuromuscular por 48h\nConsiderar ECMO se refratário" } },
          ] } },
          { label: "Tipo II (Hipercápnica): PaCO2 >50 + pH <7,35", node: { id: "tipo2", label: "Causas: DPOC, asma grave, neuromuscular", type: "action", detail: "VNI como 1ª linha (BiPAP: IPAP 12-20, EPAP 5-8)\nBroncodilatadores se broncoespasmo\nCorticoide sistêmico se DPOC/asma\nIOT se falha de VNI ou Glasgow <10", children: [
            { label: "Falha de VNI em 1-2h?", node: { id: "falha-vni", label: "IOT + VM", type: "endpoint", detail: "Sequência rápida de intubação\nVM: evitar auto-PEEP (↑ tempo expiratório)\nSedação leve\nDesmamar VNI precocemente" } },
          ] } },
        ],
      },
    },
  ],
};

// ─── CRISE ASMÁTICA ─────────────────────────────
export const asmaTree: TreeNode = {
  id: "asma-start",
  label: "Dispneia + Sibilos + Uso de musculatura acessória",
  type: "decision",
  detail: "Avaliar gravidade: fala em frases? frases curtas? palavras? não fala?\nPFE se possível. SpO2, FR, FC",
  children: [
    {
      label: "Classificar gravidade da crise",
      node: {
        id: "grav",
        label: "Gravidade da crise asmática?",
        type: "decision",
        children: [
          { label: "Leve a Moderada (fala em frases, SpO2 >92%)", node: { id: "leve", label: "Beta-2 inalatório + Corticoide", type: "endpoint", detail: "Salbutamol 4-8 puffs (com espaçador) a cada 20min por 1h\nOU Nebulização: Fenoterol 10-20 gotas + SF 3mL\nPrednisona 40-60mg VO (ou Hidrocortisona 100mg IV)\nReavaliar em 1h" } },
          { label: "Grave (palavras isoladas, FR >30, FC >120, SpO2 <92%)", node: { id: "grave", label: "Tratamento agressivo", type: "warning", detail: "Salbutamol nebulização contínua\n+ Brometo de Ipratrópio 40 gotas na 1ª hora\n+ Hidrocortisona 200mg IV\n+ Sulfato de Magnésio 2g IV em 20min\nO2 para SpO2 >93%\nNÃO sedar o paciente!", children: [
            { label: "Melhora em 1h?", node: { id: "resp-grave", label: "Resposta?", type: "decision", children: [
              { label: "Sim → Manter e observar 4-6h", node: { id: "melhora", label: "Reduzir intensidade + Observar", type: "endpoint", detail: "Espaçar nebulizações para 1/1h → 2/2h\nManter corticoide\nAlta com Prednisona 40mg 5-7 dias + plano de ação" } },
              { label: "Não → Quase-fatal / IOT", node: { id: "quase-fatal", label: "Preparar IOT", type: "endpoint", detail: "Adrenalina 0,3mg IM ou SC\nConsiderar Aminofilina IV (controverso)\nIOT: usar cetamina como indutor (broncodilatador)\nVM: cuidado com auto-PEEP, ↑ tempo expiratório\nAnestesia inalatória como resgate (sevoflurano)" } },
            ] } },
          ] } },
        ],
      },
    },
  ],
};

// ─── DPOC EXACERBADA ────────────────────────────
export const dpocTree: TreeNode = {
  id: "dpoc-start",
  label: "Piora da dispneia + Aumento de escarro/purulência",
  type: "decision",
  detail: "Classificar gravidade: fala em frases? uso de acessória? cianose?\nGasometria arterial obrigatória",
  children: [
    {
      label: "Tratamento inicial",
      node: {
        id: "tto",
        label: "A-B-C da exacerbação de DPOC",
        type: "action",
        detail: "A: Antibiótico (se escarro purulento ou VM)\nB: Broncodilatador (Salbutamol + Ipratrópio)\nC: Corticoide (Prednisona 40mg 5 dias)",
        children: [
          { label: "Gasometria: acidose respiratória?", node: { id: "gas", label: "pH <7,35 + PaCO2 >45?", type: "decision", children: [
            { label: "Sim → VNI como 1ª linha", node: { id: "vni", label: "BiPAP: IPAP 12-15 / EPAP 5-6", type: "action", detail: "Reduz IOT em 60% e mortalidade em 50%\nReavaliar em 1-2h: pH melhorando?\nContraindicações: Glasgow <10, vômitos, instabilidade", children: [
              { label: "Falha de VNI?", node: { id: "falha", label: "IOT + VM", type: "endpoint", detail: "FR baixa (10-12), VT 6-8 mL/kg\n↑ Tempo expiratório (I:E 1:3 a 1:4)\nPEEP 80% da auto-PEEP\nCuidado com hiperinsuflação dinâmica" } },
            ] } },
            { label: "Não → Manter broncodilatadores + corticoide", node: { id: "sem-acidose", label: "O2 controlado + Neb + CE", type: "endpoint", detail: "O2 alvo: 88-92% (cuidado com narcose de CO2)\nNebulização de resgate 1/1h nas primeiras horas\nPrever alta em 24-48h se estável" } },
          ] } },
        ],
      },
    },
  ],
};

// ─── HIPONATREMIA ───────────────────────────────
export const hiponatremiaTree: TreeNode = {
  id: "hiponat-start",
  label: "Sódio sérico <135 mEq/L",
  type: "decision",
  detail: "Avaliar: sintomas neurológicos, velocidade de instalação, volemia\nRisco de desmielinização osmótica se correção rápida!",
  children: [
    {
      label: "Paciente com sintomas neurológicos graves?",
      node: {
        id: "sint",
        label: "Convulsão, rebaixamento, coma?",
        type: "decision",
        children: [
          { label: "Sim → Correção urgente", node: { id: "urgente", label: "NaCl 3% (solução hipertônica)", type: "warning", detail: "NaCl 3%: 100mL IV em 10 min (pode repetir até 3x)\nAlvo: elevar Na+ em 4-6 mEq/L nas primeiras horas\nLIMITE: máximo 8-10 mEq/L em 24h\nDosar Na+ a cada 2h\nRisco de desmielinização osmótica se corrigir >10-12 mEq/L/dia" } },
          { label: "Não → Avaliar volemia", node: { id: "volemia", label: "Status volêmico?", type: "decision", children: [
            { label: "Hipovolêmico (desidratação, diuréticos)", node: { id: "hipo", label: "SF 0,9% + Corrigir causa", type: "endpoint", detail: "Repor volume com SF 0,9%\nSuspender tiazídicos\nCorrigir lentamente: <8 mEq/L/dia\nDosar Na+ a cada 4-6h" } },
            { label: "Euvolêmico (SIADH, hipotireoidismo)", node: { id: "eu", label: "Restrição hídrica 800-1000 mL/dia", type: "endpoint", detail: "Tratar causa de base (SIADH: neoplasia, medicamentos)\nSe refratário: Furosemida + NaCl VO\nVaptanos (Tolvaptana) em casos selecionados\nDosar Na+ a cada 6-8h" } },
            { label: "Hipervolêmico (IC, cirrose, nefrose)", node: { id: "hiper", label: "Restrição hídrica + Diurético", type: "endpoint", detail: "Restrição hídrica <1L/dia\nFurosemida para sobrecarga\nTratar causa de base (IC, cirrose)\nNÃO usar SF 0,9% (piora hipervolemia)" } },
          ] } },
        ],
      },
    },
  ],
};

// ─── INTOXICAÇÃO EXÓGENA ────────────────────────
export const intoxicacaoTree: TreeNode = {
  id: "intox-start",
  label: "Suspeita de intoxicação exógena",
  type: "decision",
  detail: "Identificar: substância, dose, tempo, via, sintomas\nABCDE + Monitorização contínua",
  children: [
    {
      label: "Estabilizar ABCDE → Identificar toxídrome",
      node: {
        id: "toxidrome",
        label: "Qual toxídrome predominante?",
        type: "decision",
        children: [
          { label: "Colinérgica (organofosforado, carbamato)", node: { id: "colin", label: "SLUDGE: salivação, lacrimejamento, diarreia", type: "action", detail: "Atropina 2mg IV a cada 5 min até secar secreções\nPralidoxima 1-2g IV em 30min (se organofosforado)\nNÃO usar succinilcolina para IOT\nDescontaminação cutânea se exposição dérmica" } },
          { label: "Anticolinérgica (antihistamínicos, atropina)", node: { id: "anticolin", label: "Taquicardia, midríase, pele seca, retenção", type: "action", detail: "Fisostigmina 1-2mg IV lento (se grave/convulsão)\nBZD para agitação/convulsão\nSuporte clínico\nCarvão ativado se <1h" } },
          { label: "Simpatomimética (cocaína, anfetamina)", node: { id: "simpato", label: "Taquicardia, HAS, midríase, sudorese, agitação", type: "action", detail: "BZD para agitação e convulsão\nNitroprussiato se HAS grave\nNÃO usar betabloqueador puro (risco de estimulação alfa)\nResfriar se hipertermia\nTC crânio se déficit focal" } },
          { label: "Opioide (morfina, heroína, fentanil)", node: { id: "opioide", label: "Rebaixamento + miose + bradipneia", type: "warning", detail: "Naloxona 0,4-2mg IV/IM (repetir a cada 2-3 min)\nVentilar com BVM se apneia\nCuidado: meia-vida da Naloxona < meia-vida do opioide\nConsiderar infusão contínua de Naloxona" } },
          { label: "Outra substância / Desconhecida", node: { id: "outra", label: "Medidas gerais", type: "action", detail: "Carvão ativado 1g/kg VO se <1h e via aérea protegida\nLavagem gástrica se <1h e substância potencialmente letal\nNÃO induzir vômitos com xarope de ipeca\nExames: gasometria, eletrólitos, função renal/hepática, ECG, toxicológico" } },
        ],
      },
    },
  ],
};

// ─── MENINGITE ──────────────────────────────────
export const meningiteTree: TreeNode = {
  id: "mening-start",
  label: "Cefaleia + Febre + Rigidez de nuca",
  type: "decision",
  detail: "Tríade clássica presente em <50% dos casos\nAvaliar: Kernig, Brudzinski, petéquias, rebaixamento\nATB na 1ª hora salva vidas!",
  children: [
    {
      label: "Paciente tem contraindicação para punção lombar?",
      node: {
        id: "pl",
        label: "Contraindicações para PL?",
        type: "decision",
        detail: "CI: sinais de HIC, coagulopatia grave, infecção no local, instabilidade",
        children: [
          { label: "Sim → ATB empírico ANTES da TC/PL", node: { id: "ci-sim", label: "NÃO atrasar ATB!", type: "warning", detail: "Ceftriaxona 2g IV 12/12h + Dexametasona 0,15mg/kg IV\n+ Vancomicina 15-20mg/kg IV (se risco de pneumococo resistente)\n+ Ampicilina 2g IV 4/4h se >50 anos, imunossuprimido, etilista\nTC crânio → PL quando seguro → ajustar ATB" } },
          { label: "Não → Punção lombar", node: { id: "ci-nao", label: "Colher LCR → ATB empírico", type: "action", detail: "Iniciar ATB imediatamente após coleta do LCR\nDexametasona 0,15mg/kg IV 15-20min ANTES do ATB\n(reduz mortalidade em meningite pneumocócica)", children: [
            { label: "Resultado do LCR?", node: { id: "lcr", label: "Análise do líquor", type: "decision", children: [
              { label: "Bacteriano (PMN↑, proteína↑, glicose↓)", node: { id: "bact", label: "Meningite bacteriana", type: "endpoint", detail: "Manter Ceftriaxona 2g 12/12h por 10-14 dias\n+ Vancomicina se suspeita de pneumococo resistente\n+ Ampicilina se >50a ou imunossuprimido (Listeria)\nDexametasona por 4 dias\nNotificação compulsória\nQuimioprofilaxia de contactantes se meningococo" } },
              { label: "Viral (linfocítico, proteína nl, glicose nl)", node: { id: "viral", label: "Meningite viral", type: "endpoint", detail: "Suporte clínico\nConsiderar Aciclovir 10mg/kg IV 8/8h se suspeita de HSV\nAnalgesia e hidratação\nBom prognóstico na maioria" } },
            ] } },
          ] } },
        ],
      },
    },
  ],
};

// ─── IRA (INSUFICIÊNCIA RENAL AGUDA) ────────────
export const iraRenalTree: TreeNode = {
  id: "ira-renal-start",
  label: "Elevação aguda de creatinina e/ou oligúria",
  type: "decision",
  detail: "KDIGO: ↑Cr ≥0,3 em 48h OU ↑Cr ≥1,5x basal em 7 dias OU diurese <0,5 mL/kg/h por 6h\nAvaliar: pré-renal, renal intrínseca, pós-renal",
  children: [
    {
      label: "Classificar etiologia",
      node: {
        id: "etiol",
        label: "Qual o mecanismo?",
        type: "decision",
        children: [
          { label: "Pré-renal (hipovolemia, IC, sepse)", node: { id: "pre", label: "Ressuscitação volêmica", type: "action", detail: "SF 0,9% 250-500mL bolus e reavaliar\nFE Na <1%, FE Ureia <35%\nSuspender nefrotóxicos (AINEs, IECA, aminoglicosídeos)\nTratar causa de base (sepse, IC)\nSe não responder ao volume: considerar renal intrínseca" } },
          { label: "Renal intrínseca (NTA, nefrite, glomerulonefrite)", node: { id: "renal", label: "Investigar causa renal", type: "action", detail: "EAS + proteinúria + sedimento urinário\nFE Na >2%\nSorologias se GN (FAN, ANCA, complemento, anti-GBM)\nBiópsia renal se indicada\nSuporte: balanço hídrico, ajustar doses de drogas" } },
          { label: "Pós-renal (obstrução)", node: { id: "pos", label: "USG de rins e vias urinárias", type: "action", detail: "USG: hidronefrose bilateral ou unilateral em rim único\nCausas: HPB, litíase, neoplasia\nSVD de alívio + Urologista\nAtenção à poliúria desobstrutiva (repor volume!)" } },
        ],
      },
    },
    {
      label: "Indicações de diálise de urgência?",
      node: {
        id: "dialise",
        label: "AEIOU — Indicações urgentes",
        type: "warning",
        detail: "A: Acidose refratária (pH <7,1)\nE: Eletrólitos (hipercalemia refratária)\nI: Intoxicação dialilsável (metanol, etilenoglicol, lítio, salicilatos)\nO: Overload (hipervolemia com EAP refratário)\nU: Uremia (encefalopatia, pericardite, sangramento)",
      },
    },
  ],
};

// ─── DENGUE ─────────────────────────────────────
export const dengueTree: TreeNode = {
  id: "dengue-start",
  label: "Febre + Mialgia + Cefaleia retro-orbitária + Prova do laço",
  type: "decision",
  detail: "Classificar: Dengue sem sinais de alarme, com sinais de alarme, ou grave\nHemograma + Hematócrito seriado",
  children: [
    {
      label: "Sinais de alarme presentes?",
      node: {
        id: "alarme",
        label: "Sinais de alarme?",
        type: "decision",
        detail: "Dor abdominal intensa, vômitos persistentes, acúmulo de líquidos, sangramento de mucosas, letargia/irritabilidade, hepatomegalia >2cm, ↑Ht com ↓plaquetas",
        children: [
          { label: "Sem sinais de alarme → Grupo A/B", node: { id: "sem", label: "Hidratação oral ambulatorial", type: "endpoint", detail: "Grupo A: 60mL/kg/dia VO (1/3 SRO + 2/3 líquidos)\nGrupo B (petéquias ou comorbidades): hidratação supervisionada + hemograma\nRetorno diário até 48h após defervescência\nParacetamol ou Dipirona (NÃO usar AAS ou AINEs)\nSinais de alarme → retornar imediatamente" } },
          { label: "Com sinais de alarme → Grupo C", node: { id: "com", label: "Internação + Hidratação IV", type: "action", detail: "SF 0,9% 20mL/kg em 2h\nReavaliar: se melhorar → 25mL/kg em 6h\nHt a cada 2h nas primeiras 8h\nManter Ht entre 40-44%\nTransfusão de plaquetas só se sangramento ativo" } },
          { label: "Dengue grave → Grupo D", node: { id: "grave", label: "Choque por dengue — UTI", type: "warning", detail: "SF 0,9% 20mL/kg em bolus em 15-20 min\nRepetir até 3x se necessário\nAlbumina 0,5-1g/kg se refratário a cristalóide\nNoradrenalina se choque refratário\nTransfusão de CH se Ht <38% com sangramento\nUTI + monitorização intensiva\nCuidado: fase de reabsorção (risco de EAP)" } },
        ],
      },
    },
  ],
};

// ─── Export all new trees ───────────────────────
export const decisionTrees2: Record<string, { title: string; tree: TreeNode; guideline: string }> = {
  tep: { title: "Fluxograma TEP", tree: tepTree, guideline: "ESC 2019 / SBC" },
  pneumonia: { title: "Fluxograma PAC", tree: pneumoniaTree, guideline: "SBPT / ATS/IDSA 2019" },
  cad: { title: "Fluxograma CAD", tree: cadTree, guideline: "ADA 2023 / SBD" },
  "cetoacidose": { title: "Fluxograma Cetoacidose", tree: cadTree, guideline: "ADA 2023 / SBD" },
  hipercalemia: { title: "Fluxograma Hipercalemia", tree: hipercalemiaTree, guideline: "KDIGO / SBN" },
  hda: { title: "Fluxograma HDA", tree: hdaTree, guideline: "ASGE / ESGE 2021" },
  "hemorragia-digestiva": { title: "Fluxograma HDA", tree: hdaTree, guideline: "ASGE / ESGE 2021" },
  "insuficiencia-respiratoria": { title: "Fluxograma IRpA", tree: iraRespTree, guideline: "SBPT / ATS" },
  "sdra": { title: "Fluxograma IRpA / SDRA", tree: iraRespTree, guideline: "SBPT / ATS" },
  asma: { title: "Fluxograma Crise Asmática", tree: asmaTree, guideline: "GINA 2023 / SBPT" },
  "crise-asmatica": { title: "Fluxograma Crise Asmática", tree: asmaTree, guideline: "GINA 2023 / SBPT" },
  dpoc: { title: "Fluxograma DPOC Exacerbada", tree: dpocTree, guideline: "GOLD 2024 / SBPT" },
  "exacerbacao-dpoc": { title: "Fluxograma DPOC Exacerbada", tree: dpocTree, guideline: "GOLD 2024 / SBPT" },
  hiponatremia: { title: "Fluxograma Hiponatremia", tree: hiponatremiaTree, guideline: "European Guideline 2014 / SBN" },
  intoxicacao: { title: "Fluxograma Intoxicação", tree: intoxicacaoTree, guideline: "ABRACIT / Toxicologia clínica" },
  meningite: { title: "Fluxograma Meningite", tree: meningiteTree, guideline: "IDSA 2017 / MS Brasil" },
  "ira-renal": { title: "Fluxograma IRA", tree: iraRenalTree, guideline: "KDIGO 2012 / SBN" },
  "insuficiencia-renal": { title: "Fluxograma IRA", tree: iraRenalTree, guideline: "KDIGO 2012 / SBN" },
  dengue: { title: "Fluxograma Dengue", tree: dengueTree, guideline: "MS Brasil 2024 / OMS" },
};
