import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LoggedInRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user?.email) {
    return <Navigate to="/browse" />;
  }
  
  return children;
};

export default LoggedInRoute;
