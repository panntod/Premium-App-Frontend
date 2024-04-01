import { Navigate, useLocation } from "react-router-dom";
import AuthHelper from "../utils/helpers/AuthHelpers";

const ProtectRoute = ({ children }) => {
  const statusLogged = AuthHelper.GetAuth("logged");
  const location = useLocation();

  if (!statusLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectRoute;
