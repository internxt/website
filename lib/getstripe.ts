import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>
export function getStripe() {
  const KEY = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY! : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST!
  if (!stripePromise) {
    stripePromise = loadStripe(KEY)
  }
  return stripePromise
}
