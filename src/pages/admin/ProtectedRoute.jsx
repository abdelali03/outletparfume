import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useUser();

  if (!user) {
    // Redirect unauthenticated users to login
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== "admin") {
    // Redirect non-admin users to home
    return <Navigate to="/" />;
  }

  // Allow access
  return children;
};

export default ProtectedRoute;
