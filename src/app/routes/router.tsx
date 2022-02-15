import React, { useContext } from "react";
import AdminRoutes from "./admin-routes";
import LoginRoutes from "./login-routes";
import AuthProvider from "../duck";

const Router = () => {
  const {
    auth: { isLogged },
  } = useContext(AuthProvider);
  return isLogged ? <AdminRoutes /> : <LoginRoutes />;
};

export default Router;
