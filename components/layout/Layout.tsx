/* eslint-disable react/no-danger */
import Head from 'next/head';
import React, { useEffect } from 'react';
import { ArrowRight } from 'phosphor-react';

interface LayoutProps {
  children: React.ReactNode,
  title: string,
  description: string,
  segmentName?: string | null,
  disableMailerlite?: boolean,
  disableDrift?: boolean,
  disableAdtrack?: boolean,
  disableJivosite?: boolean,
  isProduction?: boolean,
  lang?: string
}

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
  disableDrift = true,
  disableAdtrack = false,
  isProduction = process.env.NODE_ENV === 'production',
  lang
  // lang
}: LayoutProps) {
  useEffect(() => {
    window.analytics.page(segmentName);
    const getStartedLinkList = Array(document.querySelectorAll('[id=get-started-link]'));

    getStartedLinkList.map((link) => window.analytics.trackLink(link, 'Clicked Get Started'));
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
        {isProduction ? <script src="/js/analyticsSnippet.js" /> : <script src="/js/segment.js" />}
        {!disableMailerlite && <script defer src="/js/mailerlite.js" />}
        {!disableDrift && <script defer src="/js/drift.js" />}
        <script async dangerouslySetInnerHTML={{ __html: ' window.intercomSettings = { app_id: "ta2ffq6n" }; (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic(\'reattach_activator\');ic(\'update\',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement(\'script\');s.type=\'text/javascript\';s.async=true;s.src=\'https://widget.intercom.io/widget/ta2ffq6n\';var x=d.getElementsByTagName(\'script\')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent(\'onload\',l);}else{w.addEventListener(\'load\',l,false);}}})();' }} />
        {!disableAdtrack && <script defer src="/js/adtrack.js" />}
      </Head>

      <a href="https://send.internxt.com" target="_blank" rel="noreferrer" className="group fixed bottom-0 left-0 w-screen h-16 bg-blue-60 z-50 text-white">
        <div className="relative flex flex-row items-center justify-between lg:justify-center h-full mx-auto max-w-screen-xl lg:space-x-10 px-5">
          <div className="flex flex-row items-center space-x-3 whitespace-nowrap">
            <div className="flex flex-row items-center h-6 px-2 text-sm rounded-full font-bold bg-white text-blue-60">{lang === 'en' ? 'NEW' : 'NUEVO'}</div>
            <span className="font-medium text-lg">{lang === 'en' ? 'Internxt Send' : 'Internxt Send'}</span>
            <span className="opacity-75 hidden md:flex">{lang === 'en' ? 'Share files fast in total privacy' : 'Comparte archivos de forma rápida y segura'}</span>
          </div>
          <div className="flex flex-row items-center h-9 sm:px-4 text-lg rounded-full font-medium sm:group-hover:bg-white sm:group-hover:bg-opacity-15 sm:space-x-1 transition duration-200 ease-in-out">
            <div className="whitespace-nowrap hidden sm:flex">
              <span className="hidden sm:flex">{lang === 'en' ? 'Find out now' : 'Probar ahora'}</span>
              <span className="flex sm:hidden">{lang === 'en' ? 'Find out' : 'Probar ahora'}</span>
            </div>
            <ArrowRight size={20} weight="bold" className="w-8 sm:w-6 h-8 sm:h-6 transform sm:group-hover:translate-x-1 transition duration-200 ease-in-out" />
          </div>
        </div>
      </a>

      {children}
    </>
  );
}
