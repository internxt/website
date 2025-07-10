import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ClockCounterClockwise,
  Eye,
  Fingerprint,
  Key,
  LockKey,
  MonitorArrowUp,
  NumberCircleZero,
  ShieldCheck,
} from '@phosphor-icons/react';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout/Layout';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { HeroSectionForPartner } from '@/components/affiliates/affiliates-partners-template/HeroSection';
import { PromoCodeName } from '@/lib/types';
import FeaturesSlider from '@/components/shared/FeaturesSlider';

const SecondFeaturesSection = dynamic(
  () => import('@/components/home/SecondFeaturesSection').then((mod) => mod.default),
  { ssr: false },
);
const DevicesSection = dynamic(
  () => import('@/components/affiliates/affiliates-partners-template/DevicesSection').then((mod) => mod.DevicesSection),
  { ssr: false },
);
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then((mod) => mod.default), {
  ssr: false,
});
const MinimalFooter = dynamic(
  () => import('@/components/layout/footers/MinimalFooter').then((mod) => mod.MinimalFooter),
  {
    ssr: false,
  },
);
const CtaSection = dynamic(
  () => import('@/components/affiliates/affiliates-partners-template/CtaSection').then((mod) => mod.CtaSection),
  { ssr: false },
);

export type CardsType = 'all' | 'one';

interface CardSystemPath {
  type: CardsType;
  paths: string[];
}

const ALL_LIFETIME_PLANS_PATHNAMES = ['pcmag'];

const ALLOWED_PATHS = [...ALL_LIFETIME_PLANS_PATHNAMES];

const CARD_SYSTEM_FOR_PATHS: CardSystemPath[] = [{ type: 'all', paths: ALL_LIFETIME_PLANS_PATHNAMES }];

const getTypeFromPathname = (pathname: string): CardsType | undefined => {
  for (const cardSystem of CARD_SYSTEM_FOR_PATHS) {
    if (cardSystem.paths.includes(pathname)) {
      return cardSystem.type;
    }
  }
  return undefined;
};

const AffiliateTemplates = ({ langJson, homeJson, lang, metatagsDescriptions, footerLang, pathname }) => {
  const metatags = metatagsDescriptions.filter((item) => item.id === pathname);
  const [cardsType, setCardsType] = useState<CardsType>('all');
  const { push } = useRouter();

  const selectedPathName = ALLOWED_PATHS.find((allowedPathname) => allowedPathname === pathname);

  const couponCode = {
    pcmag: PromoCodeName.Planet85,
  };

  useEffect(() => {
    if (!selectedPathName) {
      push('/specialoffer');
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

      <HeroSectionForPartner
        textContent={langJson.HeroSection}
        cardsType={cardsType}
        pathname={pathname}
        couponName={couponCode[pathname]}
      />

      {cardsType === 'all' ? (
        <>
          <SecondFeaturesSection
            textContent={langJson.SecondFeaturesSection}
            lang={lang}
            cards={cardInfo}
            mobileBg="bg-gray-1"
            bgColor="bg-white"
          />

          <DevicesSection textContent={langJson.DevicesSection} />

          <TestimonialsSection textContent={homeJson.TestimonialsSection} />
        </>
      ) : undefined}

      <CtaSection textContent={langJson.CtaSection[cardsType]} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'en';
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
