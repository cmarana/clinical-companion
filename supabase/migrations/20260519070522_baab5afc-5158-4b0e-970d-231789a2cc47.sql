-- =====================================================
-- 2FA por e-mail (opcional, ativado no perfil)
-- =====================================================

-- 1) Settings: 2FA ativado/desativado por usuário
CREATE TABLE IF NOT EXISTS public.user_2fa_settings (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  enabled BOOLEAN NOT NULL DEFAULT FALSE,
  enabled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.user_2fa_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own 2fa settings"
  ON public.user_2fa_settings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Inserção/atualização passam pela edge function (service_role).
-- Mas permitimos o usuário desativar diretamente do client se quiser.
CREATE POLICY "Users can update own 2fa settings"
  ON public.user_2fa_settings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own 2fa settings"
  ON public.user_2fa_settings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER trg_user_2fa_settings_updated_at
BEFORE UPDATE ON public.user_2fa_settings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 2) Códigos OTP (hash) — somente service_role lê/escreve
CREATE TABLE IF NOT EXISTS public.user_2fa_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  code_hash TEXT NOT NULL,
  purpose TEXT NOT NULL CHECK (purpose IN ('enable', 'login')),
  expires_at TIMESTAMPTZ NOT NULL,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  attempts INTEGER NOT NULL DEFAULT 0,
  ip_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_2fa_codes_user_purpose
  ON public.user_2fa_codes (user_id, purpose, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_user_2fa_codes_expires
  ON public.user_2fa_codes (expires_at);

ALTER TABLE public.user_2fa_codes ENABLE ROW LEVEL SECURITY;

-- Nenhuma policy para authenticated → bloqueia acesso direto do client.
-- Apenas service_role (edge functions) pode operar.

-- 3) Verificações de dispositivo — confiança por 30 dias
CREATE TABLE IF NOT EXISTS public.user_2fa_verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  device_id TEXT NOT NULL,
  device_label TEXT,
  verified_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  last_seen_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  user_agent TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_user_2fa_verifications_unique
  ON public.user_2fa_verifications (user_id, device_id);

CREATE INDEX IF NOT EXISTS idx_user_2fa_verifications_expires
  ON public.user_2fa_verifications (expires_at);

ALTER TABLE public.user_2fa_verifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own 2fa verifications"
  ON public.user_2fa_verifications FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Usuário pode revogar dispositivos confiáveis
CREATE POLICY "Users can delete own 2fa verifications"
  ON public.user_2fa_verifications FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Inserts vêm da edge function (service_role) após verificar OTP.