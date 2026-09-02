/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from '@/components/drive/HeroSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import Layout from '@/components/layout/Layout';
import { downloadDriveLinks } from '@/lib/get-download-url';
import { DriveText } from '@/assets/types/drive';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import DownloadComponent from '@/components/shared/DownloadComponent';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import OfficialCloudProviderSection from '@/components/home/OfficilaCloudProviderSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import DriveSection from '@/components/drive/Drivesection';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsWithImagesSection';
import CoreFeaturesSection from '@/components/drive/CoreFeaturesSection';
import RelationalLinks from '@/components/shared/sections/RelationalLinks';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import useCheckout from '@/hooks/useCheckout';
import { PromoCodeName } from '@/lib/types';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

interface DriveProps {
  textContent: DriveText;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  relationalLinksText: any;
  download: {
    Android: string;
    iPad: string;
    iPhone: string;
    Windows: any;
    MacOS: any;
    UNIX: any;
    Linux: any;
    all: string;
  };
}

const Drive = ({
  metatagsDescriptions,
  download,
  textContent,
  navbarLang,
  footerLang,
  lang,
  relationalLinksText,
}: DriveProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.GADS85,
    couponCodeForLifetime: PromoCodeName.GADS85,
  });

  const onCheckoutButtonClicked = useCheckout({ individualCoupon, lifetimeCoupon, currencyValue });

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const decimalDiscount = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;

  return (
    <>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="PPC Drive"
        lang={lang}
        robots="noindex, follow"
      >
        <MinimalNavbar textContent={navbarLang} lang={lang} />
        <HeroSection textContent={textContent.HeroSection} download={download} />
        <DriveSection textContent={textContent.DriveSection} />
        <PricingSectionWrapper
          textContent={textContent.tableSection}
          decimalDiscount={{
            individuals: decimalDiscount,
            lifetime: decimalDiscountForLifetime,
          }}
          lifetimeCoupons={lifetimeCoupons}
          lang={lang}
          products={products}
          loadingCards={loadingCards}
          onCheckoutButtonClicked={onCheckoutButtonClicked}
          hideBusinessCards
          hideBusinessSelector
          popularPlanBySize="3TB"
          sectionDetails="bg-white lg:py-20 xl:py-32"
          hideFreeCard
        />
        <HorizontalScrollableSection
          textContent={textContent.EncryptedCloudStorageSection}
          bgGradient="linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)"
          needsH2
          needsH3
        />
        <FileParallaxSection />
        <CoreFeaturesSection textContent={textContent.CoreFeatures} />
        <HorizontalScrollableSection textContent={textContent.AllInOnePrivacySection} needsH2 />
        <ThreeCardsSection
          textContent={textContent.MadeInEuropeSection}
          bgColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        />
        <OfficialCloudProviderSection textContent={textContent.OfficalCloudProvider} lang={lang} partner="levante" />
        <FloatingCtaSectionv2
          textContent={textContent.CtaSection}
          url={'#billingButtons'}
          customText={
            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <h2 className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
                {textContent.CtaSection.title}
              </h2>
              <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
                {textContent.CtaSection.description}
              </p>
            </div>
          }
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:py-20"
        />
        <DownloadComponent textContent={textContent.DownloadSection} lang={lang} download={download} />

        <FAQSection
          textContent={textContent.FaqSection}
          needsH3
          bgGradient="linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)"
        />
        <RelationalLinks textContent={relationalLinksText} sectionPadding="py-20" openLinksInNewTab />
        <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/drive.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  return {
    props: {
      lang,
      download,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
      relationalLinksText,
    },
  };
}

export default Drive;
