DROP POLICY IF EXISTS "Authenticated users read own-topic messages" ON realtime.messages;
CREATE POLICY "Authenticated users read own-topic messages"
  ON realtime.messages
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() IS NOT NULL
    AND realtime.topic() = 'profile-device-' || auth.uid()::text
  );

DROP POLICY IF EXISTS "Authenticated users send own-topic messages" ON realtime.messages;
CREATE POLICY "Authenticated users send own-topic messages"
  ON realtime.messages
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IS NOT NULL
    AND realtime.topic() = 'profile-device-' || auth.uid()::text
  );