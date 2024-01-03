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
    const { currency } = req.query;
    const cachedProducts = cache.get('products');
    const productsRequest = await axios.get(PRODUCTS_URL + `?currency=${currency ?? 'eur'}`);
    const productsData: Product[] = productsRequest.data;

    if (!productsData && cachedProducts) {
      return res.status(200).json(cachedProducts);
    } else if (!productsData) {
      return res.status(404).end();
    } else if (productsData && cachedProducts) {
      const cachedProductsIds = cachedProducts.map((product: Product) => product.id);
      const productsIds = productsData.map((product: Product) => product.id);

      if (JSON.stringify(cachedProductsIds) === JSON.stringify(productsIds)) {
        return res.status(200).json(cachedProducts);
      }
    }

    // Cached for 5 hours
    cache.put('products', productsData, 1000 * 60 * 60 * 5);
    res.status(200).json(productsData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
