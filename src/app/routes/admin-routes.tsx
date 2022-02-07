import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLayout, ErrorPage } from "../pages";
import {
  AlbumPage,
  AlbumsListPage,
  AlbumsRoutes,
  CreateAlbumPage,
  EditAlbumPage,
} from "../pages/admin-layout/components/albums";
import { ROUTE_NAMES } from "./route-names";
import { Homepage } from "../pages/admin-layout/components";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.ADMIN} element={<AdminLayout />}>
        {/*<Route path={`${ROUTE_NAMES.ALBUMS}/*`} element={<AlbumsRoutes />} />*/}

        <Route index element={<Homepage />} />
        <Route path={ROUTE_NAMES.ALBUMS} element={<AlbumsListPage />} />
        <Route path={`${ROUTE_NAMES.ALBUMS}/:id`} element={<AlbumPage />} />
        <Route path={ROUTE_NAMES.CREATE_ALBUM} element={<CreateAlbumPage />} />
        <Route
          path={`${ROUTE_NAMES.ALBUMS}/:id/edit`}
          element={<EditAlbumPage />}
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AdminRoutes;
