import Container1 from '../components/lifetime/Container1'
import Container3 from '../components/drive/Container3'
import Container4 from '../components/drive/Container4'
import Container5 from '../components/drive/Container5'
import Container6 from '../components/drive/Container6'
import Container7 from '../components/drive/Container7'
import Container8 from '../components/drive/Container8'
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout'
import TopBar from '../components/layout/TopBar'
import { useEffect } from 'react'
import AOS from 'aos'
import { redirectToCheckoutAction } from '../components/CheckoutForm'

const Lifetime = (props) => {
  const metatags = props.metatagsDescriptions.filter(desc => desc.id === "drive")

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName='lifetime'>
      <TopBar hideSignIn={true} signUpAction={redirectToCheckoutAction} signUpText={'Claim now!'} />
      <Container1 id='9' descriptions={props.descriptions} />
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
  const lang = ctx.locale
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`)
  const descriptions = require(`../assets/lang/${lang}/drive-descriptions.json`)
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`)
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`)

  return {
    props: { metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions }
  }
}

export default Lifetime;