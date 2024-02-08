import {MouseEventHandler, ReactNode} from "react"

type Props = {
    children: ReactNode,
    click?: MouseEventHandler<HTMLButtonElement>,
}

export function Button({children, click} : Props) {
    return(
        <div>
            <button  onClick={click} className="button button-style">
                {children}
            </button>
        </div>
    )
}