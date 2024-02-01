import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, MouseEventHandler, ReactNode} from "react"

type Props = {
    children: ReactNode,
    click?: MouseEventHandler<HTMLButtonElement>,
}

export function Button({children, click} : Props) {
    return(
        <div>
            <button onClick={click} className="button bg-transparent font-semibold text-primary-color pl-10 pr-10 pt-[10px] pb-[10px] rounded-[50px] border-solid border-2 border-primary-color hover:bg-primary-color hover:text-white duration-300">
                {children}
            </button>
        </div>
    )
}