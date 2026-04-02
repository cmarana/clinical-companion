
CREATE TABLE public.protocol_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  protocol_id TEXT NOT NULL,
  protocol_title TEXT NOT NULL DEFAULT '',
  protocol_category TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT 'direct',
  duration_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.protocol_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own protocol views"
ON public.protocol_views FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own protocol views"
ON public.protocol_views FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE INDEX idx_protocol_views_protocol_id ON public.protocol_views (protocol_id);
CREATE INDEX idx_protocol_views_user_id ON public.protocol_views (user_id);
CREATE INDEX idx_protocol_views_created_at ON public.protocol_views (created_at);
