
ALTER TABLE public.bulario_medications
  ADD COLUMN IF NOT EXISTS descricao text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS mecanismo_acao text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS indicacoes_detalhadas text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS dose_adulto text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS dose_pediatrica text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS dose_por_peso text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS dose_maxima text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS efeitos_adversos_comuns text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS efeitos_adversos_graves text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS interacoes_medicamentosas text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS diluicao text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS tempo_infusao text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS categoria_farmacologica text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS grupo_terapeutico text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS tarja text NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS receita_tipo text NOT NULL DEFAULT '';
