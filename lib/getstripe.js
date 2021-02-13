import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise
export function getStripe() {
  const KEY = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST
  console.log(KEY)
  if (!stripePromise) {
    stripePromise = loadStripe(KEY)
  }
  return stripePromise
}
