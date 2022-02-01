import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useController, useFormContext } from "react-hook-form";
import React from "react";

interface TextInputProps extends InputProps {
  name: string;
  label?: string;
  defaultValue?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  defaultValue = "",
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
      <Input
        {...field}
        {...restProps}
        isInvalid={invalid}
        errorBorderColor={"crimson"}
      />
      <Box height={4} color="red" fontSize="12px" fontWeight="bold">
        {errors[name] && errors[name].message}
      </Box>
    </FormControl>
  );
};

export default TextInput;
