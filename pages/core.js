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

const Core = (props) => {
    return ( 
        <Layout segmentName="core" title='Internxt Core – Get paid to share.' description="Get paid to share the exceeding disk space of your computer to host encrypted shards of data as part of a decentralized network of servers." >
            <TopBar />
            <Container1 id='1' {...props} />
            <Container2 id='2' />
            <Container3 id='3' />
            <Container4 id='4' />
            <Container5 id='5' />
            <Container6 id='6' />
            <Container7 id='7' />
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
          return 'https://github.com/internxt/core-gui/releases';
      }
    })();
  
    return {
      props: { downloadUrl }
    }
  }
 
export default Core;