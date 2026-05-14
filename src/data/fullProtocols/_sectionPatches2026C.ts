/**
 * Reescrita editorial PULSO 2026 — Lote C (UTI / UPA / PS / CTI)
 *
 * Cobre os protocolos críticos de cuidado intensivo e emergência que ainda
 * precisavam de atualização à luz das diretrizes mais recentes (2024-2026):
 *
 * - SDRA — Global Definition 2024 (ATS/ESICM/SCCM)
 * - LRA / KDIGO 2024 + STARRT-AKI / AKIKI-2 (timing TSR)
 * - Pancreatite Aguda — WSES 2024 / AGA 2024 / Atlanta revisada
 * - Delirium em UTI — SCCM PADIS 2024 update + e-CAM-ICU
 * - Crise Tireotóxica — JTA/BTA 2024 (BWPS)
 * - Coma Mixedematoso — ATA 2024
 * - Crise Adrenal — ESE/ESPE 2024
 * - Crise Falcêmica — ASH 2020 + NHLBI 2024 (voxelotor/crizanlizumab)
 * - Anafilaxia — WAO 2024 / EAACI 2024 (epinefrina IM precoce, sem corticoide rotina)
 * - Crise Asmática — GINA 2025 (SMART/MART, sem SABA isolado)
 * - DPOC Exacerbado — GOLD 2025 (eosinófilos, ATB curto)
 * - Crise Miastênica — AAN 2024 (efgartigimod, rozanolixizumab)
 * - Guillain-Barré — GBS Consortium 2023/2024
 * - TEP — ESC 2024 (PESI/sPESI, trombólise sistêmica vs. cateter, EKOS)
 * - AVCi — AHA/ASA 2024 (trombólise tenecteplase 0,25 mg/kg, trombectomia 0-24h)
 * - HIC / Reversão de DOAC — ANNEXA-I 2024 (andexanet-α restrito), AHA 2022
 * - Insuficiência Hepática Aguda — AASLD 2023
 * - Encefalopatia Hepática — AASLD 2023 (lactulose + rifaximina + albumina)
 * - Hipercalemia — KDIGO 2024 + patiromer/SZC
 * - Hiponatremia — ESE 2024
 * - Via Aérea Difícil / Sequência Rápida — DAS 2024 / Project for Universal Management of Airways (PUMA) 2025
 * - Transfusão Maciça — ATLS 11ª / EAST 2024 (ratio 1:1:1, ácido tranexâmico ≤3h)
 * - Pré-eclâmpsia / Eclâmpsia — FIGO 2025 / ACOG 2024
 * - Cetoacidose Pediátrica — ISPAD 2024 / BSPED 2024
 * - DPOC + Asma na UPA — fluxo unificado de exacerbação
 */

import type { SectionPatch2026 } from "./_sectionPatches2026";

const REF_FOOTER = `

---
**Diretrizes-base (revisadas 2025-2026):**
ATS/ESICM/SCCM 2024 (SDRA Global Def.) · KDIGO 2024 (AKI) · WSES/AGA 2024 (pancreatite) · SCCM PADIS update 2024 · JTA/BTA 2024 (tireoide) · ATA 2024 (mixedema) · ESE/ESPE 2024 (adrenal) · ASH 2020 + NHLBI 2024 (falcêmica) · WAO/EAACI 2024 (anafilaxia) · GINA 2025 · GOLD 2025 · AAN 2024 (miastenia) · GBS Consortium 2024 · ESC 2024 (TEP) · AHA/ASA 2024 (AVCi) · ANNEXA-I 2024 · AASLD 2023 (hepática) · DAS 2024 / PUMA 2025 (via aérea) · ATLS 11ª · FIGO 2025 / ACOG 2024 · ISPAD 2024.`;

export const SECTION_PATCHES_2026_C: SectionPatch2026[] = [
  // ==================== SDRA — GLOBAL DEFINITION 2024 ====================
  {
    protocolId: "fp-sdra",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Definição Global de SDRA 2024 (ATS/ESICM/SCCM)** — substitui Berlim 2012:

| Critério | Detalhe |
|---|---|
| **Tempo** | Início ≤7 dias de insulto conhecido |
| **Imagem** | Opacidades bilaterais (RX/TC **ou US pulmonar** com linhas B/consolidações) |
| **Origem do edema** | Não explicado por sobrecarga/IC (ECO se dúvida) |
| **Oxigenação** | • **Em VMI:** PaO₂/FiO₂ ≤300 com PEEP ≥5 \\ • **🆕 Não-invasiva:** SpO₂/FiO₂ ≤315 com CNAF ≥30 L/min OU VNI/CPAP ≥5 cmH₂O \\ • **🆕 Recursos limitados:** SpO₂/FiO₂ ≤315 sem requisito PEEP |

**Gravidade (em VMI):** Leve 200-300 · Moderada 100-200 · **Grave ≤100**.

**Bundle das primeiras 6 h:**
1. Identificar e tratar causa (sepse, aspiração, pancreatite, transfusão).
2. **VM protetora:** Vt **4-6 mL/kg peso predito**, Pplatô <30, **driving pressure ≤14**, FR p/ pH ≥7,20.
3. PEEP por tabela ARDSnet (LOV/HIGH conforme gravidade) — titular por melhor complacência/SpO₂.
4. **Hipercapnia permissiva** (pH ≥7,15 tolerado).
5. **Balanço hídrico restritivo** (FACTT) após ressuscitação.
6. Sedação leve (RASS -1 a 0) + analgesia opioide titulada — evitar BNM contínuo de rotina.`,

      treatment: `**Escada terapêutica por gravidade:**

**Leve a moderada (PaO₂/FiO₂ 150-300):**
- VM protetora + PEEP otimizada.
- **CNAF** ou VNI somente se sem indicação imediata de IOT (FLORALI, RECOVERY-RS).

**Moderada a grave (PaO₂/FiO₂ <150):**
- **Posição prona ≥16 h/dia** (PROSEVA — NNT 6 para mortalidade) — iniciar precocemente.
- **BNM 48 h** (cisatracúrio 37,5 mg/h) se assincronia/Pplatô alto (ROSE: sem benefício rotineiro, usar dirigido).
- Manobras de recrutamento **NÃO rotineiras** (ART trial: dano).
- Considerar **óxido nítrico inalado** apenas como ponte (sem ↓ mortalidade).

**Grave refratário (P/F <80 apesar do acima):**
- **🆕 ECMO V-V** (EOLIA + Bayesian re-analysis 2023): score Murray ≥3 ou pH <7,25 com PaCO₂ ≥60 por >6 h. Centro com volume ≥30 casos/ano.
- Critérios: idade <65, VM <7 d, sem falência multissistêmica irreversível.

**Desmame:** SBT diário quando FiO₂ ≤40 / PEEP ≤8 / hemodinamicamente estável. Extubação para CNAF reduz reintubação.

**🆕 Não fazer (de-implementação 2024):**
- ❌ Corticoide universal — usar somente em SDRA por COVID, pneumonia comunitária grave (CAPE-COD) ou choque séptico associado.
- ❌ Surfactante, beta-agonista inalado contínuo, estatinas.${REF_FOOTER}`,
    },
  },

  // ==================== LRA / KDIGO 2024 ====================
  {
    protocolId: "fp-lra",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Estadiamento KDIGO 2024 (creatinina OU diurese — o pior estágio):**

| Estágio | Creatinina | Diurese |
|---|---|---|
| 1 | ↑1,5-1,9× basal ou ↑≥0,3 mg/dL em 48h | <0,5 mL/kg/h por 6-12 h |
| 2 | ↑2,0-2,9× basal | <0,5 mL/kg/h por ≥12 h |
| 3 | ↑≥3× ou Cr ≥4 mg/dL ou início de TSR | <0,3 mL/kg/h por ≥24 h ou anúria ≥12 h |

**Bundle KDIGO ao detectar AKI:**
1. **Suspender nefrotóxicos** (AINE, IECA/BRA em hipovolemia, contraste, aminoglicosídeo, vancomicina sem TDM).
2. Otimizar volume — **balanço dirigido por POCUS/VExUS** (evitar sobrecarga, que piora mortalidade).
3. **PAM ≥65 mmHg** (≥80-85 se HAS crônica) — noradrenalina precoce se choque.
4. Ajustar doses por TFG estimada hora-a-hora.
5. Investigar causa — pré-renal, renal (NTA, GNRP, NIA), pós-renal (US vias urinárias <6 h).
6. **🆕 Biomarcadores precoces** (NGAL, [TIMP-2]·[IGFBP-7]) onde disponível para risco de AKI persistente.`,

      treatment: `**Indicações absolutas de TSR (qualquer uma):**
- Hipercalemia refratária >6,5 ou com alteração ECG.
- Acidose metabólica refratária pH <7,15.
- Sobrecarga volêmica refratária com EAP/hipoxemia.
- Uremia sintomática (encefalopatia, pericardite, sangramento).
- Intoxicação dialisável (lítio, salicilato, metformina + acidose, álcoois tóxicos).

**🆕 Timing — NÃO iniciar precoce sem indicação absoluta:**
- **STARRT-AKI 2020 + AKIKI-2 2021:** estratégia precoce não reduz mortalidade e ↑ dependência de diálise.
- **Conduta:** aguardar indicação clínica/laboratorial firme; se função renal não recuperar em 72 h e estágio 3, considerar.

**Modalidade:**
- **TSRC (CRRT)** preferida em instabilidade hemodinâmica grave, IC, edema cerebral.
- **HD intermitente** em estáveis, intoxicações dialisáveis.
- **SLED** alternativa híbrida.

**Anticoagulação do circuito:** **citrato regional** > heparina (KDIGO 2024).

**Prevenção contraste-induzida:**
- Hidratação SF 0,9% 1 mL/kg/h por 6-12 h pré e pós (PRESERVE).
- ❌ N-acetilcisteína e bicarbonato não recomendados (sem benefício).

**Pós-AKI:** seguimento nefrológico em 90 d — 30% evoluem para DRC.${REF_FOOTER}`,
    },
  },

  // ==================== PANCREATITE AGUDA — WSES 2024 ====================
  {
    protocolId: "fp-pancreatite-aguda",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Critérios diagnósticos (Atlanta revisada — 2 de 3):**
1. Dor abdominal típica (epigástrica, irradiação dorsal).
2. **Lipase ≥3× LSN** (preferir sobre amilase).
3. Imagem compatível (TC/RM/US).

**🆕 Estratificação precoce de gravidade (WSES 2024):**

| Marcador (24-48 h) | Limiar de risco |
|---|---|
| **BISAP** | ≥3 → grave |
| **APACHE II** | ≥8 → UTI |
| **PCR 48 h** | >150 mg/L → grave |
| **Hto admissão** | >44% (hemoconcentração) |
| **Ureia em ascensão 24 h** | preditor independente |
| **SIRS persistente >48 h** | quase sinônimo de grave |

**Etiologia (mnemônico I GET SMASHED):** Idiopática, Gallstones (40%), Etanol (30%), Trauma, Esteroides, Mumps/vírus, Autoimune, Scorpion, Hipertrigliceridemia (>1000), ERCP, Drogas.

**Conduta nas primeiras 24 h:**
1. **Hidratação dirigida** — Ringer lactato **1,5 mL/kg/h** (NÃO mais 5-10 mL/kg/h: WATERFALL 2022 → ↑sobrecarga sem benefício). Bolus 10 mL/kg apenas se hipovolemia/choque.
2. Reavaliar a cada 6 h: PA, diurese (≥0,5 mL/kg/h), lactato, Hto, BUN.
3. **Analgesia multimodal** — opioide (preferir hidromorfona/fentanil; morfina é segura).
4. **🆕 Dieta oral precoce** quando tolerar (sem esperar lipase normalizar) — reduz tempo de internação.
5. Se íleo/intolerância: **sonda nasogástrica/nasojejunal** com dieta enteral em 24-72 h. NPT só se enteral falhar 5-7 d.`,

      treatment: `**Antibiótico:**
- ❌ **Sem profilaxia rotineira** mesmo em necrose estéril.
- ✅ Apenas em colangite, infecção de necrose comprovada (PAAF/gás na TC) ou sepse não-pancreática: **piperacilina-tazobactam** ou **carbapenêmico** (boa penetração pancreática).

**Etiologia biliar:**
- **Colangite associada** → ERCP urgente <24 h.
- **Sem colangite, com obstrução persistente** → ERCP em 24-72 h.
- **Sem obstrução** → ERCP NÃO indicada (APEC trial).
- **Colecistectomia na mesma internação** se leve (PONCHO trial).

**Hipertrigliceridemia (>1000 mg/dL):**
- Insulina BIC + heparina; **plasmaférese** se grave/instável ou falha em 24-48 h.

**Necrose infectada (>4 semanas):**
- **🆕 Step-up approach** (PANTER, TENSION trials) — drenagem percutânea/endoscópica primeiro, necrosectomia minimamente invasiva (videoassistida ou endoscópica trans-gástrica) se falha. Cirurgia aberta apenas como último recurso.

**Complicações a vigiar:**
- Síndrome compartimental abdominal (PIA >20 + disfunção): considerar laparostomia.
- Pseudocisto >6 cm sintomático após 6 sem → drenagem endoscópica.
- Trombose esplênica/portal — anticoagular se sem sangramento.${REF_FOOTER}`,
    },
  },

  // ==================== DELIRIUM UTI — PADIS UPDATE 2024 ====================
  {
    protocolId: "fp-new-delirium-uti",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Rastreio universal (SCCM PADIS 2018 + 2024 update):**
- **CAM-ICU** (ou ICDSC) — a cada turno, em todo paciente de UTI.
- Avaliar nível de sedação **antes**: RASS −3 a +4 → pode aplicar; RASS −4/−5 → coma, reavaliar.

**Bundle ABCDEF (mortalidade −31%, ICU Liberation):**
- **A** — Assess, prevent and manage pain (BPS/CPOT).
- **B** — Both SAT (interrupção diária de sedação) + SBT.
- **C** — Choice of analgesia and sedation: **opioide titulado + propofol/dexmedetomidina** (preferir sobre benzo).
- **D** — Delirium: assess, prevent, manage.
- **E** — Early mobility.
- **F** — Family engagement.

**Fatores precipitantes a buscar (DELIRIUM):**
**D**rogas (anticolinérgicos, benzo, opioide) · **E**letrólitos (Na, Ca) · **L**ow O₂/perfusion · **I**nfecção · **R**etenção urinária/fecal · **I**njúria/dor · **U**ndernutrition · **M**etabólico (uremia, hepatopatia, glicemia).`,

      treatment: `**Não-farmacológico (PRIMEIRA linha — todos):**
- Reorientação (relógio, calendário, óculos, prótese auditiva).
- Sono: ruído <45 dB, luz natural diurna, agrupar cuidados noturnos.
- Mobilização precoce (dia 1-2 da UTI).
- Família à beira do leito.
- Analgesia adequada **antes** de qualquer sedativo.

**Sedação (preferir não-benzodiazepínica):**
- **Dexmedetomidina** 0,2-1,4 mcg/kg/h — reduz delirium vs. midazolam (SEDCOM, MIDEX, PRODEX).
- **Propofol** 5-50 mcg/kg/min — vigiar TG, PRIS.
- **🆕 Evitar BZD** (midazolam/lorazepam) **exceto** em abstinência alcoólica, status epiléptico, sedação profunda obrigatória.

**Farmacológico do delirium hiperativo (apenas se risco a si/equipe e medidas não-farmacológicas falham):**
- **Haloperidol 0,5-2 mg EV/IM** ad hoc (NÃO contínuo — MIND-USA: sem benefício profilático).
- **Quetiapina 25-50 mg VO 12/12 h** — opção em idosos.
- ❌ **Não usar** antipsicótico para prevenção rotineira.
- ❌ **Não prescrever** anticolinérgico (prometazina, difenidramina) em ≥65 anos.

**Hipoativo:** abordagem causal, mobilização e reorientação; sem evidência para antipsicótico.

**Pós-UTI:** rastrear síndrome pós-cuidados intensivos (PICS) em 1-3 meses — cognição, função, saúde mental.${REF_FOOTER}`,
    },
  },

  // ==================== CRISE TIREOTÓXICA ====================
  {
    protocolId: "fp-crise-tireotoxica",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Diagnóstico = clínico (não esperar TSH/T4 — começar tratamento).**

**🆕 Burch-Wartofsky Point Scale (BWPS):**
- Termorregulação (37,2 → 40+) 5-30 pts
- SNC (agitação → coma) 10-30 pts
- GI (náusea → icterícia) 10-20 pts
- Cardiovascular: FC (90 → ≥140) 5-25 pts; ICC 5-15; FA 10
- Fator precipitante 10 pts

**Score:** ≥45 sugere crise · 25-44 iminente · <25 improvável.

**🆕 Critérios JTA 2024** (alternativa): tireotoxicose comprovada + ≥1 de: SNC, FC ≥130, ICC, GI grave (vômito/diarreia/icterícia), febre ≥38.

**Precipitantes:** infecção, cirurgia, trauma, parto, retirada de tionamida, contraste iodado, IAM, CAD, AVC.

**Bundle das primeiras 6 h (5 frentes simultâneas):**
1. Suporte: O₂, monitor, acesso, RL, antitérmico (paracetamol — **NÃO AAS**, desloca T4).
2. Tratar precipitante.
3. Bloquear síntese.
4. Bloquear liberação.
5. Bloquear conversão T4→T3 e efeitos periféricos.

UTI sempre.`,

      treatment: `**1. Bloqueio da síntese (tionamida — 1ª dose YA):**
- **Propiltiouracil (PTU) 500-1000 mg VO/SNG ataque, depois 250 mg 4/4 h** (preferido na crise: bloqueia conversão periférica).
- Alternativa: **Metimazol 60-80 mg/dia** (preferir após estabilizar).

**2. Bloqueio da liberação (≥1 h após a tionamida — evitar combustível):**
- **Iodeto de potássio (Lugol) 5 gotas 6/6 h VO** OU **Iodeto de sódio 1 g EV 12/12 h**.
- Alternativa em alergia: **carbonato de lítio 300 mg 8/8 h** (alvo 0,8-1,2 mEq/L).

**3. Bloqueio adrenérgico:**
- **Propranolol 60-80 mg VO 4-6/6 h** OU **0,5-1 mg EV lento, repetir** (preferir não-seletivo: também bloqueia conversão).
- IC/asma: **esmolol BIC 50-200 mcg/kg/min** (titulável).

**4. Glicocorticoide (bloqueia conversão + insuf. adrenal relativa):**
- **Hidrocortisona 300 mg EV ataque + 100 mg 8/8 h** ou **Dexametasona 2 mg 6/6 h**.

**5. Refratário:**
- **Plasmaférese** ou **🆕 colestiramina 4 g 6/6 h** (interrompe ciclo entero-hepático).
- Tireoidectomia de urgência apenas em casos selecionados após estabilização.

**Não fazer:** AAS, contraste iodado, betabloqueador isolado em IC descompensada.${REF_FOOTER}`,
    },
  },

  // ==================== COMA MIXEDEMATOSO ====================
  {
    protocolId: "fp-new-crise-mixedematosa",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Tríade:** alteração mental + hipotermia (<35,5 °C) + precipitante (infecção 35%, exposição ao frio, sedativos, AVC, IC, suspensão de levotiroxina).

**Achados:** bradicardia, hipotensão, hipoventilação (hipercapnia), hiponatremia dilucional, hipoglicemia, derrame pericárdico/pleural, íleo, edema sem cacifo.

**Score diagnóstico (Popoveniuc 2014, ≥60 = provável):** termorregulação, SNC, GI, cardiovascular, metabólico, precipitante.

**Bundle imediato (UTI, mortalidade até 40%):**
1. Via aérea — IOT precoce se ↓consciência ou hipercapnia.
2. Aquecimento **passivo lento** (cobertor; evitar ativo agressivo — vasodilatação e choque).
3. Acesso, monitor, glicemia, gasometria, eletrólitos, cortisol, TSH/T4L, hemocultura.
4. **Hidrocortisona 100 mg EV ANTES da levotiroxina** (insuf. adrenal coexistente em até 10%).
5. Reposição hormonal (abaixo).
6. Tratar precipitante (ATB empírico amplo se infecção provável).`,

      treatment: `**Reposição hormonal (ATA 2024):**

**Levotiroxina (T4):**
- **Ataque 200-400 mcg EV** (menores doses se idoso/cardiopata), depois **1,6 mcg/kg/dia EV** (75% da dose oral).
- Quando tolerar: VO/SNG.

**Liotironina (T3) — adicionar em casos graves:**
- **5-20 mcg EV ataque, depois 2,5-10 mcg 8/8 h** por 24-48 h.
- ⚠️ Cuidado em coronariopatas/idosos: arritmia.

**Suporte:**
- Hidrocortisona 100 mg 8/8 h até excluir insuf. adrenal.
- Hiponatremia: restrição hídrica + reposição lenta (Na <120 sintomático: SF 3% bolus 100 mL).
- Hipoglicemia: glicose 50% 50 mL.
- Aquecimento passivo (∆T <0,5 °C/h).

**Monitorar:** consciência, FC, T, Na, glicemia, T3/T4 a cada 24-48 h.

**Não fazer:** aquecimento ativo agressivo, sedativos, opioides em doses padrão (clearance reduzido).${REF_FOOTER}`,
    },
  },

  // ==================== CRISE ADRENAL ====================
  {
    protocolId: "fp-crise-adrenal",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Suspeitar em:** choque refratário a volume e vasopressor, hipoglicemia + hiponatremia + hipercalemia, paciente em uso crônico de corticoide com fator estressor (cirurgia, infecção, trauma), hiperpigmentação (Addison), coagulopatia + dor abdominal (Waterhouse-Friderichsen).

**🆕 ESE/ESPE 2024 — não esperar laboratório para tratar.**

**Bundle:**
1. Coletar **cortisol + ACTH antes** de hidrocortisona (se possível, em <5 min) — não atrasa.
2. **Hidrocortisona 100 mg EV bolus** imediato + **200 mg/dia EV em BIC** ou 50 mg 6/6 h.
3. **SF 0,9% 1 L na 1ª hora** + reposição com glicose 5% (hipoglicemia coexistente).
4. Tratar hipercalemia conforme protocolo (geralmente melhora só com hidrocortisona + volume).
5. Tratar precipitante (infecção, IAM, AVC).
6. UTI até PA estável e cortisol em substituição estável.`,

      treatment: `**Pós-estabilização (24-72 h):**
- Reduzir hidrocortisona conforme melhora: 50 mg 6/6 h → 25 mg 6/6 h → dose oral 15-25 mg/dia (2/3 manhã, 1/3 tarde).
- **Mineralocorticoide (fludrocortisona 0,05-0,2 mg/dia)** quando hidrocortisona <50 mg/dia (em insuf. primária).
- Educação: cartão de emergência, kit de hidrocortisona IM 100 mg em casa, **dose de stress** (dobrar/triplicar em febre/cirurgia/parto).

**Causas a investigar (1º episódio):**
- Primária: autoimune (anti-21-OH), TB, hemorragia adrenal (anticoagulação, sepse), HIV.
- Secundária: suspensão de corticoide crônico, hipopituitarismo, lesão hipotálamo/hipófise.

**Pacientes em uso crônico de corticoide (>5 mg prednisona >3 sem):** assumir supressão e fazer dose de stress profilática em qualquer cirurgia/doença grave.${REF_FOOTER}`,
    },
  },

  // ==================== ANAFILAXIA — WAO 2024 ====================
  {
    protocolId: "fp-anafilaxia-cutanea",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 Critérios WAO 2024** (1 de 2):
1. Início agudo (min-h) com pele/mucosa **+** comprometimento respiratório OU PA↓/disfunção orgânica.
2. PA↓ aguda após exposição a alérgeno conhecido para o paciente.

**Não exige urticária** — anafilaxia "sem pele" é comum e perigosa.

**Bundle dos primeiros 5 minutos:**
1. **Epinefrina IM 0,3-0,5 mg (1:1000)** na face ântero-lateral da coxa — **PRIMEIRA droga, sem demora**. Pediatria: 0,01 mg/kg (máx 0,5).
2. **Repetir a cada 5-15 min** se sem resposta (até 3 doses) antes de escalar a EV.
3. Decúbito horizontal + MMII elevados (NÃO sentar — risco de "síndrome do ventrículo vazio" e PCR).
4. O₂ alto fluxo, monitor, 2 acessos calibrosos.
5. **SF/RL 1-2 L bolus** se hipotensão (até 30 mL/kg).
6. Remover gatilho.

**🆕 Sem corticoide ou anti-histamínico como primeira linha** — não substituem epinefrina e não previnem reação bifásica (EAACI 2024).`,

      treatment: `**Refratário (sem resposta a 3 doses IM):**
- **Epinefrina BIC 0,1 mcg/kg/min** titulada (preparar 1 mg em 100 mL SF = 10 mcg/mL).
- Volume agressivo (até 50 mL/kg).
- Se **β-bloqueador**: **glucagon 1-5 mg EV em 5 min, depois 5-15 mcg/min**.
- Vasopressina 0,01-0,04 U/min se choque refratário.
- Azul de metileno 1-2 mg/kg em casos extremos.

**Broncoespasmo:** salbutamol nebulizado contínuo + brometo de ipratrópio.

**Edema de glote:** epinefrina nebulizada 5 mg + IOT precoce (preparar via aérea cirúrgica).

**Anti-histamínico (adjuvante, alívio cutâneo apenas):**
- Difenidramina 25-50 mg EV ou prometazina 25 mg.

**Corticoide (só pós-estabilização, sem prevenir bifasia):**
- Metilprednisolona 1-2 mg/kg ou hidrocortisona 200 mg.

**🆕 Observação após estabilização:**
- Reação leve (só pele): 2-4 h.
- Moderada/grave ou requereu >1 dose epinefrina: **6-12 h** (reação bifásica em ~5%, geralmente <8 h).
- Histórico de asma grave, reação prévia bifásica, demora a tratar: **24 h hospitalar**.

**Alta:**
- **2 canetas autoinjetoras de epinefrina** + treinamento.
- Plano de ação por escrito.
- Encaminhar a alergista <4 sem.
- Considerar mediadores (triptase em 1-3 h e basal 24 h).${REF_FOOTER}`,
    },
  },

  // ==================== CRISE ASMÁTICA — GINA 2025 ====================
  {
    protocolId: "fp-asma-grave",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 GINA 2025 — pilares:**
- ❌ **SABA isolado abandonado** em todos ≥6 anos (track 1 = SMART/MART com ICS-formoterol).
- ✅ **Corticoide inalado + formoterol como reliever** mesmo na crise leve.

**Classificação na admissão:**

| Item | Leve/Mod | Grave | Ameaça à vida |
|---|---|---|---|
| Fala | Frases | Palavras | Não fala |
| FR | <30 | ≥30 | Cansaço respiratório |
| FC | <120 | ≥120 | Bradicardia |
| SpO₂ ar | ≥92% | <92% | <90%, cianose |
| PFE | >50% | 33-50% | <33% |
| Consciência | Lúcido | Agitado | Confuso/sonolento |
| Ausculta | Sibilos | Sibilos+ | **Silente** |

**Bundle dos primeiros 60 min (grave):**
1. **O₂ titulado SpO₂ 93-95%** (NÃO 100% — risco hipercapnia).
2. **Salbutamol 5 mg + ipratrópio 0,5 mg neb 20/20 min × 3** (ou contínuo 10-15 mg/h).
3. **Corticoide sistêmico ≤1 h** — **prednisolona 50 mg VO** OU **metilprednisolona 60-80 mg EV** OU **hidrocortisona 200 mg EV**.
4. **Sulfato de Mg 2 g EV em 20 min** se grave/refratário (1ª hora).
5. Reavaliar a cada 20 min: PFE, SpO₂, FR, conforto.`,

      treatment: `**Refratário (sem resposta em 1 h):**
- **CNAF** ou **VNI** (BiPAP IPAP 8-12 / EPAP 4-5) — pode evitar IOT.
- **Salbutamol EV** 4-15 mcg/kg em 10 min, depois 1-5 mcg/kg/min (vigiar K, lactato, taquicardia).
- **Adrenalina IM 0,3-0,5 mg** se broncoespasmo grave/anafilaxia.
- **🆕 Cetamina 1-2 mg/kg EV** broncodilatadora — útil em pré-IOT.

**IOT (indicações):**
- PCR iminente, exaustão, ↓consciência, hipercapnia ascendente.
- **🆕 Sequência:** pré-oxigenar com CNAF/VNI · cetamina 1,5 mg/kg + rocurônio 1,2 mg/kg · tubo grosso (≥8) · **ventilação permissiva**: Vt 6 mL/kg, FR 8-10, I:E 1:4-5, PEEP baixa (0-5), tolerar PaCO₂ até 80, pH ≥7,15.
- Sedação profunda + analgesia; BNM apenas se assincronia.

**Critérios de alta da emergência:**
- PFE >70% predito sustentado.
- SpO₂ ar ≥94%, FR <22, sem uso musculatura acessória.

**Alta com:**
- **ICS-formoterol como reliever** (não SABA isolado).
- Prednisolona 40-50 mg/dia VO 5-7 d (sem desmame).
- Plano de ação asma escrito.
- Reavaliação em 1-2 semanas.

**🆕 Biológicos a considerar pós-alta** (asma T2 grave): omalizumab (IgE), mepolizumab/benralizumab (eosinofílica), dupilumab (T2 alta), tezepelumab (TSLP — independente de fenótipo).${REF_FOOTER}`,
    },
  },

  // ==================== DPOC EXACERBADO — GOLD 2025 ====================
  {
    protocolId: "fp-dpoc-exacerbado",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 GOLD 2025 — definição de exacerbação (Roma 2021):** piora aguda de dispneia e/ou tosse/expectoração <14 dias, com taquipneia/taquicardia, frequentemente associada a infecção/poluição.

**Gravidade pelos parâmetros:**

| | Leve | Moderada | Grave |
|---|---|---|---|
| FR | <24 | ≥24 | ≥24 + cansaço |
| FC | <95 | ≥95 | ≥95 |
| SpO₂ ar | ≥92% | <92% | <92% e PaCO₂ ↑ |
| PCR | <10 | ≥10 | + |

**Bundle das primeiras 2 h:**
1. **O₂ controlado** — máscara Venturi 24-28%, **alvo SpO₂ 88-92%** (evitar hipercapnia hipoxêmica).
2. **Broncodilatador** — salbutamol 2,5-5 mg + ipratrópio 0,5 mg neb 20/20 min × 3, depois 4/4-6/6 h.
3. **🆕 Corticoide sistêmico** — **prednisolona 40 mg VO/dia × 5 dias** (REDUCE: 5 d = 14 d, sem desmame).
4. **🆕 ATB se ≥2 critérios de Anthonisen** (↑dispneia, ↑volume escarro, ↑purulência) ou **PCR ≥20** ou necessidade de VM:
   - Ambulatorial/leve: amoxicilina-clavulanato 875/125 12/12 h **5 d**.
   - Risco para *Pseudomonas* (VEF₁<50%, ATB recente, internação <90 d): **levofloxacino 750 mg/d** ou cipro + cobertura *Pseudomonas* se IOT.
5. Investigar TEP (até 16% das exacerbações sem causa clara) — D-dímero/angio-TC se suspeita.`,

      treatment: `**🆕 VNI (BiPAP) — INICIAR PRECOCE se:**
- pH 7,25-7,35 com PaCO₂ >45 (acidose respiratória aguda).
- Dispneia grave + uso de musculatura acessória.
- Reduz IOT (NNT 5) e mortalidade (NNT 10).

Configuração: IPAP 12-15 / EPAP 4-6 / FiO₂ 24-28% · alvo pH ≥7,30, FR <25, conforto · reavaliar 1-2 h — falha → IOT.

**IOT** (pH <7,25, PaCO₂ ≥80, ↓consciência, instabilidade): tubo grande, ventilação permissiva (FR baixa, I:E 1:3-4), evitar auto-PEEP.

**Adjuntos:**
- Profilaxia TEV (HBPM) em todos internados.
- Hidratação cuidadosa (cor pulmonale).
- Considerar **CNAF** como alternativa em hipoxemia sem hipercapnia significativa.
- ❌ Metilxantinas (aminofilina) — não recomendado (efeito marginal, toxicidade).
- ❌ Mucolíticos rotineiros.

**Pós-alta (≤30 dias = janela crítica, mortalidade 10-25%):**
- Reavaliação em **1-4 semanas** + 12 sem.
- Otimizar inalação tripla (LABA+LAMA+ICS) se ≥2 exacerbações/ano ou eos ≥300.
- **🆕 Eosinófilos sanguíneos** guiam ICS — se <100, considerar suspender (sem benefício, aumenta pneumonia).
- Reabilitação pulmonar em 4 semanas (–35% reinternação).
- Vacinas: gripe anual, pneumococo, COVID-19, **VSR ≥60a**, dTpa, herpes-zóster.${REF_FOOTER}`,
    },
  },

  // ==================== TEP — ESC 2024 ====================
  {
    protocolId: "fp-tep-emergencia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Estratificação ESC 2019/2024 (decisão dirige tudo):**

**1) Instabilidade hemodinâmica?**
- PCR / choque obstrutivo / PAS <90 ou queda ≥40 mmHg por >15 min sem outra causa.
- ✅ Sim → **TEP de alto risco** (5%, mortalidade 30-50%).

**2) Sem instabilidade — calcular sPESI / PESI + biomarcadores + imagem:**

| Categoria | sPESI | TropT | DVD (eco/TC) |
|---|---|---|---|
| Risco baixo | 0 | − | − |
| Intermediário-baixo | ≥1 | + ou DVD (não os dois) | |
| Intermediário-alto | ≥1 | + **e** DVD+ | |
| Alto risco | Instabilidade hemodinâmica | (não precisa do score) |

**Bundle de admissão:**
1. Acesso, monitor, O₂, ECG (S1Q3T3, BRD agudo), gasometria.
2. Anticoagulação **imediata** (suspeita clínica alta + sem contraindicação) — **HBPM** (enoxaparina 1 mg/kg 12/12 h) ou **HNF EV** (preferida em alto risco/insuf. renal grave/IOT iminente).
3. Confirmação:
   - Estável → **angio-TC pulmonar**.
   - Instável + impossível transportar → **eco à beira do leito** (DVD aguda + trombo móvel) autoriza trombólise empírica.
4. Risco intermediário-alto: **monitoração em UTI 48-72 h** (deterioração em até 5%).`,

      treatment: `**TEP de alto risco (instabilidade):**
- **Trombólise sistêmica** — **alteplase 100 mg EV em 2 h** (ou 0,6 mg/kg em 15 min, máx 50 mg, em PCR).
- Contraindicação absoluta (sangramento ativo, AVCh prévio, cirurgia maior <3 sem) → **trombectomia mecânica por cateter** (FlowTriever, Indigo) ou **cirúrgica**.
- Suporte: noradrenalina, dobutamina, **evitar volume excessivo** (piora DVD); inalado NO/iloprosta em refratário.
- ECMO V-A em PCR refratária / choque grave como ponte.

**Intermediário-alto:**
- HBPM/HNF + **vigiar 48-72 h** em UTI/UC.
- Deterioração → trombólise de resgate (sistêmica ou dirigida por cateter, **EKOS/CDT**: doses menores de tPA com perfil de sangramento melhor — PEITHO-3 em curso).

**Intermediário-baixo:**
- HBPM ou DOAC (rivaroxabana/apixabana de início).

**Baixo risco:**
- DOAC desde a admissão; **alta precoce** com Hestia ou sPESI 0 (ESC 2019/2024).

**Anticoagulação prolongada:**
- **DOACs preferidos** sobre varfarina (ESC 2024).
- TEP provocado por fator transitório maior: 3 meses.
- TEP não provocado / fator persistente: **estendida indefinida** (apixabana 2,5 mg 12/12 h ou rivaroxabana 10 mg/dia após 6 meses).
- Câncer ativo: HBPM ou DOAC (apixabana/edoxabana — preferir DOAC exceto em câncer GI/urotelial — risco de sangramento).

**Reversão de DOAC se hemorragia maior:**
- Inibidor Xa: **andexanet-α** (ANNEXA-I 2024 — uso restrito; ⚠️ trombose) OU **CCP 4F 50 U/kg**.
- Dabigatrana: **idarucizumab 5 g EV**.

**🆕 Filtro de VCI:** apenas se contraindicação absoluta a anticoagulante (não rotina).${REF_FOOTER}`,
    },
  },

  // ==================== AVCi — AHA/ASA 2024 ====================
  {
    protocolId: "fp-avc-isquemico",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 AHA/ASA 2024 — janelas estendidas:**

**Trombólise EV:**
- **0-4,5 h** do início (ou último visto bem) — janela clássica.
- **🆕 Wake-up / desconhecida:** WAKE-UP / EXTEND — guiada por **DWI-FLAIR mismatch** ou **TC perfusão**.
- **🆕 Tenecteplase 0,25 mg/kg bolus (máx 25 mg)** preferida sobre alteplase (AcT, ATTEST-2, TIMELESS) — mais rápida, mesma eficácia, menor sangramento.
- Alteplase 0,9 mg/kg (10% bolus, 90% em 1 h, máx 90 mg) se TNK indisponível.

**Trombectomia mecânica:**
- **0-6 h** — oclusão de grande vaso (ACM-M1, carótida intracraniana, basilar) e ASPECTS ≥6.
- **🆕 6-24 h** — guiada por mismatch (DEFUSE-3 / DAWN / RAPID/Brain perfusion).
- **🆕 ASPECTS 3-5 (core grande)** — RESCUE-Japan, SELECT2, ANGEL-ASPECT 2023: benefício mantido, considerar.

**Door-to-needle alvo:** ≤30 min · **door-to-groin:** ≤60 min em vasos grandes.

**Bundle pré-trombólise (paralelo):**
- NIHSS, glicemia (>50 e <400), PA (<185/110 antes de tPA), TC sem contraste (excluir HIC) + angio-TC + perfusão se >4,5 h.
- Coagulograma, plaquetas (>100k), peso real.
- Acesso ×2, prótese dentária fora, sondagem **após** tPA.`,

      treatment: `**Manejo PA peri-trombólise:**
- Antes e durante tPA: **<185/110**. Labetalol 10-20 mg EV bolus (rep 10 min) ou nicardipina/clevidipina BIC.
- 24 h pós-tPA: **<180/105**.

**Pós-trombectomia bem-sucedida (TICI 2b-3):** evidência crescente para alvo PAS **140-160** (ENCHANTED-2/MR2, OPTIMAL-BP) — evitar hipotensão.

**Sem trombólise/trombectomia (AVCi não elegível):** PA até 220/120 nas primeiras 24 h (a menos que outro órgão exija — IAM, dissecção, EAP).

**Antitrombótico:**
- **AAS 160-300 mg em 24-48 h** (após 24 h se trombolisou).
- **🆕 Dupla antiagregação curta (CHANCE/POINT/THALES):** AVCi minor (NIHSS ≤3) ou AIT alto risco (ABCD² ≥4) — **AAS + clopidogrel 21 dias** (ou AAS + ticagrelor) → AAS isolado.
- Cardioembólico (FA): anticoagulante em 2-14 d conforme tamanho (ELAN/OPTIMAS 2024 — DOAC precoce em 4 d é seguro mesmo em AVC moderado).

**Estatina alta intensidade desde D1** (atorvastatina 40-80 ou rosuvastatina 20-40).

**Prevenção neurológica e geral:**
- Glicemia 140-180.
- Normotermia (paracetamol se T>38).
- Disfagia: rastreio antes de qualquer VO; sonda se falha.
- Profilaxia TEV mecânica até 24 h pós-tPA, depois HBPM.
- **NIHSS, glicemia, PA, neuro a cada 15 min × 2 h, 30 min × 6 h, 1 h × 16 h pós-tPA.**

**Complicações da tPA:**
- **HIC sintomática:** parar tPA · CCP 4F + crio + plaquetas + ácido tranexâmico · TC urgente · NCS contato.
- Edema orolingual: parar tPA, anti-histamínico + corticoide + IECA suspender; via aérea preparada.${REF_FOOTER}`,
    },
  },

  // ==================== HIPERCALEMIA — KDIGO 2024 ====================
  {
    protocolId: "fp-hipercalemia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Gravidade:**
| | K+ | ECG / clínica |
|---|---|---|
| Leve | 5,5-5,9 | Sem alteração |
| Moderada | 6,0-6,4 | T apiculada |
| Grave | ≥6,5 OU qualquer alteração ECG | PR↑, QRS↑, onda sinusoidal, FV/PCR |

**ECG em todos com K ≥6,0** ou suspeita de hipercalemia aguda.

**Causas:** LRA/DRC, IECA/BRA/espironolactona, β-bloq, AINE, trimetoprim, heparina, rabdomiólise, hemólise (artefato), insuf. adrenal, lise tumoral, acidose, dieta rica + DRC.

**Bundle dos primeiros 5-30 min em K ≥6,5 ou ECG alterado (3 frentes):**

**1) Estabilizar miocárdio (efeito em 1-3 min, dura 30-60):**
- **Gluconato de cálcio 10% 10-20 mL EV em 5-10 min** (ou cloreto de cálcio 10% 5-10 mL via central).
- Repetir em 5 min se ECG persistir alterado.

**2) Translocar K para o intracelular (efeito em 15-30 min):**
- **Insulina regular 10 U EV + glicose 25 g** (50 mL G50% — não em hiperglicêmico ≥250).
- **Salbutamol nebulizado 10-20 mg** (sinergia, mas atenção em coronariopata).
- **Bicarbonato 1 mEq/kg EV** apenas se acidose metabólica importante.

**3) Remover potássio do corpo (efeito horas):**
- **Diurético de alça** (furosemida 40-80 mg EV) se diurese preservada.
- **🆕 Patiromer 8,4 g/d** ou **🆕 ciclossilicato de zircônio (SZC) 10 g 8/8 h × 48 h** — substituem o sulfonato de poliestireno (Sorcal/Kayexalate) na maioria dos casos (mais seguros, menos necrose colônica).
- Sulfonato de poliestireno cálcio/sódio — opção se SZC/patiromer indisponível.
- **HD/TSR** se K ≥7, refratário, AKI grave, lesão tecidual contínua, intoxicação digitálica.`,

      treatment: `**Pós-estabilização:**
- Repetir K em 1, 2, 4 e 6 h (insulina pode causar hipoglicemia tardia em até 75% — manter G5% por ≥6 h).
- Suspender drogas precipitantes (IECA/BRA, espironolactona, AINE).
- Dieta hipopotassêmica.
- Tratar causa-base.

**🆕 Crônica em DRC/IC com IECA/BRA/MRA:**
- **Patiromer ou SZC** permitem manter terapia bloqueio do SRAA com benefício prognóstico (DIAMOND, AMETHYST-DN, HARMONIZE).

**Não fazer:**
- ❌ Ringer lactato em K alto (contém K — controverso, mas evitar bolus volumosos).
- ❌ Cálcio em hipercalemia digitálica grave (cálcio + digitálico = arritmia) — usar com cautela e diluído.
- ❌ Bicarbonato isolado (pouco eficaz como única medida).${REF_FOOTER}`,
    },
  },

  // ==================== HIPONATREMIA — ESE 2024 ====================
  {
    protocolId: "fp-hiponatremia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição:** Na <135. **Grave:** <125. **Aguda:** documentada <48 h.

**Sintomas graves (qualquer um → emergência):** convulsão, coma, vômito recorrente, parada respiratória.

**🆕 Algoritmo ESE 2024 / ERA-EDTA:**

**Passo 1 — sintomas graves?**
- ✅ Sim → **NaCl 3% 150 mL EV em 20 min, repetir até 2-3 vezes** (alvo ↑ Na em 5 mEq/L na 1ª hora).
- Reavaliar Na após cada bolus.
- Cessou sintomas / Na ↑5 → parar bolus, infusão lenta para meta.

**Passo 2 — sem sintomas graves: classificar pela osmolaridade:**
- Pseudohiponatremia (hipertrigliceridemia, hiperproteinemia) — sem osm baixa.
- Hipertônica (hiperglicemia) — corrigir causa; cálculo: Na corrigido = Na + 1,6 × (Glic−100)/100.
- **Hipotônica verdadeira** → avaliar volemia.

**Passo 3 — volemia + osm urinária + Na urinário:**
| Volemia | Causas |
|---|---|
| Hipovolêmica | GI, diurético tiazídico, perda renal, insuf. adrenal |
| Euvolêmica | **SIADH** (mais comum), hipotireoidismo, polidipsia primária, "tea-and-toast" |
| Hipervolêmica | IC, cirrose, síndrome nefrótica, AKI/DRC |`,

      treatment: `**Meta de correção (CRÍTICA):**
- **🆕 Máx 8-10 mEq/L em 24 h** (alguns autores 6-8) e máx 18 em 48 h.
- Risco de **mielinólise pontina** se correção rápida — especialmente: Na <105, alcoolismo, desnutrição, hipocalemia, hepatopatia.

**Tratamento por categoria:**

**Hipovolêmica:** SF 0,9% (corrige causa) — atenção a correção rápida quando ADH cair.

**Euvolêmica (SIADH):**
- **Restrição hídrica 800-1000 mL/dia** primeira linha.
- Sal VO 6-9 g/dia ± furosemida 20-40 mg/dia.
- **🆕 Tolvaptana 7,5-15 mg/dia** se refratária — internado, monitor Na 6/6 h.
- Tratar causa (CA pulmão pequenas células, drogas: ISRS, carbamazepina, ciclofosfamida, AVC, infecções).

**Hipervolêmica:** restrição hídrica + furosemida + tratar IC/cirrose.

**🆕 Sobrecorreção (>10 mEq/L em 24 h):**
- **Desmopressina 2-4 mcg EV/SC** + **G5% 6 mL/kg** para reverter — re-baixar Na 1-2 mEq.
- Pré-emptiva em alto risco: protocolo "DDAVP clamp" desde o início (DDAVP 2 mcg 8/8 h fixo + reposição controlada de Na).${REF_FOOTER}`,
    },
  },

  // ==================== TRANSFUSÃO MACIÇA ====================
  {
    protocolId: "fp-transfusao-macica",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição operacional (qualquer):**
- 10 U CHA / 24 h.
- 4 U CHA / 1 h com sangramento ativo.
- ABC score ≥2 (PA <90, FC ≥120, FAST+, mecanismo penetrante) — preditor.
- Shock Index ≥1 ou critical admin threshold (3 U / 1 h).

**🆕 Ativar protocolo precoce — não esperar coagulopatia.**

**Bundle dos primeiros 10 min (trauma/HDA/HPP):**
1. Acessos calibrosos × 2 (≥18G) ou IO.
2. Tipagem ABO/Rh, hemograma, coagulograma, fibrinogênio, gasometria + lactato, **TEG/ROTEM** se disponível.
3. **Pacote 1: 6 CHA + 6 PFC + 1 aférese de plaquetas (ratio 1:1:1)** — PROPPR.
4. **🆕 Ácido tranexâmico 1 g EV em 10 min + 1 g EV em 8 h** — apenas **se ≤3 h do trauma/início do sangramento** (CRASH-2/CRASH-3/WOMAN; após 3 h aumenta mortalidade em trauma).
5. **Cálcio 1 g EV** após 1ª-2ª U (citrato quela cálcio — hipocalcemia ↑ mortalidade).
6. **Damage control resuscitation:** PAS-alvo 80-90 (90-100 em TCE) — hipotensão permissiva até controle cirúrgico.
7. **Aquecimento ativo** (manta, fluido aquecido) — evitar tríade letal: hipotermia + acidose + coagulopatia.`,

      treatment: `**Pacotes subsequentes:**
- Manter ratio 1:1:1.
- **Fibrinogênio (crio ou concentrado) se <1,5 g/L** (ou <2 g/L em HPP).
- Plaquetas alvo >50k (>100k em SNC).
- INR <1,5; pH >7,2; T ≥36 °C; Ca iônico >1,1 mmol/L.

**🆕 Reversão de anticoagulantes:**
- Varfarina: **CCP 4F 25-50 U/kg + vit K 10 mg EV**.
- Dabigatrana: **idarucizumab 5 g EV**.
- Anti-Xa (riva/apixa): **andexanet-α** (ANNEXA-I 2024 — aumenta evento trombótico, uso restrito) OU **CCP 4F 50 U/kg**.
- Heparina: protamina 1 mg / 100 U.

**HDA grave:** somatostatina/octreotide + IBP BIC + EDA <12 h + ATB profilático cirrótico.

**Hemorragia pós-parto (FIGO 2025):** AT 1g + ocitocina + carbetocina + misoprostol + balão de Bakri/sutura B-Lynch + embolização/histerectomia.

**Critérios de desativação:**
- Controle cirúrgico/radiológico do foco.
- PA estável sem vasopressor.
- Lactato em queda, base déficit melhorando.
- Sem nova transfusão >2 h.

**Pós-transfusão maciça:** vigiar SDRA (TRALI), TACO, hipercalemia, hipocalcemia, alcalose hipoclorêmica, infecção transfusional, profilaxia TEV em 12-24 h após hemostasia.${REF_FOOTER}`,
    },
  },

  // ==================== ECLÂMPSIA / PRÉ-ECLÂMPSIA — FIGO 2025 ====================
  {
    protocolId: "fp-eclampsia",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Eclâmpsia = convulsão tônico-clônica em gestante/puérpera com pré-eclâmpsia (ou na ausência, sem outra causa).**

**Bundle dos primeiros 10 min:**
1. **Decúbito lateral esquerdo, O₂, sucção, proteção da via aérea.**
2. **Sulfato de magnésio EV** — droga de **primeira linha**:
   - **Ataque: 4-6 g EV em 20 min** (40 mL de MgSO₄ 50% diluído em 100 mL SF).
   - **Manutenção: 1-2 g/h BIC × 24 h pós-parto ou pós-última crise.**
   - Alternativa Pritchard IM: 5 g IM em cada glúteo (10 g) + 5 g IM 4/4 h.
3. **Recorrência:** novo bolus 2-4 g EV em 5 min.
4. **Refratário a Mg:** diazepam 5-10 mg EV ou fenitoína 15-20 mg/kg (raro precisar).
5. **PA ≥160/110 → tratar imediatamente** (objetivo 140-150 / 90-100):
   - **Hidralazina 5 mg EV, repetir 5-10 mg 20/20 min (máx 30 mg).**
   - **Labetalol 20 mg EV, dobrar até 80 mg, máx 300 mg.**
   - **Nifedipina 10 mg VO** (NÃO sublingual).
6. Resolver gestação após estabilização (parto = único tratamento definitivo).

**Toxicidade do Mg (vigiar a cada hora):**
- Reflexos patelares preservados, FR ≥12, diurese ≥30 mL/h.
- Mg sérico alvo 4-7 mEq/L.
- Antídoto: **gluconato de cálcio 1 g EV em 10 min**.`,

      treatment: `**Pré-eclâmpsia — critérios de gravidade (ACOG 2024 / FIGO 2025):**
- PA ≥160/110 em 2 medidas com 4 h de intervalo (ou imediato se grave).
- Plaquetopenia <100k.
- Disfunção hepática (TGO/TGP 2× LSN ou dor RHC/epigástrica grave).
- Cr >1,1 ou dobro do basal.
- EAP.
- Sintomas neurológicos: cefaleia persistente, escotomas, alterações visuais.
- HELLP (hemólise, LDH ≥600, esquizócitos).

**Conduta por idade gestacional:**
- **≥37 sem ou condições maternas/fetais instáveis em qualquer IG → resolução.**
- 34-36+6 sem com gravidade → resolução após estabilização.
- <34 sem grave estável → corticoide para maturidade pulmonar (betametasona 12 mg IM × 2) e parto em 24-48 h, **a menos que** instabilidade.
- **Eclâmpsia / HELLP / EAP / DPP / rim agudo / fetal terminal → resolução IMEDIATA independente da IG**.

**Via de parto:** indicação obstétrica (cesárea não é mandatória).

**🆕 Profilaxia pós-parto:**
- Manter Mg 24 h.
- PA controlada (nifedipino retard 30 mg/d ou labetalol 200 mg 12/12 h).
- ASA 100 mg/dia em próxima gestação se ≥1 fator (PIP-CAR 2024).
- Acompanhamento cardiovascular tardio (HAS, IC, AVC — risco ↑).${REF_FOOTER}`,
    },
  },

  // ==================== CETOACIDOSE PEDIÁTRICA — ISPAD 2024 ====================
  {
    protocolId: "fp-cetoacidose-pediatrica-comp",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Diagnóstico (ISPAD 2024):** glicemia >200 + pH <7,3 ou HCO₃ <18 + cetonemia/cetonúria.

**Gravidade:**
| Leve | Moderada | Grave |
|---|---|---|
| pH 7,2-7,3 | pH 7,1-7,2 | pH <7,1 ou HCO₃ <5 |

**🆕 ISPAD 2024 — pilares:**

**1) Volume — abandono do "bolus restritivo":**
- **Bolus inicial 10-20 mL/kg SF 0,9% em 30-60 min** (apenas se choque/má perfusão).
- **PECARN/FLUID 2018** confirmou: SF ou ½SF, 1,5× ou 2× manutenção — sem diferença em desfecho neurológico. Não há razão para restringir agressivamente.
- Manutenção 1,5-2× normal × 48 h, **descontando o bolus** do déficit calculado (5-7% leve/mod, 7-10% grave).

**2) Insulina:**
- **Iniciar APÓS 1 h de fluido** — **0,05-0,1 U/kg/h EV BIC** (preferir 0,05 em <5 anos / pH ≥7,15).
- ❌ **Sem bolus inicial de insulina** (risco edema cerebral).
- Alvo: glicemia ↓50-100 mg/dL/h.
- Quando glicemia <250-300, adicionar G5%-G10% e manter insulina (manter ≥0,05 U/kg/h até HCO₃ ≥18 e pH ≥7,3 com cetose resolvida).

**3) Potássio:**
- Iniciar **40 mEq/L na hidratação** assim que K <5,5 e diurese presente.
- K <3,5 → adiar/reduzir insulina e repor K agressivamente.

**4) Bicarbonato:**
- ❌ **Não rotineiro** mesmo em pH 6,9-7,1 — associado a edema cerebral em crianças.
- Considerar apenas se hipercalemia ameaçando vida com pH <6,9.`,

      treatment: `**🆕 Vigilância de edema cerebral (causa #1 de óbito; 0,5-1%):**

**Sinais de alarme nas primeiras 4-12 h:**
- Cefaleia desproporcional, vômito recorrente.
- ↓nível consciência (Glasgow), irritabilidade.
- HAS + bradicardia (Cushing).
- Anisocoria, paralisia de pares cranianos.
- Posturas anormais, incontinência inesperada.

**Conduta imediata se suspeita:**
- **Manitol 0,5-1 g/kg EV em 10-15 min** OU **NaCl 3% 5 mL/kg em 10-15 min**.
- Reduzir taxa de hidratação em 1/3.
- Cabeceira 30°.
- IOT com hiperventilação MODERADA (PaCO₂ 30-35) — não agressiva.
- TC após estabilização (não atrasar tratamento).

**Transição para insulina SC:**
- Quando HCO₃ ≥18, pH ≥7,3, tolerando dieta.
- Sobrepor insulina basal SC **30-60 min antes** de parar BIC.
- Esquema basal-bolus (degludeca/glargina + lispro/asparte/glulisina).

**Educação na alta:**
- Plano dia-de-doença escrito.
- Cetonemia capilar em casa (preferir sobre cetonúria).
- Contato 24 h com equipe.
- Nunca interromper insulina mesmo se vômito/anorexia (ajustar dose).${REF_FOOTER}`,
    },
  },

  // ==================== CRISE FALCÊMICA ====================
  {
    protocolId: "fp-crise-falcemica",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Crises álgicas vaso-oclusivas — emergência por subtratamento da dor.**

**🆕 ASH 2020 + NHLBI 2024 — bundle dos primeiros 30 min:**

1. **Triagem em ≤30 min** — falcêmico com dor é **prioridade alta**.
2. **Analgesia dentro de 60 min** — escala de dor, e:
   - Dor leve: dipirona ± AINE (cuidado renal).
   - **Dor moderada/grave: opioide EV/SC** — morfina 0,1-0,15 mg/kg ou hidromorfona 0,015 mg/kg, **reavaliar e repetir a cada 15-30 min** até alívio. PCA quando disponível.
   - Adicionar dipirona/paracetamol como sinérgicos.
   - ❌ Meperidina (metabólito convulsivante).
3. **Hidratação** — apenas se desidratação (1-1,5× manutenção). Sobrecarga piora STA.
4. **O₂ apenas se SpO₂ <95%** (hiperóxia inibe eritropoiese).
5. Investigar gatilho/complicação:
   - **Síndrome torácica aguda (STA)** — dispneia, dor torácica, infiltrado novo, febre.
   - **Sequestro esplênico**, **AVC**, **priapismo**, **colelitíase**, **infecção** (sempre hemocultura + PCR).
6. Hemograma, reticulócitos, função hepática/renal, LDH, gasometria, RX tórax.`,

      treatment: `**Síndrome torácica aguda (STA — 2ª causa de óbito):**
- **ATB amplo:** ceftriaxona + macrolídeo (cobre pneumococo, *Mycoplasma*, *Chlamydophila*).
- Hidratação 1× manutenção (não exceder).
- Broncodilatador se sibilo/asma.
- **Transfusão simples** se Hb <1 g/dL do basal e SpO₂ caindo.
- **🆕 Exsanguíneo-transfusão (eritrocitaférese)** se hipoxemia grave / multilobar / piora rápida — meta HbS <30%.
- VNI/CNAF, IOT se falha.

**AVC isquêmico/hemorrágico (NHLBI 2024):**
- **Exsanguíneo-transfusão urgente** — meta HbS <30%, manter Hb ~10.
- Doppler transcraniano em prevenção secundária.

**Priapismo >4 h:** hidratação + analgesia + aspiração corporal cavernosa + fenilefrina intracavernosa; se >24 h, urologia para shunt.

**Sequestro esplênico:** transfusão imediata (cuidado: hipervolemia rebote).

**Pós-crise / ambulatório:**
- **Hidroxiureia 15-35 mg/kg/d** se ≥3 crises/ano, STA prévia, anemia grave (NHLBI 2024).
- **🆕 Voxelotor** (estabiliza HbS oxigenada) — anemia sintomática, ↑Hb e ↓hemólise.
- **🆕 Crizanlizumab** (anti-P-selectina) — reduz crises.
- **🆕 L-glutamina** — reduz crises.
- **🆕 Terapia gênica** (exa-cel, lovo-cel) em centros selecionados.
- Vacinação completa (pneumo VPP23/VPC15/20, meningo, Hib, gripe, COVID, hepatite B, VSR).
- Penicilina profilática <5 anos.

**Prevenção AVC:** Doppler TC anual em <16 anos; transfusão regular crônica se velocidade ≥200 cm/s.${REF_FOOTER}`,
    },
  },

  // ==================== CRISE MIASTÊNICA — AAN 2024 ====================
  {
    protocolId: "fp-miastenia-gravis-crise",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Crise = falência respiratória requerendo VNI/IOT** em paciente com miastenia.

**Sinais precoces (avaliar precoce, IOT antes da catástrofe):**
- **CV <15-20 mL/kg** ou queda >30%.
- **NIF <-25-30 cmH₂O** (mais negativo é melhor).
- PEmax <40.
- "Single breath count" <20.
- Disfagia + sialorreia + voz fanhosa = via aérea ameaçada.
- ❌ Gasometria normaliza tarde — não use isolada.

**Precipitantes:** infecção (40-60%), aspiração, cirurgia/anestesia, gestação/puerpério, **drogas** (aminoglicosídeos, fluoroquinolonas, macrolídeos, β-bloq, BNM, magnésio EV, contraste iodado, telitromicina, **imuno checkpoint inhibitors**), redução de imunossupressão, calor.

**Bundle:**
1. UTI, monitor, SpO₂, capnografia, CV/NIF a cada 2-4 h.
2. **VNI BiPAP** se hipercapnia leve/dispneia + via aérea preservada (pode evitar IOT).
3. **IOT precoce** se CV <15 mL/kg, NIF >-20, sinais bulbares com risco aspiração — **NÃO ESPERAR**.
   - **Evitar succinilcolina** (resposta imprevisível).
   - **Reduzir rocurônio para 1/3-1/2** da dose (sensibilidade ↑); reverter com sugamadex.
4. Sondagem nasogástrica para evitar aspiração + pausa de piridostigmina enquanto entubado (acúmulo de secreção).
5. Tratar precipitante.`,

      treatment: `**Imunoterapia rápida (escolher 1, ambos têm eficácia similar — AAN 2024):**

**1) Plasmaférese** — 5 sessões em dias alternados:
- Resposta em 1-7 dias.
- Preferida se cirurgia próxima ou contraindicação a IVIg.

**2) Imunoglobulina EV (IVIg)** — 0,4 g/kg/dia × 5 d (2 g/kg total):
- Acessibilidade maior, sem cateter central.
- Cuidado: insuf. renal, trombose, cefaleia, anafilaxia em deficiência IgA.

**Imunossupressão de manutenção (continuar/iniciar):**
- Corticoide — iniciar baixo (10 mg/d) e escalonar para evitar piora paradoxal.
- Azatioprina, micofenolato, ciclosporina, tacrolimus, rituximab.

**🆕 Novos agentes específicos para MG generalizada AChR+ (refratária):**
- **Eculizumab/ravulizumab** (anti-C5).
- **Efgartigimod, rozanolixizumab** (FcRn) — REGAIN, ADAPT, MycarinG: melhora rápida, induz remissão.
- **Zilucoplan** (anti-C5 SC).

**Piridostigmina:**
- **SUSPENDER ou REDUZIR durante crise** (excesso → secreção/broncoespasmo + diferencial colinérgica).
- Reintroduzir gradualmente após resposta à imunoterapia.

**Diagnóstico diferencial — crise colinérgica:**
- Excesso de piridostigmina: SLUDGE (sialorreia, lacrimejamento, urina, defecação, GI, êmese), miose, fasciculações, fraqueza. **Tratar:** suspender piridostigmina + atropina.

**Desmame:** quando CV >15 mL/kg, NIF <-25, secreções controladas, sem bulbar grave.${REF_FOOTER}`,
    },
  },

  // ==================== GUILLAIN-BARRÉ ====================
  {
    protocolId: "fp-guillain-barre",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Tríade clássica:** fraqueza ascendente arrefléxica + albumino-citológica no LCR + onset 2-4 sem após infecção (Campylobacter, CMV, EBV, Mycoplasma, Zika, COVID, vacina).

**🆕 GBS Consortium 2023/2024 — Brighton + EFNS atualizado.**

**Subtipos:**
- AIDP (mais comum no Ocidente).
- AMAN/AMSAN (Ásia, América Latina; pós-Campylobacter).
- Miller Fisher (oftalmoplegia, ataxia, arreflexia).
- Pandysautonomia.

**Bundle de admissão (TODO GB → internar, monitorar UTI se progressão rápida):**
1. **Avaliação funcional:** GBS disability score; capacidade vital, NIF, SpO₂, capnografia.
2. **Indicação de UTI/IOT** — sinais de alerta:
   - Progressão rápida (<7 d para incapacidade de andar).
   - Disfunção bulbar (disfagia, voz fanhosa).
   - **CV <20 mL/kg, NIF >-30, PEmax <40.**
   - Disautonomia (HAS lábil, arritmia, íleo, retenção urinária).
   - Pneumonia aspirativa.
3. Punção lombar (5-10 d para mostrar dissociação), ENMG (>1 sem para alterações), RM coluna se diagnóstico incerto.
4. Anti-gangliosídeos (GQ1b em Miller Fisher).`,

      treatment: `**Imunoterapia (iniciar em ≤2 sem do início, ideal ≤1 sem):**

**1) IVIg 0,4 g/kg/dia × 5 d (2 g/kg total)** — primeira linha pela praticidade.

**2) Plasmaférese** 5 sessões — eficácia equivalente; combinada com IVIg **NÃO** é superior.

❌ **Corticoide isolado é INEFICAZ e NÃO indicado** (PSGBS).

**🆕 Sem resposta em 2 semanas** (paciente "tratamento-relacionado fluctuation"):
- Repetir IVIg pode ser considerada (sem RCT robusto).
- **Eculizumab** em estudo.

**Suporte:**
- IOT em VC/NIF caindo (NÃO esperar gasometria alterada).
- Disautonomia: monitor contínuo, atropina para bradicardia, β-bloq curtos para HAS (cuidado — labilidade).
- TVP: HBPM profilática em todos (alto risco).
- Dor neuropática: gabapentina, pregabalina, amitriptilina.
- Fisioterapia precoce, prevenção de úlceras de decúbito.
- Suporte nutricional (catabolismo intenso).
- Psicológico (paciente lúcido em corpo paralisado).

**Prognóstico:**
- 80% recupera em 6-12 meses; 20% sequelas permanentes; mortalidade 3-7%.
- **EGOS (Erasmus GBS Outcome Scale)** prediz incapacidade de andar em 6 meses.

**Reabilitação multidisciplinar** indicada precoce.${REF_FOOTER}`,
    },
  },

  // ==================== ENCEFALOPATIA HEPÁTICA — AASLD 2023 ====================
  {
    protocolId: "fp-encefalopatia-hepatica",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Classificação West Haven (atual AASLD 2023):**
| Grau | Manifestação |
|---|---|
| Mínima/Coberta | Apenas testes psicométricos alterados |
| 1 | Inversão sono-vigília, atenção reduzida, leve confusão |
| 2 | **Letargia, desorientação tempo, asterixis óbvio** |
| 3 | Sonolência marcada, desorientação espacial, fala incompreensível |
| 4 | **Coma** |

**Buscar e tratar precipitantes (regra mnemônica HEPATIC):**
- **H**emorragia digestiva (HDA, varizes).
- **E**letrólitos (hipoK, hipoNa, alcalose).
- **P**roteínas (excesso na dieta — raro), **P**aracentese sem albumina.
- **A**zotemia (LRA, diurético excessivo).
- **T**ips/shunt portossistêmico, **T**rombose porta.
- **I**nfecção (PBE, ITU, pneumonia, celulite).
- **C**onstipação, **C**onstrição (hipovolemia).
- + **drogas sedativas/opioides**, transgressão alcoólica, hipoxemia.

**Bundle inicial:**
1. Proteção de via aérea se Glasgow ≤8 / grau 3-4.
2. Investigar precipitante: hemograma, eletrólitos, função renal/hepática, gasometria, amônia (não diagnostica — só apoia), hemocultura, urocultura, **paracentese diagnóstica em todo cirrótico com ascite** (PBE = PMN ≥250).
3. TC de crânio se queda, déficit focal, anticoagulação, dúvida diagnóstica.
4. Glicemia, tiamina 100-300 mg EV antes de glicose.
5. ❌ **Restrição proteica abandonada** — manter 1,2-1,5 g/kg/d (catabolismo piora amônia).`,

      treatment: `**Primeira linha — lactulose:**
- **VO/SNG 25 mL 1/1-2/2 h até evacuação**, depois 25-30 mL 8/8 h titulado para **2-3 evacuações pastosas/dia**.
- **Coma: enema retentivo** — lactulose 300 mL + 700 mL água por 30-60 min, 4-6/6 h.
- Evitar diarreia profusa (perda volêmica/eletrolítica → piora EH).

**Adicionar rifaximina:**
- **🆕 Rifaximina 550 mg VO 12/12 h** — combinação com lactulose reduz recorrência e mortalidade (AASLD 2023, FDA aprovado para prevenção secundária).
- Especialmente após 1º episódio: profilaxia secundária prolongada.

**🆕 Albumina (HE-EASL/AASLD 2023):**
- Em pacientes com EH grau 3-4 + LRA-tipo 1 ou hiponatremia: **albumina 20% 1-1,5 g/kg D1, 1 g/kg D3**.
- Reduz mortalidade em síndrome hepatorrenal e LRA-AKI.

**Casos refratários:**
- L-ornitina-L-aspartato (LOLA) 20-40 g/dia EV (alternativa onde disponível).
- Polietilenoglicol — alternativa à lactulose (HELP trial).
- Avaliar reversão de TIPS, fechamento de shunt portossistêmico espontâneo grande.
- **Encaminhamento para transplante** — recorrência refratária = MELD-EH considerado.

**Profilaxia secundária após 1º episódio:**
- Lactulose + rifaximina indefinida.
- Profilaxia PBE: norfloxacino 400 mg/dia OU ciprofloxacino 500 mg/sem em alto risco.
- Evitar BZD, opioides (preferir paracetamol ≤2 g/d).
- Rastreio HCC (US + AFP 6/6 m).
- Evitar AINE, IECA/BRA em descompensação.${REF_FOOTER}`,
    },
  },

  // ==================== INSUFICIÊNCIA HEPÁTICA AGUDA ====================
  {
    protocolId: "fp-new-insuf-hepatica-aguda",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**Definição (AASLD 2023):** **INR ≥1,5 + qualquer grau de encefalopatia + sem doença hepática prévia + duração <26 sem.**

**Subtipos por intervalo icterícia → encefalopatia:**
- Hiperaguda (≤7 d): paracetamol, hep. A/E — melhor prognóstico.
- Aguda (8-28 d): hep. B, indeterminada.
- Subaguda (5-26 sem): drogas, autoimune — pior prognóstico.

**Etiologias (busca paralela):**
- **Paracetamol** (causa #1 nos EUA) — nível sérico, história.
- Vírus: A, B, E (gestante!), HSV, VZV, CMV, EBV.
- Drogas (DILI): AINE, ATB (amox-clav, INH), fitoterápicos, ecstasy.
- Isquemia (choque, IC, "shock liver").
- Autoimune.
- Wilson (jovem + Coombs neg, FA baixa, ácido úrico baixo).
- Budd-Chiari, Reye, gestação (HELLP, esteatose aguda).
- Cogumelos *Amanita*.

**Bundle de admissão (UTI + transferência precoce a centro de transplante):**
1. ABC, glicemia 1/1 h (hipoglicemia frequente).
2. **N-acetilcisteína EV 150 mg/kg em 1 h → 50 mg/kg em 4 h → 100 mg/kg em 16 h** — em **TODA IHA, não apenas paracetamol** (benefício em IHA não-paracetamol em fases iniciais — Lee 2009).
3. Coagulograma, lactato, NH₃, gasometria, fator V, eletrólitos, função renal, sorologias virais, ceruloplasmina, autoanticorpos, β-hCG.
4. **Não corrigir INR rotineiramente** (perde marcador prognóstico) — apenas se sangramento ativo ou procedimento.
5. ATB empírico amplo + antifúngico se febre/sepse (alta taxa de bacteremia).
6. Suporte por sistema (abaixo).
7. Contato precoce com transplante.`,

      treatment: `**Suporte por sistema:**

**Neurológico (causa #1 de óbito = edema cerebral):**
- Cabeceira 30°, evitar estímulos.
- Hipotermia leve (35-36 °C) em refratário.
- **NaCl 3% se Na ≤145** (alvo 145-150).
- **Manitol 0,5-1 g/kg** se HIC ou sinais de herniação.
- **EH grau 3-4 → IOT + sedação propofol + monitorar PIC** em centros experientes.

**Hemodinâmico:**
- Volume cauteloso, vasopressor (noradrenalina) precoce; vasopressina adjuvante.
- Hidrocortisona 200-300 mg/d em choque refratário (insuf. adrenal relativa).

**Renal:**
- TSR com **CRRT** (preferida — controle gradual de NH₃ e edema cerebral).
- Indicação inclui hiperamonemia >150-200.

**Coagulação:**
- Plasma/CCP só se sangramento ou procedimento.
- Vitamina K 10 mg EV.

**Metabólico:**
- Glicemia 140-180.
- HCO₃ se pH <7,2.
- Tiamina, eletrólitos.

**Infecção:** ATB amplo + antifúngico empírico (até excluir).

**Específico:**
- Paracetamol: NAC.
- Wilson: plasmaférese ponte → transplante.
- Hep B: tenofovir/entecavir.
- HSV: aciclovir 10 mg/kg 8/8 h.
- Amanita: silibinina 5 mg/kg + carvão ativado + NAC.
- Esteatose gestacional/HELLP: parto imediato.

**Critérios para transplante (King's College — paracetamol):**
- pH <7,3 OU (INR >6,5 + Cr >3,4 + EH 3-4) → indicação.

**Critérios King's não-paracetamol:** INR >6,5 OU 3 de: idade <10 ou >40, etiologia desfavorável, icterícia → EH >7d, INR >3,5, bilirrubina >17 mg/dL.${REF_FOOTER}`,
    },
  },

  // ==================== VIA AÉREA DIFÍCIL — DAS 2024 / PUMA 2025 ====================
  {
    protocolId: "fp-via-aerea-dificil",
    lastReviewed: "2026-03",
    sections: {
      conduct: `**🆕 PUMA / DAS 2024 — princípios:**
1. **Plano A, B, C, D** explícito antes de iniciar.
2. **Pré-oxigenação obrigatória** — máscara reservatório 3-5 min ou 8 capacidades vitais; **🆕 oxigenação apneica com CNAF 60 L/min FiO₂ 100%** durante laringoscopia (NO DESAT/PROTECT).
3. Posicionamento "rampa" (orelha alinhada com fúrcula) — obeso, gestante.
4. **Vídeo-laringoscopia como primeira escolha** quando disponível (DEVICE 2023 — ↑sucesso 1ª tentativa).
5. **Máximo 3 tentativas de IOT** antes de declarar via aérea difícil — cada falha ↑ hipoxemia/parada.

**Preditores (LEMON / MOANS / HEAVEN):**
- **L**ook (face, barba, trauma).
- **E**valuate 3-3-2.
- **M**allampati ≥3.
- **O**bstruction (estridor, abscesso, tumor).
- **N**eck mobility.
- **HEAVEN:** Hypoxemia, Extremes age, Anatomy disturbed, Vomit/blood, Exsanguination, Neck mobility.

**Plano A — IOT padrão:**
- Pré-O₂ + sedação + relaxamento + laringoscopia.
- Sequência rápida moderna: **fentanil 1-3 mcg/kg + cetamina 1-2 mg/kg (ou etomidato 0,3 mg/kg ou propofol 1-2 mg/kg) + rocurônio 1,2 mg/kg ou succinilcolina 1,5 mg/kg.**
- Aguardar 60 s rocurônio (ou 45 s succinil) antes de laringoscopia.

**Plano B — vídeo-laringo / introdutor (bougie) / LMA de 2ª geração** (i-gel, LMA Supreme).

**Plano C — máscara facial** (2 mãos, 2 operadores, OPA/NPA), oxigenar.

**Plano D — CICV (cannot intubate cannot ventilate):**
- **Cricotireoidostomia cirúrgica** (preferida sobre por agulha em adultos — DAS 2015, mantida 2024).
- Bisturi 10 + bougie + tubo 6.0 cuffed.`,

      treatment: `**🆕 Sequência rápida em situações especiais:**

**Choque/instabilidade hemodinâmica:**
- **Cetamina 1-2 mg/kg** (preserva PA) ou etomidato 0,15 mg/kg.
- Reduzir doses dos sedativos em 50%.
- Volume e vasopressor **antes** da indução.

**TCE / hipertensão intracraniana:**
- **Fentanil 3 mcg/kg** + cetamina ou etomidato + rocurônio.
- Lidocaína 1,5 mg/kg EV (controverso).
- Manter PAM ≥80 (CPP).

**Asma/DPOC grave:**
- **Cetamina** broncodilatadora.
- Tubo grande, ventilação permissiva.

**Gestante (>20 sem):**
- Manobra Sellick controversa.
- Posição rampa, lateralização uterina esquerda.
- Pré-O₂ rigoroso (dessatura em ~2 min).
- **Magnésio EV** se cesárea recente — risco de potencialização do BNM.

**Choque séptico:**
- Cetamina (não etomidato isolado — supressão adrenal).
- Hidrocortisona 100 mg.

**🆕 Pós-IOT — bundle ABCDE:**
- Auscultar bilateral + capnografia (gold standard de confirmação).
- RX para profundidade.
- Sedação contínua + analgesia.
- Cabeceira 30°, profilaxia úlcera + TEV, controle glicêmico.
- VAP bundle: aspiração subglótica, clorexidina oral, despertar diário.

**Falha:**
- Pedir ajuda **antes** da última tentativa.
- Rest, reset, reposition antes da próxima.
- Documentar formalmente "via aérea difícil" no prontuário e cartão para o paciente.${REF_FOOTER}`,
    },
  },
];
