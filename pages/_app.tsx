import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import SummerBanner from '../components/banners/SummerBanner';
import ShowSnackbar from '../components/Snackbar';
import GeneralBanner from '../components/banners/GeneralBanner';

const excludedPaths = ['/techcult', '/pricing', '/stackcommerce'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
      <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
        <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
          <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
          <Component {...pageProps} />
          <ShowSnackbar />
          {/* {isExcludedPath ? null : <GeneralBanner textContent={bannerLang.GeneralBanner} />} */}
          <Intercom />
        </GlobalUIManager>
      </LiveChatLoaderProvider>
    </>
  );
}

export default MyApp;
