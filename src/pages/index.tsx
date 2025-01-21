import { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { HomeText } from '@/assets/types/home';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import RevealY from '@/components/components/RevealY';
import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import HeroSection from '@/components/home/HeroSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/components/services/stripe.service';
import Button from '@/components/shared/Button';
import { CardGroup } from '@/components/shared/CardGroup';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import CtaSection from '@/components/shared/CtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { getImage } from '@/lib/getImage';
import { PromoCodeName } from '@/lib/types';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import GA_TAGS from '@/components/services/ga.tags';

interface HomeProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: HomeText;
  footerLang: FooterText;
}

const HomePage = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomeProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
  const router = useRouter();
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    businessCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.SoftSales,
    couponCodeForBusiness: PromoCodeName.PrivacyWeek,
  });
  const [isBusiness, setIsBusiness] = useState<boolean>();
  const locale = lang as string;
  const navbarCta = 'chooseStorage';
  const marqueeBgColor = 'bg-white';
  const cardsForFeatureSection = [
    {
      icon: ShieldCheck,
      title: textContent.FeatureSectionV2.cards![0].title,
      description: textContent.FeatureSectionV2.cards![0].description,
    },
    {
      icon: LockKey,
      title: textContent.FeatureSectionV2.cards![1].title,
      description: textContent.FeatureSectionV2.cards![1].description,
    },
    {
      icon: Eye,
      title: textContent.FeatureSectionV2.cards![2].title,
      description: textContent.FeatureSectionV2.cards![2].description,
    },
    {
      icon: Fingerprint,
      title: textContent.FeatureSectionV2.cards![3].title,
      description: textContent.FeatureSectionV2.cards![3].description,
    },
  ];

  const onChooseStorageButtonClicked = () => {
    router.push('/pricing');
  };

  const onBusinessPlansSelected = (isBusiness: boolean) => {
    setIsBusiness(isBusiness);
  };

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    if (window.gtag) {
      window.gtag('event', 'HomePage-Conversion', {
        send_to: GA_TAGS.SELECT_PLAN_TAG,
        value:1.0,
        currency: currencyValue.toUpperCase (),
      });
    }

    const couponCodeForCheckout = isBusiness
      ? PromoCodeName.SoftSales
      : isCheckoutForLifetime
      ? PromoCodeName.PrivacyWeek
      : PromoCodeName.SoftSales;

    const planType = isBusiness ? 'business' : 'individual';

    stripeService.redirectToCheckout(priceId, currencyValue, planType, isCheckoutForLifetime, couponCodeForCheckout);
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} />

      <HeroSection textContent={textContent.HeroSection} lang={locale} />

      <ChooseStorageSizeSection
        textContent={textContent.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={textContent.TestimonialsSection} />

      <PricingSectionWrapper
        textContent={textContent.tableSection}
        decimalDiscount={{
          individuals: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
          lifetime: businessCoupon?.percentOff && 100 - businessCoupon.percentOff,
          business: individualCoupon?.percentOff && 100 - individualCoupon.percentOff,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={locale}
        products={products}
        loadingCards={loadingCards}
        onBusinessPlansSelected={onBusinessPlansSelected}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        CustomDescription={
          <span className="text-regular max-w-[800px] text-xl text-gray-80">
            {textContent.tableSection.planDescription}
          </span>
        }
      />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-full flex-col items-center gap-9">
            <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
              <h2 className="text-5xl font-semibold text-gray-100">{textContent.FeatureSectionV2.title}</h2>
              <p className="text-xl text-gray-80">{textContent.FeatureSectionV2.description}</p>
            </div>
            <div className="flex flex-col items-center gap-12">
              <Button
                text={textContent.FeatureSectionV2.cta}
                onClick={() => {
                  router.push('/pricing');
                }}
              />
              <RevealY className="content flex h-full w-full flex-col px-5 pt-6">
                <Image
                  src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
                  alt="Internxt secure cloud storage"
                  draggable={false}
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
              </RevealY>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center">
            <CardGroup cards={cardsForFeatureSection} backgroundColorCard="bg-white" />
          </div>
        }
        backgroundColor="bg-gray-1"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <CtaSection textContent={textContent.CtaSection} url={'/pricing'} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default HomePage;
