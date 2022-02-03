import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CustomSpinner,
  DataList,
  Paginator,
  SubmitButton,
} from "../../../../../components";
import { ROUTE_NAMES } from "../../../../../routes/route-names";
import AlbumListItem from "./components";
import { operations, Types } from "./duck";

const albumsHeaders = ["ID", "Title", "User name", "Number of photos", ""];

const ListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const currentPageFromQuery = parseInt(searchParams.get("page") as string);
  const pageSizeFromQuery = parseInt(searchParams.get("size") as string);

  const { data, loading, refetch } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    variables: {
      options: {
        paginate: {
          page: currentPageFromQuery || 1,
          limit: pageSizeFromQuery || 10,
        },
      },
    },
  });
  const [deleteAlbum] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  const handleDeleteAlbum = (id: string) => {
    deleteAlbum({
      variables: {
        id,
      },
    }).then(({ data }) => {
      if (data?.deleteAlbum) {
        refetch();
      }
    });
  };

  if (!data || loading) {
    return <CustomSpinner />;
  }

  if (data.albums?.data) {
    return (
      <>
        <Flex justifyContent="space-between">
          <Heading lineHeight={1}>Albums</Heading>
          <SubmitButton
            onClick={() => navigate(ROUTE_NAMES.CREATE_ALBUM)}
            colorScheme="purple"
          >
            Create album
          </SubmitButton>
        </Flex>
        <Box mt={5}>
          <DataList listHeaders={albumsHeaders}>
            {data.albums &&
              data.albums.data.map((album, index) => (
                <AlbumListItem
                  key={album?.id || index}
                  title={album?.title || ""}
                  id={album?.id || ""}
                  numberOfPhotos={album?.photos?.data?.length || 0}
                  userName={album?.user?.name || ""}
                  handleDeleteAlbum={handleDeleteAlbum}
                />
              ))}
          </DataList>
        </Box>
        <Box mt={3}>
          <Paginator total={100} />
        </Box>
      </>
    );
  }

  return <code>data.users = null</code>;
};

export default ListPage;
