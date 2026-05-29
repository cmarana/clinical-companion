import { Navigate, useParams } from "react-router-dom";
import { findEmergencyIdBySamuCode } from "@/data/emergency";

/**
 * Compatibilidade: redireciona rotas antigas /samu-protocols/:code para
 * o protocolo de Emergência/UTI correspondente quando há vínculo seguro.
 * Caso contrário, manda o usuário para a aba Emergência principal.
 */
export default function SamuCodeRedirect() {
  const { code } = useParams<{ code: string }>();
  if (!code) return <Navigate to="/emergency" replace />;
  const id = findEmergencyIdBySamuCode(decodeURIComponent(code));
  return <Navigate to={id ? `/emergency/${id}` : "/emergency"} replace />;
}
