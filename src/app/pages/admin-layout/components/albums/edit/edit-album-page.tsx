import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ROUTE_NAMES } from "../../../../../routes/route-names";
import {
  CustomSpinner,
  Form,
  FormControls,
  GoBackButton,
  SelectInput,
  SubmitButton,
  TextInput,
} from "../../../../../components";
import { operations, Types } from "./duck";

const schema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title length must be more than 3 characters")
    .max(64, "Title length must be less than 64 characters"),
});

const EditAlbumPage = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const { data, loading: queryLoading } = useQuery<
    Types.GetAlbumForEditQuery,
    Types.GetAlbumForEditQueryVariables
  >(operations.getAlbumForEdit, {
    variables: {
      id,
    },
  });

  const [editAlbum, { loading: mutationLoading }] = useMutation<
    Types.UpdateAlbumMutation,
    Types.UpdateAlbumMutationVariables
  >(operations.updateAlbum);

  const editAlbumHandler = (payload: { title: string }) => {
    editAlbum({
      variables: {
        id: data?.album?.id as string,
        input: { title: payload.title, userId: data?.album?.user?.id },
      },
    })
      .then(({ data }) => {
        if (data?.updateAlbum) {
          navigate(ROUTE_NAMES.ALBUMS);
          alert(`New title - "${data.updateAlbum.title}"`);
        }
      })
      .catch((er) => alert(er));
  };

  if (!data || queryLoading) {
    return <CustomSpinner />;
  }

  if (data?.album) {
    return (
      <Box>
        <Flex justifyContent="space-between">
          <Heading>Edit album</Heading>
          <GoBackButton />
        </Flex>
        <Box w="30vw" mt="5">
          <Form
            onSubmit={editAlbumHandler}
            validationSchema={schema}
            defaultValues={{ title: data.album.title }}
          >
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
                placeholder={data.album.user?.name || "error"}
                variant="filled"
                bg="gray.300"
              />
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

export default EditAlbumPage;
