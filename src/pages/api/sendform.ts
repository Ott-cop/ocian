type Form = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

export default async function SendForm({name, email, phone, subject, message}: Form) {
    const response = fetch("https://ocian-backend.onrender.com/send_support", {
        mode: 'cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
            "phone": phone,
            "subject": subject,
            "message": message
        })
    }).then((data) => {
        console.log(data);
    });
}