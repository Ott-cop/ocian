import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

import { faAnglesUp, faCheck, faCloud, faCloudArrowDown, faHandHoldingDollar, faHandPointer, faHeadset, faListCheck, faPersonChalkboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Characteristic from "./Characteristics";
import { ReactNode } from "react";

type Props = {
    title: ReactNode,
    paragraph: ReactNode

}


export default function SystemBackup({ title, paragraph }: Props) {
    return (
        <>
        <section id="Backup" className="section-system flex flex-1 w-full background-SystemBannerRight-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="system-section flex w-full justify-start hiddenable">
                    <div className="flex-1 max-w-full w-full mt-[100px] justify-center">                  
                        <h2 className="title-differential text-[40px] font-medium mb-2">{title}</h2>
                        <p className="paragraph-differential text-[20px] mb-10">{paragraph}</p>
                        <div className="flex w-full justify-center">
                            <div id="backup" className="characteristics flex justify-center items-center w-full h-[400px] border-primary-color rounded-[20px] shadow-2xl">
                                <div className="characteristics-grid p-5 grid grid-cols-3 gap-5 m-8">
                                    <Characteristic icon={faCheck}>Atende a todos os portes de cartório</Characteristic>
                                    <Characteristic icon={faCheck}>Criptografia total dos dados</Characteristic>
                                    <Characteristic icon={faCheck}>Realiza cópia diária em Data Center Nacional TIER – III</Characteristic>
                                    <Characteristic icon={faCheck}>Validação dos dados ao menos uma vez por mês</Characteristic>
                                    <Characteristic icon={faCheck}>Agilidade e rapidez na entrega dos dados quando necessários ou requeridos</Characteristic>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}