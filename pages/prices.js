import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import Container1 from '../components/prices/Container1'
import Container2 from '../components/prices/Container2'
import Container3 from '../components/prices/Container3'

const Prices = () => {
    return ( 
        <>
            <TopBar />
            <Container1 id='1' />
            <Container2 id='2' />
            <Container3 id='3' />
            <Footer />
        </>
     );
}
 
export default Prices;