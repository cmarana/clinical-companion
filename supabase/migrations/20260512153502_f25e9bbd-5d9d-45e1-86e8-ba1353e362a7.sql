-- Add roles
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'tester';
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'developer';

-- Launch signups table
CREATE TABLE IF NOT EXISTS public.launch_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL DEFAULT '',
  perfil_profissional TEXT NOT NULL DEFAULT '',
  especialidade TEXT NOT NULL DEFAULT '',
  cidade_estado TEXT NOT NULL DEFAULT '',
  aceitou_comunicacao BOOLEAN NOT NULL DEFAULT true,
  origem TEXT NOT NULL DEFAULT 'landing_provisoria',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_launch_signups_created_at ON public.launch_signups(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_launch_signups_email ON public.launch_signups(lower(email));

ALTER TABLE public.launch_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert launch signups"
  ON public.launch_signups FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins read launch signups"
  ON public.launch_signups FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete launch signups"
  ON public.launch_signups FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Service role manages launch signups"
  ON public.launch_signups FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);