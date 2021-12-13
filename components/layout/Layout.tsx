import Head from 'next/head';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode,
  title: string,
  description: string,
  segmentName?: string | null,
  disableMailerlite?: boolean,
  disableDrift?: boolean,
  disableAdtrack?: boolean,
  disableJivosite?: boolean,
  isProduction?: boolean
}

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
  disableDrift = true,
  disableAdtrack = false,
  isProduction = process.env.NODE_ENV === 'production'
}: LayoutProps) {
  useEffect(() => {
    window.analytics.page(segmentName);
    AOS.init();
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
        <script defer src="/js/twitter.js" />
        {!disableAdtrack && <script defer src="/js/adtrack.js" />}
        {segmentName === 'Token' && <script src="https://crypto.com/price/static/widget/index.js" />}
      </Head>
      {children}
    </>
  );
}
