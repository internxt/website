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
import Cookies from 'cookies'

const Core = (props) => {
  return (
    <Layout segmentName="core" title='Internxt Core – Get paid to share.' description="Get paid to share the exceeding disk space of your computer to host encrypted shards of data as part of a decentralized network of servers." >
      <TopBar />
      <Container1 id='1' {...props} />
      <Container2 id='2' descriptions={props.descriptions} />
      <Container3 id='3' descriptions={props.descriptions} />
      <Container4 id='4' descriptions={props.descriptions} />
      <Container5 id='5' descriptions={props.descriptions} />
      <Container6 id='6' descriptions={props.descriptions} {...props} />
      <Container7 id='7' descriptions={props.descriptions} />
      <Footer />
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
        //console.log('Unknown device %s, User Agent: %s', uaParsed.os.family, ua);
        return 'https://github.com/internxt/core-gui/releases';
    }
  })();

  const lang = ctx.locale
  const descriptions = require(`../assets/lang/en/about-us-descriptions.json`)

  const moment = require('moment')
  const url = require('url')
  const queryString = require('querystring')
  const cookies = new Cookies(ctx.req, ctx.res)

  const query = url.parse(ctx.req.url).query
  const parsedQuery = queryString.parse(query)
  console.log(parsedQuery)
  let referral
  const expires = moment().add(2, 'days').toDate()

  referral = parsedQuery.ref
  console.log('---------------- REFERRAL ---------------------', referral)

  if (referral) {
    cookies.set('REFERRAL', referral, {
      domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
      expires: expires,
      overwrite: true
    })  
  }

  return {
    props: { downloadUrl, descriptions }
  }
}

export default Core;