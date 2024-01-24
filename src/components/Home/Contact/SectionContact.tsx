import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { faEnvelope, faMailBulk, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionContact() {
    return(
        <>
        <section className="flex flex-1 w-full h-[100vh] background-ContactBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="flex w-full justify-center">
                    <div className="w-full text-center mt-[200px]">
                        <h2 className="title-contact text-black text-[40px] font-medium mb-2">ENVIE UMA PROPOSTA</h2>
                        <p className="paragraph-contact text-black text-[20px] mb-10">Preencha o formulário abaixo ou ainda nos faça uma visita: Rua Rio Branco, 472 Barra Bonita-SP</p>
                        <div className="flex justify-center">
                            <div className="form px-[15px] w-[655px] justify-center py-5 rounded-[20px]" style={{boxShadow: "0 25px 50px 12px rgb(0 0 0 / 0.25)"}}>
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
                                        <div className="input-group pb-10">
                                            <input className="input ml-3" type="text" id="fmessage" placeholder="Sua mensagem bemmmm detalhada" />
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
    )
}