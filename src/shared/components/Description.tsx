export default function Description({ children } : { children: string }) {
  return (
    <p className="text-left text-darkMinus text-xs leading-[20px]">
      {children}
    </p>
  )
}