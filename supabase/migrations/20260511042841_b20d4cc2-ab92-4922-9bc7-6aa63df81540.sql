
-- Enable pgvector for embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- =========================================================
-- 1. medical_knowledge — corpus indexado do PULSO
-- =========================================================
CREATE TABLE public.medical_knowledge (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source_type TEXT NOT NULL, -- protocol|full_protocol|medication|antibiotic|dose|dilution|emergency|prescription|calculator|score|interaction
  source_id TEXT NOT NULL,   -- id do item no app
  specialty TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL,
  chunk_index INTEGER NOT NULL DEFAULT 0,
  tokens INTEGER NOT NULL DEFAULT 0,
  tags TEXT[] NOT NULL DEFAULT '{}',
  keywords TSVECTOR,
  embedding VECTOR(768),
  version INTEGER NOT NULL DEFAULT 1,
  last_reviewed DATE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (source_type, source_id, chunk_index)
);

CREATE INDEX idx_medical_knowledge_embedding ON public.medical_knowledge
  USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_medical_knowledge_keywords ON public.medical_knowledge USING GIN (keywords);
CREATE INDEX idx_medical_knowledge_tags ON public.medical_knowledge USING GIN (tags);
CREATE INDEX idx_medical_knowledge_source_type ON public.medical_knowledge (source_type) WHERE is_active = TRUE;
CREATE INDEX idx_medical_knowledge_specialty ON public.medical_knowledge (specialty) WHERE is_active = TRUE;

-- Trigger para gerar tsvector PT-BR automaticamente
CREATE OR REPLACE FUNCTION public.medical_knowledge_keywords_trigger()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.keywords := setweight(to_tsvector('portuguese', coalesce(NEW.title, '')), 'A')
               || setweight(to_tsvector('portuguese', coalesce(NEW.subtitle, '')), 'B')
               || setweight(to_tsvector('portuguese', array_to_string(NEW.tags, ' ')), 'B')
               || setweight(to_tsvector('portuguese', coalesce(NEW.content, '')), 'C');
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_medical_knowledge_keywords
  BEFORE INSERT OR UPDATE ON public.medical_knowledge
  FOR EACH ROW EXECUTE FUNCTION public.medical_knowledge_keywords_trigger();

ALTER TABLE public.medical_knowledge ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read medical knowledge"
  ON public.medical_knowledge FOR SELECT TO authenticated
  USING (is_active = TRUE);

CREATE POLICY "Admins manage medical knowledge"
  ON public.medical_knowledge FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Service role manages medical knowledge"
  ON public.medical_knowledge FOR ALL TO service_role
  USING (TRUE) WITH CHECK (TRUE);

-- =========================================================
-- 2. ai_query_log — auditoria e custos
-- =========================================================
CREATE TABLE public.ai_query_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  question TEXT NOT NULL,
  intent TEXT NOT NULL DEFAULT 'general',
  complexity TEXT NOT NULL DEFAULT 'medium', -- simple|medium|complex
  model_used TEXT NOT NULL DEFAULT 'none',
  tokens_in INTEGER NOT NULL DEFAULT 0,
  tokens_out INTEGER NOT NULL DEFAULT 0,
  cost_estimate NUMERIC(10,6) NOT NULL DEFAULT 0,
  cache_hit BOOLEAN NOT NULL DEFAULT FALSE,
  curated_hit BOOLEAN NOT NULL DEFAULT FALSE,
  chunks_used JSONB NOT NULL DEFAULT '[]'::jsonb,
  response TEXT NOT NULL DEFAULT '',
  latency_ms INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_ai_query_log_user ON public.ai_query_log (user_id, created_at DESC);
CREATE INDEX idx_ai_query_log_created ON public.ai_query_log (created_at DESC);
CREATE INDEX idx_ai_query_log_intent ON public.ai_query_log (intent);

ALTER TABLE public.ai_query_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own query log"
  ON public.ai_query_log FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins read all query log"
  ON public.ai_query_log FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Service role manages query log"
  ON public.ai_query_log FOR ALL TO service_role
  USING (TRUE) WITH CHECK (TRUE);

-- =========================================================
-- 3. ai_curated_answers — respostas aprovadas
-- =========================================================
CREATE TABLE public.ai_curated_answers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_pattern TEXT NOT NULL,
  intent TEXT NOT NULL DEFAULT 'general',
  answer TEXT NOT NULL,
  source_refs JSONB NOT NULL DEFAULT '[]'::jsonb,
  embedding VECTOR(768),
  approved_by UUID,
  approved_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  hits INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_curated_embedding ON public.ai_curated_answers
  USING ivfflat (embedding vector_cosine_ops) WITH (lists = 50);

ALTER TABLE public.ai_curated_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read curated answers"
  ON public.ai_curated_answers FOR SELECT TO authenticated
  USING (is_active = TRUE);

CREATE POLICY "Admins manage curated answers"
  ON public.ai_curated_answers FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Service role manages curated answers"
  ON public.ai_curated_answers FOR ALL TO service_role
  USING (TRUE) WITH CHECK (TRUE);

-- =========================================================
-- 4. Estender ai_response_cache com vetor + intent
-- =========================================================
ALTER TABLE public.ai_response_cache
  ADD COLUMN IF NOT EXISTS question_embedding VECTOR(768),
  ADD COLUMN IF NOT EXISTS intent TEXT NOT NULL DEFAULT 'general',
  ADD COLUMN IF NOT EXISTS chunks_hash TEXT NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS idx_cache_embedding ON public.ai_response_cache
  USING ivfflat (question_embedding vector_cosine_ops) WITH (lists = 100);

-- =========================================================
-- 5. Função de retrieval híbrido
-- =========================================================
CREATE OR REPLACE FUNCTION public.match_medical_knowledge(
  query_embedding VECTOR(768),
  query_text TEXT DEFAULT '',
  filter_source_types TEXT[] DEFAULT NULL,
  match_count INT DEFAULT 8,
  similarity_threshold FLOAT DEFAULT 0.5
)
RETURNS TABLE (
  id UUID,
  source_type TEXT,
  source_id TEXT,
  specialty TEXT,
  category TEXT,
  title TEXT,
  subtitle TEXT,
  content TEXT,
  chunk_index INTEGER,
  tags TEXT[],
  similarity FLOAT,
  text_rank FLOAT,
  combined_score FLOAT
)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public AS $$
BEGIN
  RETURN QUERY
  WITH vector_matches AS (
    SELECT mk.id,
           1 - (mk.embedding <=> query_embedding) AS similarity,
           ROW_NUMBER() OVER (ORDER BY mk.embedding <=> query_embedding) AS v_rank
    FROM public.medical_knowledge mk
    WHERE mk.is_active = TRUE
      AND mk.embedding IS NOT NULL
      AND (filter_source_types IS NULL OR mk.source_type = ANY(filter_source_types))
      AND (1 - (mk.embedding <=> query_embedding)) >= similarity_threshold
    ORDER BY mk.embedding <=> query_embedding
    LIMIT match_count * 3
  ),
  text_matches AS (
    SELECT mk.id,
           ts_rank(mk.keywords, plainto_tsquery('portuguese', query_text)) AS rank,
           ROW_NUMBER() OVER (ORDER BY ts_rank(mk.keywords, plainto_tsquery('portuguese', query_text)) DESC) AS t_rank
    FROM public.medical_knowledge mk
    WHERE mk.is_active = TRUE
      AND query_text <> ''
      AND mk.keywords @@ plainto_tsquery('portuguese', query_text)
      AND (filter_source_types IS NULL OR mk.source_type = ANY(filter_source_types))
    LIMIT match_count * 3
  ),
  combined AS (
    SELECT COALESCE(v.id, t.id) AS id,
           COALESCE(v.similarity, 0) AS similarity,
           COALESCE(t.rank, 0) AS text_rank,
           -- Reciprocal Rank Fusion
           COALESCE(1.0 / (60 + v.v_rank), 0) + COALESCE(1.0 / (60 + t.t_rank), 0) AS rrf_score
    FROM vector_matches v
    FULL OUTER JOIN text_matches t ON v.id = t.id
  )
  SELECT mk.id, mk.source_type, mk.source_id, mk.specialty, mk.category,
         mk.title, mk.subtitle, mk.content, mk.chunk_index, mk.tags,
         c.similarity, c.text_rank, c.rrf_score
  FROM combined c
  JOIN public.medical_knowledge mk ON mk.id = c.id
  ORDER BY c.rrf_score DESC
  LIMIT match_count;
END;
$$;

-- Trigger updated_at on curated answers
CREATE TRIGGER trg_curated_answers_updated
  BEFORE UPDATE ON public.ai_curated_answers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
