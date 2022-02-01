/* eslint-disable */
import * as Types from "../../../../../../schema.generated";

export type CreateAlbumMutationVariables = Types.Exact<{
  input: Types.CreateAlbumInput;
}>;

export type CreateAlbumMutation = {
  createAlbum?: Types.Maybe<Pick<Types.Album, "title" | "id">>;
};

export type GetUserInfoQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUserInfoQuery = {
  albums?: Types.Maybe<{
    data?: Types.Maybe<
      Array<
        Types.Maybe<{ user?: Types.Maybe<Pick<Types.User, "name" | "id">> }>
      >
    >;
  }>;
};
