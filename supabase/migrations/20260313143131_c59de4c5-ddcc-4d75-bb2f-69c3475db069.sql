
-- Bulário medications table — scalable to 10,000+ entries
CREATE TABLE public.bulario_medications (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  principio_ativo TEXT NOT NULL,
  nomes_comerciais TEXT[] NOT NULL DEFAULT '{}',
  classe TEXT NOT NULL DEFAULT '',
  subclasse TEXT NOT NULL DEFAULT '',
  categoria TEXT NOT NULL DEFAULT '',
  forma_farmaceutica TEXT NOT NULL DEFAULT '',
  via TEXT NOT NULL DEFAULT '',
  controlado BOOLEAN NOT NULL DEFAULT false,
  receituario TEXT NOT NULL DEFAULT '',
  gestacao TEXT NOT NULL DEFAULT '',
  lactacao TEXT NOT NULL DEFAULT '',
  pediatria BOOLEAN NOT NULL DEFAULT false,
  idoso TEXT NOT NULL DEFAULT '',
  mecanismo TEXT NOT NULL DEFAULT '',
  indicacoes TEXT NOT NULL DEFAULT '',
  posologia_adulto TEXT NOT NULL DEFAULT '',
  posologia_pediatrica TEXT NOT NULL DEFAULT '',
  ajuste_renal TEXT NOT NULL DEFAULT '',
  ajuste_hepatico TEXT NOT NULL DEFAULT '',
  contraindicacoes TEXT NOT NULL DEFAULT '',
  efeitos_adversos TEXT NOT NULL DEFAULT '',
  interacoes TEXT NOT NULL DEFAULT '',
  monitorizacao TEXT NOT NULL DEFAULT '',
  diluicao_ev TEXT NOT NULL DEFAULT '',
  compatibilidade_ev TEXT NOT NULL DEFAULT '',
  apresentacoes TEXT NOT NULL DEFAULT '',
  observacoes TEXT NOT NULL DEFAULT '',
  referencias TEXT NOT NULL DEFAULT '',
  gestacao_seguro BOOLEAN NOT NULL DEFAULT false,
  tags TEXT[] NOT NULL DEFAULT '{}',
  categoria_anvisa TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for fast search and filtering
CREATE INDEX idx_bulario_nome ON public.bulario_medications (nome);
CREATE INDEX idx_bulario_principio ON public.bulario_medications (principio_ativo);
CREATE INDEX idx_bulario_classe ON public.bulario_medications (classe);
CREATE INDEX idx_bulario_categoria ON public.bulario_medications (categoria);
CREATE INDEX idx_bulario_via ON public.bulario_medications (via);
CREATE INDEX idx_bulario_controlado ON public.bulario_medications (controlado);
CREATE INDEX idx_bulario_pediatria ON public.bulario_medications (pediatria);
CREATE INDEX idx_bulario_gestacao_seguro ON public.bulario_medications (gestacao_seguro);

-- Full-text search index
CREATE INDEX idx_bulario_fts ON public.bulario_medications 
  USING GIN (to_tsvector('portuguese', nome || ' ' || principio_ativo || ' ' || classe || ' ' || categoria || ' ' || indicacoes));

-- RLS: public read access (medication data is not sensitive)
ALTER TABLE public.bulario_medications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for bulario"
  ON public.bulario_medications
  FOR SELECT
  TO anon, authenticated
  USING (true);
