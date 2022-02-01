/* eslint-disable */

declare module "*/operations.gql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const getUsers: DocumentNode;
  export const getAlbum: DocumentNode;
  export const getAlbums: DocumentNode;
  export const deleteAlbum: DocumentNode;
  export const createAlbum: DocumentNode;
  export const getUserInfo: DocumentNode;
  export const getAlbumForEdit: DocumentNode;
  export const updateAlbum: DocumentNode;

  export default defaultDocument;
}
