import React from "react";
import { Flex } from "@chakra-ui/react";
import { SubmitButton } from "../../../../components";
import { NavItem } from "./components";
import { ROUTE_NAMES } from "../../../../routes/route-names";

type SidebarProps = {
  logOut?: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ logOut }) => {
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
      <Flex p={"2%"} flexDir={"column"} alignItems={"flex-start"} as={"nav"}>
        <NavItem title="Homepage" path={"/"} />
        <NavItem title="Albums" path={ROUTE_NAMES.ALBUMS} />
        <NavItem title="Users" path={"/users"} />
      </Flex>
      <Flex alignSelf={"center"}>
        <SubmitButton onClick={logOut} colorScheme="teal">
          Log out
        </SubmitButton>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
