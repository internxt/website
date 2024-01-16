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

const getCurrencyValue = async () => {
  const values = await axios.get(`${window.origin}/api/currency_value`);

  return values;
};

const filterCurrencyByCountry = async () => {
  const { data } = await getCountry();
  const currencyValue = await getCurrencyValue();

  const currencyIcon = {
    symbol: currency[data.country] || '€',
    value: currencyValue.data[priceValue[data.country]] || 1,
  };

  return currencyIcon;
};

const getCurrencyPrice = async () => {
  const { data } = await getCountry();

  return priceValue[data.country];
};

export const currencyService = {
  getCountry,
  filterCurrencyByCountry,
  getCurrencyPrice,
};
