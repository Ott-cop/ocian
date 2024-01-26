import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

import { faAnglesUp, faCheck, faCloud, faCloudArrowDown, faHandHoldingDollar, faHandPointer, faHeadset, faListCheck, faPersonChalkboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Characteristic from "./Characteristics";
import { ReactNode } from "react";

type Props = {
    title: ReactNode,
    paragraph: ReactNode

}


export default function SystemTDPJ({ title, paragraph }: Props) {
    return (
        <>
        <section id="TDPJ" className="section-system flex flex-1 w-full h-[100vh] background-DifferentialBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="system-section flex w-full justify-start hiddenable">
                    <div className="flex-1 max-w-full w-full mt-[100px] justify-center">                  
                        <h2 className="title-differential text-[40px] font-medium mb-2">{title}</h2>
                        <p className="paragraph-differential text-[20px] mb-10">{paragraph}</p>
                        <div className="flex w-full justify-center">
                            <div id="tdjp" className="characteristics flex justify-center items-center w-full h-[400px] border-primary-color rounded-[20px] shadow-2xl">
                                <div className="characteristics-grid p-5 grid grid-cols-3 gap-5 m-8">
                                    <Characteristic icon={faCheck}>Recepção simplificada</Characteristic>
                                    <Characteristic icon={faCheck}>Controle contraditório de nomes</Characteristic>
                                    <Characteristic icon={faCheck}>Indicador integrado ao contraditório e qualificação de títulos</Characteristic>
                                    <Characteristic icon={faCheck}>Controle de notificações extrajudiciais</Characteristic>
                                    <Characteristic icon={faCheck}>Integração com sistema Ocian Diário</Characteristic>
                                    <Characteristic icon={faCheck}>Facilidade na emissão e baixa das notificações</Characteristic>
                                    <Characteristic icon={faCheck}>Impressão facilitada de etiquetas</Characteristic>
                                    <Characteristic icon={faCheck}>Integração com gerenciadores de imagens</Characteristic>
                                    <Characteristic icon={faCheck}>Controle de bens e garantias</Characteristic>
                                    <Characteristic icon={faCheck}>Controle seguro das indisponibilidades</Characteristic>
                                    <Characteristic icon={faCheck}>Exportação para site da serventia</Characteristic>
                                    <Characteristic icon={faCheck}>Integração com Ocian GEDMicrofilme</Characteristic>
                                    <Characteristic icon={faCheck}>Envio Automático de Emails pelo Ocian Email</Characteristic>
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