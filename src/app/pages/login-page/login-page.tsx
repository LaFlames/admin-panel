import React, { useContext } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Form, SubmitButton, TextInput } from "../../components";
import { ROUTE_NAMES } from "../../routes/route-names";
import AuthProvider from "../../duck";

const schema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthProvider);

  const onSubmit = () => {
    localStorage.setItem("fake-token", `${new Date()}`);
    setAuth({ isLogged: true });
    navigate(ROUTE_NAMES.ADMIN);
  };

  return (
    <Flex
      h="100vh"
      w="100vw"
      alignItems="center"
      justifyContent="center"
      direction="column"
      background="linear-gradient(180deg, #E6D4DE 0%, purple 100%)"
    >
      <Flex direction="column" alignItems="center">
        <Heading fontSize="4xl" textAlign="center">
          Sign in
        </Heading>
      </Flex>
      <Flex
        alignItems="center"
        direction="column"
        background="gray.100"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.4)"
        p={10}
        rounded={12}
        mt={3}
      >
        <Form onSubmit={onSubmit} validationSchema={schema}>
          <TextInput name="email" label="Email" />
          <Box mt={5}>
            <TextInput name="password" label="Password" />
          </Box>
          <SubmitButton width="full" colorScheme="purple" mt={8}>
            Sign In
          </SubmitButton>
        </Form>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
