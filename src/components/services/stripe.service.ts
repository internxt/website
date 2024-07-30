import axios from 'axios';
import bytes from 'bytes';
import { currencyService } from './currency.service';
import { checkout } from '@/lib/auth';
import { PromoCodeName, PromoCodeProps } from '@/lib/types';

const CURRENCY_MAP = {
  eur: '€',
  usd: '$',
};

export enum Interval {
  Month = 'month',
  Year = 'year',
  Lifetime = 'lifetime',
}

export enum Products {
  'free' = 'free',
  '20GB' = '20GB',
  '200GB' = '200GB',
  '2TB' = '2TB',
  '5TB' = '5TB',
  '10TB' = '10TB',
}

interface ProductValue {
  id: string;
  bytes: number;
  amount: number;
  currency: string;
  interval: Interval;
}

export interface TransformedProduct {
  priceId: string;
  storage: string;
  price: number;
  currency: string;
  currencyValue: string;
  interval: Interval;
}

export interface ProductsDataProps {
  individuals: {
    [Interval.Month]: TransformedProduct[];
    [Interval.Year]: TransformedProduct[];
    [Interval.Lifetime]: TransformedProduct[];
  };
  business: {
    [Interval.Month]: TransformedProduct[];
    [Interval.Year]: TransformedProduct[];
  };
}

async function getPrices(currencySpecified?: string) {
  const currency = await getCurrency(currencySpecified);
  const data = await fetchProductData(currency);
  if (data) {
    const transformedData = transformProductData(data.individuals, data.business);
    return transformedData;
  }
}

async function getCurrency(currencySpecified?: string): Promise<string> {
  if (currencySpecified) {
    return currencySpecified;
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

function transformProductData(individualsData: ProductValue[], businessData: ProductValue[]): ProductsDataProps {
  const transformedData = {
    individuals: {
      [Interval.Month]: [] as Array<any>,
      [Interval.Year]: [] as Array<any>,
      [Interval.Lifetime]: [] as Array<any>,
    },
    business: {
      [Interval.Month]: [] as Array<any>,
      [Interval.Year]: [] as Array<any>,
    },
  };

  const transform = (data: ProductValue[], type: 'individuals' | 'business') => {
    data.forEach((productValue: any) => {
      const storage = bytes(productValue.bytes);
      const interval = productValue.interval;

      if ([Interval.Month, Interval.Year, Interval.Lifetime].includes(interval)) {
        transformedData[type][interval].push({
          priceId: productValue.id,
          storage: storage,
          price: Math.abs(productValue.amount / 100).toFixed(2),
          currency: CURRENCY_MAP[productValue.currency],
          currencyValue: productValue.currency,
          interval: interval,
        });
      }
    });

    // Sort products by price ascending order for each interval (month, year, lifetime)
    Object.keys(transformedData[type]).forEach((interval) => {
      transformedData[type][interval].sort((a, b) => a.price - b.price);
    });
  };

  transform(individualsData, 'individuals');
  transform(businessData, 'business');

  return transformedData;
}

async function getSelectedPrice(interval: string, plan: string, planType: 'individuals' | 'business' = 'individuals') {
  //Filter prices by plan
  const prices = await getPrices();
  const selectedPrice = prices?.[planType][interval][plan];
  return selectedPrice;
}

async function getCoupon(couponName: PromoCodeName) {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/get_coupons`, {
      params: {
        couponName,
      },
    });
    const { data: CouponData } = res;

    return CouponData;
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

const redirectToCheckout = (
  planId: string,
  currencyValue: string,
  isCheckoutForLifetime: boolean,
  promoCodeId?: PromoCodeProps['codeId'],
) => {
  checkout({
    planId,
    promoCodeId,
    currency: currencyValue ?? 'eur',
    mode: isCheckoutForLifetime ? 'payment' : 'subscription',
  });
};

export const stripeService = {
  getPrices,
  getSelectedPrice,
  getCoupon,
  getLifetimeCoupons,
  redirectToCheckout,
};
