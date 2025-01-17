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
import BottomBanner from '@/components/banners/BottomBanner';
import { EXCLUDED_PATHS_FOR_BANNER } from '@/constants';
import { FreeCardPromoBanner } from '@/components/banners/FreeCardPromoBanner';
import FeaturesBanner from '@/components/banners/FeaturesBanner';

const EXCLUDE_INTERCOM_PATHS = [
  '/temporary-email',
  '/virus-scanner',
  '/pccomponentes-products',
  '/pccomponentes-products-b2b',
  '/lifetime/celebration/[filename]',
];

const EXCLUDED_PATHS_FOR_BEFORE_YOU_GO_BANNER = [
  '/affiliates/[filename]',
  '/cloudwards',
  '/lifetime/celebration/[filename]',
  '/lifetime/security82',
  '/pccomponentes-products',
  '/pccomponentes-products-b2b',
  '/cloud-object-storage',
  '/cloud-object-storage/checkout',
  '/',
  '/pricing',
  '/family',
  '/business',
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const lang = router.locale;

  const shouldShowBanner = !EXCLUDED_PATHS_FOR_BANNER.includes(pathname);
  const shouldShowBeforeYouGoBanner = !EXCLUDED_PATHS_FOR_BEFORE_YOU_GO_BANNER.includes(pathname);

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
            isOpen: true,
          },
          {
            key: GlobalDialog.MobileBannerForHome,
            isOpen: false,
          },
          {
            key: GlobalDialog.TopBanner,
            isOpen: true,
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
        <>
          {lang === 'en' && (
            <Script src="https://analytics.ahrefs.com/analytics.js" data-key="AJfAg8JhxYbS3NkIKdlang" defer />
          )}
        </>

        <Component {...pageProps} />
        {hideIntercomButton ? null : <Intercom />}
        <div className="flex justify-center">
          {shouldShowBanner ? (
            <>
              <BottomBanner />
              <FeaturesBanner />
              {/* <S3Banner /> */}
            </>
          ) : undefined}
          {/* {shouldShowBeforeYouGoBanner ? <BeforeCloseTabBanner /> : undefined} */}
        </div>
        <FreeCardPromoBanner />

        {/* Show snackbar in all pages */}
        <ShowSnackbar />
      </GlobalUIManager>
    </LiveChatLoaderProvider>
  );
}

export default memo(MyApp);
