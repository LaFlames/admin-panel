import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";

export const AdminLayout: React.FC = () => {
  return (
    <Flex minHeight="100vh">
      <Sidebar />
      <Box
        background="linear-gradient(180deg, #E6D4DE 0%, darkcyan 100%)"
        width="calc(100vw - 180px)"
        p={8}
        style={{ position: "relative" }}
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminLayout;
