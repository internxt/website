import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs';
import { getStripeProduct } from '../stripeProducts';

async function postSession(req: NextApiRequest, res: NextApiResponse) {
  try {
    fs.appendFileSync('logs.txt', new Date() + '\t' + req.body.email + '\n')
  } catch { }
  const KEY = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_KEY_TEST;
  const stripe = new Stripe(KEY, { apiVersion: '2020-08-27' });

  if (!req.headers.origin) {
    return res.status(400).send({ error: 'Unknown origin' });
  }

  const PRODUCT = getStripeProduct(req.body.product);

  const successUrl = `${req.headers.origin}/payment/success?product=${req.body.product}&sid={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${req.headers.origin}/payment/cancel?sid={CHECKOUT_SESSION_ID}`;

  const params: Stripe.Checkout.SessionCreateParams = {
    allow_promotion_codes: true,
    mode: PRODUCT.mode,
    payment_method_types: ['card'],
    success_url: successUrl,
    cancel_url: cancelUrl,
    ...PRODUCT.session,
    billing_address_collection: 'required',
    customer_email: req.body.email ? req.body.email : undefined
  };
  try {
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);
    res.status(200).json(checkoutSession);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  // if (method === 'GET') { return getSession(req, res); }
  if (req.method === 'POST') { return postSession(req, res); }

  return res.status(500).end(`Cannot ${req.method} on ${req.url}`);
};
