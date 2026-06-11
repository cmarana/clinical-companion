ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS event_access_until timestamptz NULL;

CREATE OR REPLACE FUNCTION public.claim_websummit_access()
RETURNS timestamptz
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _user_id uuid := auth.uid();
  _created timestamptz;
  _until timestamptz;
BEGIN
  IF _user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT created_at INTO _created FROM auth.users WHERE id = _user_id;
  IF _created IS NULL OR _created < now() - interval '30 minutes' THEN
    -- Only allow claim within 30 minutes of account creation
    SELECT event_access_until INTO _until FROM public.profiles WHERE user_id = _user_id;
    RETURN _until;
  END IF;

  UPDATE public.profiles
     SET event_access_until = GREATEST(COALESCE(event_access_until, now()), now() + interval '7 days'),
         updated_at = now()
   WHERE user_id = _user_id
     AND (event_access_until IS NULL OR event_access_until < now() + interval '7 days')
  RETURNING event_access_until INTO _until;

  IF _until IS NULL THEN
    SELECT event_access_until INTO _until FROM public.profiles WHERE user_id = _user_id;
  END IF;

  RETURN _until;
END;
$$;

GRANT EXECUTE ON FUNCTION public.claim_websummit_access() TO authenticated;