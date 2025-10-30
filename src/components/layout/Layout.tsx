/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import TopBanner from '@/components/banners/TopBanner';
import { INTERNXT_URL, EXCLUDED_PATHS_FOR_BANNER } from '@/constants';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { handleImpact } from '@/services/impact.service';
import { saveGclidToCookie } from '@/lib/cookies';

const slogan = {
  en: "Internxt is a secure cloud storage service based on encryption and absolute privacy. Internxt's open-source suite of cloud storage services protects your right to privacy. Internxt Drive, Photos, Send, and more.",
  es: 'Internxt es un servicio seguro de almacenamiento en la nube basado en el cifrado y la privacidad absoluta. El conjunto de servicios de código abierto de Internxt protege tu privacidad. Internxt Drive, Photos, Send y mucho más.',
  fr: "Internxt est un service de stockage en ligne sécurisé basé sur le chiffrage et la confidentialité absolue. La suite open-source de services de stockage en nuage d'Internxt protège votre droit à la vie privée. Internxt Drive, Photos, Send, et plus encore.",
};

interface LayoutProps {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly description: string;
  readonly segmentName?: string | null;
  readonly disableMailerlite?: boolean;
  readonly disableDrift?: boolean;
  readonly isProduction?: boolean;
  readonly specialOffer?: string;
  readonly isBannerFixed?: boolean;
  readonly lang?: string;
  readonly pathnameForSEO?: string;
}

const imageLang = new Set(['ES', 'FR', 'EN']);

export default function Layout({
  children,
  title = 'Internxt',
  description = 'Internxt',
  segmentName = null,
  disableMailerlite = false,
  specialOffer,
  pathnameForSEO,
  disableDrift = true,
  isBannerFixed,
}: LayoutProps) {
  const router = useRouter();
  const { dialogIsOpen } = useGlobalDialog();
  const pathname = pathnameForSEO ? pathnameForSEO : router.pathname === '/' ? '' : router.pathname;
  const lang = router.locale;
  const shouldShowBanner = !EXCLUDED_PATHS_FOR_BANNER.includes(pathname) && dialogIsOpen(GlobalDialog.TopBanner);

  const langToUpperCase = lang?.toLocaleUpperCase() as string;
  const imagePreview = imageLang.has(langToUpperCase) ? langToUpperCase : 'EN';

  // THIS USE EFFECT SHOULD NOT BE REMOVED OR MODIFIED IN ANY WAY BECAUSE IT IS USED TO SEE THE NUMBER OF VISITS TO THE WEBSITE FROM AFFILIATES IN IMPACT
  useEffect(() => {
    const params = new URLSearchParams(globalThis.location.search);
    const source = params.get('utm_source');
    const gclid = params.get('gclid');

    if (gclid) {
      saveGclidToCookie(gclid);
    }

    if (source !== 'Impact') return;

    handleImpact({
      userAgent: navigator.userAgent,
      source,
      page: {
        url: globalThis.location.href,
        referrer: document.referrer,
      },
    });
  }, [segmentName]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`${INTERNXT_URL}${lang === 'en' ? '' : `/${lang}`}${pathname}`} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${INTERNXT_URL}${lang === 'en' ? '' : `/${lang}`}${pathname}`} />
        <meta
          property="og:image"
          content={specialOffer || `${INTERNXT_URL}/images/previewLink/PreviewGeneric${imagePreview}.png`}
        />
        <meta property="twitter:url" content={`${INTERNXT_URL}${lang === 'en' ? '' : `/${lang}`}${pathname}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content={specialOffer || `${INTERNXT_URL}/images/previewLink/PreviewGeneric${imagePreview}.png`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="thumbnail" content={`${INTERNXT_URL}/images/previewLink/LifetimeGoogleSearch.png`} />
        <meta name="apple-itunes-app" content={`app-id=1465869889`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="/cookiebanner.style.css" />

        <link rel="alternate" hrefLang="en-US" href={`https://internxt.com${pathname}`} />
        <link rel="alternate" hrefLang="es-ES" href={`https://internxt.com/es${pathname}`} />
        <link rel="alternate" hrefLang="de-DE" href={`https://internxt.com/de${pathname}`} />
        <link rel="alternate" hrefLang="fr-FR" href={`https://internxt.com/fr${pathname}`} />
        <link rel="alternate" hrefLang="it-IT" href={`https://internxt.com/it${pathname}`} />
        <link rel="alternate" hrefLang="ru-RU" href={`https://internxt.com/ru${pathname}`} />
        <link rel="alternate" hrefLang="zh-CN" href={`https://internxt.com/zh${pathname}`} />
        <link rel="alternate" hrefLang="zh-TW" href={`https://internxt.com/zh-tw${pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://internxt.com${pathname}`} />

        <style
          style={{ margin: 0, padding: 0, textDecoration: 'none', listStyle: 'none', boxSizing: 'border-box' }}
        ></style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P7N7LW5G');`,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5GWZKXKB');`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P44DHDHK');`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              var AddShoppersWidgetOptions = { loadCss: false, pushResponse: false };
              (function(){
                  var t = document.createElement("script");
                  t.type = "text/javascript";
                  t.async = true;
                  t.id = "AddShoppers";
                  t.src = "https://shop.pe/widget/widget_async.js#686e92fe5eacb3be0df9b1d8";
                  document.getElementsByTagName("head")[0].appendChild(t);
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(){
        var s = document.createElement("script");
        s.async = true;
        s.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//trkwwtarget.com/track/code.js";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(s, a);
      })();
    `,
          }}
        />

        <script src="https://retarglow.com/pixel"></script>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CHHGLQTHSB"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CHHGLQTHSB');
            `,
          }}
        />

        {lang === 'es' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
          $(document).ready(function() {
            cookieBanner.init();
        });
          `,
            }}
          />
        )}

        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=VBJnZ5"
        ></script>

        <script async src="/js/cookiebanner.script.js" />

        {!disableMailerlite && <Script defer src="/js/mailerlite.js" />}
        {!disableDrift && <Script defer src="/js/drift.js" />}
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P7N7LW5G"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager iframe"
        ></iframe>
      </noscript>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5GWZKXKB"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager two"
        ></iframe>
      </noscript>

      <noscript>
        <iframe
          src="https://track.adsynergix.com/adsy.js?noscript=1"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="AdSynergix Pixel"
        ></iframe>
      </noscript>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Internxt",
          "url": "https://www.internxt.com/",
          "logo": "https://internxt.com/logos/internxt/cool-gray-90.svg",
          "founder": "Fran Villalba Segarra",
          "foundingDate": "2020",
          "location": "Valencia, Spain",
          "legalName": "Internxt Universal Technologies SL",
          "slogan": "${slogan[lang as string]}",
          "sameAs": [
            "https://twitter.com/Internxt",
            "https://www.facebook.com/internxt",
            "https://es.linkedin.com/company/internxt",
            "https://www.instagram.com/internxt/",
            "https://github.com/internxt"
          ]
        }`}
      </Script>
      {shouldShowBanner ? (
        <>
          <TopBanner isBannerFixed={isBannerFixed} />
          <div className="flex flex-col overflow-hidden pt-[64px] lg:pt-[54px]">{children}</div>
        </>
      ) : (
        children
      )}

      {/* <BFBanner /> */}
    </>
  );
}
