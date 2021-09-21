const STRIPE_PRODUCT = {
  lifetime2TB: {
    production: 'price_1HrovfFAOdcgaBMQP33yyJdt',
    debug: 'price_1JZBJVFAOdcgaBMQPDjuJsEh',
    return: 'lifetime'
  },
  lifetime10TB: {
    production: 'price_1IMA0AFAOdcgaBMQiZyoSIYU',
    debug: 'price_1JZYkSFAOdcgaBMQItAo6Ev3',
    return: 'lifetime'
  },
  infiniteLifetime: {
    production: 'price_1Ix8QoFAOdcgaBMQ42h0k22u',
    debug: 'price_1JZYmRFAOdcgaBMQfADnPmSf',
    return: 'lifetime'
  },
  subscriptions: {
    monthly: {
      '20GB': {
        production: 'plan_Frb0qIcAlz2lDm',
        debug: 'plan_Gd66JNJCact3Ns'
      },
      '200GB': {
        production: 'plan_EUaU5KuX0bbmMZ',
        debug: 'plan_Gd6Ab5D2XAOFT8'
      },
      '2TB': {
        production: 'plan_F7ptyrVRmyL8Gn',
        debug: 'plan_Gd6Dvdm1yJxoQq'
      }
    },
    annually: {
      '20GB': {
        production: 'plan_Frb29JIJYJ4e8G',
        debug: 'plan_Gd68ayqEhY7ElV'
      },
      '200GB': {
        production: 'plan_F2FebxiAYyZC7m',
        debug: 'plan_Gd6Bnma92DjIvA'
      },
      '2TB': {
        production: 'plan_FkTXxEg3GZW0pg',
        debug: 'plan_Gd6EiK5twY0akg'
      }
    }
  }
};

function getStripeProduct(product) {
  return STRIPE_PRODUCT[product];
}

module.exports = { getStripeProduct };
