import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/photos/Container1'
import Container2 from '../components/photos/Container2'
import Container3 from '../components/photos/Container3'
import Container4 from '../components/photos/Container4'
import Layout from '../components/layout/Layout'

const Photos = (props) => {
    return ( 
        <Layout segmentName="photos" title='Internxt Photos – Alternative to Google Photos.' description="All your photos in one secure place that&#039;s completely private. Client-side encrypted. Secure alternative to Google Photos." >
            <TopBar />
            <Container1 id='1' descriptions={props.descriptions} />
            <Container2 id='2' descriptions={props.descriptions} />
            <Container3 id='3' descriptions={props.descriptions} />
            <Container4 id='4' descriptions={props.descriptions} />
            <Footer />
        </Layout>
     );
}

export async function getStaticProps(context) {
    const lang = context.locale
    const descriptions = require(`../assets/lang/en/photos-descriptions.json`)

    return {
        props: {
            descriptions
        }
    }
}
 
export default Photos;