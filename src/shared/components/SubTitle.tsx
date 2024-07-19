import { ReactNode } from "react";

export default function SubTitle({children}: {children: ReactNode}) {
  return (
    <p className="text-xs font-normal leading-[18px] text-center text-secondary-100 dark:text-light-100  mt-2.5 mb-10">
      {children}
    </p>
  )
}