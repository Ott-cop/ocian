type Props = {
    name: String
    padding?: String
    fontColor?: String
}

export function ItemMenu({ name, padding, fontColor }: Props) {
    return(
        <button className="flex flex-1 items-center">
            <span className={`text-[18px] tracking-wider m-0 ${padding} ${fontColor}`}>{name}</span>
        </button>
    )
}