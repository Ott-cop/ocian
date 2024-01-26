import { Container } from "@/components/Container";
import Image from "next/image";
import Service from "./Service";
import { faBookOpen, faCloudArrowDown, faFileExport, faFilePowerpoint, faFileShield, faFileSignature, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function SectionSystem() {
    return(
        <>     
        <section className="section-services flex w-full h-[100vh] bg-[#E6F3FC]">
        <Container>
            <div className="w-full relative mt-[130px] justify-center">
                <div className="block justify-center hiddenable">
                    <div className="flex relative justify-center w-full mb-6 ">
                        <div className="text-width w-[1000px]">
                            <h2 className="title-service text-[40px] font-medium text-center mb-2">NOSSO <span className="text-primary-color">SISTEMA</span></h2>
                            <p className="paragraph-AboutUs text-[20px] text-left mb-14">
                                        Os sistemas são desenvolvidos para seguir todas as normas aplicadas e também para que atenda as particularidades de cada serventia extrajudicial. Contudo, priorizamos entregar praticidade e alto desempenho, com rotinas simplificadas para otimizar o fluxo de serviço interno com dinamismo e segurança. Devido ao controle de acessos por usuários e registros de suas atividades, a parametrização e personalização de uso são agregadas; além disso, possuem <span className="text-primary-color">controle de caixa</span>, <span className="text-primary-color">controle financeiro</span>, <span className="text-primary-color">relatório de portal extrajudicial</span> e <span className="text-primary-color">CNJ</span> e <span className="text-primary-color">muito mais</span>.</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="flex flex-wrap w-[1000px] justify-center gap-8 rounded-[20px]">
                            <Link href={"#Imoveis"}>
                                <Service service={"Imóveis"} icon={faHome}></Service>
                            </Link>
                            <Link href={"#TDPJ"}>
                                <Service service={"TDPJ"} icon={faFileShield}></Service>
                            </Link>
                            <Link href={"#Notas"}>
                                <Service service={"Notas"} icon={faBookOpen}></Service>
                            </Link>
                            <Link href={"#Protesto"}>
                                <Service service={"Protesto"} icon={faFilePowerpoint}></Service>
                            </Link>
                            <Link href={"#Backup"}>
                                <Service service={"Backup"} icon={faCloudArrowDown}></Service>
                            </Link>
                            <Link href={"#GED"}>
                                <Service service={"GED"} icon={faFileSignature}></Service>
                            </Link>
                            <Link href={"#Distribuidor"}>
                                <Service service={"Distribuidor"} icon={faFileExport}></Service>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </section>
        </>
    );
}