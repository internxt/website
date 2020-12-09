import Container1 from '../components/drive/Container1'
import Container2 from '../components/drive/Container2'
import Container3 from '../components/drive/Container3'
import Container4 from '../components/drive/Container4'
import Container5 from '../components/drive/Container5'
import Container6 from '../components/drive/Container6'
import Container7 from '../components/drive/Container7'
import Container8 from '../components/drive/Container8'
import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import Layout from '../components/layout/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = (props) => {

  const metatags = props.metatagsDescriptions.filter( desc => desc.id === "drive")

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName='home'>
      <TopBar />
      <Container1 id='1' descriptions={props.descriptions} />
      <Container2 id='2' descriptions={props.descriptions} cardDescriptions={props.cardDescriptions} />
      <Container3 id='3' descriptions={props.descriptions} />
      <Container4 id='4' descriptions={props.descriptions} />
      <Container5 id='5' {...props} />
      <Container6 id='6' descriptions={props.descriptions} />
      <Container7 id='7' descriptions={props.descriptions} />
      <Container8 id='8' descriptions={props.descriptions} />
      <Footer descriptions={props.footerDescriptions} cardDescriptions={props.cardDescriptions} />
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const userAgent = require('useragent')
  const ua = ctx.req.headers['user-agent']

  const uaParsed = userAgent.parse(ua);

  const downloadUrl = (() => {
    switch (uaParsed.os.family) {
      case 'iOS':
        return 'https://apps.apple.com/es/app/internxt-drive/id1465869889';
      case 'Android':
        return 'https://play.google.com/store/apps/details?id=com.internxt.cloud&hl=es';
      case 'Ubuntu':
        return 'https://internxt.com/downloads/drive.deb';
      case 'Windows':
        return 'https://internxt.com/downloads/drive.exe';
      case 'Mac OS X':
        return 'https://internxt.com/downloads/drive.dmg';
      default:
        // No borrar
        console.log('Unknown device %s. User-Agent: %s', uaParsed.os.family, ua)
        return 'https://drive.internxt.com'
    }
  })();

  
  const lang = ctx.locale
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`)
  const descriptions = require(`../assets/lang/${lang}/drive-descriptions.json`)
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
        overwrite: true
      })  
  }

  return {
    props: { downloadUrl, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions}
  }
}

export default Home;