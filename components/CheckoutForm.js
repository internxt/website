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

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: body.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
}

export default function CheckoutForm(props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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