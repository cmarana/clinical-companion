
-- Rounds patients (beds)
CREATE TABLE public.rounds_patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  bed_number TEXT NOT NULL DEFAULT '',
  patient_name TEXT NOT NULL DEFAULT '',
  diagnosis TEXT NOT NULL DEFAULT '',
  notes TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'active',
  admission_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.rounds_patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own rounds patients"
  ON public.rounds_patients FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Rounds tasks (checklist per patient)
CREATE TABLE public.rounds_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.rounds_patients(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  completed BOOLEAN NOT NULL DEFAULT false,
  priority TEXT NOT NULL DEFAULT 'normal',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.rounds_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own rounds tasks"
  ON public.rounds_tasks FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Trigger for updated_at
CREATE TRIGGER rounds_patients_updated_at
  BEFORE UPDATE ON public.rounds_patients
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
