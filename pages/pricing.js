import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import Container1 from '../components/prices/Container1'
import Container2 from '../components/prices/Container2'
import Layout from '../components/layout/Layout'

const Pricing = () => {
    return ( 
        <Layout segmentName="pricing" title='Internxt Pricing – Paga.'>
            <TopBar />
            <Container1 id='1' />
            <Container2 id='2' />
            <Footer />
        </Layout>
     );
}
 
export default Pricing;