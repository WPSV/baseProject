import React, { ChangeEvent } from "react";
import { Input as NextUIInput } from "@nextui-org/react";

type TInputProps = {
  type: string,
  name?: string,
  label?: string,
  labelPlacement?: "outside" | "outside-left" | "inside",
  placeholder?: string,
  startContent?: React.ReactNode,
  endContent?: React.ReactNode,
  isRequired?: boolean,
  isClearable?: boolean,
  isDisabled?: boolean,
  isReadOnly?: boolean,
  description?: React.ReactNode,
  isInvalid?:boolean,
  errorMessage?: React.ReactNode,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  classNames?: {
    base?: string[],
    label?: string[],
    mainWrapper?: string[],
    inputWrapper?: string[],
    innerWrapper?: string[],
    input?: string[],
    clearButton?: string[],
    helperWrapper?: string[],
    description?: string[],
    errorMessage?: string[],
  },
}

export default function Input({
  type, label, labelPlacement, placeholder, startContent, endContent, isRequired, isClearable, name,
  isDisabled, isReadOnly, description, isInvalid, errorMessage, onChange, value, classNames
}: TInputProps) {
  
  const mergeClassNames = (defaultClassNames: string[], classNames?: string[]) =>
    classNames ? [...defaultClassNames, ...classNames] : defaultClassNames;
  
  const defaultClassNames = {
    base: [],
    label: [],
    mainWrapper: [],
    inputWrapper: [`bg-colorBgField border border-solid border-outline rounded h-14 text-colorTitle ${!description && "mb-5"} `],
    innerWrapper: [],
    input: ["placeholder-input focus:outline-none"],
    clearButton: [],
    helperWrapper: [],
    description: [],
    errorMessage: [],
  }
  
  const combinedClassNames = {
    base: mergeClassNames(defaultClassNames.base, classNames?.base),
    label: mergeClassNames(defaultClassNames.label, classNames?.label),
    mainWrapper: mergeClassNames(defaultClassNames.mainWrapper, classNames?.mainWrapper),
    inputWrapper: mergeClassNames(defaultClassNames.inputWrapper, classNames?.inputWrapper),
    innerWrapper: mergeClassNames(defaultClassNames.innerWrapper, classNames?.innerWrapper),
    input: mergeClassNames(defaultClassNames.input, classNames?.input),
    clearButton: mergeClassNames(defaultClassNames.clearButton, classNames?.clearButton),
    helperWrapper: mergeClassNames(defaultClassNames.helperWrapper, classNames?.helperWrapper),
    description: mergeClassNames(defaultClassNames.description, classNames?.description),
    errorMessage: mergeClassNames(defaultClassNames.errorMessage, classNames?.errorMessage),
  }
  
  return (
    <NextUIInput
      type={type}
      name={name}
      label={label}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      startContent={startContent}
      endContent={endContent}
      required={isRequired}
      isClearable={isClearable}
      disabled={isDisabled}
      readOnly={isReadOnly}
      description={description}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={onChange}
      value={value}
      classNames={combinedClassNames}
    />
  )
}