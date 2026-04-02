
-- Add new columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS email text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS provider text NOT NULL DEFAULT 'email',
  ADD COLUMN IF NOT EXISTS phone text NOT NULL DEFAULT '';

-- Update the handle_new_user function to capture OAuth data
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  _full_name text;
  _avatar text;
  _email text;
  _provider text;
  _phone text;
BEGIN
  -- Extract provider
  _provider := COALESCE(NEW.raw_app_meta_data->>'provider', 'email');

  -- Extract email
  _email := COALESCE(NEW.email, NEW.raw_user_meta_data->>'email', '');

  -- Extract phone
  _phone := COALESCE(NEW.phone, '');

  -- Extract full name: try multiple metadata paths
  _full_name := COALESCE(
    NEW.raw_user_meta_data->>'full_name',          -- Google / manual signup
    NEW.raw_user_meta_data->>'name',               -- Some OAuth providers
    CONCAT_WS(' ',
      NULLIF(NEW.raw_user_meta_data->>'first_name', ''),
      NULLIF(NEW.raw_user_meta_data->>'last_name', '')
    ),
    ''
  );
  -- Trim empty concatenation
  _full_name := TRIM(_full_name);

  -- Extract avatar: Google provides avatar_url or picture
  _avatar := COALESCE(
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'picture',
    ''
  );

  INSERT INTO public.profiles (user_id, full_name, avatar_url, email, provider, phone)
  VALUES (NEW.id, _full_name, _avatar, _email, _provider, _phone)
  ON CONFLICT (user_id) DO UPDATE SET
    full_name = CASE WHEN profiles.full_name = '' THEN EXCLUDED.full_name ELSE profiles.full_name END,
    avatar_url = CASE WHEN profiles.avatar_url = '' THEN EXCLUDED.avatar_url ELSE profiles.avatar_url END,
    email = CASE WHEN profiles.email = '' THEN EXCLUDED.email ELSE profiles.email END,
    provider = EXCLUDED.provider,
    phone = CASE WHEN profiles.phone = '' THEN EXCLUDED.phone ELSE profiles.phone END,
    updated_at = now();

  RETURN NEW;
END;
$function$;

-- Create the trigger (drop first if exists to avoid error)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Also add a unique constraint on user_id if not exists (needed for ON CONFLICT)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'profiles_user_id_key'
  ) THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_user_id_key UNIQUE (user_id);
  END IF;
END $$;

-- Backfill existing users who already have profiles with empty email/provider
UPDATE public.profiles p
SET
  email = COALESCE(u.email, ''),
  provider = COALESCE(u.raw_app_meta_data->>'provider', 'email')
FROM auth.users u
WHERE p.user_id = u.id
  AND p.email = '';
