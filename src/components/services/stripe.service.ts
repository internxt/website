import axios from 'axios';
import bytes from 'bytes';
import { notificationService } from '@/components/Snackbar';
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
  let currency;

  if (isEur) {
    currency = 'eur';
  } else {
    currency = await currencyService.filterCurrencyByCountry();
  }

  const res = await axios.get(
    `${window.origin}/api/stripe/stripe_products?currency=${isEur ? 'eur' : currency.currencyValue ?? 'eur'}`,
  );
  const { data } = res;

  if (data) {
    const transformedData = {
      individuals: {},
    };

    Object.values(data).forEach((productValue: any) => {
      const storage = bytes(productValue.bytes);

      if (productValue.interval === Interval.Month) {
        transformedData.individuals[Interval.Month] = {
          ...transformedData.individuals[Interval.Month],
          [storage]: {
            priceId: productValue.id,
            storage: storage,
            price: Math.abs(productValue.amount / 100).toFixed(2),
            currency: productValue.currency,
          },
        };
      } else if (productValue.interval === Interval.Year) {
        transformedData.individuals[Interval.Year] = {
          ...transformedData.individuals[Interval.Year],
          [storage]: {
            priceId: productValue.id,
            storage: storage,
            price: Math.abs(productValue.amount / 100).toFixed(2),
            currency: productValue.currency,
          },
        };
      } else if (productValue.interval === Interval.Lifetime) {
        transformedData.individuals[Interval.Lifetime] = {
          ...transformedData.individuals[Interval.Lifetime],
          [storage]: {
            priceId: productValue.id,
            storage: storage,
            price: Math.abs(productValue.amount / 100).toFixed(2),
            currency: productValue.currency,
          },
        };
      }
    });

    // Sort products by price descending order for each interval (month, year, lifetime)
    Object.keys(transformedData.individuals).forEach((interval) => {
      transformedData.individuals[interval] = Object.values(transformedData.individuals[interval])
        .sort((a: any, b: any) => {
          return a.price - b.price;
        })
        .reduce((acc: any, curr: any) => {
          return {
            ...acc,
            [curr.storage]: curr,
          };
        }, {});
    });

    return transformedData;
  }
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
