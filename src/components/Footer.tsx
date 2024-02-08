import Image from "next/image";
import Logo from "@/assets/logo/logo.png";
import "@/styles/Footer/style.module.css";

export default function Footer() {
    return (
        <footer className="w-full background-Footer-overlay pb-[10px] pt-[10px]">
            <div className="flex w-full h-[150px] max-w-[1246px] mx-auto items-center justify-center text-center">
                <div className="justify-center">
                    <div className="flex justify-center mb-5">
                        <Image src={Logo} alt="Ocian Logo" style={{width: "100px"}}></Image>
                    </div>
                    <span className="text-[20px]">Todos os direitos reservados &copy;<span className="text-primary-color">Ocian</span></span>
                </div>        
            </div>
        </footer>
    );
}