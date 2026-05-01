-- Catálogo dos itens versionados do app (uma linha por protocolo/calc/fármaco/prescrição).
-- Mantemos referência ao item via item_type + item_id (string já usada no código).
CREATE TABLE public.versioned_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  item_type TEXT NOT NULL CHECK (item_type IN ('protocol','quick_protocol','prescription','calculator','antimicrobial')),
  item_id TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '',
  current_version TEXT NOT NULL DEFAULT '2025.1',
  current_year INTEGER NOT NULL DEFAULT 2025,
  source TEXT NOT NULL DEFAULT '',
  last_checked_at TIMESTAMPTZ,
  last_check_result TEXT NOT NULL DEFAULT 'never' CHECK (last_check_result IN ('never','up_to_date','update_suggested','error')),
  notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (item_type, item_id)
);

CREATE INDEX idx_versioned_items_type ON public.versioned_items(item_type);
CREATE INDEX idx_versioned_items_check ON public.versioned_items(last_check_result);

-- Job de varredura disparado pelo admin: agrupa N sugestões.
CREATE TABLE public.guideline_review_jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  triggered_by UUID NOT NULL,
  scope TEXT[] NOT NULL DEFAULT ARRAY['protocol','quick_protocol','prescription','calculator','antimicrobial']::text[],
  target_year INTEGER NOT NULL DEFAULT 2026,
  source_policy TEXT NOT NULL DEFAULT 'br_plus_intl' CHECK (source_policy IN ('br_only','br_plus_intl')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','running','completed','failed')),
  total_items INTEGER NOT NULL DEFAULT 0,
  processed_items INTEGER NOT NULL DEFAULT 0,
  suggestions_count INTEGER NOT NULL DEFAULT 0,
  error_message TEXT NOT NULL DEFAULT '',
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_review_jobs_status ON public.guideline_review_jobs(status);
CREATE INDEX idx_review_jobs_created ON public.guideline_review_jobs(created_at DESC);

-- Sugestões de atualização produzidas pela IA. Cada uma referencia 1 item.
CREATE TABLE public.guideline_review_suggestions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.guideline_review_jobs(id) ON DELETE CASCADE,
  item_type TEXT NOT NULL,
  item_id TEXT NOT NULL,
  item_title TEXT NOT NULL,
  current_version TEXT NOT NULL DEFAULT '',
  proposed_version TEXT NOT NULL DEFAULT '2026.1',
  change_summary TEXT NOT NULL DEFAULT '',
  proposed_patch TEXT NOT NULL DEFAULT '',
  evidence_sources JSONB NOT NULL DEFAULT '[]'::jsonb,
  impact TEXT NOT NULL DEFAULT 'medium' CHECK (impact IN ('low','medium','high','critical')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected','applied')),
  reviewer_id UUID,
  reviewer_note TEXT NOT NULL DEFAULT '',
  reviewed_at TIMESTAMPTZ,
  applied_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_suggestions_job ON public.guideline_review_suggestions(job_id);
CREATE INDEX idx_suggestions_status ON public.guideline_review_suggestions(status);
CREATE INDEX idx_suggestions_impact ON public.guideline_review_suggestions(impact);

-- Triggers para updated_at
CREATE TRIGGER trg_versioned_items_updated_at
  BEFORE UPDATE ON public.versioned_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- RLS
ALTER TABLE public.versioned_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guideline_review_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guideline_review_suggestions ENABLE ROW LEVEL SECURITY;

-- versioned_items: leitura pública autenticada (para mostrar versão no rodapé), escrita só admin/service
CREATE POLICY "Authenticated read versioned items"
  ON public.versioned_items FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Admins manage versioned items"
  ON public.versioned_items FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Service role manages versioned items"
  ON public.versioned_items FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- review_jobs: só admins
CREATE POLICY "Admins manage review jobs"
  ON public.guideline_review_jobs FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role) AND triggered_by = auth.uid());

CREATE POLICY "Service role manages review jobs"
  ON public.guideline_review_jobs FOR ALL TO service_role
  USING (true) WITH CHECK (true);

-- suggestions: só admins
CREATE POLICY "Admins read suggestions"
  ON public.guideline_review_suggestions FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins update suggestions"
  ON public.guideline_review_suggestions FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Service role manages suggestions"
  ON public.guideline_review_suggestions FOR ALL TO service_role
  USING (true) WITH CHECK (true);