import React, { memo } from "react";
import { Flex, Link, LinkProps } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface NavItemProps extends LinkProps {
  title: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = memo(({ title, path }) => {
  return (
    <Flex mt={25} flexDir={"column"} w={"100%"} alignItems={"flex-start"}>
      <Link
        as={NavLink}
        to={path}
        p={2}
        borderRadius={8}
        _activeLink={{ backgroundColor: "#AEC8CA" }}
        _hover={{ backgroundColor: "#AEC8CA" }}
        w={"100%"}
      >
        {title}
      </Link>
    </Flex>
  );
});

export default NavItem;
