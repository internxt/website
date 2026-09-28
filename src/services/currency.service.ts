import axios from 'axios';

export const currency = {
  eur: '€',
  usd: '$',
  inr: '₹',
  brl: 'R$',
};

export const priceValue = {
  US: 'usd',
  CA: 'usd',
  IN: 'inr',
  BR: 'brl',
  SA: 'usd', // Saudi Arabia
  AE: 'usd', // United Arab Emirates (UAE)
  QA: 'usd', // Qatar
  BH: 'usd', // Bahrain
  OM: 'usd', // Oman
  IR: 'usd', // Iran
};

const objectStorageCurrencyValue = {
  eur: 'eur',
  usd: 'usd',
  inr: 'usd',
  brl: 'eur',
};

const getCountry = async () => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
  return data;
};

const filterCurrencyByCountry = async (currencySpecified?: string) => {
  let country;
  if (currencySpecified) {
    country = currencySpecified;
  } else {
    const data = await getCountry();
    country = data.country;
  }

  const currencyValue = priceValue[country] || 'eur';

  const currencyIcon = {
    currency: currency[currencyValue],
    currencyValue,
  };

  return currencyIcon;
};

const filterObjectStorageCurrencyByCountry = async () => {
  const { currencyValue } = await filterCurrencyByCountry();
  const objectStorageCurrency = objectStorageCurrencyValue[currencyValue] || 'eur';

  return {
    currency: currency[objectStorageCurrency],
    currencyValue: objectStorageCurrency,
  };
};

export const currencyService = {
  getCountry,
  filterCurrencyByCountry,
  filterObjectStorageCurrencyByCountry,
};
