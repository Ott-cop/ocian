import { Container } from "@/components/Container";
import Image from "next/image";
import Service from "./Service";
import { faBookOpen, faCloudArrowDown, faFileExport, faFilePowerpoint, faFileShield, faFileSignature, faHome } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
import { Link } from "react-scroll";


export default function SectionSystem(this: any) {
    return(
        <>     
        <section className="section-services flex w-full pb-[100px] bg-[#E6F3FC]">
        <Container>
            <div className="w-full relative mt-[80px] justify-center">
                <div className="block justify-center hiddenable">
                    <div className="flex relative justify-center w-full mb-6 ">
                        <div className="text-width w-[1000px] justify-center">
                            <h2 className="title-service text-[40px] font-medium text-center mb-2">NOSSO <span className="text-primary-color">SISTEMA</span></h2>
                            <div className="flex justify-center">
                                <p id="system-paragraph" className="paragraph-AboutUs text-[20px] text-center mb-14">
                                            Os sistemas são desenvolvidos para seguir todas as normas aplicadas e também para que atenda as particularidades de cada serventia extrajudicial. Contudo, priorizamos entregar praticidade e alto desempenho, com rotinas simplificadas para otimizar o fluxo de serviço interno com dinamismo e segurança. Devido ao controle de acessos por usuários e registros de suas atividades, a parametrização e personalização de uso são agregadas; além disso, possuem <span className="text-primary-color">controle de caixa</span>, <span className="text-primary-color">controle financeiro</span>, <span className="text-primary-color">relatório de portal extrajudicial</span> e <span className="text-primary-color">CNJ</span> e <span className="text-primary-color">muito mais</span>.</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="flex flex-wrap w-[1000px] justify-center gap-8 rounded-[20px]">
                            <Link to="Imoveis" smooth={true} offset={50} duration={500} className="cursor-pointer">
                                <Service service={"Imóveis"} icon={faHome}></Service>
                            </Link>
                            <Link to="TDPJ" smooth={true} offset={50} duration={500} className="cursor-pointer">
                                <Service service={"TDPJ"} icon={faFileShield}></Service>
                            </Link>
                            <Link to="Notas" smooth={true} offset={50} duration={500} className="cursor-pointer">
                                <Service service={"Notas"} icon={faBookOpen}></Service>
                            </Link>
                            <Link to="Protesto" smooth={true} offset={50} duration={500} className="cursor-pointer">
                                <Service service={"Protesto"} icon={faFilePowerpoint}></Service>
                            </Link>
                            <Link to="Backup" smooth={true} offset={50} duration={500} className="cursor-pointer">
                                <Service service={"Backup"} icon={faCloudArrowDown}></Service>
                            </Link>
                            <Link to="GED" smooth={true} offset={50} duration={500} className="cursor-pointer">
                                <Service service={"GED"} icon={faFileSignature}></Service>
                            </Link>
                            <Link to="Distribuidor" smooth={true} offset={50} duration={500} className="cursor-pointer">
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