export interface UserData {
  id: number;
  userId: string;
  name: string;
  lastname: string;
  email: string;
  username: string;
  bridgeUser: string;
  password: Password;
  mnemonic: string;
  root_folder_id: number;
  hKey: HKey;
  secret_2FA: any;
  errorLoginCount: number;
  is_email_activity_sended: boolean;
  referralCode: string;
  referrer: any;
  syncDate: any;
  uuid: string;
  lastResend: any;
  credit: number;
  welcomePack: boolean;
  registerCompleted: boolean;
  backupsBucket: any;
  sharedWorkspace: boolean;
  tempKey: any;
  avatar: any;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Password {
  type: string;
  data: number[];
}

interface HKey {
  type: string;
  data: number[];
}

export interface CheckIfUserHasSubscriptionResponse {
  user: {
    id: number;
    userId: string;
    name: string;
    lastname: string;
    email: string;
    username: string;
    bridgeUser: string;
    password: string;
    mnemonic: string;
    rootFolderId: number;
    hKey: Buffer | string;
    secret_2FA: string;
    errorLoginCount: number;
    isEmailActivitySended: number;
    referralCode: string;
    referrer: string;
    syncDate: Date;
    uuid: string;
    lastResend: Date;
    credit: number;
    welcomePack: boolean;
    registerCompleted: boolean;
    backupsBucket: string;
    sharedWorkspace: boolean;
    tempKey: string;
    avatar: string;
    lastPasswordChangedAt: Date;
  };
  hasSubscriptions: boolean;
}

export enum CouponType {
  TwoTBCoupon = 'COUPON_SUBSCRIPTION_90_OFF',
  TwoTBCoupon75 = 'COUPON_SUBSCRIPTION_75_OFF',
  LifetimeGeneral = 'COUPON_LIFETIME_GENERAL',
  LifetimeSpecial = 'COUPON_LIFETIME_SPECIAL',
  Special15Coupon = 'COUPON_SPECIAL15',
  AnnualDiscount = 'ANNUAL_PLAN_80_DISCOUNT',
  BlackFridayCoupon = 'COUPON_BLACK_FRIDAY_2023',
  ChristmasCoupon = 'COUPON_CHRISTMAS',
  LifetimeFiftyPercent = 'COUPON_LIFETIME_FIFTY',
  SoftSale = 'COUPON_SOFTSALE50',
  DataPrivacy = 'COUPON_DATA_PRIVACY',
  ValentinesCoupon = 'COUPON_VALENTINE_DAY',
  Wheel10 = 'WHEEL10_COUPON',
  Wheel15 = 'WHEEL15_COUPON',
  Wheel25 = 'WHEEL25_COUPON',
  Wheel30 = 'WHEEL30_COUPON',
  Wheel45 = 'WHEEL45_COUPON',
  Wheel50 = 'WHEEL50_COUPON',
  LockerCoupon = 'LOCKER_COUPON_CODE',
  StartPageCoupon = 'STARTPAGE_COUPON_CODE',
  SpringCoupon = 'SPRING_COUPON_CODE',
  PcComponentesCoupon = 'PC_COMPONENTES_COUPON',
  Lifetime2TBDiscount = 'LIFETIME_2TB_70',
  Lifetime5TBDiscount = 'LIFETIME_5TB_70',
  Lifetime10TBDiscount = 'LIFETIME_10TB_70',
  lifetime70OFF = 'LIFETIME_70OFF',
  starWarsSubscription = 'STAR_WARS_SUBSCRIPTION',
  starWars2TBLifetime = 'STAR_WARS_2TB_LIFETIME',
  starWars5TBLifetime = 'STAR_WARS_5TB_LIFETIME',
  starWars10TBLifetime = 'STAR_WARS_10TB_LIFETIME',
  IndependenceDayItaly = 'INDEPENDENCE_DAY_ITALY_COUPON',
  euro2024Sub = 'EURO_2024_SUB_COUPON',
  euro2024twoTB = 'EURO_2024_2TB_COUPON',
  euro2024fiveTB = 'EURO_2024_5TB_COUPON',
  euro2024TenTB = 'EURO_2024_10TB_COUPON',
  freeUserCoupon = 'FREE_PROMO_COUPON',
  PcmagCoupon = 'PCMAG_COUPON',
  CloudwardsCoupon = 'CLOUDWARDS_COUPON',
  OnePlanCoupon = 'ONEPLAN_COUPON',
  AllPlansCoupon = 'ALL_PLANS_80',
  Lifetime83DiscountCoupon = 'LIFETIME_83_DISCOUNT_COUPON',
  Protect82Coupon = 'PROTECT82_COUPON',
}

export type CyberSecurityQuizViews = 'initialState' | 'questions' | 'quizCompleted' | 'results';
