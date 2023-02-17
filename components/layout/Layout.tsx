/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import isBrave from '../../lib/brave';
import Script from 'next/script';
import Link from 'next/link';
import { X } from 'phosphor-react';
import { useRouter } from 'next/router';

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

  const New = () => {
    if (lang === 'en') {
      return 'NEW:';
    } else if (lang === 'es') {
      return 'NUEVO:';
    } else if (lang === 'fr') {
      return 'NOUVEAU:';
    }
  };

  const obtainDeal = () => {
    if (lang === 'en') {
      return 'Be our Valentine and get 90% OFF our 2TB plan with the code VDAY.';
    } else if (lang === 'es') {
      return 'Este San Valentín consigue un 90% de descuento en nuestro plan de 2TB con el código VDAY.';
    } else if (lang === 'fr') {
      return 'Obtenez un 90 % de réduction sur notre plan de 2 To avec le code VDAY.';
    }
  };

  const ConvertToMobile = () => {
    if (lang === 'en') {
      return "Pick up the Valentine's deal";
    } else if (lang === 'es') {
      return 'Obtén la oferta';
    } else if (lang === 'fr') {
      return "Profitez de l'offre";
    }
  };

  const pickUp = () => {
    if (lang === 'en') {
      return 'Pick up the deal';
    } else if (lang === 'es') {
      return 'Obtén la oferta';
    } else if (lang === 'fr') {
      return "Reprendre l'affaire";
    }
  };

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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="icon" href="/favicon.ico" />
        {!disableMailerlite && <Script defer src="/js/mailerlite.js" />}
        {!disableDrift && <Script defer src="/js/drift.js" />}
      </Head>

      {children}
      {/* <BFBanner /> */}
    </>
  );
}
