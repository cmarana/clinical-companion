import type { MedicationImportItem } from "./medicationsData";

/**
 * Lote 32 — 100 medicamentos especializados
 * Foco: Cardiologia avançada (HAP, amiloidose), hepatologia (DAA HCV/HBV),
 * anestesia/cirurgia, pediatria/neonatal, oftalmo intravítrea, derma/retinoides,
 * urologia/ginecologia e DMARDs/imunossupressores.
 */
export const medicationsLote32: MedicationImportItem[] = [
  {
    "id": "card-vericiguate",
    "nome": "Vericiguate",
    "principioAtivo": "Vericiguate",
    "classe": "Estimulador de guanilato ciclase solúvel",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "ICFEr após descompensação",
    "posologiaAdulto": "Iniciar 2.5 mg/dia, escalonar até 10 mg",
    "contraindicacoes": "PAS <100, gestação",
    "efeitosAdversos": "Hipotensão, anemia, síncope",
    "gestacao": "Cat. X",
    "mecanismo": "Estimula sGC",
    "tags": [
      "ic"
    ]
  },
  {
    "id": "card-mavacanten",
    "nome": "Mavacanten",
    "principioAtivo": "Mavacanten",
    "classe": "Inibidor seletivo de miosina cardíaca",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Cardiomiopatia hipertrófica obstrutiva",
    "posologiaAdulto": "2.5-15 mg/dia",
    "contraindicacoes": "FEVE <55%",
    "efeitosAdversos": "Disfunção VE, IC",
    "gestacao": "Cat. NA",
    "mecanismo": "Reduz hipercontratilidade",
    "tags": [
      "cmh"
    ]
  },
  {
    "id": "card-tafamidis",
    "nome": "Tafamidis",
    "principioAtivo": "Tafamidis",
    "classe": "Estabilizador transtirretina",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Amiloidose cardíaca por TTR",
    "posologiaAdulto": "61 mg/dia VO",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Diarreia, dor abdominal",
    "gestacao": "Cat. NA",
    "mecanismo": "Estabiliza TTR",
    "tags": [
      "amiloidose"
    ]
  },
  {
    "id": "card-patisiran",
    "nome": "Patisiran",
    "principioAtivo": "Patisiran",
    "classe": "siRNA anti-TTR",
    "categoria": "Cardiologia/Neuro",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Polineuropatia amiloidótica TTR",
    "posologiaAdulto": "0.3 mg/kg IV cada 3 sem",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação infusional, deficiência vit A",
    "gestacao": "Cat. NA",
    "mecanismo": "Silencia mRNA TTR",
    "tags": [
      "amiloidose",
      "sirna"
    ]
  },
  {
    "id": "card-inclisiran",
    "nome": "Inclisiran",
    "principioAtivo": "Inclisiran",
    "classe": "siRNA anti-PCSK9",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "SC",
    "via": "SC",
    "indicacoes": "Hipercolesterolemia ASCVD",
    "posologiaAdulto": "284 mg SC dia 0, 90 dias e cada 6 meses",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação local",
    "gestacao": "Cat. NA",
    "mecanismo": "Reduz PCSK9 hepático",
    "tags": [
      "dislipidemia",
      "sirna"
    ]
  },
  {
    "id": "card-evolocumabe",
    "nome": "Evolocumabe",
    "principioAtivo": "Evolocumabe",
    "classe": "Anti-PCSK9",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "SC",
    "via": "SC",
    "indicacoes": "HF, ASCVD",
    "posologiaAdulto": "140 mg SC cada 2 sem ou 420 mg mensal",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação local",
    "gestacao": "Cat. NA",
    "mecanismo": "Bloqueia PCSK9",
    "tags": [
      "biologico",
      "dislipidemia"
    ]
  },
  {
    "id": "card-alirocumabe",
    "nome": "Alirocumabe",
    "principioAtivo": "Alirocumabe",
    "classe": "Anti-PCSK9",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "SC",
    "via": "SC",
    "indicacoes": "HF, ASCVD",
    "posologiaAdulto": "75-150 mg SC cada 2 sem",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação local",
    "gestacao": "Cat. NA",
    "mecanismo": "PCSK9",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "card-bempedoico",
    "nome": "Ácido Bempedoico",
    "principioAtivo": "Bempedoic acid",
    "classe": "Inibidor ATP-citrato liase",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Hipercolesterolemia",
    "posologiaAdulto": "180 mg/dia VO",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Hiperuricemia, ruptura tendínea",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe síntese colesterol hepático",
    "tags": [
      "dislipidemia"
    ]
  },
  {
    "id": "card-mavakor",
    "nome": "Aficamten",
    "principioAtivo": "Aficamten",
    "classe": "Inibidor miosina",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "CMH obstrutiva",
    "posologiaAdulto": "Variável",
    "contraindicacoes": "FEVE <50%",
    "efeitosAdversos": "Disfunção VE",
    "gestacao": "Cat. NA",
    "mecanismo": "Reduz contratilidade",
    "tags": [
      "cmh"
    ]
  },
  {
    "id": "card-bremelanotide",
    "nome": "Riociguat",
    "principioAtivo": "Riociguat",
    "classe": "Estimulador sGC",
    "categoria": "Pneumo/Cardio",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HAP, HPTEC",
    "posologiaAdulto": "1-2.5 mg VO 8/8h",
    "contraindicacoes": "Gestação, uso com nitratos/PDE5",
    "efeitosAdversos": "Hipotensão, hemorragia",
    "gestacao": "Cat. X",
    "mecanismo": "sGC",
    "tags": [
      "hap"
    ]
  },
  {
    "id": "card-selexipague",
    "nome": "Selexipague",
    "principioAtivo": "Selexipag",
    "classe": "Agonista IP receptor",
    "categoria": "Pneumo/Cardio",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HAP",
    "posologiaAdulto": "200 mcg VO 12/12h escalonar",
    "contraindicacoes": "Doença coronariana grave",
    "efeitosAdversos": "Cefaleia, diarreia, mialgia",
    "gestacao": "Cat. C",
    "mecanismo": "Prostaciclina",
    "tags": [
      "hap"
    ]
  },
  {
    "id": "card-treprostinila",
    "nome": "Treprostinila",
    "principioAtivo": "Treprostinil",
    "classe": "Análogo prostaciclina",
    "categoria": "Pneumo/Cardio",
    "formaFarmaceutica": "SC/IV/Inal",
    "via": "SC/IV/INAL",
    "indicacoes": "HAP",
    "posologiaAdulto": "Variável",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Cefaleia, dor mandibular, hipotensão",
    "gestacao": "Cat. B",
    "mecanismo": "Prostaciclina",
    "tags": [
      "hap"
    ]
  },
  {
    "id": "card-bosentana",
    "nome": "Bosentana",
    "principioAtivo": "Bosentan",
    "classe": "Antagonista receptor endotelina",
    "categoria": "Pneumo/Cardio",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HAP",
    "posologiaAdulto": "62.5-125 mg 12/12h",
    "contraindicacoes": "Hepatopatia, gestação",
    "efeitosAdversos": "Hepatotoxicidade, anemia",
    "gestacao": "Cat. X",
    "mecanismo": "Anti-ET-A/B",
    "tags": [
      "hap"
    ]
  },
  {
    "id": "card-macitentan",
    "nome": "Macitentana",
    "principioAtivo": "Macitentan",
    "classe": "Antagonista ET",
    "categoria": "Pneumo/Cardio",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HAP",
    "posologiaAdulto": "10 mg/dia",
    "contraindicacoes": "Gestação",
    "efeitosAdversos": "Anemia, hepatotoxicidade",
    "gestacao": "Cat. X",
    "mecanismo": "Anti-ET",
    "tags": [
      "hap"
    ]
  },
  {
    "id": "card-ranolazina",
    "nome": "Ranolazina",
    "principioAtivo": "Ranolazina",
    "classe": "Antianginoso (canal Na tardio)",
    "categoria": "Cardiologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Angina crônica",
    "posologiaAdulto": "500-1000 mg 12/12h",
    "contraindicacoes": "QT longo, CYP3A4 fortes",
    "efeitosAdversos": "QT longo, tontura, constipação",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia INa tardio",
    "tags": [
      "antianginoso"
    ]
  },
  {
    "id": "hep-rifaximina",
    "nome": "Rifaximina",
    "principioAtivo": "Rifaximina",
    "classe": "Antibiótico não absorvível",
    "categoria": "Hepato/Gastro",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Encefalopatia hepática, SII-D, diarreia viajante",
    "posologiaAdulto": "550 mg 12/12h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Edema periférico, distúrbios GI",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-RNA-pol bacteriana",
    "tags": [
      "antibiotico",
      "hepatica"
    ]
  },
  {
    "id": "hep-terlipressina",
    "nome": "Terlipressina",
    "principioAtivo": "Terlipressina",
    "classe": "Análogo vasopressina",
    "categoria": "Hepato",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Sd hepatorrenal, HDA varicosa",
    "posologiaAdulto": "0.5-2 mg IV 4/4-6/6h",
    "contraindicacoes": "DAC grave, HAS descontrolada, gestação",
    "efeitosAdversos": "Isquemia, hiponatremia, bradicardia",
    "gestacao": "Cat. NA",
    "mecanismo": "V1 vasoconstritor esplâncnico",
    "tags": [
      "cirrose",
      "uti"
    ]
  },
  {
    "id": "hep-ácido-ursodesoxicólico",
    "nome": "Ácido Ursodesoxicólico",
    "principioAtivo": "Ácido ursodesoxicólico",
    "classe": "Hidrofílico hepatoprotetor",
    "categoria": "Hepato",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "CBP, colelitíase, colestase gestacional",
    "posologiaAdulto": "13-15 mg/kg/dia",
    "contraindicacoes": "Cálculo radiopaco, obstrução biliar",
    "efeitosAdversos": "Diarreia",
    "gestacao": "Cat. B",
    "mecanismo": "Substitui ácidos biliares hidrofóbicos",
    "tags": [
      "hepato"
    ]
  },
  {
    "id": "hep-obeticólico",
    "nome": "Ácido Obeticólico",
    "principioAtivo": "Obeticholic acid",
    "classe": "Agonista FXR",
    "categoria": "Hepato",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "CBP",
    "posologiaAdulto": "5-10 mg/dia",
    "contraindicacoes": "Cirrose descompensada",
    "efeitosAdversos": "Prurido, dislipidemia",
    "gestacao": "Cat. NA",
    "mecanismo": "FXR agonista",
    "tags": [
      "cbp"
    ]
  },
  {
    "id": "hep-lactulose",
    "nome": "Lactulose",
    "principioAtivo": "Lactulose",
    "classe": "Dissacarídeo não absorvível",
    "categoria": "Hepato/Gastro",
    "formaFarmaceutica": "Solução oral",
    "via": "VO/retal",
    "indicacoes": "Encefalopatia hepática, constipação",
    "posologiaAdulto": "30-45 mL 8/8h titular para 2-3 evacuações/dia",
    "contraindicacoes": "Galactosemia",
    "efeitosAdversos": "Diarreia, distensão, hiponatremia",
    "gestacao": "Cat. B",
    "mecanismo": "Acidifica cólon, reduz NH3",
    "tags": [
      "hepatica"
    ]
  },
  {
    "id": "hep-sofosbuvir",
    "nome": "Sofosbuvir",
    "principioAtivo": "Sofosbuvir",
    "classe": "Antiviral DAA HCV",
    "categoria": "Hepato/Inf",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HCV",
    "posologiaAdulto": "400 mg/dia (com associação)",
    "contraindicacoes": "Amiodarona",
    "efeitosAdversos": "Bradicardia (com amiodarona), fadiga",
    "gestacao": "Cat. B",
    "mecanismo": "NS5B inibidor",
    "tags": [
      "daa-hcv"
    ]
  },
  {
    "id": "hep-velpatasvir",
    "nome": "Velpatasvir/Sofosbuvir",
    "principioAtivo": "Velpatasvir/Sofosbuvir",
    "classe": "DAA pangenotípico",
    "categoria": "Hepato",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HCV todos genótipos",
    "posologiaAdulto": "100/400 mg/dia x 12 sem",
    "contraindicacoes": "Amiodarona, indutores P-gp",
    "efeitosAdversos": "Cefaleia, fadiga",
    "gestacao": "Cat. B",
    "mecanismo": "NS5A+NS5B",
    "tags": [
      "daa-hcv"
    ]
  },
  {
    "id": "hep-glecaprevir",
    "nome": "Glecaprevir/Pibrentasvir",
    "principioAtivo": "Glecaprevir/Pibrentasvir",
    "classe": "DAA pangenotípico",
    "categoria": "Hepato",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HCV",
    "posologiaAdulto": "300/120 mg/dia x 8 sem",
    "contraindicacoes": "Atazanavir, anticoncepcionais",
    "efeitosAdversos": "Cefaleia, fadiga",
    "gestacao": "Cat. B",
    "mecanismo": "NS3/4A + NS5A",
    "tags": [
      "daa-hcv"
    ]
  },
  {
    "id": "hep-tenofovir-tdf",
    "nome": "Tenofovir Disoproxila",
    "principioAtivo": "Tenofovir",
    "classe": "NRTI",
    "categoria": "Hepato/Inf",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HBV crônica, HIV",
    "posologiaAdulto": "300 mg/dia",
    "contraindicacoes": "ClCr <50",
    "efeitosAdversos": "Nefrotoxicidade, osteopenia",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-RT",
    "tags": [
      "antiviral-hbv"
    ]
  },
  {
    "id": "hep-entecavir",
    "nome": "Entecavir",
    "principioAtivo": "Entecavir",
    "classe": "Análogo nucleosídeo",
    "categoria": "Hepato",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HBV crônica",
    "posologiaAdulto": "0.5-1 mg/dia jejum",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Acidose láctica, exacerbação após retirada",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe RT-HBV",
    "tags": [
      "antiviral-hbv"
    ]
  },
  {
    "id": "anes-sevoflurano",
    "nome": "Sevoflurano",
    "principioAtivo": "Sevoflurano",
    "classe": "Anestésico inalatório halogenado",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Líquido para vapor",
    "via": "Inalatório",
    "indicacoes": "Anestesia geral indução/manutenção",
    "posologiaAdulto": "CAM 2% (variável)",
    "contraindicacoes": "Hipertermia maligna, alergia",
    "efeitosAdversos": "Hipertermia maligna, depressão CV",
    "gestacao": "Cat. B",
    "mecanismo": "Potencializa GABA",
    "tags": [
      "anestesia"
    ]
  },
  {
    "id": "anes-desflurano",
    "nome": "Desflurano",
    "principioAtivo": "Desflurano",
    "classe": "Anestésico inalatório",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Líquido para vapor",
    "via": "Inalatório",
    "indicacoes": "Anestesia geral",
    "posologiaAdulto": "CAM 6%",
    "contraindicacoes": "Hipertermia maligna",
    "efeitosAdversos": "Tosse, taquicardia",
    "gestacao": "Cat. B",
    "mecanismo": "GABA",
    "tags": [
      "anestesia"
    ]
  },
  {
    "id": "anes-remifentanil",
    "nome": "Remifentanil",
    "principioAtivo": "Remifentanil",
    "classe": "Opioide ultracurto",
    "categoria": "Anestesia/UTI",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Anestesia, sedação UTI",
    "posologiaAdulto": "0.05-2 mcg/kg/min IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Bradicardia, depressão respiratória",
    "gestacao": "Cat. C",
    "mecanismo": "μ-agonista",
    "tags": [
      "opioide",
      "anestesia"
    ]
  },
  {
    "id": "anes-sufentanil",
    "nome": "Sufentanil",
    "principioAtivo": "Sufentanil",
    "classe": "Opioide potente",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Ampola",
    "via": "IV/peridural",
    "indicacoes": "Anestesia, analgesia obstétrica",
    "posologiaAdulto": "0.1-1 mcg/kg IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Depressão respiratória, bradicardia",
    "gestacao": "Cat. C",
    "mecanismo": "μ-opioide",
    "tags": [
      "opioide"
    ]
  },
  {
    "id": "anes-alfentanil",
    "nome": "Alfentanila",
    "principioAtivo": "Alfentanil",
    "classe": "Opioide curto",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Ampola",
    "via": "IV",
    "indicacoes": "Anestesia ambulatorial",
    "posologiaAdulto": "10-50 mcg/kg IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Depressão respiratória",
    "gestacao": "Cat. C",
    "mecanismo": "μ-opioide",
    "tags": [
      "opioide"
    ]
  },
  {
    "id": "anes-rocuronio",
    "nome": "Rocurônio",
    "principioAtivo": "Rocurônio",
    "classe": "Bloqueador neuromuscular não despolarizante",
    "categoria": "Anestesia/UTI",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Intubação, paralisia cirúrgica",
    "posologiaAdulto": "0.6-1.2 mg/kg IV",
    "contraindicacoes": "Hipersensibilidade grave",
    "efeitosAdversos": "Anafilaxia, prolongamento se hepatopatia",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-acetilcolina nicotínico",
    "tags": [
      "bnm"
    ]
  },
  {
    "id": "anes-vecuronio",
    "nome": "Vecurônio",
    "principioAtivo": "Vecurônio",
    "classe": "BNM não despolarizante",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Paralisia",
    "posologiaAdulto": "0.08-0.1 mg/kg IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Prolongamento renal/hepático",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-AchR",
    "tags": [
      "bnm"
    ]
  },
  {
    "id": "anes-cisatracurio",
    "nome": "Cisatracúrio",
    "principioAtivo": "Cisatracúrio",
    "classe": "BNM não despolarizante",
    "categoria": "Anestesia/UTI",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Paralisia (SDRA)",
    "posologiaAdulto": "0.1-0.2 mg/kg IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Histaminérgico mínimo",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-AchR Hofmann",
    "tags": [
      "bnm",
      "uti"
    ]
  },
  {
    "id": "anes-sugamadex",
    "nome": "Sugamadex",
    "principioAtivo": "Sugamadex",
    "classe": "Reversor seletivo BNM aminoesteroide",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Reversão rocurônio/vecurônio",
    "posologiaAdulto": "2-16 mg/kg IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Bradicardia, anafilaxia",
    "gestacao": "Cat. NA",
    "mecanismo": "Encapsula rocurônio",
    "tags": [
      "reversor"
    ]
  },
  {
    "id": "anes-neostigmina",
    "nome": "Neostigmina",
    "principioAtivo": "Neostigmina",
    "classe": "Inibidor colinesterase",
    "categoria": "Anestesia",
    "formaFarmaceutica": "Ampola",
    "via": "IV/IM",
    "indicacoes": "Reversão BNM, miastenia, íleo, retenção urinária",
    "posologiaAdulto": "0.04-0.07 mg/kg IV (com atropina)",
    "contraindicacoes": "Obstrução intestinal/urinária",
    "efeitosAdversos": "Bradicardia, broncoespasmo, salivação",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe AChE",
    "tags": [
      "reversor",
      "miastenia"
    ]
  },
  {
    "id": "ped-paliviz",
    "nome": "Palivizumabe",
    "principioAtivo": "Palivizumab",
    "classe": "Anti-VRS monoclonal",
    "categoria": "Pediatria",
    "formaFarmaceutica": "IM",
    "via": "IM",
    "indicacoes": "Profilaxia VRS em prematuros/BPC",
    "posologiaAdulto": "15 mg/kg IM mensal x 5 doses (estação)",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação local",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-VRS",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "ped-nirsevimabe",
    "nome": "Nirsevimabe",
    "principioAtivo": "Nirsevimab",
    "classe": "Anti-VRS longa duração",
    "categoria": "Pediatria",
    "formaFarmaceutica": "IM",
    "via": "IM",
    "indicacoes": "Profilaxia VRS lactentes",
    "posologiaAdulto": "50-100 mg IM dose única",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Reação local",
    "gestacao": "Cat. NA",
    "mecanismo": "Anti-VRS",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "ped-vit-k",
    "nome": "Vitamina K1 (Fitomenadiona)",
    "principioAtivo": "Fitomenadiona",
    "classe": "Vitamina",
    "categoria": "Pediatria/Hemato",
    "formaFarmaceutica": "Ampola",
    "via": "IM/IV/SC",
    "indicacoes": "Profilaxia DHRN, reversão warfarina",
    "posologiaAdulto": "RN: 1 mg IM (ou 0.5 mg <1.5 kg) | Adulto reversão: 5-10 mg IV",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Anafilaxia (IV rápido)",
    "gestacao": "Cat. C",
    "mecanismo": "Síntese fatores 2,7,9,10",
    "tags": [
      "neonato",
      "reversor"
    ]
  },
  {
    "id": "ped-cafeina",
    "nome": "Cafeína citrato",
    "principioAtivo": "Cafeína",
    "classe": "Metilxantina",
    "categoria": "Neonatal",
    "formaFarmaceutica": "Solução IV/VO",
    "via": "IV/VO",
    "indicacoes": "Apneia da prematuridade",
    "posologiaAdulto": "Ataque 20 mg/kg, manutenção 5-10 mg/kg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Taquicardia, intolerância alimentar",
    "gestacao": "Cat. C",
    "mecanismo": "Estimula centro respiratório",
    "tags": [
      "neonatal",
      "apneia"
    ]
  },
  {
    "id": "ped-surfactante",
    "nome": "Surfactante (poractante alfa)",
    "principioAtivo": "Poractante alfa",
    "classe": "Surfactante exógeno",
    "categoria": "Neonatal",
    "formaFarmaceutica": "Suspensão IT",
    "via": "Intratraqueal",
    "indicacoes": "DMH (SDR neonatal)",
    "posologiaAdulto": "100-200 mg/kg IT",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Bradicardia, hipotensão durante administração",
    "gestacao": "Cat. NA",
    "mecanismo": "Reduz tensão alveolar",
    "tags": [
      "neonatal",
      "sdr"
    ]
  },
  {
    "id": "ped-eritropoietina",
    "nome": "Eritropoietina",
    "principioAtivo": "Eritropoietina alfa",
    "classe": "Estimulante eritropoese",
    "categoria": "Hemato/Pediatria",
    "formaFarmaceutica": "Solução SC/IV",
    "via": "SC/IV",
    "indicacoes": "Anemia DRC, prematuro, oncologia",
    "posologiaAdulto": "50-300 UI/kg 3x/sem",
    "contraindicacoes": "HAS descontrolada",
    "efeitosAdversos": "HAS, trombose, convulsão",
    "gestacao": "Cat. C",
    "mecanismo": "EPO recombinante",
    "tags": [
      "ep"
    ]
  },
  {
    "id": "ped-darbepoetina",
    "nome": "Darbepoetina alfa",
    "principioAtivo": "Darbepoetin",
    "classe": "ESA longa duração",
    "categoria": "Hemato",
    "formaFarmaceutica": "SC/IV",
    "via": "SC/IV",
    "indicacoes": "Anemia DRC",
    "posologiaAdulto": "0.45 mcg/kg semanal",
    "contraindicacoes": "HAS descontrolada",
    "efeitosAdversos": "HAS, trombose",
    "gestacao": "Cat. C",
    "mecanismo": "ESA",
    "tags": [
      "esa"
    ]
  },
  {
    "id": "ped-deferasirox",
    "nome": "Deferasirox",
    "principioAtivo": "Deferasirox",
    "classe": "Quelante ferro oral",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Comprimido dispersível",
    "via": "VO",
    "indicacoes": "Sobrecarga ferro transfusional, talassemia",
    "posologiaAdulto": "20-40 mg/kg/dia",
    "contraindicacoes": "IRC <40, hepatopatia grave",
    "efeitosAdversos": "Nefrotoxicidade, hepatotoxicidade, sangramento GI",
    "gestacao": "Cat. C",
    "mecanismo": "Quela Fe³⁺",
    "tags": [
      "quelante"
    ]
  },
  {
    "id": "ped-deferoxamina",
    "nome": "Deferoxamina",
    "principioAtivo": "Deferoxamine",
    "classe": "Quelante ferro parenteral",
    "categoria": "Hematologia/Toxico",
    "formaFarmaceutica": "SC/IV",
    "via": "SC/IV",
    "indicacoes": "Sobrecarga ferro, intoxicação aguda",
    "posologiaAdulto": "20-60 mg/kg/dia SC noturno",
    "contraindicacoes": "IRA",
    "efeitosAdversos": "Reação local, ARDS, ototoxicidade",
    "gestacao": "Cat. C",
    "mecanismo": "Quela Fe",
    "tags": [
      "quelante"
    ]
  },
  {
    "id": "ped-glicogen",
    "nome": "Glucagon",
    "principioAtivo": "Glucagon",
    "classe": "Hormônio hiperglicemiante",
    "categoria": "Endo/Toxico",
    "formaFarmaceutica": "Ampola IM/SC/IV",
    "via": "IM/SC/IV",
    "indicacoes": "Hipoglicemia grave, intoxicação β-bloqueador/BCC",
    "posologiaAdulto": "1 mg IM/SC/IV (adulto), 0.5 mg <25 kg",
    "contraindicacoes": "Feocromocitoma, insulinoma",
    "efeitosAdversos": "Náusea, vômito",
    "gestacao": "Cat. B",
    "mecanismo": "Glicogenólise hepática",
    "tags": [
      "emergencia",
      "antidoto"
    ]
  },
  {
    "id": "oft-ranibizumabe",
    "nome": "Ranibizumabe",
    "principioAtivo": "Ranibizumab",
    "classe": "Anti-VEGF intravítreo",
    "categoria": "Oftalmologia",
    "formaFarmaceutica": "Solução intravítrea",
    "via": "IV intravítreo",
    "indicacoes": "DMRI úmida, ERD, OVR",
    "posologiaAdulto": "0.5 mg intravítreo mensal",
    "contraindicacoes": "Endoftalmite ativa",
    "efeitosAdversos": "Endoftalmite, descolamento retina",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-VEGF",
    "tags": [
      "oftalmo"
    ]
  },
  {
    "id": "oft-aflibercept",
    "nome": "Aflibercept",
    "principioAtivo": "Aflibercept",
    "classe": "Anti-VEGF intravítreo",
    "categoria": "Oftalmologia",
    "formaFarmaceutica": "Solução intravítrea",
    "via": "IV intravítreo",
    "indicacoes": "DMRI, ERD",
    "posologiaAdulto": "2 mg intravítreo mensal/2-3 meses",
    "contraindicacoes": "Endoftalmite",
    "efeitosAdversos": "Endoftalmite, hipertensão ocular",
    "gestacao": "Cat. C",
    "mecanismo": "VEGF-trap",
    "tags": [
      "oftalmo"
    ]
  },
  {
    "id": "oft-brolucizumabe",
    "nome": "Brolucizumabe",
    "principioAtivo": "Brolucizumab",
    "classe": "Anti-VEGF intravítreo",
    "categoria": "Oftalmologia",
    "formaFarmaceutica": "Intravítreo",
    "via": "IV intravítreo",
    "indicacoes": "DMRI úmida",
    "posologiaAdulto": "6 mg intravítreo cada 8-12 sem",
    "contraindicacoes": "Endoftalmite, vasculite ocular",
    "efeitosAdversos": "Vasculite retiniana, endoftalmite",
    "gestacao": "Cat. NA",
    "mecanismo": "Anti-VEGF",
    "tags": [
      "oftalmo"
    ]
  },
  {
    "id": "oft-faricimab",
    "nome": "Faricimabe",
    "principioAtivo": "Faricimab",
    "classe": "Bispecífico anti-VEGF/Ang-2",
    "categoria": "Oftalmologia",
    "formaFarmaceutica": "Intravítreo",
    "via": "IV intravítreo",
    "indicacoes": "DMRI, ERD",
    "posologiaAdulto": "6 mg cada 8-16 sem",
    "contraindicacoes": "Endoftalmite",
    "efeitosAdversos": "Endoftalmite, hipertensão ocular",
    "gestacao": "Cat. NA",
    "mecanismo": "VEGF+Ang2",
    "tags": [
      "oftalmo"
    ]
  },
  {
    "id": "oft-dorzolamida",
    "nome": "Dorzolamida",
    "principioAtivo": "Dorzolamida",
    "classe": "Inibidor anidrase carbônica tópico",
    "categoria": "Oftalmologia",
    "formaFarmaceutica": "Colírio",
    "via": "Tópico",
    "indicacoes": "Glaucoma",
    "posologiaAdulto": "1 gota 8/8h",
    "contraindicacoes": "Alergia sulfa",
    "efeitosAdversos": "Sabor amargo, ardência",
    "gestacao": "Cat. C",
    "mecanismo": "IAC",
    "tags": [
      "glaucoma"
    ]
  },
  {
    "id": "der-isotretinoina",
    "nome": "Isotretinoína",
    "principioAtivo": "Isotretinoína",
    "classe": "Retinoide oral",
    "categoria": "Dermatologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Acne grave nodulocística",
    "posologiaAdulto": "0.5-1 mg/kg/dia VO (cum 120-150 mg/kg)",
    "contraindicacoes": "Gestação (Cat X), hepatopatia, hiperlipidemia grave",
    "efeitosAdversos": "Teratogenicidade, dislipidemia, hepatotoxicidade, depressão",
    "gestacao": "Cat. X",
    "mecanismo": "Modula diferenciação queratinócitos",
    "tags": [
      "retinoide",
      "teratogenico"
    ]
  },
  {
    "id": "der-acitretina",
    "nome": "Acitretina",
    "principioAtivo": "Acitretina",
    "classe": "Retinoide oral",
    "categoria": "Dermatologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Psoríase grave",
    "posologiaAdulto": "25-50 mg/dia VO",
    "contraindicacoes": "Gestação (3 anos), hepatopatia",
    "efeitosAdversos": "Teratogenicidade, queilite, hepatotoxicidade",
    "gestacao": "Cat. X",
    "mecanismo": "Retinoide",
    "tags": [
      "retinoide",
      "teratogenico"
    ]
  },
  {
    "id": "der-dapsona",
    "nome": "Dapsona",
    "principioAtivo": "Dapsona",
    "classe": "Sulfona",
    "categoria": "Dermato/Inf",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Hanseníase, dermatite herpetiforme, PCP profilaxia",
    "posologiaAdulto": "100 mg/dia",
    "contraindicacoes": "G6PD deficiente, anemia",
    "efeitosAdversos": "Hemólise (G6PD), metahemoglobinemia, sd hipersensibilidade",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe diidropteroato sintase",
    "tags": [
      "sulfona",
      "g6pd"
    ]
  },
  {
    "id": "der-clofazimina",
    "nome": "Clofazimina",
    "principioAtivo": "Clofazimina",
    "classe": "Antimicobacteriano/MAC",
    "categoria": "Inf/Dermato",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Hanseníase, MAC",
    "posologiaAdulto": "50-100 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Pigmentação cutânea, dor abdominal",
    "gestacao": "Cat. C",
    "mecanismo": "Liga DNA micobactéria",
    "tags": [
      "hanseniase"
    ]
  },
  {
    "id": "der-talidomida",
    "nome": "Talidomida",
    "principioAtivo": "Talidomida",
    "classe": "Imunomodulador",
    "categoria": "Hemato/Dermato",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Mieloma múltiplo, hanseníase ENL",
    "posologiaAdulto": "100-400 mg VO noite",
    "contraindicacoes": "Gestação (Cat X)",
    "efeitosAdversos": "Teratogenicidade gravíssima, neuropatia, TEV, sonolência",
    "gestacao": "Cat. X",
    "mecanismo": "Anti-TNF, antiangiogênico",
    "tags": [
      "teratogenico",
      "controlado"
    ]
  },
  {
    "id": "uro-tamsulosina",
    "nome": "Tansulosina",
    "principioAtivo": "Tamsulosina",
    "classe": "α1-bloqueador uroseletivo",
    "categoria": "Urologia",
    "formaFarmaceutica": "Cápsula LP",
    "via": "VO",
    "indicacoes": "HPB, expulsão de cálculo ureteral",
    "posologiaAdulto": "0.4 mg/dia VO",
    "contraindicacoes": "Hipotensão postural",
    "efeitosAdversos": "Hipotensão, ejaculação retrógrada, sd flácida íris",
    "gestacao": "Cat. B",
    "mecanismo": "α1A",
    "tags": [
      "hpb"
    ]
  },
  {
    "id": "uro-finasterida",
    "nome": "Finasterida",
    "principioAtivo": "Finasterida",
    "classe": "Inibidor 5α-redutase",
    "categoria": "Urologia/Dermato",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "HPB, alopécia androgenética",
    "posologiaAdulto": "5 mg/dia (HPB) ou 1 mg (alopécia)",
    "contraindicacoes": "Gestação, mulheres em idade fértil",
    "efeitosAdversos": "Disfunção sexual, ginecomastia",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe 5α-redutase tipo 2",
    "tags": [
      "hpb",
      "alopecia"
    ]
  },
  {
    "id": "uro-dutasterida",
    "nome": "Dutasterida",
    "principioAtivo": "Dutasterida",
    "classe": "Inibidor 5α-redutase",
    "categoria": "Urologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "HPB",
    "posologiaAdulto": "0.5 mg/dia VO",
    "contraindicacoes": "Mulher fértil",
    "efeitosAdversos": "Disfunção sexual",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe 5α-red 1 e 2",
    "tags": [
      "hpb"
    ]
  },
  {
    "id": "uro-tadalafila",
    "nome": "Tadalafila",
    "principioAtivo": "Tadalafila",
    "classe": "Inibidor PDE5",
    "categoria": "Urologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "DE, HPB, HAP",
    "posologiaAdulto": "5-20 mg/dia (DE), 5 mg/dia HPB",
    "contraindicacoes": "Uso com nitratos",
    "efeitosAdversos": "Cefaleia, mialgia, priapismo (raro)",
    "gestacao": "Cat. B",
    "mecanismo": "PDE5",
    "tags": [
      "de",
      "hap"
    ]
  },
  {
    "id": "uro-sildenafila",
    "nome": "Sildenafila",
    "principioAtivo": "Sildenafila",
    "classe": "Inibidor PDE5",
    "categoria": "Urologia/Pneumo",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "DE, HAP",
    "posologiaAdulto": "50 mg DE / 20 mg 8/8h HAP",
    "contraindicacoes": "Uso com nitratos",
    "efeitosAdversos": "Cefaleia, NAION",
    "gestacao": "Cat. B",
    "mecanismo": "PDE5",
    "tags": [
      "de",
      "hap"
    ]
  },
  {
    "id": "gin-mifepristone",
    "nome": "Mifepristona",
    "principioAtivo": "Mifepristona",
    "classe": "Antagonista progesterona",
    "categoria": "Ginecologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Interrupção legal de gestação, Cushing",
    "posologiaAdulto": "200 mg VO + misoprostol",
    "contraindicacoes": "Gestação ectópica, IRC/hep grave",
    "efeitosAdversos": "Sangramento, infecção",
    "gestacao": "Cat. X",
    "mecanismo": "Anti-progesterona",
    "tags": [
      "gineco",
      "controle-juridico"
    ]
  },
  {
    "id": "gin-misoprostol",
    "nome": "Misoprostol",
    "principioAtivo": "Misoprostol",
    "classe": "Análogo PGE1",
    "categoria": "Ginecologia/Gastro",
    "formaFarmaceutica": "Comprimido VO/vaginal",
    "via": "VO/vaginal/sublingual",
    "indicacoes": "Indução parto, aborto, HPP, úlcera",
    "posologiaAdulto": "Variável (200-800 mcg)",
    "contraindicacoes": "Gestação desejada (uso obstétrico restrito), DAC grave",
    "efeitosAdversos": "Diarreia, hipertonia uterina",
    "gestacao": "Cat. X (gestação)",
    "mecanismo": "PGE1",
    "tags": [
      "gineco",
      "obstetrica",
      "controlado"
    ]
  },
  {
    "id": "gin-ulipristal",
    "nome": "Acetato de Ulipristal",
    "principioAtivo": "Ulipristal",
    "classe": "Modulador receptor progesterona",
    "categoria": "Ginecologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Contracepção emergência (até 120h)",
    "posologiaAdulto": "30 mg VO dose única",
    "contraindicacoes": "Gestação confirmada",
    "efeitosAdversos": "Cefaleia, náusea, dor abdominal",
    "gestacao": "Cat. X",
    "mecanismo": "Anti-progesterona",
    "tags": [
      "gineco"
    ]
  },
  {
    "id": "gin-letrozol",
    "nome": "Letrozol",
    "principioAtivo": "Letrozol",
    "classe": "Inibidor aromatase",
    "categoria": "Onco/Gineco",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Câncer mama RH+, indução ovulação",
    "posologiaAdulto": "2.5 mg/dia (mama) ou 2.5-7.5 mg dias 3-7 (indução)",
    "contraindicacoes": "Pré-menopausa (mama)",
    "efeitosAdversos": "Osteoporose, fogachos, artralgia",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe aromatase",
    "tags": [
      "oncologia",
      "reproducao"
    ]
  },
  {
    "id": "gin-anastrozol",
    "nome": "Anastrozol",
    "principioAtivo": "Anastrozol",
    "classe": "Inibidor aromatase",
    "categoria": "Onco",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Câncer mama RH+ pós-menopausa",
    "posologiaAdulto": "1 mg/dia VO",
    "contraindicacoes": "Pré-menopausa, gestação",
    "efeitosAdversos": "Osteoporose, fogachos",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe aromatase",
    "tags": [
      "oncologia"
    ]
  },
  {
    "id": "reu-leflunomida",
    "nome": "Leflunomida",
    "principioAtivo": "Leflunomida",
    "classe": "Imunossupressor (DMARD)",
    "categoria": "Reumatologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "AR, APs",
    "posologiaAdulto": "20 mg/dia VO",
    "contraindicacoes": "Hepatopatia, gestação",
    "efeitosAdversos": "Hepatotoxicidade, diarreia, alopécia",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe diidroorotato DH",
    "tags": [
      "dmard"
    ]
  },
  {
    "id": "reu-sulfassalazina",
    "nome": "Sulfassalazina",
    "principioAtivo": "Sulfassalazina",
    "classe": "DMARD/anti-inflamatório",
    "categoria": "Reumato/Gastro",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "AR, EA, RCU",
    "posologiaAdulto": "2-3 g/dia",
    "contraindicacoes": "Alergia sulfa, porfiria",
    "efeitosAdversos": "Náuseas, hepatotoxicidade, agranulocitose",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-inflamatório intestinal",
    "tags": [
      "dmard"
    ]
  },
  {
    "id": "reu-hidroxicloroquina",
    "nome": "Hidroxicloroquina",
    "principioAtivo": "Hidroxicloroquina",
    "classe": "Antimalárico/DMARD",
    "categoria": "Reumato",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Lúpus, AR, Sjögren",
    "posologiaAdulto": "200-400 mg/dia",
    "contraindicacoes": "Maculopatia, retinopatia",
    "efeitosAdversos": "Retinopatia, cardiomiopatia, distúrbios condução",
    "gestacao": "Cat. C",
    "mecanismo": "Antiinflamatório lisossomal",
    "tags": [
      "lupus",
      "maculopatia"
    ]
  },
  {
    "id": "reu-cloroquina",
    "nome": "Cloroquina",
    "principioAtivo": "Cloroquina",
    "classe": "Antimalárico",
    "categoria": "Reumato/Inf",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Malária, lúpus, AR",
    "posologiaAdulto": "Variável",
    "contraindicacoes": "Retinopatia, distúrbio condução",
    "efeitosAdversos": "Maculopatia, QT longo",
    "gestacao": "Cat. C",
    "mecanismo": "Antimalárico",
    "tags": [
      "lupus"
    ]
  },
  {
    "id": "reu-azatioprina",
    "nome": "Azatioprina",
    "principioAtivo": "Azatioprina",
    "classe": "Imunossupressor",
    "categoria": "Reumato/Transplante",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "AR, lúpus, transplante, DII",
    "posologiaAdulto": "1-3 mg/kg/dia",
    "contraindicacoes": "TPMT muito baixa, gestação relativa",
    "efeitosAdversos": "Mielossupressão, hepatotoxicidade, neoplasias",
    "gestacao": "Cat. D",
    "mecanismo": "Antimetabólito (6-MP)",
    "tags": [
      "imunossupressor"
    ]
  },
  {
    "id": "reu-ciclosporina",
    "nome": "Ciclosporina",
    "principioAtivo": "Ciclosporina",
    "classe": "Inibidor calcineurina",
    "categoria": "Reumato/Transplante",
    "formaFarmaceutica": "Cápsula / IV",
    "via": "VO/IV",
    "indicacoes": "Transplante, psoríase, AR, sd nefrótica",
    "posologiaAdulto": "2-5 mg/kg/dia VO 12/12h",
    "contraindicacoes": "HAS descontrolada, IRC grave",
    "efeitosAdversos": "Nefrotoxicidade, HAS, hirsutismo, hiperplasia gengival",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe calcineurina",
    "tags": [
      "imunossupressor"
    ]
  },
  {
    "id": "reu-tacrolimo",
    "nome": "Tacrolimo",
    "principioAtivo": "Tacrolimo",
    "classe": "Inibidor calcineurina",
    "categoria": "Transplante/Dermato",
    "formaFarmaceutica": "Cápsula / IV / pomada",
    "via": "VO/IV/tópico",
    "indicacoes": "Transplante, dermatite atópica",
    "posologiaAdulto": "Variável (alvos séricos)",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Nefrotoxicidade, neurotoxicidade, DM, infecções",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe calcineurina",
    "tags": [
      "imunossupressor",
      "transplante"
    ]
  },
  {
    "id": "reu-micofenolato",
    "nome": "Micofenolato Mofetil",
    "principioAtivo": "Micofenolato",
    "classe": "Imunossupressor",
    "categoria": "Reumato/Transplante",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Transplante, lúpus, vasculite",
    "posologiaAdulto": "1-3 g/dia VO",
    "contraindicacoes": "Gestação",
    "efeitosAdversos": "Diarreia, mielossupressão, infecções",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe IMPDH",
    "tags": [
      "imunossupressor"
    ]
  },
  {
    "id": "reu-anakinra",
    "nome": "Anakinra",
    "principioAtivo": "Anakinra",
    "classe": "Antagonista receptor IL-1",
    "categoria": "Reumato",
    "formaFarmaceutica": "SC",
    "via": "SC",
    "indicacoes": "AR, AIJ sistêmica, doenças autoinflamatórias",
    "posologiaAdulto": "100 mg SC/dia",
    "contraindicacoes": "Infecção ativa, neutropenia <1500",
    "efeitosAdversos": "Reação local, infecções",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-IL-1R",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "reu-rilonacepte",
    "nome": "Rilonacepte",
    "principioAtivo": "Rilonacept",
    "classe": "Trap IL-1",
    "categoria": "Reumato",
    "formaFarmaceutica": "SC",
    "via": "SC",
    "indicacoes": "CAPS, pericardite recorrente",
    "posologiaAdulto": "320 mg ataque, 160 mg/sem",
    "contraindicacoes": "Infecção ativa",
    "efeitosAdversos": "Reação local, infecção, dislipidemia",
    "gestacao": "Cat. C",
    "mecanismo": "IL-1 trap",
    "tags": [
      "biologico"
    ]
  }
];
