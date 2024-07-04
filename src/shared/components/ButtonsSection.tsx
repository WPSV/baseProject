import Button from "@/shared/components/Button";

type TButtonSectionProps ={
  prevLink: string;
  nextLink: string;
  justifyContent?: string;
}

export default function ButtonsSection({ prevLink, nextLink, justifyContent } : TButtonSectionProps) {
  return (
    <div className={`flex ${justifyContent ? justifyContent : "justify-around"} items-center mt-[30px]`}>
      <Button href={prevLink} className="w-[172px] bg-light hover:bg-[#EDEFF0] text-dark border-none">
        Voltar
      </Button>
      <Button href={nextLink} className="w-[172px]">
        Continuar
      </Button>
    </div>
  )
}