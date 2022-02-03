import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

type FormPropsType = {
  onSubmit: (data: any) => void;
  validationSchema: AnyObjectSchema;
  defaultValues?: { [x: string]: any } | undefined;
};

const Form: React.FC<FormPropsType> = ({
  onSubmit,
  validationSchema,
  children,
  defaultValues,
  ...restProps
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues,
  });

  const submit = (data: any) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} {...restProps}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
