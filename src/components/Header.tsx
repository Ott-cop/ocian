import Logo from '@/assets/logo/logo.jpg'
import Image from 'next/image'
import IconSupport from '@/assets/icons/support.png'
import { ItemMenu } from './ItemMenu'


export default function Header() {
    return(
        <header className="flex flex-1 z-40 fixed items-center w-full m-0 justify-center">
            <div className="w-full max-w-[1246px] px-[15px] mt-[10px] mx-auto">
                <div className="flex flex-1 items-center justify-center gap-12">
                    <div className="w-full items-center justify-center gap-80 responsive-header">
                        <Image src={Logo} alt={'Ocian Logo'} className='w-auto'></Image>
                    </div>
                    <ul className='flex items-center justify-center gap-12'>
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
                    <button className="contact flex items-center justify-center gap-4 bg-primary-gray bg-opacity-20 rounded-[30px] h-14 pl-8 pr-8 border-solid border-2 hover:border-primary-blue duration-300">
                            <Image src={IconSupport} alt="Icon Phone" className="h-[22px] w-auto"></Image>
                            <span className="text-black font-black">Suporte</span>
                    </button>
                </div>
            </div>
        </header>
    );
}