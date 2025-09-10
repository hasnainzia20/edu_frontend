import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { auth, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // prevents redirect until rehydration is done

  if (!auth) return <Navigate to="/login" />;

  if (role && auth.role !== role) return <Navigate to="/" />;

  return children;
}
