import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
