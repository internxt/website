import Layout from '@/components/layout/Layout';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { HeroSectionForPartner } from '@/components/affiliates/affiliates-partners-template/HeroSection';
import SecondFeaturesSection from '@/components/home/SecondFeaturesSection';
import { ClockCounterClockwise, Eye, Key, MonitorArrowUp, NumberCircleZero, ShieldCheck } from '@phosphor-icons/react';
import { DevicesSection } from '@/components/affiliates/affiliates-partners-template/DevicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { CtaSection } from '@/components/affiliates/affiliates-partners-template/CtaSection';
import { PromoCodeName } from '@/lib/types';
import AhrefsAnalytics from '@/components/shared/components/AhrefAnalytics';

export type CardsType = 'all' | 'one';

const Cloudwards = ({ langJson, homeJson, lang, metatagsDescriptions, footerLang }) => {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'cloudwards');

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
    <>
      <AhrefsAnalytics lang={lang} />

      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Affiliates" lang={lang}>
        <MinimalNavbar lang={lang} />

        <HeroSectionForPartner
          textContent={langJson.HeroSection}
          cardsType={'all'}
          pathname={'cloudwards'}
          couponName={PromoCodeName.CloudwardsCoupon}
        />

        <SecondFeaturesSection
          textContent={langJson.SecondFeaturesSection}
          lang={lang}
          cards={cardInfo}
          bgColor="bg-white"
        />

        <DevicesSection textContent={langJson.DevicesSection} />

        <TestimonialsSection textContent={homeJson.TestimonialsSection} />

        <CtaSection textContent={langJson.CtaSection['all']} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

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
    },
  };
}

export default Cloudwards;
