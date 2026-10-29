/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import { PromoCodeName } from '@/lib/types';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { HorizontalPriceCard } from '@/components/shared/pricing/PriceCard/HorizontalPriceCard';
import usePricing from '@/hooks/usePricing';
import { Interval } from '@/services/stripe.service';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/partnersTemplate/HeroSection';
import FeaturesSection from '@/components/drive/FeaturesSection';
import { SpecialOfferText } from '@/assets/types/specialOfferTemplate';
import HorizontalScrollableSection from '@/components/home/HorizontalScrollableSection';
import TrustedSection from '@/components/home/TrustedSection';

export interface UltimateAnnualTemplateProps {
  darkMode?: boolean;
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
  couponCodeForLifetime?: PromoCodeName;
}

export const UltimateAnnualTemplate = ({
    darkMode = false,
    metatagsDescriptions,
    langJson,
    lang, 
    footerLang,
    navbarLang,
    couponCodeForLifetime = PromoCodeName.WEWE,
}: UltimateAnnualTemplateProps): JSX.Element => {
  const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
  const locale = lang as string;

  const { products, currency, currencyValue, lifetimeCoupon } = usePricing({
    couponCodeForLifetime: couponCodeForLifetime,
  });

  const ultimatePlan = products?.individuals?.[Interval.Year]?.find((plan: any) => plan.storage === '5TB');
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);

  return (
      <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''} segmentName="Home" lang={lang}>
        <Navbar lang={locale} textContent={navbarLang} cta={['payment']} isLinksHidden hideCTA hideLogoLink />

        <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} showSubtitle={false} darkMode={darkMode} />

        {ultimatePlan && (
          <div className={`flex w-full justify-center px-6 py-12 lg:px-0 lg:py-24 ${darkMode ? 'bg-[#1C1C1C]' : ''}`} id="priceCard">
            <HorizontalPriceCard
              decimalDiscountValue={decimalDiscountForLifetime || undefined}
              storage={ultimatePlan.storage}
              popular={false}
              currency={currency}
              priceBefore={ultimatePlan.price.toString().split('.')[0]}
              price={Number(ultimatePlan.price)}
              planId={ultimatePlan.priceId}
              currencyValue={currencyValue}
              coupon={lifetimeCoupon}
              darkMode={darkMode}
            />
          </div>
        )}

        <FeaturesSection textContent={langJson.FeaturesSection} lang={lang} download={false} showLastSection={false} darkMode={darkMode} />

        <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} darkMode={darkMode} />

        <HorizontalScrollableSection textContent={langJson.NextGenSection} darkMode={darkMode} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} darkMode={darkMode} />
      </Layout>
  );
};
