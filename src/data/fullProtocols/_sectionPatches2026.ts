/**
 * Reescrita editorial PULSO 2026 das seções clínicas dos 10 protocolos
 * de maior impacto, conforme diretrizes 2024-2026 (SSC, AHA/ACC, ESC,
 * AHA/ASA, ESO, ERC, GINA, GOLD, ACOG, FIGO, MS Brasil, SBC, SBPT, ILAS).
 *
 * Aplicado em runtime por `applySectionPatches2026()` em index.ts:
 * - substitui o `content` das seções listadas por id (Map por sectionId)
 * - mantém todas as demais seções intactas
 * - atualiza `lastReviewed` para "2026-03"
 *
 * Filosofia: priorizamos `conduct`, `treatment` e `prescriptions` —
 * seções onde as diretrizes mais mudaram nos últimos 24 meses.
 */

export interface SectionPatch2026 {
  protocolId: string;
  lastReviewed: string;
  sections: Record<string, string>;
}

export const SECTION_PATCHES_2026: SectionPatch2026[] = [
  // ==================== 1. SEPSE / CHOQUE SÉPTICO ====================
  {
    protocolId: "fp-sepse-choque",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Bundle de 1 hora (SSC 2026 — publicada 23/mar/2026 + ILAS 2025) — iniciar em paralelo:**

> 🆕 **Atualização SSC 2026:** triagem com **NEWS / NEW2 / MEWS / SIRS** preferencial sobre qSOFA (recomendação forte). Em sepse **provável/definida** (com OU sem choque): ATB em ≤1 h. Em sepse **possível** sem choque: investigação rápida + ATB em ≤3 h se persistir suspeita. Cristaloide **balanceado** sobre SF 0,9% (exceto TCE). Iniciar **noradrenalina em veia periférica** sem aguardar acesso central. PAM alvo **65 mmHg** (60-65 se ≥65 anos).

1. **Lactato sérico** — repetir em 2-4 h se inicial >2 mmol/L. Meta: clareamento ≥10%/h.
2. **Hemoculturas (2 pares) ANTES do antibiótico** — não atrasar ATB >45 min para colher.
3. **Antibiótico de amplo espectro EV em ≤1 h** (sepse provável/definida) — janela "door-to-antibiotic" auditada.
4. **Cristaloide balanceado 30 mL/kg em 3 h** (Ringer lactato/Plasma-Lyte preferenciais — PLUS, BaSICS, SMART).
5. **Noradrenalina precoce em veia periférica** para PAM ≥65 mmHg, sem aguardar acesso central.
6. **Reavaliação dinâmica de fluidoresponsividade** (elevação passiva de pernas, ΔPP, VTI aórtico, POCUS) — evitar sobrecarga.

**Foco infeccioso — controle em ≤6 h (SSC 2026):** drenagem de abscessos, retirada de cateteres infectados, desbridamento cirúrgico (fasciite), CPRE em colangite.`,

      treatment: `**Antibioticoterapia empírica (ajustar por foco e ecologia local):**
- Foco indeterminado / nosocomial: piperacilina-tazobactam 4,5 g 6/6 h **OU** meropeném 1 g 8/8 h.
- Suspeita de MRSA (cateter, pele/partes moles, ICS): adicionar vancomicina (alvo vale 15-20 mg/L) ou linezolida 600 mg 12/12 h.
- Choque séptico de origem comunitária pulmonar grave: ceftriaxona 2 g + azitromicina 500 mg.
- 🆕 **SSC 2026 (forte):** **infusão prolongada de β-lactâmico** após dose de ataque (vs bólus) — reduz mortalidade.
- Descalonar em 48-72 h conforme cultura/PCR multiplex; duração 7-10 dias na maioria.

**Suporte hemodinâmico (SSC 2026):**
- Noradrenalina 0,05-1 mcg/kg/min titulada para PAM ≥65 (60-65 se ≥65 anos; 80-85 em hipertensos crônicos — SEPSISPAM).
- **Vasopressina 0,03 U/min fixa** quando NA escala (>0,25-0,5 mcg/kg/min) — VANISH/VASST.
- **Adrenalina** como 3ª linha; angiotensina II em refratário.
- **Hidrocortisona 200 mg/dia EV** em choque refratário ao vasopressor (ADRENAL, APROCCHSS).
- 🆕 **Contra (SSC 2026):** terlipressina, beta-bloqueadores em choque, levosimendana.

**Ventilação (SSC 2026):**
- IRpA hipoxêmica não intubada → **HFNC preferencial sobre VNI**; **awake proning** sugerido.
- SDRA → VT 6 mL/kg, Pplatô ≤30, PEEP titulada (mais alta em moderada-grave), prona >12 h se PaO₂/FiO₂ <150, NMBA em bólus intermitente (não infusão contínua), ECMO V-V em centros experientes.

**🆕 Outras atualizações SSC 2026:**
- **Transfusão restritiva** (Hb alvo 7 g/dL).
- **Insulina** se glicemia ≥180 mg/dL (alvo 140-180).
- **LMWH > HNF** para profilaxia TEV (forte).
- **Remoção ativa de fluidos** após fase de ressuscitação (diuréticos; ultrafiltração se refratário).
- **Nutrição enteral precoce** (≤72 h).
- **Goals of care** discutidos em ≤72 h.

**Não recomendado (SSC 2026):** vitamina C, vitamina D, IgIV, hemoperfusão, polimixina B, plasmaférese, antipiréticos rotineiros, probióticos, bicarbonato (exceto pH ≤7,2 + IRA AKIN 2-3).`,

      prescriptions: `\`\`\`
1. Ringer lactato 1.000 mL EV em 30 min — repetir até 30 mL/kg em 3 h, reavaliando responsividade.
2. Ceftriaxona 2 g EV agora (foco comunitário) — OU piperacilina-tazobactam 4,5 g EV em 30 min (nosocomial).
3. Vancomicina 25-30 mg/kg EV em 90 min (dose ataque) se suspeita de MRSA — manutenção 15-20 mg/kg 12/12 h ajustada por nível.
4. Noradrenalina 16 mg em SF 0,9% 250 mL (64 mcg/mL) — iniciar 0,05 mcg/kg/min EV em BIC, titular para PAM ≥65 mmHg.
5. Hidrocortisona 50 mg EV 6/6 h se choque refratário (NA >0,25 mcg/kg/min).
6. Insulina regular EV em BIC se glicemia >180 mg/dL — meta 140-180.
7. Enoxaparina 40 mg SC 1×/dia (profilaxia TEV) se sem sangramento.
8. Pantoprazol 40 mg EV 1×/dia (profilaxia úlcera de estresse) em VM ou coagulopatia.
9. Lactato sérico, gasometria arterial, hemograma, função renal e hepática, PCR, procalcitonina — agora e em 6 h.
10. 2 pares de hemoculturas + cultura de foco (urina, escarro, líquor, secreção) ANTES do ATB.
\`\`\``,

      complications: `- **Disfunção orgânica múltipla (MODS):** monitorar SOFA diariamente.
- **SDRA:** 30-50% dos choques sépticos — VM protetora obrigatória.
- **IRA séptica:** evitar nefrotóxicos; TRR contínua se KDIGO 3 + sobrecarga refratária.
- **Coagulopatia / CIVD:** transfundir plaquetas se <20 mil (ou <50 mil com sangramento), PFC 10-15 mL/kg se INR >1,5 com sangramento.
- **Polineuropatia/miopatia do doente crítico:** mobilização precoce, evitar sedação profunda.
- **Mortalidade:** 30-50% no choque séptico; cada 1 h de atraso de ATB = +7% de mortalidade.`,
    },
  },

  // ==================== 2. IAM COM SUPRA DE ST ====================
  {
    protocolId: "fp-iam-supra",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Tempos críticos (ESC 2023, AHA/ACC/SCAI 2025, SBC 2025):**
- **Primeiro contato médico → ECG: ≤10 min.**
- **Porta-balão: ≤90 min** (centro com hemodinâmica) ou **≤120 min** (transferência).
- **Porta-agulha (fibrinólise): ≤30 min** quando ICP indisponível em 120 min.
- Janela total de reperfusão: até 12 h do início dos sintomas (considerar até 24 h se isquemia persistente / instabilidade).

**Estratégia de reperfusão:**
1. **ICP primária preferencial** sempre que disponível em janela.
2. **Fibrinólise** (tenecteplase peso-ajustada — preferencial sobre alteplase) se ICP fora da janela.
3. Após fibrinólise: **transferência imediata para angio em 3-24 h** (estratégia fármaco-invasiva).

**MONABCH adaptado 2026:** O₂ apenas se SpO₂ <90% (evitar hiperóxia — AVOID), AAS 300 mg mastigado, P2Y12 (preferencial prasugrel/ticagrelor), anticoagulação, nitrato se PAS >100 e sem IAM de VD/uso de iPDE5, morfina apenas se dor refratária (interfere absorção P2Y12).`,

      treatment: `**Antiplaquetários (DAPT 12 meses pós-stent farmacológico):**
- **AAS 300 mg VO ataque → 100 mg/dia.**
- **Ticagrelor 180 mg VO ataque → 90 mg 12/12 h** (preferencial em ICP primária — PLATO).
- **Prasugrel 60 mg VO ataque → 10 mg/dia** (≥60 anos, <60 kg ou AVC prévio: contraindicado/ajuste).
- Clopidogrel 600 mg → 75 mg/dia se ticagrelor/prasugrel contraindicados ou em fibrinólise (300 mg se ≥75 anos).

**Anticoagulação:**
- ICP primária: **enoxaparina 0,5 mg/kg EV bolus** OU heparina não fracionada 70-100 U/kg (ajustar por TCA).
- Fibrinólise: enoxaparina 30 mg EV + 1 mg/kg SC 12/12 h por 8 dias / até alta.

**Fibrinólise (tenecteplase peso-ajustada — TNK):**
- <60 kg: 30 mg | 60-69: 35 | 70-79: 40 | 80-89: 45 | ≥90 kg: 50 mg EV em bolus único.
- Reduzir 50% se ≥75 anos (STREAM).

**Adjuvantes precoces:**
- **Estatina alta intensidade**: atorvastatina 80 mg ou rosuvastatina 20-40 mg.
- **β-bloqueador VO** nas primeiras 24 h se sem ICC aguda, choque ou Killip ≥II.
- **iECA/BRA** nas primeiras 24 h se FEVE <40%, IAM anterior, DM, HAS.
- **Espironolactona 25 mg/dia** se FEVE ≤40% + IC ou DM (EPHESUS).

**Choque cardiogênico:** revascularização do vaso culpado (CULPRIT-SHOCK), suporte inotrópico (noradrenalina + dobutamina), considerar ECMO/Impella em centros experientes.`,

      prescriptions: `\`\`\`
1. AAS 300 mg VO mastigar agora → 100 mg VO 1×/dia.
2. Ticagrelor 180 mg VO ataque agora → 90 mg VO 12/12 h por 12 meses.
3. Atorvastatina 80 mg VO 1×/dia (à noite).
4. Enoxaparina 0,5 mg/kg EV bolus (em ICP) — OU 30 mg EV + 1 mg/kg SC 12/12 h (em fibrinólise).
5. Tenecteplase EV bolus único, dose por peso (ver tabela), apenas se ICP indisponível em 120 min.
6. Metoprolol tartarato 25 mg VO 12/12 h (iniciar se Killip I, FC >60, PAS >120, sem broncoespasmo).
7. Captopril 6,25 mg VO 8/8 h (titular para enalapril/losartana após estabilização) se FEVE <40% ou IAM anterior.
8. Morfina 2-4 mg EV se dor refratária (não rotina).
9. O₂ por cateter 2 L/min apenas se SpO₂ <90%.
10. Nitroglicerina 5-200 mcg/min EV se HAS, ICC ou angina persistente — contraindicado em IAM de VD ou uso de sildenafil/tadalafil <24-48 h.
11. ECG seriado (chegada, 15 min, 1 h, 6 h, 24 h) + troponina ultrassensível (chegada, 1 h, 3 h).
12. Ecocardiograma transtorácico em <24 h.
\`\`\``,
    },
  },

  // ==================== 3. AVC ISQUÊMICO ====================
  {
    protocolId: "fp-avc-isquemico",
    lastReviewed: "2026-03",
    sections: {
      diagnosis: `**Stroke Code — metas (AHA/ASA 2024, ESO 2025):**
- **Porta-TC: ≤25 min.**
- **Porta-agulha (trombólise): ≤45 min** (preferencial ≤30 min — TARGET: STROKE).
- **Porta-punção arterial (trombectomia): ≤60-90 min.**

**Imagem:**
- **TC de crânio sem contraste** — exclui hemorragia (sensibilidade ~100%).
- **AngioTC de vasos cervicais e intracranianos** — em todos os candidatos a trombectomia (oclusão de grande vaso).
- **TC de perfusão / RM-DWI/PWI (mismatch)** — guia indicação na janela estendida 6-24 h (DEFUSE-3, DAWN).

**Escalas:**
- **NIHSS** (gravidade, indicação de trombectomia se ≥6 com OGV).
- **ASPECTS** ≥6 favorece trombectomia (até ≤3 em casos selecionados — SELECT2, RESCUE-Japan LIMIT).`,

      conduct: `**Janelas terapêuticas (AHA/ASA 2026 — publicada mar/2026):**

> 🆕 **Atualização AHA/ASA 2026:** triagem pré-hospitalar de OGV com **VAN, NIHSS≥6 ou RACE≥5** (Classe 1 / LOE A) → transporte direto a centro de trombectomia. **Mobile Stroke Units** (CT + tele em ambulância) ↑30-40% reperfusão. Metas: porta-TC ≤25 min, **DTN <60 min**, **DTP <90 min**, **DIDO ≤90 min** (door-in/door-out em transferência).

| Tratamento | Janela | Critério |
|---|---|---|
| Trombólise IV (alteplase 0,9 mg/kg) | ≤4,5 h | Sem hemorragia, PA ≤185×110 |
| Trombólise IV (tenecteplase 0,25 mg/kg) | ≤4,5 h | **Equivalente/preferencial** (AcT, NOR-TEST 2, AHA/ASA 2026) |
| Trombectomia mecânica — OGV anterior | ≤24 h | NIHSS≥6, mRS pré 0-1, ASPECTS≥6 (DAWN/DEFUSE-3) |
| Trombectomia em **ASPECTS 3-5** | ≤24 h | SELECT2, ANGEL-ASPECT (Classe 1) |
| Trombectomia em **ASPECTS 0-2** | ≤24 h | LASTE — COR 2a, seleção rigorosa |
| Trombectomia em **basilar** | ≤24 h | NIHSS≥10 + PC-ASPECTS≥6 (ATTENTION/BAOCHE) |
| 🆕 Trombectomia **pediátrica** | ≤6-24 h | ≥6 anos + PedNIHSS≥6 (COR 2a — Save ChildS Pro) |

**Controle de PA (AHA/ASA 2026):**
- Antes de reperfusão: PAS <185 e PAD <110 (labetalol 10-20 mg EV; nicardipino 5-15 mg/h).
- Pós-trombólise/trombectomia: <180/105 por 24 h (sICH 3-7%).
- Sem reperfusão: tolerar até 220×120 (queda gradual ≤15% em 24 h).

**🆕 Outras medidas (AHA/ASA 2026):**
- **Disfagia rastreada em ≤4 h** da admissão (NPO até liberação) → ↓50-70% pneumonia aspirativa. Estimulação faríngea elétrica (PES) em disfagia grave.
- Glicemia 140-180 mg/dL; temperatura <37,5 °C.
- Cabeceira a 0° pré-reperfusão; 30° após.
- **Profilaxia TEV: compressão pneumática intermitente (IPC) 1ª linha** (CLOTS3); **NÃO usar meias elásticas** (úlceras de pele); LMWH após 24 h.
- **Mobilização interdisciplinar nos primeiros 3 dias, mas evitar mobilização agressiva nas primeiras 24 h** (AVERT — ↑mortalidade).
- Triagem nutricional em 24 h; SNG precoce se disfagia (preferencial sobre PEG na fase aguda).`,

      treatment: `**Trombólise IV — alteplase 0,9 mg/kg (máx 90 mg):** 10% bolus em 1 min + 90% em 60 min.
**🆕 Tenecteplase 0,25 mg/kg (máx 25 mg) bolus único — preferencial pela AHA/ASA 2026** em centros que adotaram (não fraciona dose, facilita transferência inter-hospitalar).

**Contraindicações absolutas (resumo):** hemorragia ativa, AVCh prévio em qualquer tempo, AVCi <3 meses, neoplasia/MAV intracraniana com risco hemorrágico, cirurgia/trauma cranioencefálico maior <3 meses, dissecção aórtica, plaquetas <100 mil, INR >1,7, uso de DOAC <48 h.

**Trombectomia mecânica:** stent retriever ± aspiração (técnica combinada — COMPASS/ASTER equivalentes; aspiração preferencial em anatomia tortuosa). Anestesia geral vs sedação consciente — equivalentes (AMETIS/DIRECT-MT). 🆕 **Não usar tirofiban pré-EVT** (RESCUE-BT — ↑sICH).

**Após reperfusão (AHA/ASA 2026):**
- Antiagregação simples (AAS 100-300 mg) iniciada 24 h pós-trombólise.
- 🆕 **AVCi menor (NIHSS 0-5) ou AIT alto risco: DAPT (AAS + clopidogrel 75 mg, ataque 300 mg) por 21-90 dias** (CHANCE/POINT/THALES). Em **maus metabolizadores CYP2C19**: ticagrelor.
- 🆕 **FA + AVCi (regra ELAN, não mais 1-3-6-12):** iniciar **DOAC em 24-48 h em AVCi leve/moderado**; aguardar mais em AVCi grande.
- Estatina alta intensidade (atorvastatina 80 mg).
- Investigar etiologia: ECG/Holter prolongado, ECO TT/TE, Doppler de carótidas/transcraniano.

**🆕 Não recomendado (AHA/ASA 2026):** hemodiluição, vasodilatadores, neuroprotetores, endarterectomia carotídea de urgência <48 h, anticonvulsivantes profiláticos, antipiréticos só por outcome.`,

      prescriptions: `\`\`\`
1. Alteplase 0,9 mg/kg EV (máx 90 mg) — 10% em bolus em 1 min + 90% em infusão de 60 min, se janela ≤4,5 h e sem contraindicações.
   OU Tenecteplase 0,25 mg/kg EV bolus único (máx 25 mg).
2. Labetalol 10-20 mg EV em bolus (repetir cada 10 min, máx 300 mg) para manter PA ≤185×110 antes da trombólise.
3. AAS 300 mg VO/SNE 24 h após trombólise (ou imediato se sem trombólise).
4. Atorvastatina 80 mg VO 1×/dia.
5. Enoxaparina 40 mg SC 1×/dia (profilaxia TEV) — iniciar 24 h pós-trombólise.
6. Glicemia capilar 4/4 h, insulina regular SC se >180 mg/dL.
7. Paracetamol 1 g VO/EV 6/6 h se T ≥37,5 °C.
8. Cabeceira 0° (pré-reperfusão) → 30° (pós).
9. NIHSS na admissão, 2 h, 24 h, 7 dias / alta.
10. TC de controle em 24 h pós-trombólise (antes de iniciar antiagregante/anticoagulante).
\`\`\``,
    },
  },

  // ==================== 4. PCR ADULTO ====================
  {
    protocolId: "fp-pcr-adulto",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ACLS 2025/2026 (AHA Focused Update Out/2025 + ERC 2025 + ILCOR CoSTR):**

**RCP de alta qualidade — pilar absoluto:**
- Compressões: 100-120/min, profundidade 5-6 cm, retorno torácico completo, fração ≥80%.
- Trocar compressor a cada 2 min.
- Ventilação: 1 a cada 6 s (10/min) com via aérea avançada; 30:2 sem via aérea.
- **Capnografia (EtCO₂)** obrigatória — alvo >10 mmHg; aumento súbito = RCE.

**🆕 Acesso vascular — AHA 2024/2025 (PARAMEDIC-3):** **acesso EV é a 1ª escolha absoluta** na PCR adulta (recomendação fortalecida). **Acesso IO** entra como 2ª linha **se a primeira tentativa EV falhar** ou estiver claramente impraticável — não mais "EV ou IO indistintamente". Sítio IO preferencial: úmero proximal > tíbia proximal.

**🆕 Desfibrilação em FV/TV refratária — AHA 2025:** a **mudança de vetor** (reposicionamento das pás de antero-lateral para antero-posterior) é **preferível à desfibrilação sequencial dupla (DSD)**. **DSD não é recomendada de rotina** — DOSE-VF mostrou benefício do vector change isolado, e a sobreposição de choques aumenta risco de dano ao desfibrilador e ao paciente sem ganho consistente.

**Algoritmo:**
1. **Ritmos chocáveis (FV/TV sem pulso):** desfibrilação imediata (bifásica 200 J ou conforme fabricante) → 2 min RCP → checar ritmo. Em refratariedade após 3 choques: **trocar vetor (AP) antes de considerar DSD**.
2. **Ritmos não chocáveis (AESP/assistolia):** RCP + adrenalina **o mais cedo possível** (PARAMEDIC2) — meta <5 min.
3. **Adrenalina 1 mg EV (preferencial) ou IO a cada 3-5 min** — após 2º choque em FV/TV; imediata em AESP/assistolia.
4. **Amiodarona 300 mg** EV em bolus após 3º choque → 150 mg após 5º. **Lidocaína 1-1,5 mg/kg** alternativa.
5. **Via aérea avançada:** dispositivo supraglótico (i-gel, LMA) ou IOT — não atrasar compressões; AIRWAYS-2 mantém SGA ≥ IOT em pré-hospitalar.
6. **Causas reversíveis (5H + 5T):** hipóxia, hipovolemia, H⁺ (acidose), hipo/hipercalemia, hipotermia, tensão (pneumotórax), tamponamento, toxinas, trombose (pulmonar/coronária).

**RCP extracorpórea (ECPR):** considerar em PCR refratária presenciada, ritmo chocável, <60 min de RCP, candidato selecionado em centro com ECMO (ARREST, EROCA, ARREST-ECMO 2024).`,

      treatment: `**Pós-RCE (cuidado neuroprotetor — ERC/AHA 2025):**

1. **Via aérea + ventilação:** SpO₂ 94-98%, PaCO₂ 35-45 mmHg (evitar hipocapnia).
2. **Hemodinâmica:** PAM ≥65-80 mmHg; noradrenalina + dobutamina conforme função; ECO precoce.
3. **🆕 Controle ativo de temperatura — AHA/ERC 2025/2026:** alvo é **NORMOTERMIA RIGOROSA** — manter **T central ≤ 37,5 °C e evitar ATIVAMENTE febre >37,7 °C por pelo menos 72 h** após RCE (TTM2, ILCOR 2024/2025). **A hipotermia induzida agressiva (32-34 °C) NÃO é mais recomendada de rotina** — pode ser considerada apenas em subgrupos selecionados a critério do intensivista. O foco é prevenção de febre com manta/cateter endovascular + sedação.
4. **Sedação/analgesia + bloqueio neuromuscular** se tremores impedirem controle térmico.
5. **Glicemia 140-180 mg/dL.**
6. **EEG contínuo/intermitente** — tratar status epilepticus não convulsivo.
7. **Cinecoronariografia precoce** se IAMCSST no ECG pós-RCE; em FV/TV de causa cardíaca presumida sem supra, individualizar (TOMAHAWK, COACT).
8. **Prognóstico neurológico** apenas após **≥72 h** sem sedação, com avaliação multimodal (exame clínico + EEG + NSE + RM/TC + potenciais evocados).

**Não recomendado de rotina:** vasopressina, esteroide, bicarbonato (exceto hipercalemia/intoxicação por TCA), cálcio (exceto hipercalemia/hipocalcemia/intoxicação por bloqueador de Ca).`,

      prescriptions: `\`\`\`
DURANTE PCR:
1. Adrenalina 1 mg EV/IO a cada 3-5 min (imediata em AESP/assistolia; após 2º choque em FV/TV).
2. Amiodarona 300 mg EV em bolus após 3º choque (FV/TV refratária) → 150 mg após 5º.
3. Sulfato de magnésio 1-2 g EV em torsades de pointes.
4. Bicarbonato de sódio 8,4% 1 mEq/kg EV apenas em hipercalemia, intoxicação por TCA ou acidose metabólica grave conhecida.
5. Cloreto de cálcio 10% 10 mL EV em hipercalemia, hipocalcemia ou intoxicação por bloqueador de cálcio.
6. Trombolítico (alteplase 50 mg EV em bolus) se TEP confirmado/altamente suspeito como causa.

PÓS-RCE:
7. Noradrenalina 0,05-1 mcg/kg/min EV em BIC para PAM ≥65-80 mmHg.
8. Sedação: propofol 1-3 mg/kg/h + fentanil 1-3 mcg/kg/h EV em BIC.
9. Cisatracúrio 0,1 mg/kg/h EV se tremores impedirem TTM.
10. Manter SpO₂ 94-98%, EtCO₂/PaCO₂ 35-45 mmHg.
11. Cabeceira 30°, controle térmico ativo (manta ou cateter endovascular) — alvo 36 °C / normotermia <37,5 °C por 72 h.
12. Glicemia capilar 1/1 h, insulina contínua se >180.
13. ECG 12 derivações em <10 min pós-RCE; troponina; ECO bedside.
\`\`\``,
    },
  },

  // ==================== 5. TEP MACIÇO ====================
  {
    protocolId: "fp-tep-macico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ESC 2025 + AHA 2025:**

**Estratificação imediata:**
- **Alto risco (maciço):** instabilidade hemodinâmica (PAS <90 ou queda ≥40 mmHg por ≥15 min, choque, PCR).
- **Risco intermediário-alto (submassivo):** PESI III-V/sPESI ≥1 + disfunção de VD (TC/ECO) + biomarcadores (+).
- **Risco intermediário-baixo:** apenas 1 dos critérios acima.
- **Baixo risco:** PESI I-II/sPESI 0 — considerar alta precoce com DOAC (HOT-PE).

**Conduta por risco:**
1. **Alto risco:** **trombólise sistêmica imediata** (alteplase 100 mg EV em 2 h, ou 0,6 mg/kg em 15 min se PCR iminente). Alternativas em centros com PERT: trombectomia por cateter (FLARE, EXTRACT-PE) ou cirúrgica; **ECMO VA** em choque refratário.
2. **Intermediário-alto:** anticoagulação plena + **monitorização em UTI 24-72 h**; trombólise de resgate se deterioração; trombólise dirigida por cateter em centros experientes (PEITHO-3 em andamento; HI-PEITHO).
3. **Intermediário-baixo / baixo:** anticoagulação plena, considerar alta precoce em baixo risco.

**Acionar PERT (Pulmonary Embolism Response Team)** em todo TEP de risco intermediário-alto e alto.`,

      treatment: `**Trombólise sistêmica:**
- **Alteplase 100 mg EV em 2 h** (ou 50 mg em 2 h se peso <65 kg, redução de risco hemorrágico) — manter HNF suspensa durante infusão; reiniciar quando aPTT <2× controle.
- Em PCR iminente: alteplase 0,6 mg/kg (máx 50 mg) em bolus de 15 min.
- Tenecteplase OFF-LABEL para TEP no Brasil; usar conforme protocolo institucional.

**Anticoagulação inicial:**
- **HNF EV** se possível trombólise/cirurgia, IRC grave, peso extremo, instabilidade — bolus 80 U/kg + 18 U/kg/h, alvo aPTT 1,5-2,5×.
- Enoxaparina 1 mg/kg SC 12/12 h em estáveis.
- Fondaparinux 7,5 mg SC 1×/dia (alternativa).

**DOAC (após estabilização ou desde o início em risco baixo-intermediário):**
- **Rivaroxabana 15 mg 12/12 h × 21 dias → 20 mg/dia.**
- **Apixabana 10 mg 12/12 h × 7 dias → 5 mg 12/12 h.**
- Dabigatrana/edoxabana após ≥5 dias de heparina parenteral.

**Trombectomia por cateter / cirúrgica:** em alto risco com contraindicação à trombólise ou falha; centros com hemodinâmica intervencionista.

**Filtro de VCI:** apenas se contraindicação absoluta à anticoagulação ou TEP recorrente em uso pleno de anticoagulante.

**Duração da anticoagulação:**
- Provocado transitório (cirurgia, imobilização): 3 meses.
- Não provocado / câncer ativo / trombofilia maior: indefinida com reavaliação anual.`,

      prescriptions: `\`\`\`
EM ALTO RISCO (trombólise):
1. Alteplase 100 mg EV: 10 mg em bolus em 1-2 min + 90 mg em infusão em 2 h.
2. Suspender HNF durante alteplase; reiniciar HNF 18 U/kg/h sem bolus quando aPTT <2× controle.
3. Cristaloide com cautela (máx 500 mL) — evitar sobrecarga de VD.
4. Noradrenalina 0,05-1 mcg/kg/min EV em BIC se PAM <65.
5. Dobutamina 2,5-10 mcg/kg/min EV se disfunção de VD com baixo débito.
6. O₂ alvo SpO₂ ≥92% (94-98%); IOT em sequência rápida com ETOMIDATO + cetamina (evitar propofol em bolus por hipotensão).

EM INTERMEDIÁRIO/BAIXO:
7. Enoxaparina 1 mg/kg SC 12/12 h — OU rivaroxabana 15 mg VO 12/12 h × 21 dias → 20 mg/dia.
8. ECO transtorácico bedside, troponina e BNP/NT-proBNP na admissão e em 6 h.
9. AngioTC de tórax (se ainda não realizada) ou cintilografia V/Q se IRA/gravidez.
10. Doppler de MMII para confirmar TVP-fonte.
\`\`\``,
    },
  },

  // ==================== 6. CETOACIDOSE DIABÉTICA (CAD) ====================
  {
    protocolId: "fp-cad",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Consenso ADA/EASD 2024 (Joint Consensus on Hyperglycemic Crises) + SBD 2025:**

**Critérios diagnósticos:**
- Glicemia >200 mg/dL (CAD pode ocorrer com euglicemia em uso de iSGLT2).
- pH <7,30 e/ou HCO₃ <18.
- Cetonemia ≥3 mmol/L (β-hidroxibutirato preferencial sobre cetonúria).
- Anion gap >12.

**Gravidade:** leve (pH 7,25-7,30), moderada (7,00-7,24), grave (<7,00 ou alteração mental).

**Pilares simultâneos:**

**1. Hidratação (1ª ação):**
- SF 0,9% 15-20 mL/kg (1-1,5 L) na 1ª hora.
- Após: SF 0,45% 250-500 mL/h se Na corrigido normal/alto; SF 0,9% se Na baixo.
- Quando glicemia ≤250 mg/dL → trocar para SG 5% + SF 0,45% 150-250 mL/h.

**2. Insulina (após início da hidratação e K ≥3,3):**
- **Insulina regular EV: 0,1 U/kg bolus + 0,1 U/kg/h em BIC** (ou pular bolus, infusão direta a 0,14 U/kg/h).
- Meta: queda de 50-75 mg/dL/h; se <50 mg/dL/h, dobrar a infusão.
- Quando glicemia ≤200 mg/dL → reduzir para 0,02-0,05 U/kg/h e iniciar SG 5%.
- Manter EV até resolução da CAD (pH ≥7,30, HCO₃ ≥18, AG ≤12) e sobreposição ≥1-2 h com insulina SC basal.

**3. Potássio:**
- K <3,3 → **adiar insulina**, repor 20-40 mEq/h.
- K 3,3-5,2 → repor 20-30 mEq em cada litro de fluido.
- K >5,2 → não repor; monitorar 2/2 h.

**4. Bicarbonato:** apenas se pH <6,9 (100 mEq em 400 mL SF 0,45% em 2 h).

**5. Fosfato:** repor apenas se P <1,0 mg/dL ou disfunção cardíaca/respiratória/anemia (KH₂PO₄ 20-30 mEq/L).`,

      treatment: `**Identificar e tratar o gatilho:**
- Infecção (30-50%): pesquisar foco, ATB conforme.
- Má adesão à insulina (especialmente jovens).
- IAM, AVC, pancreatite, gravidez.
- **iSGLT2 (CAD euglicêmica):** SUSPENDER imediatamente; manejar com insulina + glicose mesmo com glicemia normal.

**Transição para SC:**
- Quando: pH ≥7,30, HCO₃ ≥18, AG ≤12, paciente alimentando-se VO.
- Esquema: insulina basal (glargina ou degludeca) 0,2-0,3 U/kg/dia + bolus prandial.
- Manter insulina EV por **1-2 h após** a primeira dose SC para evitar rebote cetoacidótico.

**CAD em gestante:** alvo glicêmico mais estreito (100-150 mg/dL); risco fetal alto.

**Estado Hiperosmolar Hiperglicêmico (EHH) — manejo paralelo:**
- Glicemia >600 mg/dL, osmolalidade >320, pH >7,30, sem cetose significativa.
- Hidratação ainda mais agressiva (déficit ~9 L); insulina apenas após reposição inicial; queda de Na corrigida não >10 mEq/L/24 h (risco de mielinólise).`,

      prescriptions: `\`\`\`
1. SF 0,9% 1.000-1.500 mL EV em 1 h (15-20 mL/kg) — reavaliar status volêmico.
2. Após: SF 0,45% 250-500 mL/h (Na corrigido normal/alto) ou SF 0,9% (Na baixo).
3. KCl 19,1% — adicionar 20-30 mEq em cada litro se K 3,3-5,2; 40 mEq/h se K <3,3 (NÃO iniciar insulina até K ≥3,3).
4. Insulina regular EV: 0,1 U/kg bolus EV + 0,1 U/kg/h em BIC (50 U em SF 0,9% 250 mL = 0,2 U/mL).
5. Quando glicemia ≤200 mg/dL: reduzir insulina para 0,02-0,05 U/kg/h + iniciar SG 5% 150 mL/h.
6. Bicarbonato 8,4% 100 mL em SF 0,45% 400 mL em 2 h apenas se pH <6,9.
7. Glicemia capilar 1/1 h; eletrólitos, gasometria, β-hidroxibutirato 2-4/4 h.
8. ECG (avaliar K), hemograma, função renal, urina I, hemoculturas se febre.
9. Suspender iSGLT2 se em uso (CAD euglicêmica).
10. Profilaxia TEV: enoxaparina 40 mg SC 1×/dia.
11. Após resolução: insulina glargina 0,2-0,3 U/kg SC à noite + bolus prandial; manter EV por 1-2 h após 1ª SC.
\`\`\``,
    },
  },

  // ==================== 7. CHOQUE ANAFILÁTICO ====================
  {
    protocolId: "fp-choque-anafilatico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**WAO 2024 Anaphylaxis Guidance + AAAAI/ACAAI 2024 + EAACI 2025:**

**Critérios diagnósticos (qualquer um):**
1. Início agudo (min-h) de pele/mucosa + comprometimento respiratório OU hipotensão/disfunção orgânica.
2. ≥2 dos seguintes após exposição a alérgeno provável: pele/mucosa, respiratório, hipotensão, sintomas GI persistentes.
3. Hipotensão isolada após exposição a alérgeno conhecido.

**AÇÃO #1 — ADRENALINA IM imediata (NÃO ATRASAR):**
- **0,3-0,5 mg IM (1:1.000 = 1 mg/mL) na face anterolateral da coxa** (vasto lateral).
- Pediatria: 0,01 mg/kg IM (máx 0,3 mg pré-puberdade, 0,5 mg adulto).
- **Repetir a cada 5-15 min** se sem melhora (até 3 doses antes de considerar EV).
- **Adrenalina EV em BIC 0,05-0,1 mcg/kg/min** apenas em choque refratário a IM ou em PCR iminente — exige monitor.

**Posicionamento:**
- Decúbito dorsal com MMII elevados se hipotenso.
- Sentado se desconforto respiratório.
- **NUNCA levantar bruscamente** (síndrome do "ventrículo vazio" — risco de PCR).

**Suporte simultâneo:**
- O₂ alta concentração (10-15 L/min máscara não reinalante).
- Acesso venoso calibroso × 2.
- **Cristaloide 20 mL/kg em bolus rápido** (1-2 L em adulto), repetir até 4-6 L se choque persistente.
- Suspender o agente desencadeante (ATB, contraste, anestésico).

**Via aérea:** edema progressivo de língua/laringe = IOT precoce; preparar via aérea cirúrgica.`,

      treatment: `**Adjuvantes (NÃO substituem adrenalina):**

- **Anti-H1**: difenidramina 25-50 mg EV (alívio de prurido/urticária; sem efeito em choque/via aérea).
- **Anti-H2**: ranitidina 50 mg EV ou famotidina 20 mg EV.
- **Corticoide**: metilprednisolona 1-2 mg/kg EV ou hidrocortisona 200 mg EV — **não previne reação bifásica** (evidência fraca, EAACI 2024 desencoraja uso rotineiro como pilar).
- **Broncodilatador**: salbutamol nebulizado 5 mg se broncoespasmo persistente após adrenalina.
- **Glucagon 1-5 mg EV** (β-bloqueado, choque refratário a adrenalina).

**Vasopressores adicionais (choque refratário):**
- Noradrenalina 0,05-1 mcg/kg/min.
- Vasopressina 0,01-0,04 U/min em hipotensão refratária.
- Azul de metileno 1-2 mg/kg em vasoplegia refratária a múltiplos vasopressores.

**Observação:**
- **Mínimo 4-6 h** em reação leve-moderada respondendo bem.
- **Mínimo 12-24 h** em choque, edema laríngeo, broncoespasmo grave ou reação bifásica conhecida (5-20% dos casos, geralmente <12 h).

**Alta:**
- **Prescrever 2 autoinjetores de adrenalina (Bicepi/EpiPen)** + plano de ação por escrito.
- Encaminhar a alergista/imunologista.
- Pulseira de identificação (alergia conhecida).
- Considerar imunoterapia em alergia a himenópteros.`,

      prescriptions: `\`\`\`
1. **Adrenalina 1:1.000 (1 mg/mL): 0,5 mg IM na face anterolateral da coxa AGORA — repetir a cada 5-15 min se sem melhora.**
2. O₂ por máscara não reinalante 10-15 L/min.
3. SF 0,9% ou Ringer lactato 1.000 mL EV em bolus rápido (20 mL/kg) — repetir até 4-6 L se choque.
4. Difenidramina 50 mg EV em 5 min (adjuvante).
5. Famotidina 20 mg EV (adjuvante).
6. Metilprednisolona 125 mg EV (ou hidrocortisona 200 mg EV) — sem urgência, não substitui adrenalina.
7. Salbutamol 5 mg + ipratrópio 0,5 mg nebulizados se broncoespasmo persistente.
8. Adrenalina EV em BIC: 1 mg em SF 0,9% 100 mL (10 mcg/mL) — iniciar 0,05 mcg/kg/min apenas em choque refratário a IM, com monitor.
9. Glucagon 1-5 mg EV em 5 min se uso de β-bloqueador e refratariedade.
10. Suspender imediatamente o agente suspeito (ATB, contraste, AINE).
11. ECG, monitorização contínua, observação mínima 4-6 h (12-24 h se grave).
12. PRESCRIÇÃO DE ALTA: adrenalina autoinjetora 0,3 mg IM — 2 unidades + plano de ação + encaminhamento a alergista.
\`\`\``,
    },
  },

  // ==================== 8. ASMA GRAVE / QUASE FATAL ====================
  {
    protocolId: "fp-asma-grave",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**GINA 2025 + SBPT 2025:**

**Classificação na sala de emergência:**
- **Moderada:** fala em frases, FR <30, SpO₂ 90-95%, PFE 50-75% predito.
- **Grave:** fala em palavras, FR ≥30, FC ≥120, SpO₂ <90%, PFE <50%.
- **Quase fatal / com risco de vida:** sonolência, confusão, tórax silencioso, bradicardia, cianose, esforço respiratório paradoxal, PFE <33%, hipercapnia.

**Conduta na 1ª hora:**

1. **O₂ titulado para SpO₂ 93-95%** (não usar O₂ em alta concentração de rotina — risco de hipercapnia em casos selecionados).
2. **Salbutamol 4-8 puffs (400-800 mcg) com espaçador a cada 20 min × 3** OU nebulização 2,5-5 mg em SF a cada 20 min × 3 (preferir spray + espaçador — mais eficaz e menor efeito adverso, GINA 2025).
3. **Ipratrópio 0,5 mg nebulizado** (ou 4-8 puffs com espaçador) associado nas 3 primeiras nebulizações em crise grave/quase fatal.
4. **Corticoide sistêmico precoce (≤1 h):** **prednisolona 50 mg VO** (ou metilprednisolona 60-125 mg EV se vômitos/grave) — efeito em 4-6 h.
5. **Sulfato de magnésio 2 g EV em 20 min** (40 mg/kg pediátrico, máx 2 g) se refratária após 1 h.

**Refratária após 1 h:**
- Salbutamol contínuo nebulizado (10-15 mg/h).
- Considerar adrenalina 0,3-0,5 mg IM se fenótipo anafilactoide ou não resposta.
- VNI (BiPAP) cautelosa em paciente cooperativo, sem sonolência, com hipercapnia leve.
- **IOT precoce** se: exaustão, alteração de consciência, PCR iminente, pH <7,2 com hipercapnia. **Cetamina 1-2 mg/kg** é o indutor de escolha (broncodilatador). Evitar morfina e benzodiazepínicos em bolus.`,

      treatment: `**Ventilação mecânica em asma:**
- Pré-IOT: pré-oxigenação meticulosa, fluido em bolus (alto risco de PCR pós-IOT por auto-PEEP).
- VT 6-8 mL/kg peso predito; FR baixa (8-10/min); tempo expiratório longo (I:E 1:4-1:5); permissive hypercapnia (pH alvo ≥7,2).
- PEEP baixa (0-5); monitorar auto-PEEP/Pplatô <30.
- Sedação profunda + bloqueio neuromuscular curto se assincronia/auto-PEEP.
- **Ketamina infusão contínua 1-3 mg/kg/h** mantém broncodilatação.
- Se refratária: **anestésicos inalatórios (sevoflurano, isoflurano)** em UTI com expertise; **ECMO** em centros selecionados.

**Após estabilização:**
- Manter corticoide VO 40-50 mg/dia × 5-7 dias (sem desmame).
- Alta com **ICS-formoterol como controlador E resgate (MART)** — SABA isolado NÃO é mais recomendado (GINA 2025).
- Plano de ação escrito; revisar técnica inalatória; considerar biológicos (omalizumabe, mepolizumabe, dupilumabe, tezepelumabe) em asma grave T2.
- Reavaliação ambulatorial em 1-2 semanas.

**Não recomendado:** aminofilina EV (efeito modesto, alto risco de toxicidade), sedativos em paciente não intubado, antibiótico de rotina (apenas se infecção comprovada).`,

      prescriptions: `\`\`\`
1. O₂ por cateter ou máscara titulando SpO₂ 93-95%.
2. Salbutamol spray 400-800 mcg (4-8 puffs) com espaçador a cada 20 min × 3 — OU nebulização 5 mg + ipratrópio 0,5 mg em 3 mL de SF a cada 20 min × 3.
3. Prednisolona 50 mg VO 1×/dia × 5-7 dias — OU metilprednisolona 60-125 mg EV agora se vômitos/grave.
4. Sulfato de magnésio 2 g EV (50%, 4 mL diluídos em SF 100 mL) em 20 min — se refratária após 1 h.
5. Salbutamol contínuo nebulizado 10-15 mg/h se ainda refratária.
6. Adrenalina 0,3-0,5 mg IM se broncoespasmo refratário com componente anafilactoide.
7. SF 0,9% 500-1.000 mL EV (pré-IOT, evitar se ICC).
8. IOT (sequência rápida): cetamina 1-2 mg/kg EV + rocurônio 1,2 mg/kg EV. Evitar fentanil em bolus.
9. Pós-IOT: cetamina 1-3 mg/kg/h + propofol 1-3 mg/kg/h em BIC. VT 6 mL/kg PP, FR 8-10, I:E 1:4, PEEP 0-5, Pplatô <30, permissive hypercapnia.
10. ICS-formoterol (budesonida/formoterol) ou ICS+SABA como ponte até consulta com pneumologista.
11. Gasometria arterial seriada (entrada, 1 h, 4 h); não solicitar Rx de tórax de rotina (apenas se suspeita de complicação).
\`\`\``,
    },
  },

  // ==================== 9. DPOC EXACERBADO ====================
  {
    protocolId: "fp-dpoc-exacerbado",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**GOLD 2025:**

**Classificação da exacerbação:**
- **Leve:** SABA isolado.
- **Moderada:** SABA + corticoide sistêmico ± antibiótico.
- **Grave:** internação / pronto-socorro; risco de IRpA.

**Critérios de Anthonisen** (indicação de antibiótico — ≥2): aumento de dispneia, aumento de volume do escarro, aumento de purulência. Iniciar ATB também se ventilação mecânica (invasiva/não invasiva).

**Conduta inicial:**

1. **O₂ alvo SpO₂ 88-92%** (Venturi 24-28% preferencial — evita hipercapnia por liberação de hipoxemia). Reavaliar gasometria em 30-60 min.
2. **Broncodilatador inalatório curto:**
   - Salbutamol 2,5-5 mg + ipratrópio 0,5 mg nebulizados a cada 20 min na 1ª hora, depois 4/4 h.
   - Spray + espaçador é equivalente e preferível em pacientes cooperativos.
3. **Corticoide sistêmico × 5 dias** (REDUCE):
   - Prednisona 40 mg VO 1×/dia × 5 dias **(sem desmame)**.
   - Metilprednisolona 40 mg EV 12/12 h se VO inviável.
4. **Antibiótico** (5-7 dias):
   - 1ª linha: amoxicilina-clavulanato 875/125 mg VO 12/12 h **OU** azitromicina 500 mg/dia × 3 dias **OU** doxiciclina 100 mg 12/12 h.
   - Risco de Pseudomonas (uso prévio de ATB, internação recente, VEF₁ <50%, bronquiectasias): ciprofloxacino 750 mg 12/12 h ou levofloxacino 750 mg/dia.
   - Internado grave: ceftriaxona 2 g/dia ± levofloxacino.

5. **VNI (BiPAP) — INDICAÇÃO MAIOR (mortalidade reduzida):** acidose respiratória com pH ≤7,35 e PaCO₂ ≥45. IPAP 12-20, EPAP 4-6, FiO₂ para SpO₂ 88-92%.
6. **IOT** se: pH <7,25 não responsivo à VNI, alteração de consciência, instabilidade hemodinâmica, parada respiratória.`,

      treatment: `**Ventilação invasiva em DPOC:**
- VT 6-8 mL/kg PP, FR 10-14/min, I:E 1:3-1:4 (evitar auto-PEEP).
- PEEP extrínseca = 80% da PEEP intrínseca (contrabalançar trigger).
- Permissive hypercapnia, pH alvo ≥7,2.

**Investigação obrigatória de gatilhos:**
- Infecção bacteriana/viral (PCR multiplex se disponível).
- TEP (15-30% das exacerbações graves sem causa óbvia — angio-TC se D-dímero alterado).
- ICC descompensada (BNP, ECO).
- Pneumotórax (Rx tórax sempre).
- Não-adesão / técnica inalatória inadequada.

**Critérios de alta hospitalar:**
- SpO₂ ≥90% em ar ambiente (ou estável em O₂ domiciliar).
- Sem necessidade de SABA <4/4 h.
- Capacidade de deambular, comer e dormir sem dispneia importante.
- Plano educacional, técnica inalatória revisada, vacinação atualizada (influenza, pneumocócica, COVID, RSV em ≥60 anos).

**Otimização ambulatorial pós-alta:**
- LABA + LAMA (broncodilatação dupla) — 1ª linha em sintomáticos ou grupo E (GOLD 2025).
- LABA + LAMA + ICS (terapia tripla) se ≥2 exacerbações/ano ou eosinófilos ≥300/mm³.
- Reabilitação pulmonar em 4 semanas pós-alta (forte evidência de redução de readmissão).
- Cessação tabágica (intervenção breve + farmacoterapia).`,

      prescriptions: `\`\`\`
1. O₂ por máscara de Venturi 24-28% titulando SpO₂ 88-92% (gasometria em 30-60 min).
2. Salbutamol 5 mg + ipratrópio 0,5 mg nebulizados em 3 mL de SF a cada 20 min × 3 → 4/4 h. Alternativa: SABA + SAMA spray com espaçador.
3. Prednisona 40 mg VO 1×/dia × 5 dias (sem desmame) — OU metilprednisolona 40 mg EV 12/12 h.
4. Amoxicilina-clavulanato 875/125 mg VO 12/12 h × 5-7 dias (se ≥2 critérios de Anthonisen).
   OU Levofloxacino 750 mg VO/EV 1×/dia × 5 dias se risco de Pseudomonas.
5. VNI (BiPAP) precoce se pH 7,25-7,35 e PaCO₂ ≥45: IPAP 12-20, EPAP 4-6, titular para conforto e SpO₂.
6. Enoxaparina 40 mg SC 1×/dia (profilaxia TEV).
7. Pantoprazol 40 mg EV 1×/dia (profilaxia úlcera de estresse) se VM.
8. Hidratação cuidadosa: SF 0,9% 50-75 mL/h.
9. Gasometria arterial na admissão, em 1 h após O₂ e em 4-6 h.
10. Rx tórax e ECG na admissão; angio-TC se suspeita de TEP.
11. Alta: LABA+LAMA (formoterol+glicopirrônio ou olodaterol+tiotrópio) — adicionar ICS se eosinófilos ≥300 ou ≥2 exacerbações/ano.
12. Encaminhar à reabilitação pulmonar em 4 semanas; intervenção tabágica.
\`\`\``,
    },
  },

  // ==================== 10. ECLÂMPSIA ====================
  {
    protocolId: "fp-eclampsia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**FIGO 2024 + ACOG 2025 + Febrasgo 2025 + MS Brasil 2025:**

**Definição:** crise convulsiva tônico-clônica generalizada (ou coma) em gestante/puérpera com pré-eclâmpsia, sem outra causa atribuível. Pode ocorrer **anteparto (50%), intraparto (20%) e pós-parto até 4 semanas (30%)**.

**ABORDAGEM SIMULTÂNEA — três pilares:**

**1. SUPORTE À PACIENTE:**
- Decúbito lateral esquerdo (evita compressão da VCI e broncoaspiração).
- O₂ por máscara 8-10 L/min.
- Aspiração de vias aéreas; cânula de Guedel.
- Acesso venoso calibroso × 2; monitorização contínua (PA, SpO₂, ECG, FCF se anteparto).
- Proteger de quedas/trauma (NÃO conter à força, NÃO colocar objetos na boca).

**2. CONTROLE DA CONVULSÃO E PREVENÇÃO DE RECORRÊNCIA — SULFATO DE MAGNÉSIO É O PADRÃO-OURO:**
- **Esquema de Zuspan (preferencial — IV puro):**
  - **Ataque:** **MgSO₄ 4 g EV** (8 mL de MgSO₄ 50% diluídos em SF 12 mL → 20 mL → infundir em **15-20 min**).
  - **Manutenção:** **MgSO₄ 1-2 g/h EV em BIC** por **24 h após o parto** ou **24 h após a última convulsão** (o que for maior).
- Esquema de Pritchard (alternativa IM): 4 g EV + 10 g IM (5 g em cada glúteo) → 5 g IM 4/4 h.
- **Convulsão recorrente:** repetir bolus de **2 g EV em 5 min**.
- **Status epilepticus refratário a Mg:** diazepam 10 mg EV ou midazolam 2-5 mg EV; se persistir, considerar fenitoína 15-20 mg/kg EV (preferencial sobre fenobarbital pelo perfil fetal).

**Monitorização da magnesemia (clínica) durante infusão:**
- Reflexo patelar presente (perda = 1º sinal de toxicidade).
- FR ≥12-14/min.
- Diurese ≥25-30 mL/h (Mg é renal — risco em IRA).
- Antídoto: **gluconato de cálcio 1 g EV (10 mL a 10%) em 3 min**.

**3. CONTROLE DA HIPERTENSÃO SEVERA (PAS ≥160 e/ou PAD ≥110):**
- **Hidralazina 5 mg EV em bolus** a cada 20 min (máx 30 mg) — alvo PA 140-150 / 90-100 (NÃO normotensão — risco de hipoperfusão placentária).
- **Nifedipino 10 mg VO** a cada 20 min (máx 50 mg em 1 h) — preferencial em muitos centros (rápido, oral).
- **Labetalol 20 mg EV → 40 → 80 mg** a cada 10 min (máx 300 mg) — não disponível no Brasil em muitos serviços.
- Nitroprussiato apenas em emergência hipertensiva refratária e por curto período (cianeto fetal).`,

      treatment: `**RESOLUÇÃO DA GRAVIDEZ — único tratamento definitivo:**
- **Após estabilização clínica** (controle da convulsão, PA controlada, oxigenação adequada).
- **Independente da idade gestacional**, porém:
  - ≥34 semanas: parto imediato.
  - 24-33+6 sem: corticoterapia para maturação pulmonar (betametasona 12 mg IM 24/24 h × 2 doses ou dexametasona 6 mg IM 12/12 h × 4 doses) **se condições maternas permitirem** atrasar 24-48 h; caso contrário, parto sem aguardar.
  - <24 sem: discutir interrupção (prognóstico fetal reservado, risco materno alto).
- **Via de parto:** vaginal preferencial se condições obstétricas favoráveis e estabilidade. Cesárea se indicação obstétrica, instabilidade ou colo desfavorável com termo.
- **Anestesia:** raquianestesia/peridural seguras se plaquetas ≥70-80 mil e coagulação normal. Anestesia geral aumenta risco de pico hipertensivo na intubação.

**Manejo pós-parto:**
- **Manter MgSO₄ por 24 h pós-parto** (50% das eclâmpsias ocorrem no pós-parto, especialmente nas primeiras 48 h).
- Manter anti-hipertensivo VO; metildopa, nifedipino retard, hidralazina ou labetalol.
- Vigilância de complicações: HELLP, edema pulmonar, AVC, IRA, DPP, CIVD.

**Cuidados especiais:**
- **Restringir fluidos a 80 mL/h** (alto risco de edema pulmonar agudo — endotélio lesado).
- Cateter vesical (controle de diurese e proteinúria).
- Avaliação fetal contínua (CTG anteparto).
- Se HELLP / disfunção orgânica: UTI obstétrica / materno-fetal.

**Pós-alta:**
- Anti-hipertensivo VO ajustado; reavaliação em 7-14 dias.
- Risco aumentado de DCV, HAS crônica, DRC e pré-eclâmpsia em gestações futuras (rastreio anual).
- AAS 100-150 mg/dia em próxima gestação a partir de 12 semanas (prevenção de pré-eclâmpsia recorrente).`,

      prescriptions: `\`\`\`
ATAQUE (sala de emergência, simultâneo):

1. Posicionar em decúbito lateral esquerdo; O₂ máscara 8-10 L/min; aspiração; 2 acessos calibrosos.
2. **Sulfato de magnésio 50% — 8 mL (4 g) + SF 0,9% 12 mL → 20 mL EV em 15-20 min** (ATAQUE).
3. **Sulfato de magnésio 50% — 20 mL (10 g) + SF 0,9% 480 mL → BIC a 50 mL/h (1 g/h)** por 24 h após o parto OU 24 h após última convulsão.
   - Convulsão recorrente: **MgSO₄ 50% 4 mL (2 g) EV em 5 min** + manter manutenção.
4. **Hidralazina 1 mg/mL: 5 mg (5 mL) EV em bolus** a cada 20 min, máx 30 mg — alvo PA 140-150 / 90-100.
   ALTERNATIVA: Nifedipino 10 mg VO a cada 20 min, máx 50 mg em 1 h.
5. Gluconato de cálcio 10% 10 mL EV em 3 min — APENAS se sinais de toxicidade do Mg (perda de reflexo, FR <12, oligúria, alteração mental).
6. SF 0,9% ou Ringer lactato 80 mL/h — RESTRINGIR fluidos.
7. Cateter vesical de demora (controle de diurese horária ≥30 mL/h).
8. Sonda nasogástrica se vômitos/rebaixamento.
9. Hemograma (com plaquetas), TGO/TGP, DHL, bilirrubinas, ureia/creatinina, ácido úrico, urina I/proteinúria 24 h, coagulograma, fibrinogênio.
10. ECG, gasometria, fundo de olho (papiledema).
11. CTG contínuo (se anteparto).
12. **Avisar obstetra plantonista para resolução da gravidez após estabilização** (≥34 sem: imediato; <34 sem: corticoide se possível).

PÓS-PARTO (manter por 24 h):

13. Manter MgSO₄ 1 g/h EV em BIC.
14. Anti-hipertensivo de manutenção VO: nifedipino retard 20 mg 12/12 h ou metildopa 250-500 mg 8/8 h.
15. Vigilância clínica 1/1 h nas primeiras 12 h: PA, FC, FR, reflexo patelar, diurese, nível de consciência.
\`\`\``,
    },
  },
];
