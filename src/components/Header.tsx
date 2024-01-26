import Link from 'next/link';
import Logo from '@/assets/logo/logo.png'
import Image from 'next/image'
import { ItemMenu } from './ItemMenu'
import "@/styles/Header/style.module.css"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeadset, faXmark } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const [isScroll, setisScroll] = useState<boolean>(false);
    const [isVisible, setMenuIsVisible] = useState(false);
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setisScroll(true);
        } else if (window.scrollY === 0) {
            setisScroll(false);
        }
        console.log(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollTo = (id: string) => {
        var my_element = document.getElementById(id);
        setMenuIsVisible(false);
        my_element?.scrollIntoView({
        block: "start",
        inline: "nearest"
        });
    }

    return(
        <>
        <header className={`flex flex-1 z-40 fixed items-center w-full m-0 pb-[10px] justify-center duration-500 ${isScroll ? 'header-scrolled' : ''}`}>
            <div className="w-full max-w-[1246px] px-[15px] mt-[10px] mx-auto">
                <div className={`menu flex flex-1 items-center justify-center gap-10`}>
                    <div className="w-full items-center justify-center gap-80">
                        <div className='flex logo-align'>
                            <Image src={Logo} alt={'Ocian Logo'} className='logo w-[130px]'></Image>
                        </div>
                        
                    </div>
                    <ul className='flex items-center justify-center gap-10 responsive-header'>
                        <li>
                            <Link href={"/"}>
                                <ItemMenu name={"Home"}></ItemMenu>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/about-us"}>
                                <ItemMenu name={"Quem Somos"} padding={"w-[100px]"}></ItemMenu>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/system"}>
                                <ItemMenu name={"Sistemas"}></ItemMenu>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact"}>
                                <ItemMenu name={"Contato"}></ItemMenu>
                            </Link>
                        </li>
                    </ul>
                    <Link href={"/support"}>
                        <button className="contact change-icon-menu flex items-center justify-center gap-3 bg-primary-color hover:bg-transparent rounded-[30px] h-12 pl-6 pr-6 border-solid border-2 border-primary-color hover:border-primary-color duration-300">
                                <i className='change-text-menu' style={{fontSize: "20px", color: "white"}}><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></i>
                                <span className="change-text-menu font-black tracking-wider text-[17px]">SUPORTE</span>
                        </button>
                    </Link>
                </div>
                
            </div>
        </header>
    <div className={`container-menu flex-1 z-40 fixed items-center w-full m-0 pb-[10px] justify-center transition-all flex duration-700 ${isVisible ? '!flex' : '!hidden'}`}>
        <nav className='flex flex-col gap-8'>
            <i className="hamburguer transition-all duration-700" onClick={() => setMenuIsVisible(false)}><FontAwesomeIcon icon={faXmark} style={{color: "#02b3ee", fontSize: "20px"}}></FontAwesomeIcon></i>
            
            <Link href={"/"} className='justify-center flex'>
                <ItemMenu name={"Home"} />
            </Link>
            <Link href={"/about-us"} className='justify-center flex'>
                <ItemMenu name={"Quem Somos"} />
            </Link>
            <Link href={"/system"} className='justify-center flex'>
                <ItemMenu name={"Sistemas"} />
            </Link>
            <Link href={"/contact"} className='justify-center flex'>
                <ItemMenu name={"Contato"} />
            </Link>
            <Link href={"/support"} className='justify-center flex'>
            <button className="change-icon-menu flex items-center justify-center gap-3 bg-primary-color hover:bg-transparent rounded-[30px] h-12 pl-6 pr-6 border-solid border-2 border-primary-color hover:border-primary-color duration-300">
                    <i className='change-text-menu' style={{fontSize: "20px", color: "white"}}><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></i>
                    <span className="change-text-menu font-black tracking-wider text-[17px]">SUPORTE</span>
            </button>
            </Link>
            
        </nav>
    </div>
    <i className="hamburguer flex fixed" onClick={() => setMenuIsVisible(true)}><FontAwesomeIcon icon={faBars} style={{color: "#02b3ee", fontSize: "20px"}}></FontAwesomeIcon></i>
    </>
    );
}