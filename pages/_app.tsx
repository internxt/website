import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Popup from '../components/layout/Popup';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
      <Component {...pageProps} />
      <Popup />
    </>
  );
}

export default MyApp;
