import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/core/Container1'
import Container2 from '../components/core/Container2'
import Container3 from '../components/core/Container3'
import Container4 from '../components/core/Container4'
import Container5 from '../components/core/Container5'
import Container6 from '../components/core/Container6'
import Container7 from '../components/core/Container7'
import Layout from '../components/layout/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Core = (props) => {
    
  const metatags = props.metatagsDescriptions.filter( desc => desc.id === "core")
  
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout segmentName="core" title={metatags[0].title} description={metatags[0].description} >
      <TopBar />
      <Container1 id='1' {...props} />
      <Container2 id='2' descriptions={props.descriptions} />
      <Container3 id='3' descriptions={props.descriptions} />
      <Container4 id='4' descriptions={props.descriptions} />
      <Container5 id='5' descriptions={props.descriptions} />
      <Container6 id='6' descriptions={props.descriptions} {...props} />
      <Container7 id='7' descriptions={props.descriptions} />
      <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const userAgent = require('useragent')
  const ua = ctx.req.headers['user-agent']

  const uaParsed = userAgent.parse(ua);

  const downloadUrl = (() => {
    switch (uaParsed.os.family) {
      case 'Ubuntu':
        return 'https://internxt.com/downloads/core.deb';
      case 'Windows':
        return 'https://internxt.com/downloads/core.exe';
      case 'Mac OS X':
        return 'https://internxt.com/downloads/core.dmg';
      default:
        // No borrar
        console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua)
        return 'https://github.com/internxt/core-gui/releases';
    }
  })();

  const lang = ctx.locale
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`)
  const descriptions = require(`../assets/lang/${lang}/core-descriptions.json`)
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`)
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`)

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
      overwrite: true,
      httpOnly: false
    })  
  }

  return {
    props: { downloadUrl, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions }
  }
}

export default Core;