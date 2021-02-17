import cache from 'memory-cache'

export default async function getInxtValue() {
  const cachedData = cache.get('cmc');

  if (!cachedData) {
    const URL = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}&symbol=INXT&convert=EUR`
    const res = await fetch(URL)
    const data = await res.json()
    cache.put('cmc', data, 5 * 60 * 1000)
  }

  return cache.get('cmc');
}