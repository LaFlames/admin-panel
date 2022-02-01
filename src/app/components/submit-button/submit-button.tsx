import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface SubmitButton extends ButtonProps {
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButton> = ({ children, ...restProps }) => {
  return (
    <Button {...restProps} type="submit">
      {children}
    </Button>
  );
};

export default SubmitButton;
