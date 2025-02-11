import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import SendForm from "@/pages/api/sendform";
import SendFormCurriculum from "@/pages/api/sendformcurriculum";
import SwalResponseForm from "@/pages/api/swalresponse";
import Validate from "@/pages/api/validate";
import { faEnvelope, faMailBulk, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";



export default function SectionContact() {
    const Form1 = () => {
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
    
    
        const handleForms = (data: FormProps) => {
            console.log(data);
        }

        const submit_contact_us = () => {
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

            SendForm({form: "send_contact_us", name: name_value, email: email_value, phone: phone_value, subject: subject_value, message: message_value});
        }

        return(
            <>
                <form id="grid1" className="grid grid-cols-1 gap-3 mb-6" onSubmit={handleSubmit(handleForms)}>
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
                            <textarea className="input ml-3" id="fmessage" rows={6} maxLength={500} placeholder="Digite sua mensagem aqui" {... register("message")} />
                        </div>
                    </div>
                    {errors.name?.message && (<p className="contact-message">* {errors.name.message}</p>)}
                    {errors.email?.message && (<p className="contact-message">* {errors.email.message}</p>)}
                    {errors.phone?.message && (<p className="contact-message">* {errors.phone.message}</p>)}
                    {errors.subject?.message && (<p className="contact-message">* {errors.subject.message}</p>)}
                    {errors.message?.message && (<p className="contact-message">* {errors.message.message}</p>)}
                </form>
                <div className="flex w-full justify-center">
                    <Button click={submit_contact_us}>ENVIAR</Button>
                </div>
            </>
        );
    }

    const Form2 = () => {
        const schema = z.object({
            name: z.string().min(6, 'O campo nome precisa ter no minímo 6 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
            email: z.string().min(8, 'O campo email precisa ter no minímo 8 caracteres').max(50, 'O campo precisa ter no máximo 50 caracteres'),
            phone: z.string().min(8, 'O campo telefone precisa ter no minímo 8 caracteres').max(20, 'O campo precisa ter no máximo 20 caracteres'),
            message: z.string().min(6, 'O campo mensagem precisa ter no minímo 6 caracteres').max(500, 'O campo precisa ter no máximo 500 caracteres'),
        });
    
        type FormProps = z.infer<typeof schema>;
    
        const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
            mode: 'all',
            resolver: zodResolver(schema)
        });
    
    
        const handleForms = (data: FormProps) => {
            console.log(data);
        }

        const submitWorkWithUs = () => {
            let name_value = document.getElementById("f2name") as HTMLInputElement;
            let email_value = document.getElementById("f2email") as HTMLInputElement;
            let phone_value = document.getElementById("f2phone") as HTMLInputElement;
            let file_value = document.getElementById("f2file") as HTMLInputElement;
            let message_value = document.getElementById("f2message") as HTMLInputElement;

            let validate = Validate(name_value.value, errors.name?.message, email_value.value, errors.email?.message, phone_value.value, errors.phone?.message, file_value.value, undefined, message_value.value, errors.message?.message);

            if (validate == false) {
                return SwalResponseForm();
            }
            
            SendFormCurriculum({form: "send_work_with_us", name: name_value, email: email_value, phone: phone_value, file: file_value, message: message_value});
        };
        

        return(
            <>
                <form id="grid2" className="grid grid-cols-1 gap-3 mb-6" onSubmit={handleSubmit(handleForms)}>
                    <div className="form-contact grid grid-cols-3 gap-3">                                
                        <div className={`input-group ${errors.name?.message ? 'input-error' : '' }`}>
                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></i>
                            <input className="input" type="text" id="f2name" placeholder="Seu nome" {... register("name")} />
                        </div>
                        <div className={`input-group ${errors.email?.message ? 'input-error' : '' }`}>
                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                            <input className="input" type="email" id="f2email" placeholder="Seu email" {... register("email")} />
                        </div>
                        <div className={`input-group ${errors.phone?.message ? 'input-error' : '' }`}>
                            <i className="ml-3 text-primary-color"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></i>
                            <input className="input" type="phone" id="f2phone" placeholder="Telefone" {... register("phone")} />
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div>         
                            <input className="input ml-3" name="file" type="file" accept=".pdf, .doc, .docx" id="f2file" size={20} style={{color:  "#9CA3AF"}} />
                        </div>
                        <div className={`input-group ${errors.message?.message ? 'input-error' : '' }`}>
                            <textarea className="input ml-3" id="f2message" rows={6} maxLength={500} placeholder="Explique sobre você" {... register("message")} />
                        </div>
                    </div>
                    {errors.name?.message && (<p className="contact-message">* {errors.name.message}</p>)}
                    {errors.email?.message && (<p className="contact-message">* {errors.email.message}</p>)}
                    {errors.phone?.message && (<p className="contact-message">* {errors.phone.message}</p>)}
                    {errors.message?.message && (<p className="contact-message">* {errors.message.message}</p>)}
                </form>
                <div className="flex w-full justify-center">
                    <Button click={submitWorkWithUs}>ENVIAR</Button>
                </div>   
            </>
        );
    }
    

    return(
        <>
        <section className="contact-section flex flex-1 w-full h-[1200px] background-ContactBanner-overlay bg-no-repeat bg-cover">
            <Container>
                <div className="flex w-full justify-center hiddenable">
                    <div className="contact-alignment justify-center flex gap-[100px] items-center w-full text-center">
                        <div className="contact-form">
                            <h2 className="title-contact text-black text-[40px] font-medium mb-2"><span className="text-primary-color">FALE</span> CONOSCO</h2>
                            <p className="paragraph-contact text-black text-[20px] mb-10">Preencha o formulário abaixo para nos enviar um e-mail ou entre em contato pelo telefone<br/><span className="font-semibold text-primary-color"> (14) 3642-0700</span></p>
                            <div className="flex justify-center">
                                <div className="form px-[15px] w-[655px] justify-center py-5 rounded-[20px]" style={{boxShadow: "0 25px 50px 12px rgb(0 0 0 / 0.25)"}}>
                                    <Form1></Form1>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h2 className="title-contact text-black text-[40px] font-medium mb-2"><span className="text-primary-color">TRABALHE</span> CONOSCO</h2>
                            <p className="paragraph-contact text-black text-[20px] mb-10">Venha fazer parte desta equipe que trabalha para potencializar o sistema cartorário paulista. Seja um <span className="font-semibold text-primary-color">colaborador.</span></p>
                            <div className="flex justify-center">
                                <div className="form px-[15px] w-[655px] justify-center py-5 rounded-[20px]" style={{boxShadow: "0 25px 50px 12px rgb(0 0 0 / 0.25)"}}>
                                    <Form2></Form2>
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