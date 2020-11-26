import Link from 'next/link'
import Head from 'next/head'

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
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={description}></meta>
                <link rel="icon" href="/favicon.ico" />
                <script src="js/mailerlite.js"></script>
                <script src="js/segment.js"></script>
                <script src="js/drift.js"></script>
                <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_V3_PK}`}></script>
                <script dangerouslySetInnerHTML={{ __html: `analytics.page(\'${segmentName}\')` }} />
            </Head>
            {children}
        </>
    )
}