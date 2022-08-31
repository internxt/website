const isTest = process.env.NODE_ENV === 'development';

const STRIPE_PRODUCT = {
  GB2012: {
    production: 'plan_Frb29JIJYJ4e8G',
    debug: 'plan_Gd68ayqEhY7ElV',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 10.68,
      type: 'recurrent',
      price_id: 'plan_Frb29JIJYJ4e8G',
      quantity: 1,
      product: 'prod_Frb0EaIua4Dpdt',
    },
  },
  GB20012: {
    production: 'plan_F2FebxiAYyZC7m',
    debug: 'plan_Gd6Bnma92DjIvA',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 41.68,
      type: 'recurrent',
      price_id: 'plan_F2FebxiAYyZC7m',
      quantity: 1,
      product: 'prod_EUaOAFtvLBFJmC',
    },
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
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 107.88,
      type: 'recurrent',
      price_id: 'plan_FkTXxEg3GZW0pg',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
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
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 0.99,
      type: 'recurrent',
      price_id: 'plan_Frb0qIcAlz2lDm',
      quantity: 1,
      product: 'prod_Frb0EaIua4Dpdt',
    },
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
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 4.49,
      type: 'recurrent',
      price_id: 'plan_EUaU5KuX0bbmMZ',
      quantity: 1,
      product: 'prod_EUaOAFtvLBFJmC',
    },
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
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 9.99,
      type: 'recurrent',
      price_id: 'plan_F7ptyrVRmyL8Gn',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
  },
  TB2_Free_30_Days_Cloudwards_Monthly: {
    production: 'plan_F7ptyrVRmyL8Gn',
    debug: 'plan_Gd6Dvdm1yJxoQq',
    return: 'pricing',
    mode: 'subscription',
    session: {
      discounts: [
        {
          promotion_code: isTest ? 'promo_1KGO2GFAOdcgaBMQVVXcV9T5' : 'promo_1K8kqLFAOdcgaBMQX5phJSfd',
        },
      ],
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 9.99,
      type: 'recurrent',
      price_id: 'plan_F7ptyrVRmyL8Gn',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
  },
  TB2_Free_30_Days_Guru99_Monthly: {
    production: 'plan_F7ptyrVRmyL8Gn',
    debug: 'plan_Gd6Dvdm1yJxoQq',
    return: 'pricing',
    mode: 'subscription',
    session: {
      discounts: [
        {
          promotion_code: isTest ? 'promo_1KGO2GFAOdcgaBMQVVXcV9T5' : 'promo_1K9sLDFAOdcgaBMQMlHOfxhx',
        },
      ],
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 9.99,
      type: 'recurrent',
      price_id: 'plan_F7ptyrVRmyL8Gn',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
  },
  TB2_Free_30_Days_Freemonth_Monthly: {
    production: 'plan_F7ptyrVRmyL8Gn',
    debug: 'plan_Gd6Dvdm1yJxoQq',
    return: 'pricing',
    mode: 'subscription',
    session: {
      discounts: [
        {
          promotion_code: isTest ? 'promo_1KGO2GFAOdcgaBMQVVXcV9T5' : 'promo_1KCKBwFAOdcgaBMQLRPX8ona',
        },
      ],
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 9.99,
      type: 'recurrent',
      price_id: 'plan_F7ptyrVRmyL8Gn',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
  },
  TB2_50_OFF_Annual: {
    production: 'price_1JxXCDFAOdcgaBMQeIxcx8YI',
    debug: 'price_1JxaIsFAOdcgaBMQOS6Do2qh',
    return: 'pricing',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 53.88,
      type: 'recurrent',
      price_id: 'price_1JxXCDFAOdcgaBMQeIxcx8YI',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
  },
  TB2_50_OFF_Monthly: {
    production: 'price_1JxXDLFAOdcgaBMQAw3ygbQa',
    debug: 'price_1JxaGTFAOdcgaBMQA25twZLD',
    return: 'pricing',
    mode: 'subscription',
    session: {
      line_items: [
        {
          quantity: 1,
        },
      ],
    },
    properties: {
      currency: 'EUR',
      revenue: 4.99,
      type: 'recurrent',
      price_id: 'price_1JxXDLFAOdcgaBMQAw3ygbQa',
      quantity: 1,
      product: 'prod_EUaUAiDCK1Etz1',
    },
  },
};

export function getProductProperties(product) {
  return STRIPE_PRODUCT[product].properties;
}

export function getStripeProduct(opt) {
  const { product, anonymousId, impactId } = opt;
  const selectedProduct = STRIPE_PRODUCT[product];
  selectedProduct.session.line_items[0].price =
    process.env.NODE_ENV === 'production' ? selectedProduct.production : selectedProduct.debug;
  const productProperties = getProductProperties(product);
  selectedProduct.session.metadata = productProperties;
  Object.assign(selectedProduct.session.metadata, {
    anonymousId,
    source: 'website',
    impactId,
  });
  return selectedProduct;
}
