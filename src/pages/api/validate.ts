


export default function Validate(
                                name: string,
                                e_name: string | undefined,
                                email: string,
                                e_email: string | undefined, 
                                phone: string,
                                e_phone: string | undefined,
                                subject_or_file: string,
                                e_subject_or_file: string | undefined,
                                message: string,
                                e_message: string | undefined,
                                ) {
    if (( name.length <= 0 || e_name ) || 
        ( email.length <= 0 || e_email ) || 
        ( phone.length <= 0 || e_phone ) || 
        ( subject_or_file.length <= 0  || e_subject_or_file ) || 
        ( message.length <= 0 || e_message ) ) {
            
        return false;
    }
    return true;
}