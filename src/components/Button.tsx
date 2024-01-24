import {ReactNode} from "react"

type Props = {
    children: ReactNode;
}

export function Button({children} : Props) {
    return(
        <div>
            <button className="button bg-transparent font-semibold text-primary-color pl-10 pr-10 pt-[10px] pb-[10px] rounded-[50px] border-solid border-2 border-primary-color hover:bg-primary-color hover:text-white duration-300">
                {children}
            </button>
        </div>
    )
}