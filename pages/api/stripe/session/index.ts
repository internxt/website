import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs'
const LIFETIMEPRODUCTS = {
  lifetime2TB: {
    production: 'price_1HrovfFAOdcgaBMQP33yyJdt',
    debug: 'price_1IKSkkFAOdcgaBMQy1hnVrST',
    return: 'lifetime'
  },
  lifetime10TB: {
    production: 'price_1IMA0AFAOdcgaBMQiZyoSIYU',
    debug: 'price_1IMANUFAOdcgaBMQcI6c9nVp',
    return: 'exclusive-lifetime'
  }
}

async function postSession(req: NextApiRequest, res: NextApiResponse) {
  try {
    fs.appendFileSync('logs.txt', new Date() + '\t' + req.body.email + '\n')
  } catch { }
  const KEY = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_KEY_TEST
  const stripe = new Stripe(KEY, { apiVersion: '2020-08-27' });

  if (!req.headers['origin']) {
    return res.status(400).send({ error: 'Unknown origin' });
  }

  const PRODUCT = LIFETIMEPRODUCTS[req.body.product];

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: `${req.headers['origin']}/${PRODUCT.return}/success?sid={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers['origin']}/${PRODUCT.return}/cancel?sid={CHECKOUT_SESSION_ID}`,
    line_items: [
      {
        price: process.env.NODE_ENV === 'production' ? PRODUCT.production : PRODUCT.debug,
        quantity: 1
      }
    ],
    metadata: {
      member_tier: 'lifetime'
    },
    billing_address_collection: 'required',
    customer_email: req.body.email

  }

  try {
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);
    res.status(200).json(checkoutSession);
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {

  const method = req.method;

  // if (method === 'GET') { return getSession(req, res); }
  if (method === 'POST') { return postSession(req, res); }

  return res.status(500).end('Cannot ' + req.method + ' on ' + req.url);
} 