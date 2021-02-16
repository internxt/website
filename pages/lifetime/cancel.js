import Layout from "../../components/layout/Layout";

export default function Cancelled() {

    return <Layout segmentName="landing-lifetime-cancel">
        <script dangerouslySetInnerHTML={{ __html: `analytics.track('landing-lifetime-cancel', function() { window.location.href='https://internxt.com/lifetime'; });` }} />
    </Layout>
}