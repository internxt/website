/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import isBrave from '../../lib/brave';
import Popup from './Popup';
import BFBanner from './BFBanner';

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
  lang,
}: // lang
LayoutProps) {
  useEffect(() => {
    window.rudderanalytics.page(segmentName, {
      brave: isBrave(),
    });
    const getStartedLinkList = Array(document.querySelectorAll('[id=get-started-link]'));

    // getStartedLinkList.map((link) => window.analytics.trackLink(link, 'Clicked Get Started'));
  }, [segmentName]);
  const pageURL = segmentName === 'home' ? '' : segmentName;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="alternate" hrefLang="en" href={`${INTERNXT_URL}/${pageURL}`} />
        <link rel="alternate" hrefLang="es" href={`${INTERNXT_URL}/es/${pageURL}`} />
        <link rel="alternate" hrefLang="fr" href={`${INTERNXT_URL}/fr/${pageURL}`} />
        <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
        <link rel="preload" href="/fonts/NeueEinstellung" as="font" />
        <link rel="preload" href="styles/globals.scss" as="style" />
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
        <script src="/js/rudderlib.js" />
        {!disableMailerlite && <script defer src="/js/mailerlite.js" />}
        {!disableDrift && <script defer src="/js/drift.js" />}
        <script
          async
          dangerouslySetInnerHTML={{
            __html:
              " window.intercomSettings = { app_id: \"ta2ffq6n\" }; (function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ta2ffq6n';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();",
          }}
        />
      </Head>
      <Popup />
      {/* <BFBanner /> */}
      {children}
    </>
  );
}
