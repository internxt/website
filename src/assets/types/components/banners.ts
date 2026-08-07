export interface BannersText {
  changeEmailBanner: ChangeEmailBanner;
  LoginBanner: BFBannerClass;
  FreeCardPromoBanner: FreeCardPromoBanner;
  AndroidSmartBanner: AndroidSmartBanner;
  BFBanner: BFBannerClass;
  featuresBanner: FeaturesBanner;
  s3StorageBanner: S3StorageBanner;
  tryOutInternxtGeneralBanner: GeneralBannerClass;
  tryOutInternxtPasswordCheckerBanner: GeneralBannerClass;
  SignUpPCloudAlternativeBanner: GoogleLpBanner;
  SignUpPCloudAlternativeBanner2: GoogleLpBanner;
  SignUpPwdCheckerBanner: GoogleLpBanner;
  SignUpFileConverterBanner: GoogleLpBanner;
  SignUpFileCompressorBanner: GoogleLpBanner;
  SignUpWebDAVBanner: GoogleLpBanner;
  SignUpVPNBanner: GoogleLpBanner;
  SignUpVirusScannerBanner: GoogleLpBanner;
  SignUpMetadataRemoverBanner: GoogleLpBanner;
  SignUpAiDetector: GoogleLpBanner;
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

interface AndroidSmartBanner {
  title: string;
}

interface BFBannerClass {
  head: string;
  title: string;
  buttonText: string;
  card: Card;
}

interface Card {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
}

interface BeforeCloseBanner {
  title: BeforeCloseBannerTitle;
  subtitle: string;
  cta: string;
  guarantee: string;
}

interface BeforeCloseBannerTitle {
  normal1: string;
  blue: string;
  normal2: string;
}

interface BusinessBanner {
  line1: string;
  blueText: string;
  subtitle: string;
  placeHolder: string;
  cta: string;
}

interface FreeCardPromoBanner {
  title: string;
  subtitle: Subtitle;
  getDealCta: string;
  freePlanCta: string;
  guarantee: string;
  header: Header;
  products: Products;
}

interface Header {
  primaryText: string;
  afterPrimaryText: string;
}

interface Products {
  drive: string;
  antivirus: string;
  cleaner: string;
  vpn: string;
  meet: string;
  mail: string;
}

interface Subtitle {
  blue: string;
  normal: string;
}

interface GeneralBannerClass {
  title: string;
  description: string;
  cta: string;
  ctaCancel?: string;
}

interface GoogleLpBanner {
  line1: string;
  blueText: string;
}

interface TopBarBanner {
  title: TopBarBannerTitle;
}

interface TopBarBannerTitle {
  boldText: string;
  normalText: string;
  cta: string;
}

interface ChangeEmailBanner {
  title: string;
  description: string[];
  actionCta: string;
  cancelCta: string;
}

interface FeaturesBanner {
  label: { blueText: string; text: string };
  title: string;
  subTitle: { blueText: string; text: string };
  ctaGet: string;
  ctaContinue: string;
  guarantee: string;
  products: {
    drive: string;
    antivirus: string;
    cleaner: string;
    vpn: string;
    meet: string;
    mail: string;
    ai: string;
  };
}

interface LifetimeBanner {
  label: string;
  title: string;
  cta: string;
  guarantee: string;
}

interface S3StorageBanner {
  label: string;
  title: string;
  feat: string[];
  cta: string;
  offerEnds: string;
}
