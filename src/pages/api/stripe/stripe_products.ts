import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export interface Product {
  id: string;
  currency: string;
  amount: number;
  bytes: number;
  interval: string;
}

const PRODUCTS_URL = `${process.env.NEXT_PUBLIC_PAYMENTS_API}/prices`;
const CACHE_EXPIRY_TIME = 12 * 60 * 60 * 1000;

let cachedProductsData: {
  timestamp: number;
  data: {
    individuals: Product[];
    business: Product[];
  } | null;
} = {
  timestamp: 0,
  data: null,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const { currency } = req.query;

    const now = Date.now();

    const isCacheValid = cachedProductsData.data && now - cachedProductsData.timestamp < CACHE_EXPIRY_TIME;

    if (isCacheValid) {
      return res.status(200).json(cachedProductsData.data);
    }

    try {
      const individualsProductsRequest = axios.get(`${PRODUCTS_URL}?currency=${currency}`);
      const businessProductsRequest = axios.get(`${PRODUCTS_URL}?userType=business&currency=${currency}`);

      const promises = await Promise.all([individualsProductsRequest, businessProductsRequest]);
      const [individualsProductsResponse, businessProductsResponse] = promises;

      const individualsProductsData: Product[] = individualsProductsResponse.data;
      const businessProductsData: Product[] = businessProductsResponse.data;

      const productsData = {
        individuals: individualsProductsData,
        business: businessProductsData,
      };

      cachedProductsData = {
        timestamp: Date.now(),
        data: productsData,
      };

      return res.status(200).json(productsData);
    } catch (err) {
      const error = err as Error;
      return res.status(500).send({
        message: error.message,
      });
    }
  } else {
    return res.status(405).end();
  }
}
