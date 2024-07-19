export default function Description({ children } : { children: string }) {
  return (
    <p className="text-left text-secondary-200 dark:text-light-100 text-xs leading-[20px]">
      {children}
    </p>
  )
}