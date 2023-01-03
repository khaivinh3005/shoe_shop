import Login from "pages/Login/Login";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet,  } from "react-router-dom";
import reactLocalStorage from "utils/reactLocalStorage";

const PrivateRoute = () => {
  const {userToken} = useSelector(state=>state.userSlice)
  if (!userToken) {
    return <Navigate to='login' />;
  }

  return <Outlet />;
};

export default PrivateRoute;
