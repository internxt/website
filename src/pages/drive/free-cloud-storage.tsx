/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroSection from '@/components/drive/HeroSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import { downloadDriveLinks } from '@/lib/get-download-url';
import { DriveText } from '@/assets/types/drive';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import DownloadComponent from '@/components/shared/DownloadComponent';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import OfficialCloudProviderSection from '@/components/home/OfficilaCloudProviderSection';
import AdvancedToolsSection from '@/components/drive/AdvancedToolsSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import DriveSection from '@/components/drive/Drivesection';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsWithImagesSection';
import CoreFeaturesSection from '@/components/drive/CoreFeaturesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import Script from 'next/script';
import { sm_breadcrumb_list, sm_faq } from '@/components/utils/schema-markup-generator';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';

interface DriveProps {
  darkMode?: boolean;
  textContent: DriveText;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
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
  darkMode = false,
  metatagsDescriptions,
  download,
  textContent,
  navbarLang,
  footerLang,
  lang,
}: DriveProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'free-cloud-storage');

  const {
        products,
        loadingCards,
        currencyValue,
        coupon: individualCoupon,
        lifetimeCoupon,
        lifetimeCoupons,
    } = usePricing({ couponCode: PromoCodeName.seolp, couponCodeForLifetime: PromoCodeName.seolp });

    const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
    const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

    const onCheckoutButtonClicked = async (
        priceId: string,
        isCheckoutForLifetime: boolean,
        interval: string,
        storage: string,
    ) => {
        const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

        const finalPrice = await stripeService.calculateFinalPrice(
            priceId,
            interval,
            currencyValue,
            'individuals',
            couponCodeForCheckout,
        );

        stripeService.redirectToCheckout(
            priceId,
            finalPrice,
            currencyValue,
            'individual',
            isCheckoutForLifetime,
            interval,
            storage,
            couponCodeForCheckout?.name,
        );
    };

  return (
    <>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb_list([{ name: 'Encrypted Cloud Storage', url: '/' }, { name: 'Secure cloud storage', url: '/drive' }, { name: 'Free secure cloud storage', url: '/drive/free-cloud-storage' }])}
      </Script>
      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_faq(textContent.FaqSection.faq)}
      </Script>
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="FreeCloudStorage" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={textContent.HeroSection} download={download} ChecksTag="h2" />

      <DriveSection textContent={textContent.DriveSection} />

      <HorizontalScrollableSection
        textContent={textContent.EncryptedCloudStorageSection}
          bgGradient="bg-[linear-gradient(360deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(360deg,#0D0D0D_0%,#1C1C1C_100%)]"
        needsH2
        needsH3
      />

      <FileParallaxSection />

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
                popularPlanBySize="5TB"
          sectionDetails="bg-neutral-17 dark:bg-gray-105 lg:py-20"
                hideFreeCard
                darkMode={darkMode}
        />

      <CoreFeaturesSection textContent={textContent.CoreFeatures} darkMode={darkMode} />

      <HorizontalScrollableSection textContent={textContent.AllInOnePrivacySection} needsH2 />

      <ThreeCardsSection
        textContent={textContent.MadeInEuropeSection}
          bgColor="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]"
        darkMode={darkMode}
      />

      <OfficialCloudProviderSection textContent={textContent.OfficalCloudProvider} lang={lang} partner="levante" />

        <FloatingCtaSectionv2
          textContent={textContent.CtaSection}
          url={'#billingButtons'}
          customText={
            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <h2
                className="text-2xl font-semibold leading-tight text-gray-95 dark:text-white-95 lg:text-4xl"
              >
                {textContent.CtaSection.title}
              </h2>
              <p
                className="text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:w-[633px] lg:text-center lg:text-xl"
              >
                {textContent.CtaSection.description}
              </p>
            </div>
          }
          bgGradientContainerColor="bg-[linear-gradient(115.95deg,rgba(244,248,255,0.75)_10.92%,rgba(255,255,255,0.08)_96.4%)]"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:py-20"
        />

      <DownloadComponent textContent={textContent.DownloadSection} lang={lang} download={download} darkMode={darkMode} />

      <AdvancedToolsSection textContent={textContent.AdvancedToolsSection} />

      <ReviewsSection
        textContent={textContent.ReviewSection}
          bgColor="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F8FF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#0D0D0D_100%)]"
          darkMode={darkMode}
      />

      <FAQSection textContent={textContent.FaqSection} needsH3={false} darkMode={darkMode} />

        <Footer
          textContent={footerLang}
          lang={lang}
          breadcrumbItems={[
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'Secure cloud storage', url: '/drive' },
            { name: 'Free secure cloud storage', url: '/drive/free-cloud-storage' },
          ]}
          darkMode={darkMode}
        />
    </Layout>
    </>
  );
};

export async function getStaticProps(ctx) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/drive-free-cloud-storage.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      download,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default Drive;
