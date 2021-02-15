import Link from 'next/link'
import Head from 'next/head'
import 'aos/dist/aos.css'

export default function Layout({
    children,
    title = 'Internxt',
    description = "Internxt",
    segmentName = null
}) {
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
                <script src="js/mailerlite.js"></script>
                <script src={`js/segment${process.env.NODE_ENV === 'production' ? '' : '-test'}.js`}></script>
                <script src="js/drift.js"></script>
                <script src="js/twitter.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6EXL38KVWG"></script>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.dataLayer = window.dataLayer || [];\
                    function gtag(){dataLayer.push(arguments);}\
                    gtag(\'js\', new Date());\
                    gtag(\'config\', \'G-6EXL38KVWG\');\
                '}} />
                <script dangerouslySetInnerHTML={{ __html: `analytics.page(\'${segmentName}\')` }} />
            </Head>
            {children}
        </>
    )
}