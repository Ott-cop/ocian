import { faBookOpen, faCloudArrowDown, faFileExport, faFilePowerpoint, faFileShield, faFileSignature, faHome } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function SectionServices() {
    return (
        <>
        <section className="flex w-full h-[90vh] bg-[#E6F3FC]">
        <Container>
            <div className="flex flex-wrap w-full relative mt-[130px] justify-center">
                <div className="block justify-center">
                    <div className="flex relative justify-center w-full mb-6 ">
                        <div className="w-[1000px]">
                            <h2 className="text-[40px] font-medium text-center mb-2">UM SISTEMA COMPLETO PARA A <span className="text-primary-color">GESTÃO</span> DO SEU CARTÓRIO</h2>
                            <p className="text-[20px] text-center mb-14">Oferecemos sistemas de gerenciamento com soluções inteligentes, seguras e de fácil operabilidade.
                                E priorizamos sempre a eficácia no atendimento, seja no suporte técnico, implantação ou monitoramento.</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="grid grid-cols-7 w-[1000px] justify-center gap-8 rounded-[20px]">
                                <Service service={"Imóveis"} icon={faHome}></Service>
                                <Service service={"TDPJ"} icon={faFileShield}></Service>
                                <Service service={"Notas"} icon={faBookOpen}></Service>
                                <Service service={"Protesto"} icon={faFilePowerpoint}></Service>
                                <Service service={"Backup"} icon={faCloudArrowDown}></Service>
                                <Service service={"GED"} icon={faFileSignature}></Service>
                                <Service service={"Distribuidor"} icon={faFileExport}></Service>
                        </div>
                    </div>
                    <div className="flex w-full justify-center mt-20">
                        <Button>SAIBA MAIS</Button>
                    </div>
                    
                </div>
                
                
            </div>
        </Container>
        </section>
        </>
    )
}