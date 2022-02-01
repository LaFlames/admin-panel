import { Route, Routes } from "react-router-dom";
import { ROUTE_NAMES } from "./route-names";
import { AdminPage, ErrorPage, LoginPage } from "../pages";
import {
  AlbumPage,
  AlbumsListPage,
  CreateAlbumPage,
  EditAlbumPage,
} from "../pages/admin-page/components";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTE_NAMES.ADMIN}
        element={<AdminPage>Homepage</AdminPage>}
      />
      <Route
        path={ROUTE_NAMES.ALBUMS}
        element={
          <AdminPage>
            <AlbumsListPage />
          </AdminPage>
        }
      />
      <Route
        path={ROUTE_NAMES.CREATE_ALBUM}
        element={
          <AdminPage>
            <CreateAlbumPage />
          </AdminPage>
        }
      />
      <Route
        path={`${ROUTE_NAMES.ALBUMS}/:id`}
        element={
          <AdminPage>
            <AlbumPage />
          </AdminPage>
        }
      />
      <Route
        path={`${ROUTE_NAMES.ALBUMS}/:id/edit`}
        element={
          <AdminPage>
            <EditAlbumPage />
          </AdminPage>
        }
      />

      <Route path={"*"} element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
