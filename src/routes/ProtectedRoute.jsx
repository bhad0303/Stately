import React from "react";
import { Navigate,Outlet } from "react-router";

function ProtectedRoute() {

  
  const isValid = localStorage.getItem("isValid")=== "true";

  return isValid ? <Outlet/> : <Navigate to="/" />;
}

export default ProtectedRoute;
