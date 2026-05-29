// ──────────────────────────────────────────────────────────────────────────
// Mapeamento SAMU 192 → protocolos Pulso existentes.
//
// NÃO inventa IDs. Resolve correspondências varrendo `allEmergencyProtocols`
// e casando título (sem acento, lowercase) contra padrões clínicos.
// Cada grupo define os códigos SAMU oficiais, o nível (SBV/SAV), filtros de
// categoria e tags adicionais. Múltiplos grupos podem casar no mesmo
// protocolo — os códigos, níveis e tags são unidos.
// ──────────────────────────────────────────────────────────────────────────

import type { EmergencyProtocol } from "./types";

export interface SamuMeta {
  codes: string[];
  level: ("SBV" | "SAV")[];
  tags: string[];
}

interface SamuGroup {
  codes: string[];
  level: ("SBV" | "SAV")[];
  /** Categorias permitidas (filtro). undefined = qualquer. */
  categories?: string[];
  /** Padrões aplicados ao título normalizado (sem acento, minúsculo). */
  match: RegExp[];
  /** Tags clínicas adicionais (já inclui "samu"/"samu192" automaticamente). */
  extraTags?: string[];
}

const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const GROUPS: SamuGroup[] = [
  // ── Ressuscitação / RCP / Pós-PCR ─────────────────────────────────────
  {
    codes: ["BC5","BC6","BC7","BC8","BC9","AC5","AC6","AC7","AC8","AC9","AC10","AC11","AC12"],
    level: ["SBV","SAV"],
    categories: ["resuscitation"],
    match: [/\bpcr\b/, /parada cardio/, /\brcp\b/, /ressuscit/, /pos.?pcr/, /ritmo (n[ãa]o.?)?choc/],
    extraTags: ["pcr","rcp","ressuscitacao"],
  },
  // ── Via aérea / IOT / SRI / OVACE ─────────────────────────────────────
  {
    codes: ["BC3","BC4","BP1","BP2","BP3","AP1","AP2","AP3","AP4","AP5","AP6","AP7","AP8","AP9"],
    level: ["SBV","SAV"],
    categories: ["resuscitation"],
    match: [/via a[ée]rea/, /\biot\b/, /intubac/, /sequ[eê]ncia r[áa]pida/, /\bsri\b/, /ovace/, /obstru[cç][ãa]o.*v[ií]a/, /cricotireoid/],
    extraTags: ["via aerea","iot","sri"],
  },
  // ── Respiratório ──────────────────────────────────────────────────────
  {
    codes: ["BC10","AC22","AC23","BP4","BP5","BP6","BP7","AP10","AP12","AP13","AP14","AP15","AP16","AP17"],
    level: ["SBV","SAV"],
    categories: ["respiratory"],
    match: [/insufici[eê]ncia respirat/, /\basma\b/, /\bdpoc\b/, /broncoespasm/, /\bvni\b/, /ventilac/, /\beap\b/, /edema agudo de pulm/, /pneumot[óo]rax/],
    extraTags: ["respiratorio"],
  },
  // ── IAM / SCA / dor torácica ──────────────────────────────────────────
  {
    codes: ["BC12","AC17","AC18","AP39","AP40","AP41"],
    level: ["SBV","SAV"],
    categories: ["cardiovascular"],
    match: [/\biam\b/, /infarto/, /\bsca\b/, /s[ií]ndrome coronarian/, /dor tor[áa]cica/],
    extraTags: ["iam","sca","dor toracica"],
  },
  // ── Crise/Emergência hipertensiva ─────────────────────────────────────
  {
    codes: ["BC13","AC19"],
    level: ["SBV","SAV"],
    categories: ["cardiovascular"],
    match: [/crise hipertens/, /emerg[eê]ncia hipertens/],
    extraTags: ["hipertensao","crise hipertensiva"],
  },
  // ── AVC ───────────────────────────────────────────────────────────────
  {
    codes: ["BC14","AC21","BP15","AP28"],
    level: ["SBV","SAV"],
    categories: ["neurological"],
    match: [/\bavc\b/, /acidente vascular/, /trombolise/, /isqu[eê]mic.*cerebr/],
    extraTags: ["avc"],
  },
  // ── Crise convulsiva / Status epilepticus ─────────────────────────────
  {
    codes: ["BC16","AC26","BPed15","APed22"],
    level: ["SBV","SAV"],
    categories: ["neurological","pediatric-emergency"],
    match: [/convuls/, /estado de mal/, /status epileptic/, /epilep/],
    extraTags: ["convulsao","epilepsia"],
  },
  // ── Rebaixamento de consciência / Coma ────────────────────────────────
  {
    codes: ["BC15","AC25","BP14","BP28","AP27","AP43"],
    level: ["SBV","SAV"],
    categories: ["neurological"],
    match: [/rebaixament/, /\bcoma\b/, /n[íi]vel de consci[eê]ncia/, /inconsci/],
    extraTags: ["rebaixamento","coma"],
  },
  // ── Choque (genérico) ─────────────────────────────────────────────────
  {
    codes: ["BC11","AC16","BT4","AT4","BPed12","APed17"],
    level: ["SBV","SAV"],
    categories: ["sepsis"],
    match: [/\bchoque\b/],
    extraTags: ["choque"],
  },
  // ── Hemorragia / choque hipovolêmico ──────────────────────────────────
  {
    codes: ["BC21","BC22","BP8","BP9","AC31","AC32","AP18","AP19"],
    level: ["SBV","SAV"],
    categories: ["sepsis","trauma","gastroenterology-emergency"],
    match: [/hemorrag/, /sangrament/, /\bhda\b/, /\bhdb\b/, /hipovol[eê]mic/],
    extraTags: ["hemorragia","hipovolemico"],
  },
  // ── Anafilaxia ────────────────────────────────────────────────────────
  {
    codes: ["BC23","AC33","BPed19","APed26"],
    level: ["SBV","SAV"],
    categories: ["other-emergencies"],
    match: [/anafilax/, /rea[cç][ãa]o al[ée]rgica grave/],
    extraTags: ["anafilaxia"],
  },
  // ── Hipoglicemia ──────────────────────────────────────────────────────
  {
    codes: ["BC19","AC29","BPed18","APed25"],
    level: ["SBV","SAV"],
    categories: ["metabolic"],
    match: [/hipoglicem/],
    extraTags: ["hipoglicemia"],
  },
  // ── Hiperglicemia / CAD / EHH ─────────────────────────────────────────
  {
    codes: ["BC18","AC28","BPed17","APed24"],
    level: ["SBV","SAV"],
    categories: ["metabolic"],
    match: [/hiperglicem/, /cetoacidose/, /\bcad\b/, /hiperosmolar/, /\behh\b/],
    extraTags: ["cad","hiperglicemia"],
  },
  // ── Trauma / ATLS ─────────────────────────────────────────────────────
  {
    codes: ["BT1","BT2","BT3","BT5","BT6","BT7","BT9","BT10","BT11","BT12","BT13","BT14","BT15","BT16","BT17","BT18","BT22","AT5"],
    level: ["SBV","SAV"],
    categories: ["trauma"],
    match: [/trauma/, /politrauma/, /\batls\b/, /\btce\b/, /raqui/],
    extraTags: ["trauma","atls"],
  },
  // ── Intoxicações ──────────────────────────────────────────────────────
  {
    codes: ["BTox1","BTox2","BTox3","BTox4","BTox5","BTox6","BTox8","BTox9","BTox10","BTox11","BTox12","BTox13","BTox14","BTox15","BTox16","ATox1","ATox2","ATox3","ATox4"],
    level: ["SBV","SAV"],
    categories: ["intoxication"],
    match: [/intoxicac/, /envenenament/, /toxicolog/, /s[ií]ndrome t[óo]xica/, /overdose/],
    extraTags: ["intoxicacao","toxicologia"],
  },
  // ── Obstetrícia ───────────────────────────────────────────────────────
  {
    codes: ["BGO1","BGO2","BGO3","BGO4","BGO5","BGO6","BGO7","BGO8","BGO10","BGO11","AGO1","AGO2","AGO3","AGO4","AGO5","AGO7","AGO8","AGO9","AGO10","AGO11","AGO12","AGO14","AGO15","AGO17"],
    level: ["SBV","SAV"],
    categories: ["obstetrics"],
    match: [/gestant/, /\bparto\b/, /pr[ée].?eclamp/, /eclamps/, /hemorragia obstetr/, /obstetric/, /hellp/, /placenta/, /p[óo]s.?parto/, /hpp/],
    extraTags: ["obstetricia"],
  },
  // ── Pediatria / Neonatal ──────────────────────────────────────────────
  {
    codes: ["BPed1","BPed2","BPed3","BPed4","BPed5","BPed6","BPed7","BPed8","BPed9","BPed10","BPed11","BPed12","BPed13","BPed14","BPed15","BPed16","BPed17","BPed18","BPed19","BPed20","BPed21","BPed23","APed1","APed2","APed3","APed4","APed5","APed6","APed7","APed8","APed9","APed13","APed14","APed15","APed16","APed17","APed18","APed19","APed20","APed21","APed22","APed23","APed24","APed25","APed26"],
    level: ["SBV","SAV"],
    categories: ["pediatric-emergency","neonatal"],
    match: [/pedi[áa]tric/, /\bcrian[cç]a\b/, /lactent/, /neonat/, /rec[ée]m.?nascido/],
    extraTags: ["pediatria"],
  },
  // ── Sepse (apenas tag SAMU — sem códigos diretos na matriz atual) ────
  {
    codes: [],
    level: ["SAV"],
    categories: ["sepsis"],
    match: [/sepse/, /choque s[ée]ptico/],
    extraTags: ["sepse"],
  },
];

/** Constrói o mapa id → metadados SAMU varrendo protocolos reais. */
export function buildSamuMappings(
  protocols: EmergencyProtocol[]
): Map<string, SamuMeta> {
  const out = new Map<string, SamuMeta>();
  for (const p of protocols) {
    const t = norm(p.title);
    for (const g of GROUPS) {
      if (g.categories && !g.categories.includes(p.categoryId)) continue;
      if (!g.match.some(r => r.test(t))) continue;
      const prev = out.get(p.id);
      const codes = Array.from(new Set([...(prev?.codes ?? []), ...g.codes]));
      const level = Array.from(
        new Set([...(prev?.level ?? []), ...g.level])
      ) as ("SBV" | "SAV")[];
      const tags = Array.from(
        new Set([...(prev?.tags ?? []), ...(g.extraTags ?? [])])
      );
      out.set(p.id, { codes, level, tags });
    }
  }
  return out;
}
