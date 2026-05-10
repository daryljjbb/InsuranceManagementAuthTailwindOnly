import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Customers from "../pages/customers/Customers";
import Policies from "../pages/policies/Policies";
import Claims from "../pages/claims/Claims";
import Payments from "../pages/payments/Payments";

import ProtectedRoute from "../auth/ProtectedRoute";

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Routes>

        {/* Redirect Home */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/policies"
          element={
            <ProtectedRoute>
              <Policies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/claims"
          element={
            <ProtectedRoute>
              <Claims />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payments"
          element={
            <ProtectedRoute>
              <Payments />
            </ProtectedRoute>
          }
        />

        {/* Catch Unknown Routes */}
        <Route
          path="*"
          element={<Navigate to="/login" />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;