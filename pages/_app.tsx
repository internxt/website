import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import BottomBanner from '../components/banners/BottomBanner';

const excludedPaths = [];

const excludeIntercomPaths = ['/temporary-email', '/virus-scanner'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = !excludedPaths.includes(pathname);
  const router = useRouter();
  const hideIntercomButton = excludeIntercomPaths.includes(router.pathname);

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
        <>
          <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>

        <Component {...pageProps} />
        <div className="flex justify-center">{!isExcludedPath ? <BottomBanner /> : undefined}</div>
        {hideIntercomButton ? null : <Intercom />}
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
