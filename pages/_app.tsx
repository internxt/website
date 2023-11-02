import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import ShowSnackbar from '../components/Snackbar';
import * as gtag from '../lib/gtag';

const excludedPaths = ['/lifetime', '/pricing', '/affiliates'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-CHHGLQTHSB`} />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CHHGLQTHSB', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
        <ShowSnackbar />
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
