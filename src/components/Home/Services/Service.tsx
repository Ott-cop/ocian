import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"

type Props = {
    icon: IconProp,
    service: ReactNode,

}

export default function Service({ icon, service }: Props) {
    return (
        <>
        <div className="block mb-[20px] justify-center change-color">
            <div className="responsive-icon mb-1"> 
                <i style={{display: "flex", alignItems: "center", textAlign: "start", justifyContent: "center", backgroundColor: "transparent", color: "#02B3EE", width: "70px", height: "70px", fontSize: "25px", borderRadius: "100px", margin: "auto", borderWidth: "2px", borderStyle: "solid", borderColor: "#02B3EE"}} className="icon"><FontAwesomeIcon icon={icon}/></i>
            </div>
            <div className="flex w-full text-center justify-center ">
                <h5 className="text-[16px] font-semibold mb-[8px]">{service}</h5>
            </div>
        </div>
        </>
    )
}