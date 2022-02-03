import React from "react";
import AdminRoutes from "./admin-routes";
import LoginRoutes from "./login-routes";

const Router = () => {
  const hasToken = localStorage.getItem("fake-token");
  return hasToken ? <AdminRoutes /> : <LoginRoutes />;
};

export default Router;
