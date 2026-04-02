
-- Add comprehensive demographic and professional fields to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS first_name text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS last_name text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cpf text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS birth_date date,
  ADD COLUMN IF NOT EXISTS gender text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS city text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS state text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS zip_code text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS academic_status text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS university text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS course text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS graduation_year integer,
  ADD COLUMN IF NOT EXISTS registration_type text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS registration_number text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS registration_state text NOT NULL DEFAULT '';
