import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../../routes/route-names";
import {
  AlbumPage,
  AlbumsListPage,
  CreateAlbumPage,
  EditAlbumPage,
} from "../index";

const AlbumsRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.ALBUMS} element={<AlbumsListPage />} />
      <Route path={`${ROUTE_NAMES.ALBUMS}/:id`} element={<AlbumPage />} />
      <Route path={ROUTE_NAMES.CREATE_ALBUM} element={<CreateAlbumPage />} />
      <Route
        path={`${ROUTE_NAMES.ALBUMS}/:id/edit`}
        element={<EditAlbumPage />}
      />
    </Routes>
  );
};

export default AlbumsRoutes;
