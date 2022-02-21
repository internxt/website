import { useState } from "react";
import { getStripe } from '../lib/getstripe'
import { getStripeProduct } from '../pages/api/stripe/stripeProducts'

interface CheckoutFormProps {
  product: string
  value: string
  input: string
  className: any
  loading: string
}

export async function redirectToCheckoutAction(stripeObject) {
  // Create a Checkout Session.
  const anonymousId = JSON.parse(window.localStorage.getItem('ajs_anonymous_id'));
  const impactId = window.sessionStorage.getItem('irclickid');
  const stripeInfo = getStripeProduct({
    product: stripeObject.product,
    impactId,
    anonymousId
  })
  if (stripeInfo.mode === 'subscription') {
    window.analytics.track('Checkout Opened', stripeInfo.properties);
  }
  const response = await fetch('/api/stripe/session', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      ...stripeObject,
      anonymousId,
      impactId,
      amount: 1,
    })
  });

  if (response.status === 500) {
    console.error(response.statusText);
    return;
  }

  const body = await response.json()

  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({ sessionId: body.id });

  console.warn(error.message);
}



export default function CheckoutForm(props: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (window && window.analytics) {
      window.analytics.track('landing-lifetime-enter-checkout')
    }

    const stripeObj = {
      product: props.product,
      email
    }

    redirectToCheckoutAction(stripeObj).finally(() => setLoading(false))
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0 items-center justify-center"
    >
      <input
        type='email'
        placeholder={props.input}
        onChange={e => setEmail(e.target.value)}
        className={`flex flex-row h-auto w-full sm:w-auto px-4 py-3 sm:py-2 outline-none rounded-lg border-2 border-neutral-40 focus:border-neutral-50 transition-all duration-150 bg-neutral-10 text-left appearance-none`}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="flex flex-row justify-center w-full sm:w-auto items-center px-6 py-2 border border-transparent rounded-lg text-lg sm:text-base font-medium text-white bg-blue-60 active:bg-blue-70 focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-20 transition-all duration-75 cursor-pointer"
      >
        {loading ? props.loading : props.value}
      </button>

    </form>
  )
}