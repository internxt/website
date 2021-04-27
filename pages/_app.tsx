import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps, AppContext } from 'next/app';
import '../styles/globals.css'
import '../styles/tailwind.css';
import cookie from 'cookies'
// import Analytics from 'analytics-node'

// const analyticsNode = new Analytics('boGFLmw8Z7TCI0CJ1hE4xN5JgTI1Tblu')

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {

  const cookies = new cookie(appContext.ctx.req, appContext.ctx.res)
  const anonymousId = decodeURI(cookies.get('ajs_anonymous_id'))

  return {}
}


export default MyApp
