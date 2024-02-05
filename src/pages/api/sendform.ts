import { icon } from "@fortawesome/fontawesome-svg-core";
import { title } from "process";
import Swal from "sweetalert2";
import "@/styles/Home/styles.module.css"

type Form = {
    form: string,
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

export default async function SendForm({form, name, email, phone, subject, message}: Form) {

    Swal.fire({
        title: "Em processamento...",
        buttonsStyling: false,
        confirmButtonText: "Fechar",
        customClass: {
            confirmButton: "button-style",
            title: "popup-text",
        },
        didOpen: async () => {
            Swal.showLoading();
            let response = await fetch(`https://ocian-backend.onrender.com/${form}`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "phone": phone,
                    "subject": subject,
                    "message": message
                })
            });

            Swal.hideLoading();

            if (response.status === 200) {
                Swal.update({icon: "success", title: "Seu formulário foi enviado com sucesso!"});

            } else if (response.status === 400) {
                Swal.update({icon: "error", title: "Houve algum problema com o formulário... Tente novamente."});

            } else {
                Swal.update({icon: "error", title: "Houve algum problema ao enviar o formulário. Tente novamente ou mais tarde."});
            }
          }
        });
}