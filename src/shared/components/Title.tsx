import { ReactNode } from "react";

type TTitleProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Title({children, className}: TTitleProps) {
  return (
    <h1 className={`text-2xl font-bold leading-7 text-center text-secondary-400 dark:text-light-100 ${className}`}>
      {children}
    </h1>
  )
}