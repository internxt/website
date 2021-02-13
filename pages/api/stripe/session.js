import Stripe from 'stripe';

const LIFETIMEPRODUCTS = {
  production: 'price_1HrovfFAOdcgaBMQP33yyJdt',
  debug: 'price_1IKSkkFAOdcgaBMQy1hnVrST'
}

export default async (req, res) => {
  const KEY = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PRIVATE_KEY : process.env.STRIPE_PRIVATE_KEY_TEST
  const stripe = new Stripe(KEY, {
    apiVersion: '2020-03-02',
  });

  if (req.method !== 'POST') {
    return res.status(500).end('Cannot ' + req.method + ' on ' + req.url);
  }

  const params = {
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: 'https://internxt.com/lifetime',
    cancel_url: 'https://internxt.com/lifetime',
    line_items: [{price: process.env.NODE_ENV === 'production' ? LIFETIMEPRODUCTS.production : LIFETIMEPRODUCTS.debug, quantity: 1}],
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create(params);
    res.status(200).json(checkoutSession);
  } catch (e) {
    res.status(500).send({ error: e.message })
  }


} 