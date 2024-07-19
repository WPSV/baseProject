import React, { ChangeEvent } from "react";
import { Textarea as NextUITextarea } from "@nextui-org/react";

type TTextareaProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  minRows?: number;
  maxRows?: number;
  disableAutosize?: boolean;
  isDisabled?: boolean;
  defaultValue?: string;
  isReadOnly?: boolean;
  isRequired?: boolean;
  errorMessage?: React.ReactNode;
  description?: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  classNames?: {
    base?: string[];
    label?: string[];
    inputWrapper?: string[];
    input?: string[];
    description?: string[];
    errorMessage?: string[];
  };
}

export default function Textarea({
  label, name, placeholder, labelPlacement, minRows, maxRows, disableAutosize, isDisabled,
  defaultValue, isReadOnly, isRequired, errorMessage, description, onChange, classNames
}:TTextareaProps) {
  const mergeClassNames = (defaultClassNames: string[], classNames?: string[]) =>
    classNames ? [...defaultClassNames, classNames] : defaultClassNames;
  
  const defaultClassNames = {
    base: [],
    label: ["text-left"],
    inputWrapper: ["bg-light-100 dark:bg-secondary-200 border border-solid border-outline rounded h-full"],
    input: ["focus:outline-none placeholder-input"],
    description: [],
    errorMessage: [],
  }
  
  const combinedClassNames = {
    base: mergeClassNames(defaultClassNames.base, classNames?.base),
    label: mergeClassNames(defaultClassNames.label, classNames?.label),
    inputWrapper: mergeClassNames(defaultClassNames.inputWrapper, classNames?.inputWrapper),
    input: mergeClassNames(defaultClassNames.input, classNames?.input),
    description: mergeClassNames(defaultClassNames.description, classNames?.description),
    errorMessage: mergeClassNames(defaultClassNames.errorMessage, classNames?.errorMessage),
  }
  
  return (
    <NextUITextarea
      label={label}
      name={name}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      minRows={minRows}
      maxRows={maxRows}
      disableAutosize={disableAutosize}
      disabled={isDisabled}
      defaultValue={defaultValue}
      readOnly={isReadOnly}
      required={isRequired}
      errorMessage={errorMessage}
      description={description}
      onChange={onChange}
      classNames={combinedClassNames}
    />
  )
}