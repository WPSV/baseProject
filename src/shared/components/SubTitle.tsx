import { ReactNode } from "react";

export default function SubTitle({children}: {children: ReactNode}) {
  return (
    <p className="text-xs font-normal text-subtTitle leading-[18px] tracking-[0.04em] text-center text-input mt-2.5 mb-10">
      {children}
    </p>
  )
}