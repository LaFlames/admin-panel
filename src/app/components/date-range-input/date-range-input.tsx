import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { DateInput } from "../index";

type DateRangeInputProps = {
  name: string;
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
    <>
      <Text>{label}</Text>
      <DateInput name="startDate" minDate={minDate} maxDate={maxDate} />
      <Box mt={6}>
        <DateInput name="endDate" minDate={minDate} maxDate={maxDate} />
      </Box>
    </>
  );
};

export default DateRangeInput;
