import { useCallback } from 'react';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeProps } from '@/lib/types';

type UseCheckoutOptions = {
  individualCoupon?: PromoCodeProps;
  lifetimeCoupon?: PromoCodeProps;
  currencyValue: string;
};

export type OnCheckoutButtonClicked = (
  priceId: string,
  isCheckoutForLifetime: boolean,
  interval: string,
  storage: string,
) => Promise<void>;

function useCheckout({ individualCoupon, lifetimeCoupon, currencyValue }: UseCheckoutOptions): OnCheckoutButtonClicked {
  return useCallback(
    async (priceId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => {
      const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

      const finalPrice = await stripeService.calculateFinalPrice(
        priceId,
        interval,
        currencyValue,
        'individuals',
        couponCodeForCheckout,
      );

      stripeService.redirectToCheckout(
        priceId,
        finalPrice,
        currencyValue,
        'individual',
        isCheckoutForLifetime,
        interval,
        storage,
        couponCodeForCheckout?.name,
      );
    },
    [individualCoupon, lifetimeCoupon, currencyValue],
  );
}

export default useCheckout;
