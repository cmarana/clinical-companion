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

  // ==================== 11. DM2 — EMERGÊNCIA / AMBULATORIAL (PCDT 2026) ====================
  {
    protocolId: "fp-m7-diabetes-tipo2-emergencia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 PCDT DM2 2026 (CONITEC/MS) + ADA Standards of Care 2026 + SBD 2025-2026:**

**Estratificação inicial (todo paciente DM2 na emergência/UBS):**
1. Avaliar **risco cardiorrenal**: idade, DCV estabelecida (IAM, AVC, DAC), IC (EF preservada ou reduzida), DRC (TFG, albuminúria).
2. **HbA1c, glicemia, TFG, RAC urinário, perfil lipídico, ECG.**
3. Sinais de descompensação aguda → triar para CAD/EHH (ver protocolos específicos).

**🆕 Fluxograma terapêutico DM2 no SUS — PCDT 2026:**
- **1ª linha (todos):** **metformina** (titular até 2 g/dia, suspender se TFG <30).
- **🆕 Adicionar precocemente (não esperar falha da metformina) se:**
  - **DCV estabelecida, DRC (TFG 20-60 e/ou RAC ≥30), IC (HFrEF ou HFpEF), ou idade ≥65 com risco CV alto** → **iSGLT2 (dapagliflozina 10 mg/dia)** — agora **incorporada ao SUS para >65 a com DCV/DRC** (CONITEC 2025/2026). Empagliflozina como alternativa.
  - **Obesidade (IMC ≥30) + DCV/IC/DRC** → **AR-GLP1 (semaglutida ou liraglutida)** — incorporados ao SUS conforme PCDT 2026 para subgrupos selecionados.
- **🆕 IC com fração de ejeção preservada (HFpEF) + obesidade:** AR-GLP1 (semaglutida) com benefício cardiovascular e funcional demonstrado (STEP-HFpEF, SELECT, FLOW 2024-2025).
- **Insulinoterapia:** **análogos de ação rápida (lispro, asparte, glulisina) e prolongada (glargina, degludeca)** agora **integrados ao PCDT nacional** — não exigir mais NPH/regular como pré-requisito em todos os casos.
- Sulfonilureia (gliclazida MR) e pioglitazona como 3ª/4ª linha; evitar em IC e idosos frágeis.

**Metas glicêmicas individualizadas:**
- HbA1c <7% adulto saudável; <7,5-8% idoso frágil; <6,5% gestante/pré-concepção.
- Glicemia capilar pré-prandial 80-130; pós-prandial <180.

**Rastreios obrigatórios anuais:** retinografia, monofilamento + diapasão (pé diabético), RAC urinário, TFG, perfil lipídico, ECG.`,

      treatment: `**🆕 Algoritmo prático PCDT 2026:**

| Cenário | Conduta |
|---|---|
| DM2 recém-diagnosticado, sem comorbidades | Metformina + MEV |
| DM2 + DCV estabelecida | Metformina + **iSGLT2 (dapa/empa)** OU **AR-GLP1** |
| DM2 + IC (HFrEF ou **HFpEF**) | Metformina + **iSGLT2** (1ª escolha — DAPA-HF, EMPEROR, DELIVER) |
| DM2 + DRC (TFG 20-60, RAC ≥30) | Metformina + **iSGLT2 (dapa)** ± finerenona (CKD + albuminúria) |
| DM2 + obesidade + HFpEF | **AR-GLP1 (semaglutida 2,4 mg)** + iSGLT2 (STEP-HFpEF) |
| DM2 ≥65 a com risco CV/renal | **🆕 Dapagliflozina padrão SUS (PCDT 2026)** |
| HbA1c >9% sintomático | Insulinização precoce (basal + bolus, análogos liberados pelo SUS) |

**🆕 Outros pilares 2026:**
- **Estatina alta intensidade** se DCV ou risco ≥7,5%/10a (atorvastatina 40-80 ou rosuvastatina 20-40).
- **iECA/BRA** se HAS ou RAC ≥30.
- **AAS 100 mg** apenas em prevenção secundária.
- **Finerenona** (PCDT em revisão) se DRC + albuminúria persistente apesar de iECA/BRA + iSGLT2.
- **Tirzepatida** (agonista duplo GIP/GLP-1) — não SUS, mencionar como opção privada em obesidade refratária.

**Não recomendado de rotina:** glibenclamida em idosos (hipoglicemia), pioglitazona em IC, DPP-4 em IC (saxagliptina).`,

      prescriptions: `\`\`\`
DM2 ESTÁVEL — INÍCIO/AJUSTE (PCDT 2026):
1. Metformina 500 mg VO 12/12 h após refeições — titular até 1 g 12/12 h em 2-4 sem (suspender se TFG <30).
2. Dapagliflozina 10 mg VO 1×/dia — se DCV, DRC (TFG ≥20), IC (qualquer FE) ou ≥65 a com risco CV alto. ATENÇÃO: orientar hidratação, suspender em jejum prolongado/cirurgia (risco de CAD euglicêmica).
3. Semaglutida 0,25 mg SC 1×/sem por 4 sem → 0,5 mg/sem → 1 mg/sem (se obesidade + DCV/HFpEF).
   - ALTERNATIVA: liraglutida 0,6 mg SC 1×/dia, titular até 1,8 mg/dia.
4. Atorvastatina 40 mg VO à noite (alta intensidade).
5. Losartana 50 mg VO 1×/dia se HAS ou RAC ≥30 (titular a 100 mg).
6. AAS 100 mg VO 1×/dia APENAS em prevenção secundária.

DM2 + HBA1C >9% OU SINTOMÁTICO — INSULINIZAÇÃO (análogos liberados SUS):
7. Insulina glargina 100 U/mL: iniciar 0,2 U/kg SC à noite — titular +2 U a cada 3 dias até glicemia jejum 80-130.
8. Insulina lispro/asparte SC 4 U pré-refeição se pós-prandial >180 — titular conforme contagem de carboidrato.
9. Glicemia capilar 4×/dia (jejum + pré-refeições) por 1 sem após cada ajuste.

CONTROLE/RASTREIO ANUAL:
10. HbA1c 3/3 m, perfil lipídico 6/6 m, TFG + RAC 6/6 m, retinografia anual, exame dos pés a cada consulta.
\`\`\``,
    },
  },

  // ==================== 12. CHIKUNGUNYA (Brasil 2026) ====================
  {
    protocolId: "fp-i7-chikungunya",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Nota Técnica MS/SVSA 2025-2026 + SBI 2026:**

**Definição de caso:** febre súbita >38,5 °C + **poliartralgia intensa (geralmente simétrica, mãos/pés/punhos)** + área com circulação viral (todo Brasil considerado endêmico em 2025-2026, com surtos no NE, SE e CO).

**Classificação clínica:**
1. **Aguda (0-14 d):** febre + artralgia + exantema maculopapular (40-50%) + cefaleia.
2. **Subaguda (15 d-3 m):** persistência ou recidiva de poliartrite.
3. **Crônica (>3 m):** poliartrite simétrica, tenossinovite, fadiga — pode durar meses/anos.

**Sinais de gravidade (internar):** cardite, encefalite, mielite, hepatite fulminante, insuf. renal, sangramento, gestante 3º trim, RN de mãe virêmica, idoso frágil, descompensação de comorbidade, sepse bacteriana secundária.

**Diagnóstico:**
- **0-7 d sintomas:** RT-PCR (preferencial) OU NS1 não disponível para CHIKV → **antígeno/PCR**.
- **>5-8 d:** IgM (ELISA) — pode persistir até 3-6 meses.
- **Conv. IgG** confirma exposição.
- **Diferenciar de dengue e zika** (sempre testar os 3 em área de cocirculação).

**🆕 Vacina IXCHIQ (live-attenuated, dose única) — incorporada ao PNI 2025/2026:**
- **Indicação:** adultos **18-59 anos** em áreas de surto/alta transmissão, viajantes para áreas endêmicas, profissionais de saúde de áreas afetadas.
- **🆕 CONTRAINDICAÇÕES (excluir antes de aplicar):**
  - **Imunossupressão** (HIV com CD4 <200, quimio, biológicos, corticoide alto, transplantados).
  - **Gestantes e lactantes.**
  - **<18 anos e ≥60 anos** (dados limitados; alerta de eventos graves em idosos — FDA/EMA/Anvisa 2024-2025).
  - Hipersensibilidade prévia.
- **Eventos adversos:** febre, mialgia, artralgia leve por 3-5 d; raros eventos graves neuro/cardíacos em ≥60 a.

**Notificação compulsória imediata** (SINAN) em até 24 h.`,

      treatment: `**Sintomático (não há antiviral específico):**
- **Hidratação oral abundante** (60 mL/kg/dia adulto).
- **Analgesia ESCALONADA:**
  - Fase aguda: **paracetamol** ou **dipirona** (NÃO usar AINE/AAS nos primeiros 14 dias até excluir dengue — risco hemorrágico).
  - Após excluir dengue (NS1 negativo + plaquetas estáveis): **ibuprofeno/naproxeno** se dor refratária.
  - Crônica: AINE ciclo curto + **fisioterapia precoce** + corticoide curto (prednisona 0,5 mg/kg 5-7 d) em poliartrite intensa.
  - Refratária >3 m: avaliar **hidroxicloroquina, metotrexato, sulfassalazina** com reumatologia (DMARDs, conforme protocolo SBR).
- **Repouso articular relativo + crioterapia** nas articulações mais afetadas.
- Educação: sintomas crônicos comuns; retorno em 14 d.

**Gestantes:** paracetamol exclusivo; vigiar transmissão vertical perinatal (febre periparto = altíssimo risco neonatal — encaminhar UTI neo).
**Crianças:** paracetamol/dipirona; hidratação; alerta para encefalite.

**🆕 Não recomendado:** ivermectina, cloroquina como antiviral, opioides de rotina, corticoide na fase aguda febril.`,

      prescriptions: `\`\`\`
ADULTO — FASE AGUDA AMBULATORIAL:
1. Dipirona 500 mg-1 g VO 6/6 h se dor/febre.
2. Paracetamol 750 mg VO 6/6 h (alternativa, máx 3 g/dia).
3. Soro de reidratação oral (envelope) — 1 envelope em 1 L de água, livre demanda + 60 mL/kg/dia.
4. Repouso relativo, compressas frias nas articulações, elevação dos membros.
5. NÃO USAR AAS, ibuprofeno, naproxeno, diclofenaco nas primeiras 2 semanas (até excluir dengue concomitante).
6. Solicitar: hemograma, plaquetas, RT-PCR CHIKV (se ≤7 d), IgM CHIKV (se >5 d), NS1 dengue, sorologias dengue/zika.
7. Notificação SINAN em 24 h.
8. Retorno em 48 h e em 14 d (avaliar fase subaguda).

FASE SUBAGUDA/CRÔNICA (após excluir dengue):
9. Ibuprofeno 600 mg VO 8/8 h por 7-10 d OU naproxeno 500 mg 12/12 h.
10. Prednisona 0,5 mg/kg/dia VO 5-7 d em poliartrite incapacitante (após excluir infecção bacteriana ativa).
11. Encaminhar fisioterapia + reumatologia se persistência >6 sem.

VACINAÇÃO IXCHIQ (PNI 2025-2026):
12. Aplicar 0,5 mL SC dose única em adultos 18-59 a sem contraindicação. Observar 30 min pós-aplicação.
13. CONTRAINDICAR em: gestantes, lactantes, <18 a, ≥60 a, imunossuprimidos.
\`\`\``,
    },
  },

  // ==================== 13. DENGUE GRAVE (Brasil 2026) ====================
  {
    protocolId: "fp-new-dengue-grave",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Diretrizes MS/SVSA 2025-2026 + OPAS 2025 + SBI:**

**Estadiamento (OMS/MS):**
- **Grupo A:** sem sinais de alarme, sem comorbidade, sem risco social — manejo domiciliar.
- **Grupo B:** sem sinais de alarme COM comorbidade/risco (gestante, <2 a, **≥65 a — grupo de maior risco em 2025/2026**, comorbidades, risco social) — observação + hidratação supervisionada.
- **Grupo C:** **sinais de alarme** (dor abdominal intensa, vômitos persistentes, hepatomegalia >2 cm, sangramento mucoso, letargia/irritabilidade, hipotensão postural, ↑Hct + queda plaquetas) — **internação + hidratação parenteral imediata**.
- **Grupo D:** **dengue grave** — choque, sangramento grave, disfunção orgânica (hepatite, miocardite, encefalite) — **UTI**.

**🆕 Estratificação de risco precoce — FOCO 2026:**
- **Idosos ≥65 a são o grupo com MAIOR letalidade** atual no Brasil — limiar baixo para internar; sinais clássicos podem estar atenuados (sem febre alta, sem dor articular típica); **monitorar pressão postural, perfusão, lactato e Hct mesmo sem sinais de alarme exuberantes**.
- Solicitar **NS1 (D1-D5), PCR DENV-1/2/3/4 (D1-D7), IgM (≥D6)**, sorotipagem em surto.

**🆕 Calculadora de hidratação por peso e fase (PCDT 2025/2026):**

**Grupo A (oral):** 60 mL/kg/dia adulto; 1/3 SRO + 2/3 líquidos caseiros. Crianças: 1º hora 5 mL/kg + manutenção Holliday-Segar.

**Grupo B (oral supervisionada + observação):** mesma dose oral; reavaliar em 4 h com Hct e plaquetas.

**Grupo C — EXPANSÃO PARENTERAL:**
- **Adulto:** SF 0,9% ou Ringer lactato **10 mL/kg na 1ª hora** → reavaliar.
  - Melhora (Hct ↓, diurese ≥1 mL/kg/h, PA estável): manter **25 mL/kg em 6-8 h** → **25 mL/kg em 8-12 h** → suspender em 24-48 h.
  - Sem melhora: repetir 10 mL/kg em 1 h até 3 vezes (máx 30 mL/kg na fase de expansão); se persistir → Grupo D.
- **Criança:** 20 mL/kg em 2 h → reavaliar.

**Grupo D — CHOQUE:**
- **Cristaloide 20 mL/kg em 15-30 min** (até 3 bolus); se refratário, **noradrenalina precoce** + considerar coloide (albumina) e transferir UTI.
- Não retardar drogas vasoativas aguardando resposta a fluidos > 30 mL/kg.
- **Transfundir concentrado de hemácias** se sangramento + queda Hb >2 g/dL ou choque persistente; **plaquetas APENAS se sangramento ativo + plaquetas <50 mil** (não profilático).

**🆕 Não recomendado:** plaquetas profiláticas, corticoide, IgIV, AAS/AINE, soluções hipotônicas.

**Notificação compulsória imediata.** Vacina QDenga incorporada PNI para 10-14 anos em áreas selecionadas (não muda manejo do caso agudo).`,

      treatment: `**Princípios:**
1. **Reposição volêmica precoce e titulada** — evitar tanto hipoperfusão quanto sobrecarga (SDRA, derrame).
2. **Reavaliação a cada 1 h em Grupo C/D**: PA, FC, FR, perfusão, diurese, Hct, plaquetas, lactato.
3. **Antitérmico:** paracetamol ou dipirona (NUNCA AAS/AINE).
4. **Sangramento:** ácido tranexâmico 1 g EV se hemorragia digestiva/ginecológica; transfusão guiada (CH se Hb <7 ou sangramento; plaquetas só se sangramento + <50; PFC se INR >1,5 + sangramento).
5. **Hepatite grave:** N-acetilcisteína 150 mg/kg + 50 mg/kg + 100 mg/kg conforme protocolo (off-label, evidência observacional).
6. **Critérios de alta (Grupo C/D):** afebril >48 h, sem sinais de alarme, plaquetas em ascensão, Hct estável, diurese normal, tolerando dieta.`,

      prescriptions: `\`\`\`
GRUPO C — ADULTO 70 KG (EXPANSÃO INICIAL):
1. Ringer lactato 700 mL EV em 1 h (10 mL/kg). Reavaliar Hct, PA, diurese, perfusão.
2. Se melhora: Ringer lactato 1.750 mL EV em 6-8 h (25 mL/kg) → 1.750 mL EV em 8-12 h.
3. Se sem melhora: repetir 700 mL em 1 h (até 3×, máx 30 mL/kg de expansão). Se refratário, transferir Grupo D.
4. Dipirona 1 g EV 6/6 h se febre/dor.
5. Ondansetrona 4-8 mg EV 8/8 h se vômitos.
6. NÃO USAR: AAS, ibuprofeno, diclofenaco, corticoide, plaquetas profiláticas.
7. Hemograma com plaquetas + Hct 4/4 h; função renal/hepática 1×/dia; gasometria + lactato se choque.
8. Diurese horária (cateter se Grupo D); PA não-invasiva 1/1 h (PAi se UTI).
9. Notificação SINAN imediata.

GRUPO D — CHOQUE:
10. Ringer lactato 1.400 mL EV em 15-30 min (20 mL/kg) — repetir até 3 bolus.
11. Noradrenalina 0,05-0,5 mcg/kg/min EV BIC se PAM <65 após 30 mL/kg.
12. Albumina 5% 250-500 mL EV se refratário a cristaloide e Hct elevado.
13. Concentrado de hemácias se Hb <7 ou sangramento ativo.
14. Plaquetas APENAS se sangramento + <50 mil; PFC 10-15 mL/kg se INR >1,5 + sangramento.
15. Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h se hemorragia maior.

IDOSO ≥65 A (GRUPO B/C — vigiar):
16. Mesmas doses por kg, MAS reavaliar a cada 2 h, monitorar BNP/POCUS para evitar sobrecarga, alvo Hct e diurese mais conservador.
\`\`\``,
    },
  },

  // ==================== 14. ENDOMETRIOSE / DOR PÉLVICA (PCDT 2025-2026) ====================
  {
    protocolId: "fp-endometriose-emergencia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 PCDT Endometriose 2025-2026 (CONITEC) + ESHRE 2024 + ACOG 2025:**

**Suspeita clínica:** dismenorreia progressiva, dispareunia profunda, dor pélvica crônica >6 m, infertilidade, dor à evacuação/miccional cíclica, sangramento retal/urinário cíclico.

**Investigação:**
- **USTV especializado** (com preparo intestinal) — 1ª linha.
- **RM de pelve** (protocolo endometriose) se suspeita de endometriose profunda (DIE), envolvimento intestinal/urinário ou planejamento cirúrgico.
- CA-125 não tem valor diagnóstico isolado.
- Laparoscopia diagnóstica **não é mais obrigatória** para iniciar tratamento clínico empírico.

**Manejo da dor aguda na emergência:**
1. AINE (ibuprofeno, naproxeno, ketoprofeno) — 1ª escolha.
2. Dipirona/paracetamol associados.
3. Antiespasmódico (escopolamina) se cólica intensa.
4. Opioide fraco (codeína, tramadol) por ciclo curto se refratário.
5. Bloqueio de plexo hipogástrico em centros especializados para crise refratária.
6. Iniciar/escalonar terapia hormonal supressora (ver tratamento) e encaminhar ginecologia.`,

      treatment: `**🆕 Fluxograma terapêutico PCDT 2025-2026:**

**1ª linha (todas as formas, incluindo dor pélvica crônica não-cirúrgica):**
- **Progestagênio contínuo:** **dienogeste 2 mg VO 1×/dia** OU **noretisterona 5-10 mg/dia** OU **desogestrel 75 mcg/dia** — **agora dispensados pelo SUS para endometriose** (PCDT 2025-2026).
- **🆕 DIU de levonorgestrel 52 mg (Mirena/Kyleena)** — **incorporado ao SUS para endometriose, adenomiose e dor pélvica crônica** (CONITEC 2025) — alternativa de 1ª linha, especialmente em adenomiose ou contraindicação a estrogênio.
- ACO combinado contínuo (sem pausa) como alternativa em pacientes sem contraindicação.

**2ª linha (refratário ou DIE com sintomas graves):**
- **🆕 Análogos de GnRH (leuprorrelina 3,75 mg IM/mês ou 11,25 mg IM/3 meses, gosserrelina 3,6 mg SC/mês)** — **fluxo SUS atualizado 2025-2026**: até **6 meses de uso**, com **add-back therapy obrigatória** (estradiol 1 mg + noretisterona 0,5 mg/dia OU tibolona 2,5 mg/dia) a partir do 1º-3º mês para preservar massa óssea e aliviar sintomas climatéricos.
- Antagonista de GnRH oral (elagolix, relugolix + add-back) — não SUS, mencionar em assistência suplementar.

**3ª linha:** cirurgia laparoscópica conservadora (ressecção de focos/DIE) em centro especializado; histerectomia ± ooforectomia em casos selecionados refratários, paridade completa.

**Fertilidade:** encaminhar reprodução assistida precocemente se infertilidade + endometriose moderada/grave.

**Adenomiose:** **DIU-LNG 52 mg é 1ª linha**; análogo GnRH + add-back se refratário; ablação endometrial/embolização/HTA conforme caso.`,

      prescriptions: `\`\`\`
CRISE DE DOR — EMERGÊNCIA:
1. Cetoprofeno 100 mg EV em 100 mL SF em 30 min OU ibuprofeno 600 mg VO 8/8 h.
2. Dipirona 1 g EV/VO 6/6 h.
3. Escopolamina + dipirona (Buscopan composto) 1 amp EV se cólica intensa.
4. Tramadol 50-100 mg EV/VO 6/6 h se refratário (ciclo curto ≤72 h).
5. Iniciar/escalonar terapia hormonal (ver abaixo) e encaminhar ginecologia.

TRATAMENTO CRÔNICO — 1ª LINHA (PCDT 2025-2026 SUS):
6. Dienogeste 2 mg VO 1×/dia uso contínuo (orientar amenorreia esperada; sangramentos irregulares nos 3 primeiros meses).
   OU
7. DIU de levonorgestrel 52 mg — inserir em consulta ginecológica; eficácia 5-7 anos.
   OU
8. Desogestrel 75 mcg VO 1×/dia uso contínuo.

REFRATÁRIO / DIE — 2ª LINHA:
9. Leuprorrelina 3,75 mg IM 1×/mês (ou 11,25 mg IM 1×/3 meses) por até 6 meses.
10. ADD-BACK obrigatório a partir do 1º-3º mês: estradiol 1 mg + noretisterona acetato 0,5 mg VO 1×/dia (ou tibolona 2,5 mg/dia).
11. Densitometria óssea basal e ao final do tratamento; cálcio 1.000 mg + vit D 1.000 UI/dia.

ENCAMINHAMENTOS:
12. Ginecologia especializada em endometriose (ambulatório de referência) em ≤30 dias.
13. Reprodução assistida se infertilidade.
14. Fisioterapia pélvica + psicologia da dor.
\`\`\``,
    },
  },

  // ==================== 15. AVC HEMORRÁGICO (AHA/ASA 2022 + atualização 2025) ====================
  {
    protocolId: "fp-avc-hemorragico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**AHA/ASA 2022 Guideline for ICH + Update 2024-2025 + ESO 2025:**

1. **TC sem contraste em ≤25 min da chegada** (door-to-CT). Considerar **AngioTC** para "spot sign" e excluir MAV/aneurisma; **TC perfusão** se dúvida diagnóstica.
2. **Score ICH (volume, idade, GCS, infratentorial, hemoventricular)** + **FUNC score** para prognóstico.
3. **Reverter anticoagulação imediatamente:**
   - **Varfarina:** **CCP 4 fatores 25-50 UI/kg + vitamina K 10 mg EV** (não usar PFC isolado — INCH).
   - **DOAC anti-Xa (riva/apixa/edoxa):** **andexanet alfa** se disponível (ANNEXA-I 2024 — neutralização superior ao CCP, mas com sinal de aumento de eventos trombóticos; **CCP 50 UI/kg** segue alternativa).
   - **Dabigatrana:** **idarucizumabe 5 g EV**.
   - **HNF:** protamina 1 mg / 100 U.
   - **Antiplaquetário:** **NÃO transfundir plaquetas** (PATCH — pior desfecho); exceção: neurocirurgia iminente.
4. **🆕 Controle pressórico INTENSIVO precoce — INTERACT3/2024:** alvo **PAS 130-140 mmHg em até 1 h** (queda controlada, não <120) — feixe completo INTERACT3 (PA + glicemia + temperatura + reversão anticoagulação) reduziu desfecho funcional ruim. Nicardipina/clevidipina EV 1ª linha; labetalol alternativa.
5. **Glicemia 110-180 mg/dL**; tratar T >37,5 °C (paracetamol).
6. **Profilaxia TEV: compressão pneumática IMEDIATA**; HBPM em dose profilática **após 24-48 h** se hematoma estável.
7. **Cirurgia:**
   - **🆕 Hematoma supratentorial lobar (10-100 mL) — ENRICH 2024:** **evacuação minimamente invasiva precoce (≤24 h)** com cateter/endoscopia melhorou desfecho funcional (mRS 0-3) — recomendação reforçada.
   - **Hemorragia cerebelar >3 cm com deterioração ou hidrocefalia obstrutiva:** **craniectomia descompressiva urgente**.
   - **Hidrocefalia:** DVE.
   - **HSA aneurismática:** ver protocolo HSA.
8. **EME pós-ICH:** EEG contínuo se RNC desproporcional; tratar crises.
9. **Não recomendado:** corticoide, hemostático rotineiro (FATOR VII NÃO indicado — STOP-AUST/FAST), manitol profilático, hiperventilação prolongada.`,

      treatment: `**Internação em UTI/U-AVC** com monitorização neurológica seriada (NIHSS/GCS 1/1 h nas 24 h).

- Cabeceira 30°, normocapnia, normoglicemia, normotermia.
- HIC: terapia escalonada (sedação, salina hipertônica 3%, manitol 0,5-1 g/kg, drenagem ventricular, craniectomia).
- Iniciar **estatina não obrigatória** na fase aguda (individualizar — risco/benefício).
- **Não reiniciar anticoagulação** antes de 4-8 sem; em FA de alto risco, considerar **oclusão de apêndice atrial** (Watchman).
- Reabilitação multidisciplinar precoce (≥24 h se estável).`,

      prescriptions: `\`\`\`
1. TC crânio sem contraste + AngioTC arterial intracraniana imediatas.
2. Cabeceira 30°, O₂ para SpO₂ ≥94%, IOT se GCS ≤8 ou via aérea instável.
3. Nicardipina 5 mg/h EV BIC, titular +2,5 mg/h cada 5-15 min até PAS 130-140 (máx 15 mg/h).
   OU clevidipina 1-2 mg/h EV, dobrar cada 90 s.
   OU labetalol 10-20 mg EV em bólus a cada 10 min (máx 300 mg).
4. REVERSÃO ANTICOAGULAÇÃO:
   - Varfarina: CCP 4F 25-50 UI/kg EV (INR-dependente) + vitamina K 10 mg EV em 30 min.
   - DOAC anti-Xa: andexanet alfa (bólus + infusão 2 h) OU CCP 50 UI/kg.
   - Dabigatrana: idarucizumabe 5 g EV (2 frascos de 2,5 g).
   - HNF: protamina 1 mg / 100 U nas últimas 2-3 h.
5. Insulina contínua se glicemia >180; evitar <110.
6. Paracetamol 1 g EV 6/6 h se T >37,5 °C.
7. Compressão pneumática intermitente AGORA; enoxaparina 40 mg SC após 24-48 h se hematoma estável.
8. Manitol 20% 0,5-1 g/kg EV em 20 min OU NaCl 3% 250 mL EV se sinais de HIC/herniação.
9. Hemograma, coagulograma, INR, fibrinogênio, plaquetas, função renal/hepática, ECG, troponina.
10. Avaliação neurocirúrgica imediata se: cerebelar >3 cm, hidrocefalia, lobar 10-100 mL com indicação ENRICH, deterioração.
11. EEG contínuo se RNC inexplicado.
\`\`\``,
    },
  },

  // ==================== 16. HSA ANEURISMÁTICA ====================
  {
    protocolId: "fp-hsa",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**AHA/ASA 2023 + ESO 2025 + Neurocritical Care 2024:**

1. **TC sem contraste em <6 h** — sensibilidade ~100%; se >6 h ou TC negativa com alta suspeita → **punção lombar** (xantocromia).
2. **AngioTC ou angiografia digital** para identificar aneurisma (padrão-ouro angiografia).
3. Classificar **Hunt-Hess** e **WFNS**; **Fisher modificado** para risco de vasoespasmo.
4. **Tratamento do aneurisma em ≤24 h:** **embolização endovascular (coiling)** preferencial sobre clipagem na maioria (ISAT, BRAT) — exceção: aneurismas MCA grandes/com hematoma.
5. **Controle pressórico ANTES de oclusão:** PAS <140-160; após oclusão, permitir PAS até 200 se vasoespasmo.
6. **Nimodipina 60 mg VO/SNG 4/4 h por 21 dias** — reduz desfecho ruim por vasoespasmo (todos os pacientes).
7. **🆕 Vasoespasmo (D4-D14):** **doppler transcraniano diário + vigilância clínica**; tratar isquemia tardia com **terapia hipertensiva (PAS alvo individualizado, evitar hipervolemia agressiva — SAHIT)**, angioplastia química (verapamil/nicardipina intra-arterial) ou mecânica.
8. **Hidrocefalia aguda (15-20%):** DVE.
9. **Crises:** profilaxia anticonvulsivante NÃO é rotina; tratar se crise documentada (levetiracetam 1ª linha).
10. **Hiponatremia (SIADH/CSWS):** evitar restrição hídrica; usar fludrocortisona/salina hipertônica em CSWS.
11. **🆕 Não recomendado:** ácido tranexâmico prolongado (ULTRA: sem benefício e ↑isquemia), estatina aguda para vasoespasmo (STASH), magnésio profilático (MASH-2).`,

      treatment: `**UTI neurológica** com monitorização contínua, escala neurológica horária.

- Analgesia rigorosa (paracetamol + opioide curto), antiemético, repouso.
- Profilaxia TEV mecânica imediata; HBPM após oclusão segura.
- **Reabilitação precoce**; reavaliar neurocognição ambulatorial.
- Rastreio de outros aneurismas em ATCD familiar.`,

      prescriptions: `\`\`\`
1. TC crânio sem contraste IMEDIATA + AngioTC.
2. Cabeceira 30°, repouso absoluto, ambiente calmo.
3. Nimodipina 60 mg VO/SNG 4/4 h por 21 dias (iniciar em <24 h).
4. Nicardipina/labetalol EV para PAS <140-160 ANTES da oclusão; após oclusão, alvo individualizado.
5. Paracetamol 1 g EV 6/6 h + morfina 2-4 mg EV se dor intensa.
6. Ondansetrona 8 mg EV 8/8 h; laxativo (lactulose 15 mL 8/8 h) — evitar Valsalva.
7. Soro fisiológico isotônico 1,5-2 mL/kg/h — evitar restrição e hipervolemia.
8. Compressão pneumática intermitente; enoxaparina 40 mg SC após 24 h da oclusão.
9. Levetiracetam 500-1.000 mg EV 12/12 h APENAS se crise documentada.
10. Avaliação neurocirurgia/intervencionista <6 h para programar coiling/clipagem em ≤24 h.
11. Doppler transcraniano diário D4-D14; vigilância de vasoespasmo.
12. NÃO USAR: ácido tranexâmico prolongado, estatina aguda para vasoespasmo, magnésio profilático.
\`\`\``,
    },
  },

  // ==================== 17. ESTADO DE MAL EPILÉPTICO ====================
  {
    protocolId: "fp-eme",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Neurocritical Care Society 2024 + ILAE 2025:**

**Definição operacional:** crise contínua >5 min OU ≥2 crises sem recuperação completa.

**T1 = 5 min** (tratar como EME); **T2 = 30 min** (risco de lesão neuronal).

**Algoritmo escalonado:**

1. **Estabilização (0-5 min):** ABC, O₂, glicemia capilar, 2 acessos, monitor, IOT se via aérea instável.
2. **🆕 Fase inicial (5-20 min) — BENZODIAZEPÍNICO em DOSE PLENA (subdose é o erro mais comum):**
   - **Midazolam 10 mg IM** (1ª escolha pré-hospitalar/sem acesso — RAMPART) OU **5-10 mg EV/IN/bucal**.
   - **Diazepam 0,15-0,2 mg/kg EV** (máx 10 mg) — pode repetir 1×.
   - **Lorazepam 4 mg EV** (não disponível BR) — repetir 1×.
3. **Fase de controle (20-40 min) — SE PERSISTIR após benzo:** ESETT mostrou **equivalência entre as 3 opções**:
   - **Levetiracetam 60 mg/kg EV** (máx 4.500 mg) em 15 min — preferencial (segurança).
   - **Fenitoína 20 mg/kg EV** (máx 1.500 mg) em ≤50 mg/min — monitorar PA/ECG.
   - **Ácido valproico 40 mg/kg EV** (máx 3.000 mg) em 10 min — evitar em hepatopata, gestante, mitocondriopatia.
4. **EME refratário (>40 min) — IOT + UTI + EEG contínuo:**
   - **Midazolam BIC 0,2 mg/kg bolus → 0,05-2 mg/kg/h.**
   - **Propofol BIC 1-2 mg/kg bolus → 1-10 mg/kg/h** (cuidado com PRIS).
   - **Pentobarbital/tiopental** se super-refratário.
   - Alvo: **supressão de descargas no EEG por 24-48 h**, depois desmame.
5. **EME super-refratário (>24 h):** ketamina BIC, dieta cetogênica, imunoterapia (corticoide, IgIV, plasmaférese) se suspeita autoimune (anti-NMDA, LGI1), magnésio em eclâmpsia.

**Investigação paralela:** glicemia, eletrólitos (Na, Ca, Mg), função renal/hepática, gasometria, hemograma, screen tóxico, nível sérico de antiepilépticos, TC crânio, punção lombar se febre/imunossupressão, RM e EEG contínuo.

**Causas — sempre tratar:** hipoglicemia (50 mL G50% + tiamina 100 mg EV), hiponatremia, eclâmpsia (MgSO₄), encefalite (aciclovir + ATB), AVC, intoxicação.

**🆕 EME não convulsivo:** suspeitar em todo paciente com RNC inexplicado pós-evento; **EEG contínuo é mandatório** em UTI neurológica.`,

      treatment: `Após controle: **manter antiepiléptico de manutenção** (geralmente o usado na fase de controle), ajustar dose, dosar nível sérico, investigar etiologia (RM, LCR, EEG ambulatorial), encaminhar epileptologia. Orientar sobre direção, trabalho em altura, gatilhos.`,

      prescriptions: `\`\`\`
0-5 MIN — ESTABILIZAÇÃO:
1. O₂ 10 L/min máscara, monitor, oximetria, 2 acessos calibrosos, glicemia capilar.
2. Tiamina 100 mg EV (antes de glicose se desnutrido/etilista) + glicose 50% 50 mL EV se HGT <60.

5-20 MIN — BENZODIAZEPÍNICO (DOSE PLENA, NÃO SUBDOSAR):
3. Midazolam 10 mg IM (sem acesso) OU midazolam 0,2 mg/kg EV (5-10 mg).
4. OU diazepam 10 mg EV em bolus — repetir 10 mg em 5 min se persistir.

20-40 MIN — ANTIEPILÉPTICO (se persistir após 2ª dose de benzo):
5. Levetiracetam 60 mg/kg EV (máx 4.500 mg) em 100 mL SF em 15 min. (1ª escolha — segurança)
   OU
6. Fenitoína 20 mg/kg EV em SF 0,9% (NUNCA glicose), velocidade ≤50 mg/min, monitor cardíaco contínuo.
   OU
7. Ácido valproico 40 mg/kg EV em 10 min (máx 3 g) — evitar gestante/hepatopata.

>40 MIN REFRATÁRIO — IOT + UTI + EEG CONTÍNUO:
8. Sequência rápida de IOT: etomidato 0,3 mg/kg + rocurônio 1,2 mg/kg.
9. Midazolam bolus 0,2 mg/kg + BIC 0,05-2 mg/kg/h, titular para supressão no EEG.
   OU propofol bolus 2 mg/kg + BIC 1-10 mg/kg/h (vigiar PRIS, triglicerídeos, lactato).
10. Manter supressão 24-48 h, depois desmame com manutenção do antiepiléptico oral/SNG.

INVESTIGAÇÃO:
11. HGT, Na, K, Mg, Ca iônico, ureia, creatinina, TGO/TGP, gasometria, lactato, CK, hemograma, screen tóxico, β-HCG.
12. Nível sérico do antiepiléptico em uso prévio.
13. TC crânio assim que estável; punção lombar se febre/imunossupressão; RM e EEG contínuo.
\`\`\``,
    },
  },

  // ==================== 18. HIPERCALEMIA ====================
  {
    protocolId: "fp-hipercalemia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**KDIGO 2024 + UK Renal Association 2023 + ERC 2025:**

**Estratificação por K e ECG:**
- **Leve 5,5-5,9** — ambulatorial, ajustar drogas/dieta.
- **Moderada 6,0-6,4** — observação + tratamento.
- **Grave ≥6,5 OU qualquer K com alteração de ECG** — emergência.

**Alterações ECG progressivas:** T apiculada → PR alargado → P achatada → QRS alargado → padrão sinusoidal → FV/assistolia.

**Sequência terapêutica (K ≥6,5 ou ECG alterado):**

1. **🆕 ESTABILIZAR MEMBRANA (≤2 min):**
   - **Gluconato de cálcio 10% 10-30 mL EV em 5-10 min** (preferido em acesso periférico) OU **cloreto de cálcio 10% 10 mL EV central**.
   - Repetir em 5 min se ECG não normalizar.
   - Cuidado em **digitálico**: infundir lentamente em 20 min (não contraindicado absoluto — UK 2023).

2. **DESLOCAR K PARA INTRACELULAR (15-60 min):**
   - **Insulina regular 10 U EV + Glicose 50% 50 mL** (25 g) — OU **5 U + 25 g** se IRC/risco hipoglicemia (KDIGO 2024 — ↓ hipoglicemia sem perder eficácia).
   - **β2-agonista nebulizado:** **salbutamol 10-20 mg neb** (4-8× dose broncodilatadora) — sinérgico à insulina.
   - **Bicarbonato 8,4% 50-100 mL EV** APENAS em acidose metabólica (pH <7,2) — não usar isoladamente.

3. **🆕 REMOVER K DO CORPO:**
   - **Patiromer 8,4 g VO/SNG OU ciclosilicato de zircônio (SZC) 10 g VO 3×/dia** — **novas resinas, ação em horas, melhor tolerância que poliestireno** (KDIGO 2024 prioriza estas).
   - **Poliestirenossulfonato de cálcio (Sorcal) 15-30 g VO ou 30-60 g enema** — alternativa SUS; cuidado com necrose intestinal (NÃO associar a sorbitol).
   - **Furosemida 40-80 mg EV** se euvolêmico/hipervolêmico com diurese preservada.
   - **HEMODIÁLISE EMERGENCIAL** se: K ≥6,5 refratário, ECG persistente, IRC dialítica, lesão tecidual maciça, oligoanúria.

4. **Corrigir causa:** suspender iECA/BRA/espironolactona/AINE/heparina/trimetoprim/digital, repor volume se hipovolemia, tratar rabdomiólise/hemólise/lise tumoral.

**🆕 PCR por hipercalemia (ERC 2025):** cálcio + insulina/glicose + bicarbonato durante RCP; **diálise intra-PCR** em centros capacitados.`,

      treatment: `**Após estabilização:**
- Monitor cardíaco contínuo até K <6,0.
- Dosar K 1/1 h nas primeiras 4 h, depois 4/4 h.
- Ajuste dietético (evitar banana, laranja, tomate, chocolate, batata).
- **Iniciar/manter patiromer ou SZC ambulatorialmente** em IC/DRC para permitir manter iECA/BRA otimizados (substitui suspensão crônica — KDIGO 2024).
- Investigar etiologia: IRC, hipoaldosteronismo, drogas, acidose tubular tipo IV.`,

      prescriptions: `\`\`\`
EMERGÊNCIA — K ≥6,5 OU ECG ALTERADO:
1. Gluconato de cálcio 10% 20 mL EV em 10 min (repetir em 5 min se ECG persistir).
   OU cloreto de cálcio 10% 10 mL EV central em 10 min.
2. Insulina regular 10 U EV em bolus + Glicose 50% 50 mL EV simultâneo.
   (Se TFG <30 ou risco hipoglicemia: insulina 5 U + glicose 25 g).
3. Salbutamol 10-20 mg (40-80 gotas) nebulização contínua em 15 min.
4. Bicarbonato de sódio 8,4% 100 mL EV em 30 min APENAS se pH <7,2.
5. Furosemida 40-80 mg EV se diurese preservada e euvolêmico/hipervolêmico.
6. Patiromer 8,4 g VO/SNG dose única.
   OU ciclosilicato de zircônio 10 g VO/SNG.
   OU poliestirenossulfonato de cálcio 30 g VO + 100 mL manitol (NÃO sorbitol).
7. ECG contínuo, K capilar/sérico em 1, 2 e 4 h.
8. Acionar nefrologia para HEMODIÁLISE se: K ≥6,5 refratário a 1 h de tratamento, ECG persistente, IRC dialítica, oligoanúria, lise tumoral.
9. Glicemia capilar 1/1 h por 6 h (risco hipoglicemia tardia da insulina).
10. SUSPENDER: iECA/BRA, espironolactona, AINE, trimetoprim, heparina, digital (revisar), suplemento de K.

MANUTENÇÃO AMBULATORIAL (DRC/IC):
11. Patiromer 8,4-25,2 g VO 1×/dia OU SZC 5-10 g VO 1×/dia para permitir manter iECA/BRA otimizados.
12. Dieta orientada por nutricionista; revisão K em 7-14 d.
\`\`\``,
    },
  },

  // ==================== 19. HIPONATREMIA ====================
  {
    protocolId: "fp-hiponatremia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**European Hyponatraemia Guideline 2014 + Atualização 2024 + Endocrine Society 2023:**

**Classificação:**
- **Leve 130-134 / Moderada 125-129 / Grave <125 mmol/L.**
- **Aguda <48 h** vs **crônica ≥48 h** (ou desconhecida → tratar como crônica).
- Sintomas **graves** (convulsão, coma, vômitos persistentes, RNC) — emergência independente do valor.

**Diagnóstico:**
1. **Osmolaridade plasmática** — excluir pseudo (hiperproteinemia) e hipertônica (hiperglicemia: corrigir +1,6 mEq Na para cada 100 mg glicose >100).
2. **Estado volêmico:** hipovolêmica (perdas GI/renais/diurético), euvolêmica (SIADH, hipotireoidismo, insuf adrenal), hipervolêmica (IC, cirrose, SN, IRC).
3. **Na urinário, osm urinária, ácido úrico, cortisol, TSH.**

**Tratamento — Princípio fundamental: VELOCIDADE DE CORREÇÃO:**

- **🆕 Limite máximo: 8-10 mmol/L em 24 h e 18 mmol/L em 48 h** (reduzido para **6-8 mmol/L/24 h em alto risco de SDO**: Na <105, hipocalemia, etilismo, desnutrição, hepatopatia, hipóxia).
- **Sintomas graves:** **NaCl 3% 100-150 mL EV em 10-20 min, repetir até 3×** até melhora clínica OU ↑Na 4-6 mmol — **basta para reverter sintomas**, depois manter.
- **Risco de hipercorreção (especialmente em hipovolêmica após volume, SIADH transitório, suspensão de diurético):** se Na subir >8/24 h, **REVERTER ATIVAMENTE** com **DDAVP 2-4 mcg EV/SC + glicose 5%** para baixar Na em 1-2 mmol/h até voltar ao alvo (estratégia "DDAVP clamp").

**Por etiologia:**
- **Hipovolêmica:** SF 0,9% para repor volume — vigiar overshoot.
- **SIADH (euvolêmica):** **restrição hídrica <800-1.000 mL/dia** + sal/ureia oral; **tolvaptana** se refratária ou Na <125 sintomática (suspender em 30 d, monitorar hepatotoxicidade — **não usar em hepatopata**); furosemida + NaCl em SIADH refratário.
- **Insuficiência adrenal:** hidrocortisona 100 mg EV.
- **Hipotireoidismo grave:** levotiroxina + hidrocortisona.
- **Hipervolêmica (IC/cirrose):** restrição hídrica + diurético; tolvaptana off-label.

**🆕 Síndrome de desmielinização osmótica (SDO):** evitar é tudo — correção lenta + vigilância. Se ocorrer, suporte; sem terapia específica.`,

      treatment: `Investigação ambulatorial: TSH, cortisol AM, função renal/hepática, glicemia, osm plasmática e urinária, Na urinário, ECG. Revisar drogas (tiazídicos, ISRS, carbamazepina, antipsicóticos).

**Educação:** restrição hídrica em SIADH crônico; sinal de alerta (cefaleia, náusea, RNC).`,

      prescriptions: `\`\`\`
SINTOMÁTICA GRAVE (convulsão, coma, vômitos, RNC):
1. NaCl 3% 100 mL EV em 10 min — REPETIR até 3 doses ou até melhora clínica/aumento de Na 4-6 mmol.
   (Preparo: NaCl 20% 15 mL + SF 0,9% 85 mL = 100 mL de NaCl ~3%).
2. Reavaliar Na sérico após cada bolus (15-30 min); meta de elevação 4-6 mmol nas primeiras 6 h.
3. Após melhora, manter NaCl 0,9% ou 3% conforme cálculo (Adrogué-Madias) com ALVO máximo 8 mmol/24 h.

ASSINTOMÁTICA CRÔNICA — POR ETIOLOGIA:
4. Hipovolêmica: SF 0,9% 1 mL/kg/h, vigiar overshoot ao restaurar volume.
5. SIADH: restrição hídrica 800 mL/dia + NaCl VO 3-9 g/dia; furosemida 20-40 mg/dia se refratário.
6. SIADH refratário/Na <125 sintomática: tolvaptana 15 mg VO 1×/dia (em internação, monitor Na 6/6 h, suspender se ↑>10/24 h).
7. Insuf adrenal suspeita: hidrocortisona 100 mg EV em bolus + 50 mg 6/6 h.
8. Hipervolêmica (IC/cirrose): restrição hídrica + furosemida; otimizar terapia de base.

VIGILÂNCIA / PREVENÇÃO DE SDO:
9. Na sérico 2/2 h nas primeiras 12 h; 4/4 h até 48 h.
10. SE Na subir >8 mmol em 24 h (hipercorreção):
    - Glicose 5% 3 mL/kg/h EV
    - Desmopressina (DDAVP) 2-4 mcg EV ou SC, repetir cada 6-8 h
    - Meta: REDUZIR Na em 1-2 mmol/h até voltar ao alvo.
11. Suspender drogas suspeitas (tiazídicos, ISRS, carbamazepina, antipsicóticos) após investigação.
\`\`\``,
    },
  },

  // ==================== 20. SDRA ====================
  {
    protocolId: "fp-sdra",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 ESICM/ATS Global Definition of ARDS 2023 + ESICM Guideline 2023 + Update 2025:**

**Critérios diagnósticos (Berlim modificado/Global 2023):**
- Início <7 d de insulto.
- Opacidades bilaterais à imagem (RX, TC ou **POCUS** — agora aceito).
- Edema não explicado por IC/sobrecarga.
- Hipoxemia: **PaO₂/FiO₂ ≤300 com PEEP/CPAP ≥5** OU **SpO₂/FiO₂ ≤315 (com SpO₂ ≤97%)** OU **em HFNC ≥30 L/min**.
- **Leve 200-300 / Moderada 100-200 / Grave ≤100.**

**Manejo (ESICM 2023 + atualização):**

1. **Tratar a causa** (sepse, pneumonia, aspiração, trauma, transfusão).
2. **🆕 Suporte ventilatório escalonado:**
   - **HFNC** 1ª linha em hipoxemia leve-moderada não intubada (FLORALI).
   - **VNI/CPAP** em DPOC/cardiogênico/imunossuprimido — não retardar IOT se falha em 1-2 h.
   - **Awake proning** em SDRA leve-moderada não intubada — recomendação 2023 (PROFLO, COVID-PRONE).
3. **Ventilação protetora (IOT):**
   - **VT 4-8 mL/kg peso predito** (alvo 6).
   - **Pplatô ≤30 cmH₂O**, **driving pressure ≤14**.
   - **PEEP titulada** — alta em moderada-grave (tabela ARDSNet alta ou stress index/oclusão); evitar hiperinsuflação.
   - **FiO₂ mínima para SpO₂ 88-95%** (PaO₂ 55-80).
4. **🆕 Prona >12 h (preferencialmente 16 h) em SDRA moderada-grave (PaO₂/FiO₂ <150)** — recomendação **forte** (PROSEVA, atualização meta-análise 2024).
5. **Bloqueio neuromuscular:** **bólus intermitentes** (cisatracúrio) em assincronia/Pplatô alto; **infusão contínua não rotineira** (ROSE) — apenas SDRA grave nas primeiras 48 h.
6. **🆕 Manobras de recrutamento agressivas (PEEP escalonada >40 cmH₂O):** **NÃO recomendadas** (ART — aumenta mortalidade).
7. **ECMO V-V em centros experientes:** PaO₂/FiO₂ <80 por ≥6 h ou hipercapnia refratária com pH <7,25 (EOLIA, ESICM 2023).
8. **Conservação hídrica:** **estratégia restritiva** após ressuscitação (FACTT) — diurético/ultrafiltração para balanço negativo.
9. **Corticoide:** **dexametasona 6 mg/dia 10 d em SDRA por COVID-19 (RECOVERY)**; em **SDRA precoce moderada-grave não-COVID, considerar metilprednisolona 1 mg/kg/dia** (DEXA-ARDS, CoDEX) — evidência heterogênea, individualizar.
10. **Não recomendado:** β2-agonista profilático, surfactante, óxido nítrico rotineiro (apenas resgate temporário em hipoxemia refratária pré-ECMO), estatinas.

**Vigilância:** mecânica respiratória 1×/turno, gasometria, balanço hídrico, sedação direcionada (RASS −2 a 0 quando possível, despertar diário, ABCDEF).`,

      treatment: `**Desmame:** TRE (tubo T ou PSV 8/PEEP 5 por 30-120 min) diário; extubar para HFNC ± VNI profilática em alto risco. Reabilitação precoce (mobilização ≤48 h se hemodinâmica estável). Acompanhamento pós-UTI (PICS).`,

      prescriptions: `\`\`\`
1. IOT com VC, peso predito (homem: 50 + 0,91×(alt cm−152,4); mulher: 45,5 + 0,91×(alt cm−152,4)).
2. VC volume-controlado: VT 6 mL/kg PP, FR 16-30 (alvo pH ≥7,20, PaCO₂ permissivo até 60-70).
3. PEEP conforme tabela ARDSNet alta (PEEP 14-18 em FiO₂ 0,8-1,0).
4. FiO₂ titulada para SpO₂ 88-95%; Pplatô ≤30, driving pressure ≤14.
5. Sedação: fentanil 1-3 mcg/kg/h + propofol 1-3 mg/kg/h ou midazolam 0,03-0,2 mg/kg/h — RASS −3/−4 nas primeiras 48 h se SDRA grave.
6. Cisatracúrio 0,15 mg/kg bolus + 0,03-0,6 mg/kg/h BIC por até 48 h se PaO₂/FiO₂ <120 ou assincronia (NMBA).
7. PRONA por 16 h/dia se PaO₂/FiO₂ <150 — manter até PaO₂/FiO₂ >150 em supino por 4 h.
8. Furosemida 20-40 mg EV 6/6 h após estabilização para balanço hídrico negativo (FACTT).
9. Dexametasona 6 mg EV 1×/dia por 10 dias se SDRA por COVID-19.
   (SDRA grave precoce não-COVID: metilprednisolona 1 mg/kg/dia EV — individualizar.)
10. Profilaxia: enoxaparina 40 mg SC/dia, pantoprazol 40 mg EV/dia, cabeceira 30°.
11. Acionar centro ECMO se: PaO₂/FiO₂ <80 por ≥6 h, pH <7,25 com PaCO₂ >60 apesar de ventilação otimizada.
12. NÃO USAR: manobra de recrutamento agressiva, β2 profilático, surfactante, NO de rotina.
\`\`\``,
    },
  },

  // ==================== 21. PNEUMONIA GRAVE (PAC) ====================
  {
    protocolId: "fp-pneumonia-grave",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ATS/IDSA 2019 + ERS/ESCMID 2023 + SBPT 2024-2025:**

**Avaliação de gravidade:** **CURB-65** (≥2 internação, ≥3 UTI) e **PSI**; **critérios IDSA/ATS** para UTI (1 maior: choque com vasopressor / IRpA com IOT — OU 3 menores: FR ≥30, PaO₂/FiO₂ ≤250, multilobar, confusão, ureia ≥50, leucopenia, plaquetopenia, hipotermia, hipotensão respondedora a fluidos).

**Diagnóstico microbiológico (PAC grave):**
- **Hemocultura, escarro/aspirado traqueal cultura + Gram, antígeno urinário pneumococo + Legionella, PCR multiplex respiratório (incluir SARS-CoV-2, influenza A/B, VSR), procalcitonina seriada.**

**Tratamento empírico (UTI, **sem fatores para Pseudomonas/MRSA**):**
- **β-lactâmico (ceftriaxona 2 g/d OU ampicilina-sulbactam 3 g 6/6 h) + macrolídeo (azitromicina 500 mg/d) OU fluoroquinolona respiratória (levofloxacino 750 mg/d, moxifloxacino 400 mg/d).**

**Cobertura para Pseudomonas** (DPOC grave, bronquiectasias, ATB recente, internação recente, imunossupressão):
- **Piperacilina-tazobactam 4,5 g 6/6 h OU cefepima 2 g 8/8 h OU meropeném 1 g 8/8 h** + macrolídeo/quinolona.

**Cobertura para MRSA** (cultura prévia, drogas IV, cavitação, gripe grave, IRA):
- **Vancomicina** (alvo vale 15-20) **OU linezolida 600 mg 12/12 h**.

**🆕 Influenza/SARS-CoV-2:**
- **Oseltamivir 75 mg 12/12 h por 5 d** em **TODA PAC grave em temporada**, mesmo PCR pendente — iniciar ≤48 h (idealmente).
- **COVID-19 grave:** **dexametasona 6 mg/d 10 d** + considerar **remdesivir** (≤7 d sintomas + IRpA não invasiva) + **anti-IL-6 (tocilizumabe) ou baricitinibe** se inflamação progressiva (CRP↑, escalonamento O₂).

**Suporte:**
- HFNC 1ª linha em hipoxemia; **awake proning**; VNI restrita a DPOC/cardiogênico.
- IOT precoce se trabalho respiratório/IRpA progressiva — não retardar.
- Cristaloide balanceado guiado por responsividade; noradrenalina em choque (ver sepse).
- **Corticoide adjuvante (hidrocortisona 200 mg/d 4-7 d)** — **CAPE-COD 2023**: reduz mortalidade em PAC grave por germe não-influenza/não-COVID. Considerar em UTI sem contraindicação.

**Duração ATB:** 5-7 d em melhora clínica (procalcitonina pode guiar suspensão); 10-14 d em Pseudomonas/MRSA/empiema/bacteremia complicada.

**Não recomendado:** corticoide profilático em PAC leve, fluoroquinolona em monoterapia se suspeita de resistência local, broncodilatador rotineiro sem broncoespasmo.`,

      treatment: `Reavaliar resposta em 48-72 h (clínica + procalcitonina). **Falha terapêutica**: rever foco (empiema, abscesso, derrame parapneumônico complicado → drenar), agente atípico/oportunista, complicação extrapulmonar.

**Vacinação na alta:** pneumocócica (PCV20 ou PCV15+PPV23), influenza, COVID-19, VSR (≥60 a, gestante 32-36 sem).`,

      prescriptions: `\`\`\`
PAC GRAVE — UTI (sem risco Pseudomonas/MRSA):
1. Ceftriaxona 2 g EV 1×/dia + Azitromicina 500 mg EV 1×/dia.
   OU Levofloxacino 750 mg EV 1×/dia (monoterapia se alergia β-lactâmico).
2. Oseltamivir 75 mg VO/SNG 12/12 h por 5 dias (suspender se PCR influenza negativo).
3. Hidrocortisona 50 mg EV 6/6 h por 4-7 dias (se sem contraindicação — CAPE-COD).
4. Cristaloide balanceado conforme responsividade (POCUS/PLR); noradrenalina se PAM <65 após 30 mL/kg.
5. O₂ por HFNC 30-60 L/min FiO₂ titulada (alvo SpO₂ 92-96%); awake proning.
6. Profilaxia: enoxaparina 40 mg SC/dia, pantoprazol 40 mg EV/dia, cabeceira 30-45°.

COBERTURA PSEUDOMONAS (DPOC/bronquiectasia/ATB recente):
7. Piperacilina-tazobactam 4,5 g EV 6/6 h (infusão estendida 4 h preferencial) + Azitromicina 500 mg/dia.
   OU Cefepima 2 g EV 8/8 h.

COBERTURA MRSA (cavitação/gripe/IRA):
8. Vancomicina 25-30 mg/kg ataque + 15-20 mg/kg 12/12 h (vale 15-20).
   OU Linezolida 600 mg EV/VO 12/12 h.

COVID-19 GRAVE:
9. Dexametasona 6 mg EV/VO 1×/dia por 10 dias.
10. Remdesivir 200 mg D1 + 100 mg/dia D2-D5 (se ≤7 d de sintomas + necessidade de O₂ não invasivo).
11. Tocilizumabe 8 mg/kg EV (máx 800 mg) dose única se progressão (CRP alta, escalonamento O₂) e sem contraindicação.

INVESTIGAÇÃO:
12. RX/TC tórax, gasometria, lactato, hemograma, função renal/hepática, PCR, procalcitonina.
13. 2 hemoculturas + escarro/aspirado cultura + Gram + antígeno urinário pneumococo/Legionella + PCR multiplex respiratório.
14. Notificar SARS-CoV-2 e influenza conforme protocolo SINAN.
\`\`\``,
    },
  },

  // ==================== 22. CHOQUE HEMORRÁGICO / TRAUMA (ATLS 11ª + STAMP 2024) ====================
  {
    protocolId: "fp-choque-hemorragico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ATLS 11ª edição (2023-2024) + EAST/STAMP 2024 + ERC Trauma 2025:**

**Identificação precoce:** taquicardia + pulso fino + ↑FR + ↓pulso + AMS + lividez. **Classes I-IV abandonadas isoladamente** — usar **Shock Index (FC/PAS) ≥1,0** + **lactato ≥2** + **base déficit ≤−6** + **resposta a 1 L cristaloide** como triagem dinâmica.

**Princípios atualizados:**

1. **🆕 Hipotensão permissiva** (PAS alvo **80-90 mmHg / PAM 50-65** em sangrante não controlado, exceto **TCE** — alvo PAS ≥110/PAM ≥80).
2. **🆕 Damage Control Resuscitation (DCR):**
   - **Reposição com hemocomponentes em proporção 1:1:1** (CH:PFC:plaquetas) **OU sangue total (whole blood)** quando disponível — evitar cristaloide além de 1 L (PROPPR, STAMP 2024).
   - **Limitar cristaloide a ≤1 L** na fase inicial.
3. **🆕 Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h em ≤3 h do trauma** (CRASH-2/3) — recomendação forte; iniciar pré-hospitalar se possível.
4. **Cálcio:** **gluconato 1-2 g EV após 1ª unidade de hemocomponente** e a cada 4 unidades — hipocalcemia da transfusão maciça é fator independente de mortalidade.
5. **Controle definitivo do sangramento:**
   - **Compressão direta + torniquete** em sangramento exsanguinante de extremidade (CoTCCC).
   - **Sutura/grampo, balão tamponador (Foley) em ferimento penetrante de junção.**
   - **REBOA** zona 1 ou 3 em hemorragia infradiafragmática refratária (centros experientes).
   - **Cirurgia/embolização** definitivas em até 60 min ("damage control").
6. **🆕 Reversão de anticoagulantes:**
   - Varfarina: CCP 4F 25-50 UI/kg + vit K 10 mg.
   - DOAC anti-Xa: andexanet alfa OU CCP 50 UI/kg.
   - Dabigatrana: idarucizumabe 5 g.
   - Antiplaquetário: NÃO transfundir plaquetas profilaticamente (PATCH); exceção: cirurgia iminente ou TCE.
7. **TEG/ROTEM** preferencial sobre coagulograma para guiar reposição em centros equipados.
8. **Aquecimento agressivo** (manta, fluido aquecido, ambiente >24 °C) — tríade letal: hipotermia + acidose + coagulopatia.

**Não recomendado:** cristaloide >1 L em hemorragia ativa, coloide sintético (HES — proibido), fator VIIa rotineiro, vasopressor como substituto de volume/sangue.`,

      treatment: `**Pós-controle do sangramento:** monitorização UTI, normalizar lactato/BD, profilaxia TEV em 24-48 h, profilaxia úlcera de estresse, antibiótico se trauma penetrante/contaminado, reabilitação precoce.

**Doação compatível com religião:** sangue total reconstituído; em testemunhas de Jeová: ácido tranexâmico, ferro EV, EPO, fator VIIa em casos selecionados.`,

      prescriptions: `\`\`\`
ATIVAÇÃO PROTOCOLO TRANSFUSÃO MACIÇA (PTM):
1. Acionar banco de sangue para PTM: 6 CH : 6 PFC : 1 pool plaquetas (1ª remessa); repetir até controle.
2. Cristaloide balanceado (Ringer lactato) MÁXIMO 1 L se hemocomponente disponível.
3. Ácido tranexâmico 1 g EV em 10 min IMEDIATO + 1 g EV em 8 h (se ≤3 h do trauma).
4. Gluconato de cálcio 10% 20 mL EV após 1ª UI de hemocomponente; repetir a cada 4 UI ou se Ca iônico <1,1.
5. Aquecer todos os fluidos/sangue (38-40 °C); manta térmica, ambiente >24 °C.
6. 2 acessos calibrosos (16G ou maior) ou IO/CVC; sondagem vesical para débito.
7. Reverter anticoagulação:
   - Varfarina: CCP 4F 25-50 UI/kg + vit K 10 mg EV.
   - DOAC anti-Xa: andexanet alfa OU CCP 50 UI/kg.
   - Dabigatrana: idarucizumabe 5 g EV.
8. Hemograma, gasometria + lactato + BD + Ca iônico, coagulograma (TP, TTPa, fibrinogênio), TEG/ROTEM se disponível, tipagem + prova cruzada urgente.
9. FAST + AngioTC tórax/abdome/pelve assim que minimamente estável; cirurgia/embolização em ≤60 min.
10. ALVOS: PAS 80-90 (≥110 se TCE), Hb ≥7-8, plaquetas ≥50 mil (≥100 mil em TCE/SNC), fibrinogênio ≥1,5 g/L, TP/TTPa <1,5×, T ≥36 °C, pH ≥7,2, Ca iônico >1,1.
11. Profilaxia ATB se penetrante: cefazolina 2 g EV (limpo) ou ceftriaxona + metronidazol (abdome).
12. Antitetânica conforme cartão.

PÓS-CONTROLE:
13. UTI; reavaliar PTM/encerrar; iniciar profilaxia TEV em 24-48 h após hemostasia.
\`\`\``,
    },
  },

  // ==================== 23. HEMORRAGIA PÓS-PARTO (HPP) ====================
  {
    protocolId: "fp-hpp",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**FIGO/WHO 2022-2024 + ACOG 2024 + Febrasgo 2025:**

**Definição:** sangramento ≥500 mL parto vaginal OU ≥1.000 mL cesárea OU qualquer sangramento com instabilidade hemodinâmica.

**🆕 Bundle E-MOTIVE (WHO 2023, Lancet):** redução >60% em desfechos graves quando aplicado em **TODAS as parturientes**:
- **E**arly detection — coletor de sangue calibrado (drape) sob a paciente.
- **M**assage uterina + **O**xitocina + **T**ranexâmico + **I**V fluids + **V**aginal/uterine examination + **E**scalation simultâneos (não sequenciais).

**Avaliação 4 T:** **Tônus** (atonia 70%), **Trauma** (laceração, ruptura), **Tecido** (restos), **Trombina** (coagulopatia, embolia LA).

**Conduta — TODAS simultâneas:**

1. **2 acessos calibrosos (≥16G), O₂, monitor, decúbito esquerdo se anteparto.**
2. **Massagem uterina bimanual** + **esvaziamento vesical** (cateter Foley).
3. **🆕 Uterotônicos em sequência rápida:**
   - **Oxitocina 10 UI IM imediata + 20-40 UI EV em 500-1.000 mL Ringer a 250 mL/h** (evitar bolus rápido — hipotensão).
   - **Carbetocina 100 mcg EV/IM dose única** (preferencial em cesárea — termoestável; CHAMPION OMS).
   - **🆕 Ácido tranexâmico 1 g EV em 10 min — IMEDIATO em qualquer HPP**, repetir 1 g em 30 min se persistir (WOMAN trial).
   - **Metilergometrina 0,2 mg IM** (contraindicado em HAS, pré-eclâmpsia).
   - **Misoprostol 800 mcg sublingual ou retal**.
   - **Carboprost (PG F2α) 250 mcg IM** a cada 15 min, máx 8 doses (contraindicado em asma).
4. **Revisar canal de parto** (reparar lacerações, drenar hematoma).
5. **Curagem/curetagem** se restos placentários.
6. **🆕 Tamponamento uterino:**
   - **Balão de Bakri / sonda Foley com 60-80 mL** ou **pacote de gaze** se balão indisponível.
   - **🆕 Suction tube uterine tamponade (SUTU/Jada System)** — alternativa por sucção a vácuo (FDA 2020, recomendação ACOG 2024).
7. **Cirúrgico se refratário:**
   - Suturas compressivas (B-Lynch).
   - Ligadura de uterinas/hipogástricas.
   - Embolização arterial seletiva (se hemodinamicamente estável).
   - **Histerectomia** como recurso final.
8. **🆕 Reposição volêmica — DCR obstétrico:**
   - Limitar cristaloide a ≤2 L; iniciar hemocomponentes precocemente em proporção 1:1:1.
   - Fibrinogênio é o 1º fator a cair em HPP — **manter ≥2 g/L** (CRYOSTAT-2 2024 sugere benefício de criopreciptado/concentrado de fibrinogênio precoce).
   - Cálcio após cada 4 UI hemocomponente.

**Pré-eclâmpsia/eclâmpsia associada:** sulfato de magnésio (ver protocolo eclâmpsia); evitar metilergometrina/carboprost se HAS.`,

      treatment: `**Pós-controle:** UTI obstétrica, vigilância de Sheehan (hipopituitarismo), coagulopatia, IRA. Profilaxia TEV após hemostasia. Aleitamento orientado. Acompanhamento ambulatorial em 7-14 d.`,

      prescriptions: `\`\`\`
ATIVAÇÃO BUNDLE E-MOTIVE — IMEDIATO:
1. Posicionar coletor calibrado sob a paciente; massagem uterina bimanual; esvaziar bexiga (Foley).
2. Oxitocina 10 UI IM + Oxitocina 20 UI em 500 mL Ringer EV a 250 mL/h (até 40 UI/L).
3. Ácido tranexâmico 1 g EV em 10 min IMEDIATO; repetir 1 g em 30 min se persistir (≤3 h pós-início).
4. Ringer lactato EV em 2 acessos calibrosos — máximo 2 L; depois hemocomponentes.
5. Metilergometrina 0,2 mg IM (CONTRAINDICADO em HAS/pré-eclâmpsia) — repetir em 5 min se necessário.
6. Misoprostol 800 mcg sublingual OU retal dose única.
7. Carboprost 250 mcg IM a cada 15 min (máx 8 doses) — CONTRAINDICADO em asma.
8. Carbetocina 100 mcg EV/IM dose única (alternativa à oxitocina, especialmente em cesárea).

REFRATÁRIO:
9. Balão de Bakri 250-500 mL OU 2 sondas Foley 24F com 80 mL cada.
   OU SUTU/Jada (sucção uterina a vácuo) se disponível.
10. Acionar PTM: 4 CH : 4 PFC : 1 pool plaquetas; manter Hb ≥7-8, fibrinogênio ≥2 g/L, plaq ≥50 mil.
11. Crioprecipitado 10 UI OU concentrado de fibrinogênio 2-4 g se fibrinogênio <2 g/L.
12. Gluconato de cálcio 10% 20 mL EV após cada 4 UI de hemocomponente.
13. Cirurgia: B-Lynch / ligadura uterina/hipogástrica / embolização / histerectomia conforme resposta.

INVESTIGAÇÃO E SUPORTE:
14. Hemograma, coagulograma, fibrinogênio, ROTEM/TEG, função renal, gasometria + lactato + Ca iônico.
15. Aquecer fluidos e ambiente; manta térmica; alvo T ≥36 °C, pH ≥7,2.
16. Antibiótico profilático (cefazolina 2 g EV) se manipulação intrauterina/cirurgia.
17. UTI obstétrica; profilaxia TEV (enoxaparina 40 mg SC) após hemostasia confirmada por 12-24 h.
\`\`\``,
    },
  },

  // ==================== 24. ATLS — TRAUMA INICIAL ====================
  {
    protocolId: "fp-atls",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 ATLS 11ª edição (2023-2024) + ERC Trauma 2025 + EAST 2024:**

**Avaliação primária — XABCDE:**

- **🆕 X — eXsanguinating hemorrhage:** controle de sangramento exsanguinante **ANTES de via aérea** — torniquete, compressão, hemostáticos (Combat Gauze).
- **A — Airway + proteção cervical:** colar + IOT se GCS ≤8, queimadura facial, trauma maxilofacial; sequência rápida (etomidato/cetamina + rocurônio); **videolaringoscopia preferencial em trauma**.
- **B — Breathing:** descomprimir pneumotórax hipertensivo (5º EIC linha axilar média, agulha 14G ≥8 cm OU **toracostomia digital** — ATLS 11 prioriza no adulto), drenar hemotórax, fechar pneumotórax aberto (3 lados).
- **C — Circulation:** controlar sangramento + 2 acessos calibrosos + DCR (ver choque hemorrágico). **POCUS-FAST estendido** (e-FAST: + tórax para PNX/derrame).
- **D — Disability:** GCS, pupilas, glicemia, foco de TCE.
- **E — Exposure + ambiente:** despir + manta aquecida; T alvo ≥36 °C.

**Avaliação secundária:** história AMPLA, exame de cabeça aos pés, exames-alvo (RX tórax/pelve, FAST, AngioTC com contraste se hemodinamicamente respondedor — "pan-scan" em trauma fechado de alta energia).

**🆕 TCE moderado-grave (GCS 3-12):**
- **PAS ≥110 mmHg / PAM ≥80** (BTF 2023) — **NÃO usar hipotensão permissiva**.
- **SpO₂ ≥94%, PaCO₂ 35-40** (evitar hiper/hipocapnia).
- **Reverter anticoagulação imediatamente** (CCP, andexanet, idarucizumabe).
- **Ácido tranexâmico** se ≤3 h (CRASH-3 — benefício em TCE leve-moderado).
- **Monitor PIC** (alvo <22 mmHg, PPC 60-70) se GCS ≤8 + TC anormal ou ≥40 a + hipotensão.
- **Salina hipertônica 3% bolus 250 mL** preferencial sobre manitol em hipertensão intracraniana; manitol 0,5-1 g/kg alternativa.
- **Craniectomia descompressiva** em HIC refratária (RESCUE-icp).
- **Profilaxia anticonvulsivante (levetiracetam 7 d)** em TCE grave/contusão/hematoma.
- **Profilaxia TEV (HBPM)** em 24-48 h se hematoma estável.

**🆕 Trauma raquimedular:**
- **Não usar metilprednisolona** (NASCIS — sem benefício, dano).
- Imobilização em prancha **apenas para transporte**; remover ASAP (úlcera de pressão).
- PAM ≥85-90 por 7 d em lesão cervical/torácica alta.
- Cirurgia descompressiva precoce (<24 h) em lesão cervical incompleta.

**Trauma pediátrico:** tubo sem cuff até 8 a (cuff também aceito modernamente), reposição 20 mL/kg, dose única tranexâmico se evidência de sangramento.

**Trauma em gestante ≥20 sem:** decúbito lateral esquerdo (ou desviar útero), CTG ≥4 h, anti-D se Rh−, perimortem cesárea em PCR materna em ≤5 min.

**Não recomendado:** corticoide em TCE, manobra de Sellick rotineira, IOT antes de controle de sangramento maciço de extremidade.`,

      treatment: `**Encaminhamento definitivo:** centro de trauma nível I em politrauma com ISS ≥16, TCE grave, lesão raquimedular, queimadura grande, trauma pediátrico complexo.

**Prevenção secundária:** vacina antitetânica, profilaxia raiva se mordedura, ATB profilático em fratura exposta (cefazolina ± gentamicina), suporte psicológico (PTSD).`,

      prescriptions: `\`\`\`
PRIMEIRA HORA — XABCDE:
1. Torniquete em sangramento exsanguinante de extremidade; compressão + hemostático em troncos.
2. Colar cervical rígido + prancha (apenas transporte); IOT se GCS ≤8 ou via aérea instável (etomidato 0,3 mg/kg + rocurônio 1,2 mg/kg, videolaringoscopia).
3. Toracostomia digital + dreno torácico 28-32F se pneumotórax/hemotórax.
4. 2 acessos calibrosos (16G); ativar PTM se choque (1 CH:1 PFC:1 plaq, 1:1:1 OU sangue total).
5. Ácido tranexâmico 1 g EV em 10 min + 1 g em 8 h (≤3 h do trauma).
6. Gluconato de cálcio 10% 20 mL EV após 1ª UI de hemocomponente e a cada 4 UI.
7. Cobertor térmico + fluido aquecido + ambiente >24 °C — alvo T ≥36 °C.
8. Glicemia capilar; tiamina 100 mg EV se etilista/desnutrido; glicose 50% 50 mL se HGT <60.

TCE MODERADO-GRAVE (GCS ≤12):
9. Cabeceira 30°, normocapnia, SpO₂ ≥94%, PAM ≥80 (PAS ≥110).
10. Salina hipertônica 3% 250 mL EV em 15 min (preferencial) OU manitol 20% 0,5-1 g/kg EV em 20 min se sinais de HIC/herniação.
11. Reverter anticoagulação (ver protocolo AVCH/choque hemorrágico).
12. Levetiracetam 1.000 mg EV ataque + 500-1.000 mg 12/12 h por 7 dias (profilaxia em TCE grave).
13. Sedação dirigida (RASS −2 a −3) com fentanil + propofol; cisatracúrio em refratariedade.
14. Avaliar neurocirurgia para monitor PIC (alvo <22) e craniectomia se HIC refratária.

EXAMES E DESTINO:
15. RX tórax + pelve + FAST/e-FAST na sala vermelha; AngioTC pan-scan se respondedor.
16. Hemograma, gasometria + lactato + BD + Ca iônico, coagulograma, função renal/hepática, β-HCG (mulher), tipagem + prova cruzada.
17. Antitetânica conforme cartão; ATB se fratura exposta (cefazolina 2 g EV ± gentamicina) ou trauma penetrante.
18. Acionar centro de trauma nível I; cirurgia/embolização em ≤60 min se hemorragia interna.

NÃO FAZER:
- Hipotensão permissiva em TCE (alvo PAS ≥110).
- Metilprednisolona em trauma raquimedular.
- Corticoide em TCE.
- Cristaloide >2 L se hemocomponente disponível.
- Manobra de Sellick rotineira.
\`\`\``,
    },
  },
];
