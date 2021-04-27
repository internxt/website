import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps, AppContext } from 'next/app';
import '../styles/globals.css'
import '../styles/tailwind.css';
import cookie from 'cookies'
import Analytics from 'analytics-node'

const analyticsNode = new Analytics('')

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {

  const cookies = new cookie(appContext.ctx.req, appContext.ctx.res)
  const anonymousId = decodeURI(cookies.get('ajs_anonymous_id'))
  analyt

  console.log(appContext)

  return {}
}


export default MyApp
