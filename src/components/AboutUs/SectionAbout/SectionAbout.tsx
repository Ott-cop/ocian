import { Container } from "@/components/Container";
import AboutImage from "@/assets/pages/AboutUs/ocian-enterprise.jpg";
import Image from "next/image";
import "@/styles/AboutUs/styles.module.css";

export default function SectionAbout() {
    return (
        <>
        <section className="section-about flex w-full py-[100px] items-center bg-[#E6F3FC]">
            <Container>
                <div className="flex justify-center w-full items-center">
                    <div className="align-contents w-full justify-center flex ">
                        <div className="flex justify-center mb-9">
                            <div className="text-width-AboutUs hiddenable">
                                <div className="w-full justify-center">
                                
                                    <h2 className="title-AboutUs text-[40px] font-medium text-left mb-3">NOSSA <span className="text-primary-color">EMPRESA</span></h2>
                                    <div className="line block w-full justify-center">
                                        <hr className="border-[1px] border-primary-color w-[230px] mb-4"/>
                                    </div>
                                    

                                    <p className="paragraph-AboutUs text-[20px] text-left mb-14">Desde 1995, a <span className="text-primary-color">Ocian</span> oferece sistemas de gerenciamento com soluções <span className="text-primary-color">inteligentes</span>, <span className="text-primary-color">seguras</span> e de <span className="text-primary-color">fácil operabilidade</span>. Mais que segurança para os seus dados, é  <span className="text-primary-color">controle total</span> sobre eles. A preocupação vai muito além de oferecer soluções, nosso foco é proporcionar um ciclo de interação com as necessidades dos clientes, priorizando acima de tudo a sua satisfação. Por isso, trabalhamos com eficácia no atendimento, seja no suporte técnico, implantação ou monitoramento, seguindo as determinações e recomendações do Conselho Nacional de Justiça (CNJ) e da Corregedoria Geral da Justiça (CGJ).Compromisso, Confiança, Conhecimento, Segurança, Honestidade e acima de tudo, Gratidão. Estes são os valores que regem a Ocian.</p>
                                    

                                </div>
                            </div>
                        </div>
   
                        <div className="align-about-image flex justify-end w-full">
                            <div className="section-about-image ml-16 w-[600px] duration-500 focus:translate-x-11">
                                <Image src={AboutImage} alt="About Us" className="rounded-2xl shadow-2xl duration-500"></Image>
                            </div>
                        </div>
                    </div>

                </div>
                
                

            </Container>
        </section>
        </>
    );
}