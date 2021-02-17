import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const LIFETIMEPRODUCTS = {
  production: 'price_1HrovfFAOdcgaBMQP33yyJdt',
  debug: 'price_1IKSkkFAOdcgaBMQy1hnVrST'
}

async function postSession(req: NextApiRequest, res: NextApiResponse) {
  const KEY = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_KEY_TEST
  const stripe = new Stripe(KEY, { apiVersion: '2020-08-27' });

  if (!req.headers['origin']) {
    return res.status(400).send({ error: 'Unknown origin' });
  }

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: `${req.headers['origin']}/lifetime/success?sid={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers['origin']}/lifetime/cancel?sid={CHECKOUT_SESSION_ID}`,
    line_items: [
      {
        price: process.env.NODE_ENV === 'production' ? LIFETIMEPRODUCTS.production : LIFETIMEPRODUCTS.debug,
        quantity: 1
      }
    ],
    metadata: {
      member_tier: 'lifetime'
    },
    billing_address_collection: 'required'
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