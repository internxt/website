import axios from 'axios';
import { PlanData } from '../../pages/cloud-object-storage/checkout';

const fetchPlanById = async (priceId: string, currency?: string): Promise<PlanData> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PAYMENTS_API}/object-storage-plan-by-id?planId=${priceId}&currency=${currency}`,
    {
      method: 'GET',
    },
  );

  if (response.status !== 200) {
    throw new Error('Plan not found');
  }

  const data = await response.json();

  return data;
};

const getCustomerId = async (name: string, email: string, country?: string, companyVatId?: string) => {
  const query = new URLSearchParams();
  query.set('name', name);
  query.set('email', email);
  country && query.set('country', country);
  companyVatId && query.set('companyVatId', companyVatId);
  const res = await axios.post(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/create-customer-for-object-storage`, {
    name,
    email,
    country,
    companyVatId,
  });

  return res.data;
};

const getPaymentIntent = async (customerId: string, plan: PlanData, token: string) => {
  const { id: priceId, amount, currency } = plan;

  const response = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/payment-intent-for-object-storage`, {
    params: {
      customerId,
      planId: priceId,
      amount,
      token,
      currency,
    },
  });

  const res = response.data;

  return {
    clientSecret: res.clientSecret,
  };
};

const createSubscription = async (
  customerId: string,
  plan: PlanData,
  token: string,
  companyName: string,
  vatId: string,
  promoCodeId?: string,
) => {
  const { id: priceId, currency } = plan;

  const response = await axios.post(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/create-subscription-for-object-storage`, {
    customerId,
    priceId,
    token,
    currency,
    companyName,
    companyVatId: vatId,
    promoCodeId,
  });

  const res = response.data;

  return {
    clientSecret: res.clientSecret,
  };
};

export const paymentService = {
  fetchPlanById,
  getCustomerId,
  getPaymentIntent,
  createSubscription,
};
