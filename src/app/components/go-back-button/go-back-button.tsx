import React from "react";
import { BsArrowLeftShort } from "react-icons/all";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GoBackButton: React.FC<ButtonProps> = ({ ...restProps }) => {
  const navigate = useNavigate();
  return (
    <Button
      colorScheme="purple"
      leftIcon={<BsArrowLeftShort />}
      onClick={() => {
        navigate(-1);
      }}
    >
      Back
    </Button>
  );
};

export default GoBackButton;
