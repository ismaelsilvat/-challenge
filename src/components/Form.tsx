import React, { ReactNode } from 'react';
import { useForm, SubmitHandler, FormProvider, UseFormReturn, FieldValues, DefaultValues } from 'react-hook-form';

type FormComponentProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>;
  children: (methods: UseFormReturn<T>) => ReactNode;
  className?: string;
  dataTestId?: string;
};

const Form = <T extends FieldValues>({ onSubmit, defaultValues, children, className, dataTestId }: FormComponentProps<T>) => {
  const methods = useForm<T>({ defaultValues: defaultValues as DefaultValues<T> });

  return (
    <FormProvider {...methods}>
      <form data-testid={dataTestId} onSubmit={methods.handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
        {children(methods)}
      </form>
    </FormProvider>
  );
};

export default Form;
