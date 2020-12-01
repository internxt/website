import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import Container1 from '../components/prices/Container1'
import Container2 from '../components/prices/Container2'
import Layout from '../components/layout/Layout'

const Pricing = () => {
    return ( 
        <Layout segmentName="pricing" title='Internxt – Pricing' description="Internxt&#039;s pricing. One membership for all our services. Internxt Drive, Internxt Send, Internxt Photos. Welcome to the Internxt Universe." >
            <TopBar />
            <Container1 id='1' />
            <Container2 id='2' />
            <Footer />
        </Layout>
     );
}

export async function getStaticProps(context) {

    const lang = context.locale
    const descriptions = require(`../assets/lang/en/core-descriptions.json`)

    return {
        props: {
            descriptions
        }
    }
}
 
export default Pricing;