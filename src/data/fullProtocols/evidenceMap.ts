import type { EvidenceLevel } from "./types";

/**
 * Mapa centralizado de nível de evidência por protocolo.
 * Classe: I (benefício >>> risco), IIa (benefício >> risco), IIb (benefício ≥ risco), III (sem benefício/danoso)
 * Nível: A (múltiplos RCTs/meta-análises), B (RCT único/estudos não-randomizados), C (consenso/opinião de especialistas)
 */
export const evidenceMap: Record<string, EvidenceLevel> = {
  // Emergência e Ressuscitação
  "fp-pcr": { class: "I", level: "A" },
  "fp-pcr-pediatrica": { class: "I", level: "B" },
  "fp-via-aerea": { class: "I", level: "B" },
  "fp-choque": { class: "I", level: "A" },
  "fp-anafilaxia-ressus": { class: "I", level: "A" },
  "fp-seq-rapida-iot": { class: "I", level: "B" },

  // Cardiologia
  "fp-iam-supra": { class: "I", level: "A" },
  "fp-iam-ssupra": { class: "I", level: "A" },
  "fp-dor-toracica": { class: "I", level: "B" },
  "fp-eap": { class: "I", level: "A" },
  "fp-choque-cardiogenico": { class: "I", level: "B" },
  "fp-taquiarritmias": { class: "I", level: "B" },
  "fp-bradicardias": { class: "I", level: "B" },
  "fp-torsades": { class: "I", level: "C" },
  "fp-tamponamento": { class: "I", level: "B" },
  "fp-disseccao-aorta": { class: "I", level: "B" },
  "fp-tep-macico": { class: "I", level: "A" },
  "fp-emergencia-hipertensiva": { class: "I", level: "B" },
  "fp-ic-descompensada": { class: "I", level: "A" },
  "fp-fa-aguda": { class: "I", level: "A" },
  "fp-endocardite": { class: "I", level: "B" },
  "fp-pericardite-aguda": { class: "IIa", level: "B" },
  "fp-miocardite-aguda": { class: "IIa", level: "C" },
  "fp-crise-hipertensiva": { class: "I", level: "B" },
  "fp-tvp-embolia": { class: "I", level: "A" },

  // Neurologia
  "fp-avc-isquemico": { class: "I", level: "A" },
  "fp-avc-hemorragico": { class: "I", level: "B" },
  "fp-status-epilepticus": { class: "I", level: "A" },
  "fp-hic": { class: "I", level: "B" },
  "fp-meningite": { class: "I", level: "A" },
  "fp-guillain-barre": { class: "I", level: "B" },
  "fp-miastenia-crise": { class: "I", level: "B" },
  "fp-cefaleia-emergencia": { class: "IIa", level: "B" },
  "fp-delirium-neuro": { class: "IIa", level: "B" },
  "fp-coma": { class: "I", level: "B" },
  "fp-morte-encefalica": { class: "I", level: "C" },

  // Sepse e Choque
  "fp-sepse": { class: "I", level: "A" },
  "fp-choque-septico-avancado": { class: "I", level: "A" },
  "fp-choque-hipovolemico": { class: "I", level: "B" },
  "fp-choque-hemorragico": { class: "I", level: "A" },
  "fp-choque-anafilatico": { class: "I", level: "A" },
  "fp-choque-distributivo": { class: "I", level: "B" },
  "fp-choque-obstrutivo": { class: "I", level: "B" },
  "fp-anafilaxia-sepsis": { class: "I", level: "A" },
  "fp-hemorragia-macica": { class: "I", level: "A" },
  "fp-sepse-neonatal": { class: "I", level: "B" },
  "fp-bundle-sepse-1h": { class: "I", level: "A" },

  // Metabólico e Endócrino
  "fp-cad": { class: "I", level: "A" },
  "fp-ehh": { class: "I", level: "B" },
  "fp-hipoglicemia": { class: "I", level: "A" },
  "fp-crise-adrenal": { class: "I", level: "B" },
  "fp-tempestade-tireoidiana": { class: "I", level: "C" },
  "fp-hipercalcemia": { class: "IIa", level: "B" },
  "fp-hipocalcemia": { class: "IIa", level: "B" },
  "fp-hiponatremia": { class: "I", level: "B" },
  "fp-hipernatremia": { class: "I", level: "B" },
  "fp-hipercalemia": { class: "I", level: "A" },
  "fp-hipocalemia": { class: "I", level: "B" },
  "fp-hipomagnesemia": { class: "IIa", level: "C" },
  "fp-hipermagnesemia": { class: "IIa", level: "C" },
  "fp-acidose-metabolica": { class: "I", level: "B" },
  "fp-alcalose-metabolica": { class: "IIa", level: "C" },

  // Respiratório
  "fp-asma-grave": { class: "I", level: "A" },
  "fp-dpoc-exacerbacao": { class: "I", level: "A" },
  "fp-sdra": { class: "I", level: "A" },
  "fp-pneumotorax": { class: "I", level: "B" },
  "fp-tep": { class: "I", level: "A" },
  "fp-hemoptise-macica": { class: "I", level: "C" },
  "fp-irf": { class: "I", level: "B" },
  "fp-vm-invasiva": { class: "I", level: "A" },
  "fp-vni": { class: "I", level: "A" },
  "fp-pneumonia-grave": { class: "I", level: "A" },
  "fp-derrame-pleural": { class: "IIa", level: "B" },

  // Trauma
  "fp-politrauma": { class: "I", level: "B" },
  "fp-tce": { class: "I", level: "A" },
  "fp-trauma-toracico": { class: "I", level: "B" },
  "fp-trauma-abdominal": { class: "I", level: "B" },
  "fp-queimaduras": { class: "I", level: "B" },
  "fp-afogamento": { class: "I", level: "B" },
  "fp-trauma-raquimedular": { class: "I", level: "B" },

  // Obstetrícia
  "fp-eclampsia": { class: "I", level: "A" },
  "fp-hellp": { class: "I", level: "B" },
  "fp-hpp": { class: "I", level: "A" },
  "fp-dpp": { class: "I", level: "B" },
  "fp-placenta-previa": { class: "I", level: "B" },
  "fp-rotura-uterina": { class: "I", level: "C" },

  // Ginecologia
  "fp-gravidez-ectopica": { class: "I", level: "B" },
  "fp-bartholinite": { class: "IIa", level: "C" },

  // Intoxicações
  "fp-intox-paracetamol": { class: "I", level: "A" },
  "fp-intox-benzo": { class: "I", level: "A" },
  "fp-intox-opioide": { class: "I", level: "A" },
  "fp-intox-organofosforado": { class: "I", level: "B" },
  "fp-intox-litio": { class: "IIa", level: "C" },
  "fp-intox-digoxina": { class: "I", level: "A" },

  // Procedimentos
  "fp-acesso-venoso": { class: "I", level: "B" },
  "fp-drenagem-torax": { class: "I", level: "B" },
  "fp-intubacao": { class: "I", level: "B" },
  "fp-cardioversao": { class: "I", level: "A" },
  "fp-cricotireoidostomia": { class: "I", level: "C" },

  // Pediatria
  "fp-pcr-ped": { class: "I", level: "A" },
  "fp-bronquiolite": { class: "I", level: "A" },
  "fp-croup": { class: "I", level: "A" },
  "fp-desidratacao-ped": { class: "I", level: "A" },
  "fp-convulsao-febril": { class: "I", level: "B" },
  "fp-cetoacidose-ped": { class: "I", level: "B" },

  // Neonatal
  "fp-rn-reanimacao": { class: "I", level: "A" },
  "fp-sdr-neonatal": { class: "I", level: "A" },
  "fp-ictericia-neonatal": { class: "I", level: "A" },
  "fp-sepse-neonatal-neo": { class: "I", level: "B" },

  // Infectologia
  "fp-sepse-grave": { class: "I", level: "A" },
  "fp-meningite-bacteriana": { class: "I", level: "A" },
  "fp-encefalite-aguda": { class: "I", level: "B" },
  "fp-pneumonia-grave-infec": { class: "I", level: "A" },
  "fp-dengue-grave": { class: "I", level: "B" },
  "fp-leptospirose": { class: "IIa", level: "B" },
  "fp-malaria": { class: "I", level: "A" },
  "fp-covid-srag": { class: "I", level: "A" },
  "fp-neutropenia-febril": { class: "I", level: "A" },
  "fp-endocardite-infecciosa": { class: "I", level: "B" },
  "fp-fasciite-necrotizante": { class: "I", level: "B" },

  // Gastroenterologia
  "fp-hda": { class: "I", level: "A" },
  "fp-hdb": { class: "IIa", level: "B" },
  "fp-pancreatite-aguda": { class: "I", level: "A" },
  "fp-abdome-agudo": { class: "I", level: "B" },
  "fp-obstrucao-intestinal": { class: "I", level: "B" },
  "fp-hepatite-fulminante": { class: "I", level: "B" },
  "fp-diverticulite": { class: "IIa", level: "B" },

  // Nefrologia
  "fp-ira": { class: "I", level: "A" },
  "fp-retencao-urinaria": { class: "IIa", level: "C" },
  "fp-colica-renal": { class: "I", level: "A" },
  "fp-itu-complicada": { class: "I", level: "A" },
  "fp-hipercalemia-nefro": { class: "I", level: "A" },
  "fp-dist-sodio-nefro": { class: "I", level: "B" },
  "fp-rabdomiolise": { class: "I", level: "B" },

  // Psiquiatria
  "fp-agitacao-psicomotora": { class: "IIa", level: "B" },
  "fp-suicidio-ideacao": { class: "I", level: "B" },
  "fp-snm": { class: "I", level: "C" },
  "fp-abstinencia-alcoolica": { class: "I", level: "A" },
  "fp-psicose-aguda": { class: "IIa", level: "B" },
  "fp-sindrome-serotoninergica": { class: "I", level: "B" },

  // Dermatologia
  "fp-ssj-net": { class: "I", level: "B" },
  "fp-angioedema": { class: "I", level: "A" },
  "fp-urticaria-aguda": { class: "I", level: "A" },
  "fp-celulite-erisipela": { class: "I", level: "A" },
  "fp-herpes-zoster": { class: "I", level: "A" },
  "fp-queimadura-quimica": { class: "I", level: "C" },
  "fp-eczema-herpetico": { class: "IIa", level: "C" },
  "fp-penfigo-vulgar": { class: "IIa", level: "B" },

  // Hematologia
  "fp-civd": { class: "I", level: "B" },
  "fp-ptt": { class: "I", level: "B" },
  "fp-crise-falciforme": { class: "I", level: "A" },
  "fp-neutropenia-hemato": { class: "I", level: "A" },
  "fp-hemofilia-sangramento": { class: "I", level: "B" },
  "fp-trombocitopenia-grave": { class: "IIa", level: "B" },
  "fp-sindrome-lise-tumoral": { class: "I", level: "B" },
  "fp-hiperviscosidade": { class: "IIa", level: "C" },

  // Geriatria
  "fp-delirium-geriatria": { class: "I", level: "A" },
  "fp-quedas-geriatria": { class: "I", level: "A" },
  "fp-polifarmacia": { class: "I", level: "B" },
  "fp-fragilidade": { class: "IIa", level: "B" },

  // Dor / Paliativos
  "fp-dor-aguda": { class: "I", level: "A" },
  "fp-sedacao-procedural": { class: "I", level: "B" },
  "fp-cuidados-fim-vida": { class: "IIa", level: "C" },
  "fp-dor-oncologica": { class: "I", level: "A" },

  // Triagem
  "fp-manchester": { class: "I", level: "B" },
  "fp-protocolo-sepse-1h": { class: "I", level: "A" },
  "fp-dor-toracica-fluxo": { class: "I", level: "B" },
  "fp-criterios-uti": { class: "IIa", level: "C" },

  // SUS
  "fp-notificacao-compulsoria": { class: "I", level: "C" },
  "fp-morte-encefalica-sus": { class: "I", level: "C" },
  "fp-atb-empirica": { class: "I", level: "A" },
  "fp-prescricao-padrao-sus": { class: "IIa", level: "C" },

  // Outras emergências
  "fp-hipotermia": { class: "I", level: "B" },
  "fp-hipertermia": { class: "I", level: "B" },
  "fp-choque-eletrico": { class: "I", level: "C" },
  "fp-acidente-ofidico": { class: "I", level: "B" },
  "fp-reacao-transfusional": { class: "I", level: "B" },
  "fp-corpo-estranho-va": { class: "I", level: "B" },
};

export function getEvidence(protocolId: string): EvidenceLevel | undefined {
  return evidenceMap[protocolId];
}
