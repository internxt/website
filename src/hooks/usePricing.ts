/* eslint-disable @typescript-eslint/no-explicit-any */
import { currencyService } from '@/services/currency.service';
import { ProductsDataProps, stripeService } from '@/services/stripe.service';
import { useEffect, useReducer } from 'react';
import { PromoCodeName, PromoCodeProps } from '@/lib/types';

type UsePricingOptions = {
  couponCode?: PromoCodeName;
  couponCodeForLifetime?: PromoCodeName;
  couponCodeForBusiness?: PromoCodeName;
  currencySpecified?: string;
  fetchLifetimeCoupons?: boolean;
};

interface UseStripeProductsAndCurrencyResponse {
  loadingCards: boolean;
  currency: string;
  currencyValue: string;
  coupon?: PromoCodeProps;
  lifetimeCoupon?: PromoCodeProps;
  businessCoupon?: PromoCodeProps;
  lifetimeCoupons?: any;
  products?: ProductsDataProps;
}

interface PricesData {
  products?: ProductsDataProps;
  currency: string;
  currencyValue: string;
  lifetimeCoupons?: any;
}

interface CouponsData {
  coupon?: PromoCodeProps;
  lifetimeCoupon?: PromoCodeProps;
  businessCoupon?: PromoCodeProps;
}

interface PricingState extends PricesData, CouponsData {
  pricesLoaded: boolean;
  couponsLoaded: boolean;
}

type ActionType = { type: 'SET_PRICES'; payload: PricesData } | { type: 'SET_COUPONS'; payload: CouponsData };

const DEFAULT_CURRENCY = { currency: '€', currencyValue: 'eur' };

const initialState: PricingState = {
  ...DEFAULT_CURRENCY,
  pricesLoaded: false,
  couponsLoaded: false,
};

const reducer = (state: PricingState, action: ActionType): PricingState => {
  switch (action.type) {
    case 'SET_PRICES':
      return { ...state, ...action.payload, pricesLoaded: true };
    case 'SET_COUPONS':
      return { ...state, ...action.payload, couponsLoaded: true };
    default:
      return state;
  }
};

const loadPrices = async (currencySpecified?: string): Promise<Omit<PricesData, 'lifetimeCoupons'>> => {
  try {
    const { currency, currencyValue } = await currencyService.filterCurrencyByCountry(currencySpecified);
    const products = await stripeService.getPrices(currencyValue);

    return { products, currency, currencyValue };
  } catch (err) {
    console.warn('Primary price fetch failed, falling back to EUR:', err);

    try {
      const products = await stripeService.getPrices(DEFAULT_CURRENCY.currencyValue);
      return { products, ...DEFAULT_CURRENCY };
    } catch (error) {
      console.error('Critical error: Failed to fetch fallback prices:', error);
      return { products: undefined, ...DEFAULT_CURRENCY };
    }
  }
};

const loadLifetimeCoupons = async (): Promise<any> => {
  try {
    return await stripeService.getLifetimeCoupons();
  } catch (error) {
    console.error('Error fetching lifetime coupons:', error);
    return undefined;
  }
};

const loadCoupon = async (couponName?: PromoCodeName): Promise<PromoCodeProps | undefined> => {
  if (!couponName) return undefined;

  try {
    return await stripeService.getCoupon(couponName);
  } catch (error) {
    console.warn(`Coupon ${couponName} could not be loaded:`, error);
    return undefined;
  }
};

function usePricing(options: UsePricingOptions = {}): UseStripeProductsAndCurrencyResponse {
  const { couponCode, couponCodeForLifetime, couponCodeForBusiness, currencySpecified, fetchLifetimeCoupons } = options;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let cancelled = false;

    Promise.all([loadPrices(currencySpecified), fetchLifetimeCoupons ? loadLifetimeCoupons() : undefined])
      .then(([prices, lifetimeCoupons]) => {
        if (!cancelled) dispatch({ type: 'SET_PRICES', payload: { ...prices, lifetimeCoupons } });
      })
      .catch((error) => console.error('Error loading prices:', error));

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let cancelled = false;

    Promise.all([loadCoupon(couponCode), loadCoupon(couponCodeForLifetime), loadCoupon(couponCodeForBusiness)])
      .then(([coupon, lifetimeCoupon, businessCoupon]) => {
        if (!cancelled) dispatch({ type: 'SET_COUPONS', payload: { coupon, lifetimeCoupon, businessCoupon } });
      })
      .catch((error) => console.error('Error loading coupons:', error));

    return () => {
      cancelled = true;
    };
  }, [couponCode, couponCodeForLifetime, couponCodeForBusiness]);

  return {
    products: state.products,
    loadingCards: !state.pricesLoaded || !state.couponsLoaded,
    currency: state.currency,
    currencyValue: state.currencyValue,
    coupon: state.coupon,
    businessCoupon: state.businessCoupon,
    lifetimeCoupon: state.lifetimeCoupon,
    lifetimeCoupons: state.lifetimeCoupons,
  };
}

export default usePricing;
