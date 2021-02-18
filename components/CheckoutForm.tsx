import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { getStripe } from '../lib/getstripe'

export async function redirectToCheckoutAction(product) {
  // Create a Checkout Session.
  const response = await fetch('/api/stripe/session', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      product: product,
      amount: 1
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
}

export default function CheckoutForm(props: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (window && window.analytics) {
      window.analytics.track('landing-lifetime-enter-checkout')
    }

    redirectToCheckoutAction(props.product).finally(() => setLoading(false))
  };

  return <form onSubmit={handleSubmit}>
    <button
      type="submit"
      disabled={loading}
      {...props}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >{loading ? <Spinner animation="border" style={{ color: '#e0e0e0' }} /> : props.value}</button>
  </form>
}