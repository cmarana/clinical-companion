
-- Drop existing ALL policy
DROP POLICY IF EXISTS "Users manage own rounds tasks" ON public.rounds_tasks;

-- Recreate with patient ownership verification
CREATE POLICY "Users manage own rounds tasks"
ON public.rounds_tasks
FOR ALL
TO authenticated
USING (user_id = auth.uid())
WITH CHECK (
  user_id = auth.uid()
  AND EXISTS (
    SELECT 1 FROM public.rounds_patients
    WHERE id = patient_id AND user_id = auth.uid()
  )
);
