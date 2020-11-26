
const API_URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&symbol=INXT&convert=`

const BTC_API_URL = `${API_URL}BTC`;
const ETH_API_URL = `${API_URL}ETH`;
const LTC_API_URL = `${API_URL}LTC`;

export default async (req, res) => {
    const btc_values = await fetch(BTC_API_URL).then(res => res.json()).catch(err => null)
    const eth_values = await fetch(ETH_API_URL).then(res => res.json()).catch(err => null)
    const ltc_values = await fetch(LTC_API_URL).then(res => res.json()).catch(err => null)

    res.statusCode = 200
    
    res.json({ 
        btc: btc_values.data.INXT.quote.BTC.price,
        eth: eth_values.data.INXT.quote.ETH.price,
        ltc: ltc_values.data.INXT.quote.LTC.price,
     })
}
