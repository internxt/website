import axios from 'axios';
import bytes from 'bytes';
import { currencyService } from './currency.service';

export enum Interval {
  Month = 'month',
  Year = 'year',
  Lifetime = 'lifetime',
}

export interface ProductsProps {
  individuals: {} | undefined;
}

export enum Products {
  'free' = 'free',
  '20GB' = '20GB',
  '200GB' = '200GB',
  '2TB' = '2TB',
  '5TB' = '5TB',
  '10TB' = '10TB',
}

async function getPrices(isEur?: boolean) {
  const currency = await getCurrency(isEur);
  const data = await fetchProductData(currency);
  if (data) {
    const transformedData = transformProductData(data);
    return transformedData;
  }
}

async function getCurrency(isEur?: boolean): Promise<string> {
  if (isEur) {
    return 'eur';
  }
  try {
    const currencyResponse = await currencyService.filterCurrencyByCountry();
    return currencyResponse.currencyValue ?? 'eur';
  } catch (error) {
    console.error('Error getting currency:', error);
    return 'eur'; // Default to EUR in case of error
  }
}

async function fetchProductData(currency: string) {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/stripe_products?currency=${currency}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null;
  }
}

function transformProductData(data: any) {
  const transformedData = {
    individuals: {
      [Interval.Month]: [] as Array<any>,
      [Interval.Year]: [] as Array<any>,
      [Interval.Lifetime]: [] as Array<any>,
    },
  };

  data.forEach((productValue: any) => {
    const storage = bytes(productValue.bytes);
    const interval = productValue.interval;

    if ([Interval.Month, Interval.Year, Interval.Lifetime].includes(interval)) {
      transformedData.individuals[interval].push({
        priceId: productValue.id,
        storage: storage,
        price: Math.abs(productValue.amount / 100).toFixed(2),
        currency: productValue.currency,
      });
    }
  });

  // Sort products by price ascending order for each interval (month, year, lifetime)
  Object.keys(transformedData.individuals).forEach((interval) => {
    transformedData.individuals[interval].sort((a, b) => a.price - b.price);
  });

  return transformedData;
}

async function getSelectedPrice(interval: string, plan: string) {
  //Filter prices by plan
  const prices = await getPrices();
  const selectedPrice = prices?.individuals[interval][plan];
  return selectedPrice;
}

async function getCoupon(coupon: string) {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/get_coupons`, {
      params: {
        coupon,
      },
    });
    const { data } = res;
    return data;
  } catch (err) {
    const error = err as Error;

    throw new Error(error.message);
  }
}

async function getLifetimeCoupons() {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/get_lifetime_coupons`);
    const { data } = res;

    return data;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
}

export const stripeService = {
  getPrices,
  getSelectedPrice,
  getCoupon,
  getLifetimeCoupons,
};
