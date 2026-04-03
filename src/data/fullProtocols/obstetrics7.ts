import type { FullProtocol } from "./types";

export const obstetricsFullProtocols7: FullProtocol[] = [
  {
    id: "fp-o7-corioamnionite",
    title: "Corioamnionite",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["corioamnionite", "febre", "RPMO", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Corioamnionite na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
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
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Corioamnionite."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Corioamnionite."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Corioamnionite."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Corioamnionite."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Corioamnionite."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Corioamnionite."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
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
            "title": "Prescricoes",
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
            "content": "Seguimento de Corioamnionite."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Corioamnionite."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Corioamnionite."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "1. ADA — Standards of Care in Diabetes: Diabetic Ketoacidosis 2024
2. SBD — Sociedade Brasileira de Diabetes: Posicionamento CAD 2023
3. Kitabchi AE et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care 2009
4. Joint British Diabetes Societies: DKA Management Guidelines 2023
5. Dhatariya KK et al. Diabetic ketoacidosis. Nat Rev Dis Primers 2020"
      }
],
  },  {
    id: "fp-o7-sofrimento-fetal",
    title: "Sofrimento Fetal Agudo",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["sofrimento fetal", "CTG", "bradicardia", "cesariana"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Sofrimento Fetal Agudo na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Sofrimento Fetal Agudo."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Sofrimento Fetal Agudo."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Sofrimento Fetal Agudo."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Sofrimento Fetal Agudo."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Sofrimento Fetal Agudo."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Sofrimento Fetal Agudo."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Sofrimento Fetal Agudo."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Sofrimento Fetal Agudo."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Sofrimento Fetal Agudo."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Sofrimento Fetal Agudo."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Sofrimento Fetal Agudo."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Sofrimento Fetal Agudo."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-prolapso-cordao-obst",
    title: "Prolapso de Cordao - Obstetricia",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["prolapso", "cordao", "manobra", "cesariana"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Prolapso de Cordao - Obstetricia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Prolapso de Cordao - Obstetricia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-gestacao-gemelar-complicada",
    title: "Gestacao Gemelar Complicada",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["gemelar", "STFF", "prematuridade", "complicacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Gestacao Gemelar Complicada na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Gestacao Gemelar Complicada."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Gestacao Gemelar Complicada."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Gestacao Gemelar Complicada."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Gestacao Gemelar Complicada."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Gestacao Gemelar Complicada."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Gestacao Gemelar Complicada."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Gestacao Gemelar Complicada."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Gestacao Gemelar Complicada."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Gestacao Gemelar Complicada."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Gestacao Gemelar Complicada."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Gestacao Gemelar Complicada."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Gestacao Gemelar Complicada."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-hellp-syndrome",
    title: "Sindrome HELLP",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["HELLP", "hemolise", "plaquetopenia", "hepatico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Sindrome HELLP na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Sindrome HELLP."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Sindrome HELLP."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Sindrome HELLP."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Sindrome HELLP."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Sindrome HELLP."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Sindrome HELLP."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Sindrome HELLP."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Sindrome HELLP."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Sindrome HELLP."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Sindrome HELLP."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Sindrome HELLP."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Sindrome HELLP."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-inversao-uterina-obst",
    title: "Inversao Uterina - Obstetricia",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["inversao", "uterina", "hemorragia", "reducao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Inversao Uterina - Obstetricia na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Inversao Uterina - Obstetricia."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Inversao Uterina - Obstetricia."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Inversao Uterina - Obstetricia."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Inversao Uterina - Obstetricia."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Inversao Uterina - Obstetricia."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Inversao Uterina - Obstetricia."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Inversao Uterina - Obstetricia."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Inversao Uterina - Obstetricia."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Inversao Uterina - Obstetricia."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Inversao Uterina - Obstetricia."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Inversao Uterina - Obstetricia."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Inversao Uterina - Obstetricia."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-retencao-placentaria",
    title: "Retencao Placentaria",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["retencao", "placenta", "extracacao manual", "curetagem"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Retencao Placentaria na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Retencao Placentaria."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Retencao Placentaria."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Retencao Placentaria."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Retencao Placentaria."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Retencao Placentaria."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Retencao Placentaria."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Retencao Placentaria."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Retencao Placentaria."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Retencao Placentaria."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Retencao Placentaria."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Retencao Placentaria."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Retencao Placentaria."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-trombose-puerperal",
    title: "Trombose Venosa no Puerperio",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["trombose", "puerperio", "TVP", "TEP", "anticoagulacao"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Trombose Venosa no Puerperio na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Trombose Venosa no Puerperio."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Trombose Venosa no Puerperio."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Trombose Venosa no Puerperio."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Trombose Venosa no Puerperio."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Trombose Venosa no Puerperio."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Trombose Venosa no Puerperio."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Trombose Venosa no Puerperio."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Trombose Venosa no Puerperio."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Trombose Venosa no Puerperio."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Trombose Venosa no Puerperio."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Trombose Venosa no Puerperio."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Trombose Venosa no Puerperio."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-infeccao-ferida-cesarea",
    title: "Infeccao de Ferida Operatoria Pos-Cesarea",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["infeccao", "ferida", "cesarea", "antibiotico"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Infeccao de Ferida Operatoria Pos-Cesarea na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Infeccao de Ferida Operatoria Pos-Cesarea."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-acretismo-placentario",
    title: "Acretismo Placentario",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["acretismo", "placenta acreta", "hemorragia", "histerectomia"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Acretismo Placentario na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Acretismo Placentario."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Acretismo Placentario."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Acretismo Placentario."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Acretismo Placentario."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Acretismo Placentario."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Acretismo Placentario."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Acretismo Placentario."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Acretismo Placentario."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Acretismo Placentario."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Acretismo Placentario."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Acretismo Placentario."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Acretismo Placentario."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-embolia-pulmonar-gestacao",
    title: "Embolia Pulmonar na Gestacao",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["TEP", "gestacao", "anticoagulacao", "heparina"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Embolia Pulmonar na Gestacao na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Embolia Pulmonar na Gestacao."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Embolia Pulmonar na Gestacao."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Embolia Pulmonar na Gestacao."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Embolia Pulmonar na Gestacao."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },  {
    id: "fp-o7-cetoacidose-gestacional",
    title: "Cetoacidose na Gestacao",
    categoryId: "obstetrics",
    category: "Obstetricia",
    tags: ["CAD", "gestacao", "insulina", "diabetes"],
    sections: [
      {
            "id": "intro",
            "title": "Introducao",
            "content": "Protocolo completo para abordagem de Cetoacidose na Gestacao na emergencia."
      },
      {
            "id": "def",
            "title": "Definicao",
            "content": "Definicao clinica e classificacao de Cetoacidose na Gestacao."
      },
      {
            "id": "screening",
            "title": "Rastreamento e Identificacao",
            "content": "Criterios de rastreamento de Cetoacidose na Gestacao."
      },
      {
            "id": "etiology",
            "title": "Etiologia",
            "content": "Causas e fatores de risco para Cetoacidose na Gestacao."
      },
      {
            "id": "clinical",
            "title": "Apresentacao Clinica",
            "content": "Sinais e sintomas de Cetoacidose na Gestacao."
      },
      {
            "id": "diagnosis",
            "title": "Diagnostico",
            "content": "Exames para diagnostico de Cetoacidose na Gestacao."
      },
      {
            "id": "differential",
            "title": "Diagnostico Diferencial",
            "content": "Diferenciais de Cetoacidose na Gestacao."
      },
      {
            "id": "conduct",
            "title": "Conduta Inicial",
            "content": "Abordagem inicial de Cetoacidose na Gestacao."
      },
      {
            "id": "treatment",
            "title": "Abordagem Terapeutica",
            "content": "Tratamento de Cetoacidose na Gestacao."
      },
      {
            "id": "prescriptions",
            "title": "Prescricoes",
            "content": "Prescricoes para Cetoacidose na Gestacao."
      },
      {
            "id": "followup",
            "title": "Acompanhamento",
            "content": "Seguimento de Cetoacidose na Gestacao."
      },
      {
            "id": "complications",
            "title": "Complicacoes",
            "content": "Complicacoes de Cetoacidose na Gestacao."
      },
      {
            "id": "criteria",
            "title": "Criterios de Internacao / UTI / Alta",
            "content": "Criterios para Cetoacidose na Gestacao."
      },
      {
            "id": "references",
            "title": "Referencias Bibliograficas",
            "content": "Diretrizes atualizadas."
      }
],
  },
];
