import { PrescriptionItem } from "./types";

export const standardModelItems: PrescriptionItem[] = [
  {
    id: "rx-modelo-clinico",
    title: "Modelo — Paciente Clínico (Internação)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta _____ (livre / branda / leve / pastosa / líquida / zero)
2. SF 0,9% 1000mL EV — ___mL/h (ou manter acesso salinizado)
3. Dipirona 1g EV 6/6h se dor ou febre ≥37,8°C
4. Omeprazol 40mg EV 1x/dia (proteção gástrica)
5. Ondansetrona 4mg EV 8/8h se náusea/vômito
6. Enoxaparina 40mg SC 1x/dia (profilaxia TVP — se indicado)
7. Cabeceira a 30°
8. Monitorização de sinais vitais 6/6h
9. Glicemia capilar ___/___h (se DM)
10. Insulina Regular conforme protocolo (se DM)
11. Balanço hídrico (se necessário)
12. SVD / SNG — se indicado
13. _____________ (ATB / medicação específica)
14. Exames: hemograma, função renal, eletrólitos, ___
15. Comunicar intercorrências`,
    notes: "Adaptar conforme o diagnóstico. Sempre avaliar profilaxia de TVP, proteção gástrica e controle glicêmico.",
  },
  {
    id: "rx-modelo-grave",
    title: "Modelo — Paciente Grave (UTI/Sala Vermelha)",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero (até reavaliação)
2. SF 0,9% 1000mL EV — manter acesso (2 acessos calibrosos)
3. IOT + VM: Modo ___  |  FiO2 ___  |  PEEP ___  |  VC ___
4. Sedação: Midazolam ___mg/h + Fentanil ___mcg/h em BIC
5. Noradrenalina ___mcg/kg/min em BIC (se choque)
6. ATB: _________________________ (conforme foco)
7. Dipirona 1g EV 6/6h se febre
8. Omeprazol 40mg EV 1x/dia
9. Enoxaparina 40mg SC 1x/dia (se não contraindicado)
10. SVD — controle de diurese (alvo ≥0,5mL/kg/h)
11. SNG aberta (ou dieta enteral conforme avaliação)
12. Glicemia capilar 4/4h — Insulina Regular conforme protocolo
13. Monitorização contínua: ECG, PA invasiva, SpO2, capnografia
14. Gasometria arterial ___/___h
15. Exames: hemograma, função renal, lactato, coagulograma
16. Balanço hídrico rigoroso
17. Cabeceira 30-45°
18. Aspiração traqueal conforme necessidade
19. RASS alvo: ___ (-2 a -3)
20. Comunicar intercorrências IMEDIATAMENTE`,
  },
  {
    id: "rx-modelo-dor",
    title: "Modelo — Paciente com Dor",
    type: "Prescrição Padrão",
    prescription: `1. Avaliar EVA (Escala Visual Analógica): ___/10
2. Dipirona 1g EV 6/6h
3. Cetoprofeno 100mg EV 12/12h (se não CI)
4. Tramadol 50-100mg EV 8/8h (se EVA ≥5)
5. OU Morfina 2-4mg EV lento (se EVA ≥7)
6. Ondansetrona 4mg EV 8/8h (profilaxia náusea se opioide)
7. Buscopan Composto 1 amp EV 8/8h (se cólica)
8. SF 0,9% 500mL EV
9. Reavaliar dor em 30 min após medicação
10. Ajustar escalonamento conforme EVA`,
    notes: "Analgesia multimodal é mais eficaz. Associar diferentes classes.",
  },
  {
    id: "rx-modelo-febril",
    title: "Modelo — Paciente Febril",
    type: "Prescrição Padrão",
    prescription: `1. Aferir Tax axilar/timpânica — se ≥37,8°C:
2. Dipirona 1g EV 6/6h
3. OU Paracetamol 750mg VO 6/6h
4. Medidas físicas: compressas mornas
5. SF 0,9% 1000mL EV (hidratação)
6. Investigar foco:
   - Hemograma, PCR, hemocultura (2 pares)
   - EAS + urocultura
   - RX tórax
   - Outros conforme suspeita
7. Se sepse: iniciar ATB empírico na 1ª hora
8. Monitorar: sinais vitais 4/4h, lactato se suspeita de sepse`,
  },
  {
    id: "rx-modelo-vomito",
    title: "Modelo — Paciente com Vômito",
    type: "Prescrição Padrão",
    prescription: `1. Dieta zero até melhora dos vômitos
2. SF 0,9% 1000mL EV (reposição volêmica)
3. Ondansetrona 4mg EV 8/8h (1ª escolha)
4. OU Metoclopramida 10mg EV 8/8h
5. Omeprazol 40mg EV 1x/dia (se origem gástrica)
6. Glicemia capilar (hipoglicemia)
7. Eletrólitos: Na+, K+, Mg2+ (repor se necessário)
8. Avaliar causa: gastroenterite, obstrução, SNC, medicamentos, gestação
9. βHCG se mulher em idade fértil
10. Após melhora: dieta líquida → branda progressiva`,
  },
  {
    id: "rx-modelo-septico",
    title: "Modelo — Paciente Séptico",
    type: "Prescrição Padrão",
    prescription: `BUNDLE 1ª HORA:
1. Lactato arterial (repetir se >2)
2. Hemoculturas 2 pares ANTES do ATB
3. ATB empírico amplo espectro:
   Foco pulmonar: Ceftriaxona + Azitromicina
   Foco abdominal: Ceftriaxona + Metronidazol OU Piperacilina-Taz
   Foco urinário: Ceftriaxona
   Foco desconhecido: Piperacilina-Taz OU Meropenem
4. SF 0,9% 30mL/kg EV em 3h (se hipotensão ou lactato ≥4)
5. Noradrenalina se PAM <65 após volume

MONITORIZAÇÃO:
6. PA a cada 15 min (invasiva se disponível)
7. SVD — alvo diurese ≥0,5mL/kg/h
8. Gasometria + lactato a cada 2-4h
9. Hemograma, PCR, função renal, coagulograma
10. Balanço hídrico rigoroso
11. RASS se sedado
12. Reavaliar ATB em 48-72h com resultado de culturas`,
    guideline: "SSC 2021",
  },
];
