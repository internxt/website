import axios from 'axios';
import bytes from 'bytes';

export enum Interval {
  'free' = 'free',
  'month' = 'month',
  'year' = 'year',
  'lifetime' = 'lifetime',
}

export enum Products {
  'free' = 'free',
  '20GB' = '20GB',
  '200GB' = '200GB',
  '2TB' = '2TB',
  '5TB' = '5TB',
  '10TB' = '10TB',
}

async function getAllPrices() {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/stripe_products`);
    const { data } = res;

    if (data) {
      const transformedData = {
        individuals: {},
      };

      Object.values(data).forEach((productValue: any) => {
        const storage = bytes(productValue.bytes);

        if (productValue.interval === Interval.month) {
          transformedData.individuals[Interval.month] = {
            ...transformedData.individuals[Interval.month],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
            },
          };
        } else if (productValue.interval === Interval.year) {
          transformedData.individuals[Interval.year] = {
            ...transformedData.individuals[Interval.year],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
            },
          };
        } else if (productValue.interval === Interval.lifetime) {
          transformedData.individuals[Interval.lifetime] = {
            ...transformedData.individuals[Interval.lifetime],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
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
  } catch (err) {
    console.error(err);
    return false;
  }
}
async function getLifetimePrices() {
  try {
    const res = await axios.get(`${window.origin}/api/stripe/stripe_products`);
    const { data } = res;

    if (data) {
      const transformedData = {
        individuals: {},
      };

      Object.values(data).forEach((productValue: any) => {
        const storage = bytes(productValue.bytes);

        if (productValue.interval === Interval.lifetime) {
          transformedData.individuals[Interval.lifetime] = {
            ...transformedData.individuals[Interval.lifetime],
            [storage]: {
              priceId: productValue.id,
              storage: storage,
              price: Math.abs(productValue.amount / 100).toFixed(2),
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
  } catch (err) {
    console.error(err);
    return false;
  }
}

export const stripeService = {
  getAllPrices,
  getLifetimePrices,
};
