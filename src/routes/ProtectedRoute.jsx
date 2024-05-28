import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthHelper from "../utils/helpers/AuthHelpers";

const ProtectRoute = () => {
  const statusLogged = AuthHelper.GetAuth("logged");
  const location = useLocation();

  if (!statusLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectRoute;
