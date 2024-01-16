import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ContainerMain from '../components/ContainerMain'
import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <div className={cabin.className}>
      <ContainerMain>
        <Component {...pageProps} />
      </ContainerMain>
    </div>
  )
}
