import Script from 'next/script';
import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import { sm_faq, sm_breadcrumb_list } from '@/components/utils/schema-markup-generator';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetStaticPropsContext } from 'next';
import { gdprCloudStorageText } from '@/assets/types/gdpr-cloud-storage';
import { BannersText } from '@/assets/types/components/banners';
import FeaturesSection from '@/components/gdpr-cloud-storage/FeaturesSection';
import WhatWeDo from '@/components/shared/WhatWeDo';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import RelationalLinks from '@/components/shared/sections/RelationalLinks';
import FeatureSection, { FeatureCard } from '@/components/shared/FeatureSection';
import ImportanceSection from '@/components/gdpr-cloud-storage/ImportanceSection';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import Link from 'next/link';
import { ShieldCheck } from '@phosphor-icons/react';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';

interface PrivacyProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: gdprCloudStorageText;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  lang: string;
  bannerJson: BannersText;
  relationalLinksText: any;
}

const PrivateCloudStorageSolutions = ({
  metatagsDescriptions,
  textContent,
  navbarLang,
  footerLang,
  lang,
  relationalLinksText,
}: PrivacyProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-gdpr-cloud-storage');
  const CTA_URL = `#billingButtons`;
  const product = [
    {
      imageUrl: '/images/privacy-cloud-storage-solutions/internxt_drive.webp',
      animationDirection: 'left',
      redirect: '#billingButtons',
      textContent: textContent.WhatWeDo.square1,
    },
    {
      imageUrl: '/images/privacy-cloud-storage-solutions/internxt_s3.webp',
      animationDirection: 'left',
      redirect: '/cloud-object-storage',
      textContent: textContent.WhatWeDo.square3,
    },
  ];
  const cardsData: FeatureCard[] = [
    {
      title: textContent.FeatureSection.cards.element2.title,
      description: textContent.FeatureSection.cards.element2.description,
      image: '/images/GDPR_cloud_storage/internxt_increased_privacy_for_data.webp',
    },
    {
      title: textContent.FeatureSection.cards.element1.title,
      description: textContent.FeatureSection.cards.element1.description,
      image: '/images/GDPR_cloud_storage/internxt_encryption.webp',
    },
    {
      title: textContent.FeatureSection.cards.element3.title,
      description: textContent.FeatureSection.cards.element3.description,
      image: '/images/GDPR_cloud_storage/internxt_recover_your_files.webp',
    },
    {
      title: textContent.FeatureSection.cards.element4.title,
      description: textContent.FeatureSection.cards.element4.description,
      image: '/images/GDPR_cloud_storage/internxt_data_minimization.webp',
    },
  ];

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
        {sm_faq(textContent.FaqSection.faq)}
      </Script>

      <Script type="application/ld+json" strategy="beforeInteractive">
        {sm_breadcrumb_list([
          { name: 'Encrypted Cloud Storage', url: '/' },
          { name: 'Secure cloud storage', url: '/drive' },
          { name: 'GDPR compliant cloud storage', url: '/gdpr-cloud-storage' },
        ])}
      </Script>
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="Private Cloud Storage Solutions"
        lang={lang}
      >
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <AnimatedHeroSection
          textComponent={
            <>
              <div className="flex w-[350px] flex-col py-10 text-3xl font-medium lg:w-auto lg:py-0 lg:text-5xl">
                <h1 className="font-medium leading-tight text-white">
                  {textContent.HeroSection.TitleAndOnePlan.title.textAfterBlueText}
                  <span className="text-primary">{textContent.HeroSection.TitleAndOnePlan.title.blueText}</span>
                  {textContent.HeroSection.TitleAndOnePlan.title.textBeforeBlueText}
                </h1>
                <p className="pt-4 text-xl leading-tight text-white">
                  <span className=" text-white">{textContent.HeroSection.TitleAndOnePlan.description}</span>
                </p>

                <div className="flex flex-col items-center pt-10 lg:flex-row">
                  <Link
                    href={'#billingButtons'}
                    className={`z-10 flex w-max justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark lg:text-xl`}
                  >
                    {textContent.HeroSection.TitleAndOnePlan.claimDeal}
                  </Link>
                </div>
                <div className="flex flex-row items-center justify-center space-x-3 pt-10  lg:justify-start">
                  <ShieldCheck size={24} color="#32C356" weight="fill" />
                  <p className="whitespace-nowrap  text-lg text-white">
                    {textContent.HeroSection.TitleAndOnePlan.guarantee}
                  </p>
                </div>
              </div>
            </>
          }
          height="h-min"
        />

        <ImportanceSection textContent={textContent.Importance} ctaLink={CTA_URL} />

        <FeaturesSection textContent={textContent.FeaturesSection} />

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
                popularPlanBySize="5TB"
                sectionDetails="bg-white lg:py-20"
                hideFreeCard
            />

        <CtaSection
          textContent={textContent.CtaSection1}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection1.description}</p>}
        />

        <FeatureSection
          title={textContent.FeatureSection.title}
          subtitle={textContent.FeatureSection.titleLine2}
          description={textContent.FeatureSection.description}
          ctaText={textContent.FeatureSection.cta}
          ctaLink={CTA_URL}
          cards={cardsData}
        />

        <CtaSection
          textContent={textContent.CtaSection2}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection2.description}</p>}
        />

        <WhatWeDo textContent={textContent.WhatWeDo} lang={lang} products={product} />

        <CtaSection
          textContent={textContent.CtaSection3}
          url={CTA_URL}
          customDescription={<p className="w-full text-xl font-normal">{textContent.CtaSection3.description}</p>}
        />

        <FAQSection textContent={textContent.FaqSection} needsH3={false} />

        <RelationalLinks textContent={relationalLinksText} />

        <Footer
          textContent={footerLang}
          lang={lang}
          breadcrumbItems={[
            { name: 'Encrypted Cloud Storage', url: '/' },
            { name: 'Secure cloud storage', url: '/drive' },
            { name: 'GDPR compliant cloud storage', url: '/gdpr-cloud-storage' },
          ]}
        />
      </Layout>
    </>
  );
};

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/gdpr-cloud-storage.json`);
  const bannerJson = require(`@/assets/lang/${lang}/banners.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      bannerJson,
      navbarLang,
      footerLang,
      relationalLinksText,
    },
  };
}

export default PrivateCloudStorageSolutions;
