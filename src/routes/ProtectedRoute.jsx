import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthHelper from "../helpers/AuthHelpers";

const ProtectRoute = ({ children }) => {
  const user = AuthHelper.GetRole();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectRoute;
