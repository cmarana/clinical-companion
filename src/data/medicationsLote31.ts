import type { MedicationImportItem } from "./medicationsData";

/**
 * Lote 31 — 100 medicamentos especializados
 * Foco: Oncologia clássica, imunoterapia/checkpoint, hematologia rara,
 * endocrinologia (incretínicos/iSGLT2), antimicrobianos MDR, neurologia/psiquiatria avançada.
 */
export const medicationsLote31: MedicationImportItem[] = [
  {
    "id": "onc-cisplatina",
    "nome": "Cisplatina",
    "principioAtivo": "Cisplatina",
    "classe": "Quimioterápico (platina)",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco-ampola IV",
    "via": "IV",
    "indicacoes": "Tumores sólidos (pulmão, ovário, testículo, bexiga, cabeça e pescoço)",
    "posologiaAdulto": "50–100 mg/m² IV cada 3-4 sem (hidratar antes/após)",
    "contraindicacoes": "Hipersensibilidade, IRC grave, mielossupressão grave, gestação",
    "efeitosAdversos": "Nefrotoxicidade, ototoxicidade, neuropatia, náuseas intensas, mielossupressão",
    "gestacao": "Cat. D",
    "mecanismo": "Liga DNA formando adutos cross-link",
    "tags": [
      "quimio",
      "nefrotoxico"
    ]
  },
  {
    "id": "onc-carboplatina",
    "nome": "Carboplatina",
    "principioAtivo": "Carboplatina",
    "classe": "Quimioterápico (platina)",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco-ampola IV",
    "via": "IV",
    "indicacoes": "Ovário, pulmão, cabeça-pescoço (Calvert AUC)",
    "posologiaAdulto": "Dose por AUC (fórmula Calvert)",
    "contraindicacoes": "Hipersensibilidade, mielossupressão grave",
    "efeitosAdversos": "Mielossupressão (trombocitopenia), náuseas, nefrotoxicidade < cisplatina",
    "gestacao": "Cat. D",
    "mecanismo": "Cross-link DNA",
    "tags": [
      "quimio"
    ]
  },
  {
    "id": "onc-oxaliplatina",
    "nome": "Oxaliplatina",
    "principioAtivo": "Oxaliplatina",
    "classe": "Quimioterápico (platina)",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco-ampola IV",
    "via": "IV",
    "indicacoes": "CCR (FOLFOX), gástrico",
    "posologiaAdulto": "85 mg/m² IV cada 2 sem",
    "contraindicacoes": "Hipersensibilidade, neuropatia grave",
    "efeitosAdversos": "Neuropatia sensitiva (frio), náuseas, mielossupressão",
    "gestacao": "Cat. D",
    "mecanismo": "Cross-link DNA",
    "tags": [
      "quimio",
      "neuropatia"
    ]
  },
  {
    "id": "onc-paclitaxel",
    "nome": "Paclitaxel",
    "principioAtivo": "Paclitaxel",
    "classe": "Taxano",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Mama, ovário, pulmão",
    "posologiaAdulto": "175 mg/m² IV em 3h cada 3 sem (pré-medicar)",
    "contraindicacoes": "Hipersensibilidade ao Cremophor, neutropenia <1500",
    "efeitosAdversos": "Neuropatia, hipersensibilidade, mielossupressão, alopécia",
    "gestacao": "Cat. D",
    "mecanismo": "Estabiliza microtúbulos",
    "tags": [
      "quimio",
      "taxano"
    ]
  },
  {
    "id": "onc-docetaxel",
    "nome": "Docetaxel",
    "principioAtivo": "Docetaxel",
    "classe": "Taxano",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Mama, próstata, pulmão, gástrico",
    "posologiaAdulto": "75-100 mg/m² IV cada 3 sem",
    "contraindicacoes": "Hipersensibilidade, neutropenia <1500, hepatopatia grave",
    "efeitosAdversos": "Neutropenia, edema, neuropatia, alopécia, alterações ungueais",
    "gestacao": "Cat. D",
    "mecanismo": "Estabiliza microtúbulos",
    "tags": [
      "quimio",
      "taxano"
    ]
  },
  {
    "id": "onc-doxorrubicina",
    "nome": "Doxorrubicina",
    "principioAtivo": "Doxorrubicina",
    "classe": "Antraciclina",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Mama, sarcoma, linfomas, leucemias",
    "posologiaAdulto": "60-75 mg/m² IV cada 3 sem (dose cumulativa máx 450-550 mg/m²)",
    "contraindicacoes": "ICC, FE <50%, dose cumulativa atingida",
    "efeitosAdversos": "Cardiotoxicidade, mielossupressão, mucosite, alopécia, urina vermelha",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe topoisomerase II, gera radicais livres",
    "tags": [
      "quimio",
      "cardiotoxico",
      "vesicante"
    ]
  },
  {
    "id": "onc-epirrubicina",
    "nome": "Epirrubicina",
    "principioAtivo": "Epirrubicina",
    "classe": "Antraciclina",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Mama, gástrico",
    "posologiaAdulto": "60-90 mg/m² IV cada 3 sem (máx cum 900 mg/m²)",
    "contraindicacoes": "ICC, FE <50%",
    "efeitosAdversos": "Cardiotoxicidade < doxo, mielossupressão, alopécia",
    "gestacao": "Cat. D",
    "mecanismo": "Topo II",
    "tags": [
      "quimio",
      "cardiotoxico"
    ]
  },
  {
    "id": "onc-ciclofosfamida",
    "nome": "Ciclofosfamida",
    "principioAtivo": "Ciclofosfamida",
    "classe": "Alquilante (mostarda nitrogenada)",
    "categoria": "Oncologia/Reumato",
    "formaFarmaceutica": "Comprimido / Frasco IV",
    "via": "VO/IV",
    "indicacoes": "Linfomas, mama, vasculites, lúpus refratário",
    "posologiaAdulto": "500-1000 mg/m² IV (oncologia) / 1-2 mg/kg/dia VO (auto-imune)",
    "contraindicacoes": "Cistite hemorrágica prévia, mielossupressão grave",
    "efeitosAdversos": "Cistite hemorrágica (Mesna), mielossupressão, infertilidade, neoplasias secundárias",
    "gestacao": "Cat. D",
    "mecanismo": "Alquila DNA",
    "tags": [
      "quimio",
      "imunossupressor"
    ]
  },
  {
    "id": "onc-ifosfamida",
    "nome": "Ifosfamida",
    "principioAtivo": "Ifosfamida",
    "classe": "Alquilante",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Sarcomas, linfomas, testículo",
    "posologiaAdulto": "1.2-2.4 g/m²/dia IV x 3-5 dias com Mesna",
    "contraindicacoes": "Insuficiência renal, mielossupressão grave",
    "efeitosAdversos": "Cistite hemorrágica, neurotoxicidade (encefalopatia), nefrotoxicidade",
    "gestacao": "Cat. D",
    "mecanismo": "Alquila DNA",
    "tags": [
      "quimio",
      "neurotoxico"
    ]
  },
  {
    "id": "onc-metotrexato-onc",
    "nome": "Metotrexato (alta dose)",
    "principioAtivo": "Metotrexato",
    "classe": "Antimetabólito (anti-folato)",
    "categoria": "Oncologia/Reumato",
    "formaFarmaceutica": "Comprimido / Frasco IV",
    "via": "VO/IV/IM/IT",
    "indicacoes": "Leucemia, linfoma, osteossarcoma, AR, psoríase, gravidez ectópica",
    "posologiaAdulto": "Variável: 7.5-25 mg/sem (AR) até 1-12 g/m² IV (alta dose com leucovorin)",
    "contraindicacoes": "Hepatopatia, IRC, gestação, álcool, citopenias",
    "efeitosAdversos": "Mucosite, hepatotoxicidade, mielossupressão, pneumonite, nefrotoxicidade",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe diidrofolato redutase",
    "tags": [
      "antifolato",
      "resgate-leucovorin"
    ]
  },
  {
    "id": "onc-5fluorouracila",
    "nome": "5-Fluorouracila",
    "principioAtivo": "Fluorouracila",
    "classe": "Antimetabólito (pirimidina)",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV/tópico",
    "indicacoes": "CCR, mama, gástrico, cabeça-pescoço, ceratose actínica",
    "posologiaAdulto": "400-600 mg/m² IV bolus / 2.4 g/m² em 46h (FOLFOX)",
    "contraindicacoes": "Deficiência DPD, mielossupressão grave, gravidez",
    "efeitosAdversos": "Mucosite, diarreia, mielossupressão, sd mão-pé, cardiotoxicidade",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe timidilato sintase",
    "tags": [
      "fluoropirimidina"
    ]
  },
  {
    "id": "onc-capecitabina",
    "nome": "Capecitabina",
    "principioAtivo": "Capecitabina",
    "classe": "Pró-fármaco oral de 5-FU",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "CCR, mama, gástrico",
    "posologiaAdulto": "1250 mg/m² VO 12/12h por 14 dias a cada 21 dias",
    "contraindicacoes": "Deficiência DPD, IRC grave",
    "efeitosAdversos": "Sd mão-pé, diarreia, mucosite, hiperbilirrubinemia",
    "gestacao": "Cat. D",
    "mecanismo": "Convertida em 5-FU",
    "tags": [
      "fluoropirimidina-oral"
    ]
  },
  {
    "id": "onc-gencitabina",
    "nome": "Gencitabina",
    "principioAtivo": "Gencitabina",
    "classe": "Antimetabólito",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Pâncreas, pulmão, bexiga, mama",
    "posologiaAdulto": "1000 mg/m² IV semanal",
    "contraindicacoes": "Mielossupressão, gestação",
    "efeitosAdversos": "Mielossupressão, sd hemolítico-urêmica rara, pneumonite",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe síntese de DNA",
    "tags": [
      "quimio"
    ]
  },
  {
    "id": "onc-irinotecano",
    "nome": "Irinotecano",
    "principioAtivo": "Irinotecano",
    "classe": "Inibidor de topoisomerase I",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "CCR (FOLFIRI), pâncreas",
    "posologiaAdulto": "180 mg/m² IV cada 2 sem",
    "contraindicacoes": "Bilirrubina >2x, ileostomia, UGT1A1*28 homozigoto (reduzir)",
    "efeitosAdversos": "Diarreia (precoce/tardia), neutropenia, sd colinérgica",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe topo I",
    "tags": [
      "quimio",
      "diarreia"
    ]
  },
  {
    "id": "onc-etoposídeo",
    "nome": "Etoposídeo",
    "principioAtivo": "Etoposídeo",
    "classe": "Inibidor de topoisomerase II",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Cápsula / Frasco IV",
    "via": "VO/IV",
    "indicacoes": "Pulmão pequenas células, testículo, linfomas",
    "posologiaAdulto": "100 mg/m²/dia IV x 3-5 dias",
    "contraindicacoes": "Mielossupressão grave",
    "efeitosAdversos": "Hipotensão (infusão rápida), mielossupressão, leucemia secundária",
    "gestacao": "Cat. D",
    "mecanismo": "Topo II",
    "tags": [
      "quimio"
    ]
  },
  {
    "id": "onc-trastuzumabe",
    "nome": "Trastuzumabe",
    "principioAtivo": "Trastuzumabe",
    "classe": "Anti-HER2 monoclonal",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV / SC",
    "via": "IV/SC",
    "indicacoes": "Mama HER2+, gástrico HER2+",
    "posologiaAdulto": "Dose ataque 8 mg/kg IV, manutenção 6 mg/kg cada 3 sem",
    "contraindicacoes": "ICC, FE <50%",
    "efeitosAdversos": "Cardiotoxicidade (reversível), reação infusional, diarreia",
    "gestacao": "Cat. D",
    "mecanismo": "Bloqueia HER2",
    "tags": [
      "biologico",
      "cardiotoxico"
    ]
  },
  {
    "id": "onc-pertuzumabe",
    "nome": "Pertuzumabe",
    "principioAtivo": "Pertuzumabe",
    "classe": "Anti-HER2 (sítio dimerização)",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Mama HER2+ (com trastuzumabe)",
    "posologiaAdulto": "840 mg ataque, 420 mg cada 3 sem",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Diarreia, rash, cardiotoxicidade",
    "gestacao": "Cat. D",
    "mecanismo": "Bloqueia dimerização HER2",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "onc-bevacizumabe",
    "nome": "Bevacizumabe",
    "principioAtivo": "Bevacizumabe",
    "classe": "Anti-VEGF monoclonal",
    "categoria": "Oncologia/Oftalmo",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV/intravítreo",
    "indicacoes": "CCR, pulmão, glioma, ovário, DMRI úmida",
    "posologiaAdulto": "5-15 mg/kg IV cada 2-3 sem",
    "contraindicacoes": "Hemorragia ativa, perfuração GI, cirurgia recente",
    "efeitosAdversos": "Hipertensão, proteinúria, hemorragia, perfuração GI, tromboembolismo",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia VEGF-A",
    "tags": [
      "biologico",
      "anti-vegf"
    ]
  },
  {
    "id": "onc-cetuximabe",
    "nome": "Cetuximabe",
    "principioAtivo": "Cetuximabe",
    "classe": "Anti-EGFR monoclonal",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "CCR KRAS-WT, cabeça-pescoço",
    "posologiaAdulto": "Ataque 400 mg/m², 250 mg/m² semanal",
    "contraindicacoes": "Mutação KRAS",
    "efeitosAdversos": "Rash acneiforme, hipomagnesemia, reação infusional",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia EGFR",
    "tags": [
      "biologico",
      "anti-egfr"
    ]
  },
  {
    "id": "onc-panitumumabe",
    "nome": "Panitumumabe",
    "principioAtivo": "Panitumumabe",
    "classe": "Anti-EGFR humano",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "CCR RAS-WT",
    "posologiaAdulto": "6 mg/kg IV cada 2 sem",
    "contraindicacoes": "Mutação RAS",
    "efeitosAdversos": "Rash, hipomagnesemia",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-EGFR",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "onc-pembrolizumabe",
    "nome": "Pembrolizumabe",
    "principioAtivo": "Pembrolizumabe",
    "classe": "Anti-PD-1 (checkpoint)",
    "categoria": "Imuno-Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Melanoma, pulmão, MSI-H, cabeça-pescoço, vários",
    "posologiaAdulto": "200 mg IV cada 3 sem ou 400 mg cada 6 sem",
    "contraindicacoes": "Doença autoimune ativa grave",
    "efeitosAdversos": "Pneumonite, colite, hepatite, endocrinopatias auto-imunes",
    "gestacao": "Cat. D",
    "mecanismo": "Bloqueia PD-1",
    "tags": [
      "imunoterapia",
      "iras"
    ]
  },
  {
    "id": "onc-nivolumabe",
    "nome": "Nivolumabe",
    "principioAtivo": "Nivolumabe",
    "classe": "Anti-PD-1",
    "categoria": "Imuno-Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Melanoma, pulmão, RCC, Hodgkin",
    "posologiaAdulto": "240 mg IV cada 2 sem ou 480 mg cada 4 sem",
    "contraindicacoes": "Auto-imune ativa",
    "efeitosAdversos": "IRAEs (pneumonite, colite, hepatite, miocardite)",
    "gestacao": "Cat. D",
    "mecanismo": "Anti-PD-1",
    "tags": [
      "imunoterapia"
    ]
  },
  {
    "id": "onc-atezolizumabe",
    "nome": "Atezolizumabe",
    "principioAtivo": "Atezolizumabe",
    "classe": "Anti-PD-L1",
    "categoria": "Imuno-Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Pulmão, urotelial, mama TN",
    "posologiaAdulto": "1200 mg IV cada 3 sem",
    "contraindicacoes": "Auto-imune ativa",
    "efeitosAdversos": "IRAEs",
    "gestacao": "Cat. D",
    "mecanismo": "Anti-PD-L1",
    "tags": [
      "imunoterapia"
    ]
  },
  {
    "id": "onc-ipilimumabe",
    "nome": "Ipilimumabe",
    "principioAtivo": "Ipilimumabe",
    "classe": "Anti-CTLA-4",
    "categoria": "Imuno-Oncologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Melanoma, RCC (com nivolumabe)",
    "posologiaAdulto": "3 mg/kg IV cada 3 sem x4 doses",
    "contraindicacoes": "Auto-imune grave",
    "efeitosAdversos": "Colite grave, hepatite, hipofisite, dermatite",
    "gestacao": "Cat. D",
    "mecanismo": "Bloqueia CTLA-4",
    "tags": [
      "imunoterapia",
      "toxico"
    ]
  },
  {
    "id": "onc-imatinibe",
    "nome": "Imatinibe",
    "principioAtivo": "Imatinibe",
    "classe": "Inibidor de tirosino-quinase BCR-ABL",
    "categoria": "Onco-hematologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "LMC, GIST, LLA Ph+",
    "posologiaAdulto": "400-800 mg/dia VO",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Edema periorbitário, mielossupressão, hepatotoxicidade",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe BCR-ABL e c-KIT",
    "tags": [
      "tki"
    ]
  },
  {
    "id": "onc-dasatinibe",
    "nome": "Dasatinibe",
    "principioAtivo": "Dasatinibe",
    "classe": "TKI 2ª geração",
    "categoria": "Onco-hematologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "LMC, LLA Ph+",
    "posologiaAdulto": "100-140 mg/dia VO",
    "contraindicacoes": "Derrame pleural ativo",
    "efeitosAdversos": "Derrame pleural, citopenias, sangramento",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe BCR-ABL e SRC",
    "tags": [
      "tki"
    ]
  },
  {
    "id": "onc-nilotinibe",
    "nome": "Nilotinibe",
    "principioAtivo": "Nilotinibe",
    "classe": "TKI BCR-ABL",
    "categoria": "Onco-hematologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "LMC",
    "posologiaAdulto": "300-400 mg 12/12h jejum",
    "contraindicacoes": "QT longo, hipocalemia",
    "efeitosAdversos": "QT longo, hiperglicemia, pancreatite",
    "gestacao": "Cat. D",
    "mecanismo": "Anti BCR-ABL",
    "tags": [
      "tki"
    ]
  },
  {
    "id": "onc-erlotinibe",
    "nome": "Erlotinibe",
    "principioAtivo": "Erlotinibe",
    "classe": "TKI EGFR",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Pulmão EGFR-mut",
    "posologiaAdulto": "150 mg/dia VO jejum",
    "contraindicacoes": "Hepatopatia grave",
    "efeitosAdversos": "Rash, diarreia, doença pulmonar intersticial",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe EGFR",
    "tags": [
      "tki"
    ]
  },
  {
    "id": "onc-osimertinibe",
    "nome": "Osimertinibe",
    "principioAtivo": "Osimertinibe",
    "classe": "TKI EGFR 3ª geração",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Pulmão EGFR-mut (T790M)",
    "posologiaAdulto": "80 mg/dia VO",
    "contraindicacoes": "QT longo grave",
    "efeitosAdversos": "Diarreia, rash, QT longo, doença intersticial",
    "gestacao": "Cat. D",
    "mecanismo": "Anti-EGFR T790M",
    "tags": [
      "tki"
    ]
  },
  {
    "id": "onc-sorafenibe",
    "nome": "Sorafenibe",
    "principioAtivo": "Sorafenibe",
    "classe": "TKI multialvo",
    "categoria": "Oncologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "CHC, RCC, tireoide",
    "posologiaAdulto": "400 mg 12/12h VO",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Sd mão-pé, hipertensão, diarreia, hemorragia",
    "gestacao": "Cat. D",
    "mecanismo": "Multialvo",
    "tags": [
      "tki"
    ]
  },
  {
    "id": "hem-eculizumabe",
    "nome": "Eculizumabe",
    "principioAtivo": "Eculizumabe",
    "classe": "Anti-C5 monoclonal",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "HPN, SHUa, MG generalizada, NMOSD",
    "posologiaAdulto": "600 mg IV semanal x4, depois 900 mg cada 2 sem",
    "contraindicacoes": "Infecção meningocócica não imunizada",
    "efeitosAdversos": "Risco meningite (vacinar), cefaleia, infecção",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia C5 do complemento",
    "tags": [
      "biologico",
      "raro",
      "vacinar"
    ]
  },
  {
    "id": "hem-ravulizumabe",
    "nome": "Ravulizumabe",
    "principioAtivo": "Ravulizumabe",
    "classe": "Anti-C5 (longa duração)",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "HPN, SHUa, MG",
    "posologiaAdulto": "Dose ponderal cada 8 sem",
    "contraindicacoes": "Meningococo não imunizado",
    "efeitosAdversos": "Cefaleia, infecção",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-C5",
    "tags": [
      "biologico"
    ]
  },
  {
    "id": "hem-romiplostim",
    "nome": "Romiplostim",
    "principioAtivo": "Romiplostim",
    "classe": "Agonista TPO peptibody",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Solução SC",
    "via": "SC",
    "indicacoes": "PTI crônica",
    "posologiaAdulto": "1-10 mcg/kg SC semanal",
    "contraindicacoes": "Trombocitose",
    "efeitosAdversos": "Trombose, mielofibrose reversível",
    "gestacao": "Cat. C",
    "mecanismo": "Estimula receptor TPO",
    "tags": [
      "tpo-agonista"
    ]
  },
  {
    "id": "hem-eltrombopague",
    "nome": "Eltrombopague",
    "principioAtivo": "Eltrombopague",
    "classe": "Agonista TPO oral",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "PTI crônica, anemia aplásica",
    "posologiaAdulto": "25-75 mg/dia VO",
    "contraindicacoes": "Hepatopatia grave",
    "efeitosAdversos": "Hepatotoxicidade, catarata, trombose",
    "gestacao": "Cat. C",
    "mecanismo": "Agonista TPO",
    "tags": [
      "tpo-agonista"
    ]
  },
  {
    "id": "hem-fondaparinux",
    "nome": "Fondaparinux",
    "principioAtivo": "Fondaparinux",
    "classe": "Inibidor seletivo Xa",
    "categoria": "Hematologia/Cardio",
    "formaFarmaceutica": "Solução SC",
    "via": "SC",
    "indicacoes": "Profilaxia/tratamento TVP/TEP, SCA, HIT tipo II",
    "posologiaAdulto": "2.5-10 mg SC/dia",
    "contraindicacoes": "ClCr <30, peso <50 kg, sangramento ativo",
    "efeitosAdversos": "Sangramento, trombocitopenia rara",
    "gestacao": "Cat. B",
    "mecanismo": "Inibe Xa via AT-III",
    "tags": [
      "anticoagulante"
    ]
  },
  {
    "id": "hem-argatroban",
    "nome": "Argatrobana",
    "principioAtivo": "Argatroban",
    "classe": "Inibidor direto trombina IV",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "HIT tipo II",
    "posologiaAdulto": "2 mcg/kg/min IV (ajuste por aPTT)",
    "contraindicacoes": "Hepatopatia grave",
    "efeitosAdversos": "Sangramento",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-IIa direto",
    "tags": [
      "anticoagulante"
    ]
  },
  {
    "id": "hem-bivalirudina",
    "nome": "Bivalirudina",
    "principioAtivo": "Bivalirudina",
    "classe": "Inibidor direto trombina",
    "categoria": "Hematologia/Cardio",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "ICP, HIT",
    "posologiaAdulto": "0.75 mg/kg bolus, 1.75 mg/kg/h",
    "contraindicacoes": "Sangramento ativo",
    "efeitosAdversos": "Sangramento",
    "gestacao": "Cat. B",
    "mecanismo": "Anti-IIa",
    "tags": [
      "anticoagulante"
    ]
  },
  {
    "id": "hem-defibrotide",
    "nome": "Defibrotide",
    "principioAtivo": "Defibrotide",
    "classe": "Pró-fibrinolítico",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "SOS hepática pós-TCTH",
    "posologiaAdulto": "6.25 mg/kg IV 6/6h",
    "contraindicacoes": "Sangramento ativo",
    "efeitosAdversos": "Hemorragia, hipotensão",
    "gestacao": "Cat. C",
    "mecanismo": "Modulador endotelial",
    "tags": [
      "raro",
      "tcth"
    ]
  },
  {
    "id": "hem-caplacizumabe",
    "nome": "Caplacizumabe",
    "principioAtivo": "Caplacizumabe",
    "classe": "Anti-vWF nanocorpo",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Solução IV/SC",
    "via": "IV/SC",
    "indicacoes": "PTT adquirida",
    "posologiaAdulto": "10 mg IV pré-PEX, depois 10 mg SC/dia",
    "contraindicacoes": "Sangramento ativo grave",
    "efeitosAdversos": "Sangramento mucoso",
    "gestacao": "Cat. NA",
    "mecanismo": "Bloqueia vWF",
    "tags": [
      "raro",
      "ptt"
    ]
  },
  {
    "id": "hem-iptacopan",
    "nome": "Iptacopan",
    "principioAtivo": "Iptacopan",
    "classe": "Inibidor de fator B (via alternativa)",
    "categoria": "Hematologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "HPN",
    "posologiaAdulto": "200 mg VO 12/12h",
    "contraindicacoes": "Meningococo não imunizado",
    "efeitosAdversos": "Cefaleia, infecção",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe fator B",
    "tags": [
      "raro",
      "oral"
    ]
  },
  {
    "id": "end-tirzepatida",
    "nome": "Tirzepatida",
    "principioAtivo": "Tirzepatida",
    "classe": "Agonista duplo GIP/GLP-1",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Solução SC",
    "via": "SC",
    "indicacoes": "DM2, obesidade",
    "posologiaAdulto": "2.5-15 mg SC semanal (escalonar)",
    "contraindicacoes": "Carcinoma medular tireoide pessoal/familiar, NEM2",
    "efeitosAdversos": "Náuseas, vômitos, pancreatite, hipoglicemia (com SU/insulina)",
    "gestacao": "Cat. C",
    "mecanismo": "Agonista GIP+GLP-1",
    "tags": [
      "incretinico",
      "emagrecedor"
    ]
  },
  {
    "id": "end-semaglutida",
    "nome": "Semaglutida",
    "principioAtivo": "Semaglutida",
    "classe": "Agonista GLP-1",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Solução SC / Comprimido",
    "via": "SC/VO",
    "indicacoes": "DM2, obesidade, redução RCV",
    "posologiaAdulto": "SC: 0.25-2.4 mg semanal | VO: 3-14 mg/dia jejum",
    "contraindicacoes": "CMT pessoal/familiar, NEM2",
    "efeitosAdversos": "Náuseas, pancreatite, retinopatia (rápida queda glicêmica)",
    "gestacao": "Cat. NA",
    "mecanismo": "GLP-1 agonista",
    "tags": [
      "glp1"
    ]
  },
  {
    "id": "end-liraglutida",
    "nome": "Liraglutida",
    "principioAtivo": "Liraglutida",
    "classe": "Agonista GLP-1",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Solução SC",
    "via": "SC",
    "indicacoes": "DM2, obesidade",
    "posologiaAdulto": "0.6-3.0 mg SC/dia",
    "contraindicacoes": "CMT, NEM2",
    "efeitosAdversos": "Náuseas, pancreatite",
    "gestacao": "Cat. C",
    "mecanismo": "GLP-1",
    "tags": [
      "glp1"
    ]
  },
  {
    "id": "end-dulaglutida",
    "nome": "Dulaglutida",
    "principioAtivo": "Dulaglutida",
    "classe": "Agonista GLP-1 semanal",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Solução SC",
    "via": "SC",
    "indicacoes": "DM2",
    "posologiaAdulto": "0.75-4.5 mg SC semanal",
    "contraindicacoes": "CMT, NEM2",
    "efeitosAdversos": "Náuseas, diarreia",
    "gestacao": "Cat. C",
    "mecanismo": "GLP-1",
    "tags": [
      "glp1"
    ]
  },
  {
    "id": "end-empagliflozina",
    "nome": "Empagliflozina",
    "principioAtivo": "Empagliflozina",
    "classe": "iSGLT2",
    "categoria": "Endocrinologia/Cardio",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "DM2, IC (FE preservada e reduzida), DRC",
    "posologiaAdulto": "10-25 mg/dia VO",
    "contraindicacoes": "ClCr <20, CAD",
    "efeitosAdversos": "Infecção genital, CAD euglicêmica, hipovolemia",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe SGLT2",
    "tags": [
      "sglt2"
    ]
  },
  {
    "id": "end-dapagliflozina",
    "nome": "Dapagliflozina",
    "principioAtivo": "Dapagliflozina",
    "classe": "iSGLT2",
    "categoria": "Endocrinologia/Cardio/Nefro",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "DM2, IC, DRC",
    "posologiaAdulto": "10 mg/dia VO",
    "contraindicacoes": "ClCr <25 (variável)",
    "efeitosAdversos": "Infecção urogenital, hipotensão, CAD",
    "gestacao": "Cat. C",
    "mecanismo": "SGLT2",
    "tags": [
      "sglt2"
    ]
  },
  {
    "id": "end-canagliflozina",
    "nome": "Canagliflozina",
    "principioAtivo": "Canagliflozina",
    "classe": "iSGLT2",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "DM2",
    "posologiaAdulto": "100-300 mg/dia VO",
    "contraindicacoes": "ClCr <30",
    "efeitosAdversos": "Amputação MMII (alerta), fratura",
    "gestacao": "Cat. C",
    "mecanismo": "SGLT2",
    "tags": [
      "sglt2"
    ]
  },
  {
    "id": "end-finerenona",
    "nome": "Finerenona",
    "principioAtivo": "Finerenona",
    "classe": "Antagonista mineralocorticoide não-esteroidal",
    "categoria": "Cardio/Nefro",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "DRC associada a DM2",
    "posologiaAdulto": "10-20 mg/dia VO",
    "contraindicacoes": "K >5, IRA",
    "efeitosAdversos": "Hipercalemia, hipotensão",
    "gestacao": "Cat. C",
    "mecanismo": "MRA",
    "tags": [
      "mra"
    ]
  },
  {
    "id": "end-liraglutida-saxe",
    "nome": "Saxenda (liraglutida 3 mg)",
    "principioAtivo": "Liraglutida",
    "classe": "GLP-1 (obesidade)",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "SC",
    "via": "SC",
    "indicacoes": "Obesidade",
    "posologiaAdulto": "Escalonar até 3 mg SC/dia",
    "contraindicacoes": "CMT",
    "efeitosAdversos": "Náuseas",
    "gestacao": "Cat. NA",
    "mecanismo": "GLP-1",
    "tags": [
      "emagrecedor"
    ]
  },
  {
    "id": "end-orlistat",
    "nome": "Orlistat",
    "principioAtivo": "Orlistat",
    "classe": "Inibidor de lipase pancreática",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Obesidade",
    "posologiaAdulto": "120 mg VO 3x/dia (com refeições)",
    "contraindicacoes": "Sd má absorção, colestase",
    "efeitosAdversos": "Esteatorréia, déficit ADEK",
    "gestacao": "Cat. X",
    "mecanismo": "Inibe lipase",
    "tags": [
      "emagrecedor"
    ]
  },
  {
    "id": "end-bromocriptina",
    "nome": "Bromocriptina",
    "principioAtivo": "Bromocriptina",
    "classe": "Agonista dopaminérgico",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Hiperprolactinemia, Parkinson, supressão de lactação",
    "posologiaAdulto": "2.5-15 mg/dia VO",
    "contraindicacoes": "HAS pós-parto não controlada, PPP",
    "efeitosAdversos": "Náuseas, hipotensão, fibrose retroperitoneal",
    "gestacao": "Cat. B",
    "mecanismo": "Agonista D2",
    "tags": [
      "prolactina"
    ]
  },
  {
    "id": "end-cabergolina",
    "nome": "Cabergolina",
    "principioAtivo": "Cabergolina",
    "classe": "Agonista D2",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Hiperprolactinemia, prolactinoma",
    "posologiaAdulto": "0.25-1 mg 2x/sem",
    "contraindicacoes": "Valvopatia, fibrose",
    "efeitosAdversos": "Náuseas, valvulopatia (alta dose)",
    "gestacao": "Cat. B",
    "mecanismo": "D2 agonista",
    "tags": [
      "prolactina"
    ]
  },
  {
    "id": "end-octreotida",
    "nome": "Octreotida",
    "principioAtivo": "Octreotida",
    "classe": "Análogo somatostatina",
    "categoria": "Endocrinologia/Gastro",
    "formaFarmaceutica": "Solução SC/IV / IM LAR",
    "via": "SC/IV/IM",
    "indicacoes": "Acromegalia, tumores neuroendócrinos, hemorragia varicosa",
    "posologiaAdulto": "100 mcg SC 8/8h ou 20-30 mg IM mensal",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Diarreia, esteatorreia, colelitíase, hipoglicemia",
    "gestacao": "Cat. B",
    "mecanismo": "Análogo somatostatina",
    "tags": [
      "gastro",
      "endócrino"
    ]
  },
  {
    "id": "end-lanreotida",
    "nome": "Lanreotida",
    "principioAtivo": "Lanreotida",
    "classe": "Análogo somatostatina LAR",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "Solução SC profunda",
    "via": "SC",
    "indicacoes": "Acromegalia, TNE",
    "posologiaAdulto": "60-120 mg SC cada 4 sem",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Diarreia, colelitíase",
    "gestacao": "Cat. C",
    "mecanismo": "Somatostatina",
    "tags": [
      "endócrino"
    ]
  },
  {
    "id": "end-pasireotida",
    "nome": "Pasireotida",
    "principioAtivo": "Pasireotida",
    "classe": "Análogo multireceptor somatostatina",
    "categoria": "Endocrinologia",
    "formaFarmaceutica": "SC/IM LAR",
    "via": "SC/IM",
    "indicacoes": "Cushing, acromegalia",
    "posologiaAdulto": "SC: 0.6-0.9 mg 12/12h",
    "contraindicacoes": "DM, QT longo",
    "efeitosAdversos": "Hiperglicemia importante, QT",
    "gestacao": "Cat. C",
    "mecanismo": "Somatostatina ampliada",
    "tags": [
      "cushing"
    ]
  },
  {
    "id": "atb-ceftolozano-tazobactam",
    "nome": "Ceftolozano/Tazobactam",
    "principioAtivo": "Ceftolozano/Tazobactam",
    "classe": "Cefalosporina + IBL",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "ITU/IAB complicada por GNN MDR (Pseudomonas)",
    "posologiaAdulto": "1.5-3 g IV 8/8h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Diarreia, cefaleia",
    "gestacao": "Cat. B",
    "mecanismo": "Inibe PBP3 com tazobactam",
    "tags": [
      "antibiotico",
      "mdr"
    ]
  },
  {
    "id": "atb-ceftazidima-avibactam",
    "nome": "Ceftazidima/Avibactam",
    "principioAtivo": "Ceftazidima/Avibactam",
    "classe": "Cefalosporina + IBL",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "KPC, OXA-48, Pseudomonas MDR",
    "posologiaAdulto": "2.5 g IV 8/8h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Cefaleia, diarreia",
    "gestacao": "Cat. B",
    "mecanismo": "Inibe carbapenemases serino",
    "tags": [
      "antibiotico",
      "mdr"
    ]
  },
  {
    "id": "atb-meropenem-vaborbactam",
    "nome": "Meropenem/Vaborbactam",
    "principioAtivo": "Meropenem/Vaborbactam",
    "classe": "Carbapenêmico + IBL",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "KPC",
    "posologiaAdulto": "4 g IV 8/8h",
    "contraindicacoes": "Hipersensibilidade carbapenêmico",
    "efeitosAdversos": "Convulsão, diarreia",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe KPC",
    "tags": [
      "antibiotico",
      "mdr"
    ]
  },
  {
    "id": "atb-imipenem-relebactam",
    "nome": "Imipenem/Cilastatina/Relebactam",
    "principioAtivo": "Imipenem-relebactam",
    "classe": "Carbapenêmico + IBL",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "KPC, Pseudomonas MDR",
    "posologiaAdulto": "1.25 g IV 6/6h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Convulsão, diarreia",
    "gestacao": "Cat. NA",
    "mecanismo": "Anti-KPC",
    "tags": [
      "antibiotico",
      "mdr"
    ]
  },
  {
    "id": "atb-cefiderocol",
    "nome": "Cefiderocol",
    "principioAtivo": "Cefiderocol",
    "classe": "Cefalosporina sideróforo",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "GNN MDR (NDM, Acinetobacter)",
    "posologiaAdulto": "2 g IV 8/8h em 3h",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Diarreia, hipocalemia",
    "gestacao": "Cat. NA",
    "mecanismo": "Sideróforo penetra membrana externa",
    "tags": [
      "antibiotico",
      "mdr-extremo"
    ]
  },
  {
    "id": "atb-eravaciclina",
    "nome": "Eravaciclina",
    "principioAtivo": "Eravaciclina",
    "classe": "Fluorociclina",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "IAB complicada (MDR)",
    "posologiaAdulto": "1 mg/kg IV 12/12h",
    "contraindicacoes": "Hipersensibilidade tetraciclinas",
    "efeitosAdversos": "Náuseas, reação infusional",
    "gestacao": "Cat. D",
    "mecanismo": "Anti-30S",
    "tags": [
      "antibiotico",
      "mdr"
    ]
  },
  {
    "id": "atb-plazomicina",
    "nome": "Plazomicina",
    "principioAtivo": "Plazomicina",
    "classe": "Aminoglicosídeo novo",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "ITU complicada por ESBL/KPC",
    "posologiaAdulto": "15 mg/kg IV/dia",
    "contraindicacoes": "IRC grave (ajustar)",
    "efeitosAdversos": "Nefrotoxicidade, ototoxicidade",
    "gestacao": "Cat. D",
    "mecanismo": "Inibe 30S",
    "tags": [
      "antibiotico"
    ]
  },
  {
    "id": "atv-letermovir",
    "nome": "Letermovir",
    "principioAtivo": "Letermovir",
    "classe": "Antiviral CMV (terminase)",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Profilaxia CMV pós-TCTH",
    "posologiaAdulto": "480 mg/dia (240 mg com ciclosporina)",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Náuseas, edema",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe terminase CMV",
    "tags": [
      "antiviral",
      "tcth"
    ]
  },
  {
    "id": "atv-maribavir",
    "nome": "Maribavir",
    "principioAtivo": "Maribavir",
    "classe": "Antiviral CMV refratário",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "CMV refratário pós-transplante",
    "posologiaAdulto": "400 mg VO 12/12h",
    "contraindicacoes": "Uso com ganciclovir",
    "efeitosAdversos": "Disgeusia, náuseas, neutropenia",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe pUL97",
    "tags": [
      "antiviral"
    ]
  },
  {
    "id": "atv-remdesivir",
    "nome": "Remdesivir",
    "principioAtivo": "Remdesivir",
    "classe": "Antiviral nucleotídico",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "COVID-19 grave",
    "posologiaAdulto": "200 mg IV ataque, 100 mg/dia x 4 dias",
    "contraindicacoes": "ClCr <30, hepatopatia grave",
    "efeitosAdversos": "Hepatotoxicidade, reação infusional, bradicardia",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe RNA pol viral",
    "tags": [
      "antiviral",
      "covid"
    ]
  },
  {
    "id": "atv-paxlovid",
    "nome": "Paxlovid (Nirmatrelvir/Ritonavir)",
    "principioAtivo": "Nirmatrelvir + Ritonavir",
    "classe": "Antiviral protease + booster",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "COVID-19 leve com risco de progressão",
    "posologiaAdulto": "300/100 mg VO 12/12h x 5 dias",
    "contraindicacoes": "ClCr <30, interações graves CYP3A4",
    "efeitosAdversos": "Disgeusia, diarreia, interações medicamentosas",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe protease 3CL",
    "tags": [
      "antiviral",
      "covid",
      "interacoes"
    ]
  },
  {
    "id": "atv-sotrovimab",
    "nome": "Sotrovimab",
    "principioAtivo": "Sotrovimab",
    "classe": "Anticorpo monoclonal anti-Spike",
    "categoria": "Infectologia",
    "formaFarmaceutica": "IV",
    "via": "IV",
    "indicacoes": "COVID-19 (variantes específicas)",
    "posologiaAdulto": "500 mg IV",
    "contraindicacoes": "Variante resistente",
    "efeitosAdversos": "Reação infusional",
    "gestacao": "Cat. NA",
    "mecanismo": "Anti-Spike",
    "tags": [
      "biologico",
      "covid"
    ]
  },
  {
    "id": "antif-isavuconazol",
    "nome": "Isavuconazol",
    "principioAtivo": "Isavuconazol",
    "classe": "Triazol amplo espectro",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Cápsula / IV",
    "via": "VO/IV",
    "indicacoes": "Aspergilose, mucormicose",
    "posologiaAdulto": "Ataque 200 mg 8/8h x 6 doses, depois 200 mg/dia",
    "contraindicacoes": "QT curto",
    "efeitosAdversos": "Hepatotoxicidade, encurtamento QT, distúrbios GI",
    "gestacao": "Cat. NA",
    "mecanismo": "Inibe 14α-desmetilase",
    "tags": [
      "antifungico"
    ]
  },
  {
    "id": "antif-posaconazol",
    "nome": "Posaconazol",
    "principioAtivo": "Posaconazol",
    "classe": "Triazol amplo espectro",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Comp LM / Suspensão / IV",
    "via": "VO/IV",
    "indicacoes": "Profilaxia aspergilose, mucormicose",
    "posologiaAdulto": "300 mg/dia (LM)",
    "contraindicacoes": "Ergot, sirolimo, QT longo",
    "efeitosAdversos": "Hepatotoxicidade, QT longo, hipocalemia",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe ergosterol",
    "tags": [
      "antifungico"
    ]
  },
  {
    "id": "antif-anidulafungina",
    "nome": "Anidulafungina",
    "principioAtivo": "Anidulafungina",
    "classe": "Equinocandina",
    "categoria": "Infectologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "Candidemia, candidíase invasiva",
    "posologiaAdulto": "Ataque 200 mg, 100 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Hepatotoxicidade leve, reação infusional",
    "gestacao": "Cat. C",
    "mecanismo": "Inibe β-1,3-glucan-sintase",
    "tags": [
      "antifungico",
      "candidemia"
    ]
  },
  {
    "id": "neu-edaravona",
    "nome": "Edaravona",
    "principioAtivo": "Edaravona",
    "classe": "Neuroprotetor (sequestrador radicais)",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "ELA",
    "posologiaAdulto": "60 mg IV em 60 min ciclos",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Hematomas, marcha alterada, sulfito",
    "gestacao": "Cat. NA",
    "mecanismo": "Antioxidante",
    "tags": [
      "ela",
      "neuroprotetor"
    ]
  },
  {
    "id": "neu-riluzol",
    "nome": "Riluzol",
    "principioAtivo": "Riluzol",
    "classe": "Antiglutamatérgico",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "ELA",
    "posologiaAdulto": "50 mg VO 12/12h",
    "contraindicacoes": "Hepatopatia grave",
    "efeitosAdversos": "Hepatotoxicidade, neutropenia",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia liberação de glutamato",
    "tags": [
      "ela"
    ]
  },
  {
    "id": "neu-natalizumabe",
    "nome": "Natalizumabe",
    "principioAtivo": "Natalizumabe",
    "classe": "Anti-α4-integrina",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "EM remitente-recorrente, Crohn",
    "posologiaAdulto": "300 mg IV cada 4 sem",
    "contraindicacoes": "Anti-JCV positivo (LMP)",
    "efeitosAdversos": "LMP, hepatotoxicidade",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia migração linfocitária",
    "tags": [
      "biologico",
      "em"
    ]
  },
  {
    "id": "neu-ocrelizumabe",
    "nome": "Ocrelizumabe",
    "principioAtivo": "Ocrelizumabe",
    "classe": "Anti-CD20 humanizado",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Frasco IV",
    "via": "IV",
    "indicacoes": "EM remitente-recorrente e primária progressiva",
    "posologiaAdulto": "600 mg IV cada 6 meses",
    "contraindicacoes": "Infecção HBV ativa",
    "efeitosAdversos": "Reação infusional, infecções, neoplasias",
    "gestacao": "Cat. C",
    "mecanismo": "Lisa células B",
    "tags": [
      "biologico",
      "em"
    ]
  },
  {
    "id": "neu-fingolimode",
    "nome": "Fingolimode",
    "principioAtivo": "Fingolimod",
    "classe": "Modulador S1P",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "EM RR",
    "posologiaAdulto": "0.5 mg VO/dia",
    "contraindicacoes": "BAV 2-3°, ICC, QT longo",
    "efeitosAdversos": "Bradicardia primeira dose, edema macular, infecção",
    "gestacao": "Cat. C",
    "mecanismo": "S1P modulador",
    "tags": [
      "em",
      "oral"
    ]
  },
  {
    "id": "neu-cladribina",
    "nome": "Cladribina (oral)",
    "principioAtivo": "Cladribina",
    "classe": "Imunossupressor purina",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "EM altamente ativa",
    "posologiaAdulto": "3.5 mg/kg dividido em 2 anos",
    "contraindicacoes": "Imunodeficiência",
    "efeitosAdversos": "Linfopenia, herpes zoster, neoplasia",
    "gestacao": "Cat. D",
    "mecanismo": "Análogo purina",
    "tags": [
      "em"
    ]
  },
  {
    "id": "neu-zonisamida",
    "nome": "Zonisamida",
    "principioAtivo": "Zonisamida",
    "classe": "Antiepiléptico",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Crises focais",
    "posologiaAdulto": "100-400 mg/dia VO",
    "contraindicacoes": "Alergia sulfa",
    "efeitosAdversos": "Cálculo renal, oligohidrose, sd Stevens-Johnson",
    "gestacao": "Cat. C",
    "mecanismo": "Bloqueia Na/Ca",
    "tags": [
      "antiepileptico"
    ]
  },
  {
    "id": "neu-perampanel",
    "nome": "Perampanel",
    "principioAtivo": "Perampanel",
    "classe": "Antagonista AMPA",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Crises focais e generalizadas",
    "posologiaAdulto": "2-12 mg VO noite",
    "contraindicacoes": "Hepatopatia",
    "efeitosAdversos": "Agressividade, sonolência",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-AMPA",
    "tags": [
      "antiepileptico"
    ]
  },
  {
    "id": "neu-brivaracetam",
    "nome": "Brivaracetam",
    "principioAtivo": "Brivaracetam",
    "classe": "Antiepiléptico SV2A",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Crises focais",
    "posologiaAdulto": "50-200 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Sonolência, irritabilidade",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-SV2A",
    "tags": [
      "antiepileptico"
    ]
  },
  {
    "id": "neu-lacosamida",
    "nome": "Lacosamida",
    "principioAtivo": "Lacosamida",
    "classe": "Antiepiléptico (canal Na lento)",
    "categoria": "Neurologia",
    "formaFarmaceutica": "Comprimido / IV",
    "via": "VO/IV",
    "indicacoes": "Crises focais, status epilepticus",
    "posologiaAdulto": "100-400 mg/dia",
    "contraindicacoes": "BAV 2-3°",
    "efeitosAdversos": "Tontura, BAV, PR longo",
    "gestacao": "Cat. C",
    "mecanismo": "Inativação lenta Na",
    "tags": [
      "antiepileptico"
    ]
  },
  {
    "id": "psi-cariprazina",
    "nome": "Cariprazina",
    "principioAtivo": "Cariprazina",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Cápsula",
    "via": "VO",
    "indicacoes": "Esquizofrenia, bipolar",
    "posologiaAdulto": "1.5-6 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Acatisia, parkinsonismo",
    "gestacao": "Cat. NA",
    "mecanismo": "D2/D3 parcial",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-brexpiprazol",
    "nome": "Brexpiprazol",
    "principioAtivo": "Brexpiprazol",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Esquizofrenia, depressão refratária",
    "posologiaAdulto": "1-4 mg/dia",
    "contraindicacoes": "Hipersensibilidade",
    "efeitosAdversos": "Acatisia, ganho peso",
    "gestacao": "Cat. NA",
    "mecanismo": "D2 parcial",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-lurasidona",
    "nome": "Lurasidona",
    "principioAtivo": "Lurasidona",
    "classe": "Antipsicótico atípico",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Esquizofrenia, bipolar I",
    "posologiaAdulto": "20-80 mg/dia com refeição",
    "contraindicacoes": "CYP3A4 fortes",
    "efeitosAdversos": "Acatisia, sonolência",
    "gestacao": "Cat. B",
    "mecanismo": "D2/5HT2A",
    "tags": [
      "antipsicotico"
    ]
  },
  {
    "id": "psi-vortioxetina",
    "nome": "Vortioxetina",
    "principioAtivo": "Vortioxetina",
    "classe": "Antidepressivo multimodal",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Comprimido",
    "via": "VO",
    "indicacoes": "Depressão maior",
    "posologiaAdulto": "5-20 mg/dia",
    "contraindicacoes": "IMAO",
    "efeitosAdversos": "Náuseas, disfunção sexual",
    "gestacao": "Cat. C",
    "mecanismo": "Multimodal serotonérgico",
    "tags": [
      "antidepressivo"
    ]
  },
  {
    "id": "psi-esketamina",
    "nome": "Esketamina (intranasal)",
    "principioAtivo": "Esketamina",
    "classe": "Antagonista NMDA",
    "categoria": "Psiquiatria",
    "formaFarmaceutica": "Spray nasal",
    "via": "Intranasal",
    "indicacoes": "Depressão resistente",
    "posologiaAdulto": "56-84 mg intranasal monitorizado",
    "contraindicacoes": "Aneurisma, HSA, HAS descontrolada",
    "efeitosAdversos": "Dissociação, hipertensão, sedação",
    "gestacao": "Cat. C",
    "mecanismo": "Anti-NMDA",
    "tags": [
      "antidepressivo",
      "intranasal"
    ]
  }
];
