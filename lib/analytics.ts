import _ from 'lodash';

function getCheckoutSessionData(session) {
  const conversionData = {
    coupon: {},
    properties: {},
    traits: {}
  };
  const amount = session.amount_total * 0.01;
  const { discounts } = session.total_details.breakdown;

  if (discounts.length > 0) {
    const { discount } = discounts[0];
    conversionData.coupon = {
      discount_id: discount.id,
      coupon_id: discount.coupon.id,
      coupon_name: discount.coupon.name.toLowerCase()
    };
  }

  conversionData.properties = {
    price_id: session.metadata.price_id,
    email: session.customer_details.email,
    product: session.metadata.product,
    customer_id: session.customer,
    currency: session.currency.toUpperCase(),
    value: amount,
    revenue: amount,
    quantity: 1,
    type: session.metadata.type,
    plan_name: session.metadata.name,
    impact_value: amount === 0 ? 5 : amount,
    subscription_id: session.subscription,
    payment_intent: session.payment_intent
  };

  conversionData.traits = {
    email: session.customer_details.email,
    plan: session.metadata.priceId,
    customer_id: session.customer,
    storage_limit: session.metadata.maxSpaceBytes,
    plan_name: session.metadata.name,
    subscription_id: session.subscription,
    payment_intent: session.payment_intent
  };

  return conversionData;
}

// eslint-disable-next-line import/prefer-default-export
export async function trackPayment({ session, user }) {
  if (user.registerCompleted && session.payment_status === 'paid') {
    const conversionData = getCheckoutSessionData(session);
    window.analytics.identify(user.uuid, conversionData.traits);
    window.analytics.track('Payment Conversion', conversionData.properties);
    if (!_.isEmpty(conversionData.coupon)) {
      window.analytics.track('Coupon Redeemed', conversionData.coupon);
    }
  }
}
