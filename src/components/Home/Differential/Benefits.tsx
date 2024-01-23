import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type Props = {
    icon: IconProp,
    children: ReactNode,
}

type highlight = {
    children: ReactNode
}


export default function Benefits({ icon, children }: Props) {
    return(
        <>
        <div className="change-color-diff flex gap-3 items-center">
            <i style={{fontSize: "24px", color: "#02b3ee"}}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></i>
            <span className="text-[20px] font-medium">{children}</span>
        </div>
        </>
    )
}