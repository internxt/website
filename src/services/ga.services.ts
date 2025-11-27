const SEND_TO = process.env.NEXT_PUBLIC_GA_ID;

export interface BeginCheckoutParams {
  planId: string;
  planPrice: number;
  currency: string;
  planType: 'individual' | 'business';
  interval: string;
  storage: string;
  promoCodeId?: string;
}

export interface AdsConversionParams {
  url?: string;
  elementConversion: string;
  tag: string;
  value: number;
  currency: string;
}

class AnalyticsService {
  private pushToDataLayer(data: any) {
    if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push(data);
    }
  }

  handleAdsConversion(params: AdsConversionParams) {
    const { url, elementConversion, tag, value, currency } = params;

    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', elementConversion, {
        send_to: `${SEND_TO}/${tag}`,
        value: value,
        currency: currency,
        event_callback: callback,
      });
    } else {
      callback();
    }
  }

  beginCheckout(params: BeginCheckoutParams) {
    const { planId, planPrice, currency, planType, interval, storage, promoCodeId } = params;

    this.pushToDataLayer({
      event: 'begin_checkout',
      ecommerce: {
        value: parseFloat(planPrice.toFixed(2)),
        currency: currency ?? 'eur',
        items: [
          {
            item_id: planId,
            item_name: `${storage} ${interval.charAt(0).toUpperCase() + interval.slice(1)} Plan`,
            item_category: planType === 'individual' ? 'Individual' : 'Business',
            item_variant: interval,
            affiliation: 'website',
            coupon: promoCodeId || undefined,
            currency: currency ?? 'eur',
            price: parseFloat(planPrice.toFixed(2)),
            quantity: 1,
          },
        ],
      },
      user_type: planType,
      checkout_step: 1,
    });

    this.handleAdsConversion({
      elementConversion: 'begin_checkout',
      tag: 'YOUR_BEGIN_CHECKOUT_TAG',
      value: planPrice,
      currency: currency ?? 'eur',
    });
  }

  purchase(params: {
    transactionId: string;
    planId: string;
    planPrice: number;
    currency: string;
    planType: 'individual' | 'business';
    interval: string;
    storage: string;
    promoCodeId?: string;
  }) {
    const { transactionId, planId, planPrice, currency, planType, interval, storage, promoCodeId } = params;

    this.pushToDataLayer({
      event: 'purchase',
      ecommerce: {
        transaction_id: transactionId,
        value: parseFloat(planPrice.toFixed(2)),
        currency: currency ?? 'eur',
        items: [
          {
            item_id: planId,
            item_name: `${storage} ${interval.charAt(0).toUpperCase() + interval.slice(1)} Plan`,
            item_category: planType === 'individual' ? 'Individual' : 'Business',
            item_variant: interval,
            affiliation: 'website',
            coupon: promoCodeId || undefined,
            currency: currency ?? 'eur',
            price: parseFloat(planPrice.toFixed(2)),
            quantity: 1,
          },
        ],
      },
    });

    this.handleAdsConversion({
      elementConversion: 'purchase',
      tag: 'YOUR_PURCHASE_TAG',
      value: planPrice,
      currency: currency ?? 'eur',
    });
  }

  viewItem(params: BeginCheckoutParams) {
    const { planId, planPrice, currency, planType, interval, storage } = params;

    this.pushToDataLayer({
      event: 'view_item',
      ecommerce: {
        value: parseFloat(planPrice.toFixed(2)),
        currency: currency ?? 'eur',
        items: [
          {
            item_id: planId,
            item_name: `${storage} ${interval.charAt(0).toUpperCase() + interval.slice(1)} Plan`,
            item_category: planType === 'individual' ? 'Individual' : 'Business',
            item_variant: interval,
            currency: currency ?? 'eur',
            price: parseFloat(planPrice.toFixed(2)),
            quantity: 1,
          },
        ],
      },
    });
  }

  addToCart(params: BeginCheckoutParams) {
    const { planId, planPrice, currency, planType, interval, storage } = params;

    this.pushToDataLayer({
      event: 'add_to_cart',
      ecommerce: {
        value: parseFloat(planPrice.toFixed(2)),
        currency: currency ?? 'eur',
        items: [
          {
            item_id: planId,
            item_name: `${storage} ${interval.charAt(0).toUpperCase() + interval.slice(1)} Plan`,
            item_category: planType === 'individual' ? 'Individual' : 'Business',
            item_variant: interval,
            currency: currency ?? 'eur',
            price: parseFloat(planPrice.toFixed(2)),
            quantity: 1,
          },
        ],
      },
    });
  }
}

export const analyticsService = new AnalyticsService();
