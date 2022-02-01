import React, { ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { operations, Types } from "./duck";
import { Box, Flex, Heading } from "@chakra-ui/react";
import AlbumListItem from "./components";
import {
  CustomSpinner,
  DataList,
  Paginator,
  SubmitButton,
} from "../../../../components";
import { ROUTE_NAMES } from "../../../../routes/route-names";
import { usePagination } from "@ajna/pagination";

const albumsHeaders = ["ID", "Title", "User name", "Number of photos", ""];

const AlbumsListPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    size: "10",
  });

  const currentPageFromQuery = parseInt(searchParams.get("page") as string);
  const pageSizeFromQuery = parseInt(searchParams.get("size") as string);

  const {
    currentPage,
    pageSize,
    setPageSize,
    setCurrentPage,
    pagesCount,
    pages,
  } = usePagination({
    total: 100,
    initialState: {
      currentPage: currentPageFromQuery,
      pageSize: pageSizeFromQuery,
    },
    limits: {
      outer: 1,
      inner: 1,
    },
  });

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      size: `${pageSize.toString()}`,
    });
    setPageSize(pageSize);
  };
  const handleCurrentPageChange = (page: number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: `${page.toString()}`,
    });
    setCurrentPage(page);
  };

  const { data, loading, refetch } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums);
  const [deleteAlbum] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  const handleShowAlbumPage = (id: string) => {
    navigate(`${ROUTE_NAMES.ALBUMS}/${id}`);
  };
  const handleShowEditAlbumPage = (id: string) => {
    navigate(`${ROUTE_NAMES.ALBUMS}/${id}/edit`);
  };
  const handleDeleteAlbum = (id: string) => {
    deleteAlbum({
      variables: {
        id,
      },
    }).then(({ data }) => {
      if (data?.deleteAlbum) {
        refetch();
        alert("Album deleted successfully");
      }
    });
  };

  //get current users
  const indexOfLastUser = currentPageFromQuery * pageSizeFromQuery;
  const indexOfFirstUser = indexOfLastUser - pageSizeFromQuery;
  const currentUsers = data?.albums?.data?.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

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
            {currentUsers &&
              currentUsers.map((album, index) => (
                <AlbumListItem
                  key={album?.id || index}
                  title={album?.title || ""}
                  id={album?.id || ""}
                  numberOfPhotos={album?.photos?.data?.length || 0}
                  userName={album?.user?.name || ""}
                  handleShowAlbumPage={handleShowAlbumPage}
                  handleShowEditAlbumPage={handleShowEditAlbumPage}
                  handleDeleteAlbum={handleDeleteAlbum}
                />
              ))}
          </DataList>
        </Box>
        <Box mt={3}>
          <Paginator
            pagesCount={pagesCount}
            pages={pages}
            currentPage={currentPageFromQuery}
            pageSize={pageSizeFromQuery}
            setCurrentPage={handleCurrentPageChange}
            setPageSize={handlePageSizeChange}
          />
        </Box>
      </>
    );
  }

  return <code>data.users = null</code>;
};

export default AlbumsListPage;
