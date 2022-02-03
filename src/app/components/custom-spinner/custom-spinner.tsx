import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Loader from "../../assets/loader.svg";

const CustomSpinner = () => {
  return (
    <Box
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image src={Loader} alt="loader" />
    </Box>
  );
};

export default CustomSpinner;
