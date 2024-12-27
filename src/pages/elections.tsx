import { useState } from 'react';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PromoCodeName } from '@/lib/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { GetServerSidePropsContext } from 'next';
import Navbar from '@/components/layout/navbars/Navbar';
import { ElectionsText } from '@/assets/types/elections';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import CtaSection from '@/components/lifetime/CtaSection';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import { ClockClockwise, CloudCheck, Devices, ShieldCheck } from '@phosphor-icons/react';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import PaymentSection from '@/components/lifetime/PaymentSection';
import HeroSection from '@/components/lifetime/HeroSection';
import router from 'next/router';
import { getImage } from '@/lib/getImage';
import { SwitchButtonOptions } from '@/components/elections/PlanSelector';
import AhrefsAnalytics from '@/components/shared/components/AhrefAnalytics';

interface ElectionsProps {
  metatagsDescriptions: MetatagsDescription[];
  lang: GetServerSidePropsContext['locale'];
  navbarLang: NavigationBarText;
  langJson: ElectionsText;
  footerLang: FooterText;
  activeSwitchPlan: SwitchButtonOptions;
  onPlanTypeChange: (activeSwitchPlan: SwitchButtonOptions) => void;
}

const COUPON_CODES = {
  kamala: PromoCodeName.KamalaHarris,
  trump: PromoCodeName.DonaldTrump,
};

const Elections = ({
  metatagsDescriptions,
  lang,
  navbarLang,
  langJson,
  footerLang,
  activeSwitchPlan = 'Kamala',
  onPlanTypeChange,
}: ElectionsProps): JSX.Element => {
  const [currentPlan, setCurrentPlan] = useState<SwitchButtonOptions>(activeSwitchPlan);
  const [couponToUse, setCouponToUse] = useState(COUPON_CODES.kamala);
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'elections-campaign');
  const locale = lang as string;

  const handlePlanTypeChange = (activeSwitchPlan: SwitchButtonOptions): void => {
    setCouponToUse(COUPON_CODES[activeSwitchPlan.toLocaleLowerCase()]);
    setCurrentPlan(activeSwitchPlan);
    if (onPlanTypeChange) {
      onPlanTypeChange(activeSwitchPlan);
    }
  };

  const percent = '80%';
  const discount = 0.2;
  const currencySpecified = 'US';

  const groupCards = [
    {
      icon: Devices,
      title: langJson.elections.FeatureSection.feature1.title,
      description: langJson.elections.FeatureSection.feature1.description,
    },
    {
      icon: ClockClockwise,
      title: langJson.elections.FeatureSection.feature2.title,
      description: langJson.elections.FeatureSection.feature2.description,
    },
    {
      icon: CloudCheck,
      title: langJson.elections.FeatureSection.feature3.title,
      description: langJson.elections.FeatureSection.feature3.description,
    },
    {
      icon: ShieldCheck,
      title: langJson.elections.FeatureSection.feature4.title,
      description: langJson.elections.FeatureSection.feature4.description,
    },
  ];

  return (
    <>
      <AhrefsAnalytics lang={locale} />
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="Lifetime"
        lang={lang}
        specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
      >
        <Navbar
          textContent={navbarLang}
          lang={locale}
          cta={['default']}
          fixed
          mode="payment"
          isLinksHidden
          hideNavbar
        />

        <HeroSection
          textContent={langJson.elections.HeroSection}
          percent={percent}
          bgImage={getImage('/images/lifetime/celebration/usa/usa-bg.webp')}
          isCelebrationPage
          onRedirectButtonClicked={() => router.push('#payment')}
        />

        <PaymentSection
          textContent={langJson.elections.PaymentSection}
          couponCode={couponToUse}
          discount={discount}
          lang={locale}
          percent={percent}
          showPriceBefore
          lifetimeMode="celebration"
          isElectionsPage
          activeSwitchPlan={currentPlan}
          onPlanTypeChange={handlePlanTypeChange}
          currencySpecified={currencySpecified}
        />
        <GetLifetimeSection textContent={langJson.elections.GetLifetimeSection} isCelebrationPage />

        <TextAndCardsGroupColumnSection
          TextComponent={
            <div className="flex max-w-[930px] flex-col space-y-6 text-center">
              <p className="text-5xl font-semibold text-gray-100">{langJson.elections.FeatureSection.title}</p>
              <p className="max-w-[796px] text-xl text-gray-80">{langJson.elections.FeatureSection.description}</p>
            </div>
          }
          cards={groupCards}
          background="bg-white"
          backgroundColorForCard="bg-gray-1"
        />

        <TestimonialsSection textContent={langJson.elections.TestimonialsSection} bgColor="bg-gray-1" />

        <CtaSection textContent={langJson.elections.CtaSection} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/elections.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Elections;
