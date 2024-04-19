import Swal from "sweetalert2";
import "@/styles/Home/styles.module.css"

type Form = {
    form: string,
    name: HTMLInputElement,
    email: HTMLInputElement,
    phone: HTMLInputElement,
    subject: HTMLInputElement,
    message: HTMLInputElement
}

export default async function SendForm({form, name, email, phone, subject, message}: Form) {

    Swal.fire({
        title: "Em processamento...",
        buttonsStyling: false,
        confirmButtonText: "FECHAR",
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
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "name": name.value,
                    "email": email.value,
                    "phone": phone.value,
                    "subject": subject.value,
                    "message": message.value
                })
            });

            Swal.hideLoading();

            if (response.status === 200) {
                Swal.update({icon: "success", title: "Seu formulário foi enviado com sucesso!"});

                name.value = "";
                email.value = "";
                phone.value = "";
                subject.value = "";
                message.value = "";

            } else if (response.status === 400) {
                Swal.update({icon: "error", title: "Houve algum problema com o formulário... Tente novamente."});

            } else {
                Swal.update({icon: "error", title: "Houve algum problema ao enviar o formulário. Tente novamente ou mais tarde."});
            }
            
          }
        });
}