/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ArrowRight } from 'phosphor-react';
import isBrave from '../../lib/brave';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  segmentName?: string | null;
  disableMailerlite?: boolean;
  disableDrift?: boolean;
  isProduction?: boolean;
  isSendSnackbar?: boolean;
  lang?: string;
}

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
  isSendSnackbar = true,
  disableDrift = true,
  isProduction = process.env.NODE_ENV === 'production',
  lang,
}: // lang
LayoutProps) {
  useEffect(() => {
    // window.analytics.page(segmentName);
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

      {isSendSnackbar && (
        <a
          href="https://send.internxt.com"
          target="_blank"
          rel="noreferrer"
          className="group fixed bottom-0 left-0 z-50 h-16 w-screen bg-primary text-white"
        >
          <div className="relative mx-auto flex h-full max-w-screen-xl flex-row items-center justify-between px-5 lg:justify-center lg:space-x-10">
            <div className="flex flex-row items-center space-x-3 whitespace-nowrap">
              <div className="flex h-6 flex-row items-center rounded-full bg-white px-2 text-sm font-bold text-primary">
                {lang === 'en' ? 'NEW' : 'NUEVO'}
              </div>
              <span className="text-lg font-medium">{lang === 'en' ? 'Internxt Send' : 'Internxt Send'}</span>
              <span className="hidden opacity-75 md:flex">
                {lang === 'en' ? 'Share files fast in total privacy' : 'Comparte archivos de forma rápida y segura'}
              </span>
            </div>
            <div className="flex h-9 flex-row items-center rounded-full text-lg font-medium transition duration-200 ease-in-out sm:space-x-1 sm:px-4 sm:group-hover:bg-white sm:group-hover:bg-opacity-15">
              <div className="hidden whitespace-nowrap sm:flex">
                <span className="hidden sm:flex">{lang === 'en' ? 'Find out now' : 'Probar ahora'}</span>
                <span className="flex sm:hidden">{lang === 'en' ? 'Find out' : 'Probar ahora'}</span>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="h-8 w-8 transition duration-200 ease-in-out sm:h-6 sm:w-6 sm:group-hover:translate-x-1"
              />
            </div>
          </div>
        </a>
      )}

      {children}
    </>
  );
}
