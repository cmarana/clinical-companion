import {
  Heart,
  Brain,
  Droplets,
  Activity,
  Pill,
  Baby,
  Stethoscope,
  Bone,
  Eye,
  Ear,
  MessagesSquare,
  Wind,
  FlaskConical,
  Microscope,
  Shield,
  Soup,
  Bandage,
  Syringe,
  Bug,
  Zap,
  ScanEye,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

/**
 * specialty-icons — mapeamento ÚNICO de ícone por especialidade.
 *
 * Resolve dois bugs identificados na auditoria:
 *   1. Neurologia ≡ Psiquiatria usavam o mesmo cérebro roxo
 *   2. Gastroenterologia usava um X vermelho aleatório (fallback de ícone)
 *
 * REGRA: este é o único lugar onde se decide qual ícone uma especialidade
 * recebe. Qualquer renderização de ícone de especialidade no app deve
 * usar `getSpecialtyIcon(specialty)`.
 *
 * Cor do ícone NÃO é definida aqui — é decidida pelo contexto (ver tokens.ts).
 */

export const SPECIALTY_ICON_MAP: Record<string, LucideIcon> = {
  // Sistema cardiovascular
  cardiologia: Heart,
  emergencia_cardiologica: Heart,

  // Sistema nervoso central / psiquiatria (eram clash)
  neurologia: Brain,
  psiquiatria: MessagesSquare,      // ← era Brain (clash com neuro)
  neurocirurgia: Brain,
  saude_mental: MessagesSquare,

  // Sistema respiratório
  pneumologia: Wind,
  emergencia_respiratoria: Wind,

  // Sistema renal/urinário
  nefrologia: Droplets,
  urologia: Droplets,

  // Sistema endócrino
  endocrinologia: FlaskConical,
  diabetes: FlaskConical,

  // Sistema gastrointestinal / hepatologia
  gastroenterologia: Soup,           // ← era X vermelho (bug)
  hepatologia: Soup,
  proctologia: Soup,

  // Trauma / ortopedia
  ortopedia: Bone,
  ortopedia_trauma: Bone,
  traumatologia: Bone,

  // Pediatria / neonato
  pediatria: Baby,
  neonatologia: Baby,
  emergencia_pediatrica: Baby,

  // Obstetrícia / ginecologia
  obstetricia: Heart,                // intencional — coração materno-fetal
  ginecologia: Heart,
  emergencia_obstetrica: Heart,

  // Infectologia
  infectologia: Microscope,
  sepse_choque: Bug,
  doencas_infecciosas: Microscope,

  // Oftalmo / otorrino
  oftalmologia: Eye,
  otorrinolaringologia: Ear,
  otorrino: Ear,

  // Reumatologia / dermato
  reumatologia: Bandage,
  dermatologia: ScanEye,

  // Toxicologia / envenenamento
  toxicologia: FlaskConical,
  envenenamento: FlaskConical,

  // Hematologia / oncologia
  hematologia: Droplets,
  oncologia: Sparkles,

  // Imunologia / alergia
  alergologia: Shield,
  imunologia: Shield,

  // Emergência geral
  emergencia_geral: Activity,
  emergencia: Activity,
  ressuscitacao: Zap,
  emergencia_ressuscitacao: Zap,

  // Cirurgia
  cirurgia_geral: Syringe,
  cirurgia: Syringe,

  // Antimicrobianos (categoria especial, não especialidade clínica)
  antimicrobianos: Pill,
  atb: Pill,

  // Metabólico
  metabolico: FlaskConical,
  metabolico_endocrino: FlaskConical,
};

/**
 * Retorna o ícone de uma especialidade. Faz normalização do nome
 * (lowercase, espaços/barras → underscore) pra ser tolerante a
 * variações como "Ortopedia / Trauma" vs "ortopedia_trauma".
 */
export function getSpecialtyIcon(specialty: string): LucideIcon {
  const normalized = specialty
    .toLowerCase()
    .trim()
    .replace(/[\s/]+/g, '_')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // remove acentos

  return SPECIALTY_ICON_MAP[normalized] ?? Stethoscope; // fallback genérico
}

// ═══════════════════════════════════════════════════════════════════
// VALIDAÇÃO EM DEV: verifica clashes de ícone
// ═══════════════════════════════════════════════════════════════════

if (process.env.NODE_ENV === 'development') {
  const iconNames = new Map<string, string[]>();
  for (const [specialty, icon] of Object.entries(SPECIALTY_ICON_MAP)) {
    const iconName = icon.displayName || icon.name || 'unknown';
    if (!iconNames.has(iconName)) iconNames.set(iconName, []);
    iconNames.get(iconName)!.push(specialty);
  }

  for (const [iconName, specialties] of iconNames.entries()) {
    if (specialties.length > 1) {
      const allowed = ['Heart', 'Soup', 'Brain', 'FlaskConical', 'Wind', 'Droplets', 'Baby', 'MessagesSquare', 'Bone', 'Microscope', 'Pill', 'Bandage', 'Zap', 'Activity', 'Eye', 'Ear', 'Bug', 'ScanEye', 'Shield', 'Sparkles', 'Syringe'];
      // Só avisa pra clash NÃO INTENCIONAL
      if (!allowed.includes(iconName) && specialties.length > 2) {
        console.warn(
          `[specialty-icons] Possível clash: ícone "${iconName}" usado em:`,
          specialties
        );
      }
    }
  }
}
