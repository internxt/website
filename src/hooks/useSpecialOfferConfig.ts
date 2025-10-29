import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { PromoCodeName } from '@/lib/types';
export const ALLOWED_PATHS = ['baity', 'xavier', 'oscar'];
export const ALTERNATE_RECOMENDATED_PLAN_PATHS = new Set<string>([]);
export const DARK_MODE_PATHS = new Set<string>(['baity']);
export const COUPON_CODES = {
  baity: PromoCodeName.BaityBait,
  xavier: PromoCodeName.Xavier,
  oscar: PromoCodeName.Oscar,
};

interface OfferConfig {
  selectedPathname: string | null;
  isDarkMode: boolean;
  alternateRecommendedPlan: boolean;
  couponCode: PromoCodeName | undefined;
}

export const useOfferConfig = (pathname: string): OfferConfig => {
  return useMemo(() => {
    const selectedPathname = ALLOWED_PATHS.find((p) => p === pathname);

    if (!selectedPathname) {
      return {
        selectedPathname: null,
        isDarkMode: false,
        alternateRecommendedPlan: false,
        couponCode: undefined,
      };
    }

    const isDarkMode = DARK_MODE_PATHS.has(selectedPathname);
    const alternateRecommendedPlan = !ALTERNATE_RECOMENDATED_PLAN_PATHS.has(selectedPathname);
    const couponCode = COUPON_CODES[selectedPathname as keyof typeof COUPON_CODES];

    return {
      selectedPathname,
      isDarkMode,
      alternateRecommendedPlan,
      couponCode,
    };
  }, [pathname]);
};

export const usePathRedirect = (selectedPathname: string | null): void => {
  const router = useRouter();
  useEffect(() => {
    if (selectedPathname === null) {
      router.replace('/specialoffer');
    }
  }, [selectedPathname, router]);
};
