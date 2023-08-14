import axios from 'axios';

export const currency = {
  US: '$',
  GB: '£',
};

const value = {
  US: 'usd',
  GB: 'gbp',
};

const getCurrency = async () => {
  const countryCode = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
  return countryCode;
};

const getCurrencyValue = async () => {
  const values = await axios.get(`${window.origin}/api/currency_value`);

  return values;
};

const filterCurrencyByCountry = async () => {
  const { data } = await getCurrency();
  const currencyValue = await getCurrencyValue();

  const currencyIcon = {
    symbol: currency[data.country] || '€',
    value: currencyValue.data[value[data.country]] || 1,
  };

  return currencyIcon;
};

export const currencyService = {
  getCurrency,
  filterCurrencyByCountry,
};
