import Head from 'next/head'
import 'aos/dist/aos.css'
import CookieConsent from "react-cookie-consent"
interface LayoutProps {
    children: React.ReactNode
    title: string
    description: string
    segmentName: string | null
    disableMailerlite: boolean
    disableDrift: boolean
}

export default function Layout({
    children,
    title = 'Internxt',
    description = "Internxt",
    segmentName = null,
    disableMailerlite = false,
    disableDrift = false
}: LayoutProps) {
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
                <script src={`/js/segment${process.env.NODE_ENV === 'production' ? '' : '-test'}.js`}></script>
                {!disableDrift && <script src="/js/drift.js"></script>}
                <script src="/js/twitter.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-6EXL38KVWG"></script>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.dataLayer = window.dataLayer || [];\
                    function gtag(){dataLayer.push(arguments);}\
                    gtag(\'js\', new Date());\
                    gtag(\'config\', \'G-6EXL38KVWG\');\
                    gtag(\'config\', \'AW-728922855\');\
                '}} />
                <script dangerouslySetInnerHTML={{ __html: `analytics.page(\'${segmentName}\')` }} />
            </Head>
            {children}
            <CookieConsent 
                style={{ 
                    background: "#2A2C35",
                    alignItems: 'baseline',
                    color: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    left: '32.5%',
                    position: 'fixed',
                    width: '35%',
                    borderRadius: '21px',
                    marginBottom: '10px'
                }}
                buttonStyle={{ 
                    background: "#2A2C35", 
                    color: "#FFFFFF", 
                    fontSize: "13px" 
                }}
                buttonText="X"
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </>
    )
}