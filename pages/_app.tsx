import 'bootstrap/dist/css/bootstrap.min.css';
import App, { AppProps, AppContext } from 'next/app';
import '../styles/globals.css'
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

