import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/route-names";
import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./components";

type MainPageProps = {
  children?: React.ReactNode;
};

export const AdminPage: React.FC<MainPageProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("fake-token")) {
      navigate(ROUTE_NAMES.LOGIN);
    }
  }, []);

  const logOutHandler = useCallback(() => {
    localStorage.removeItem("fake-token");
    navigate(ROUTE_NAMES.LOGIN);
  }, []);

  return (
    <Flex minHeight="100vh">
      <Sidebar logOut={logOutHandler} />
      <Box
        background="linear-gradient(180deg, #E6D4DE 0%, darkcyan 100%)"
        width="calc(100vw - 180px)"
        p={8}
        style={{ position: "relative" }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AdminPage;
