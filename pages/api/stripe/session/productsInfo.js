const STRIPE_PRODUCT = {
  lifetime2TB: {
    production: 'price_1HrovfFAOdcgaBMQP33yyJdt',
    debug: 'price_1J5AfMFAOdcgaBMQsgKmLTSP',
    return: 'lifetime'
  },
  lifetime10TB: {
    production: 'price_1IMA0AFAOdcgaBMQiZyoSIYU',
    debug: 'price_1J5Ai0FAOdcgaBMQd5xA0gP1',
    return: 'lifetime'
  },
  infiniteLifetime: {
    production: 'price_1Ix8QoFAOdcgaBMQ42h0k22u',
    debug: 'price_1IyIduFAOdcgaBMQMtqkaC50',
    return: 'lifetime'
  }
};

function getStripeProduct(product) {
  return STRIPE_PRODUCT[product];
}

module.exports = { getStripeProduct };
