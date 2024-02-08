import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";

import { faAnglesUp, faCheck, faCloud, faCloudArrowDown, faHandHoldingDollar, faHandPointer, faHeadset, faListCheck, faPersonChalkboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Characteristic from "./Characteristics";
import { ReactNode } from "react";

type Props = {
    title: ReactNode,
    paragraph: ReactNode

}


export default function SystemNotes({ title, paragraph }: Props) {
    return (
        <>
        <section id="Notas" className="section-system flex flex-1 w-full background-SystemBannerRight-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="system-section flex w-full justify-start hiddenable">
                    <div className="flex-1 max-w-full w-full mt-[100px] justify-center">                  
                        <h2 className="title-differential text-[40px] font-medium mb-2">{title}</h2>
                        <p className="paragraph-differential text-[20px] mb-10">{paragraph}</p>
                        <div className="flex w-full justify-center">
                            <div id="notes" className="characteristics flex justify-center items-center w-full h-[400px] border-primary-color rounded-[20px] shadow-2xl">
                                <div className="characteristics-grid p-5 grid grid-cols-3 gap-5 m-8">
                                    <Characteristic icon={faCheck}>Indexação automática da digitalização de cartões e livros</Characteristic>
                                    <Characteristic icon={faCheck}>Uso opcional de biometria</Characteristic>
                                    <Characteristic icon={faCheck}>Controle de mensalistas</Characteristic>
                                    <Characteristic icon={faCheck}>Captura de imagens via câmera e scanners</Characteristic>
                                    <Characteristic icon={faCheck}>Índices dos livros de escritura e procuração</Characteristic>
                                    <Characteristic icon={faCheck}>Comunicação com a CENSEC</Characteristic>
                                    <Characteristic icon={faCheck}>Integração com sistema Ocian Diário</Characteristic>
                                    <Characteristic icon={faCheck}>Comunicação com o sistema DOI</Characteristic>
                                    <Characteristic icon={faCheck}>Orçamento de serviços com opção de protocolo</Characteristic>
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