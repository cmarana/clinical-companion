/**
 * Reescrita editorial PULSO 2026 — Lote B
 * Cobre os protocolos críticos solicitados (red flags) que ainda não estavam
 * em _sectionPatches2026.ts: EAP, IRpA, Coma, HDA/HDB, Abdome Agudo, EHH,
 * Hipoglicemia, Toxidromes/peçonhentos, Grande Queimado, Meningite, choques
 * (hipovolêmico/obstrutivo) e Convulsão Aguda.
 *
 * Diretrizes-base: ESC 2024 (HF), AHA/ACC 2024-2025, GINA 2025, GOLD 2025,
 * BTS/ESICM 2024 (IRpA), ACG/ESGE 2024 (HDA/HDB), WSES 2024 (abdome agudo),
 * ADA 2026 (EHH/hipoglicemia), AAPCC/ToxNet 2025, MS Brasil/Funed 2025
 * (peçonhentos), ABA 2024 (queimado), IDSA/ESCMID 2024 (meningite),
 * ATLS 11ª ed. (choque hipovolêmico), ILAE 2025 (convulsão).
 */

import type { SectionPatch2026 } from "./_sectionPatches2026";

export const SECTION_PATCHES_2026_B: SectionPatch2026[] = [
  // ==================== EDEMA AGUDO DE PULMÃO ====================
  {
    protocolId: "fp-eap",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Reconhecimento (≤5 min):** dispneia súbita + ortopneia + estertores bolhosos + SatO₂ ↓.
**POCUS pulmonar:** linhas B difusas bilaterais (>3/campo) + VCI plétorica + FE↓ confirmam.

**🆕 Estratificação por perfis hemodinâmicos (ESC 2023/2024 — Forrester adaptado):**

| Perfil | Congestão | Perfusão | Conduta-âncora |
|---|---|---|---|
| **A — Quente/seco** | Não | Boa | Otimizar HF crônica, alta |
| **B — Quente/úmido** *(80%)* | Sim | Boa | **Diurético + vasodilatador (nitrato)** |
| **L — Frio/seco** | Não | Má | Volume cauteloso 250 mL + reavaliar |
| **C — Frio/úmido** *(choque cardiogênico)* | Sim | Má | **Inotrópico ± vasopressor + suporte mecânico** |

**Bundle dos primeiros 30 min (perfil B — quente/úmido, mais comum):**
1. Sentar (90°), O₂ titulado SatO₂ 92-96% (88-92% se DPOC).
2. **VNI BiPAP IPAP 10 / EPAP 5** (preferencial) ou CPAP 10 cmH₂O — reduz IOT e mortalidade (3CPO).
3. **Furosemida 40-80 mg EV bolus** (ou 2,5× dose oral domiciliar) — DOSE.
4. **Nitroglicerina 10-20 mcg/min EV**, titular até PAS 110 ou alívio (se PAS >110).
5. Acesso, monitor, ECG, troponina, BNP/NT-proBNP, gasometria, RX tórax, eco POCUS.
6. Identificar gatilho **CHAMPIT**: SCA, HAS, Arritmia, Mecânico, Pulmonar (TEP/PNM), Infecção, Tamponamento.

**Perfil C (frio/úmido — choque cardiogênico):** ver protocolo específico — dobutamina/milrinona + noradrenalina + considerar Impella/IABP/ECMO V-A (DanGer Shock 2024).`,

      treatment: `**Diuréticos (DOSE/ADVOR/CLOROTIC):**
- Furosemida EV 1-2,5× dose oral em uso → reavaliar diurese 2h.
- Resposta inadequada (<100 mL/h ou Na urinário <50 mEq/L em 2h): **dobrar dose** OU adicionar **acetazolamida 500 mg EV/dia** (ADVOR) ou **hidroclorotiazida 25-50 mg VO**.
- BIC contínuo de furosemida 5-20 mg/h se refratário.

**Vasodilatadores (PAS >110):**
- **Nitroglicerina** 10-200 mcg/min — preferencial em SCA/isquemia.
- **Nitroprussiato** 0,3-5 mcg/kg/min se HAS grave + EAP (cuidado: tiocianato).
- **🆕 Clevidipina** alternativa em emergência hipertensiva + EAP.

**VNI (3CPO, ESC 2023):** reduz IOT (NNT ~8) e mortalidade. Alvo: SatO₂ 94-96%, FR <25, conforto. Falha em 1-2 h → IOT.

**🆕 4 pilares iniciados antes da alta (STRONG-HF, ESC 2023):**
- iSGLT2 (dapaglifozina/empaglifozina) — pode iniciar em internação se hemodinamicamente estável.
- ARNI (sacubitril/valsartana) — substituir IECA quando estável (PIONEER-HF).
- β-bloqueador (carvedilol/bisoprolol/metoprolol succinato) — após sair de congestão.
- MRA (espironolactona/eplerenona) — se K <5 e ClCr >30.
- **Finerenona** se DM2 + DRC (FIDELIO/FIGARO).

**Não fazer:** morfina rotineira (↑mortalidade), nesiritida, dopamina em baixas doses, β-bloqueador IV em descompensação.`,

      prescriptions: `\`\`\`
PRIMEIROS 15 MIN (perfil B — quente/úmido):
1. Cabeceira 90°, O₂ por máscara 5-10 L/min — alvo SatO₂ 92-96%.
2. VNI BiPAP IPAP 10 / EPAP 5 cmH₂O, FiO₂ 60% — titular conforme conforto e SatO₂.
3. Furosemida 40 mg EV bolus (80 mg se já em uso domiciliar de 40 mg/dia).
4. Nitroglicerina 50 mg em SF 0,9% 250 mL — iniciar 10 mcg/min EV BIC, ↑ 5 mcg a cada 5 min até PAS 110 ou alívio.
5. AAS 300 mg VO mastigado se suspeita de SCA.
6. Monitor, oximetria contínua, ECG 12 derivações, RX tórax, POCUS pulmonar/cardíaco.
7. Hemograma, eletrólitos, função renal, troponina, BNP/NT-proBNP, gasometria.

PERFIL C (frio/úmido — CHOQUE CARDIOGÊNICO):
8. Dobutamina 250 mg em SF 0,9% 250 mL — 2,5-10 mcg/kg/min EV BIC (ver fp-choque-cardiogenico).
9. Noradrenalina associada se PAM <65 mmHg.
10. Acionar hemodinâmica (revascularização) e UTI cardiológica; considerar Impella CP/ECMO V-A.

GATILHO IDENTIFICADO:
11. Se SCA → ICP primária ≤90 min + DAPT + anticoagulação.
12. Se FA com RVR → controle de FC (amiodarona se choque) ou cardioversão se instável.
13. Se emergência hipertensiva → titular nitrato/clevidipina (ver fp-crise-hipertensiva).

ANTES DA ALTA HOSPITALAR (STRONG-HF):
14. Iniciar/otimizar 4 pilares: iSGLT2 + ARNI + β-bloq + MRA antes da alta.
15. Reavaliação ambulatorial em 7 dias; pesar diariamente; restrição hídrica 1,5 L/dia se Na <130.
\`\`\``,
    },
  },

  // ==================== INSUFICIÊNCIA RESPIRATÓRIA AGUDA ====================
  {
    protocolId: "fp-irpa",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição (gasometria arterial):** PaO₂ <60 mmHg em ar ambiente (Tipo I — hipoxêmica) e/ou PaCO₂ >50 mmHg com pH <7,35 (Tipo II — hipercápnica).

**Avaliação rápida (≤5 min):** ABC, FR, SatO₂, esforço (musculatura acessória, paradoxo abdominal), nível de consciência, ausculta, POCUS pulmonar.

**🆕 Indicações de IOT imediata (qualquer um):**
- Parada respiratória / Glasgow ≤8 / via aérea instável.
- pH <7,20 ou hipoxemia refratária (SatO₂ <88% com O₂ máximo).
- Choque com IRpA, agitação que impede VNI/HFNC.
- Falência de VNI/HFNC em 1-2 h (FR persistente >30, esforço crescente, queda do NC).

**Fluxograma de suporte por tipo:**
- **Tipo I (hipoxêmica não-DPOC):** O₂ → **HFNC 50-60 L/min FiO₂ titulada** (preferência sobre VNI — FLORALI, RECOVERY-RS) → IOT.
- **Tipo II (hipercápnica — DPOC, obesidade):** **VNI BiPAP** (1ª linha — NNT 5 para evitar IOT). EPAP 5, IPAP 10-14.
- **EAP cardiogênico:** VNI/CPAP (3CPO).

**Awake proning:** sugerido em hipoxêmica não-IOT (COVID, pneumonia) — sessões 30-120 min.

**Parâmetros iniciais de VM (após IOT):**
- VC: **6 mL/kg de peso predito** (proteção pulmonar — ARDSnet).
- FR: 14-20, ajustar por PaCO₂.
- PEEP: 5 (não-SDRA), 8-15 (SDRA — tabela PEEP/FiO₂).
- FiO₂: começar 100%, titular para SatO₂ 92-96% (88-92% em DPOC).
- Pplatô **≤30 cmH₂O**, driving pressure **≤15** (Amato).
- I:E 1:2 padrão; 1:3-1:4 em DPOC/asma para evitar auto-PEEP.`,

      treatment: `**Suporte de O₂ — escala progressiva:**
1. Cateter nasal 1-5 L/min (FiO₂ ~24-40%).
2. Máscara facial 5-10 L/min (40-60%).
3. Máscara não-reinalante com reservatório 10-15 L/min (~90%).
4. **HFNC** 30-60 L/min, FiO₂ 21-100%, aquecido (37°C).
5. **VNI BiPAP/CPAP**.
6. **IOT + VM**.

**Manejo direcionado por causa:**
- DPOC exacerbado: VNI + broncodilatador + corticoide ± ATB (ver fp-dpoc-exacerbado).
- Asma quase fatal: β2 contínuo + corticoide + Mg + cetamina ± ECMO (ver fp-asma-grave).
- EAP cardiogênico: VNI + diurético + nitrato.
- SDRA: VM protetora + prona + NMBA + ECMO (ver fp-sdra).
- TEP maciço: trombólise/trombectomia.
- Pneumonia: ATB precoce + suporte.

**SDRA — ARDSnet/Berlim:**
- VC 6 mL/kg PBW, Pplatô ≤30, PEEP titulada por tabela ou recrutamento.
- **Prona ≥16 h/dia** se PaO₂/FiO₂ <150 (PROSEVA — NNT 6).
- **NMBA (cisatracúrio)** em bólus se assincronia (ROSE — não rotineiro).
- **ECMO V-V** se PaO₂/FiO₂ <60 ou pH <7,20 refratário (EOLIA).

**Sedação/analgesia em VM:**
- Analgesia primeiro (fentanil 25-100 mcg/h).
- Sedação leve RASS −1 a 0 (propofol/dexmedetomidina); evitar BZD contínuo (PADIS 2018).
- Despertar diário + SBT diário (ABCDEF bundle).`,

      prescriptions: `\`\`\`
SUPORTE INICIAL:
1. Posição semi-sentada 45-60°, aspirar VAS, monitor + oximetria + capnografia se VM.
2. O₂ por máscara não-reinalante 10-15 L/min se SatO₂ <92% — alvo 92-96% (88-92% em DPOC).
3. HFNC 50 L/min, FiO₂ 60%, T 37°C — escalar conforme ROX (≥4,88 em 12 h = bom prognóstico).
4. VNI BiPAP IPAP 12 / EPAP 5, FiO₂ 50% — se DPOC exacerbado, EAP, obesidade hipoventilação.

DIAGNÓSTICO DIRIGIDO:
5. Gasometria arterial em ar ambiente + após O₂; lactato; ECG; RX tórax PA + perfil; POCUS pulmonar (linhas B, BLUE/FALLS).
6. Hemograma, função renal, troponina, BNP, D-dímero (se Wells ≥4); cultura escarro e hemoculturas se infecção.
7. AngioTC tórax se suspeita de TEP (Wells ≥4 ou D-dímero ↑).

INTUBAÇÃO E VM (SRI — fp-sri):
8. Pré-oxigenar 3 min com BVM + reservatório ou HFNC 60 L/min FiO₂ 100%.
9. Etomidato 0,3 mg/kg EV OU cetamina 1,5 mg/kg EV; succinilcolina 1,5 mg/kg OU rocurônio 1,2 mg/kg.
10. VM modo VCV: VC 6 mL/kg PBW, FR 16, PEEP 5 (8-15 se SDRA), FiO₂ 100% titular para SatO₂ 92-96%, Pplatô ≤30.
11. Sedação: fentanil 50 mcg/h + propofol 1-3 mg/kg/h (ou dexmedetomidina 0,2-1,4 mcg/kg/h).

SDRA:
12. VM protetora; PEEP por tabela; prona ≥16 h se PaO₂/FiO₂ <150.
13. Cisatracúrio 0,15 mg/kg bolus + 1-3 mcg/kg/min se assincronia refratária por 48 h.
14. Acionar ECMO V-V em centro de referência se P/F <60 ou pH <7,20.

NUNCA:
- Dar O₂ alto fluxo sem alvo em DPOC retentor (risco hipercapnia).
- Iniciar VNI em paciente com Glasgow ≤10 ou choque (preferir IOT).
\`\`\``,
    },
  },

  // ==================== REBAIXAMENTO DE CONSCIÊNCIA / COMA ====================
  {
    protocolId: "fp-rebaixamento-consciencia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ABCDE primeiro. Em paralelo, abordagem estruturada AEIOU-TIPS:**

| Letra | Causa | Pista |
|---|---|---|
| A | Álcool, abuso de drogas | Hálito, miose/midríase |
| E | Endócrino/Eletrólitos | Glicemia, Na, Ca, T4 |
| I | Insulina (hipo/hiperglicemia) | HGT cabeceira |
| O | Opioide / Overdose | Miose puntiforme + bradipneia → naloxone |
| U | Uremia | Ureia, asterixis, fetor |
| T | Trauma / Temperatura | Sinais externos, hipo/hipertermia |
| I | Infecção (meningite, sepse) | Febre, rigidez nucal |
| P | Psiquiátrico / Porfiria | Dx exclusão |
| S | AVC / Convulsão (postictal) | Foco neurológico, Todd |

**Coma cocktail de bancada (5 min):**
1. **HGT** — se <70 → glicose 25 g EV (50 mL G50%); se desnutrido/etilista, **tiamina 300 mg EV ANTES**.
2. **Naloxone 0,04-0,4 mg EV** (titular) se miose + bradipneia.
3. **Flumazenil**: NÃO rotineiro (risco convulsão se mista/TCA).

**Avaliação neurológica focal:**
- Glasgow + FOUR score; pupilas (tamanho, simetria, reatividade); reflexos de tronco (corneano, óculo-cefálico se cervical livre, óculo-vestibular).
- Padrão respiratório (Cheyne-Stokes, apnêustico, atáxico).
- Postura (decorticação/descerebração).
- **Sinais de herniação:** anisocoria + hemiparesia contralateral + Cushing (HAS + bradicardia + irregularidade respiratória) → manitol + cabeceira 30° + acionar neurocirurgia.

**TC crânio sem contraste em ≤30 min** se: foco, trauma, anticoagulado, sem causa metabólica/tóxica clara, suspeita HSA.

**Punção lombar** após TC se: febre + meningismo, suspeita meningite/encefalite, HSA com TC normal (>6h).`,

      treatment: `**Tratamento dirigido à causa identificada:**
- Hipoglicemia: glicose hipertônica + tiamina.
- Opioide: naloxone (titular para FR, não acordar — risco abstinência).
- Hipercapnia/hipoxemia: O₂/VNI/IOT.
- Uremia: diálise.
- Hipo/hipernatremia: correção lenta (ver protocolos).
- Encefalopatia hepática: lactulose + rifaximina + corrigir gatilho.
- Meningite/encefalite: ATB + aciclovir empíricos antes de PL se PL for atrasada.
- AVC: protocolo isquêmico/hemorrágico.
- Estado pós-ictal: monitorar; EME não-convulsivo? **EEG urgente** se coma sem causa clara.
- Intoxicação: descontaminação + antídoto (ver fp-overdose-multipla).

**Proteção neurológica geral:**
- Cabeceira 30°, normocapnia (PaCO₂ 35-40), normoxemia (SatO₂ 94-98%), normotermia, normoglicemia (140-180), normonatremia (140-145).
- Evitar hipotensão (PAM ≥65; ≥80 se HIC).
- Profilaxia TEV (LMWH se sem sangramento ativo).

**Indicações de UTI:** Glasgow ≤8 (IOT), instabilidade hemodinâmica, EME não-convulsivo, herniação, necessidade de monitor multimodal.`,

      prescriptions: `\`\`\`
PRIMEIROS 5 MIN — COMA COCKTAIL:
1. ABC: aspirar, posição lateral se vômito; IOT se Glasgow ≤8 (ver fp-sri).
2. HGT cabeceira AGORA. Se <70:
   - Tiamina 300 mg EV em 100 mL SF (3 min) ANTES da glicose se etilismo/desnutrição.
   - Glicose 50% 50 mL EV em bolus → repetir HGT em 10 min.
3. Naloxone 0,04-0,4 mg EV se miose + bradipneia/uso de opioide — titular até FR ≥12.
4. O₂ alvo SatO₂ 94-98% (88-92% se DPOC).

EXAMES (≤30 min):
5. Eletrólitos, função renal, hepática, glicemia, hemograma, gasometria, lactato, amônia (suspeita encef. hepática), CK, troponina, β-HCG, TSH.
6. Tox-screen urina (anfetamina, BZD, cocaína, opioide); álcool sanguíneo; paracetamol/salicilato se intencional.
7. ECG 12 derivações; RX tórax.
8. TC crânio sem contraste em ≤30 min se foco, trauma, anticoagulado, sem causa óbvia.
9. Punção lombar após TC se febre + meningismo (não atrasar ATB).
10. EEG urgente se coma sem causa clara — descartar EME não-convulsivo.

CAUSA ESPECÍFICA:
11. Meningite/encefalite suspeita: ceftriaxona 2 g EV + vancomicina 25 mg/kg EV + ampicilina 2 g (>50 a/imunossuprimido) + dexametasona 10 mg EV + aciclovir 10 mg/kg EV 8/8 h ANTES da PL.
12. AVC: ver fp-avc-isquemico / fp-avc-hemorragico.
13. EHH/CAD: ver protocolos específicos.
14. Intoxicação: ver fp-overdose-multipla (antídotos por toxíndrome).

PROTEÇÃO NEUROLÓGICA:
15. Cabeceira 30°, normocapnia (PaCO₂ 35-40), normotermia (paracetamol se T >37,5).
16. Manter PAM ≥65 (≥80 se HIC suspeita); glicemia 140-180; Na 140-145.
17. Profilaxia TEV: enoxaparina 40 mg SC/dia (após excluir hemorragia).
\`\`\``,
    },
  },

  // ==================== HDA ====================
  {
    protocolId: "fp-hda",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ABCDE + 2 acessos calibrosos (≥18G) + reposição cristaloide cauteloso.**

**🆕 Glasgow-Blatchford Score (GBS) na admissão (ACG 2024 / ESGE 2021):**
- **GBS = 0-1 → alta hospitalar segura** com EDA ambulatorial em <72 h (NICE/ACG forte).
- GBS ≥2 → internação + EDA em ≤24 h.
- GBS ≥7 OU instabilidade → UTI + EDA em ≤12 h.

**Rockall pré-EDA** ajuda triagem; **AIMS65** alternativa simples.

**Estratégia transfusional restritiva (Villanueva NEJM 2013, ACG 2024):**
- Hb alvo **7 g/dL** (8 se DAC/IC/idoso instável).
- Plaquetas se <50 mil + sangramento.
- INR >2 com sangramento → vit K + PCC (preferível a PFC).
- **Suspender antiagregante** (exceto AAS profilaxia 1ª): reavaliar com cardio/neuro.
- Anticoagulante: reverter conforme agente (idarucizumabe/dabi, andexanet/Xa, PCC/varfarina).

**Pré-EDA (terapia farmacológica):**
- **IBP EV bolus 80 mg + BIC 8 mg/h por 72 h** (ou 80 mg 12/12 h EV — não inferior).
- **Eritromicina 250 mg EV 30-90 min antes da EDA** (procinético — limpa estômago).
- **Hepatopata/varizes suspeitas:** terlipressina 2 mg EV 4/4 h OU octreotida 50 mcg + 50 mcg/h por 3-5 dias **+ ceftriaxona 1 g EV/dia 7 dias** (profilaxia PBE — reduz mortalidade).

**EDA em ≤24 h** (≤12 h se hepatopata/instável). NÃO antes — risco anestésico.`,

      treatment: `**Achado endoscópico — Forrest:**
- Ia (jato), Ib (babação), IIa (vaso visível), IIb (coágulo aderido) → **terapia dupla** (injeção adrenalina 1:10.000 + clip ou termocoagulação) + IBP BIC.
- IIc (mancha pigmentada), III (base limpa) → IBP VO; alta precoce possível.

**Varizes esofágicas:**
- **Ligadura elástica** (preferencial) ou escleroterapia.
- Se sangramento maciço refratário: **balão Sengstaken-Blakemore** (ponte ≤24 h) → **TIPS precoce em <72 h** (Child B com sangramento ativo / Child C — García-Pagán NEJM).
- Profilaxia 2ª: β-bloq não seletivo (propranolol/nadolol) + ligadura seriada.

**Helicobacter pylori:** testar e tratar todo HDA ulcerosa (esquema com claritromicina/amoxicilina/IBP 14 dias).

**Refalha (sangramento recidivante):**
- Nova EDA primeiro (sucesso ~75%).
- Falha → **angioembolização** (TC angio + IR) é primeira opção sobre cirurgia.
- Cirurgia (sutura/gastrectomia) se IR indisponível ou massivo.

**Hemorragia obscura/oculta após EDA + colono normais:**
- Cápsula endoscópica → enteroscopia.`,

      prescriptions: `\`\`\`
ESTABILIZAÇÃO (PRIMEIROS 30 MIN):
1. 2 acessos venosos calibrosos (≥18G); SF 0,9% ou Ringer 500 mL EV em 15 min e reavaliar (evitar sobrecarga em hepatopata).
2. Tipagem ABO/Rh + reserva de 2 CH; coagulograma; hemograma; função renal/hepática; lactato; gasometria.
3. Sondagem vesical se choque; dieta zero; cabeceira 30° com prevenção broncoaspiração.
4. CALCULAR Glasgow-Blatchford na admissão.

FARMACOLOGIA PRÉ-EDA:
5. Pantoprazol 80 mg EV bolus → 8 mg/h EV BIC por 72 h (ou 40 mg EV 12/12 h se sem BIC).
6. Eritromicina 250 mg EV 30-90 min antes da EDA (se EDA em ≤2 h).
7. Suspender AAS/clopidogrel/anticoagulante (avaliar reversão); manter AAS profilaxia 1ª.

SE SUSPEITA DE VARIZES (HEPATOPATA):
8. Terlipressina 2 mg EV 4/4 h por 2-5 dias (reduzir para 1 mg após controle) — OU octreotida 50 mcg EV bolus + 50 mcg/h BIC.
9. Ceftriaxona 1 g EV/dia por 7 dias (profilaxia PBE — Child B/C).
10. Lactulose 30 mL VO/SNG 6/6 h se encefalopatia.

TRANSFUSÃO (ALVO RESTRITIVO):
11. CH se Hb <7 (Hb <8 se DAC/IC/idoso instável). Reavaliar Hb a cada 2 CH.
12. Plaquetas se <50.000 + sangramento ativo.
13. PCC 25-50 UI/kg + vit K 10 mg EV se INR >2 com sangramento; idarucizumabe 5 g se dabigatrana; andexanet alfa se rivaroxabana/apixabana.

EDA:
14. EDA em ≤24 h (≤12 h se hepatopata ou instabilidade).
15. Forrest Ia-IIb: terapia dupla (adrenalina 1:10.000 + clip/termo) + manter IBP BIC 72 h.
16. Varizes: ligadura elástica.

REFALHA:
17. Nova EDA → angioembolização (1ª) → cirurgia.
18. Hepatopata: TIPS precoce em ≤72 h (Child B ativo / Child C).
\`\`\``,
    },
  },

  // ==================== HDB ====================
  {
    protocolId: "fp-hdb",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição:** sangramento distal ao ângulo de Treitz. **80% cessam espontaneamente.**

**Avaliação inicial:** ABCDE, 2 acessos, reposição volêmica, transfusão alvo Hb 7 (8 se DAC/IC).

**🆕 Triagem — Oakland Score (ACG 2023):**
- **Oakland ≤8 → alta segura** com investigação ambulatorial.
- ≥9 → internar; ≥17 → alto risco, UTI/IR.

**ATENÇÃO — sangue vermelho vivo retal pode ser HDA maciça:** se instável + hematoquezia → **passar SNG**:
- SNG com sangue/borra → **EDA primeiro** (HDA disfarçada de HDB em ~15%).
- SNG limpa com bile → assumir HDB.

**Estratégia diagnóstica em HDB confirmada:**
1. **Estável:** **colonoscopia** após preparo intestinal (PEG 4 L em 4 h) — em **≤24 h** se internado (ACG 2023).
2. **Instável apesar de ressuscitação:** **AngioTC** (sensibilidade ~85% para sangramento ≥0,3 mL/min) → **angioembolização** dirigida.
3. **AngioTC negativa em paciente que estabilizou:** colonoscopia eletiva.
4. **Cintilografia com hemácias marcadas (Tc99m):** detecta sangramento mais lento; menos disponível.

**Cápsula endoscópica/enteroscopia** se EDA + colono normais (sangramento de delgado — angiodisplasias, Meckel).`,

      treatment: `**Causas mais comuns por idade:**
- <40 a: doença anorretal (hemorroidas, fissura), DII, divertículo de Meckel.
- 40-60 a: divertículos, angiodisplasias, neoplasias, DII.
- >60 a: divertículos (40%), angiodisplasias, isquêmica, neoplasia.

**Terapia endoscópica colonoscópica:**
- Injeção (adrenalina 1:10.000), clipes, ligadura elástica (hemorroidas grau III-IV), termocoagulação, plasma argônio (angiodisplasias).
- Diverticular ativo: clipe ou ligadura elástica.

**Angioembolização** (radiologia intervencionista): preferencial sobre cirurgia em refratários — sucesso 80-90%, isquemia <5%.

**Cirurgia (último recurso):**
- Sangramento massivo refratário ou colono+angiografia identificando segmento → **colectomia segmentar guiada**.
- **Colectomia subtotal "às cegas"** apenas se foco não localizado e instabilidade refratária — alta mortalidade.

**Conduta específica:**
- Hemorroidas: ligadura elástica + dieta + tópicos; hemorroidectomia se grau IV.
- Divertículo: dieta rica em fibra após resolução; antibiótico se diverticulite associada.
- DII: corticoide + biológicos (ver protocolo).
- Isquêmica: hidratação + ATB; cirurgia se peritonite/necrose.`,

      prescriptions: `\`\`\`
PRIMEIROS 30 MIN:
1. 2 acessos calibrosos; SF 0,9% ou Ringer 500-1000 mL EV; monitor; oximetria; PA seriada.
2. Hemograma, tipagem + reserva 2 CH, coagulograma, função renal, eletrólitos, lactato, gasometria.
3. Toque retal + anuscopia à beira do leito (descartar hemorroida/fissura/neoplasia baixa).
4. Calcular Oakland Score.

DIFERENCIAR HDA OCULTA:
5. Passar SNG e aspirar — sangue/borra → EDA primeiro (até 15% de "HDB" são HDA maciça).
6. Se SNG limpa com bile e HDB confirmada → seguir abaixo.

ESTÁVEL:
7. Preparo: polietilenoglicol (PEG) 4 L VO ou por SNG em 4 h (1 L a cada hora).
8. Colonoscopia em ≤24 h (internado) ou eletiva (alta com Oakland ≤8).
9. Terapia endoscópica conforme achado: clipe, adrenalina, plasma argônio, ligadura elástica.

INSTÁVEL (apesar de 30 mL/kg cristaloide + 2 CH):
10. AngioTC abdome com fase arterial e venosa AGORA.
11. Se contraste extravasando → angiografia com embolização superseletiva.
12. Sem foco em angioTC e estabilizou → colonoscopia em 12-24 h.

TRANSFUSÃO E COAGULAÇÃO:
13. CH alvo Hb 7 g/dL (8 se DAC/IC/idoso instável).
14. Plaquetas se <50.000 + sangramento; reverter anticoagulação conforme agente.
15. AAS 1ª prevenção: suspender; AAS 2ª prevenção: discutir com cardio (geralmente manter após hemostasia).

REFRATÁRIO:
16. Cirurgia (colectomia segmentar guiada por colono/angiografia) se embolização falhar.
\`\`\``,
    },
  },

  // ==================== ABDOME AGUDO ====================
  {
    protocolId: "fp-abdome-agudo",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Sistematização sindrômica (WSES 2024):**

| Síndrome | Apresentação típica | Causas-âncora |
|---|---|---|
| **Inflamatório** | Dor + febre + leucocitose, defesa localizada | Apendicite, colecistite, diverticulite, pancreatite, DIP |
| **Obstrutivo** | Dor cólica + parada de eliminações + distensão + vômitos | Bridas, hérnias, neoplasia, volvo, intussuscepção |
| **Perfurativo** | Dor súbita + abdome em tábua + pneumoperitônio | Úlcera perfurada, diverticular, neoplasia |
| **Hemorrágico** | Choque + dor + Cullen/Grey-Turner | Aneurisma de aorta roto, GE rota, hepático/esplênico, prenhez ectópica |
| **Vascular/Isquêmico** | Dor desproporcional ao exame, FA, acidose, lactato ↑ | Isquemia mesentérica (embólica, trombótica, NOMI, venosa) |

**ABCDE + 2 acessos + ressuscitação volêmica + monitor.**

**🆕 Red flags imediatos (acionar cirurgia + UTI):**
- Choque + abdome distendido (suspeita aneurisma, isquemia mesentérica, perfuração).
- Pneumoperitônio em RX/TC.
- Peritonite difusa (defesa generalizada, dor à descompressão difusa).
- Acidose lática persistente sem causa clara em idoso/FA → **isquemia mesentérica até prova contrária**.

**Investigação dirigida:**
1. **POCUS/FAST** à beira do leito: líquido livre, AAA, vesícula.
2. **Hemograma, eletrólitos, função renal, hepática, amilase/lipase, lactato, gasometria, β-HCG, urina I, troponina (idoso), coagulograma, tipagem.**
3. **AngioTC abdome e pelve com contraste EV** é exame de escolha em adultos com dor abdominal indiferenciada moderada-grave (sensibilidade >90%).
4. RX tórax/abdome em pé: pneumoperitônio, níveis hidroaéreos.
5. ECG: descartar IAM inferior simulando dor abdominal alta.

**🆕 Calculadoras úteis:**
- **Alvarado/AIR/RIPASA** para apendicite.
- **POSSUM/P-POSSUM** para risco cirúrgico.
- **Tokyo guidelines 2024** para colecistite e colangite.`,

      treatment: `**Princípios gerais:**
- Dieta zero, SNG se distensão/vômitos, SVD para débito.
- Reposição cristaloide balanceada (Ringer); evitar SF 0,9% em grandes volumes.
- Analgesia: opioide (morfina 0,1 mg/kg ou tramadol) + dipirona — **NÃO mascara o exame** (evidência forte).
- Antieméticos: ondansetrona 4-8 mg EV.
- ATB empírico se peritonite/sepse abdominal: ceftriaxona 2 g + metronidazol 500 mg EV 8/8 h (comunitária) ou piperacilina-tazobactam 4,5 g 6/6 h (nosocomial/grave).
- Profilaxia TEV: LMWH após exclusão de sangramento ativo.

**Conduta específica por síndrome:**

- **Apendicite não complicada:** apendicectomia laparoscópica em ≤24 h. ATB-only é alternativa em selecionados (CODA — risco recidiva 30%).
- **Colecistite aguda (Tokyo):** Grau I-II → **colecistectomia precoce ≤72 h**; Grau III → estabilizar + ATB + drenagem percutânea (colecistostomia) → cirurgia tardia.
- **Diverticulite Hinchey I-II:** ATB ± drenagem percutânea; III-IV → cirurgia (Hartmann ou laparotomia + lavagem).
- **Pancreatite aguda:** ressuscitação Ringer 5-10 mL/kg/h primeiras 24 h, analgesia, dieta enteral precoce ≤72 h, ATB **só** se necrose infectada; CPRE em ≤24 h se colangite.
- **Obstrução intestinal:** SNG, hidratação, gastrografina (terapêutico/diagnóstico — preditor de resolução); cirurgia se isquemia/falha clínica em 48-72 h.
- **Perfuração:** cirurgia urgente (sutura, ressecção, derivação).
- **Isquemia mesentérica:** **AngioTC + acionar cirurgia/IR**; embolectomia/trombectomia/bypass; heparina; resseção de alça inviável.
- **AAA roto:** acionar cirurgia vascular/IR; reposição **permissiva** (PAS 70-90); EVAR ou cirurgia aberta.
- **Prenhez ectópica rota:** β-HCG + USG TV; cirurgia (salpingectomia).
- **DIP:** ceftriaxona + doxiciclina + metronidazol.`,

      prescriptions: `\`\`\`
PRIMEIROS 30 MIN:
1. ABC, 2 acessos calibrosos, monitor; dieta zero; SNG se distensão/vômito; SVD.
2. Ringer lactato 500 mL EV em 15 min e reavaliar (10-20 mL/kg em sepse).
3. Analgesia: morfina 2-4 mg EV (titular) + dipirona 1 g EV.
4. Ondansetrona 4-8 mg EV se náusea/vômito.
5. Hemograma, eletrólitos, função renal, hepática, amilase/lipase, lactato, gasometria, PCR, β-HCG (mulher fértil), urina I, coagulograma, tipagem ABO/Rh, troponina (idoso, dor alta).

IMAGEM:
6. POCUS/FAST à beira do leito (líquido livre, AAA, vesícula).
7. RX tórax PA + abdome em pé (pneumoperitônio, níveis).
8. AngioTC abdome e pelve com contraste EV em ≤60 min se dor moderada-grave indiferenciada, suspeita de isquemia mesentérica, AAA, perfuração.
9. ECG (descartar IAM inferior).

ATB EMPÍRICO (PERITONITE / SEPSE ABDOMINAL):
10. Ceftriaxona 2 g EV + metronidazol 500 mg EV 8/8 h (comunitária leve-moderada).
11. Piperacilina-tazobactam 4,5 g EV 6/6 h em infusão prolongada de 4 h (grave/nosocomial).
12. Adicionar vancomicina se suspeita de MRSA/cateter.

ACIONAR CIRURGIA / IR IMEDIATAMENTE SE:
13. Choque + abdome distendido; pneumoperitônio; peritonite difusa; lactato persistentemente ↑ sem causa clara em idoso/FA (isquemia mesentérica); AAA roto.

CONDUTAS ESPECÍFICAS (após diagnóstico):
14. Apendicite: apendicectomia laparoscópica ≤24 h.
15. Colecistite: colecistectomia precoce ≤72 h (Tokyo I-II); drenar percutâneo se grau III.
16. Pancreatite: Ringer 5-10 mL/kg/h, analgesia, dieta enteral ≤72 h.
17. Obstrução: SNG, gastrografina 50-100 mL VO/SNG (diagnóstico + terapêutico).
18. Isquemia mesentérica: heparina + revascularização endovascular/cirúrgica.
19. AAA roto: hipotensão permissiva (PAS 70-90), EVAR/cirurgia.

PROFILAXIA TEV:
20. Enoxaparina 40 mg SC/dia após exclusão de sangramento ativo.
\`\`\``,
    },
  },

  // ==================== EHH ====================
  {
    protocolId: "full-ehh-hiperosmolar",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição (ADA 2026):** glicemia >600 mg/dL + osmolaridade efetiva >320 mOsm/kg + pH >7,30 + HCO₃ >18 + cetonas leves/ausentes + alteração de consciência.

**🆕 Mudanças ADA 2026:**
- **Critério osmolar efetivo** (2×Na + glicose/18) substitui osmolaridade total.
- **Reposição volêmica é a intervenção mais importante** (déficit típico 8-12 L vs 3-6 L na CAD).
- **Insulina apenas após reposição volêmica inicial** (≥1 L) e correção de hipocalemia.

**Conduta inicial (primeiras 2 h):**
1. ABC, 2 acessos, monitor, SVD para débito horário.
2. **SF 0,9% 15-20 mL/kg na 1ª hora** (1-1,5 L) — déficit hídrico médio 100-220 mL/kg.
3. Reavaliar: se Na corrigido normal/alto → trocar para SF 0,45% 250-500 mL/h; se baixo → manter SF 0,9%.
4. **Quando glicemia atinge 250-300 mg/dL** → adicionar **SG 5%** ao soro para evitar queda rápida (risco edema cerebral).
5. **K corrigido:**
   - <3,3: NÃO insulina; repor K 20-30 mEq/h até K ≥3,3.
   - 3,3-5,2: repor 20-30 mEq/L de soro + insulina.
   - >5,2: NÃO repor K; iniciar insulina; reavaliar 2/2 h.
6. **Insulina regular EV 0,05-0,1 U/kg/h em BIC** APÓS reposição inicial e K ≥3,3 — meta: glicemia ↓ 50-75 mg/dL/h.
7. **Não fazer bolus** de insulina (risco hipotensão e edema cerebral).

**Monitorização:**
- Glicemia capilar 1/1 h.
- Eletrólitos, gasometria, osmolaridade 2/2 h até estabilidade.
- Balanço hídrico horário; PA, FC, diurese, nível de consciência.

**Buscar gatilho:** infecção (50% — urina/PNM/pé), IAM, AVC, má adesão ao tratamento, pancreatite, drogas (corticoide, tiazídico, antipsicótico atípico).`,

      treatment: `**Reposição volêmica detalhada:**
- 1ª hora: 1-1,5 L SF 0,9%.
- 2ª-4ª hora: 250-500 mL/h conforme Na corrigido (SF 0,45% se Na alto/normal).
- Após glicemia <300: soro com glicose 5% + manter insulina para resolução de hiperosmolaridade.
- Meta de correção da osmolaridade: ↓ ≤3 mOsm/kg/h (mais lenta que CAD — risco edema cerebral).

**Insulina:**
- Regular EV 0,05-0,1 U/kg/h em BIC (50 U em 50 mL SF — 1 U/mL).
- Glicemia cai <50 mg/dL/h → dobrar dose; cai >75 → reduzir 50%.
- Ao atingir glicemia 250-300 + osmolaridade controlada → reduzir para 0,02-0,05 U/kg/h e manter SG 5%.

**Critérios de resolução (ADA 2026):**
- Osmolaridade efetiva <300 mOsm/kg.
- Recuperação do nível de consciência.
- Glicemia <250-300 estável + paciente alimentando.

**Transição para insulina SC:**
- Sobrepor insulina basal SC (glargina/degludeca 0,2-0,3 U/kg/dia) **2 h antes** de desligar o BIC.
- Esquema basal-bolus completo após primeira refeição.

**Profilaxia TEV obrigatória** (alto risco): LMWH 40 mg SC/dia.

**Não fazer:**
- Bicarbonato (não está acidose).
- Reposição rápida de Na em hipernatremia (risco mielinólise).
- Insulina antes de K ≥3,3 (risco arritmia).
- Bolus de insulina.

**Mortalidade 5-20%** (vs 1-5% CAD). Maior em idosos com comorbidades.`,

      prescriptions: `\`\`\`
PRIMEIRA HORA:
1. 2 acessos calibrosos; monitor; oximetria; SVD com débito horário.
2. SF 0,9% 1.000-1.500 mL EV em 1 h (15-20 mL/kg).
3. Glicemia capilar, eletrólitos (Na, K, Cl, fósforo, Mg), função renal, gasometria, cetonas, osmolaridade, hemograma, ECG, urina I + cultura, RX tórax, troponina.
4. CALCULAR Na corrigido = Na medido + 1,6 × (glicemia − 100)/100; osmolaridade efetiva = 2×Na + glicemia/18.

2ª-4ª HORA (após primeira reposição):
5. Se Na corrigido normal/alto: SF 0,45% 250-500 mL/h.
   Se Na corrigido baixo: SF 0,9% 250-500 mL/h.
6. Verificar K:
   - K <3,3: KCl 19,1% 10 mL (20 mEq) em SF 100 mL EV em 1 h; AGUARDAR insulina até K ≥3,3.
   - K 3,3-5,2: KCl 20-30 mEq por litro de soro infundido.
   - K >5,2: NÃO repor; reavaliar 2/2 h.
7. INICIAR insulina regular 0,05-0,1 U/kg/h EV em BIC (50 U em 50 mL SF) — APÓS K ≥3,3.

QUANDO GLICEMIA ATINGIR 250-300 mg/dL:
8. Trocar soro para SG 5% + SF 0,45% (1:1) a 250 mL/h.
9. Reduzir insulina para 0,02-0,05 U/kg/h — manter glicemia 200-300 até osmolaridade <300 e nível de consciência normal.

GATILHO:
10. Buscar e tratar infecção (urocultura, hemocultura, RX tórax, exame físico de pés); IAM (ECG + troponina); AVC (TC se foco); revisar medicações precipitantes.

PROFILAXIA E TRANSIÇÃO:
11. Enoxaparina 40 mg SC/dia (alto risco TEV).
12. Pantoprazol 40 mg EV/dia (estresse).
13. Quando alimentar VO + glicemia estável: insulina glargina 0,2-0,3 U/kg SC à noite + esquema bolus + SUSPENDER BIC 2 h após primeira SC.
14. Educação em diabetes antes da alta; agendar endocrinologia em 7-14 dias.

MONITORAÇÃO:
15. Glicemia capilar 1/1 h; eletrólitos + gasometria + osmolaridade 2/2 h até estabilidade.
16. Balanço hídrico, PA, FC, diurese, Glasgow horários.

NÃO FAZER:
- Bolus de insulina.
- Bicarbonato (não há acidose).
- Reposição rápida de Na (queda >10 mEq/L em 24 h → risco mielinólise).
\`\`\``,
    },
  },

  // ==================== HIPOGLICEMIA ====================
  {
    protocolId: "fp-hipoglicemia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição (ADA 2026 — Tríade de Whipple):**
- Nível 1: glicemia <70 mg/dL (alerta).
- **Nível 2: <54 mg/dL** (clinicamente significativa — risco arritmia/cognição).
- **Nível 3: alteração mental/física grave** que requer assistência de 3º (independente do valor).

**Conduta IMEDIATA pelo nível de consciência:**

**Consciente, capaz de deglutir (regra dos 15):**
1. **15 g de carboidrato simples VO** (3 colheres de açúcar em água, 150 mL de suco, 3 balas, 1 colher de mel).
2. Reavaliar HGT em 15 min.
3. Se persistir <70: repetir; após normalizar, refeição com carboidrato complexo + proteína.

**Inconsciente / sem deglutição segura:**
1. **Glicose 50% 50 mL EV** (25 g) em bolus por veia calibrosa — repetir até HGT ≥80.
2. **Tiamina 300 mg EV ANTES da glicose** se etilismo, desnutrição, hiperêmese, bariátrica (risco Wernicke).
3. **Sem acesso venoso → glucagon 1 mg IM/SC** (efeito 5-15 min, requer reservas hepáticas).
4. **🆕 Glucagon nasal 3 mg** (Baqsimi) — alternativa rápida domiciliar.
5. Após recuperação: refeição se possível; se NPO → SG 5-10% EV de manutenção.

**Causas (sempre buscar):**
- **Iatrogênica (#1):** insulina/sulfonilureia em diabético — checar adesão, refeição, função renal, exercício.
- **Sepse, IRA, IH, Addison, hipopituitarismo, insulinoma, jejum prolongado, álcool, DRC, pós-bariátrica, doses indevidas.**

**🆕 Hipoglicemia por sulfonilureia/glinida** (gliclazida, glibenclamida): observar **24-72 h** (efeito prolongado) — risco recorrência. **Octreotida 50-100 mcg SC 8/8 h** se refratária.

**Hipoglicemia em não-diabético:** investigar com Whipple completo (glicemia + insulina + peptídeo C + proinsulina + sulfonilureia urinária + cortisol durante crise — "amostra crítica").`,

      treatment: `**Após estabilização:**
- SG 10% 100 mL/h EV se NPO ou risco de recorrência (especialmente sulfonilureia, IRA, sepse).
- Reduzir/suspender hipoglicemiante causador; revisar esquema com endocrino.
- Educação: reconhecer sintomas, monitor contínuo de glicemia (CGM) se hipoglicemia despercebida.
- Reavaliar metas: A1c relaxado (7,5-8%) em idoso/frágil/comorbidade pesada.

**Hipoglicemia despercebida (hypoglycemia unawareness):**
- Suspender hipoglicemiante por 2-4 sem para "resetar" percepção.
- CGM contínuo + esquema com menor risco (análogos basais + bolus análogo, evitar NPH/regular em quem tem episódios).
- Considerar bomba de insulina + sensor (loop fechado).

**Insulinoma:** TC/RM pâncreas + ecoendoscopia + jejum prolongado 72 h (insulina/peptídeo C inadequadamente altos); cirurgia.

**Profilaxia em internação:**
- Suspender ou reduzir 50% sulfonilureia em DRC, jejum, hospitalização.
- Esquema correção apenas com glicemia >180; basal sempre.
- Não fazer "sliding scale" sem basal.

**Critérios de internação:**
- Sulfonilureia/glinida (observar 24-72 h).
- Sintomas neuro persistentes após correção.
- Causa não identificada / suspeita insulinoma.
- Idoso/comorbidade pesada com episódio grave.
- Hipoglicemia recorrente.`,

      prescriptions: `\`\`\`
CONSCIENTE (REGRA DOS 15):
1. 15 g carboidrato simples VO: 3 colheres rasas de açúcar em 200 mL de água OU 150 mL de suco de laranja OU 1 colher de mel.
2. Reavaliar HGT em 15 min — se <70, repetir; se ≥70, oferecer refeição com carboidrato complexo (pão, arroz) + proteína.

INCONSCIENTE OU SEM DEGLUTIÇÃO:
3. Tiamina 300 mg EV em 100 mL SF (3 min) ANTES da glicose se suspeita Wernicke (etilismo, desnutrição, hiperêmese, bariátrica).
4. Glicose 50% 50 mL EV em bolus por veia calibrosa (risco flebite) — pode repetir 50 mL se HGT <80.
5. Sem acesso venoso: Glucagon 1 mg IM/SC (ou nasal 3 mg — Baqsimi) — efeito 5-15 min.
6. HGT a cada 15 min até >100 estável; depois 1/1 h por 4 h.

MANUTENÇÃO (NPO OU RISCO RECORRÊNCIA):
7. SG 10% 100 mL/h EV em BIC; titular para HGT 100-180; HGT a cada 1-2 h.

HIPOGLICEMIA POR SULFONILUREIA / GLINIDA:
8. Internar e observar 24-72 h (efeito prolongado).
9. SG 10% contínuo + suspender hipoglicemiante.
10. Octreotida 50 mcg SC 8/8 h por 24 h se hipoglicemia recorrente refratária à glicose.

INVESTIGAÇÃO (HIPOGLICEMIA SEM DIABETES OU INEXPLICADA):
11. "Amostra crítica" durante crise: glicemia + insulina + peptídeo C + proinsulina + β-OH-butirato + cortisol + sulfonilureia urinária.
12. Avaliar adrenal (cortisol basal/ACTH), tiroide, função hepática/renal, álcool, sepse.
13. Suspeita insulinoma: encaminhar endocrino para teste de jejum 72 h + imagem.

REVISÃO TERAPÊUTICA:
14. Suspender ou ajustar hipoglicemiante causador; comunicar endocrino.
15. Educação ao paciente/família sobre regra dos 15 e uso de glucagon domiciliar.
16. Em idoso/frágil/DRC: aumentar meta de A1c para 7,5-8%; preferir DPP-4i/iSGLT2/GLP-1 (baixo risco hipoglicemia).
17. Hipoglicemia despercebida: indicar CGM (sensor contínuo).

NUNCA:
- Glicose 50% sem tiamina prévia em desnutrido/etilista.
- Alta de paciente com sulfonilureia em <24-48 h após hipoglicemia.
\`\`\``,
    },
  },

  // ==================== TOXIDROMES — fp-overdose-multipla ====================
  {
    protocolId: "fp-overdose-multipla",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ABCDE + descontaminação + antídoto + suporte. NUNCA atrasar IOT em paciente com Glasgow ≤8 ou via aérea instável.**

**🆕 Identificação rápida das 5 toxíndromes (AACT/AAPCC 2025):**

| Toxíndrome | Pupilas | Pele | FC/PA | Estado mental | Outros | Antídoto |
|---|---|---|---|---|---|---|
| **Anticolinérgica** | Midríase | Quente, seca, vermelha | ↑/↑ | Delirium, alucinação | Retenção urinária, ↓ peristalse, mioclonia | **Fisostigmina 1-2 mg EV** (se SNC puro) |
| **Colinérgica (DUMBELS)** | Miose | Sudorese | ↓/↓ | Confusão, fasciculação | Diarreia, urina, miose, brônquio↑, êmese, lacrimejamento, salivação | **Atropina 1-3 mg EV** dobrar a cada 5 min até secar; **pralidoxima** se OF |
| **Simpaticomimética** | Midríase | Sudorese, quente | ↑/↑ | Agitação, psicose | Convulsão, hipertermia | BZD (diazepam/midazolam); evitar β-bloq puro |
| **Opioide** | **Miose puntiforme** | Pálida | ↓/↓ | Coma | **Bradipneia**, depressão respiratória | **Naloxone 0,04-0,4 mg EV** (titular para FR) |
| **Sedativa-hipnótica** | Normal/miose | Normal | ↓/↓ | Sonolência → coma | Hipoventilação leve, ataxia | Suporte; flumazenil só em pediatria iatrogênica |

**Avaliação:**
- HGT, gasometria + AG + ânion-gap, lactato, eletrólitos, função renal/hepática, CK, troponina, β-HCG, paracetamol/salicilato (sempre em intencional), tox-screen urina, ECG (QRS/QT).
- AG aumentado: **MUDPILES** (Metanol, Uremia, CAD, Paraldeído, Iron/INH, Lactato, Etilenoglicol, Salicilato).
- Osmolar gap ↑: metanol, etilenoglicol, isopropanol.

**Descontaminação:**
- **Carvão ativado 1 g/kg VO/SNG** se ingestão <1-2 h e via aérea protegida; NÃO se cáustico/metal/álcool/lítio/Fe.
- Lavagem gástrica: **raramente indicada** (apenas <1 h, ingestão potencialmente fatal, sem antídoto).
- **Whole-bowel irrigation** (PEG 1-2 L/h) se Fe, Li, formulações retard, pacotes de drogas.
- Hemodiálise se: salicilato grave, lítio, metanol, etilenoglicol, valproato grave, metformina com acidose (ToxSDS).

**Acionar Centro de Informação Toxicológica (CIATox):** 0800-722-6001 (Brasil).`,

      treatment: `**Antídotos específicos (ToxSDS / AAPCC 2025):**

| Tóxico | Antídoto | Dose |
|---|---|---|
| Paracetamol | **N-acetilcisteína** | 150 mg/kg EV em 60 min → 50 mg/kg em 4 h → 100 mg/kg em 16 h (Prescott). Iniciar se nomograma + ou dose >150 mg/kg |
| Opioide | Naloxone | 0,04-0,4 mg EV titular FR; BIC 2/3 da dose efetiva/h se ação longa |
| BZD (apenas pediatria iatrogênica) | Flumazenil | 0,2 mg EV (não rotineiro — risco convulsão) |
| Organofosforado/carbamato | Atropina + Pralidoxima | Atropina dobrar 5/5 min até secreções secas; PAM 1-2 g EV em 30 min + BIC |
| Anticolinérgico (SNC) | Fisostigmina | 1-2 mg EV lento (CI: TCA, QRS largo) |
| TCA | Bicarbonato | NaHCO₃ 1-2 mEq/kg EV se QRS >100 ms |
| β-bloqueador / BCC | Glucagon + insulina | Glucagon 5-10 mg EV; **HIET 1 U/kg + 0,5-2 U/kg/h** com glicose; cálcio; vasopressor |
| Digoxina | Anticorpo anti-digoxina (DigiFab) | 10-20 frascos em intoxicação aguda |
| Metanol/etilenoglicol | Fomepizol (1ª) ou etanol | Fomepizol 15 mg/kg EV ataque; HD se nível alto/acidose grave |
| Isoniazida | Piridoxina | 1 g por g ingerida (até 70 mg/kg) EV |
| Cianeto | Hidroxocobalamina | 5 g EV em 15 min |
| Salicilato | Bicarbonato + HD | Alcalinizar urina (pH ≥7,5); HD se nível >100 mg/dL ou alteração mental |
| Ferro | Deferoxamina | 15 mg/kg/h EV (urina vermelha = +) |
| Anticoagulante oral direto (DOAC) | Idarucizumabe (dabi) / Andexanet (Xa) | Conforme bula |
| Varfarina | Vit K + PCC | Vit K 5-10 mg EV + PCC 25-50 UI/kg |
| Lipossolúveis tóxicos | Intralipid 20% (LipidRescue) | 1,5 mL/kg bolus + 0,25 mL/kg/min |

**Suporte universal:**
- Hipertermia >40°: resfriamento ativo + BZD (não antipirético).
- Convulsão: BZD; evitar fenitoína em TCA.
- Arritmia: corrigir K/Mg/pH; bicarbonato em QRS largo; **NÃO antiarrítmicos classe Ia/III em prolongamento de QT.**
- Agitação: BZD; antipsicótico apenas se necessário (cuidado QT, síndrome serotoninérgica).
- Sintomas serotoninérgicos: BZD + ciproheptadina 12 mg VO.`,

      prescriptions: `\`\`\`
ABC + AVALIAÇÃO INICIAL:
1. ABC; IOT se Glasgow ≤8 ou via aérea instável (ver fp-sri).
2. 2 acessos; monitor; oximetria; HGT cabeceira; ECG 12 derivações.
3. Hemograma, gasometria + AG, eletrólitos (Na, K, Cl, Ca, Mg), função renal/hepática, CK, troponina, β-HCG, lactato.
4. **SEMPRE colher: paracetamol e salicilato sérico em ingestão intencional.**
5. Tox-screen urina (BZD, opioide, cocaína, anfetamina, THC); osmolaridade sérica calculada vs medida.
6. Acionar CIATox 0800-722-6001.

COMA COCKTAIL DE BANCADA:
7. Tiamina 300 mg EV (se etilismo/desnutrição) → Glicose 50% 50 mL EV se HGT <70.
8. Naloxone 0,04-0,4 mg EV se miose puntiforme + bradipneia (titular para FR ≥12).

DESCONTAMINAÇÃO:
9. Carvão ativado 1 g/kg VO/SNG se ingestão <1-2 h e via aérea protegida (NÃO em cáustico, álcool, metal, Fe, Li).
10. Whole-bowel irrigation (PEG 1-2 L/h) se Fe, Li, retard, pacotes de drogas.

ANTÍDOTOS POR TOXÍNDROME:
11. Anticolinérgica c/ delirium isolado: fisostigmina 1-2 mg EV em 5 min (CI: TCA, QRS >100, asma).
12. Colinérgica/OF: atropina 1-3 mg EV — DOBRAR a cada 5 min até secar secreções; pralidoxima 1-2 g EV em 30 min + 8 mg/kg/h.
13. Simpaticomimética: diazepam 5-10 mg EV ou midazolam 2-5 mg EV; resfriar; SF 0,9% 1 L; evitar β-bloq puro.
14. Opioide: naloxone 0,04 mg EV titular; BIC 2/3 da dose efetiva por hora se metadona/oxicodona LP.
15. BZD: suporte ventilatório; flumazenil 0,2 mg EV apenas em pediatria iatrogênica.

ANTÍDOTOS ESPECÍFICOS:
16. Paracetamol: NAC 150 mg/kg EV em SF 200 mL em 60 min → 50 mg/kg em 4 h → 100 mg/kg em 16 h (esquema Prescott).
17. TCA com QRS >100 ms: NaHCO₃ 8,4% 1-2 mEq/kg EV bolus → BIC com gasometria seriada (alvo pH 7,5).
18. β-bloq/BCC: cálcio gluconato 10% 30 mL EV; glucagon 5 mg EV; HIET (insulina 1 U/kg bolus + 0,5-2 U/kg/h + SG); vasopressor.
19. Digoxina: DigiFab 10-20 frascos EV se K >5, FV/TV, BAV avançado, ingestão >10 mg.
20. Metanol/etilenoglicol: fomepizol 15 mg/kg EV em 30 min; bicarbonato; HD se acidose grave/nível alto.
21. Salicilato: NaHCO₃ BIC alcalinizar urina pH ≥7,5; HD se >100 mg/dL ou alteração mental/edema pulmonar.
22. Cianeto: hidroxocobalamina 5 g EV em 15 min.
23. Anestésico local/lipossolúvel: Intralipid 20% 1,5 mL/kg bolus + 0,25 mL/kg/min (LipidRescue).

SUPORTE:
24. Hipertermia >40°: resfriamento físico + diazepam; NÃO antipirético.
25. Convulsão: diazepam 10 mg EV (evitar fenitoína em TCA).
26. UTI para todos com instabilidade, antídoto contínuo, ingestão de retard, ou substância de longa ação.

PSIQUIÁTRICO:
27. Avaliação por psiquiatria em toda intoxicação intencional após estabilização.
\`\`\``,
    },
  },

  // ==================== ACIDENTE OFÍDICO ====================
  {
    protocolId: "fp-derm5-acidente-ofidico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Identificação do gênero (Brasil — MS/Funed 2025):**

| Gênero | Quadro | Tempo coagulação | Soro |
|---|---|---|---|
| **Bothrops** (jararaca, urutu) — 90% | Edema, dor local, equimose, **incoagulabilidade**, IRA, hemorragia sistêmica | **Incoagulável** | **SAB** (antibotrópico) |
| **Crotalus** (cascavel) | Pouca dor local, **fácies miastênica** (ptose), mialgia, **mioglobinúria**, IRA | Pode estar normal | **SAC** (anticrotálico) |
| **Lachesis** (surucucu) | Edema + síndrome **vagal** (bradicardia, hipotensão, diarreia) | Incoagulável | **SAL** (antilaquético) |
| **Micrurus** (coral) | **Neurotoxicidade** (ptose, dificuldade respiratória), pouco/nenhum sinal local | Normal | **SAEMic** (antielapídico) |

**Conduta inicial (TODO acidente):**
1. ABC + monitor + 2 acessos.
2. **NÃO** torniquete, NÃO succionar, NÃO incisar, NÃO aplicar substâncias.
3. Lavar local com água e sabão; elevar membro; analgesia (dipirona 1 g EV / morfina 2-5 mg EV — NÃO AAS).
4. Coletar **TC (tempo de coagulação) à beira do leito** ou TP/INR — DEFINE GRAVIDADE em Bothrops/Lachesis.
5. Hemograma, função renal, CK, mioglobinúria, urina I, eletrólitos, gasometria.
6. **Soro antiofídico EV específico** o mais rápido possível — eficácia depende do tempo.
7. Profilaxia antitetânica conforme calendário.

**🆕 Reação ao soro:**
- Pré-medicação: **NÃO recomendada rotineiramente** (não previne anafilaxia — MS 2024).
- Diluir em SF 100-250 mL; correr em 30-60 min com leito de emergência ao lado.
- Se anafilaxia: parar, **adrenalina 0,3-0,5 mg IM**, SF, anti-H1; reiniciar mais lentamente.

**Estratificação de gravidade Bothrops (define nº ampolas):**
- Leve: edema/equimose local; sem hemorragia sistêmica; TC normal — **2-4 ampolas SAB**.
- Moderado: edema 2-3 segmentos; sangramento local; TC alterado — **4-8 ampolas**.
- Grave: edema todo o membro; bolhas; necrose; hemorragia grave; choque; IRA; TC incoagulável — **12 ampolas**.

**Crotálico:** leve 5 ampolas, mod 10, grave 20.
**Laquético:** mod 10, grave 20.
**Elapídico:** **10 ampolas SAEMic** (todos os casos — risco respiratório).`,

      treatment: `**Cuidados específicos:**
- **Bothrops:** observar 24-48 h; reavaliar TC em 6-12 h; nova dose de soro se ainda incoagulável; manejar IRA (suporte, diálise se KDIGO 3); curativo da lesão; antibiótico **só** se infecção secundária (cefazolina 1 g EV 8/8 h ou amoxi-clav VO).
- **Crotálico:** hidratação vigorosa para proteger rim de mioglobinúria — 2-3 mL/kg/h de Ringer; alcalinizar urina (NaHCO₃ se pH <6,5); suporte ventilatório se paralisia; IRA → diálise.
- **Laquético:** atropina 0,5-1 mg EV se síndrome vagal; reposição volêmica; mesmas medidas Bothrops.
- **Elapídico (coral):** **IOT precoce** se sinais neurológicos progredindo (NÃO esperar parar); soro + suporte ventilatório dias.

**Aranhas:**
- **Loxosceles (marrom):** lesão necrótica + hemólise + IRA. Soro **antiloxoscélico 5-10 ampolas** se forma cutâneo-visceral/grave; **prednisona 1 mg/kg/dia VO 7 dias** em forma cutânea moderada (controverso); curativo; cirurgia tardia para necrose.
- **Phoneutria (armadeira):** dor intensa + ativação simpática + priapismo. Soro **antiaracnídico 5-10 ampolas** se moderado/grave; analgesia local com lidocaína 2% sem vaso 3-4 mL.
- **Latrodectus (viúva-negra):** dor + cãibras + sudorese + dor abdominal. Suporte; gluconato de cálcio + BZD; soro raro.

**Escorpião (Tityus serrulatus — amarelo):**
- Local: dor intensa + parestesia. **Bloqueio com lidocaína 2% sem vaso** 2-4 mL.
- Sistêmico (CRIANÇAS principalmente): vômitos, sudorese, taquicardia, **edema agudo de pulmão e choque cardiogênico** — **soro antiescorpiônico 4-6 ampolas (mod) ou 6-12 (grave) EV**; suporte com VNI/VM; dobutamina; cuidado com sobrecarga volêmica.

**Notificação compulsória SINAN** em todos os acidentes.`,

      prescriptions: `\`\`\`
ABORDAGEM INICIAL (TODO ACIDENTE):
1. ABC; 2 acessos calibrosos; monitor; oximetria.
2. Lavar local com água e sabão; elevar membro; NÃO torniquete/sucção/incisão.
3. Analgesia: dipirona 1 g EV + morfina 2-4 mg EV (titular). EVITAR AAS.
4. TC à beira do leito (tubo seco, 20 min) + TP/INR; hemograma, função renal, CK, urina I (mioglobina), eletrólitos, gasometria.
5. Profilaxia antitetânica conforme cartão.
6. Notificar SINAN.

SORO (DILUIR EM SF 100-250 mL, EV em 30-60 min com leito de anafilaxia ao lado):

BOTHROPS (jararaca):
7. Leve: SAB 2-4 ampolas. Moderado: 4-8. Grave: 12.
8. Reavaliar TC em 6-12 h — se ainda incoagulável: nova dose.

CROTÁLICO (cascavel):
9. Leve 5 amp, moderado 10, grave 20 SAC.
10. Ringer 2-3 mL/kg/h; alcalinizar urina com NaHCO₃ 8,4% se pH urinário <6,5 (alvo ≥6,5); diálise se IRA KDIGO 3.

LAQUÉTICO (surucucu):
11. Moderado 10 amp, grave 20 SAL.
12. Atropina 0,5-1 mg EV se bradicardia/hipotensão vagal.

ELAPÍDICO (coral):
13. SAEMic 10 ampolas EV em todos os casos.
14. IOT precoce ao primeiro sinal neurológico progredindo (ptose intensa, disartria, dispneia).

ARANHAS:
15. Loxosceles: soro antiloxoscélico 5-10 amp se cutâneo-visceral/grave; prednisona 1 mg/kg/d 7 d em cutânea moderada; curativo seriado.
16. Phoneutria (armadeira): bloqueio local com lidocaína 2% sem vaso 3-4 mL; soro antiaracnídico 5-10 amp se moderado/grave.

ESCORPIÃO (TITYUS):
17. Local: bloqueio com lidocaína 2% sem vaso 2-4 mL; analgesia sistêmica.
18. Moderado (vômitos, sudorese, taquicardia): soro antiescorpiônico 4-6 amp EV.
19. Grave (EAP, choque, criança): soro 6-12 amp EV + UTI + VNI/VM + dobutamina; restringir volume (risco EAP).

REAÇÃO AO SORO:
20. Anafilaxia: PARAR soro; adrenalina 0,3-0,5 mg IM coxa; SF 1 L EV; difenidramina 25-50 mg EV; metilprednisolona 125 mg EV; reiniciar mais lentamente após estabilização.

ATB SECUNDÁRIO (apenas se infecção):
21. Cefazolina 1 g EV 8/8 h ou amoxicilina-clavulanato 875/125 mg VO 12/12 h por 7 dias.

INTERNAÇÃO:
22. Todo acidente moderado/grave; toda criança; todo elapídico; todo cutâneo-visceral por loxosceles; todo escorpiônico moderado/grave.
\`\`\``,
    },
  },

  // ==================== GRANDE QUEIMADO ====================
  {
    protocolId: "fp-queimaduras",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**ABCDE com prioridade absoluta para via aérea em queimadura por chama em ambiente fechado.**

**🆕 Sinais de lesão inalatória → IOT precoce (ABA 2024):**
- Queimadura facial / vibrissas chamuscadas / fuligem em VAS / rouquidão / estridor / escarro carbonáceo.
- Ambiente fechado / explosão / perda de consciência.
- COHb ≥10% (não fumante) ou ≥15% (fumante).
- Alteração de consciência ou queimadura grave em iminência de ressuscitação massiva (edema progressivo).

**Por quê IOT precoce:** edema de VAS evolui nas 12-24 h — intubar tarde = via aérea perdida.

**Avaliação da SCQ (Superfície Corporal Queimada):**
- **Regra dos 9 de Wallace** (adulto): cabeça 9, cada MS 9, cada MI 18, tronco anterior 18, posterior 18, períneo 1.
- **Lund-Browder** (criança — mais preciso).
- **Palma da mão = 1%** (do paciente — para queimaduras dispersas).
- **Considerar apenas 2º grau (parcial) e 3º grau (total)** no cálculo Parkland — NÃO 1º grau (eritema).

**Profundidade:**
- 1º (epidérmica): eritema, dor, sem bolha (sol).
- 2º superficial: bolha, base rosa, dor intensa, sensibilidade preservada.
- 2º profunda: bolha, base pálida, dor diminuída.
- 3º (espessura total): pele branca/marrom/carbonizada, sem dor, sem perfusão capilar.
- 4º: atinge músculo/osso.

**Critérios para Centro de Queimados (ABA):**
- 2º grau >10% SCQ.
- 3º grau qualquer extensão.
- Queimaduras de face, mãos, pés, períneo, articulações.
- Lesão inalatória, química, elétrica.
- Comorbidades, criança, idoso.

**Reposição volêmica — Fórmula de Parkland modificada (ABA 2024):**
- **Ringer lactato 2 mL × kg × % SCQ** nas primeiras 24 h (fórmula reduzida — antes era 4 mL).
- **Metade nas primeiras 8 h** desde o momento da queimadura (NÃO da admissão); resto em 16 h.
- **Titular pela diurese**: alvo **0,5 mL/kg/h adulto** (1 mL/kg/h criança <30 kg, 75-100 mL/h em queimadura elétrica/mioglobinúria).
- **🆕 Não exceder 250 mL/kg/24 h** ("fluid creep" → SCA, edema pulmonar, síndrome compartimental ocular).

**Indicar escarotomia** se queimadura circunferencial em tronco (↓complacência) ou membros (↓perfusão distal — Doppler ausente).`,

      treatment: `**Suporte na primeira hora:**
- O₂ 100% por máscara não-reinalante em todas suspeitas inalatórias / explosão.
- 2 acessos calibrosos (preferir pele não queimada; intraósseo se difícil).
- SVD (alvo diurese) e SNG (íleo é frequente).
- Analgesia EV: **morfina 0,1 mg/kg titular** + dipirona; cetamina 0,3 mg/kg em refratário.
- Aquecer paciente (perda térmica enorme); cobertor térmico.
- **Profilaxia antitetânica.**

**Curativos:**
- Lavagem com SF 0,9% morno; debridar bolhas rotas e tecido devitalizado.
- **Sulfadiazina de prata 1%** ou hidrofibras de prata; cobrir com gaze e atadura.
- NÃO antibiótico sistêmico profilático (apenas se infecção documentada — aumenta resistência).

**Lesão inalatória / intoxicação por CO/cianeto:**
- O₂ 100% por 6-12 h (CO: meia-vida 320 min em ar ambiente, 80 min em O₂ 100%, 20 min em hiperbárica).
- Câmara hiperbárica se COHb >25%, gestante, sintomas neurológicos persistentes.
- **Cianeto** (incêndio com plásticos): **hidroxocobalamina 5 g EV** em 15 min se acidose lática inexplicada + queimadura facial + alteração de consciência.

**Queimadura química:**
- **Irrigação contínua 30-60 min** (água ou SF) — NÃO neutralizar.
- Ácido fluorídrico: gluconato de cálcio tópico/intra-arterial.

**Queimadura elétrica (alta tensão):**
- Cuidado: lesão profunda subestimada. Risco arritmia (monitor 24 h), rabdomiólise (CK), síndrome compartimental, IRA por mioglobinúria.
- Hidratação para diurese 75-100 mL/h; alcalinizar urina se mioglobinúria.

**Nutrição enteral precoce (≤12 h)** em grandes queimados — reduz infecção e perda muscular.
**Profilaxia TEV** (LMWH) e úlcera de estresse (IBP).

**Encaminhar centro de queimados em ≤24 h.**`,

      prescriptions: `\`\`\`
ABC + AVALIAÇÃO RÁPIDA (PRIMEIROS 15 MIN):
1. O₂ 100% máscara não-reinalante; IOT (TOT calibre maior) se suspeita inalatória, queimadura facial extensa, Glasgow ↓, COHb alta — NÃO postergar.
2. 2 acessos calibrosos (pele íntegra); intraósseo se difícil.
3. Cobertor térmico; remover roupas/joias; aquecer ambiente.
4. Calcular SCQ pela regra dos 9 (somente 2º e 3º graus); pesar.
5. SVD (alvo diurese); SNG; cabeceira 30°.

REPOSIÇÃO VOLÊMICA (PARKLAND MODIFICADO ABA 2024):
6. Ringer lactato 2 mL × kg × % SCQ em 24 h — METADE em 8 h DESDE A QUEIMADURA.
   Exemplo: 80 kg, 40% SCQ → 6.400 mL em 24 h → 3.200 mL nas primeiras 8 h.
7. Titular para diurese 0,5 mL/kg/h adulto (1 mL/kg/h criança; 75-100 mL/h em elétrica/mioglobinúria).
8. NÃO exceder 250 mL/kg em 24 h; reduzir taxa quando diurese estabilizar; escalonar para coloide (albumina 5%) após 8-12 h em SCQ >30%.

ANALGESIA:
9. Morfina 0,1 mg/kg EV (4-8 mg) titular; dipirona 1 g EV; cetamina 0,3 mg/kg EV em curativos/transferência.

EXAMES E MONITOR:
10. Hemograma, eletrólitos, função renal, CK, mioglobinúria, COHb, lactato, gasometria, coagulograma, tipagem; ECG; RX tórax; β-HCG.
11. Broncoscopia se inalatória suspeita (avaliar gravidade).

INTOXICAÇÃO ASSOCIADA:
12. CO: O₂ 100% até COHb <5%; hiperbárica se >25%, sintomas neuro, gestante.
13. Cianeto (incêndio fechado, acidose lática inexplicada): hidroxocobalamina 5 g EV em 15 min.

CURATIVO:
14. Lavar com SF 0,9% morno; debridar bolhas rotas; aplicar sulfadiazina de prata 1% ou hidrofibra de prata; gaze + atadura; trocar 1×/d.
15. NÃO ATB sistêmico profilático.

QUEIMADURA QUÍMICA:
16. Irrigação contínua com SF/água por 30-60 min; ácido fluorídrico → gluconato cálcio gel/intra-arterial.

QUEIMADURA ELÉTRICA:
17. Monitor cardíaco 24 h; CK seriada; alvo diurese 75-100 mL/h; alcalinizar urina (NaHCO₃) se mioglobinúria; fasciotomia se síndrome compartimental.

ESCAROTOMIA URGENTE SE:
18. Tronco circunferencial com ↓complacência ventilatória; membro circunferencial com Doppler distal ausente.

PROFILAXIAS:
19. Vacina antitetânica conforme cartão; SAT 250 UI IM se cartão incompleto/profundas/sujas.
20. Enoxaparina 40 mg SC/dia (LMWH) após hemostasia.
21. Pantoprazol 40 mg EV/dia (úlcera de Curling).
22. Nutrição enteral precoce em ≤12 h (35 kcal/kg/d, 1,5-2 g/kg de proteína).

TRANSFERÊNCIA:
23. Centro de queimados em ≤24 h se: 2º >10%, 3º qualquer extensão, face/mãos/pés/períneo, inalatória, química, elétrica, criança/idoso/comorbidade.
\`\`\``,
    },
  },

  // ==================== MENINGITE ====================
  {
    protocolId: "fp-meningite-completo",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Tempo porta-antibiótico ≤30-60 min** (IDSA/ESCMID 2024) — cada hora de atraso ↑ mortalidade.

**Tríade clássica** (febre + rigidez nucal + alteração mental) presente em apenas 44% — **alta suspeita** se 2 dos 4: febre, cefaleia, rigidez, alteração mental.

**🆕 Sequência correta (NÃO atrasar ATB):**
1. ABC + acesso + coletar **hemoculturas** (2 pares).
2. **Dexametasona 10 mg EV + ATB empírico IMEDIATAMENTE** (antes da PL se PL atrasada).
3. **TC crânio antes da PL** se: imunossuprimido, AVC/lesão SNC prévia, convulsão recente, papiledema, déficit focal, Glasgow ≤10, ≥60 anos. Demais: PL direta.
4. **Punção lombar** (se sem CI).
5. Iniciar/continuar ATB conforme cultura.

**Análise de líquor — diferenciar bacteriana vs viral:**

| Parâmetro | Bacteriana | Viral | Tuberculosa | Fúngica |
|---|---|---|---|---|
| Aspecto | Turvo | Cristalino | Opalescente | Opalescente |
| Pressão | ↑↑ | Normal/↑ | ↑↑ | ↑↑ |
| Células (/mm³) | >1000, **PMN** | <500, linfo | 100-500, linfo | <500, linfo |
| Proteína (mg/dL) | >100 | <100 | >100 | >100 |
| Glicose (% glicemia) | <40% (↓↓) | Normal | <40% | <40% |
| Lactato | >3,5 | Normal | >3,5 | Variável |

**🆕 PCR multiplex em LCR (FilmArray ME):** detecta 14 patógenos em 1 h — recomendado quando disponível (IDSA 2024).

**Etiologia por idade (Brasil 2025):**
- **<1 mês:** S. agalactiae, E. coli, Listeria.
- **1 mês-50 anos:** S. pneumoniae, N. meningitidis, H. influenzae.
- **>50 anos / imunossuprimido / gestante:** acima + Listeria.

**Notificação compulsória imediata SINAN.**

**Profilaxia de contatos:**
- Meningocócica/Hib: rifampicina 600 mg VO 12/12 h × 2 dias (adulto); ou ciprofloxacino 500 mg VO dose única; ou ceftriaxona 250 mg IM dose única (gestante).
- Iniciar em ≤24 h dos contatos próximos (domiciliares, parceiros íntimos, profissionais de saúde com exposição secreção).`,

      treatment: `**ATB empírico (IDSA/ESCMID 2024):**

| Idade / contexto | Esquema |
|---|---|
| <1 mês | Ampicilina + cefotaxima ± gentamicina |
| 1 mês-50 anos | **Ceftriaxona 2 g 12/12 h + Vancomicina 15-20 mg/kg 8/8 h** (cobrir S. pneumoniae R) |
| >50 anos / imunossuprimido / gestante / etilismo | Acima **+ Ampicilina 2 g 4/4 h** (Listeria) |
| Pós-neurocirurgia / TCE / shunt | Vancomicina + cefepime/meropeném |
| Suspeita de encefalite herpética | **+ Aciclovir 10 mg/kg 8/8 h EV** (todos os casos com alteração mental) |

**Dexametasona 10 mg EV 6/6 h por 4 dias** — iniciar **junto ou 15 min antes** do ATB; mantém apenas se cultura confirmar **S. pneumoniae** ou **TB**. Reduz mortalidade e sequelas (Cochrane).

**Direcionado por cultura:**
- S. pneumoniae sensível: penicilina G ou ampicilina; resistente → ceftriaxona ± vancomicina; cefotaxima R → vanco + rifampicina.
- N. meningitidis: ceftriaxona 7 dias.
- H. influenzae: ceftriaxona 7-10 dias.
- Listeria: ampicilina + gentamicina 21 dias.
- S. agalactiae: penicilina G 14-21 dias.
- TB: RIPE + corticoide × 12 meses.

**Suporte:**
- HIC: cabeceira 30°, manitol 0,5-1 g/kg se herniação iminente, IOT + sedação se Glasgow ≤8.
- Convulsões: BZD + fenitoína; EME → ver protocolo.
- Hiponatremia (SIADH): restrição hídrica.
- Hidrocefalia: derivação ventricular.

**Mortalidade:** ~20% global; pneumocócica 30%; meningocócica 10-15%.

**Acompanhamento:** audiometria + neuropediatria/neurologia 4-6 sem após alta — sequelas em 30%.`,

      prescriptions: `\`\`\`
PRIMEIROS 30 MIN — DOOR-TO-ANTIBIOTIC ≤30-60 MIN:
1. ABC; 2 acessos; monitor; oximetria; HGT.
2. Hemoculturas (2 pares) AGORA — não atrasar ATB.
3. Hemograma, PCR, procalcitonina, eletrólitos, função renal/hepática, gasometria, lactato, coagulograma.

ATB + DEXAMETASONA EMPÍRICOS IMEDIATOS:
4. Dexametasona 10 mg EV (15 min ANTES ou JUNTO do ATB).
5. Ceftriaxona 2 g EV em 30 min.
6. Vancomicina 25-30 mg/kg EV em 90 min (ataque) — manutenção 15-20 mg/kg 8/8 h.
7. Adicionar Ampicilina 2 g EV 4/4 h se >50 anos, imunossuprimido, gestante, etilista.
8. Adicionar Aciclovir 10 mg/kg EV 8/8 h se alteração mental (suspeita encefalite herpética).
9. Adicionar Cefepime 2 g 8/8 h ou Meropeném 2 g 8/8 h se pós-neurocirurgia/TCE/shunt.

IMAGEM E PUNÇÃO LOMBAR:
10. TC crânio sem contraste AGORA se: imunossuprimido, lesão SNC prévia, convulsão recente, papiledema, déficit focal, Glasgow ≤10, ≥60 anos.
11. Punção lombar (se sem CI): aspecto, citometria, glicose, proteína, lactato, Gram, cultura, látex (S. pneumoniae, N. meningitidis A/C/W/Y, Hib, GBS), PCR multiplex (FilmArray ME) se disponível, BAAR + cultura para BK + ADA se suspeita TB, tinta da China + Ag criptococo se imunossuprimido.

DEXAMETASONA — MANTER OU SUSPENDER:
12. Manter 10 mg EV 6/6 h × 4 dias APENAS se confirmado pneumococo ou TB; suspender se outra etiologia.

DIRECIONAMENTO:
13. N. meningitidis: ceftriaxona 7 dias + isolamento gotículas 24 h após início ATB.
14. S. pneumoniae sensível: penicilina G 4 mU EV 4/4 h ou ampicilina 2 g 4/4 h por 10-14 dias.
15. Listeria: ampicilina + gentamicina 21 dias.
16. TB meníngea: RIPE + prednisona/dexametasona × 12 meses.

SUPORTE:
17. Cabeceira 30°; analgesia (dipirona); antitérmico (paracetamol).
18. Manitol 20% 1 g/kg EV em 20 min se herniação iminente; IOT + sedação se Glasgow ≤8.
19. Diazepam 10 mg EV se convulsão; fenitoína 20 mg/kg EV se recidiva.
20. Restrição hídrica se SIADH (Na <130).

PROFILAXIA DE CONTATOS (meningocócica/Hib):
21. Rifampicina 600 mg VO 12/12 h × 2 dias (adulto) OU ciprofloxacino 500 mg VO dose única OU ceftriaxona 250 mg IM dose única (gestante).
22. Iniciar em ≤24 h para contatos domiciliares, parceiros íntimos, profissionais com exposição a secreção.

NOTIFICAÇÃO:
23. Notificar SINAN imediatamente (24 h).

ACOMPANHAMENTO:
24. Audiometria em 4-6 sem (sequela em 10-20%).
25. Neuropediatria/neurologia em 4-6 sem.
\`\`\``,
    },
  },

  // ==================== CHOQUE HIPOVOLÊMICO ====================
  {
    protocolId: "fp-choque-hipovolemico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Causas:** hemorrágica (trauma, HDA, ruptura ectópica, AAA roto, cirúrgica) ou não-hemorrágica (queimaduras, vômito/diarreia/CAD/EHH, terceiro espaço — pancreatite, peritonite, sepse).

**🆕 Classes de hemorragia (ATLS 11ª ed., 2024):**

| Classe | % perda | Volume (70 kg) | FC | PAS | FR | Diurese | NC |
|---|---|---|---|---|---|---|---|
| I | <15% | <750 mL | <100 | Normal | 14-20 | >30 | Normal |
| II | 15-30% | 750-1.500 | 100-120 | Normal | 20-30 | 20-30 | Ansioso |
| III | 30-40% | 1.500-2.000 | 120-140 | **↓** | 30-40 | 5-15 | Confuso |
| IV | >40% | >2.000 | **>140 ou ↓** | **↓↓** | >35 | <5 | Letárgico |

**🆕 Hipotensão permissiva (controle de hemorragia):**
- **Trauma penetrante sem TCE: PAS 80-90 mmHg** até controle cirúrgico (PROPPR, CRASH-2).
- **Trauma com TCE: PAS ≥110** (perfusão cerebral).
- **AAA roto: PAS 70-90** até clampagem/EVAR.

**Conduta inicial (primeiros 5 min):**
1. ABC + 2 acessos calibrosos (≥16G) ou intraósseo.
2. **Controle imediato da hemorragia:** compressão direta, torniquete (perda de membro), reposicionamento de fratura, **pelvic binder** em fratura de pelve.
3. Cristaloide balanceado **bolus 1.000 mL** + reavaliar (NÃO 30 mL/kg empírico — risco coagulopatia diluicional).
4. Se choque hemorrágico classe III-IV → **acionar transfusão maciça**: ratio 1:1:1 (CH:PFC:plaquetas) — PROPPR.
5. **TXA 1 g EV em 10 min + 1 g em 8 h** se trauma <3 h (CRASH-2 — NNT 67).
6. Cálcio gluconato 1 g EV após cada 4 unidades (transfusão massiva → hipocalcemia).

**🆕 POCUS (RUSH protocol)** à beira do leito para diferenciar choques: pump (FE), tank (VCI, FAST), pipes (aorta, TVP).

**Buscar e tratar fonte:**
- FAST + RX tórax + pelve em trauma.
- AngioTC se estável; cirurgia/IR se instável.
- EDA em HDA; cirurgia em ruptura/perfuração.`,

      treatment: `**Reposição volêmica (não-hemorrágico):**
- Ringer lactato 30 mL/kg em 3 h (mais agressivo em desidratação grave).
- Reavaliar continuamente: PA, lactato, diurese, perfusão, POCUS (VCI, B-lines).
- Albumina 5% se hipoalbuminemia + má resposta a cristaloide.

**Hemorrágico — princípios damage control resuscitation:**
- Hemoderivados em ratio fixo 1:1:1 até controle de hemorragia.
- Plasma e plaquetas precoces (não esperar coagulograma).
- Manter Hb ≥7 (≥9 em sangramento ativo + DAC).
- Plaquetas ≥50 mil (≥100 em TCE).
- Fibrinogênio ≥150-200 mg/dL → crioprecipitado se baixo.
- INR ≤1,5 → PFC ou PCC.
- Reverter anticoagulante: vit K + PCC (varfarina); idarucizumabe (dabi); andexanet (Xa); protamina (HNF).

**Vasopressor é último recurso** em hipovolemia — usar só após reposição se PAM persistentemente <65; preferir noradrenalina enquanto repõe.

**Aquecimento agressivo:**
- Cobertor térmico, manta de ar quente, fluidos aquecidos (38-40°C).
- Hipotermia + acidose + coagulopatia = "tríade letal" do trauma.

**Critérios de UTI:** todo classe III-IV; lactato >4; necessidade de transfusão maciça; cirurgia maior recente.

**Endpoints de ressuscitação:**
- Lactato <2 ou clareamento ≥10%/h.
- PAM ≥65 (ou PAS conforme contexto).
- SvcO₂ ≥70%.
- Diurese ≥0,5 mL/kg/h.
- Reversão da acidose.`,

      prescriptions: `\`\`\`
PRIMEIROS 5 MIN — CONTROLE DE HEMORRAGIA + ACESSO:
1. ABC; 2 acessos calibrosos ≥16G OU intraósseo se difícil.
2. Compressão direta na hemorragia externa; torniquete em sangramento de membro não controlável; pelvic binder se fratura de pelve.
3. Monitor, oximetria, PA não-invasiva (passar invasiva quando estável); SVD; aquecimento ativo.
4. Tipagem ABO/Rh + reserva 4 CH + 2 PFC + 1 pool plaquetas; coagulograma, fibrinogênio; gasometria + lactato; hemograma; β-HCG; toxicologia.

REPOSIÇÃO INICIAL:
5. Ringer lactato (não-trauma): 30 mL/kg em 3 h, reavaliando continuamente.
6. Trauma penetrante sem TCE: cristaloide 500-1.000 mL bolus, alvo PAS 80-90 (hipotensão permissiva); TCE: PAS ≥110.
7. AAA roto: PAS 70-90 até clampagem/EVAR.

CHOQUE HEMORRÁGICO CLASSE III-IV — ACIONAR TRANSFUSÃO MACIÇA:
8. Pacote 1:1:1 — 6 CH + 6 PFC + 1 pool plaquetas (≈ 6 unidades aféreses).
9. TXA 1 g EV em 10 min + 1 g em 8 h se trauma <3 h.
10. Cálcio gluconato 10% 10 mL (1 g) EV após cada 4 unidades de CH.
11. Aquecer hemoderivados (38-40°C); manta térmica.
12. Crioprecipitado 10 unidades se fibrinogênio <150-200 mg/dL.
13. PCC 25-50 UI/kg + vit K 10 mg EV se INR >1,5 com sangramento; idarucizumabe 5 g se dabigatrana; andexanet alfa se rivaroxabana/apixabana.

CONTROLE DA FONTE:
14. Trauma: FAST + RX tórax + pelve; cirurgia urgente se FAST + e instável; AngioTC se estabiliza.
15. HDA: EDA em ≤12 h em hepatopata/instável; pré-EDA pantoprazol BIC + terlipressina + ceftriaxona se varizes.
16. AAA roto: cirurgia vascular/IR — EVAR se anatomia favorável.
17. Prenhez ectópica rota: salpingectomia urgente.

VASOPRESSOR (apenas se PAM <65 apesar de reposição):
18. Noradrenalina 0,05-0,5 mcg/kg/min em BIC, titular PAM 65 (alvos individuais).

NÃO-HEMORRÁGICO:
19. Queimadura: Ringer 2 mL × kg × %SCQ em 24 h, metade em 8 h (Parkland modificado — ver fp-queimaduras).
20. Diarreia/vômito/CAD/EHH: ver protocolos específicos.

ENDPOINTS DE RESSUSCITAÇÃO:
21. Reavaliar a cada 5-10 min: PAM ≥65, lactato (clareamento ≥10%/h), diurese ≥0,5 mL/kg/h, perfusão capilar, nível de consciência.
22. POCUS (RUSH): VCI > 2 cm + colapso <50% sugere repleção; <1 cm sugere necessidade de mais volume.

UTI:
23. Todo choque classe III-IV, lactato >4, transfusão maciça, cirurgia maior recente.
\`\`\``,
    },
  },

  // ==================== CHOQUE OBSTRUTIVO ====================
  {
    protocolId: "fp-choque-obstrutivo",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Causas obstrutivas — "as 3 que matam em minutos":**
1. **Pneumotórax hipertensivo** — hiper-ressonância + abolição de MV + desvio de traqueia + turgência jugular.
2. **Tamponamento cardíaco** — tríade de Beck (hipotensão + bulhas abafadas + turgência) + pulso paradoxal.
3. **TEP maciço** — dispneia súbita + choque + IVD aguda (POCUS: D-shape, McConnell).

**🆕 POCUS é o exame-chave** (RUSH protocol — pump/tank/pipes) à beira do leito em ≤5 min:
- Pump: VE colabado (TEP, tamponamento), VD dilatado (TEP).
- Tank: VCI plétorica + sem colapso (tamponamento, TEP), pneumotórax (perda do deslizamento pleural + ponto pulmonar).
- Pipes: aorta dilatada (dissecção/AAA).

**Conduta dirigida — TEMPO É TUDO:**

**Pneumotórax hipertensivo:**
- **Descompressão IMEDIATA por agulha** 14G no 4º-5º EIC linha axilar média (preferencial sobre 2º EIC linha hemiclavicular — falhas técnicas no 2º EIC em obesos — ATLS 2024).
- Em seguida, **dreno de tórax 28-32 Fr** no 5º EIC linha axilar média.

**Tamponamento cardíaco:**
- Volume cauteloso (250-500 mL Ringer) + inotrópico/vasopressor enquanto prepara.
- **Pericardiocentese guiada por eco** (subxifóide ou apical) — punção de 30 mL pode reverter o choque.
- Acionar cirurgia cardíaca (janela pericárdica definitiva).

**TEP maciço (PESI alto + instabilidade hemodinâmica):**
- Suporte: O₂, noradrenalina (1ª linha), inotrópico se IVD; **evitar volume excessivo** (piora IVD).
- **Trombólise sistêmica: alteplase 100 mg EV em 2 h** (ou 50 mg em sub-maciço selecionado — PEITHO).
- Alternativas: **trombectomia mecânica (FlowTriever)** ou **trombólise dirigida por cateter (CDT)** — preferida em risco hemorrágico.
- **ECMO V-A** se PCR iminente.

**Outras causas obstrutivas:**
- **PEEP excessivo / hiperinsuflação dinâmica** em VM — desconectar do ventilador 30 s + ajustar PEEP/I:E (DPOC/asma).
- **Embolia gasosa / amniótica / gordurosa** — suporte + decúbito lateral E + Trendelenburg + O₂ 100%.`,

      treatment: `**Suporte hemodinâmico geral:**
- Cristaloide cauteloso 250-500 mL → reavaliar com POCUS (não sobrecarregar VD em TEP/tamponamento).
- **Noradrenalina 1ª linha** (PAM ≥65).
- Inotrópico (dobutamina) se sinais de baixo débito.
- Adrenalina se refratário (também broncodilata em asma maciça).

**Tamponamento — específicos:**
- Pericardiocentese guiada por eco (subxifóide com agulha 18G + cateter pigtail).
- Mantida drenagem por 24-72 h se reacúmulo.
- Causa: traumática (cirurgia urgente), neoplásica (janela pericárdica), urêmica (HD), pós-IAM (cuidado — risco ruptura, considerar conservador), idiopática/viral (colchicina 0,5 mg 12/12 h × 3 m).

**TEP — específicos:**
- Heparina não fracionada bolus 80 U/kg + 18 U/kg/h (preferida sobre LMWH em risco/trombólise iminente).
- Trombólise: alteplase, tenecteplase, estreptoquinase. Alteplase 100 mg em 2 h é padrão.
- Trombectomia mecânica em risco de sangramento alto.
- Filtro de VCI apenas se anticoagulação contraindicada e TEP ativo (não rotineiro).

**Pneumotórax — específicos:**
- Dreno em selo d'água; aspiração ativa se pulmão não expande em 24-48 h.
- Cirurgia (pleurodese, ressecção bolha) se reincidente, vazamento >5 dias, primeira recidiva, profissão de risco.

**Critérios de UTI:** TODOS — necessidade de monitor invasivo, vasopressor, suporte mecânico (Impella, ECMO).`,

      prescriptions: `\`\`\`
RECONHECIMENTO IMEDIATO (≤5 MIN):
1. ABC; monitor; oximetria; 2 acessos; POCUS (RUSH protocol) à beira do leito.
2. Diferenciar as 3 causas-âncora: pneumotórax hipertensivo, tamponamento, TEP maciço.

PNEUMOTÓRAX HIPERTENSIVO:
3. Descompressão por agulha 14G no 4º-5º EIC linha axilar média IMEDIATAMENTE (sem esperar RX).
4. Dreno de tórax 28-32 Fr no 5º EIC linha axilar média; selo d'água.
5. Confirmar com RX tórax pós-dreno; reavaliar reexpansão.

TAMPONAMENTO CARDÍACO:
6. Ringer 250-500 mL EV bolus + noradrenalina 0,05-0,5 mcg/kg/min se PAM <65.
7. Pericardiocentese guiada por eco (subxifóide com agulha 18G + cateter pigtail) — drenar 30-50 mL alivia o choque.
8. Acionar cirurgia cardíaca para janela pericárdica.
9. Investigar causa: trauma, neoplasia, uremia, IAM (cuidado ruptura), viral/idiopática.
10. Colchicina 0,5 mg VO 12/12 h × 3 m em pericardite viral/idiopática (prevenção recidiva).

TEP MACIÇO (instabilidade hemodinâmica):
11. O₂ alto fluxo; cuidado com volume (250 mL Ringer + reavaliar — não sobrecarregar VD).
12. Noradrenalina 0,05-0,5 mcg/kg/min em BIC.
13. Heparina não fracionada 80 U/kg EV bolus + 18 U/kg/h em BIC (alvo TTPa 1,5-2,5×).
14. Trombólise: Alteplase 100 mg EV em 2 h (ou 0,6 mg/kg em 15 min se PCR iminente, máx 50 mg).
15. Alternativa: trombectomia mecânica (FlowTriever) ou trombólise dirigida por cateter (CDT) — preferida se alto risco hemorrágico.
16. ECMO V-A se PCR iminente; considerar tromboendarterectomia cirúrgica.

DEMAIS CAUSAS:
17. PEEP excessivo / auto-PEEP em VM: desconectar do ventilador por 30 s + reduzir FR/aumentar I:E + ↓PEEP.
18. Embolia gasosa: decúbito lateral esquerdo + Trendelenburg + O₂ 100%; câmara hiperbárica se grave.

EXAMES DIAGNÓSTICOS:
19. ECG (S1Q3T3 em TEP, alternância elétrica em tamponamento, baixa voltagem); RX tórax; gasometria + lactato; D-dímero; troponina; BNP; coagulograma.
20. AngioTC tórax confirma TEP em estabilizando (não em colapso); ecocardiograma à beira do leito é ouro em colapso.

UTI E SUPORTE AVANÇADO:
21. Todos para UTI; passar PA invasiva; CVC com SvcO₂ se necessário.
22. Considerar ECMO V-A em refratário (TEP maciço, tamponamento traumático, pneumotórax bilateral).
\`\`\``,
    },
  },

  // ==================== CONVULSÃO AGUDA ====================
  {
    protocolId: "fp-convulsao-aguda",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição (ILAE 2025):** atividade convulsiva única, focal ou generalizada. **Estado de mal epiléptico (EME):** crise contínua >5 min ou crises recorrentes sem recuperação completa entre elas.

**Conduta nos primeiros 5 min — "Time is brain":**
1. ABC: posição lateral, aspirar, **NÃO colocar nada na boca**, proteger cabeça.
2. O₂ por máscara não-reinalante; monitor, oximetria, **HGT cabeceira**.
3. Acesso venoso; coletar eletrólitos (Na, Ca, Mg), glicemia, função renal, β-HCG, dosagem de antiepilépticos se em uso, gasometria, lactato, CK, toxicologia.
4. **Cronometrar a crise** desde o início.

**Tratamento por tempo (ILAE 2025 — ver também fp-eme):**

**0-5 min (crise aguda):**
- Maioria autolimita; observar.
- Se não cessar em 5 min → trato como EME.

**5-20 min (1ª linha — BENZODIAZEPÍNICO):**
- **Midazolam 10 mg IM/bucal/nasal** (preferencial pré-hospitalar — RAMPART).
- **Diazepam 10 mg EV** (0,15 mg/kg) ou retal 0,5 mg/kg.
- **Lorazepam 4 mg EV** (0,1 mg/kg) — onde disponível.
- Pode repetir 1×.

**20-40 min (2ª linha — ANTIEPILÉPTICO):**
- **Levetiracetam 60 mg/kg EV (máx 4,5 g) em 15 min** — preferencial (ESETT — eficácia equivalente, perfil mais seguro).
- **Fenitoína/fosfenitoína 20 mg/kg EV** (≤50 mg/min — risco hipotensão/arritmia).
- **Valproato 40 mg/kg EV em 10 min** (CI: hepatopatia, gestante, mitocôndria).

**40-60 min (3ª linha — EME refratário → IOT + sedação contínua):**
- **Midazolam BIC 0,2 mg/kg bolus + 0,05-2 mg/kg/h.**
- **Propofol 2 mg/kg bolus + 30-200 mcg/kg/min.**
- **Cetamina 1,5 mg/kg bolus + 1-10 mg/kg/h** (alternativa em refratário).
- Monitor com **EEG contínuo** — alvo: surto-supressão.

**>24 h (super-refratário):**
- Manter sedação 24-48 h; tentativa gradual de retirada.
- Adicionar antiepiléptico oral (lacosamida, perampanel, topiramato).
- **Pulso de metilprednisolona** se autoimune suspeito.
- Dieta cetogênica; estimulação magnética; ECMO em casos extremos.

**Causas a buscar SEMPRE:**
- Hipoglicemia, hiponatremia, uremia, hepatopatia.
- Intoxicação (cocaína, álcool, isoniazida → piridoxina!).
- Abstinência (álcool, BZD, opioide).
- AVC, TCE, tumor, abscesso, encefalite, meningite.
- Eclâmpsia (gestante/puérpera <6 sem) → **sulfato de magnésio**.
- Antiepiléptico subterapêutico (má adesão, interação).
- Pseudo-crise (EEG normal durante a crise).`,

      treatment: `**Manejo após cessação:**
- TC crânio sem contraste em **TODA** primeira crise no adulto, ou crise focal, ou foco neurológico, ou TCE associado.
- RM crânio + EEG ambulatorial se TC normal e investigação de epilepsia.
- PL se febre + crise (meningite/encefalite).
- Descontaminar/antídoto se intoxicação.

**Início de antiepiléptico de manutenção:**
- Primeira crise não provocada com EEG ou RM alterada → iniciar (risco recidiva 60%).
- Primeira crise com EEG/RM normal → discutir; em geral aguardar 2ª.
- Crise sintomática aguda (metabólica, intoxicação, abstinência) → tratar causa, **não iniciar AED** rotineiramente.
- Pós-AVC, TCE moderado-grave → AED por 7 dias profilaxia, depois reavaliar.

**Escolha do AED (epilepsia recém-diagnosticada):**
- Focal: **levetiracetam, lamotrigina, lacosamida.**
- Generalizada: **valproato** (1ª escolha exceto gestante), levetiracetam, lamotrigina.
- Ausência: etossuximida, valproato, lamotrigina.
- Mioclônica: valproato, levetiracetam (evitar carbamazepina, fenitoína — pioram).
- Gestante: **lamotrigina** (1ª escolha — menor teratogenicidade).

**Eclâmpsia (gestante/puérpera):**
- **Sulfato de magnésio** ataque 4-6 g EV em 20 min + 1-2 g/h BIC × 24 h pós-parto/última crise.
- Controle PA: hidralazina/labetalol/nifedipina (alvo PAS <160, PAD <110).
- **Resolução da gestação** após estabilização (>34 sem) — ver fp-eclampsia.

**Educação / orientação ambulatorial:**
- Suspender direção (CFM/DETRAN — 6-12 m sem crise).
- Evitar atividades de risco (altura, mergulho, máquinas).
- Adesão ao AED; identificação médica.
- Sono regular, evitar álcool/drogas, tratar comorbidades.

**Critérios de UTI:** EME refratário, sedação contínua, instabilidade hemodinâmica, lesão neurológica grave.`,

      prescriptions: `\`\`\`
PRIMEIROS 5 MIN — CRISE AGUDA:
1. Posição lateral de segurança; aspirar; proteger cabeça; NÃO colocar nada na boca.
2. O₂ máscara não-reinalante; monitor; oximetria; HGT cabeceira.
3. Acesso venoso; eletrólitos (Na, Ca, Mg, P), glicemia, função renal/hepática, gasometria, lactato, CK, β-HCG, dosagem AED se em uso, toxicologia.
4. Cronometrar desde o início.

5-20 MIN (1ª LINHA — BZD):
5. Midazolam 10 mg IM/bucal/nasal (sem acesso) OU Diazepam 10 mg EV (0,15 mg/kg) OU Lorazepam 4 mg EV (0,1 mg/kg).
6. Pode repetir 1× se persistir após 5 min.
7. Se HGT <70: glicose 50% 50 mL EV (após tiamina 300 mg EV se etilismo/desnutrição).
8. Se gestante/puérpera <6 sem: SULFATO DE MAGNÉSIO 4-6 g EV em 20 min + 1-2 g/h BIC.
9. Se intoxicação por isoniazida: PIRIDOXINA 1 g por g ingerida (até 70 mg/kg) EV.

20-40 MIN (2ª LINHA — ANTIEPILÉPTICO):
10. Levetiracetam 60 mg/kg EV (máx 4,5 g) em 15 min — PREFERIDO (ESETT). Diluir em SF 100 mL.
11. OU Fenitoína 20 mg/kg EV (máx 1,5 g) ≤50 mg/min em SF (NÃO em SG — precipita); monitor cardíaco; segunda dose 5-10 mg/kg se persistir.
12. OU Valproato 40 mg/kg EV em 10 min (máx 3 g) — evitar em hepatopata, gestante, mitocôndria.

40-60 MIN (EME REFRATÁRIO — IOT + UTI + EEG CONTÍNUO):
13. SRI: etomidato 0,3 mg/kg EV + rocurônio 1,2 mg/kg EV (evitar succinilcolina se hipercalemia/rabdomiólise).
14. Sedação contínua:
    - Midazolam 0,2 mg/kg bolus + 0,05-2 mg/kg/h em BIC, OU
    - Propofol 2 mg/kg bolus + 30-200 mcg/kg/min em BIC, OU
    - Cetamina 1,5 mg/kg bolus + 1-10 mg/kg/h em BIC.
15. Manter por 24 h em surto-supressão (EEG contínuo); tentativa de retirada gradual.
16. Adicionar AED VO/SNG: lacosamida 200-400 mg/d, perampanel 8-12 mg/d, topiramato.

INVESTIGAÇÃO:
17. TC crânio AGORA em TODA primeira crise no adulto, foco neurológico, TCE.
18. Punção lombar se febre + crise (após TC) — meningite/encefalite.
19. EEG ambulatorial em 24-48 h em crise não provocada.
20. RM crânio em ambulatório se TC normal.

INÍCIO DE AED DE MANUTENÇÃO:
21. Focal: levetiracetam 500-1.500 mg 12/12 h ou lamotrigina (titulação lenta).
22. Generalizada: valproato 500-1.500 mg/d (evitar em mulher fértil sem contracepção); alternativa levetiracetam.
23. Gestante: lamotrigina (1ª escolha) com titulação cuidadosa.

ORIENTAÇÃO:
24. Suspender direção (6-12 m sem crise — CFM/DETRAN); evitar altura/mergulho/máquinas.
25. Identificação médica; adesão estrita ao AED; agendar neurologia em 7-14 d.

NUNCA:
- Forçar abertura da boca / colocar objetos.
- Fenitoína em crise por TCA (preferir valproato/levetiracetam).
- Carbamazepina/fenitoína em crise generalizada mioclônica/ausência (pioram).
\`\`\``,
    },
  },
];
