
-- Remove duplicate medications keeping the most complete record for each
DELETE FROM bulario_medications
WHERE id IN (
  'acido-folico-sup',
  'adalimumabe-bio',
  'atropina-antidoto',
  'carbonato-calcio',
  'ciclosporina-imuno',
  'clopidogrel',
  'colchicina-reumato',
  'espironolactona',
  'etanercepte-bio',
  'finasterida',
  'flumazenil-antidoto',
  'glicose-25-fluido',
  'hidroxicloroquina',
  'leflunomida',
  'naloxona',
  'omalizumabe-bio',
  'oxibutinina',
  'rivaroxabana-cardio',
  'solifenacina',
  'succinilcolina',
  'sulfassalazina',
  'tacrolimo-imuno',
  'talidomida-onco',
  'varfarina'
);
