import type { EmergencyProtocol } from "./types";

export const infectiousProtocols: EmergencyProtocol[] = [
  {
    id: "sepse-grave-infecto",
    title: "Sepse Grave",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "Sepse com disfunção orgânica é a principal causa de morte em UTIs. O Bundle da Primeira Hora (Hour-1 Bundle) do Surviving Sepsis Campaign inclui: medir lactato, hemoculturas, antibiótico de amplo espectro, volume 30 mL/kg se hipotensão/lactato > 4, e vasopressor se PAM < 65." },
      { id: "def", title: "Definição", content: "Sepse (Sepsis-3): infecção + SOFA ≥ 2. Choque séptico: sepse + vasopressor para PAM ≥ 65 + lactato > 2 apesar de ressuscitação volêmica adequada." },
      { id: "screening", title: "Rastreamento e Identificação", content: "qSOFA ≥ 2 (PAS ≤ 100, FR ≥ 22, Glasgow < 15) → alto risco. SOFA para confirmar disfunção orgânica. Focos: pneumonia (40-50%), ITU (20%), intra-abdominal (15%)." },
      { id: "etiology", title: "Etiologia", content: "Comunitária: S. pneumoniae, E. coli, S. aureus. Hospitalar: Pseudomonas, Acinetobacter, MRSA, Klebsiella KPC, Candida." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hipotensão, taquicardia, febre ou hipotermia, confusão, oligúria, livedo reticular, taquipneia, lactato elevado, coagulopatia." },
      { id: "diagnosis", title: "Diagnóstico", content: "Hemoculturas (2 pares ANTES do ATB), lactato, hemograma, PCR, procalcitonina, função renal/hepática, coagulograma, gasometria, RX tórax, urocultura." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Choque cardiogênico, TEP, pancreatite aguda, insuficiência adrenal, anafilaxia." },
      { id: "conduct", title: "Conduta", content: "HOUR-1 BUNDLE:\n1. Medir lactato (repetir se > 2)\n2. Hemoculturas ANTES do ATB\n3. ATB de amplo espectro IV em < 1h\n4. SF 0,9% 30 mL/kg se hipotensão ou lactato > 4\n5. Noradrenalina se PAM < 65 após volume\n\nATB empírico:\n• Comunitário: Ceftriaxona + Azitromicina (pneumonia) ou Pipe/Tazo\n• Hospitalar: Meropenem ± Vancomicina\n• Neutropênico: Pipe/Tazo ou Meropenem + Vancomicina" },
      { id: "followup", title: "Acompanhamento", content: "Reavaliar ATB em 48-72h. Lactato seriado. Meta: lactato em queda, PAM ≥ 65, diurese > 0,5 mL/kg/h. Procalcitonina para guiar duração de ATB. Controle de foco." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Noradrenalina: 0,05-2 mcg/kg/min (1ª linha). Vasopressina: 0,03-0,04 UI/min (adjunto). Dobutamina: 2,5-20 mcg/kg/min (se disfunção miocárdica). Hidrocortisona: 200 mg/dia IV BIC (choque refratário)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Hemoculturas 2 pares\n2. ATB empírico IV < 1h\n3. SF 0,9% 30 mL/kg em 30 min\n4. Noradrenalina se PAM < 65\n5. Lactato seriado 2/2h\n6. Monitorização contínua\n7. UTI" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Evans L et al. SSC Guidelines 2021. Crit Care Med 2021.\n2. Singer M et al. Sepsis-3. JAMA 2016.\n3. ILAS Brasil 2023." }
    ]
  },
  {
    id: "choque-septico-avancado",
    title: "Choque Séptico Avançado",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "O choque séptico refratário (sem resposta a noradrenalina em doses crescentes) tem mortalidade > 60%. Exige escalada terapêutica com múltiplos vasopressores, corticoterapia e avaliação ecocardiográfica da função cardíaca." },
      { id: "def", title: "Definição", content: "Choque séptico refratário a volume + noradrenalina > 0,5 mcg/kg/min para manter PAM ≥ 65. Lactato persistentemente elevado." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Noradrenalina em doses crescentes, lactato persistentemente > 4, acidose metabólica progressiva, oligúria, disfunção orgânica múltipla." },
      { id: "etiology", title: "Etiologia", content: "Vasoplegia (perda de tônus vascular), disfunção miocárdica séptica (40-60% dos pacientes), foco não controlado." },
      { id: "clinical", title: "Apresentação Clínica", content: "Hipotensão refratária, extremidades frias ou quentes, mosqueamento, oligúria/anúria, confusão → coma, lactato em ascensão, coagulopatia (CIVD)." },
      { id: "diagnosis", title: "Diagnóstico", content: "Ecocardiograma beira-leito: disfunção VE/VD? Lactato seriado. Gasometria. ScvO2 (< 70% = extração inadequada). Delta CO2 (> 6 = fluxo inadequado)." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Insuficiência adrenal, tamponamento cardíaco, pneumotórax hipertensivo, TEP maciço, anafilaxia, foco não controlado." },
      { id: "conduct", title: "Conduta", content: "1. Noradrenalina (escalonar até 2 mcg/kg/min)\n2. Vasopressina 0,03-0,04 UI/min (segundo vasopressor)\n3. Hidrocortisona 200 mg/dia IV BIC ou 50 mg 6/6h\n4. Eco beira-leito: se disfunção miocárdica → Dobutamina 5-20 mcg/kg/min\n5. Se refratário: Adrenalina em substituição ou associação\n6. Angiotensina II 20-200 ng/kg/min (vasoplegia refratária)\n7. CONTROLE DE FOCO: drenagem, desbridamento, retirada de dispositivos" },
      { id: "followup", title: "Acompanhamento", content: "Lactato a cada 2h. Meta: clareamento > 10-20%/h. Eco seriado. Reavaliação diária de ATB e foco. SOFA diário." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Noradrenalina + Vasopressina + Hidrocortisona. Dobutamina (disfunção cardíaca). Adrenalina (refratário). Terlipressina (alternativa). Azul de metileno 1-2 mg/kg IV (vasoplegia extrema — resgate)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Noradrenalina IV BIC (titular PAM ≥ 65)\n2. Vasopressina 0,03 UI/min IV BIC\n3. Hidrocortisona 50 mg IV 6/6h\n4. Dobutamina se disfunção cardíaca\n5. Lactato 2/2h\n6. Eco beira-leito\n7. Controle de foco" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Evans L et al. SSC Guidelines 2021.\n2. VENTURA et al. ATHOS-3 Trial (Angiotensina II). NEJM 2017.\n3. Annane D et al. APROCCHSS Trial. NEJM 2018." }
    ]
  },
  {
    id: "meningite-bacteriana-adulto",
    title: "Meningite Bacteriana",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "A meningite bacteriana em adultos tem mortalidade de 15-25%. S. pneumoniae e N. meningitidis são os agentes mais comuns. Antibiótico em < 1h e dexametasona pré-ATB melhoram prognóstico." },
      { id: "def", title: "Definição", content: "Inflamação bacteriana das meninges. LCR: pleocitose > 1000 (PMN), glicose < 40, proteína > 100, bacterioscopia e cultura." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Febre + cefaleia + rigidez de nuca + alteração de consciência. Tríade clássica completa em < 50% dos casos." },
      { id: "etiology", title: "Etiologia", content: "18-50 anos: S. pneumoniae, N. meningitidis. > 50 anos: S. pneumoniae, Listeria, gram-negativos. Imunossuprimidos: Listeria, Cryptococcus, gram-negativos. Pós-neurocirurgia: S. aureus, gram-negativos." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre, cefaleia intensa, rigidez de nuca, Kernig/Brudzinski, alteração de consciência, convulsões, petéquias/púrpura (meningococo), fotofobia." },
      { id: "diagnosis", title: "Diagnóstico", content: "TC crânio ANTES da PL se: déficit focal, convulsão recente, edema de papila, imunossupressão, Glasgow < 12. Se TC indicada: ATB ANTES da TC!\nPL: citologia, bioquímica, bacterioscopia, cultura, PCR. Hemoculturas." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Meningite viral, encefalite, HSA, abscesso cerebral, meningite fúngica/TB, carcinomatose meníngea." },
      { id: "conduct", title: "Conduta", content: "1. Dexametasona 0,15 mg/kg IV 6/6h por 4 dias (iniciar 15-30 min ANTES do ATB)\n2. ATB empírico:\n   • 18-50a: Ceftriaxona 2g IV 12/12h + Vancomicina 15-20 mg/kg IV 8/8h\n   • > 50a ou imunossuprimido: + Ampicilina 2g IV 4/4h (Listeria)\n3. TC crânio se indicado (NÃO atrasar ATB)\n4. PL quando segura" },
      { id: "followup", title: "Acompanhamento", content: "Duração: pneumococo 10-14 dias, meningococo 7 dias, Listeria 21 dias. Audiometria. Quimioprofilaxia de contactantes (meningococo): Rifampicina 600 mg 12/12h por 2 dias ou Ceftriaxona 250 mg IM dose única." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Ceftriaxona 2g IV 12/12h. Vancomicina 15-20 mg/kg IV 8/8h. Ampicilina 2g IV 4/4h (se > 50a). Dexametasona 10 mg IV 6/6h por 4 dias. Anticonvulsivantes SN." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Dexametasona 10 mg IV agora (antes do ATB)\n2. Ceftriaxona 2g IV 12/12h\n3. Vancomicina 1g IV 8/8h\n4. Se > 50a: Ampicilina 2g IV 4/4h\n5. Dexametasona 10 mg IV 6/6h por 4 dias\n6. Monitorização + UTI" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Tunkel AR et al. IDSA Guidelines. Clin Infect Dis 2004.\n2. Van de Beek D et al. Lancet 2016.\n3. MS Brasil — Meningites 2022." }
    ]
  },
  {
    id: "encefalite-aguda",
    title: "Encefalite Aguda",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "A encefalite é inflamação do parênquima cerebral, mais comumente viral (HSV é a principal causa tratável). Diferencia-se da meningite pela presença de alteração do estado mental, déficits focais e convulsões. Aciclovir empírico é obrigatório até excluir HSV." },
      { id: "def", title: "Definição", content: "Inflamação do parênquima cerebral com disfunção neurológica. LCR: pleocitose linfocitária, proteína levemente elevada, glicose normal. PCR para HSV no LCR (padrão-ouro)." },
      { id: "screening", title: "Rastreamento e Identificação", content: "Febre + alteração de consciência + déficit focal e/ou convulsão. Diferente da meningite: tem comprometimento do parênquima (alteração comportamental, afasia, hemiparesia)." },
      { id: "etiology", title: "Etiologia", content: "HSV-1 (mais comum e mais grave — lobo temporal). Outros: arbovírus (dengue, Zika, chikungunya), enterovírus, VZV, CMV, HIV. Autoimune: anti-NMDA, anti-LGI1." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre, cefaleia, confusão, alteração comportamental, convulsão (focal temporal no HSV), déficit focal (afasia, hemiparesia), rebaixamento progressivo." },
      { id: "diagnosis", title: "Diagnóstico", content: "RM encéfalo (hipersinal temporal no HSV). LCR: PCR HSV (sensibilidade 98%), celularidade, proteína, glicose. EEG (descargas temporais periódicas). TC pode ser normal no início." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "Meningite bacteriana, abscesso cerebral, AVC, encefalite autoimune (anti-NMDA), estado de mal epiléptico não convulsivo, encefalopatia metabólica, vasculite SNC." },
      { id: "conduct", title: "Conduta", content: "ACICLOVIR EMPÍRICO IMEDIATO (não esperar PCR!):\n• 10 mg/kg IV 8/8h por 14-21 dias\n• Iniciar na suspeita clínica\n• Se PCR HSV negativo em 72h + RM normal: considerar suspender\n\nAnticonvulsivantes: Fenitoína ou Levetiracetam se convulsão.\nControle de PIC: cabeceira 30°, manitol SN.\nUTI se rebaixamento." },
      { id: "followup", title: "Acompanhamento", content: "RM controle. LCR de controle (PCR HSV deve negativar). Reabilitação neuropsicológica. Sequelas: amnésia, afasia, epilepsia (30-50%), alteração comportamental." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Aciclovir 10 mg/kg IV 8/8h (14-21 dias). Fenitoína 20 mg/kg IV ataque → 100 mg 8/8h. Levetiracetam 500-1000 mg IV 12/12h. Manitol 20% 0,5-1 g/kg IV se HIC. Dexametasona: controverso (considerar se edema intenso)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Aciclovir 10 mg/kg IV 8/8h\n2. Fenitoína 20 mg/kg IV (ataque) se convulsão\n3. Cabeceira 30°\n4. RM encéfalo urgente\n5. LCR: PCR HSV, celularidade, bioquímica\n6. Monitorização + UTI se rebaixado\n7. Hidratação vigorosa (prevenir nefrotoxicidade)" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Tunkel AR et al. IDSA Encephalitis Guidelines. Clin Infect Dis 2008.\n2. Venkatesan A et al. Lancet Neurol 2019.\n3. Solomon T et al. Lancet 2012." }
    ]
  },
  {
    id: "pneumonia-grave-emergencia",
    title: "Pneumonia Grave",
    categoryId: "infectious",
    sections: [
      { id: "intro", title: "Introdução", content: "Pneumonia adquirida na comunidade (PAC) grave é definida por critérios ATS/IDSA: necessidade de VM ou choque séptico (maiores), ou ≥ 3 critérios menores. Mortalidade de 20-50%. ATB combinado em < 4h reduz mortalidade." },
      { id: "def", title: "Definição", content: "PAC grave (ATS/IDSA):\nCritérios maiores: VM invasiva ou choque séptico com vasopressor.\nCritérios menores (≥ 3): FR ≥ 30, PaO2/FiO2 ≤ 250, infiltrado multilobar, confusão, ureia > 20, leucopenia, trombocitopenia, hipotermia, hipotensão.\nPSI V ou CURB-65 ≥ 3 → UTI." },
      { id: "screening", title: "Rastreamento e Identificação", content: "CURB-65: Confusão, Ureia > 50, FR ≥ 30, PA < 90/60, ≥ 65 anos. ≥ 3 = grave (UTI)." },
      { id: "etiology", title: "Etiologia", content: "S. pneumoniae (principal), Legionella, S. aureus, gram-negativos (Klebsiella), H. influenzae, atípicos (Mycoplasma, Chlamydia). Influenza A/B, SARS-CoV-2." },
      { id: "clinical", title: "Apresentação Clínica", content: "Febre, tosse produtiva, dispneia, dor pleurítica, taquipneia, hipoxemia, confusão (idosos), consolidação (MV reduzido, estertores, macicez)." },
      { id: "diagnosis", title: "Diagnóstico", content: "RX tórax (consolidação), TC se dúvida, gasometria, hemograma, PCR, procalcitonina, hemoculturas (2 pares), antígeno urinário (pneumococo e Legionella), escarro (bacterioscopia + cultura), PCR para vírus respiratórios." },
      { id: "differential", title: "Diagnóstico Diferencial", content: "TEP, ICC descompensada, hemorragia alveolar, pneumonite química, TB, câncer de pulmão, pneumonia por aspiração." },
      { id: "conduct", title: "Conduta", content: "ATB para PAC grave:\n• Betalactâmico (Ceftriaxona 2g IV ou Ampicilina/Sulbactam 3g IV) + Macrolídeo (Azitromicina 500 mg IV)\n• OU Betalactâmico + Fluoroquinolona respiratória (Levofloxacino 750 mg IV)\n\nSe aspiração: Amoxicilina/Clavulanato ou Clindamicina + Ceftriaxona.\nSe MRSA: + Vancomicina ou Linezolida.\nSuporte: O2 para SpO2 ≥ 92%, VNI/VM se necessário, volume com cautela." },
      { id: "followup", title: "Acompanhamento", content: "Reavaliar ATB em 48-72h. Descalonamento com culturas. Duração: 5-7 dias (maioria), 14 dias (Legionella, S. aureus). RX controle em 4-6 semanas." },
      { id: "treatment", title: "Abordagem Terapêutica", content: "Ceftriaxona 2g IV 1x/dia + Azitromicina 500 mg IV 1x/dia. Levofloxacino 750 mg IV 1x/dia (alternativa). Oseltamivir 75 mg VO 12/12h (se influenza). Corticoide: Metilprednisolona 0,5 mg/kg/dia IV (controverso, considerar se grave)." },
      { id: "prescriptions", title: "Guia de Prescrições", content: "1. Ceftriaxona 2g IV 1x/dia\n2. Azitromicina 500 mg IV 1x/dia\n3. O2 para SpO2 ≥ 92%\n4. Hemoculturas 2 pares\n5. Antígeno urinário (pneumococo/Legionella)\n6. Volume com cautela\n7. VNI/IOT se insuficiência respiratória\n8. UTI se PAC grave" },
      { id: "references", title: "Referências Bibliográficas", content: "1. Metlay JP et al. ATS/IDSA PAC Guidelines. Am J Respir Crit Care Med 2019.\n2. SBPT Diretrizes PAC 2022.\n3. Lim WS et al. CURB-65. Thorax 2003." }
    ]
  }
];
