
CREATE OR REPLACE FUNCTION public.join_institution_by_invite(
  _invite_code text
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _institution_id uuid;
  _user_id uuid := auth.uid();
BEGIN
  IF _user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  SELECT id INTO _institution_id
  FROM public.institutions
  WHERE invite_code = _invite_code;

  IF _institution_id IS NULL THEN
    RAISE EXCEPTION 'Invalid invite code';
  END IF;

  -- Check if already a member
  IF EXISTS (
    SELECT 1 FROM public.institution_members
    WHERE user_id = _user_id AND institution_id = _institution_id
  ) THEN
    RAISE EXCEPTION 'Already a member';
  END IF;

  INSERT INTO public.institution_members (institution_id, user_id, role)
  VALUES (_institution_id, _user_id, 'viewer');

  RETURN _institution_id;
END;
$$;
