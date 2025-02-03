import { BusinessText } from '@/assets/types/business';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { EncryptedCloudSolution } from '@/components/business/EncryptedCloudSolution';
import { HeroSection } from '@/components/shared/components/HeroSection';
import { InternxtProtectsYourBusiness } from '@/components/business/InternxtProtectsYourBusiness';
import { SecureYourCompany } from '@/components/business/SecureYourCompany';
import { TestimonialsSectionForBusiness } from '@/components/business/TestimonialsSectionForBusiness';
import { WhatCanWeDo } from '@/components/business/WhatCanWeDo';
import { WhyChooseInternxtForBusiness } from '@/components/business/WhyChooseInternxt';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/components/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { GetServerSidePropsContext } from 'next';
import Header from '@/components/shared/Header';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import { PromoCodeName } from '@/lib/types';
import { MarqueeComponentV2 } from '@/components/specialoffer/MarqueeComponentV2';

interface BusinessProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: BusinessText;
  footerText: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

export const BusinessPage = ({
  footerText,
  metatagsDescriptions,
  navbarText,
  textContent,
  lang,
}: BusinessProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((metatag) => metatag.id === 'business')[0];
  const { products, loadingCards, currencyValue, businessCoupon } = usePricing({
    couponCodeForBusiness: PromoCodeName.SuperBowlCampaign,
  });

  const locale = lang as string;

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(planId, currencyValue, 'business', isCheckoutForLifetime, businessCoupon?.name);
  };
  const onButtonClick = () => (window.location.href = '#priceTable');
  const imagePath = lang === 'es' ? 'almacenamiento_la_nube_para_empresas_header' : 'Internxt_b2b_business_solution';

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={locale} textContent={navbarText} fixed />

      <HeroSection
        TextComponent={
          <div className="flex w-full flex-col items-center justify-center gap-8 text-center text-white lg:max-w-[535px] lg:items-start lg:justify-start lg:text-start">
            <Header>{textContent.HeroSection.title}</Header>
            <div className="flex flex-col gap-4">
              <p className="text-xl">{textContent.HeroSection.description[0]}</p>
              <p className="text-xl font-semibold">{textContent.HeroSection.description[1]}</p>
            </div>
            <Button text={textContent.HeroSection.cta} onClick={onButtonClick} />
          </div>
        }
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
        }}
        imageProperties={{
          src: getImage(`/images/business/${imagePath}.webp`),
          alt: 'Internxt B2B Business Solution',
          width: 671,
          height: 563,
        }}
      />

      <SecureYourCompany textContent={textContent.SecureYourCompany} />

      <InternxtProtectsYourBusiness textContent={textContent.InternxtProtectsYourBusiness} />

      <WhatCanWeDo textContent={textContent.WhatCanWeDo} />

      <PricingSectionWrapper
        loadingCards={loadingCards}
        lang={locale}
        products={products}
        decimalDiscount={{
          business: businessCoupon?.percentOff && 100 - businessCoupon?.percentOff,
        }}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent.PriceTable}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
      />

      <WhyChooseInternxtForBusiness textContent={textContent.WhyChooseInternxt} />

      <MarqueeComponentV2 bgColor="bg-gray-1" />

      <EncryptedCloudSolution textContent={textContent.EncryptedCloudSolution} />

      <TestimonialsSectionForBusiness textContent={textContent.TestimonialsSection} />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerText} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/business.json`);
  const navbarText = require(`@/assets/lang/${lang}/navbar.json`);
  const footerText = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarText,
      footerText,
    },
  };
}

export default BusinessPage;
