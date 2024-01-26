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
        <div className="block w-[110px] mb-[20px] pt-5  justify-center change-color shadow-2xl rounded-[20px] border-primary-color">
            <div className="responsive-icon mb-0"> 
                <i style={{display: "flex", alignItems: "center", textAlign: "start", justifyContent: "center", backgroundColor: "transparent", color: "#02B3EE", width: "70px", height: "70px", fontSize: "32px", borderRadius: "100px", margin: "auto", borderWidth: "0px", borderStyle: "solid", borderColor: "#02B3EE"}} className="icon"><FontAwesomeIcon icon={icon}/></i>
            </div>
            <div className="flex w-full text-center justify-center ">
                <h5 className="text-[16px] mb-[8px]">{service}</h5>
            </div>
        </div>
        </>
    )
}