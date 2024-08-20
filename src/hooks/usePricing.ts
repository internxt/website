import { currencyService } from '@/components/services/currency.service';
import { ProductsDataProps, stripeService } from '@/components/services/stripe.service';
import { useEffect, useReducer } from 'react';
import { PromoCodeName, PromoCodeProps } from '@/lib/types';

type UsePricingOptions = {
  couponCode?: PromoCodeName;
  couponCodeForBusiness?: PromoCodeName;
  currencySpecified?: string;
  fetchLifetimeCoupons?: boolean;
};

interface UseStripeProductsAndCurrencyResponse {
  loadingCards: boolean;
  currency: string;
  currencyValue: string;
  coupon?: PromoCodeProps;
  businessCoupon?: PromoCodeProps;
  lifetimeCoupons?: any;
  products?: ProductsDataProps;
}

type ActionType =
  | { type: 'SET_PRODUCTS'; payload: ProductsDataProps | undefined }
  | { type: 'SET_LOADING_CARDS'; payload: boolean }
  | { type: 'SET_CURRENCY'; payload: string }
  | { type: 'SET_CURRENCY_VALUE'; payload: string }
  | { type: 'SET_COUPON'; payload: PromoCodeProps | undefined }
  | { type: 'SET_BUSINESS_COUPON'; payload: PromoCodeProps | undefined }
  | { type: 'SET_LIFETIME_COUPONS'; payload: any | undefined };

const reducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_LOADING_CARDS':
      return { ...state, loadingCards: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_CURRENCY_VALUE':
      return { ...state, currencyValue: action.payload };
    case 'SET_COUPON':
      return { ...state, coupon: action.payload };
    case 'SET_BUSINESS_COUPON':
      return { ...state, businessCoupon: action.payload };
    case 'SET_LIFETIME_COUPONS':
      return { ...state, lifetimeCoupons: action.payload };
    default:
      return state;
  }
};

function usePricing(options: UsePricingOptions = {}): UseStripeProductsAndCurrencyResponse {
  const { couponCode, couponCodeForBusiness, currencySpecified, fetchLifetimeCoupons } = options;
  const initialState = {
    products: undefined,
    loadingCards: true,
    currency: '€',
    coupon: undefined,
    businessCoupon: undefined,
    lifetimeCoupons: undefined,
    currencyValue: 'eur',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const res = await currencyService.filterCurrencyByCountry(currencySpecified);
      const prices = await stripeService.getPrices(res.currencyValue);

      dispatch({ type: 'SET_PRODUCTS', payload: prices });
      dispatch({ type: 'SET_CURRENCY', payload: res.currency });
      dispatch({ type: 'SET_CURRENCY_VALUE', payload: res.currencyValue });
    } catch (err) {
      try {
        const prices = await stripeService.getPrices('eur');
        dispatch({ type: 'SET_PRODUCTS', payload: prices });
      } catch (error) {
        console.error('Error getting prices:', error);
      }

      dispatch({ type: 'SET_CURRENCY', payload: '€' });
      dispatch({ type: 'SET_CURRENCY_VALUE', payload: 'eur' });
    }

    if (fetchLifetimeCoupons) {
      try {
        const lifetimeCoupons = await stripeService.getLifetimeCoupons();

        dispatch({ type: 'SET_LIFETIME_COUPONS', payload: lifetimeCoupons });
      } catch (error) {
        //NO OP
      }
    }

    if (couponCode) {
      try {
        const coupon = await stripeService.getCoupon(couponCode);

        dispatch({ type: 'SET_COUPON', payload: coupon });
      } catch (err) {
        // NO OP
      }
    } else if (couponCodeForBusiness) {
      try {
        const businessCoupon = await stripeService.getCoupon(couponCodeForBusiness);
        dispatch({ type: 'SET_BUSINESS_COUPON', payload: businessCoupon });
      } catch (err) {
        // NO OP
      }
    }
  };

  useEffect(() => {
    fetchData().then(() => {
      dispatch({ type: 'SET_LOADING_CARDS', payload: false });
    });
  }, []);

  return {
    products: state.products,
    loadingCards: state.loadingCards,
    currency: state.currency,
    currencyValue: state.currencyValue,
    coupon: state.coupon,
    businessCoupon: state.businessCoupon,
    lifetimeCoupons: state.lifetimeCoupons,
  };
}

export default usePricing;
