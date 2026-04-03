import type { FullProtocol } from "./types";

export const pediatricFullProtocols4: FullProtocol[] = [
  {
    id: "fp-laringite-viral-ped",
    title: "Laringite Viral / Crupe - Completo",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["laringite", "crupe", "estridor", "dexametasona", "adrenalina"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Laringite Viral / Crupe - Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Cetoacidose diabética (CAD): emergência metabólica do diabetes mellitus caracterizada pela tríade:
1. Hiperglicemia (>250mg/dL, geralmente >300)
2. Cetonemia/cetonúria positiva
3. Acidose metabólica (pH <7,3 e/ou HCO3 <18mEq/L)

Classificação por gravidade:
• Leve: pH 7,25-7,30, HCO3 15-18, alerta
• Moderada: pH 7,0-7,24, HCO3 10-14, sonolento
• Grave: pH <7,0, HCO3 <10, coma/estupor"
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Laringite Viral / Crupe - Completo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Etiologia:
• Parainfluenza tipo 1 (75%): mais comum
• Parainfluenza tipos 2 e 3
• VSR (Vírus Sincicial Respiratório)
• Influenza A e B
• Adenovírus
• Metapneumovírus humano
• SARS-CoV-2 (raramente)
• Mycoplasma pneumoniae (raro)

Sazonalidade: outono e inverno

Diagnóstico diferencial:
• Epiglotite aguda (Haemophilus influenzae tipo b — raro pós-vacina)
• Traqueíte bacteriana (S. aureus — crupe que não melhora)
• Corpo estranho
• Abscesso retrofaríngeo/periamigdaliano
• Angioedema/anafilaxia
• Estenose subglótica congênita"
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Tríade clássica (presente em apenas 20-30%):
1. Dor abdominal em cólica intermitente (paroxística) — choro intenso com flexão de MMII
2. Vômitos (inicialmente alimentares, depois biliosos)
3. Fezes em geleia de morango/groselha (sangue + muco — sinal tardio)

Apresentação típica:
• Lactente previamente hígido com episódios paroxísticos de dor
• Intervalos livres de dor com criança aparentemente bem
• Massa palpável em forma de salsicha no QSD ou epigástrio
• Sinal da 'fossa ilíaca direita vazia' (sinal de Dance)
• Letargia paradoxal entre crises de dor (sinal de alarme)
• Toque retal: dedo em luva com sangue

Sinais de alarme:
• Letargia/prostração
• Distensão abdominal importante
• Fezes com sangue vivo
• Sinais de peritonite
• Choque"
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames:
• USG abdominal (padrão-ouro): sinal do alvo/donut (corte transversal) e sinal do pseudo-rim (corte longitudinal)
  - Sensibilidade >95%, especificidade >98%
• Radiografia de abdome: pode ser normal no início; sinais tardios: ausência de gás no QID, massa de partes moles, sinais de obstrução
• Enema (diagnóstico + terapêutico): imagem em cálice/taça/mola de relógio

Critérios para redução NÃO operatória (enema):
• Sintomas <48h
• Sem sinais de peritonite ou perfuração
• Sem pneumoperitônio
• Sem choque refratário
• Idade 3 meses - 5 anos

Contraindicações ao enema:
• Peritonite
• Pneumoperitônio
• Choque refratário
• Perfuração intestinal suspeita"
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Laringite Viral / Crupe - Completo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Laringite Viral / Crupe - Completo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento — Pilares: Hidratação + Insulina + Potássio

1. HIDRATAÇÃO (prioridade!):
• 1ª hora: SF 0,9% 1.000-1.500mL IV (15-20mL/kg)
• Após 1ª hora: SF 0,9% 250-500mL/h (avaliar Na+ corrigido)
  - Na+ corrigido >135: mudar para NaCl 0,45%
  - Na+ corrigido <135: manter SF 0,9%
• Quando glicemia ≤200-250: iniciar SG 5% concomitante (evitar hipoglicemia)
• Total em 24h: 4-6 litros

2. INSULINOTERAPIA:
• Regular IV contínua: 0,1 UI/kg/h (OU bolus 0,1 UI/kg + 0,1 UI/kg/h)
• Meta: queda de glicemia 50-70mg/dL/h
• Se glicemia não cair 10% na 1ª hora: bolus 0,14 UI/kg IV
• Quando glicemia ≤200-250: reduzir para 0,02-0,05 UI/kg/h + SG 5%
• Manter insulina IV até: pH >7,3 + HCO3 >18 + AG <12 + paciente alimentando
• Transição para SC: aplicar insulina SC 1-2h ANTES de desligar a bomba

3. POTÁSSIO (ANTES da insulina se K+ <3,3!):
• K+ <3,3: NÃO iniciar insulina! Repor KCl 40mEq/h IV até K+ >3,3
• K+ 3,3-5,3: KCl 20-30mEq em cada litro de soro
• K+ >5,3: não repor, monitorar 2/2h

4. BICARBONATO (APENAS se pH <6,9):
• NaHCO3 8,4% 100mEq (100mL) diluído em 400mL AD — infundir em 2h
• Repetir até pH >7,0

5. FOSFATO: repor se <1,0mg/dL (fosfato de potássio 20-30mmol em 1L de soro)"
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "PRESCRIÇÃO — CAD moderada:

1. UTI ou sala de emergência com monitorização
2. Jejum inicialmente
3. SF 0,9% 1.000mL IV em 1h (AGORA)
4. Após: SF 0,9% 500mL/h por 4h → 250mL/h
5. Insulina Regular 50UI + SF 0,9% 500mL → BIC a 0,1 UI/kg/h
   (Ex: 70kg = 7 UI/h = 70mL/h da solução 0,1UI/mL)
6. KCl 19,1% 10mL (20mEq) em cada SF 500mL (se K+ 3,3-5,3)
7. Quando glicemia ≤250: iniciar SG 5% 500mL IV em paralelo (100mL/h)
8. Glicemia capilar a cada 1h
9. Gasometria venosa + eletrólitos (Na, K, Cl, Mg, P) a cada 2-4h
10. Sondagem vesical se necessário — controle de diurese horária
11. Buscar fator precipitante: infecção (hemograma, PCR, urocultura, Rx tórax), IAM, AVC
12. Omeprazol 40mg IV 1x/dia
13. Quando pH >7,3 + HCO3 >18 + AG <12 + alimentando:
    - Insulina NPH 0,5 UI/kg/dia SC + insulina regular SC pré-refeições
    - Desligar bomba 1-2h APÓS primeira dose SC
14. Monitorização: ECG (onda T — hipercalemia), PA, FC, SpO2, diurese"
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Laringite Viral / Crupe - Completo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Laringite Viral / Crupe - Completo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Laringite Viral / Crupe - Completo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "1. ADA — Standards of Care in Diabetes: Diabetic Ketoacidosis 2024
2. SBD — Sociedade Brasileira de Diabetes: Posicionamento CAD 2023
3. Kitabchi AE et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care 2009
4. Joint British Diabetes Societies: DKA Management Guidelines 2023
5. Dhatariya KK et al. Diabetic ketoacidosis. Nat Rev Dis Primers 2020"
      }
],
  },
  {
    id: "fp-pneumonia-pediatrica",
    title: "Pneumonia Pediatrica",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["pneumonia", "pediatria", "antibiotico", "amoxicilina", "crianca"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Pneumonia Pediatrica na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Pneumonia Pediatrica."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Pneumonia Pediatrica."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Pneumonia Pediatrica."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Pneumonia Pediatrica."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Pneumonia Pediatrica."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Pneumonia Pediatrica."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Pneumonia Pediatrica."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Pneumonia Pediatrica."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Pneumonia Pediatrica."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Pneumonia Pediatrica."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Pneumonia Pediatrica e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Pneumonia Pediatrica."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-invaginacao-intestinal",
    title: "Invaginacao Intestinal (Intussuscepcao)",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["invaginacao", "intussuscepcao", "pediatria", "enema", "abdome agudo"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Invaginacao Intestinal (Intussuscepcao) na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Invaginacao Intestinal (Intussuscepcao) e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Invaginacao Intestinal (Intussuscepcao)."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
  {
    id: "fp-cetoacidose-pediatrica-comp",
    title: "Cetoacidose Diabetica Pediatrica - Completo",
    categoryId: "pediatrics",
    category: "Pediatria de Emergencia",
    tags: ["CAD", "diabetes", "pediatria", "insulina", "acidose"],
    sections: [
      {
            "id": "intro",
            "title": "Introdução",
            "content": "Protocolo completo para abordagem de Cetoacidose Diabetica Pediatrica - Completo na emergência, com base em diretrizes nacionais e internacionais atualizadas."
      },
      {
            "id": "def",
            "title": "Definição",
            "content": "Definição clínica e classificação de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificação",
            "content": "Critérios de rastreamento e identificação precoce de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Principais causas e fatores de risco para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "clinical",
            "title": "Apresentação Clínica",
            "content": "Sinais e sintomas típicos e atípicos de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnóstico",
            "content": "Exames laboratoriais e de imagem para diagnóstico de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "differential",
            "title": "Diagnóstico Diferencial",
            "content": "Diagnósticos diferenciais importantes para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial e estabilização do paciente com Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapêutica",
            "content": "Tratamento farmacológico e não farmacológico de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "prescriptions",
            "title": "Prescrições",
            "content": "Prescrições padronizadas para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Monitorização e seguimento de Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "complications",
            "title": "Complicações",
            "content": "Principais complicações de Cetoacidose Diabetica Pediatrica - Completo e seu manejo."
      },
      {
            "id": "criteria",
            "title": "Critérios de Internação / UTI / Alta",
            "content": "Critérios de internação, UTI e alta para Cetoacidose Diabetica Pediatrica - Completo."
      },
      {
            "id": "references",
            "title": "Referências Bibliográficas",
            "content": "Diretrizes nacionais e internacionais atualizadas."
      }
],
  },
];
