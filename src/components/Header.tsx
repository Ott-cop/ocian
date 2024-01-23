'use client'
import Logo from '@/assets/logo/logo.jpg'
import Image from 'next/image'
import IconSupport from '@/assets/icons/support-white.png'
import { ItemMenu } from './ItemMenu'
import "@/styles/Header/style.module.css"


export default function Header() {
    return(
        <header className="flex flex-1 z-40 fixed items-cente w-full m-0 pb-[10px] justify-center">
            <div className="w-full max-w-[1246px] px-[15px] mt-[10px] mx-auto">
                <div className="flex flex-1 items-center justify-center gap-10">
                    <div className="w-full items-center justify-center gap-80 responsive-header">
                        <Image src={Logo} alt={'Ocian Logo'} className='w-auto'></Image>
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
                    <button className="changeColor flex items-center justify-center gap-3 bg-primary-color text-primary-color hover:bg-white rounded-[30px] h-12 pl-8 pr-8 border-solid border-2 border-primary-color hover:border-primary-color` duration-300">
                            <Image src={IconSupport} alt="IconSupport" className="h-[22px] w-auto"></Image>
                            <span className="changeColor text-white font-black hover:text-primary-color tracking-wider">SUPORTE</span>
                    </button>
                </div>
            </div>
        </header>
    );
}