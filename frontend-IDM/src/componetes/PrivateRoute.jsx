import { Navigate } from "react-router-dom";
import { useAuth } from "../cliente/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  // Si no hay usuario, redirige a /Sesion
  if (!user) {
    return <Navigate to="/Sesion" replace />;
  }

  // Si hay usuario, renderiza el contenido
  return children;
}

export default PrivateRoute;
