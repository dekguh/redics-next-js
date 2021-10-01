import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppWrapper from '../components/utils/wrapper/AppWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
  )
}
export default MyApp
