import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { getStripe } from '../lib/getstripe'
import styles from './CheckoutForm.module.css'

export async function redirectToCheckoutAction(stripeObject) {
  // Create a Checkout Session.
  const response = await fetch('/api/stripe/session', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      ...stripeObject,
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

interface CheckoutFormProps {
  product: string
  value: string
  urlQuery?: string
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
      email,
      urlQuery: props.urlQuery
    }

    redirectToCheckoutAction(stripeObj).finally(() => setLoading(false))
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <input
        type='email'
        placeholder='Your email'
        onChange={e => setEmail(e.target.value)}
        className={`${styles.email} lg:w-48 lg:text-sm lg:h-10 `}
        required
      />

      <button
        type="submit"
        disabled={loading}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        {...props}
      >
        {loading ? <Spinner animation="border" style={{ color: '#e0e0e0' }} /> : props.value}
      </button>

    </form>
  )
}