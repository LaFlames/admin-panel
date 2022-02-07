import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../../components";
import { ROUTE_NAMES } from "../../../../routes/route-names";
import { NavItem } from "./components";
import AuthProvider from "../../../../duck";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthProvider);

  const logOutHandler = () => {
    localStorage.removeItem("fake-token");
    setAuth({ isLogged: true });
    navigate(ROUTE_NAMES.LOGIN);
  };

  return (
    <Flex
      pos="sticky"
      pl={2}
      pr={2}
      pb={6}
      w="180px"
      flexDir="column"
      justifyContent="space-between"
      background="aliceblue"
    >
      <Flex p="2%" flexDir="column" alignItems="flex-start" as="nav">
        <NavItem title="Homepage" path="/" />
        <NavItem title="Albums" path={ROUTE_NAMES.ALBUMS} />
        <NavItem title="Users" path="/users" />
      </Flex>
      <Flex alignSelf="center">
        <SubmitButton onClick={logOutHandler} colorScheme="teal">
          Log out
        </SubmitButton>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
