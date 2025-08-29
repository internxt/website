export interface BannersText {
  changeEmailBanner: ChangeEmailBanner;
  LoginBanner: BFBannerClass;
  FreeCardPromoBanner: FreeCardPromoBanner;
  AndroidSmartBanner: AndroidSmartBanner;
  BFBanner: BFBannerClass;
  featuresBanner: FeaturesBanner;
  tryOutInternxtGeneralBanner: GeneralBannerClass;
  tryOutInternxtPasswordCheckerBanner: GeneralBannerClass;
  SignUpPCloudAlternativeBanner: GoogleLpBanner;
  SignUpPCloudAlternativeBanner2: GoogleLpBanner;
  SignUpPwdCheckerBanner: GoogleLpBanner;
  SignUpFileConverterBanner: GoogleLpBanner;
  SignUpWebDAVBanner: GoogleLpBanner;
  SignUpVPNBanner: GoogleLpBanner;
  SignUpVirusScannerBanner: GoogleLpBanner;
  SignUpByteConverterBanner: GoogleLpBanner;
  SignUpTempMailBanner: GoogleLpBanner;
  SignUpSuccessStoriesBanner: GoogleLpBanner;
  SignUpCyberAwareness: GoogleLpBanner;
  SignUpPasswordGenerator: GoogleLpBanner;
  privacyDirectoryBanner: GoogleLpBanner;
  GeneralBanner: GeneralBannerClass;
  GoogleLPBanner: GoogleLpBanner;
  BusinessBanner: BusinessBanner;
  GoogleKnows: AndroidSmartBanner;
  TopBarBanner: TopBarBanner;
  lifetimeBanner: LifetimeBanner;
  BeforeCloseBanner: BeforeCloseBanner;
}

export interface AndroidSmartBanner {
  title: string;
}

export interface BFBannerClass {
  head: string;
  title: string;
  buttonText: string;
  card: Card;
}

export interface Card {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
}

export interface BeforeCloseBanner {
  title: BeforeCloseBannerTitle;
  subtitle: string;
  cta: string;
  guarantee: string;
}

export interface BeforeCloseBannerTitle {
  normal1: string;
  blue: string;
  normal2: string;
}

export interface BusinessBanner {
  line1: string;
  blueText: string;
  subtitle: string;
  placeHolder: string;
  cta: string;
}

export interface FreeCardPromoBanner {
  title: string;
  subtitle: Subtitle;
  getDealCta: string;
  freePlanCta: string;
  guarantee: string;
}

export interface Subtitle {
  blue: string;
  normal: string;
}

export interface GeneralBannerClass {
  title: string;
  description: string;
  cta: string;
  ctaCancel?: string;
}

export interface GoogleLpBanner {
  line1: string;
  blueText: string;
}

export interface TopBarBanner {
  title: TopBarBannerTitle;
}

export interface TopBarBannerTitle {
  boldText: string;
  normalText: string;
  cta: string;
}

export interface ChangeEmailBanner {
  title: string;
  description: string[];
  actionCta: string;
  cancelCta: string;
}

export interface FeaturesBanner {
  label: string;
  title: string;
  cta: string;
  guarantee: string;
  lastCta: string;
  features: string[];
}

export interface LifetimeBanner {
  label: string;
  title: string;
  cta: string;
  guarantee: string;
}
