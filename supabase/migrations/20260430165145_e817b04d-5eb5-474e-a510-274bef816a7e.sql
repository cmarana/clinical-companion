
CREATE TABLE IF NOT EXISTS public.test_access_overrides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  expires_at timestamptz NOT NULL,
  note text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  created_by uuid
);

ALTER TABLE public.test_access_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role manages test overrides"
ON public.test_access_overrides
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY "Users read own test override"
ON public.test_access_overrides
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins read all test overrides"
ON public.test_access_overrides
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX IF NOT EXISTS idx_test_overrides_expires ON public.test_access_overrides(expires_at);
