import Swal from "sweetalert2";

type Form = {
    form: string,
    name: HTMLInputElement,
    email: HTMLInputElement,
    phone: HTMLInputElement,
    file: HTMLInputElement,
    message: HTMLInputElement
}

export default async function SendFormCurriculum({form, name, email, phone, file, message}: Form) {
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("file", file.files![0]);
    formData.append("message", message.value);

    Swal.fire({
        title: "Em processamento...",
        buttonsStyling: false,
        confirmButtonText: "FECHAR",
        customClass: {
            container: "containerzin",
            confirmButton: "button-style",
            title: "popup-text",
        },
        didOpen: async () => {
            Swal.showLoading();
            // let response = await fetch(`http://127.0.0.1:8080/${form}`, {
            let response = await fetch(`https://ocian-backend.onrender.com/${form}`, {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: formData
            });

            Swal.hideLoading();

            if (response.status === 200) {
                Swal.update({icon: "success", title: "Seu formulário foi enviado com sucesso!"});
                
                name.value = "";
                email.value = "";
                phone.value = "";
                file.value = "";
                message.value = "";

            } else if (response.status === 400) {
                Swal.update({icon: "error", title: "Houve algum problema com o formulário... Tente novamente."});
                

            } else {
                Swal.update({icon: "error", title: "Houve algum problema ao enviar o formulário. Tente novamente ou mais tarde."});
                console.log(response);
            }
            
          }
        });
}