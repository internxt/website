import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import ValentinesBanner from '../components/banners/ValentinesBanner';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
      <ValentinesBanner />
      <Component {...pageProps} />
      <Intercom />
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
