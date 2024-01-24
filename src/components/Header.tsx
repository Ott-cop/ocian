
import Logo from '@/assets/logo/logo.png'
import Image from 'next/image'
import IconSupport from '@/assets/icons/support-white.png'
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
                <div className={`flex flex-1 items-center justify-center gap-10 `}>
                    <div className="w-full items-center justify-center gap-80">
                        <div className='flex logo-align'>
                            <Image src={Logo} alt={'Ocian Logo'} className='logo w-[130px]'></Image>
                        </div>
                        
                    </div>
                    <ul className='flex items-center justify-center gap-10 responsive-header'>
                        <li>
                            <a onClick={() => scrollTo('section-home')}>
                                <ItemMenu name={"Home"}></ItemMenu>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollTo('section-about')}>
                                <ItemMenu name={"Quem Somos"} padding={"w-[100px]"}></ItemMenu>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollTo('section-about')}>
                                <ItemMenu name={"Sistemas"}></ItemMenu>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollTo('section-contact')}>
                                <ItemMenu name={"Contato"}></ItemMenu>
                            </a>
                        </li>
                    </ul>
                    <button className="contact change-icon-menu flex items-center justify-center gap-3 bg-primary-color hover:bg-transparent rounded-[30px] h-12 pl-6 pr-6 border-solid border-2 border-primary-color hover:border-primary-color duration-300">
                            <i className='change-text-menu' style={{fontSize: "20px", color: "white"}}><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></i>
                            <span className="change-text-menu font-black tracking-wider text-[17px]">SUPORTE</span>
                    </button>
                </div>
                
            </div>
        </header>
    <div className={`container-menu flex-1 z-40 fixed items-center w-full m-0 pb-[10px] justify-center transition-all flex duration-700 ${isVisible ? '!flex' : '!hidden'}`}>
        <nav className='flex flex-col gap-4'>
            <i className="hamburguer transition-all duration-700" onClick={() => setMenuIsVisible(false)}><FontAwesomeIcon icon={faXmark} style={{color: "#02b3ee", fontSize: "20px"}}></FontAwesomeIcon></i>
            <a onClick={() => scrollTo('section-home')} className='flex'>
                <ItemMenu name={"Home"} />
            </a>
            <a onClick={() => scrollTo('section-about')} className='flex'>
                <ItemMenu name={"Quem Somos"} />
            </a>
            <a onClick={() => scrollTo('section-characteristics')} className='flex'>
                <ItemMenu name={"Sistemas"} />
            </a>
            <a onClick={() => scrollTo('section-contact')} className='flex'>
                <ItemMenu name={"Contato"} />
            </a>
        </nav>
    </div>
    <i className="hamburguer flex fixed" onClick={() => setMenuIsVisible(true)}><FontAwesomeIcon icon={faBars} style={{color: "#02b3ee", fontSize: "20px"}}></FontAwesomeIcon></i>
    </>
    );
}