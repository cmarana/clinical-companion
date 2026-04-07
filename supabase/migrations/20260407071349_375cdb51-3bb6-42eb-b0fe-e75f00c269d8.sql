
-- Create atomic function to safely create institution + first admin member
CREATE OR REPLACE FUNCTION public.create_institution_with_admin(
  _name text,
  _description text DEFAULT ''
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

  INSERT INTO public.institutions (id, name, description, created_by)
  VALUES (gen_random_uuid(), _name, _description, _user_id)
  RETURNING id INTO _institution_id;

  INSERT INTO public.institution_members (institution_id, user_id, role)
  VALUES (_institution_id, _user_id, 'admin');

  RETURN _institution_id;
END;
$$;

-- Drop the old INSERT policy that has the race condition
DROP POLICY IF EXISTS "Admins can add members" ON public.institution_members;

-- Recreate: only admins can add members (no more self-insert with NOT EXISTS)
CREATE POLICY "Admins can add members"
ON public.institution_members
FOR INSERT
TO authenticated
WITH CHECK (
  get_institution_role(auth.uid(), institution_id) = 'admin'
);
