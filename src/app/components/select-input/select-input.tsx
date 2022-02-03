import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  SelectProps,
} from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";

interface SelectInputProps extends SelectProps {
  name: string;
  children?: React.ReactNode;
  label?: string;
  defaultValue?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  defaultValue = "",
  children,
  ...restProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field,
    fieldState: { invalid },
  } = useController({ name, control, defaultValue });

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select
        {...field}
        {...restProps}
        name={name}
        isInvalid={invalid}
        errorBorderColor="crimson"
      >
        {children}
      </Select>
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

export default SelectInput;
