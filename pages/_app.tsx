import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import ShowSnackbar from '../components/Snackbar';

const excludedPaths = ['/lifetime', '/pricing', '/affiliates'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
        {/* <Script strategy="beforeInteractive" src="/js/matomo.js" /> */}
        <Component {...pageProps} />
        <ShowSnackbar />
        {/* {isExcludedPath ? null : <SquareBanner />} */}
        {/* {isExcludedPath ? null : <GeneralBanner textContent={bannerLang.GeneralBanner} />} */}
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
