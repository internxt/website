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
import { useEffect, useState } from 'react'
import cookies from '../lib/cookies'

const Home = (props) => {
  const [consentCookie, setConsentCookie] = useState(true)
  const metatags = props.metatagsDescriptions.filter(desc => desc.id === "drive")

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true')
    setConsentCookie(true)
  }

  useEffect(() => {
    AOS.init()
    const cookie = localStorage.getItem('CookieConsent')

    if (!cookie) setConsentCookie(false)
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

      <div className={consentCookie ? 'hidden' : `cookies-warning position-fixed mobile:w-60`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="alert alert-cookies alert-dismissible my-0 mobile:text-xxxs mobile:pr-8">
                Internxt uses cookies to make its website easier to use.
                <a href="/legal" className="alert-cookies__link">Learn more about cookies. </a>

                <button type="button" onClick={handleAcceptCookies} className="close alert-cookies__close">
                  <span>×</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
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
        return 'https://github.com/internxt/drive-desktop/releases'
    }
  })();


  const lang = ctx.locale
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`)
  const descriptions = require(`../assets/lang/${lang}/drive-descriptions.json`)
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`)
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`)

  cookies.setReferralCookie(ctx);

  return {
    props: { downloadUrl, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions }
  }
}

export default Home;