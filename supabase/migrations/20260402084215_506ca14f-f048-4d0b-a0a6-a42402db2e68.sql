CREATE TABLE public.pix_purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stripe_session_id TEXT NOT NULL,
  plan_type TEXT NOT NULL DEFAULT 'monthly',
  amount INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  access_start TIMESTAMP WITH TIME ZONE,
  access_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.pix_purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own pix purchases"
  ON public.pix_purchases
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage pix purchases"
  ON public.pix_purchases
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);