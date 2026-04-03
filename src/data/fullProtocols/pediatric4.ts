import type { FullProtocol } from "./types";

export const pediatricFullProtocols4: FullProtocol[] = [
  {
    id: "fp-laringite-viral",
    title: "Laringotraqueobronquite (Crupe) Viral",
    categoryId: "pediatrics",
    category: "pediatrics",
    tags: ["crupe", "estridor", "laringite", "dexametasona", "nebulização"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Crupe viral é causa mais comum de obstrução de via aérea superior em crianças de 6 meses a 6 anos.` }
      { id: "def", title: "Definição", content: `Inflamação subglótica (laringe, traqueia e brônquios) de etiologia viral, causando estridor inspiratório e tosse ladrante.` }
      { id: "etiology", title: "Etiologia", content: `Parainfluenza tipo 1 (75%), VSR, influenza, adenovírus, metapneumovírus. Pico: outono/inverno.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Pródromos de IVAS (coriza, febre baixa)
- **Tosse ladrante** (tipo foca)
- **Estridor inspiratório** (pior à noite)
- Rouquidão
- Classificação: leve (estridor em repouso ausente), moderado (estridor em repouso), grave (estridor + tiragem + agitação/letargia)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Diagnóstico CLÍNICO** — não necessita exames rotineiros
**RX cervical AP (sinal da torre/steeple sign):** raramente necessário
**Diferenciar de:** epiglotite (febre alta, sialorreia, posição de tripé — EMERGÊNCIA), corpo estranho, abscesso retrofaríngeo` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Leve:** ar frio/úmido, observação, dexametasona 0.15-0.6mg/kg VO dose única
**Moderado:**
- Dexametasona 0.6mg/kg VO/IM dose única
- Nebulização com adrenalina 0.5mL/kg (máx 5mL) da solução 1:1000 — início de ação em 10min, duração 2h
- Observar por 3-4h após nebulização (efeito rebote)
**Grave:**
- Nebulização com adrenalina + Dexametasona 0.6mg/kg IV
- O₂ se SpO₂ <92%
- IOT se falha (tubo 0.5-1mm menor que esperado)
- UTI` }
    ]
  },
  {
    id: "fp-pneumonia-pediatrica",
    title: "Pneumonia Adquirida na Comunidade Pediátrica",
    categoryId: "pediatrics",
    category: "pediatrics",
    tags: ["pneumonia", "pediatria", "amoxicilina", "febre", "taquipneia"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Pneumonia é principal causa de morte infecciosa em menores de 5 anos no mundo.` }
      { id: "def", title: "Definição", content: `Infecção aguda do parênquima pulmonar em crianças. Classificação OMS: pneumonia (taquipneia), pneumonia grave (tiragem), pneumonia muito grave (incapacidade de beber, convulsões, cianose, rebaixamento).` }
      { id: "etiology", title: "Etiologia", content: `**<2 meses:** S. agalactiae, E. coli, Chlamydia trachomatis
**2 meses-5 anos:** Vírus (VSR, principal), S. pneumoniae, H. influenzae
**>5 anos:** S. pneumoniae, Mycoplasma pneumoniae, Chlamydia pneumoniae
**Staphylococcus:** pneumatoceles, derrame, grave` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Taquipneia (sinal mais sensível da OMS): <2m ≥60; 2-12m ≥50; 1-5a ≥40; >5a ≥30
- Febre, tosse
- Tiragem subcostal/intercostal
- Gemência, batimento de asa nasal (lactentes)
- Crepitações, MV diminuído
- Dor abdominal (pneumonia de base)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**<5 anos:** diagnóstico CLÍNICO (taquipneia + febre + tosse)
**RX tórax:** indicado em: pneumonia grave, internação, complicações
- Consolidação lobar: bacteriana
- Infiltrado intersticial difuso: viral
- Pneumatoceles: estafilocócica
**Hemograma, PCR, hemocultura:** se internação
**USG pleural:** se derrame` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Ambulatorial (>2 meses, não grave):**
- Amoxicilina 50mg/kg/dia VO dividido 8/8h por 7 dias (1ª linha)
- >5 anos com suspeita de atípico: Azitromicina 10mg/kg D1 + 5mg/kg D2-5

**Hospitalar (grave/muito grave):**
- Penicilina cristalina 200.000UI/kg/dia IV dividido 6/6h
- Ou Ampicilina 200mg/kg/dia IV dividido 6/6h
- Grave com derrame/estafilocócica: Oxacilina 200mg/kg/dia + Ceftriaxona

**Derrame pleural complicado/empiema:** drenagem + ATB IV` }
    ]
  },
  {
    id: "fp-invaginacao-intestinal",
    title: "Intussuscepção (Invaginação Intestinal)",
    categoryId: "pediatrics",
    category: "pediatrics",
    tags: ["intussuscepção", "invaginação", "cólica", "geleia de morango", "enema"],
    sections: [
,      { id: "intro", title: "Introdução", content: `Intussuscepção é a causa mais comum de obstrução intestinal em lactentes — emergência cirúrgica se não reduzida.` }
      { id: "def", title: "Definição", content: `Invaginação de um segmento intestinal dentro do lúmen do segmento adjacente (telescopagem). Mais comum: ileocólica (90%).` }
      { id: "etiology", title: "Etiologia", content: `**Idiopática (90% em <2 anos):** hiperplasia linfoide (pós-viral, Peyer). **Causa identificável (>2 anos):** divertículo de Meckel, pólipo, linfoma, púrpura de Henoch-Schönlein.` }
      { id: "clinical", title: "Apresentação Clínica", content: `**Tríade clássica (presente em <50%):**
1. Dor abdominal em cólica intermitente (choro inconsolável episódico)
2. Vômitos
3. Fezes em geleia de morango (sangue + muco) — sinal tardio
- Massa palpável em salsicha no QSD
- Fossa ilíaca direita vazia (sinal de Dance)
- Letargia entre as crises de dor` }
      { id: "diagnosis", title: "Diagnóstico", content: `**USG abdominal (padrão-ouro):** sinal do alvo/donut (corte transversal), pseudo-rim (longitudinal)
**RX abdome:** sinais de obstrução, ausência de gás no ceco
**Enema contrastado:** diagnóstico e terapêutico (contra-indicado se peritonite)` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**Redução não cirúrgica (1ª linha se <48h e sem peritonite):**
- Enema pneumático (ar) — mais usado, sucesso 80-90%
- Enema hidrostático (SF sob pressão controlada)
- Pressão máxima: 120mmHg (ar) ou 1m de coluna (líquido)
- Radiologista + cirurgião presentes

**Cirúrgico:**
- Falha da redução não cirúrgica
- Peritonite/perfuração
- Recorrência (5-10%)
- >2 anos com causa líder provável
- Redução manual ± ressecção intestinal

**Recorrência:** 5-10% — redução não cirúrgica pode ser repetida` }
    ]
  },
  {
    id: "fp-cetoacidose-pediatrica",
    title: "Cetoacidose Diabética Pediátrica — Protocolo Detalhado",
    categoryId: "pediatrics",
    category: "pediatrics",
    tags: ["CAD", "pediatria", "insulina", "edema cerebral", "DM1"],
    sections: [
,      { id: "intro", title: "Introdução", content: `CAD pediátrica requer protocolo específico — edema cerebral é complicação potencialmente fatal.` }
      { id: "def", title: "Definição", content: `Glicemia >200mg/dL + pH <7.3 ou HCO₃ <15 + cetonemia/cetonúria em criança. Classificação: leve (pH 7.2-7.3), moderada (7.1-7.2), grave (<7.1).` }
      { id: "etiology", title: "Etiologia", content: `DM1 ao diagnóstico (30-40% se apresentam em CAD), omissão de insulina, infecção, estresse. Incidência crescente em todo o mundo.` }
      { id: "clinical", title: "Apresentação Clínica", content: `- Poliúria, polidipsia, perda de peso
- Dor abdominal, vômitos (confunde com abdome agudo)
- Respiração de Kussmaul (acidose)
- Hálito cetônico
- Desidratação moderada a grave
- Rebaixamento de consciência (grave)` }
      { id: "diagnosis", title: "Diagnóstico", content: `**Glicemia capilar + gasometria + cetonas (sangue ou urina)**
**Eletrólitos:** Na corrigido (add 1.6 para cada 100mg/dL de glicose acima de 100), K (real e corrigido para pH)
**Osmolaridade efetiva:** 2×Na + glicose/18
**Função renal, hemograma**
**ECG:** sinais de hipo/hipercalemia` }
      { id: "treatment", title: "Abordagem Terapêutica", content: `**1. Hidratação (CUIDADOSA — risco de edema cerebral):**
- SF 0.9% 10-20mL/kg em 1-2h (máx 30mL/kg nas 1ªs 4h)
- Manutenção: 1.5-2x a necessidade hídrica diária em 48h
- NÃO exceder 4L/m²/dia

**2. Insulina (somente após K >3.5):**
- Insulina regular 0.05-0.1 UI/kg/h IV contínua (iniciar após 1h de hidratação)
- NÃO fazer bolus
- Redução glicêmica alvo: 50-75mg/dL/h
- Quando glicose <300: trocar SF para SG 5% + SF

**3. Potássio:**
- K <3.5: repor ANTES da insulina (40mEq/L)
- K 3.5-5.5: 20-40mEq/L na solução
- K >5.5: não repor, reavaliar em 1h

**4. Bicarbonato:** SOMENTE se pH <6.9

**EDEMA CEREBRAL (emergência):**
- Sinais: cefaleia, bradicardia, HAS, vômitos, alteração pupilar, rebaixamento
- Manitol 0.5-1g/kg IV em 15min OU NaCl 3% 2.5-5mL/kg em 10-15min
- Elevar cabeceira, reduzir taxa de infusão` }
    ]
  }
];
