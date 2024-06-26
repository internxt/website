import FaqSection from '@/components/shared/FaqSection';
import FeatureSection from '@/components/affiliates/FeatureSection';
import { HeroSection } from '@/components/affiliates/HeroSection';
import WhatIsInternxtSection from '@/components/affiliates/WhatIsInternxtSection';
import WhatWeDoSection from '@/components/affiliates/WhatWeDoSection';
import WhyJoinSection from '@/components/affiliates/WhyJoinSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type CardsType = 'all' | 'one';

interface CardSystemPath {
  type: CardsType;
  paths: string[];
}

const ALL_LIFETIME_PLANS_PATHNAMES = ['pcmag'];

const ONE_LIFETIME_PLAN_LIFETIME = ['oneplan'];

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

const AffiliateTemplates = ({ langJson, lang, metatagsDescriptions, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'affiliates');
  const [cardsType, setCardsType] = useState<CardsType>();
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    if (!pathname) {
      push('/pricing');
      return;
    }

    setCardsType(getTypeFromPathname(pathname));
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Affiliates" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <FeatureSection textContent={langJson.FeatureSection} />

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
      />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/affiliates.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

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

export default AffiliateTemplates;
