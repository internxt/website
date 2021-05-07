import React, {FC} from "react";
import { GetServerSideProps } from "next";
import Head from 'next/head'

interface SuccessProps {
    token: string,
    email: string,
    redirectUrl: string
}

const Success:FC<SuccessProps> = ({token, email, redirectUrl}) => {
    return <>
        <Head>
            <script src="/js/gtagmanager.js"></script>
            <title>Internxt</title>
            <link rel="alternate" hrefLang="en" href="https://internxt.com/" />
            <link rel="alternate" hrefLang="es" href="https://internxt.com/es" />
            <link rel="alternate" hrefLang="x-default" href="https://internxt.com/" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Subscription Checkout Succeed"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Token: {token}</p>
        <p>Email: {email}</p>
        <p>Redirect: {redirectUrl}</p>   
    </>
}


export default Success;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const host = (ctx.req.headers['host'].match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers['host']

    if (!ctx.query.sid) {
        return {
            props: {
                token: '',
                email: '',
                redirectUrl: '/'
            }
        }
    }

    const request = await fetch(host + '/api/stripe/session/' + ctx.query.sid)
    const body = await request.json()

    const redirectUrl = `${process.env.DRIVE_API_URL}/${body.email}?token=${body.token}`

    return {
        props: {
            token: body.token,
            email: body.email,
            redirectUrl
        }
    }
}

    
// import { GetServerSideProps } from "next";
// import Layout from "../../components/layout/Layout";

// export default function Success(props) {
//     return <Layout segmentName="landing-subscription200GB-success" disableMailerlite={true} disableDrift={true} title="Internxt Checkout Succcess" description="Redirect">
//         <script dangerouslySetInnerHTML={{ __html: `analytics.track('landing-subscription200GB-converted', function() { window.location.href='${props.redirectUrl}'; });` }} />
//         <div>
//             Automatic redirecting to <a href={props.redirectUrl}>Drive Web</a>...
//         </div>
//     </Layout>
// }

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const host = (ctx.req.headers['host'].match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers['host']

//     if (!ctx.query.sid) {
//         return {
//             props: {
//                 token: '',
//                 email: '',
//                 redirectUrl: '/'
//             }
//         }
//     }

//     const request = await fetch(host + '/api/stripe/session/' + ctx.query.sid)
//     const body = await request.json()

//     const redirectUrl = `${process.env.DRIVE_API_URL}/appsumo/${body.email}?token=${body.token}`

//     return {
//         props: {
//             token: body.token,
//             email: body.email,
//             redirectUrl
//         }
//     }
// }