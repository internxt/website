import axios from 'axios';

export const currency = {
  US: '$',
};

export const priceValue = {
  US: 'usd',
};

const getCountry = async () => {
  const countryCode = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
  return countryCode;
};

const filterCurrencyByCountry = async () => {
  const { data } = await getCountry();

  const currencyIcon = {
    currency: currency[data.country] || '€',
    currencyValue: priceValue[data.country] || 'eur',
  };

  return currencyIcon;
};

export const currencyService = {
  getCountry,
  filterCurrencyByCountry,
};
