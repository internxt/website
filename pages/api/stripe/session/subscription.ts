import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs'
import { compileFunction } from 'node:vm';
const SUBSCRIPTIONS = {
  driveOffer200GB: {
    production: 'plan_F2FebxiAYyZC7m',
    debug: 'plan_Gd6Bnma92DjIvA',
    mode: 'subscription',
    coupon: { coupon: 'ByoZBLIf'},
    metadata: {
      member_tier: 'subscription'
    },
    return: 'offer'
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

  const PRODUCT = SUBSCRIPTIONS[req.body.product];

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: PRODUCT.mode,
    payment_method_types: ['card'],
    success_url: `${req.headers['origin']}/${PRODUCT.return}/success?sid={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers['origin']}/${PRODUCT.return}/cancel?sid={CHECKOUT_SESSION_ID}`,
    line_items: [
      {
        price: process.env.NODE_ENV === 'production' ? PRODUCT.production : PRODUCT.debug,
        quantity: 1
      }
    ],
    discounts: [PRODUCT.coupon],
    metadata: PRODUCT.metadata,
    billing_address_collection: 'required',
    customer_email: req.body.email ? req.body.email : undefined
  }

  try {
    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);
    res.status(200).json(checkoutSession);
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e.message, alde: 'alde' })
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {

  const method = req.method;

  // if (method === 'GET') { return getSession(req, res); }
  if (method === 'POST') { return postSession(req, res); }

  return res.status(500).end('Cannot ' + req.method + ' on ' + req.url);
}