type Props = {
    name: String
    padding?: String
    fontColor?: String
}

export function ItemMenu({ name, padding, fontColor }: Props) {
    return(
        <button className="flex flex-1 items-center justify-center text-center">
            <span className={`text-itemmenu text-[18px] tracking-wider m-0 link link-underline ${padding} ${fontColor}`}>{name}</span>
        </button>
    )
}