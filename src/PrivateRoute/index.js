import Login from "pages/Login/Login";
import React, { useEffect } from "react";
import { Navigate, Outlet,  } from "react-router-dom";
import reactLocalStorage from "utils/reactLocalStorage";

const PrivateRoute = () => {
  const accessToken = reactLocalStorage.get("shoeToken");
  if (!accessToken) {
    return <Navigate to='login' />;
  }

  return <Outlet />;
};

export default PrivateRoute;
