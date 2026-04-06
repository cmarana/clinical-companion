CREATE POLICY "Service role can update feedback status"
ON public.feedback
FOR UPDATE
TO service_role
USING (true)
WITH CHECK (true);