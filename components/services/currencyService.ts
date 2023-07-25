import axios from 'axios';

export const currency = {
  US: '$',
  GB: '£',
};

const getCurrency = async () => {
  const countryCode = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
  return countryCode;
};

const filterCurrencyByCountry = async () => {
  const { data } = await getCurrency();

  const currencyIcon = currency[data.country] || '€';
  return currencyIcon;
};

export const currencyService = {
  getCurrency,
  filterCurrencyByCountry,
};
