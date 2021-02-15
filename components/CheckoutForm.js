import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { getStripe } from '../lib/getstripe'

export async function redirectToCheckoutAction() {
  // Create a Checkout Session.
  const response = await fetch('/api/stripe/session', {
    method: 'post',
    body: JSON.stringify({ amount: 1 })
  });

  if (response.statusCode === 500) {
    console.error(response.message);
    return;
  }

  const body = await response.json()

  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({
    sessionId: body.id
  });

  console.warn(error.message);
}

export default function CheckoutForm(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (window && window.analytics) {
      window.analytics.track('landing-lifetime-enter-checkout')
    }

    redirectToCheckoutAction().finally(() => setLoading(false))
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