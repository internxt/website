import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import TryInternxtBanner from '../components/banners/TryInternxtBanner';

const excludedPaths = ['/byte-converter', '/virus-scanner', '/password-checker', '/temporary-email'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathname = route.pathname;
  const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;
  const bannerLang = require(`../assets/lang/${route.locale}/banners.json`);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
        <Component {...pageProps} />
        {isExcludedPath ? null : (
          <TryInternxtBanner
            textContent={bannerLang.tryOutInternxtGeneralBanner}
            url={'https://drive.internxt.com/new?utm_source=website&utm_medium=banner&utm_campaign=internxtbyte'}
          />
        )}
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
