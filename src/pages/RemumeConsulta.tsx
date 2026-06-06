import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ArrowLeft, Search, CheckCircle2, XCircle, AlertTriangle,
  Info, ChevronDown, ChevronUp, Pill,
} from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Disponibilidade = "rename" | "remume_maioria" | "remume_parcial" | "nao_sus";

interface Medicamento {
  id: string;
  nome: string;
  dci: string; // Denominação Comum Internacional
  classe: string;
  categoria: string;
  disponibilidade: Disponibilidade;
  estados_restritos?: string[]; // estados onde NÃO está disponível no REMUME
  alternativas_sus: string[];
  observacao?: string;
  componente_especializado?: boolean; // CEAF/Componente Especializado
}

// ─── Base de dados RENAME/REMUME ──────────────────────────────────────────────
// Baseado no RENAME 2023 (7ª edição) + REMUMEs estaduais públicos.
// Fonte: DAF/SCTIE/MS + Secretarias Estaduais de Saúde.

const MEDICAMENTOS: Medicamento[] = [
  // CARDIOVASCULAR
  { id: "amiodarona", nome: "Amiodarona 200mg", dci: "Cloridrato de amiodarona", classe: "Antiarrítmico", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Ampola IV disponível na maioria dos hospitais SUS." },
  { id: "captopril", nome: "Captopril 25mg", dci: "Captopril", classe: "IECA", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Disponível em comprimidos na APS e hospitais." },
  { id: "enalapril", nome: "Enalapril 10mg", dci: "Maleato de enalapril", classe: "IECA", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Alternativa ao captopril." },
  { id: "metoprolol", nome: "Metoprolol 25mg/50mg", dci: "Succinato de metoprolol", classe: "Beta-bloqueador", categoria: "Cardiovascular", disponibilidade: "remume_maioria", alternativas_sus: ["Atenolol 25-100mg (RENAME)"], observacao: "Succinato: nem todos os estados. Atenolol: disponível em todos." },
  { id: "atenolol", nome: "Atenolol 25mg/50mg", dci: "Atenolol", classe: "Beta-bloqueador", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Amplamente disponível." },
  { id: "carvedilol", nome: "Carvedilol 6,25mg/12,5mg/25mg", dci: "Carvedilol", classe: "Beta-bloqueador alfa", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Para IC com fração de ejeção reduzida." },
  { id: "losartana", nome: "Losartana 50mg", dci: "Losartana potássica", classe: "BRA", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Para HAS + intolerância à IECA." },
  { id: "amlodipina", nome: "Anlodipino 5mg/10mg", dci: "Besilato de anlodipino", classe: "BCC", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. HAS + angina estável." },
  { id: "hidroclorotiazida", nome: "Hidroclorotiazida 25mg", dci: "Hidroclorotiazida", classe: "Tiazídico", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. 1ª linha HAS na APS." },
  { id: "furosemida", nome: "Furosemida 40mg / 10mg/mL", dci: "Furosemida", classe: "Diurético de alça", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Comp e ampola. EAP, IC descompensada." },
  { id: "espironolactona", nome: "Espironolactona 25mg/100mg", dci: "Espironolactona", classe: "Poupador K+", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. IC + hiperaldosteronismo." },
  { id: "digoxina", nome: "Digoxina 0,25mg", dci: "Digoxina", classe: "Glicosídeo cardíaco", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. FA com IC. Margem terapêutica estreita." },
  { id: "nitroglicerina", nome: "Nitroglicerina IV", dci: "Nitroglicerina", classe: "Nitrato", categoria: "Cardiovascular", disponibilidade: "remume_maioria", alternativas_sus: ["Isossorbida 5mg SL (RENAME)"], observacao: "IV: hospitais de referência. SL: amplamente disponível." },
  { id: "isossorbida", nome: "Isossorbida 5mg SL", dci: "Dinitrato de isossorbida", classe: "Nitrato", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Angina aguda + EAP." },
  { id: "varfarina", nome: "Varfarina 1mg/5mg", dci: "Varfarina sódica", classe: "Anticoagulante oral", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Único anticoagulante oral amplamente disponível no SUS." },
  { id: "heparina", nome: "Heparina NF 5.000 UI/mL", dci: "Heparina sódica", classe: "Anticoagulante", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Profilaxia e tratamento TVP/TEP." },
  { id: "enoxaparina", nome: "Enoxaparina 40mg/60mg/80mg", dci: "Enoxaparina sódica", classe: "HBPM", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Profilaxia TEV + SCA." },
  { id: "aas", nome: "AAS 100mg/500mg", dci: "Ácido acetilsalicílico", classe: "Antiagregante", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. SCA + prevenção secundária CV." },
  { id: "clopidogrel", nome: "Clopidogrel 75mg", dci: "Bissulfato de clopidogrel", classe: "Antiagregante", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Pós-SCA + AVC isquêmico." },
  { id: "sinvastatina", nome: "Sinvastatina 10mg/20mg/40mg", dci: "Sinvastatina", classe: "Estatina", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Única estatina amplamente disponível no SUS básico." },
  { id: "atorvastatina", nome: "Atorvastatina 10-80mg", dci: "Atorvastatina cálcica", classe: "Estatina", categoria: "Cardiovascular", disponibilidade: "remume_maioria", alternativas_sus: ["Sinvastatina 40-80mg (RENAME)"], observacao: "Disponível em muitos estados. Sinvastatina: alternativa universal no SUS." },
  { id: "noradrenalina", nome: "Noradrenalina 4mg/4mL", dci: "Norepinefrina", classe: "Vasopressor", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. 1ª linha choque séptico. Apenas hospitalar." },
  { id: "adrenalina", nome: "Adrenalina 1mg/mL", dci: "Adrenalina", classe: "Vasopressor/broncodilatador", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Anafilaxia + PCR. Uso emergencial." },
  { id: "dopamina", nome: "Dopamina 50mg/10mL", dci: "Cloridrato de dopamina", classe: "Vasopressor", categoria: "Cardiovascular", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. 2ª linha vasopressor. Hospitalar." },

  // ANTIMICROBIANOS
  { id: "amoxicilina", nome: "Amoxicilina 500mg", dci: "Amoxicilina", classe: "Penicilina", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Infecções respiratórias altas, OMA, faringite." },
  { id: "amoxicilina_clavulanato", nome: "Amoxicilina + Clavulanato 500/125mg", dci: "Amoxicilina + Clavulanato", classe: "Penicilina + inibidor", categoria: "Antimicrobiano", disponibilidade: "remume_maioria", alternativas_sus: ["Amoxicilina 500mg + Metronidazol 400mg"], observacao: "Disponível em muitos estados. Para infecções com anaeróbios." },
  { id: "ceftriaxona", nome: "Ceftriaxona 1g IV/IM", dci: "Ceftriaxona", classe: "Cefalosporina 3ª G", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Meningite, pneumonia grave, ITU complicada." },
  { id: "cefazolina", nome: "Cefazolina 1g IV", dci: "Cefazolina", classe: "Cefalosporina 1ª G", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Profilaxia cirúrgica + infecções de pele." },
  { id: "azitromicina", nome: "Azitromicina 500mg", dci: "Di-hidrato de azitromicina", classe: "Macrolídeo", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Pneumonia atípica, coqueluche, APLV." },
  { id: "claritromicina", nome: "Claritromicina 500mg", dci: "Claritromicina", classe: "Macrolídeo", categoria: "Antimicrobiano", disponibilidade: "remume_maioria", alternativas_sus: ["Azitromicina 500mg (RENAME)"], observacao: "Nem todos os estados. Azitromicina: alternativa universal." },
  { id: "ciprofloxacino", nome: "Ciprofloxacino 500mg / IV", dci: "Cloridrato de ciprofloxacino", classe: "Fluoroquinolona", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. ITU complicada, Shigella, profilaxia meningococo." },
  { id: "metronidazol", nome: "Metronidazol 250mg / IV", dci: "Metronidazol", classe: "Nitroimidazol", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Anaeróbios, tricomoníase, amebíase." },
  { id: "doxiciclina", nome: "Doxiciclina 100mg", dci: "Cloridrato de doxiciclina", classe: "Tetraciclina", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Leptospirose (leve), febre maculosa, ISTs." },
  { id: "vancomicina", nome: "Vancomicina 500mg IV", dci: "Cloridrato de vancomicina", classe: "Glicopeptídeo", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. MRSA, meningite resistente. Hospitalar." },
  { id: "penicilina_g", nome: "Penicilina G Cristalina 5MUI IV", dci: "Penicilina G sódica", classe: "Penicilina", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Leptospirose grave, meningite por pneumococo sensível." },
  { id: "penicilina_benzatina", nome: "Penicilina G Benzatina 1,2MUI IM", dci: "Penicilina G benzatina", classe: "Penicilina", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Sífilis, faringite estreptocócica, febre reumática." },
  { id: "tmp_smx", nome: "TMP-SMX 160/800mg", dci: "Trimetoprima + sulfametoxazol", classe: "Sulfonamida", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. ITU não complicada, toxoplasmose, PJP (profilaxia)." },
  { id: "fluconazol", nome: "Fluconazol 150mg / IV", dci: "Fluconazol", classe: "Antifúngico azólico", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Candidíase mucocutânea, meningite criptocócica (adjunto)." },
  { id: "anfotericina", nome: "Anfotericina B desoxicolato / lipossômica", dci: "Anfotericina B", classe: "Antifúngico poliênico", categoria: "Antimicrobiano", disponibilidade: "remume_maioria", alternativas_sus: ["Anfotericina B desoxicolato (mais ampla)"], observacao: "Lipossômica: componente especializado CEAF. Desoxicolato: maioria dos hospitais." },
  { id: "oseltamivir", nome: "Oseltamivir 75mg", dci: "Fosfato de oseltamivir", classe: "Antiviral", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Influenza em grupos de risco. Dose única = 75mg 2x/dia × 5 dias." },
  { id: "aciclovir", nome: "Aciclovir 200mg / IV", dci: "Aciclovir", classe: "Antiviral", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Herpes simples, zóster, encefalite herpética." },
  { id: "isoniazida", nome: "Isoniazida 100mg/300mg", dci: "Isoniazida", classe: "Tuberculostático", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. TB ativa (RIPE) + latente (profilaxia 9 meses)." },
  { id: "rifampicina", nome: "Rifampicina 150mg/300mg", dci: "Rifampicina", classe: "Tuberculostático", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. TB ativa (RIPE). Profilaxia de meningococo/Hib." },
  { id: "cloroquina", nome: "Cloroquina 150mg", dci: "Difosfato de cloroquina", classe: "Antimalárico", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. P. vivax + P. malariae. Disponível via SIVEP/PNCD." },
  { id: "glucantime", nome: "Glucantime (antimoniato) IM", dci: "Antimoniato de meglumina", classe: "Antiparasitário", categoria: "Antimicrobiano", disponibilidade: "rename", alternativas_sus: ["Anfotericina B lipossômica (CEAF)"], observacao: "RENAME 2023. Leishmaniose. Distribuído pela SVS/PNZV." },

  // NEUROLOGIA / ANALGESIA
  { id: "diazepam", nome: "Diazepam 5mg/10mg / IV", dci: "Diazepam", classe: "BZD", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Status epilepticus (2ª linha após midazolam), ansiedade." },
  { id: "midazolam", nome: "Midazolam 5mg/5mL IV/IM", dci: "Cloridrato de midazolam", classe: "BZD", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. 1ª linha status epilepticus IM. Sedação." },
  { id: "fenitoina", nome: "Fenitoína 100mg / IV", dci: "Fenitoína", classe: "Antiepiléptico", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. 2ª linha status epilepticus. Monitorar ECG." },
  { id: "fenobarbital", nome: "Fenobarbital 100mg / IV", dci: "Fenobarbital", classe: "Barbitúrico/antiepiléptico", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Status refratário + epilepsia crônica." },
  { id: "valproato", nome: "Valproato de sódio 500mg IV", dci: "Valproato de sódio", classe: "Antiepiléptico", categoria: "Neurologia", disponibilidade: "remume_maioria", alternativas_sus: ["Fenitoína IV (RENAME)", "Fenobarbital IV (RENAME)"], observacao: "Nem todos os estados têm a formulação IV. VO: amplamente disponível." },
  { id: "levetiracetam", nome: "Levetiracetam 500mg / IV", dci: "Levetiracetam", classe: "Antiepiléptico", categoria: "Neurologia", disponibilidade: "remume_parcial", alternativas_sus: ["Fenitoína IV (RENAME)", "Valproato IV"], observacao: "CEAF VO. IV: hospitais de referência. Sem interações medicamentosas significativas." },
  { id: "carbamazepina", nome: "Carbamazepina 200mg", dci: "Carbamazepina", classe: "Antiepiléptico", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Epilepsia focal + neuralgia do trigêmeo." },
  { id: "morfina", nome: "Morfina 10mg/mL IV/SC", dci: "Sulfato de morfina", classe: "Opioide", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Dor intensa, EAP, cuidados paliativos. Hospitalar." },
  { id: "tramadol", nome: "Tramadol 50mg / IV/IM", dci: "Cloridrato de tramadol", classe: "Opioide fraco", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Dor moderada a intensa. EV + IM + cápsulas." },
  { id: "dipirona", nome: "Dipirona 500mg / IV", dci: "Metamizol sódico", classe: "Analgésico/antipirético", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Dor e febre. VO + EV. 1ª linha em emergência." },
  { id: "ibuprofeno", nome: "Ibuprofeno 300mg/600mg", dci: "Ibuprofeno", classe: "AINE", categoria: "Neurologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Dor inflamatória, artrite, febre. NUNCA em dengue." },

  // RESPIRATÓRIO
  { id: "salbutamol", nome: "Salbutamol 100mcg inalatório / nebulização", dci: "Sulfato de salbutamol", classe: "Beta2-agonista SABA", categoria: "Respiratório", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Crise asmática + DPOC exacerbado." },
  { id: "formoterol", nome: "Formoterol + Budesonida (inalatório)", dci: "Formoterol + Budesonida", classe: "LABA + CI", categoria: "Respiratório", disponibilidade: "remume_maioria", alternativas_sus: ["Beclometasona + Formoterol (alguns estados)", "Salmeterol + Fluticasona (REMUME variável)"], observacao: "Disponível via CMDE/CEAF para asma persistente moderada-grave." },
  { id: "budesonida", nome: "Budesonida 200mcg inalatório", dci: "Budesonida", classe: "Corticoide inalatório", categoria: "Respiratório", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Asma persistente + DPOC com eosinofilia." },
  { id: "ipratropio", nome: "Ipratrópio 0,25mg/mL nebulização", dci: "Brometo de ipratrópio", classe: "Anticolinérgico SAMA", categoria: "Respiratório", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. DPOC exacerbado + crise asmática grave (adjunto)." },
  { id: "prednisolona", nome: "Prednisolona 20mg/40mg", dci: "Prednisolona", classe: "Corticoide sistêmico", categoria: "Respiratório", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Crise asmática, DPOC exacerbado, alergias graves." },
  { id: "metilprednisolona", nome: "Metilprednisolona 125mg IV", dci: "Succinato sódico de metilprednisolona", classe: "Corticoide sistêmico IV", categoria: "Respiratório", disponibilidade: "rename", alternativas_sus: ["Dexametasona 10mg IV (RENAME)"], observacao: "RENAME 2023. Hospitalar. Dexametasona: alternativa universal." },
  { id: "dexametasona", nome: "Dexametasona 4mg/mL IV/IM", dci: "Fosfato sódico de dexametasona", classe: "Corticoide sistêmico", categoria: "Respiratório", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Crupe, EAP, edema cerebral, COVID-19 grave, sepse." },

  // ENDOCRINOLOGIA / METABÓLICO
  { id: "insulina_regular", nome: "Insulina Regular 100UI/mL", dci: "Insulina humana regular", classe: "Insulina", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. CAD/EHH, hiperglicemia hospitalar, BIC em UTI." },
  { id: "insulina_nph", nome: "Insulina NPH 100UI/mL", dci: "Insulina isofana humana", classe: "Insulina", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. DM1 e DM2 via SUS. Insulinas análogas: CEAF (critérios)." },
  { id: "metformina", nome: "Metformina 500mg/850mg", dci: "Cloridrato de metformina", classe: "Biguanida", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. 1ª linha DM2. Contraindicada se TFG < 30." },
  { id: "glibenclamida", nome: "Glibenclamida 5mg", dci: "Glibenclamida", classe: "Sulfonilureia", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. DM2 refratário à metformina. Risco de hipoglicemia." },
  { id: "levotiroxina", nome: "Levotiroxina 25/50/100mcg", dci: "Levotiroxina sódica", classe: "Hormônio tireoidiano", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Hipotireoidismo. Tomar em jejum 30 min antes." },
  { id: "glicose_50", nome: "Glicose 50% 10mL IV", dci: "Glicose", classe: "Antidoto hipoglicemia", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Hipoglicemia grave. 40-80mL IV. Verificar glicemia após." },
  { id: "glucagon", nome: "Glucagon 1mg IM/SC", dci: "Glucagon", classe: "Antidoto hipoglicemia", categoria: "Endocrinologia", disponibilidade: "remume_parcial", alternativas_sus: ["Glicose 50% IV (RENAME — hospitalar)"], observacao: "Componente especializado em alguns estados. Glicose IV: alternativa hospitalar universal." },
  { id: "sulfato_magnesio", nome: "Sulfato de magnésio 50% IV", dci: "Sulfato de magnésio", classe: "Eletrólito/anticonvulsivante", categoria: "Endocrinologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Eclâmpsia, hipomagnesemia, asma grave, ITU por Mg." },

  // GASTROENTEROLOGIA
  { id: "omeprazol", nome: "Omeprazol 20mg / IV", dci: "Omeprazol", classe: "IBP", categoria: "Gastroenterologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. DRGE, úlcera, HDA. VO + IV disponíveis." },
  { id: "pantoprazol", nome: "Pantoprazol 40mg IV", dci: "Pantoprazol sódico", classe: "IBP", categoria: "Gastroenterologia", disponibilidade: "rename", alternativas_sus: ["Omeprazol IV (RENAME)"], observacao: "RENAME 2023. HDA — 80mg bolus + 8mg/h BIC." },
  { id: "ondansetrona", nome: "Ondansetrona 4mg / IV/IM", dci: "Cloridrato de ondansetrona", classe: "Antiemético 5-HT3", categoria: "Gastroenterologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Náusea/vômito em QT, pós-operatório, hiperemese." },
  { id: "metoclopramida", nome: "Metoclopramida 10mg / IV/IM", dci: "Cloridrato de metoclopramida", classe: "Antiemético/procinético", categoria: "Gastroenterologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Náusea/vômito. Máx 3 meses (discinesia tardia)." },
  { id: "lactulose", nome: "Lactulose 667mg/mL xarope", dci: "Lactulose", classe: "Laxante osmótico", categoria: "Gastroenterologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Encefalopatia hepática (500mL/4h até fezes ácidas) + constipação." },

  // PSIQUIATRIA
  { id: "haloperidol", nome: "Haloperidol 5mg/mL IV/IM / 1mg comp", dci: "Haloperidol", classe: "Antipsicótico típico", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Agitação psicomotora, psicose aguda, delirium. IV/IM na emergência." },
  { id: "clorpromazina", nome: "Clorpromazina 25mg/100mg / IM", dci: "Cloridrato de clorpromazina", classe: "Antipsicótico típico", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Agitação grave, psicose aguda. IM na emergência." },
  { id: "quetiapina", nome: "Quetiapina 25mg/100mg/200mg", dci: "Fumarato de quetiapina", classe: "Antipsicótico atípico", categoria: "Psiquiatria", disponibilidade: "remume_maioria", alternativas_sus: ["Haloperidol (RENAME)", "Risperidona (RENAME)"], observacao: "Disponível na maioria dos estados. Para transtorno bipolar: CEAF." },
  { id: "risperidona", nome: "Risperidona 1mg/2mg/3mg", dci: "Risperidona", classe: "Antipsicótico atípico", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Esquizofrenia, TB tipo I, autismo (comportamento)." },
  { id: "litio", nome: "Carbonato de lítio 150mg/300mg", dci: "Carbonato de lítio", classe: "Estabilizador do humor", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Transtorno bipolar. Monitorar litemias + renal + tireoidiana." },
  { id: "amitriptilina", nome: "Amitriptilina 25mg", dci: "Cloridrato de amitriptilina", classe: "Antidepressivo tricíclico", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Depressão, dor neuropática, fibromialgia." },
  { id: "fluoxetina", nome: "Fluoxetina 20mg", dci: "Cloridrato de fluoxetina", classe: "ISRS", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Depressão, TOC, bulimia. Única meia-vida longa (7 dias)." },
  { id: "sertralina", nome: "Sertralina 50mg/100mg", dci: "Cloridrato de sertralina", classe: "ISRS", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Depressão, TAG, TEPT, fobia social." },
  { id: "clonazepam", nome: "Clonazepam 0,5mg/2mg", dci: "Clonazepam", classe: "BZD/antiepiléptico", categoria: "Psiquiatria", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Epilepsia + transtorno do pânico. Portaria 344/1998 — receita A." },

  // NEFROLOGIA
  { id: "bicarbonato", nome: "Bicarbonato de sódio 8,4% IV", dci: "Bicarbonato de sódio", classe: "Alcalinizante", categoria: "Nefrologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Acidose metabólica grave, hipercalemia (TFG < 20), intoxicação por TCA." },
  { id: "gluconato_calcio", nome: "Gluconato de cálcio 10% IV", dci: "Gluconato de cálcio", classe: "Protetor de membrana", categoria: "Nefrologia", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Hipercalemia com ECG alterado (proteção miocárdica imediata)." },

  // ANTÍDOTOS / EMERGÊNCIA
  { id: "naloxona", nome: "Naloxona 0,4mg/mL IV/IM", dci: "Cloridrato de naloxona", classe: "Antagonista opioide", categoria: "Antídoto", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Intoxicação por opioide. 0,4mg IV a cada 2-3 min. Meia-vida curta: repetir." },
  { id: "flumazenil", nome: "Flumazenil 0,1mg/mL IV", dci: "Flumazenil", classe: "Antagonista BZD", categoria: "Antídoto", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Intoxicação por BZD. Cuidado: meia-vida < 1h (rebote) + epilépticos (convulsão)." },
  { id: "nac", nome: "N-acetilcisteína (NAC) IV/VO", dci: "N-acetilcisteína", classe: "Antídoto paracetamol", categoria: "Antídoto", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Intoxicação por paracetamol. 150mg/kg IV em 60 min + protocolo 20h." },
  { id: "atropina", nome: "Atropina 0,5mg/mL IV", dci: "Sulfato de atropina", classe: "Anticolinérgico/antídoto", categoria: "Antídoto", disponibilidade: "rename", alternativas_sus: [], observacao: "RENAME 2023. Organofosforado, bradicardia sinusal sintomática, PCR (assistolia)." },
];

const CATEGORIAS = Array.from(new Set(MEDICAMENTOS.map(m => m.categoria))).sort();

const ESTADOS_BR = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
];

const DISP_CONFIG: Record<Disponibilidade, { label: string; cor: string; icon: React.ReactNode }> = {
  rename: { label: "RENAME Nacional", cor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", icon: <CheckCircle2 size={12} /> },
  remume_maioria: { label: "REMUME — maioria dos estados", cor: "bg-blue-500/15 text-blue-400 border-blue-500/30", icon: <CheckCircle2 size={12} /> },
  remume_parcial: { label: "REMUME — estados selecionados", cor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", icon: <AlertTriangle size={12} /> },
  nao_sus: { label: "Não disponível no SUS", cor: "bg-red-500/15 text-red-400 border-red-500/30", icon: <XCircle size={12} /> },
};

// ─── Componentes ──────────────────────────────────────────────────────────────

function CardMedicamento({ med }: { med: Medicamento }) {
  const [expandido, setExpandido] = useState(false);
  const cfg = DISP_CONFIG[med.disponibilidade];

  return (
    <Card>
      <CardContent className="p-0">
        <button
          onClick={() => setExpandido(e => !e)}
          className="w-full flex items-start gap-3 p-3.5 text-left hover:bg-accent/20 transition-colors rounded-xl"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-sm leading-snug">{med.nome}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{med.dci} · {med.classe}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Badge variant="outline" className={`text-[9px] flex items-center gap-1 ${cfg.cor}`}>
                  {cfg.icon} {med.disponibilidade === "rename" ? "RENAME" : med.disponibilidade === "remume_maioria" ? "REMUME ✓" : med.disponibilidade === "remume_parcial" ? "Parcial" : "Não SUS"}
                </Badge>
                {expandido ? <ChevronUp size={14} className="text-muted-foreground" /> : <ChevronDown size={14} className="text-muted-foreground" />}
              </div>
            </div>
          </div>
        </button>

        {expandido && (
          <div className="px-3.5 pb-3.5 space-y-2 border-t border-border pt-2.5">
            <div className={`rounded-lg border px-3 py-2 ${cfg.cor}`}>
              <p className="text-[11px] font-medium">{cfg.label}</p>
            </div>

            {med.observacao && (
              <p className="text-[11px] text-muted-foreground">{med.observacao}</p>
            )}

            {med.alternativas_sus.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Alternativas disponíveis no SUS</p>
                {med.alternativas_sus.map((alt, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] bg-emerald-500/8 rounded-lg px-2.5 py-1.5 border border-emerald-500/25">
                    <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                    <span>{alt}</span>
                  </div>
                ))}
              </div>
            )}

            {med.componente_especializado && (
              <div className="flex items-center gap-2 text-[11px] bg-purple-500/8 rounded-lg px-2.5 py-1.5 border border-purple-500/25">
                <Info size={11} className="text-purple-400 shrink-0" />
                <span className="text-purple-400">Componente Especializado (CEAF) — requer laudo médico e CID específico</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function RemumeConsulta() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [filtroDisp, setFiltroDisp] = useState<string>("todos");

  const resultado = useMemo(() => {
    return MEDICAMENTOS.filter(m => {
      const matchBusca = !busca || m.nome.toLowerCase().includes(busca.toLowerCase()) || m.dci.toLowerCase().includes(busca.toLowerCase()) || m.classe.toLowerCase().includes(busca.toLowerCase());
      const matchCat = categoria === "todas" || m.categoria === categoria;
      const matchDisp = filtroDisp === "todos" || m.disponibilidade === filtroDisp;
      return matchBusca && matchCat && matchDisp;
    });
  }, [busca, categoria, filtroDisp]);

  // Estatísticas
  const stats = useMemo(() => ({
    rename: MEDICAMENTOS.filter(m => m.disponibilidade === "rename").length,
    remume_maioria: MEDICAMENTOS.filter(m => m.disponibilidade === "remume_maioria").length,
    remume_parcial: MEDICAMENTOS.filter(m => m.disponibilidade === "remume_parcial").length,
  }), []);

  return (
    <div className="px-4 pt-4 pb-24 max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="h-8 w-8">
          <ArrowLeft size={16} />
        </Button>
        <div>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <Pill size={18} className="text-primary" />
            RENAME / REMUME
          </h1>
          <p className="text-xs text-muted-foreground">Disponibilidade de medicamentos no SUS</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        <Card><CardContent className="p-2.5 text-center">
          <p className="text-lg font-bold text-emerald-400">{stats.rename}</p>
          <p className="text-[10px] text-muted-foreground">RENAME Nacional</p>
        </CardContent></Card>
        <Card><CardContent className="p-2.5 text-center">
          <p className="text-lg font-bold text-blue-400">{stats.remume_maioria}</p>
          <p className="text-[10px] text-muted-foreground">REMUME Maioria</p>
        </CardContent></Card>
        <Card><CardContent className="p-2.5 text-center">
          <p className="text-lg font-bold text-yellow-400">{stats.remume_parcial}</p>
          <p className="text-[10px] text-muted-foreground">Parcial/CEAF</p>
        </CardContent></Card>
      </div>

      {/* Filtros */}
      <div className="space-y-2">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={busca}
            onChange={e => setBusca(e.target.value)}
            placeholder="Buscar por nome, DCI ou classe..."
            className="pl-9 h-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <Select value={categoria} onValueChange={setCategoria}>
            <SelectTrigger className="h-8 text-xs flex-1">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas as categorias</SelectItem>
              {CATEGORIAS.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filtroDisp} onValueChange={setFiltroDisp}>
            <SelectTrigger className="h-8 text-xs flex-1">
              <SelectValue placeholder="Disponibilidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="rename">RENAME ✅</SelectItem>
              <SelectItem value="remume_maioria">REMUME Maioria 🟦</SelectItem>
              <SelectItem value="remume_parcial">Parcial ⚠️</SelectItem>
              <SelectItem value="nao_sus">Não SUS ❌</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Resultado */}
      <p className="text-xs text-muted-foreground">{resultado.length} medicamento{resultado.length !== 1 ? "s" : ""} encontrado{resultado.length !== 1 ? "s" : ""}</p>

      <div className="space-y-2">
        {resultado.map(m => <CardMedicamento key={m.id} med={m} />)}
      </div>

      {resultado.length === 0 && (
        <Card><CardContent className="p-6 text-center text-sm text-muted-foreground">
          Nenhum medicamento encontrado. Tente outro termo.
        </CardContent></Card>
      )}

      {/* Rodapé */}
      <div className="flex items-start gap-2 text-[10px] text-muted-foreground">
        <Info size={10} className="shrink-0 mt-0.5" />
        <p>Baseado no RENAME 2023 (7ª edição) e REMUMEs estaduais. Disponibilidade pode variar por município. Confirme com a farmácia do serviço.</p>
      </div>
    </div>
  );
}
