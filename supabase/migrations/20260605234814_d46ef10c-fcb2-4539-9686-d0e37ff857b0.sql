-- 1. Adicionar campos de desfecho à tabela rounds_patients existente
ALTER TABLE public.rounds_patients
  ADD COLUMN IF NOT EXISTS desfecho TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS desfecho_at TIMESTAMPTZ DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS desfecho_notas TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS hipotese_inicial TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS diagnostico_final TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS procedimentos TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS acertou_hipotese BOOLEAN DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS aprendizado TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS tempo_atendimento_min INTEGER DEFAULT NULL;

-- 2. Tabela de estatísticas agregadas de desfecho por médico
CREATE TABLE IF NOT EXISTS public.clinical_outcomes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES public.rounds_patients(id) ON DELETE SET NULL,
  local TEXT NOT NULL DEFAULT '',
  specialty TEXT NOT NULL DEFAULT 'Emergência',
  hipotese_inicial TEXT DEFAULT NULL,
  diagnostico_final TEXT NOT NULL DEFAULT '',
  cid TEXT DEFAULT NULL,
  desfecho TEXT NOT NULL,
  acertou_hipotese BOOLEAN DEFAULT NULL,
  procedimentos TEXT[] DEFAULT '{}',
  tempo_atendimento_min INTEGER DEFAULT NULL,
  complexidade TEXT DEFAULT 'media',
  aprendizado TEXT DEFAULT NULL,
  tags TEXT[] DEFAULT '{}',
  atendimento_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.clinical_outcomes TO authenticated;
GRANT ALL ON public.clinical_outcomes TO service_role;

ALTER TABLE public.clinical_outcomes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own outcomes"
  ON public.clinical_outcomes FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE INDEX IF NOT EXISTS idx_outcomes_user_id ON public.clinical_outcomes(user_id);
CREATE INDEX IF NOT EXISTS idx_outcomes_desfecho ON public.clinical_outcomes(desfecho);
CREATE INDEX IF NOT EXISTS idx_outcomes_diagnostico ON public.clinical_outcomes(diagnostico_final);
CREATE INDEX IF NOT EXISTS idx_outcomes_at ON public.clinical_outcomes(atendimento_at DESC);

-- 3. View de estatísticas por médico (security_invoker para respeitar RLS)
CREATE OR REPLACE VIEW public.outcome_stats
WITH (security_invoker = true) AS
SELECT
  user_id,
  COUNT(*) AS total_casos,
  COUNT(*) FILTER (WHERE desfecho = 'alta') AS total_alta,
  COUNT(*) FILTER (WHERE desfecho = 'internacao') AS total_internacao,
  COUNT(*) FILTER (WHERE desfecho = 'uti') AS total_uti,
  COUNT(*) FILTER (WHERE desfecho = 'obito') AS total_obito,
  COUNT(*) FILTER (WHERE desfecho = 'transferencia') AS total_transferencia,
  COUNT(*) FILTER (WHERE desfecho = 'retorno_upa') AS total_retorno,
  ROUND(
    COUNT(*) FILTER (WHERE acertou_hipotese = true)::NUMERIC /
    NULLIF(COUNT(*) FILTER (WHERE acertou_hipotese IS NOT NULL), 0) * 100,
    1
  ) AS taxa_acerto_hipotese,
  ROUND(AVG(tempo_atendimento_min) FILTER (WHERE tempo_atendimento_min IS NOT NULL), 0) AS tempo_medio_min,
  COUNT(DISTINCT diagnostico_final) AS diagnosticos_distintos,
  MAX(atendimento_at) AS ultimo_atendimento
FROM public.clinical_outcomes
GROUP BY user_id;

GRANT SELECT ON public.outcome_stats TO authenticated;