-- Fix bulario: remove permissive INSERT/UPDATE policies, replace with service_role only
DROP POLICY IF EXISTS "Authenticated insert for bulario" ON public.bulario_medications;
DROP POLICY IF EXISTS "Authenticated update for bulario" ON public.bulario_medications;

CREATE POLICY "Only service role can insert bulario"
  ON public.bulario_medications FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Only service role can update bulario"
  ON public.bulario_medications FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);