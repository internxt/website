import Layout from "../../components/layout/Layout";

export default function Success() {
    return <Layout segmentName="landing-lifetime-success">
        <script dangerouslySetInnerHTML={{ __html: `analytics.track('landing-lifetime-converted', function() { window.location.href='https://drive.internxt.com/login'; });` }} />
    </Layout>
}