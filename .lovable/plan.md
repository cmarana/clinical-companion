# IA Médica RAG no PULSO

Transformar a IA Clínica em uma camada RAG sobre o conteúdo interno do PULSO (protocolos, antibióticos, doses, diluições, condutas, calculadoras), com roteamento inteligente de modelos, cache semântico e painel admin. Objetivo: respostas seguras, baseadas em fonte interna, com custo mínimo de LLM.

---

## Etapa 1 — Base médica estruturada (pgvector)

Migração nova:

- Habilitar `vector` extension.
- Tabela `medical_knowledge` (corpus unificado, indexado):
  - `id`, `source_type` (`protocol` | `full_protocol` | `medication` | `antibiotic` | `dose` | `dilution` | `emergency` | `prescription` | `calculator` | `score` | `interaction`)
  - `source_id` (id do item no app, ex.: `iam-st`, `ceftriaxona`)
  - `specialty`, `category`, `title`, `subtitle`
  - `content` (texto chunked, ~500–800 tokens)
  - `chunk_index`, `tokens`
  - `tags TEXT[]`, `keywords TSVECTOR` (para busca lexical PT-BR)
  - `embedding VECTOR(768)` (Gemini `text-embedding-004`)
  - `version`, `last_reviewed`, `is_active`
  - índice IVFFlat em `embedding`, GIN em `keywords` e `tags`
- Tabela `medical_knowledge_sources`: metadados de fonte (diretriz, ano, URL) já existem em `guidelines`; usar FK opcional.
- Tabela `ai_query_log`: `user_id`, `question`, `intent`, `model_used`, `tokens_in/out`, `cost_estimate`, `cache_hit`, `chunks_used JSONB`, `response`, `latency_ms`.
- Tabela `ai_curated_answers`: respostas frequentes aprovadas pelo admin (`question_pattern`, `embedding`, `answer`, `approved_by`, `approved_at`).

RLS: leitura pública autenticada de `medical_knowledge`; escrita só `service_role`/admin. `ai_query_log`: usuário lê o próprio, admin lê tudo.

## Etapa 2 — Ingestão de conteúdo

Edge Function `ingest-medical-knowledge` (admin-only):
- Lê todas as fontes existentes do app: `src/data/fullProtocols/*`, `src/data/emergency/*`, `bulario_medications`, `prescriptions`, `pediatricDoses`, `medications` (diluições), calculadoras (metadados).
- Chunking semântico por seção (mantém `intro/def/conduct/treatment/prescriptions` como blocos).
- Para cada chunk: gera embedding com **Gemini `text-embedding-004` (gratuito)** via `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent`.
- Upsert em `medical_knowledge` com `version` incremental.
- Script utilitário `scripts/ingest-knowledge.ts` para rodar localmente em massa.

Como o conteúdo do app está em TS estático, criar um exporter (`scripts/export-knowledge.ts`) que serializa todos os datasets em JSON e envia em lotes para a Edge Function.

## Etapa 3 — Classificador de intenção

Edge Function `classify-intent` (ou inline em `clinical-ai`):
- Primeiro: regex/keyword fast-path (ex.: "dose de", "diluir", "interação", "score", "calcula") → intent direto, **sem LLM**.
- Fallback: 1 chamada a Gemini Flash-Lite com prompt curto JSON-only retornando `{intent, complexity: "simple"|"medium"|"complex", entities:[...]}`.
- Intents: `dose`, `dilution`, `antibiotic`, `protocol`, `emergency`, `conduct`, `calculator`, `score`, `interaction`, `general`, `complex_case`.

## Etapa 4 — Retrieval híbrido (RAG)

Função SQL `match_medical_knowledge(query_embedding, query_text, intent, top_k)`:
- Busca vetorial por cosine similarity (pgvector).
- Combinada com full-text search PT-BR (`ts_rank` em `keywords`).
- Filtro por `source_type` baseado em intent (ex.: intent=`dose` → prioriza `medication`, `dose`, `prescription`).
- RRF (Reciprocal Rank Fusion) para combinar os dois rankings.
- Retorna top 5–8 chunks com score.

## Etapa 5 — Roteador de modelos

Em `clinical-ai` (refatorado):

```
intent → simple (dose direta encontrada com score>0.85)
   → resposta determinística templated, sem LLM, custo zero
intent → medium
   → Gemini 2.5 Flash-Lite com chunks no contexto
intent → complex_case ou múltiplos chunks ambíguos
   → Gemini 2.5 Flash (ou Pro só como fallback explícito)
```

Sempre injeta system prompt restritivo:
> "Responda APENAS com base nos TRECHOS_FONTE fornecidos. Se a informação não estiver lá, diga 'Não encontrei essa informação na base do PULSO'. Não invente doses. Sempre cite a fonte interna."

## Etapa 6 — Cache semântico

Estender `ai_response_cache` existente:
- Adicionar coluna `question_embedding VECTOR(768)`, `intent`, `chunks_hash`.
- Antes de chamar LLM: buscar cache por similaridade (cosine ≥ 0.92) + mesmo intent.
- Hit → retorna resposta cacheada, incrementa `hits`, custo zero.
- TTL 30 dias (já existe).
- Curated answers (`ai_curated_answers`) verificadas primeiro, com prioridade absoluta.

## Etapa 7 — Formato de resposta

Prompt force estrutura markdown:
```
**Resposta direta:** ...
**Dose/Conduta:** ...
**Observações:** ...
**Alertas/Contraindicações:** ...
**Fonte PULSO:** [Protocolo X — seção Y]
---
*Apoio à decisão. Julgamento clínico do médico assistente é soberano.*
```

Front-end: renderizar com cards já existentes (`ClinicalResponseCards`) + badge da fonte clicável que abre o protocolo.

## Etapa 8 — Painel administrativo

Nova rota `/admin/medical-knowledge` (gate `has_role admin`):
- Listar/buscar/editar `medical_knowledge` (CRUD com re-embed automático ao salvar).
- Aba "Perguntas dos usuários" → lê `ai_query_log` paginado, filtros por intent/modelo/cache_hit.
- Aba "Respostas curadas" → admin promove uma resposta do log para `ai_curated_answers`.
- Aba "Custos" → agregação por dia/modelo/usuário (gráfico Recharts) reaproveitando `AdminAiCosts`.
- Botão "Reingerir base" → dispara `ingest-medical-knowledge` em background.

## Etapa 9 — Edge Functions a criar/alterar

Criar:
- `embed-text` — wrapper para `text-embedding-004` (reuso interno).
- `ingest-medical-knowledge` — ingestão em lote (admin).
- `medical-rag-query` — pipeline completo: classify → retrieve → cache → route → LLM → log.

Alterar:
- `clinical-ai` — passa a chamar `medical-rag-query` internamente, mantém SSE streaming.
- `ai-usage-status` — sem mudança, apenas reusa.

Manter Lovable AI Gateway (`LOVABLE_API_KEY`) como provedor para as chamadas LLM (Flash-Lite/Flash). Embeddings via Google direto exigem `GEMINI_API_KEY` (gratuito, alta cota) — pedir secret só quando o usuário aprovar a etapa 2.

## Etapa 10 — Segurança

- Edge functions exigem JWT + Pro (já implementado em `verifyAuthAndQuota`).
- RLS estrita em todas as novas tabelas.
- Disclaimer médico já obrigatório (memória do projeto) — manter no rodapé das respostas.
- Nunca enviar PII do paciente para o LLM (sanitização de nomes/CPF antes do envio).
- Rate limit por usuário já existe (quota mensal).

---

## Detalhes técnicos

**Stack:** Supabase Postgres + pgvector + Edge Functions Deno + Gemini text-embedding-004 (gratuito) + Lovable AI Gateway (Flash-Lite/Flash) + cache em `ai_response_cache` estendido.

**Custo estimado por pergunta:**
- Cache hit: $0
- Simple (sem LLM): $0
- Medium (Flash-Lite + 5 chunks ~3k tokens): ~$0.0001
- Complex (Flash + 8 chunks ~6k tokens): ~$0.001

**Migração inicial (Etapa 1):** ~1 SQL migration; ~3 Edge Functions novas; ~1 página admin; refactor de `clinical-ai`.

**Volume estimado de chunks:** ~1.000 protocolos × 5 seções + 2.000 medicamentos × 2 chunks + 1.265 prescrições + 53 calculadoras ≈ **~12k embeddings** (~50 MB no pgvector).

---

## Sugestão de execução incremental

Recomendo executar **em ondas** (não tudo de uma vez):

1. **Onda 1 (fundação):** Etapas 1, 2, 3, 4 — base + ingestão + retrieval funcionando, testável via SQL.
2. **Onda 2 (IA viva):** Etapas 5, 6, 7 — refactor `clinical-ai` com RAG + cache + roteador.
3. **Onda 3 (governança):** Etapa 8 — painel admin completo.

Confirme se quer que eu comece pela **Onda 1** já nesta resposta (criando a migration de `medical_knowledge` + `ai_curated_answers` + extensão do `ai_response_cache`, e a Edge Function `embed-text`), ou se prefere ajustar algo no plano antes.