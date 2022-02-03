import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/route-names";

const ErrorPage = () => {
  const hasToken = localStorage.getItem("fake-token");

  return (
    <Box position="relative" h="100vh">
      <Box
        position="absolute"
        zIndex="-1"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
      >
        <Heading color="#ececec" fontSize="276px">
          404
        </Heading>
      </Box>
      <Flex flexDir="column" alignItems="center" pt="21%">
        <Heading
          fontFamily="Maven Pro"
          fontSize="46px"
          color="#000"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Page not found!
        </Heading>
        <Text
          fontFamily="Maven Pro"
          fontSize="16px"
          color="#000"
          mt={4}
          textTransform="uppercase"
        >
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable
        </Text>
        <Text
          bg="#189cf0"
          mt={5}
          p="10px"
          borderRadius="20px"
          color="#fff"
          _hover={{ textDecoration: "none" }}
        >
          <Link
            to={hasToken ? ROUTE_NAMES.ADMIN : ROUTE_NAMES.LOGIN}
            color="#fff"
          >
            Back to homepage
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default ErrorPage;
