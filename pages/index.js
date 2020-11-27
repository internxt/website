import Container1 from '../components/drive/Container1'
import Container2 from '../components/drive/Container2'
import Container3 from '../components/drive/Container3'
import Container4 from '../components/drive/Container4'
import Container5 from '../components/drive/Container5'
import Container6 from '../components/drive/Container6'
import Container7 from '../components/drive/Container7'
import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import Layout from '../components/layout/Layout'

const Home = (props) => {
  return (
    <Layout title='Internxt – Be limitless.' description="Internxt Drive is a private, green, free cloud storage service. Make the switch to a better cloud." segmentName='home'>
      <TopBar />
      <Container1 id='1' />
      <Container2 id='2' />
      <Container3 id='3' />
      <Container4 id='4' />
      <Container5 id='5' {...props} />
      <Container6 id='6' />
      <Container7 id='7' />
      <Footer />
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
        return 'https://drive.internxt.com'
    }
  })();

  return {
    props: { downloadUrl }
  }
}

export default Home;