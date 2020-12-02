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

export async function getServerSideProps(ctx) {
    const lang = ctx.locale
    const descriptions = require(`../assets/lang/en/photos-descriptions.json`)
    
    const Cookies = require('cookies')
    const moment = require('moment')
    const url = require('url')
    const queryString = require('querystring')
    const cookies = new Cookies(ctx.req, ctx.res)
  
    const query = url.parse(ctx.req.url).query
    const parsedQuery = queryString.parse(query)
    let referral
    const expires = moment().add(2, 'days').toDate()
  
    referral = parsedQuery.ref
  
    if (referral) {
        cookies.set('REFERRAL', referral, {
            domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
            expires: expires,
            overwrite: true
        })  
    }
    
  return {
    props: { descriptions }
  }
}
 
export default Pricing;