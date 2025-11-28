export interface PlanDetails {
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
  items?: Array<{
    item_id: string;
    item_name: string;
    item_brand?: string;
    item_category: string;
    item_variant: string;
    price: number;
    quantity: number;
    coupon?: string;
  }>;
}

export interface PurchaseParams extends PlanDetails {
  transactionId: string;
}

interface EcommerceItem {
  item_id: string;
  item_name: string;
  item_brand?: string;
  item_category: string;
  item_variant: string;
  affiliation?: string;
  coupon?: string;
  currency: string;
  price: number;
  quantity: number;
}

interface DataLayerEvent {
  event: string;
  ecommerce?: {
    value: number;
    currency: string;
    items: EcommerceItem[];
    transaction_id?: string;
  };
  user_type?: string;
  checkout_step?: number;
}

const SEND_TO = [process.env.NEXT_PUBLIC_GA_ID, process.env.NEXT_PUBLIC_GA_CONTAINER].filter(Boolean) as string[];

const DEFAULT_CURRENCY = 'eur';
const DEFAULT_QUANTITY = 1;
const AFFILIATION = 'website';
const BRAND = 'Internxt';

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatPrice = (price: number): number => {
  return parseFloat(price.toFixed(2));
};

const getPlanCategory = (planType: 'individual' | 'business'): string => {
  return planType === 'individual' ? 'Individual' : 'Business';
};

const normalizeSendTo = (sendTo?: string | string[]): string[] => {
  if (Array.isArray(sendTo)) {
    return sendTo.filter(Boolean) as string[];
  }
  return sendTo ? [sendTo] : [];
};

class AnalyticsService {
  private readonly sendTo: string[];
  private readonly defaultCurrency: string;

  constructor(sendTo?: string | string[], defaultCurrency: string = DEFAULT_CURRENCY) {
    this.sendTo = normalizeSendTo(sendTo);
    this.defaultCurrency = defaultCurrency;
  }

  private pushToDataLayer(data: DataLayerEvent): void {
    if (this.isClientSide() && globalThis.window.dataLayer) {
      globalThis.window.dataLayer.push(data);
    }
  }

  private isClientSide(): boolean {
    return typeof globalThis.window !== 'undefined';
  }

  private createBaseItemProperties(params: PlanDetails): Omit<EcommerceItem, 'affiliation' | 'coupon'> {
    const { planId, planPrice, currency, planType, interval, storage } = params;

    return {
      item_id: planId,
      item_name: `${storage} ${capitalizeFirstLetter(interval)} Plan`,
      item_brand: BRAND,
      item_category: getPlanCategory(planType),
      item_variant: interval,
      currency: currency ?? this.defaultCurrency,
      price: formatPrice(planPrice),
      quantity: DEFAULT_QUANTITY,
    };
  }

  private createEcommerceItem(params: PlanDetails, includeAffiliation: boolean = false): EcommerceItem {
    const { promoCodeId } = params;
    const baseProperties = this.createBaseItemProperties(params);

    return {
      ...baseProperties,
      ...(includeAffiliation && { affiliation: AFFILIATION }),
      ...(promoCodeId && { coupon: promoCodeId }),
    };
  }

  private createEcommerceEvent(
    eventName: string,
    params: PlanDetails,
    includeAffiliation: boolean = false,
    additionalData?: Record<string, any>,
  ): DataLayerEvent {
    const { planPrice, currency } = params;

    return {
      event: eventName,
      ecommerce: {
        value: formatPrice(planPrice),
        currency: currency ?? this.defaultCurrency,
        items: [this.createEcommerceItem(params, includeAffiliation)],
      },
      ...additionalData,
    };
  }

  handleAdsConversion(params: AdsConversionParams): void {
    const { url, elementConversion, tag, value, currency, items } = params;

    const callback = () => {
      if (url) {
        globalThis.window.location.href = url;
      }
    };

    if (this.isClientSide() && globalThis.window.gtag && this.sendTo.length > 0) {
      this.sendTo.forEach((target) => {
        globalThis.window.gtag('event', elementConversion, {
          send_to: `${target}/${tag}`,
          value,
          currency,
          ...(items && { items }),
          event_callback: callback,
        });
      });
    } else {
      callback();
    }
  }

  viewItem(params: PlanDetails): void {
    const event = this.createEcommerceEvent('view_item', params);
    this.pushToDataLayer(event);
  }

  addToCart(params: PlanDetails): void {
    const { planId, planPrice, currency, planType, interval, storage } = params;

    this.handleAdsConversion({
      elementConversion: 'add_to_cart',
      tag: '',
      value: planPrice,
      currency: currency ?? this.defaultCurrency,
      items: [
        {
          item_id: planId,
          item_name: `${storage} ${capitalizeFirstLetter(interval)} Plan`,
          item_brand: BRAND,
          item_category: getPlanCategory(planType),
          item_variant: interval,
          price: formatPrice(planPrice),
          quantity: DEFAULT_QUANTITY,
        },
      ],
    });
  }

  purchase(params: PurchaseParams): void {
    const { transactionId, ...planDetails } = params;

    const event = this.createEcommerceEvent('purchase', planDetails, true);

    if (event.ecommerce) {
      event.ecommerce.transaction_id = transactionId;
    }

    this.pushToDataLayer(event);

    this.handleAdsConversion({
      elementConversion: 'purchase',
      tag: '',
      value: planDetails.planPrice,
      currency: planDetails.currency ?? this.defaultCurrency,
    });
  }

  trackCustomEvent(eventName: string, data: Record<string, any>): void {
    this.pushToDataLayer({
      event: eventName,
      ...data,
    });
  }
}

export const analyticsService = new AnalyticsService(SEND_TO);
