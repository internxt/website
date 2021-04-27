import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps, AppContext } from 'next/app';
import '../styles/globals.css'
import '../styles/tailwind.css';
import userAttribution from './analytics/analytics'

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {

  userAttribution(appContext)

  return {}
}


export default MyApp
