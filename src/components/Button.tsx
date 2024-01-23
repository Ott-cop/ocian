import {ReactNode} from "react"

type Props = {
    children: ReactNode;
}

export function Button({children} : Props) {
    return(
        <div>
            <button className="bg-transparent text-primary-color pl-10 pr-10 pt-[10px] pb-[10px] rounded-[50px] border-solid border-[1px] border-primary-color font-medium hover:bg-primary-color hover:text-white duration-300">
                {children}
            </button>
        </div>
    )
}