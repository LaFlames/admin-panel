import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { operations, Types } from "./duck";
import { CustomSpinner, DataList, GoBackButton } from "../../../../components";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { PhotosListItem } from "./components";

const photosHeaders = ["ID", "Title", "Preview", ""];

const AlbumPage = () => {
  const { id } = useParams() as { id: string };

  const { data, loading } = useQuery<
    Types.GetAlbumQuery,
    Types.GetAlbumQueryVariables
  >(operations.getAlbum, {
    variables: {
      id,
    },
  });

  if (!data || loading) {
    return <CustomSpinner />;
  }

  if (data?.album) {
    const { id, title, user, photos } = data.album;
    return (
      <Box>
        <Flex justifyContent="space-between">
          <Heading as="h3" size="lg" w="70%">
            Album: {title}
          </Heading>
          <GoBackButton />
        </Flex>
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList mt={5}>
            <Tab>Basic</Tab>
            <Tab>Photos</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0" mt={5}>
              <Text>ID: {id}</Text>
              <Text>
                User: {user?.name} ({user?.username})
              </Text>
            </TabPanel>
            <TabPanel p="0" mt={5}>
              <DataList listHeaders={photosHeaders}>
                {photos?.data?.map((photo, index) => (
                  <PhotosListItem
                    key={photo?.id || index}
                    id={photo?.id || ""}
                    title={photo?.title || ""}
                    previewUrl={photo?.thumbnailUrl || ""}
                    handleShowPhotoPage={() => {}}
                  />
                ))}
              </DataList>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  }

  return <code>data.users = null</code>;
};

export default AlbumPage;
