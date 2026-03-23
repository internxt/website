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
  PcmagCoupon = 'PCMAG87',
  OnePlanCoupon = '5TBplan',
  AllPlansCoupon = 'SUMMER80',
  Lifetime83DiscountCoupon = 'NATIONAL83',
  Protect82Coupon = 'PROTECT82',
  LockerCoupon = 'LOCKER_COUPON_CODE',
  StartPageCoupon = 'STARTPAGE_COUPON_CODE',
  Lifetime78OFF = 'BACK2WORK',
  CyberAwarenessPromoCode = 'CYBER80',
  PartnerDiscount75OFF = 'partner75',
  BlackFriday = 'BF2025',
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
  Off704You = '70OFF4YOU',
  Planet85 = 'PLANET85',
  Comeback90 = 'COMEBACK90',
  DRIVE85 = 'DRIVE85',
  CLOUDWARDS85 = 'CLOUDWARDS85',
  PCLOUD85 = 'PCLOUD85',
  SummerCampaign = 'SUMMER80',
  Bevalk = 'BEVALK',
  Hacksviss = 'HACKSVISS',
  Securiters = 'SECURITERS',
  Exclusive85 = 'EXCLUSIVE85',
  ValenciaCF = 'VALENCIACF',
  TokinPrivacy = 'TOKINPRIVACY',
  Dropbox85 = 'DROPBOX85',
  Upgrage = 'UPGRADE',
  FifthAnniversary = 'INTERNXT5',
  Welcome = 'WELCOME',
  AchoEsGratiss = 'achoesgratiss',
  AFS = 'AFS85',
  SoftSales85 = '85OFF',
  FreePlanUpsell = 'SPECIAL85',
  Techpresso = 'Techpresso',
  Trickyhash = 'trickyhash',
  Reddit = 'REDDIT85',
  Mega85 = 'MEGA85',
  Secure = 'SECURE',
  Toquederetoque = 'TOQUEDERETOQUE',
  VIPVLC = 'VIPVLC',
  GRABON = 'GRABON85',
  BaityBait = 'BAITY',
  NextJump = 'PERKS',
  Kripesh = 'KRIPESH',
  OFF75 = '75OFF',
  Xavier = 'XAVIER',
  Oscar = 'OSCAR',
  Bevalk90 = 'BEVALK90',
  TokinPrivacy90 = 'TOKIN90',
  GRABON90 = 'GRABON90',
  RIMEMBAH = 'RIMEMBAH',
  BELIEVEMY = 'BELIEVEMY',
  GHAREEB = 'GHAREEB',
  JON = 'JON',
  APFELCAST = 'apfelcast',
  MADROZ = 'madroz',
  JUSTIN = 'justin',
  DEGOO = 'DEGOO85',
  DRIME = 'DRIME85',
  ELEPHANT = 'ELEPHANT85',
  FILEJUMP = 'FILEJUMP85',
  GOOGLEDRIVE = 'DEGOOGLE85',
  Ice = 'ICEDRIVE85',
  KOOFR = 'KOOFR85',
  ONEDRIVE = 'ONEDRIVE85',
  QINHUI = 'QINHUI',
  CT3003 = 'CT3003',
  benjamin = 'BENJAMIN',
  payette = 'PAYETTE',
  christian = 'CHRISTIAN',
  ZOOM85 = 'ZOOM85',
  FILEN85 = 'FILEN85',
  GOOGLEMEET = 'GOOGLEMEET85',
  IDRIVE85 = 'IDRIVE85',
  PROTONDRIVE = 'PROTONDRIVE85',
  SYNC = 'SYNC85',
  TERABOX85 = 'TERABOX85',
  ition = 'ITION',
  TEAMS = 'TEAMS85',
  CHATGPT85 = 'CHATGPT85',
  COPILOT85 = 'COPILOT85',
  DEEPSEEK85 = 'DEEPSEEK85',
  GEMINI85 = 'GEMINI85',
  GROK85 = 'GROK85',
  WIRE = 'WIRE85',
  FOCI = 'FOCI',
  NEUMANNDIGITAL = 'NEUMANNDIGITAL',
  Bluewin = 'BLUEWIN85',
  Tatiana = 'TATIANA',
  Rclone = 'RCLONE85',
  simon42 = 'SIMON42',
  love = 'LOVE88',
  heisect = 'HEISECT',
  devopstoolbox = 'DEVOPSTOOLBOX',
  bjoern = 'BJOERN',
  lefiltre = 'LEFILTRE',
  cloudoff = 'CLOUDOFF',
  bunker = 'BUNKER',
  speciale = 'SPECIALE',
  xataka = 'XATAKA',
  techradar = 'TECHRADAR',
  shannon = 'SHANNON',
  overflow = 'OVERFL0W',
  OFFSUB = '80OFF',
  OFFLFT = '80OFFLFT',
  lefiltreitalia = 'LEFILTREITALIA',
  genius = 'GENIUS',
  letosa = 'LETOSA',
  cninternxtl = 'CNINTERNXTL',
  whereby = 'WHEREBY85',
  CLOUDWARDS = 'CLOUDWARDS',
  CTZ = 'CTZ',
  lifetime = 'LIFETIME',
  anual = 'ANUAL',
  AVAST85 = 'AVAST85',
  AVG85 = 'AVG85',
  TOTALAV85 = 'TOTALAV85',
  AVIRA85 = 'AVIRA85',
  BITDEFENDER85 = 'BITDEFENDER85',
  CCLEANER85 = 'CCLEANER85',
  CLEANMYMAC85 = 'CLEANMYMAC85',
  MALWAREBYTES85 = 'MALWAREBYTES85',
  MCAFEE85 = 'MCAFEE85',
  NORTON85 = 'NORTON85',
  morrolinux = 'MORROLINUX',
  clubic = 'DRIVE87',
  tukaram = 'TUKARAM',
  f4mi = 'F4MI',
  macho = 'MACHO',
  heise = 'HEISE'
}

export interface PromoCodeProps {
  name: PromoCodeName;
  codeId: string;
  amountOff?: number;
  percentOff?: number;
}

export type CyberSecurityQuizViews = 'initialState' | 'questions' | 'quizCompleted' | 'results';
