import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { PromoCodeName } from '@/lib/types';

export const ALLOWED_PATHS = [
  'baity',
  'xavier',
  'oscar',
  'rimembah',
  'believemy',
  'ghareeb',
  'jon',
  'apfelcast',
  'madroz',
  'justin',
  'qinhui',
  'ct3003',
  'benjamin',
  'payette',
  'christian',
  'ition',
  'foci',
  'neumanndigital',
  'bluewin',
  'tatiana',
  'simon42',
  'devopstoolbox',
  'heisect',
  'bjoern',
  'lefiltre',
  'ultimate',
  'annual',
  'bunker',
  'speciale',
  'xataka',
  'techradar',
  'shannon',
  'overfl0w',
  'lefiltreitalia',
  'genius',
  'letosa',
];
export const ALTERNATE_RECOMENDATED_PLAN_PATHS = new Set<string>([]);
export const DARK_MODE_PATHS = new Set<string>(['baity', 'xavier', 'oscar', 'rimembah', 'believemy', 'ghareeb']);
export const ALTERNATIVE_IMAGES_PATHS = new Set<string>(['baity']);
export const ONLY_ULTIMATE_PLANS_PATHS = new Set<string>(['ultimate']);
export const ULTIMATE_PREMIUM_PLANS_PATHS = new Set<string>(['annual']);
export const ANNUAL_PLANS_PATHS = new Set<string>(['annual', 'ultimate']);

export const COUPON_CODES = {
  baity: PromoCodeName.BaityBait,
  xavier: PromoCodeName.Xavier,
  oscar: PromoCodeName.Oscar,
  rimembah: PromoCodeName.RIMEMBAH,
  believemy: PromoCodeName.BELIEVEMY,
  ghareeb: PromoCodeName.GHAREEB,
  jon: PromoCodeName.JON,
  apfelcast: PromoCodeName.APFELCAST,
  madroz: PromoCodeName.MADROZ,
  justin: PromoCodeName.JUSTIN,
  qinhui: PromoCodeName.QINHUI,
  ct3003: PromoCodeName.CT3003,
  benjamin: PromoCodeName.benjamin,
  payette: PromoCodeName.payette,
  christian: PromoCodeName.christian,
  ition: PromoCodeName.ition,
  foci: PromoCodeName.FOCI,
  neumanndigital: PromoCodeName.NEUMANNDIGITAL,
  bluewin: PromoCodeName.Bluewin,
  tatiana: PromoCodeName.Tatiana,
  simon42: PromoCodeName.simon42,
  devopstoolbox: PromoCodeName.devopstoolbox,
  heisect: PromoCodeName.heisect,
  bjoern: PromoCodeName.bjoern,
  lefiltre: PromoCodeName.lefiltre,
  ultimate: PromoCodeName.cloudoff,
  annual: PromoCodeName.cloudoff,
  bunker: PromoCodeName.bunker,
  speciale: PromoCodeName.speciale,
  xataka: PromoCodeName.xataka,
  techradar: PromoCodeName.techradar,
  shannon: PromoCodeName.shannon,
  overfl0w: PromoCodeName.overflow,
  lefiltreitalia: PromoCodeName.lefiltreitalia,
  genius: PromoCodeName.genius,
  letosa: PromoCodeName.letosa,
};

interface OfferConfig {
  selectedPathname: string | null;
  isDarkMode: boolean;
  alternateRecommendedPlan: boolean;
  couponCode: PromoCodeName | undefined;
  alternativeImages: string | null;
  onlyUltimatePlan: boolean;
  ultimateAndPremiumPlans: boolean;
  annualPlans: boolean;
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
        alternativeImages: null,
        onlyUltimatePlan: false,
        ultimateAndPremiumPlans: false,
        annualPlans: false,
      };
    }

    const isDarkMode = DARK_MODE_PATHS.has(selectedPathname);
    const alternateRecommendedPlan = !ALTERNATE_RECOMENDATED_PLAN_PATHS.has(selectedPathname);
    const couponCode = COUPON_CODES[selectedPathname as keyof typeof COUPON_CODES];
    const onlyUltimatePlan = ONLY_ULTIMATE_PLANS_PATHS.has(selectedPathname);
    const ultimateAndPremiumPlans = ULTIMATE_PREMIUM_PLANS_PATHS.has(selectedPathname);
    const annualPlans = ANNUAL_PLANS_PATHS.has(selectedPathname);

    const alternativeImages = ALTERNATIVE_IMAGES_PATHS.has(selectedPathname)
      ? selectedPathname
      : 'internxt-private-cloud';

    return {
      selectedPathname,
      isDarkMode,
      alternateRecommendedPlan,
      couponCode,
      alternativeImages,
      onlyUltimatePlan,
      ultimateAndPremiumPlans,
      annualPlans,
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
