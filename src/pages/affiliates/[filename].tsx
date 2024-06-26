import Layout from '@/components/layout/Layout';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { HeroSectionForPartner } from '@/components/affiliates/affiliates-partners-template/HeroSection';
import SecondFeaturesSection from '@/components/home/SecondFeaturesSection';
import { ClockCounterClockwise, Eye, Key, MonitorArrowUp, NumberCircleZero, ShieldCheck } from '@phosphor-icons/react';
import { DevicesSection } from '@/components/affiliates/affiliates-partners-template/DevicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { CtaSection } from '@/components/affiliates/affiliates-partners-template/CtaSection';

export type CardsType = 'all' | 'one';

interface CardSystemPath {
  type: CardsType;
  paths: string[];
}

const ALL_LIFETIME_PLANS_PATHNAMES = ['pcmag'];

const ONE_LIFETIME_PLAN_LIFETIME = ['oneplan'];

const ALLOWED_PATHS = [...ALL_LIFETIME_PLANS_PATHNAMES, ...ONE_LIFETIME_PLAN_LIFETIME];

const CARD_SYSTEM_FOR_PATHS: CardSystemPath[] = [
  { type: 'all', paths: ALL_LIFETIME_PLANS_PATHNAMES },
  { type: 'one', paths: ONE_LIFETIME_PLAN_LIFETIME },
];

const getTypeFromPathname = (pathname: string): CardsType | undefined => {
  for (const cardSystem of CARD_SYSTEM_FOR_PATHS) {
    if (cardSystem.paths.includes(pathname)) {
      return cardSystem.type;
    }
  }
  return undefined;
};

const AffiliateTemplates = ({ langJson, homeJson, lang, metatagsDescriptions, footerLang, pathname }) => {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'affiliates');
  const [cardsType, setCardsType] = useState<CardsType>('all');
  const { push } = useRouter();

  const selectedPathName = ALLOWED_PATHS.find((allowedPathname) => allowedPathname === `${pathname}`);

  useEffect(() => {
    if (!selectedPathName) {
      push('/affiliates');
    }

    setCardsType(getTypeFromPathname(pathname) ?? 'all');
  }, [selectedPathName]);

  const cardInfo = [
    {
      icon: ShieldCheck,
      title: langJson.SecondFeaturesSection.info[0].title,
      description: langJson.SecondFeaturesSection.info[0].description,
    },
    {
      icon: MonitorArrowUp,
      title: langJson.SecondFeaturesSection.info[1].title,
      description: langJson.SecondFeaturesSection.info[1].description,
    },
    {
      icon: Key,
      title: langJson.SecondFeaturesSection.info[2].title,
      description: langJson.SecondFeaturesSection.info[2].description,
    },
    {
      icon: Eye,
      title: langJson.SecondFeaturesSection.info[3].title,
      description: langJson.SecondFeaturesSection.info[3].description,
    },
    {
      icon: ClockCounterClockwise,
      title: langJson.SecondFeaturesSection.info[4].title,
      description: langJson.SecondFeaturesSection.info[4].description,
    },
    {
      icon: NumberCircleZero,
      title: langJson.SecondFeaturesSection.info[5].title,
      description: langJson.SecondFeaturesSection.info[5].description,
    },
  ];

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Affiliates" lang={lang}>
      <MinimalNavbar lang={lang} />

      <HeroSectionForPartner textContent={langJson.HeroSection} cardsType={cardsType} pathname={pathname} />

      <SecondFeaturesSection
        textContent={langJson.SecondFeaturesSection}
        lang={lang}
        cards={cardInfo}
        bgColor="bg-white"
      />

      <DevicesSection textContent={langJson.DevicesSection} />

      <TestimonialsSection textContent={homeJson.TestimonialsSection} />

      <CtaSection textContent={langJson.CtaSection} />

      {/* <FeatureSection textContent={langJson.FeatureSection} />

      <WhatIsInternxtSection textContent={langJson.WhatIsInternxtSection} />

      <WhyJoinSection textContent={langJson.WhyJoinSection} />

      <FileParallaxSection />

      <WhatWeDoSection textContent={langJson.WhatWeDoSection} />

      <FaqSection textContent={langJson.FaqSection} />

      <CtaSection
        textContent={langJson.CtaSection}
        url={
          'https://app.impact.com/campaign-mediapartner-signup/Internxt.brand?type=dm&io=e2AXxeEh7q3EO8TzTRQ1yfzRimhVUUQ4VIYp7wvigF46G5y9GkCkRC94J2GfuR%2Fa'
        }
      /> */}

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const pathname = ctx.params.filename;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/affiliates-partners-template.json`);
  const homeJson = require(`@/assets/lang/en/home.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      homeJson,
      footerLang,
      pathname,
    },
  };
}

export default AffiliateTemplates;
