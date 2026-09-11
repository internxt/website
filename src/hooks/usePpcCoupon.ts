import { useRouter } from 'next/router';
import { PromoCodeName } from '@/lib/types';

type PpcCoupons = {
  couponCode: PromoCodeName;
  couponCodeForLifetime: PromoCodeName;
};

function usePpcCoupon({ couponCode, couponCodeForLifetime }: PpcCoupons): PpcCoupons {
  const router = useRouter();
  const { fbclid, gclid, utm_source: utmSource } = router.query;

  if (fbclid) {
    return { couponCode: PromoCodeName.META85, couponCodeForLifetime: PromoCodeName.META85 };
  }

  if (gclid || utmSource === 'google') {
    return { couponCode: PromoCodeName.GADS85, couponCodeForLifetime: PromoCodeName.GADS85 };
  }

  return { couponCode, couponCodeForLifetime };
}

export default usePpcCoupon;
