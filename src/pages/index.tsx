import Image from 'next/image'
import Logo from '@/assets/logo/logo.jpg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <header className='flex flex-1 z-40 fixed items-center w-full justify-center'>
      <div className='w-full max-w-[1246px] px-[15px] mx-auto'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='flex w-full items-center justify-center gap-80'>
            <Image src={Logo} alt={'Ocian Logo'} className='w-auto h-[80px]'></Image>
          </div>
          <ul>
            <li>
              <a>
                
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </header>
  );
}
