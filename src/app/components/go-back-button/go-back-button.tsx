import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { BsArrowLeftShort } from "react-icons/all";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/route-names";

const GoBackButton: React.FC<ButtonProps> = () => {
  return (
    <Button
      colorScheme="purple"
      as={Link}
      to={ROUTE_NAMES.ALBUMS}
      leftIcon={<BsArrowLeftShort />}
    >
      Back
    </Button>
  );
};

export default GoBackButton;
