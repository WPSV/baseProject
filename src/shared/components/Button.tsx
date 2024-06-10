import { ReactNode } from 'react'
import { Button as NextBtn } from '@nextui-org/button'

type ButtonProps = {
  width: string
  height: string
  color: string
  fontSize?: string
  backgroundColor: string
  border?: string
  children: ReactNode
}

export default function Button({
  width,
  height,
  color,
  fontSize,
  backgroundColor,
  border,
  children,
}: ButtonProps) {
  return (
    <NextBtn
      className={`${width} ${height} ${color} ${fontSize} ${backgroundColor} ${border} rounded-btn`}
    >
      {children}
    </NextBtn>
  )
}
