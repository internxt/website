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
import LoyaltyProgram from '../components/token/LoyaltyProgram'
import Layout from '../components/layout/Layout'
import AOS from 'aos'
import { useEffect } from 'react'
import cookies from '../lib/cookies'
import cmc from '../lib/cmc'

const Token = (props) => {

    const metatags = props.metatagsDescriptions.filter(desc => desc.id === "token")

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <Layout segmentName="token" title={metatags[0].title} description={metatags[0].description} >
            <TopBar />
            <Container1 id='1' descriptions={props.descriptions} />
            <Container2 id='2' descriptions={props.descriptions} />
            <LoyaltyProgram id='9' descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
            <Container3 id='3' descriptions={props.descriptions} />
            <Container5 id='5' descriptions={props.descriptions} />
            <Container6 id='6' descriptions={props.descriptions} data={props.data} />
            <Container7 id='7' descriptions={props.descriptions} data={props.data} />
            <Container8 id='8' descriptions={props.descriptions} />
            <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const lang = ctx.locale
    const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`)
    const descriptions = require(`../assets/lang/${lang}/token-descriptions.json`)
    const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`)
    const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`)

    cookies.setReferralCookie(ctx);

    const data = await cmc();

    return {
        props: {
            data: data, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions
        }
    }
}


export default Token;