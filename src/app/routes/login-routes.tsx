import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage, LoginPage } from "../pages";
import { ROUTE_NAMES } from "./route-names";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default LoginRoutes;
