import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/photos/Container1'
import Container2 from '../components/photos/Container2'
import Container3 from '../components/photos/Container3'
import Container4 from '../components/photos/Container4'
import Container5 from '../components/photos/Container5'
import Layout from '../components/layout/Layout'

const Photos = (props) => {
    return ( 
        <Layout segmentName="photos" title='Internxt Photos – Alternative to Google Photos.' description="All your photos in one secure place that&#039;s completely private. Client-side encrypted. Secure alternative to Google Photos." >
            <TopBar />
            <Container1 id='1' descriptions={props.descriptions} />
            <Container2 id='2' descriptions={props.descriptions} />
            <Container3 id='3' descriptions={props.descriptions} />
            <Container4 id='4' descriptions={props.descriptions} />
            <Container5 id='5' descriptions={props.descriptions} />
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
 
export default Photos;