import { useNavigate } from "react-router-dom";
import { Bot, ClipboardList, Calculator, GitBranch } from "lucide-react";
import { useState } from "react";
import PrescriptionGenerator from "./PrescriptionGenerator";
import ShareMenu from "./ShareMenu";
import { formatProtocolForShare } from "@/lib/shareUtils";

// Maps protocol IDs / keywords to AI context prompts
const AI_CONTEXT_MAP: Record<string, string> = {
  // Cardiology
  "iam": "IAM / Síndrome Coronariana Aguda — contexto cardiológico",
  "supra": "IAM com Supra de ST — contexto cardiológico de emergência",
  "sem-supra": "IAM sem Supra — contexto cardiológico",
  "eap": "Edema Agudo de Pulmão — contexto cardiológico/emergência",
  "cardiogenico": "Choque Cardiogênico — contexto cardiológico/UTI",
  "taquiarritmia": "Taquiarritmia — contexto cardiológico",
  "bradicardia": "Bradicardia — contexto cardiológico",
  "fa-": "Fibrilação Atrial — contexto cardiológico",
  "disseccao": "Dissecção de Aorta — contexto emergência cardiovascular",
  "tamponamento": "Tamponamento Cardíaco — contexto emergência",
  "tep": "Tromboembolismo Pulmonar — contexto emergência",
  // Resuscitation
  "pcr": "Parada Cardiorrespiratória — modo emergência / ACLS",
  "iot": "Intubação Orotraqueal — modo via aérea",
  "sri": "Sequência Rápida de Intubação — modo via aérea",
  "vm": "Ventilação Mecânica — modo UTI",
  "vni": "Ventilação Não Invasiva — modo emergência respiratória",
  // Sepsis
  "sepse": "Sepse / Choque Séptico — modo sepse",
  "choque-septico": "Choque Séptico — modo sepse/UTI",
  // Neurological
  "avc": "AVC — contexto neurológico de emergência",
  "convulsao": "Convulsão / Status Epiléptico — contexto neurológico",
  "status-epileptico": "Status Epiléptico — contexto neurológico/UTI",
  "hic": "Hipertensão Intracraniana — contexto neurológico/UTI",
  "meningite": "Meningite — contexto infectologia/neurologia",
  "encefalite": "Encefalite — contexto infectologia/neurologia",
  // Metabolic
  "cad": "Cetoacidose Diabética — contexto metabólico",
  "ehh": "Estado Hiperglicêmico Hiperosmolar — contexto metabólico",
  "hipoglicemia": "Hipoglicemia Grave — contexto metabólico",
  "hipercalemia": "Hipercalemia — contexto metabólico/emergência",
  "hiponatremia": "Hiponatremia Grave — contexto metabólico",
  "hipernatremia": "Hipernatremia Grave — contexto metabólico",
  "acidose": "Acidose Metabólica — contexto metabólico",
  "alcalose": "Alcalose Metabólica — contexto metabólico",
  "adrenal": "Crise Adrenal — contexto endócrino/emergência",
  "tireoidiana": "Tempestade Tireoidiana — contexto endócrino/emergência",
  "mixedematoso": "Coma Mixedematoso — contexto endócrino/emergência",
  "uremia": "Uremia — contexto nefrológico/emergência",
  // Trauma
  "trauma": "Trauma — contexto ATLS",
  "tce": "Traumatismo Cranioencefálico — contexto neurocirurgia/emergência",
  "queimadura": "Queimaduras — contexto cirurgia/emergência",
  // Infectious
  "dengue": "Dengue Grave — contexto infectologia",
  "leptospirose": "Leptospirose Grave — contexto infectologia",
  "covid": "COVID-19 / SRAG — contexto infectologia",
  "neutropenica": "Febre Neutropênica — contexto infectologia/oncologia",
  "pneumonia": "Pneumonia Grave — contexto infectologia/emergência",
  // Pediatrics
  "pediatri": "Modo Pediatria ativado — paciente pediátrico",
  "neonatal": "Modo Neonatal — paciente recém-nascido",
  "bronquiolite": "Bronquiolite — modo pediatria",
  // Obstetrics
  "eclampsia": "Eclâmpsia — contexto obstétrico de emergência",
  "hemorragia-pos": "Hemorragia Pós-Parto — contexto obstétrico",
  // Other
  "anafilaxia": "Anafilaxia — modo emergência",
  "hda": "Hemorragia Digestiva Alta — contexto emergência GI",
  "hdb": "Hemorragia Digestiva Baixa — contexto emergência GI",
  "hemoptise": "Hemoptise Maciça — contexto emergência respiratória",
  "sangramento": "Sangramento Maciço — protocolo de transfusão maciça",
  "abdome": "Abdome Agudo — contexto cirurgia/emergência",
  "choque": "Choque — contexto emergência/UTI",
  "intoxicacao": "Intoxicação — contexto emergência toxicológica",
};

// Maps protocol IDs to calculator IDs
const SCORE_MAP: Record<string, { label: string; calcId: string }[]> = {
  "sepse": [{ label: "SOFA", calcId: "sofa" }, { label: "qSOFA", calcId: "qsofa" }],
  "choque-septico": [{ label: "SOFA", calcId: "sofa" }, { label: "qSOFA", calcId: "qsofa" }],
  "iam": [{ label: "TIMI", calcId: "timi" }, { label: "GRACE", calcId: "grace" }],
  "supra": [{ label: "TIMI", calcId: "timi" }],
  "sem-supra": [{ label: "TIMI", calcId: "timi" }, { label: "GRACE", calcId: "grace" }],
  "tep": [{ label: "Wells", calcId: "wells" }],
  "avc": [{ label: "NIHSS", calcId: "nihss" }],
  "trauma": [{ label: "Glasgow", calcId: "glasgow" }],
  "tce": [{ label: "Glasgow", calcId: "glasgow" }],
  "pcr": [{ label: "Glasgow", calcId: "glasgow" }],
  "cad": [{ label: "Osmolaridade", calcId: "osmolaridade" }],
  "ehh": [{ label: "Osmolaridade", calcId: "osmolaridade" }],
};

// Maps protocol IDs to flowchart keys
const FLOWCHART_MAP: Record<string, string> = {
  "pcr": "pcr",
  "sepse": "sepse",
  "choque-septico": "sepse",
  "iam": "iam",
  "supra": "iam",
  "sem-supra": "iam",
  "avc": "avc",
  "anafilaxia": "anafilaxia",
  "choque": "choque-hipovolemico",
  "cardiogenico": "choque-cardiogenico",
  "taquiarritmia": "taquiarritmia",
  "bradicardia": "bradicardia",
  "eap": "eap",
  "convulsao": "convulsao",
  "status-epileptico": "status-epileptico",
};

function findMatch(protocolId: string, map: Record<string, any>) {
  // Direct match
  if (map[protocolId]) return protocolId;
  // Partial match
  for (const key of Object.keys(map)) {
    if (protocolId.includes(key)) return key;
  }
  return null;
}

interface ProtocolActionBarProps {
  protocolId: string;
  protocolTitle: string;
  protocolCategory?: string;
  protocolSections?: { title: string; content: string }[];
  protocolContent?: string;
}

export default function ProtocolActionBar({ protocolId, protocolTitle, protocolCategory, protocolSections, protocolContent }: ProtocolActionBarProps) {
  const navigate = useNavigate();
  const [showPrescription, setShowPrescription] = useState(false);

  // Find AI context
  const aiKey = findMatch(protocolId, AI_CONTEXT_MAP);
  const aiContext = aiKey ? AI_CONTEXT_MAP[aiKey] : `Protocolo: ${protocolTitle}`;

  // Find scores
  const scoreKey = findMatch(protocolId, SCORE_MAP);
  const scores = scoreKey ? SCORE_MAP[scoreKey] : null;

  // Find flowchart
  const flowKey = findMatch(protocolId, FLOWCHART_MAP);
  const hasFlowchart = !!flowKey;

  const handleAI = () => {
    const contextMsg = `[CONTEXTO AUTOMÁTICO: ${aiContext}]\n\nEstou consultando o protocolo "${protocolTitle}". Me ajude com a conduta clínica deste caso.`;
    navigate("/clinical-ai", { state: { prefill: contextMsg } });
  };

  const handleCalculator = (calcId: string) => {
    navigate(`/calculators?score=${calcId}`);
  };

  const handleFlowchart = () => {
    if (flowKey) {
      navigate(`/protocols/${FLOWCHART_MAP[flowKey]}`);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {/* AI Button */}
        <button
          onClick={handleAI}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 active:scale-[0.97] transition-all text-xs font-heading font-semibold text-primary"
        >
          <Bot size={14} /> Usar IA neste caso
        </button>

        {/* Prescription Button */}
        <button
          onClick={() => setShowPrescription(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card hover:bg-accent/50 active:scale-[0.97] transition-all text-xs font-heading font-semibold"
        >
          <ClipboardList size={14} /> Gerar prescrição
        </button>

        {/* Score Buttons */}
        {scores && scores.map(s => (
          <button
            key={s.calcId}
            onClick={() => handleCalculator(s.calcId)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card hover:bg-accent/50 active:scale-[0.97] transition-all text-xs font-heading font-semibold"
          >
            <Calculator size={14} /> {s.label}
          </button>
        ))}

        {/* Flowchart Button */}
        {hasFlowchart && (
          <button
            onClick={handleFlowchart}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card hover:bg-accent/50 active:scale-[0.97] transition-all text-xs font-heading font-semibold"
          >
            <GitBranch size={14} /> Ver fluxograma
          </button>
        )}

        {/* Share Button */}
        <ShareMenu
          title={protocolTitle}
          showPDF
          shareUrl={`${window.location.origin}/full-protocols/${protocolId}`}
          getText={() => {
            if (protocolSections && protocolCategory) {
              return formatProtocolForShare(protocolTitle, protocolCategory, protocolSections);
            }
            return `📋 ${protocolTitle}\n\n${protocolContent || ""}`;
          }}
        />
      </div>

      {/* Prescription Generator Modal */}
      {showPrescription && (
        <PrescriptionGenerator
          protocolTitle={protocolTitle}
          protocolId={protocolId}
          onClose={() => setShowPrescription(false)}
        />
      )}
    </>
  );
}
