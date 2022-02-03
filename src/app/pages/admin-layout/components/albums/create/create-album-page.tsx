import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  CustomSpinner,
  Form,
  FormControls,
  GoBackButton,
  SelectInput,
  SubmitButton,
  TextInput,
} from "../../../../../components";
import { ROUTE_NAMES } from "../../../../../routes/route-names";
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

  const { data, loading: queryLoading } = useQuery<
    Types.GetUserInfoQuery,
    Types.GetUserInfoQueryVariables
  >(operations.getUserInfo);

  const [addNewAlbum, { loading: mutationLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);
  const addAlbumHandler = (albumData: { title: string; user: string }) => {
    addNewAlbum({
      variables: {
        input: { title: albumData.title, userId: albumData.user },
      },
    })
      .then(({ data }) => {
        if (data?.createAlbum) {
          navigate(ROUTE_NAMES.ALBUMS);
        }
      })
      .catch((er) => alert(er));
  };

  if (!data || queryLoading) {
    return <CustomSpinner />;
  }

  if (data.users?.data) {
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
            <Box mt={5}>
              <SelectInput
                name="user"
                label="User"
                placeholder="Select user"
                variant="filled"
                bg="gray.300"
              >
                {data.users.data.map((user) => (
                  <option key={Math.random()} value={user?.id || "error"}>
                    {user?.name}
                  </option>
                ))}
              </SelectInput>
            </Box>
            <Box mt={9}>
              <FormControls>
                <SubmitButton isLoading={mutationLoading} colorScheme="purple">
                  Submit
                </SubmitButton>
                <Button colorScheme="red" as={Link} to={ROUTE_NAMES.ALBUMS}>
                  Cancel
                </Button>
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
