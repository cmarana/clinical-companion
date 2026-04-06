
-- 1. Create tables first (no RLS yet)
CREATE TABLE public.institutions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  invite_code text NOT NULL DEFAULT substr(md5(random()::text), 1, 8),
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(invite_code)
);

CREATE TABLE public.institution_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id uuid NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  role text NOT NULL DEFAULT 'viewer' CHECK (role IN ('admin', 'editor', 'viewer')),
  joined_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(institution_id, user_id)
);

CREATE TABLE public.institutional_protocols (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution_id uuid NOT NULL REFERENCES public.institutions(id) ON DELETE CASCADE,
  title text NOT NULL,
  category text NOT NULL DEFAULT 'Geral',
  content text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  author_id uuid NOT NULL,
  updated_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 2. Indexes
CREATE INDEX idx_institution_members_user ON public.institution_members(user_id);
CREATE INDEX idx_institution_members_institution ON public.institution_members(institution_id);
CREATE INDEX idx_institutional_protocols_institution ON public.institutional_protocols(institution_id);
CREATE INDEX idx_institutions_invite_code ON public.institutions(invite_code);

-- 3. Security definer functions (tables exist now)
CREATE OR REPLACE FUNCTION public.is_institution_member(_user_id uuid, _institution_id uuid)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.institution_members
    WHERE user_id = _user_id AND institution_id = _institution_id
  )
$$;

CREATE OR REPLACE FUNCTION public.get_institution_role(_user_id uuid, _institution_id uuid)
RETURNS text
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT role FROM public.institution_members
  WHERE user_id = _user_id AND institution_id = _institution_id
  LIMIT 1
$$;

-- 4. Enable RLS
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institution_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institutional_protocols ENABLE ROW LEVEL SECURITY;

-- 5. RLS policies for institutions
CREATE POLICY "Members can view their institution"
ON public.institutions FOR SELECT TO authenticated
USING (public.is_institution_member(auth.uid(), id));

CREATE POLICY "Authenticated users can create institutions"
ON public.institutions FOR INSERT TO authenticated
WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Admins can update institution"
ON public.institutions FOR UPDATE TO authenticated
USING (public.get_institution_role(auth.uid(), id) = 'admin');

-- 6. RLS policies for institution_members
CREATE POLICY "Members can view other members"
ON public.institution_members FOR SELECT TO authenticated
USING (public.is_institution_member(auth.uid(), institution_id));

CREATE POLICY "Admins can add members"
ON public.institution_members FOR INSERT TO authenticated
WITH CHECK (
  public.get_institution_role(auth.uid(), institution_id) = 'admin'
  OR (auth.uid() = user_id AND NOT EXISTS (
    SELECT 1 FROM public.institution_members m2 WHERE m2.institution_id = institution_members.institution_id
  ))
);

CREATE POLICY "Admins can update member roles"
ON public.institution_members FOR UPDATE TO authenticated
USING (public.get_institution_role(auth.uid(), institution_id) = 'admin');

CREATE POLICY "Admins can remove members or self"
ON public.institution_members FOR DELETE TO authenticated
USING (public.get_institution_role(auth.uid(), institution_id) = 'admin' OR auth.uid() = user_id);

-- 7. RLS policies for institutional_protocols
CREATE POLICY "Members can view published protocols"
ON public.institutional_protocols FOR SELECT TO authenticated
USING (
  public.is_institution_member(auth.uid(), institution_id)
  AND (status = 'published' OR public.get_institution_role(auth.uid(), institution_id) IN ('admin', 'editor'))
);

CREATE POLICY "Editors and admins can create protocols"
ON public.institutional_protocols FOR INSERT TO authenticated
WITH CHECK (
  public.get_institution_role(auth.uid(), institution_id) IN ('admin', 'editor')
  AND auth.uid() = author_id
);

CREATE POLICY "Editors and admins can update protocols"
ON public.institutional_protocols FOR UPDATE TO authenticated
USING (public.get_institution_role(auth.uid(), institution_id) IN ('admin', 'editor'));

CREATE POLICY "Admins can delete protocols"
ON public.institutional_protocols FOR DELETE TO authenticated
USING (public.get_institution_role(auth.uid(), institution_id) = 'admin');

-- 8. Triggers
CREATE TRIGGER update_institutions_updated_at
BEFORE UPDATE ON public.institutions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_institutional_protocols_updated_at
BEFORE UPDATE ON public.institutional_protocols
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
