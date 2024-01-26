import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

import { faAnglesUp, faCheck, faCloud, faCloudArrowDown, faHandHoldingDollar, faHandPointer, faHeadset, faListCheck, faPersonChalkboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Characteristic from "./Characteristics";
import { ReactNode } from "react";

type Props = {
    title: ReactNode,
    paragraph: ReactNode

}


export default function SystemGED({ title, paragraph }: Props) {
    return (
        <>
        <section id="GED" className="section-system flex flex-1 w-full h-[100vh] background-DifferentialBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="system-section flex w-full justify-start hiddenable">
                    <div className="flex-1 max-w-full w-full mt-[100px] justify-center">                  
                        <h2 className="title-differential text-[40px] font-medium mb-2">{title}</h2>
                        <p className="paragraph-differential text-[20px] mb-10">{paragraph}</p>
                        <div className="flex w-full justify-center">
                            <div id="ged" className="characteristics flex justify-center items-center w-full h-[400px] border-primary-color rounded-[20px] shadow-2xl">
                                <div className="characteristics-grid p-5 grid grid-cols-3 gap-5 m-8">
                                    <Characteristic icon={faCheck}>Digitalização de documentos</Characteristic>
                                    <Characteristic icon={faCheck}>Impressões de imagens</Characteristic>
                                    <Characteristic icon={faCheck}>Impressões de certidões integradas ao sistema Ocian Imóveis</Characteristic>
                                    <Characteristic icon={faCheck}>Relatório de impressões de imagens e de certidões</Characteristic>
                                    <Characteristic icon={faCheck}>Cadastro de alertas e bloqueios de matrículas para impressões de certidões</Characteristic>
                                    <Characteristic icon={faCheck}>Alerta de matrículas em contraditório</Characteristic>
                                    <Characteristic icon={faCheck}>Fácil configuração de novos modelos de certidões</Characteristic>
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