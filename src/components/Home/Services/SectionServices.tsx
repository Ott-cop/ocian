import { faBookOpen, faCloudArrowDown, faFileExport, faFilePowerpoint, faFileShield, faFileSignature, faHome } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useEffect } from "react";
import "@/styles/Home/styles.module.css";
import Link from "next/link";

export default function SectionServices() {

    return (
        <>
        <section className="section-services flex w-full pb-[100px] bg-[#E6F3FC]">
        <Container>
            <div className="w-full relative mt-[130px] justify-center">
                <div className="block justify-center hiddenable">
                    <div className="flex relative justify-center w-full mb-6 ">
                        <div className="text-width w-[1000px]">
                            <h2 className="title-service text-[40px] font-medium text-center mb-2">UM SISTEMA COMPLETO PARA A <span className="text-primary-color">GESTÃO</span> DO SEU CARTÓRIO</h2>
                            <p className="paragraph-service text-[20px] text-center mb-14">Oferecemos sistemas de gerenciamento com soluções inteligentes, seguras e de fácil operabilidade.
                                E priorizamos sempre a eficácia no atendimento, seja no suporte técnico, implantação ou monitoramento.</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="flex flex-wrap w-[1000px] justify-center gap-8 rounded-[20px]">
                                <Link href={"/system/#Imoveis"}>
                                    <Service service={"Imóveis"} icon={faHome}></Service>
                                </Link>
                                <Link href={"/system/#TDPJ"}>
                                    <Service service={"TDPJ"} icon={faFileShield}></Service>
                                </Link>
                                <Link href={"/system/#Notas"}>
                                    <Service service={"Notas"} icon={faBookOpen}></Service>
                                </Link>
                                <Link href={"/system/#Protesto"}>
                                    <Service service={"Protesto"} icon={faFilePowerpoint}></Service>
                                </Link>
                                <Link href={"/system/#Backup"}>
                                    <Service service={"Backup"} icon={faCloudArrowDown}></Service>
                                </Link>
                                <Link href={"/system/#GED"}>
                                    <Service service={"GED"} icon={faFileSignature}></Service>
                                </Link>
                                <Link href={"/system/#Distribuidor"}>
                                    <Service service={"Distribuidor"} icon={faFileExport}></Service>
                                </Link>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mt-20">
                        <Link href={"/system"}>
                            <Button>SAIBA MAIS</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
        </section>
        </>
    )
}