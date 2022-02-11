import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import dots from "../../../../../assets/text-dots.svg";
import {
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  CustomSpinner,
  DataList,
  GoBackButton,
  Paginator,
} from "../../../../../components";
import { PhotosListItem } from "./components";
import { operations, Types } from "./duck";

const photosHeaders = ["ID", "Title", "Preview", ""];

const AlbumPage = () => {
  const { id } = useParams() as { id: string };
  const [searchParams] = useSearchParams();
  const [tabIndex, setTabIndex] = useState(0);

  const currentPageFromQuery = parseInt(searchParams.get("page") as string);
  const pageSizeFromQuery = parseInt(searchParams.get("size") as string);

  const { data, loading } = useQuery<
    Types.GetAlbumQuery,
    Types.GetAlbumQueryVariables
  >(operations.getAlbum, {
    variables: {
      id,
      options: {
        paginate: {
          page: currentPageFromQuery || 1,
          limit: pageSizeFromQuery || 10,
        },
      },
    },
  });

  return (
    <Box minH="90vh">
      <Flex justifyContent="space-between">
        <Heading as="h3" size="lg" w="70%">
          Album:{" "}
          {data?.album ? (
            data.album.title
          ) : (
            <Image src={dots} display="inline" />
          )}
        </Heading>
        <GoBackButton />
      </Flex>
      <Tabs
        variant="soft-rounded"
        colorScheme="purple"
        onChange={(index) => setTabIndex(index)}
        defaultIndex={tabIndex}
      >
        <TabList mt={5}>
          <Tab>Basic</Tab>
          <Tab>Photos</Tab>
        </TabList>
        <TabPanels mt={5}>
          <TabPanel p="0">
            <Text>ID: {id}</Text>
            <Text>
              User:{" "}
              {data?.album ? (
                `${data.album.user?.name} (${data.album.user?.username})`
              ) : (
                <Image h="8px" src={dots} display="inline" />
              )}
            </Text>
          </TabPanel>
          <TabPanel p="0">
            <Flex minH="60vh" direction="column" justifyContent="space-between">
              {data?.album ? (
                <DataList listHeaders={photosHeaders}>
                  {data.album.photos?.data?.map((photo, index) => (
                    <PhotosListItem
                      key={photo?.id || index}
                      id={photo?.id || ""}
                      title={photo?.title || ""}
                      previewUrl={photo?.thumbnailUrl || ""}
                    />
                  ))}
                </DataList>
              ) : (
                <CustomSpinner />
              )}
            </Flex>
            <Box mt={9}>
              <Paginator total={50} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AlbumPage;
