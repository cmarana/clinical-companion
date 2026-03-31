import type { EvidenceLevel } from "./types";

/**
 * Mapa centralizado de nível de evidência por protocolo.
 * Classe: I (benefício >>> risco), IIa (benefício >> risco), IIb (benefício ≥ risco), III (sem benefício/danoso)
 * Nível: A (múltiplos RCTs/meta-análises), B (RCT único/estudos não-randomizados), C (consenso/opinião de especialistas)
 */
export const evidenceMap: Record<string, EvidenceLevel> = {
  // Emergência e Ressuscitação
  "fp-pcr-adulto": { class: "I", level: "A" },
  "fp-bls": { class: "I", level: "A" },
  "fp-acls": { class: "I", level: "A" },
  "fp-via-aerea-dificil": { class: "I", level: "B" },
  "fp-sri": { class: "I", level: "B" },
  "fp-iot": { class: "I", level: "B" },
  "fp-pneumotorax-hipertensivo": { class: "I", level: "B" },
  "fp-ira-respiratoria": { class: "I", level: "B" },
  "fp-abordagem-paciente-grave": { class: "I", level: "C" },

  // Cardiologia
  "fp-iam-supra": { class: "I", level: "A" },
  "fp-iam-sem-supra": { class: "I", level: "A" },
  "fp-eap": { class: "I", level: "A" },
  "fp-choque-cardiogenico": { class: "I", level: "B" },
  "fp-taquiarritmia-instavel": { class: "I", level: "B" },
  "fp-taquicardia-supraventricular": { class: "I", level: "B" },
  "fp-bradicardia-sintomatica": { class: "I", level: "B" },
  "fp-tv-fv": { class: "I", level: "A" },
  "fp-torsades": { class: "I", level: "C" },
  "fp-tamponamento": { class: "I", level: "B" },
  "fp-disseccao-aorta": { class: "I", level: "B" },
  "fp-tep-macico": { class: "I", level: "A" },
  "fp-tep-emergencia": { class: "I", level: "A" },
  "fp-crise-hipertensiva": { class: "I", level: "B" },
  "fp-ic-aguda": { class: "I", level: "A" },
  "fp-fa-rvr": { class: "I", level: "A" },
  "fp-flutter-atrial": { class: "I", level: "A" },
  "fp-endocardite-infecciosa": { class: "I", level: "B" },
  "fp-sincope-emergencia": { class: "IIa", level: "B" },
  "fp-tvp-emergencia": { class: "I", level: "A" },
  "fp-cardioversao-cardio": { class: "I", level: "A" },
  "fp-anticoagulacao-emergencia": { class: "I", level: "A" },

  // Neurologia
  "fp-avc-isquemico": { class: "I", level: "A" },
  "fp-avc-hemorragico": { class: "I", level: "B" },
  "fp-eme": { class: "I", level: "A" },
  "fp-convulsao-aguda": { class: "I", level: "A" },
  "fp-hic": { class: "I", level: "B" },
  "fp-hsa": { class: "I", level: "B" },
  "fp-meningite-completo": { class: "I", level: "A" },
  "fp-cefaleia-emergencia": { class: "IIa", level: "B" },
  "fp-delirium-neuro": { class: "IIa", level: "B" },
  "fp-rebaixamento-consciencia": { class: "I", level: "B" },
  "fp-morte-encefalica": { class: "I", level: "C" },
  "fp-ait": { class: "I", level: "A" },
  "fp-vertigem-emergencia": { class: "IIa", level: "B" },
  "fp-fluxo-rebaixamento": { class: "I", level: "B" },

  // Sepse e Choque
  "fp-sepse-choque": { class: "I", level: "A" },
  "fp-choque-hipovolemico": { class: "I", level: "B" },
  "fp-choque-hemorragico": { class: "I", level: "A" },
  "fp-choque-anafilatico": { class: "I", level: "A" },
  "fp-choque-distributivo": { class: "I", level: "B" },
  "fp-choque-obstrutivo": { class: "I", level: "B" },
  "fp-hda-choque": { class: "I", level: "A" },
  "fp-transfusao-macica": { class: "I", level: "A" },
  "fp-vasopressores-inotropicos": { class: "I", level: "A" },
  "fp-protocolo-sepse-bundle": { class: "I", level: "A" },

  // Metabólico e Endócrino
  "fp-cad": { class: "I", level: "A" },
  "fp-hipoglicemia": { class: "I", level: "A" },
  "fp-hipercalemia": { class: "I", level: "A" },
  "fp-hiponatremia": { class: "I", level: "B" },
  "fp-disturbios-sodio": { class: "I", level: "B" },
  "fp-gasometria": { class: "I", level: "B" },

  // Respiratório
  "fp-asma-grave": { class: "I", level: "A" },
  "fp-dpoc-exacerbado": { class: "I", level: "A" },
  "fp-sdra": { class: "I", level: "A" },
  "fp-pneumotorax": { class: "I", level: "B" },
  "fp-irpa": { class: "I", level: "B" },
  "fp-ventilacao-mecanica": { class: "I", level: "A" },
  "fp-vni-emergencia": { class: "I", level: "A" },
  "fp-pneumonia-grave": { class: "I", level: "A" },
  "fp-derrame-pleural": { class: "IIa", level: "B" },
  "fp-aspiracao-pulmonar": { class: "I", level: "B" },
  "fp-hemotorax": { class: "I", level: "B" },
  "fp-fluxograma-dispneia": { class: "I", level: "B" },

  // Trauma
  "fp-atls": { class: "I", level: "B" },
  "fp-tce": { class: "I", level: "A" },
  "fp-tce-trauma": { class: "I", level: "A" },
  "fp-trauma-toracico": { class: "I", level: "B" },
  "fp-trauma-abdominal": { class: "I", level: "B" },
  "fp-queimaduras": { class: "I", level: "B" },
  "fp-queimaduras-trauma": { class: "I", level: "B" },
  "fp-trauma-raquimedular": { class: "I", level: "B" },
  "fp-trauma-pelvico": { class: "I", level: "B" },
  "fp-hemorragia-traumatica": { class: "I", level: "A" },
  "fp-fratura-exposta": { class: "I", level: "B" },
  "fp-fratura-femur": { class: "I", level: "B" },
  "fp-amputacao-traumatica": { class: "I", level: "C" },
  "fp-imobilizacao-trauma": { class: "I", level: "B" },

  // Obstetrícia
  "fp-eclampsia": { class: "I", level: "A" },
  "fp-pre-eclampsia": { class: "I", level: "A" },
  "fp-hpp": { class: "I", level: "A" },
  "fp-dpp": { class: "I", level: "B" },
  "fp-placenta-previa": { class: "I", level: "B" },
  "fp-rotura-uterina": { class: "I", level: "C" },
  "fp-sepse-puerperal": { class: "I", level: "B" },
  "fp-embolia-amniotica": { class: "I", level: "C" },
  "fp-pcr-gestante": { class: "I", level: "B" },
  "fp-trabalho-parto-prematuro": { class: "I", level: "A" },
  "fp-abortamento": { class: "I", level: "B" },

  // Ginecologia
  "fp-gravidez-ectopica": { class: "I", level: "B" },
  "fp-bartholinite": { class: "IIa", level: "C" },
  "fp-torcao-ovariana": { class: "I", level: "B" },
  "fp-sangramento-uterino-anormal": { class: "IIa", level: "B" },
  "fp-dip": { class: "I", level: "A" },
  "fp-violencia-sexual": { class: "I", level: "C" },
  "fp-abuso-sexual-protocolo": { class: "I", level: "C" },
  "fp-endometriose-emergencia": { class: "IIa", level: "B" },
  "fp-mioma-complicado": { class: "IIa", level: "C" },

  // Intoxicações
  "fp-intox-paracetamol": { class: "I", level: "A" },
  "fp-intox-bzd": { class: "I", level: "A" },
  "fp-intoxicacao-opioide": { class: "I", level: "A" },
  "fp-intoxicacao-organofosforado": { class: "I", level: "B" },
  "fp-intoxicacao-triciclico": { class: "I", level: "B" },
  "fp-intoxicacao-alcoolica": { class: "I", level: "B" },
  "fp-intoxicacao-cocaina": { class: "I", level: "B" },
  "fp-intoxicacao-monoxido": { class: "I", level: "B" },
  "fp-intoxicacao-bcc": { class: "I", level: "B" },
  "fp-intoxicacao-betabloqueador": { class: "I", level: "B" },
  "fp-overdose-multipla": { class: "IIa", level: "C" },
  "fp-intoxicacao-drogas-psiq": { class: "IIa", level: "B" },

  // Procedimentos
  "fp-cvc": { class: "I", level: "B" },
  "fp-drenagem-torax": { class: "I", level: "B" },
  "fp-cardioversao": { class: "I", level: "A" },
  "fp-desfibrilacao": { class: "I", level: "A" },
  "fp-cricotireoidostomia": { class: "I", level: "C" },
  "fp-toracocentese": { class: "I", level: "B" },
  "fp-toracocentese-procedimento": { class: "I", level: "B" },
  "fp-paracentese": { class: "I", level: "B" },
  "fp-puncao-lombar": { class: "I", level: "B" },
  "fp-acesso-intraosseo": { class: "I", level: "B" },
  "fp-sondas": { class: "IIa", level: "C" },
  "fp-ferimentos-sutura": { class: "IIa", level: "C" },
  "fp-sutura-tecnica": { class: "IIa", level: "C" },
  "fp-fast-efast": { class: "I", level: "B" },
  "fp-pocus": { class: "I", level: "B" },
  "fp-marcapasso": { class: "I", level: "B" },
  "fp-monitorizacao-emergencia": { class: "I", level: "C" },

  // Pediatria
  "fp-laringite-crupe": { class: "I", level: "A" },
  "fp-febre-sem-foco-ped": { class: "I", level: "B" },
  "fp-diarreia-grave": { class: "I", level: "A" },
  "fp-febre-emergencia": { class: "I", level: "B" },

  // Neonatal
  "fp-asfixia-perinatal": { class: "I", level: "A" },
  "fp-sdr-neonatal": { class: "I", level: "A" },
  "fp-enterocolite-necrosante": { class: "I", level: "B" },
  "fp-pca-neonatal": { class: "I", level: "B" },
  "fp-prematuridade-extrema": { class: "I", level: "B" },

  // Infectologia
  "fp-neutropenia-febril": { class: "I", level: "A" },
  "fp-fasciite-necrosante": { class: "I", level: "B" },
  "fp-malaria": { class: "I", level: "A" },
  "fp-febre-manejo-emergencia": { class: "I", level: "B" },

  // Gastroenterologia
  "fp-hda": { class: "I", level: "A" },
  "fp-hdb": { class: "IIa", level: "B" },
  "fp-pancreatite-aguda": { class: "I", level: "A" },
  "fp-abdome-agudo": { class: "I", level: "B" },
  "fp-obstrucao-intestinal": { class: "I", level: "B" },
  "fp-hepatite-fulminante": { class: "I", level: "B" },
  "fp-encefalopatia-hepatica": { class: "I", level: "B" },
  "fp-colecistite-aguda": { class: "I", level: "B" },
  "fp-colangite-aguda": { class: "I", level: "B" },
  "fp-doenca-diverticular": { class: "IIa", level: "B" },
  "fp-megacolon-toxico": { class: "I", level: "C" },
  "fp-nausea-vomito-emergencia": { class: "IIa", level: "B" },

  // Nefrologia
  "fp-ira": { class: "I", level: "A" },
  "fp-retencao-urinaria": { class: "IIa", level: "C" },
  "fp-colica-renal": { class: "I", level: "A" },
  "fp-itu-complicada": { class: "I", level: "A" },
  "fp-hipercalemia-nefro": { class: "I", level: "A" },
  "fp-pielonefrite-grave": { class: "I", level: "A" },
  "fp-rabdomiolise": { class: "I", level: "B" },
  "fp-hematuria": { class: "IIa", level: "B" },

  // Psiquiatria
  "fp-agitacao-psicomotora": { class: "IIa", level: "B" },
  "fp-tentativa-suicidio": { class: "I", level: "B" },
  "fp-sindrome-neuroleptica-maligna": { class: "I", level: "C" },
  "fp-abstinencia-alcoolica": { class: "I", level: "A" },
  "fp-psicose-aguda": { class: "IIa", level: "B" },
  "fp-sindrome-serotoninergica": { class: "I", level: "B" },
  "fp-sedacao-rapida": { class: "IIa", level: "B" },
  "fp-delirium-psiq": { class: "IIa", level: "B" },
  "fp-esquizofrenia-emergencia": { class: "IIa", level: "B" },
  "fp-ansiedade-grave-panico": { class: "IIa", level: "C" },
  "fp-bipolaridade-emergencia": { class: "IIa", level: "B" },
  "fp-borderline-emergencia": { class: "IIa", level: "C" },
  "fp-paralisia-sono": { class: "IIb", level: "C" },

  // Dermatologia
  "fp-ssj-net": { class: "I", level: "B" },
  "fp-urticaria-angioedema": { class: "I", level: "A" },
  "fp-celulite-erisipela": { class: "I", level: "A" },
  "fp-herpes-zoster": { class: "I", level: "A" },
  "fp-queimadura-quimica-ocular": { class: "I", level: "C" },
  "fp-anafilaxia-cutanea": { class: "I", level: "A" },
  "fp-penfigo-emergencia": { class: "IIa", level: "B" },
  "fp-abscesso-cutaneo": { class: "I", level: "B" },

  // Oftalmologia
  "fp-glaucoma-agudo": { class: "I", level: "B" },
  "fp-corpo-estranho-ocular": { class: "I", level: "C" },
  "fp-trauma-ocular": { class: "I", level: "B" },
  "fp-conjuntivite-grave": { class: "IIa", level: "B" },
  "fp-ceratite": { class: "IIa", level: "B" },
  "fp-descolamento-retina": { class: "I", level: "B" },
  "fp-oclusao-arteria-central-retina": { class: "I", level: "B" },
  "fp-uveite": { class: "IIa", level: "B" },

  // ORL
  "fp-epistaxe": { class: "I", level: "B" },
  "fp-abscesso-peritonsilar": { class: "I", level: "B" },
  "fp-corpo-estranho-via-aerea": { class: "I", level: "B" },
  "fp-angina-ludwig": { class: "I", level: "C" },
  "fp-otite-grave": { class: "IIa", level: "B" },
  "fp-mastoidite": { class: "I", level: "B" },
  "fp-surdez-subita": { class: "IIa", level: "B" },
  "fp-tontura-emergencia": { class: "IIa", level: "B" },
  "fp-amigdalite-complicada": { class: "IIa", level: "B" },

  // Hematologia
  "fp-civd": { class: "I", level: "B" },
  "fp-ptt-shu": { class: "I", level: "B" },
  "fp-crise-falcemica": { class: "I", level: "A" },
  "fp-hemofilia-emergencia": { class: "I", level: "B" },
  "fp-anemia-grave-emergencia": { class: "I", level: "B" },
  "fp-reacao-transfusional": { class: "I", level: "B" },

  // Geriatria
  "fp-delirium": { class: "I", level: "A" },
  "fp-delirium-hipoativo-idoso": { class: "I", level: "A" },
  "fp-queda-idoso": { class: "I", level: "A" },
  "fp-polifarmacia-idoso": { class: "I", level: "B" },
  "fp-sindrome-fragilidade": { class: "IIa", level: "B" },
  "fp-desidratacao-idoso": { class: "I", level: "B" },
  "fp-infeccao-idoso": { class: "I", level: "B" },
  "fp-iatrogenia-idoso": { class: "IIa", level: "B" },
  "fp-sindrome-imobilidade": { class: "IIa", level: "C" },

  // Dor / Paliativos
  "fp-dor-aguda-emergencia": { class: "I", level: "A" },
  "fp-sedacao-analgesia-ps": { class: "I", level: "B" },
  "fp-paliativo-emergencia": { class: "IIa", level: "C" },
  "fp-controle-dor-pos-operatorio": { class: "I", level: "A" },
  "fp-sedacao-paliativa": { class: "IIa", level: "C" },
  "fp-dispneia-terminal": { class: "IIa", level: "C" },

  // Triagem
  "fp-classificacao-risco": { class: "I", level: "B" },
  "fp-criterios-internacao-uti": { class: "IIa", level: "C" },
  "fp-criterios-admissao-uti": { class: "IIa", level: "C" },
  "fp-fluxograma-dor-toracica": { class: "I", level: "B" },
  "fp-fluxograma-febre-triagem": { class: "I", level: "B" },
  "fp-fluxograma-trauma-triagem": { class: "I", level: "B" },

  // SUS
  "fp-notificacao-compulsoria": { class: "I", level: "C" },
  "fp-prescricao-padrao-sus": { class: "IIa", level: "C" },
  "fp-atb-comunitario": { class: "I", level: "A" },
  "fp-atb-pediatria": { class: "I", level: "A" },
  "fp-drogas-emergencia": { class: "I", level: "A" },
  "fp-receituario-controlado": { class: "IIa", level: "C" },
  "fp-atestado-receita-laudo": { class: "IIa", level: "C" },

  // Outras emergências
  "fp-corpo-estranho-va": { class: "I", level: "B" },
};

export function getEvidence(protocolId: string): EvidenceLevel | undefined {
  return evidenceMap[protocolId];
}
