-- Restrict direct SELECT of institutions.invite_code at the column level.
-- Members must use the get_institution_invite_code() RPC (SECURITY DEFINER, role-checked).
REVOKE SELECT (invite_code) ON public.institutions FROM authenticated, anon;