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
  PcComponentesCoupon = 'PCCOMPONENTES',
  euro2024twoTB = '2TB75OFF',
  euro2024fiveTB = '75OFF5TB',
  euro2024TenTB = '75OFF10TB',
  PcmagCoupon = 'PCMAG85',
  BlackFriday = 'BF2025',
  KamalaHarris = 'KAMALA',
  DonaldTrump = 'TRUMP',
  PcCloudS3 = 'PCCLOUDS3',
  PcComponentes5TB = 'PCMOVIL',
  DRIVE85 = 'DRIVE85',
  PCLOUD85 = 'PCLOUD85',
  Bevalk = 'BEVALK',
  TokinPrivacy = 'TOKINPRIVACY',
  Dropbox85 = 'DROPBOX85',
  SoftSales85 = '85OFF',
  FreePlanUpsell = 'SPECIAL85',
  Trickyhash = 'trickyhash',
  Reddit = 'REDDIT85',
  Mega85 = 'MEGA85',
  Secure = 'SECURE',
  VIPVLC = 'VIPVLC',
  GRABON = 'GRABON85',
  BaityBait = 'BAITY',
  Xavier = 'XAVIER',
  Oscar = 'OSCAR',
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
  NORTON85 = 'NORTON85'
}

export interface PromoCodeProps {
  name: PromoCodeName;
  codeId: string;
  amountOff?: number;
  percentOff?: number;
}

export type CyberSecurityQuizViews = 'initialState' | 'questions' | 'quizCompleted' | 'results';
