import { Navigate, Outlet } from "react-router-dom";
import isAuth from "../Utils/isAuth";

const PrivateRoute = () => {
  return isAuth() ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/admin" />
    </>
  );
};

export default PrivateRoute;

export const LoginRoute = () => {
  return isAuth() ? (
    <>
      {" "}
      <Navigate to="/admin/dashboard" />{" "}
    </>
  ) : (
    <Outlet />
  );
};
