import { BusinessText } from '@/assets/types/business';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { HeroSection } from '@/components/shared/components/HeroSection';
import { InternxtProtectsYourBusiness } from '@/components/business/InternxtProtectsYourBusiness';
import { SecureYourCompany } from '@/components/business/SecureYourCompany';
import { TestimonialsSectionForBusiness } from '@/components/business/TestimonialsSectionForBusiness';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { GetServerSidePropsContext } from 'next';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import { PromoCodeName } from '@/lib/types';
import { ContactSalesForm } from '@/components/shared/ContactSalesForm';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';
import BusinessCtaSection from '@/components/business/BusinessCtaSection';
import Image from 'next/image';
import VerticalBusinessSection from '@/components/business/VerticalBusinessCtaSection';
import HorizontalScrollableSectionWithImages from '@/components/business/HorizontalScrollableSectionWithImages';

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
    couponCodeForBusiness: PromoCodeName.SummerCampaign,
  });

  const locale = lang as string;

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(planId, currencyValue, 'business', isCheckoutForLifetime, businessCoupon?.name);
  };
  const onButtonClick = () => (window.location.href = '#priceTable');
  const scrollToTop = () => {
    document.querySelector('#contactSales')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const imagePath = lang === 'es' ? 'almacenamiento_la_nube_para_empresas_header' : 'Internxt_b2b_business_solution';

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={locale} textContent={navbarText} fixed />

      <HeroSection
        TextComponent={
          <div className="flex h-min w-[350px] flex-col gap-6 py-8 lg:w-[656px] lg:gap-8">
            <p className="text-center text-30 font-semibold leading-tight text-white lg:text-start lg:text-3xl">
              {textContent.HeroSection.title}
            </p>
            <p className="text-center text-base font-normal leading-tight text-white lg:text-start lg:text-xl">
              {textContent.HeroSection.description[0]}
            </p>
            <p className="text-center text-base font-semibold leading-tight text-white lg:text-start lg:text-xl">
              {textContent.HeroSection.description[1]}
            </p>
            <div className="flex flex-row items-center justify-center gap-8 lg:justify-start">
              <Button text={textContent.HeroSection.cta} onClick={onButtonClick} hoverColor="bg-primary-dark" />
              <Button
                className="border border-primary bg-transparent "
                textColor="text-primary"
                hoverColor="hover:bg-transparent/20"
                text={textContent.HeroSection.cta2}
                onClick={scrollToTop}
              />
            </div>
          </div>
        }
        style={{
          background: 'linear-gradient(360deg, #001D6C 0%, #121923 100%)',
        }}
        imageProperties={{
          src: getImage(`/images/business/${imagePath}.webp`),
          alt: 'Internxt B2B Business Solution',
          width: 603,
          height: 520,
        }}
      />

      <SecureYourCompany textContent={textContent.SecureYourCompany} />

      <InternxtProtectsYourBusiness textContent={textContent.InternxtProtectsYourBusiness} />

      <HorizontalScrollableSectionWithImages
        textContent={textContent.WhatCanWeDo}
        bgGardient="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        containerDecoration="border-y-[1px] border-neutral-25 pb-10 lg:pb-10"
      />

      <PricingSectionWrapper
        loadingCards={loadingCards}
        decimalDiscount={{
          business: businessCoupon?.percentOff && 100 - businessCoupon.percentOff,
        }}
        lang={locale}
        products={products}
        hideFreeCard
        startFromPlan="Business"
        hidePlanSelectorComponent={true}
        textContent={textContent.PriceTable}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        showPromo={true}
        backgroundColorComponent="linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)"
      />

      <HorizontalScrollableSection
        textContent={textContent.WhyChooseInternxt}
        bgGardient="linear-gradient(360deg, #F9F9FC 0%, #FFFFFF 100%)"
        cardDecoration
        bgColorCard="bg-white"
      />

      <BusinessCtaSection
        textContent={textContent.CtaSection}
        bgColor="bg-gray-1"
        customText={
          <>
            <div className="flex flex-row justify-between overflow-hidden">
              <Image
                src={getImage('/images/business/cta/Internxt-secure-cloud-storag_tablet.webp')}
                alt="Tablet Image"
                width={301}
                height={301}
                className="hidden lg:flex"
              />
              <div className="flex w-[300px]  flex-col items-center gap-8 text-center lg:w-[458px] lg:gap-4 lg:px-0">
                <p className="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl">
                  {textContent.CtaSection.title}
                </p>
                <p className="w-[250px] text-base font-normal leading-tight text-gray-55 lg:w-[458px]  lg:text-center lg:text-xl">
                  {textContent.CtaSection.description}
                </p>
                <div className="flex w-[300px] flex-row justify-center gap-4 lg:w-[458px] lg:gap-8">
                  <Button text={textContent.CtaSection.cta} onClick={onButtonClick} className="w-1/2" />
                  <Button
                    className="w-1/2 border border-primary bg-transparent"
                    textColor="text-primary"
                    hoverColor="hover:bg-transparent/20"
                    text={textContent.CtaSection.contactUs}
                    onClick={scrollToTop}
                  />
                </div>
              </div>
              <Image
                src={getImage('/images/business/cta/Internxt-secure-cloud-storage_desktop.webp')}
                alt="Tablet Image"
                width={301}
                height={301}
                className="hidden lg:flex"
              />
            </div>
          </>
        }
        containerDetails="bg-blue-20 h-[350px]"
      />

      <TestimonialsSectionForBusiness textContent={textContent.TestimonialsSection} />

      <ContactSalesForm textContent={textContent.ContactSales} isBusiness />

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
