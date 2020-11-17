import TopBar from '../components/layout/TopBar'
import Footer from '../components/layout/Footer'
import Container1 from '../components/token/Container1'
import Container2 from '../components/token/Container2'
import Container3 from '../components/token/Container3'
import Container4 from '../components/token/Container4'
import Container5 from '../components/token/Container5'
import Container6 from '../components/token/Container6'
import Container7 from '../components/token/Container7'
import Container8 from '../components/token/Container8'

const Token = (props) => {
    return ( 
        <>
            <TopBar />
            <Container1 id='1' />
            <Container2 id='2' />
            <Container3 id='3' />
            <Container4 id='4' />
            <Container5 id='5' />
            <Container6 id='6' />
            <Container7 id='7' data={props.data} />
            <Container8 id='8' />
            <Footer />
        </>
     );
}

export async function getStaticProps() {
    const URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=ad054d41-e820-4ebb-805b-dabf899a49ff&symbol=INXT&convert=EUR'
    const res = await fetch(URL)
    const data = await res.json()

    return {
        props: {
            data: data.data.INXT
        }
    }
}



export default Token;