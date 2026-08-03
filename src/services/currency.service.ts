import axios from 'axios';

export const currency = {
  US: '$',
  CA: '$',
  usd: '$',
  eur: '€',
  IN: '$',
  SA: '$', // Saudi Arabia
  AE: '$', // United Arab Emirates (UAE)
  QA: '$', // Qatar
  BH: '$', // Bahrain
  OM: '$', // Oman
};

export const priceValue = {
  US: 'usd',
  CA: 'usd',
  IN: 'usd',
  SA: 'usd', // Saudi Arabia
  AE: 'usd', // United Arab Emirates (UAE)
  QA: 'usd', // Qatar
  BH: 'usd', // Bahrain
  OM: 'usd', // Oman
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

  const currencyIcon = {
    currency: currency[country] || '€',
    currencyValue: priceValue[country] || 'eur',
  };

  return currencyIcon;
};

export const currencyService = {
  getCountry,
  filterCurrencyByCountry,
};
