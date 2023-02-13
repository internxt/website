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
  isBannerFixed?: boolean;
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
      {showBanner ? (
        <>
          <div
            className={`group ${
              isBannerFixed ? 'absolute' : 'fixed'
            } top-16 left-0 z-40 hidden h-[54px] w-screen cursor-pointer items-center justify-center bg-primary text-white md:flex`}
          >
            <div
              className="mx-auto flex flex-row items-center justify-center space-x-2"
              onClick={() =>
                window.location.replace(
                  `https://internxt.com/${lang}/pricing?utm_source=website&utm_medium=banner&utm_campaign=valentines`,
                )
              }
            >
              {/* <p className="flex flex-row rounded-full  font-bold">{New()}</p> */}
              <p className="flex flex-row font-normal">{obtainDeal()}</p>

              <p className="flex text-base font-semibold underline">{pickUp()}</p>
            </div>
          </div>
          <div
            className={`group fixed top-16 left-0 z-30 ${
              closeBannerOnMobile ? 'hidden' : 'flex'
            } h-16 w-screen cursor-pointer items-center justify-center bg-primary text-white md:hidden`}
          >
            <div className="flex flex-row">
              <div
                className="flex flex-row items-center justify-center space-x-2"
                onClick={() =>
                  window.location.replace(
                    `https://internxt.com/${lang}/pricing?utm_source=website&utm_medium=banner&utm_campaign=valentines`,
                  )
                }
              >
                {/* <p className="flex flex-row rounded-full  font-bold">{New()}</p> */}
                <p className="flex flex-row font-normal">{ConvertToMobile()}</p>
              </div>

              <button
                className="absolute top-3 right-3 flex flex-col"
                onClick={() => {
                  setCloseBannerOnMobile(true);
                }}
              >
                <X size={36} className="z-50" />
              </button>
            </div>
          </div>
        </>
      ) : null}
      {children}
      {/* <BFBanner /> */}
    </>
  );
}
