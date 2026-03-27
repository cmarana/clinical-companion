import { PrescriptionCategory, PrescriptionItem } from "./types";
import { byDiagnosisItems } from "./byDiagnosis";
import { emergencyItems } from "./emergency";
import { susItems } from "./sus";
import { pediatricItems } from "./pediatric";
import { neonatalItems } from "./neonatal";
import { bySymptomItems } from "./bySymptom";
import { byDrugClassItems } from "./byDrugClass";
import { antibioticsByFocusItems } from "./antibioticsByFocus";
import { dischargeItems } from "./discharge";
import { dilutionItems } from "./dilutions";
import { standardModelItems } from "./standardModels";
import { obstetricsItems } from "./obstetrics";

export type { PrescriptionItem, PrescriptionCategory };

/* ── helpers to auto-split byDiagnosis into specialty sub-categories ── */

interface SpecialtyRule {
  id: string;
  title: string;
  icon: string;
  match: (type: string, title: string) => boolean;
}

const specialtyRules: SpecialtyRule[] = [
  { id: "cardiology", title: "Cardiologia", icon: "heart-pulse", match: (t, ti) => /cardiolog/i.test(t) || /\biam\b|infarto|fibrilação atrial|flutter|angina|pericardite|miocardite|insuficiência cardíaca|dissecção aórt|dissecção aguda de aorta|taquicardia|bradicardia|bradiarritmia|edema agudo|choque cardiogênico|\bic descompensada|bloqueio atrioventricular|\bbav\b|aneurisma de aorta/i.test(ti) },
  { id: "neurology", title: "Neurologia", icon: "brain", match: (t, ti) => /neurol/i.test(t) || /\bavc\b|avch|meningite|guillain|miastên|convuls|status epilép|encefalopatia|trombose venosa cerebral|trombose de seio venoso|hemorragia subaracnóidea|\bhsa\b|encefalite|migrânea|cefaleia|enxaqueca|neurocisticercose/i.test(ti) },
  { id: "respiratory", title: "Pneumologia", icon: "wind", match: (t, ti) => /pneumol/i.test(t) || /pneumonia|asma|dpoc|pneumotórax|hemoptise|derrame pleural|embolia gordurosa|tep\b|tromboembolismo pulmonar|insuficiência respiratória|bronquiectasia|abscesso pulmonar|empiema pleural|hemotórax|quilotórax/i.test(ti) },
  { id: "gastro", title: "Gastroenterologia / Hepatologia", icon: "utensils", match: (t, ti) => /gastro|hepat/i.test(t) || /hemorragia digestiva|\bhda\b|pancreatite|colecistite|diverticulite|obstrução intestinal|colangite|cirrose|ascite|abscesso hepático|insuficiência hepática|peritonite|abdome agudo|gastroenterite|colite pseudomembranosa|megacólon|corpo estranho em esôfago|abscesso perianal|isquemia mesentérica|trombose mesentérica|clostridioides|hepatite/i.test(ti) },
  { id: "infectious", title: "Infectologia", icon: "bug", match: (t, ti) => /infect/i.test(t) || /sepse|choque séptico|endocardite|celulite|erisipela|fascite|tuberculose|leptospirose|dengue|herpes zoster|pep —|gangrena de fournier|malária|tétano|c\. difficile|chikungunya|zika|doença de chagas|osteomielite|artrite séptica|febre reumática|paracoccidioidomicose|esporotricose|botulismo|mordedura|pós-esplenectomia/i.test(ti) },
  { id: "nephrology", title: "Nefrologia", icon: "kidney", match: (t, ti) => /nefrol/i.test(t) || /insuficiência renal|\bira\b.*diálise|hipercalemia|hiponatremia|cólica renal|retenção urinária|síndrome nefrótica|síndrome nefrítica|gnda|pielonefrite|infecção.*uriná|nefrite lúpica|nefropatia por contraste|transplante renal/i.test(ti) },
  { id: "endocrinology", title: "Endocrinologia", icon: "activity", match: (t, ti) => /endocrin/i.test(t) || /cetoacidose|coma mixedematoso|hiperosmolar|crise adrenal|insuficiência adrenal|feocromocitoma|crise tireotóxica|tempestade tireoidiana|hipoglicemia|hipotireoidismo|hipercalcemia|hipocalcemia/i.test(ti) },
  { id: "ortho", title: "Ortopedia / Trauma", icon: "bone", match: (t, ti) => /ortop/i.test(t) || /fratura|luxação|compartimental|rabdomiólise|lombalgia|entorse|tendinite|epicondilite|tendinopatia|impacto do ombro|espondilodiscite|espondilite anquilosante/i.test(ti) },
  { id: "psychiatry", title: "Psiquiatria", icon: "brain", match: (t, ti) => /psiqui/i.test(t) || /abstinência alcoólica|delirium tremens|agitação psicomotora|surto psicótico|síndrome neuroléptica|suicíd|crise de pânico|transtorno de ansiedade|catatonia|mania aguda|episódio maníaco|intoxicação por lítio|intoxicação por benzodiazep|agitação em demência/i.test(ti) },
  { id: "ophthalmology", title: "Oftalmologia", icon: "eye", match: (t, ti) => /oftalm/i.test(t) || /glaucoma|descolamento de retina|endoftalmite|queimadura.*ocular|oclusão.*retina|uveíte/i.test(ti) },
  { id: "hematology", title: "Hematologia", icon: "droplets", match: (t, ti) => /hematol/i.test(t) || /trombocitopenia|pti\b|civd|hemofilia|tromboembolismo venoso|tvp\b|anticoagula|púrpura|hemolítico-urêmica|\bshu\b/i.test(ti) },
  { id: "toxicology", title: "Toxicologia", icon: "skull", match: (t, ti) => /toxicol/i.test(t) || /intoxica|envenenamento|ofídico|angioedema|anafilaxia|stevens-johnson|anticolinérgica|serotoninérgica|acidente.*aranha|acidente botrópico/i.test(ti) },
  { id: "rheumatology", title: "Reumatologia", icon: "bone", match: (t, ti) => /reumatol/i.test(t) || /lúpus|\bles\b|artrite reumatoide|gota|crise gotosa|vasculite|artrite reativa|reiter|polimialgia|arterite.*gigantes|esclerodérmica|henoch|kawasaki/i.test(ti) },
  { id: "dermatology", title: "Dermatologia", icon: "palette", match: (t, ti) => /dermat/i.test(t) || /pênfigo|dermatite de contato|stevens-johnson|\bnet\b|ssj|celulite.*grave|erisipela.*grave|urticária|angioedema|herpes zoster|psoríase pustulosa|eczema herpético/i.test(ti) },
  { id: "urology", title: "Urologia", icon: "cross", match: (t, ti) => /urolog/i.test(t) || /priapismo|torção testicular|retenção urinária|cólica renal.*complicad|parafimose|trauma renal|epididimite|orquiepididimite/i.test(ti) },
  { id: "vascular-surgery", title: "Cirurgia Vascular", icon: "scissors", match: (t, ti) => /vascular/i.test(t) || /isquemia aguda de membro|aneurisma.*roto|pé diabético|dissecção.*aorta/i.test(ti) },
  { id: "general-surgery", title: "Cirurgia Geral / Torácica", icon: "scissors", match: (t, ti) => (/cirúrg|cirurg/i.test(t) && !/vascular/i.test(t)) || /apendicite|hérnia.*encarcerada|perfuração.*víscera|trauma abdominal|retalho|enxerto de pele/i.test(ti) },
  { id: "anesthesiology", title: "Anestesiologia", icon: "syringe", match: (t, ti) => /anest/i.test(t) },
  { id: "icu", title: "Terapia Intensiva / UTI", icon: "monitor", match: (t, ti) => /\buti\b|terapia intensiva|desmame|ecmo/i.test(t) },
  { id: "geriatrics", title: "Geriatria", icon: "user-round", match: (t, ti) => /geriatr/i.test(t) || /polifarmácia|desprescrição|queda no idoso|fragilidade|delirium.*idoso|delirium.*prevenção|demência.*agitação/i.test(ti) },
  { id: "med-legal", title: "Medicina Legal / Trabalho", icon: "shield", match: (t, ti) => /legal|ocupacional|trabalho/i.test(t) },
  { id: "burns", title: "Queimados / CTQ", icon: "flame", match: (t, ti) => /queim|ctq/i.test(t) || /queimadura/i.test(ti) },
  { id: "oncology", title: "Oncologia", icon: "ribbon", match: (t, ti) => /oncol/i.test(t) },
  { id: "ent", title: "Otorrinolaringologia", icon: "ear", match: (t, ti) => /orl/i.test(t) || /epistaxe|sangramento nasal|abscesso peritonsilar|abscesso periamigdaliano|angina de ludwig|mastoidite|epiglotite|surdez súbita|corpo estranho.*via aérea|labirintite|vertigem|otite externa maligna|otite.*necrosante/i.test(ti) },
  { id: "emergency-general", title: "Emergência Geral / PS", icon: "zap", match: (t, ti) => /Prescrição de Emergência \/ PS/i.test(t) || /crise hipertensiva|emergência hipertensiva|dor abdominal aguda.*protocolo|síncope.*avaliação|mordedura.*cão|mordedura.*gato|afogamento|choque elétrico|eletrocussão|corpo estranho ingerido/i.test(ti) },
];

function splitByDiagnosis(items: PrescriptionItem[]): PrescriptionCategory[] {
  const buckets = new Map<string, PrescriptionItem[]>();
  const unmatched: PrescriptionItem[] = [];

  for (const item of items) {
    let matched = false;
    for (const rule of specialtyRules) {
      if (rule.match(item.type, item.title)) {
        if (!buckets.has(rule.id)) buckets.set(rule.id, []);
        buckets.get(rule.id)!.push(item);
        matched = true;
        break;
      }
    }
    if (!matched) unmatched.push(item);
  }

  const cats: PrescriptionCategory[] = [];

  // General / unmatched items go first as "Por Diagnóstico (Geral)"
  if (unmatched.length > 0) {
    cats.push({
      id: "by-diagnosis-general",
      title: "Prescrição por Diagnóstico (Geral)",
      icon: "stethoscope",
      items: unmatched,
    });
  }

  // Add specialty buckets
  for (const rule of specialtyRules) {
    const items = buckets.get(rule.id);
    if (items && items.length > 0) {
      cats.push({
        id: `by-diagnosis-${rule.id}`,
        title: rule.title,
        icon: rule.icon,
        items,
      });
    }
  }

  return cats;
}

const diagnosisCategories = splitByDiagnosis(byDiagnosisItems);

export const prescriptionCategories: PrescriptionCategory[] = [
  ...diagnosisCategories,
  {
    id: "emergency",
    title: "Prescrição de Emergência (Rápida)",
    icon: "zap",
    items: emergencyItems,
  },
  {
    id: "obstetrics",
    title: "Obstetrícia e Ginecologia",
    icon: "heart-pulse",
    items: obstetricsItems,
  },
  {
    id: "sus",
    title: "Prescrição SUS / UPA / Hospital Público",
    icon: "building",
    items: susItems,
  },
  {
    id: "pediatric",
    title: "Prescrição Pediatria",
    icon: "baby",
    items: pediatricItems,
  },
  {
    id: "neonatal",
    title: "Prescrição Neonatal",
    icon: "heart-pulse",
    items: neonatalItems,
  },
  {
    id: "by-symptom",
    title: "Prescrição por Sintoma",
    icon: "thermometer",
    items: bySymptomItems,
  },
  {
    id: "by-drug-class",
    title: "Prescrição por Classe de Medicamento",
    icon: "pill",
    items: byDrugClassItems,
  },
  {
    id: "atb-by-focus",
    title: "Antibióticos por Foco",
    icon: "target",
    items: antibioticsByFocusItems,
  },
  {
    id: "discharge",
    title: "Prescrição para Alta",
    icon: "log-out",
    items: dischargeItems,
  },
  {
    id: "dilutions",
    title: "Diluições e Preparo",
    icon: "flask-conical",
    items: dilutionItems,
  },
  {
    id: "standard-models",
    title: "Prescrição Padrão (Modelo Pronto)",
    icon: "file-text",
    items: standardModelItems,
  },
];
