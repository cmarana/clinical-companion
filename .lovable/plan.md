## Objetivo

Entregar duas peças complementares:

1. **Master List de protocolos por setor (Emergência, UTI/CTI, Urgência/UPA, Pronto-Socorro)** com prioridade clínica (P1/P2/P3), diretriz de referência mais recente (sociedade + ano alvo) e status esperado de revisão 2025/2026.
2. **Painel de Auditoria de Cobertura** (admin) que cruza essa master list com os protocolos reais do app (`fullProtocols` + `PATCHES_2026` + `_sectionPatches2026[ABC]`) e sinaliza, por linha:
   - **Faltante** — protocolo previsto mas inexistente
   - **Desatualizado** — existe mas `lastReviewed` < ano alvo OU sem `guidelines` recentes
   - **Incompleto** — existe mas sem seções obrigatórias mínimas (conduct, treatment, prescriptions, references) ou sem fonte oficial
   - **OK** — coberto e atualizado para o ano alvo

## Arquivos a criar / editar

### 1. Master list de cobertura por setor

`src/data/fullProtocols/_coverageMaster.ts` (novo)

Estrutura:

```text
CoverageEntry {
  expectedId: string        // ID canônico esperado (ou aliases)
  aliases?: string[]        // outros IDs que satisfazem
  title: string             // título humano
  sectors: Sector[]         // ['emergencia','uti','upa','ps','cti']
  priority: 'P1'|'P2'|'P3'  // P1 = red flag / risco de vida
  targetYear: 2025 | 2026
  expectedSocieties: string[] // ['AHA','ESC','SBC','MS Brasil','SSC',...]
  guidelineHint: string     // ex: "ACLS 2025", "SSC 2024", "GINA 2025"
  notes?: string
}
```

Conteúdo: ~120 entradas cobrindo todos os cenários críticos já discutidos nos lotes A/B/C + lacunas conhecidas (ex.: choque cardiogênico, TEP maciço, crise tireotóxica, coma mixedematoso, insuficiência adrenal aguda, hiponatremia/hipernatremia severa, hemoptise maciça, pneumotórax hipertensivo, tamponamento, dissecção aórtica, AAA roto, AVCh, HSA, vasoespasmo, delirium UTI, sedação/analgesia UTI ABCDEF, weaning ventilatório, PAV/IRAS, profilaxia TEV em UTI, transfusão maciça, CIVD, insuficiência hepática fulminante, encefalopatia hepática, pancreatite WSES 2024, colangite Tokyo 2018/24, isquemia mesentérica, obstrução intestinal, abdome agudo cirúrgico, hemorragia subaracnoide, mal epiléptico refratário, AVC pediátrico, sepse pediátrica/neonatal, bronquiolite, asma pediátrica grave, intoxicações específicas — paracetamol/AAS/ADT/BZD/opioide/ßbloqueador/BCC/digoxina/metanol/etilenoglicol — , overdose por novas drogas sintéticas, queimadura química/elétrica, afogamento, hipotermia/hipertermia, raiva pós-exposição, tétano, leptospirose grave, malária grave, etc.).

### 2. Auditor de cobertura (lógica pura)

`src/lib/coverage-audit.ts` (novo)

- Carrega `fullProtocols` (com patches já aplicados pelo `index.ts`)
- Para cada entrada da master list, resolve por `expectedId`/`aliases`
- Avalia status:
  - `missing` se não encontrado
  - `outdated` se `lastReviewed` ausente ou ano < `targetYear`
  - `incomplete` se faltar `guidelines` OU seções `conduct`/`treatment`/`prescriptions`/`references` vazias
  - `ok` caso contrário
- Retorna `CoverageAuditRow[]` + agregados por setor, prioridade e status.

### 3. Painel de auditoria (UI admin)

`src/pages/CoverageAudit.tsx` (novo) + rota `/admin/coverage-audit` em `src/App.tsx`.

Recursos:

- Cards de resumo (Faltantes, Desatualizados, Incompletos, OK) por setor
- Filtros: setor (chips), prioridade (P1/P2/P3), status, ano alvo, sociedade
- Tabela ordenável (Title, Setor, Prioridade, Diretriz, Ano alvo, Status, Ação)
- Linha clicável → abre `/protocolo/:id` quando existir; senão mostra hint "criar protocolo"
- Badge "Atualizado 2026" / "Pendente" reutilizando `getReview2026Label`
- Botão **Exportar CSV** (gera `/mnt/documents` apenas client-side via Blob)
- Botão **Recalcular** (reroda `runCoverageAudit()` em memória)

Acesso restrito a admin (`has_role`), padrão idêntico ao `ValidationChecklist`.

### 4. Link no AdminDashboard

Adicionar card "Auditoria de Cobertura 2026" em `src/pages/AdminDashboard.tsx` apontando para `/admin/coverage-audit`.

## Considerações técnicas

- Sem migrations: tudo client-side, sem nova tabela. Reaproveita `versioned_items` apenas se já houver dados; caso contrário trabalha apenas com a master list.
- Reaproveita `protocolGuidelinesIndex` e `patched2026Ids` para evitar reler arquivos.
- Setores são derivados do campo `categoryId`/`category` + tags + heurística (ex.: tudo de `cardiology`/`respiratory`/`trauma`/`sepsis`/`emergency` é "emergencia"; `metabolic`/`nephrology`/`respiratory` graves entram em "uti"; SUS/UPA mapeado via `susProtocols*`).
- Performance: master list é estática (~120 itens) e `fullProtocols` já carregado → audit roda < 50ms.
- Sem mudanças em RLS, edge functions ou design system.

## Fora de escopo

- Não cria nem edita protocolos clínicos novos nesta entrega — o painel apenas mapeia/sinaliza. As correções de conteúdo serão feitas em lotes separados conforme a auditoria apontar.
- Não toca em nada de billing/auth.
