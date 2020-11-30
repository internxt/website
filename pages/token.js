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
            <Container1 id='1' />
            <Container2 id='2' />
            <Container3 id='3' />
            <Container4 id='4' />
            <Container5 id='5' />
            <Container6 id='6' />
            <Container7 id='7' data={props.data} />
            <Container8 id='8' />
            <Footer />
        </Layout>
    );
}

export async function getStaticProps(context) {
    const URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&symbol=INXT&convert=EUR`
    const res = await fetch(URL)
    const data = await res.json()

    const lang = context.locale
    const descriptions = require(`../assets/lang/${lang}/core-descriptions.json`)

    return {
        props: {
            data: data.data.INXT,
            descriptions
        }
    }
}



export default Token;