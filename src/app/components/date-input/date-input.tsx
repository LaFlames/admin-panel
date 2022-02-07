import React from "react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { useController, useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

type DateInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  minDate?: string;
  maxDate?: string;
};

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  defaultValue = "",
  minDate,
  maxDate,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({ name, control, defaultValue });

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <DatePicker
        {...field}
        selected={field.value}
        maxDate={new Date(maxDate as string)}
        minDate={new Date(minDate as string)}
      />

      {errors[name] && (
        <Box
          position="absolute"
          height={4}
          color="red"
          fontSize="12px"
          fontWeight="bold"
        >
          {errors[name] && errors[name].message}
        </Box>
      )}
    </FormControl>
  );
};

export default DateInput;
