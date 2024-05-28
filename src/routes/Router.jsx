import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import LoadingSpinner from "../components/Loading";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const DashboardUser = lazy(() => import("../pages/Dashboard"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ForbiddenPage = lazy(() => import("../pages/ForbiddenPage"));
const Aplikasi = lazy(() => import("../pages/Application"));
const User = lazy(() => import("../pages/User"));
const Transaksi = lazy(() => import("../pages/Transaction"));
const Profile = lazy(() => import("../pages/Profile"));
const History = lazy(() => import("../pages/History"));
const Order = lazy(() => import("../pages/Order"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Topup = lazy(() => import("../pages/Topup"));

const Router = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route index element={<DashboardUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/pesan" element={<Order />} />
          <Route path="/pesanan" element={<History />} />
        </Route>

        <Route path="admin" element={<AdminRoute />}>
          <Route path="user" element={<User />} />
          <Route path="topup" element={<Topup />} />
          <Route path="aplikasi" element={<Aplikasi />} />
          <Route path="transaksi" element={<Transaksi />} />
        </Route>

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
