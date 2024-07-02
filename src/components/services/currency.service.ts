import axios from 'axios';

export const currency = {
  US: '$',
  CA: '$',
};

export const priceValue = {
  US: 'usd',
  CA: 'usd',
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
    const { data } = await getCountry();
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
