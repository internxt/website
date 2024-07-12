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
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<Product | void> {
  if (req.method === 'GET') {
    const { currency } = req.query;

    try {
      const individualsProductsRequest = axios.get(`${PRODUCTS_URL}?currency=${currency}`);
      const businessProductsRequest = axios.get(`${PRODUCTS_URL}?userType=business&currency=${currency}`);

      const promises = await Promise.all([individualsProductsRequest, businessProductsRequest]);

      const [individualsProductsResponse, businessProductsResponse] = promises;

      const businessProductsData = businessProductsResponse.data;
      const individualsProductsData: Product[] = individualsProductsResponse.data;

      const productsData = {
        individuals: individualsProductsData,
        business: businessProductsData,
      };

      return res.status(200).json(productsData);
    } catch (err) {
      const error = err as Error;
      return res.status(500).send({
        message: error.message,
      });
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
