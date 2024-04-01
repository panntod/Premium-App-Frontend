import { Navigate, useLocation } from "react-router-dom";
import AuthHelper from "../utils/helpers/AuthHelpers";

const AdminRoute = ({ children }) => {
  const roleUser = AuthHelper.GetAuth("roleUser");
  const location = useLocation();
  const isAdminUrl = location.pathname.startsWith("/admin");

  if (isAdminUrl && roleUser !== "admin") {
    return <Navigate to="/forbidden" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
