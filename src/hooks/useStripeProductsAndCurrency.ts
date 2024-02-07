import { currencyService } from '@/components/services/currency.service';
import { ProductsProps, stripeService } from '@/components/services/stripe.service';
import { useEffect, useReducer } from 'react';
import { CouponType } from '@/pages/api/stripe/get_coupons';

interface UseStripeProductsAndCurrencyResponse {
  products: ProductsProps | undefined;
  loadingCards: boolean;
  currency: { symbol: string; value: number };
  coupon: CouponType | null;
}

type ActionType =
  | { type: 'SET_PRODUCTS'; payload: ProductsProps | undefined }
  | { type: 'SET_LOADING_CARDS'; payload: boolean }
  | { type: 'SET_CURRENCY'; payload: { symbol: string; value: number } }
  | { type: 'SET_COUPON'; payload: CouponType | null };

const reducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_LOADING_CARDS':
      return { ...state, loadingCards: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_COUPON':
      return { ...state, coupon: action.payload };
    default:
      return state;
  }
};

function useStripeProductsAndCurrency(couponCode?: CouponType): UseStripeProductsAndCurrencyResponse {
  const initialState = {
    products: undefined,
    loadingCards: true,
    currency: { symbol: '€', value: 1 },
    coupon: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const prices = await stripeService.getPrices();
      dispatch({ type: 'SET_PRODUCTS', payload: prices });
      dispatch({ type: 'SET_LOADING_CARDS', payload: false });
    } catch (error) {
      try {
        const res = await stripeService.getPrices(true);
        dispatch({ type: 'SET_PRODUCTS', payload: res });
        dispatch({ type: 'SET_LOADING_CARDS', payload: false });
      } catch (error) {
        console.error('Error getting prices');
      }
    }

    try {
      const res = await currencyService.filterCurrencyByCountry();
      dispatch({ type: 'SET_CURRENCY', payload: { symbol: res.symbol, value: res.value } });
    } catch (err) {
      dispatch({ type: 'SET_CURRENCY', payload: { symbol: '€', value: 1 } });
      console.error(err);
    }

    if (couponCode) {
      try {
        const coupon = await stripeService.getCoupon(couponCode);
        dispatch({ type: 'SET_COUPON', payload: coupon });
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...state };
}

export default useStripeProductsAndCurrency;
