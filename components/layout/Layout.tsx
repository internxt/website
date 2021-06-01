import Head from 'next/head'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
  segmentName?: string | null
  disableMailerlite?: boolean
  disableDrift?: boolean
  disableAdtrack?: boolean
  disableJivosite?: boolean
}

export default function Layout({
  children,
  title = 'Internxt',
  description = "Internxt",
  segmentName = null,
  disableMailerlite = false,
  disableDrift = true,
  disableAdtrack = false,
  disableJivosite = false
}: LayoutProps) {

  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="alternate" hrefLang="en" href="https://internxt.com/" />
        <link rel="alternate" hrefLang="es" href="https://internxt.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description}></meta>
        <link rel="icon" href="/favicon.ico" />
        {!disableMailerlite && <script src="/js/mailerlite.js"></script>}
        <script src={`https://internxt.com/js/sg.js`}></script>
        {!disableDrift && <script src="/js/drift.js"></script>}
        {!disableJivosite && <script src="//code-eu1.jivosite.com/widget/go1VHRddni" async></script>}
        <script src="/js/twitter.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `analytics.page(\'${segmentName}\')` }} />
        {!disableAdtrack && <script src="/js/adtrack.js"></script>}
      </Head>
      {children}
    </>
  )
}