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

const Router = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<DashboardUser />} />

        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />

        <Route
          path="/pesanan"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />

        <Route
          path="/pesan"
          element={
            <ProtectRoute>
              <Order />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/aplikasi"
          element={
            <AdminRoute>
              <Aplikasi />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/user"
          element={
            <AdminRoute>
              <User />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/transaksi"
          element={
            <AdminRoute>
              <Transaksi />
            </AdminRoute>
          }
        />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
