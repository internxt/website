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

export enum PromoCodeName {
  TwoTBCoupon75 = '2TBPLAN75',
  LifetimeGeneral = 'LIFETIME25',
  LifetimeSpecial = 'LIFETIME50',
  Special15Coupon = 'SPECIAL15',
  AnnualDiscount = '80ANNUAL',
  SpringCoupon = 'Spring',
  PcComponentesCoupon = 'PCCOMPONENTES',
  PcComponentesCouponForB2B = 'PCCOMPB2B',
  Lifetime2TBDiscount = '2TB70OFF',
  Lifetime5TBDiscount = '5TB70OFF',
  Lifetime10TBDiscount = '10TB70OFF',
  lifetime70OFF = 'LIFETIME_70OFF',
  Subscriptions75OFF = '75OFFSUBS',
  IndependenceDayItaly = 'HAPPY80',
  TierraDeHackers = 'tierradehackers',
  Lifetime82 = 'lifetime82',
  euro2024twoTB = '2TB75OFF',
  euro2024fiveTB = '75OFF5TB',
  euro2024TenTB = '75OFF10TB',
  freeUserCoupon = 'SPECIAL75',
  PcmagCoupon = 'PCmag80',
  CloudwardsCoupon = 'Cloudwards80',
  OnePlanCoupon = '5TBplan',
  AllPlansCoupon = 'SUMMER80',
  Lifetime83DiscountCoupon = 'NATIONAL83',
  Protect82Coupon = 'PROTECT82',
  LockerCoupon = 'LOCKER_COUPON_CODE',
  StartPageCoupon = 'STARTPAGE_COUPON_CODE',
  Lifetime78OFF = 'BACK2WORK',
  PartnerDiscount75OFF = 'PARTNER75',
}

export interface PromoCodeProps {
  name: PromoCodeName;
  codeId: string;
  amountOff?: number;
  percentOff?: number;
}

export type CyberSecurityQuizViews = 'initialState' | 'questions' | 'quizCompleted' | 'results';
