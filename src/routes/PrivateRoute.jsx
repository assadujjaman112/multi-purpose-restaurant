import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-yellow-500"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
