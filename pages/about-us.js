import Axios from 'axios';
import { parseString } from 'xml2js'
import Container1 from '../components/about-us/Container1'
import Container2 from '../components/about-us/Container2'
import Container3 from '../components/about-us/Container3'
import Container4 from '../components/about-us/Container4'
import Container5 from '../components/about-us/Container5'
import Container6 from '../components/about-us/Container6'
import Container7 from '../components/about-us/Container7'
import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'

const AboutUs = () => {

    return ( 
        <>
            <Container1 id='1'/>
            <Container2 id='2'/>
            <Container3 id='3'/>
            <Container4 id='4'/>
            <Container5 id='5'/>
            <Container6 id='6'/>
            <Container7 id='7'/>
            <Footer />
        </>
        
     );
}

/* export async function getStaticProps() {
    const POSTS_URL = 'https://medium.com/feed/Internxt'

    const data = Axios( POSTS_URL )
        .then( res => {
            console.log(res)
            parseString(xml, ( err, res ) => {
                JSON.parse(JSON.stringify(res.rss.channel))
            })
        })
        .catch( err => console.log(err))

    console.log(data)
    return {
        props: { data }
    }
} */
 
export default AboutUs;