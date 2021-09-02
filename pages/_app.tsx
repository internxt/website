import App, { AppProps, AppContext } from 'next/app';
import '../styles/globals.scss'
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;

