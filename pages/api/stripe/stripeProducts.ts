import axios from 'axios';
import bytes from 'bytes';

const isTest = process.env.NODE_ENV === 'development';

// !TODO: Change variable name to the correct one
const envVariable = isTest ? 'STRIPE_TEST' : 'STRIPE_LIVE';

export const stripeProducts = () => {
  async function products() {
    const productsRequest = await axios.get(`https://api.internxt.com/payments/prices`);
    return productsRequest.data;
  }

  return {
    products,
  };
};

// export function getPlanId(stripeObject: Record<string, string>): string {
//   return process.env.NODE_ENV.trim() === 'production'
//     ? STRIPE_PRODUCT[stripeObject.product].production
//     : STRIPE_PRODUCT[stripeObject.product].debug;
// }
