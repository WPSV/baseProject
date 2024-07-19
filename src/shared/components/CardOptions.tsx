type TPreferencesOptions = {
  item: string;
  itemsSelected: string[];
  onClick: (item: string) => void;
}

export default function CardOptions({ item, onClick, itemsSelected } : TPreferencesOptions) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`flex flex-col items-center w-[196px] h-[244px] ${itemsSelected?.includes(item) ? "bg-primary-200 text-light-100" : "bg-[#EFF4F2] dark:bg-secondary-200 text-secondary-400"} rounded-[16px] cursor-pointer`}
    >
      <img className="my-5 w-[148px]" src="/assets/image.svg" alt="Image"/>
      <p className="text-sm leading-6">{item}</p>
    </div>
  )
}