/**
 * Bulk medication data for import into the Bulário database.
 * 
 * HOW TO USE:
 * 1. Add medications to the array below following the MedicationImportItem format
 * 2. Use the import function from bularioImporter.ts to push to database
 * 3. Supports batches of any size (auto-chunked in 500-row batches)
 * 
 * FORMAT: Each entry maps directly to the bulario_medications table.
 * Only `id`, `nome`, and `principioAtivo` are strictly required.
 * All other fields default to empty string / false if omitted.
 */

export interface MedicationImportItem {
  id: string;
  nome: string;
  principioAtivo: string;
  nomesComerciais?: string[];
  classe?: string;
  subclasse?: string;
  categoria?: string;
  formaFarmaceutica?: string;
  via?: string;
  controlado?: boolean;
  receituario?: string;
  indicacoes?: string;
  posologiaAdulto?: string;
  posologiaPediatrica?: string;
  contraindicacoes?: string;
  efeitosAdversos?: string;
  interacoes?: string;
  gestacao?: string;
  lactacao?: string;
  pediatria?: boolean;
  idoso?: string;
  mecanismo?: string;
  ajusteRenal?: string;
  ajusteHepatico?: string;
  monitorizacao?: string;
  diluicaoEV?: string;
  compatibilidadeEV?: string;
  apresentacoes?: string;
  observacoes?: string;
  referencias?: string;
  gestacaoSeguro?: boolean;
  tags?: string[];
  categoriaAnvisa?: string;
}

/**
 * Medication database — add entries here.
 * The system will import them into the database automatically.
 * 
 * Example entry:
 * {
 *   id: "noradrenalina",
 *   nome: "Noradrenalina",
 *   principioAtivo: "Norepinefrina",
 *   classe: "Vasopressor",
 *   categoria: "Emergência",
 *   formaFarmaceutica: "Ampola",
 *   via: "IV",
 *   indicacoes: "Choque séptico, choque distributivo...",
 *   posologiaAdulto: "0,1–2 mcg/kg/min IV contínuo...",
 *   diluicaoEV: "4 ampolas (16mg) em 234ml SG5%...",
 * }
 */
export const medicationsData: MedicationImportItem[] = [];
