-- 1. error_events: require non-null user_id matching the caller (no anonymous inserts)
DROP POLICY IF EXISTS "Users insert own error events" ON public.error_events;
CREATE POLICY "Users insert own error events"
  ON public.error_events FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND user_id IS NOT NULL);

-- 2. guideline_curation_history: restrict reads to admins only
DROP POLICY IF EXISTS "Authenticated read history" ON public.guideline_curation_history;
CREATE POLICY "Admins read curation history"
  ON public.guideline_curation_history FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 3. institutions: hide invite_code from non-admin members via column-level revoke + admin RPC
-- Approach: keep current SELECT policy (members see institution rows), but revoke read on
-- the invite_code column from regular authenticated users; expose admin-only RPC to fetch it.
REVOKE SELECT (invite_code) ON public.institutions FROM authenticated, anon;

CREATE OR REPLACE FUNCTION public.get_institution_invite_code(_institution_id uuid)
RETURNS text
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  _role text;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  SELECT role INTO _role
    FROM public.institution_members
   WHERE user_id = auth.uid() AND institution_id = _institution_id
   LIMIT 1;
  IF _role IS DISTINCT FROM 'admin' THEN
    RAISE EXCEPTION 'Forbidden: only institution admins can read invite code';
  END IF;
  RETURN (SELECT invite_code FROM public.institutions WHERE id = _institution_id);
END;
$$;

REVOKE EXECUTE ON FUNCTION public.get_institution_invite_code(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_institution_invite_code(uuid) TO authenticated;