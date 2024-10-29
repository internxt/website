import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/black-friday/HeroSection';
import SuiteSection from '@/components/black-friday/SuiteSection';
import CtaSection from '@/components/black-friday/CtaSection';
import PlatformSection from '@/components/shared/components/PlatformSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/black-friday/FAQSection';
import BestStorageSection from '@/components/black-friday/BestStorageSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';

const BLACK_FRIDAY_METATAG_ID = 'black-friday';

const BlackFriday = ({ lang, metatagsDescriptions, langJson, navbarLang, footerLang}) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === BLACK_FRIDAY_METATAG_ID);
  const groupCards = [
    {
      icon: ShieldCheck,
      title: langJson.blackFriday.FeatureSection.feature1.title,
      description: langJson.blackFriday.FeatureSection.feature1.subtitle1,
    },
    {
      icon: LockKey,
      title: langJson.blackFriday.FeatureSection.feature2.title,
      description: langJson.blackFriday.FeatureSection.feature2.subtitle1,
    },
    {
      icon: Eye,
      title: langJson.blackFriday.FeatureSection.feature3.title,
      description: langJson.blackFriday.FeatureSection.feature3.subtitle1,
    },
    {
      icon: Fingerprint,
      title: langJson.blackFriday.FeatureSection.feature4.title,
      description: langJson.blackFriday.FeatureSection.feature4.subtitle1,
    },
  ];
  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Black Friday">
     
      <Navbar
        lang={lang}
        darkMode={true}
        isBlackfriday={true}
        textContent={navbarLang}
        cta={['Hide Login']}
        isLinksHidden
        
      />


      <HeroSection lang={lang} textContent={langJson.blackFriday} />

      <BestStorageSection textContent={langJson.blackFriday} lang={lang} />

      <SuiteSection lang={lang} textContent={langJson.blackFriday} />

      <CtaSection textContent={langJson.cta} lang={lang} />


      <TextAndCardsGroupColumnSection
        TextComponent={
          <div className="flex max-w-[930px] flex-col space-y-6 text-center">
            <p className="text-5xl font-semibold text-white">{langJson.blackFriday.FeatureSection.title}</p>
            <p className="text-xl font-regular text-gray-5">{langJson.blackFriday.FeatureSection.subtitle}</p>
          </div>
        }
        cards={groupCards}
        background='bg-highlight'
        backgroundColorForCard='bg-gray-100'
        textCardColor='text-white'
      />

     
      <PlatformSection textContent={langJson.blackFriday}  />

      <TestimonialsSection textContent={langJson.blackFriday.TestimonialsSection} 
        bgColor='bg-highlight'
        textColor='text-white'
        textComponent={
           <p className="text-center text-4xl font-semibold !leading-tight sm:text-5xl text-white">
            {langJson.blackFriday.TestimonialsSection.title}
          </p>
        }
      
      />
      
      <CtaSection textContent={langJson.cta2} lang={lang} />

      <FaqSection textContent={langJson.blackFriday}  />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor='bg-highlight' textColor='text-gray-50' logoColor='white' />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const language = ctx.locale;
  const lang =ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/${lang}/black-friday.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      footerLang,
    },
  };
}

export default BlackFriday;
