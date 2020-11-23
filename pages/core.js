import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/core/Container1'
import Container2 from '../components/core/Container2'
import Container3 from '../components/core/Container3'
import Container4 from '../components/core/Container4'
import Container5 from '../components/core/Container5'
import Container6 from '../components/core/Container6'
import Container7 from '../components/core/Container7'

const Core = () => {
    return ( 
        <>
            <TopBar />
            <Container1 id='1' />
            <Container2 id='2' />
            <Container3 id='3' />
            <Container4 id='4' />
            <Container5 id='5' />
            <Container6 id='6' />
            <Container7 id='7' />
            <Footer />
        </>
     );
}
 
export default Core;