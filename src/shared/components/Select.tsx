import React, { ChangeEvent } from "react";
import { Select as NextUISelect, SelectItem } from "@nextui-org/react";

type TSelectProps = {
  label?: string;
  "aria-label"?: string;
  name?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  placeholder?: string;
  selectionMode?: "single" | "multiple";
  items?: string[];
  isRequired?: boolean;
  isDisabled?: boolean;
  disabledKeys?: string[];
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  selectorIcon?: React.ReactNode;
  disableSelectorIconRotation?: boolean;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedKeys?: string[];
  classNames?: {
    base?: string[],
    label?: string[],
    mainWrapper?: string[],
    trigger?: string[],
    innerWrapper?: string[],
    selectorIcon?: string[],
    value?: string[],
    listboxWrapper?: string[],
    listbox?: string[],
    popoverContent?: string[],
    helperWrapper?: string[],
    description?: string[],
    errorMessage?: string[],
  }
}

export default function Select({
  label, "aria-label": ariaLabel, name, labelPlacement, placeholder, selectionMode, items, isRequired, isDisabled, disabledKeys, startContent,
  endContent, selectorIcon, disableSelectorIconRotation, description, errorMessage, onChange, selectedKeys, classNames
}: TSelectProps) {
  const mergeClassNames = (defaultClassNames: string[], classNames?: string[]) =>
    classNames ? [...defaultClassNames, classNames] : defaultClassNames;
  
  const defaultClassNames = {
    base: ["mb-[38px]"],
    label: ["pb-[5px]"],
    mainWrapper: ["bg-light border border-solid border-outline rounded"],
    trigger: ["data-[hover]:bg-light group-data-[focus]:bg-light bg-light h-14"],
    innerWrapper: [],
    selectorIcon: [],
    value: [],
    listboxWrapper: [],
    listbox: [],
    popoverContent: ["rounded"],
    helperWrapper: [],
    description: [],
    errorMessage: [],
  };
  
  const combinedClassNames = {
    base: mergeClassNames(defaultClassNames.base, classNames?.base),
    label: mergeClassNames(defaultClassNames.label, classNames?.label),
    mainWrapper: mergeClassNames(defaultClassNames.mainWrapper, classNames?.mainWrapper),
    trigger: mergeClassNames(defaultClassNames.trigger, classNames?.trigger),
    innerWrapper: mergeClassNames(defaultClassNames.innerWrapper, classNames?.innerWrapper),
    selectorIcon: mergeClassNames(defaultClassNames.selectorIcon, classNames?.selectorIcon),
    value: mergeClassNames(defaultClassNames.value, classNames?.value),
    listboxWrapper: mergeClassNames(defaultClassNames.listboxWrapper, classNames?.listboxWrapper),
    listbox: mergeClassNames(defaultClassNames.listbox, classNames?.listbox),
    popoverContent: mergeClassNames(defaultClassNames.popoverContent, classNames?.popoverContent),
    helperWrapper: mergeClassNames(defaultClassNames.helperWrapper, classNames?.helperWrapper),
    description: mergeClassNames(defaultClassNames.description, classNames?.description),
    errorMessage: mergeClassNames(defaultClassNames.errorMessage, classNames?.errorMessage),
  }
  
  const selectItems = items?.map((item) => ({key: item, value: item}));
  
  return (
    <NextUISelect
      label={label}
      aria-label={ariaLabel}
      name={name}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      selectionMode={selectionMode}
      items={selectItems}
      isRequired={isRequired}
      isDisabled={isDisabled}
      disabledKeys={disabledKeys}
      startContent={startContent}
      endContent={endContent}
      selectorIcon={selectorIcon}
      disableSelectorIconRotation={disableSelectorIconRotation}
      description={description}
      errorMessage={errorMessage}
      onChange={onChange}
      selectedKeys={selectedKeys}
      classNames={combinedClassNames}
    >
      {(item) => (
        <SelectItem key={item.key}>
          {item.value}
        </SelectItem>
      )}
    </NextUISelect>
  )
}