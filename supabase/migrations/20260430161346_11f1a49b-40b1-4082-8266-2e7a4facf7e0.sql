-- ─── Quota mensal por usuário ────────────────────────────────────
CREATE TABLE public.ai_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  feature TEXT NOT NULL DEFAULT 'clinical-ai',
  year_month TEXT NOT NULL, -- formato 'YYYY-MM'
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, feature, year_month)
);

CREATE INDEX idx_ai_usage_lookup ON public.ai_usage (user_id, feature, year_month);

ALTER TABLE public.ai_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own ai usage"
  ON public.ai_usage FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Service role manages ai usage"
  ON public.ai_usage FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "Admins read all ai usage"
  ON public.ai_usage FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TRIGGER trg_ai_usage_updated_at
  BEFORE UPDATE ON public.ai_usage
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ─── Cache global de respostas IA ────────────────────────────────
CREATE TABLE public.ai_response_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prompt_hash TEXT NOT NULL,
  feature TEXT NOT NULL DEFAULT 'clinical-ai',
  model TEXT NOT NULL DEFAULT 'google/gemini-2.5-flash',
  mode TEXT NOT NULL DEFAULT 'default',
  response TEXT NOT NULL,
  hits INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_hit_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '30 days'),
  UNIQUE (prompt_hash, feature, model, mode)
);

CREATE INDEX idx_ai_cache_lookup ON public.ai_response_cache (prompt_hash, feature, model, mode);
CREATE INDEX idx_ai_cache_expires ON public.ai_response_cache (expires_at);

ALTER TABLE public.ai_response_cache ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read cache"
  ON public.ai_response_cache FOR SELECT
  TO authenticated
  USING (expires_at > now());

CREATE POLICY "Service role manages cache"
  ON public.ai_response_cache FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

-- ─── RPC para incrementar uso atomicamente ───────────────────────
CREATE OR REPLACE FUNCTION public.increment_ai_usage(
  _user_id UUID,
  _feature TEXT DEFAULT 'clinical-ai'
)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _ym TEXT := to_char(now() AT TIME ZONE 'America/Sao_Paulo', 'YYYY-MM');
  _new_count INTEGER;
BEGIN
  INSERT INTO public.ai_usage (user_id, feature, year_month, count)
  VALUES (_user_id, _feature, _ym, 1)
  ON CONFLICT (user_id, feature, year_month)
  DO UPDATE SET count = ai_usage.count + 1, updated_at = now()
  RETURNING count INTO _new_count;

  RETURN _new_count;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_ai_usage(
  _user_id UUID,
  _feature TEXT DEFAULT 'clinical-ai'
)
RETURNS INTEGER
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(count, 0)
  FROM public.ai_usage
  WHERE user_id = _user_id
    AND feature = _feature
    AND year_month = to_char(now() AT TIME ZONE 'America/Sao_Paulo', 'YYYY-MM')
  LIMIT 1;
$$;