import axios from 'axios';
import cache from 'memory-cache';

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
    if (cache.get('products')) return res.status(200).json(cache.get('products'));

    const productsRequest = await axios.get(PRODUCTS_URL);
    const productsData: Product[] = productsRequest.data;

    if (!productsData) return res.status(404).end(); //Something went wrong while fetching the products
    cache.put('products', productsData, 1000 * 60 * 60 * 24); // 24 hours
    res.status(200).json(productsData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
