
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  _full_name text;
  _avatar text;
  _email text;
  _provider text;
  _phone text;
BEGIN
  _provider := COALESCE(NEW.raw_app_meta_data->>'provider', 'email');
  _email := COALESCE(NEW.email, NEW.raw_user_meta_data->>'email', '');
  _phone := COALESCE(NEW.phone, '');
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

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;
