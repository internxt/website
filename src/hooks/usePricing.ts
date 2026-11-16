/* eslint-disable @typescript-eslint/no-explicit-any */
import { currencyService } from '@/services/currency.service';
import { ProductsDataProps, stripeService } from '@/services/stripe.service';
import { useEffect, useReducer } from 'react';
import { PromoCodeName, PromoCodeProps } from '@/lib/types';
import { notificationService } from '@/components/Snackbar';

type LifetimeCoupons = Record<string, PromoCodeProps>;

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
  pricesError: boolean;
}

interface PricesData {
  products?: ProductsDataProps;
  currency: string;
  currencyValue: string;
  lifetimeCoupons?: any;
  pricesError: boolean;
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
const PRICES_ERROR_MESSAGE = 'We could not load the prices. Please reload the page and try again.';

const initialState: PricingState = {
  ...DEFAULT_CURRENCY,
  pricesError: false,
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

const loadPrices = async (currencySpecified?: string): Promise<Omit<PricesData, 'lifetimeCoupons' | 'pricesError'>> => {
  try {
    const { currency, currencyValue } = await currencyService.filterCurrencyByCountry(currencySpecified);
    const products = await stripeService.getPrices(currencyValue);

    if (!products) throw new Error(`No prices available for ${currencyValue}`);

    return { products, currency, currencyValue };
  } catch (err) {
    console.warn('Primary price fetch failed, falling back to EUR:', err);

    const products = await stripeService.getPrices(DEFAULT_CURRENCY.currencyValue);

    if (!products) throw new Error(`No prices available for ${DEFAULT_CURRENCY.currencyValue}`);

    return { products, ...DEFAULT_CURRENCY };
  }
};

const loadLifetimeCoupons = async (): Promise<LifetimeCoupons> => {
  return stripeService.getLifetimeCoupons();
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

    Promise.allSettled([
      loadPrices(currencySpecified),
      fetchLifetimeCoupons ? loadLifetimeCoupons() : Promise.resolve(undefined),
    ]).then(([pricesResult, lifetimeCouponsResult]) => {
      if (cancelled) return;

      const pricesError = pricesResult.status === 'rejected';

      if (pricesError) {
        console.error('Error loading prices:', pricesResult.reason);
        notificationService.openErrorToast(PRICES_ERROR_MESSAGE);
      }

      if (lifetimeCouponsResult.status === 'rejected') {
        console.error('Error fetching lifetime coupons:', lifetimeCouponsResult.reason);
      }

      const prices = pricesResult.status === 'fulfilled' ? pricesResult.value : DEFAULT_CURRENCY;
      const lifetimeCoupons = lifetimeCouponsResult.status === 'fulfilled' ? lifetimeCouponsResult.value : undefined;

      dispatch({ type: 'SET_PRICES', payload: { ...prices, lifetimeCoupons, pricesError } });
    }).catch((err) => console.error('Error loading prices:', err));

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let cancelled = false;

    Promise.allSettled([
      loadCoupon(couponCode),
      loadCoupon(couponCodeForLifetime),
      loadCoupon(couponCodeForBusiness),
    ]).then((results) => {
      if (cancelled) return;

      const [coupon, lifetimeCoupon, businessCoupon] = results.map((result) => {
        if (result.status === 'rejected') console.error('Error loading coupons:', result.reason);
        return result.status === 'fulfilled' ? result.value : undefined;
      });

      dispatch({ type: 'SET_COUPONS', payload: { coupon, lifetimeCoupon, businessCoupon } });
    }).catch((err) => console.error('Error loading coupons:', err));

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
    pricesError: state.pricesError,
  };
}

export default usePricing;
