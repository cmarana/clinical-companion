-- 1) institutions: revoke column-level read of invite_code from clients
REVOKE SELECT (invite_code) ON public.institutions FROM anon, authenticated;

-- 2) guideline_curation: restrict SELECT to admins only
DROP POLICY IF EXISTS "Authenticated read curation" ON public.guideline_curation;
CREATE POLICY "Admins read curation"
ON public.guideline_curation
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 3) versioned_items: restrict SELECT to admins only
DROP POLICY IF EXISTS "Authenticated read versioned items" ON public.versioned_items;
CREATE POLICY "Admins read versioned items"
ON public.versioned_items
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 4) user_2fa_codes: explicit service-role-only policy (deny clients by design)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='user_2fa_codes') THEN
    EXECUTE 'ALTER TABLE public.user_2fa_codes ENABLE ROW LEVEL SECURITY';
    EXECUTE 'DROP POLICY IF EXISTS "Service role only" ON public.user_2fa_codes';
    EXECUTE $p$CREATE POLICY "Service role only" ON public.user_2fa_codes
      AS PERMISSIVE FOR ALL TO public USING (false) WITH CHECK (false)$p$;
  END IF;
END $$;