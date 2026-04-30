REVOKE EXECUTE ON FUNCTION public.increment_ai_usage(UUID, TEXT) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.get_ai_usage(UUID, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.increment_ai_usage(UUID, TEXT) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_ai_usage(UUID, TEXT) TO authenticated, service_role;