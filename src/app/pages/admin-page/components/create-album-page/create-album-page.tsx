import React, { useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import {
  CustomSpinner,
  Form,
  FormControls,
  GoBackButton,
  SelectInput,
  SubmitButton,
  TextInput,
} from "../../../../components";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../routes/route-names";
import { useMutation, useQuery } from "@apollo/client";
import { operations, Types } from "./duck";

const schema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title length must be more than 3 characters")
    .max(64, "Title length must be less than 64 characters"),
  user: Yup.string().required("User is required"),
});

const CreateAlbumPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data, loading } = useQuery<
    Types.GetUserInfoQuery,
    Types.GetUserInfoQueryVariables
  >(operations.getUserInfo);

  const [addNewAlbum] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);
  const addAlbumHandler = (data: { title: string; user: string }) => {
    setIsLoading(true);
    addNewAlbum({
      variables: {
        input: { title: data.title, userId: data.user },
      },
    })
      .then(({ data }) => {
        if (data?.createAlbum) {
          setIsLoading(false);
          navigate(ROUTE_NAMES.ALBUMS);
          alert(`Album "${data.createAlbum.title}" created`);
        }
      })
      .catch((er) => alert(er));
  };

  if (!data || loading) {
    return <CustomSpinner />;
  }

  if (data?.albums?.data) {
    return (
      <Box>
        <Flex justifyContent="space-between">
          <Heading>Create album</Heading>
          <GoBackButton />
        </Flex>
        <Box w="30vw" mt="5">
          <Form onSubmit={addAlbumHandler} validationSchema={schema}>
            <TextInput
              name="title"
              label="Title"
              bg="gray.300"
              variant="filled"
            />
            <Box mt={2}>
              <SelectInput
                name="user"
                label="User"
                placeholder="Select user"
                variant="filled"
                bg="gray.300"
              >
                {data.albums.data.map((data) => (
                  <option key={Math.random()} value={data?.user?.id || "error"}>
                    {data?.user?.name}
                  </option>
                ))}
              </SelectInput>
            </Box>
            <Box mt={9}>
              <FormControls>
                <SubmitButton isLoading={isLoading} colorScheme="purple">
                  Submit
                </SubmitButton>
                <SubmitButton
                  colorScheme="red"
                  onClick={() => {
                    navigate(ROUTE_NAMES.ALBUMS);
                  }}
                >
                  Cancel
                </SubmitButton>
              </FormControls>
            </Box>
          </Form>
        </Box>
      </Box>
    );
  }

  return <code>data.users = null</code>;
};

export default CreateAlbumPage;
