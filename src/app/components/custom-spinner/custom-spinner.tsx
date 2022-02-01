import React from "react";
import { Box, Spinner, Image } from "@chakra-ui/react";
import Loader from "../../assets/loader.svg";

const CustomSpinner = ({ ...restProps }) => {
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
      {/*<Spinner thickness="8px" color="purple.500" w={"150px"} h={"150px"} />*/}
    </Box>
  );
};

export default CustomSpinner;
