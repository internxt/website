/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import isBrave from '../../lib/brave';
import Script from 'next/script';
import Link from 'next/link';
import { X } from 'phosphor-react';
import { useRouter } from 'next/router';
import TopBannerHomePage from '../../components/banners/TopBannerHomePage';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  segmentName?: string | null;
  disableMailerlite?: boolean;
  disableDrift?: boolean;
  isProduction?: boolean;
  specialOffer?: string;
  host?: string;
  isBannerFixed?: boolean;
  lang?: string;
}

const INTERNXT_URL = 'https://internxt.com';

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
  specialOffer,
  disableDrift = true,
  isBannerFixed,
  isProduction = process.env.NODE_ENV === 'production',
}: // lang
LayoutProps) {
  const pageURL = segmentName === 'home' ? '' : segmentName;
  const router = useRouter();
  const showBanner = router.pathname === '/';
  const pathname = router.pathname === '/' ? '' : router.pathname;
  const lang = router.locale;
  const [closeBannerOnMobile, setCloseBannerOnMobile] = React.useState(false);
  const langToUpperCase = lang.toLocaleUpperCase();

  useEffect(() => {
    window.rudderanalytics.page(segmentName, {
      brave: isBrave(),
    });
  }, [segmentName]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`${INTERNXT_URL}/${lang}${pathname}`} />
        <link rel="alternate" hrefLang="en" href={`${INTERNXT_URL}${pathname}`} />
        <link rel="alternate" hrefLang="es" href={`${INTERNXT_URL}/es${pathname}`} />
        <link rel="alternate" hrefLang="fr" href={`${INTERNXT_URL}/fr${pathname}`} />
        <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${INTERNXT_URL}/${lang}${pathname}`} />
        <meta
          property="og:image"
          content={specialOffer || `${INTERNXT_URL}/images/previewLink/PreviewLink${langToUpperCase}.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${INTERNXT_URL}/${lang}${pathname}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={specialOffer || `${INTERNXT_URL}/images/previewLink/PreviewLink${langToUpperCase}.png`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="thumbnail" content={`${INTERNXT_URL}/images/previewLink/LifetimeGoogleSearch.png`} />
        <meta name="apple-itunes-app" content="app-id=id1465869889" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="icon" href="/favicon.ico" />
        {!disableMailerlite && <Script defer src="/js/mailerlite.js" />}
        {!disableDrift && <Script defer src="/js/drift.js" />}
      </Head>
      {showBanner ? (
        <TopBannerHomePage
          isBannerFixed={isBannerFixed}
          closeBannerOnMobile={closeBannerOnMobile}
          setCloseBannerOnMobile={setCloseBannerOnMobile}
        />
      ) : null}
      {children}
      {/* <BFBanner /> */}
    </>
  );
}
