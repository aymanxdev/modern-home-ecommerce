import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();

  return currentUser?.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
