import { memo, useEffect } from 'react';
import { AppProps } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import 'react-tooltip/dist/react-tooltip.css';

import '@/styles/globals.scss';
import { GlobalDialog, GlobalUIManager } from '@/contexts/GlobalUIManager';
import * as gtag from '@/lib/gtag';
import ShowSnackbar from '@/components/Snackbar';
import FeaturesBanner from '@/components/banners/FeaturesBanner';

const EXCLUDED_PATHS_FOR_BANNER = [
  '/lifetime',
  '/pricing',
  '/partner-discount',
  '/techradar-discount',
  '/stackcommerce',
  '/dealfuel',
  '/temporary-email',
  '/locker',
  '/startpage',
  '/oystervpn',
  '/lifetime_special',
  '/pccomponentes-products',
  '/lifetime/celebration',
];

const excludeIntercomPaths = ['/temporary-email', '/virus-scanner', '/pccomponentes-products'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const lang = router.locale;

  const shouldShowBanner = false;
  // !EXCLUDED_PATHS_FOR_BANNER.includes(pathname);
  const hideIntercomButton = excludeIntercomPaths.includes(pathname);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag?.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="ta2ffq6n">
      <GlobalUIManager
        initialDialogs={[
          { key: GlobalDialog.Auth, isOpen: false },
          {
            key: GlobalDialog.Wheel,
            isOpen: false,
          },
          {
            key: GlobalDialog.TempMailAction,
            isOpen: false,
          },
          {
            key: GlobalDialog.PriceBannerForCampaigns,
            isOpen: false,
          },
          {
            key: GlobalDialog.MobileBannerForHome,
            isOpen: false,
          },
          {
            key: GlobalDialog.BottomBanner,
            isOpen: false,
          },
        ]}
      >
        <>
          <Script strategy="beforeInteractive" src="/js/rudderlib.js" />
          {lang !== 'es' && (
            <>
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
          )}
        </>

        <Component {...pageProps} />
        {hideIntercomButton ? null : <Intercom />}
        <div className="flex justify-center">
          {shouldShowBanner ? (
            <>
              {/* <BottomBanner /> */}
              <FeaturesBanner />
            </>
          ) : undefined}
        </div>
        {/* Show snackbar in all pages */}
        <ShowSnackbar />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default memo(MyApp);
