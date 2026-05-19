/**
 * medical-abbreviations — abreviações canônicas pra protocolos do PULSO.
 *
 * Resolve o bug de truncamento ("Dissecção Aor...", "AVC Hemorrá...",
 * "Choque Hemo...") em cards de viewport pequeno.
 *
 * Estratégia em camadas:
 *   1. Se o título tem abreviação canônica → usa
 *   2. Senão → `line-clamp-2` no CSS deixa quebrar em 2 linhas
 *   3. Se ainda assim não couber → ellipsis nativo
 */

export const PROTOCOL_ABBREVIATIONS: Record<string, string> = {
  // Cardiovascular
  'Infarto Agudo do Miocárdio': 'IAM',
  'Acidente Vascular Cerebral': 'AVC',
  'AVC Isquêmico': 'AVCI',
  'AVC Hemorrágico': 'AVCH',
  'AVC Hemorrágico Subaracnóideo': 'HSA',
  'Hipertensão Intracraniana': 'HIC',
  'Hemorragia Intracraniana': 'HIC',
  'Tromboembolismo Pulmonar': 'TEP',
  'TEP Maciço': 'TEP Maciço',
  'Dissecção de Aorta': 'Dissecção Aórtica',
  'Dissecção de Aorta Stanford A': 'Dissecção A',
  'Dissecção de Aorta Stanford B': 'Dissecção B',
  'Insuficiência Cardíaca Aguda': 'IC Aguda',
  'Insuficiência Cardíaca Descompensada': 'IC Descomp.',
  'Fibrilação Atrial': 'FA',
  'Fibrilação Atrial com RVR': 'FA + RVR',
  'Taquicardia Ventricular': 'TV',
  'Fibrilação Ventricular': 'FV',
  'Torsades de Pointes': 'Torsades',
  'Pericardite Aguda': 'Pericardite',
  'Tamponamento Cardíaco': 'Tamponamento',
  'Endocardite Infecciosa': 'Endocardite',
  'Síndrome de WPW — Emergência': 'WPW',
  'Crise Hipertensiva': 'Crise HAS',
  'Emergência Hipertensiva': 'Emerg. HAS',
  'Bloqueio Atrioventricular': 'BAV',
  'Atrioventricular (BAV)': 'BAV',

  // Respiratório
  'Pneumotórax Hipertensivo': 'PNTX Hipert.',
  'Pneumotórax Aberto': 'PNTX Aberto',
  'Dispneia Aguda': 'Dispneia',
  'Asma Grave / Quase Fatal': 'Asma Grave',
  'DPOC Exacerbado': 'DPOC Exac.',
  'Pneumonia Grave': 'Pneumonia',
  'Síndrome do Desconforto Respiratório Agudo': 'SDRA',
  'Síndrome Respiratória Aguda Grave': 'SRAG',
  'Edema Agudo de Pulmão': 'EAP',
  'Intubação Orotraqueal': 'IOT',
  'Sequência Rápida de Intubação': 'SRI',
  'Ventilação Mecânica': 'VM',
  'Ventilação Mecânica Invasiva': 'VMI',
  'Ventilação Não-Invasiva': 'VNI',

  // Sepse / choque
  'Sepse e Choque Séptico': 'Sepse',
  'Choque Hemorrágico': 'Choque Hemorr.',
  'Choque Hipovolêmico': 'Choque Hipov.',
  'Choque Distributivo (Neurogênico e outros)': 'Choque Distrib.',
  'Choque Cardiogênico': 'Choque Cardiog.',
  'Anafilaxia e Choque Anafilático': 'Anafilaxia',

  // Neuro
  'Status Epiléptico': 'Status Epilépt.',
  'Estado de Mal Epiléptico': 'EME',
  'Trauma Cranioencefálico Grave': 'TCE Grave',
  'Síndrome de Guillain-Barré': 'Guillain-Barré',
  'Ataque Isquêmico Transitório': 'AIT',

  // Metabólico
  'Cetoacidose Diabética': 'CAD',
  'Estado Hiperglicêmico Hiperosmolar': 'EHH',
  'Hipoglicemia Grave': 'Hipoglicemia',
  'Crise Adrenal': 'Crise Adrenal',
  'Tireotoxicose / Crise Tireotóxica': 'Crise Tireot.',
  'Coma Mixedematoso': 'Coma Mixed.',
  'Hipercalemia Grave': 'Hipercalemia',
  'Hipocalemia Grave': 'Hipocalemia',
  'Hiponatremia Grave': 'Hiponatremia',
  'Hipernatremia Grave': 'Hipernatremia',

  // Gastrointestinal
  'Hemorragia Digestiva Alta': 'HDA',
  'Hemorragia Digestiva Baixa': 'HDB',
  'Abdome Agudo Inflamatório': 'AA Inflam.',
  'Abdome Agudo Obstrutivo': 'AA Obstrut.',
  'Pancreatite Aguda Grave': 'Pancreatite',

  // Pediátrico
  'Meningite Pediátrica': 'Meningite Ped',
  'Sepse Pediátrica': 'Sepse Ped',
  'Cetoacidose Diabética Pediátrica': 'CAD Ped',
  'Crupe / Laringotraqueobronquite Grave': 'Crupe',
  'Epiglotite Aguda': 'Epiglotite',
  'Reanimação Neonatal': 'Reanim. Neo',
  'Icterícia Neonatal Grave': 'Icterícia Neo',
  'Hipoglicemia Neonatal': 'Hipoglic. Neo',
  'Desconforto Respiratório Neonatal': 'DR Neonatal',

  // Toxicológico
  'Intoxicação por Paracetamol': 'Intox. Paracetamol',
  'Intoxicação por Cocaína': 'Intox. Cocaína',
  'Intoxicação por Opioide': 'Intox. Opioide',
  'Intoxicação por Antidepressivos': 'Intox. ADT',
  'Intoxicação por Antidepressivo Tricíclico': 'Intox. ADT',
  'Intoxicação por Organofosforado': 'Intox. Organof.',
  'Intoxicação por Betabloqueador': 'Intox. BB',
  'Intoxicação por Bloqueador de Canal de Cálcio': 'Intox. BCC',
  'Intoxicação por Monóxido de Carbono': 'Intox. CO',
  'Intoxicação Alcoólica Grave': 'Intox. Alcoólica',
  'Overdose (Múltiplas Substâncias)': 'Overdose',
  'Overdose Múltiplas Substâncias': 'Overdose',

  // Acidentes ofídicos
  'Acidente Ofídico — Bothrops (Jararaca)': 'Acid. Bothrops',
  'Acidente Ofídico — Crotalus (Cascavel)': 'Acid. Crotalus',
  'Acidente Escorpiônico — Tityus serrulatus': 'Acid. Escorp.',

  // Reações
  'Reação Transfusional': 'Reação Transf.',
  'Angioedema Hereditário — Crise Aguda': 'Angioedema',

  // Outras
  'Crise Miastênica / Miastenia Gravis': 'Crise Miastênica',
  'Hematoma Epidural / Subdural Agudo': 'Hematoma EH/SD',
  'Síndrome da Cauda Equina': 'Cauda Equina',
  'Delirium no Idoso — Manejo na Emergência': 'Delirium Idoso',
  'Fratura de Quadril no Idoso — Emergência': 'Fratura Quadril',
  'Neurocisticercose com Hipertensão Intracraniana': 'Neurocisticercose',
};

/**
 * Encurta um título usando abreviação canônica se disponível,
 * senão devolve o original.
 */
export function shortenProtocolTitle(title: string): string {
  return PROTOCOL_ABBREVIATIONS[title.trim()] ?? title;
}

/**
 * Versão "soft" — encurta apenas se passar do limite de caracteres.
 * Útil quando o componente sabe o espaço disponível.
 */
export function shortenIfNeeded(title: string, maxChars: number = 24): string {
  const trimmed = title.trim();

  // Tem abreviação canônica?
  const abbreviated = PROTOCOL_ABBREVIATIONS[trimmed];
  if (abbreviated) return abbreviated;

  // Cabe no limite?
  if (trimmed.length <= maxChars) return trimmed;

  // Não tem abreviação e excede limite — deixa o CSS line-clamp resolver
  // (devolve o original; o componente quem decide quebrar em 2 linhas)
  return trimmed;
}
