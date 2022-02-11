import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { DateInput } from "../index";

type DateRangeInputProps = {
  name: string[];
  label?: string;
  minDate?: string;
  maxDate?: string;
};

const DateRangeInput: React.FC<DateRangeInputProps> = ({
  name,
  label,
  minDate,
  maxDate,
}) => {
  return (
    <Box>
      <Text>{label}</Text>
      <VStack spacing={5}>
        <DateInput name={name[0]} minDate={minDate} maxDate={maxDate} />
        <DateInput name={name[1]} minDate={minDate} maxDate={maxDate} />
      </VStack>
    </Box>
  );
};

export default DateRangeInput;
