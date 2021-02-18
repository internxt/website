import { GetServerSideProps } from "next";
import Layout from "../../components/layout/Layout";

export default function Success(props) {
    return <Layout segmentName="landing-exclusive-lifetime-success" disableMailerlite={true} disableDrift={true} title="Internxt Checkout Succcess" description="Redirect">
        <script dangerouslySetInnerHTML={{ __html: `analytics.track('landing-exclusive-lifetime-converted', function() { window.location.href='${props.redirectUrl}'; });` }} />
        <div>
            Automatic redirecting to <a href={props.redirectUrl}>Drive Web</a>...
        </div>
    </Layout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const host = (ctx.req.headers['host'].match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers['host']

    const request = await fetch(host + '/api/stripe/session/' + ctx.query.sid)
    const body = await request.json()

    const redirectUrl = `${process.env.DRIVE_API_URL}/appsumo/${body.email}?token=${body.token}`

    return {
        props: {
            token: body.token,
            email: body.email,
            redirectUrl
        }
    }
}