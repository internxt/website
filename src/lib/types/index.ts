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
  SpringCoupon = 'HELLOSPRING',
  PcComponentesCoupon = 'PCCOMPONENTES',
  PcComponentesCouponForB2B = 'PCCOMPB2B',
  Lifetime2TBDiscount = '2TB70OFF',
  Lifetime5TBDiscount = '5TB70OFF',
  Lifetime10TBDiscount = '10TB70OFF',
  lifetime70OFF = 'LIFETIME_70OFF',
  Subscriptions75OFF = '75OFF4YOU',
  IndependenceDayItaly = 'HAPPY85',
  TierraDeHackers = 'tierradehackers',
  Lifetime82 = 'lifetime82',
  euro2024twoTB = '2TB75OFF',
  euro2024fiveTB = '75OFF5TB',
  euro2024TenTB = '75OFF10TB',
  freeUserCoupon = 'SPECIAL75',
  PcmagCoupon = 'PCmag80',
  CloudwardsCoupon = 'CLOUDWARDS85',
  OnePlanCoupon = '5TBplan',
  AllPlansCoupon = 'SUMMER80',
  Lifetime83DiscountCoupon = 'NATIONAL83',
  Protect82Coupon = 'PROTECT82',
  LockerCoupon = 'LOCKER_COUPON_CODE',
  StartPageCoupon = 'STARTPAGE_COUPON_CODE',
  Lifetime78OFF = 'BACK2WORK',
  CyberAwarenessPromoCode = 'CYBER80',
  PartnerDiscount75OFF = 'partner75',
  BlackFriday = 'BLACKFRIDAY85',
  SinglesDay = 'SELFLOVE83',
  Resurrection = 'COMEBACK',
  Halloween = 'HORROR80',
  KamalaHarris = 'KAMALA',
  DonaldTrump = 'TRUMP',
  SoftSales = '70OFF4YOU',
  Christmas = 'SECRETSANTA80',
  Special80Coupon = 'SPECIAL80',
  PCLOUD80 = 'PCLOUD80',
  PrivacyWeek = 'PRIVACY85',
  Brave = 'BRAVE85',
  SuperBowlCampaign = 'SUPERBOWL80',
  ValentinesCampaign = 'MYVALENTINE85',
  PcCloudS3 = 'PCCLOUDS3',
  StPatricksDay = 'STPADDYS80',
  Identity82 = 'IDENTITY82',
  Identity82AFF = 'IDENTITY82AFF',
  PcComponentes5TB = 'PCMOVIL',
  StarWars = 'STARWARS85',
  Celebration83 = 'CELEBRATION83',
  Special82 = '82SPECIAL',
  TechRadarDiscount = 'TECHRADAR',
  Affiliates85 = 'DRIVE85',
  Off704You = '70OFF4YOU',
  Planet85 = 'PLANET85',
  Comeback90 = 'COMEBACK90',
  DRIVE87 = 'DRIVE87',
  CLOUDWARDS87 = 'CLOUDWARDS87',
  PCLOUD87 = 'PCLOUD87',
  Special85 = 'SPECIAL85',
  SummerCampaign = 'SUMMER80',
  Bevalk = 'BEVALK',
  Hacksviss = 'HACKSVISS',
  Securiters = 'SECURITERS',
  Exclusive85 = 'EXCLUSIVE85',
  ValenciaCF = 'VALENCIACF',
  TokinPrivacy = 'TOKINPRIVACY',
  Dropbox87 = 'DROPBOX87',
  Upgrage = 'UPGRADE',
  FifthAnniversary = 'INTERNXT5',
  Welcome = 'WELCOME',
  AchoEsGratiss = 'achoesgratiss',
  AFS = 'AFS87',
  SoftSales85 = '85OFF',
  FreePlanUpsell = 'EXCLUSIVE87',
  Techpresso = 'Techpresso',
  Trickyhash = 'trickyhash',
  Reddit = 'REDDIT87',
  Mega87 = 'MEGA87',
  Secure ='SECURE'
}

export interface PromoCodeProps {
  name: PromoCodeName;
  codeId: string;
  amountOff?: number;
  percentOff?: number;
}

export type CyberSecurityQuizViews = 'initialState' | 'questions' | 'quizCompleted' | 'results';
