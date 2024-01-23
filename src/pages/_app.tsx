import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ContainerMain from '../components/ContainerMain'
import { Barlow_Condensed } from 'next/font/google'

const primary_font = Barlow_Condensed({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <div className={primary_font.className}>
      <ContainerMain>
        <Component {...pageProps} />
      </ContainerMain>
    </div>
  )
}
