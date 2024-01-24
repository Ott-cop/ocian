import { ReactNode } from "react"

type Props = {
    children: ReactNode,
}

export function Container({children}: Props) {
    return (
        <div className="container flex flex-1 w-full max-w-[1400px] px-[15px] mx-auto justify-between"> 
            {children}
        </div>
    );
}