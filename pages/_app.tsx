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
  let promptEvent: any;
  // const pathname = route.pathname;
  // const isExcludedPath = excludedPaths.findIndex((path) => pathname.includes(path)) !== -1;
  // const bannerLang = require(`../assets/lang/${route.locale}/banners.json`);

  // listen to install button clic
  function listenToUserAction() {
    const installBtn = document.querySelector('.install-btn');
    installBtn.addEventListener('click', presentAddToHome);
  }

  // present install prompt to user
  function presentAddToHome() {
    promptEvent.prompt(); // Wait for the user to respond to the prompt
    promptEvent.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted');
      } else {
        console.log('User dismissed');
      }
    });
  }

  //Add promote banner for Android users to download the app
  useEffect(() => {
    // Capture event and defer
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      promptEvent = e;
      listenToUserAction();
    });
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager initialDialogs={[{ key: GlobalDialog.Auth, isOpen: false }]}>
        <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
        <Component {...pageProps} />
        <button id="install-btn" />
        {/* {isExcludedPath ? null : <GeneralBanner textContent={bannerLang.GeneralBanner} />} */}
        <Intercom />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default MyApp;
