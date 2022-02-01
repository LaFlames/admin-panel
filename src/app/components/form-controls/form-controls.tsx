import React from "react";
import { ButtonGroup, Flex, Spacer } from "@chakra-ui/react";

type FormControlsProps = {
  children?: React.ReactNode;
};

const FormControls: React.FC<FormControlsProps> = ({ children }) => {
  return (
    /*<Flex direction="row" spacing={4}>
      {children}
    </Flex>*/
    <ButtonGroup variant="solid" spacing="2">
      {children}
    </ButtonGroup>
  );
};

export default FormControls;
