import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const loaction = useLocation();
  const token = useSelector((store) => store.LoginReducer.token);
  return token ? (
    children
  ) : (
    <Navigate to="/signin" state={loaction.pathname} replace />
  );
};

export default PrivateRoute;
