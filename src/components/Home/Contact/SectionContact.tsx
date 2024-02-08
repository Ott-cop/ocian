import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import SendForm from "@/pages/api/sendform";
import SwalResponseForm from "@/pages/api/swalresponse";
import Validate from "@/pages/api/validate";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SectionContact() {    
    let [buttonState, setButtonState] = useState(false);
    const schema = z.object({
        name: z.string().min(6, 'O campo nome precisa ter no minímo 6 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
        email: z.string().min(8, 'O campo precisa ter no minímo 8 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
        phone: z.string().min(8, 'O campo precisa ter no minímo 8 caracteres').max(20, 'O campo precisa ter no máximo 20 caracteres'),
        subject: z.string().min(6, 'O campo precisa ter no minímo 6 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
        message: z.string().min(6, 'O campo precisa ter no minímo 6 caracteres').max(500, 'O campo precisa ter no máximo 500 caracteres'),
    });

    type FormProps = z.infer<typeof schema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
        mode: 'all',
        resolver: zodResolver(schema)
    });


    const handleForms = (data: FormProps) => {
        console.log(data);

    };
    useEffect(() => {


    }, []);

    const submit = () => {

        let name_value = document.getElementById("fname") as HTMLInputElement;
        let email_value = document.getElementById("femail") as HTMLInputElement;
        let phone_value = document.getElementById("fphone") as HTMLInputElement;
        let subject_value = document.getElementById("fsubject") as HTMLInputElement;
        let message_value = document.getElementById("fmessage") as HTMLInputElement;

        let validate = Validate(name_value.value, errors.name?.message, email_value.value, errors.email?.message, phone_value.value, errors.phone?.message, subject_value.value, errors.subject?.message, message_value.value, errors.message?.message);

        if (validate == false) {
            return SwalResponseForm();
        }
        
        SendForm({form: "send_proposal", name: name_value, email: email_value, phone: phone_value, subject: subject_value, message: message_value});
    }
    
    return(
        <>
        <section className="section-contact flex flex-1 w-full py-[150px] background-ContactBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="flex w-full justify-center hiddenable">
                    <div className="w-full text-center">
                        <h2 className="title-contact text-black text-[40px] font-medium mb-2">ENVIE UMA PROPOSTA</h2>
                        <p className="paragraph-contact text-black text-[20px] mb-10">Preencha o formulário abaixo ou ainda nos faça uma visita:<br/><span className="font-semibold"> Rua Rio Branco, 472 Barra Bonita-SP</span></p>

                        <div className="flex justify-center">
                            <div className="form px-[15px] w-[655px] justify-center py-5 rounded-[20px]" style={{boxShadow: "0 25px 50px 12px rgb(0 0 0 / 0.25)"}}>
                                <form className="grid grid-cols-1 gap-3 mb-6" onSubmit={handleSubmit(handleForms)}>
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
                                            <textarea className="input ml-3" id="fmessage" rows={6} maxLength={500} placeholder="Digite a mensagem explicando sua proposta" {... register("message")} />
                                        </div>
                                    </div>
                                    {errors.name?.message && (<p className="contact-message">* {errors.name.message}</p>)}
                                    {errors.email?.message && (<p className="contact-message">* {errors.email.message}</p>)}
                                    {errors.phone?.message && (<p className="contact-message">* {errors.phone.message}</p>)}
                                    {errors.subject?.message && (<p className="contact-message">* {errors.subject.message}</p>)}
                                    {errors.message?.message && (<p className="contact-message">* {errors.message.message}</p>)}

                                </form>
                                <div className="flex w-full justify-center">
                                    <Button click={submit}>ENVIAR</Button>
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