/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
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

interface AnnualProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: SpecialOfferText;
  footerLang: FooterText;
}

const AnnualPage = ({ metatagsDescriptions, langJson, lang, footerLang, navbarLang }: AnnualProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');
  const locale = lang as string;

  const { products, currency, currencyValue, lifetimeCoupon } = usePricing({
    couponCodeForLifetime: PromoCodeName.WEWE,
  });

  const ultimatePlan = products?.individuals?.[Interval.Year]?.find((plan: any) => plan.storage === '5TB');
  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
  const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);

  return (
    <>
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
        <Navbar lang={locale} textContent={navbarLang} cta={['payment']} isLinksHidden hideCTA hideLogoLink />

        <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} showSubtitle={false} />

        {ultimatePlan && (
          <div className="flex w-full justify-center px-6 py-12 lg:px-0 lg:py-24" id="priceCard">
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
            />
          </div>
        )}

        <FeaturesSection textContent={langJson.FeaturesSection} lang={lang} download={false} showLastSection={false} />

        <TrustedSection textContent={langJson.TrustedBySection} bottomBar={false} />

        <HorizontalScrollableSection textContent={langJson.NextGenSection} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default AnnualPage;
