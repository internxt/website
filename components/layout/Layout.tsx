/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import isBrave from '../../lib/brave';
import styles from 'components/black-friday/BF-HeroSection.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  segmentName?: string | null;
  disableMailerlite?: boolean;
  disableDrift?: boolean;
  isProduction?: boolean;
  lang?: string;
}

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
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

  const newLabel = () => {
    switch (lang) {
      case 'es':
        return 'NUEVO';
      case 'en':
        return 'NEW';
      case 'fr':
        return 'NOUVEAU';

      default:
        return 'NEW';
    }
  };

  const sendTitle = () => {
    switch (lang) {
      case 'es':
        return 'Comparte archivos de forma rápida y segura';
      case 'en':
        return 'Share files fast in total privacy';
      case 'fr':
        return 'Partagez des fichiers en toute sécurité et rapidement';

      default:
        return 'Share files fast in total privacy';
    }
  };

  const sendFindLabel = () => {
    switch (lang) {
      case 'es':
        return 'Probar ahora';
      case 'en':
        return 'Find out now';
      case 'fr':
        return 'Essayez maintenant';
      default:
        return 'Find';
    }
  };

  const sendFindLabelMobile = () => {
    switch (lang) {
      case 'es':
        return 'Probar ahora';
      case 'en':
        return 'Find out';
      case 'fr':
        return 'Essayez maintenant';
      default:
        return 'Find';
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="alternate" hrefLang="en" href={`https://internxt.com/${pageURL}`} />
        <link rel="alternate" hrefLang="es" href={`https://internxt.com/es/${pageURL}`} />
        <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
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
      <div className="absolute bottom-8 right-8 z-10 hidden max-h-[400px] max-w-[400px] py-10 px-5 lg:flex">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <p className="text-4xl font-bold">Black Friday is here!</p>
        </div>
        <div
          className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.neonBlur} pointer-events-none origin-center`}
        />
      </div>

      {children}
    </>
  );
}
