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

const getCountryFromUrl = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  const country = new URLSearchParams(window.location.search).get('country');
  return country ? country.toUpperCase() : undefined;
};

const filterCurrencyByCountry = async (currencySpecified?: string) => {
  let country;
  const countryFromUrl = getCountryFromUrl();
  if (currencySpecified) {
    country = currencySpecified;
  } else if (countryFromUrl) {
    country = countryFromUrl;
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
