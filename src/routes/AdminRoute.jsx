import { Navigate, useLocation } from "react-router-dom";
import AuthHelper from "../helpers/AuthHelpers";

const AdminRoute = ({ children }) => {
  const roleUser = AuthHelper.GetAuth("userRole");
  const location = useLocation();
  const isAdminUrl = location.pathname.startsWith("/admin");
  console.log(isAdminUrl);

  if (!roleUser || !isAdminUrl) {
    return <Navigate to="/forbidden" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
