import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/token/Container1'
import Container2 from '../components/token/Container2'
import Container3 from '../components/token/Container3'
import Container4 from '../components/token/Container4'
import Container5 from '../components/token/Container5'
import Container6 from '../components/token/Container6'
import Container7 from '../components/token/Container7'
import Container8 from '../components/token/Container8'
import Layout from '../components/layout/Layout'

const Token = (props) => {
    return (
        <Layout segmentName="token" title='Internxt Token – Our tokenized asset.' description="Internxt token. Learn all about our cryptocurrency, INXT." >
            <TopBar />
            <Container1 id='1' descriptions={props.descriptions} />
            <Container2 id='2' descriptions={props.descriptions} />
            <Container3 id='3' descriptions={props.descriptions} />
            <Container4 id='4' descriptions={props.descriptions} />
            <Container5 id='5' descriptions={props.descriptions} />
            <Container6 id='6' descriptions={props.descriptions} />
            <Container7 id='7' descriptions={props.descriptions} data={props.data} />
            <Container8 id='8' descriptions={props.descriptions} />
            <Footer />
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&symbol=INXT&convert=EUR`
    const res = await fetch(URL)
    const data = await res.json()

    const lang = ctx.locale
    const descriptions = require(`../assets/lang/en/token-descriptions.json`)

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
        props: {
            data: data.data.INXT,
            descriptions
        }
    }
}


export default Token;