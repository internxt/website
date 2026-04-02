import { memo, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Intercom, LiveChatLoaderProvider } from 'react-live-chat-loader';
import 'react-tooltip/dist/react-tooltip.css';
import '@/styles/globals.scss';
import { GlobalDialog, GlobalUIManager } from '@/contexts/GlobalUIManager';
import * as gtag from '@/lib/gtag';
import ShowSnackbar from '@/components/Snackbar';
import BottomBanner from '@/components/banners/BottomBanner';
import { EXCLUDED_PATHS_FOR_BANNER } from '@/constants';
import { FreeCardPromoBanner } from '@/components/banners/FreeCardPromoBanner';

const EXCLUDE_INTERCOM_PATHS = [
  '/temporary-email',
  '/virus-scanner',
  '/pccomponentes-products',
  '/pccomponentes-business',
  '/pccomponentes-products-b2b',
  '/lifetime/celebration/[filename]',
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;

  const shouldShowBanner = !EXCLUDED_PATHS_FOR_BANNER.includes(pathname);

  const hideIntercomButton = EXCLUDE_INTERCOM_PATHS.includes(pathname);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag?.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
            key: GlobalDialog.TopBanner,
            isOpen: false,
          },
          {
            key: GlobalDialog.BottomBanner,
            isOpen: false,
          },
          {
            key: GlobalDialog.FreeSpaceCardBanner,
            isOpen: false,
          },
          {
            key: GlobalDialog.BeforeYouGoBanner,
            isOpen: false,
          },
          {
            key: GlobalDialog.S3Banner,
            isOpen: false,
          },
        ]}
      >
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              gtag('set', 'ads_data_redaction', true);

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P7N7LW5G');
            `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7N7LW5G"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GWZKXKB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Component {...pageProps} />
        {hideIntercomButton ? null : <Intercom />}
        <div className="flex justify-center">
          {shouldShowBanner ? (
            <>
              <BottomBanner />
            </>
          ) : undefined}
        </div>
        <FreeCardPromoBanner />
        <ShowSnackbar />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default memo(MyApp);
