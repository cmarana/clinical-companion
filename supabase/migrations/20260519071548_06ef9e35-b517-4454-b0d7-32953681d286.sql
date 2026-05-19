
-- 0) Deduplicar CPFs existentes: mantém o registro mais antigo com o CPF,
--    e limpa o CPF dos demais (para não bloquear o índice único)
WITH ranked AS (
  SELECT user_id, cpf,
         ROW_NUMBER() OVER (PARTITION BY cpf ORDER BY created_at ASC, user_id ASC) AS rn
    FROM public.profiles
   WHERE cpf IS NOT NULL AND cpf <> ''
)
UPDATE public.profiles p
   SET cpf = ''
  FROM ranked r
 WHERE p.user_id = r.user_id AND r.rn > 1;

-- 1) Unique CPF (apenas quando preenchido)
CREATE UNIQUE INDEX IF NOT EXISTS profiles_cpf_unique_idx
  ON public.profiles (cpf)
  WHERE cpf IS NOT NULL AND cpf <> '';

-- 2) Colunas para controle de dispositivo ativo
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS active_device_id text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS active_device_label text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS active_device_updated_at timestamptz NOT NULL DEFAULT now();

-- 3) Reivindicar dispositivo ativo
CREATE OR REPLACE FUNCTION public.claim_active_device(_device_id text, _device_label text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  IF _device_id IS NULL OR _device_id = '' THEN
    RAISE EXCEPTION 'Invalid device id';
  END IF;
  UPDATE public.profiles
     SET active_device_id = _device_id,
         active_device_label = COALESCE(_device_label, ''),
         active_device_updated_at = now()
   WHERE user_id = auth.uid();
END;
$$;

-- 4) Trigger handle_new_user com CPF
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _full_name text;
  _avatar text;
  _email text;
  _provider text;
  _phone text;
  _cpf text;
BEGIN
  _provider := COALESCE(NEW.raw_app_meta_data->>'provider', 'email');
  _email := COALESCE(NEW.email, NEW.raw_user_meta_data->>'email', '');
  _phone := COALESCE(NEW.phone, '');
  _cpf := regexp_replace(COALESCE(NEW.raw_user_meta_data->>'cpf', ''), '\D', '', 'g');
  _full_name := COALESCE(
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'name',
    CONCAT_WS(' ',
      NULLIF(NEW.raw_user_meta_data->>'first_name', ''),
      NULLIF(NEW.raw_user_meta_data->>'last_name', '')
    ),
    ''
  );
  _full_name := TRIM(_full_name);
  _avatar := COALESCE(
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'picture',
    ''
  );

  INSERT INTO public.profiles (user_id, full_name, avatar_url, email, provider, phone, cpf)
  VALUES (NEW.id, _full_name, _avatar, _email, _provider, _phone, _cpf)
  ON CONFLICT (user_id) DO UPDATE SET
    full_name = CASE WHEN profiles.full_name = '' THEN EXCLUDED.full_name ELSE profiles.full_name END,
    avatar_url = CASE WHEN profiles.avatar_url = '' THEN EXCLUDED.avatar_url ELSE profiles.avatar_url END,
    email = CASE WHEN profiles.email = '' THEN EXCLUDED.email ELSE profiles.email END,
    provider = EXCLUDED.provider,
    phone = CASE WHEN profiles.phone = '' THEN EXCLUDED.phone ELSE profiles.phone END,
    cpf = CASE WHEN profiles.cpf = '' THEN EXCLUDED.cpf ELSE profiles.cpf END,
    updated_at = now();

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5) RPC para checar CPF
CREATE OR REPLACE FUNCTION public.cpf_exists(_cpf text)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE cpf = regexp_replace(COALESCE(_cpf, ''), '\D', '', 'g')
      AND cpf <> ''
  );
$$;

GRANT EXECUTE ON FUNCTION public.cpf_exists(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_active_device(text, text) TO authenticated;

-- 6) Realtime em profiles
ALTER TABLE public.profiles REPLICA IDENTITY FULL;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'profiles'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles';
  END IF;
END $$;
