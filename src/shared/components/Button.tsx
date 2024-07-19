import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

type TButtonProps = {
  children: React.ReactNode;
  href?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  spinner?: React.ReactNode,
  startContent?: React.ReactNode,
  endContent?: React.ReactNode,
  isIconOnly?: boolean,
  className: string,
}

export default function Input({children, href, isDisabled, isLoading, spinner, startContent, endContent, isIconOnly, className}: TButtonProps) {
  const defaultClassNames = "h-14 bg-primary-200 border border-solid border-primary-200 rounded-lg text-light-100 text-sm font-bold";
  
  const combinedClassNames = `${defaultClassNames} ${className} ${isDisabled && "cursor-not-allowed"}`.trim();
  
  if (href) return (
    <Link href={href}>
      <NextUIButton
        disabled={isDisabled}
        isLoading={isLoading}
        spinner={spinner}
        startContent={startContent}
        endContent={endContent}
        isIconOnly={isIconOnly}
        className={combinedClassNames}
      >
        {children}
      </NextUIButton>
    </Link>
  )
  
  return (
    <NextUIButton
      type="submit"
      disabled={isDisabled}
      isLoading={isLoading}
      spinner={spinner}
      startContent={startContent}
      endContent={endContent}
      isIconOnly={isIconOnly}
      className={combinedClassNames}
    >
      {children}
    </NextUIButton>
  )
}