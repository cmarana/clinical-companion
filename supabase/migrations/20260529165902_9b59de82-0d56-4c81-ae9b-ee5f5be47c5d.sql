
-- 1) launch_signups: replace permissive INSERT policy with validated one
DROP POLICY IF EXISTS "Public can insert launch signups" ON public.launch_signups;
CREATE POLICY "Public can insert launch signups"
  ON public.launch_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    email IS NOT NULL
    AND length(btrim(email)) BETWEEN 5 AND 254
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND (nome IS NULL OR length(nome) <= 120)
    AND (whatsapp IS NULL OR length(whatsapp) <= 30)
  );

-- 2) Explicit defense-in-depth deny policies for service-role-only tables
CREATE POLICY "Deny anon access to email_send_log"
  ON public.email_send_log FOR ALL TO anon USING (false) WITH CHECK (false);
CREATE POLICY "Deny authenticated access to email_send_log"
  ON public.email_send_log FOR ALL TO authenticated USING (false) WITH CHECK (false);

CREATE POLICY "Deny anon access to suppressed_emails"
  ON public.suppressed_emails FOR ALL TO anon USING (false) WITH CHECK (false);
CREATE POLICY "Deny authenticated access to suppressed_emails"
  ON public.suppressed_emails FOR ALL TO authenticated USING (false) WITH CHECK (false);

CREATE POLICY "Deny anon access to email_unsubscribe_tokens"
  ON public.email_unsubscribe_tokens FOR ALL TO anon USING (false) WITH CHECK (false);
CREATE POLICY "Deny authenticated access to email_unsubscribe_tokens"
  ON public.email_unsubscribe_tokens FOR ALL TO authenticated USING (false) WITH CHECK (false);

-- 3) Realtime channel authorization: restrict authenticated subscriptions
-- to topics that include the user's own id. The app uses
-- `profile-device-${userId}` for its only realtime channel.
ALTER TABLE IF EXISTS realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users read own-topic messages" ON realtime.messages;
CREATE POLICY "Authenticated users read own-topic messages"
  ON realtime.messages
  FOR SELECT
  TO authenticated
  USING (
    realtime.topic() IS NOT NULL
    AND auth.uid() IS NOT NULL
    AND position(auth.uid()::text in realtime.topic()) > 0
  );

DROP POLICY IF EXISTS "Authenticated users send own-topic messages" ON realtime.messages;
CREATE POLICY "Authenticated users send own-topic messages"
  ON realtime.messages
  FOR INSERT
  TO authenticated
  WITH CHECK (
    realtime.topic() IS NOT NULL
    AND auth.uid() IS NOT NULL
    AND position(auth.uid()::text in realtime.topic()) > 0
  );
