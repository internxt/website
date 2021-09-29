const STRIPE_PRODUCT = {
  lifetime2TB: {
    production: 'price_1HrovfFAOdcgaBMQP33yyJdt',
    debug: 'price_1JZBJVFAOdcgaBMQPDjuJsEh',
    mode: 'payment',
    session: {
      line_items: [
        {
          quantity: 1
        }
      ],
      metadata: {
        member_tier: 'lifetime'
      },
      payment_intent_data: {
        metadata: {
          member_tier: 'lifetime',
          lifetime_tier: 'lifetime'
        }
      },
    },
    properties: {
      currency: 'EUR',
      revenue: 299,
      type: 'one_time',
      price_id: 'price_1HrovfFAOdcgaBMQP33yyJdt',
      quantity: 1,
    }
  },
  lifetime2TBLanding: {
    production: 'price_1Jed1uFAOdcgaBMQyU0Ebkuy',
    debug: 'price_1Jed7vFAOdcgaBMQdqghGT0w',
    mode: 'payment',
    session: {
      line_items: [
        {
          quantity: 1
        }
      ],
      metadata: {
        member_tier: 'lifetime'
      },
      payment_intent_data: {
        metadata: {
          member_tier: 'lifetime',
          lifetime_tier: 'lifetime'
        }
      },
    },
    properties: {
      currency: 'EUR',
      revenue: 99,
      type: 'one_time',
      price_id: 'price_1Jed1uFAOdcgaBMQyU0Ebkuy',
      quantity: 1,
    }
  },
  lifetime10TB: {
    production: 'price_1IMA0AFAOdcgaBMQiZyoSIYU',
    debug: 'price_1JZYkSFAOdcgaBMQItAo6Ev3',
    mode: 'payment',
    session: {
      line_items: [
        {
          price: 'price_1IMA0AFAOdcgaBMQiZyoSIYU',
          quantity: 1
        }
      ],
      metadata: {
        member_tier: 'lifetime'
      },
      payment_intent_data: {
        metadata: {
          member_tier: 'lifetime',
          lifetime_tier: 'exclusive-lifetime'
        }
      },
    },
    properties: {
      currency: 'EUR',
      revenue: 499,
      type: 'one_time',
      price_id: 'price_1IMA0AFAOdcgaBMQiZyoSIYU',
      quantity: 1,
    }
  },
  lifetime10TBLanding: {
    production: 'price_1JecyEFAOdcgaBMQEMnWOjn5',
    debug: 'price_1Jed8vFAOdcgaBMQC8sdLZdd',
    mode: 'payment',
    session: {
      line_items: [
        {
          price: 'price_1JecyEFAOdcgaBMQEMnWOjn5',
          quantity: 1
        }
      ],
      metadata: {
        member_tier: 'lifetime'
      },
      payment_intent_data: {
        metadata: {
          member_tier: 'lifetime',
          lifetime_tier: 'exclusive-lifetime'
        }
      },
    },
    properties: {
      currency: 'EUR',
      revenue: 299,
      type: 'one_time',
      price_id: 'price_1JecyEFAOdcgaBMQEMnWOjn5',
      quantity: 1,
    }
  },
  infiniteLifetime: {
    production: 'price_1Ix8QoFAOdcgaBMQ42h0k22u',
    debug: 'price_1JZYmRFAOdcgaBMQfADnPmSf',
    mode: 'payment',
    session: {
      line_items: [
        {
          price: 'price_1Ix8QoFAOdcgaBMQ42h0k22u',
          quantity: 1
        }
      ],
      metadata: {
        member_tier: 'lifetime'
      },
      payment_intent_data: {
        metadata: {
          member_tier: 'lifetime',
          lifetime_tier: 'infinite'
        }
      },
    },
    properties: {
      currency: 'EUR',
      revenue: 999,
      type: 'one_time',
      price_id: 'price_1Ix8QoFAOdcgaBMQ42h0k22u',
      quantity: 1,
    }
  },
  GB2012: {
    production: 'plan_Frb29JIJYJ4e8G',
    debug: 'plan_Gd68ayqEhY7ElV',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        }
      ]
    },
    properties: {
      currency: 'EUR',
      revenue: 10.68,
      type: 'recurrent',
      price_id: 'plan_Frb29JIJYJ4e8G',
      quantity: 1,
    }
  },
  GB20012: {
    production: 'plan_F2FebxiAYyZC7m',
    debug: 'plan_Gd6Bnma92DjIvA',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        }
      ]
    },
    properties: {
      currency: 'EUR',
      revenue: 41.68,
      type: 'recurrent',
      price_id: 'plan_F2FebxiAYyZC7m',
      quantity: 1,
    }
  },
  TB212: {
    production: 'plan_FkTXxEg3GZW0pg',
    debug: 'plan_Gd6EiK5twY0akg',
    return: 'pricing',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        }
      ]
    },
    properties: {
      currency: 'EUR',
      revenue: 107.88,
      type: 'recurrent',
      price_id: 'plan_FkTXxEg3GZW0pg',
      quantity: 1,
    }
  },
  GB201: {
    production: 'plan_Frb0qIcAlz2lDm',
    debug: 'plan_Gd66JNJCact3Ns',
    return: 'pricing',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        }
      ]
    },
    properties: {
      currency: 'EUR',
      revenue: 0.99,
      type: 'recurrent',
      price_id: 'plan_Frb0qIcAlz2lDm',
      quantity: 1,
    }
  },
  GB2001: {
    production: 'plan_EUaU5KuX0bbmMZ',
    debug: 'plan_Gd6Ab5D2XAOFT8',
    return: 'pricing',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        }
      ]
    },
    properties: {
      currency: 'EUR',
      revenue: 4.49,
      type: 'recurrent',
      price_id: 'plan_EUaU5KuX0bbmMZ',
      quantity: 1,
    }
  },
  TB21: {
    production: 'plan_F7ptyrVRmyL8Gn',
    debug: 'plan_Gd6Dvdm1yJxoQq',
    return: 'pricing',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        }
      ]
    }
  },
  properties: {
    currency: 'EUR',
    revenue: 9.99,
    type: 'recurrent',
    price_id: 'plan_F7ptyrVRmyL8Gn',
    quantity: 1,
  }
};

function getStripeProduct(product) {
  const selectedProduct = STRIPE_PRODUCT[product];
  selectedProduct.session.line_items[0].price = process.env.NODE_ENV === 'production' ? selectedProduct.production : selectedProduct.debug;
  return selectedProduct;
}

function getProductProperties(product) {
  return STRIPE_PRODUCT[product].properties;
}

module.exports = { getStripeProduct, getProductProperties };
