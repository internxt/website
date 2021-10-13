import cache from 'memory-cache';

type ConversionType = 'EUR' | 'BTC' | 'ETH' | 'LTC';

async function getInxtConversion(convertTo: ConversionType) {
  const URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&symbol=INXT&convert=${convertTo}`;
  const res = await fetch(URL);
  const data = await res.json();
  return data;
}

export default async function getInxtValues() {
  const cachedData = cache.get('cmc');

  if (!cachedData) {
    const inxtToEUR = await getInxtConversion('EUR');
    const inxtToBTC = await getInxtConversion('BTC');
    const inxtToETH = await getInxtConversion('ETH');
    const inxtToLTC = await getInxtConversion('LTC');
    const data = {
      inxtToEUR, inxtToBTC, inxtToETH, inxtToLTC, cache: false
    };
    cache.put('cmc', data, 5 * 60 * 1000 * 4);
  } else {
    cachedData.cache = true;
  }

  return cache.get('cmc');
}
