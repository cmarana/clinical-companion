import { useState } from "react";
import TopBar from "@/components/TopBar";
import { useAuth } from "@/contexts/AuthContext";
import PremiumGate from "@/components/PremiumGate";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronDown, RotateCcw, CheckCircle2 } from "lucide-react";

interface CheckItem { id: string; text: string; critical?: boolean }
interface ChecklistData { id: string; title: string; subtitle: string; items: CheckItem[] }

const checklistsData: ChecklistData[] = [
  {
    id: "pcr", title: "PCR / ACLS", subtitle: "Parada Cardiorrespiratória",
    items: [
      { id: "pcr1", text: "Confirmar ausência de pulso carotídeo (<10s)", critical: true },
      { id: "pcr2", text: "Iniciar compressões torácicas (100-120/min)", critical: true },
      { id: "pcr3", text: "Pedir desfibrilador / DEA" },
      { id: "pcr4", text: "Garantir acesso venoso ou intraósseo" },
      { id: "pcr5", text: "Ventilar com BVM com O₂ 100%" },
      { id: "pcr6", text: "Monitorizar ritmo cardíaco" },
      { id: "pcr7", text: "FV/TV: desfibrilar 200J bifásico", critical: true },
      { id: "pcr8", text: "Adrenalina 1mg EV (a cada 3-5 min)" },
      { id: "pcr9", text: "FV/TV refratária: Amiodarona 300mg EV" },
      { id: "pcr10", text: "Considerar IOT (sem interromper compressões)" },
      { id: "pcr11", text: "Capnografia (ETCO₂) — confirmar IOT e qualidade da RCP" },
      { id: "pcr12", text: "Buscar causas reversíveis: 5H e 5T", critical: true },
      { id: "pcr13", text: "Alternar compressor a cada 2 min" },
      { id: "pcr14", text: "Registrar horários de drogas e choques" },
    ],
  },
  {
    id: "iot", title: "Intubação Orotraqueal", subtitle: "Sequência rápida de intubação",
    items: [
      { id: "iot1", text: "Avaliar via aérea (Mallampati, abertura oral, mobilidade cervical)" },
      { id: "iot2", text: "Preparar material: laringoscópio, tubos (7.0-8.0), guia, BVM" },
      { id: "iot3", text: "Aspirador montado e funcionando" },
      { id: "iot4", text: "Pré-oxigenar com O₂ 100% por 3-5 min", critical: true },
      { id: "iot5", text: "Monitorização: SpO₂, ECG, PA, capnógrafo" },
      { id: "iot6", text: "Acesso venoso calibroso confirmado" },
      { id: "iot7", text: "Drogas preparadas: Fentanil, Etomidato/Cetamina, Succinilcolina/Rocurônio" },
      { id: "iot8", text: "Pré-tratamento: Fentanil 2-3 mcg/kg EV (3 min antes)" },
      { id: "iot9", text: "Indução: Etomidato 0.3mg/kg ou Cetamina 1-2mg/kg EV", critical: true },
      { id: "iot10", text: "Bloqueador: Succinilcolina 1.5mg/kg ou Rocurônio 1.2mg/kg" },
      { id: "iot11", text: "Aguardar fasciculações cessarem (~45-60s)" },
      { id: "iot12", text: "Laringoscopia e inserção do tubo sob visão direta", critical: true },
      { id: "iot13", text: "Insuflar cuff (20-30 cmH₂O)" },
      { id: "iot14", text: "Confirmar posição: ausculta + capnografia", critical: true },
      { id: "iot15", text: "Fixar tubo e registrar nº na rima labial" },
      { id: "iot16", text: "Solicitar Rx de tórax para confirmação" },
      { id: "iot17", text: "Iniciar ventilação mecânica protetora" },
    ],
  },
  {
    id: "trauma", title: "Politrauma (ATLS)", subtitle: "Avaliação primária e secundária",
    items: [
      { id: "tr1", text: "A — Via aérea com proteção cervical", critical: true },
      { id: "tr2", text: "Colar cervical aplicado" },
      { id: "tr3", text: "B — Ventilação: ausculta bilateral, SpO₂, FR" },
      { id: "tr4", text: "Descartar pneumotórax hipertensivo", critical: true },
      { id: "tr5", text: "C — Circulação: dois acessos calibrosos (14-16G)" },
      { id: "tr6", text: "Tipagem sanguínea e prova cruzada" },
      { id: "tr7", text: "Ácido tranexâmico 1g EV (se <3h do trauma)", critical: true },
      { id: "tr8", text: "Reposição: Ringer Lactato 1000mL aquecido" },
      { id: "tr9", text: "Protocolo de Transfusão Maciça se indicado" },
      { id: "tr10", text: "D — Neurológico: Glasgow, pupilas, lateralização" },
      { id: "tr11", text: "E — Exposição: despir completamente + prevenir hipotermia" },
      { id: "tr12", text: "FAST (ultrassom) ou LPD", critical: true },
      { id: "tr13", text: "Sonda vesical (se não houver contraindicação)" },
      { id: "tr14", text: "Sonda nasogástrica (orogástrica se fratura base crânio)" },
      { id: "tr15", text: "Exames: hemograma, coagulograma, gasometria, lactato" },
      { id: "tr16", text: "TC (crânio, cervical, tórax, abdome, pelve) conforme indicação" },
      { id: "tr17", text: "Avaliação secundária: head-to-toe, dorso, períneo" },
    ],
  },
  {
    id: "sepse", title: "Sepse (Hour-1 Bundle)", subtitle: "Surviving Sepsis Campaign",
    items: [
      { id: "sep1", text: "Medir lactato sérico", critical: true },
      { id: "sep2", text: "Coletar hemoculturas (2 pares) ANTES do ATB", critical: true },
      { id: "sep3", text: "Iniciar antibiótico de amplo espectro na 1ª hora", critical: true },
      { id: "sep4", text: "Ringer Lactato 30 mL/kg se hipotensão ou lactato ≥4" },
      { id: "sep5", text: "Reavaliar volemia (após bolus: PA, FC, diurese, perfusão)" },
      { id: "sep6", text: "Iniciar vasopressor se PAM <65 após volume (Noradrenalina)" },
      { id: "sep7", text: "Relactar em 2-4h se lactato inicial elevado" },
      { id: "sep8", text: "Acesso venoso central (para vasopressor)" },
      { id: "sep9", text: "Sonda vesical para controle de diurese (>0.5 mL/kg/h)" },
      { id: "sep10", text: "Gasometria arterial" },
      { id: "sep11", text: "Exames: hemograma, PCR, procalcitonina, coagulograma, função renal/hepática" },
      { id: "sep12", text: "Controle glicêmico (alvo <180 mg/dL)" },
      { id: "sep13", text: "Profilaxia de TVP e úlcera de estresse" },
      { id: "sep14", text: "Considerar hidrocortisona se choque refratário a DVA" },
    ],
  },
  {
    id: "salaverm", title: "Sala Vermelha", subtitle: "Admissão do paciente grave",
    items: [
      { id: "sv1", text: "Monitor multiparamétrico (ECG, SpO₂, PA, FC, FR)", critical: true },
      { id: "sv2", text: "Dois acessos venosos periféricos calibrosos" },
      { id: "sv3", text: "O₂ suplementar conforme SpO₂" },
      { id: "sv4", text: "Avaliação primária (ABCDE)" },
      { id: "sv5", text: "Glasgow e pupilas" },
      { id: "sv6", text: "Glicemia capilar" },
      { id: "sv7", text: "ECG 12 derivações" },
      { id: "sv8", text: "Gasometria arterial + lactato" },
      { id: "sv9", text: "Exames laboratoriais de urgência" },
      { id: "sv10", text: "Comunicar equipe e acionar especialidades conforme caso" },
      { id: "sv11", text: "Identificar e tratar ameaças à vida (choque, IRpA, arritmias)" },
      { id: "sv12", text: "Registrar em prontuário: hora de chegada, avaliações, condutas" },
    ],
  },
  {
    id: "anafilaxia", title: "Anafilaxia", subtitle: "Reação alérgica grave sistêmica",
    items: [
      { id: "ana1", text: "ADRENALINA 0,5mg IM (coxa anterolateral) — 1ª linha IMEDIATA", critical: true },
      { id: "ana2", text: "Posicionar: decúbito dorsal + MMII elevados (NÃO sentar)", critical: true },
      { id: "ana3", text: "O₂ máscara 8-15 L/min" },
      { id: "ana4", text: "Acesso venoso + SF 0,9% 500-1000mL IV rápido" },
      { id: "ana5", text: "Repetir adrenalina a cada 5-15 min se sem resposta" },
      { id: "ana6", text: "Anti-H1 IV: difenidramina 50mg (após adrenalina)" },
      { id: "ana7", text: "Corticoide: metilprednisolona 125mg IV (não substitui adrenalina)" },
      { id: "ana8", text: "Broncoespasmo persistente: salbutamol inalatório + aminofilina" },
      { id: "ana9", text: "Adrenalina IV contínua se choque refratário" },
      { id: "ana10", text: "Observar 4-8h após resolução (reação bifásica 4-12h)" },
      { id: "ana11", text: "Identificar e remover o alérgeno se possível" },
      { id: "ana12", text: "Prescrever autoinjector de adrenalina para alta" },
    ],
  },
  {
    id: "avc-codigo", title: "AVC Código", subtitle: "Protocolo de AVC isquêmico agudo",
    items: [
      { id: "avc1", text: "Ativar código AVC — registrar hora de início dos sintomas", critical: true },
      { id: "avc2", text: "TC crânio sem contraste URGENTE (< 25 min da chegada)", critical: true },
      { id: "avc3", text: "Coletar: hemograma, coagulograma, glicemia, eletrólitos, tipagem" },
      { id: "avc4", text: "NIHSS — documentar gravidade neurológica" },
      { id: "avc5", text: "Excluir hipoglicemia (tratar se < 60 mg/dL)" },
      { id: "avc6", text: "Verificar critérios de tPA: janela < 4,5h, sem hemorragia na TC", critical: true },
      { id: "avc7", text: "tPA alteplase 0,9mg/kg IV (máx 90mg): 10% bolus + 90% em 60min" },
      { id: "avc8", text: "NÃO reduzir PA < 185/110 antes do tPA; < 180/105 após" },
      { id: "avc9", text: "Avaliar oclusão de grande vaso (NIHSS ≥ 6 + ASPECTS ≥ 6)" },
      { id: "avc10", text: "RACE/NIHSS ≥ 5: acionar trombectomia mecânica (< 24h)", critical: true },
      { id: "avc11", text: "AAS 100-300mg VO (se não usou tPA: iniciar em 24h)" },
      { id: "avc12", text: "Decúbito 0° (cabeceira plana) — melhora perfusão cerebral" },
      { id: "avc13", text: "Monitorização neurológica contínua nas primeiras 24h" },
    ],
  },
  {
    id: "tep-massivo", title: "TEP Maciço", subtitle: "Tromboembolismo pulmonar de alto risco",
    items: [
      { id: "tep1", text: "O₂ de alto fluxo + monitorização contínua", critical: true },
      { id: "tep2", text: "Heparina não fracionada 80 UI/kg IV bolus → 18 UI/kg/h BIC", critical: true },
      { id: "tep3", text: "Angio-TC tórax URGENTE (se estável)", critical: true },
      { id: "tep4", text: "Ecocardiograma à beira do leito (disfunção de VD?)" },
      { id: "tep5", text: "TEP + hipotensão/choque: trombólise sistêmica (alteplase 100mg IV em 2h)", critical: true },
      { id: "tep6", text: "Volume: fluidos com CAUTELA (sobrecarga de VD piora)" },
      { id: "tep7", text: "Vasopressor: norepinefrina se choque" },
      { id: "tep8", text: "Troponina + BNP (estratificação de risco)" },
      { id: "tep9", text: "TEP intermediário-alto: monitorizar deterioração → trombólise salva-vidas" },
      { id: "tep10", text: "Contraindicação à trombólise: embolectomia cirúrgica ou aspiração endovascular" },
      { id: "tep11", text: "Oxigenação: CPAP/VNI se dispneia grave; IOT evitar (piora hemodinâmica)" },
    ],
  },
  {
    id: "cad-ehh", title: "CAD / EHH", subtitle: "Cetoacidose e Hiperglicemia Hiperosmolar",
    items: [
      { id: "cad1", text: "SF 0,9% 1L IV em 1h (ressuscitação volêmica)", critical: true },
      { id: "cad2", text: "Verificar K⁺: NÃO iniciar insulina se K⁺ < 3,5 mEq/L", critical: true },
      { id: "cad3", text: "Repor K⁺: se 3,5-5,0 → 20-40 mEq/L no soro" },
      { id: "cad4", text: "Insulina regular 0,1 UI/kg/h IV BIC (após K⁺ > 3,5)" },
      { id: "cad5", text: "Meta de queda da glicemia: 50-70 mg/dL/h" },
      { id: "cad6", text: "Quando glicemia < 200: trocar para SG 5% + insulina 0,05 UI/kg/h" },
      { id: "cad7", text: "Monitorar glicemia, K⁺, gasometria a cada 1-2h" },
      { id: "cad8", text: "Bicarbonato: apenas se pH < 6,9" },
      { id: "cad9", text: "Critérios de resolução CAD: pH > 7,3 + HCO₃ > 18 + ânion gap fechado" },
      { id: "cad10", text: "Sobrepor insulina SC 2h ANTES de descontinuar insulina IV" },
      { id: "cad11", text: "Investigar e tratar precipitante (infecção, não adesão)" },
      { id: "cad12", text: "Sonda vesical se oligúria ou paciente comatoso" },
    ],
  },
  {
    id: "crise-asmatica", title: "Crise Asmática Grave", subtitle: "Broncoespasmo grave / quase fatal",
    items: [
      { id: "ast1", text: "O₂ para SpO₂ ≥ 93% (máscara + fluxo adequado)", critical: true },
      { id: "ast2", text: "Salbutamol 2,5-5mg nebulizado + ipratrópio 0,5mg (3 nebulizações em 1h)", critical: true },
      { id: "ast3", text: "Corticoide: metilprednisolona 125mg IV ou prednisona 40mg VO" },
      { id: "ast4", text: "Sulfato de Mg 2g IV em 20 min (se grave ou refratário a broncodilatador)", critical: true },
      { id: "ast5", text: "Heliox (70:30) se disponível e SpO₂ instável" },
      { id: "ast6", text: "Adrenalina SC 0,3mg (se broncoespasmo refratário ou anafilaxia associada)" },
      { id: "ast7", text: "Gasometria arterial se SpO₂ < 92% ou não melhora" },
      { id: "ast8", text: "VNI (BiPAP): SpO₂ < 90% refratária — evitar IOT se possível" },
      { id: "ast9", text: "IOT: apneia, rebaixamento de consciência, fadiga muscular", critical: true },
      { id: "ast10", text: "VM: hipercapnia permissiva + PEEP baixo + I:E 1:3-1:5" },
      { id: "ast11", text: "NÃO usar: AAS, AINE, betabloqueador" },
    ],
  },
  {
    id: "eclampsia", title: "Eclâmpsia", subtitle: "Convulsão em gestante/puérpera",
    items: [
      { id: "ecl1", text: "Posicionar em DLE (decúbito lateral esquerdo)", critical: true },
      { id: "ecl2", text: "O₂ máscara 8-10 L/min" },
      { id: "ecl3", text: "MgSO₄ 4-6g IV em 15-20 min (ataque)", critical: true },
      { id: "ecl4", text: "MgSO₄ manutenção: 1-2g/h BIC" },
      { id: "ecl5", text: "Monitorar toxicidade do Mg: diurese ≥ 25 mL/h, FR ≥ 12, reflexo patelar presente" },
      { id: "ecl6", text: "Antídoto do Mg: gluconato de cálcio 1g IV (10mL de 10%) à beira do leito", critical: true },
      { id: "ecl7", text: "Anti-hipertensivo se PA ≥ 160/110: labetalol 20mg IV ou hidralazina 5mg IV" },
      { id: "ecl8", text: "Meta de PA: 140-150 / 90-100 mmHg (não normalizar abruptamente)" },
      { id: "ecl9", text: "Monitorização fetal contínua (CTG)" },
      { id: "ecl10", text: "Corticoide se < 34 semanas: betametasona 12mg IM 24/24h × 2" },
      { id: "ecl11", text: "Definir via de parto após estabilização materna" },
      { id: "ecl12", text: "Acionar obstetrícia e UTI obstétrica" },
    ],
  },
  {
    id: "crise-adrenal", title: "Crise Adrenal", subtitle: "Insuficiência adrenal aguda",
    items: [
      { id: "cra1", text: "Hidrocortisona 100mg IV IMEDIATO (antes de qualquer exame laboratorial)", critical: true },
      { id: "cra2", text: "SF 0,9% 1-2L IV rápido (1ª hora)", critical: true },
      { id: "cra3", text: "Glicose 50% 40mL IV se hipoglicemia grave" },
      { id: "cra4", text: "Coletar cortisol basal ANTES da hidrocortisona se possível (não atrasar tto)" },
      { id: "cra5", text: "Hidrocortisona manutenção: 200mg/24h BIC ou 50mg IV 6/6h" },
      { id: "cra6", text: "Identificar e tratar precipitante (infecção, trauma, cirurgia)" },
      { id: "cra7", text: "Monitorizar glicemia a cada 2h" },
      { id: "cra8", text: "Reduzir hidrocortisona gradualmente em 2-3 dias conforme melhora" },
      { id: "cra9", text: "Fludrocortisona VO assim que tolerando (insuficiência primária)" },
      { id: "cra10", text: "Nunca suspender corticoide abruptamente em uso crônico" },
    ],
  },
  {
    id: "intoxicacao", title: "Intoxicação Exógena", subtitle: "Abordagem inicial ao intoxicado",
    items: [
      { id: "int1", text: "ABCDE: garantir via aérea + consciência (GCS)", critical: true },
      { id: "int2", text: "Glicemia capilar imediata (hipoglicemia é causa tratável)", critical: true },
      { id: "int3", text: "O₂ + monitorização contínua (ECG, SpO₂)" },
      { id: "int4", text: "Acesso venoso calibroso + colher exames (gasometria, eletrólitos, lactato)" },
      { id: "int5", text: "Identificar o agente: contato com CIAT (0800 722 6001)" },
      { id: "int6", text: "Descontaminação: pele (água + sabão), ocular (SF), VO (carvão ativado se < 1h e via aérea protegida)" },
      { id: "int7", text: "Carvão ativado 1g/kg VO/SNG se < 1h e sem contraindicação" },
      { id: "int8", text: "Antídotos específicos: naloxona (opioide), flumazenil (BZD — cautela), NAC (paracetamol), atropina (organofosforado)" },
      { id: "int9", text: "Bicarbonato IV se QRS ≥ 100ms (antidepressivo tricíclico)" },
      { id: "int10", text: "Lavagem gástrica: somente < 1h, via aérea protegida, agente não cáustico" },
      { id: "int11", text: "Notificar SINAN (intoxicação exógena é de notificação obrigatória)" },
    ],
  },
  {
    id: "choque-hemorragico", title: "Choque Hemorrágico", subtitle: "Ressuscitação hemostática no trauma",
    items: [
      { id: "ch1", text: "Controle de sangramento externo: compressão direta / torniquete", critical: true },
      { id: "ch2", text: "Dois acessos venosos calibrosos (14-16G) ou IO se falha" },
      { id: "ch3", text: "Ácido tranexâmico (TXA) 1g IV em 10 min (< 3h do trauma)", critical: true },
      { id: "ch4", text: "Tipagem sanguínea + prova cruzada + reserva de CH" },
      { id: "ch5", text: "Transfusão maciça: protocolo 1:1:1 (CH:PFC:plaquetas)", critical: true },
      { id: "ch6", text: "Permissive hypotension: PAS 80-90 mmHg (exceto TCE)" },
      { id: "ch7", text: "Ringer Lactato: limitar < 1-2L (evitar coagulopatia dilucional)" },
      { id: "ch8", text: "Evitar hipotermia: fluidos aquecidos + cobertor térmico" },
      { id: "ch9", text: "Fibrinogênio: repor se < 1,5g/L (crioprecipitado ou concentrado)" },
      { id: "ch10", text: "FAST: líquido livre + tamponamento cardíaco" },
      { id: "ch11", text: "Damage control surgery se tríade letal (hipotermia + acidose + coagulopatia)" },
    ],
  },
  {
    id: "politrauma-craniano", title: "TCE Grave", subtitle: "Traumatismo cranioencefálico grave",
    items: [
      { id: "tce1", text: "Imobilizar coluna cervical (colar + prancha longa)", critical: true },
      { id: "tce2", text: "GCS: se ≤ 8 → IOT protetora de via aérea", critical: true },
      { id: "tce3", text: "O₂ 100% + SpO₂ > 96% + evitar hipóxia (piora lesão secundária)", critical: true },
      { id: "tce4", text: "PA: manter PAS ≥ 100 mmHg (≥ 110 se > 50 anos)" },
      { id: "tce5", text: "TC crânio sem contraste urgente", critical: true },
      { id: "tce6", text: "Manitol 20% 1g/kg IV se herniação (pupila dilatada ou Cushing)" },
      { id: "tce7", text: "NaCl 3%: alternativa ao manitol" },
      { id: "tce8", text: "Cabeceira 30° (sem hipotensão)" },
      { id: "tce9", text: "Normocapnia: PaCO₂ 35-40 mmHg (hiperventilação só para herniação aguda)" },
      { id: "tce10", text: "Glicemia 140-180 mg/dL (evitar hipoglicemia e hiperglicemia)" },
      { id: "tce11", text: "Acionar neurocirurgia urgente" },
      { id: "tce12", text: "Monitorização de PIC se indicado" },
    ],
  },
  {
    id: "grande-queimado", title: "Grande Queimado", subtitle: "Queimaduras extensas (> 20% SCQ adulto)",
    items: [
      { id: "gq1", text: "Remover roupas e joias do local queimado (não se aderidas)", critical: true },
      { id: "gq2", text: "Via aérea: IOT precoce se queimadura facial/inalação (edema progressivo)", critical: true },
      { id: "gq3", text: "Calcular SCQ: regra dos 9s ou diagrama de Lund-Browder" },
      { id: "gq4", text: "Fórmula de Parkland: 4mL × peso(kg) × %SCQ = volume em 24h (RL aquecido)", critical: true },
      { id: "gq5", text: "50% do volume nas primeiras 8h + 50% nas próximas 16h" },
      { id: "gq6", text: "Meta de diurese: 0,5-1 mL/kg/h (adulto), 1 mL/kg/h (criança)" },
      { id: "gq7", text: "Controle da dor: morfina IV titulada + cetamina para curativos" },
      { id: "gq8", text: "Sonda vesical para controle de diurese" },
      { id: "gq9", text: "Analgesia + curativo estéril (não estourar bolhas)" },
      { id: "gq10", text: "Antibiótico: NÃO profilático de rotina; apenas em infecção confirmada" },
      { id: "gq11", text: "Nutrição enteral precoce (< 6h) — metabolismo hiperdinâmico" },
      { id: "gq12", text: "Encaminhar para centro de referência de queimados" },
    ],
  },
  {
    id: "abstinencia-alcoolica", title: "Abstinência Alcoólica", subtitle: "Síndrome de abstinência grave / delirium tremens",
    items: [
      { id: "abs1", text: "CIWA-Ar: score ≥ 8 → tratar farmacologicamente", critical: true },
      { id: "abs2", text: "Tiamina 500mg IV ANTES de qualquer glicose (prevenir Wernicke)", critical: true },
      { id: "abs3", text: "Diazepam 10mg IV lento (ou VO) — titular até sedação leve (sem teto)" },
      { id: "abs4", text: "Reavaliação com CIWA-Ar a cada 1-2h" },
      { id: "abs5", text: "Hidratação IV: SG 5% ou SF 0,9% (desnutrição frequente)" },
      { id: "abs6", text: "Suplementação: tiamina 100mg/dia + complexo B + Mg 2g IV" },
      { id: "abs7", text: "Convulsão: BZD IV + fenobarbital se refratário (NÃO fenitoína)" },
      { id: "abs8", text: "Delirium tremens (DT): UTI + BZD IV contínuo titulado" },
      { id: "abs9", text: "Propofol BIC se BZD refratário no DT" },
      { id: "abs10", text: "Monitorização cardíaca (prolongamento QT, arritmias)" },
      { id: "abs11", text: "Glicemia a cada 2-4h" },
    ],
  },
  {
    id: "via-aerea-dificil", title: "Via Aérea Difícil", subtitle: "Fallback e CICO",
    items: [
      { id: "vad1", text: "Chamar ajuda + anunciar: 'VIA AÉREA DIFÍCIL'", critical: true },
      { id: "vad2", text: "Retornar à ventilação com BVM + cânula de Guedel" },
      { id: "vad3", text: "Dispositivo supraglótico: LMA/iGel — inserir sem interromper O₂", critical: true },
      { id: "vad4", text: "Videolaringoscópio: 2ª tentativa com blade diferente" },
      { id: "vad5", text: "Bougie / guia elástico (introdutor de tubo)" },
      { id: "vad6", text: "Máximo 3 tentativas de laringoscopia no total", critical: true },
      { id: "vad7", text: "CICO (não pode intubar + não pode oxigenar): cricotireoidotomia IMEDIATA", critical: true },
      { id: "vad8", text: "Cricotireoidotomia cirúrgica: bisturi #20 + dilatação + tubo 6.0" },
      { id: "vad9", text: "Evitar múltiplas tentativas traumáticas (pioram edema)" },
      { id: "vad10", text: "Após resolução: planejar extubação e reintubação eletiva" },
    ],
  },
  {
    id: "hemorragia-pos-parto", title: "Hemorragia Pós-Parto", subtitle: "HPP — atonia uterina",
    items: [
      { id: "hpp1", text: "AMTSL profilática: ocitocina 10 UI IM imediatamente após nascimento", critical: true },
      { id: "hpp2", text: "Diagnóstico HPP: perda > 500mL (normal) ou > 1000mL (cesariana) ou instabilidade" },
      { id: "hpp3", text: "Massagem uterina bimanual + ocitocina 20 UI BIC", critical: true },
      { id: "hpp4", text: "Misoprostol 800 mcg sublingual/retal" },
      { id: "hpp5", text: "Ácido tranexâmico 1g IV em 10 min (< 3h do parto)", critical: true },
      { id: "hpp6", text: "Metilergometrina 0,2mg IM (contraindicado se HAS)" },
      { id: "hpp7", text: "Acesso venoso × 2 + tipagem + reserva de sangue" },
      { id: "hpp8", text: "Sonda vesical (bexiga cheia impede contração uterina)" },
      { id: "hpp9", text: "Comprimir aorta abdominal manualmente se choque" },
      { id: "hpp10", text: "Balão de Bakri (tamponamento uterino) se atonia refratária", critical: true },
      { id: "hpp11", text: "Cirurgia: sutura B-Lynch, ligadura de uterinas, histerectomia como último recurso" },
      { id: "hpp12", text: "Transfusão maciça se > 1500mL perdidos" },
    ],
  },
  {
    id: "pcr-pediatrica", title: "PCR Pediátrica (PALS)", subtitle: "Parada cardiorrespiratória em criança",
    items: [
      { id: "pals1", text: "Confirmar ausência de responsividade + pulso (< 10s)", critical: true },
      { id: "pals2", text: "Iniciar compressões: 1/3 do diâmetro AP do tórax (100-120/min)", critical: true },
      { id: "pals3", text: "Relação: 30:2 (1 socorrista) ou 15:2 (2 treinados)" },
      { id: "pals4", text: "O₂ 100% + BVM" },
      { id: "pals5", text: "Acesso IV ou IO (intraósseo se falha 2× ou 90s)" },
      { id: "pals6", text: "Ritmo: DEA/desfibrilador → FV/TV? → choque 2J/kg", critical: true },
      { id: "pals7", text: "Adrenalina 0,01mg/kg IV/IO a cada 3-5 min" },
      { id: "pals8", text: "Amiodarona 5mg/kg IV/IO (FV/TV refratária após 3° choque)" },
      { id: "pals9", text: "Tratar causas reversíveis: hipóxia, hipoglicemia, hipotermia, hipovolemia" },
      { id: "pals10", text: "Glicemia capilar imediata (hipoglicemia é comum em crianças)" },
      { id: "pals11", text: "IOT assim que disponível sem interromper compressões" },
      { id: "pals12", text: "Hipotermia terapêutica pós-PCR se comatoso" },
    ],
  },
];

export default function Checklists() {
  const { subscription } = useAuth();
  const [active, setActive] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, Set<string>>>({});

  if (!subscription.subscribed) {
    return <><TopBar title="Checklists" /><PremiumGate /></>;
  }

  const toggle = (listId: string, itemId: string) => {
    setChecked(prev => {
      const s = new Set(prev[listId] || []);
      if (s.has(itemId)) s.delete(itemId); else s.add(itemId);
      return { ...prev, [listId]: s };
    });
  };

  const resetList = (listId: string) => {
    setChecked(prev => ({ ...prev, [listId]: new Set() }));
  };

  const getProgress = (list: ChecklistData) => {
    const done = checked[list.id]?.size || 0;
    return Math.round((done / list.items.length) * 100);
  };

  return (
    <>
      <TopBar title="Checklists Interativos" />
      <div className="px-4 py-4 max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto space-y-3 pb-24">
        <p className="text-xs text-muted-foreground">Listas de verificação para situações críticas no PS e UTI</p>

        {checklistsData.map(list => {
          const isOpen = active === list.id;
          const progress = getProgress(list);
          const doneCount = checked[list.id]?.size || 0;

          return (
            <Card key={list.id} className="overflow-hidden">
              <button
                onClick={() => setActive(isOpen ? null : list.id)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <p className="font-heading font-semibold text-sm">{list.title}</p>
                    {doneCount === list.items.length && <CheckCircle2 size={14} className="text-primary" />}
                  </div>
                  <p className="text-[10px] text-muted-foreground">{list.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  {doneCount > 0 && <Badge variant="secondary" className="text-[10px]">{doneCount}/{list.items.length}</Badge>}
                  {isOpen ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
                </div>
              </button>

              {isOpen && (
                <CardContent className="px-4 pb-4 pt-0 space-y-2">
                  <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="space-y-1">
                    {list.items.map(item => {
                      const isDone = checked[list.id]?.has(item.id);
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${isDone ? "bg-primary/5" : "hover:bg-muted/50"} ${item.critical ? "border-l-2 border-destructive" : ""}`}
                        >
                          <input
                            type="checkbox"
                            checked={!!isDone}
                            onChange={() => toggle(list.id, item.id)}
                            className="mt-0.5 rounded border-border"
                          />
                          <span className={`text-xs leading-relaxed ${isDone ? "line-through text-muted-foreground" : ""}`}>
                            {item.text}
                            {item.critical && <span className="text-destructive ml-1 font-semibold">●</span>}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <button onClick={() => resetList(list.id)} className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors">
                    <RotateCcw size={10} /> Resetar checklist
                  </button>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </>
  );
}
