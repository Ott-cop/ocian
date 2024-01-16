type Props = {
    name: String
    padding?: String
}

export function ItemMenu({ name, padding }: Props) {
    return(
        <button className="flex flex-1 items-center">
            <span className={`text-[15px] font-semibold m-0 ${padding}`}>{name}</span>
        </button>
    )
}