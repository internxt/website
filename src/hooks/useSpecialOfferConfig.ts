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
  'cninternxtl',
  'cooltechzone',
  'lifetime',
  'clubic',
  'morrolinux',
  'tukaram',
  'f4mi',
  'macho',
  'heise',
  'world-backup-day',
  'gentiluomodigitale',
  'spencer',
  'nate',
  'shortcircuit',
  'techlinked',
  'techquickie',
  'last-chance',
  'earth-day',
  'dezz',
  'alejavi',
  'nextgenia',
  'gbascunana',
  'marcocreativo',
  'alexziskind',
  'cocadmin',
  'einfach',
  'revolut',
  'scott',
  'drop-offer',
  'adi4u',
  'nfire',
  'techsagar',
  'levelupid',
  'privacytutor',
  'lukevoidx',
  'howmation',
  'aylabs',
  'eurodefence',
  'saddy',
  'madmoneylabs',
  'wpcdrive',
  'jonatan',
  'bpdrive',
  'dhiarcom',
  'gtid',
  'bangtutorial',
  'dea',
  'mejaunbox',
  'tauteknologi',
  'themorpheus',
  'morpheus'
];
export const ENFORCED_LOCALE: Record<string, string> = {
  baity: 'es',
  heisect: 'de',
  heise: 'de',
  einfach: 'de',
  bjoern: 'de',
  apfelcast: 'de',
  ct3003: 'de',
  ition: 'de',
  neumanndigital: 'de',
  bluewin: 'de',
  simon42: 'de',
  madroz: 'fr',
  justin: 'fr',
  qinhui: 'fr',
  benjamin: 'fr',
  lefiltre: 'fr',
  overfl0w: 'fr',
  xataka: 'es',
  macho: 'es',
  letosa: 'es',
  genius: 'es',
  marcocreativo: 'es',
  gbascunana: 'es',
  alejavi: 'es',
  tukaram: 'es',
  payette: 'en',
  christian: 'en',
  tatiana: 'en',
  devopstoolbox: 'en',
  foci: 'en',
  shannon: 'en',
  cninternxtl: 'en',
  cooltechzone: 'en',
  spencer: 'en',
  f4mi: 'en',
  shortcircuit: 'en',
  techlinked: 'en',
  techquickie: 'en',
  alexziskind: 'en',
  eurodefence: 'en',
  wpcdrive: 'en',
  bpdrive:'en',
  jonatan: 'es',
  clubic: 'fr',
  cocadmin: 'fr',
  lefiltreitalia: 'it',
  gentiluomodigitale: 'it',
  morrolinux: 'it',
  speciale: 'it',
  nfire: 'it',
  luca: 'it',
  saddy: 'it',
  ghareeb: 'fr',
  madmoneylabs: 'zh',
  lukevoidx: 'zh',
  dhiarcom: 'en',
  gtid: 'en',
  bangtutorial: 'en',
  dea: 'en',
  mejaunbox: 'en',
  tauteknologi: 'en',
  themorpheus: 'de',
  morpheus: 'de'
};

export const ALTERNATE_RECOMENDATED_PLAN_PATHS = new Set<string>([]);
export const DARK_MODE_PATHS = new Set<string>(['oscar', 'rimembah', 'believemy', 'ghareeb']);
export const ALTERNATIVE_IMAGES_PATHS = new Set<string>(['baity', 'nfire', 'devopstoolbox', 'lefiltre', 'overfl0w', 'morrolinux', 'techsagar', 'bjoern', 'bpdrive', 'dea', 'mejaunbox', 'bangtutorial', 'tauteknologi']);
export const ONLY_ULTIMATE_PLANS_PATHS = new Set<string>(['ultimate']);
export const ULTIMATE_PREMIUM_PLANS_PATHS = new Set<string>([]);
export const ANNUAL_PLANS_PATHS = new Set<string>(['annual', 'ultimate']);
export const LIFETIME_PLANS_PATHS = new Set<string>(['lifetime', 'einfach']);
export const ANNUAL_DISCOUNT_PLANS_PATHS = new Set<string>([
  'adi4u',
  'drop-offer',
  'morrolinux',
  'alexziskind',
  'overfl0w',
  'nfire',
  'techsagar',
  'levelupid',
  'privacytutor',
  'heisect',
  'xataka',
  'heise',
  'lukevoidx',
  'howmation',
  'aylabs',
  'bjoern',
  'simon42',
  'lefiltre',
  'devopstoolbox',
  'ition',
  'cocadmin',
  'eurodefence',
  'luca',
  'saddy',
  'madmoneylabs',
  'wpcdrive',
  'bpdrive',
  'jonatan',
  'dhiarcom',
  'gtid',
  'bangtutorial',
  'dea',
  'mejaunbox',
  'tauteknologi',
  'themorpheus',
  'morpheus'
]);

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
  cninternxtl: PromoCodeName.cninternxtl,
  cooltechzone: PromoCodeName.CTZ,
  lifetime: PromoCodeName.lifetime,
  clubic: PromoCodeName.clubic,
  morrolinux: PromoCodeName.morrolinux,
  tukaram: PromoCodeName.tukaram,
  f4mi: PromoCodeName.f4mi,
  macho: PromoCodeName.macho,
  heise: PromoCodeName.heise,
  'world-backup-day': PromoCodeName.worldBackupDay,
  gentiluomodigitale: PromoCodeName.gentiluomodigitale,
  spencer: PromoCodeName.spencer,
  nate: PromoCodeName.nate,
  shortcircuit: PromoCodeName.shortcircuit,
  techlinked: PromoCodeName.techlinked,
  techquickie: PromoCodeName.techquickie,
  'last-chance': PromoCodeName.lastChance,
  'earth-day': PromoCodeName.earthDay,
  dezz: PromoCodeName.Dezz,
  alejavi: PromoCodeName.Alejavi,
  nextgenia: PromoCodeName.nextGenia,
  gbascunana: PromoCodeName.gbascunana,
  marcocreativo: PromoCodeName.marcocreativo,
  alexziskind: PromoCodeName.alexziskind,
  cocadmin: PromoCodeName.cocadmin,
  einfach: PromoCodeName.einfach,
  revolut: PromoCodeName.revolut,
  scott: PromoCodeName.scott,
  'drop-offer': PromoCodeName.dropOffer,
  adi4u: PromoCodeName.adi4u,
  nfire: PromoCodeName.nFire,
  techsagar: PromoCodeName.techsagar,
  levelupid: PromoCodeName.levelupid,
  privacytutor: PromoCodeName.privacyTutor,
  lukevoidx: PromoCodeName.lukevoidx,
  howmation: PromoCodeName.howmation,
  aylabs: PromoCodeName.aylabs,
  eurodefence: PromoCodeName.eurodefence,
  luca: PromoCodeName.luca,
  saddy: PromoCodeName.saddy,
  madmoneylabs: PromoCodeName.madmoneylabs,
  wpcdrive: PromoCodeName.wpcdrive,
  bpdrive: PromoCodeName.bpdrive,
  jonatan: PromoCodeName.jonatan,
  dhiarcom: PromoCodeName.dhiarcom,
  gtid: PromoCodeName.gtid,
  bangtutorial: PromoCodeName.bangtutorial,
  dea: PromoCodeName.dea,
  mejaunbox: PromoCodeName.mejaunbox,
  tauteknologi: PromoCodeName.tauteknologi,
  themorpheus: PromoCodeName.themorpheus,
  morpheus: PromoCodeName.morpheus
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
  lifetimePlans: boolean;
  isClubic: boolean;
  isWpcdrive: boolean;
  isBpdrive: boolean;
  requireAnnualDiscount?: boolean;
  isPrivacyTutor: boolean;
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
        lifetimePlans: false,
        isClubic: false,
        isWpcdrive: false,
        isBpdrive: false,
        requireAnnualDiscount: false,
        isPrivacyTutor: false,
      };
    }

    const isDarkMode = DARK_MODE_PATHS.has(selectedPathname);
    const alternateRecommendedPlan = !ALTERNATE_RECOMENDATED_PLAN_PATHS.has(selectedPathname);
    const couponCode = COUPON_CODES[selectedPathname as keyof typeof COUPON_CODES];
    const onlyUltimatePlan = ONLY_ULTIMATE_PLANS_PATHS.has(selectedPathname);
    const ultimateAndPremiumPlans = ULTIMATE_PREMIUM_PLANS_PATHS.has(selectedPathname);
    const annualPlans = ANNUAL_PLANS_PATHS.has(selectedPathname);
    const lifetimePlans = LIFETIME_PLANS_PATHS.has(selectedPathname);
    const isClubic = selectedPathname === 'clubic';
    const isWpcdrive = selectedPathname === 'wpcdrive';
    const isBpdrive = selectedPathname === 'bpdrive'
    const isPrivacyTutor = selectedPathname === 'privacytutor';
    const requireAnnualDiscount = ANNUAL_DISCOUNT_PLANS_PATHS.has(selectedPathname);

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
      lifetimePlans,
      isClubic,
      isWpcdrive,
      isBpdrive,
      isPrivacyTutor,
      requireAnnualDiscount,
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
