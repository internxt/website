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

export async function getStaticProps() {
    const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=ad054d41-e820-4ebb-805b-dabf899a49ff&symbol=INXT&convert=EUR'
    const res = await fetch(URL)
    const data = await res.json()

    const sgMail = require('@sendgrid/mail')
    require('dotenv').config()

    console.log(process.env.SENDGRID_API_KEY)

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'aldimirprincipal@gmail.com',
        from: 'hello@internxt.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //sgMail.send(msg)

    return {
        props: {
            data: data.data.INXT
        }
    }
}



export default Token;