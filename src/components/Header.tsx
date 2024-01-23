
import Logo from '@/assets/logo/logo.png'
import Image from 'next/image'
import IconSupport from '@/assets/icons/support-white.png'
import { ItemMenu } from './ItemMenu'
import "@/styles/Header/style.module.css"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const [isScroll, setisScroll] = useState<boolean>(false);
    
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

    return(
        <header className={`flex flex-1 z-40 fixed items-center w-full m-0 pb-[10px] justify-center duration-500 ${isScroll ? 'header-scrolled' : ''}`}>
            <div className="w-full max-w-[1246px] px-[15px] mt-[10px] mx-auto">
                <div className="flex flex-1 items-center justify-center gap-10">
                    <div className="w-full items-center justify-center gap-80 responsive-header">
                        <Image src={Logo} alt={'Ocian Logo'} className='w-[130px]'></Image>
                    </div>
                    <ul className='flex items-center justify-center gap-10'>
                        <li>
                            <a>
                                <ItemMenu name={"Home"}></ItemMenu>
                            </a>
                        </li>
                        <li>
                            <a>
                                <ItemMenu name={"Quem Somos"} padding={"w-[100px]"}></ItemMenu>
                            </a>
                        </li>
                        <li>
                            <a>
                                <ItemMenu name={"Sistemas"}></ItemMenu>
                            </a>
                        </li>
                        <li>
                            <a>
                                <ItemMenu name={"Contato"}></ItemMenu>
                            </a>
                        </li>
                    </ul>
                    <button className="change-icon-menu flex items-center justify-center gap-3 bg-primary-color hover:bg-transparent rounded-[30px] h-12 pl-6 pr-6 border-solid border-2 border-primary-color hover:border-primary-color` duration-300">
                            {/* <Image src={IconSupport} alt="IconSupport" className="h-[22px] w-auto"></Image> */}
                            <i className='change-text-menu' style={{fontSize: "20px", color: "white"}}><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></i>
                            <span className="change-text-menu font-black tracking-wider text-[17px]">SUPORTE</span>
                    </button>
                </div>
            </div>
        </header>
    );
}