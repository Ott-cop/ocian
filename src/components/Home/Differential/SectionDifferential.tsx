import { Container } from "@/components/Container";
import "@/styles/Home/styles.module.css";
import Benefits from "./Benefits";
import { faAnglesUp, faCloud, faCloudArrowDown, faHandHoldingDollar, faHandPointer, faHeadset, faListCheck, faPersonChalkboard, faRightLeft } from "@fortawesome/free-solid-svg-icons";

export default function SectionDifferential() {
    return (
        <>
        <section className="flex flex-1 w-full h-[100vh] background-DifferentialBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="differential-section flex w-full justify-start">
                    <div className="flex-1 max-w-[620px] w-full mt-[100px]">
                        <h2 className="title-differential text-[40px] font-medium mb-2">DIFERENCIAIS</h2>
                        <p className="paragraph-differential text-[20px] mb-10">Os sistemas <span className="text-primary-color">Ocian</span> foram desenvolvidos para atender necessidades cartorárias reais, com métodos que facilitam a execução das tarefas, <span className="text-primary-color">economizando tempo</span>, <span className="text-primary-color">diminuindo</span> o <span className="text-primary-color">desgaste</span> dos operadores, <span className="text-primary-color">otimiza</span> o fluxo de serviço interno, <span className="text-primary-color">melhorando</span> os processos e oferecendo <span className="text-primary-color">segurança</span>. Confira o que seu cartório ganhará com nossos sistemas:
                        </p>
                        <div className="benefits flex justify-center items-center w-full h-[380px] border-primary-color rounded-[20px] shadow-2xl">
                            <div className="benefits-grid grid grid-cols-2 gap-5 m-8">
                                <Benefits icon={faHeadset}>Suporte pessoal e especializado.</Benefits>
                                <Benefits icon={faPersonChalkboard}>Programa de treinamento ao cliente.</Benefits>
                                <Benefits icon={faCloudArrowDown}>Backup gerenciado para prevenção e segurança.</Benefits>
                                <Benefits icon={faAnglesUp}>Melhorias e atualizações contínuas.</Benefits>
                                <Benefits icon={faListCheck}>Gerenciamento total  dos processos registrais.</Benefits>
                                <Benefits icon={faRightLeft}>Comunicação integrada com as entidades de classe.</Benefits>
                                <Benefits icon={faHandHoldingDollar}>Baixo investimento.</Benefits>
                                <Benefits icon={faHandPointer}>Facilidade de uso.</Benefits>
                            </div>
                        </div>

   
                    </div>

                </div>

            </Container>
        </section>
        </>
    )
}