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

  async function getPlanId(interval: string, storage: string) {
    const getProducts = await products();
    const plan = getProducts.filter((product: Record<string, unknown>) => {
      if (product.interval === interval && bytes(product.bytes) === storage) {
        return product;
      }
    });
    return plan[0].id;
  }

  return {
    products,
    getPlanId,
  };
};
