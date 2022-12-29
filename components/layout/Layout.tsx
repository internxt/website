/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import isBrave from '../../lib/brave';
import Script from 'next/script';
import Link from 'next/link';
import { X } from 'phosphor-react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  segmentName?: string | null;
  disableMailerlite?: boolean;
  disableDrift?: boolean;
  isProduction?: boolean;
  specialOffer?: string;
  isBannerDisabled?: boolean;
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
  isBannerDisabled,
  isProduction = process.env.NODE_ENV === 'production',
  lang,
}: // lang
LayoutProps) {
  const [colseBannerOnMobile, setColseBannerOnMobile] = React.useState(false);

  useEffect(() => {
    window.rudderanalytics.page(segmentName, {
      brave: isBrave(),
    });
    const getStartedLinkList = Array(document.querySelectorAll('[id=get-started-link]'));

    // getStartedLinkList.map((link) => window.analytics.trackLink(link, 'Clicked Get Started'));
  }, [segmentName]);
  const pageURL = segmentName === 'home' ? '' : segmentName;

  const New = () => {
    if (lang === 'en') {
      return 'NEW:';
    } else if (lang === 'es') {
      return 'NUEVO:';
    } else if (lang === 'fr') {
      return 'NOUVEAU:';
    }
  };

  const ConvertTo = () => {
    if (lang === 'en') {
      return "Convert TB to GB and more with Internxt's free Byte Converter!";
    } else if (lang === 'es') {
      return 'Convierte TB en GB y más con el convertidor de unidades gratuito de Internxt!';
    } else if (lang === 'fr') {
      return "Convertissez des To en Go et plus avec le convertisseur d'octets gratuit d'Internxt!";
    }
  };

  const ConvertToMobile = () => {
    if (lang === 'en') {
      return 'Byte converter: TB to KB';
    } else if (lang === 'es') {
      return 'Conversor de unidades: TB a KB';
    } else if (lang === 'fr') {
      return "convertisseur d'unités: To en Go";
    }
  };

  const tryNow = () => {
    if (lang === 'en') {
      return 'Try Now';
    } else if (lang === 'es') {
      return 'Pruébalo ahora';
    } else if (lang === 'fr') {
      return 'Essayez maintenant';
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="alternate" hrefLang="en" href={`${INTERNXT_URL}/${pageURL}`} />
        <link rel="alternate" hrefLang="es" href={`${INTERNXT_URL}/es/${pageURL}`} />
        <link rel="alternate" hrefLang="fr" href={`${INTERNXT_URL}/fr/${pageURL}`} />
        <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${INTERNXT_URL}/${lang}/${pageURL}`} />
        <meta property="og:image" content={specialOffer || `${INTERNXT_URL}/images/previewLink/Global.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${INTERNXT_URL}/${lang}/${pageURL}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={specialOffer || `${INTERNXT_URL}/images/previewLink/Global.png`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="thumbnail" content={`${INTERNXT_URL}/images/previewLink/LifetimeGoogleSearch.png`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="icon" href="/favicon.ico" />
        {!disableMailerlite && <Script defer src="/js/mailerlite.js" />}
        {!disableDrift && <Script defer src="/js/drift.js" />}
      </Head>
      {!isBannerDisabled ? (
        <>
          <div className="group fixed bottom-0 left-0 z-50 hidden h-16 w-screen cursor-pointer items-center justify-center bg-primary text-white md:flex">
            <Link href="/byte-converter" target="_blank" rel="noreferrer">
              <div className="mx-auto flex flex-row items-center justify-center space-x-2">
                <p className="flex flex-row rounded-full  font-bold">{New()}</p>
                <p className="flex flex-row font-normal">{ConvertTo()}</p>

                <p className="flex text-base font-semibold underline">{tryNow()}</p>
              </div>
            </Link>
          </div>
          <div
            className={`group fixed top-16 left-0 z-30 ${
              colseBannerOnMobile ? 'hidden' : 'flex'
            } h-16 w-screen cursor-pointer items-center justify-center bg-primary text-white md:hidden`}
          >
            <div className="flex flex-row">
              <Link href="/byte-converter" target="_blank" rel="noreferrer">
                <div className="flex flex-row items-center justify-center space-x-2">
                  <p className="flex flex-row rounded-full  font-bold">{New()}</p>
                  <p className="flex flex-row font-normal">{ConvertToMobile()}</p>
                </div>
              </Link>
              <button
                className="absolute top-3 right-3 flex flex-col"
                onClick={() => {
                  setColseBannerOnMobile(true);
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
