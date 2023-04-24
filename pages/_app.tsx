import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import { GlobalDialog, GlobalUIManager } from '../contexts/GlobalUIManager';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';

// const excludedPaths = ['/byte-converter', '/virus-scanner', '/password-checker', '/temporary-email'];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  let deferredPrompt: any;
  const [showPromoteBanner, setShowPromoteBanner] = React.useState(false);
  // const pathname = route.pathname;
  // const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;
  // const bannerLang = require(`../assets/lang/${route.locale}/banners.json`);

  //Add promote banner for Android users to download the app
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', function (e) {
      console.log('beforeinstallprompt Event fired');
      // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setShowPromoteBanner(true);

      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);

      // Show the prompt
      deferredPrompt.prompt();
    });
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
        <Component {...pageProps} />
        {showPromoteBanner && (
          <div className="bottom-0 flex w-full bg-black">
            <p className="text-white">Promote banner works properly</p>
          </div>
        )}
        {/* {isExcludedPath ? null : <GeneralBanner textContent={bannerLang.GeneralBanner} />} */}
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
