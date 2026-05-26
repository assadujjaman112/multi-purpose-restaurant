import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../components/shared/spinner/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
