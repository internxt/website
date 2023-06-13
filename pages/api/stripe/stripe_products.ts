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
    const productsRequest = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/payments/prices`);
    const productsData: Product[] = productsRequest.data;

    // Return the products with the correct parameters to be used in the client side.
    // The client side will use the products only to show the price, name and priceId to be redirected to the checkout page from other place (drive-web)

    if (!productsData) return res.status(404).end(); //Something went wrong while fetching the products

    // Create the products object to be used in the client side
    // const productsObject = productsData.reduce((acc, product) => {
    //   const id = bytes(product.bytes);

    //   if (!acc[id]) {
    //     acc[id] = {
    //       priceId: { [product.interval]: product.id },
    //       storage: bytes(product.bytes),
    //       price: {
    //         [product.interval]: Math.abs(product.amount / 100).toFixed(2),
    //       },
    //       interval: product.interval,
    //     };
    //   } else {
    //     acc[id].price[product.interval] = Math.abs(product.amount / 100).toFixed(2);
    //     acc[id].priceId[product.interval] = product.id;
    //   }

    //   return acc;
    // }, {});

    res.status(200).json(productsData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
