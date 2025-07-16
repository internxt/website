import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ClockCounterClockwise, Eye, Key, MonitorArrowUp, NumberCircleZero, ShieldCheck } from '@phosphor-icons/react';
import Layout from '@/components/layout/Layout';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import FeaturesSlider from '@/components/shared/FeaturesSlider';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import Button from '@/components/shared/Button';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import { HorizontalPricingSection } from '@/components/shared/pricing/HorizontalPricingSection';
import { PromoCodeName } from '@/lib/types';
import FAQSection from '@/components/shared/sections/FaqSection';

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
  { ssr: false },
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
const ONE_LIFETIME_PLAN_LIFETIME = ['oneplan'];

const ALLOWED_PATHS = [...ALL_LIFETIME_PLANS_PATHNAMES, ...ONE_LIFETIME_PLAN_LIFETIME];

const CARD_SYSTEM_FOR_PATHS: CardSystemPath[] = [
  { type: 'all', paths: ALL_LIFETIME_PLANS_PATHNAMES },
  { type: 'one', paths: ONE_LIFETIME_PLAN_LIFETIME },
];

const getTypeFromPathname = (pathname: string): CardsType | undefined => {
  for (const cardSystem of CARD_SYSTEM_FOR_PATHS) {
    if (cardSystem.paths.includes(pathname)) return cardSystem.type;
  }
  return undefined;
};

const AffiliateTemplates = ({ langJson, homeJson, lang, metatagsDescriptions, footerLang, pathname }) => {
  const [cardsType, setCardsType] = useState<CardsType>('all');
  const { push } = useRouter();

  const metatags = metatagsDescriptions.filter((item) => item.id === pathname);
  const selectedPathName = ALLOWED_PATHS.find((path) => path === pathname);

  const cardInfo = langJson.SecondFeaturesSection.info.map((item, index) => ({
    icon: [ShieldCheck, MonitorArrowUp, Key, Eye, ClockCounterClockwise, NumberCircleZero][index],
    title: item.title,
    description: item.description,
  }));

  useEffect(() => {
    if (!selectedPathName) {
      push('/affiliates');
    } else {
      setCardsType(getTypeFromPathname(pathname) ?? 'all');
    }
  }, [pathname, push, selectedPathName]);

  const redirectToPricingTable = () => {
    window.location.href = '#priceTable';
  };

  return (
    <Layout
      title={metatags[0]?.title ?? ''}
      description={metatags[0]?.description ?? ''}
      segmentName="Affiliates"
      lang={lang}
    >
      <MinimalNavbar lang={lang} />

      <AnimatedHeroSection
        textComponent={
          <>
            <h1 className="block text-4xl font-bold text-white lg:hidden xl:text-5xl">
              {langJson.HeroSectionV3.title}{' '}
              <span className="text-2xl font-semibold text-primary xl:text-3xl">{langJson.HeroSectionV3.subtitle}</span>
            </h1>
            <div className="hidden lg:flex lg:flex-col lg:space-y-4">
              <h1 className="text-4xl font-bold text-white xl:text-5xl">{langJson.HeroSectionV3.title}</h1>
              <h2 className="text-2xl font-semibold text-primary xl:text-3xl">{langJson.HeroSectionV3.subtitle}</h2>
            </div>
            <Button onClick={redirectToPricingTable} text={langJson.HeroSectionV3.cta} className="z-10" />
          </>
        }
      />

      {cardsType === 'all' && (
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
      )}

      {cardsType === 'one' && (
        <>
          <HorizontalPricingSection textContent={langJson.PriceTable.onePlan} couponName={PromoCodeName.Affiliates85} />

          <CtaSection textContent={langJson.CtaSection.one} />

          <FeaturesSlider
            textContent={{
              title: langJson.SecondFeaturesSection.title,
              description: langJson.SecondFeaturesSection.description,
            }}
            cardInfo={cardInfo}
          />

          <MostSecureSection textContent={langJson.MostSecureSection} showButton={false} />

          <CtaSection textContent={langJson.CtaSection.two} />

          <FAQSection textContent={langJson.FaqSection} />
        </>
      )}

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
