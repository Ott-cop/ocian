import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

import { faAnglesUp, faCheck, faCloud, faCloudArrowDown, faHandHoldingDollar, faHandPointer, faHeadset, faListCheck, faPersonChalkboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Characteristic from "./Characteristics";
import { ReactNode } from "react";

type Props = {
    title: ReactNode,
    paragraph: ReactNode

}


export default function SystemProtest({ title, paragraph }: Props) {
    return (
        <>
        <section id="Protesto" className="section-system flex flex-1 w-full h-[100vh] background-DifferentialBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="system-section flex w-full justify-start hiddenable">
                    <div className="flex-1 max-w-full w-full mt-[100px] justify-center">                  
                        <h2 className="title-differential text-[40px] font-medium mb-2">{title}</h2>
                        <p className="paragraph-differential text-[20px] mb-10">{paragraph}</p>
                        <div className="flex w-full justify-center">
                            <div id="protest" className="characteristics flex justify-center items-center w-full h-[400px] border-primary-color rounded-[20px] shadow-2xl">
                                <div className="characteristics-grid p-5 grid grid-cols-3 gap-5 m-8">
                                    <Characteristic icon={faCheck}>Recepção simplificada</Characteristic>
                                    <Characteristic icon={faCheck}>Comunicação total à CRA/CENPROT</Characteristic>
                                    <Characteristic icon={faCheck}>Emissão, exportação, e baixa automatizada de boletos registrados</Characteristic>
                                    <Characteristic icon={faCheck}>Reaproveitamento de Imagens (Instrumentos e certidões) assinadas digitalmente para consulta</Characteristic>
                                    <Characteristic icon={faCheck}>Triagem de irregularidade de acordo com layout atualizado da CRA</Characteristic>
                                    <Characteristic icon={faCheck}>Controle de devedores ME (Micro Empresa)</Characteristic>
                                    <Characteristic icon={faCheck}>Controle de Assessorias</Characteristic>
                                    <Characteristic icon={faCheck}>Integração com sistema Ocian Diário</Characteristic>
                                    <Characteristic icon={faCheck}>Controle de entrega das intimações terceirizadas</Characteristic>
                                    <Characteristic icon={faCheck}>Assinatura Eletrônica Integrada</Characteristic>
                                    <Characteristic icon={faCheck}>Controle total de intimações, desde sua emissão até seu retorno</Characteristic>
                                    <Characteristic icon={faCheck}>Histórico de andamento dos títulos</Characteristic>
                                    <Characteristic icon={faCheck}>Compatibilidade com vários distribuidores do mercado</Characteristic>
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