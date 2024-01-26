import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "@/assets/pages/Support/Team.png";
import Image from "next/image";
import Link from "next/link";

export default function SectionSupport() {
    return(
        <>
        <section className="section-support flex flex-1 w-full h-[100vh] background-ContactSectionBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="flex w-full justify-center hiddenable">
                    <div className="section-support-contact flex w-full text-left gap-10 mt-[200px]">
                        <div className="mb-[100px]">
                            <h2 className="title-contact text-black text-[40px] font-medium mb-2">PRECISA DE AJUDA? ENTRE EM CONTATO COM O <span className="text-primary-color">SUPORTE!</span></h2>
                            <p className="paragraph-contact text-black text-[20px] mb-10">Trabalhamos para atender as suas solicitações ou eventualidades cartorárias. Para qualquer questão de suporte técnico, preencha o formulário ao lado e nos mande uma mensagem.</p>
                            <p className="paragraph-contact text-black text-[20px] mb-10">Tel.: <span className="text-[30px] font-medium text-primary-color"> (14) 3642-0700 </span></p>
                            <Link href={"https://download.teamviewer.com/download/TeamViewerQS.exe"} className="teamviewer">
                                <Image src={Team} alt="TeamViewer" width={200}></Image>
                            </Link>
                        </div>

                        <div className="flex justify-center">
                            <div className="form-support px-[15px] w-[655px] h-[410px] justify-center py-5 rounded-[20px]" style={{boxShadow: "0 25px 50px 12px rgb(0 0 0 / 0.25)"}}>
                                <form className="grid grid-cols-1 gap-3 mb-6">
                                    <div className="form-contact grid grid-cols-3 gap-3">                                
                                        <div className="input-group">
                                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></i>
                                            <input className="input" type="text" id="fname" placeholder="Seu nome" />
                                        </div>
                                        <div className="input-group">
                                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                                            <input className="input" type="email" id="femail" placeholder="Seu email" />
                                        </div>
                                        <div className="input-group">
                                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></i>
                                            <input className="input" type="phone" id="fphone" placeholder="Telefone" />
                                        </div>
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="input-group">            
                                            <input className="input ml-3" type="text" id="fsubject" placeholder="Assunto a tratar" />
                                        </div>
                                        <div className="input-group">
                                            <textarea className="input ml-3" id="fmessage" rows={6} maxLength={500} placeholder="Sua mensagem bemmmm detalhada" />
                                        </div>
                                    </div>

                                </form>
                                <div className="flex w-full justify-center">
                                    <Button>ENVIAR</Button>
                                </div>
                                
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </section>
        </>
    );
}