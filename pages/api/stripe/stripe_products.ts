import axios from 'axios';

import { NextApiRequest, NextApiResponse } from 'next';

export interface Product {
  id: string;
  currency: string;
  amount: number;
  bytes: number;
  interval: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<Product | void> {
  if (req.method === 'GET') {
    const productsRequest = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/prices`);
    const productsData: Product[] = productsRequest.data;

    if (!productsData) return res.status(404).end(); //Something went wrong while fetching the products

    res.status(200).json(productsData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
