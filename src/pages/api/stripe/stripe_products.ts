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

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const { currency } = req.query;

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

      res.status(200).json(productsData);
      return;
    } catch (err) {
      const error = err as Error;
      res.status(500).json({
        message: error.message,
      });
      return;
    }
  } else {
    res.status(405).end();
    return;
  }
}
