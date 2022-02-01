import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

type FormPropsType = {
  onSubmit: (data: any) => void;
  validationSchema: AnyObjectSchema;
};

export type LoginFormType = {
  email: string;
  password: string;
  children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({
  onSubmit,
  validationSchema,
  children,
  ...restProps
}) => {
  const methods = useForm<LoginFormType>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
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
