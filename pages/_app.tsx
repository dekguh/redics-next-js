import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppWrapper from '../components/utils/wrapper/AppWrapper'
import { wrapper } from '../components/utils/redux/store'
import 'react-datepicker/dist/react-datepicker.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
  )
}
export default wrapper.withRedux(MyApp)
