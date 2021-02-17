import { GetServerSideProps } from "next";
import Layout from "../../components/layout/Layout";

export default function Success() {
    return <Layout segmentName="landing-lifetime-success" disableMailerlite={true} disableDrift={true}>
        {/* <script dangerouslySetInnerHTML={{ __html: `analytics.track('landing-lifetime-converted', function() { window.location.href='https://drive.internxt.com/login'; });` }} /> */}
        <div style={{ border: 'solid 1px red', height: '100%' }}>
            sss
        </div>
    </Layout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const host = (ctx.req.headers['host'].match(/^localhost/) ? 'http://' : 'https://') + ctx.req.headers['host']

    const request = await fetch(host + '/api/stripe/session/' + ctx.query.sid)
    const body = await request.json()

    return { props: {  token: body.token} }
}