-- Fix protocol_views: change policies from public to authenticated
DROP POLICY IF EXISTS "Users can insert their own protocol views" ON public.protocol_views;
DROP POLICY IF EXISTS "Users can view their own protocol views" ON public.protocol_views;

CREATE POLICY "Users can insert their own protocol views"
  ON public.protocol_views FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own protocol views"
  ON public.protocol_views FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Fix referrals: remove referred_email column to prevent email exposure
ALTER TABLE public.referrals DROP COLUMN IF EXISTS referred_email;