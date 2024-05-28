import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthHelper from "../utils/helpers/AuthHelpers";

const AdminRoute = () => {
  const roleUser = AuthHelper.GetAuth("roleUser");
  const location = useLocation();
  const isAdminUrl = location.pathname.startsWith("/admin");

  if (isAdminUrl && roleUser !== "admin") {
    return <Navigate to="/forbidden" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
