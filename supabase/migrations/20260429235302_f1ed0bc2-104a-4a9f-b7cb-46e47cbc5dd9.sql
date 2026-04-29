
-- ============================================
-- 1. KPI PHASE TARGETS & PROGRESS
-- ============================================
CREATE TABLE public.kpi_phase_targets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase TEXT NOT NULL,
  kpi_code TEXT NOT NULL,
  kpi_label TEXT NOT NULL,
  unit TEXT NOT NULL DEFAULT '',
  target_value NUMERIC NOT NULL,
  direction TEXT NOT NULL DEFAULT 'lower_better',
  description TEXT NOT NULL DEFAULT '',
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (phase, kpi_code)
);
ALTER TABLE public.kpi_phase_targets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage kpi targets" ON public.kpi_phase_targets
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Authenticated read kpi targets" ON public.kpi_phase_targets
  FOR SELECT TO authenticated USING (true);

CREATE TABLE public.kpi_phase_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase TEXT NOT NULL,
  kpi_code TEXT NOT NULL,
  measured_value NUMERIC NOT NULL,
  sample_size INTEGER NOT NULL DEFAULT 0,
  measured_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  source TEXT NOT NULL DEFAULT 'manual',
  notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.kpi_phase_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage kpi progress" ON public.kpi_phase_progress
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Authenticated read kpi progress" ON public.kpi_phase_progress
  FOR SELECT TO authenticated USING (true);

CREATE INDEX idx_kpi_progress_phase_kpi ON public.kpi_phase_progress (phase, kpi_code, measured_at DESC);

-- ============================================
-- 2. CLINICAL CHECKLISTS
-- ============================================
CREATE TABLE public.clinical_checklists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'geral',
  description TEXT NOT NULL DEFAULT '',
  institution_id UUID REFERENCES public.institutions(id) ON DELETE CASCADE,
  is_global BOOLEAN NOT NULL DEFAULT false,
  active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.clinical_checklists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone reads global checklists" ON public.clinical_checklists
  FOR SELECT TO authenticated
  USING (is_global = true OR (institution_id IS NOT NULL AND is_institution_member(auth.uid(), institution_id)));

CREATE POLICY "Admins manage global checklists" ON public.clinical_checklists
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Inst admins manage own checklists" ON public.clinical_checklists
  FOR ALL TO authenticated
  USING (institution_id IS NOT NULL AND get_institution_role(auth.uid(), institution_id) = ANY (ARRAY['admin','editor']))
  WITH CHECK (institution_id IS NOT NULL AND get_institution_role(auth.uid(), institution_id) = ANY (ARRAY['admin','editor']));

CREATE TABLE public.clinical_checklist_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  checklist_id UUID NOT NULL REFERENCES public.clinical_checklists(id) ON DELETE CASCADE,
  position INTEGER NOT NULL DEFAULT 0,
  text TEXT NOT NULL,
  critical BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.clinical_checklist_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read items if can read checklist" ON public.clinical_checklist_items
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.clinical_checklists c WHERE c.id = checklist_id
    AND (c.is_global OR (c.institution_id IS NOT NULL AND is_institution_member(auth.uid(), c.institution_id)))
  ));

CREATE POLICY "Admins manage all items" ON public.clinical_checklist_items
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Inst editors manage items" ON public.clinical_checklist_items
  FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.clinical_checklists c
    WHERE c.id = checklist_id AND c.institution_id IS NOT NULL
    AND get_institution_role(auth.uid(), c.institution_id) = ANY (ARRAY['admin','editor'])
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.clinical_checklists c
    WHERE c.id = checklist_id AND c.institution_id IS NOT NULL
    AND get_institution_role(auth.uid(), c.institution_id) = ANY (ARRAY['admin','editor'])
  ));

CREATE TABLE public.clinical_checklist_executions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  checklist_id UUID NOT NULL REFERENCES public.clinical_checklists(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  institution_id UUID REFERENCES public.institutions(id) ON DELETE SET NULL,
  unit TEXT NOT NULL DEFAULT '',
  shift TEXT NOT NULL DEFAULT '',
  total_items INTEGER NOT NULL DEFAULT 0,
  completed_items INTEGER NOT NULL DEFAULT 0,
  completion_pct NUMERIC NOT NULL DEFAULT 0,
  notes TEXT NOT NULL DEFAULT '',
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);
ALTER TABLE public.clinical_checklist_executions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users insert own executions" ON public.clinical_checklist_executions
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own executions" ON public.clinical_checklist_executions
  FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users read own executions" ON public.clinical_checklist_executions
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins read all executions" ON public.clinical_checklist_executions
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Inst admins read inst executions" ON public.clinical_checklist_executions
  FOR SELECT TO authenticated
  USING (institution_id IS NOT NULL AND get_institution_role(auth.uid(), institution_id) = ANY (ARRAY['admin','editor']));

CREATE INDEX idx_exec_checklist ON public.clinical_checklist_executions (checklist_id, started_at DESC);
CREATE INDEX idx_exec_unit_shift ON public.clinical_checklist_executions (unit, shift);

CREATE TABLE public.clinical_checklist_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  execution_id UUID NOT NULL REFERENCES public.clinical_checklist_executions(id) ON DELETE CASCADE,
  item_id UUID NOT NULL REFERENCES public.clinical_checklist_items(id) ON DELETE CASCADE,
  checked BOOLEAN NOT NULL DEFAULT false,
  checked_at TIMESTAMPTZ
);
ALTER TABLE public.clinical_checklist_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own responses" ON public.clinical_checklist_responses
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.clinical_checklist_executions e WHERE e.id = execution_id AND e.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM public.clinical_checklist_executions e WHERE e.id = execution_id AND e.user_id = auth.uid()));

CREATE POLICY "Admins read all responses" ON public.clinical_checklist_responses
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

-- ============================================
-- 3. ERROR BASELINES & EVENTS (EPM/CDDI)
-- ============================================
CREATE TABLE public.error_baselines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  label TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'EPM',
  baseline_value NUMERIC NOT NULL,
  baseline_unit TEXT NOT NULL DEFAULT 'erros/1000 prescrições',
  baseline_period_start DATE NOT NULL,
  baseline_period_end DATE NOT NULL,
  source TEXT NOT NULL DEFAULT '',
  notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.error_baselines ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage baselines" ON public.error_baselines
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Authenticated read baselines" ON public.error_baselines
  FOR SELECT TO authenticated USING (true);

CREATE TABLE public.error_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  baseline_code TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'EPM',
  severity TEXT NOT NULL DEFAULT 'low',
  was_mitigated BOOLEAN NOT NULL DEFAULT true,
  description TEXT NOT NULL DEFAULT '',
  user_id UUID,
  institution_id UUID REFERENCES public.institutions(id) ON DELETE SET NULL,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.error_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users insert own error events" ON public.error_events
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users read own error events" ON public.error_events
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins manage error events" ON public.error_events
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_error_events_cat_date ON public.error_events (category, occurred_at DESC);

-- ============================================
-- 4. GUIDELINE CURATION
-- ============================================
CREATE TABLE public.guideline_curation (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guideline_code TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  specialty TEXT NOT NULL DEFAULT 'geral',
  source TEXT NOT NULL DEFAULT '',
  current_version TEXT NOT NULL DEFAULT 'v1.0',
  status TEXT NOT NULL DEFAULT 'pendente',
  evidence_grade TEXT NOT NULL DEFAULT '',
  last_review_date DATE,
  next_review_date DATE NOT NULL,
  responsible_committee TEXT NOT NULL DEFAULT 'Comitê Clínico-Operacional',
  responsible_user UUID,
  notes TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.guideline_curation ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read curation" ON public.guideline_curation
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins manage curation" ON public.guideline_curation
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TABLE public.guideline_curation_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guideline_id UUID NOT NULL REFERENCES public.guideline_curation(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  actor_id UUID NOT NULL,
  from_status TEXT NOT NULL DEFAULT '',
  to_status TEXT NOT NULL DEFAULT '',
  comment TEXT NOT NULL DEFAULT '',
  version_after TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.guideline_curation_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read history" ON public.guideline_curation_history
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins insert history" ON public.guideline_curation_history
  FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role) AND auth.uid() = actor_id);

CREATE INDEX idx_history_guideline ON public.guideline_curation_history (guideline_id, created_at DESC);

-- ============================================
-- 5. TTP EVENTS
-- ============================================
CREATE TABLE public.ttp_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  trigger_source TEXT NOT NULL DEFAULT 'manual',
  trigger_label TEXT NOT NULL DEFAULT '',
  protocol_id TEXT NOT NULL DEFAULT '',
  protocol_title TEXT NOT NULL DEFAULT '',
  started_at TIMESTAMPTZ NOT NULL,
  protocol_opened_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ttp_seconds INTEGER NOT NULL DEFAULT 0,
  is_outlier BOOLEAN NOT NULL DEFAULT false,
  unit TEXT NOT NULL DEFAULT '',
  shift TEXT NOT NULL DEFAULT '',
  institution_id UUID REFERENCES public.institutions(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.ttp_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users insert own ttp events" ON public.ttp_events
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users read own ttp events" ON public.ttp_events
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins read all ttp events" ON public.ttp_events
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Inst admins read inst ttp" ON public.ttp_events
  FOR SELECT TO authenticated
  USING (institution_id IS NOT NULL AND get_institution_role(auth.uid(), institution_id) = ANY (ARRAY['admin','editor']));

CREATE INDEX idx_ttp_source_date ON public.ttp_events (trigger_source, created_at DESC);
CREATE INDEX idx_ttp_outlier ON public.ttp_events (is_outlier) WHERE is_outlier = true;

-- ============================================
-- 6. TRIGGERS for updated_at
-- ============================================
CREATE TRIGGER trg_kpi_targets_updated BEFORE UPDATE ON public.kpi_phase_targets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_checklists_updated BEFORE UPDATE ON public.clinical_checklists
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER trg_curation_updated BEFORE UPDATE ON public.guideline_curation
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
