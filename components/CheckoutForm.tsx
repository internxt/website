import { useState } from 'react';
// import { getStripe } from '../lib/getstripe';
import { getStripeProduct } from '../pages/api/stripe/stripeProducts';

interface CheckoutFormProps {
  product: string;
  value: string;
  input: string;
  className: any;
  loading: string;
}

export async function redirectToCheckoutAction(stripeObject) {
  // Create a Checkout Session.
  const anonymousId = JSON.parse(window.localStorage.getItem('ajs_anonymous_id'));
  const impactId = window.sessionStorage.getItem('irclickid');
  const stripeInfo = getStripeProduct({
    product: stripeObject.product,
    impactId,
    anonymousId,
  });
  if (stripeInfo.mode === 'subscription') {
    // window.analytics.track('Checkout Opened', stripeInfo.properties);
  }
  const response = await fetch('https://drive.internxt.com/api/stripe/session', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      ...stripeObject,
      anonymousId,
      impactId,
      amount: 1,
    }),
  });

  if (response.status === 500) {
    return;
  }

  const body = await response.json();

  /* const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({ sessionId: body.id });

  console.warn(error.message); */
}

export default function CheckoutForm(props: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (window && window.analytics) {
      // window.analytics.track('landing-lifetime-enter-checkout');
    }

    const stripeObj = {
      product: props.product,
      email,
    };

    redirectToCheckoutAction(stripeObj).finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
    >
      <input
        type="email"
        placeholder={props.input}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex h-auto w-full appearance-none flex-row rounded-lg border-2 border-neutral-40 bg-neutral-10 px-4 py-3 text-left outline-none transition-all duration-150 focus:border-neutral-50 sm:w-auto sm:py-2`}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="flex w-full cursor-pointer flex-row items-center justify-center rounded-lg border border-transparent bg-primary px-6 py-2 text-lg font-medium text-white transition-all duration-75 focus:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:bg-primary-dark sm:w-auto sm:text-base"
      >
        {loading ? props.loading : props.value}
      </button>
    </form>
  );
}
