
CREATE TABLE public.module_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  module_path TEXT NOT NULL,
  module_label TEXT NOT NULL DEFAULT '',
  specialty TEXT NOT NULL DEFAULT '',
  accessed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.module_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own analytics"
ON public.module_analytics
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own analytics"
ON public.module_analytics
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE INDEX idx_module_analytics_user ON public.module_analytics (user_id);
CREATE INDEX idx_module_analytics_path ON public.module_analytics (module_path);
CREATE INDEX idx_module_analytics_specialty ON public.module_analytics (specialty);
CREATE INDEX idx_module_analytics_accessed ON public.module_analytics (accessed_at DESC);
