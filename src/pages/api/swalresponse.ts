import Swal from "sweetalert2";

export default function SwalResponseForm() {
    
    Swal.fire({
        title: "Por favor, complete todos os campos corretamente!",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "FECHAR",
        customClass: {
            confirmButton: "button-style",
            title: "popup-text",
        },
    });
    
    
}