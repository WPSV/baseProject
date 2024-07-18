type TFormContainerProps = {
  children?: React.ReactNode;
  className?: string;
}

export default function RegisterContainer({ children, className }:TFormContainerProps) {
  return (
    <div className={`text-center bg-light-100 rounded-[24px] p-[40px_70px] ${className}`}>
      {children}
    </div>
  )
}