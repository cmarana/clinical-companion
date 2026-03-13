
-- Allow authenticated users to insert/upsert medications (for import)
CREATE POLICY "Authenticated insert for bulario"
  ON public.bulario_medications
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update medications (for upsert)
CREATE POLICY "Authenticated update for bulario"
  ON public.bulario_medications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
