import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "@/assets/pages/Support/Team.png";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SendForm from "@/pages/api/sendform";
import Validate from "@/pages/api/validate";
import SwalResponseForm from "@/pages/api/swalresponse";

export default function SectionSupport() {
    const schema = z.object({
        name: z.string().min(6, 'O campo nome precisa ter no minímo 6 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
        email: z.string().min(8, 'O campo email precisa ter no minímo 8 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
        phone: z.string().min(8, 'O campo telefone precisa ter no minímo 8 caracteres').max(20, 'O campo precisa ter no máximo 20 caracteres'),
        subject: z.string().min(6, 'O campo assunto precisa ter no minímo 6 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
        message: z.string().min(6, 'O campo mensagem precisa ter no minímo 6 caracteres').max(500, 'O campo precisa ter no máximo 500 caracteres'),
    });

    type FormProps = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        mode: 'all',
        resolver: zodResolver(schema)
    });

    const submit_support = () => {
        console.log("Cliquei!");
        let name_value = document.getElementById("fname") as HTMLInputElement;
        let email_value = document.getElementById("femail") as HTMLInputElement;
        let phone_value = document.getElementById("fphone") as HTMLInputElement;
        let subject_value = document.getElementById("fsubject") as HTMLInputElement;
        let message_value = document.getElementById("fmessage") as HTMLInputElement;
        
        let validate = Validate(name_value.value, errors.name?.message, email_value.value, errors.email?.message, phone_value.value, errors.phone?.message, subject_value.value, errors.subject?.message, message_value.value, errors.message?.message);

        if (validate == false) {
            return SwalResponseForm();
        }

        SendForm({form: "send_support", name: name_value, email: email_value, phone: phone_value, subject: subject_value, message: message_value});
    }
    return(
        <>
        <section className="section-support flex flex-1 w-full pb-[300px] items-center background-ContactSectionBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="flex w-full justify-center hiddenable">
                    <div className="section-support-contact flex w-full text-left gap-10">
                        <div className="mb-[100px]">
                            <h2 className="title-contact text-black text-[40px] font-medium mb-2">PRECISA DE AJUDA? ENTRE EM CONTATO COM O <span className="text-primary-color">SUPORTE!</span></h2>
                            <p className="paragraph-contact text-black text-[20px] mb-10">Trabalhamos para atender as suas solicitações ou eventualidades cartorárias. Para qualquer questão de suporte técnico, preencha o formulário ao lado e nos mande uma mensagem.</p>
                            <p className="paragraph-contact text-black text-[20px] mb-10">Tel.: <span className="text-[30px] font-medium text-primary-color"> (14) 3642-0700 </span></p>
                            <Link href={"https://download.teamviewer.com/download/TeamViewerQS.exe"} className="teamviewer">
                                <Image src={Team} alt="TeamViewer" width={200}></Image>
                            </Link>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="form px-[15px] w-[655px] justify-center py-5 rounded-[20px]" style={{boxShadow: "0 25px 50px 12px rgb(0 0 0 / 0.25)"}}>
                                <form className="grid grid-cols-1 gap-3 mb-6">
                                    <div className="form-contact grid grid-cols-3 gap-3">                                
                                        <div className={`input-group ${errors.name?.message ? 'input-error' : '' }`}>
                                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></i>
                                            <input className="input" type="text" id="fname" placeholder="Seu nome" {... register("name")} />
                                        </div>
                                        <div className={`input-group ${errors.email?.message ? 'input-error' : '' }`}>
                                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                                            <input className="input" type="email" id="femail" placeholder="Seu email" {... register("email")} />
                                        </div>
                                        <div className={`input-group ${errors.phone?.message ? 'input-error' : '' }`}>
                                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></i>
                                            <input className="input" type="phone" id="fphone" placeholder="Telefone" {... register("phone")} />
                                        </div>
                                    </div>
                                    <div className="grid gap-3">
                                        <div className={`input-group ${errors.subject?.message ? 'input-error' : '' }`}>            
                                            <input className="input ml-3" type="text" id="fsubject" placeholder="Assunto a tratar" {... register("subject")} />
                                        </div>
                                        <div className={`input-group ${errors.message?.message ? 'input-error' : '' }`}>
                                            <textarea className="input ml-3" id="fmessage" rows={6} maxLength={500} placeholder="Como a Ocian pode te ajudar?" {... register("message")} />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div>
                                            {errors.name?.message && (<p className="contact-message">* {errors.name.message}</p>)}
                                            {errors.email?.message && (<p className="contact-message">* {errors.email.message}</p>)}
                                            {errors.phone?.message && (<p className="contact-message">* {errors.phone.message}</p>)}
                                            {errors.subject?.message && (<p className="contact-message">* {errors.subject.message}</p>)}
                                            {errors.message?.message && (<p className="contact-message">* {errors.message.message}</p>)}
                                        </div>

                                    </div>

                                </form>
                                <div className="flex w-full justify-center">
                                    <Button click={submit_support}>ENVIAR</Button>
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